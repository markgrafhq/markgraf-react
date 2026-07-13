import _e from "react";
function b$(t) {
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
function je(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Xn = (t) => (n) => t, D = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, k$ = { map: D }, i0 = (t) => t, S$ = function(t) {
  return function(n) {
    return {}.hasOwnProperty.call(n, t);
  };
}, L$ = function(t) {
  return function(n) {
    return n[t];
  };
}, an = function(t) {
  return t.toString();
}, Do = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, df = function(t) {
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
}, s0 = (t) => t, Wn = /* @__PURE__ */ s0("LT"), qn = /* @__PURE__ */ s0("GT"), ce = /* @__PURE__ */ s0("EQ"), w = (t, n) => ({ tag: t, _1: n }), v = /* @__PURE__ */ w("Nothing"), qt = (t) => w("Just", t), I1 = (t) => {
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
}, Gi = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = o - 1; i >= 0; i--)
        r = t(e[i])(r);
      return r;
    };
  };
}, T = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = 0; i < o; i++)
        r = t(r)(e[i]);
      return r;
    };
  };
}, Fr = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => i0)(i))(s);
  })(t.pure());
}, ji = (t) => {
  const n = Fr(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Fa = {
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
  foldr: Gi,
  foldl: T,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Yt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, wi = null;
function Sn(t, n, e) {
  return t == null ? n : e(t);
}
const b = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), Vn = (t) => (n) => b(t, n), Ga = (t) => t._2, Ia = (t) => t._1, E$ = function(t) {
  return function() {
    return t;
  };
}, P$ = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return oi.pure(e(r))();
  },
  Functor0: () => A$
}, oi = { pure: E$, Apply0: () => P$ }, A$ = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, R$ = function(t) {
  return function() {
    console.log(t);
  };
}, ig = function(t) {
  return function() {
    console.warn(t);
  };
}, Nt = typeof Array.prototype.flatMap == "function" ? function(t) {
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
}, Et = (t, n) => ({ tag: t, _1: n }), F$ = (t) => Et("Left", t), D1 = (t) => Et("Right", t), G$ = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Et("Left", n._1);
    if (n.tag === "Right")
      return Et("Right", t(n._1));
    f();
  }
}, z1 = {
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
  Functor0: () => G$
}, I$ = {
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
  Apply0: () => z1
}, B$ = { pure: D1, Apply0: () => z1 }, H1 = { Applicative0: () => B$, Bind1: () => I$ }, D$ = (t) => t, z$ = { map: (t) => (n) => t(n) }, Q1 = { apply: (t) => (n) => t(n), Functor0: () => z$ }, H$ = { bind: (t) => (n) => n(t), Apply0: () => Q1 }, Q$ = { pure: D$, Apply0: () => Q1 }, Fe = { Applicative0: () => Q$, Bind1: () => H$ }, Si = (t, n) => ({ tag: t, _1: n }), u0 = (t) => Si("Loop", t), O$ = (t) => Si("Done", t), W$ = {
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
}, q$ = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, X$ = function(t) {
  return function() {
    return t;
  };
}, Y$ = function(t) {
  return function(n) {
    return function() {
      return n(t())();
    };
  };
}, M$ = { map: q$ }, U$ = { Applicative0: () => a0, Bind1: () => K$ }, K$ = { bind: Y$, Apply0: () => O1 }, O1 = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return a0.pure(e(r))();
  },
  Functor0: () => M$
}, a0 = { pure: X$, Apply0: () => O1 }, V$ = {
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
  Monad0: () => U$
}, j$ = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, Z$ = function(t, n, e, r) {
  return e >= 0 && e < r.length ? t(r[e]) : n;
}, c0 = function(t) {
  return t.length;
}, t2 = function(t, n, e) {
  return e.length > 0 ? t(e.pop()) : n;
}, n2 = function(t, n) {
  return n.push(t);
}, e2 = /* @__PURE__ */ j$(n2), r2 = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), o2 = (t) => (n) => (e) => () => {
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
}, i2 = (t) => (n) => () => {
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
var f0 = function(t) {
  return function(n) {
    return t === n;
  };
};
const s2 = f0, u2 = f0, ii = f0, Us = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, Lr = { eq: ii }, a2 = { eq: u2 }, ho = { eq: s2 };
var l0 = function(t) {
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
const c2 = l0, f2 = l0, l2 = l0, F = { compare: /* @__PURE__ */ l2(Wn)(ce)(qn), Eq0: () => Lr }, st = { compare: /* @__PURE__ */ f2(Wn)(ce)(qn), Eq0: () => a2 }, it = { compare: /* @__PURE__ */ c2(Wn)(ce)(qn), Eq0: () => ho }, eo = function(t) {
  return t;
}, g2 = /* @__PURE__ */ (function() {
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
})(), _2 = (t) => t, xo = {
  traverse: (t) => {
    const n = t.Apply0();
    return g2(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => xo.traverse(t)(_2),
  Functor0: () => k$,
  Foldable1: () => Yt
}, Vt = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var d2 = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, h2 = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const p2 = typeof Array.prototype.fill == "function" ? d2 : h2, jt = /* @__PURE__ */ (function() {
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
}, W1 = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, Uo = function(t, n, e, r) {
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
}, po = function(t, n, e, r, o) {
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
}, m2 = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, $2 = /* @__PURE__ */ (function() {
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
}, Y1 = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, It = (t) => (n) => $2(
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
), y2 = (t) => (n) => It((e) => (r) => t.compare(n(e))(n(r))), Lt = (t) => (n) => (() => {
  const e = e2(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), rr = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, v;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? w("Just", { init: At(0, t.length - 1 | 0, t), last: t[n] }) : v;
}, x2 = (t) => (n) => (e) => t >= 0 && t < e.length ? po(qt, v, t, n(e[t]), e) : v, Cr = (t) => (n) => {
  const r = ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if (a >= 0 && a < n.length) {
        if (t(n[a])) {
          i = a + 1 | 0;
          continue;
        }
        s = !1, u = w("Just", a);
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
}, Ii = (t) => (n) => {
  const e = It((r) => (o) => t(r._2)(o._2))(Xt(Vn)(n));
  return 0 < e.length ? D(Ga)(y2(it)(Ia)((() => {
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
}, v2 = (t) => (n) => {
  const e = [], o = r2(
    (i) => i >= 0 && i < n.length ? w("Just", n[i]) : v,
    { value: 0 }
  );
  return i2(o)((i) => () => {
    const s = [];
    s.push(i), o2(t(i))(o)(s)(), e.push(s);
  })(), e;
}, en = (t) => (n) => {
  const e = Uo(qt, v, t, n);
  return e.tag === "Just" ? w("Just", n[e._1]) : v;
}, ws = (t) => (n) => ht(t, n), Ne = (t) => (n) => (e) => {
  const r = Uo(qt, v, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, Ba = (t) => (n) => Nt(n)(t), bt = (t) => Ba((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), w2 = isFinite, or = Math.abs, T2 = Math.acos, Oo = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, Da = Math.ceil, fe = Math.cos, Bi = Math.exp, Oe = Math.floor, Wu = Math.log, N2 = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, Di = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, Qe = Math.round, Te = Math.sin, ne = Math.sqrt, J2 = Math.tan, C2 = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, V = function(t) {
  return t;
}, b2 = function(t) {
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
}, k2 = /* @__PURE__ */ b2(qt)(v), S2 = /* @__PURE__ */ k2(10), M1 = /* @__PURE__ */ C2(qt)(v), dn = (t) => {
  if (!w2(t))
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
}, L2 = (t, n) => ({ tag: "NonEmpty", _1: t, _2: n }), kt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Y = /* @__PURE__ */ kt("Nil"), Jn = {
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
}, E2 = function(t) {
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
}, P2 = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, A2 = { unfoldr1: /* @__PURE__ */ E2(I1)(P2)(Ia)(Ga) }, R2 = function(t) {
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
}, F2 = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, he = {
  unfoldr: /* @__PURE__ */ R2(I1)(F2)(Ia)(Ga),
  Unfoldable10: () => A2
}, Zt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), ge = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), mu = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), sg = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), G = /* @__PURE__ */ Zt("Leaf"), Xe = /* @__PURE__ */ ge("IterLeaf"), Pn = (t, n, e, r) => {
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
}, zi = (t, n, e) => {
  if (e.tag === "Leaf")
    return mu(v, G, G);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = zi(t, n, e._5);
      return mu(o._1, o._2, de(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = zi(t, n, e._6);
      return mu(o._1, de(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return mu(w("Just", e._4), e._5, e._6);
  }
  f();
}, U1 = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return sg(t, n, e);
  if (r.tag === "Node") {
    const o = U1(r._3, r._4, r._5, r._6);
    return sg(o._1, o._2, de(t, n, e, o._3));
  }
  f();
}, Zi = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = U1(t._3, t._4, t._5, t._6);
    return de(e._1, e._2, e._3, n);
  }
  f();
}, cr = (t, n, e) => {
  if (n.tag === "Leaf")
    return G;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = zi(t, e._3, n);
    return Zi(cr(t, r._2, e._5), cr(t, r._3, e._6));
  }
  f();
}, qu = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return G;
  if (r.tag === "Node") {
    const o = zi(t, r._3, e), i = qu(t, n, o._2, r._5), s = qu(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return de(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Zi(i, s);
  }
  f();
}, Yn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = zi(t, r._3, e), i = Yn(t, n, o._2, r._5), s = Yn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return de(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return de(r._3, r._4, i, s);
  }
  f();
}, K1 = (t) => (n) => (e) => {
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
          return Zi(o._5, o._6);
        if (s.tag === "Just")
          return Zt("Node", o._1, o._2, o._3, s._1, o._5, o._6);
      }
    }
    f();
  };
  return r;
}, G2 = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return G;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return de(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return Zi(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, I2 = (t) => (n) => (r) => {
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
}, Ye = /* @__PURE__ */ I2((t, n, e) => w("Just", b(b(t, n), e)))((t) => v), Wt = (t) => (n) => (e) => (r) => {
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
}, pn = (t) => (n) => n.foldl((e) => (r) => tt(t)(r._1)(r._2)(e))(G), Hi = (t) => (n) => {
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
        return Zi(r._5, r._6);
    }
    f();
  };
  return e;
}, V1 = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = zi(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Zi(i._2, i._3);
    if (s.tag === "Just")
      return de(r, s._1, i._2, i._3);
    f();
  };
}, bn = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, fr = function(t) {
  return function(n) {
    return t + n;
  };
}, Vr = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, Nn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, B2 = { append: Nn }, D2 = { mempty: [], Semigroup0: () => B2 };
function g0(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const z2 = g0(Number.prototype.toPrecision), H2 = g0(Number.prototype.toFixed), Q2 = g0(Number.prototype.toExponential), _0 = (t, n) => ({ tag: t, _1: n }), d0 = (t) => (n) => (e) => {
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
}, h0 = (t) => {
  if (t.tag === "Precision")
    return z2(t._1);
  if (t.tag === "Fixed")
    return H2(t._1);
  if (t.tag === "Exponential")
    return Q2(t._1);
  f();
};
function O2() {
  return Date.now();
}
function ug(t) {
  return new Error(t);
}
function Ks(t) {
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
function za(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function Ha(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function p0(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function m0(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function W2(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function Sc(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function Lc(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function q2(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function X2(t) {
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
function $0(t) {
  return function() {
    t.stroke();
  };
}
function y0(t) {
  return function() {
    t.fill();
  };
}
function Y2(t) {
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
function M2(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function x0(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Ss(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function hf(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function U2(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function K2(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function V2(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function Qa(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function v0(t) {
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
function Hr(t) {
  return function() {
    t.save();
  };
}
function Qr(t) {
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
function j2(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const od = (t) => t, w0 = (t) => t, T0 = (t) => t, N0 = (t) => t, Oa = (t) => t, Z2 = /* @__PURE__ */ Oa("BaselineTop"), J0 = /* @__PURE__ */ Oa("BaselineMiddle"), ty = /* @__PURE__ */ Oa("BaselineAlphabetic"), ny = /* @__PURE__ */ Oa("BaselineBottom"), ey = /* @__PURE__ */ N0("AlignLeft"), ry = /* @__PURE__ */ N0("AlignRight"), C0 = /* @__PURE__ */ N0("AlignCenter"), b0 = /* @__PURE__ */ T0("BevelJoin"), Wa = /* @__PURE__ */ T0("RoundJoin"), k0 = /* @__PURE__ */ T0("MiterJoin"), S0 = /* @__PURE__ */ w0("Round"), L0 = /* @__PURE__ */ w0("Square"), E0 = /* @__PURE__ */ w0("Butt"), oy = /* @__PURE__ */ od("SourceOver"), iy = /* @__PURE__ */ od("Difference"), P0 = (t) => (n) => V2(t)((() => {
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
})()), A0 = (t) => (n) => K2(t)((() => {
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
})()), qa = (t) => (n) => {
  if (n === "BevelJoin")
    return Lc(t)("bevel");
  if (n === "RoundJoin")
    return Lc(t)("round");
  if (n === "MiterJoin")
    return Lc(t)("miter");
  f();
}, R0 = (t) => (n) => {
  if (n === "Round")
    return Sc(t)("round");
  if (n === "Square")
    return Sc(t)("square");
  if (n === "Butt")
    return Sc(t)("butt");
  f();
}, ag = (t) => (n) => q2(t)((() => {
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
})()), sy = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldrWithIndex((o) => {
    const i = r(o);
    return (s) => {
      const u = i(s);
      return (a) => n.apply(n.Functor0().map((c) => i0)(u))(a);
    };
  })(t.pure());
}, uy = (t) => {
  const n = sy(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, F0 = {
  foldrWithIndex: (t) => (n) => {
    const e = Gi((o) => {
      const i = o._1, s = o._2;
      return (u) => t(i)(s)(u);
    })(n), r = Xt(Vn);
    return (o) => e(r(o));
  },
  foldlWithIndex: (t) => (n) => {
    const e = T((o) => (i) => t(i._1)(o)(i._2))(n), r = Xt(Vn);
    return (o) => e(r(o));
  },
  foldMapWithIndex: (t) => {
    const n = t.mempty;
    return (e) => F0.foldrWithIndex((r) => (o) => (i) => t.Semigroup0().append(e(r)(o))(i))(n);
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
}, ay = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => Yn(e, Xn, r, o);
    })()
  };
  return { mempty: G, Semigroup0: () => n };
}, Ts = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, vo = function(t) {
  return t.join("");
}, Gr = function(t) {
  return t.split("");
}, ts = function(t) {
  return t;
}, hr = function(t) {
  return t.length;
}, cg = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, Qi = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, id = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, cy = (t) => (n) => {
  const e = id(hr(n) - hr(t) | 0)(n);
  return e.after === t ? w("Just", e.before) : v;
}, wo = (t) => (n) => {
  const e = id(hr(t))(n);
  return e.before === t ? w("Just", e.after) : v;
}, sd = (t) => ({
  bind: (n) => (e) => t.Bind1().bind(n)((r) => {
    if (r.tag === "Left")
      return t.Applicative0().pure(Et("Left", r._1));
    if (r.tag === "Right")
      return e(r._1);
    f();
  }),
  Apply0: () => ud(t)
}), ud = (t) => {
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
      const r = sd(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => G0(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, G0 = (t) => ({ pure: (n) => t.Applicative0().pure(Et("Right", n)), Apply0: () => ud(t) }), fy = (t) => {
  const n = { Applicative0: () => G0(t), Bind1: () => sd(t) };
  return { throwError: (e) => t.Applicative0().pure(Et("Left", e)), Monad0: () => n };
};
function fg(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const ly = (t, n, e) => ({ tag: t, _1: n, _2: e }), gy = (t) => (n) => (e) => fg(e) === n ? G0(t).pure(e) : fy(t).throwError(L2(ly("TypeMismatch", n, fg(e)), Y)), _y = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, dy = function(t) {
  return t();
}, ns = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, Vs = function(n) {
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
}, I0 = function(n) {
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
}, hy = function(n) {
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
}, py = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, my = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, Ko = (t) => BigInt(t), $y = (t) => Number(t), Ru = (t) => (n) => t + n, Fu = (t) => (n) => t * n, pf = (t) => (n) => t - n, ad = 0n, Xu = 1n, cd = (t) => (n) => t ^ n, Ls = (t) => (n) => t & n, B0 = (t) => (n) => t << n, mf = (t) => (n) => t >> n, yy = (t) => (n) => t == n, xy = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, vy = { eq: yy }, lg = {
  compare: (t) => (n) => {
    const e = xy(t)(n);
    return e === 1 ? qn : e === 0 ? ce : Wn;
  },
  Eq0: () => vy
}, wy = /* @__PURE__ */ py(qt)(v), Ty = /* @__PURE__ */ my(qt)(v), Yu = function(t) {
  throw new Error(t);
}, fd = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = st.compare(n._1)(e._1);
      return r === "LT" ? Wn : r === "GT" ? qn : st.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), Ny = (t) => (n) => or(t._1 - n._1) + or(t._2 - n._2), si = (t) => t, Xa = (t) => t, In = /* @__PURE__ */ Xa("North"), Bn = /* @__PURE__ */ Xa("South"), Or = /* @__PURE__ */ Xa("East"), Wr = /* @__PURE__ */ Xa("West"), Xr = /* @__PURE__ */ si("Rectangle"), gg = /* @__PURE__ */ si("Cylinder"), Jy = /* @__PURE__ */ si("Parallelogram"), Cy = /* @__PURE__ */ si("Diamond"), by = /* @__PURE__ */ si("Ellipse"), _g = /* @__PURE__ */ si("Document"), ky = /* @__PURE__ */ si("Cloud"), ld = /* @__PURE__ */ T(fr)(0), Sy = (t) => (n) => (e) => {
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
}, ao = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Mu = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, dg = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ly = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, Vo = (t) => (n) => {
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
  ), r = ld(D((s) => s.len)(e)), o = Sy(0)(r)(n * r), i = (s) => (u) => (a) => {
    let c = s, l = u, _ = a, d = !0, g;
    for (; d; ) {
      const p = c, m = l, h = _, $ = Ht((x) => v, (x) => (y) => w("Just", { head: x, tail: y }), p);
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
  return 0 < t.length ? w("Just", i(e)(o)(t[0])) : v;
}, Ey = (t) => (n) => {
  const e = ao(1e-6)(t.scale);
  return { x: (n.x - t.tx) / e, y: (n.y - t.ty) / e, w: n.w / e, h: n.h / e };
}, Ya = (t) => ld(Ln(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return ne(o * o + r * r);
  },
  t,
  At(1, t.length, t)
)), Py = (t) => (n) => {
  const e = ao(4)(0.15 * Mu(n.w)(n.h)), r = ao(1)(t.w), o = ao(1)(t.h), i = ao(1)(n.w - 2 * e), s = ao(1)(n.h - 2 * e), u = Mu(i / r)(s / o);
  return { scale: u, tx: n.x + e + (i - r * u) / 2 - t.x * u, ty: n.y + e + (s - o * u) / 2 - t.y * u };
}, D0 = { scale: 1, tx: 0, ty: 0 }, hn = (t) => {
  const n = Ht(
    (e) => v,
    (e) => (r) => w("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, kt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Nt(jt(Jn.foldr, e(t.nodes, Y)))(Ly);
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
    const e = T((r) => (o) => ({ minX: Mu(r.minX)(o.x), minY: Mu(r.minY)(o.y), maxX: ao(r.maxX)(o.x), maxY: ao(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Ay = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, a = i, c = !0, l;
  for (; c; ) {
    const _ = s, d = u, g = a, p = Ht((m) => v, (m) => (h) => w("Just", { head: m, tail: h }), d);
    if (p.tag === "Nothing") {
      c = !1, l = g;
      continue;
    }
    if (p.tag === "Just") {
      const m = dg(p._1.head)(_.interiors);
      if (m.tag === "Nothing") {
        c = !1, l = g;
        continue;
      }
      if (m.tag === "Just") {
        s = m._1, u = p._1.tail, a = (() => {
          const h = Py(hn(m._1.layout))((() => {
            const $ = dg(p._1.head)(_.layout.nodes);
            if ($.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Xr };
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
})(t)(n)(D0), Ry = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Fy = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Gu = (t) => (n) => (e) => {
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
}, Gy = (t) => (n) => (e) => (r) => {
  const o = hn(n);
  return e <= 0 || r <= 0 || o.w <= 0 || o.h <= 0 ? 1 : t ? Ry(o.w / e)(o.h / r) : Fy(o.w / e)(o.h / r);
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
}, hg = (t) => (n) => (e) => (r) => (o) => {
  const i = t + o / 2, s = t + n - o / 2, u = t + n / 2, a = e + r / 2;
  return o >= n ? u : Gu(i)(s)(a);
}, _d = (t) => (n) => (e) => (r) => {
  const o = hn(t);
  return { x: hg(o.x)(o.w)(n.x)(n.w)(e), y: hg(o.y)(o.h)(n.y)(n.h)(r) };
}, dd = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: Gy(t)(n)(e.w)(e.h) }), Iy = (t) => (n) => (e) => (r) => {
  const o = { x: r.x - t.padding, y: r.y - t.padding, w: r.w + t.padding * 2, h: r.h + t.padding * 2 }, i = gd(n)(0.65)(o), s = _d(e)(o)(i.w)(i.h), u = { x: s.x - i.w / 2, y: s.y - i.h / 2, w: i.w, h: i.h };
  return { focus: r, paddedFocus: o, viewport: u, camera: dd(n.widthPx > 0 && n.heightPx > 0)(e)(u) };
}, By = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = hn(r), u = { x: s.x * o.scale + o.tx, y: s.y * o.scale + o.ty, w: s.w * o.scale, h: s.h * o.scale }, a = t.padding * o.scale, c = { x: u.x - a, y: u.y - a, w: u.w + a * 2, h: u.h + a * 2 }, l = gd(n)(0.7)(c), _ = _d(e)(c)(l.w)(l.h), d = { x: _.x - l.w / 2, y: _.y - l.h / 2, w: l.w, h: l.h };
  return { footprint: u, viewport: d, camera: dd(n.widthPx > 0 && n.heightPx > 0)(e)(d) };
}, hd = (t) => t, Dy = (t, n) => ({ tag: t, _1: n }), z0 = (t) => t, rs = (t, n) => ({ tag: t, _1: n }), H0 = (t, n) => ({ tag: t, _1: n }), js = /* @__PURE__ */ z0("Animated"), zy = /* @__PURE__ */ z0("StaticStill"), Hy = /* @__PURE__ */ z0("TitleCard"), Qy = /* @__PURE__ */ H0("First"), pg = /* @__PURE__ */ hd("Forward"), mg = /* @__PURE__ */ hd("Backward"), Oy = /* @__PURE__ */ rs("ExitNode"), pd = /* @__PURE__ */ pn(F)(Yt), Wy = (t) => Gi((n) => (e) => ({
  nodes: Yn(F.compare, Xn, n.nodes, e.nodes),
  edges: Yn(F.compare, Xn, n.edges, e.edges)
}))({ nodes: G, edges: G })(t.keyframes), qy = (t) => (n) => ({
  entering: {
    nodes: cr(F.compare, n.nodes, t.nodes),
    edges: cr(F.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: cr(F.compare, t.nodes, n.nodes),
    edges: cr(F.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: qu(F.compare, Xn, t.nodes, n.nodes),
    edges: qu(F.compare, Xn, t.edges, n.edges)
  }
}), Uu = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Oi = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ku = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $f = (t) => (e) => {
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
}, Xy = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), Yy = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), My = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $g = /* @__PURE__ */ pn(F)(Yt), Ma = (t) => {
  const n = Ht((e) => v, (e) => (r) => w("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = T((r) => (o) => ({ minX: Uu(r.minX)(o.x), minY: Uu(r.minY)(o.y), maxX: Oi(r.maxX)(o.x), maxY: Oi(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Uy = (t) => (n) => (e) => Xy(Nt(jt(be.foldr, e))((r) => {
  const o = Ku(r)(t);
  if (o.tag === "Just")
    return ht((i) => !$f(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), Ky = (t) => t.kind.tag === "SendToken" ? w("Just", b(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : v, Vy = (t) => t.tag === "DataFlow" ? bt(Ky)(t._1.events) : [], jy = (t) => (n) => Yy(bt((e) => $f(e._2.source)(n) || $f(e._2.target)(n) ? w("Just", e._1) : v)(My(t))), jr = (t) => {
  const n = Ht((e) => v, (e) => (r) => w("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = T((r) => (o) => ({ minX: Uu(r.minX)(o.x), minY: Uu(r.minY)(o.y), maxX: Oi(r.maxX)(o.x + o.w), maxY: Oi(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Q0 = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return hn(t);
  const r = jy(n)(e), o = [
    ...bt((i) => {
      const s = md(i)(t.nodes);
      return s.tag === "Just" ? w("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
    })(jt(
      be.foldr,
      Yn(F.compare, Xn, e, Uy(n)(e)(r))
    )),
    ...bt((i) => {
      const s = Ku(i)(t.edges);
      return s.tag === "Just" ? w("Just", Ma(s._1)) : v;
    })(jt(be.foldr, r))
  ];
  return o.length === 0 ? hn(t) : jr(o);
}, $d = (t) => (n) => (e) => {
  const r = [
    ...bt((o) => o)([
      (() => {
        const o = Ku(e)(t.edges);
        return o.tag === "Just" ? w("Just", Ma(o._1)) : v;
      })()
    ]),
    ...(() => {
      const o = Ku(e)(n);
      if (o.tag === "Just")
        return bt((i) => {
          const s = md(i)(t.nodes);
          return s.tag === "Just" ? w("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? Q0(t)(n)(G) : jr(r);
}, To = (t) => (n) => {
  const e = hn(t), r = e.w / Oi(1e-4)(n.zoom), o = e.h / Oi(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, Zy = (t) => Yn(
  F.compare,
  Xn,
  $g(D((n) => b(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  $g(Nt(t.scenes)(Vy))
), O0 = (t) => t, tx = (t) => t, W0 = /* @__PURE__ */ O0("Linear"), jo = /* @__PURE__ */ O0("EaseInOutQuad"), nx = /* @__PURE__ */ O0("SpringBouncy"), Es = (t) => (n) => (e) => {
  const r = ne(1 - n * n), o = t * r;
  return 1 - Bi(-n * t * e) * (fe(o * e) + n / r * Te(o * e));
}, ex = (t) => {
  const n = st.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = st.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, mo = (t) => (n) => (() => {
  if (t === "Linear")
    return tx;
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
    return (e) => e >= 1 ? 1 : 1 - Di(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Bi(-6 * e);
  if (t === "SpringBouncy")
    return Es(6)(0.7);
  f();
})()(ex(n)), Ua = (t) => t, yd = (t) => t, xd = (t) => t, ir = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Zs = (t) => (n) => (e) => {
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
}, q0 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, rx = (t) => (n) => {
  const e = it.compare(t._1)(n._1);
  return e === "LT" ? Wn : e === "GT" ? qn : st.compare(t._2)(n._2);
}, ox = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ix = /* @__PURE__ */ xd("Hold"), sx = /* @__PURE__ */ xd("Gap"), $o = /* @__PURE__ */ yd("LinearLerp"), yg = /* @__PURE__ */ yd("StagedLogLerp"), yf = /* @__PURE__ */ Ua("Overview"), vd = /* @__PURE__ */ Ua("DiveHome"), xg = /* @__PURE__ */ Ua("DiveTransition"), Ka = /* @__PURE__ */ Ua("ActionFocus"), ux = (t) => (n) => {
  const e = hn(t), r = e.h / ir(1e-6)(n.zoom), o = e.w / ir(1e-6)(n.zoom);
  return { x: n.center.x - o / 2, y: n.center.y - r / 2, w: o, h: r };
}, ax = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = ne(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return Zs(t.minTransition)(t.maxTransition)(ir(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, cx = (t) => ({ startT: t.startT, endT: t.endT, fromCam: t.fromCam, toCam: t.toCam, easing: t.easing, interp: t.interp, intent: t.intent }), wd = (t) => (n) => mo(jo)(Zs(0)(1)((n - t) / ir(1e-4)(1 - t))), Td = (t) => (n) => mo(jo)(Zs(0)(1)(n / ir(1e-4)(t))), fx = /* @__PURE__ */ T((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Lt(t)(n);
})([]), lx = (t) => (n) => {
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
}, gx = (t) => (n) => t.tag === "Just" ? n.tag === "Just" && lx(t._1)(n._1) : t.tag === "Nothing" && n.tag === "Nothing", vg = (t) => (n) => (e) => (r) => ({
  center: { x: r.center.x * e.scale + e.tx, y: r.center.y * e.scale + e.ty },
  zoom: r.zoom * hn(t).w / ir(1e-6)(e.scale * hn(n).w)
}), Nd = (t) => (n) => (e) => (r) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Bi((() => {
    const o = Wu(ir(1e-6)(t.zoom));
    return o + (Wu(ir(1e-6)(n.zoom)) - o) * r;
  })())
}), _x = /* @__PURE__ */ T((t) => (n) => {
  if (t.tag === "Nothing")
    return w("Just", n);
  if (t.tag === "Just")
    return n.endT > t._1.endT ? w("Just", n) : w("Just", t._1);
  f();
})(v), Jd = (t) => (n) => (e) => (r) => {
  const o = Bi(-t * n);
  return {
    center: { x: r.center.x + (e.center.x - r.center.x) * o, y: r.center.y + (e.center.y - r.center.y) * o },
    zoom: Bi((() => {
      const i = Wu(ir(1e-6)(r.zoom));
      return i + (Wu(ir(1e-6)(e.zoom)) - i) * o;
    })())
  };
}, dx = (t) => (n) => (e) => n.zoom >= t.zoom ? wd(0.18000000000000005)(e) : Td(0.82)(e), hx = (t) => (n) => (e) => n.zoom >= t.zoom ? Td(0.28)(e) : wd(0.72)(e), px = (t) => (n) => (e) => Nd(t)(n)(hx(t)(n)(e))(dx(t)(n)(e)), mx = (t) => (n) => (e) => {
  const r = e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT), o = mo(e.easing)(Zs(0)(1)(r));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * o, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * o },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * o
    };
  if (e.interp === "LogLerp")
    return Nd(e.fromCam)(e.toCam)(o)(o);
  if (e.interp === "StagedLogLerp")
    return px(e.fromCam)(e.toCam)(r);
  f();
}, $x = { widthPx: 0, heightPx: 0 }, Va = {
  padding: 24,
  easing: W0,
  minimumReadableLabelPx: 11,
  minimumVisibleLabelPx: 5,
  labelBasePx: 11,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 6
}, mi = (t) => (n) => (e) => (r) => (o) => {
  const i = ux(e)(r), s = o.x - t.padding, u = o.y - t.padding;
  return s >= i.x && u >= i.y && s + o.w + t.padding * 2 <= i.x + i.w && u + o.h + t.padding * 2 <= i.y + i.h;
}, yx = (t) => (n) => (e) => (r) => (o) => F0.foldlWithIndex((i) => (s) => (u) => {
  const a = (() => {
    if (u.kind === "Hold") {
      const c = (() => {
        if (u.focus.tag === "Just") {
          if (u.intent === "ActionFocus")
            return mi(t)(n)(e)(s.prev)(u.focus._1) ? s.prev : mi(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1) ? { ...u.toCam, center: s.prev.center } : {
              ...u.toCam,
              center: {
                ...u.toCam.center,
                x: (() => {
                  const l = hn(e).w / ir(1e-6)(u.toCam.zoom);
                  if (l <= 0)
                    return u.toCam.center.x;
                  const _ = u.focus._1.x + u.focus._1.w / 2, d = n.widthPx <= 0 ? 0 : q0(l / 4)(6 * l / n.widthPx), g = s.prev.center.x + l / 2 - d, p = _ < s.prev.center.x - l / 2 + d ? _ - d + l / 2 : _ > g ? _ + d - l / 2 : s.prev.center.x, m = hn(e);
                  return l >= m.w ? m.x + m.w / 2 : Zs(m.x + l / 2)(m.x + m.w - l / 2)(p);
                })()
              }
            };
          if (mi(t)(n)(e)(s.prev)(u.focus._1))
            return s.prev;
          if (mi(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
        }
        return u.toCam;
      })();
      return { startT: u.startT, endT: u.endT, fromCam: c, toCam: c, easing: u.easing, interp: $o, focus: u.focus, intent: u.intent };
    }
    if (u.kind === "Gap")
      return {
        startT: u.startT,
        endT: u.endT,
        fromCam: s.prev,
        toCam: (() => {
          const c = i + 1 | 0, l = Uo(qt, v, (_) => _.kind === "Hold", c < 1 ? o : At(c, o.length, o));
          if (l.tag === "Just") {
            const _ = (i + 1 | 0) + l._1 | 0;
            return _ >= 0 && _ < o.length ? (() => {
              if (o[_].focus.tag === "Just")
                return mi(t)(n)(e)(s.prev)(o[_].focus._1);
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
        interp: $o,
        focus: v,
        intent: u.intent
      };
    f();
  })();
  return { acc: Lt(s.acc)(a), prev: a.toCam };
})({ acc: [], prev: r })(o).acc, xx = (t) => (n) => (e) => (r) => (o) => {
  const i = (u, a) => q0(ax(t)(u.toCam)(a.toCam))(u.endT - u.startT), s = T((u) => (a) => {
    if (u.pending.tag === "Nothing")
      return { acc: u.acc, pending: w("Just", a) };
    if (u.pending.tag === "Just")
      return !(a.fromCam.zoom === a.toCam.zoom && a.fromCam.center.x === a.toCam.center.x && a.fromCam.center.y === a.toCam.center.y) || (() => {
        if (a.focus.tag === "Just")
          return mi(t)(n)(e)(u.pending._1.toCam)(a.focus._1);
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
      })() || i(u.pending._1, a) <= 0 ? { acc: Lt(u.acc)(u.pending._1), pending: w("Just", a) } : {
        acc: Lt(Lt(u.acc)({ ...u.pending._1, endT: a.startT - i(u.pending._1, a) }))({
          startT: a.startT - i(u.pending._1, a),
          endT: a.startT,
          fromCam: u.pending._1.toCam,
          toCam: a.toCam,
          easing: a.easing,
          interp: $o,
          focus: a.focus,
          intent: a.intent
        }),
        pending: w("Just", a)
      };
    f();
  })({ acc: [], pending: v })(o);
  if (s.pending.tag === "Nothing")
    return s.acc;
  if (s.pending.tag === "Just")
    return Lt(s.acc)(s.pending._1);
  f();
}, vx = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = hn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : q0(i.w / r)(i.h / o);
}, wx = (t) => (n) => {
  if (t.tag === "Just") {
    if (n.tag === "Just")
      return w("Just", jr([t._1, n._1]));
    if (n.tag === "Nothing")
      return w("Just", t._1);
    f();
  }
  if (t.tag === "Nothing") {
    if (n.tag === "Just")
      return w("Just", n._1);
    if (n.tag === "Nothing")
      return v;
  }
  f();
}, Tx = /* @__PURE__ */ T((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? w("Just", t[e]) : v;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (!(r._1.intent === "ActionFocus" || n.intent === "ActionFocus") || (r._1.intent === "Overview" ? n.intent === "Overview" : r._1.intent === "DiveHome" ? n.intent === "DiveHome" : r._1.intent === "DiveTransition" ? n.intent === "DiveTransition" : r._1.intent === "ActionFocus" && n.intent === "ActionFocus") && gx(r._1.focus)(n.focus)) && (() => {
    const o = r._1.toCam.center.x - n.toCam.center.x;
    return (o < 0 ? -o < 8 : o < 8) && (() => {
      const i = r._1.toCam.center.y - n.toCam.center.y;
      return (i < 0 ? -i < 8 : i < 8) && (() => {
        const s = r._1.toCam.zoom - n.toCam.zoom;
        return s < 0 ? -s < 0.08 : s < 0.08;
      })();
    })();
  })() ? Lt((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : At(0, o, t);
  })())({ ...r._1, endT: n.endT, focus: wx(r._1.focus)(n.focus) }) : Lt(t)(n);
})([]), Nx = (t) => {
  const n = It((e) => (r) => rx(b(
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
  return 0 < n.length ? w("Just", n[0]) : v;
}, xf = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: ir(r)(vx(n)(e)(t.padding)) }), Jx = (t) => (n) => (e) => (r) => (o) => {
  const i = xf(t)(e)(hn(e))(0), s = ht(
    (a) => a >= 0 && a <= r,
    fx(It(st.compare)([0, r, ...Nt(o)((a) => [a.startT, a.endT])]))
  ), u = (a, c) => En((l) => l.priority >= 1, ht((l) => l.startT <= c && c < l.endT, o)) ? Iy(t)(n)(e)(jr(a)).camera : xf(t)(e)(jr(a))(0);
  return D(cx)(xx(t)(n)(e)(i)(Tx(yx(t)(n)(e)(i)(bt((a) => {
    const c = (a._1 + a._2) / 2;
    if (a._2 <= a._1)
      return v;
    const l = D((_) => _.bbox)(ht(
      (_) => _.priority === T(ox)(0)(D((d) => d.priority)(ht(
        (d) => d.startT <= c && c < d.endT,
        o
      ))),
      ht((_) => _.startT <= c && c < _.endT, o)
    ));
    return l.length === 0 ? w(
      "Just",
      { kind: sx, startT: a._1, endT: a._2, fromCam: i, toCam: i, easing: t.easing, focus: v, intent: yf }
    ) : w(
      "Just",
      {
        kind: ix,
        startT: a._1,
        endT: a._2,
        fromCam: u(l, c),
        toCam: u(l, c),
        easing: t.easing,
        focus: w("Just", jr(l)),
        intent: En((_) => _.priority >= 1, ht((_) => _.startT <= c && c < _.endT, o)) ? Ka : yf
      }
    );
  })(Ln(Vn, s, At(1, s.length, s)))))));
}, Wi = (t) => (n) => (e) => (r) => {
  const o = Nx(ht((i) => r >= i.startT && r < i.endT, e));
  if (o.tag === "Just")
    return { camera: mx()(r)(o._1), intent: o._1.intent };
  if (o.tag === "Nothing") {
    const i = _x(e);
    return i.tag === "Just" && r >= i._1.endT ? { camera: i._1.toCam, intent: i._1.intent } : {
      camera: (() => {
        const s = xf(t)(n)(hn(n))(0);
        return 0 < e.length ? e[0].fromCam : s;
      })(),
      intent: 0 < e.length ? e[0].intent : yf
    };
  }
  f();
};
function br(t) {
  return t.charCodeAt(0);
}
function X0(t) {
  return String.fromCharCode(t);
}
const Cx = (t) => t >= 0 && t <= 65535 ? w("Just", X0(t)) : v, Ze = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, No = function(t) {
  return function(n) {
    return n.split(t);
  };
}, ja = function(t) {
  return t.trim();
}, Ir = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var bx = typeof Array.from == "function", kx = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", Sx = typeof String.prototype.fromCodePoint == "function", Lx = typeof String.prototype.codePointAt == "function";
const Ex = function(t) {
  return Lx ? function(n) {
    return n.codePointAt(0);
  } : t;
}, Px = function(t) {
  return Sx ? String.fromCodePoint : t;
}, Ax = function(t) {
  return function(n) {
    return kx ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, Rx = function(t) {
  return function(n) {
    return bx ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, Za = (t) => {
  const n = hr(t);
  if (n === 0)
    return v;
  if (n === 1)
    return w("Just", { head: br(Ts(0)(t)), tail: "" });
  const e = br(Ts(1)(t)), r = br(Ts(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? w("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: Qi(2)(t) }) : w("Just", { head: r, tail: Qi(1)(t) });
}, Fx = (t) => {
  const n = Za(t);
  return n.tag === "Just" ? w("Just", b(n._1.head, n._1.tail)) : v;
}, Gx = (t) => he.unfoldr(Fx)(t), Ix = (t) => {
  const n = br(Ts(0)(t));
  if (55296 <= n && n <= 56319 && hr(t) > 1) {
    const e = br(Ts(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Cd = /* @__PURE__ */ Ex(Ix), os = /* @__PURE__ */ Rx(Gx)(Cd), Bx = (t) => os(t).length, Ec = (t) => ts(t >= 0 && t <= 65535 ? X0(t) : t < 0 ? "\0" : "\uffff"), Dx = (t) => t <= 65535 ? Ec(t) : Ec(je(t - 65536 | 0, 1024) + 55296 | 0) + Ec(Vr(t - 65536 | 0)(1024) + 56320 | 0), zx = /* @__PURE__ */ Px(Dx), bd = (t) => (n) => {
  if (t < 1)
    return "";
  const e = Za(n);
  return e.tag === "Just" ? zx(e._1.head) + bd(t - 1 | 0)(e._1.tail) : n;
}, On = /* @__PURE__ */ Ax(bd), Hx = (t) => (n) => n === "" ? v : w("Just", Cd(n)), kd = (t) => t, Vu = (t, n) => ({ tag: t, _1: n }), ve = (t, n, e) => ({ tag: t, _1: n, _2: e }), Sd = (t) => t, Ti = (t, n, e, r, o, i, s, u, a) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: a }), vf = /* @__PURE__ */ Sd("PlopIn"), Qx = /* @__PURE__ */ Sd("PlopOut"), Ox = /* @__PURE__ */ kd("DiveIn"), Wx = /* @__PURE__ */ kd("DiveOut"), Ni = (t, n, e) => ({ tag: t, _1: n, _2: e }), qx = (t) => t, Ji = (t, n) => ({ tag: t, _1: n }), Y0 = (t) => t, ju = (t, n) => ({ tag: t, _1: n }), Pc = /* @__PURE__ */ ju("NotYet"), wg = /* @__PURE__ */ ju("Consumed"), Xx = /* @__PURE__ */ Y0("FromSource"), Tg = /* @__PURE__ */ Y0("FromTarget"), Yx = /* @__PURE__ */ Y0("FromBoth"), Ac = /* @__PURE__ */ Ji("Hidden"), Mx = /* @__PURE__ */ Ji("Visible"), wf = /* @__PURE__ */ qx("ExtendFromSource"), Rc = /* @__PURE__ */ Ni("Retracted"), Ld = /* @__PURE__ */ Ni("Extended"), Ux = {
  eq: (t) => (n) => t.tag === "Retracted" ? n.tag === "Retracted" : t.tag === "Extending" ? n.tag === "Extending" && (t._1 === "ExtendFromSource" ? n._1 === "ExtendFromSource" : t._1 === "ExtendFromTarget" && n._1 === "ExtendFromTarget") && t._2 === n._2 : t.tag === "Extended" ? n.tag === "Extended" : t.tag === "Retracting" && n.tag === "Retracting" && (t._1 === "FromSource" ? n._1 === "FromSource" : t._1 === "FromTarget" ? n._1 === "FromTarget" : t._1 === "FromBoth" && n._1 === "FromBoth") && t._2 === n._2
}, M0 = (t) => t, Ed = /* @__PURE__ */ pn(F)(Yt), Ps = { eq: /* @__PURE__ */ Us(ii) }, U0 = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Pd = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Kx = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Tf = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), lr = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, zo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ng = Yt.foldMap(ay(F)), Ad = (t) => (n) => (e) => {
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
}, Vx = (t) => (e) => {
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
}, jx = (t) => (e) => {
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
}, Zx = /* @__PURE__ */ pn(F)(Yt), tv = /* @__PURE__ */ pn(F)(Yt), Rd = /* @__PURE__ */ M0("Backdrop"), nv = /* @__PURE__ */ M0("FlyThrough"), Se = /* @__PURE__ */ M0("Active"), ev = (t) => (n) => (e) => ({ ...e, state: { ...e.state, edgeFadeAlpha: Ed(D((r) => b(r, n))(t)) } }), Jg = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, a = s - u, c = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : c <= a ? e : r + i * (s - u * Bi(-(c - a) / u));
}, Zu = (t) => (n) => (e) => {
  const r = en((o) => Ps.eq(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return w("Just", r._1);
  if (r.tag === "Nothing")
    return en((o) => Ps.eq(o.path)(n))(t.segments);
  f();
}, rv = (t) => (n) => {
  if (n.scene.tag === "Structural")
    return n.scene._1.to;
  if (n.scene.tag === "DataFlow")
    return n.scene._1.keyframe;
  if (n.scene.tag === "Hold")
    return n.scene._1;
  if (n.scene.tag === "EnterNode" || n.scene.tag === "ExitNode" || n.scene.tag === "StepScene")
    return t;
  f();
}, ov = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: D0,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: G
}), iv = (t) => D((n) => n < 1 ? [] : At(0, n, t))(Vt(0, t.length - 1 | 0)), Fc = (t) => (n) => {
  const e = U0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return G;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, Gc = (t) => (n) => {
  const e = U0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return G;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, sv = (t) => (n) => {
  const e = [
    ...bt((r) => {
      if (r._2.tag === "Hidden")
        return v;
      const o = Pd(r._1)(t.layout.nodes);
      return o.tag === "Just" ? w(
        "Just",
        (() => {
          const i = o._1.x * t.placement.scale + t.placement.tx, s = o._1.y * t.placement.scale + t.placement.ty;
          return { x: i, y: s, w: (o._1.x + o._1.w) * t.placement.scale + t.placement.tx - i, h: (o._1.y + o._1.h) * t.placement.scale + t.placement.ty - s };
        })()
      ) : v;
    })(Tf(n.nodes)),
    ...bt((r) => {
      if (r._2.tag === "Retracted")
        return v;
      const o = Kx(r._1)(t.layout.edges);
      return o.tag === "Just" ? w(
        "Just",
        (() => {
          const i = Ma(o._1), s = i.x * t.placement.scale + t.placement.tx, u = i.y * t.placement.scale + t.placement.ty;
          return { x: s, y: u, w: (i.x + i.w) * t.placement.scale + t.placement.tx - s, h: (i.y + i.h) * t.placement.scale + t.placement.ty - u };
        })()
      ) : v;
    })(Tf(n.edges))
  ];
  return e.length === 0 ? v : w("Just", jr(e));
}, uv = /* @__PURE__ */ T((t) => (n) => {
  const e = rr(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Lt(e._1.init)({ ...e._1.last, endT: lr(e._1.last.endT)(n.endT), windows: Lt(e._1.last.windows)(n) }) : Lt(t)({ endT: n.endT, windows: [n] });
})([]), av = (t) => (n) => {
  const e = lr(t.lo)(n.lo), r = zo(t.hi)(n.hi);
  return e <= r ? { lo: e, hi: r } : t;
}, cv = (t) => (n) => (e) => Ng((r) => Ng((o) => o.target.tag === "FillWindow" ? o.startT <= e ? Zt("Node", 1, 1, o.target._2, void 0, G, G) : G : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? Zt("Node", 1, 1, o.target._4, void 0, G, G) : G)(r.windows))(ht(
  (r) => e <= r.endT + t,
  uv(It((r) => (o) => st.compare(r.startT)(o.startT))(ht(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), fv = (t) => (n) => (e) => En(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), lv = (t) => (n) => (e) => En((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), gv = (t) => (n) => (e) => En((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), _v = (t) => (n) => (e) => En(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), ta = (t) => (n) => (e) => en((r) => e(r) && n >= r.startT && n < r.endT)(t), tc = (t) => (n) => {
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
    return ve("AtKeyframe", T(rv)(t.initialKeyframe)(t.spans));
  f();
}, dv = (t) => (n) => {
  const e = tc(t)(n), r = U0((() => {
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
}, hv = (t) => (n) => {
  const e = tc(t)(n);
  if (e.tag === "AtKeyframe")
    return On(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return On(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, pv = {
  nodes: G,
  edges: G,
  tokens: G,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: js,
  visited: G,
  nodeFadeAlpha: G,
  nodeLabelFadeAlpha: G,
  edgeFadeAlpha: G,
  nodeInvert: G
}, mv = { nodes: G, edges: G, chipExtras: G, edgeLabels: G }, $v = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: mv,
    placement: D0,
    windows: [],
    spans: [],
    keyframes: G,
    initialKeyframe: "",
    edgeEndpoints: G
  },
  state: pv,
  bgAlpha: 1,
  blur: 0,
  minis: [],
  role: Se
}, na = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : $v;
}, yv = (t) => (n) => {
  const e = Pd(n)(t.nodes);
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
    })() ? w("Just", i._1) : v)(Tf(t.edges));
  }
  f();
}, xv = (t) => (n) => {
  const e = tc(t)(n);
  if (e.tag === "AtKeyframe")
    return Fc(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(F.compare, Xn, Fc(t)(e._1), Fc(t)(e._2));
  f();
}, vv = (t) => (n) => {
  const e = tc(t)(n);
  if (e.tag === "AtKeyframe")
    return Gc(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(F.compare, Xn, Gc(t)(e._1), Gc(t)(e._2));
  f();
}, wv = (t) => (n) => (e) => (r) => {
  const o = hn(t).w / lr(1e-4)(r.zoom), i = hn(n.layout), s = i.x * n.placement.scale + n.placement.tx, u = (() => {
    const c = (() => {
      const l = i.y * n.placement.scale + n.placement.ty;
      return { x: s, y: l, w: (i.x + i.w) * n.placement.scale + n.placement.tx - s, h: (i.y + i.h) * n.placement.scale + n.placement.ty - l };
    })();
    return o >= c.w ? { lo: c.x + c.w - o / 2, hi: c.x + o / 2 } : { lo: c.x + o / 2, hi: c.x + c.w - o / 2 };
  })(), a = sv(n)(e);
  if (a.tag === "Nothing")
    return r;
  if (a.tag === "Just") {
    if (o >= a._1.w) {
      const c = av(u)(o >= a._1.w ? { lo: a._1.x + a._1.w - o / 2, hi: a._1.x + o / 2 } : { lo: a._1.x + o / 2, hi: a._1.x + a._1.w - o / 2 });
      return { ...r, center: { ...r.center, x: Ad(c.lo)(c.hi)(r.center.x) } };
    }
    return r;
  }
  f();
}, Tv = (t) => (n) => (e) => {
  const r = hn(t), o = r.h / lr(1e-4)(e.zoom), i = r.w / lr(1e-4)(e.zoom);
  return {
    ...e,
    center: {
      x: i >= n.w ? n.x + n.w / 2 : Jg(n.x + i / 2)(n.x + n.w - i / 2)(e.center.x),
      y: o >= n.h ? n.y + n.h / 2 : Jg(n.y + o / 2)(n.y + n.h - o / 2)(e.center.y)
    }
  };
}, Nv = (t) => (n) => (e) => Tv(t)((() => {
  const r = n * e.placement.scale, o = hn(e.layout), i = (() => {
    const s = o.x * e.placement.scale + e.placement.tx, u = o.y * e.placement.scale + e.placement.ty;
    return { x: s, y: u, w: (o.x + o.w) * e.placement.scale + e.placement.tx - s, h: (o.y + o.h) * e.placement.scale + e.placement.ty - u };
  })();
  return { x: i.x - r, y: i.y - r, w: i.w + r * 2, h: i.h + r * 2 };
})()), Jv = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : lr(0)(zo(1)((n - t.startT) / e));
}, qi = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : lr(0)(zo(1)((n - t.startT) / e));
}, Cv = (t) => (n) => (e) => (r) => (o) => {
  const i = ta(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._2.tag === "Retract" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = mo(t.timing.edgeEasing)(qi(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : Vu("Extend", wf);
    if (u.tag === "Retract")
      return Ni("Retracting", u._1, s);
    if (u.tag === "Extend")
      return Ni("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing") {
    if (fv(n)(e)(o))
      return Rc;
    const s = ta(n)(e)((u) => u.target.tag === "EdgeWindow" && u.target._1 === o);
    if (s.tag === "Just") {
      const u = mo(t.timing.edgeEasing)(qi(s._1)(e)), a = s._1.target.tag === "EdgeWindow" ? s._1.target._2 : Vu("Extend", wf);
      if (a.tag === "Retract")
        return Ni("Retracting", a._1, u);
      if (a.tag === "Extend")
        return Ni("Extending", a._1, u);
      f();
    }
    if (s.tag === "Nothing")
      return _v(n)(e)(o) ? Rc : Vx(o)(r) ? Ld : Rc;
  }
  f();
}, bv = (t) => (n) => (e) => {
  const r = vv(n)(e);
  return Ed(D((o) => b(o, Cv(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return G;
      if (i.tag === "Node")
        return Zt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return jt(be.foldr, o(n.layout.edges));
  })()));
}, kv = (t) => (n) => (e) => (r) => {
  const o = ta(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r && i.target._2 === "PlopOut");
  if (o.tag === "Just") {
    const i = qi(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : vf;
    if (s === "PlopIn")
      return Ji("PloppingIn", i);
    if (s === "PlopOut")
      return Ji("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing") {
    if (lv(t)(n)(r))
      return Ac;
    const i = ta(t)(n)((s) => s.target.tag === "NodeWindow" && s.target._1 === r);
    if (i.tag === "Just") {
      const s = qi(i._1)(n), u = i._1.target.tag === "NodeWindow" ? i._1.target._2 : vf;
      if (u === "PlopIn")
        return Ji("PloppingIn", s);
      if (u === "PlopOut")
        return Ji("PloppingOut", s);
      f();
    }
    if (i.tag === "Nothing")
      return gv(t)(n)(r) ? Ac : jx(r)(e) ? Mx : Ac;
  }
  f();
}, Sv = (t) => (n) => {
  const e = xv(t)(n);
  return Zx(D((r) => b(r, kv(t.windows)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return G;
      if (o.tag === "Node")
        return Zt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      f();
    };
    return jt(be.foldr, r(t.layout.nodes));
  })()));
}, Lv = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? b(
  n.target._1,
  e < n.startT ? Pc : e >= n.endT ? wg : ju(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: mo(t.timing.tokenEasing)(qi(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? b(
  n.target._1,
  e < n.startT ? Pc : e >= n.endT ? wg : ju("Filling", { node: n.target._2, progress: qi(n)(e), labels: n.target._3 })
) : b("", Pc), Ev = (t) => (n) => (e) => tv(D((r) => Lv(t)(r)(e))(ht(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), Pv = (t) => (n) => (e) => ({
  nodes: Sv(n)(e),
  edges: bv(t)(n)(e),
  tokens: Ev(t)(n.windows)(e),
  camera: Wi(t.cameraConfig)(n.layout)(t.cameraSpans)(e).camera,
  frameTitle: hv(n)(e),
  staticKind: dv(n)(e),
  visited: cv(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: G,
  nodeLabelFadeAlpha: G,
  edgeFadeAlpha: G,
  nodeInvert: G
}), Li = (t) => (n) => (e) => (r) => ({ segment: e, state: Pv(t)(e)(n), bgAlpha: 1, blur: 0, minis: Av(t)(n)(e), role: r }), Av = (t) => (n) => (e) => bt((r) => {
  const o = Zu(t)(Lt(e.path)(r))(n);
  if (o.tag === "Just")
    return w("Just", { ...Li(t)(Ad(o._1.startT)(o._1.endT - 1e-4)(n))(o._1)(Rd), bgAlpha: 0 });
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
})()), Rv = (t) => (n) => (e) => W1(
  v,
  B1,
  (r) => r.direction === "DiveIn" && Ps.eq(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? w("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : v,
  t.dives
), Fv = (t) => (n) => (e) => (r) => {
  const o = Rv(t)(n)(e);
  if (o.tag === "Just") {
    const i = Te(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: Zt("Node", 1, 1, o._1.node, 1 * i * i, G, G) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, Fd = (t) => (n) => bt((e) => {
  const r = en((o) => o.direction === "DiveIn" && Ps.eq(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : At(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = Zu(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return w(
        "Just",
        (() => {
          const i = Li(t)(r._1.startT - 1e-4)(o._1)(Rd);
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
})(iv(n)), Gd = (t) => (n) => {
  const e = ht((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : ov(t);
}, Gv = (t) => (n) => (e) => {
  const r = Jv(e)(n), o = Zu(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = Zu(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = (() => {
    if (e.direction === "DiveIn")
      return mo(jo)(r);
    if (e.direction === "DiveOut")
      return 1 - mo(jo)(r);
    f();
  })(), u = 1 - lr(0)(zo(1)((s - 0.1) / 0.25)), a = 1 - lr(0)(zo(1)((s - 0.1) / 0.25)), c = 1 - lr(0)(zo(1)((s - 0.8) / 0.2)), l = (d) => {
    const g = Li(t)((() => {
      if (e.direction === "DiveIn")
        return e.startT - 1e-4;
      if (e.direction === "DiveOut")
        return e.endT - 1e-4;
      f();
    })())(d)(nv);
    return {
      ...ev(yv(d.layout)(e.node))(a)({
        ...g,
        state: {
          ...g.state,
          nodeFadeAlpha: Zt("Node", 1, 1, e.node, u, G, G),
          nodeLabelFadeAlpha: Zt("Node", 1, 1, e.node, a, G, G)
        }
      }),
      minis: ht((p) => !Ps.eq(p.segment.path)(e.childPath), g.minis),
      bgAlpha: c
    };
  }, _ = 0 + 1 * lr(0)(zo(1)((s - 0.1) / 0.5));
  return [
    ...Fd(t)(e.parentPath),
    ...(() => {
      if (o.tag === "Just") {
        if (i.tag === "Just")
          return [
            l(o._1),
            {
              ...Li(t)((() => {
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
        return [Li(t)(n)(Gd(t)(n))(Se)];
      f();
    })()
  ];
}, Iv = (t) => (n) => en((e) => n >= e.startT && n < e.endT)(t.dives), Id = (t) => (n) => {
  const e = Gd(t)(n), r = Li(t)(n)(e)(Se), o = t.dives.length !== 0, i = Wi(t.cameraConfig)(t.layout)(t.cameraSpans)(n).camera, s = wv(t.layout)(e)(r.state)(Nv(t.layout)(t.cameraConfig.padding)(e)(i)), u = Fv(t)(e)(n)({ ...r, state: { ...r.state, camera: s } }), a = Fd(t)(e.path), c = Iv(t)(n);
  if (c.tag === "Just")
    return { levels: Gv(t)(n)(c._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (c.tag === "Nothing")
    return { levels: Lt(a)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, Bv = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Dv = (t) => {
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
}, Cg = (t) => T((n) => (e) => n + Ny(e.start)(e.end))(0)(t.segments), zv = (t) => (n) => (e) => ({
  crossingCount: T((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: T((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: T((r) => (o) => r + Cg(o))(0)(n),
  maxEdgeLength: T((r) => (o) => Bv(r)(Cg(o)))(0)(n),
  nodeOverlapCount: Dv(t),
  constraintViolations: e,
  jumpCount: T((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), K0 = (t) => t, gn = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, V0 = /* @__PURE__ */ K0("LEFT"), Hv = /* @__PURE__ */ K0("RIGHT"), Bd = /* @__PURE__ */ K0("UNDEFINED"), Qv = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, Ov = {
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
  Eq0: () => Qv
}, Wv = (t) => (e) => {
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
}, qv = { x: 0, y: 0 }, Ge = (t) => (n) => (e) => {
  const r = gn(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: tt(it)(t)(n(r._1))(e.cNodes) };
  f();
}, Ns = (t) => (n) => (e) => {
  const r = gn(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: tt(it)(t)(n(r._1))(e.cGroups) };
  f();
}, Xv = (t) => T((n) => (e) => Ge(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Yv = (t) => {
  const n = T((e) => (r) => {
    const o = gn(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return T((i) => (s) => Wt(it)(Nn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(G)(t.cNodeOrder);
  return T((e) => (r) => Ge(r)((o) => ({
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
}, Mv = (t) => (n) => Ge(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), Uv = (t) => {
  const n = T((e) => (r) => Ns(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return T((e) => (r) => Ge(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, tr = { left: !1, right: !1, up: !1, down: !1 }, Kv = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, j0 = (t) => T((n) => (e) => {
  const r = gn(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = T((s) => (u) => {
      const a = gn(u)(n.cNodes);
      if (a.tag === "Nothing")
        return s;
      if (a.tag === "Just") {
        if (s.tag === "Nothing")
          return w("Just", u);
        if (s.tag === "Just") {
          const c = gn(s._1)(n.cNodes);
          if (c.tag === "Nothing")
            return w("Just", u);
          if (c.tag === "Just")
            return a._1.hitbox.x < c._1.hitbox.x ? w("Just", u) : w("Just", s._1);
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
        return T((a) => (c) => Ge(c)((l) => ({ ...l, cGroupOffset: { x: l.hitbox.x - u.hitbox.x, y: l.hitbox.y - u.hitbox.y } }))(a))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), Pe = (t) => j0({
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
}), yr = (t) => j0({
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
}), Dd = (t) => {
  const n = T((e) => (r) => Ns(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return T((e) => (r) => {
    const o = gn(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return T((s) => (u) => {
          const a = gn(u)(s.cNodes);
          if (a.tag === "Nothing")
            return s;
          if (a.tag === "Just")
            return a._1.cGroup.tag === "Just" && a._1.cGroup._1 !== i ? Ns(a._1.cGroup._1)((c) => ({ ...c, outDegree: c.outDegree + 1 | 0, outDegreeReal: c.outDegreeReal + 1 | 0 }))(Ns(i)((c) => Ne(ho)(u)(c.incomingConstraints) ? c : { ...c, incomingConstraints: [...c.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, $u = (t) => {
  const n = Yv(t.cGraph);
  return { ...t, cGraph: Dd(T((e) => (r) => Ge(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, Vv = (t) => (n) => T((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Ge(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Ge(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), Ke = (t) => {
  const n = {
    ...t,
    cGraph: Vv(t.direction)({
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
    cGraph: Dd((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, jv = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? Ke(r) : n === "RIGHT" ? Ke({ ...r, cGraph: Pe(r.cGraph) }) : n === "UP" ? Ke({ ...r, cGraph: yr(r.cGraph) }) : n === "DOWN" ? Ke({ ...r, cGraph: Pe(yr(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? $u({ ...r, cGraph: Pe(r.cGraph) }) : n === "UP" ? Ke({ ...r, cGraph: yr(r.cGraph) }) : n === "DOWN" ? Ke({ ...r, cGraph: Pe(yr(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? $u({ ...r, cGraph: Pe(r.cGraph) }) : n === "UP" ? Ke({ ...r, cGraph: yr(Pe(r.cGraph)) }) : n === "DOWN" ? Ke({ ...r, cGraph: Pe(yr(Pe(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? Ke({ ...r, cGraph: yr(r.cGraph) }) : n === "RIGHT" ? Ke({ ...r, cGraph: Pe(yr(r.cGraph)) }) : n === "DOWN" ? $u({ ...r, cGraph: Pe(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? Ke({ ...r, cGraph: yr(Pe(r.cGraph)) }) : n === "RIGHT" ? Ke({ ...r, cGraph: Pe(yr(Pe(r.cGraph))) }) : n === "UP" ? $u({ ...r, cGraph: Pe(r.cGraph) }) : r;
  f();
}, zd = (t) => (n) => n.finished || !Wv(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : jv(n.direction)(t)(n), Zv = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? zd(V0)(t) : t, e = { ...n, cGraph: Uv(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, Hd = (t) => (n) => (e) => {
  const r = gn(t)(e.cNodes), o = gn(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: tt(it)(t)({ ...r._1, cGroup: w("Just", n) })(e.cNodes),
    cGroups: tt(it)(n)({
      ...o._1,
      cNodes: Ne(ho)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return w("Just", t);
        if (o._1.reference.tag === "Just")
          return w("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, Qd = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: tt(it)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: v,
      cGroupOffset: qv,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: tr
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), Z0 = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: T((r) => (o) => Hd(o)(e)(r))({
      ...n,
      cGroups: tt(it)(e)({
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
}, tw = (t) => T((n) => (e) => {
  const r = gn(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? Z0({ master: v, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), nw = (t) => ({
  cGraph: Xv(tw(j0(t))),
  direction: Bd,
  compactionAlgorithm: v,
  constraintAlgorithm: v,
  spacingsHandler: Kv,
  lockFun: v,
  finished: !1
}), ew = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, rw = (t) => (n) => {
  const e = st.compare(t._1)(n._1);
  return e === "LT" ? Wn : e === "GT" ? qn : it.compare(t._2)(n._2);
}, ow = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), bg = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, kg = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", Sg = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), nc = (t) => (n) => rw(b(t.hitbox.x + t.hitbox.width / 2, t.id))(b(n.hitbox.x + n.hitbox.width / 2, n.id)), iw = (t) => (n) => {
  const e = Uo(qt, v, (r) => nc(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = q1(qt, v, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Lt(n)(t);
  f();
}, Od = (t) => (n) => {
  const e = ht((o) => nc(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? w("Just", e[r]) : v;
}, sw = (t) => (n) => {
  const e = iw(n)(t.intervals), r = en((i) => nc(n)(i) === "LT")(e), o = tt(it)(n.id)((() => {
    const i = Od(n)(e);
    return i.tag === "Just" ? w("Just", i._1.id) : v;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return tt(it)(r._1.id)(w("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      f();
    })()
  };
}, uw = (t) => (n) => {
  const e = st.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? qn : ce : n.low ? Wn : ce : e;
}, aw = (t) => T((n) => (e) => Ge(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(bt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), Ic = (t) => (n) => T((e) => (r) => {
  const o = gn(r._1)(e.cNodes);
  if (o.tag === "Just")
    return Ge(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(ow(t)), Wd = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, Lg = (t) => (n) => (e) => T((r) => (o) => e(o) ? Ge(o.id)(Wd(t))(r) : r)(n)(bt((r) => gn(r)(n.cNodes))(n.cNodeOrder)), cw = (t) => (n) => {
  const e = (r, o, i) => {
    const s = Ge(i)(Wd(t))(r);
    return o.length <= 1 ? s : T((u) => (a) => a === i ? u : Ge(a)((c) => c.ignoreSpacing.up ? { ...c, hitbox: { ...c.hitbox, y: c.hitbox.y + t + 0.01, height: c.hitbox.height - t - 0.01 } } : c.ignoreSpacing.down ? { ...c, hitbox: { ...c.hitbox, height: c.hitbox.height - t - 0.01 } } : c)(u))(s)(o);
  };
  return T((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(bt((r) => gn(r)(n.cGroups))(n.cGroupOrder));
}, fw = (t) => (n) => {
  const e = Od(n)(t.intervals), r = en((i) => nc(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = bg(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? Wt(it)(Nn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = bg(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? Wt(it)(Nn)(n.id)([r._1.id])(o) : o,
    intervals: ht((i) => i.id !== n.id, t.intervals)
  };
}, lw = (t) => (n) => n.low ? sw(t)(n.node) : fw(t)(n.node), Bc = (t) => (n) => T(lw)({ intervals: [], cand: G, constraints: G })(It(uw)(Nt(ht(
  t,
  bt((e) => gn(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, gw = (t) => (n) => {
  const e = ew(0)(t / 2 - 0.5), r = Ic(Bc(kg)(Lg(e)(n)(kg)))(n), o = Ic(Bc(Sg)(Lg(e)(r)(Sg)))(r);
  return Ic(Bc((i) => !0)(cw(e)(o)))(o);
}, _w = (t) => (n) => gw(t)(aw(n.cGraph)), ea = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Eg = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, tl = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: ea(n._1)(e._1), y: ea(n._2)(e._2), width: or(n._1 - e._1), height: or(n._2 - e._2) },
  ignoreSpacing: tr,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: v
}), dw = (t) => (n) => {
  const e = ea(t.hitbox.x)(n.hitbox.x), r = ea(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: Eg(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: Eg(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, hw = (t) => (n) => or(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, pw = (t) => (n) => or(t.hitbox.x - n.hitbox.x) <= 1e-4 ? st.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Wn : qn, qd = (t, n) => ({ tag: t, _1: n }), nl = /* @__PURE__ */ pn(F)(Yt), ec = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Pg = /* @__PURE__ */ (() => {
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
  return T((e) => (r) => tt(n)(r)()(e))(G);
})(), Zr = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, mw = /* @__PURE__ */ T((t) => (n) => tt(Ov)(n)()(t))(G), Dc = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $w = (t) => (n) => {
  const e = nl(D((i) => b(i.id, i))(t)), r = bt((i) => ec(i)(e))(n), o = it.compare((() => {
    const i = Pg(D((s) => b(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = Pg(D((s) => b(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...tr, left: !0, right: !1 };
  if (o === "GT")
    return { ...tr, left: !1, right: !0 };
  if (o === "EQ")
    return tr;
  f();
}, yw = (t) => bt((n) => {
  if (n.direction === "V")
    return w("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return v;
  f();
})(t.segments), yu = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = Zr(e)(n);
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
}, xw = (t) => (n) => (e) => {
  const r = Qd({
    origin: w("Just", qd("SegmentOrigin", e)),
    kind: w("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = Mv(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = gn(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return Hd(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return Z0({ master: w("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: T((i) => (s) => Wt(F)(Nn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: tt(it)(r.id)($w(t)(e.representedEdges))(n.lockMap)
  };
}, vw = (t) => (n) => (e) => {
  const r = Ht(
    (o) => v,
    (o) => (i) => w("Just", { head: o, tail: i }),
    It(pw)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = T((i) => (s) => hw(i.survivor)(s) ? { ...i, survivor: dw(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return T(xw(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, ww = (t) => ({
  cGraph: {
    cNodes: G,
    cNodeOrder: [],
    cGroups: G,
    cGroupOrder: [],
    supportedDirections: mw([Bd, V0, Hv]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: G,
  edgeToCs: G,
  lockMap: G
}), Tw = (t) => {
  const n = V(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, Nw = (t) => (n) => (e) => T((r) => (o) => {
  const i = Qd({ origin: w("Just", qd("NodeOrigin", o.node)), kind: v, hitbox: Tw(o) })(r.cGraph), s = Zr(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return b(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: Z0({ master: w("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: tt(F)(o.node)(i.id)(r.nodeToC),
    lockMap: tt(it)(i.id)((() => {
      const a = u._1 - u._2 | 0;
      return a < 0 ? { ...tr, left: !0 } : a > 0 ? { ...tr, right: !0 } : tr;
    })())(r.lockMap)
  };
})(e)(n), Jw = (t) => T((n) => (e) => Wt(F)((r) => (o) => b(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(b(1, 0))(Wt(F)((r) => (o) => b(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(b(
  0,
  1
))(n)))(G)(t), Cw = (t) => T((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? tt(F)(e.origin._1._1)(e.hitbox.x)(n) : n)(G)(bt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), bw = (t) => T((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? tt(F)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(G)(bt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), kw = (t) => T((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return T((o) => (i) => tt(fd)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(G)(bt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), Xd = (t) => {
  const n = nl(D((e) => b(e.id, e))(t.edges));
  return bt((e) => {
    const r = ec(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? w(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: yu(Or)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: yu(Wr)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : w(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: yu(Or)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: yu(Wr)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return v;
    f();
  })(t.paths);
}, Sw = (t) => (n) => {
  const e = Nt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = Zr(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return gn(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return v;
      f();
    })(), s = Zr(r.src)(t.nodeToC), u = (() => {
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
              return w("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
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
            return g(m.hitbox.x) && m.cGroup._1 !== u._1.cGroup._1 ? w("Just", p(m.cGroup._1)(u._1.cGroup._1)) : v;
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
      const g = ec(r.edgeId)(t.edgeToCs);
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
      return En((s) => Ne(Lr)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, Lw = (t) => (n) => {
  const e = V(4), r = Cw(t), o = bw(t), i = nl(D((u) => b(u.id, b(u.from.node, u.to.node)))(n.edges)), s = kw(t);
  return {
    nodes: D((u) => {
      const a = Zr(u.node)(r);
      if (a.tag === "Just")
        return { ...u, position: b(a._1 / e, u.position._2) };
      if (a.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: D((u) => {
      const a = ec(u.edge)(i), c = (() => {
        if (a.tag === "Nothing")
          return u.segments;
        if (a.tag === "Just") {
          const l = Zr(a._1._1)(o), _ = (() => {
            if (l.tag === "Nothing")
              return 0;
            if (l.tag === "Just")
              return l._1;
            f();
          })(), d = Zr(a._1._2)(o), g = (() => {
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
                  const J = Dc(x.start)(s);
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
                      const y = Dc(x.start)(s);
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
                      const y = Dc(x.end)(s);
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
}, Ew = (t) => (n) => (e) => (r) => (o) => (i) => {
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
}, Ag = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...tl(i.nextId)(r.start)(b(r.start._1, o.down ? e.y : e.y + e.height))(w(
        "Just",
        n
      ))(t.edgeId),
      aPort: w("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...tr, down: !0 } : { ...tr, up: !0 }
    }
  ]
}), xu = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...tl(i.nextId)(r.end)(b(r.end._1, o.down ? e.y : e.y + e.height))(w(
        "Just",
        n
      ))(t.edgeId),
      aPort: w("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...tr, down: !0 } : { ...tr, up: !0 }
    }
  ]
}), Pw = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = Zr(e.src)(t.nodeToC), o = Zr(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const l = gn(r._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? w("Just", l._1.hitbox) : v;
    }
    if (r.tag === "Nothing")
      return v;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const l = gn(o._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? w("Just", l._1.hitbox) : v;
    }
    if (o.tag === "Nothing")
      return v;
    f();
  })(), u = yw(e.path), a = T(Ew(e)(i)(s)(u.length - 1 | 0))(n)(Xt((l) => (_) => b(
    l,
    _
  ))(u));
  if (0 < u.length) {
    const l = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return Ag(e)(r._1)(i._1)(u[0])({ side: In, down: !0 })(a);
        if (e.srcSide === "South")
          return Ag(e)(r._1)(i._1)(u[0])({ side: Bn, down: !1 })(a);
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
}, Aw = (t) => (n) => (e) => vw(t)(T(Pw(e))({ nextId: 0, segments: [] })(n).segments)(e), Rw = (t) => Aw(t.edges)(Xd(t))(Nw(Jw(t.edges))(t.nodes)(ww())), to = (t) => (e) => {
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
}, Nf = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Jf = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Fw = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Gw = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let a = u, c = !0, l;
      for (; c; ) {
        const _ = a, d = Ht((g) => v, (g) => (p) => w("Just", { head: g, tail: p }), _.queue);
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
          const p = en((m) => !to(m.eid)(_.removedEdges) && (n.eq(m.src)(g) || n.eq(m.tgt)(g)))(r);
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
                        N = !1, C = w("Just", S._4);
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
              removedEdges: tt(it)(p._1.eid)()(_.removedEdges),
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
                      C = !1, S = w("Just", P._4);
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
    }, i = T((u) => (a) => Wt(t)(bn)(a.src)(1)(Wt(t)(bn)(a.tgt)(1)(u)))(G)(r), s = o({
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
                  d = !1, g = w("Just", p._4);
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
      coreEdges: ht((u) => !to(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, Iw = (t) => (n) => (e) => T((r) => (o) => {
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
            _ = !1, d = w("Just", g._4);
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
})(e)(fn(n)), Cf = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: tt(t)(r)()(o.treeNode) };
    return T((s) => (u) => {
      if (to(u.eid)(s.st.edgeVisited))
        return s;
      const a = { ...s.st, edgeVisited: tt(it)(u.eid)()(s.st.edgeVisited) }, c = n.eq(u.src)((() => {
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
      if (to(u.eid)(a.treeEdge)) {
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
        const l = Cf(t)(e)(c)(a);
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
                  y = !1, J = w("Just", N._4);
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
                  y = !1, J = w("Just", N._4);
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
        const l = Cf(t)(e)(c)({ ...a, treeEdge: tt(it)(u.eid)()(a.treeEdge) });
        return { count: s.count + l.count | 0, st: l.st };
      }
      return { ...s, st: a };
    })({ count: 1, st: i })(ht((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !to(s.eid)(i.edgeVisited), e));
  };
}, ra = (t) => (n) => (e) => (r) => {
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
          $ = !1, x = w("Just", y._4);
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
          $ = !1, x = w("Just", y._4);
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
          $ = !1, x = w("Just", y._4);
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
            J = !1, N = w("Just", C._4);
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
                S = !1, P = w("Just", E._4);
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
}, Bw = (t) => {
  const n = pn(t)(Yt);
  return (e) => ({
    layer: n(D((r) => b(r, 0))(e)),
    treeNode: G,
    treeEdge: G,
    poID: G,
    lowestPoID: G,
    cutvalue: G,
    postOrder: 1,
    edgeVisited: G
  });
}, Dw = (t) => (n) => (e) => T((r) => (o) => {
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
          p = !1, m = w("Just", h._4);
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
          p = !1, m = w("Just", h._4);
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
  return _ < r.slack ? { edge: w("Just", o), slack: _ } : r;
})({ edge: v, slack: 1e9 })(n).edge, zw = (t) => {
  const n = pn(t)(Yt);
  return (e) => (r) => {
    const o = T((i) => (s) => Nf(i)((() => {
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
              _ = !1, d = w("Just", g._4);
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
    return n(D((i) => b(
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
                l = !1, _ = w("Just", d._4);
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
}, Yd = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = T((u) => (a) => {
      const c = Yd(t)(e)(n.eq(a.src)(r) ? a.tgt : a.src)({ ...u.st, edgeVisited: tt(it)(a.eid)()(u.st.edgeVisited) });
      return { lowest: Nf(u.lowest)(c.lowest), st: c.st };
    })({ lowest: 1e9, st: o })(ht(
      (u) => to(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !to(u.eid)(o.edgeVisited),
      e
    )), s = Nf(i.lowest)(i.st.postOrder);
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
}, Md = (t) => {
  const n = Yd(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: G, postOrder: 1, poID: G, lowestPoID: G }).st : o;
}, Hw = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => ht((i) => to(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, Qw = (t) => (n) => en((e) => {
  const r = Jf(e.eid)(n.cutvalue);
  return to(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), Ud = (t) => {
  const n = Cf(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? w("Just", e[0]) : v;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: G, treeNode: G, treeEdge: G });
      if (s.count >= e.length)
        return s.st;
      const u = Dw(t)(r)(s.st);
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
                x = !1, y = w("Just", J._4);
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
                x = !1, y = w("Just", J._4);
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
        return Ud(t)(e)(r)({
          ...s.st,
          layer: T((h) => ($) => ((y) => {
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
                    C = !1, S = w("Just", P._4);
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
}, Ow = (t) => (n) => (e) => (r) => T((o) => (i) => {
  if (ra(t)(r)(i.src)(e) && !ra(t)(r)(i.tgt)(e)) {
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
            m = !1, h = w("Just", $._4);
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
            m = !1, h = w("Just", $._4);
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
      return { edge: w("Just", i), slack: d };
  }
  return o;
})({ edge: v, slack: 1e9 })(n).edge, Ww = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return T((a) => (c) => {
      if ((() => {
        const l = Jf(c.eid)(r.cutvalue);
        if (l.tag === "Just")
          return !0;
        if (l.tag === "Nothing")
          return !1;
        f();
      })()) {
        const l = Jf(c.eid)(r.cutvalue), _ = (() => {
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
}, qw = (t) => {
  const n = Ww(t);
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
              p = !1, m = w("Just", h._4);
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
                J = !1, N = w("Just", C._4);
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
            cutvalue: tt(it)($[0].eid)(n(e)(g)(p)($[0]))(g.cutvalue)
          }, l = x;
          continue;
        }
        _ = !1, d = g;
      }
      return d;
    })(r)(o);
  };
}, Kd = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (c) => (l) => c.delta === l.delta && c.eid === l.eid && e.eq(c.src)(l.src) && n.eq(c.tgt)(l.tgt) && c.weight === l.weight }, o = {
    compare: (c) => (l) => {
      const _ = it.compare(c.delta)(l.delta);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const d = it.compare(c.eid)(l.eid);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const g = t.compare(c.src)(l.src);
      if (g === "LT" || g === "GT" || g !== "EQ")
        return g;
      const p = t.compare(c.tgt)(l.tgt);
      if (p === "LT" || p === "GT" || p !== "EQ")
        return p;
      const m = st.compare(c.weight)(l.weight);
      return m === "LT" || m === "GT" || m !== "EQ" ? m : ce;
    },
    Eq0: () => r
  }, i = T((c) => (l) => tt(o)(l)()(c))(G), s = Hw(t), u = pn(t)(Yt), a = qw(t);
  return (c) => (l) => (_) => {
    const d = {
      unknown: u(D((g) => b(
        g,
        jt(be.foldr, i(s(l)(_)(g)))
      ))(c)),
      cutvalue: G
    };
    return {
      ..._,
      cutvalue: T(a(l))(d)(ht(
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
                  x = !1, y = w("Just", J._4);
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
}, Xw = (t) => {
  const n = Md(t), e = Kd(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const a = { ...u, treeEdge: tt(it)(s.eid)()(Hi(it)(i.eid)(u.treeEdge)) }, c = s.tgt, _ = (($) => {
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
            y = !1, J = w("Just", N._4);
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
            y = !1, J = w("Just", N._4);
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
    })(), h = ra(t)(a)(s.tgt)(i) ? m : -m;
    return e(r)(o)(n(r)(o)({
      ...a,
      layer: T(($) => (x) => ra(t)(a)(x)(i) ? $ : tt(t)(x)((() => {
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
                S = !1, P = w("Just", E._4);
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
}, Yw = (t) => {
  const n = Xw(t);
  return (e) => (r) => (o) => (i) => ((u) => (a) => {
    let c = u, l = a, _ = !0, d;
    for (; _; ) {
      const g = c, p = l;
      if (g === 0) {
        _ = !1, d = p;
        continue;
      }
      const m = Qw(o)(p);
      if (m.tag === "Nothing") {
        _ = !1, d = p;
        continue;
      }
      if (m.tag === "Just") {
        const h = Ow(t)(o)(m._1)(p);
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
}, Mw = (t) => {
  const n = Kd(t), e = Md(t), r = Ud(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, Rg = (t) => (n) => T((e) => (r) => Wt(t)(Nn)(n(r))([r])(e))(G), Uw = (t) => {
  const n = pn(t)(Yt);
  return (e) => (r) => (o) => {
    const i = (a) => (c) => (l) => (_) => {
      let d = a, g = c, p = l, m = _, h = !0, $;
      for (; h; ) {
        const x = d, y = g, J = p, N = m, C = Ht((S) => v, (S) => (P) => w("Just", { head: S, tail: P }), J);
        if (C.tag === "Nothing") {
          h = !1, $ = N;
          continue;
        }
        if (C.tag === "Just") {
          const S = C._1.head, E = ((B) => {
            let H = B, rt = !0, ot;
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
                  rt = !1, ot = w("Just", M._4);
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
          })(), W = T((B) => (H) => {
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
                    X = !1, L = w("Just", I._4);
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
                layer: tt(t)(H.tgt)(Fw((() => {
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
                          z = !1, U = w("Just", K._4);
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
                    M = !1, q = w("Just", A._4);
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
    }, s = Rg(t)((a) => a.tgt)(r), u = n(D((a) => b(
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
                g = !1, p = w("Just", m._4);
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
    return i(Rg(t)((a) => a.src)(r))(u)(ht(
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
                g = !1, p = w("Just", m._4);
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
}, Kw = (t) => {
  const n = Bw(t), e = Uw(t), r = Mw(t), o = Yw(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, Vd = (t) => {
  const n = zw(t), e = Kw(t), r = Gw(t);
  return (o) => (i) => {
    if (o.length === 0)
      return G;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(Iw(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, jd = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, bf = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Vw = /* @__PURE__ */ Vd(it), As = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), jw = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = V((() => {
      const o = jd(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return Ge(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, Zw = (t) => (n) => ({
  ...n,
  cGraph: T(jw(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return bt((r) => gn(r)(e.cNodes))(e.cNodeOrder);
  })())
}), tT = (t) => (n) => (e) => (r) => (o) => {
  const i = dn(Da(n.cGroupOffset.x - t.cGroupOffset.x));
  return As({ src: o.nextNodeId, tgt: r, delta: bf(0)(-i), weight: 1 })(As({ src: o.nextNodeId, tgt: e, delta: bf(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, nT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = bf(0)(dn(Da(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? tT(e)(r)(o)(i)(s) : As({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, eT = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? nT(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, rT = (t) => (n) => (e) => (r) => T(eT(t)(n)(r))(e)(r.constraints), oT = (t) => (n) => As({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), iT = (t) => {
  const n = T((o) => (i) => Wt(it)(bn)(i.tgt)(1)(o))(G)(t.edges), e = ht(
    (o) => {
      const i = jd(o)(n);
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
  return T((o) => (i) => As({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, sT = (t) => (n) => {
  const e = iT(T(oT)(T(rT(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return bt((o) => gn(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, uT = (t) => (n) => {
  const e = sT(t)(n);
  return Zw(Vw(e.nodes)(e.edges))(n);
}, Zd = (t) => t, yn = /* @__PURE__ */ Zd("H"), xn = /* @__PURE__ */ Zd("V"), aT = (t) => b(t._2, t._1), th = (t) => ({ ...t, position: b(t.position._2, t.position._1), size: b(t.size._2, t.size._1) }), cT = (t) => ({
  start: b(t.start._2, t.start._1),
  end: b(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return xn;
    if (t.direction === "V")
      return yn;
    f();
  })()
}), nh = (t) => ({ ...t, segments: D(cT)(t.segments), bends: D(aT)(t.bends) }), fT = (t) => ({ nodes: D(th)(t.nodes), edges: t.edges, paths: D(nh)(t.paths), ports: t.ports }), lT = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, gT = (t) => (n) => ({
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
}), _T = (t) => (n) => uT(n), dT = (t) => (n) => (e) => {
  const r = fT(e), o = Rw(r), i = Sw(o)(Xd(r)), s = Lw(zd(V0)(Zv({
    ...nw(o.cGraph),
    compactionAlgorithm: w("Just", _T()(i)),
    constraintAlgorithm: w("Just", _w(n.edgeEdge)),
    spacingsHandler: gT(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: D(th)(s.nodes), edges: D(nh)(s.edges) };
}, Fg = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, eh = (t) => On(3)(t) === "$d:", hT = (t) => (n) => (e) => T((r) => (o) => {
  const i = Fg(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = Fg(o.to.node)(t), a = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (a <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const c = o.id, l = D((d) => "$d:" + c + ":" + an(d))(Vt(1, a - 1 | 0)), _ = [o.from.node, ...l, o.to.node];
  return {
    ...r,
    layers: T((d) => (g) => {
      const p = g._2, m = x2(s + g._1 | 0)((h) => [...h, p])(d);
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
})({ layers: e, edges: [], chains: [] })(n), rh = (t) => t, di = /* @__PURE__ */ pn(it)(Yt), Kt = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Gg = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Tt = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ct = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ci = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, pT = (t) => (n) => {
  const e = it.compare(t._1)(n._1);
  return e === "LT" ? Wn : e === "GT" ? qn : it.compare(t._2)(n._2);
}, $i = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, mT = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), $T = (t) => t, Ig = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, yT = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, vu = /* @__PURE__ */ rh("Regular"), wu = /* @__PURE__ */ rh("Critical"), oh = (t) => (n) => {
  const e = T((s) => (u) => tt(F)(u.node)(u)(s))(G)(n), r = 1.25 * V(4), o = (s, u, a) => ((l) => (_) => (d) => {
    let g = l, p = _, m = d, h = !0, $;
    for (; h; ) {
      const x = g, y = p, J = m;
      if (J.critical) {
        h = !1, $ = J;
        continue;
      }
      const N = Ht((S) => v, (S) => (P) => w("Just", { head: S, tail: P }), x), C = Ht((S) => v, (S) => (P) => w("Just", { head: S, tail: P }), y);
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
    if (Ct(T(Ct)(-1e18)(u.incoming))(T(Ct)(-1e18)(u.outgoing)) - Tt(T(Tt)(1e18)(u.incoming))(T(Tt)(1e18)(u.outgoing)) < 1e-3 || Ct(T(Ct)(-1e18)(a.incoming))(T(Ct)(-1e18)(a.outgoing)) - Tt(T(Tt)(1e18)(a.incoming))(T(Tt)(1e18)(a.outgoing)) < 1e-3)
      return [];
    const c = o(s, u.outgoing, a.incoming), l = o(s, a.outgoing, u.incoming);
    if (c.critical || l.critical)
      return [...c.critical ? [{ src: a.id, tgt: u.id, weight: 1, kind: wu }] : [], ...l.critical ? [{ src: u.id, tgt: a.id, weight: 1, kind: wu }] : []];
    const _ = Tt(T(Tt)(1e18)(u.incoming))(T(Tt)(1e18)(u.outgoing)), d = Ct(T(Ct)(-1e18)(u.incoming))(T(Ct)(-1e18)(u.outgoing)), g = Tt(T(Tt)(1e18)(a.incoming))(T(Tt)(1e18)(a.outgoing)), p = Ct(T(Ct)(-1e18)(a.incoming))(T(Ct)(-1e18)(a.outgoing)), m = (1 * c.conflicts | 0) + (16 * (T(($) => (x) => x > p ? $ : x >= g ? $ + 1 | 0 : $)(0)(u.outgoing) + T(($) => (x) => x > d ? $ : x >= _ ? $ + 1 | 0 : $)(0)(a.incoming) | 0) | 0) | 0, h = (1 * l.conflicts | 0) + (16 * (T(($) => (x) => x > d ? $ : x >= _ ? $ + 1 | 0 : $)(0)(a.outgoing) + T(($) => (x) => x > p ? $ : x >= g ? $ + 1 | 0 : $)(0)(u.incoming) | 0) | 0) | 0;
    return m < h ? [{ src: u.id, tgt: a.id, weight: h - m | 0, kind: vu }] : m > h ? [{ src: a.id, tgt: u.id, weight: m - h | 0, kind: vu }] : m > 0 ? [{ src: u.id, tgt: a.id, weight: 0, kind: vu }, { src: a.id, tgt: u.id, weight: 0, kind: vu }] : [];
  };
  return T((s) => (u) => T((a) => (c) => tt(F)(c._1)(c._2)(a))(s)((() => {
    const a = T((B) => (H) => {
      const rt = H.edge.from.node + "|" + (() => {
        if (H.edge.from.port.tag === "Just")
          return H.edge.from.port._1;
        if (H.edge.from.port.tag === "Nothing")
          return "_auto_" + H.edge.id;
        f();
      })(), ot = Ig(rt)(B.entries);
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
            incoming: [...Cr((M) => M < H.fromPos._1)(ot._1.incoming).init, H.fromPos._1, ...Cr((M) => M <= H.fromPos._1)(ot._1.incoming).rest],
            outgoing: [...Cr((M) => M < H.toPos._1)(ot._1.outgoing).init, H.toPos._1, ...Cr((M) => M <= H.toPos._1)(ot._1.outgoing).rest]
          })(B.entries)
        };
      f();
    })({ entries: G, order: [] })(u._2), c = Xt((B) => (H) => ({ ...H, id: B }))(bt((B) => Ig(B)(a.entries))(a.order));
    if (c.length === 0)
      return [];
    const l = T((B) => (H) => B.prev.tag === "Just" && H - B.prev._1 < 1e-9 ? B : { prev: w("Just", H), out: [...B.out, H] })({ prev: v, out: [] })(It(st.compare)([
      ...Nt(c)((B) => B.incoming),
      ...Nt(c)((B) => B.outgoing)
    ])).out, _ = l.length < 2 ? 0.2 * r : 0.2 * T((B) => (H) => {
      if (B.prev.tag === "Nothing")
        return { prev: w("Just", H), mn: B.mn };
      if (B.prev.tag === "Just")
        return { prev: w("Just", H), mn: Tt(B.mn)(H - B.prev._1) };
      f();
    })({ prev: v, mn: 1e18 })(l).mn, d = {
      segments: c,
      deps: (() => {
        const B = c.length;
        return Nt(Nt(Vt(0, B - 2 | 0))((H) => Nt(Vt(H + 1 | 0, B - 1 | 0))((rt) => [
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
      const B = di((() => {
        const q = d.segments;
        return D((A) => b(A.id, A.mark))((() => {
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
                  inWeight: T((nt) => (gt) => Wt(it)(bn)(gt.tgt)(-gt.weight)(nt))(O.inWeight)((() => {
                    const nt = Kt(et)(O.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: tt(it)(et)(O.nextSource)(O.marks),
                  nextSource: O.nextSource + 1 | 0,
                  outWeight: T((nt) => (gt) => Wt(it)(bn)(gt.src)(-gt.weight)(nt))(O.outWeight)((() => {
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
                  inWeight: T((nt) => (gt) => Wt(it)(bn)(gt.tgt)(-gt.weight)(nt))(O.inWeight)((() => {
                    const nt = Kt(et)(O.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: tt(it)(et)(O.nextSink)(O.marks),
                  nextSink: O.nextSink - 1 | 0,
                  outWeight: T((nt) => (gt) => Wt(it)(bn)(gt.src)(-gt.weight)(nt))(O.outWeight)((() => {
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
                U = !1, K = D((et) => {
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
                }, nt = It((gt) => (ct) => it.compare(et(ct))(et(gt)))(Z.remaining);
                if (0 < nt.length) {
                  const gt = nt[0];
                  return {
                    ...Z,
                    inWeight: T((ct) => ($t) => Wt(it)(bn)($t.tgt)(-$t.weight)(ct))(Z.inWeight)((() => {
                      const ct = Kt(gt)(Z.depsBySrc);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    marks: tt(it)(gt)(Z.nextSource)(Z.marks),
                    nextSource: Z.nextSource + 1 | 0,
                    outWeight: T((ct) => ($t) => Wt(it)(bn)($t.src)(-$t.weight)(ct))(Z.outWeight)((() => {
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
            remaining: D((I) => I.id)(q),
            marks: G,
            inWeight: T((I) => (z) => Wt(it)(bn)(z.tgt)(z.weight)(I))(G)(g),
            outWeight: T((I) => (z) => Wt(it)(bn)(z.src)(z.weight)(I))(G)(g),
            depsBySrc: T((I) => (z) => Wt(it)(Nn)(z.src)([z])(I))(G)(g),
            depsByTgt: T((I) => (z) => Wt(it)(Nn)(z.tgt)([z])(I))(G)(g),
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
      const rt = T((q) => (A) => {
        if (Ne(ho)(A.src)(q.decisions) || Ne(ho)(A.tgt)(q.decisions))
          return q;
        const R = Kt(A.src)(q.segMap), X = Kt(A.tgt)(q.segMap);
        if (R.tag === "Just" && X.tag === "Just") {
          const L = (R._1.incoming.length + R._1.outgoing.length | 0) > 2 && (X._1.incoming.length + X._1.outgoing.length | 0) <= 2, I = L ? X._1 : R._1;
          return {
            decisions: [...q.decisions, I.id],
            segMap: tt(it)(I.id)({ ...I, splitBy: w("Just", L ? R._1.id : X._1.id) })(q.segMap)
          };
        }
        return q;
      })({ decisions: [], segMap: di(D((q) => b(q.id, q))(d.segments)) })(H), ot = rt.segMap, M = T((q) => (A) => {
        const R = Tt(T(Tt)(1e18)(A.incoming))(T(Tt)(1e18)(A.outgoing)), X = Ct(T(Ct)(-1e18)(A.incoming))(T(Ct)(-1e18)(A.outgoing)), L = ht(
          (O) => O.a.startPosition <= X && O.a.endPosition >= R,
          Xt((O) => (Z) => ({ i: O, a: Z }))(q.freeAreas)
        );
        if (L.length === 0) {
          const O = {
            ...A,
            incoming: It(st.compare)(A.incoming),
            outgoing: It(st.compare)([(R + X) / 2]),
            splitPartner: w("Just", q.nextId)
          }, Z = {
            id: q.nextId,
            incoming: It(st.compare)([(R + X) / 2]),
            mark: 0,
            members: A.members,
            outgoing: It(st.compare)(A.outgoing),
            slot: 0,
            splitBy: v,
            splitPartner: w("Just", A.id)
          };
          return {
            segMap: tt(it)(Z.id)(Z)(tt(it)(O.id)(O)(q.segMap)),
            freeAreas: q.freeAreas,
            nextId: q.nextId + 1 | 0
          };
        }
        const I = 0 < L.length ? w("Just", L[0]) : v, z = (() => {
          if (I.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (I.tag === "Just") {
            if (L.length === 1)
              return I._1;
            const O = D((Z) => ({
              c: Z,
              rating: (() => {
                const et = (Z.a.startPosition + Z.a.endPosition) / 2, nt = [et], gt = [et], ct = T((() => {
                  const Pt = q.segMap;
                  return (Rt) => (rn) => {
                    const xt = Kt(rn.tgt)(Pt);
                    if (xt.tag === "Nothing")
                      return Rt;
                    if (xt.tag === "Just") {
                      const Gt = Tt(T(Tt)(1e18)(xt._1.incoming))(T(Tt)(1e18)(xt._1.outgoing)), vt = Ct(T(Ct)(-1e18)(xt._1.incoming))(T(Ct)(-1e18)(xt._1.outgoing)), Jt = Tt(T(Tt)(1e18)(A.incoming))(T(Tt)(1e18)(nt)), _t = (() => {
                        const Qt = Ct(T(Ct)(-1e18)(A.incoming))(T(Ct)(-1e18)(nt)), Ot = T((on) => (vn) => vn > vt ? on : vn >= Gt ? on + 1 | 0 : on)(0)(nt) + T((on) => (vn) => vn > Qt ? on : vn >= Jt ? on + 1 | 0 : on)(0)(xt._1.incoming) | 0, me = Tt(T(Tt)(1e18)(A.incoming))(T(Tt)(1e18)(nt)), ee = Ct(T(Ct)(-1e18)(A.incoming))(T(Ct)(-1e18)(nt)), Un = Tt(T(Tt)(1e18)(xt._1.incoming))(T(Tt)(1e18)(xt._1.outgoing)), Qn = Ct(T(Ct)(-1e18)(xt._1.incoming))(T(Ct)(-1e18)(xt._1.outgoing)), sr = T((on) => (vn) => vn > ee ? on : vn >= me ? on + 1 | 0 : on)(0)(xt._1.outgoing) + T((on) => (vn) => vn > Qn ? on : vn >= Un ? on + 1 | 0 : on)(0)(A.incoming) | 0;
                        return Ot === sr ? Ot > 0 ? { ...Rt, deps: Rt.deps + 2 | 0, crossings: Rt.crossings + Ot | 0 } : Rt : { ...Rt, deps: Rt.deps + 1 | 0, crossings: Rt.crossings + $i(Ot)(sr) | 0 };
                      })(), yt = Tt(T(Tt)(1e18)(xt._1.incoming))(T(Tt)(1e18)(xt._1.outgoing)), ft = Ct(T(Ct)(-1e18)(xt._1.incoming))(T(Ct)(-1e18)(xt._1.outgoing)), mt = Tt(T(Tt)(1e18)(gt))(T(Tt)(1e18)(A.outgoing)), Ft = Ct(T(Ct)(-1e18)(gt))(T(Ct)(-1e18)(A.outgoing)), St = T((Qt) => (Ot) => Ot > ft ? Qt : Ot >= yt ? Qt + 1 | 0 : Qt)(0)(A.outgoing) + T((Qt) => (Ot) => Ot > Ft ? Qt : Ot >= mt ? Qt + 1 | 0 : Qt)(0)(xt._1.incoming) | 0, zt = Tt(T(Tt)(1e18)(gt))(T(Tt)(1e18)(A.outgoing)), tn = Ct(T(Ct)(-1e18)(gt))(T(Ct)(-1e18)(A.outgoing)), pe = Tt(T(Tt)(1e18)(xt._1.incoming))(T(Tt)(1e18)(xt._1.outgoing)), Mn = Ct(T(Ct)(-1e18)(xt._1.incoming))(T(Ct)(-1e18)(xt._1.outgoing)), jn = T((Qt) => (Ot) => Ot > tn ? Qt : Ot >= zt ? Qt + 1 | 0 : Qt)(0)(xt._1.outgoing) + T((Qt) => (Ot) => Ot > Mn ? Qt : Ot >= pe ? Qt + 1 | 0 : Qt)(0)(gt) | 0;
                      return St === jn ? St > 0 ? { ..._t, deps: _t.deps + 2 | 0, crossings: _t.crossings + St | 0 } : _t : { ..._t, deps: _t.deps + 1 | 0, crossings: _t.crossings + $i(St)(jn) | 0 };
                    }
                    f();
                  };
                })())(T((() => {
                  const Pt = q.segMap;
                  return (Rt) => (rn) => {
                    const xt = Kt(rn.src)(Pt);
                    if (xt.tag === "Nothing")
                      return Rt;
                    if (xt.tag === "Just") {
                      const Gt = Tt(T(Tt)(1e18)(xt._1.incoming))(T(Tt)(1e18)(xt._1.outgoing)), vt = Ct(T(Ct)(-1e18)(xt._1.incoming))(T(Ct)(-1e18)(xt._1.outgoing)), Jt = Tt(T(Tt)(1e18)(A.incoming))(T(Tt)(1e18)(nt)), _t = (() => {
                        const Qt = Ct(T(Ct)(-1e18)(A.incoming))(T(Ct)(-1e18)(nt)), Ot = T((on) => (vn) => vn > vt ? on : vn >= Gt ? on + 1 | 0 : on)(0)(nt) + T((on) => (vn) => vn > Qt ? on : vn >= Jt ? on + 1 | 0 : on)(0)(xt._1.incoming) | 0, me = Tt(T(Tt)(1e18)(A.incoming))(T(Tt)(1e18)(nt)), ee = Ct(T(Ct)(-1e18)(A.incoming))(T(Ct)(-1e18)(nt)), Un = Tt(T(Tt)(1e18)(xt._1.incoming))(T(Tt)(1e18)(xt._1.outgoing)), Qn = Ct(T(Ct)(-1e18)(xt._1.incoming))(T(Ct)(-1e18)(xt._1.outgoing)), sr = T((on) => (vn) => vn > ee ? on : vn >= me ? on + 1 | 0 : on)(0)(xt._1.outgoing) + T((on) => (vn) => vn > Qn ? on : vn >= Un ? on + 1 | 0 : on)(0)(A.incoming) | 0;
                        return Ot === sr ? Ot > 0 ? { ...Rt, deps: Rt.deps + 2 | 0, crossings: Rt.crossings + Ot | 0 } : Rt : { ...Rt, deps: Rt.deps + 1 | 0, crossings: Rt.crossings + $i(Ot)(sr) | 0 };
                      })(), yt = Tt(T(Tt)(1e18)(xt._1.incoming))(T(Tt)(1e18)(xt._1.outgoing)), ft = Ct(T(Ct)(-1e18)(xt._1.incoming))(T(Ct)(-1e18)(xt._1.outgoing)), mt = Tt(T(Tt)(1e18)(gt))(T(Tt)(1e18)(A.outgoing)), Ft = Ct(T(Ct)(-1e18)(gt))(T(Ct)(-1e18)(A.outgoing)), St = T((Qt) => (Ot) => Ot > ft ? Qt : Ot >= yt ? Qt + 1 | 0 : Qt)(0)(A.outgoing) + T((Qt) => (Ot) => Ot > Ft ? Qt : Ot >= mt ? Qt + 1 | 0 : Qt)(0)(xt._1.incoming) | 0, zt = Tt(T(Tt)(1e18)(gt))(T(Tt)(1e18)(A.outgoing)), tn = Ct(T(Ct)(-1e18)(gt))(T(Ct)(-1e18)(A.outgoing)), pe = Tt(T(Tt)(1e18)(xt._1.incoming))(T(Tt)(1e18)(xt._1.outgoing)), Mn = Ct(T(Ct)(-1e18)(xt._1.incoming))(T(Ct)(-1e18)(xt._1.outgoing)), jn = T((Qt) => (Ot) => Ot > tn ? Qt : Ot >= zt ? Qt + 1 | 0 : Qt)(0)(xt._1.outgoing) + T((Qt) => (Ot) => Ot > Mn ? Qt : Ot >= pe ? Qt + 1 | 0 : Qt)(0)(gt) | 0;
                      return St === jn ? St > 0 ? { ..._t, deps: _t.deps + 2 | 0, crossings: _t.crossings + St | 0 } : _t : { ..._t, deps: _t.deps + 1 | 0, crossings: _t.crossings + $i(St)(jn) | 0 };
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
                      const Pt = Tt(T(Tt)(1e18)($t._1.incoming))(T(Tt)(1e18)($t._1.outgoing)), Rt = Tt(T(Tt)(1e18)(gt))(T(Tt)(1e18)(A.outgoing)), rn = Ct(T(Ct)(-1e18)($t._1.incoming))(T(Ct)(-1e18)($t._1.outgoing)), xt = Ct(T(Ct)(-1e18)(gt))(T(Ct)(-1e18)(A.outgoing)), Gt = Tt(T(Tt)(1e18)(A.incoming))(T(Tt)(1e18)(nt));
                      return ct.crossings + (() => {
                        const vt = Tt(T(Tt)(1e18)($t._1.incoming))(T(Tt)(1e18)($t._1.outgoing)), Jt = Ct(T(Ct)(-1e18)(A.incoming))(T(Ct)(-1e18)(nt)), _t = Ct(T(Ct)(-1e18)($t._1.incoming))(T(Ct)(-1e18)($t._1.outgoing));
                        return ((T((yt) => (ft) => ft > rn ? yt : ft >= Pt ? yt + 1 | 0 : yt)(0)(nt) + T((yt) => (ft) => ft > Jt ? yt : ft >= Gt ? yt + 1 | 0 : yt)(0)($t._1.incoming) | 0) + T((yt) => (ft) => ft > xt ? yt : ft >= Rt ? yt + 1 | 0 : yt)(0)($t._1.outgoing) | 0) + T((yt) => (ft) => ft > _t ? yt : ft >= vt ? yt + 1 | 0 : yt)(0)(gt) | 0;
                      })() | 0;
                    })()
                  };
                if ($t.tag === "Nothing")
                  return ct;
                f();
              })()
            }))(L);
            return T((Z) => (et) => et.rating.crossings < Z.rating.crossings || !(et.rating.crossings > Z.rating.crossings) && (et.rating.deps < Z.rating.deps || !(et.rating.deps > Z.rating.deps) && et.c.a.size > Z.c.a.size) ? et : Z)(0 < O.length ? O[0] : { c: I._1, rating: { crossings: 1e6, deps: 1e6 } })(O).c;
          }
          f();
        })(), U = {
          ...A,
          incoming: It(st.compare)(A.incoming),
          outgoing: It(st.compare)([(z.a.startPosition + z.a.endPosition) / 2]),
          splitPartner: w("Just", q.nextId)
        }, K = {
          id: q.nextId,
          incoming: It(st.compare)([(z.a.startPosition + z.a.endPosition) / 2]),
          mark: 0,
          members: A.members,
          outgoing: It(st.compare)(A.outgoing),
          slot: 0,
          splitBy: v,
          splitPartner: w("Just", A.id)
        };
        return {
          segMap: tt(it)(K.id)(K)(tt(it)(U.id)(U)(q.segMap)),
          freeAreas: (() => {
            if (z.i >= 0 && z.i < q.freeAreas.length) {
              const O = X1(qt, v, z.i, q.freeAreas), Z = (() => {
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
          const q = It(st.compare)([
            ...Nt(d.segments)((A) => A.incoming),
            ...Nt(d.segments)((A) => A.outgoing)
          ]);
          return bt($T)(Ln(
            (A) => (R) => R - A >= 2 * _ ? w("Just", { startPosition: A + _, endPosition: R - _, size: R - A - 2 * _ }) : v,
            q,
            At(1, q.length, q)
          ));
        })(),
        nextId: d.segments.length
      })(It((q) => (A) => st.compare(Ct(T(Ct)(-1e18)(q.incoming))(T(Ct)(-1e18)(q.outgoing)) - Tt(T(Tt)(1e18)(q.incoming))(T(Tt)(1e18)(q.outgoing)))(Ct(T(Ct)(-1e18)(A.incoming))(T(Ct)(-1e18)(A.outgoing)) - Tt(T(Tt)(1e18)(A.incoming))(T(Tt)(1e18)(A.outgoing))))(bt((q) => Kt(q)(ot))(rt.decisions)));
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
            ...Nt(Nt(Vt(0, X - 2 | 0))((L) => Nt(Vt(L + 1 | 0, X - 1 | 0))((I) => [
              b(L, I)
            ])))((L) => L._1 >= 0 && L._1 < R.length ? L._2 >= 0 && L._2 < R.length ? R[L._1].splitPartner.tag !== "Nothing" && R[L._1].splitPartner.tag === "Just" && R[L._1].splitPartner._1 === R[L._2].id || R[L._2].splitPartner.tag !== "Nothing" && R[L._2].splitPartner.tag === "Just" && R[L._2].splitPartner._1 === R[L._1].id ? [] : i(_, R[L._1], R[L._2]) : [] : []),
            ...Nt(R)((L) => L.splitBy.tag === "Just" && L.splitPartner.tag === "Just" && (() => {
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
    })(), m = p.segments, h = m.length, $ = (B) => {
      let H = B, rt = !0, ot;
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
            inWeight: T((R) => (X) => Wt(it)(bn)(X.tgt)(-X.weight)(R))(M.inWeight)((() => {
              const R = Kt(A)(M.depsBySrc);
              if (R.tag === "Nothing")
                return [];
              if (R.tag === "Just")
                return R._1;
              f();
            })()),
            marks: tt(it)(A)(M.nextSource)(M.marks),
            nextSource: M.nextSource + 1 | 0,
            outWeight: T((R) => (X) => Wt(it)(bn)(X.src)(-X.weight)(R))(M.outWeight)((() => {
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
    }, x = (B) => {
      let H = B, rt = !0, ot;
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
            inWeight: T((R) => (X) => Wt(it)(bn)(X.tgt)(-X.weight)(R))(M.inWeight)((() => {
              const R = Kt(A)(M.depsBySrc);
              if (R.tag === "Nothing")
                return [];
              if (R.tag === "Just")
                return R._1;
              f();
            })()),
            marks: tt(it)(A)(M.nextSink)(M.marks),
            nextSink: M.nextSink - 1 | 0,
            outWeight: T((R) => (X) => Wt(it)(bn)(X.src)(-X.weight)(R))(M.outWeight)((() => {
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
        const q = $(x(H));
        if (q.remaining.length === 0) {
          rt = !1, ot = D((A) => {
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
          }, R = It((X) => (L) => it.compare(A(L))(A(X)))(q.remaining);
          if (0 < R.length) {
            const X = R[0];
            return {
              ...q,
              inWeight: T((L) => (I) => Wt(it)(bn)(I.tgt)(-I.weight)(L))(q.inWeight)((() => {
                const L = Kt(X)(q.depsBySrc);
                if (L.tag === "Nothing")
                  return [];
                if (L.tag === "Just")
                  return L._1;
                f();
              })()),
              marks: tt(it)(X)(q.nextSource)(q.marks),
              nextSource: q.nextSource + 1 | 0,
              outWeight: T((L) => (I) => Wt(it)(bn)(I.src)(-I.weight)(L))(q.outWeight)((() => {
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
      remaining: D((B) => B.id)(m),
      marks: G,
      inWeight: T((B) => (H) => Wt(it)(bn)(H.tgt)(H.weight)(B))(G)(p.deps),
      outWeight: T((B) => (H) => Wt(it)(bn)(H.src)(H.weight)(B))(G)(p.deps),
      depsBySrc: T((B) => (H) => Wt(it)(Nn)(H.src)([H])(B))(G)(p.deps),
      depsByTgt: T((B) => (H) => Wt(it)(Nn)(H.tgt)([H])(B))(G)(p.deps),
      nextSink: h - 1 | 0,
      nextSource: h + 1 | 0
    }), N = (() => {
      const B = (() => {
        const M = di(D((q) => b(q.id, q.mark))(J));
        return {
          segments: J,
          deps: bt((q) => (() => {
            if (q.kind === "Critical")
              return !0;
            if (q.kind === "Regular")
              return !1;
            f();
          })() ? w("Just", q) : (() => {
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
          })() ? q.weight === 0 ? v : w("Just", { src: q.tgt, tgt: q.src, weight: q.weight, kind: q.kind }) : w("Just", q))(p.deps)
        };
      })(), H = T((M) => (q) => Wt(it)(bn)(q.tgt)(1)(M))(G)(B.deps), ot = ((M) => {
        let q = M, A = !0, R;
        for (; A; ) {
          const X = q, L = Ht((I) => v, (I) => (z) => w("Just", { head: I, tail: z }), X.queue);
          if (L.tag === "Nothing") {
            A = !1, R = X;
            continue;
          }
          if (L.tag === "Just") {
            q = T((() => {
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
                  slots: tt(it)(K)(Gg((() => {
                    const et = Kt(K)(U.slots);
                    if (et.tag === "Nothing")
                      return 0;
                    if (et.tag === "Just")
                      return et._1;
                    f();
                  })())(z + 1 | 0))(U.slots),
                  inDegree: tt(it)(K)(Z)(U.inDegree),
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
        slots: di(D((M) => b(M.id, 0))(B.segments)),
        inDegree: H,
        adj: T((M) => (q) => Wt(it)(Nn)(q.src)([q.tgt])(M))(G)(B.deps),
        queue: D((M) => M.id)(ht(
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
      return It((M) => (q) => it.compare(M.slot)(q.slot))(D((M) => ({
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
    })(), C = 1 + T((B) => (H) => Gg(B)(H.slot))(0)(N) | 0, S = Nt(N)((B) => B.members), P = ht((B) => Ne(Lr)(B.edge.id)(S), t), E = T(Ct)(-1e18)(D((B) => B.fromPos._2)(P)), Q = T(Tt)(1e18)(D((B) => B.toPos._2)(P));
    if (E > Q) {
      const B = di(D((H) => b(H.id, H))(N));
      return Ee(D((H) => D((rt) => b(
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
                return w("Just", { slot: ot._1.slot, splitX: 0 < ot._1.incoming.length ? ot._1.incoming[0] : 0 });
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
    const W = di(D((B) => b(B.id, B))(N));
    return Ee(D((B) => D((H) => b(
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
              return w("Just", { slot: rt._1.slot, splitX: 0 < rt._1.incoming.length ? rt._1.incoming[0] : 0 });
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
  })()))(G)(mT(T((s) => (u) => {
    const a = Ci(u.edge.from.node)(e);
    if (a.tag === "Just") {
      const c = Ci(u.edge.to.node)(e);
      return c.tag === "Just" && a._1.layer !== c._1.layer ? Wt(it)(Nn)($i(a._1.layer)(c._1.layer))([u])(s) : s;
    }
    return s;
  })(G)((() => {
    const s = (u) => b(
      (() => {
        const a = Ci(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.layer : 1e6;
      })(),
      (() => {
        const a = Ci(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.order : 1e6;
      })()
    );
    return It((u) => (a) => pT(s(u))(s(a)))(t);
  })())));
}, xT = (t) => (n) => {
  const e = oh(t)(n), r = T((o) => (i) => tt(F)(i.node)(i)(o))(G)(n);
  return T((o) => (i) => {
    const s = Ci(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = Ci(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const a = yT(i.edge.id)(e);
        if (a.tag === "Just")
          return tt(it)($i(s._1.layer)(u._1.layer))(a._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(G)(t);
}, oa = /* @__PURE__ */ pn(F)(Yt), Dr = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, zc = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, vT = (t) => (e) => {
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
          o = !1, i = w("Just", s._4);
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
          o = !1, i = w("Just", s._4);
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
          o = !1, i = w("Just", s._4);
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Bg = (t) => (n) => {
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
}, Hc = (t) => (n) => {
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
}, Dg = (t) => (n) => T((e) => (r) => Wt(t)(Nn)(n(r))([r])(e))(G), zg = (t) => (n) => (e) => (r) => {
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
}, ih = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? G : oa(o === 1 ? D((i) => b(i, r))(n) : Xt((i) => (s) => b(s, t.lo + V(i + 1 | 0) * e / V(o + 1 | 0)))(n));
}, sh = (t) => (n) => (e) => (r) => (o) => {
  const i = Dg(F)((g) => g.to.node)(t), s = Dg(F)((g) => g.from.node)(t), u = T((g) => (p) => tt(F)(p.node)(p)(g))(G)(n), a = (g, p, m) => {
    const h = Dr(g)(u);
    if (h.tag === "Nothing")
      return b(0, 0);
    if (h.tag === "Just") {
      const $ = Dr(g)(e);
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
  }, c = oa(Nt(r)((g) => {
    if (g.nodes.length <= 2)
      return [];
    const p = V(4);
    if (1 < g.nodes.length) {
      const m = Dr(g.nodes[1])(u);
      if (m.tag === "Nothing")
        return [];
      if (m.tag === "Just") {
        const h = m._1.position._1 * p + m._1.size._1 * p / 2;
        return D(($) => b($, h))(Ln(
          ($) => (x) => g.edgeId + ":" + $ + "->" + x,
          g.nodes,
          At(1, g.nodes.length, g.nodes)
        ));
      }
      f();
    }
    return [];
  })), l = (g) => {
    const p = Dr(g.from.node)(u), m = Dr(g.to.node)(u);
    if (p.tag === "Just" && m.tag === "Just") {
      const h = p._1, $ = m._1, x = It((y) => (J) => it.compare(y.score)(J.score))(D((y) => {
        const J = y._1, N = y._2;
        return {
          from: J,
          to: N,
          score: (() => {
            const C = (Q, W, B, H, rt) => {
              const ot = Hc(Q)(W), M = Hc(Q)(B);
              return ot.lo < M.hi && M.lo < ot.hi && (J === "South" ? N === "North" && rt._2 > H._2 : J === "North" ? N === "South" && rt._2 < H._2 : J === "East" ? N === "West" && rt._1 > H._1 : J === "West" && N === "East" && rt._1 < H._1) ? 0 : zg(J)(N)(H)(rt);
            }, S = Bg(J)(h), P = Bg(N)($), E = zg(J)(N)(S)(P);
            return (() => {
              if (E > 0) {
                if (J === "South")
                  return N === "North" ? C(Bn, h, $, S, P) * 10 | 0 : E * 10 | 0;
                if (J === "North")
                  return N === "South" ? C(In, h, $, S, P) * 10 | 0 : E * 10 | 0;
                if (J === "East")
                  return N === "West" ? C(Or, h, $, S, P) * 10 | 0 : E * 10 | 0;
                if (J === "West" && N === "East")
                  return C(Wr, h, $, S, P) * 10 | 0;
              }
              return E * 10 | 0;
            })() + (J === "South" ? N === "North" ? $.layer >= h.layer ? 0 : 20 : 15 : J === "North" ? N === "South" ? $.layer <= h.layer ? 0 : 20 : 15 : J === "East" ? N === "West" ? 5 : 15 : J === "West" && N === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        b(Bn, In),
        b(Or, In),
        b(Wr, In),
        b(Bn, Or),
        b(Bn, Wr),
        b(In, Bn),
        b(In, Or),
        b(In, Wr),
        b(Or, Bn),
        b(Wr, Bn),
        b(Or, Wr),
        b(Wr, Or)
      ]));
      if (0 < x.length)
        return { from: x[0].from, to: x[0].to };
    }
    return { from: Bn, to: In };
  }, _ = oa(D((g) => b(g.id, l(g)))(t)), d = (g, p, m, h, $, x) => {
    const y = V(4), J = Dr(p)(u);
    if (J.tag === "Nothing")
      return b(0, 0);
    if (J.tag === "Just") {
      const N = vT(b(m, g))(o);
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
        const C = Hc(g)(J._1), S = (C.lo + C.hi) / 2, P = zc(m)(ih(C)(D((W) => W.id)(It((W) => (B) => st.compare($(g)(W))($(g)(B)))(ht(
          (W) => {
            const B = zc(W.id)(_);
            if (B.tag === "Just") {
              const H = x(B._1);
              return H === "North" ? g === "North" : H === "South" ? g === "South" : H === "East" ? g === "East" : H === "West" && g === "West";
            }
            if (B.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const W = Dr(p)(h);
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
  return D((g) => {
    const p = zc(g.edge.id)(c);
    if (p.tag === "Nothing")
      return g;
    if (p.tag === "Just")
      return {
        ...g,
        fromPos: On(3)(g.edge.from.node) === "$d:" ? b(p._1, g.fromPos._2) : g.fromPos,
        toPos: On(3)(g.edge.to.node) === "$d:" ? b(p._1, g.toPos._2) : g.toPos
      };
    f();
  })(D((g) => {
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
          const $ = Dr(h.to.node)(u);
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
          const $ = Dr(h.from.node)(u);
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
}, ia = /* @__PURE__ */ (() => {
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
})(), wT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = ia.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, TT = /* @__PURE__ */ pn(F)(Yt), Qc = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, NT = /* @__PURE__ */ pn(ia)(Yt), Hg = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), Ei = (t) => (n) => (e) => (r) => {
  const o = wT(b(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, uh = (t) => (n) => (e) => {
  const r = TT(Ee(D((s) => Xt((u) => (a) => b(a, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const a = Qc(u.to.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    }
    if (s === "North") {
      const a = Qc(u.from.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    }
    return 0;
  }, i = (s) => T((u) => (a) => Yn(
    ia.compare,
    Xn,
    NT(D((c) => b(b(c._1, s), c._2))(Hg(ih({
      lo: 0,
      hi: (() => {
        const c = Qc(a._1)(e);
        if (c.tag === "Just")
          return c._1._1;
        if (c.tag === "Nothing")
          return On(3)(a._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(D((c) => c.id)(It((c) => (l) => it.compare(o(s, c))(o(s, l)))(a._2)))))),
    u
  ))(G)(Hg(T((u) => (a) => a.from.node === a.to.node ? u : s === "South" ? Wt(F)(Nn)(a.from.node)([a])(u) : s === "North" ? Wt(F)(Nn)(a.to.node)([a])(u) : u)(G)(n)));
  return Yn(ia.compare, Xn, i(In), i(Bn));
}, ah = (t) => t, ch = (t) => t, fh = (t) => t, JT = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), CT = /* @__PURE__ */ (() => {
  const t = he.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return w("Just", b(n._1, n._2));
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ze = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Er = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, wr = /* @__PURE__ */ pn(F)(Yt), Oc = /* @__PURE__ */ V1(F), kf = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), bT = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, kT = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Qg = /* @__PURE__ */ fh("VDown"), Og = /* @__PURE__ */ fh("VUp"), ST = /* @__PURE__ */ ch("ForwardPhase"), LT = /* @__PURE__ */ ch("StackPhase"), Wg = /* @__PURE__ */ ah("HRight"), qg = /* @__PURE__ */ ah("HLeft"), Xg = (t) => (e) => {
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
}, ET = (t) => (n) => (e) => {
  const r = T((u) => (a) => Wt(F)(bn)(a.tgt)(1)(u))(G)(t), o = CT(JT([
    ...D((u) => u.src)(t),
    ...D((u) => u.tgt)(t),
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
  ])), i = T((u) => (a) => Wt(F)(Nn)(a.src)([{ target: a.tgt, sep: a.sep }])(u))(G)(t);
  return ((u) => (a) => (c) => {
    let l = u, _ = a, d = c, g = !0, p;
    for (; g; ) {
      const m = l, h = _, $ = d, x = Ht((y) => v, (y) => (J) => w("Just", { head: y, tail: J }), m);
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
        })(), N = T((C) => (S) => {
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
                  return ze(P._1)(E);
                if (e === "VUp")
                  return Er(P._1)(E);
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
  ))(r)(T((u) => (a) => tt(F)(a)(0)(u))(G)(o));
}, PT = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, kt("Cons", i._4, n(i._6, s)));
    f();
  }, e = jt(Jn.foldr, n(t, Y)), r = T(ze)(999999)(e);
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
}, lh = (t) => {
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
        u = Er(_)(d._1), a = d._2;
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
        u = ze(_)(d._1), a = d._2;
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
})())([n]), AT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => {
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
          const U = pt(R)(r), K = Ei(s)(A.id)(X)((() => {
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
        const z = pt(R)(r), U = Ei(s)(A.id)(X)((() => {
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
      const I = pt(R)(r), z = Ei(s)(A.id)(X)((() => {
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
  }, g = (A, R, X) => T((L) => (I) => tt(F)(I)((() => {
    const z = pt(I)(L);
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
  }, h = wr(Ee(Xt((A) => (R) => D((X) => b(X, A))(R))(e))), $ = (A, R) => On(3)(A) === "$d:" && On(3)(R) === "$d:" || On(3)(A) === "$d:" || On(3)(R) === "$d:" ? 10 : V(t.nodeGap), x = T((A) => (R) => Oc((X) => w(
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
  ))(R.to.node)(A))(G)(i), y = T((A) => (R) => Oc((X) => w(
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
  ))(R.from.node)(A))(G)(i), J = Ee(e), N = T((A) => (R) => {
    const X = pt(R)(a.root), L = (() => {
      if (X.tag === "Nothing")
        return R;
      if (X.tag === "Just")
        return X._1;
      f();
    })();
    return R === L ? A : Oc((I) => w(
      "Just",
      (() => {
        if (I.tag === "Nothing")
          return !0;
        if (I.tag === "Just")
          return I._1;
        f();
      })() && On(3)(R) === "$d:"
    ))(L)(A);
  })(wr(D((A) => b(A, !0))(Ii(F.compare)((() => {
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
    return T((K) => (O) => {
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
        })() ? { ...K, edge: w("Just", O), hasEdges: !0 } : { ...K, hasEdges: K.hasEdges || gt };
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
    })(), z = en((et) => Ne(Lr)(X)(et))(p), U = (() => {
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
    })(), Z = O >= 0 && O < U.length ? w("Just", U[O]) : v;
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
          const Qn = Er(pe + Un + m(Z._1) + Ot)(gt.thresh);
          return {
            st: { ...ct, x: tt(F)(A)(w("Just", R.initial ? Qn : Er(Qt)(Qn)))(ct.x) },
            initial: !1,
            thresh: gt.thresh
          };
        }
        if (c === "VUp") {
          const Qn = ze(pe + Un - Ot - m(X))(gt.thresh);
          return {
            st: { ...ct, x: tt(F)(A)(w("Just", R.initial ? Qn : ze(Qt)(Qn)))(ct.x) },
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
      })(), ft = V(t.nodeGap), mt = pt(X)(u), Ft = pt(Z._1)(u), St = (() => {
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
                  return yt + St - vt - m(Z._1) - ft;
                if (c === "VUp")
                  return yt + St + m(X) + ft - vt;
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
      const I = T(E(A))({
        st: { ...R, x: tt(F)(A)(w("Just", 0))(R.x) },
        initial: !0,
        thresh: (() => {
          if (c === "VDown")
            return -1e18;
          if (c === "VUp")
            return 1e18;
          f();
        })()
      })(ys(a)(A));
      return { ...I.st, blockFinished: tt(F)(A)(!0)(I.st.blockFinished) };
    }
    f();
  }, W = T((A) => (R) => T((X) => (L) => {
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
    x: wr(D((A) => b(A, v))(J)),
    sink: wr(D((A) => b(A, A))(J)),
    classEdges: [],
    su: G,
    blockFinished: G,
    queue: []
  })(p), B = ET(W.classEdges)(W.sink)(c), H = (A, R, X, L) => {
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
  }, rt = wr(D((A) => b(A, !0))(Ii(F.compare)((() => {
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
      })(), Z = { ...I, edgeId: w("Just", L.edge._1.id), delta: U };
      if (U > 0 && U < 1e300) {
        const et = T((ct) => ($t) => {
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
            return Jt >= 0 && Jt < Gt.length ? ze(ct)((() => {
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
          return xt >= 0 && xt < 0 ? ze(ct)((() => {
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
        })(U)(ys(a)(O)), nt = et > 0 ? -et : 0, gt = { ...R, x: et > 0 ? g(O, nt, R.x) : R.x, trace: [...R.trace, { ...Z, avail: et, shift: nt }] };
        return et > 0 ? gt : { ...gt, stack: [...gt.stack, X] };
      }
      if (U < 0 && -U < 1e300) {
        const et = T((ct) => ($t) => {
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
            return Jt >= 0 && Jt < Gt.length ? ze(ct)((() => {
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
          return xt >= 0 && xt < 0 ? ze(ct)((() => {
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
        })(-U)(ys(a)(O)), nt = et > 0 ? et : 0, gt = { ...R, x: et > 0 ? g(O, nt, R.x) : R.x, trace: [...R.trace, { ...Z, avail: et, shift: nt }] };
        return et > 0 ? gt : { ...gt, stack: [...gt.stack, X] };
      }
      return { ...R, stack: [...R.stack, X], trace: [...R.trace, Z], x: R.x };
    }
    f();
  }, M = T(ot(ST))({
    x: wr(D((A) => b(
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
  })(W.queue), q = T(ot(LT))({ ...M, stack: [] })(fn(M.stack));
  return { x: q.x, queue: W.queue, trace: q.trace };
}, RT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => AT(t)(n)(e)(r)(o)(i)(s)(u)(a)(c)(l).x, FT = (t) => (n) => (e) => (r) => (o) => (i) => {
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
          const h = Ei(o)(a.id)(l)(d);
          return l === "North" || l === "South" ? h : 0;
        }
        f();
      }
      if (p.tag === "Nothing") {
        const m = Ei(o)(a.id)(l)(d);
        return l === "North" || l === "South" ? m : 0;
      }
      f();
    }
    if (g.tag === "Nothing") {
      const p = Ei(o)(a.id)(l)(d);
      return l === "North" || l === "South" ? p : 0;
    }
    f();
  }, u = (a) => (c) => (l) => (_) => {
    let d = a, g = c, p = l, m = _, h = !0, $;
    for (; h; ) {
      const x = d, y = g, J = p, C = Ht((S) => v, (S) => (P) => w("Just", { head: S, tail: P }), m);
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
  return T((a) => (c) => {
    const l = Ht((g) => v, (g) => (p) => w("Just", { head: g, tail: p }), ys(t)(c)), _ = (() => {
      if (l.tag === "Nothing")
        return tt(F)(c)(0)(G);
      if (l.tag === "Just")
        return u(tt(F)(l._1.head)(0)(G))(0)(l._1.head)(l._1.tail);
      f();
    })(), d = T((g) => (p) => Er(g)(-p._2))(0)(kf(_));
    return T((g) => (p) => tt(F)(p._1)(p._2 + d)(g))(a)(kf(_));
  })(G)(Ii(F.compare)((() => {
    const a = (c, l) => {
      if (c.tag === "Leaf")
        return l;
      if (c.tag === "Node")
        return a(c._5, kt("Cons", c._4, a(c._6, l)));
      f();
    };
    return jt(Jn.foldr, a(t.root, Y));
  })()));
}, GT = (t) => (n) => {
  const e = (o, i, s) => On(3)(i) === "$d:" && Y1(
    eh,
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
      const P = C >= 0 && C < y.length ? w("Just", y[C]) : v, E = (() => {
        if (P.tag === "Nothing")
          return "";
        if (P.tag === "Just")
          return P._1;
        f();
      })(), Q = e(t, E);
      if (C === (S - 1 | 0) || Q) {
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
        _ = T((B) => (H) => {
          if (H >= 0 && H < y.length) {
            const rt = y[H];
            return e(t, rt) ? B : T((ot) => (M) => {
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
          return e(t, "") ? B : T((rt) => (ot) => {
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
        })(x)(Vt(0, C)), d = y, g = J, p = W, m = C + 1 | 0;
        continue;
      }
      _ = x, d = y, g = J, p = N, m = C + 1 | 0;
    }
    return $;
  };
  return n.length < 3 ? G : T((o) => (i) => {
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
}, IT = (t) => (n) => (e) => (r) => (o) => {
  const i = Ee(n), s = T((u) => (a) => {
    const c = T((l) => (_) => {
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
      const p = je(g - 1 | 0, 2), m = je(g, 2);
      return T((h) => ($) => {
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
          if (!(Xg(d[$] + "→" + _)(e) || Xg(_ + "→" + d[$])(e)) && (() => {
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
  })({ root: wr(D((u) => b(u, u))(i)), align: wr(D((u) => b(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return fn(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, Tu = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => {
  const l = IT(n)(e)(u)(a)(c), _ = FT(l)(o)(r)(i)(s)(c);
  return G2()((d) => (g) => w(
    "Just",
    (() => {
      const p = pt(d)(_);
      if (p.tag === "Nothing")
        return g + 0;
      if (p.tag === "Just")
        return g + p._1;
      f();
    })()
  ))(RT(t)(n)(e)(r)(o)(i)(s)(_)(l)(a)(c));
}, Yg = (t) => (n) => Xt((e) => (r) => T((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Vt(0, n.length - 1 | 0);
  return e < 1 ? [] : At(0, e, o);
})()))(n), BT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = bT(0)(n.length - 1 | 0), a = V(t.layerGap), c = s(p2(u, a)), l = xT(sh(o)(c)(r)(i)(G))(c);
  return D((_) => {
    const d = kT(_)(l);
    return d.tag === "Just" && d._1 > 0 ? Er(a)(2 + V(d._1 - 1 | 0) * 2.5) : a;
  })(Vt(0, u - 1 | 0));
}, gh = (t) => (n) => (e) => (r) => Y1(
  (o) => T((i) => (s) => {
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
), DT = (t) => (n) => (e) => (r) => {
  const o = It((i) => (s) => st.compare(i.w)(s.w))(D((i) => ({ l: i, w: lh(i) }))(ht(
    gh()(n)(e),
    r
  )));
  return 0 < o.length ? w("Just", o[0].l) : v;
}, zT = (t) => (n) => {
  const e = wr(Ee(D(Xt((o) => (i) => b(i, o)))(t))), r = (o) => It((i) => (s) => it.compare((() => {
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
      return o(T((i) => (s) => Wt(F)(Nn)(s.to.node)([s.from.node])(i))(G)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return G;
        if (i.tag === "Node")
          return Zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(T((i) => (s) => Wt(F)(Nn)(s.from.node)([s.to.node])(i))(G)(n));
    })(),
    nodeIndex: e
  };
}, HT = (t) => (n) => {
  const e = It((_) => (d) => st.compare(_.w)(d.w))(Xt((_) => (d) => ({ i: _, l: d, w: lh(d) }))(n)), r = 0 < e.length ? w("Just", e[0]) : v, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? w("Just", n[o]) : v, s = (() => {
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
            p = ze(x)(y._1), m = y._2;
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
  })(), u = (_) => T((d) => (g) => Er(d)((() => {
    const p = pt(g._1)(t);
    if (p.tag === "Nothing")
      return g._2 + 1;
    if (p.tag === "Just")
      return g._2 + p._1._1;
    f();
  })()))(-999999)(kf(_)), a = o >= 0 && o < n.length ? w("Just", n[o]) : v, c = (() => {
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
    Xt((_) => (d) => Vr(_)(2) === 0 ? s - ((p) => (m) => {
      let h = p, $ = m, x = !0, y;
      for (; x; ) {
        const J = h, N = $;
        if (N.tag === "Nil") {
          x = !1, y = J;
          continue;
        }
        if (N.tag === "Cons") {
          h = ze(J)(N._1), $ = N._2;
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
  return PT(T((_) => (d) => {
    const g = It(st.compare)(bt(pt(d))(l));
    return tt(F)(d)(g.length === 4 ? 1 < g.length && 2 < g.length ? (g[1] + g[2]) / 2 : 0 : 0 < g.length ? g[0] : 0)(_);
  })(G)(Ii(F.compare)(Ee(D((_) => {
    const d = (g) => {
      if (g.tag === "Leaf")
        return G;
      if (g.tag === "Node")
        return Zt("Node", g._1, g._2, g._3, void 0, d(g._5), d(g._6));
      f();
    };
    return jt(be.foldr, d(_));
  })(l)))));
}, QT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = zT(n)(o), u = GT(s)(n), a = { nodeGap: t.nodeGap * 4 | 0 }, c = Yn(
    F.compare,
    Xn,
    wr(D((g) => b(g, b(1, 1)))(ht(
      eh,
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
    Tu(a)(s)(n)(c)(r)(o)(i)(u)(Qg)(Wg),
    Tu(a)(s)(n)(c)(r)(o)(i)(u)(Og)(Wg),
    Tu(a)(s)(n)(c)(r)(o)(i)(u)(Qg)(qg),
    Tu(a)(s)(n)(c)(r)(o)(i)(u)(Og)(qg)
  ], _ = HT(c)(l);
  if (gh()(n)(c)(_))
    return _;
  const d = DT()(n)(c)(l);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return l[0];
  f();
}, OT = (t) => (n) => (e) => (r) => {
  const o = W1(
    v,
    B1,
    (i) => i.node === n ? w("Just", i.position) : v,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return D((s) => s.node === e ? { ...s, position: b(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, WT = (t) => (n) => (e) => (r) => {
  const o = ht((s) => Ne(Lr)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return T((s) => (u) => ze(s)(u.position._1))(99999)(o);
      if (r === "End")
        return T((s) => (u) => Er(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = T((u) => (a) => u + a.position._1)(0)(o);
        return o.length === 0 ? 0 : s / V(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return T((s) => (u) => ze(s)(u.position._2))(99999)(o);
      if (r === "End")
        return T((s) => (u) => Er(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = T((u) => (a) => u + a.position._2)(0)(o);
        return o.length === 0 ? 0 : s / V(o.length);
      }
    }
    f();
  })();
  return D((s) => {
    if (Ne(Lr)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: b(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: b(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, qT = (t) => (n) => T((e) => (r) => r.tag === "AlignGroup" ? WT(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? OT(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), XT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = D((_) => T((d) => (g) => Er(d)((() => {
    const p = pt(g)(r);
    if (p.tag === "Nothing")
      return 1;
    if (p.tag === "Just")
      return p._1._2;
    f();
  })()))(1)(_))(e), c = QT(t)(e)(r)(o)(i)(u), l = Yg(BT(t)(e)(r)(o)(i)(s)((_) => {
    const d = Yg(_)(a);
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
  return qT(n)(Ee(Xt((_) => (d) => Xt((g) => (p) => ({
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
}, Wc = /* @__PURE__ */ B0(Xu)(/* @__PURE__ */ Ko(32)), Mg = /* @__PURE__ */ B0(Xu)(/* @__PURE__ */ Ko(31)), Rs = /* @__PURE__ */ (() => {
  const t = wy("25214903917");
  if (t.tag === "Nothing")
    return ad;
  if (t.tag === "Just")
    return t._1;
  f();
})(), Fs = /* @__PURE__ */ pf(/* @__PURE__ */ B0(Xu)(/* @__PURE__ */ Ko(48)))(Xu), YT = (t) => {
  const n = Ty(t);
  return Ls(cd((() => {
    if (n.tag === "Nothing")
      return ad;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(Rs))(Fs);
}, Sf = /* @__PURE__ */ Ko(11), sa = (t) => (n) => {
  const e = Ls(Ru(Fu(n)(Rs))(Sf))(Fs);
  return b(
    (() => {
      const r = M1($y(mf(e)(Ko(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, MT = (t) => {
  const n = sa(26)(t), e = sa(27)(n._2);
  return b((V(n._1) * Di(2)(27) + V(e._1)) / Di(2)(53), e._2);
}, UT = (t) => (n) => {
  const e = T((r) => (o) => {
    const i = MT(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return b(
    D((r) => r.x)(It((r) => (o) => st.compare(r.k)(o.k))(Ln((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, KT = (t) => {
  const n = Ls(Ru(Fu(t)(Rs))(Sf))(Fs), e = Ls(Ru(Fu(n)(Rs))(Sf))(Fs);
  return b(
    Ru(Fu((() => {
      const r = mf(n)(Ko(16));
      return lg.compare(r)(Mg) !== "LT" ? pf(r)(Wc) : r;
    })())(Wc))((() => {
      const r = mf(e)(Ko(16));
      return lg.compare(r)(Mg) !== "LT" ? pf(r)(Wc) : r;
    })()),
    e
  );
}, Gs = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
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
}, el = /* @__PURE__ */ pn(F)(Yt), bi = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, aa = /* @__PURE__ */ pn(F)(Yt), VT = /* @__PURE__ */ Us(ii), jT = /* @__PURE__ */ T(fr)(0), ZT = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ug = (t) => (e) => {
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
}, tN = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = po(qt, v, t, e[n], e);
      if (o.tag === "Just")
        return po(qt, v, n, r, o._1);
      if (o.tag === "Nothing")
        return v;
      f();
    }
  }
  return v;
}, nN = (t) => (n) => (e) => (r) => (o) => el(T((i) => (s) => {
  const u = It((a) => (c) => it.compare((() => {
    const l = Gs(a.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })())((() => {
    const l = Gs(c.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })()))(ht((a) => ua(a.to.node)(e), ht((a) => a.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Xt((a) => (c) => b(c.id, V((i.rankSum + a | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), eN = (t) => (n) => (e) => (r) => (o) => el(T((i) => (s) => {
  const u = It((c) => (l) => {
    const _ = it.compare((() => {
      const d = bi(l.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = bi(c.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })());
    return _ === "EQ" ? it.compare((() => {
      const d = Gs(c.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Gs(l.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })()) : _;
  })(ht((c) => ua(c.from.node)(e), ht((c) => c.to.node === s, r))), a = u.length;
  return {
    ranks: [...i.ranks, ...Xt((c) => (l) => b(l.id, V((i.rankSum + a | 0) - c | 0)))(u)],
    rankSum: i.rankSum + a | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), Lf = (t) => (n) => (e) => {
  const r = aa(Xt((u) => (a) => b(a, u))(t)), o = aa(Xt((u) => (a) => b(a, u))(n)), i = bt((u) => {
    const a = bi(u.from.node)(r), c = bi(u.to.node)(o);
    if (a.tag === "Just" && c.tag === "Just")
      return w("Just", b(a._1, c._1));
    const l = bi(u.from.node)(o), _ = bi(u.to.node)(r);
    return l.tag === "Just" && _.tag === "Just" ? w("Just", b(_._1, l._1)) : v;
  })(e), s = i.length;
  return T((u) => (a) => T((c) => (l) => a >= 0 && a < i.length && l >= 0 && l < i.length && ((i[a]._1 - i[l]._1 | 0) * (i[a]._2 - i[l]._2 | 0) | 0) < 0 ? c + 1 | 0 : c)(u)(Vt(a + 1 | 0, s - 1 | 0)))(0)(Vt(0, s - 2 | 0));
}, rN = (t) => (n) => (e) => (r) => {
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
          const $ = po(qt, v, g, h, d), x = (() => {
            if ($.tag === "Just")
              return po(qt, v, g + 1 | 0, m, $._1);
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
          if (Lf(n)(y)(e) < Lf(n)(d)(e)) {
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
      if (VT(_)(l)) {
        a = !1, c = l;
        continue;
      }
      u = _;
    }
    return c;
  })(t);
}, Nu = (t) => (n) => T((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + Lf(o)(t[i])(n) | 0;
  }
  return e;
})(0)(Vt(0, t.length - 2 | 0)), oN = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (a) => {
        let c = u, l = a, _ = !0, d;
        for (; _; ) {
          const g = c, p = l, m = p - 1 | 0;
          if (m >= 0 && m < g.length) {
            if (p >= 0 && p < g.length && p > 0 && g[m].key > g[p].key) {
              const h = tN(p - 1 | 0)(p)(g);
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
      return T((u) => (a) => s(u)(a))(n)(Vt(1, n.length - 1 | 0));
    }
    const e = je(n.length, 2), r = t(At(0, e, n)), o = t(At(e, n.length, n));
    return ((s) => (u) => (a) => {
      let c = s, l = u, _ = a, d = !0, g;
      for (; d; ) {
        const p = c, m = l, h = _;
        if (m >= 0 && m < r.length) {
          if (h >= 0 && h < o.length) {
            if (r[m].key > o[h].key) {
              c = Lt(p)(o[h]), l = m, _ = h + 1 | 0;
              continue;
            }
            c = Lt(p)(r[m]), l = m + 1 | 0, _ = h;
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
})(), iN = (t) => (n) => (e) => {
  const r = bt((c) => c.tag === "OrderConstraint" ? w("Just", { before: c._1.before, after: c._1.after }) : v)(t.constraints), o = (c) => T((l) => (_) => {
    const d = _.after, g = _.before, p = Uo(qt, v, (h) => h === g, l), m = Uo(qt, v, (h) => h === d, l);
    if (p.tag === "Just" && m.tag === "Just" && p._1 > m._1) {
      const h = X1(qt, v, p._1, l), $ = (() => {
        if (h.tag === "Nothing")
          return l;
        if (h.tag === "Just")
          return h._1;
        f();
      })(), x = q1(qt, v, m._1, g, $);
      if (x.tag === "Nothing")
        return $;
      if (x.tag === "Just")
        return x._1;
      f();
    }
    return l;
  })(c)(r), i = el(Xt((c) => (l) => b(l.id, c))(e)), s = (c, l, _) => {
    const d = c.length;
    return T((g) => (p) => {
      const m = l ? p - 1 | 0 : p + 1 | 0, h = m >= 0 && m < g._1.length ? w("Just", g._1[m]) : v;
      if (h.tag === "Just") {
        const $ = p >= 0 && p < g._1.length ? w("Just", g._1[p]) : v;
        if ($.tag === "Just") {
          const x = aa(Xt((S) => (P) => b(P, S))(h._1)), y = aa(Xt((S) => (P) => b(P, S))($._1)), J = l ? nN(h._1)(x)(y)(e)(i) : eN(h._1)(x)(y)(e)(i), N = T((S) => (P) => {
            const E = bt((W) => Gs(W.id)(J))(ht(l ? (W) => W.to.node === P._2 && ua(W.from.node)(x) : (W) => W.from.node === P._2 && ua(W.to.node)(x), e));
            if (E.length === 0)
              return { ...S, items: [...S.items, { n: P._2, key: v, origIdx: P._1 }] };
            const Q = sa(24)(S.r);
            return {
              items: [
                ...S.items,
                {
                  n: P._2,
                  key: w("Just", (jT(E) + (V(Q._1) * 4172325152040912e-24 - 0.03500000014901161)) / V(E.length)),
                  origIdx: P._1
                }
              ],
              r: Q._2
            };
          })({ items: [], r: g._2 })(Xt(Vn)($._1)), C = po(
            qt,
            v,
            p,
            rN(o(D((S) => S.n)(oN((() => {
              const S = N.items, P = (Q) => (W) => {
                let B = Q, H = W, rt = !0, ot;
                for (; rt; ) {
                  const M = B, q = H;
                  if (M >= 0 && M < S.length) {
                    if (S[M].key.tag === "Just") {
                      rt = !1, ot = S[M].key._1;
                      continue;
                    }
                    if (S[M].key.tag === "Nothing") {
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
  }, u = T((c) => (l) => tt(F)(l.from.node)()(tt(F)(l.to.node)()(c)))(G)(e), a = T((c) => (l) => {
    if (c.result.crossings === 0)
      return c;
    const _ = (x) => (y) => (J) => (N) => {
      let C = x, S = y, P = J, E = N, Q = !0, W;
      for (; Q; ) {
        const B = C, H = S, rt = P, ot = E;
        if (rt === 0) {
          Q = !1, W = { layout: B, crossings: 0, random: ot };
          continue;
        }
        const M = s(B, H, ot), q = Nu(M._1)(e);
        if (q < rt) {
          C = M._1, S = !H, P = q, E = M._2;
          continue;
        }
        Q = !1, W = { layout: B, crossings: rt, random: M._2 };
      }
      return W;
    }, d = sa(1)(c.result.random), g = d._1 !== 0, p = t.modelOrder.tag === "Leaf", m = (c.firstTry || c.secondTry) && !p ? c.firstTry : g, h = (() => {
      if (!p) {
        const N = s(n, m, d._2);
        return _(N._1)(!m)(Nu(N._1)(e))(N._2);
      }
      const x = m ? 0 : ZT(0)(n.length - 1 | 0), y = x >= 0 && x < n.length ? w("Just", n[x]) : v;
      if (y.tag === "Just" && y._1.length > 1) {
        const N = ht((C) => Ug(C)(u), y._1);
        if (N.length > 1) {
          const C = UT(d._2)(N), S = C._1, P = po(
            qt,
            v,
            x,
            o(T((E) => (Q) => Ug(Q)(u) ? E.idx >= 0 && E.idx < S.length ? { idx: E.idx + 1 | 0, result: [...E.result, S[E.idx]] } : { idx: E.idx, result: [...E.result, Q] } : { idx: E.idx, result: [...E.result, Q] })({ idx: 0, result: [] })(y._1).result),
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
      random: Ls(cd(KT(YT(1))._1)(Rs))(Fs)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(Vt(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : a.layout;
}, sN = (t) => t, Kg = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Xi = (t) => (e) => {
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
}, Is = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = F.compare(n._1)(e._1);
      return r === "LT" ? Wn : r === "GT" ? qn : F.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), uN = /* @__PURE__ */ pn(F)(Yt), aN = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = Is.compare(t)(s._3);
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
}, cN = /* @__PURE__ */ sN("Greedy"), qc = (t) => (n) => (e) => T((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !Kg(o.to.node)(r.marks)) {
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
      })() && !Ne(Lr)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !Kg(o.from.node)(r.marks)) {
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
      })() && !Ne(Lr)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: ht((r) => r !== n, e.remaining) })(t), fN = /* @__PURE__ */ T((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return tt(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return tt(F)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return tt(F)(n._1.node)(99999)(t);
  }
  return t;
})(G), _h = (t) => (n) => (e) => {
  const r = xe(n)(t), o = xe(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, dh = (t) => (n) => (e) => (r) => {
  if (Xi(e)(r.visited) || Xi(e)(r.visiting))
    return r;
  const o = T(lN(t)(n)(e))({ ...r, visiting: tt(F)(e)()(r.visiting) })((() => {
    const i = xe(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: Hi(F)(e)(o.visiting),
    visited: tt(F)(e)()(o.visited)
  };
}, lN = (t) => (n) => (e) => (r) => (o) => _h(t)(e)(o) ? { ...r, backEdges: tt(Is)(b(e, o))()(r.backEdges) } : Xi(o)(r.visiting) ? { ...r, backEdges: tt(Is)(b(e, o))()(r.backEdges) } : Xi(o)(r.visited) ? r : dh(t)(n)(o)(r), gN = (t) => (n) => (e) => {
  const r = (d) => {
    let g = d, p = !0, m;
    for (; p; ) {
      const h = g, $ = Ht((x) => v, (x) => (y) => w("Just", { head: x, tail: y }), h.sinks);
      if ($.tag === "Just") {
        g = qc(e)($._1.head)({
          ...h,
          sinks: $._1.tail,
          marks: tt(F)($._1.head)(h.nextRight)(h.marks),
          nextRight: h.nextRight - 1 | 0
        });
        continue;
      }
      if ($.tag === "Nothing") {
        const x = Ht((y) => v, (y) => (J) => w("Just", { head: y, tail: J }), h.sources);
        if (x.tag === "Just") {
          g = qc(e)(x._1.head)({
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
            const S = it.compare(y(C))(y(N));
            return S === "EQ" ? it.compare((() => {
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
            g = qc(e)(N)({
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
  }, o = Ii(F.compare)([...D((d) => d.from.node)(e), ...D((d) => d.to.node)(e)]), i = ht((d) => d.from.node !== d.to.node, e), s = T((d) => (g) => Wt(F)(bn)(g.to.node)(1)(d))(G)(i), u = T((d) => (g) => Wt(F)(bn)(g.from.node)(1)(d))(G)(i), a = ht(
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
  ), l = o.length + 1 | 0, _ = T((d) => (g) => {
    const p = xe(g)(d);
    return p.tag === "Just" && p._1 < 0 ? tt(F)(g)(p._1 + l | 0)(d) : d;
  })(r({
    remaining: ht((d) => !Ne(Lr)(d)(a) && !Ne(Lr)(d)(c), o),
    marks: G,
    inDeg: s,
    outDeg: u,
    sources: a,
    sinks: c,
    nextLeft: 1,
    nextRight: -1
  }).marks)(o);
  return T((d) => (g) => {
    if (g.from.node === g.to.node)
      return d;
    if (_h(t)(g.from.node)(g.to.node))
      return tt(Is)(b(g.from.node, g.to.node))()(d);
    const p = xe(g.from.node)(_), m = xe(g.to.node)(_);
    return p.tag === "Just" && m.tag === "Just" && p._1 > m._1 ? tt(Is)(b(g.from.node, g.to.node))()(d) : d;
  })(G)(e);
}, _N = /* @__PURE__ */ T((t) => (n) => Wt(F)(Nn)(n.from.node)([n.to.node])(t))(G), dN = (t) => (n) => {
  const e = _N(n), r = Ii(F.compare)([...D((i) => i.from.node)(n), ...D((i) => i.to.node)(n)]), o = T((i) => (s) => tt(F)(s.to.node)()(i))(G)(n);
  return T((i) => (s) => dh(t)(e)(s)(i))({
    visiting: G,
    visited: G,
    backEdges: G
  })([...ht((i) => !Xi(i)(o), r), ...ht((i) => Xi(i)(o), r)]).backEdges;
}, hN = (t) => (n) => (e) => (r) => {
  const o = uN(Xt((u) => (a) => b(a, u))(n)), i = fN(e), s = (() => {
    if (t === "DepthFirst")
      return dN(i)(r);
    if (t === "Greedy")
      return gN(i)(o)(r);
    f();
  })();
  return {
    edges: D((u) => aN(b(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, hh = Yt.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), Fn = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Gn = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xs = (t) => (n) => (e) => (r) => hh((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), ca = (t) => (n) => (e) => (r) => xs(Fn(n)(e))(Gn(n)(e))(r)(t), Ju = /* @__PURE__ */ V(4), pN = /* @__PURE__ */ Ba((t) => {
  if (t.direction === "H") {
    const n = Fn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: Gn(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = Fn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: Gn(t.start._2)(t.end._2) - n }];
  }
  f();
}), Bs = /* @__PURE__ */ ws((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), mN = (t) => (n) => (e) => {
  const r = Ht((o) => v, (o) => (i) => w("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = rr(r._1.tail);
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
}, Ds = (t) => {
  const n = (r) => (o) => {
    const i = Ht((s) => v, (s) => (u) => w("Just", { head: s, tail: u }), o);
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
  }, e = Ht((r) => v, (r) => (o) => w("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, vs = (t) => (n) => (e) => (r) => hh((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), Js = (t) => (n) => (e) => (r) => vs(Fn(n)(e))(Gn(n)(e))(r)(t), $N = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : At(o, n.length, n), s = e < 1 ? [] : At(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), a = e === 0, c = e >= 0 && e < n.length ? w("Just", n[e]) : v;
  if (c.tag === "Just") {
    const l = e + 1 | 0, _ = l >= 0 && l < n.length ? w("Just", n[l]) : v;
    if (_.tag === "Just") {
      const d = c._1.start._1 === _._1.end._1 && (!a || c._1.direction === "V") && (!u || _._1.direction === "V") && !ca(t)(Fn(c._1.start._2)(_._1.end._2))(Gn(c._1.start._2)(_._1.end._2))(c._1.start._1) ? w("Just", [...s, { start: c._1.start, end: _._1.end, direction: xn }, ...i]) : v, g = c._1.start._2 === _._1.end._2 && (!a || c._1.direction === "H") && (!u || _._1.direction === "H") && !Js(t)(Fn(c._1.start._1)(_._1.end._1))(Gn(c._1.start._1)(_._1.end._1))(c._1.start._2) ? w("Just", [...s, { start: c._1.start, end: _._1.end, direction: yn }, ...i]) : v;
      return d.tag === "Nothing" ? g : d;
    }
    if (_.tag === "Nothing")
      return v;
    f();
  }
  if (c.tag === "Nothing")
    return v;
  f();
}, yN = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const c = $N(t)(n)(a)(e);
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
}, xN = (t) => (n) => (e) => (r) => {
  const o = (d, g, p) => !ca(t)(Fn(g)(p))(Gn(g)(p))(d), i = e + 3 | 0, s = i < 1 ? n : At(i, n.length, n), u = e < 1 ? [] : At(0, e, n), a = (e + 2 | 0) === (r - 1 | 0), c = e === 0, l = (d, g, p) => !Js(t)(Fn(g)(p))(Gn(g)(p))(d), _ = e >= 0 && e < n.length ? w("Just", n[e]) : v;
  if (_.tag === "Just") {
    const d = e + 2 | 0, g = d >= 0 && d < n.length ? w("Just", n[d]) : v;
    if (g.tag === "Just") {
      const p = _._1.start._1 === g._1.end._1 && (!c || _._1.direction === "V") && (!a || g._1.direction === "V") && o(_._1.start._1, _._1.start._2, g._1.end._2) ? w("Just", [...u, { start: _._1.start, end: g._1.end, direction: xn }, ...s]) : _._1.start._2 === g._1.end._2 && (!c || _._1.direction === "H") && (!a || g._1.direction === "H") && l(_._1.start._2, _._1.start._1, g._1.end._1) ? w("Just", [...u, { start: _._1.start, end: g._1.end, direction: yn }, ...s]) : v, m = (!c || _._1.direction === "V") && (!a || g._1.direction === "H") && o(_._1.start._1, _._1.start._2, g._1.end._2) && l(
        g._1.end._2,
        _._1.start._1,
        g._1.end._1
      ) ? w(
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
      ) ? w(
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
}, vN = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 2 | 0) >= e) {
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
}, wN = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = Ds(Bs(yN(t)(vN(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(Ds(Bs(e)));
}, TN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = It((c) => (l) => st.compare(c.x)(l.x))(s);
    return 0 < a.length ? a[0].x - 1 : (e + r) / 2;
  }
  const u = It((a) => (c) => st.compare(c.x)(a.x))(D((a) => ({ ...a, x: a.x + a.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, NN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = It((c) => (l) => st.compare(c.y)(l.y))(s);
    return 0 < a.length ? a[0].y - 1 : (e + r) / 2;
  }
  const u = It((a) => (c) => st.compare(c.y)(a.y))(D((a) => ({ ...a, y: a.y + a.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, JN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = It((c) => (l) => st.compare(l.x)(c.x))(D((c) => ({ ...c, x: c.x + c.w }))(s));
    return 0 < a.length ? a[0].x : (e + r) / 2;
  }
  const u = It((a) => (c) => st.compare(a.x)(c.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, CN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = It((c) => (l) => st.compare(l.y)(c.y))(D((c) => ({ ...c, y: c.y + c.h }))(s));
    return 0 < a.length ? a[0].y : (e + r) / 2;
  }
  const u = It((a) => (c) => st.compare(a.y)(c.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, ph = (t) => (n) => (e) => {
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
}, Vg = (t) => (n) => (e) => (r) => (o) => {
  const i = Fn(n)(e), s = Gn(n)(e);
  if (!xs(i)(s)(r)(t))
    return r;
  if (!xs(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return xs(i)(s)(u)(t) ? ph((a) => xs(i)(s)(a)(t))(u)(1) : u;
}, bN = (t) => (n) => (e) => (r) => (o) => {
  const i = Fn(n)(e), s = Gn(n)(e);
  if (!vs(i)(s)(r)(t))
    return r;
  if (!vs(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return vs(i)(s)(u)(t) ? ph((a) => vs(i)(s)(a)(t))(u)(1) : u;
}, kN = (t) => (n) => (e) => (r) => {
  const o = Fn(n)(e), i = Gn(n)(e), s = ht((c) => r >= c.x && r < c.x + c.w && c.y + c.h > o && c.y < i, t), u = T((c) => (l) => Gn(c)(l.x + l.w + 4))(r + 4)(s), a = T((c) => (l) => Fn(c)(l.x - 4))(r - 4)(s);
  return (() => {
    const c = u - r, l = a - r;
    return (c < 0 ? -c : c) <= (l < 0 ? -l : l);
  })() ? u : a;
}, SN = (t) => (n) => (e) => (r) => {
  const o = Fn(n)(e), i = Gn(n)(e), s = ht((c) => r >= c.y && r < c.y + c.h && c.x + c.w > o && c.x < i, t), u = T((c) => (l) => Gn(c)(l.y + l.h + 4))(r + 4)(s), a = T((c) => (l) => Fn(c)(l.y - 4))(r - 4)(s);
  return (() => {
    const c = u - r, l = a - r;
    return (c < 0 ? -c : c) <= (l < 0 ? -l : l);
  })() ? u : a;
}, LN = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  })(), c = (N, C, S) => !ca(n)(Fn(C)(S))(Gn(C)(S))(N), l = (N, C, S) => !ca(e)(Fn(C)(S))(Gn(C)(S))(N), _ = (N, C, S, P) => t.tag === "Just" && !Js(e)(Fn(N)(C))(Gn(N)(C))(t._1) ? t._1 : bN(n)(N)(C)(S)(P), d = (N, C, S, P) => {
    if (N === S) {
      const Q = kN(n)(C)(P)(N), W = NN(n)(N)(C)(P), B = CN(n)(N)(C)(P);
      return [
        { start: b(N, C), end: b(N, W), direction: xn },
        { start: b(N, W), end: b(Q, W), direction: yn },
        { start: b(Q, W), end: b(Q, B), direction: xn },
        { start: b(Q, B), end: b(S, B), direction: yn },
        { start: b(S, B), end: b(S, P), direction: xn }
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
      const Q = SN(n)(N)(S)(C), W = TN(n)(C)(N)(S), B = JN(n)(C)(N)(S);
      return [
        { start: b(N, C), end: b(W, C), direction: yn },
        { start: b(W, C), end: b(W, Q), direction: xn },
        { start: b(W, Q), end: b(B, Q), direction: yn },
        { start: b(B, Q), end: b(B, P), direction: xn },
        { start: b(B, P), end: b(S, P), direction: yn }
      ];
    }
    const E = Vg(n)(C)(P)(N)(S);
    return [
      { start: b(N, C), end: b(E, C), direction: yn },
      { start: b(E, C), end: b(E, P), direction: xn },
      { start: b(E, P), end: b(S, P), direction: yn }
    ];
  }, p = (N, C, S) => !Js(n)(Fn(C)(S))(Gn(C)(S))(N), m = (N, C, S) => !Js(e)(Fn(C)(S))(Gn(C)(S))(N), h = (N, C, S, P) => {
    if (m(C, N, S) && l(S, C, P))
      return [
        { start: b(N, C), end: b(S, C), direction: yn },
        { start: b(S, C), end: b(S, P), direction: xn }
      ];
    const E = Vg(n)(C)(P)(N)(S);
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
  return u._1 === a._1 && u._2 === a._2 ? [{ start: b(o._1, o._2), end: b(s._1, s._2), direction: y }] : mN({ start: b(o._1, o._2), end: b(u._1, u._2), direction: y })(x)(J);
}, EN = /* @__PURE__ */ D((t) => ({ x: t.position._1 * Ju - 2, y: t.position._2 * Ju - 2, w: t.size._1 * Ju + 4, h: t.size._2 * Ju + 4 })), mh = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, PN = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), Ef = (t) => (n) => t.gapTop + 1 * V(4) + V(n) * 2.5 * V(4), AN = (t) => (n) => {
  const e = mh(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return w("Just", { slot1Y: Ef(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: Ef(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return v;
    f();
  }
  if (e.tag === "Nothing")
    return v;
  f();
}, RN = (t) => (n) => {
  const e = T((r) => (o) => tt(F)(o.node)(o)(r))(G)(n);
  return Ee(Xt((r) => (o) => {
    const i = Pi(o.node)(e);
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
  })(D((r) => ({ node: r._1, edges: r._2 }))(PN(T((r) => (o) => Wt(F)(Nn)(o.from.node)([
    o
  ])(r))(G)(t)))));
}, FN = (t) => (n) => {
  const e = T((i) => (s) => tt(F)(s.node)(s)(i))(G)(n), r = (i) => {
    const s = Pi(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = Pi(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return It((i) => (s) => {
    const u = it.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const a = st.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return a === "EQ" ? st.compare(r(i.edge.to.node))(r(s.edge.to.node)) : a;
    }
    return u;
  })(t);
}, $e = (t) => {
  const n = V(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, GN = (t) => t.from.node === t.to.node, IN = (t) => (n) => (e) => (r) => {
  const o = wN(e)(LN(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: Ln((i) => (s) => i.end, o, At(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, BN = (t) => (n) => (e) => (r) => {
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
}, DN = (t) => (n) => (e) => {
  const r = Pi(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Pi(t.edge.to.node)(e);
    return i.tag === "Just" ? ht(
      (s) => !(s.h === $e(r._1).h && s.w === $e(r._1).w && s.x === $e(r._1).x && s.y === $e(r._1).y) && !(s.h === $e(i._1).h && s.w === $e(i._1).w && s.x === $e(i._1).x && s.y === $e(i._1).y),
      n
    ) : ht((s) => !(s.h === $e(r._1).h && s.w === $e(r._1).w && s.x === $e(r._1).x && s.y === $e(r._1).y), n);
  }
  const o = Pi(t.edge.to.node)(e);
  return o.tag === "Just" ? ht((i) => !(i.h === $e(o._1).h && i.w === $e(o._1).w && i.x === $e(o._1).x && i.y === $e(o._1).y), n) : ht((i) => !0, n);
}, zN = (t) => (n) => {
  const e = mh(n.edge.id)(t);
  if (e.tag === "Just")
    return w("Just", Ef(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return v;
  f();
}, HN = (t) => (n) => (e) => (r) => (o) => {
  const i = T((c) => (l) => tt(F)(l.node)(l)(c))(G)(n), s = EN(n), u = sh(ht((c) => c.from.node !== c.to.node, t))(n)(e)(r)(o), a = oh(u)(n);
  return [
    ...RN(ht(GN, t))(n),
    ...T((c) => (l) => {
      const _ = DN(l)(s)(i), d = [..._, ...c.edgeObstacles], g = AN(a)(l), p = (() => {
        if (g.tag === "Just")
          return BN(g._1)(_)(d)(l);
        if (g.tag === "Nothing")
          return IN(zN(a)(l))(_)(d)(l);
        f();
      })();
      return { results: [...c.results, p], edgeObstacles: [...c.edgeObstacles, ...pN(p.segments)] };
    })({ results: [], edgeObstacles: [] })(FN(u)(n)).results
  ];
}, go = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, _o = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, QN = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return v;
  const r = _o(go(t.start._2)(t.end._2))(go(n.start._2)(n.end._2)), o = go(_o(t.start._2)(t.end._2))(_o(n.start._2)(n.end._2));
  return r < o ? w("Just", { position: b(t.start._1, (r + o) / 2), crossingEdge: e }) : v;
}, ON = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return v;
  const r = _o(go(t.start._1)(t.end._1))(go(n.start._1)(n.end._1)), o = go(_o(t.start._1)(t.end._1))(_o(n.start._1)(n.end._1));
  return r < o ? w("Just", { position: b((r + o) / 2, t.start._2), crossingEdge: e }) : v;
}, WN = (t) => (n) => (e) => {
  if (t.direction === "H")
    return ON(t)(n)(e);
  if (t.direction === "V")
    return QN(t)(n)(e);
  f();
}, qN = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : At(r, e.length, e);
  return Nt(n.segments)((i) => Nt(o)((s) => bt((u) => WN(i)(u)(s.edge))(ht(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, XN = (t) => (n) => (e) => n.start._1 > go(t.start._1)(t.end._1) && n.start._1 < _o(t.start._1)(t.end._1) && t.start._2 > go(n.start._2)(n.end._2) && t.start._2 < _o(n.start._2)(n.end._2) ? w("Just", { position: b(n.start._1, t.start._2), crossingEdge: e }) : v, YN = (t) => (n) => Nt(ht((e) => e.direction === "H", t.segments))((e) => Nt(n)((r) => bt((o) => XN(e)(o)(r.edge))(ht(
  (o) => o.direction === "V",
  r.segments
)))), MN = (t) => (n) => (e) => [
  ...YN(n)(ht((r) => r.edge !== n.edge, e)),
  ...qN(t)(n)(e)
], $h = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, UN = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), fa = (t) => (e) => {
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
}, KN = /* @__PURE__ */ Vd(F), vr = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, jg = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Xc = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, VN = /* @__PURE__ */ pn(it)(Yt), jN = (t) => (n) => Yn(F.compare, Xn, t, n), yh = /* @__PURE__ */ Xt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), ZN = (t) => T((n) => (e) => ({
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
          s = $h(l)(_._1), u = _._2;
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
}))({ base: 0, result: [] })(t).result, tJ = (t) => (n) => {
  const e = UN(t);
  return KN(t)(yh(ht((r) => fa(r.src)(e) && fa(r.tgt)(e), n)));
}, nJ = (t) => (n) => {
  const e = T((o) => (i) => Wt(F)(Nn)(i.tgt)([i.src])(Wt(F)(Nn)(i.src)([
    i.tgt
  ])(o)))(G)(n), r = (o) => (i) => (s) => {
    let u = o, a = i, c = s, l = !0, _;
    for (; l; ) {
      const d = u, g = a, p = c, m = Ht((h) => v, (h) => ($) => w("Just", { head: h, tail: $ }), d);
      if (m.tag === "Nothing") {
        l = !1, _ = { nodes: p };
        continue;
      }
      if (m.tag === "Just") {
        if (fa(m._1.head)(g)) {
          u = m._1.tail, a = g, c = p;
          continue;
        }
        u = [
          ...m._1.tail,
          ...(() => {
            const h = vr(m._1.head)(e);
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
  return T((o) => (i) => {
    if (fa(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: T((u) => (a) => tt(F)(a)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: G, components: [] })(t).components;
}, eJ = (t) => (n) => (e) => {
  const r = T((i) => (s) => Wt(F)(bn)(s.tgt)(1)(i))(G)(n), o = T((i) => (s) => Wt(F)(bn)(s.src)(1)(i))(G)(n);
  return T((i) => (s) => {
    const u = vr(s)(r), a = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const x = vr(s)(o);
      return (() => {
        if (x.tag === "Nothing")
          return a !== 0;
        if (x.tag === "Just")
          return a !== x._1;
        f();
      })() || a === 0;
    })())
      return i;
    const c = vr(s)(i.layers), l = (() => {
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    })(), _ = i.layers, d = T((x) => (y) => y.tgt === s ? {
      ...x,
      mIn: jg(x.mIn)((() => {
        const J = vr(s)(_), N = vr(y.src)(_);
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
      mOut: jg(x.mOut)((() => {
        const J = vr(y.tgt)(_), N = vr(s)(_);
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
    const $ = T((x) => (y) => {
      const J = Xc(y)(i.filling), N = (() => {
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
        const x = Xc(l)(i.filling);
        if (x.tag === "Nothing")
          return 0;
        if (x.tag === "Just")
          return x._1;
        f();
      })()
    })(Vt(m, h));
    return $.best === l ? i : {
      layers: tt(F)(s)($.best)(i.layers),
      filling: tt(it)(l)((() => {
        const x = Xc(l)(i.filling);
        if (x.tag === "Nothing")
          return -1;
        if (x.tag === "Just")
          return x._1 - 1 | 0;
        f();
      })())(tt(it)($.best)($.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: VN(D((i) => b(
      i,
      T((s) => (u) => (() => {
        const a = vr(u)(e);
        return a.tag === "Nothing" ? !1 : a.tag === "Just" && a._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(Vt(
      0,
      T((i) => (s) => $h(i)((() => {
        const u = vr(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, rJ = (t) => (n) => eJ(t)(yh(n))(T(jN)(G)(ZN(D((e) => tJ(e)(n))(nJ(t)(n))))), oJ = (t) => t, Wo = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, la = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xh = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), iJ = /* @__PURE__ */ oJ("NetworkSimplex"), sJ = (t) => (n) => T((e) => (r) => {
  const o = T(la)(0)(bt((i) => Wo(i)(e))(r));
  return T((i) => (s) => tt(F)(s)(o)(i))(e)(r);
})(n)(t), uJ = (t) => (n) => ({
  layers: D((e) => ht(
    (r) => {
      const o = Wo(r)(n);
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
          i = la(c)(l._1), s = l._2;
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
}), aJ = (t) => (n) => (e) => {
  const r = T((o) => (i) => tt(F)(i)(!0)(o))(G)(n);
  return T((o) => (i) => tt(F)(i._1)(i._2)(o))(rJ(n)(bt((o) => o.from.node === o.to.node || (() => {
    const i = Wo(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = Wo(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? v : w("Just", { src: o.from.node, tgt: o.to.node }))(t)))(xh(e));
}, cJ = (t) => (n) => (e) => (r) => {
  const o = (a) => (c) => {
    const l = Wo(c)(a);
    if (l.tag === "Just")
      return a;
    if (l.tag === "Nothing") {
      const _ = ht(
        (g) => g !== c,
        (() => {
          const g = Wo(c)(t);
          if (g.tag === "Nothing")
            return [];
          if (g.tag === "Just")
            return g._1;
          f();
        })()
      ), d = T(o)(a)(_);
      return tt(F)(c)(1 + T(la)(0)(bt((g) => Wo(g)(d))(_)) | 0)(d);
    }
    f();
  }, i = T(o)(G)(e), u = ((a) => (c) => {
    let l = a, _ = c, d = !0, g;
    for (; d; ) {
      const p = l, m = _;
      if (m.tag === "Nil") {
        d = !1, g = p;
        continue;
      }
      if (m.tag === "Cons") {
        l = la(p)(m._1), _ = m._2;
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
  return T((a) => (c) => tt(F)(c._1)(c._2)(a))((() => {
    const a = (c) => {
      if (c.tag === "Leaf")
        return G;
      if (c.tag === "Node")
        return Zt("Node", c._1, c._2, c._3, u - c._4 | 0, a(c._5), a(c._6));
      f();
    };
    return a(i);
  })())(xh(r));
}, fJ = /* @__PURE__ */ T((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return tt(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return tt(F)(n._1.node)(0)(t);
  }
  return t;
})(G), lJ = /* @__PURE__ */ T((t) => (n) => Wt(F)(Nn)(n.to.node)([n.from.node])(t))(G), gJ = /* @__PURE__ */ T((t) => (n) => Wt(F)(Nn)(n.from.node)([n.to.node])(t))(G), _J = (t) => (n) => (e) => (r) => {
  const o = gJ(e), i = lJ(e), s = fJ(n);
  return uJ(r)(sJ(bt((u) => u.tag === "SameLayer" ? w("Just", u._1.nodes) : v)(n))((() => {
    if (t === "LongestPath")
      return cJ(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return aJ(e)(r)(s);
    f();
  })()));
}, dJ = /* @__PURE__ */ pn(F)(Yt), hJ = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Zg = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, t_ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, zs = /* @__PURE__ */ pn(F)(Yt), pJ = /* @__PURE__ */ pn(F)(Yt), n_ = /* @__PURE__ */ (() => {
  const t = D((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => fn(t(n));
})(), mJ = (t) => (n) => (e) => (r) => {
  const o = dJ(D((s) => b(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = hJ(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return D((s) => {
    if (s.nodes.length <= 2) {
      const l = Zg(s.edgeId)(o);
      if (l.tag === "Just") {
        const _ = i(s), d = Ds(Bs(_ ? n_(l._1.segments) : l._1.segments));
        return { ...l._1, edge: s.edgeId, segments: d, bends: Ln((g) => (p) => g.end, d, At(1, d.length, d)), reversed: _ };
      }
      if (l.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = Nt(bt((l) => Zg(l)(o))(Ln(
      (l) => (_) => s.edgeId + ":" + l + "->" + _,
      s.nodes,
      At(1, s.nodes.length, s.nodes)
    )))((l) => l.segments), a = i(s), c = Ds(Bs(a ? n_(u) : u));
    return {
      edge: s.edgeId,
      segments: c,
      bends: Ln((l) => (_) => l.end, c, At(1, c.length, c)),
      bendType: [],
      jumps: [],
      reversed: a
    };
  })(t);
}, $J = { layers: [], edges: [], chains: [] }, yJ = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: iJ,
  cycleBreaker: cN,
  compactPostRouting: !0,
  compactionSpacings: lT
}, xJ = (t) => ({
  pos: b(0, 0),
  size: b(
    T((n) => (e) => t_(n)(e.position._1 + e.size._1))(0)(t),
    T((n) => (e) => t_(n)(e.position._2 + e.size._2))(0)(t)
  )
}), vJ = (t) => (n) => (e) => {
  const r = zs(D((c) => b(c.id, c.ports))(n.nodes)), o = ht((c) => On(3)(c.node) !== "$d:", e.placements), i = mJ(e.withDummies.chains)(e.acyclic.reversedEdges)(pJ(D((c) => b(
    c.id,
    b(c.from.node, c.to.node)
  ))(n.edges)))(HN(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(uh(e.ordered)(ht(
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
    return c(zs(D((l) => b(l.id, l.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? dT()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = D((c) => {
    const l = Ds(Bs(c.segments));
    return { ...c, segments: l, bends: Ln((_) => (d) => _.end, l, At(1, l.length, l)) };
  })(s.edges), a = Xt((c) => (l) => ({ ...l, jumps: MN(c)(l)(u) }))(u);
  return { nodes: s.nodes, edges: a, boundingBox: xJ(s.nodes), metrics: zv(s.nodes)(a)(0) };
}, wJ = (t) => (n) => (e) => {
  const r = zs(D((i) => b(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: XT({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(zs(D((i) => b(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(uh(e.ordered)(e.withDummies.edges)((() => {
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
  return { pipeline: o, result: vJ(t)(n)(o) };
}, TJ = (t) => (n) => (e) => wJ(t)(n)({
  ...e,
  ordered: iN({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: zs(Xt((r) => (o) => b(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), NJ = (t) => (n) => (e) => TJ(t)(n)({
  ...e,
  withDummies: hT(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), JJ = (t) => (n) => {
  const e = D((o) => o.id)(n.nodes), r = hN(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return NJ(t)(n)({
    acyclic: r,
    layered: _J(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: $J,
    ordered: [],
    placements: []
  });
}, vh = (t) => t, wh = /* @__PURE__ */ vh("RunText"), CJ = /* @__PURE__ */ vh("RunCode"), Th = (t) => (n) => (e) => n.length === 0 ? e : Lt(e)({ style: t, text: vo(n) }), bJ = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return CJ;
    if (t.style === "RunCode")
      return wh;
    f();
  })(),
  buf: [],
  runs: Th(t.style)(t.buf)(t.runs)
}), kJ = (t) => (n) => 0 < n.length ? { ...t, buf: Lt(t.buf)(n[0]) } : { ...t, buf: Lt(t.buf)("\\") }, SJ = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, a = Ht((c) => v, (c) => (l) => w("Just", { head: c, tail: l }), r);
    if (a.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (a.tag === "Just") {
      if (a._1.head === "\\") {
        e = kJ(s)(a._1.tail), r = At(1, a._1.tail.length, a._1.tail);
        continue;
      }
      if (a._1.head === "`") {
        e = bJ(s), r = a._1.tail;
        continue;
      }
      e = { ...s, buf: Lt(s.buf)(a._1.head) }, r = a._1.tail;
      continue;
    }
    f();
  }
  return i;
}, Nh = (t) => {
  const n = SJ({ style: wh, buf: [], runs: [] })(Gr(t));
  return Th(n.style)(n.buf)(n.runs);
};
let Cu = null;
function LJ() {
  return Cu || (typeof document > "u" ? null : (Cu = document.createElement("canvas").getContext("2d"), Cu));
}
const e_ = /* @__PURE__ */ new Map(), EJ = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = e_.get(o);
  if (i !== void 0) return i;
  const s = LJ();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return e_.set(o, u), u;
}, PJ = xo.traverse(oi), AJ = /* @__PURE__ */ T(fr)(0), Zo = /* @__PURE__ */ (() => {
  const t = Ze(`\r
`)(" "), n = Ze(`
`)(" "), e = (() => {
    const r = Ze("\r")(" "), o = (() => {
      const i = Ze("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Jh = (t) => (n) => {
  const e = PJ((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return EJ(o.family)(o.size)(o.weight)(Zo(r.text));
  })(Nh(Zo(n)));
  return () => {
    const r = e();
    return AJ(r);
  };
}, RJ = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, FJ = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, Ch = { text: RJ, code: FJ }, GJ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, yi = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, IJ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, BJ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, DJ = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, r_ = (t) => vo(fn(Cr((n) => n === " ")(fn(Cr((n) => n === " ")(Gr(t)).rest)).rest)), zJ = (t) => T((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? w("Just", e._1) : n)(v)(Xt(Vn)(t)), Pf = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (hr(n) <= t)
    return [n];
  const e = Gr(n), r = t < 1 ? [] : At(0, t, e), o = zJ(r);
  if (o.tag === "Just") {
    const i = r_(cg(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = r_(Qi(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...Pf(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = cg(t)(n), s = Qi(t)(n);
    return s === "" ? [i] : [i, ...Pf(t)(s)];
  }
  f();
}, HJ = { cellW: 7, cellH: 3, maxLineWidth: 20 }, QJ = (t) => (n) => {
  const e = D((i) => b(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = yi(1)(je(
    (IJ(t.maxLineWidth)(T((i) => (s) => yi(i)(hr(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: D((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = Nt(No(`
`)(i._1))(Pf(o)), u = T((c) => (l) => yi(c)(hr(l)))(0)(s), a = i._2.shape === "Cylinder" ? yi(1)(je((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: b(
          V(u > o ? je((u + 2 | 0) + t.cellW | 0, t.cellW) : a),
          V(yi(1)(je(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, OJ = (t) => (n) => (e) => ({
  ...e,
  nodes: D((r) => {
    const o = DJ(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: b(
          BJ(r.size._1)(V(yi(1)(dn(Da(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), rc = (t) => t, WJ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Eo = /* @__PURE__ */ rc("TopSide"), Po = /* @__PURE__ */ rc("BottomSide"), Ao = /* @__PURE__ */ rc("LeftSide"), Ro = /* @__PURE__ */ rc("RightSide"), qJ = (t) => {
  const n = st.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = st.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, o_ = (t) => (n) => (e) => {
  const r = WJ(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * ne(qJ((() => {
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
      o = Xr, i = _, s = d, u = g;
      continue;
    }
    if (l === "Cylinder") {
      if (d === "TopSide") {
        a = !1, c = o_(_)(-1)(g);
        continue;
      }
      if (d === "BottomSide") {
        a = !1, c = o_(_)(1)(g);
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
    o = Xr, i = _, s = d, u = g;
  }
  return c;
}, i_ = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, a = n.y - (t.y + t.h), c = a < 0 ? -a : a;
  return r <= c && r <= u && r <= i ? Eo : c <= u && c <= i ? Po : u <= i ? Ao : Ro;
}, XJ = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
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
        o = !1, i = w("Just", s._4);
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Qs = /* @__PURE__ */ pn(F)(Yt), YJ = (t) => (e) => {
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
}, MJ = (t) => (e) => {
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
}, UJ = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), KJ = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), oc = xo.traverse(oi), ga = /* @__PURE__ */ pn(F)(Yt), VJ = (t) => (n) => Yn(F.compare, Xn, t, n), jJ = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), ZJ = /* @__PURE__ */ pn(F)(Yt), tC = (t) => (n) => Yn(F.compare, Xn, t, n), nC = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, s_ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, eC = (t) => (n) => ({
  ...n,
  edges: Qs(D((e) => b(
    e._1,
    (() => {
      const r = rl(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = Hs(r._1._2)(n.nodes), i = Hs(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Ht((a) => v, (a) => (c) => w("Just", { head: a, tail: c }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just")
              return [
                (() => {
                  const a = Ht((d) => v, (d) => (g) => w("Just", { head: d, tail: g }), u._1.tail), c = a.tag === "Just" ? w("Just", a._1.head) : v, l = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, _ = (() => {
                    if (c.tag === "Just") {
                      if ((c._1.x > u._1.head.x ? c._1.x - u._1.head.x < 0.5 : u._1.head.x - c._1.x < 0.5) && u._1.head.x >= l.x - 0.5 && u._1.head.x <= l.x + l.w + 0.5)
                        return c._1.y >= l.y + l.h ? w("Just", Po) : c._1.y <= l.y ? w("Just", Eo) : v;
                      if ((c._1.y > u._1.head.y ? c._1.y - u._1.head.y < 0.5 : u._1.head.y - c._1.y < 0.5) && u._1.head.y >= l.y - 0.5 && u._1.head.y <= l.y + l.h + 0.5) {
                        if (c._1.x >= l.x + l.w)
                          return w("Just", Ro);
                        if (c._1.x <= l.x)
                          return w("Just", Ao);
                      }
                      return v;
                    }
                    if (c.tag === "Nothing")
                      return v;
                    f();
                  })();
                  if (_.tag === "Just") {
                    if (_._1 === "TopSide")
                      return { ...u._1.head, y: ye(i._1.shape)(l)(Eo)(u._1.head.x) };
                    if (_._1 === "BottomSide")
                      return { ...u._1.head, y: ye(i._1.shape)(l)(Po)(u._1.head.x) };
                    if (_._1 === "LeftSide")
                      return { ...u._1.head, x: ye(i._1.shape)(l)(Ao)(u._1.head.y) };
                    if (_._1 === "RightSide")
                      return { ...u._1.head, x: ye(i._1.shape)(l)(Ro)(u._1.head.y) };
                    f();
                  }
                  if (_.tag === "Nothing") {
                    const d = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, g = i_(d)(u._1.head);
                    if (g === "TopSide")
                      return { ...u._1.head, y: ye(i._1.shape)(d)(Eo)(u._1.head.x) };
                    if (g === "BottomSide")
                      return { ...u._1.head, y: ye(i._1.shape)(d)(Po)(u._1.head.x) };
                    if (g === "LeftSide")
                      return { ...u._1.head, x: ye(i._1.shape)(d)(Ao)(u._1.head.y) };
                    if (g === "RightSide")
                      return { ...u._1.head, x: ye(i._1.shape)(d)(Ro)(u._1.head.y) };
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
          const u = rr(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Lt(u._1.init)((() => {
              const a = rr(u._1.init), c = a.tag === "Just" ? w("Just", a._1.last) : v, l = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, _ = (() => {
                if (c.tag === "Just") {
                  if ((c._1.x > u._1.last.x ? c._1.x - u._1.last.x < 0.5 : u._1.last.x - c._1.x < 0.5) && u._1.last.x >= l.x - 0.5 && u._1.last.x <= l.x + l.w + 0.5)
                    return c._1.y >= l.y + l.h ? w("Just", Po) : c._1.y <= l.y ? w("Just", Eo) : v;
                  if ((c._1.y > u._1.last.y ? c._1.y - u._1.last.y < 0.5 : u._1.last.y - c._1.y < 0.5) && u._1.last.y >= l.y - 0.5 && u._1.last.y <= l.y + l.h + 0.5) {
                    if (c._1.x >= l.x + l.w)
                      return w("Just", Ro);
                    if (c._1.x <= l.x)
                      return w("Just", Ao);
                  }
                  return v;
                }
                if (c.tag === "Nothing")
                  return v;
                f();
              })();
              if (_.tag === "Just") {
                if (_._1 === "TopSide")
                  return { ...u._1.last, y: ye(o._1.shape)(l)(Eo)(u._1.last.x) };
                if (_._1 === "BottomSide")
                  return { ...u._1.last, y: ye(o._1.shape)(l)(Po)(u._1.last.x) };
                if (_._1 === "LeftSide")
                  return { ...u._1.last, x: ye(o._1.shape)(l)(Ao)(u._1.last.y) };
                if (_._1 === "RightSide")
                  return { ...u._1.last, x: ye(o._1.shape)(l)(Ro)(u._1.last.y) };
                f();
              }
              if (_.tag === "Nothing") {
                const d = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, g = i_(d)(u._1.last);
                if (g === "TopSide")
                  return { ...u._1.last, y: ye(o._1.shape)(d)(Eo)(u._1.last.x) };
                if (g === "BottomSide")
                  return { ...u._1.last, y: ye(o._1.shape)(d)(Po)(u._1.last.x) };
                if (g === "LeftSide")
                  return { ...u._1.last, x: ye(o._1.shape)(d)(Ao)(u._1.last.y) };
                if (g === "RightSide")
                  return { ...u._1.last, x: ye(o._1.shape)(d)(Ro)(u._1.last.y) };
              }
              f();
            })());
        }
      }
      f();
    })()
  ))(XJ(n.edges)))
}), rC = (t) => (n) => (e) => {
  const r = en((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return w("Just", r._1);
  if (r.tag === "Nothing")
    return rl(e)(n);
  f();
}, oC = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = Hs(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    f();
  })(),
  shape: (() => {
    const o = Hs(r.node)(e);
    if (o.tag === "Nothing")
      return Xr;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), iC = (t) => ({ id: t, size: b(1, 1), ports: [], label: w("Just", t), shape: Xr }), sC = (t) => (n) => (e) => (r) => b(r.node, oC(t)(n)(e)(r)), bh = (t) => {
  const n = No(`
`)(t);
  return n.length === 0 ? [""] : n;
}, kh = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, kt("Cons", e._4, n(e._6, r)));
    f();
  };
  return jt(Jn.foldr, n(t.interiors, Y));
}, uC = (t) => Qs(bt((n) => w(
  "Just",
  b(n.edge, { id: n.edge, from: { node: n.from, port: v }, to: { node: n.to, port: v }, label: v })
))(Nt(t.scenes)((n) => n.tag === "DataFlow" ? bt((e) => e.kind.tag === "SendToken" ? w("Just", e.kind._1) : v)(n._1.events) : []))), Sh = (t) => {
  const n = Wy(t), e = ht((o) => YJ(o.id)(n.nodes), t.graph.nodes), r = ht((o) => MJ(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...D(iC)(jt(
        be.foldr,
        cr(F.compare, n.nodes, UJ(D((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...bt(rC(t)(uC(t)))(jt(
        be.foldr,
        cr(F.compare, n.edges, KJ(D((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, aC = (t) => {
  const n = oc((e) => {
    const r = Jh(Ch)((() => {
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
  })(Sh(t).nodes);
  return () => {
    const e = n();
    return ga(e);
  };
}, Lh = (t) => {
  const n = aC(t);
  return () => {
    const e = n(), r = oc(Lh)(kh(t))();
    return T(VJ)(e)(r);
  };
}, cC = (t) => (n) => {
  const e = Ht((r) => v, (r) => (o) => w("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...D((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, fC = (t) => (n) => b(n.edge, cC(t)(n)), lC = (t) => (n) => (e) => (r) => ({
  nodes: ga(D(sC(V(4) * t)(n)(e))(r.nodes)),
  edges: Qs(D(fC(t))(r.edges)),
  chipExtras: G,
  edgeLabels: G
}), gC = (t) => (n) => ({
  ...eC(Qs(D((e) => b(e.id, b(e.from.node, e.to.node)))(n.edges)))(lC(8)(ga(D((e) => b(
    e.id,
    (() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })()
  ))(n.nodes)))(ga(D((e) => b(e.id, e.shape))(n.nodes)))(JJ(yJ)(n).result)),
  edgeLabels: Qs(bt((e) => e.label.tag === "Just" ? w("Just", b(e.id, e.label._1)) : v)(n.edges))
}), _C = (t) => T((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return T((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return T((i) => (s) => tt(F)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return T((i) => (s) => tt(F)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "Hold" || e.tag === "EnterNode" || e.tag === "ExitNode" || e.tag === "StepScene")
    return n;
  f();
})(G)(t.scenes), dC = (t) => {
  const n = oc((e) => {
    const r = Jh(Ch)(e);
    return () => {
      const o = r();
      return b(e, { labelW: o, charCount: hr(Zo(e)), lineCount: 1 });
    };
  })(jt(
    be.foldr,
    jJ(Nt(jt(be.foldr, _C(t)))(bh))
  ));
  return () => {
    const e = n();
    return ZJ(e);
  };
}, Eh = (t) => {
  const n = dC(t);
  return () => {
    const e = n(), r = oc(Eh)(kh(t))();
    return T(tC)(e)(r);
  };
}, hC = V(4) * 8, pC = (t) => Nt(t.scenes)((n) => {
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
}), mC = (t) => (n) => (e) => {
  const r = (o) => {
    const i = bt((s) => {
      const u = nC(s)(t);
      return u.tag === "Just" ? w("Just", { w: u._1.labelW + 28, h: V(GJ(1)(u._1.lineCount)) * 13.2 + 12 }) : v;
    })(Nt(o)(bh));
    return i.length === 0 ? v : w(
      "Just",
      { w: T(s_)(0)(D((s) => s.w)(i)), h: T(s_)(0)(D((s) => s.h)(i)) }
    );
  };
  return T((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = rl(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const a = u._1;
        return Wt(F)(Nn)(i.kind._1.edge)(D((c) => ({ x: c.x + 14 + a.w, y: c.y - 6 - 8 - a.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = Hs(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? Wt(F)(Nn)("__fill__:" + i.kind._1.node)((() => {
        const a = s._1.y - u._1.h - 14, c = s._1.x + s._1.w / 2, l = c - u._1.w / 2, _ = c + u._1.w / 2, d = s._1.y - 14;
        return [{ x: l, y: a }, { x: _, y: a }, { x: l, y: d }, { x: _, y: d }];
      })())(o) : o;
    }
    f();
  })(G)(pC(n));
}, ic = (t) => (n) => (e) => ({
  layout: (() => {
    const r = gC()(OJ(hC)(t)(QJ(HJ)(Sh(e))));
    return { ...r, chipExtras: mC(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = ic(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return G;
      if (i.tag === "Node")
        return Zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      f();
    };
    return o(e.interiors);
  })()
}), u_ = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Af = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const a = u_(u._3)(e), c = (() => {
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
              const c = s(u, a._5), l = u_(a._3)(i);
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
}, ut = (t, n) => ({ tag: "CatQueue", _1: t, _2: n }), $C = (t) => {
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
      e = !1, r = w("Just", b(o._1._1, ut(o._1._2, o._2)));
      continue;
    }
    f();
  }
  return r;
}, at = (t, n, e) => ({ tag: t, _1: n, _2: e }), dt = /* @__PURE__ */ at("CatNil"), yC = (t) => (n) => {
  if (t.tag === "CatNil")
    return n;
  if (n.tag === "CatNil")
    return t;
  if (t.tag === "CatCons")
    return at("CatCons", t._1, ut(t._2._1, kt("Cons", n, t._2._2)));
  f();
}, xC = (t) => (n) => (e) => {
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
      const _ = u, d = a, g = $C(_);
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
}, vC = (t) => {
  if (t.tag === "CatNil")
    return v;
  if (t.tag === "CatCons")
    return w("Just", b(t._1, t._2._1.tag === "Nil" && t._2._2.tag === "Nil" ? dt : xC(yC)(dt)(t._2)));
  f();
}, j = (t, n) => ({ tag: "Free", _1: t, _2: n }), lt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Ph = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const o = n;
    if (o._1.tag === "Return") {
      const i = vC(o._2);
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
}, wC = (t) => (n) => {
  const e = n.Monad0(), r = e.Bind1().Apply0().Functor0();
  return (o) => n.tailRecM((i) => {
    const s = Ph(i);
    if (s.tag === "Return")
      return r.map(O$)(e.Applicative0().pure(s._1));
    if (s.tag === "Bind")
      return r.map(u0)(o(t.map(s._2)(s._1)));
    f();
  });
}, TC = (t) => (n) => (e) => {
  const r = Ph(e);
  if (r.tag === "Return")
    return n(r._1);
  if (r.tag === "Bind")
    return t(r._1)(r._2);
  f();
}, ol = { Applicative0: () => ti, Bind1: () => Ah }, NC = { map: (t) => (n) => Ah.bind(n)((e) => ti.pure(t(e))) }, Ah = {
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
  Apply0: () => Rh
}, Rh = {
  apply: (t) => (n) => {
    const e = (r) => j(
      n._1,
      (() => {
        if (n._2.tag === "CatNil")
          return at("CatCons", (o) => ti.pure(r(o)), ut(Y, Y));
        if (n._2.tag === "CatCons")
          return at(
            "CatCons",
            n._2._1,
            ut(
              n._2._2._1,
              kt(
                "Cons",
                at("CatCons", (o) => ti.pure(r(o)), ut(Y, Y)),
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
  Functor0: () => NC
}, ti = { pure: (t) => j(lt("Return", t), dt), Apply0: () => Rh }, JC = () => () => () => (t) => (n) => (e) => S$(e.type)(t) ? L$(e.type)(t)(e.value) : n(e), CC = { map: (t) => (n) => ({ type: n.type, value: n.map(t)(n.value), map: n.map }) }, bC = (t) => Yu("Data.Functor.Variant: pattern match failure [" + t.type + "]"), kC = () => () => () => (t) => JC()()()(t)(bC);
var ui = (function() {
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
  var W = 0, B = 1, H = 2, rt = 3, ot = 4, M = 5, q = 6;
  function A(L, I, z) {
    var U = 0, K = W, O = z, Z = null, et = null, nt = null, gt = null, ct = null, $t = 0, Pt = 0, Rt = null, rn = !0;
    function xt(_t) {
      for (var yt, ft, mt; ; )
        switch (yt = null, ft = null, mt = null, K) {
          case H:
            K = B;
            try {
              O = nt(O), gt === null ? nt = null : (nt = gt._1, gt = gt._2);
            } catch (St) {
              K = M, Z = L.left(St), O = null;
            }
            break;
          case rt:
            L.isLeft(O) ? (K = M, Z = O, O = null) : nt === null ? K = M : (K = H, O = L.fromRight(O));
            break;
          case B:
            switch (O.tag) {
              case s:
                nt && (gt = new y(g, nt, gt)), nt = O._2, K = B, O = O._1;
                break;
              case n:
                nt === null ? (K = M, O = L.right(O._1)) : (K = H, O = O._1);
                break;
              case o:
                K = rt, O = S(L.left, L.right, O._1);
                break;
              case i:
                K = ot, O = P(L.left, O._1, function(St) {
                  return function() {
                    U === _t && (U++, E.enqueue(function() {
                      U === _t + 1 && (K = rt, O = St, xt(U));
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
                nt === null ? ct = new y(g, O, ct, et) : ct = new y(g, O, new y(g, new y(p, nt, gt), ct, et), et), nt = null, gt = null, K = B, O = O._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                $t++, nt === null ? ct = new y(g, O, ct, et) : ct = new y(g, O, new y(g, new y(p, nt, gt), ct, et), et), nt = null, gt = null, K = B, O = O._1;
                break;
              case a:
                K = rt, yt = A(L, I, O._2), I && I.register(yt), O._1 && yt.run(), O = L.right(yt);
                break;
              case c:
                K = B, O = X(L, I, O._1);
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
                  $t--, Z === null && (ft = L.fromRight(O), ct = new y(g, new y(m, mt._2, ft), ct, yt), (et === yt || $t > 0) && (K = B, O = mt._3(ft)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case m:
                  ct = new y(g, new y($, O, Z), ct, et), K = B, et && et !== yt && $t === 0 ? O = mt._1.killed(L.fromLeft(et))(mt._2) : Z ? O = mt._1.failed(L.fromLeft(Z))(mt._2) : O = mt._1.completed(L.fromRight(O))(mt._2), Z = null, $t++;
                  break;
                case h:
                  $t++, ct = new y(g, new y($, O, Z), ct, et), K = B, O = mt._1;
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
      var _t = vt, yt = null, ft = null, mt = 0, Ft = {}, St, zt;
      t: for (; ; )
        switch (St = null, _t.tag) {
          case x:
            if (_t._3 === t && (St = O[_t._1], Ft[mt++] = St.kill(Gt, function(tn) {
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
        for (zt = 0, St = mt; zt < St; zt++)
          Ft[zt] = Ft[zt]();
      return Ft;
    }
    function Pt(Gt, vt, Jt) {
      var _t, yt, ft, mt, Ft, St;
      for (L.isLeft(Gt) ? (_t = Gt, yt = null) : (yt = Gt, _t = null); ; ) {
        if (ft = null, mt = null, Ft = null, St = null, gt !== null)
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
              if (vt._3 = _t, Ft = !0, St = Z++, et[St] = $t(nt, _t === ft ? vt._2 : vt._1, function() {
                return function() {
                  delete et[St], Ft ? Ft = !1 : Jt === null ? Pt(_t, null, null) : Pt(_t, Jt._1, Jt._2);
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
            else if (vt._3 = yt, Ft = !0, St = Z++, et[St] = $t(nt, yt === ft ? vt._2 : vt._1, function() {
              return function() {
                delete et[St], Ft ? Ft = !1 : Jt === null ? Pt(yt, null, null) : Pt(yt, Jt._1, Jt._2);
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
      var Gt = B, vt = z, Jt = null, _t = null, yt, ft;
      t: for (; ; )
        switch (yt = null, ft = null, Gt) {
          case B:
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
            Jt._1 === t ? (Jt._1 = vt, Gt = B, vt = Jt._2, Jt._2 = t) : (Jt._2 = vt, vt = Jt, _t === null ? Jt = null : (Jt = _t._1, _t = _t._2));
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
const SC = ui.Pure;
ui.Throw;
function qo(t) {
  return function(n) {
    return ui.Bind(t, n);
  };
}
const Xo = ui.Sync, LC = ui.Async;
function il(t, n) {
  return function() {
    return ui.Fiber(t, null, n);
  };
}
ui.Seq;
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
      return Yu("unsafeFromLeft: Right");
    f();
  },
  fromRight: (t) => {
    if (t.tag === "Right")
      return t._1;
    if (t.tag === "Left")
      return Yu("unsafeFromRight: Left");
    f();
  },
  left: F$,
  right: D1
}, EC = /* @__PURE__ */ (() => {
  const t = SC();
  return (n) => t;
})(), PC = (t) => (n) => TC((e) => (r) => t({ type: e.type, value: e.map((o) => r(o))(e.value), map: e.map }))(n), AC = (t) => {
  const n = t.Bind1(), e = t.Applicative0().pure;
  return (r) => {
    const o = b$(() => PC((s) => n.bind(r(s))(o()))(e));
    return o();
  };
};
let Yc = null;
function RC() {
  return Yc || (typeof document > "u" ? null : Yc = document.createElement("canvas").getContext("2d"));
}
const Mc = /* @__PURE__ */ new Map();
function Fh(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Mc.has(u)) return Mc.get(u);
  const a = RC();
  if (!a) return i;
  a.font = s;
  const c = o(a.measureText(r)), l = typeof document < "u" ? document.fonts : null;
  if (!l || l.check(s)) Mc.set(u, c);
  else if (l && l.load)
    try {
      l.load(s);
    } catch {
    }
  return c;
}
const FC = (t, n, e, r) => Fh(t, n, e, r, (o) => o.width, -1), GC = (t, n, e, r) => Fh(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), _a = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Gh = (t) => t, Ih = {
  map: (t) => (n) => {
    if (n.tag === "MeasureText")
      return _a("MeasureText", n._1, n._2, (e) => t(n._3(e)));
    if (n.tag === "MeasureInk")
      return _a("MeasureInk", n._1, n._2, (e) => t(n._3(e)));
    f();
  }
}, ul = (t) => (n) => {
  const e = FC(t.family, t.size, t.weight, Zo(n));
  return e < 0 ? V(os(n).length) * t.size * 0.62 : e;
}, al = (t) => (n) => {
  const e = GC(t.family, t.size, t.weight, Zo(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, IC = (t) => (n) => j(
  lt(
    "Bind",
    { type: "metrics", value: _a("MeasureInk", t, n, Gh), map: Ih.map },
    (e) => j(lt("Return", e), dt)
  ),
  dt
), tu = (t) => (n) => j(
  lt(
    "Bind",
    { type: "metrics", value: _a("MeasureText", t, n, Gh), map: Ih.map },
    (e) => j(lt("Return", e), dt)
  ),
  dt
), Bh = (t) => t, Dh = (t) => t, sc = (t) => t, zh = (t) => t, Hh = (t) => t, Mt = (t, n, e, r, o) => ({ tag: t, _1: n, _2: e, _3: r, _4: o }), Qh = (t) => t, cl = (t) => t, BC = /* @__PURE__ */ cl("BaselineTop"), We = /* @__PURE__ */ cl("BaselineMiddle"), DC = /* @__PURE__ */ cl("BaselineBottom"), Yi = /* @__PURE__ */ Qh("AlignLeft"), ro = /* @__PURE__ */ Qh("AlignCenter"), ie = /* @__PURE__ */ Hh("RoundJoin"), nu = /* @__PURE__ */ Hh("MiterJoin"), qe = /* @__PURE__ */ zh("ButtCap"), _r = /* @__PURE__ */ zh("RoundCap"), zC = /* @__PURE__ */ sc("LayerPolyOut"), HC = /* @__PURE__ */ sc("LayerPolyIn"), QC = /* @__PURE__ */ sc("LayerNodeMask"), OC = /* @__PURE__ */ sc("LayerOverlay"), Os = /* @__PURE__ */ Dh("NonZero"), WC = /* @__PURE__ */ Dh("EvenOdd"), a_ = /* @__PURE__ */ Bh("Normal"), Iu = /* @__PURE__ */ Bh("Difference"), Tn = { r: 255, g: 255, b: 255, a: 255 }, Ws = [5], Cn = {
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
}, zr = { r: 26, g: 26, b: 26, a: 255 }, Rf = (t) => (n) => Math.imul(t, n), is = (t) => {
  const n = t + 1831565813 | 0, e = Rf(n ^ n >>> 15)(n | 1), r = e ^ (e + Rf(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (V(o) + 4294967296) / 4294967296 : V(o) / 4294967296 };
}, Dn = (t) => (n) => (e) => {
  const r = is(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, Ff = (t) => (n) => T((e) => (r) => Rf(e ^ r)(-2048144789))(n)(D(br)(Gr(t))), qC = (t) => t, Oh = (t) => t, XC = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ie = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Wh = (t) => (n) => (e) => {
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
}, Gf = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, YC = (t) => (n) => (e) => {
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
}, MC = /* @__PURE__ */ Oh("FlatLevel"), UC = /* @__PURE__ */ Oh("NestedLevel"), fl = /* @__PURE__ */ qC("GenieSilhouette"), KC = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = is(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, VC = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = is(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, c_ = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = ne(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = ne(XC(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, a = t.cy + i * e / o, c = { x: u - s * e / o, y: a + s * r / o }, l = { x: u + s * e / o, y: a - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : c.y < l.y ? c : l;
}, Ai = (t) => (n) => {
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
}, jC = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = is(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, qh = (t) => {
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
}, ZC = (t) => (n) => (e) => {
  const r = is(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = Wh(0)(o - 1 | 0)(dn(Oe(r.value * V(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, t3 = (t) => (n) => {
  const e = is(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = Wh(0)(r - 1 | 0)(dn(Oe(e.value * V(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, Xh = (t) => {
  const n = Ie(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, Yh = (t) => [
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
], Mh = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, n3 = (t) => {
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
}, Uh = (t) => {
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
}, Kh = (t) => (n) => {
  const e = n.y + n.h, r = N2(t.rBase * n.h)(n.w / (2 * (1 + (V(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = Gf(t.minN)(o <= 0 || i <= 0 ? t.minN : dn(Qe(o / i)) + 1 | 0), u = s >= 3 ? Vt(1, s - 2 | 0) : [], a = u.length, c = je(a + 1 | 0, 2), l = c < 1 ? [] : At(0, c, u), _ = t3(t.seed)((() => {
    const h = a - c | 0;
    return h < 1 ? u : At(h, u.length, u);
  })()), d = _.idx, g = ZC(_.prng)(ht((h) => h !== d, l))(Gf(1)(l.length - (Ne(ho)(d)(l) ? 1 : 0) | 0)), p = g.idx, m = s >= 2 ? o / (V(s) - 1) : 0;
  return T((h) => ($) => {
    const x = $ === p, y = $ === d, J = $ === 0 || $ === (s - 1 | 0), N = jC(h.prng)(J)(y)(x)(r)(t), C = KC(N.prng)(J)(t)(n.h), S = VC(C.prng)(J)(t)(m);
    return {
      prng: S.prng,
      circles: Lt(h.circles)({
        cx: n.x + YC(N.r)(n.w - N.r)((s >= 2 ? r + V($) / (V(s) - 1) * o + S.dx : r + 0 * o + S.dx) + (y ? t.heroShift * m : x ? -1 * t.smallShift * m : 0)),
        cy: e - C.yLift,
        r: N.r
      })
    };
  })({ prng: g.prng, circles: [] })(Vt(0, s - 1 | 0)).circles;
}, Vh = (t) => (n) => {
  const e = t.length;
  return Xt((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? c_(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? c_(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, jh = (t) => {
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
}, e3 = (t) => (n) => (e) => {
  const r = Oo(n.y - t.cy)(n.x - t.cx), o = Oo(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = Gf(1)(dn(Da(i / 1.5707963267948966))), u = i / V(s), a = 1.3333333333333333 * J2(u / 4);
  return Nt(Vt(0, s - 1 | 0))((c) => {
    const l = r + V(c + 1 | 0) * u, _ = t.cx + t.r * fe(l), d = t.cy + t.r * Te(l), g = r + V(c) * u;
    return [
      4,
      t.cx + t.r * fe(g) - a * t.r * Te(g),
      t.cy + t.r * Te(g) + a * t.r * fe(g),
      _ + a * t.r * Te(l),
      d - a * t.r * fe(l),
      _,
      d
    ];
  });
}, Zh = (t) => (n) => {
  const e = t.h * 0.38, r = Vh(Kh(Mh)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = Ie(n)(Ie(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...Nt(r)((i) => e3(i.c)(i.p1)(i.p2)),
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
  ] : Ai(t)(n);
}, r3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
    const s = Uh(e);
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
  if (n === "Diamond") {
    const s = jh(e);
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
  if (n === "Document") {
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
  if (n === "Cloud") {
    const s = Zh(e)(r);
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
}, o3 = {
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
              value: Mt("FillStrokePath", Ai(t)(n), e._1, r._1, void 0),
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
              value: Mt("FillPath", Ai(t)(n), e._1, void 0),
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
              value: Mt("StrokePath", Ai(t)(n), r._1, void 0),
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
  measureInk: (t) => (n) => IC(t)(n),
  insideTokenStyle: (t) => j(lt("Return", fl), dt),
  Monad0: () => ol
}, i3 = (t) => () => t.clip("evenodd"), s3 = (t) => (n) => () => {
  t.filter = `blur(${n}px)`;
}, u3 = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().translateSelf(n.ox, n.oy).scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, If = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ll = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = W2(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, a3 = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = Qa(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, eu = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = m0(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, uc = (t) => (n) => {
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
      const u = j2(t)({
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
}, c3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = If(i)(If(r / 2)(o / 2)), u = nd(t)(n + s)(e);
  return () => (u(), ms(t)(n + r - s)(e)(), $s(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), ms(t)(n + r)(e + o - s)(), $s(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), ms(t)(n + s)(e + o)(), $s(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), ms(t)(n)(e + s)(), $s(t)({ cpx: n, cpy: e, x: n + s, y: e })(), ed(t)());
}, f3 = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), tp = (t) => (n) => {
  const e = x0(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = f3();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 }, groupAlpha: { value: 1 }, alphaSaves: { value: [] } };
  };
}, l3 = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, g3 = (t) => an(t.weight) + " " + Do(t.size) + "px " + t.family, Pr = (t) => {
  const n = Do(V(t.a) / 255);
  return t.a >= 255 ? "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")" : "rgba(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + "," + n + ")";
}, _3 = (t) => (n) => (e) => (r) => {
  const o = eu(t)(e)(Pr(r));
  return () => (o(), M2(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, d3 = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", u3(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: Pr(e.bgColor),
    dotCss: Pr(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius,
    ox: e.origin.x,
    oy: e.origin.y
  })());
}, h3 = (t) => (n) => (e) => (r) => {
  const o = eu(t)(n)(Pr(r));
  return () => (o(), uc(t)(e)(), y0(t)());
}, p3 = (t) => (n) => (e) => (r) => (o) => {
  const i = eu(t)(n)(Pr(r));
  return () => (i(), ll(t)(n)(Pr(o.color))(), p0(t)(o.width)(), qa(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return Wa;
    if (o.lineJoin === "BevelJoin")
      return b0;
    if (o.lineJoin === "MiterJoin")
      return k0;
    f();
  })())(), R0(t)((() => {
    if (o.lineCap === "ButtCap")
      return E0;
    if (o.lineCap === "RoundCap")
      return S0;
    if (o.lineCap === "SquareCap")
      return L0;
    f();
  })())(), uc(t)(e)(), y0(t)(), $0(t)());
}, m3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = td(t);
  return () => {
    if (s(), c3(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (eu(t)(n)(Pr(o._1.color))(), y0(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return ll(t)(n)(Pr(i._1.color))(), p0(t)(i._1.width)(), qa(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return Wa;
        if (i._1.lineJoin === "BevelJoin")
          return b0;
        if (i._1.lineJoin === "MiterJoin")
          return k0;
        f();
      })())(), R0(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return E0;
        if (i._1.lineCap === "RoundCap")
          return S0;
        if (i._1.lineCap === "SquareCap")
          return L0;
        f();
      })())(), $0(t)();
    i.tag !== "Nothing" && f();
  };
}, $3 = (t) => (n) => (e) => (r) => {
  const o = ll(t)(n)(Pr(r.color));
  return () => (o(), p0(t)(r.width)(), qa(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return Wa;
    if (r.lineJoin === "BevelJoin")
      return b0;
    if (r.lineJoin === "MiterJoin")
      return k0;
    f();
  })())(), R0(t)((() => {
    if (r.lineCap === "ButtCap")
      return E0;
    if (r.lineCap === "RoundCap")
      return S0;
    if (r.lineCap === "SquareCap")
      return L0;
    f();
  })())(), uc(t)(e)(), $0(t)());
}, f_ = (t) => (n) => (e) => {
  const r = eu(t)(n)(Pr(e.color));
  return () => (r(), a3(t)(n)(g3(e.font))(), A0(t)((() => {
    if (e.align === "AlignLeft")
      return ey;
    if (e.align === "AlignCenter")
      return C0;
    if (e.align === "AlignRight")
      return ry;
    f();
  })())(), P0(t)((() => {
    if (e.baseline === "BaselineTop")
      return Z2;
    if (e.baseline === "BaselineMiddle")
      return J0;
    if (e.baseline === "BaselineAlphabetic")
      return ty;
    if (e.baseline === "BaselineBottom")
      return ny;
    f();
  })())(), v0(t)(e.content)(e.x)(e.y)());
}, np = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => l3
}, y3 = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => np
}, x3 = (t) => (n) => (e) => {
  const r = If(n.width / e.vw)(n.height / e.vh), o = hf(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), Ss(t)({ scaleX: r, scaleY: r })(), qa(t)(Wa)());
}, v3 = { pure: (t) => (n) => () => t, Apply0: () => np }, ep = { Applicative0: () => v3, Bind1: () => y3 }, gl = {
  fillPath: (t) => (n) => (e) => {
    const r = h3(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = $3(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = p3(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = m3(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = f_(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = Hr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", U2(e.ctx)(t)(), f_(e.ctx)(e.styleCache)(n)(), Qr(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = Hr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", hf(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Ss(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = Qr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = Hr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", hf(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Ss(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = Qr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = Hr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", uc(e.ctx)(t)(), n === "NonZero")
          return Y2(e.ctx)();
        if (n === "EvenOdd")
          return i3(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = Qr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = Hr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return ag(n.ctx)(oy)();
        if (t === "Difference")
          return ag(n.ctx)(iy)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = Qr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = Hr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = n.groupAlpha.value, s = n.alphaSaves.value;
        n.alphaSaves.value = [...s, i];
        const u = i * t;
        return n.groupAlpha.value = u, X2(n.ctx)(u)();
      }
    };
  },
  popAlpha: (t) => {
    const n = Qr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0) {
        n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
        const o = t.alphaSaves.value, i = rr(o);
        if (i.tag === "Just")
          return t.alphaSaves.value = i._1.init, t.groupAlpha.value = i._1.last;
        if (i.tag === "Nothing")
          return t.groupAlpha.value = 1;
        f();
      }
    };
  },
  pushBlur: (t) => (n) => {
    const e = Hr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = s3(n.ctx)(t);
        if (t >= 0.01)
          return i();
      }
    };
  },
  popBlur: (t) => {
    const n = Qr(t.ctx), e = t.maskDepth;
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
    const e = x3(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = _3(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = d3(n.ctx)(n.styleCache)(t), r = n.maskDepth;
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
  Monad0: () => ep
}, w3 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Mi = (t) => (n) => (e) => {
  const r = w3(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, rp = (t) => {
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
}, l_ = (t) => {
  const n = st.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = st.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, ai = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: Es(8)(0.6)(l_(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: Es(8)(0.6)(l_(1 - t._1)) };
  f();
};
function T3(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function N3(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: T3(o, i) };
  }
  return e;
}
function J3(t, n, e) {
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
  const e = N3(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = J3(e, n, i * r / t);
  return o;
}
function C3(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function b3(t, n) {
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
  return C3(r, n);
}
const __ = (t) => (n) => (e) => {
  const r = g_(t, n), o = g_(t, e), i = b3(r, o);
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
function k3(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function S3(t, n) {
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
function L3(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const h_ = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = d_(n), s = d_(e), u = k3(i, s), a = new Array(o);
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
    const h = _ <= 1e-4 ? 0 : r.maxDelay * (1 - (a[g] - c) / _), $ = Math.max(1e-4, 1 - h), x = L3((t - h) / $), y = x * x * (3 - 2 * x);
    d[g] = {
      x: p.x + (m.x - p.x) * y,
      y: p.y + (m.y - p.y) * y
    };
  }
  for (let g = 0; g < r.smoothPasses; g++)
    d = S3(0.5, d);
  return d;
}, op = (t, n) => ({ tag: t, _1: n }), ip = (t, n) => ({ tag: t, _1: n }), Rn = (t, n, e) => ({ tag: t, _1: n, _2: e }), sp = (t) => t, _l = (t, n) => ({ tag: t, _1: n }), dl = (t, n) => ({ tag: t, _1: n }), hl = (t) => t, ac = (t, n) => ({ tag: t, _1: n }), An = (t, n, e) => ({ tag: t, _1: n, _2: e }), ci = (t, n) => ({ tag: t, _1: n }), ru = (t, n) => ({ tag: t, _1: n }), up = (t, n) => ({ tag: t, _1: n }), ap = (t) => t, cp = (t, n) => ({ tag: t, _1: n }), Ho = (t, n, e) => ({ tag: t, _1: n, _2: e }), fp = (t) => t, E3 = (t) => t, Ri = /* @__PURE__ */ fp("NormalTransform"), P3 = /* @__PURE__ */ fp("BakedTransform"), lp = /* @__PURE__ */ ap("TokenOutside"), p_ = /* @__PURE__ */ ap("TokenInside"), cc = /* @__PURE__ */ ru("PlainText"), gp = /* @__PURE__ */ ci("FrameTitle"), A3 = /* @__PURE__ */ ci("Watermark"), R3 = /* @__PURE__ */ hl("NodeShadow"), _p = /* @__PURE__ */ hl("NodeBody"), F3 = /* @__PURE__ */ hl("NodeInversion"), pl = /* @__PURE__ */ sp("LabelsShown"), da = /* @__PURE__ */ sp("LabelsHidden"), nr = {
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
}, dp = (t) => (n) => tu(t)(n), G3 = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = AC(t);
  return (r) => (o) => e(kC()()()({
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
}, I3 = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("AskInsideTokenStyle", t, E3), map: nr.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), hp = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Background", t, void 0), map: nr.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), pp = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Edge", t, void 0), map: nr.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), ml = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Node", t, void 0), map: nr.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), fc = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Overlay", t, void 0), map: nr.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), ou = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Text", t, void 0), map: nr.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), mp = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Token", t, void 0), map: nr.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), B3 = (t) => (n) => j(
  lt(
    "Bind",
    { type: "scene", value: An("BeginFrame", t, void 0), map: nr.map },
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
                { type: "scene", value: An("EndFrame", void 0), map: nr.map },
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
                      { type: "scene", value: An("EndFrame", void 0), map: nr.map },
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
    { type: "scene", value: An("BeginGroup", t, void 0), map: nr.map },
    (e) => j(lt("Return", e), dt)
  ),
  at(
    "CatCons",
    () => {
      const e = () => j(
        lt(
          "Bind",
          { type: "scene", value: An("EndGroup", t, void 0), map: nr.map },
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
), Ar = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, m_ = /* @__PURE__ */ T(fr)(0), $_ = (t) => (n) => (e) => {
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
}, D3 = /* @__PURE__ */ T((t) => (n) => t + n.len)(0), $p = (t) => {
  const n = Ht((e) => v, (e) => (r) => w("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Nt(At(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, yp = (t) => (n) => {
  const e = Ar(n)(Ar(t.w / 2)(t.h / 2));
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
}, z3 = (t) => {
  const n = Ht((e) => v, (e) => (r) => w("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Nt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, $l = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return Uh(n);
  if (t.shape === "Parallelogram")
    return Xh(n);
  if (t.shape === "Diamond")
    return jh(n);
  if (t.shape === "Ellipse")
    return qh(n);
  if (t.shape === "Document")
    return Yh(n);
  if (t.shape === "Cloud")
    return Zh(n)(7);
  if (t.shape === "Rectangle")
    return yp(n)(7);
  f();
}, zn = (t) => (n) => (e) => D((r) => {
  const o = V(r) / V(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(Vt(0, e - 1 | 0)), H3 = (t) => {
  const n = Ie(t.w * 0.18)(t.h * 0.6);
  return [
    ...zn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...zn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...zn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...zn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, qs = (t) => (n) => {
  const e = Ar(t)(Ar(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, Bf = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return ne(r * r + e * e);
}, Q3 = (t) => Ln((n) => (e) => ({ a: n, b: e, len: Bf(n)(e) }), t, At(1, t.length, t)), O3 = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? w("Just", n[e]) : v, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    f();
  })(), i = 0 < n.length ? w("Just", n[0]) : v, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    f();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...Nt(Vt(1, u - 2 | 0))((a) => {
      const c = a + 1 | 0, l = c >= 0 && c < n.length ? w("Just", n[c]) : v, _ = a >= 0 && a < n.length ? w("Just", n[a]) : v, d = a - 1 | 0, g = d >= 0 && d < n.length ? w("Just", n[d]) : v;
      if (g.tag === "Just" && _.tag === "Just" && l.tag === "Just") {
        const p = _._1, m = Bf(p)(l._1), h = Bf(g._1)(p), $ = Ar(t)(m / 2), x = Ar(t)(h / 2), y = m > 0 ? $ / m : 0, J = p.x + (l._1.x - p.x) * y, N = p.y + (l._1.y - p.y) * y, C = h > 0 ? x / h : 0, S = p.x + (g._1.x - p.x) * C, P = p.y + (g._1.y - p.y) * C;
        return D((E) => {
          const Q = V(E) / V(10), W = 1 - Q;
          return { x: W * W * S + 2 * W * Q * p.x + Q * Q * J, y: W * W * P + 2 * W * Q * p.y + Q * Q * N };
        })(Vt(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, W3 = (t) => (n) => (e) => (r) => (o) => D((i) => {
  const s = V(i) / V(o), u = 1 - s, a = s * s * s, c = 3 * u * s * s, l = 3 * u * u * s, _ = u * u * u;
  return { x: _ * t.x + l * n.x + c * e.x + a * r.x, y: _ * t.y + l * n.y + c * e.y + a * r.y };
})(Vt(0, o - 1 | 0)), q3 = (t) => [
  ...zn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...zn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...W3({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...zn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], y_ = (t) => (n) => D((e) => {
  const r = 6.283185307179586 * V(e) / V(64);
  return { x: t.x + n * fe(r), y: t.y + n * Te(r) };
})(Vt(0, 63)), xp = (t) => (n) => {
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
}, X3 = (t) => {
  const n = t.y + t.h / 2, e = Ie(t.h * 0.4)(t.w * 0.2);
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
  return n === 0 ? { x: 0, y: 0 } : { x: m_(D((e) => e.x)(t)) / V(n), y: m_(D((e) => e.y)(t)) / V(n) };
}, bu = (t) => (n) => (e) => (r) => (o) => D((i) => {
  const s = e + (r - e) * (V(i) / V(o));
  return { x: t.x + n * fe(s), y: t.y + n * Te(s) };
})(Vt(0, o - 1 | 0)), Df = (t) => (n) => {
  const e = Ar(t)(Ar(n.w / 2)(n.h / 2));
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
}, ha = (t) => (n) => (e) => (r) => (o) => (i) => D((s) => {
  const u = r + (o - r) * (V(s) / V(i));
  return { x: t.x + n * fe(u), y: t.y + e * Te(u) };
})(Vt(0, i - 1 | 0)), Y3 = (t) => {
  const n = t.h * 0.38;
  return [
    ...Nt(Vh(Kh(Mh)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = Oo(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = Oo(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return ha({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...zn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...zn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...zn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, M3 = (t) => {
  const n = Ar(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...ha({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...zn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...ha({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...zn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, ni = (t) => (n) => n.shape === "Cylinder" ? M3(n) : n.shape === "Parallelogram" ? H3(n) : n.shape === "Diamond" ? X3(n) : n.shape === "Ellipse" ? Df(Ie(n.w)(n.h) / 2)(n) : n.shape === "Document" ? q3(n) : n.shape === "Cloud" ? Y3(n) : Df(t)(n), U3 = (t) => {
  const n = Ar(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return ha({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, K3 = (t) => (n) => (e) => T((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, a = n > r.pos ? (n - r.pos) / o.len : 0, c = { x: o.a.x + (o.b.x - o.a.x) * a, y: o.a.y + (o.b.y - o.a.y) * a }, l = r.points.length - 1 | 0, _ = l >= 0 && l < r.points.length ? (() => {
    const d = r.points[l].x - c.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const g = r.points[l].y - c.y;
      return g < 0 ? -g < 1e-4 : g < 1e-4;
    })();
  })() ? Lt(r.points)(u) : [...r.points, c, u] : [c, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: _ };
})({ pos: 0, points: [] })(t).points, V3 = (t) => (n) => (e) => {
  const r = Ht((o) => v, (o) => (i) => w("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = Q3(t), i = D3(o), s = $_(0)(i)(n * i), u = $_(0)(i)(e * i);
    return u <= s ? [] : K3(o)(s)(u);
  }
  f();
}, j3 = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, a = e.x - t.x, c = e.y - t.y, l = s * i - u * o, _ = (a * i - c * o) / l, d = (a * u - c * s) / l;
  return (l < 0 ? -l < 1e-9 : l < 1e-9) ? v : _ >= 0 && _ <= 1 && d >= 0 && d <= 1 ? w("Just", _) : v;
}, Z3 = (t) => (n) => (e) => {
  const r = It((o) => (i) => st.compare(o.t)(i.t))(bt((o) => {
    const i = j3(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? w("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : v;
  })(Ln(Vn, t, [...At(1, t.length, t), ...At(0, 1, t)])));
  return 0 < r.length ? w("Just", r[0].p) : v;
}, x_ = (t) => (n) => {
  const e = rr(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = Z3(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return Lt(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, co = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, zf = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, tb = (t) => (n) => (e) => {
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
}, nb = (t) => (n) => {
  const e = co(0)(t.y + 4 - n.y) + co(0)(n.y + n.h - (t.y + t.h - 4)), r = co(0)(t.x + 4 - n.x) + co(0)(n.x + n.w - (t.x + t.w - 4));
  return r * n.h + e * n.w + r * e;
}, eb = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = T(co)(0)(D((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? zf((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, rb = (t) => (n) => {
  const e = zf(t.x + t.w)(n.x + n.w) - co(t.x)(n.x), r = zf(t.y + t.h)(n.y + n.h) - co(t.y)(n.y);
  return t.x < n.x + n.w && t.x + t.w > n.x && t.y < n.y + n.h && t.y + t.h > n.y ? e * r : 0;
}, v_ = (t) => (n) => (e) => (r) => {
  const o = t + 4, i = co(0)(n - 8), s = o + i - e;
  return e <= i ? tb(o)(s)(r) : t + (n - e) / 2;
}, Hf = (t) => (n) => ({ ...n, x: v_(t.x)(t.w)(n.w)(n.x), y: v_(t.y)(t.h)(n.h)(n.y) }), ob = (t) => {
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
}, ib = (t) => (n) => (e) => (r) => (o) => {
  const i = o.y + o.h / 2 - e.token.y, s = o.y - r.y;
  return (() => {
    const u = o.x + o.w / 2 - e.token.x, a = o.x - r.x;
    return 1e6 * nb(t)(o) + 1e4 * T((c) => (l) => c + rb(o)(l))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.y > e.token.y ? 100 : 0);
}, sb = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = Hf(t)(s);
    return { rect: u, score: ib(t)(n)(e)(r)(u) };
  }, i = Ht((s) => v, (s) => (u) => w("Just", { head: s, tail: u }), [r, e.rect, ...ob(e)]);
  if (i.tag === "Nothing")
    return Hf(t)(r);
  if (i.tag === "Just")
    return T((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).rect;
  f();
}, ub = (t) => (n) => (e) => T((r) => (o) => {
  const i = eb(o.rect)(r.obstacles), s = i.x >= t.x + 4 && i.y >= t.y + 4 && i.x + i.w <= t.x + t.w - 4 && i.y + i.h <= t.y + t.h - 4 ? i : sb(t)(r.obstacles)(o)(i);
  return { acc: tt(F)(o.id)(s)(r.acc), obstacles: Lt(r.obstacles)(s) };
})({ acc: G, obstacles: n })(e).acc, xl = (t) => t, qr = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Yo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ab = /* @__PURE__ */ ji(a0)(Yt), cb = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, fb = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, w_ = /* @__PURE__ */ xl("SegMove"), lb = /* @__PURE__ */ xl("SegLine"), gb = /* @__PURE__ */ xl("SegQuad"), T_ = { offset: 0.4, passes: 1, rMax: 1.5 }, vp = (t) => dn(Oe(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, pa = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, lc = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, Yr = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Xs = /* @__PURE__ */ (() => {
  const t = T((n) => (e) => ((n * 31 | 0) + dn(Oe(e.x * 100)) | 0) + dn(Oe(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), _b = (t) => {
  const n = [];
  let e = 0, r = { x: 0, y: 0 };
  for (; e < t.length; ) {
    const o = e, i = r, s = o >= 0 && o < t.length ? w("Just", t[o]) : v;
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
        n.push({ kind: lb, m: i, c: i, p: u, len: ne(a * a + c * c) }), r = u, e = o + 3 | 0;
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
          kind: gb,
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
}, db = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : At(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? w("Just", r[s]) : v;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, a = ne(u * u + s * s);
    return a <= 1e-4 ? n : Lt((() => {
      const c = n.length - 1 | 0;
      return c < 1 ? [] : At(0, c, n);
    })())({ x: n[i].x + u / a * t, y: n[i].y + s / a * t });
  }
  return n;
}, hb = (t) => (n) => (e) => fn(T((r) => (o) => {
  const i = Dn(0)(t)(r.prng), s = Dn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * fe(s.value), y: o.y + i.value * Te(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), pb = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return lc(t)(n.p);
  if (n.kind === "SegLine")
    return Yr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return Yr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, mb = (t) => (n) => {
  if (n.kind === "SegMove")
    return lc(t)(n.p);
  if (n.kind === "SegLine")
    return Yr(t)(n.p);
  if (n.kind === "SegQuad")
    return pa(t)(n.c)(n.p);
  f();
}, wp = (t) => (n) => {
  const e = _b(n), r = T((u) => (a) => u + a.len)(0)(e) * qr(0)(Yo(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, a = i;
    if (u >= 0 && u < e.length) {
      if (a + e[u].len <= r) {
        const c = e[u];
        mb(o)(c)(), i = a + c.len, s = u + 1 | 0;
        continue;
      }
      if (a >= r) {
        s = e.length;
        continue;
      }
      pb(o)(e[u])((r - a) / qr(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, N_ = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Tp = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = ne(s * s + o * o), a = e.x - n.x, c = ne(a * a + i * i), l = Yo(t.rMax * (T2(c > 0 && u > 0 ? qr(-1)(Yo(1)((a * s + i * o) / (c * u))) : 1) / 3.141592653589793))(0.4 * Yo(c)(u));
  return { inP: c > 0 ? { x: e.x - a / c * l, y: e.y - i / c * l } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * l, y: e.y + o / u * l } : e };
}, Np = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? w("Just", n[0]) : v;
  if (o.tag === "Just" ? lc(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, a = u + 1 | 0;
      if (a >= 0 && a < n.length) {
        if (u >= 0 && u < n.length) {
          const c = u - 1 | 0;
          if (c >= 0 && c < n.length) {
            const l = Tp(t)(n[c])(n[u])(n[a]);
            Yr(r)(l.inP)(), pa(r)(l.curr)(l.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && Yr(r)(n[i])(), r;
}, $b = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return Np(t)(o);
  const i = 0 < o.length ? w("Just", o[0]) : v, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, a = Vr(Vr(n)(u) + u | 0)(u), c = (g) => {
    const p = Vr(g + u | 0)(u);
    return p >= 0 && p < o.length ? o[p] : s;
  }, l = D((g) => Tp(t)(c((a + g | 0) - 1 | 0))(c(a + g | 0))(c((a + g | 0) + 1 | 0)))(Vt(
    0,
    u - 1 | 0
  )), _ = [], d = 0 < l.length ? w("Just", l[0]) : v;
  if (d.tag === "Just")
    if (lc(_)(d._1.outP)(), ab((() => {
      const g = Ht((p) => v, (p) => (m) => w("Just", m), l);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })())((g) => {
      const p = Yr(_)(g.inP);
      return () => (p(), pa(_)(g.curr)(g.outP)());
    })(), e)
      Yr(_)(d._1.inP)(), pa(_)(d._1.curr)(d._1.outP)(), _.push(5);
    else {
      const g = l.length - 1 | 0;
      g >= 0 && g < l.length ? Yr(_)((() => {
        const p = 1 - r;
        return { x: l[g].outP.x + (d._1.inP.x - l[g].outP.x) * p, y: l[g].outP.y + (d._1.inP.y - l[g].outP.y) * p };
      })())() : Yr(_)(d._1.inP)();
    }
  else d.tag === "Nothing" || f();
  return _;
}, Fi = (t) => (n) => (e) => (r) => {
  const o = cb(1)(r.length - 1 | 0), i = Dn(0)(V(o))(Ff("shape")(n)), s = fb(o - 1 | 0)(dn(Oe(i.value))), u = i.prng;
  return D((a) => {
    const c = Dn(0)(1)(Ff(an(a))(u)), l = Dn(-0.18)(0.3)(c.prng), _ = c.value < 0.7, d = Dn(0.5)(0.85)(l.prng), g = hb(t.offset)(d.prng)(r);
    return { path: e ? $b(t)(s)(_)(l.value)(g) : Np(t)(g), alpha: d.value };
  })(Vt(0, t.passes - 1 | 0));
}, yb = (t) => (n) => (e) => Fi(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), xb = (t) => (n) => (e) => {
  const r = qr(0)(Yo(1)(e)), o = n.h / V(4), i = qr(6)(o * 1.4);
  return bt((s) => s)(D((s) => {
    if (r < qr(0)(V(s) / V(4) - 0.05))
      return v;
    const u = Ff(an(s))(t), a = qr(0)(V(s) / V(4) - 0.05), c = Vr(s)(2) === 0, l = c ? n.x - 2 : n.x + n.w + 2, _ = c ? n.x + n.w + 2 : n.x - 2, d = n.y + (V(s) + 0.5) * o;
    return w(
      "Just",
      {
        path: wp(qr(0)(Yo(1)((r - a) / qr(1e-4)(Yo(1)(V(s + 1 | 0) / V(4) + 0.05) - a))))((() => {
          const g = { rMax: 2, offset: 0.6, passes: 1 }, p = fn(T((h) => ($) => {
            const x = Dn(-o * 0.08)(o * 0.08)(h.prng);
            return { prng: x.prng, out: [{ x: l + (_ - l) * (V($) / V(4)), y: d + x.value }, ...h.out] };
          })({ prng: u, out: [] })(Vt(0, 4)).out), m = p.length < 2 ? [] : Fi(g)(u)(!1)(p);
          return 0 < m.length ? m[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(Vt(0, 3)));
}, Uc = (t, n, e) => ({ tag: t, _1: n, _2: e }), ma = (t) => (n) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, le = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), Tr = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Fo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, no = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, vb = Yt.foldMap(D2), Bu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Jp = /* @__PURE__ */ pn(F)(Yt), Cp = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, wb = /* @__PURE__ */ V1(F), Tb = (t) => (e) => {
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
}, ei = (t) => {
  const n = t.Apply0();
  return (e) => T((r) => (o) => n.apply(n.Functor0().map((i) => i0)(r))(e(o)))(t.pure());
}, oo = /* @__PURE__ */ ei(ti), bp = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, a = Mi(o)(i)(r), c = 0 < t.length ? w("Just", t[0]) : v, l = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? w("Just", t[_]) : v, g = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    f();
  })(), p = __(128)(ni(4)(qs(2)(n)))(y_(l)(6)), m = l.x - u.x, h = 2 * (() => {
    const H = l.y - u.y;
    return (m < 0 ? -m : m) + (H < 0 ? -H : H);
  })(), $ = g.x - s.x, x = 2 * (() => {
    const H = g.y - s.y;
    return ($ < 0 ? -$ : $) + (H < 0 ? -H : H);
  })(), y = h + Ya(t) + x, J = y <= 1e-4 ? 1 : 1 - x / y, N = y <= 1e-4 ? 0 : h / y, C = J - N, S = __(128)(y_(g)(6))(ni(4)(qs(2)(e))), P = { maxDelay: 0.4, smoothPasses: 2 }, E = Vo(t)(ma(0)(1)(C <= 1e-4 ? 0 : (a - N) / C)), Q = (() => {
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
  return a < N ? Ho("PolyShape", h_(B)(p.from)(p.to)(P)) : a >= J ? Ho("PolyShape", h_(W)(S.from)(S.to)(P)) : Ho("CircleShape", Q, 6);
}, vl = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = bp(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return yl(s._1);
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
        chipText: zr,
        nodeFill: Tn,
        nodeStroke: zr,
        text: zr,
        edge: zr,
        arrowFill: zr,
        tokenOutsideFill: zr,
        tokenOutsideStroke: Tn,
        tokenInside: Tn,
        tokenInsideStroke: Tn,
        tokenInsideBlend: Iu,
        tokenInsideAlpha: 1,
        chipPillFill: zr,
        chipPillText: Tn,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: zr,
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
        nodeFill: zr,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: Tn,
        tokenOutsideStroke: Tn,
        tokenInside: Tn,
        tokenInsideStroke: Tn,
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
        shadowDot: Tn,
        chip: Tn,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: Tn,
        text: Tn,
        edge: Tn,
        arrowFill: Tn,
        tokenOutsideFill: Tn,
        tokenOutsideStroke: Tn,
        tokenInside: Tn,
        tokenInsideStroke: Tn,
        tokenInsideBlend: a_,
        tokenInsideAlpha: 0.35,
        chipPillFill: Tn,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: Tn,
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
        tokenInsideBlend: a_,
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
        tokenOutsideStroke: Tn,
        tokenInside: Tn,
        tokenInsideStroke: Tn,
        tokenInsideBlend: Iu,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: Tn,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    f();
  };
})(), Qf = (t) => (n) => Nt(le(t.nodes))((e) => {
  const r = Hn(e._1)(n.nodes);
  return r.tag === "Just" && ai(r._1).alpha > 0 ? $l(e._2) : [];
}), Nb = (t) => (n) => (e) => [
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
  ...Qf(n)(e)
], Jb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = xo.traverse(r);
  return (i) => (s) => {
    const u = Gr(s), a = 0.32 * i.size;
    return o((c) => e.bind(c === 0 ? r.pure(0) : t.measureText(i)(On(c)(s)))((l) => e.bind(t.measureText(i)(On(c + 1 | 0)(s)))((_) => e.bind(t.measureInk(i)(c >= 0 && c < u.length ? ts(u[c]) : " "))((d) => r.pure({ x: l, w: _ - l, up: d.ascent - a, down: d.descent + a })))))(Vt(
      0,
      u.length - 1 | 0
    ));
  };
}, Cb = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = T((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return D((o) => {
    const i = V(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, Of = (t) => {
  const n = No(`
`)(t);
  return n.length === 0 ? [""] : n;
}, bb = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, a = Mi(o)(i)(r), c = 0 < t.length ? w("Just", t[0]) : v, l = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? w("Just", t[_]) : v, g = (() => {
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
  })(), x = m + Ya(t) + $, y = x <= 1e-4 ? 1 : 1 - $ / x, J = x <= 1e-4 ? 0 : m / x, N = y - J, C = Vo(t)(ma(0)(1)(N <= 1e-4 ? 0 : (a - J) / N)), S = (() => {
    if (C.tag === "Just")
      return C._1;
    if (C.tag === "Nothing")
      return l;
    f();
  })();
  return a < J ? Uc("InsideRect", qs(2)(n)) : a >= y ? Uc("InsideRect", qs(2)(e)) : Uc("InsideBall", S, 6);
}, Wf = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (a, c) => mp({
    id: a,
    pass: t,
    geometry: up("FlatToken", c),
    position: (() => {
      if (c.tag === "CircleShape")
        return c._1;
      if (c.tag === "PolyShape")
        return yl(c._1);
      f();
    })(),
    plan: cp("FlatTokenPlan", { wobble: e, fill: i, stroke: s })
  });
  return oo((a) => {
    if (a._2.tag === "Travelling") {
      const c = Hn(a._2._1.target)(r.nodes), l = Hn(a._2._1.source)(r.nodes);
      if (l.tag === "Just" && c.tag === "Just") {
        const _ = no(a._2._1.edge)(r.edges);
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
                const g = bb(d)(l._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost);
                if (g.tag === "InsideRect")
                  return Ho("PolyShape", Df(4)(g._1));
                if (g.tag === "InsideBall")
                  return Ho("CircleShape", g._1, g._2);
                f();
              }
              return bp(d)(l._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost);
            })()
          );
        }
        if (_.tag === "Nothing") {
          const d = Mi(a._2._1.holdPre)(a._2._1.holdPost)(a._2._1.progress), g = { x: l._1.x + l._1.w / 2, y: l._1.y + l._1.h / 2 }, p = { x: c._1.x + c._1.w / 2, y: c._1.y + c._1.h / 2 };
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
                    return 1 - Tr(0)(Fo(1)(h)) * Tr(0)(Fo(1)(h)) * (3 - 2 * Tr(0)(Fo(1)(h)));
                  }
                  const m = (d - 0.5) * 2;
                  return Tr(0)(Fo(1)(m)) * Tr(0)(Fo(1)(m)) * (3 - 2 * Tr(0)(Fo(1)(m)));
                })()
              )
            ]
          })(u(a._1, Ho("CircleShape", d < 0.5 ? g : p, 6)));
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
          Ho(
            "PolyShape",
            ni(4)(qs(2)(c._1))
          )
        );
      if (c.tag === "Nothing")
        return j(lt("Return", void 0), dt);
      f();
    }
    return j(lt("Return", void 0), dt);
  })(le(o.tokens));
}, kb = (t) => {
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
}, kp = (t) => (n) => (e) => (r) => ae({
  path: [],
  role: Se,
  layer: v,
  effects: [
    Rn("GroupAlpha", e.fadeAlpha),
    Rn(
      "GroupTransform",
      Ri,
      { tx: t.x * (1 - e.popScale), ty: (t.y + t.h) * (1 - e.popScale), sx: e.popScale, sy: e.popScale }
    ),
    Rn(
      "GroupTransform",
      Ri,
      { tx: 0, ty: n.y * (1 - e.flipY), sx: 1, sy: e.flipY }
    )
  ]
})(ou(r)), Sp = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => {
  const l = ai(c), _ = c.tag === "PloppingOut" && r.wobble ? { alpha: 1, scale: 1 } : l, d = No(`
`)(a.label === "" ? u : a.label), g = d.length === 0 ? [""] : d, p = { family: r.fontFamily, size: r.wobble ? 15 : 11, weight: r.wobble ? 800 : 500 }, m = p.size * 1.2, h = { tx: (a.x + a.w / 2) * (1 - _.scale), ty: (a.y + a.h / 2) * (1 - _.scale), sx: _.scale, sy: _.scale }, $ = (a.shape === "Cylinder" ? (a.y + (a.y + a.h + 5 - 2 * Ie(a.h * 0.075)(a.w * 0.075))) / 2 : (a.y + a.y + a.h) / 2) - V(g.length) * m / 2 + m / 2, x = ml({
    id: u,
    role: t,
    geometry: _l("FlatNode", { shape: a.shape, bounds: { x: a.x, y: a.y, w: a.w, h: a.h } }),
    alpha: o,
    plan: dl(
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
          Rn("GroupTransform", Ri, h),
          Rn("GroupAlpha", i)
        ]
      })(oo((N) => ou({
        owner: ci("NodeText", u),
        text: N._2,
        spec: {
          x: a.x + a.w / 2,
          y: $ + V(N._1) * m,
          content: N._2,
          font: p,
          color: r.text,
          align: ro,
          baseline: We
        },
        bounds: v,
        plan: cc
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
}, Sb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => kp(o)(i)(s)({
  owner: ci("TokenText", t),
  text: e,
  spec: {
    x: i.x,
    y: i.y,
    content: e,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipText,
    align: ro,
    baseline: We
  },
  bounds: w("Just", o),
  plan: ru(
    "TokenFillingText",
    {
      shadow: { ...o, y: o.y + 1.5 },
      shadowFill: { color: n.chipShadow, flat: !0 },
      radius: 6,
      fill: { color: n.chip, flat: !0 },
      stroke: { color: n.chipHairline, width: 1, lineJoin: ie, lineCap: qe },
      leader: [1, i.x, o.y + o.h, 2, r.x + r.w / 2, r.y]
    }
  )
}), Lb = { offset: 0.8, passes: 2, rMax: 5 }, qf = (t) => (n) => (e) => (r) => ae({
  path: [],
  role: Se,
  layer: w("Just", zC),
  effects: [Rn("GroupClip", Nb(n)(e)(r), WC)]
})(Wf(lp)(!1)(t.wobble)(e)(r)(t.tokenOutsideFill)(t.tokenOutsideStroke)), Lp = (t) => (n) => (e) => (r) => {
  if (n.tokenInsideBlend === "Difference") {
    const o = I3(t), i = (s) => {
      const u = ae({
        path: [],
        role: Se,
        layer: w("Just", HC),
        effects: [
          Rn("GroupBlend", Iu),
          Rn("GroupClip", Qf(e)(r), Os)
        ]
      })(Wf(p_)(s === "ConvexAbsorb")(n.wobble)(e)(r)(n.tokenInside)(n.tokenInsideStroke)), a = () => ae({
        path: [],
        role: Se,
        layer: w("Just", QC),
        effects: []
      })(oo((c) => {
        const l = Hn(c._1)(r.nodes);
        return l.tag === "Just" && ai(l._1).alpha > 0 ? fc(ac(
          "FloorOverlay",
          {
            path: $l(c._2),
            fill: w("Just", { color: Tn, flat: !1 }),
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
        Rn("GroupClip", Qf(e)(r), Os),
        Rn("GroupAlpha", n.tokenInsideAlpha)
      ]
    })(Wf(p_)(!1)(n.wobble)(e)(r)(n.tokenInside)(n.tokenInsideStroke));
  f();
}, J_ = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Ht(
    (i) => v,
    (i) => (s) => w("Just", { head: i, tail: s }),
    D((i) => i.pt)(m2(
      (i) => (s) => {
        const u = V(s) / V(72), a = Dn(-0.18)(0.18)(i.prng), c = Dn(-0.1)(0.1)(a.prng), l = Dn(-0.07)(0.07)(c.prng), _ = e * (0.05 + 0.55 * u) * (1 + c.value), d = u * 28.274333882308138 + a.value;
        return { prng: l.prng, pt: { x: n.x + fe(d) * _ + l.value * e, y: n.y + Te(d) * _ + l.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      Vt(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...vb((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: ie, lineCap: _r }), Eb = (t) => {
  const n = t.Monad0().Applicative0();
  return (e) => {
    if (e.geometry.tag === "FlatToken" && e.plan.tag === "FlatTokenPlan") {
      if (e.geometry._1.tag === "CircleShape")
        return e.plan._1.wobble ? J_(t)(e.geometry._1._1)(e.geometry._1._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(xp(e.geometry._1._1)(e.geometry._1._2))({
          color: e.plan._1.fill,
          flat: !0
        })({ color: e.plan._1.stroke, width: 1, lineJoin: ie, lineCap: qe });
      if (e.geometry._1.tag === "PolyShape")
        return e.plan._1.wobble && e.geometry._1._1.length >= 3 ? J_(t)(yl(e.geometry._1._1))(6)({ r: 200, g: 35, b: 30, a: 220 }) : e.geometry._1._1.length >= 3 ? t.fillStrokePath($p(e.geometry._1._1))({ color: e.plan._1.fill, flat: !0 })({
          color: e.plan._1.stroke,
          width: 1,
          lineJoin: ie,
          lineCap: qe
        }) : n.pure();
      f();
    }
    return n.pure();
  };
}, Pb = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popClip, i = t.popTransform, s = t.popAlpha;
  return (u) => (a) => (c) => (l) => {
    const _ = ai(l), d = { ...c, y: c.y + 5 }, g = d.x + d.w / 2, p = d.y + d.h / 2, m = r.bind(t.pushAlpha(_.alpha))(() => r.bind(t.pushTransform({
      tx: g * (1 - _.scale),
      ty: p * (1 - _.scale),
      sx: _.scale,
      sy: _.scale
    }))(() => r.bind(t.drawRoundedRect({ x: d.x, y: d.y, w: d.w, h: d.h })(7)(w("Just", { color: u.shadowFill, flat: !0 }))(v))(() => r.bind((() => {
      const h = r.bind(t.pushClip(yp(d)(7))(Os))(() => r.bind(t.backgroundDots({
        viewport: { vx: d.x, vy: d.y, vw: d.w, vh: d.h },
        bgColor: u.bgTransparent,
        dotColor: u.shadowDot,
        tile: 1.6,
        dotRadius: 0.25,
        origin: { x: 0, y: 0 }
      }))(() => o));
      return a && !u.wobble ? h : e.pure();
    })())(() => r.bind(t.drawRoundedRect({ x: d.x, y: d.y, w: d.w, h: d.h })(7)(v)(w(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: ie, lineCap: qe }
    )))(() => r.bind(i)(() => s))))));
    return _.alpha > 0 && !u.wobble ? m : e.pure();
  };
}, Ep = (t) => (n) => (e) => (r) => oo((o) => {
  const i = Hn(o._1)(r.nodes);
  if (i.tag === "Just")
    return ml({
      id: o._1,
      role: R3,
      geometry: _l("FlatNode", { shape: o._2.shape, bounds: { x: o._2.x, y: o._2.y, w: o._2.w, h: o._2.h } }),
      alpha: 1,
      plan: dl(
        "FlatNodePlan",
        {
          palette: t,
          label: o._2.label,
          labelVisibility: da,
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
})(le(e.nodes)), Pp = (t) => (n) => (e) => {
  const r = { ...t, nodeFill: t.text, text: t.nodeFill, nodeStroke: t.nodeFill };
  return oo((o) => {
    const i = Hn(o._1)(e.nodes), s = Hn(o._1)(n.nodes), u = s.tag === "Just" && i.tag === "Just" ? ae({
      path: [],
      role: Se,
      layer: v,
      effects: [Rn("GroupAlpha", o._2)]
    })(Sp(F3)(pl)(1)(r)(1)(1)(v)(o._1)(s._1)(i._1)) : j(lt("Return", void 0), dt);
    return o._2 > 0 ? u : j(lt("Return", void 0), dt);
  })(le(e.nodeInvert));
}, Ab = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = ei(n.Applicative0());
  return (i) => (s) => (u) => o((a) => e.bind(t.pushAlpha(a.alpha))(() => e.bind(t.strokePath(a.path)({
    color: i.nodeFill,
    width: a.width,
    lineJoin: ie,
    lineCap: _r
  }))(() => r)))(xb(vp(s) + 7777 | 0)(s)(u));
}, Rb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = ei(o), s = t.popClip, u = ei(o), a = xo.traverse(o), c = Jb(t), l = Ab(t), _ = t.popTransform;
  return (d) => (g) => (p) => (m) => (h) => ($) => (x) => (y) => (J) => {
    const N = (R) => e.bind(t.pushAlpha(R.alpha))(() => e.bind(t.strokePath(R.path)({
      color: p.nodeStroke,
      width: 2,
      lineJoin: ie,
      lineCap: _r
    }))(() => r)), C = { family: p.fontFamily, size: p.wobble ? 15 : 11, weight: p.wobble ? 800 : 500 }, S = No(`
`)(y.label === "" ? x : y.label), P = S.length === 0 ? [""] : S, E = C.size * 1.2, Q = y.shape === "Cylinder" ? t.strokePath(n3({ x: y.x, y: y.y, w: y.w, h: y.h }))({
      color: p.nodeStroke,
      width: 1.25,
      lineJoin: ie,
      lineCap: qe
    }) : o.pure(), W = (y.shape === "Cylinder" ? (y.y + (y.y + y.h + 5 - 2 * Ie(y.h * 0.075)(y.w * 0.075))) / 2 : (y.y + y.y + y.h) / 2) - V(P.length) * E / 2 + E / 2, B = J.tag === "PloppingOut" && p.wobble ? J._1 : -1, H = B >= 0, rt = ai(J), ot = H ? { alpha: 1, scale: 1 } : rt, M = y.x + y.w / 2, q = y.y + y.h / 2, A = e.bind(t.pushAlpha(ot.alpha * m))(() => e.bind(t.pushTransform({
      tx: M * (1 - ot.scale),
      ty: q * (1 - ot.scale),
      sx: ot.scale,
      sy: ot.scale
    }))(() => {
      const R = { x: y.x, y: y.y, w: y.w, h: y.h }, X = {
        color: p.nodeStroke,
        width: p.wobble ? 2 : 1.25 * g,
        lineJoin: ie,
        lineCap: p.wobble ? _r : qe
      };
      return e.bind((() => {
        if (p.wobble) {
          if (y.shape === "Rectangle")
            return i(N)(yb(N_)(vp(R))(R));
          const L = ni(7)(y);
          return e.bind(i(N)((() => {
            const I = Xs(L);
            return L.length < 4 ? [] : Fi(T_)(I)(!0)(L);
          })()))(() => u((I) => i(N)((() => {
            const z = Xs(I);
            return I.length < 2 ? [] : Fi(T_)(z)(!1)(I);
          })()))(y.shape === "Cylinder" ? [U3(y)] : []));
        }
        return e.bind(r3(t)(y.shape)(R)(7)(w("Just", { color: p.nodeFill, flat: !1 }))(w(
          "Just",
          X
        )))(() => Q);
      })())(() => e.bind((() => {
        if ($.tag === "Just" && p.wobble && !H) {
          const L = $._1;
          return e.bind(a(c(C))(P))((I) => {
            const z = It((ft) => (mt) => st.compare(ft.x)(mt.x)), U = dn(Oe(y.x * 7919 + y.y * 3001)) * -1640531535 | 0, K = Dn(5)(7.5)(U), O = Dn(0)(K.value)(K.prng), Z = -(1 + 2 * Dn(-1)(1)(O.prng).value * 3.141592653589793 / 180), et = (ft, mt, Ft, St, zt) => z(bt((tn) => tn)([
              Z * mt + ft >= St && Z * mt + ft <= zt ? w("Just", { x: mt, y: Z * mt + ft }) : v,
              Z * Ft + ft >= St && Z * Ft + ft <= zt ? w("Just", { x: Ft, y: Z * Ft + ft }) : v,
              (() => {
                const tn = (St - ft) / Z;
                return tn >= mt && tn <= Ft ? w("Just", { x: tn, y: St }) : v;
              })(),
              (() => {
                const tn = (zt - ft) / Z;
                return tn >= mt && tn <= Ft ? w("Just", { x: tn, y: zt }) : v;
              })()
            ])), nt = K.value, gt = Vr(L.frameHash)(3), ct = gt === 0 ? { r: 200, g: 35, b: 30, a: 220 } : gt === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, $t = y.x + y.w / 2, Pt = Ee(Xt((ft) => (mt) => Xt((() => {
              const Ft = W + V(ft) * E, St = $t - T((zt) => (tn) => zt + tn.w)(0)(mt) / 2;
              return (zt) => (tn) => {
                const pe = C.size * 0.1, Mn = zt - 1 | 0, jn = Mn >= 0 && Mn < mt.length && zt > 0 ? (mt[Mn].x + mt[Mn].w + tn.x) / 2 : tn.x - pe;
                return {
                  x: St + jn - 1,
                  y: Ft - tn.up - 1,
                  w: Tr(0)((() => {
                    const Qt = zt + 1 | 0;
                    return Qt >= 0 && Qt < mt.length && zt < (mt.length - 1 | 0) ? (tn.x + tn.w + mt[Qt].x) / 2 - jn : tn.x + tn.w + pe - jn;
                  })()) + 2,
                  h: tn.up + tn.down + 2
                };
              };
            })())(mt))(I)), Rt = y.y + 4, rn = y.x + y.w - 4, xt = y.x + 4, Gt = Rt - Z * xt + O.value, vt = y.y + y.h - 4, Jt = Nt(Nt(Xt((ft) => (mt) => {
              const Ft = (mt.from.x + mt.to.x) / 2, St = (mt.from.y + mt.to.y) / 2, zt = Dn(-1)(1)(U + (911 * (ft + 1 | 0) | 0) | 0), tn = Dn(-3)(5)(zt.prng), pe = zt.value * 3.141592653589793 / 180, Mn = fe(pe), jn = Te(pe), Qt = (Ot) => ({ x: Ft + (Ot.x - Ft) * Mn - (Ot.y - St) * jn, y: St + (Ot.x - Ft) * jn + (Ot.y - St) * Mn });
              return {
                from: (() => {
                  const Ot = Qt(mt.from), me = Ot.y - St, ee = Ot.x - Ft, Un = ne(ee * ee + me * me), Qn = Un < 1e-4 ? 1 : (Un + tn.value) / Un;
                  return { x: Ft + ee * Qn, y: St + me * Qn };
                })(),
                to: (() => {
                  const Ot = Qt(mt.to), me = Dn(-3)(5)(tn.prng).value, ee = Ot.y - St, Un = Ot.x - Ft, Qn = ne(Un * Un + ee * ee), sr = Qn < 1e-4 ? 1 : (Qn + me) / Qn;
                  return { x: Ft + Un * sr, y: St + ee * sr };
                })()
              };
            })(bt((ft) => {
              const mt = et(Gt + V(ft) * nt, xt, rn, Rt, vt);
              return mt.length === 2 ? w("Just", { from: mt[0], to: mt[1] }) : v;
            })(Vt(0, Bu(1)(dn(Oe((vt - Z * rn - Gt) / nt)))))))((ft) => ht(
              (mt) => mt.to.x - mt.from.x > 1,
              T((mt) => (Ft) => Nt(mt)((St) => {
                const zt = et(St.from.y - Z * St.from.x, Ft.x, Ft.x + Ft.w, Ft.y, Ft.y + Ft.h);
                return zt.length === 2 ? zt[0].x > St.from.x + 1e-3 && zt[1].x < St.to.x - 1e-3 ? [{ from: St.from, to: zt[0] }, { from: zt[1], to: St.to }] : zt[0].x <= St.from.x + 1e-3 && zt[1].x < St.to.x - 1e-3 ? [{ from: zt[1], to: St.to }] : zt[0].x > St.from.x + 1e-3 && zt[1].x >= St.to.x - 1e-3 ? [{ from: St.from, to: zt[0] }] : [] : [St];
              }))([ft])(Pt)
            )))((ft) => (() => {
              const mt = ft.to.x - ft.from.x;
              return ne(2) * (mt >= 0 ? mt : -mt) <= 28;
            })() ? [ft] : [
              { from: ft.from, to: { x: ft.from.x + (ft.to.x - ft.from.x) * 0.495, y: ft.from.y + (ft.to.y - ft.from.y) * 0.495 } },
              { from: { x: ft.from.x + (ft.to.x - ft.from.x) * 0.505, y: ft.from.y + (ft.to.y - ft.from.y) * 0.505 }, to: ft.to }
            ]), _t = Jt.length, yt = (ft) => Tr(0)(Fo(1)(L.t * V(_t) - V(ft)));
            return e.bind(t.pushClip($p(ni(7)(y)))(Os))(() => e.bind(i((ft) => {
              const mt = ft._1, Ft = Dn(1.4)(1.9)(U + (1303 * (mt + 1 | 0) | 0) | 0), St = Dn(0.35)(0.8)(Ft.prng), zt = i((tn) => e.bind(t.pushAlpha(tn.alpha * St.value))(() => e.bind(t.strokePath(wp(yt(mt))(tn.path))({
                color: ct,
                width: Ft.value,
                lineJoin: ie,
                lineCap: _r
              }))(() => r)))(Fi({ ...N_, rMax: 0, offset: 0.5 })(U + (53 * (mt + 1 | 0) | 0) | 0)(!1)([ft._2.from, ft._2.to]));
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
            align: ro,
            baseline: We
          }))(Xt(Vn)(P)))(() => r));
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
}, Fb = (t) => {
  const n = Pb(t), e = Rb(t);
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
        return e(da)(r.plan._1.inkBoost)(r.plan._1.palette)(r.alpha)(0)(r.plan._1.arrival)(r.id)(o)(r.plan._1.animState);
      f();
    }
    return t.Monad0().Applicative0().pure();
  };
}, Ap = (t) => (n) => (e) => {
  const r = (o) => {
    const i = en((s) => o.x >= s._2.x - 1 && o.x <= s._2.x + s._2.w + 1 && o.y >= s._2.y - 1 && o.y <= s._2.y + s._2.h + 1)(le(n.nodes));
    return i.tag === "Just" ? w("Just", i._1._2) : v;
  };
  return oo((o) => {
    const i = no(o._1)(e.edges);
    if (i.tag === "Just") {
      const s = no(o._1)(e.edgeFadeAlpha), u = (() => {
        if (s.tag === "Nothing")
          return 1;
        if (s.tag === "Just")
          return s._1;
        f();
      })(), a = pp({
        id: o._1,
        geometry: op(
          "FlatRoute",
          (() => {
            const c = (() => {
              if (0 < o._2.length) {
                const _ = r(o._2[0]);
                if (_.tag === "Just")
                  return fn(x_(ni(7)(_._1))(fn(o._2)));
              }
              return o._2;
            })(), l = c.length - 1 | 0;
            if (l >= 0 && l < c.length) {
              const _ = r(c[l]);
              if (_.tag === "Just")
                return x_(ni(7)(_._1))(c);
            }
            return c;
          })()
        ),
        visible: rp(i._1),
        arrow: (() => {
          const c = wo("conn:")(o._1);
          if (c.tag === "Just")
            return !1;
          if (c.tag === "Nothing")
            return !0;
          f();
        })(),
        plan: ip("FlatEdgePlan", t)
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
}, Gb = (t) => (n) => (e) => {
  const r = { family: t.fontFamily, size: 11, weight: 500 };
  return oo((o) => {
    if (o._2 === "" || (() => {
      const u = no(o._1)(e.edges);
      return u.tag === "Nothing" || !(u.tag === "Just" && Ux.eq(u._1)(Ld));
    })())
      return j(lt("Return", void 0), dt);
    const i = no(o._1)(n.edges), s = (() => {
      if (i.tag === "Just")
        return Vo(i._1)(0.5);
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
          owner: ci("EdgeText", o._1),
          text: o._2,
          spec: {
            x: u.x,
            y: u.y,
            content: o._2,
            font: r,
            color: t.chipPillText,
            align: ro,
            baseline: We
          },
          bounds: w("Just", { x: u.x - _ / 2, y: u.y - 8.5, w: _, h: 17 }),
          plan: ru(
            "RoundedText",
            { radius: 3, fill: w("Just", { color: t.chipPillFill, flat: !0 }), stroke: v }
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
}, Rp = (t) => {
  const n = (e) => {
    if (e.tag === "Leaf")
      return G;
    if (e.tag === "Node")
      return Zt(
        "Node",
        e._1,
        e._2,
        e._3,
        Hf({ x: t.vx, y: t.vy, w: t.vw, h: t.vh })(e._4),
        n(e._5),
        n(e._6)
      );
    f();
  };
  return n;
}, Ib = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = ei(r);
  return (i) => (s) => (u) => (a) => (c) => (l) => {
    const _ = os(l).length, d = V(_ + 1 | 0), g = ($) => {
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
    })(0), h = m >= _ ? [] : Cr(($) => g($) > 0)(Vt(m, _ - 1 | 0)).init;
    return e.bind((() => {
      const $ = t.drawText({
        x: a,
        y: c,
        content: On(m)(l),
        font: i,
        color: s,
        align: Yi,
        baseline: We
      });
      return m > 0 ? $ : r.pure();
    })())(() => o(($) => e.bind(t.measureText(i)(On($)(l)))((x) => {
      const y = g($);
      return t.drawText({
        x: a + x,
        y: c - (1 - y) * 10,
        content: On(1)(Qi(hr(On($)(l)))(l)),
        font: i,
        color: { ...s, a: dn(Oe(y * V(s.a))) },
        align: Yi,
        baseline: We
      });
    }))(h));
  };
}, Fp = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = ei(r), i = Ib(t);
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
      return e.bind(o((a) => t.fillPath(xp(a)(1.5))(u.trailFill))(u.trail))(() => e.bind((() => {
        const a = r.pure();
        if (s.bounds.tag === "Nothing")
          return a;
        if (s.bounds.tag === "Just")
          return t.drawRoundedRect(s.bounds._1)(u.radius)(w("Just", u.fill))(v);
        f();
      })())(() => i(s.spec.font)(s.spec.color)(u.reveal)(u.textLeft)(s.spec.y)(s.text)));
    }
    if (s.plan.tag === "TokenFillingText") {
      const u = s.plan._1;
      return e.bind(t.drawRoundedRect(u.shadow)(u.radius)(w("Just", u.shadowFill))(v))(() => e.bind((() => {
        const a = r.pure();
        if (s.bounds.tag === "Nothing")
          return a;
        if (s.bounds.tag === "Just")
          return t.drawRoundedRect(s.bounds._1)(u.radius)(w("Just", u.fill))(w("Just", u.stroke));
        f();
      })())(() => e.bind(t.strokePath(u.leader)(u.stroke))(() => t.drawText(s.spec))));
    }
    if (s.plan.tag === "AffineText")
      return t.drawTextAffine(s.plan._1)(s.spec);
    f();
  };
}, Bb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => kp(r)(o)(i)({
  owner: ci("TokenText", t),
  text: e.line,
  spec: {
    x: o.x,
    y: o.y,
    content: e.line,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipPillText,
    align: Yi,
    baseline: We
  },
  bounds: w("Just", r),
  plan: ru(
    "TokenTravelText",
    {
      trail: Cb(r)(s),
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
}), $a = (t) => (n) => (e) => (r) => {
  const o = D((p) => V(Bu(1)(os(p).length)))(r), i = Tr(1)(T(fr)(0)(o)), s = Mi(n)(e)(t), u = s * i, a = Bu(1)(r.length), l = ((p) => (m) => (h) => {
    let $ = p, x = m, y = h, J = !0, N;
    for (; J; ) {
      const C = $, S = x, E = Ht((Q) => v, (Q) => (W) => w("Just", { head: Q, tail: W }), y);
      if (E.tag === "Nothing") {
        J = !1, N = Bu(0)(a - 1 | 0);
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
  })(0)(0)(o), _ = T(fr)(0)(l < 1 ? [] : At(0, l, o)), d = _ / i;
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
}, Gp = (t) => (n) => (e) => (r) => (o) => t.Bind1().bind(n({
  family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif",
  size: 11,
  weight: 500
})($a(r)(0)(0)(D(eo)(o)).line))((i) => {
  const s = i + 28;
  return t.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
}), Db = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = xo.traverse(e);
  return (o) => (i) => (s) => n.Apply0().Functor0().map((u) => Jp(bt((a) => a)(u)))(r((u) => {
    if (u._2.tag === "Filling" && u._2._1.labels.length !== 0) {
      const a = Hn(u._2._1.node)(i.nodes);
      if (a.tag === "Just")
        return n.bind(Gp(t)(o)(a._1)(u._2._1.progress)(u._2._1.labels))((c) => e.pure(w(
          "Just",
          b(u._1, c)
        )));
      if (a.tag === "Nothing")
        return e.pure(v);
      f();
    }
    return e.pure(v);
  })(le(s.tokens)));
}, zb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = vl(e)(r)(o)(i)(s)(u);
  return t.Bind1().bind(n({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })($a(i)(s)(u)(Nt(a)(Of)).line))((l) => t.Applicative0().pure({
    x: c.x + 14 + l / 2 - l / 2 - 14,
    y: c.y - 6 - 8 - 6.6 - 6,
    w: l + 28,
    h: 25.2
  }));
}, Hb = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = xo.traverse(e);
  return (o) => (i) => (s) => n.Apply0().Functor0().map((u) => Jp(bt((a) => a)(u)))(r((u) => {
    if (u._2.tag === "Travelling" && u._2._1.labels.length !== 0) {
      const a = Hn(u._2._1.target)(i.nodes), c = Hn(u._2._1.source)(i.nodes), l = no(u._2._1.edge)(i.edges);
      if (l.tag === "Just" && c.tag === "Just" && a.tag === "Just") {
        const _ = (() => {
          if (u._2._1.direction === "Forward")
            return l._1;
          if (u._2._1.direction === "Backward")
            return fn(l._1);
          f();
        })(), d = vl(_)(c._1)(a._1)(u._2._1.progress)(u._2._1.holdPre)(u._2._1.holdPost);
        return n.bind(zb(t)(o)(_)(c._1)(a._1)(u._2._1.progress)(u._2._1.holdPre)(u._2._1.holdPost)(u._2._1.labels))((g) => e.pure(w(
          "Just",
          b(u._1, { id: u._1, rect: g, token: d })
        )));
      }
    }
    return e.pure(v);
  })(le(s.tokens)));
}, Tl = (t) => {
  const n = t.Bind1(), e = Hb(t), r = Db(t);
  return (o) => (i) => (s) => (u) => n.bind(e(o)(s)(u))((a) => n.bind(r(o)(s)(u))((c) => t.Applicative0().pure(ub({
    x: i.vx,
    y: i.vy,
    w: i.vw,
    h: i.vh
  })([
    ...bt((l) => {
      const _ = Hn(l._1)(u.nodes);
      return _.tag === "Just" && ai(_._1).alpha > 0 ? w("Just", { x: l._2.x, y: l._2.y, w: l._2.w, h: l._2.h }) : v;
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
  ])(bt((l) => Cp(l)(a))((() => {
    const l = (_) => {
      if (_.tag === "Leaf")
        return G;
      if (_.tag === "Node")
        return Zt("Node", _._1, _._2, _._3, void 0, l(_._5), l(_._6));
      f();
    };
    return It(F.compare)(jt(be.foldr, l(a)));
  })())))));
}, Qb = /* @__PURE__ */ Tl(ol), C_ = (t) => (n) => (e) => {
  const r = Es(6)(0.55)(ma(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Es(6)(0.55)(ma(0)(1)(t / 0.06)), u = t < 0.06, a = u && n > 1e-4, c = o && e <= 1e-4;
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
}, ya = (t) => (n) => (e) => (r) => ae({
  path: [],
  role: Se,
  layer: w("Just", OC),
  effects: []
})(oo((o) => {
  if (o._2.tag === "Travelling") {
    if (o._2._1.labels.length !== 0) {
      const i = Hn(o._2._1.target)(n.nodes), s = Hn(o._2._1.source)(n.nodes), u = no(o._2._1.edge)(n.edges), a = Cp(o._1)(r);
      if (a.tag === "Just" && u.tag === "Just" && s.tag === "Just" && i.tag === "Just")
        return Bb(o._1)(t)($a(o._2._1.progress)(o._2._1.holdPre)(o._2._1.holdPost)(Nt(o._2._1.labels)(Of)))(a._1)({
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
      const s = i._1, u = Gp(ol)(dp)(s)(o._2._1.progress)(o._2._1.labels), a = (c) => Sb(o._1)(t)($a(o._2._1.progress)(0)(0)(Nt(o._2._1.labels)(Of)).line)(s)(c)({
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
})(le(e.tokens))), Ip = (t) => (n) => (e) => (r) => {
  const o = Qb(dp)(n)(e)(r);
  return j(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return at("CatCons", (i) => ya(t)(e)(r)(i), ut(Y, Y));
      if (o._2.tag === "CatCons")
        return at(
          "CatCons",
          o._2._1,
          ut(
            o._2._2._1,
            kt(
              "Cons",
              at("CatCons", (i) => ya(t)(e)(r)(i), ut(Y, Y)),
              o._2._2._2
            )
          )
        );
      f();
    })()
  );
}, Ob = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : At(0, i, o), u = s.length - 1 | 0, a = u >= 0 && u < s.length ? w("Just", s[u]) : v, c = o.length - 1 | 0, l = c >= 0 && c < o.length ? w("Just", o[c]) : v;
    if (l.tag === "Just" && a.tag === "Just") {
      const _ = Dn(0.78)(1.18)(Xs(o) + 19 | 0), d = Dn(0.4)(0.62)(_.prng), g = r.wobble ? 8.75 * d.value : 4.375, p = Dn(0.4)(0.62)(d.prng), m = r.wobble ? 8.75 * p.value : 4.375, h = l._1.y - a._1.y, $ = l._1.x - a._1.x, x = ne($ * $ + h * h), y = h / x, J = -y, N = $ / x, C = l._1.x + N * 0.875, S = l._1.y + y * 0.875, P = r.wobble ? 8.75 * _.value : 8.75, E = C - N * P, Q = S - y * P, W = E + J * g, B = Q + N * g, H = [1, C, S, 2, E + J * 4.375, Q + N * 4.375, 2, E - J * 4.375, Q - N * 4.375, 5], rt = E - J * m, ot = Q - N * m, M = { color: r.arrowFill, width: 2, lineJoin: ie, lineCap: _r };
      return x <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, W, B, 2, C, S])(M))(() => t.strokePath([1, rt, ot, 2, C, S])(M)) : t.fillPath(H)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, Wb = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = ei(e), i = t.popAlpha, s = Ob(t);
  return (u) => (a) => (c) => (l) => {
    const _ = O3(8)(c);
    if (l.hi <= l.lo)
      return e.pure();
    const d = V3(_)(l.lo)(l.hi);
    if (d.length === 0)
      return e.pure();
    const g = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: ie, lineCap: _r }, p = u.wobble ? Dn(-10)(4)(Xs(d)).value : 0, m = u.wobble ? db(p)(d) : d;
    return r.bind(u.wobble ? o((h) => r.bind(t.pushAlpha(h.alpha))(() => r.bind(t.strokePath(h.path)(g))(() => i)))((() => {
      const h = Xs(d);
      return m.length < 2 ? [] : Fi(Lb)(h)(!1)(m);
    })()) : t.strokePath(z3(d))(g))(() => {
      const h = s(u)(m);
      return a && l.hi >= 0.999 ? h : e.pure();
    });
  };
}, qb = (t) => {
  const n = Wb(t);
  return (e) => e.geometry.tag === "FlatRoute" && e.plan.tag === "FlatEdgePlan" ? n(e.plan._1)(e.arrow)(e.geometry._1)(e.visible) : t.Monad0().Applicative0().pure();
}, Xb = (t) => (n) => {
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
  }, r = T((i) => (s) => (i * 31 | 0) + br(s) | 0)(5381)(Gr(n.frameTitle)), o = (i) => {
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
  return T((i) => (s) => {
    const u = s._2;
    return wb((a) => {
      if (a.tag === "Nothing")
        return w("Just", u);
      if (a.tag === "Just")
        return w(
          "Just",
          { t: Tr(a._1.t)(u.t), angle: u.t >= a._1.t ? u.angle : a._1.angle, bigCircle: a._1.bigCircle || u.bigCircle, frameHash: a._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(G)(Nt(le(n.tokens))((i) => {
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
              })() ? w("Just", a._2) : v)(le(t.edges));
              if (0 < u.length) {
                const a = u[0].length - 1 | 0, c = a < 1 ? [] : At(0, a, u[0]), l = c.length - 1 | 0;
                if (l >= 0 && l < c.length) {
                  const _ = u[0].length - 1 | 0;
                  return _ >= 0 && _ < u[0].length ? Oo(u[0][_].y - c[l].y)(u[0][_].x - c[l].x) : 0;
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
                const s = no(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, a = u < 1 ? [] : At(0, u, s._1), c = a.length - 1 | 0;
                  if (c >= 0 && c < a.length) {
                    const l = s._1.length - 1 | 0;
                    return l >= 0 && l < s._1.length ? Oo(s._1[l].y - a[c].y)(s._1[l].x - a[c].x) : 0;
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
                const s = no(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? Oo(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, Yb = (t) => T((n) => (e) => (n * 31 | 0) + br(e) | 0)(5381)(Gr(t.frameTitle)), Bp = (t) => (n) => (e) => (r) => (o) => {
  const i = Yb(o), s = Xb(r)(o);
  return oo((u) => {
    const a = Hn(u._1)(o.nodes);
    if (a.tag === "Just")
      return Sp(_p)(t)(n)(e)((() => {
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
        return c.tag === "Just" ? w("Just", c._1) : c.tag === "Nothing" && Tb(u._1)(o.visited) ? w("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: i }) : v;
      })())(u._1)(u._2)(a._1);
    if (a.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    f();
  })(le(r.nodes));
}, Mb = (t) => t, Dp = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Nl = (t) => (n) => t.width <= 0 || t.height <= 0 ? n : Dp(t.width / t.height)(n), Ub = (t) => (n) => (e) => {
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
}, b_ = (t) => (n) => (e) => {
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
}, k_ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Xf = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Kb = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Vb = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Yf = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), jb = /* @__PURE__ */ Fr(ti)(Yt), Zb = (t) => (n) => {
  const e = Te(t.angle), r = fe(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, tk = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], Mf = (t) => (n) => {
  const e = (r) => Ub(0)(255)(dn(Qe(V(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, oe = (t) => (n) => (e) => (r) => ({ x: (n - e) * fe(t.angle), y: (n + e) * Te(t.angle) - r }), Jl = (t) => {
  const n = Ht((e) => v, (e) => (r) => w("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Nt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, nk = (t) => (n) => (e) => {
  const r = e.id, o = e.np, i = ml({
    id: r,
    role: _p,
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
    owner: ci("NodeText", r),
    text: o.label,
    spec: {
      x: o.x + o.w / 2,
      y: 0,
      content: o.label,
      font: { family: n.fontFamily, size: 11, weight: 600 },
      color: n.text,
      align: ro,
      baseline: We
    },
    bounds: v,
    plan: ru("AffineText", Zb(t)(o.y + o.h))
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
}, ek = (t) => (n) => (e) => (r) => (o) => {
  const i = Ln(Vn, o, At(1, o.length, o)), s = i.length - 1 | 0;
  return Xt((u) => (a) => ({
    depth: (a._1.x + a._1.y + a._2.x + a._2.y) / 2,
    draw: pp({
      id: e,
      geometry: op("IsoSegments", [[oe(t)(a._1.x)(a._1.y)(0), oe(t)(a._2.x)(a._2.y)(0)]]),
      visible: { lo: 0, hi: 1 },
      arrow: r && u === s,
      plan: ip("IsoEdgePlan", { config: t, palette: n })
    })
  }))(i);
}, rk = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return fn(o);
    f();
  })();
  if (0 < i.length) {
    const u = Vo(i)(b_(0)(1)(Mi(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = Vo(i)(b_(0)(1)(Mi(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, ok = (t) => {
  const n = Ht((e) => v, (e) => (r) => w("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Nt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, ik = (t) => {
  const n = Ht((e) => v, (e) => (r) => w("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = T((r) => (o) => ({ minX: k_(r.minX)(o.x), minY: k_(r.minY)(o.y), maxX: Xf(r.maxX)(o.x), maxY: Xf(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, sk = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoSlab" && r.plan.tag === "IsoNodePlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(Jl(u))({ color: a, flat: !0 })({
        color: i.nodeStroke,
        width: 1,
        lineJoin: ie,
        lineCap: qe
      });
      return e.bind(s(o.south, Mf(0.66)(i.nodeFill)))(() => e.bind(s(o.east, Mf(0.82)(i.nodeFill)))(() => s(o.top, i.nodeFill)));
    }
    return n.Applicative0().pure();
  };
}, uk = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoCube" && r.plan.tag === "IsoTokenPlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(Jl(u))({ color: Mf(a)(i.tokenOutsideFill), flat: !0 })({
        color: i.tokenOutsideStroke,
        width: 1,
        lineJoin: ie,
        lineCap: qe
      });
      return e.bind(s(o.south, 0.66))(() => e.bind(s(o.east, 0.82))(() => s(o.top, 1)));
    }
    return n.Applicative0().pure();
  };
}, ak = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, ck = (t) => (n) => (e) => {
  const r = e.x - 5.5, o = e.x + 5.5, i = e.y - 5.5, s = e.y + 5.5, u = n + 11, a = oe(t)(o)(i)(u), c = oe(t)(o)(s)(u), l = oe(t)(r)(s)(u), _ = oe(t)(o)(s)(n);
  return { south: [oe(t)(r)(s)(n), _, c, l], east: [oe(t)(o)(i)(n), _, c, a], top: [oe(t)(r)(i)(u), a, c, l] };
}, fk = (t) => (n) => (e) => (r) => {
  const o = r._1, i = (s, u) => ({
    depth: u.x + u.y,
    draw: mp({
      id: o,
      pass: lp,
      geometry: up("IsoCube", ck(t)(s)(u)),
      position: u,
      plan: cp("IsoTokenPlan", { config: t, palette: n, baseZ: s })
    })
  });
  if (r._2.tag === "Travelling") {
    const s = Kb(r._2._1.edge)(e.edges);
    return s.tag === "Just" ? w("Just", i(0, rk(r._2._1.direction)(r._2._1.progress)(r._2._1.holdPre)(r._2._1.holdPost)(s._1))) : v;
  }
  if (r._2.tag === "Filling") {
    const s = Vb(r._2._1.node)(e.nodes);
    if (s.tag === "Just")
      return w("Just", i(t.boxHeight, { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 }));
  }
  return v;
}, lk = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: oe(t)(n.x)(n.y)(0), b: oe(t)(r)(n.y)(0), c: oe(t)(r)(e)(0), d: oe(t)(n.x)(e)(0) },
    top: { a: oe(t)(n.x)(n.y)(t.boxHeight), b: oe(t)(r)(n.y)(t.boxHeight), c: oe(t)(r)(e)(t.boxHeight), d: oe(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, zp = (t) => (n) => D((e) => ({ id: e._1, np: e._2, box: lk(t)(e._2) }))(Yf(n.nodes)), gk = (t) => (n) => [
  ...Nt(zp(t)(n))(tk),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, kt("Cons", r._4, e(r._6, o)));
      f();
    };
    return Nt(jt(Jn.foldr, e(n.edges, Y)))(D((r) => oe(t)(r.x)(r.y)(0)));
  })()
], _k = (t) => (n) => (e) => (r) => {
  const o = wl(n), i = [
    ...Nt(Yf(e.edges))((a) => ek(t)(o)(a._1)((() => {
      const c = wo("conn:")(a._1);
      if (c.tag === "Just")
        return !1;
      if (c.tag === "Nothing")
        return !0;
      f();
    })())(a._2)),
    ...D((a) => ({ depth: a.box.depth, draw: nk(t)(o)(a) }))(zp(t)(e)),
    ...bt(fk(t)(o)(e))(Yf(r.tokens))
  ], s = hp({
    viewport: ik(gk(t)(e)),
    clear: w("Just", t.transparentBg ? o.bgTransparent : o.bg),
    dots: v
  }), u = () => jb((a) => a.draw)(It((a) => (c) => st.compare(a.depth)(c.depth))(i));
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
}, dk = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = Xf(1e-4)(ne(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return Jl([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, hk = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = Fr(e)(Yt);
  return (o) => {
    if (o.geometry.tag === "IsoSegments" && o.plan.tag === "IsoEdgePlan") {
      const i = o.plan._1.palette, s = o.geometry._1;
      return n.Bind1().bind(r((u) => t.strokePath(ok(u))({
        color: i.edge,
        width: 1.5,
        lineJoin: ie,
        lineCap: _r
      }))(s))(() => {
        const u = s.length - 1 | 0;
        if (u >= 0 && u < s.length) {
          const c = s[u], l = c.length - 1 | 0, _ = l < 1 ? [] : At(0, l, c), d = _.length - 1 | 0;
          if (d >= 0 && d < _.length) {
            const p = s.length - 1 | 0, m = (() => {
              if (p >= 0 && p < s.length) {
                const h = s[p], $ = h.length - 1 | 0;
                if ($ >= 0 && $ < h.length)
                  return t.fillPath(dk({ from: _[d], to: h[$] }))({ color: i.arrowFill, flat: !0 });
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
}, Hp = (t, n) => ({ tag: t, _1: n }), xa = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, pk = (t) => (n) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, mk = /* @__PURE__ */ ji(ti)(Yt), $k = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, yk = /* @__PURE__ */ Hp("ResolvedLabels"), xk = (t) => {
  const n = en((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return na(t);
  f();
}, ss = (t) => (n) => {
  const e = xa(1)(hn(n.rootLayout).w), r = To(n.rootLayout)(n.camera), o = !n.diving && n.levels.length === 1 ? 1 : pk(0)(1)(r.w / e), i = na(n).state.frameTitle === "" ? 0 * o : 40 * o, s = t.padding * o * o;
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return Mb;
    if (t.outputAspect.tag === "Just")
      return Dp(t.outputAspect._1);
    f();
  })()({ vx: r.x - s, vy: r.y - s - i, vw: r.w + 2 * s, vh: r.h + 2 * s + i });
}, vk = (t) => (n) => {
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
  const e = Ey(n.segment.placement)({ x: t.vx, y: t.vy, w: t.vw, h: t.vh });
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, S_ = (t) => (n) => t === "" ? j(lt("Return", void 0), dt) : ou({
  owner: A3,
  text: t,
  spec: {
    x: n.vx + 6,
    y: n.vy + 6,
    content: t,
    font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
    color: { r: 180, g: 180, b: 180, a: 255 },
    align: Yi,
    baseline: BC
  },
  bounds: v,
  plan: cc
}), L_ = (t) => (n) => {
  if (t === "")
    return j(lt("Return", void 0), dt);
  const e = n.vh / 720, r = 56 * e, o = tu({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 56, weight: 700 })(t), i = (s) => {
    const u = r + 16 * e * 2, a = s * e + 28 * e * 2, c = n.vy + n.vh / 2, l = n.vx + n.vw / 2, _ = { x: l - a / 2, y: c - u / 2, w: a, h: u };
    return fc(ac(
      "TitleCardOverlay",
      {
        backing: {
          path: Ai(_)(16 * e),
          fill: w("Just", { color: { r: 255, g: 255, b: 255, a: 235 }, flat: !0 }),
          stroke: w(
            "Just",
            { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * e, lineJoin: ie, lineCap: _r }
          )
        },
        text: {
          owner: gp,
          text: t,
          spec: {
            x: l,
            y: c,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 700 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: ro,
            baseline: We
          },
          bounds: w("Just", _),
          plan: cc
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
}, E_ = (t) => (n) => {
  if (t === "")
    return j(lt("Return", void 0), dt);
  const e = n.vh / 720, r = 15 * e, o = tu({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 15, weight: 600 })(t), i = (s) => {
    const u = n.vy + 12 * e, a = r + 6 * e * 2, c = s * e + 11 * e * 2, l = n.vx + n.vw / 2, _ = { x: l - c / 2, y: u, w: c, h: a };
    return fc(ac(
      "FrameTitleOverlay",
      {
        backing: w(
          "Just",
          {
            path: Ai(_)(a / 2),
            fill: w("Just", { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }),
            stroke: w(
              "Just",
              { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * e, lineJoin: ie, lineCap: _r }
            )
          }
        ),
        text: {
          owner: gp,
          text: t,
          spec: {
            x: l,
            y: u + a / 2,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 600 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: ro,
            baseline: We
          },
          bounds: w("Just", _),
          plan: cc
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
}, wk = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = wl(t.theme), c = (() => {
    if (u.tag === "ResolvedLabels")
      return Ip(a)(o)(i)(s);
    if (u.tag === "SpringLabels")
      return ya(a)(i)(s)(Rp(o)(u._1));
    f();
  })(), l = hp({ viewport: o, clear: w("Just", t.transparentBg ? a.bgTransparent : a.bg), dots: v }), _ = () => {
    const d = ae({
      path: [],
      role: Se,
      layer: v,
      effects: [
        ...e < 1 ? [Rn("GroupAlpha", e)] : [],
        ...r > 0 ? [Rn("GroupBlur", r)] : []
      ]
    })((() => {
      const g = Ap(a)(i)(s), p = () => {
        const m = Ep(a)(t.halftoneShadows)(i)(s), h = () => {
          const $ = Bp(pl)(1)(a)(i)(s), x = () => {
            const y = Pp(a)(i)(s), J = () => {
              const N = qf(a)(o)(i)(s), C = () => {
                const S = Lp(MC)(a)(i)(s), P = () => {
                  const E = () => {
                    const Q = Gb(a)(i)(s);
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
}, Uf = (t) => (n) => (e) => (r) => mk(r.minis)((o) => {
  const i = Qp(t)(n)(e)(G)(r)(o);
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
}), Qp = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = i.state, u = { tx: i.segment.placement.tx, ty: i.segment.placement.ty, sx: i.segment.placement.scale, sy: i.segment.placement.scale }, a = wl(t.theme), c = i.segment.layout, l = hn(c), _ = { vx: l.x - 1e3, vy: l.y - 1e3, vw: l.w + 2e3, vh: l.h + 2e3 }, d = i.segment.path.length - 1 | 0, g = d >= 0 && d < i.segment.path.length ? Cl(i.segment.path[d])(o.segment.layout.nodes) : v, p = i.segment.placement.scale * e, m = $k(8)(xa(1)(1 / (1.25 * xa(1e-6)(p)))), h = 11 * p >= 5 ? pl : da, $ = bl(n.viewport)(i), x = (() => {
    if (h === "LabelsHidden")
      return j(lt("Return", void 0), dt);
    if (h === "LabelsShown")
      return r.tag === "Leaf" ? Ip(a)($)(c)(s) : ya(a)(c)(s)(Rp($)(r));
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
          vk(o)((() => {
            const N = i.segment.path.length - 1 | 0;
            return N >= 0 && N < i.segment.path.length ? w("Just", i.segment.path[N]) : v;
          })()),
          Os
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
                Ri,
                { tx: o.segment.placement.tx, ty: o.segment.placement.ty, sx: o.segment.placement.scale, sy: o.segment.placement.scale }
              )
            ]
          })(fc(ac(
            "FloorOverlay",
            {
              path: $l({
                ...g._1,
                x: g._1.x + 1,
                y: g._1.y + 1,
                w: g._1.w - 2,
                h: g._1.h - 2
              }),
              fill: w("Just", { color: a.bg, flat: !0 }),
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
          effects: [Rn("GroupTransform", Ri, u)]
        })((() => {
          const Q = Ap(a)(c)(s), W = () => {
            const B = Ep(a)(t.halftoneShadows)(c)(s), H = () => {
              const rt = Bp(h)(m)(a)(c)(s), ot = () => {
                const M = Pp(a)(c)(s);
                return j(
                  M._1,
                  (() => {
                    if (M._2.tag === "CatNil")
                      return at(
                        "CatCons",
                        () => qf(a)(_)(c)(s),
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
                              () => qf(a)(_)(c)(s),
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
                      kt("Cons", at("CatCons", H, ut(Y, Y)), B._2._2._2)
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
          effects: [Rn("GroupTransform", P3, u)]
        })(Lp(UC)(a)(c)(s));
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
        effects: [Rn("GroupTransform", Ri, u)]
      })(x);
      return j(
        N._1,
        (() => {
          if (N._2.tag === "CatNil")
            return at("CatCons", () => Uf(t)(n)(e)(i), ut(Y, Y));
          if (N._2.tag === "CatCons")
            return at(
              "CatCons",
              N._2._1,
              ut(
                N._2._2._1,
                kt(
                  "Cons",
                  at("CatCons", () => Uf(t)(n)(e)(i), ut(Y, Y)),
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
}, Tk = (t) => (n) => (e) => {
  if (t.theme === "Isometric")
    return _k({ ...ak, transparentBg: t.transparentBg })(t.theme)(na(e).segment.layout)(na(e).state);
  const r = ss(t)(e), o = (a) => e.hasDives ? r.vw / xa(1)(hn(e.rootLayout).w) : 1, i = { tileScale: o(), viewport: r }, s = (a) => (c) => {
    if (c.length === 0)
      return j(lt("Return", void 0), dt);
    const l = Ht((_) => v, (_) => (d) => w("Just", { head: _, tail: d }), c);
    if (l.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    if (l.tag === "Just") {
      const _ = Qp(t)(i)(e.camera.zoom)(l._1.head.role === "Active" ? n : G)(a)(l._1.head);
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
  }, u = Ht((a) => v, (a) => (c) => w("Just", { head: a, tail: c }), e.levels);
  if (u.tag === "Nothing")
    return j(lt("Return", void 0), dt);
  if (u.tag === "Just") {
    const a = u._1.tail, c = u._1.head, l = a.length === 0, _ = wk(t)(o())(c.role === "Active" || c.role === "FlyThrough" ? c.bgAlpha : 0)(c.blur)(r)(c.segment.layout)(xk(e).state)(l && n.tag !== "Leaf" ? Hp("SpringLabels", n) : yk), d = () => {
      const g = Uf(t)(i)(e.camera.zoom)(c);
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
}, Kf = (t) => (n) => (e) => B3({ viewport: ss(t)(e), camera: e.camera })(Tk(t)(n)(e)), Kc = (t) => (n) => {
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
}, Nk = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Fr(n.Applicative0())(Fa), o = Fp(t);
  return (i) => {
    if (i.tag === "FrameTitleOverlay") {
      const s = i._1;
      return e.bind(r(Kc(t))(s.backing))(() => o(s.text));
    }
    if (i.tag === "TitleCardOverlay") {
      const s = i._1;
      return e.bind(Kc(t)(s.backing))(() => o(s.text));
    }
    if (i.tag === "FloorOverlay")
      return Kc(t)(i._1);
    f();
  };
}, Jk = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = Fr(e)(Yt), o = t.popTransform, i = t.popBakedTransform, s = (() => {
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
}, Ck = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = Fr(e)(Yt);
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
}, Op = (t) => {
  const n = t.Monad0(), e = Fb(t), r = sk(t), o = qb(t), i = hk(t), s = Eb(t), u = uk(t);
  return G3(n)({
    beginFrame: (a) => t.setViewport(a.viewport),
    endFrame: n.Applicative0().pure(),
    beginGroup: Ck(t),
    endGroup: Jk(t),
    background: kb(t),
    overlay: Nk(t),
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
    text: Fp(t),
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
}, bk = Tl(ep)(gl.measureText), P_ = /* @__PURE__ */ Op(gl), kk = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
    outputAspect: r.width <= 0 || r.height <= 0 ? v : w("Just", r.width / r.height)
  }, a = tp(e)(r);
  return () => {
    const c = a(), l = o.levels.length - 1 | 0;
    if (l >= 0 && l < o.levels.length) {
      const d = bk(bl(ss(u)(o))(o.levels[l]))(o.levels[l].segment.layout)(o.levels[l].state)(c)(), g = Af(i)(d)(s);
      return P_(Kf(u)(g.applied)(o))(c)(), g.springs;
    }
    const _ = Af(i)(G)(s);
    return P_(Kf(u)(_.applied)(o))(c)(), _.springs;
  };
}, iu = (t) => "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")", Go = (t) => t === 1 ? 7 : t === 2 ? 10 : t === 3 ? 14 : t === 4 ? 13 : t === 5 ? 5 : t === 6 ? 1 : t === 7 ? 4 : t === 8 ? 1 : t === 9 ? 2 : t === 10 ? 1 : t === 11 ? 2 : t === 12 ? 1 : t === 18 ? 2 : t === 19 ? 1 : t === 13 ? 2 : t === 14 ? 1 : t === 15 || t === 16 ? 5 : 1, ln = /* @__PURE__ */ h0(/* @__PURE__ */ _0("Fixed", /* @__PURE__ */ d0(0)(20)(2))), kl = (t) => {
  const n = (e) => {
    const r = e >= 0 && e < t.length ? w("Just", t[e]) : v;
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
  return Ir(" ")(n(0));
}, Sk = (t) => ln(t.vx) + " " + ln(t.vy) + " " + ln(t.vw) + " " + ln(t.vh), He = (t) => (n) => dn(Oe(n >= 0 && n < t.length ? t[n] : 0)), Vc = (t) => (n) => {
  const e = He(t.ops)(n + 1 | 0);
  return At(e, e + He(t.ops)(n + 2 | 0) | 0, t.paths);
}, A_ = /* @__PURE__ */ (() => {
  const t = Ze("&")("&amp;"), n = Ze("<")("&lt;"), e = (() => {
    const r = Ze(">")("&gt;"), o = (() => {
      const i = Ze('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Lk = { vx: 0, vy: 0, vw: 1, vh: 1 }, Ek = (t) => ((e) => {
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
      r = s + Go(t[s]) | 0;
      continue;
    }
    o = !1, i = Lk;
  }
  return i;
})(0), Cs = (t) => (n) => ({ r: He(t)(n), g: He(t)(n + 1 | 0), b: He(t)(n + 2 | 0), a: He(t)(n + 3 | 0) }), R_ = (t) => (n) => ({
  color: Cs(t)(n),
  width: (() => {
    const e = n + 4 | 0;
    return e >= 0 && e < t.length ? t[e] : 0;
  })(),
  join: He(t)(n + 5 | 0),
  cap: He(t)(n + 6 | 0)
}), Pk = (t) => (n) => '<rect x="' + ln(t.vx) + '" y="' + ln(t.vy) + '" width="' + ln(t.vw) + '" height="' + ln(t.vh) + '" fill="' + iu(n) + '" opacity="' + ln(V(n.a) / 255) + '"/>', Ak = (t) => (n) => '<path d="' + kl(t) + '" fill="' + iu(n) + '" fill-opacity="' + ln(V(n.a) / 255) + '"/>', Wp = (t) => ' stroke="' + iu(t.color) + '" stroke-opacity="' + ln(V(t.color.a) / 255) + '" stroke-width="' + ln(t.width) + '" stroke-linejoin="' + (t.join === 0 ? "round" : t.join === 1 ? "bevel" : "miter") + '" stroke-linecap="' + (t.cap === 0 ? "butt" : t.cap === 1 ? "round" : "square") + '"', Rk = (t) => (n) => (e) => '<path d="' + kl(t) + '" fill="' + iu(n) + '" fill-opacity="' + ln(V(n.a) / 255) + '"' + Wp(e) + "/>", Fk = (t) => (n) => '<path d="' + kl(t) + '" fill="none"' + Wp(n) + "/>", Gk = (t) => (n) => {
  const e = Cs(t.ops)(n + 7 | 0), r = He(t.ops)(n + 12 | 0), o = He(t.ops)(n + 11 | 0);
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
    const i = He(t.ops)(n + 4 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] + ", ui-sans-serif, system-ui, sans-serif" : ", ui-sans-serif, system-ui, sans-serif";
  })()) + '" font-weight="' + an(He(t.ops)(n + 6 | 0)) + '" text-anchor="' + (o === 0 ? "start" : o === 1 ? "middle" : "end") + '">' + A_((() => {
    const i = He(t.ops)(n + 3 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] : "";
  })()) + "</text>";
}, Io = (t) => (n) => (e) => {
  const r = e >= 0 && e < n.ops.length ? w("Just", n.ops[e]) : v;
  if (r.tag === "Just")
    return r._1 === 1 ? Ak(Vc(n)(e))(Cs(n.ops)(e + 3 | 0)) + Io(t)(n)(e + Go(r._1) | 0) : r._1 === 2 ? Fk(Vc(n)(e))(R_(n.ops)(e + 3 | 0)) + Io(t)(n)(e + Go(r._1) | 0) : r._1 === 3 ? Rk(Vc(n)(e))(Cs(n.ops)(e + 3 | 0))(R_(n.ops)(e + 7 | 0)) + Io(t)(n)(e + Go(r._1) | 0) : r._1 === 4 ? Gk(n)(e) + Io(t)(n)(e + Go(r._1) | 0) : r._1 === 16 ? Pk(t)(Cs(n.ops)(e + 1 | 0)) + Io(t)(n)(e + Go(r._1) | 0) : Io(t)(n)(e + Go(r._1) | 0);
  if (r.tag === "Nothing")
    return "";
  f();
}, Ik = (t) => {
  const n = Ek(t.ops);
  return { viewBox: Sk(n), body: Io(n)(t)(0), vx: n.vx, vy: n.vy, vw: n.vw, vh: n.vh };
}, Bk = /* @__PURE__ */ wC(CC)(V$), F_ = (t) => (n) => {
  const e = t.strs;
  return () => {
    const r = c0(e);
    return t.strs.push(n), r;
  };
}, ku = (t) => (n) => {
  const e = t.paths;
  return () => {
    const r = c0(e);
    return t.paths.push(...n), { offset: r, len: n.length };
  };
}, Dk = (t) => (n) => {
  const e = n.tx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.ty), t.ops.push(n.sx), t.ops.push(n.sy);
  };
}, G_ = (t) => (n) => {
  const e = n.vx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.vy), t.ops.push(n.vw), t.ops.push(n.vh);
  };
}, Mr = (t) => (n) => {
  const e = V(n), r = t.ops;
  return () => {
    r.push(e);
  };
}, Su = (t) => (n) => {
  const e = n.len, r = Mr(t)(n.offset);
  return () => (r(), Mr(t)(e)());
}, zk = () => {
  const t = [], n = [], e = [], r = [];
  return r.push(1), { ops: t, paths: n, strs: e, alphaStack: r };
}, Hk = (t) => {
  if (t.tag === "MeasureText") {
    const n = t._3(ul(t._1)(t._2));
    return () => n;
  }
  if (t.tag === "MeasureInk") {
    const n = t._3(al(t._1)(t._2));
    return () => n;
  }
  f();
}, qp = (t) => {
  const n = t.alphaStack;
  return () => {
    const e = c0(n);
    if (e === 0)
      return 1;
    const r = Z$(qt, v, e - 1 | 0, t.alphaStack);
    if (r.tag === "Nothing")
      return 1;
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, Bo = (t) => (n) => {
  const e = qp(t);
  return () => {
    const r = e();
    return Mr(t)(n.r)(), Mr(t)(n.g)(), Mr(t)(n.b)(), Mr(t)(dn(Oe(V(n.a) * r + 0.5)))();
  };
}, I_ = (t) => (n) => {
  const e = Bo(t)(n.color);
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
}, Qk = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r;
    if (u.tag === "FillPath") {
      const a = u._3, c = u._2, l = ku(s)(u._1);
      o = !1, i = () => {
        const _ = l();
        return s.ops.push(1), Su(s)(_)(), Bo(s)(c.color)(), a;
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
        return s.ops.push(3), Su(s)(d)(), Bo(s)(a.color)(), I_(s)(l)(), c;
      };
      continue;
    }
    if (u.tag === "DrawText") {
      const a = u._2, c = u._1, l = F_(s)(Zo(c.content));
      o = !1, i = () => {
        const _ = l(), d = F_(s)(c.font.family)();
        return s.ops.push(4), s.ops.push(c.x), s.ops.push(c.y), Mr(s)(_)(), Mr(s)(d)(), s.ops.push(c.font.size), Mr(s)(c.font.weight)(), Bo(s)(c.color)(), s.ops.push((() => {
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
      o = !1, i = () => (l.push(5), Dk(s)(c)(), a);
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
      const a = u._1, c = u._2, l = qp(s);
      o = !1, i = () => {
        const _ = l();
        return s.alphaStack.push(_ * a), s.ops.push(11), s.ops.push(a), c;
      };
      continue;
    }
    if (u.tag === "PopAlpha") {
      const a = u._1, c = s.alphaStack;
      o = !1, i = () => (t2(qt, v, c), s.ops.push(12), a);
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
      o = !1, i = () => (l.push(16), Bo(s)(a)(), c);
      continue;
    }
    if (u.tag === "BackgroundDots") {
      const a = u._2, c = u._1, l = s.ops;
      o = !1, i = () => (l.push(17), G_(s)(c.viewport)(), Bo(s)(c.bgColor)(), Bo(s)(c.dotColor)(), s.ops.push(c.tile), s.ops.push(c.dotRadius), s.ops.push(c.origin.x), s.ops.push(c.origin.y), a);
      continue;
    }
    f();
  }
  return i;
}, Ok = (t) => (n) => n.type === "metrics" ? Hk(n.value) : n.type === "render" ? Qk(t)(n.value) : Yu("Data.Functor.Variant: pattern match failure [" + n.type + "]"), Wk = (t) => {
  const n = zk();
  return Bk(Ok(n))(t)(), { ops: n.ops, paths: n.paths, strs: n.strs };
}, Xp = (t) => t, su = (t) => t, B_ = /* @__PURE__ */ su("Light"), qk = /* @__PURE__ */ su("Dark"), Xk = /* @__PURE__ */ su("Blueprint"), Yk = /* @__PURE__ */ su("Whiteboard"), Mk = /* @__PURE__ */ su("Isometric"), Uk = /* @__PURE__ */ Xp("PaintBackground"), Kk = /* @__PURE__ */ Xp("TransparentBackground"), yo = (t) => "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")", Nr = /* @__PURE__ */ h0(/* @__PURE__ */ _0("Fixed", /* @__PURE__ */ d0(0)(20)(4))), Vk = (t) => "translate(" + Nr(t.tx) + "," + Nr(t.ty) + ") scale(" + Nr(t.sx) + "," + Nr(t.sy) + ")", Dt = /* @__PURE__ */ h0(/* @__PURE__ */ _0("Fixed", /* @__PURE__ */ d0(0)(20)(2))), Sl = (t) => {
  const n = [];
  let e = 0;
  for (; e < t.length; ) {
    const r = e, o = r >= 0 && r < t.length ? w("Just", t[r]) : v;
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
  return Ir(" ")(n);
}, jk = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Vf = /* @__PURE__ */ (() => {
  const t = Ze("&")("&amp;"), n = Ze("<")("&lt;"), e = (() => {
    const r = Ze(">")("&gt;"), o = (() => {
      const i = Ze('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Zk = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + Vf(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + Vf(t.text) + "</tspan>";
  f();
}, Zn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, tS = (t) => (n) => {
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
    const i = r, s = i >= 0 && i < n.length ? w("Just", n[i]) : v;
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
      return tS(r._1)(n);
    f();
  };
}, Yp = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => jk
}, nS = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Yp
}, eS = { pure: (t) => (n) => () => t, Apply0: () => Yp }, Mp = { Applicative0: () => eS, Bind1: () => nS }, rS = (t) => (n) => '<defs><pattern id="' + t + '" x="' + Dt(n.origin.x) + '" y="' + Dt(n.origin.y) + '" width="' + Dt(n.tile) + '" height="' + Dt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + Dt(n.tile) + '" height="' + Dt(n.tile) + '" fill="' + yo(n.bgColor) + '" fill-opacity="' + Dt(V(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + Dt(n.tile / 2) + '" cy="' + Dt(n.tile / 2) + '" r="' + Dt(n.dotRadius) + '" fill="' + yo(n.dotColor) + '"/></pattern></defs><rect x="' + Dt(n.viewport.vx) + '" y="' + Dt(n.viewport.vy) + '" width="' + Dt(n.viewport.vw) + '" height="' + Dt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', D_ = (t) => (n) => '<path d="' + Sl(t) + '" fill="' + yo(n) + '" fill-opacity="' + Dt(V(n.a) / 255) + '"/>', oS = (t) => (n) => (e) => (r) => '<rect x="' + Dt(t.x) + '" y="' + Dt(t.y) + '" width="' + Dt(t.w) + '" height="' + Dt(t.h) + '" rx="' + Dt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + yo(e._1.color) + '" fill-opacity="' + Dt(V(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + yo(r._1.color) + '" stroke-opacity="' + Dt(V(r._1.color.a) / 255) + '" stroke-width="' + Dt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", z_ = (t) => (n) => '<path d="' + Sl(t) + '" fill="none" stroke="' + yo(n.color) + '" stroke-opacity="' + Dt(V(n.color.a) / 255) + '" stroke-width="' + Dt(n.width) + '" stroke-linejoin="' + (() => {
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
  const n = Nh(Zo(t.content));
  return '<text x="' + Dt(t.x) + '" y="' + Dt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + yo(t.color) + '" fill-opacity="' + Dt(V(t.color.a) / 255) + '" font-size="' + Dt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + an(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? Vf(n[0].text) : Ir("")(D(Zk)(n))) + "</text>";
}, iS = (t) => "matrix(" + Nr(t.a) + " " + Nr(t.b) + " " + Nr(t.c) + " " + Nr(t.d) + " " + Nr(t.e) + " " + Nr(t.f) + ")", Up = {
  fillPath: (t) => (n) => (e) => {
    const r = Lu(e)(t);
    return () => {
      const o = r();
      return Zn(D_(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = Lu(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return Zn(z_(o)((() => {
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
      return Zn(D_(i)(n.color) + z_(i)((() => {
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
      return Zn(oS((() => {
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
      })())(e)(r.tag === "Just" ? w(
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
      return Zn(H_((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => Zn((() => {
    const e = 'transform="' + iS(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + H_(n) + "</g>";
  })()),
  pushTransform: (t) => Zn((() => {
    const n = 'transform="' + Vk(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ Zn("</g>"),
  pushBakedTransform: (t) => (n) => {
    const e = n.bake;
    return () => {
      e.value = w("Just", t);
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
      return Zn((() => {
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
  clearBackground: (t) => (n) => Zn('<rect x="' + Dt(n.viewport.vx) + '" y="' + Dt(n.viewport.vy) + '" width="' + Dt(n.viewport.vw) + '" height="' + Dt(n.viewport.vh) + '" fill="' + yo(t) + '" opacity="' + Dt(V(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Zn(rS("bg-dots-" + an(r))(t))(n)();
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
  Monad0: () => Mp
}, sS = /* @__PURE__ */ Op(Up), uS = Tl(Mp)(Up.measureText), aS = (t) => (n) => (e) => (r) => (o) => {
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
  }, s = ss(i)(o);
  return {
    viewBox: Dt(s.vx) + " " + Dt(s.vy) + " " + Dt(s.vw) + " " + Dt(s.vh),
    body: (() => {
      const u = [], a = { value: 0 }, c = { value: 0 }, l = { value: 0 }, _ = { value: v };
      return sS(Kf(i)(n)(o))({ out: u, maskDepth: a, clipCounter: c, patternCounter: l, viewport: s, bake: _ })(), Ir("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, cS = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  }, u = Af(o)((() => {
    const a = [], c = { value: 0 }, l = { value: 0 }, _ = { value: 0 }, d = { value: v }, g = r.levels.length - 1 | 0;
    if (g >= 0 && g < r.levels.length) {
      const p = bl(ss(s)(r))(r.levels[g]);
      return uS(p)(r.levels[g].segment.layout)(r.levels[g].state)({
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
  return { parts: aS(t)(u.applied)(n)(e)(r), springs: u.springs };
}, fS = (t) => (n) => {
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
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, er = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, lS = (t) => (n) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, va = /* @__PURE__ */ Us(ii), gS = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, _S = (t) => (e) => {
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
}, dS = (t) => (e) => {
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
}, Q_ = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), xi = (t) => (n) => (e) => {
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
}, hS = (t) => t, Vp = (t) => (n) => (e) => e < t ? 0 : e > 1 - n ? 1 : (e - t) / se(0.05)(1 - t - n), pS = (t) => (n) => t.labelBasePx * 0.62 * V(T(lS)(0)(D(Bx)(Nt(n)((e) => No(`
`)(e))))), O_ = /* @__PURE__ */ (() => {
  const t = T((n) => (e) => {
    const r = n.previous.tag === "Just" && or(n.previous._1.endT - e.startT) < 1e-4 ? { ...e, fromCam: n.previous._1.toCam } : e;
    return { previous: w("Just", r), spans: Lt(n.spans)(r) };
  })({ previous: v, spans: [] });
  return (n) => t(n).spans;
})(), jc = (t) => (n) => {
  const e = ki(n)(t.keyframes);
  if (e.tag === "Nothing")
    return G;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, jp = (t) => (n) => {
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
      T(fS)(t.initialKeyframe)(t.spans)
    );
  f();
}, mS = (t) => (n) => (e) => (r) => {
  const o = en((i) => va(i.path)(n) && (or(i.endT - e) < 1e-4 || or(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return w("Just", o._1);
  if (o.tag === "Nothing")
    return en((i) => va(i.path)(n))(t.segments);
  f();
}, Zc = (t) => (n) => {
  const e = ki(n)(t.keyframes);
  if (e.tag === "Nothing")
    return G;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, $S = (t) => (n) => (e) => bt((r) => {
  const o = bt((i) => gS(i)(t.nodes))(jt(
    be.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Yn(
          F.compare,
          Xn,
          (() => {
            const i = ki(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return G;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = ki(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return G;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = ki(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return G;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "Hold") {
        const i = ki(r.scene._1)(e);
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
  return o.length === 0 ? v : w(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = T((s) => (u) => ({ minX: er(s.minX)(u.x), minY: er(s.minY)(u.y), maxX: se(s.maxX)(u.x + u.w), maxY: se(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(At(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0
    }
  );
}), yS = (t) => (n) => {
  const e = hn(n), r = Nl({ width: t.widthPx, height: t.heightPx })({
    vx: e.x,
    vy: e.y,
    vw: e.w,
    vh: e.h
  });
  return { w: r.vw, h: r.vh };
}, xS = (t) => (n) => (e) => (r) => {
  const o = se(e.center.x - r.x)(r.x + r.w - e.center.x), i = se(e.center.y - r.y)(r.y + r.h - e.center.y), s = yS(t)(n);
  return er(o <= 0 ? e.zoom : s.w / (o * 2))(i <= 0 ? e.zoom : s.h / (i * 2));
}, Zp = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = rr(u);
    if (a.tag === "Just" && a._1.last.intent === "Overview") {
      e = [a._1.last, ...s], r = a._1.init;
      continue;
    }
    o = !1, i = { prefix: u, overview: s };
  }
  return i;
}, vS = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = Ht((c) => v, (c) => (l) => w("Just", { head: c, tail: l }), u);
    if (a.tag === "Just" && a._1.head.intent === "Overview") {
      e = Lt(s)(a._1.head), r = a._1.tail;
      continue;
    }
    o = !1, i = { overview: s, rest: u };
  }
  return i;
}, Ui = (t) => (n) => (e) => (r) => (o) => {
  const i = { width: n.widthPx, height: n.heightPx }, s = Nl(i)((() => {
    const u = To(e)(o);
    return { vx: u.x, vy: u.y, vw: u.w, vh: u.h };
  })());
  return t.labelBasePx * r.placement.scale * (i.width <= 0 || s.vw <= 0 ? 0 : i.width / s.vw);
}, wS = (t) => (n) => (e) => (r) => (o) => {
  const i = Ui(t)(n)(e)(r)(o);
  return i <= t.minimumReadableLabelPx ? o : { ...o, zoom: o.zoom * t.minimumReadableLabelPx / i };
}, TS = (t) => (n) => (e) => (r) => ({
  ...r,
  fromCam: vg(t)(n)(e)(r.fromCam),
  toCam: vg(t)(n)(e)(r.toCam)
}), NS = (t) => (n) => t.widthPx <= 0 ? 0 : er(n / 4)(6 * n / t.widthPx), JS = (t) => (n) => (e) => (r) => (o) => {
  const i = NS(n)(e), s = r + e / 2 - i;
  return o < r - e / 2 + i ? o - i + e / 2 : o > s ? o + i - e / 2 : r;
}, CS = (t) => (n) => (e) => En(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), bS = (t) => (n) => (e) => En(
  (r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e,
  t
), kS = (t) => (n) => (e) => En(
  (r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e,
  t
), SS = (t) => (n) => (e) => En(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), wa = (t) => (n) => (e) => En((r) => e(r) && n >= r.startT && n < r.endT, t), tf = (t) => (n) => (e) => {
  if (n.length === 0)
    return e;
  const r = er(160)(pS(t)(n) + 31), o = er(40)(t.labelBasePx * 1.2 + 23);
  return { x: e.x - r, y: e.y - o, w: e.w + r * 2, h: e.h + o * 2 };
}, LS = (t) => (n) => (e) => {
  const r = t.padding * 0.75, o = V(8);
  return Ba((i) => {
    if (i.target.tag === "NodeWindow")
      return [];
    if (i.target.tag === "EdgeWindow")
      return [];
    if (i.target.tag === "TokenWindow") {
      const s = Kp(i.target._2)(n.edges);
      if (s.tag === "Just") {
        const u = (() => {
          if (i.target._3 === "Forward")
            return s._1;
          if (i.target._3 === "Backward")
            return fn(s._1);
          f();
        })();
        return Nt(Vt(0, 7))((a) => {
          const c = i.startT + (i.endT - i.startT) * (V(a) / o), l = (() => {
            const _ = i.startT + (i.endT - i.startT) * (V(a + 1 | 0) / o);
            return {
              startT: c,
              endT: _,
              box: (() => {
                const d = Vo(u)(Vp(i.target._7)(i.target._8)(((c + _) / 2 - i.startT) / se(1e-4)(i.endT - i.startT)));
                if (d.tag === "Just")
                  return { x: d._1.x - r, y: d._1.y - r, w: 0 + r * 2, h: 0 + r * 2 };
                if (d.tag === "Nothing")
                  return { x: 0, y: 0, w: 0, h: 0 };
                f();
              })()
            };
          })();
          return [{ startT: l.startT, endT: l.endT, bbox: tf(t)(i.target._6)(l.box), priority: 1 }];
        });
      }
      if (s.tag === "Nothing")
        return [
          {
            startT: i.startT,
            endT: i.endT,
            bbox: tf(t)(i.target._6)($d(n)(e)(i.target._2)),
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
          bbox: tf(t)(i.target._3)(Q0(n)(e)(Zt(
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
}, ES = (t) => (n) => (e) => (r) => (o) => [
  ...$S(o.layout)(e)(n)(ht((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...LS(t)(o.layout)(e)(o.windows)
], PS = (t) => (n) => (e) => (r) => (o) => (i) => Jx(t)(n)(i.layout)(o.endT)(ES(t)(e)(r)(o)(i)), AS = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (o.tag === "Nothing")
    return i.zoom;
  if (o.tag === "Just")
    return se(0)(xS(n)(e)(i)((() => {
      const s = t.padding * r.placement.scale;
      return { x: o._1.x - s, y: o._1.y - s, w: o._1.w + s * 2, h: o._1.h + s * 2 };
    })()));
  f();
}, RS = (t) => (n) => {
  const e = jp(t)(n);
  if (e.tag === "AtKeyframe")
    return jc(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(F.compare, Xn, jc(t)(e._1), jc(t)(e._2));
  f();
}, FS = (t) => (n) => (e) => wa(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e && r.target._2 === "PlopOut") ? !0 : bS(t.windows)(n)(e) ? !1 : wa(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e) ? !0 : kS(t.windows)(n)(e) ? !1 : _S(e)(RS(t)(n)), GS = (t) => (n) => {
  const e = jp(t)(n);
  if (e.tag === "AtKeyframe")
    return Zc(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(F.compare, Xn, Zc(t)(e._1), Zc(t)(e._2));
  f();
}, IS = (t) => (n) => (e) => wa(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e) ? !0 : CS(t.windows)(n)(e) ? !1 : wa(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._1 === e) ? !0 : SS(t.windows)(n)(e) ? !1 : dS(e)(GS(t)(n)), BS = (t) => (n) => {
  const e = [
    ...bt((r) => FS(t)(n)(r._1) ? w("Just", { x: r._2.x, y: r._2.y, w: r._2.w, h: r._2.h }) : v)(Q_(t.layout.nodes)),
    ...bt((r) => IS(t)(n)(r._1) ? w("Just", Ma(r._2)) : v)(Q_(t.layout.edges))
  ];
  return e.length === 0 ? v : w("Just", jr(e));
}, DS = (t) => (n) => (e) => {
  const r = To(t)(e);
  return n.x >= r.x && n.x + n.w <= r.x + r.w;
}, tm = (t) => (n) => (e) => {
  const r = t.x + t.w / 2, o = e >= t.w ? { lo: r, hi: r } : { lo: t.x + e / 2, hi: t.x + t.w - e / 2 };
  if (e >= n.w) {
    const a = se(o.lo)(n.x + n.w - e / 2), c = er(o.hi)(n.x + e / 2);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const i = n.x + n.w / 2;
  if (e >= n.w) {
    const a = se(o.lo)(i), c = er(o.hi)(i);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const s = se(o.lo)(n.x + e / 2), u = er(o.hi)(n.x + n.w - e / 2);
  return s <= u ? { lo: s, hi: u } : o;
}, zS = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? v : w("Just", { ...e, startT: se(t)(e.startT), endT: er(n)(e.endT) }), nm = (t) => (n) => (e) => (r) => (o) => (i) => bt(zS(i.startT)(i.endT))(D(TS(e)(i.layout)(i.placement))(PS(t)(n)(r)(i.edgeEndpoints)(o)(i))), em = (t) => (n) => (e) => (r) => {
  const o = hn(t), i = er(r.zoom)(o.w / se(1e-4)(n.w));
  return {
    ...r,
    center: {
      ...r.center,
      x: (() => {
        const s = tm(o)(n)(o.w / se(1e-4)(i));
        return xi(s.lo)(s.hi)(e.center.x);
      })()
    },
    zoom: i
  };
}, HS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = hn(e), c = (() => {
    if (o.tag === "Nothing")
      return s.center.x;
    if (o.tag === "Just")
      return JS()(n)(u)(i.center.x)(o._1.x + o._1.w / 2);
    f();
  })();
  if (r.tag === "Nothing") {
    const l = a.x + a.w / 2;
    return u >= a.w ? xi(l)(l)(c) : xi(a.x + u / 2)(a.x + a.w - u / 2)(c);
  }
  if (r.tag === "Just") {
    if (u < r._1.w) {
      const _ = a.x + a.w / 2;
      return u >= a.w ? xi(_)(_)(c) : xi(a.x + u / 2)(a.x + a.w - u / 2)(c);
    }
    const l = tm(a)(r._1)(u);
    return xi(l.lo)(l.hi)(c);
  }
  f();
}, QS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = To(e)(s);
  return u.w <= 0 ? s : { ...s, center: { ...s.center, x: HS()(n)(e)(r)(o)(i)(s)(u.w) } };
}, rm = (t) => (n) => (e) => (r) => By(t)(n)(e)(r.layout)(r.placement)((() => {
  if (r.layout.nodes.tag === "Leaf")
    return 0;
  if (r.layout.nodes.tag === "Node")
    return r.layout.nodes._2;
  f();
})()).camera, om = (t) => (n) => (e) => (r) => (o) => {
  const i = To(e)(o);
  return (() => {
    const s = hn(r.layout), u = s.x * r.placement.scale + r.placement.tx, a = s.y * r.placement.scale + r.placement.ty;
    return u >= i.x && a >= i.y && u + s.w * r.placement.scale <= i.x + i.w && a + s.h * r.placement.scale <= i.y + i.h;
  })() && Ui(t)(n)(e)(r)(o) >= t.minimumReadableLabelPx;
}, nf = (t) => (n) => (e) => (r) => (o) => (i) => om(t)(n)(e)(r)(o) ? o : wS(t)(n)(e)(r)(i), OS = (t) => (n) => (e) => {
  const r = vS([])(e), o = Ht((s) => v, (s) => (u) => w("Just", { head: s, tail: u }), r.rest), i = r.overview.length - 1 | 0;
  return i >= 0 && i < r.overview.length && 0 < r.overview.length && o.tag === "Just" && or(r.overview[0].startT - n.startT) < 1e-4 && o._1.head.intent === "ActionFocus" ? [
    {
      startT: r.overview[0].startT,
      endT: r.overview[i].endT,
      fromCam: t,
      toCam: t,
      easing: r.overview[0].easing,
      interp: $o,
      intent: vd
    },
    { ...o._1.head, fromCam: t },
    ...o._1.tail
  ] : e;
}, WS = (t) => (n) => {
  const e = Ht((r) => v, (r) => (o) => w("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ ...e._1.head, fromCam: t }, ...e._1.tail];
  f();
}, qS = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = hn(r.layout), u = {
    x: s.x * r.placement.scale + r.placement.tx,
    y: s.y * r.placement.scale + r.placement.ty,
    w: s.w * r.placement.scale,
    h: s.h * r.placement.scale
  }, a = em(e)(u)(o)(i);
  return u.w / se(1e-4)(u.h) >= 0.33 && i.zoom / se(1e-4)(a.zoom) <= 1.25 && To(e)(a).w >= u.w - 1e-3 && Ui(t)(n)(e)(r)(a) >= t.minimumReadableLabelPx * 0.85 ? a : i;
}, XS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = hn(r.layout), a = u.w * r.placement.scale, c = a / se(1e-4)(u.h * r.placement.scale);
  if (o.tag === "Nothing")
    return s;
  if (o.tag === "Just") {
    if (DS(e)(o._1)(s))
      return s;
    const l = em(e)(o._1)(i)(s);
    return s.zoom / se(1e-4)(l.zoom) <= 1.25 && (Ui(t)(n)(e)(r)(l) >= t.minimumReadableLabelPx - 1e-3 || o._1.w >= a - 1e-3 && c >= 0.33 && Ui(t)(n)(e)(r)(l) >= t.minimumReadableLabelPx * 0.85) ? l : s;
  }
  f();
}, YS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = {
    ...s,
    center: (() => {
      if (i.tag === "Nothing")
        return s.center;
      if (i.tag === "Just")
        return { x: i._1.x + i._1.w / 2, y: i._1.y + i._1.h / 2 };
      f();
    })()
  }, a = Ui(t)(n)(e)(r)(u);
  return QS()(n)(e)(o)(i)(s)(XS(t)(n)(e)(r)(o)(s)(qS(t)(n)(e)(r)(s)(a <= 0 ? u : { ...u, zoom: er(u.zoom * t.minimumReadableLabelPx / a)(AS(t)(n)(e)(r)(i)(u)) })));
}, ef = (t) => (n) => (e) => (r) => (o) => (i) => (s) => om(t)(n)(e)(r)(s) ? s : YS(t)(n)(e)(r)(o)(i)(s), W_ = (t) => {
  const n = (r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, l = s, _ = Ht((d) => v, (d) => (g) => w("Just", { head: d, tail: g }), l);
      if (_.tag === "Just" && _._1.head.intent === "Overview") {
        i = Lt(c)(_._1.head), s = _._1.tail;
        continue;
      }
      u = !1, a = { overview: c, rest: l };
    }
    return a;
  };
  return ((r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, _ = Ht((d) => v, (d) => (g) => w("Just", { head: d, tail: g }), s);
      if (_.tag === "Nothing") {
        u = !1, a = c;
        continue;
      }
      if (_.tag === "Just") {
        if (_._1.head.intent === "Overview") {
          const d = n([_._1.head])(_._1.tail), g = Ht((h) => v, (h) => ($) => w("Just", { head: h, tail: $ }), d.rest), p = c.length - 1 | 0, m = p >= 0 && p < c.length ? w("Just", c[p]) : v;
          if (m.tag === "Just" && g.tag === "Just" && m._1.intent === "ActionFocus" && (() => {
            const h = d.overview.length - 1 | 0;
            return g._1.head.intent === "ActionFocus" && (h >= 0 && h < d.overview.length && 0 < d.overview.length ? d.overview[h].endT - d.overview[0].startT <= 1.0001 : !0);
          })() && 0 < d.overview.length) {
            const h = d.overview.length - 1 | 0;
            if (h >= 0 && h < d.overview.length) {
              i = Lt(c)({
                startT: d.overview[0].startT,
                endT: d.overview[h].endT,
                fromCam: m._1.toCam,
                toCam: m._1.toCam,
                easing: d.overview[0].easing,
                interp: $o,
                intent: Ka
              }), s = [{ ...g._1.head, fromCam: m._1.toCam }, ...g._1.tail];
              continue;
            }
          }
          i = [...c, ...d.overview], s = d.rest;
          continue;
        }
        i = Lt(c)(_._1.head), s = _._1.tail;
        continue;
      }
      f();
    }
    return a;
  })([])(t);
}, MS = (t) => (n) => (e) => {
  const r = Zp([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && r.prefix[i].intent === "ActionFocus" && or(r.overview[o].endT - n.endT) < 1e-4)
        return [
          ...r.prefix,
          {
            startT: r.overview[0].startT,
            endT: r.overview[o].endT,
            fromCam: r.prefix[i].toCam,
            toCam: r.prefix[i].toCam,
            easing: r.overview[0].easing,
            interp: $o,
            intent: Ka
          }
        ];
    }
    return e;
  }
  return 0 < r.overview.length && r.prefix.length - 1 | 0, e;
}, q_ = (t) => (n) => (e) => {
  const r = Zp([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && (() => {
        const s = r.overview[o].endT;
        return r.prefix[i].intent === "ActionFocus" && (() => {
          const u = r.overview.length - 1 | 0;
          return En((a) => a.direction === "DiveIn" && va(a.parentPath)(t.path) && or(a.startT - s) < 1e-4, n) && (u >= 0 && u < r.overview.length && 0 < r.overview.length ? r.overview[u].endT - r.overview[0].startT <= 1.0001 : !0);
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
            interp: $o,
            intent: Ka
          }
        ];
    }
    return e;
  }
  return e;
}, US = (t) => (n) => {
  const e = n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y ? (n.startT + n.endT) / 2 : n.endT + 1e-4, r = bt((o) => o.target.tag === "TokenWindow" ? w(
    "Just",
    (() => {
      const i = Kp(o.target._2)(t.layout.edges), s = Vp(o.target._7)(o.target._8)((e - o.startT) / se(1e-4)(o.endT - o.startT)), u = (() => {
        if (i.tag === "Just")
          return Vo((() => {
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
        return $d(t.layout)(t.edgeEndpoints)(o.target._2);
      f();
    })()
  ) : o.target.tag === "FillWindow" ? w(
    "Just",
    Q0(t.layout)(t.edgeEndpoints)(Zt(
      "Node",
      1,
      1,
      o.target._2,
      void 0,
      G,
      G
    ))
  ) : v)(ht((o) => o.startT <= e && e < o.endT, t.windows));
  return r.length === 0 ? v : w(
    "Just",
    (() => {
      const o = jr(r);
      return { x: o.x * t.placement.scale + t.placement.tx, y: o.y * t.placement.scale + t.placement.ty, w: o.w * t.placement.scale, h: o.h * t.placement.scale };
    })()
  );
}, KS = (t) => (n) => {
  const e = BS(t)(n.endT + 1e-4);
  return e.tag === "Just" ? w(
    "Just",
    { x: e._1.x * t.placement.scale + t.placement.tx, y: e._1.y * t.placement.scale + t.placement.ty, w: e._1.w * t.placement.scale, h: e._1.h * t.placement.scale }
  ) : v;
}, im = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o(i.fromCam), u = o(i.toCam), a = US(r)(i), c = KS(r)(i);
  return s.zoom === u.zoom && s.center.x === u.center.x && s.center.y === u.center.y ? {
    ...i,
    fromCam: ef(t)(n)(e)(r)(c)(a)(s),
    toCam: ef(t)(n)(e)(r)(c)(a)(u)
  } : { ...i, fromCam: s, toCam: ef(t)(n)(e)(r)(c)(a)(u) };
}, sm = (t) => (n) => (e) => (r) => (o) => (i) => i.intent === "ActionFocus" ? im(t)(n)(e)(r)(nf(t)(n)(e)(r)(o))(i) : {
  ...i,
  fromCam: nf(t)(n)(e)(r)(o)(i.fromCam),
  toCam: nf(t)(n)(e)(r)(o)(i.toCam)
}, um = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = en((u) => u.intent === "ActionFocus" && u.startT >= r.startT - 1e-4)(i);
  if (s.tag === "Just") {
    const u = sm(t)(n)(e)(r)(o)(s._1).toCam;
    return { ...o, center: u.center, zoom: u.zoom < o.zoom ? u.zoom : o.zoom };
  }
  if (s.tag === "Nothing")
    return o;
  f();
}, VS = (t) => (n) => (e) => (r) => (o) => um(t)(n)(e)(r)(rm(t)(n)(e)(r))(o), jS = (t) => (n) => (e) => (r) => (o) => o.intent === "ActionFocus" ? im(t)(n)(e)(r)(hS)(o) : o, Ta = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = nm(t)(n)(e)(r)(o)(i);
  if (i.placement.scale === 1 && i.placement.tx === 0 && i.placement.ty === 0)
    return q_(i)(o.dives)(W_(O_(D(jS(t)(n)(e)(i))(s))));
  const u = rm(t)(n)(e)(i), a = um(t)(n)(e)(i)(u)(s);
  return s.length === 0 ? [
    {
      startT: i.startT,
      endT: i.endT,
      fromCam: a,
      toCam: a,
      easing: W0,
      interp: $o,
      intent: vd
    }
  ] : MS()(i)(OS(a)(i)(q_(i)(o.dives)(W_(O_(WS(a)(D(sm(t)(n)(e)(i)(u))(s)))))));
}, ZS = (t) => (n) => (e) => (r) => (o) => It((i) => (s) => st.compare(i.startT)(s.startT))(Nt(o.segments)(Ta(t)(n)(e)(r)(o))), t5 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  if (i.direction === "DiveIn")
    return Wi(t)(e)(Ta(t)(n)(e)(r)(o)(s))(i.startT - 1e-4).camera;
  if (i.direction === "DiveOut")
    return Wi(t)(e)(Ta(t)(n)(e)(r)(o)(s))(i.endT + 1e-4).camera;
  f();
}, n5 = (t) => (n) => (e) => (r) => (o) => bt((i) => {
  const s = mS(o)(i.parentPath)(i.startT)(i.endT);
  if (s.tag === "Just") {
    const u = i.childPath, a = en((c) => va(c.path)(u))(o.segments);
    if (a.tag === "Just") {
      const c = Ta(t)(n)(e)(r)(o)(a._1), l = VS(t)(n)(e)(a._1)(nm(t)(n)(e)(r)(o)(a._1)), _ = t5(t)(n)(e)(r)(o)(i)(s._1), d = (() => {
        if (i.direction === "DiveIn")
          return l;
        if (i.direction === "DiveOut")
          return Wi(t)(e)(c)(i.startT - 1e-4).camera;
        f();
      })();
      if (i.direction === "DiveIn")
        return w(
          "Just",
          {
            startT: i.startT,
            endT: i.endT,
            fromCam: _,
            toCam: d,
            easing: jo,
            interp: yg,
            intent: xg
          }
        );
      if (i.direction === "DiveOut")
        return w(
          "Just",
          {
            startT: i.startT,
            endT: i.endT,
            fromCam: d,
            toCam: _,
            easing: jo,
            interp: yg,
            intent: xg
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
})(o.dives), am = (t) => (n) => (e) => (r) => (o) => [
  ...n5(t)(n)(e)(r)(o),
  ...ZS(t)(n)(e)(r)(o)
], fo = (t, n) => ({ tag: t, _1: n }), gc = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Rr = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cm = /* @__PURE__ */ pn(F)(Yt), X_ = (t) => (e) => {
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
}, fm = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
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
        o = !1, i = w("Just", s._4);
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, hi = /* @__PURE__ */ (() => {
  const t = he.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return w("Just", b(n._1, n._2));
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
})(), e5 = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), jf = (t) => (e) => {
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
}, r5 = (t) => (n) => {
  const e = it.compare(t)(n);
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
}, o5 = /* @__PURE__ */ fo("NoKeyframes"), i5 = (t) => fo("DuplicateEventId", t), s5 = (t) => fo("UnknownEvent", t), gm = (t) => (n) => ({
  ...n,
  cameraSpans: am(n.cameraConfig)(t)(n.layout)(n.keyframes)({
    endT: n.totalDuration,
    spans: n.spans,
    windows: n.windows,
    segments: n.segments,
    dives: n.dives
  })
}), u5 = (t) => (n) => (e) => (r) => {
  const o = gc(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return Ya(o._1);
    f();
  })(), s = Rr(t.minTokenDuration)(Rr(V(T((u) => (a) => u + os(a).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, a5 = /* @__PURE__ */ Ba((t) => {
  const n = No(`
`)(t);
  return n.length === 0 ? [""] : n;
}), c5 = (t) => (n) => cm(bt((e) => {
  if (e.kind.tag === "SendToken")
    return w(
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
})(n)), f5 = (t) => {
  if (t.event.kind.tag === "SendToken")
    return w(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: Ti(
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
    return w(
      "Just",
      { startT: t.startT, endT: t.endT, target: Ti("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) }
    );
  f();
}, l5 = (t) => bt((() => {
  const n = t.path;
  return (e) => e.target.tag === "TokenWindow" ? w(
    "Just",
    { path: n, eventId: e.target._1, window: e, from: e.target._4, to: e.target._5, labels: e.target._6, holdPre: e.target._7, holdPost: e.target._8 }
  ) : v;
})())(t.windows), g5 = (t) => (n) => (e) => {
  const r = gc(e)(t);
  if (r.tag === "Nothing")
    return Tg;
  if (r.tag === "Just") {
    const o = X_(r._1.target)(n);
    return X_(r._1.source)(n) ? o ? Yx : Xx : Tg;
  }
  f();
}, _m = /* @__PURE__ */ D(eo), _5 = { pre: 0, post: 0 }, d5 = (t) => (n) => (e) => (r) => (o) => {
  const i = fm(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return _5;
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
      return u5(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return Lt(r)({ startT: u, endT: u + a.duration, event: o.event, holdPre: a.holdPre, holdPost: a.holdPost });
}, dm = (t) => (n) => (e) => T(d5(t)(n)(c5(t)(e)))([])(Xt((r) => (o) => ({ event: o }))(e)), h5 = (t) => (n) => {
  const e = lm(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, M_ = (t) => (n) => (e) => {
  if (n.tag === "Just" && n._1 > e.endT + 1e-4) {
    const r = Rr(0)(e.endT - e.startT), o = Rr(t.startT)(n._1 - r);
    return { ...e, startT: o, endT: o + r };
  }
  return e;
}, p5 = (t) => (n) => {
  const e = It(st.compare)(bt((r) => r.target.tag === "TokenWindow" ? r.target._5 === n ? w("Just", r.startT) : v : r.target.tag === "FillWindow" && r.target._2 === n ? w("Just", r.startT) : v)(t));
  return 0 < e.length ? w("Just", e[0]) : v;
}, m5 = (t) => (n) => {
  const e = It(st.compare)(bt((r) => r.target.tag === "TokenWindow" && r.target._2 === n ? w("Just", r.startT) : v)(t));
  return 0 < e.length ? w("Just", e[0]) : v;
}, $5 = (t) => (n) => n.target.tag === "NodeWindow" ? n.target._2 === "PlopIn" ? M_(t)(p5(t.windows)(n.target._1))(n) : n : n.target.tag === "EdgeWindow" && n.target._2.tag === "Extend" ? M_(t)(m5(t.windows)(n.target._1))(n) : n, y5 = (t) => ({ ...t, windows: It((n) => (e) => st.compare(n.startT)(e.startT))(D($5(t))(t.windows)) }), x5 = (t) => {
  const n = D(y5)(t.segments);
  return { ...t, segments: n, windows: It((e) => (r) => st.compare(e.startT)(r.startT))(Nt(n)((e) => e.windows)) };
}, v5 = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, U_ = { id: "", nodes: G, edges: G, kind: js }, w5 = (t) => (n) => qy((() => {
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
})()), T5 = (t) => (n) => {
  const e = lm(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: G };
  if (e.tag === "Just")
    return e._1;
  f();
}, hm = { id: "", index: -1, kind: "", name: "", time: 0, endTime: 0, path: [], tokenIndex: -1, lineIndex: -1, text: "", from: "", to: "" }, N5 = (t) => (n) => n.scene.tag === "StepScene" ? w(
  "Just",
  { ...hm, id: "step:" + n.scene._1, kind: "step", name: n.scene._1, time: n.startT, endTime: n.startT, path: _m(t) }
) : v, J5 = (t) => bt(N5(t.path))(t.spans), rf = (t) => (n) => (e) => (r) => {
  const o = gc(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Rr(n)(Ya(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, pm = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = w5(e)(o), u = D((g) => ({
    startT: 0,
    endT: 0 + rf(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Ti(
      "EdgeWindow",
      g,
      Vu("Extend", wf)
    )
  }))(hi(s.entering.edges)), a = D((g) => ({ startT: 0, endT: i, target: Ti("NodeWindow", g, vf) }))(hi(s.entering.nodes)), c = T(Rr)(0)(D((g) => rf(t.edgeSpeed)(t.minEdgeDuration)(n)(g))(hi(s.leaving.edges))), l = (g) => En(
    (p) => {
      const m = gc(p)(r);
      if (m.tag === "Just")
        return m._1.source === g || m._1.target === g;
      if (m.tag === "Nothing")
        return !1;
      f();
    },
    hi(s.leaving.edges)
  ) ? c : 0, _ = D((g) => ({
    startT: l(g),
    endT: l(g) + t.plop,
    target: Ti("NodeWindow", g, Qx)
  }))(hi(s.leaving.nodes)), d = D((g) => ({
    startT: 0,
    endT: rf(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Ti(
      "EdgeWindow",
      g,
      Vu("Retract", g5(r)(s.leaving.nodes)(g))
    )
  }))(hi(s.leaving.edges));
  return {
    duration: (() => {
      const g = It(st.compare)([
        ...D((m) => m.endT)(d),
        ...D((m) => m.endT)(_),
        ...D((m) => m.endT)(a),
        ...D((m) => m.endT)(u)
      ]), p = g.length - 1 | 0;
      return p >= 0 && p < g.length ? g[p] + t.gap : t.gap;
    })(),
    windows: [...d, ..._, ...a, ...u]
  };
}, C5 = (t) => (n) => (e) => (r) => (o) => (i) => D((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(pm(t)(n)(e)(r)(i).windows), b5 = (t) => bt((n) => jt(Gi, n).length > 1 ? w(
  "Just",
  (() => {
    const e = Ht(
      (r) => v,
      (r) => (o) => w("Just", { head: r, tail: o }),
      jt(Gi, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : v)(v2(ii)(It(F.compare)(t))), k5 = (t) => {
  const n = D((r) => r.id)(t), e = e5(n);
  return [
    ...D(i5)(b5(n)),
    ...D(s5)(ht((r) => !jf(r)(e), Nt(t)(v5)))
  ];
}, S5 = (t) => {
  const n = cm(D((r) => b(
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
    if (jf(i)(o))
      return [fo("ScheduleCycle", [...jt(be.foldr, o), i])];
    if (jf(i)(r))
      return [];
    const s = fm(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return Nt(s._1)(e(tt(F)(i)()(r))(tt(F)(i)()(o)));
    f();
  };
  return Nt(t)((r) => e(G)(G)(r.id));
}, Ll = {
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
  nodeEasing: nx,
  edgeEasing: jo,
  tokenEasing: W0,
  diveDur: 1.2,
  retreatDur: 1.2
}, L5 = (t) => (n) => (e) => (r) => D((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(bt(f5)(dm(t)(n)(r.events))), E5 = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return C5(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return L5(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  if (o.scene.tag === "StepScene")
    return [];
  f();
}, P5 = (t) => (n) => (e) => {
  const r = dm(t)(n)(e.events);
  return r.length === 0 ? t.gap : T(Rr)(0)(D((o) => o.endT)(r)) + t.gap;
}, A5 = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return pm(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return P5(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode" || o.tag === "StepScene")
    return 0;
  f();
}, mm = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Ay(n)(r), u = e.layout, a = pd(D((m) => b(m.id, m))(o.keyframes)), c = 0 < o.keyframes.length ? w("Just", o.keyframes[0]) : v, l = (() => {
    if (c.tag === "Just")
      return c._1.id;
    if (c.tag === "Nothing")
      return "";
    f();
  })(), _ = Zy(o), d = (m) => ({
    segments: m.runSpans.length === 0 ? m.segments : Lt(m.segments)({
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
  }), g = T((m) => (h) => {
    if (h.tag === "EnterNode") {
      const J = d(m), N = m.t + t.diveDur, C = Lt(r)(h._1), S = mm(t)(n)(T5(e)(h._1))(C)(h5(o)(h._1))(N), P = S.endT + t.retreatDur;
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
          { startT: m.t, endT: N, node: h._1, parentPath: r, childPath: C, direction: Ox },
          ...S.dives,
          { startT: S.endT, endT: P, node: h._1, parentPath: r, childPath: C, direction: Wx }
        ]
      };
    }
    if (h.tag === "ExitNode")
      return m;
    const $ = m.t + A5(t)(u)(a)(_)(h), x = { startT: m.t, endT: $, scene: h }, y = E5(t)(u)(a)(_)(x);
    return {
      ...m,
      t: $,
      runSpans: Lt(m.runSpans)(x),
      runWindows: [...m.runWindows, ...y],
      spans: Lt(m.spans)(x),
      windows: [...m.windows, ...y]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), p = d(g);
  return {
    endT: g.t,
    spans: p.spans,
    windows: It((m) => (h) => st.compare(m.startT)(h.startT))(p.windows),
    segments: p.segments,
    dives: p.dives
  };
}, R5 = (t) => (n) => {
  const e = st.compare(t.time)(n.time);
  return e === "EQ" ? F.compare(t.id)(n.id) : e;
}, F5 = (t) => (n) => (e) => {
  const r = Rr(0.05)(1 - t - n), o = (a) => {
    if (a <= 0)
      return 0;
    if (a >= 1)
      return 1;
    const c = t + a * r;
    return c < 0 ? 0 : c > 1 ? 1 : c;
  }, i = a5(e), s = D((a) => V(r5(1)(os(a).length)))(i), u = Rr(1)(T(fr)(0)(s));
  return Xt((a) => (c) => ({
    lineIndex: a,
    text: c,
    start: o(T(fr)(0)(a < 1 ? [] : At(0, a, s)) / u),
    end: o(a >= 0 && a < s.length ? (T(fr)(0)(a < 1 ? [] : At(0, a, s)) + s[a]) / u : (T(fr)(0)(a < 1 ? [] : At(0, a, s)) + 1) / u)
  }))(i);
}, G5 = (t) => {
  const n = Rr(0)(t.window.endT - t.window.startT);
  return D((e) => ({
    ...hm,
    id: "token:" + t.eventId + ":line:" + an(e.lineIndex),
    kind: "tokenLine",
    time: t.window.startT + e.start * n,
    endTime: t.window.startT + e.end * n,
    path: _m(t.path),
    tokenIndex: t.tokenIndex,
    lineIndex: e.lineIndex,
    text: e.text,
    from: t.from,
    to: t.to
  }))(F5(t.holdPre)(t.holdPost)(t.labels));
}, I5 = (t) => Nt(Xt((n) => (e) => ({ path: e.path, eventId: e.eventId, window: e.window, from: e.from, to: e.to, labels: e.labels, holdPre: e.holdPre, holdPost: e.holdPost, tokenIndex: n }))(Nt(t)(l5)))(G5), B5 = (t) => Xt((n) => (e) => ({ ...e, index: n }))(It(R5)([
  ...Nt(t.segments)(J5),
  ...I5(t.segments)
])), D5 = (t) => (n) => {
  if (n.tag === "Structural")
    return bt((e) => e)([
      Eu(n._1.from)(t) ? v : w("Just", fo("UnknownKeyframe", n._1.from)),
      Eu(n._1.to)(t) ? v : w("Just", fo("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return bt((e) => e)([Eu(n._1)(t) ? v : w("Just", fo("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...bt((e) => e)([Eu(n._1.keyframe)(t) ? v : w("Just", fo("UnknownKeyframe", n._1.keyframe))]),
      ...k5(n._1.events),
      ...S5(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  if (n.tag === "StepScene")
    return [];
  f();
}, z5 = (t) => (n) => {
  const e = Nt(n)(D5(t));
  return e.length === 0 ? Et("Right", void 0) : Et("Left", e);
}, El = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = pd(D((u) => b(u.id, u))(e.keyframes)), s = z5(i)(e.scenes);
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
      const u = x5(mm(n)(r)(r)([])(e)(0));
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
          cameraSpans: am(t)($x)(r.layout)(i)(u),
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          cues: B5(u),
          seed: e.seed
        }
      );
    });
  }
  return Et("Left", [o5]);
}, fi = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => $m(t) }), $m = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => b(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = fi(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => li(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, li = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(b(n, e)), Apply0: () => $m(t) }), ym = (t) => {
  const n = { Applicative0: () => li(t), Bind1: () => fi(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, Mo = (t, n) => ({ tag: t, _1: n }), kr = (t, n) => ({ tag: t, _1: n }), _c = (t) => t, pr = (t, n) => ({ tag: t, _1: n }), Pl = (t) => t, kn = /* @__PURE__ */ ym(Fe), H5 = (t) => (e) => {
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
}, Q5 = /* @__PURE__ */ pn(F)(Yt), Al = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, O5 = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), Ut = /* @__PURE__ */ fi(Fe), te = kn.state((t) => b(t, t)), _n = /* @__PURE__ */ li(Fe), xm = (t) => (e) => {
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
}, vm = /* @__PURE__ */ Fr(_n), Rl = /* @__PURE__ */ vm(Yt), W5 = (t) => (e) => {
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
}, Jr = (t) => (e) => {
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
}, q5 = /* @__PURE__ */ (() => {
  const t = he.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return w("Just", b(n._1, n._2));
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
})(), gr = (t) => (e) => {
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
}, X5 = (t) => (e) => {
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
}, dc = (t) => (n) => (e) => T((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), Y5 = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), M5 = /* @__PURE__ */ (() => {
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
})(), U5 = /* @__PURE__ */ vm(Fa), K5 = /* @__PURE__ */ T((t) => (n) => tt(F)(n)()(t))(G), V5 = /* @__PURE__ */ Pl("AnimatedSurface"), j5 = /* @__PURE__ */ Pl("StillSurface"), Z5 = /* @__PURE__ */ Pl("SequenceSurface"), tL = /* @__PURE__ */ pr("Exit"), Na = /* @__PURE__ */ _c("AnimatedKeyframe"), Fl = /* @__PURE__ */ _c("Still"), nL = /* @__PURE__ */ _c("Title"), wm = /* @__PURE__ */ _c("StepMarker"), eL = (t) => kr("Par", t), rL = (t) => kr("Seq", t), oL = (t) => kr("GroupSeq", t), Tm = (t) => Mo("StepDive", t), iL = { line: 0, column: 0, endLine: 0, endColumn: 0 }, sL = (t) => (n) => (e) => {
  const r = Uo(qt, v, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = po(qt, v, r._1, b(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Lt(e)(b(t, n));
  f();
}, uL = (t) => (n) => D((e) => e._1 === t ? b(e._1, { ...e._2, label: w("Just", n) }) : b(e._1, e._2)), Nm = (t) => {
  const n = t.compare;
  return (e) => T((r) => (o) => Yn(n, Xn, r, e(o)))(G);
}, Zf = /* @__PURE__ */ Nm(F), t0 = /* @__PURE__ */ Nm(F), aL = (t) => {
  const n = t.span;
  return kn.state((e) => b(void 0, { ...e, currentSpan: n }));
}, of = (t) => (n) => ({ structural: [...t.structural, ...n.structural], flow: t.flow || n.flow, dives: [...t.dives, ...n.dives] }), cL = (t) => (n) => n.kind === "Animated" || H5(n.id)(t), hc = {
  graphNodes: [],
  graphEdges: G,
  currNodes: G,
  currEdges: G,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: v,
  currentSpan: iL,
  error: v,
  enterStack: [],
  interiorOf: G,
  stepNames: G
}, K_ = (t) => (n) => (e) => {
  const r = jt(be.foldr, e);
  return Ir(", ")(D(n)(At(0, 6, r))) + (r.length > 6 ? ", …" : "");
}, fL = (t) => (n) => {
  const e = Al(n)(Q5(D((r) => b(r.id, r))(t.graph.edges)));
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
}, lL = (t) => (n) => (e) => {
  const r = K_()(eo)(n), o = K_()(fL(t))(e);
  return (r === "" ? "animated flow contains unused topology: every animated node or edge must be visited by a token or fill." : "animated flow contains unused topology: every animated node or edge must be visited by a token or fill. Unused nodes: " + r + ".") + (o === "" ? "" : " Unused edges: " + o + ".") + " Move context-only topology into a `still`/`title`, remove it, or add token/fill events.";
}, gL = (t) => {
  if (t.kind.tag === "SendToken")
    return O5([t.kind._1.from, t.kind._1.to]);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return Zt("Node", 1, 1, t.kind._1.node, void 0, G, G);
  f();
}, _L = (t) => Zf(gL)(t.events), dL = (t) => {
  if (t.kind.tag === "SendToken")
    return Zt("Node", 1, 1, t.kind._1.edge, void 0, G, G);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return G;
  f();
}, hL = (t) => t0(dL)(t.events), dr = (t) => kn.state((n) => b(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return {
        ...n,
        error: w("Just", { msg: t, line: n.currentSpan.line, column: n.currentSpan.column, endLine: n.currentSpan.endLine, endColumn: n.currentSpan.endColumn })
      };
    f();
  })()
)), pL = /* @__PURE__ */ Rl((t) => Ut.bind(te)((n) => {
  if (n.error.tag === "Just")
    return _n.pure();
  if (n.error.tag === "Nothing")
    return xm(t.node)(n.interiorOf) ? dr("node " + t.node + " has more than one `inside` block") : kn.state((e) => b(void 0, { ...e, interiorOf: tt(F)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), mL = (t) => Ut.bind(te)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + an(n.kfCounter);
  if (En((o) => o.id === e, n.keyframes))
    return dr("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Lt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, kind: js }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: w("Just", e)
  };
  return kn.state((o) => b(void 0, r));
}), we = (t) => (n) => Ut.bind(kn.state((e) => b(void 0, { ...e, currentSpan: t })))(() => dr(n)), V_ = (t) => (n) => Ut.bind(te)((e) => W5(n)(e.stepNames) ? we(t)("duplicate step name " + n) : kn.state((r) => b(
  void 0,
  {
    ...r,
    scenes: Lt(r.scenes)(rs("StepScene", n)),
    stepNames: tt(F)(n)()(r.stepNames)
  }
))), $L = (t) => {
  if (t.ops.tag === "Leaf") {
    const n = t.ops._1;
    return Ut.bind((() => {
      const e = n.span;
      return kn.state((r) => b(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? V_(n.span)(n.op._1.name) : dr("step marker frame did not contain a step"));
  }
  if (t.ops.tag === "Seq" && t.ops._1.length === 1 && t.ops._1[0].tag === "Leaf") {
    const n = t.ops._1[0]._1;
    return Ut.bind((() => {
      const e = n.span;
      return kn.state((r) => b(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? V_(n.span)(n.op._1.name) : dr("step marker frame did not contain a step"));
  }
  return dr("step marker frame did not contain a step");
}, yL = (t) => Ut.bind((() => {
  const n = t.span;
  return kn.state((e) => b(void 0, { ...e, currentSpan: n }));
})())(() => Ut.bind(te)((n) => {
  if (n.error.tag === "Just")
    return _n.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!Jr(t.op._1.id)(n.currNodes))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot dive into node " + t.op._1.id + ": does not exist");
      if (!xm(t.op._1.id)(n.interiorOf))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot enter node " + t.op._1.id + ": it has no `inside` block. Add the block at the document level, alongside the animated statements:\n\ninside " + t.op._1.id + ` {
  + detail: Detail
}`);
      const e = t.op._1;
      return kn.state((r) => b(
        void 0,
        { ...r, enterStack: Lt(r.enterStack)(e.id), scenes: Lt(r.scenes)(rs("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = rr(n.enterStack);
      if (e.tag === "Nothing")
        return dr("`out` without a matching `into`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return kn.state((o) => b(void 0, { ...o, enterStack: r, scenes: Lt(o.scenes)(Oy) }));
      }
      f();
    }
    return _n.pure();
  }
  f();
})), pi = { structural: [], flow: !1, dives: [] }, xL = Ut.bind(te)((t) => {
  if (t.error.tag === "Just")
    return _n.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return kn.state((e) => b(void 0, { ...e, scenes: Lt(e.scenes)(rs("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return _n.pure();
  }
  f();
}), vL = (t) => (n) => Ut.bind(te)((e) => {
  const r = "ev-" + an(e.eventCounter);
  return Ut.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return kn.state((i) => b(void 0, o));
  })())(() => _n.pure({ events: [{ id: r, kind: n, when: t }], firstId: w("Just", r), lastId: w("Just", r) }));
}), wL = (t) => t.tag === "DataFlow" ? w("Just", t._1) : v, TL = (t) => bt((n) => Al(n)(t.graphEdges))(jt(Gi, q5(t.currEdges))), NL = (t) => (n) => {
  const e = ht((o) => o.from.node === n.id || o.to.node === n.id, TL(t)), r = dc(H1)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, a = i.from + "->" + i.to, c = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!gr(s)(t.currEdges))
      return Et("Left", c);
    const l = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!gr(u)(t.currEdges))
      return Et("Left", l);
    const _ = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return gr(a)(t.currEdges) || X5(a)(o.synthesized) ? Et("Left", _) : Et(
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
    const i = o.consumed, s = ht((u) => !gr(u.id)(i), e);
    return s.length === 0 ? Et(
      "Right",
      {
        nextCurrEdges: Yn(
          F.compare,
          Xn,
          cr(F.compare, t.currEdges, Y5(D((u) => u.id)(e))),
          M5((() => {
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
      "cannot delete node " + n.id + ": still connected (" + Ir(", ")(D((u) => (() => {
        const a = wo("conn:")(u.id);
        if (a.tag === "Just")
          return !1;
        if (a.tag === "Nothing")
          return !0;
        f();
      })() ? u.from.node + "→" + u.to.node : u.from.node + "--" + u.to.node)(s)) + "). Use `- a -> b` or `- a -- b` to drop them, or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, Jm = (t) => (n) => (e) => {
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
    return Nt(t._1)(Du);
  f();
}, JL = (t) => ({
  nodes: D(Ga)(t.graphNodes),
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
}), bs = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? { ...pi, structural: [t._1] } : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? { ...pi, dives: [t._1] } : { ...pi, flow: !0 };
  if (t.tag === "Seq" || t.tag === "GroupSeq" || t.tag === "Par")
    return T(of)(pi)(D(bs)(t._1));
  f();
}, pc = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? [Mo("StepStructural", [t._1])] : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? [Mo("StepDive", t._1)] : [Mo("StepFlow", t)];
  if (t.tag === "Seq")
    return Nt(t._1)(pc);
  if (t.tag === "GroupSeq")
    return bL(t)(t._1);
  if (t.tag === "Par")
    return CL(t)(t._1);
  f();
}, CL = (t) => (n) => {
  const e = bs(t);
  return e.structural.length !== 0 && !e.flow && e.dives.length === 0 ? [Mo("StepStructural", e.structural)] : e.structural.length === 0 && e.flow && e.dives.length === 0 ? [Mo("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? D(Tm)(e.dives) : Nt(n)(pc);
}, bL = (t) => (n) => {
  const e = bs(t);
  return e.structural.length === 0 && e.flow && e.dives.length === 0 ? [Mo("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? D(Tm)(e.dives) : Nt(n)(pc);
}, kL = (t) => (n) => Ut.bind(te)((e) => {
  const r = n.from + "->" + n.to, o = n.newFrom + "->" + n.newTo;
  return gr(r)(e.currEdges) ? Jr(n.newFrom)(e.currNodes) ? Jr(n.newTo)(e.currNodes) ? r !== o && gr(o)(e.currEdges) ? we((() => {
    const i = 2 < t.operands.length ? t.operands[2] : t.span, s = 3 < t.operands.length ? t.operands[3] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists") : kn.state((i) => b(
    void 0,
    {
      ...i,
      currEdges: tt(F)(o)()(Hi(F)(r)(i.currEdges)),
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
}), SL = (t) => {
  if (t.op.tag === "AddNode") {
    const n = t.op._1;
    return Ut.bind(te)((e) => Jr(n.id)(e.currNodes) ? we(0 < t.operands.length ? t.operands[0] : t.span)("cannot add node " + n.id + ": already exists") : kn.state((r) => b(
      void 0,
      {
        ...r,
        graphNodes: sL(n.id)({ id: n.id, size: b(1, 1), ports: [], label: w("Just", n.label), shape: n.shape })(r.graphNodes),
        currNodes: tt(F)(n.id)()(r.currNodes)
      }
    )));
  }
  if (t.op.tag === "DelNode") {
    const n = t.op._1;
    return Ut.bind(te)((e) => {
      if (!Jr(n.id)(e.currNodes))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot delete node " + n.id + ": does not exist");
      const r = NL(e)(n);
      if (r.tag === "Left")
        return we(0 < t.operands.length ? t.operands[0] : t.span)(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return kn.state((i) => b(
          void 0,
          {
            ...i,
            currNodes: Hi(F)(n.id)(i.currNodes),
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
      if (!Jr(n.id)(e.currNodes))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return kn.state((o) => b(void 0, { ...o, graphNodes: uL(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return _n.pure();
      f();
    });
  }
  if (t.op.tag === "AddEdge") {
    const n = t.op._1;
    return Ut.bind(te)((e) => {
      const r = !Jr(n.from)(e.currNodes), o = !Jr(n.to)(e.currNodes);
      if (r || o)
        return we(Jm(r)(o)(t))((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return gr(i)(e.currEdges) ? we((() => {
        const s = 0 < t.operands.length ? t.operands[0] : t.span, u = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: s.line, column: s.column, endLine: u.endLine, endColumn: u.endColumn };
      })())((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": already exists") : kn.state((s) => b(
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
      return gr(r)(e.currEdges) ? kn.state((o) => b(void 0, { ...o, currEdges: Hi(F)(r)(o.currEdges) })) : we((() => {
        const o = 0 < t.operands.length ? t.operands[0] : t.span, i = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: o.line, column: o.column, endLine: i.endLine, endColumn: i.endColumn };
      })())((n.directed ? "cannot delete edge " : "cannot delete connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": does not exist");
    });
  }
  return t.op.tag === "RepointEdge" ? kL(t)(t.op._1) : _n.pure();
}, LL = (t) => Ut.bind((() => {
  const n = t.span;
  return kn.state((e) => b(void 0, { ...e, currentSpan: n }));
})())(() => SL(t)), Cm = (t) => (n) => (e) => Ut.bind(Rl(LL)(e))(() => Ut.bind(te)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + an(r.kfCounter);
  if (En((s) => s.id === o, r.keyframes))
    return Ut.bind(U5(aL)(0 < e.length ? w("Just", e[0]) : v))(() => dr("duplicate frame name " + o));
  const i = {
    ...r,
    keyframes: Lt(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: w("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return Lt(r.scenes)(rs("Structural", { from: r.currentKf._1, to: o, focus: v }));
      f();
    })()
  };
  return kn.state((s) => b(void 0, i));
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
    return kn.state((s) => b(void 0, { ...s, currentSpan: i }));
  })())(() => dr("still/title blocks hold a still snapshot; they cannot contain movement tokens (`api ~> db`) or dive commands (`into`/`out`)")) : t === "TitleCard" && r.length === 0 ? dr(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Ut.bind(Cm(t)(n.name)(r))(() => xL);
}, EL = (t) => (n) => {
  const e = bt(wL)(n.scenes), r = ht(cL(K5(D((s) => s.keyframe)(e))), n.keyframes), o = cr(F.compare, Zf((s) => s.nodes)(r), Zf(_L)(e)), i = cr(F.compare, t0((s) => s.edges)(r), t0(hL)(e));
  return t !== "AnimatedSurface" || e.length === 0 || o.tag === "Leaf" && i.tag === "Leaf" ? v : w("Just", lL(n)(o)(i));
}, PL = (t) => (n) => {
  const e = n.to + "->" + n.from, r = n.from + "->" + n.to, o = n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
  if (gr(r)(t.currEdges))
    return w("Just", { id: r, direction: pg });
  if (gr(e)(t.currEdges))
    return w("Just", { id: e, direction: mg });
  const i = Al(o)(t.graphEdges);
  if (i.tag === "Just")
    return gr(o)(t.currEdges) ? w(
      "Just",
      { id: o, direction: i._1.from.node === n.from && i._1.to.node === n.to ? pg : mg }
    ) : v;
  if (i.tag === "Nothing")
    return v;
  f();
}, AL = (t) => (n) => {
  if (n.op.tag === "Token") {
    const e = n.op._1;
    return Ut.bind(te)((r) => {
      const o = !Jr(e.from)(r.currNodes), i = !Jr(e.to)(r.currNodes);
      if (o || i)
        return Ut.bind(we(Jm(o)(i)(n))(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => _n.pure({ events: [], firstId: v, lastId: v }));
      const s = PL(r)(e);
      if (s.tag === "Just")
        return vL(t)(Dy("SendToken", { from: e.from, to: e.to, edge: s._1.id, direction: s._1.direction, labels: e.labels }));
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
  const e = Ht((r) => v, (r) => (o) => w("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return _n.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Ut.bind(Ys(t)(e._1.head))((o) => Ut.bind(dc({
      Applicative0: () => li(Fe),
      Bind1: () => fi(Fe)
    })((i) => (s) => Ut.bind(Ys((() => {
      if (i.lastId.tag === "Just")
        return H0("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => _n.pure({
      events: [...i.events, ...u.events],
      firstId: (() => {
        if (i.firstId.tag === "Just")
          return w("Just", i.firstId._1);
        if (i.firstId.tag === "Nothing")
          return u.firstId;
        f();
      })(),
      lastId: (() => {
        if (u.lastId.tag === "Just")
          return w("Just", u.lastId._1);
        if (u.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })))(o)(r))((i) => _n.pure(i)));
  }
  f();
}, RL = (t) => (n) => {
  const e = Ht((r) => v, (r) => (o) => w("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return _n.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Ut.bind(Ys(t)(e._1.head))((o) => Ut.bind(FL((() => {
      if (o.firstId.tag === "Just")
        return H0("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => _n.pure({
      events: [...o.events, ...i.events],
      firstId: o.firstId,
      lastId: (() => {
        if (o.lastId.tag === "Just")
          return w("Just", o.lastId._1);
        if (o.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })));
  }
  f();
}, Ys = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Ut.bind((() => {
      const r = e.span;
      return kn.state((o) => b(void 0, { ...o, currentSpan: r }));
    })())(() => AL(t)(e));
  }
  if (n.tag === "Seq" || n.tag === "GroupSeq")
    return Z_(t)(n._1);
  if (n.tag === "Par")
    return RL(t)(n._1);
  f();
}, FL = (t) => dc({
  Applicative0: () => li(Fe),
  Bind1: () => fi(Fe)
})((n) => (e) => Ut.bind(Ys(t)(e))((r) => _n.pure({
  events: [...n.events, ...r.events],
  firstId: (() => {
    if (n.firstId.tag === "Just")
      return w("Just", n.firstId._1);
    if (n.firstId.tag === "Nothing")
      return r.firstId;
    f();
  })(),
  lastId: (() => {
    if (r.lastId.tag === "Just")
      return w("Just", r.lastId._1);
    if (r.lastId.tag === "Nothing")
      return n.lastId;
    f();
  })()
})))({ events: [], firstId: v, lastId: v }), GL = (t) => Ut.bind(te)((n) => {
  if (n.currentKf.tag === "Nothing")
    return dr("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Ut.bind(Ys(Qy)(t))((r) => Ut.bind(te)((o) => {
      const i = { ...o, scenes: Lt(o.scenes)(rs("DataFlow", { keyframe: e, events: r.events, focus: v })) };
      return kn.state((s) => b(void 0, i));
    }));
  }
  f();
}), IL = (t) => (n) => (e) => {
  if (e.tag === "StepStructural")
    return Ut.bind((() => {
      const r = Cm(js)(n ? v : t)(e._1);
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
      const i = mL(t);
      return o ? i : _n.pure();
    })())(() => Ut.bind(GL(r))(() => _n.pure(n || o)));
  }
  if (e.tag === "StepDive")
    return Ut.bind(yL(e._1))(() => _n.pure(n));
  f();
}, bm = (t) => (n) => (e) => {
  const r = Ht((o) => v, (o) => (i) => w("Just", { head: o, tail: i }), e);
  if (r.tag === "Nothing")
    return _n.pure();
  if (r.tag === "Just") {
    const o = r._1.head, i = r._1.tail;
    return Ut.bind(te)((s) => {
      if (s.error.tag === "Just")
        return _n.pure();
      if (s.error.tag === "Nothing")
        return Ut.bind(IL(t)(n)(o))((u) => bm(t)(u)(i));
      f();
    });
  }
  f();
}, BL = (t) => Ut.bind(te)((n) => {
  if (n.error.tag === "Just")
    return _n.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return bm(t.name)(!1)(pc(t.ops));
    if (t.kind === "Still")
      return j_(zy)(t);
    if (t.kind === "Title")
      return j_(Hy)(t);
    if (t.kind === "StepMarker")
      return $L(t);
  }
  f();
}), mc = (t) => Ut.bind(pL(t.interiors))(() => Ut.bind(Rl(BL)(t.frames))(() => Ut.bind(te)((n) => {
  if (n.error.tag === "Just")
    return _n.pure(Et("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = DL(t.interiors);
    if (e.tag === "Left")
      return _n.pure(Et("Left", e._1));
    if (e.tag === "Right") {
      const r = { seed: t.seed, graph: JL(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 };
      return _n.pure((() => {
        const o = EL(t.mode)(r);
        if (o.tag === "Just")
          return Et("Left", { msg: o._1, line: 0, column: 0, endLine: 0, endColumn: 0 });
        if (o.tag === "Nothing")
          return Et("Right", r);
        f();
      })());
    }
  }
  f();
}))), DL = (t) => {
  const n = dc(H1)((e) => (r) => {
    const o = mc(r.doc)(hc)._1;
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
}, Sr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), k = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Ja = (t, n, e) => ({ tag: t, _1: n, _2: e }), zL = (t) => Ja("More", t), HL = (t) => Ja("Lift", t), QL = {
  defer: (t) => {
    const n = _y(t);
    return (e, r, o, i, s) => dy(n)(e, r, o, i, s);
  }
}, km = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (a, c) => r((l) => s(a, t(c))))) }, OL = {
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
  Functor0: () => km
}, WL = (t) => {
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
          u = !1, a = n.Bind1().Apply0().Functor0().map(u0)(l._1);
          continue;
        }
        if (l.tag === "Stop") {
          u = !1, a = n.Applicative0().pure(Si("Done", b(l._2, l._1)));
          continue;
        }
        f();
      }
      return a;
    };
    return t.tailRecM(o)((i) => r(
      e,
      zL,
      HL,
      (s, u) => Ja("Stop", s, Et("Left", u)),
      (s, u) => Ja("Stop", s, Et("Right", u))
    ));
  };
}, mr = (t, n, e, r, o) => o(t, t._2), qL = { index: 0, line: 1, column: 1 }, XL = (t) => {
  const n = WL(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(Ia)(n(k(e, qL, !1))(r));
}, YL = /* @__PURE__ */ XL(W$), $c = (t, n, e, r, o) => o(k(t._1, t._2, !0), void 0), Sm = {
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
  Functor0: () => km
}, Lm = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => Sm }, ML = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => n(c)(e._3 && !a._3 ? k(a._1, a._2, !0) : a, r, o, i, s))
  )),
  Apply0: () => Sm
}, UL = { Applicative0: () => Lm, Bind1: () => ML }, yc = (t) => (n, e, r, o, i) => e((s) => mr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => o(n._3 && !u._3 ? k(u._1, u._2, !0) : u, Sr(t, a)))
)), KL = { empty: /* @__PURE__ */ yc("No alternative"), Alt0: () => OL }, VL = { Applicative0: () => Lm, Plus1: () => KL }, jL = {
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
  Monad0: () => UL
}, ZL = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(u0)(o))(r.pure(Si(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return Si("Loop", kt("Cons", s._1, i));
    if (s.tag === "Done")
      return Si(
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
}, Me = /* @__PURE__ */ ZL(jL)(VL), wt = (t) => (n) => {
  const e = yc("Expected " + n);
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
}, Ki = (t) => (n, e, r, o, i) => {
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
      (g, p) => e((m) => e((h) => yc("Negated parser succeeded")(
        g,
        e,
        r,
        l,
        ($, x) => e((y) => i(g._3 && !$._3 ? k($._1, $._2, !0) : $, x))
      )))
    )));
  });
}, tE = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return w("Just", e);
    if (r.tag === "Just")
      return w(
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
      return yc("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, Em = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => o((c) => o((l) => o((_) => t(
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
))))), n0 = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = Hx()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - Vr(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, nE = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, l = i, _ = Za(c);
    if (_.tag === "Nothing") {
      s = !1, u = a;
      continue;
    }
    if (_.tag === "Just") {
      r = _._1.tail === "" ? n0(a)(_._1.head)(l) : n0(a)(_._1.head)(_._1.tail), o = _._1.tail, i = l;
      continue;
    }
    f();
  }
  return u;
}, Bt = (t) => (n, e, r, o, i) => {
  const s = Za(n._1);
  if (s.tag === "Nothing")
    return o(n, Sr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Sr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = X0(s._1.head);
      return t(u) ? i(k(s._1.tail, n0(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Sr("Predicate unsatisfied", n._2));
    }
  }
  f();
}, uu = (t, n, e, r, o) => t._1 === "" ? o(k(t._1, t._2, !0), void 0) : r(t, Sr("Expected EOF", t._2)), eE = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Sr(s._1, n._2));
  if (s.tag === "Right")
    return i(k(s._1.remainder, nE(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, Je = (t) => eE((n) => {
  const e = wo(t)(n);
  return e.tag === "Just" ? Et("Right", { value: t, consumed: t, remainder: e._1 }) : Et("Left", "Expected " + df(t));
}), rE = /* @__PURE__ */ Bt((t) => !0), Pu = (t, n) => ({ tag: t, _1: n }), Gl = /* @__PURE__ */ tE(Yt), oE = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, iE = /* @__PURE__ */ pn(F)(Yt), sE = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Il = /* @__PURE__ */ (() => {
  const t = wt(Bt((r) => r === "}"))("'}'"), n = wt(Bt((r) => r === "#"))("'#'"), e = Bt((r) => r === `
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
              (Q, W) => o((B) => uu(r, o, i, s, u)),
              (Q, W) => o((B) => u(k(C, S, !1), void 0))
            )));
          }),
          (y, J) => o((N) => u(k(m, h, !1), void 0))
        )));
      }),
      (d, g) => o((p) => u(k(a, c, !1), void 0))
    )));
  };
})(), Re = (t) => (n, e, r, o, i) => e((s) => mr(
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
        return e((h) => mr(
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
)), uE = /* @__PURE__ */ (() => {
  const t = Bt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? k(u._1, u._2, !0) : u, void 0))
  ));
})(), Pm = (t, n, e, r, o) => n((i) => Je("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Me(Bt((_) => _ !== `
`)), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => o(l._3 && !d._3 ? k(d._1, d._2, !0) : d, void 0))
    ));
  })
)), Am = /* @__PURE__ */ wt(/* @__PURE__ */ (() => {
  const t = wt(Bt((e) => e === "}"))("'}'"), n = Bt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, a = e._2;
    return r((c) => r((l) => t(
      k(u, a, !1),
      r,
      o,
      (_, d) => r((g) => {
        const p = e._1, m = e._2;
        return r((h) => r(($) => Pm(
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
                  const B = Q._3;
                  return r((H) => B ? i(Q, W) : uu(e, r, o, i, s));
                },
                (Q, W) => r((B) => s(Q, void 0))
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
  const t = Me((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => uE(
      k(s, u, !1),
      e,
      r,
      (c, l) => {
        const _ = c._3;
        return e((d) => _ ? o(c, l) : Pm(n, e, r, o, i));
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
})(), aE = /* @__PURE__ */ (() => {
  const t = Bt((n) => n !== "|");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => e((c) => Je("\\|")(
      k(s, u, !1),
      e,
      r,
      (l, _) => e((d) => e((g) => t(n, e, r, o, (p, m) => e((h) => i(p, ts(m)))))),
      (l, _) => e((d) => i(l, "|"))
    )));
  };
})(), cE = /* @__PURE__ */ wt(/* @__PURE__ */ Gl([
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Je("->")(t, n, e, (u, a) => r(k(u._1, u._2, s), a), (u, a) => n((c) => o(u, !0)));
  }),
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Je("--")(t, n, e, (u, a) => r(k(u._1, u._2, s), a), (u, a) => n((c) => o(u, !1)));
  })
]))("edge arrow '->' or '--'"), fE = (t) => t !== `
` && t !== "\r" && t !== "#" && t !== "}" && t !== "{", xc = /* @__PURE__ */ Bt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), lE = (t) => t === " " || t === "	" || t === "\r", gE = (t) => vo(fn(Cr(lE)(fn(Gr(t))).rest)), Bl = (t) => t === `
` || t === "\r" || t === "#" || t === "}", _E = (t) => t === `
` || t === "\r" || t === "#" || t === "}" || t === "{", dE = (t) => t !== "{" && t !== `
` && t !== "\r", t1 = (t) => ja(t) === "", hE = (t) => fn(Cr(t1)(fn(Cr(t1)(t).rest)).rest), pE = (t) => ((e) => (r) => {
  let o = e, i = r, s = !0, u;
  for (; s; ) {
    const a = o, l = Ht((_) => v, (_) => (d) => w("Just", { head: _, tail: d }), i);
    if (l.tag === "Just" && (l._1.head === " " || l._1.head === "	")) {
      o = a + 1 | 0, i = l._1.tail;
      continue;
    }
    s = !1, u = a;
  }
  return u;
})(0)(Gr(t)), mE = (t) => {
  const n = Ht(
    (e) => v,
    (e) => (r) => w("Just", { head: e, tail: r }),
    D(pE)(ht((e) => ja(e) !== "", t))
  );
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return T(oE)(n._1.head)(n._1.tail);
  f();
}, $E = /* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => {
    const s = n._3;
    return e((u) => t(
      n,
      e,
      r,
      (a, c) => o(k(a._1, a._2, s), c),
      (a, c) => e((l) => {
        const _ = Ki((() => {
          const g = wt(Bt((m) => m === ">"))("'>'"), p = wt(Bt((m) => m === "-"))("'-'");
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
  const t = Me(Bt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? k(u._1, u._2, !0) : u, void 0))
  ));
})(), Jo = /* @__PURE__ */ (() => {
  const t = Bt((n) => n === " " || n === "	");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => un(n._3 && !u._3 ? k(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), Rm = (t, n, e, r, o) => n((i) => n((s) => un(
  t,
  n,
  e,
  r,
  (u, a) => n((c) => n((l) => {
    const _ = t._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return Il(
      _,
      n,
      e,
      r,
      (d, g) => n((p) => o(_._3 && !d._3 ? k(d._1, d._2, !0) : d, g))
    );
  }))
))), Fm = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = wt(Bt((_) => _ === "-"))("'-'"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => {
      const d = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return (x, y, J, N, C) => y((S) => cE(
            x,
            y,
            J,
            N,
            (P, E) => y((Q) => C(P, w("Just", E)))
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
        ($, x) => n((y) => d(k(g, p, !1), w("Just", x)))
      )));
    });
  })
)), yE = (t) => {
  const n = wo("Expected ")(t), e = (() => {
    if (n.tag === "Nothing")
      return t;
    if (n.tag === "Just")
      return n._1;
    f();
  })();
  return e === "'{'" ? "Open the block with `{`." : e === "integer (seed value)" ? "Put an integer after `seed`." : e === "closing '}'" ? "Close this block with `}`." : e === `closing '"' (unterminated string)` ? 'This string is unterminated; close it with `"`.' : e === "closing '|'" ? "Close this pipe label with `|`." : e === "space after '+'" ? "Put a space after `+`: `+ api: API`." : e === "node identifier after '+'" ? "Put a node id after `+`: `+ api: API`." : e === "space after '-'" ? "Put a space after `-`: `- api`." : e === "node identifier after '-'" ? "Put a node id after `-`: `- api`." : e === "space after '~'" ? "Put a space after `~`: `~ api -> db => api -> cache`." : e === "node identifier" ? "Put a node identifier here." : e === "space after 'inside'" ? "Put a space after `inside`: `inside api { ... }`." : e === "node identifier after 'inside'" ? "Tell `inside` which node owns this interior: `inside api { ... }`." : e === "source node identifier after 'via'" ? "Put the source node after `via`: `via a b`." : e === "target node identifier after 'via'" ? "Put the second endpoint after `via`: `via a b`." : e === "source node identifier" ? "Put a source node identifier here." : e === "new source node identifier" ? "Put the new source node identifier after `=>`." : e === "new target node identifier" ? "Put the new target node identifier after the replacement arrow." : e === "edge arrow '->' or '--'" ? "Use `->` for a directed edge or `--` for an undirected edge." : e === "source edge arrow '->'" ? "Use `->` in the edge you are changing: `~ api -> db => api -> cache`." : e === "replacement edge arrow '->'" ? "Use `->` in the replacement edge: `~ api -> db => api -> cache`." : e === "repoint separator '=>'" ? "Use `=>` before the replacement edge: `~ api -> db => api -> cache`." : e === "target node identifier" ? "Put a target node after the arrow." : e === "'~>'" ? "Use `~>` for movement from left to right." : e === "'<~'" ? "Use `<~` for movement from right to left." : e === "'->' or '<-'" ? "Use `~>` / `<~` for movement tokens." : e === 'label ("…", : rest-of-line, or |…|)' ? 'label must use `: text`, `"text"`, or `|multi-line|`.' : e === "attribute key" ? "Start each attribute with a name, like `shape`." : e === "':'" ? "Put `:` between the attribute name and value: `{shape: cylinder}`." : e === "attribute value" ? "Put an attribute value after `:`." : e === "closing '}' for attributes" ? "Close the attribute block with `}`." : e === "space after 'into'" ? "Put a space after `into`: `into api`." : e === "node identifier after 'into'" ? "Tell `into` which node to dive into." : e === "space after 'step'" ? "Put a space after `step`: `step request`." : e === "step name" ? "Name the step: `step request`." : e === "newline or '}' (statements end at the end of the line)" ? "This statement has extra text. Put the next statement on a new line or close the block with `}`." : e === "statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')" ? "I don't recognize this statement. Start with `+`, `-`, `~`, `into`, `out`, `par`, `seq`, or movement like `api ~> db`." : e === "'scene', 'still', 'title', 'step', 'inside', a statement, or end of input" ? "Start with a statement like `+ api: API`, a marker like `step request`, or a block with `scene`, `still`, `title`, or `inside`." : e;
}, xE = (t) => {
  const n = ja(t), e = wo('"')(n), r = (() => {
    if (e.tag === "Just")
      return cy('"')(e._1);
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
  return o === "" ? v : w("Just", o);
}, Gm = (t) => (n) => t !== "AnimatedSurface" && n.statements.length !== 0 ? {
  ...n,
  frames: Lt(n.frames)((() => {
    if (t === "StillSurface")
      return { name: v, ops: kr("Seq", n.statements), kind: Fl };
    if (t === "SequenceSurface")
      return { name: v, ops: kr("Seq", n.statements), kind: Na };
    if (t === "AnimatedSurface")
      return { name: v, ops: kr("Seq", n.statements), kind: Na };
    f();
  })()),
  statements: []
} : n, vE = /* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((_) => rE(
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
})(), wE = /* @__PURE__ */ (() => {
  const t = Bt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => vE(k(s, u, !1), e, r, (c, l) => e((_) => t(n, e, r, o, i)), i));
  };
})(), TE = /* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Me(wE), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = wt(wt(Bt((x) => x === '"'))(`'"'`))(`closing '"' (unterminated string)`), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return e((x) => h(
            $,
            e,
            r,
            o,
            (y, J) => e((N) => i(
              $._3 && !y._3 ? k(y._1, y._2, !0) : y,
              vo(jt(Jn.foldr, p))
            ))
          ));
        })
      ));
    })
  ));
})(), NE = { frames: [], statements: [] }, JE = (t) => {
  const n = hE(No(`
`)(t));
  return Ir(`
`)(D(gE)(D(Qi(mE(n)))(n)));
}, CE = /* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Me(aE), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = wt(wt(Bt((x) => x === "|"))("'|'"))("closing '|'"), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return e((x) => h(
            $,
            e,
            r,
            o,
            (y, J) => e((N) => i(
              $._3 && !y._3 ? k(y._1, y._2, !0) : y,
              JE(Ir("")(jt(Jn.foldr, p)))
            ))
          ));
        })
      ));
    })
  ));
})(), Ms = /* @__PURE__ */ Bt((t) => t >= "0" && t <= "9"), bE = /* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => xc(
      k(s, u, !1),
      e,
      r,
      (c, l) => {
        const _ = c._3;
        return e((d) => {
          if (_)
            return o(c, l);
          const g = n._1, p = n._2;
          return e((m) => Ms(
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
                    return e((Q) => E ? o(S, P) : $E(n, e, r, o, i));
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
  const t = wt(Bt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, _) => e((d) => {
      const g = Me(bE), p = n._3 && !l._3 ? k(l._1, l._2, !0) : l;
      return e((m) => g(
        p,
        e,
        r,
        o,
        (h, $) => e((x) => i(
          p._3 && !h._3 ? k(h._1, h._2, !0) : h,
          ts(_) + vo(jt(Jn.foldr, $))
        ))
      ));
    }), a = n._1, c = n._2;
    return e((l) => xc(
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
})(), n1 = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = wt(Kn)("attribute key"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
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
            const J = wt(wt(Bt((C) => C === ":"))("':'"))("':'"), N = m._3 && !$._3 ? k($._1, $._2, !0) : $;
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
                  (B, H) => n((rt) => {
                    const ot = wt(Kn)("attribute value"), M = Q._3 && !B._3 ? k(B._1, B._2, !0) : B;
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
)), kE = /* @__PURE__ */ Em(/* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "{"))("'{'");
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
})())(/* @__PURE__ */ wt(/* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "}"))("'}'");
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
  const t = wt(Bt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, _) => e((d) => (() => {
      if (_.tag === "Just")
        return (g, p, m, h, $) => $(g, G);
      if (_.tag === "Nothing")
        return (g, p, m, h, $) => p((x) => n1(
          g,
          p,
          m,
          h,
          (y, J) => p((N) => {
            const C = Me((() => {
              const P = wt(Bt((E) => E === ","))("','");
              return (E, Q, W, B, H) => {
                const rt = E._3;
                return Q((ot) => Q((M) => Q((q) => Q((A) => Q((R) => Q((X) => un(
                  E,
                  Q,
                  W,
                  (L, I) => B(k(L._1, L._2, rt), I),
                  (L, I) => Q((z) => Q((U) => {
                    const K = E._3 && !L._3 ? k(L._1, L._2, !0) : L;
                    return P(
                      K,
                      Q,
                      W,
                      (O, Z) => B(k(O._1, O._2, rt), Z),
                      (O, Z) => Q((et) => {
                        const nt = K._3 && !O._3 ? k(O._1, O._2, !0) : O;
                        return Q((gt) => Q((ct) => {
                          const $t = E._3 && !nt._3 ? k(nt._1, nt._2, !0) : nt;
                          return un(
                            $t,
                            Q,
                            W,
                            (Pt, Rt) => B(k(Pt._1, Pt._2, rt), Rt),
                            (Pt, Rt) => Q((rn) => {
                              const xt = $t._3 && !Pt._3 ? k(Pt._1, Pt._2, !0) : Pt;
                              return Q((Gt) => Q((vt) => {
                                const Jt = E._3 && !xt._3 ? k(xt._1, xt._2, !0) : xt;
                                return n1(
                                  Jt,
                                  Q,
                                  W,
                                  (_t, yt) => B(k(_t._1, _t._2, rt), yt),
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
                iE([J, ...jt(Jn.foldr, Q)])
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
      (d, g) => e((p) => u(k(a, c, !1), w("Just", g)))
    )));
  });
})()), SE = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = wt(Bt((_) => _ === "{"))("'{'"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => {
      const d = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return kE;
        if (h.tag === "Nothing")
          return (x, y, J, N, C) => C(x, G);
        f();
      })()(l._3 && !m._3 ? k(m._1, m._2, !0) : m, n, e, r, o)), g = l._1, p = l._2;
      return n((m) => n((h) => c(
        k(g, p, !1),
        n,
        e,
        ($, x) => n((y) => d(l, v)),
        ($, x) => n((y) => d(k(g, p, !1), w("Just", x)))
      )));
    });
  })
)), LE = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => un(
  r,
  o,
  i,
  s,
  (c, l) => o((_) => {
    const d = Re(wt(Kn)("target node identifier")), g = r._3 && !c._3 ? k(c._1, c._2, !0) : c;
    return o((p) => d(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => u(
        g._3 && !m._3 ? k(m._1, m._2, !0) : m,
        { op: pr("DelEdge", { from: t, to: h._1, directed: e }), operands: [n, h._2] }
      ))
    ));
  })
)), EE = (t, n, e, r, o) => n((i) => mr(
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
                const S = (Q, W) => n((B) => {
                  const H = N._3 && !Q._3 ? k(Q._1, Q._2, !0) : Q;
                  return n((rt) => r(c._3 && !H._3 ? k(H._1, H._2, !0) : H, Sr("Use `~>` / `<~` for movement tokens.", u)));
                }), P = N._1, E = N._2;
                return n((Q) => Je("->")(
                  k(P, E, !1),
                  n,
                  e,
                  (W, B) => {
                    const H = W._3;
                    return n((rt) => H ? r(k(W._1, W._2, _), B) : Je("<-")(N, n, e, (ot, M) => r(k(ot._1, ot._2, _), M), S));
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
)), PE = (t, n, e, r, o) => n((i) => {
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
          const h = wt(Bt((x) => x === "~"))("'~'"), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return n((x) => {
            const y = (C, S) => n((P) => {
              const E = $._3 && !C._3 ? k(C._1, C._2, !0) : C;
              return n((Q) => {
                const W = c._1, B = c._2, H = t._3 && !E._3 ? k(E._1, E._2, !0) : E;
                return n((rt) => un(
                  H,
                  n,
                  e,
                  r,
                  (ot, M) => n((q) => {
                    const A = wt(Bt((L) => L === "~"))("'~'"), R = wt(Bt((L) => L === "<"))("'<'"), X = H._3 && !ot._3 ? k(ot._1, ot._2, !0) : ot;
                    return n((L) => {
                      const I = (K, O) => n((Z) => {
                        const et = O === "~" ? wt(Je("~>"))("'~>'") : wt(Je("<~"))("'<~'"), nt = X._3 && !K._3 ? k(K._1, K._2, !0) : K;
                        return n((gt) => et(
                          nt,
                          n,
                          e,
                          r,
                          (ct, $t) => n((Pt) => o(
                            nt._3 && !ct._3 ? k(ct._1, ct._2, !0) : ct,
                            b(W, b(B, $t))
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
                  (B, H) => r(k($._1, $._2, s), H),
                  (B, H) => n((rt) => y($))
                )));
              },
              (S, P) => y($)
            ));
          });
        })
      ));
    })
  ));
}), AE = /* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "~"))("'~'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = wt(Jo)("space after '~'"), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Re(wt(Kn)("source node identifier")), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
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
                (Q, W) => e((B) => {
                  const H = wt(Je("->"))("source edge arrow '->'"), rt = P._3 && !Q._3 ? k(Q._1, Q._2, !0) : Q;
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
                          const U = Re(wt(Kn)("target node identifier")), K = R._3 && !L._3 ? k(L._1, L._2, !0) : L;
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
                                  const Gt = wt(Je("=>"))("repoint separator '=>'"), vt = $t._3 && !Rt._3 ? k(Rt._1, Rt._2, !0) : Rt;
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
                                        (St, zt) => e((tn) => {
                                          const pe = Re(wt(Kn)("new source node identifier")), Mn = mt._3 && !St._3 ? k(St._1, St._2, !0) : St;
                                          return e((jn) => pe(
                                            Mn,
                                            e,
                                            r,
                                            o,
                                            (Qt, Ot) => e((me) => {
                                              const ee = Ot._1, Un = Ot._2, Qn = Mn._3 && !Qt._3 ? k(Qt._1, Qt._2, !0) : Qt;
                                              return e((sr) => un(
                                                Qn,
                                                e,
                                                r,
                                                o,
                                                (on, vn) => e((Kl) => {
                                                  const au = wt(Je("->"))("replacement edge arrow '->'"), cu = Qn._3 && !on._3 ? k(on._1, on._2, !0) : on;
                                                  return e((Vl) => au(
                                                    cu,
                                                    e,
                                                    r,
                                                    o,
                                                    (mn, ue) => e((Br) => {
                                                      const ko = cu._3 && !mn._3 ? k(mn._1, mn._2, !0) : mn;
                                                      return e((io) => un(
                                                        ko,
                                                        e,
                                                        r,
                                                        o,
                                                        (ke, gi) => e(($r) => {
                                                          const Ue = Re(wt(Kn)("new target node identifier")), So = ko._3 && !ke._3 ? k(ke._1, ke._2, !0) : ke;
                                                          return e((us) => Ue(
                                                            So,
                                                            e,
                                                            r,
                                                            o,
                                                            (so, _i) => e((fu) => i(
                                                              So._3 && !so._3 ? k(so._1, so._2, !0) : so,
                                                              {
                                                                op: pr("RepointEdge", { from: C, to: gt, newFrom: ee, newTo: _i._1 }),
                                                                operands: [S, ct, Un, _i._2]
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
})(), RE = (t, n, e, r, o) => n((i) => Ms(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Me(Ms), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = S2(ts(u) + vo(jt(
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
)), FE = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Je(t)(
    n,
    e,
    r,
    (a, c) => o(k(a._1, a._2, s), c),
    (a, c) => e((l) => {
      const _ = Ki((() => {
        const g = wt(Bt((m) => m === "_"))("'_'"), p = wt(Bt((m) => m === "-"))("'-'");
        return (m, h, $, x, y) => {
          const J = m._1, N = m._2;
          return h((C) => xc(
            k(J, N, !1),
            h,
            $,
            (S, P) => {
              const E = S._3;
              return h((Q) => {
                if (E)
                  return x(S, P);
                const W = m._1, B = m._2;
                return h((H) => Ms(
                  k(W, B, !1),
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
}, Be = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Je(t)(
    n,
    e,
    r,
    (a, c) => o(k(a._1, a._2, s), c),
    (a, c) => e((l) => {
      const _ = Ki((() => {
        const g = wt(Bt((m) => m === "_"))("'_'"), p = wt(Bt((m) => m === "-"))("'-'");
        return (m, h, $, x, y) => {
          const J = m._1, N = m._2;
          return h((C) => xc(
            k(J, N, !1),
            h,
            $,
            (S, P) => {
              const E = S._3;
              return h((Q) => {
                if (E)
                  return x(S, P);
                const W = m._1, B = m._2;
                return h((H) => Ms(
                  k(W, B, !1),
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
}, GE = (t, n, e, r, o) => n((i) => Be("into")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = wt(Jo)("space after 'into'"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = Re(wt(Kn)("node identifier after 'into'")), h = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
        return n(($) => m(
          h,
          n,
          e,
          r,
          (x, y) => n((J) => o(
            h._3 && !x._3 ? k(x._1, x._2, !0) : x,
            { op: pr("Enter", { id: y._1 }), operands: [y._2] }
          ))
        ));
      })
    ));
  })
)), IE = (t, n, e, r, o) => n((i) => Be("out")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => o(t._3 && !s._3 ? k(s._1, s._2, !0) : s, { op: tL, operands: [] }))
)), BE = (t, n, e, r, o) => n((i) => Be("seed")(
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
        const p = wt(RE)("integer (seed value)"), m = c._3 && !_._3 ? k(_._1, _._2, !0) : _;
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
)), Im = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => Be("diagram")(
    t,
    n,
    e,
    (u, a) => r(k(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const l = wt(Jo)("space after 'diagram'"), _ = t._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return n((d) => l(
        _,
        n,
        e,
        (g, p) => r(k(g._1, g._2, i), p),
        (g, p) => n((m) => {
          const h = wt(Be("sequence"))("diagram mode"), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return n((x) => h(
            $,
            n,
            e,
            (y, J) => r(k(y._1, y._2, i), J),
            (y, J) => n((N) => {
              const C = $._3 && !y._3 ? k(y._1, y._2, !0) : y;
              return n((S) => Rm(
                C,
                n,
                e,
                (P, E) => r(k(P._1, P._2, i), E),
                (P, E) => n((Q) => o(
                  C._3 && !P._3 ? k(P._1, P._2, !0) : P,
                  Z5
                ))
              ));
            })
          ));
        })
      ));
    })
  ));
}, Bm = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => Be("still")(
    t,
    n,
    e,
    (u, a) => r(k(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const l = t._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return n((_) => Rm(
        l,
        n,
        e,
        (d, g) => r(k(d._1, d._2, i), g),
        (d, g) => n((p) => o(l._3 && !d._3 ? k(d._1, d._2, !0) : d, j5))
      ));
    })
  ));
}, Dm = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Bm(
    k(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((_) => l ? r(a, c) : Im(t, n, e, r, o));
    },
    o
  ));
}, DE = (t) => (n, e, r, o, i) => e((s) => mr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return e((_) => {
      const d = l._3;
      return Dm(
        l,
        e,
        r,
        (g, p) => o(k(g._1, g._2, d), p),
        (g, p) => e((m) => o(
          l._3 && !g._3 ? k(g._1, g._2, !0) : g,
          Sr(
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
)), zE = (t) => (n, e, r, o, i) => e((s) => mr(
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
          return (y, J, N, C, S) => C(y, Sr(x, a));
        }
        if (h.tag === "Nothing")
          return (x, y, J, N, C) => C(x, void 0);
        f();
      })()(l._3 && !m._3 ? k(m._1, m._2, !0) : m, e, r, o, i)), g = l._1, p = l._2;
      return e((m) => e((h) => Dm(
        k(g, p, !1),
        e,
        r,
        ($, x) => {
          const y = $._3;
          return e((J) => y ? o($, x) : d(l, v));
        },
        ($, x) => e((y) => d($, w("Just", x)))
      )));
    });
  })
)), HE = (t, n, e, r, o) => n((i) => {
  const s = (c, l) => n((_) => {
    const d = t._3 && !c._3 ? k(c._1, c._2, !0) : c;
    return n((g) => Le(
      d,
      n,
      e,
      r,
      (p, m) => n((h) => {
        const $ = d._3 && !p._3 ? k(p._1, p._2, !0) : p;
        return n((x) => zE(l)(
          $,
          n,
          e,
          r,
          (y, J) => n((N) => o($._3 && !y._3 ? k(y._1, y._2, !0) : y, l))
        ));
      })
    ));
  }), u = t._1, a = t._2;
  return n((c) => Bm(
    k(u, a, !1),
    n,
    e,
    (l, _) => {
      const d = l._3;
      return n((g) => d ? r(l, _) : Im(t, n, e, r, s));
    },
    s
  ));
}), QE = (t, n, e, r, o) => n((i) => {
  const s = (c, l) => n((_) => o(
    c,
    (() => {
      if (l.tag === "Nothing")
        return V5;
      if (l.tag === "Just")
        return l._1;
      f();
    })()
  )), u = t._1, a = t._2;
  return n((c) => n((l) => HE(
    k(u, a, !1),
    n,
    e,
    (_, d) => {
      const g = _._3;
      return n((p) => g ? r(_, d) : s(t, v));
    },
    (_, d) => n((g) => s(_, w("Just", d)))
  )));
}), OE = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => un(
    t,
    n,
    e,
    (a, c) => r(k(a._1, a._2, s), c),
    (a, c) => n((l) => Be("via")(
      t._3 && !a._3 ? k(a._1, a._2, !0) : a,
      n,
      e,
      (_, d) => r(k(_._1, _._2, s), d),
      (_, d) => n((g) => {
        const p = t._3 && !_._3 ? k(_._1, _._2, !0) : _;
        return n((m) => $c(
          p,
          n,
          e,
          r,
          (h, $) => n((x) => {
            const y = p._3 && !h._3 ? k(h._1, h._2, !0) : h;
            return n((J) => Jo(
              y,
              n,
              e,
              r,
              (N, C) => n((S) => {
                const P = wt(Kn)("source node identifier after 'via'"), E = y._3 && !N._3 ? k(N._1, N._2, !0) : N;
                return n((Q) => P(
                  E,
                  n,
                  e,
                  r,
                  (W, B) => n((H) => {
                    const rt = E._3 && !W._3 ? k(W._1, W._2, !0) : W;
                    return n((ot) => un(
                      rt,
                      n,
                      e,
                      r,
                      (M, q) => n((A) => {
                        const R = wt(Kn)("target node identifier after 'via'"), X = rt._3 && !M._3 ? k(M._1, M._2, !0) : M;
                        return n((L) => R(
                          X,
                          n,
                          e,
                          r,
                          (I, z) => n((U) => o(X._3 && !I._3 ? k(I._1, I._2, !0) : I, { from: B, to: z }))
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
}), WE = (t) => (n) => {
  const e = Me(OE);
  return (r, o, i, s, u) => o((a) => e(
    r,
    o,
    i,
    s,
    (c, l) => o((_) => u(
      r._3 && !c._3 ? k(c._1, c._2, !0) : c,
      { op: pr("DelNode", { id: t, via: jt(Jn.foldr, l) }), operands: [n] }
    ))
  ));
}, qE = /* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = wt(Jo)("space after '-'"), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Re(wt(Kn)("node identifier after '-'")), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return e((x) => h(
            $,
            e,
            r,
            o,
            (y, J) => e((N) => {
              const C = J._1, S = J._2, P = $._3 && !y._3 ? k(y._1, y._2, !0) : y;
              return e((E) => Fm(
                P,
                e,
                r,
                o,
                (Q, W) => e((B) => (() => {
                  if (W.tag === "Just")
                    return LE(C)(S)(W._1);
                  if (W.tag === "Nothing")
                    return WE(C)(S);
                  f();
                })()(P._3 && !Q._3 ? k(Q._1, Q._2, !0) : Q, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), ar = (t) => (n) => (e, r, o, i, s) => r((u) => mr(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const _ = e._3 && !a._3 ? k(a._1, a._2, !0) : a;
    return r((d) => Be(t)(
      _,
      r,
      o,
      i,
      (g, p) => r((m) => i(_._3 && !g._3 ? k(g._1, g._2, !0) : g, Sr(n, c)))
    ));
  })
)), XE = (t) => t === "AnimatedSurface" ? (n, e, r, o, i) => e((s) => mr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return e((_) => Be("step")(
      l,
      e,
      r,
      o,
      (d, g) => e((p) => {
        const m = wt(Jo)("space after 'step'"), h = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
        return e(($) => m(
          h,
          e,
          r,
          o,
          (x, y) => e((J) => {
            const N = Re(wt(Kn)("step name")), C = h._3 && !x._3 ? k(x._1, x._2, !0) : x;
            return e((S) => N(
              C,
              e,
              r,
              o,
              (P, E) => e((Q) => {
                const W = E._1, B = E._2, H = C._3 && !P._3 ? k(P._1, P._2, !0) : P;
                return e((rt) => mr(
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
                        return e((U) => Am(
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
                                    name: w("Just", W),
                                    ops: kr(
                                      "Leaf",
                                      {
                                        op: pr("Step", { name: W }),
                                        line: Pt.line,
                                        column: Pt.column,
                                        endLine: Pt.endLine,
                                        endColumn: Pt.endColumn,
                                        span: Pt,
                                        operands: [B]
                                      }
                                    ),
                                    kind: wm
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
)) : ar("step")("`step` markers are only supported in animated diagrams."), YE = /* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === ":"))("':'");
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
          const m = Me(Bt(fE)), h = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
          return e(($) => m(
            h,
            e,
            r,
            o,
            (x, y) => e((J) => i(
              h._3 && !x._3 ? k(x._1, x._2, !0) : x,
              ja(vo(jt(Jn.foldr, y)))
            ))
          ));
        })
      ));
    })
  ));
})(), ME = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => wt((c, l, _, d, g) => {
    const p = c._1, m = c._2;
    return l((h) => YE(
      k(p, m, !1),
      l,
      _,
      ($, x) => {
        const y = $._3;
        return l((J) => {
          if (y)
            return d($, x);
          const N = c._1, C = c._2;
          return l((S) => CE(
            k(N, C, !1),
            l,
            _,
            (P, E) => {
              const Q = P._3;
              return l((W) => Q ? d(P, E) : TE(c, l, _, d, g));
            },
            g
          ));
        });
      },
      g
    ));
  })('label ("…", : rest-of-line, or |…|)')(t._3 && !s._3 ? k(s._1, s._2, !0) : s, n, e, r, o))
)), vc = (t) => (n, e, r, o, i) => e((s) => un(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return e((_) => {
      const d = (m, h) => e(($) => (h ? ((x, y, J, N, C) => C(x, v)) : (x, y, J, N, C) => y((S) => ME(
        x,
        y,
        J,
        N,
        (P, E) => y((Q) => C(P, w("Just", E)))
      )))(l._3 && !m._3 ? k(m._1, m._2, !0) : m, e, r, o, i)), g = l._1, p = l._2;
      return e((m) => {
        const h = ($, x) => {
          const y = $._3;
          return e((J) => y ? o($, x) : d(l, !1));
        };
        return e(($) => e((x) => e((y) => uu(
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
              (E, Q) => e((W) => e((B) => d(k(g, p, !1), !0)))
            )));
          },
          (J, N) => e((C) => e((S) => d(k(g, p, !1), !0)))
        ))));
      });
    });
  })
)), UE = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => un(
  r,
  o,
  i,
  s,
  (c, l) => o((_) => {
    const d = Re(wt(Kn)("target node identifier")), g = r._3 && !c._3 ? k(c._1, c._2, !0) : c;
    return o((p) => d(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => {
        const x = h._1, y = h._2, J = g._3 && !m._3 ? k(m._1, m._2, !0) : m;
        return o((N) => vc(Bl)(
          J,
          o,
          i,
          s,
          (C, S) => o((P) => u(
            J._3 && !C._3 ? k(C._1, C._2, !0) : C,
            {
              op: pr("AddEdge", { from: t, to: x, label: S.tag === "Just" ? w("Just", S._1) : v, directed: e }),
              operands: [n, y]
            }
          ))
        ));
      })
    ));
  })
)), KE = (t, n, e, r, o) => n((i) => {
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
          const h = wt(Bt((x) => x === "<"))("'<'"), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return n((x) => h(
            $,
            n,
            e,
            (y, J) => r(k($._1, $._2, s), J),
            (y, J) => n((N) => {
              const C = Ki((P, E, Q, W, B) => {
                const H = P._3;
                return Je("<-")(P, E, Q, (rt, ot) => W(k(rt._1, rt._2, H), ot), B);
              }), S = $._3 && !$._3 ? k($._1, $._2, !0) : $;
              return n((P) => C(
                S,
                n,
                e,
                (E, Q) => r(k(E._1, E._2, s), Q),
                (E, Q) => n((W) => {
                  const B = S._3 && !E._3 ? k(E._1, E._2, !0) : E;
                  return n((H) => {
                    const rt = c._1, ot = c._2, M = t._3 && !B._3 ? k(B._1, B._2, !0) : B;
                    return n((q) => un(
                      M,
                      n,
                      e,
                      r,
                      (A, R) => n((X) => {
                        const L = wt(Je("<~"))("'<~'"), I = M._3 && !A._3 ? k(A._1, A._2, !0) : A;
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
                                const $t = Re(wt(Kn)("target node identifier")), Pt = Z._3 && !nt._3 ? k(nt._1, nt._2, !0) : nt;
                                return n((Rt) => $t(
                                  Pt,
                                  n,
                                  e,
                                  r,
                                  (rn, xt) => n((Gt) => {
                                    const vt = xt._1, Jt = xt._2, _t = Pt._3 && !rn._3 ? k(rn._1, rn._2, !0) : rn;
                                    return n((yt) => vc(Bl)(
                                      _t,
                                      n,
                                      e,
                                      r,
                                      (ft, mt) => n((Ft) => o(
                                        _t._3 && !ft._3 ? k(ft._1, ft._2, !0) : ft,
                                        {
                                          op: pr(
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
}), VE = (t, n, e, r, o) => n((i) => PE(
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
        const $ = Re(wt(Kn)("target node identifier")), x = d._3 && !p._3 ? k(p._1, p._2, !0) : p;
        return n((y) => $(
          x,
          n,
          e,
          r,
          (J, N) => n((C) => {
            const S = N._1, P = N._2, E = x._3 && !J._3 ? k(J._1, J._2, !0) : J;
            return n((Q) => vc(Bl)(
              E,
              n,
              e,
              r,
              (W, B) => n((H) => (c === "<~" ? ((rt, ot, M, q, A) => A(
                rt,
                {
                  op: pr(
                    "Token",
                    {
                      from: S,
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
                  op: pr(
                    "Token",
                    {
                      from: l,
                      to: S,
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
              ))(E._3 && !W._3 ? k(W._1, W._2, !0) : W, n, e, r, o))
            ));
          })
        ));
      })
    ));
  })
)), jE = (t, n, e, r, o) => n((i) => vc(_E)(
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
)), ZE = (t) => (n) => (e, r, o, i, s) => r((u) => jE(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const _ = e._3 && !a._3 ? k(a._1, a._2, !0) : a;
    return r((d) => SE(
      _,
      r,
      o,
      i,
      (g, p) => r((m) => s(
        _._3 && !g._3 ? k(g._1, g._2, !0) : g,
        {
          op: pr(
            "AddNode",
            {
              id: t,
              label: c,
              shape: (() => {
                const h = sE("shape")(p);
                if (h.tag === "Just")
                  return h._1 === "rectangle" || h._1 === "rect" ? Xr : h._1 === "cylinder" || h._1 === "cyl" ? gg : h._1 === "parallelogram" ? Jy : h._1 === "diamond" ? Cy : h._1 === "ellipse" ? by : h._1 === "document" || h._1 === "doc" ? _g : h._1 === "cloud" ? ky : Xr;
                if (h.tag === "Nothing")
                  return Xr;
                f();
              })()
            }
          ),
          operands: [n]
        }
      ))
    ));
  })
)), tP = /* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "+"))("'+'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = wt(Jo)("space after '+'"), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Re(wt(Kn)("node identifier after '+'")), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return e((x) => h(
            $,
            e,
            r,
            o,
            (y, J) => e((N) => {
              const C = J._1, S = J._2, P = $._3 && !y._3 ? k(y._1, y._2, !0) : y;
              return e((E) => Fm(
                P,
                e,
                r,
                o,
                (Q, W) => e((B) => (() => {
                  if (W.tag === "Just")
                    return UE(C)(S)(W._1);
                  if (W.tag === "Nothing")
                    return ZE(C)(S);
                  f();
                })()(P._3 && !Q._3 ? k(Q._1, Q._2, !0) : Q, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), nP = (t, n, e, r, o) => n((i) => mr(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = wt(Gl([
      ar("+node")("Node additions use `+ api: API`."),
      ar("+edge")("Graph edges use `+ api -> db`."),
      ar("+conn")("Undirected graph edges use `+ api -- db`."),
      ar("-node")("Node removals use `- api`."),
      ar("-edge")("Graph edge removals use `- api -> db`."),
      ar("-conn")("Undirected graph edge removals use `- api -- db`."),
      ar("~edge")("Graph edge repoints use `~ api -> db => api -> cache`."),
      ar("enter")("Dive commands use `into api`."),
      ar("exit")("Return from a dive with `out`."),
      EE,
      tP,
      qE,
      AE,
      VE,
      KE,
      GE,
      IE
    ]))("statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
        return n((h) => mr(
          m,
          n,
          e,
          r,
          ($, x) => n((y) => {
            const J = { line: u.line, column: u.column, endLine: x.line, endColumn: x.column };
            return o(
              m._3 && !$._3 ? k($._1, $._2, !0) : $,
              kr(
                "Leaf",
                { op: g.op, line: J.line, column: J.column, endLine: J.endLine, endColumn: J.endColumn, span: J, operands: g.operands }
              )
            );
          })
        ));
      })
    ));
  })
)), Dl = /* @__PURE__ */ Em(/* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "{"))("'{'");
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
})())(/* @__PURE__ */ wt(/* @__PURE__ */ (() => {
  const t = wt(Bt((n) => n === "}"))("'}'");
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
})())("closing '}'")), zm = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Le(
    t,
    n,
    e,
    (a, c) => r(k(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const _ = Ki(wt(Bt((g) => g === "}"))("'}'")), d = t._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return n((g) => _(
        d,
        n,
        e,
        (p, m) => r(k(p._1, p._2, s), m),
        (p, m) => n((h) => Ki(uu)(
          d._3 && !p._3 ? k(p._1, p._2, !0) : p,
          n,
          e,
          ($, x) => r(k($._1, $._2, s), x),
          ($, x) => n((y) => {
            const J = t._3 && !$._3 ? k($._1, $._2, !0) : $;
            return n((N) => $c(
              J,
              n,
              e,
              r,
              (C, S) => n((P) => {
                const E = Gl([rP, eP, nP]), Q = J._3 && !C._3 ? k(C._1, C._2, !0) : C;
                return n((W) => E(
                  Q,
                  n,
                  e,
                  r,
                  (B, H) => n((rt) => {
                    const ot = Q._3 && !B._3 ? k(B._1, B._2, !0) : B;
                    return n((M) => un(
                      ot,
                      n,
                      e,
                      r,
                      (q, A) => n((R) => {
                        const X = ot._3 && !q._3 ? k(q._1, q._2, !0) : q;
                        return n((L) => Am(
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
}), eP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, l) => {
      const _ = c._3;
      return n((d) => _ ? r(c, l) : n((g) => {
        const p = t._3;
        return n((m) => Be("seq")(
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
              (N, C) => n((S) => Il(
                y._3 && !N._3 ? k(N._1, N._2, !0) : N,
                n,
                e,
                (P, E) => r(k(P._1, P._2, p), E),
                (P, E) => n((Q) => {
                  const W = t._3 && !P._3 ? k(P._1, P._2, !0) : P;
                  return n((B) => $c(
                    W,
                    n,
                    e,
                    r,
                    (H, rt) => n((ot) => {
                      const M = wt(wt(Bt((A) => A === "{"))("'{'"))("'{'"), q = W._3 && !H._3 ? k(H._1, H._2, !0) : H;
                      return n((A) => M(
                        q,
                        n,
                        e,
                        r,
                        (R, X) => n((L) => o(
                          q._3 && !R._3 ? k(R._1, R._2, !0) : R,
                          kr("GroupSeq", [])
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
    return n((c) => n((l) => Be("seq")(
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
          return wt(Bt((y) => y === "{"))("'{'")(
            x,
            n,
            e,
            (y, J) => a(k(x._1, x._2, !1), J),
            (y, J) => n((N) => Dl(zl(oL))(x, n, e, a, o))
          );
        })
      )))
    )));
  });
}, rP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, l) => {
      const _ = c._3;
      return n((d) => _ ? r(c, l) : n((g) => {
        const p = t._3;
        return n((m) => Be("par")(
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
              (N, C) => n((S) => Il(
                y._3 && !N._3 ? k(N._1, N._2, !0) : N,
                n,
                e,
                (P, E) => r(k(P._1, P._2, p), E),
                (P, E) => n((Q) => {
                  const W = t._3 && !P._3 ? k(P._1, P._2, !0) : P;
                  return n((B) => $c(
                    W,
                    n,
                    e,
                    r,
                    (H, rt) => n((ot) => {
                      const M = wt(wt(Bt((A) => A === "{"))("'{'"))("'{'"), q = W._3 && !H._3 ? k(H._1, H._2, !0) : H;
                      return n((A) => M(
                        q,
                        n,
                        e,
                        r,
                        (R, X) => n((L) => o(
                          q._3 && !R._3 ? k(R._1, R._2, !0) : R,
                          kr("Par", [])
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
    return n((c) => n((l) => Be("par")(
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
          return wt(Bt((y) => y === "{"))("'{'")(
            x,
            n,
            e,
            (y, J) => a(k(x._1, x._2, !1), J),
            (y, J) => n((N) => Dl(zl(eL))(x, n, e, a, o))
          );
        })
      )))
    )));
  });
}, zl = (t) => {
  const n = Me(zm);
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
}, sf = (t) => (n) => (e, r, o, i, s) => r((u) => FE(t)(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const _ = Me(Bt(dE)), d = e._3 && !a._3 ? k(a._1, a._2, !0) : a;
    return r((g) => _(
      d,
      r,
      o,
      i,
      (p, m) => r((h) => {
        const $ = wt(wt(Bt((y) => y === "{"))("'{'"))("'{'"), x = d._3 && !p._3 ? k(p._1, p._2, !0) : p;
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
                const B = zl(rL), H = S._3 && !E._3 ? k(E._1, E._2, !0) : E;
                return r((rt) => B(
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
                        const z = wt(wt(Bt((K) => K === "}"))("'}'"))("closing '}'"), U = A._3 && !X._3 ? k(X._1, X._2, !0) : X;
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
                                { name: xE(vo(jt(Jn.foldr, m))), ops: M, kind: n }
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
)), oP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => ar("keyframe")("Drop the `keyframe` wrapper; Markgraf animates statements in order.")(
    k(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((_) => {
        if (l)
          return r(a, c);
        const d = t._1, g = t._2;
        return n((p) => sf("scene")(Na)(
          k(d, g, !1),
          n,
          e,
          (m, h) => {
            const $ = m._3;
            return n((x) => {
              if ($)
                return r(m, h);
              const y = t._1, J = t._2;
              return n((N) => sf("still")(Fl)(
                k(y, J, !1),
                n,
                e,
                (C, S) => {
                  const P = C._3;
                  return n((E) => P ? r(C, S) : sf("title")(nL)(t, n, e, r, o));
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
}, iP = (t) => (n) => (e) => {
  if (t === "AnimatedSurface")
    return { ...n, frames: Lt(n.frames)({ name: v, ops: e, kind: Na }) };
  if (t === "StillSurface")
    return { ...n, statements: Lt(n.statements)(e) };
  if (t === "SequenceSurface")
    return { ...n, statements: Lt(n.statements)(e) };
  f();
}, sP = (t) => (n) => (e) => {
  if (e.tag === "TopFrame") {
    const r = Gm(t)(n);
    return {
      ...r,
      frames: Lt(r.frames)((() => {
        if (t === "AnimatedSurface")
          return e._1;
        if (t === "StillSurface")
          return {
            ...e._1,
            kind: e._1.kind === "AnimatedKeyframe" ? Fl : e._1.kind === "StepMarker" ? wm : e._1.kind
          };
        if (t === "SequenceSurface")
          return e._1;
        f();
      })())
    };
  }
  if (e.tag === "TopStatement")
    return iP(t)(n)(e._1);
  if (e.tag === "TopInside")
    return n;
  f();
}, uP = (t) => {
  const n = T(sP(t))(NE);
  return (e) => Gm(t)(n(e)).frames;
}, aP = (t) => QL.defer((n) => {
  const e = XE(t);
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => DE(t)(
      k(a, c, !1),
      o,
      i,
      (_, d) => {
        const g = _._3;
        return o((p) => {
          if (g)
            return s(_, d);
          const m = r._1, h = r._2;
          return o(($) => o((x) => cP(
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
                  (W, B) => {
                    const H = W._3;
                    return o((rt) => {
                      if (H)
                        return s(W, B);
                      const ot = r._1, M = r._2;
                      return o((q) => o((A) => oP(
                        k(ot, M, !1),
                        o,
                        i,
                        (R, X) => {
                          const L = R._3;
                          return o((I) => L ? s(R, X) : o((z) => zm(r, o, i, s, (U, K) => o((O) => u(U, Pu("TopStatement", K))))));
                        },
                        (R, X) => o((L) => u(R, Pu("TopFrame", X)))
                      )));
                    });
                  },
                  (W, B) => o((H) => u(W, Pu("TopFrame", B)))
                )));
              });
            },
            (y, J) => o((N) => u(y, Pu("TopInside", J)))
          )));
        });
      },
      u
    ));
  };
}), cP = (t, n, e, r, o) => n((i) => Be("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = wt(Jo)("space after 'inside'"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = wt(Kn)("node identifier after 'inside'"), h = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
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
                return n((W) => Dl(Hm)(
                  Q,
                  n,
                  e,
                  r,
                  (B, H) => n((rt) => {
                    const ot = Q._3 && !B._3 ? k(B._1, B._2, !0) : B;
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
)), Hm = (t, n, e, r, o) => n((i) => QE(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((l) => {
      const _ = (p, m) => n((h) => {
        const $ = Me(aP(u)), x = c._3 && !p._3 ? k(p._1, p._2, !0) : p;
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
                frames: uP(u)(S),
                interiors: bt((P) => {
                  if (P.tag === "TopInside")
                    return w("Just", P._1);
                  if (P.tag === "TopFrame" || P.tag === "TopStatement")
                    return v;
                  f();
                })(S)
              }
            );
          })
        ));
      }), d = c._1, g = c._2;
      return n((p) => n((m) => BE(
        k(d, g, !1),
        n,
        e,
        (h, $) => {
          const x = h._3;
          return n((y) => x ? r(h, $) : _(c, v));
        },
        (h, $) => n((x) => _(h, w("Just", $)))
      )));
    });
  })
)), fP = /* @__PURE__ */ (() => {
  const t = wt((n, e, r, o, i) => e((s) => e((u) => Le(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return uu(
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
      return Hm(
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
})(), lP = (t) => {
  const n = YL(t)(fP);
  if (n.tag === "Left")
    return Et("Left", { msg: yE(n._1._1), line: n._1._2.line, column: n._1._2.column, endLine: n._1._2.line, endColumn: n._1._2.column + 1 | 0 });
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, Hl = (t) => {
  const n = lP(t);
  if (n.tag === "Left")
    return Et("Left", n._1.msg);
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, gP = () => ({ tag: "ParFrag" }), Qm = (t) => t, _P = /* @__PURE__ */ Qm("Sync"), dP = /* @__PURE__ */ Qm("SelfMsg"), hP = /* @__PURE__ */ gP(), Co = /* @__PURE__ */ ym(Fe), Vi = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ve = /* @__PURE__ */ fi(Fe), Ur = Co.state((t) => b(t, t)), e1 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, zu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ri = /* @__PURE__ */ li(Fe), pP = (t) => (n) => T((e) => (r) => fi(Fe).bind(e)((o) => t(o)(r)))(li(Fe).pure(n)), e0 = /* @__PURE__ */ Fr(ri)(Yt), mP = (t) => Co.state((n) => b(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: w("Just", t) };
    f();
  })()
)), $P = (t) => (n) => Co.state((e) => b(
  void 0,
  { ...e, lifelines: K1(F)((r) => w("Just", { ...r, label: n }))(t)(e.lifelines) }
)), yP = (t) => (n) => (e) => {
  const r = Vi(e)(t.lifelines);
  return Vi(n)(t.lifelines).tag === "Nothing" ? r.tag === "Nothing" ? n + ", " + e : n : r.tag === "Nothing" ? e : "";
}, xP = { lifelines: G, lifelineOrder: [], messages: [], fragments: [], frameEndRows: [], row: 0, error: v }, vP = (t) => (n) => (e) => Ve.bind(Ur)((r) => {
  const o = Vi(t)(r.lifelines), i = Vi(n)(r.lifelines);
  if (o.tag === "Just" && i.tag === "Just") {
    const s = {
      ...r,
      messages: [
        { fromCol: o._1.column, toCol: i._1.column, labels: e, row: r.row, kind: t === n ? dP : _P },
        ...r.messages
      ],
      row: r.row + 1 | 0
    };
    return Co.state((u) => b(void 0, s));
  }
  return mP("token references unknown node: " + yP(r)(t)(n));
}), wP = (t) => Co.state((n) => b(
  void 0,
  { ...n, lifelines: K1(F)((e) => w("Just", { ...e, destroyedAt: w("Just", n.row) }))(t)(n.lifelines) }
)), TP = (t) => (n) => {
  const e = n.lifelineOrder.length, r = Ht((o) => v, (o) => (i) => w("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return { fromCol: 0, toCol: zu(0)(n.lifelineOrder.length - 1 | 0) };
  if (r.tag === "Just")
    return T((o) => (i) => ({ fromCol: e1(o.fromCol)(e1(i.fromCol)(i.toCol)), toCol: zu(o.toCol)(zu(i.fromCol)(i.toCol)) }))({ fromCol: e, toCol: 0 })(t);
  f();
}, NP = (t) => ({
  lifelines: bt((n) => Vi(n)(t.lifelines))(t.lifelineOrder),
  messages: fn(t.messages),
  fragments: fn(t.fragments),
  frameEndRows: t.frameEndRows,
  totalRows: t.row
}), JP = (t) => (n) => Ve.bind(Ur)((e) => {
  const r = Vi(t)(e.lifelines);
  if (r.tag === "Just")
    return ri.pure();
  if (r.tag === "Nothing") {
    const o = {
      ...e,
      lifelines: tt(F)(t)({ id: t, label: n, column: e.lifelineOrder.length, createdAt: e.row, destroyedAt: v })(e.lifelines),
      lifelineOrder: Lt(e.lifelineOrder)(t),
      row: e.row > 0 || e.messages.length !== 0 ? e.row + 1 | 0 : e.row
    };
    return Co.state((i) => b(void 0, o));
  }
  f();
}), CP = (t) => {
  if (t.tag === "AddNode")
    return JP(t._1.id)(t._1.label);
  if (t.tag === "DelNode")
    return wP(t._1.id);
  if (t.tag === "ModNode") {
    if (t._1.label.tag === "Just")
      return $P(t._1.id)(t._1.label._1);
    if (t._1.label.tag === "Nothing")
      return ri.pure();
    f();
  }
  return t.tag === "Token" ? vP(t._1.from)(t._1.to)(t._1.labels) : ri.pure();
}, bP = (t) => Ve.bind(Ur)((n) => {
  const e = n.row;
  return Ve.bind(pP((r) => (o) => Ve.bind(Ur)((i) => {
    const s = r.childMessages.length === 0 ? r.dividers : [i.row, ...r.dividers], u = i.messages;
    return Ve.bind(Ca(o))(() => Ve.bind(Ur)((a) => ri.pure({
      dividers: s,
      childMessages: [
        ...r.childMessages,
        ...(() => {
          const c = a.messages.length - u.length | 0;
          return c < 1 ? [] : At(0, c, a.messages);
        })()
      ]
    })));
  }))({ dividers: [], childMessages: [] })(t))((r) => Ve.bind(Ur)((o) => {
    const i = TP(r.childMessages)(o), s = {
      kind: hP,
      label: "par",
      fromRow: e,
      toRow: zu(o.row)(e + 1 | 0),
      fromCol: i.fromCol,
      toCol: i.toCol,
      regionDividers: fn(r.dividers)
    }, u = Co.state((a) => b(void 0, { ...a, fragments: [s, ...a.fragments] }));
    return r.childMessages.length >= 2 ? u : ri.pure();
  }));
}), Ca = (t) => {
  if (t.tag === "Leaf")
    return CP(t._1.op);
  if (t.tag === "Seq" || t.tag === "GroupSeq")
    return e0(Ca)(t._1);
  if (t.tag === "Par")
    return bP(t._1);
  f();
}, kP = (t) => {
  const n = Ve.bind(e0((e) => Ve.bind(Ur)((r) => Ve.bind(Ca(e.ops))(() => Ve.bind(Ur)((o) => {
    const i = Co.state((s) => b(void 0, { ...s, frameEndRows: Lt(s.frameEndRows)(s.row - 1 | 0) }));
    return (o.messages.length - r.messages.length | 0) > 0 ? i : ri.pure();
  }))))(t.frames))(() => Ur)(xP)._1;
  if (n.error.tag === "Just")
    return Et("Left", n.error._1);
  if (n.error.tag === "Nothing")
    return Et("Right", NP(n));
  f();
}, SP = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, LP = { padding: 24, headerHeight: 36, headerWidth: 120, columnSpacing: 160, rowHeight: 36, topGap: 24, bottomGap: 24 }, EP = (t) => {
  const n = 84 + V(SP(1)(t.totalRows)) * 36, e = Xt((r) => (o) => ({ lifeline: o, x: 84 + V(r) * 160 }))(t.lifelines);
  return {
    metrics: LP,
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
}, PP = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Om = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Wm = (t) => (e) => {
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
}, qm = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, AP = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, RP = /* @__PURE__ */ T((t) => (n) => tt(it)(n)()(t))(G), FP = { r: 255, g: 255, b: 255, a: 255 }, wc = { r: 26, g: 26, b: 26, a: 255 }, GP = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, IP = { r: 232, g: 232, b: 232, a: 255 }, ba = (t) => (n) => (e) => (r) => (o) => [
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
  ...Ws
], r1 = (t) => (n) => (e) => ({ ...e, stack: Lt(e.stack)(t), openedAt: tt(it)(t)(n)(e.openedAt) }), Tc = (t) => (n) => {
  const e = n.stack.length - 1 | 0;
  if (e >= 0 && e < n.stack.length) {
    const r = PP(n.stack[e])(n.openedAt), o = (() => {
      if (r.tag === "Nothing")
        return t;
      if (r.tag === "Just")
        return r._1;
      f();
    })();
    return {
      ...n,
      stack: n.stack.length === 0 ? [] : At(0, n.stack.length - 1 | 0, n.stack),
      openedAt: Hi(it)(n.stack[e])(n.openedAt),
      spans: Lt(n.spans)({ col: n.stack[e], fromRow: o, toRow: Om(o)(t) })
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
}, Xm = (t) => (n) => {
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
}, BP = (t) => (n) => {
  const e = Ne(ho)(n.fromCol)(t.stack) ? o1((() => {
    const r = n.fromCol;
    return (o) => r === o;
  })())(n.row - 1 | 0)(t) : r1(n.fromCol)(n.row)(Xm(n.row - 1 | 0)(t));
  if (Ne(ho)(n.toCol)(e.stack)) {
    const r = o1((() => {
      const o = n.toCol;
      return (i) => o === i;
    })())(n.row - 1 | 0)(Tc(n.row)(e));
    return { ...r, returnRows: tt(it)(n.row)()(r.returnRows) };
  }
  return r1(n.toCol)(n.row)(e);
}, DP = (t) => (n) => (e) => {
  const r = BP(n)(e);
  return Wm(e.row)(t) ? Xm(e.row)(r) : r;
}, Hu = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: nu, lineCap: _r }, Ym = { r: 26, g: 26, b: 26, a: 255 }, zP = { color: { r: 130, g: 130, b: 130, a: 255 }, width: 1, lineJoin: nu, lineCap: qe }, i1 = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: nu, lineCap: qe }, HP = { color: { r: 244, g: 244, b: 244, a: 255 }, flat: !0 }, s1 = (t) => (n) => (e) => En((r) => r.col === n && r.fromRow <= e && e <= r.toRow, t), u1 = { color: { r: 90, g: 90, b: 90, a: 255 }, width: 1, lineJoin: nu, lineCap: qe }, QP = { stack: [], openedAt: G, spans: [], returnRows: G }, OP = { color: { r: 150, g: 150, b: 150, a: 255 }, width: 1, lineJoin: nu, lineCap: qe }, WP = (t) => (n) => (e) => (r) => (o) => {
  const i = n.bodyTop + (V(o) + 0.5) * n.metrics.rowHeight - n.metrics.rowHeight / 2;
  return t.strokePath([1, e, i, 2, r, i])(OP);
}, qP = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ji(n.Applicative0())(Yt);
  return (o) => (i) => {
    const s = o.bodyTop + (V(i.fromRow) + 0.5) * o.metrics.rowHeight - o.metrics.rowHeight / 2 - 6, u = i.fromCol >= 0 && i.fromCol < o.columns.length ? o.columns[i.fromCol].x - 16 : o.metrics.padding - 16, a = [1, u, s, 2, u + 38, s, 2, u + 32, s + 14, 2, u, s + 14, ...Ws], c = i.toCol >= 0 && i.toCol < o.columns.length ? o.columns[i.toCol].x + 16 : o.metrics.padding + 16, l = o.bodyTop + (V(Om(i.toRow)(i.fromRow + 1 | 0) - 1 | 0) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight / 2 + 6;
    return e.bind(t.strokePath([1, u, s, 2, c, s, 2, c, l, 2, u, l, ...Ws])(u1))(() => e.bind(t.fillStrokePath(a)(GP)(u1))(() => e.bind(t.drawText({
      x: u + 6,
      y: s + 7,
      content: "par",
      font: { family: "Inter", size: 11, weight: 700 },
      color: wc,
      align: Yi,
      baseline: We
    }))(() => r(i.regionDividers)(WP(t)(o)(u)(c)))));
  };
}, Mm = (t) => (n) => t >= n ? [] : [b(t, qm(n)(t + 6)), ...Mm(t + 10)(n)], XP = (t) => (n) => {
  if (n <= t)
    return [];
  const e = (r) => r >= n ? [] : [b(r, qm(n)(r + 6)), ...e(r + 10)];
  return e(t);
}, YP = (t) => {
  const n = ji(t.Monad0().Applicative0())(Yt);
  return (e) => (r) => n(XP(e.headerTop + e.metrics.headerHeight + V(r.lifeline.createdAt) * e.metrics.rowHeight + 4)((() => {
    if (r.lifeline.destroyedAt.tag === "Just")
      return e.bodyTop + (V(r.lifeline.destroyedAt._1) + 0.5) * e.metrics.rowHeight;
    if (r.lifeline.destroyedAt.tag === "Nothing")
      return e.bodyBottom;
    f();
  })()))((o) => t.strokePath([1, r.x, o._1, 2, r.x, o._2])(zP));
}, Um = (t) => (n) => t <= n ? [] : [b(t, AP(n)(t - 6)), ...Um(t - 6 - 4)(n)], MP = (t) => (n) => t === n ? [] : t < n ? Mm(t)(n) : Um(t)(n), UP = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.headerTop + V(r.lifeline.createdAt) * e.metrics.rowHeight, i = e.metrics.headerWidth / 2, s = o + e.metrics.headerHeight, u = ba(r.x - i)(o)(r.x + i)(s)(6);
    return n.bind(t.fillStrokePath(ba(r.x - i)(o + 5)(r.x + i)(s + 5)(6))({ color: IP, flat: !0 })(i1))(() => n.bind(t.fillStrokePath(u)(HP)(i1))(() => t.drawText({
      x: r.x,
      y: o + e.metrics.headerHeight / 2,
      content: r.lifeline.label,
      font: { family: "Inter", size: 14, weight: 600 },
      color: wc,
      align: ro,
      baseline: We
    })));
  };
}, KP = (t) => (n) => {
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
}, VP = (t) => KP((() => {
  const n = t.diagram.messages.length - 1 | 0;
  return n >= 0 && n < t.diagram.messages.length ? t.diagram.messages[n].row : 0;
})())(T(DP(RP(t.diagram.frameEndRows)))(QP)(ht(
  (n) => n.kind === "Sync" || n.kind !== "SelfMsg",
  t.diagram.messages
))), jP = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.bodyTop + (V(r.row) + 0.5) * e.metrics.rowHeight, i = r.fromCol >= 0 && r.fromCol < e.columns.length ? e.columns[r.fromCol].x : e.metrics.padding, s = o - e.metrics.rowHeight * 0.3, u = i + 36, a = o + e.metrics.rowHeight * 0.3, c = i + 10, l = [1, i, a, 2, c, a - 5, 2, c, a + 5, ...Ws];
    return n.bind(t.strokePath([1, i, s, 2, u, s, 2, u, a, 2, i, a])(Hu))(() => n.bind(t.fillPath(l)({
      color: Ym,
      flat: !0
    }))(() => t.drawText({
      x: i + 42,
      y: o,
      content: Ir(" ")(D(eo)(r.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: wc,
      align: Yi,
      baseline: We
    })));
  };
}, ZP = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ji(n.Applicative0())(Yt);
  return (o) => (i) => (s) => (u) => {
    const a = s ? o.bodyTop + (V(u.row) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight * 0.5 : o.bodyTop + (V(u.row) + 0.5) * o.metrics.rowHeight, c = u.toCol >= u.fromCol ? 1 : -1, l = (u.fromCol >= 0 && u.fromCol < o.columns.length ? o.columns[u.fromCol].x : o.metrics.padding) + (s1(i)(u.fromCol)(u.row) ? c * 6 : c * 0), _ = (u.toCol >= 0 && u.toCol < o.columns.length ? o.columns[u.toCol].x : o.metrics.padding) - (s1(i)(u.toCol)(u.row) ? c * 6 : c * 0), d = _ - c * 10, g = s ? t.strokePath([1, d, a - 5, 2, _, a, 2, d, a + 5])(Hu) : t.fillPath([1, _, a, 2, d, a - 5, 2, d, a + 5, ...Ws])({ color: Ym, flat: !0 });
    return e.bind(s ? r(MP(l)(_))((p) => t.strokePath([1, p._1, a, 2, p._2, a])(Hu)) : t.strokePath([1, l, a, 2, _, a])(Hu))(() => e.bind(g)(() => t.drawText({
      x: (l + _) / 2,
      y: a - 6,
      content: Ir(" ")(D(eo)(u.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: wc,
      align: ro,
      baseline: DC
    })));
  };
}, tA = (t) => {
  const n = jP(t), e = ZP(t);
  return (r) => (o) => (i) => (s) => {
    if (s.kind === "SelfMsg")
      return n(r)(s);
    if (s.kind === "Sync")
      return e(r)(o)(Wm(s.row)(i))(s);
    f();
  };
}, a1 = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.25, lineJoin: ie, lineCap: qe }, nA = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, eA = { color: { r: 252, g: 252, b: 252, a: 255 }, flat: !0 }, rA = (t) => (n) => (e) => {
  const r = e.col >= 0 && e.col < n.columns.length ? n.columns[e.col].x : n.metrics.padding, o = n.bodyTop + (V(e.fromRow) + 0.5) * n.metrics.rowHeight, i = n.bodyTop + (V(e.toRow) + 0.5) * n.metrics.rowHeight + n.metrics.rowHeight * 0.5, s = ba(r - 6)(o)(r + 6)(i)(3);
  return t.Monad0().Bind1().bind(t.fillStrokePath(ba(r - 6)(o + 5)(r + 6)(i + 5)(3))(nA)(a1))(() => t.fillStrokePath(s)(eA)(a1));
}, Km = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ji(n.Applicative0())(Yt), o = UP(t), i = YP(t), s = qP(t), u = tA(t);
  return (a) => {
    const c = VP(a);
    return e.bind(t.setViewport({ vx: 0, vy: 0, vw: a.width, vh: a.height }))(() => e.bind(t.clearBackground(FP))(() => e.bind(r(a.columns)(o(a)))(() => e.bind(r(a.columns)(i(a)))(() => e.bind(r(c.spans)(rA(t)(a)))(() => e.bind(r(a.diagram.fragments)(s(a)))(() => r(a.diagram.messages)(u(a)(c.spans)(c.returnRows))))))));
  };
}, oA = /* @__PURE__ */ Km(o3);
function iA(t, n, e, r) {
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
function uf(t) {
  return function() {
    return function(n) {
      return t(n)();
    };
  };
}
function af(t) {
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
function cf(t) {
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
const ka = function() {
  return window;
};
function sA(t) {
  return function() {
    return t.document;
  };
}
function r0(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
function uA(t) {
  return function(n) {
    return function() {
      return n.cancelAnimationFrame(t);
    };
  };
}
const Vm = (t) => t, Sa = (t) => () => {
  const n = t.getBoundingClientRect?.(), e = n?.width || t.clientWidth || 0, r = n?.height || t.clientHeight || 0;
  return { width: e, height: r };
}, jm = (t) => (n) => () => {
  let e = 0;
  const r = () => {
    e || (e = requestAnimationFrame(() => {
      e = 0, n();
    }));
  }, o = typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
  return o?.observe(t), window.addEventListener("resize", r), () => {
    e && cancelAnimationFrame(e), o?.disconnect(), window.removeEventListener("resize", r);
  };
}, Zm = () => window.devicePixelRatio || 1, aA = (t) => (n) => (e) => (r) => (o) => () => {
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
}, t$ = (t, n) => {
  n.innerHTML = t;
}, La = (t, n, e) => {
  t.style.setProperty(n, e);
}, Qu = (t) => (n) => t === n, c1 = (t, n) => ({ tag: t, _1: n }), n$ = (t) => t, e$ = (t, n, e) => ({ tag: t, _1: n, _2: e }), Qo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cA = /* @__PURE__ */ Km(gl), Ou = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, fA = /* @__PURE__ */ e$("AutoSize"), f1 = /* @__PURE__ */ n$("CanvasRenderer"), lA = /* @__PURE__ */ n$("SvgRenderer"), gA = (t) => (n) => {
  const e = t - n * V(dn(Oe(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, vi = (t) => T((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), l1 = (t) => (n) => {
  const e = Sn(t, v, qt);
  if (e.tag === "Just") {
    const r = Sn(e._1.stopAt, v, qt);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return n;
  f();
}, r$ = (t) => (n) => ({ ...n, state: { ...n.state, camera: t }, minis: D((e) => r$(t)(e))(n.minis) }), _A = (t) => (n) => (e) => {
  const r = To(e.rootLayout)(e.camera), o = Ae("data-mg-too-small")("0")(t);
  return () => (o(), Ae("data-mg-camera-vw")(Do(r.w))(t)(), Ae("data-mg-camera-vh")(Do(r.h))(t)(), Ae("data-mg-camera-zoom")(Do(e.camera.zoom))(t)(), Ae("data-mg-viewport-css-width")(Do(n.w))(t)(), Ae("data-mg-viewport-css-height")(Do(n.h))(t)());
}, dA = (t) => {
  const n = kP(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right")
    return Et("Right", EP(n._1));
  f();
}, hA = (t) => (n) => (e) => {
  if (n.tag === "FixedSize")
    return () => ({ w: n._1, h: n._2 });
  if (n.tag === "AutoSize") {
    const r = Sa(t);
    return () => {
      const o = r(), i = o.width <= 0 ? e.width : o.width;
      return { w: i, h: o.height <= 0 ? i * e.height / Qo(1)(e.width) : o.height };
    };
  }
  f();
}, pA = (t) => (n) => (e) => {
  const r = Ik(Wk(oA(e))), o = Ae("viewBox")(r.viewBox)(t);
  return () => (o(), Ae("preserveAspectRatio")("xMidYMid meet")(t)(), n.tag === "FixedSize" ? (Ae("width")(an(dn(Qe(n._1))))(t)(), Ae("height")(an(dn(Qe(n._2))))(t)()) : n.tag === "AutoSize" || f(), t$(r.body, t));
}, mA = (t) => (n) => (e) => {
  const r = Vm(t), o = hA(t)(n)(e);
  return () => {
    const i = o(), s = Zm(), u = i.w * s, a = i.h * s, c = j1(r)(), l = Z1(r)(), _ = za(r)(u);
    c !== u && _();
    const d = Ha(r)(a);
    l !== a && d(), n.tag === "FixedSize" ? (La(t, "width", an(dn(Qe(i.w))) + "px"), La(t, "height", an(dn(Qe(i.h))) + "px")) : n.tag === "AutoSize" || f();
    const g = Ks(r)();
    Hr(g)(), Ss(g)({ scaleX: s, scaleY: s })();
    const p = tp(g)({ width: i.w, height: i.h })();
    return cA(e)(p)(), Qr(g)();
  };
}, $A = (t) => (n) => (e) => (r) => {
  if (n === "CanvasRenderer")
    return mA(t)(e)(r);
  if (n === "SvgRenderer")
    return pA(t)(e)(r);
  f();
}, yA = (t) => (n) => (e) => (r) => () => {
  let o = !1, i = () => {
  }, s = [];
  const u = () => {
    const l = o, _ = $A(t)(n)(e)(r);
    if (!l)
      return _();
  }, a = { time: 0, keyframe: "sequence", playing: !1 };
  return u(), i = jm(t)(() => {
    u();
    const l = s;
    return vi((_) => _(a))(l)();
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
      s = Lt(s)(l), l(a)();
      const d = ws((g) => !Qu(g)(l));
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
}, o$ = () => O2() / 1e3, xA = (t) => (n) => {
  const e = Sn(t, v, qt);
  if (e.tag === "Just") {
    const r = Sn(e._1.loop, v, qt);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return n;
  f();
}, ff = (t) => (n) => {
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
}, vA = (t) => (n) => (e) => {
  const r = Lh(e);
  return () => {
    const o = r(), i = Eh(e)(), s = El(Va)(Ll)(e)(ic(o)(i)(e));
    if (s.tag === "Left")
      return Et("Left", "precompute failed");
    if (s.tag === "Right")
      return Et("Right", { schedule: s._1 });
    f();
  };
}, wA = (t) => (n) => (() => {
  const e = Sn(t, v, qt);
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
  const e = Sn(t, v, qt);
  if (e.tag === "Just") {
    const r = Sn(e._1.direction, v, qt);
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
}, TA = (t) => (n) => {
  const e = ht((o) => o.time <= n + 1e-4, t), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r].index : -1;
}, NA = (t) => (n) => {
  if (n.tag === "FixedSize") {
    const e = n._1 <= 0 || n._2 <= 0 ? v : w("Just", n._1 / n._2);
    return () => e;
  }
  if (n.tag === "AutoSize") {
    const e = Sa(t);
    return () => {
      const r = e();
      return r.width <= 0 || r.height <= 0 ? v : w("Just", r.width / r.height);
    };
  }
  f();
}, Au = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => () => {
  const _ = o$(), d = c.value;
  c.value = _;
  const g = d === 0 ? 0 : _ - d, p = (() => {
    if (e.tag === "FixedSize")
      return { w: e._1, h: e._2 };
    if (e.tag === "AutoSize") {
      const N = Sa(t)();
      return { w: N.width <= 0 ? 200 : N.width, h: N.height <= 0 ? 180 : N.height };
    }
    f();
  })();
  if (p.w < 200 || p.h < 180)
    return aA(t)(p.w)(p.h)(200)(180)();
  const m = gm({ widthPx: p.w, heightPx: p.h })(s), h = Id(m)(Ou(l)(m.totalDuration)), $ = i ? h : { ...h, levels: D((N) => ({ ...N, state: { ...N.state, frameTitle: "" } }))(h.levels) }, x = a.value, y = (() => {
    if (x.tag === "Nothing")
      return $.camera;
    if (x.tag === "Just")
      return Jd(s.cameraConfig.cameraDecay)(g)(x._1)($.camera);
    f();
  })();
  a.value = w("Just", y);
  const J = { ...$, camera: y, levels: D(r$(y))($.levels) };
  if (_A(t)(p)(J)(), n === "CanvasRenderer") {
    const N = Vm(t), C = ss({ padding: 8, outputAspect: v })(J), S = (() => {
      if (e.tag === "FixedSize")
        return { w: e._1, h: e._2 };
      if (e.tag === "AutoSize") {
        const A = Sa(t)();
        return {
          w: A.width,
          h: A.height <= 0 ? C.vw <= 0 ? A.width : A.width * C.vh / C.vw : A.height
        };
      }
      f();
    })(), P = Zm(), E = S.w * P, Q = S.h * P, W = j1(N)(), B = Z1(N)(), H = za(N)(E);
    W !== E && H();
    const rt = Ha(N)(Q);
    B !== Q && rt(), e.tag === "FixedSize" ? (La(t, "width", an(dn(Qe(S.w))) + "px"), La(t, "height", an(dn(Qe(S.h))) + "px")) : e.tag === "AutoSize" || f();
    const ot = Ks(N)();
    Hr(ot)(), Ss(ot)({ scaleX: P, scaleY: P })();
    const M = u.value, q = kk(r)(o)(ot)({ width: S.w, height: S.h })(J)(g)(M)();
    return u.value = q, Qr(ot)();
  }
  if (n === "SvgRenderer") {
    const N = u.value, C = NA(t)(e)(), S = cS(C)(r)(o)(J)(g)(N);
    return u.value = S.springs, Ae("viewBox")(S.parts.viewBox)(t)(), Ae("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (Ae("width")(an(dn(Qe(e._1))))(t)(), Ae("height")(an(dn(Qe(e._2))))(t)()) : e.tag === "AutoSize" || f(), t$(S.parts.body, t);
  }
  f();
}, JA = (t) => {
  const n = mc(t)(hc)._1;
  if (n.tag === "Left")
    return Et("Left", n._1.msg);
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, CA = (t) => {
  const n = Hl(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right") {
    if (n._1.mode === "SequenceSurface") {
      const r = dA(n._1);
      if (r.tag === "Left")
        return Et("Left", r._1);
      if (r.tag === "Right")
        return Et("Right", c1("LoadedSequence", r._1));
      f();
    }
    const e = JA(n._1);
    if (e.tag === "Left")
      return Et("Left", e._1);
    if (e.tag === "Right")
      return Et("Right", c1("LoadedAnimation", e._1));
  }
  f();
}, _1 = (t) => (n) => (e) => (r) => {
  const o = e + 1e-4 >= n ? ht((s) => s.time > n + 1e-4 && s.time <= e + 1e-4, t) : [...ht((s) => s.time > n + 1e-4, t), ...ht((s) => s.time <= e + 1e-4, t)], i = e <= n + 1e-4 ? fn(ht((s) => s.time < n - 1e-4 && s.time >= e - 1e-4, t)) : [...fn(ht((s) => s.time < n - 1e-4, t)), ...fn(ht((s) => s.time >= e - 1e-4, t))];
  return (() => {
    const s = e - n;
    return s < 0 ? -s <= 1e-4 : s <= 1e-4;
  })() ? [] : r >= 0 ? o : i;
}, bA = (t) => (n) => (e) => (r) => en((o) => En((i) => i === o.kind, n) && (o.time > e + 1e-4 || (() => {
  const i = o.time - e;
  return (i < 0 ? -i <= 1e-4 : i <= 1e-4) && o.index > r;
})()))(t), kA = (t) => (n) => (e) => (r) => {
  const o = ht(
    (s) => En((u) => u === s.kind, n) && (s.time < e - 1e-4 || (() => {
      const u = s.time - e;
      return (u < 0 ? -u <= 1e-4 : u <= 1e-4) && s.index < r;
    })()),
    t
  ), i = o.length - 1 | 0;
  return i >= 0 && i < o.length ? w("Just", o[i]) : v;
}, lf = (t) => (n) => (e) => {
  const r = Sn(n, v, qt);
  if (r.tag === "Just") {
    const o = Sn(r._1.speed, v, qt);
    if (o.tag === "Just") {
      const i = Qo(1e-4)(o._1 < 0 ? -o._1 : o._1);
      return () => t.value = i;
    }
    if (o.tag === "Nothing") {
      const i = Sn(r._1.duration, v, qt);
      if (i.tag === "Just" && e.tag === "Just") {
        const s = e._1 / i._1, u = Qo(1e-4)(s < 0 ? -s : s);
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
}, SA = (t) => (n) => (e) => (r) => {
  const o = r.time - n, i = o < 0 ? -o <= 1e-4 : o <= 1e-4, s = r.time < n - 1e-4 || i && r.index < e, u = s ? -1 : 1, a = r.time > n + 1e-4 || i && r.index > e, c = Sn(t, v, qt);
  if (c.tag === "Just") {
    const l = Sn(c._1.direction, v, qt);
    if (l.tag === "Just") {
      if (l._1 === "forward")
        return i || a ? w("Just", 1) : v;
      if (l._1 === "backward" || l._1 === "reverse")
        return i || s ? w("Just", -1) : v;
    }
    return w("Just", u);
  }
  if (c.tag === "Nothing")
    return w("Just", u);
  f();
}, LA = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  const u = { value: 1 };
  let a = 1, c = !0, l = v, _ = -1, d = !0, g = !1, p = 0, m = 0;
  const h = { value: G }, $ = { value: v }, x = { value: 0 };
  let y = !1, J = () => {
  }, N = [], C = [], S = [];
  Au(t)(e)(r)(o)(i)(s)(n)(h)($)(x)(0)();
  const P = (L) => {
    const I = L.index;
    return () => {
      _ = I;
      const z = C;
      return vi((U) => U(L))(z)();
    };
  }, E = (L) => () => {
    const I = N, z = d, U = { time: L, keyframe: ff(n)(L), playing: z };
    return vi((K) => K(U))(I)();
  }, Q = () => (d = !1, l = v, E(p)()), W = (L) => () => (p = L, Au(t)(e)(r)(o)(i)(s)(n)(h)($)(x)(L)(), E(L)()), B = (L) => {
    const I = Qo(0)(Ou(n.totalDuration)(L));
    return () => (p = I, _ = TA(n.cues)(I), m = 0, l = v, $.value = v, Au(t)(e)(r)(o)(i)(s)(n)(h)($)(x)(I)(), E(I)());
  }, H = (L, I, z, U, K) => () => {
    d = !1, l = v;
    const O = p;
    E(O)();
    const Z = { reason: L, direction: I < 0 ? "backward" : "forward", targetId: z, targetStep: U, reached: K, time: O }, et = S;
    return vi((nt) => nt(Z))(et)();
  }, rt = () => {
    if (!y && (g = !1, d)) {
      const z = o$(), U = m;
      m = z;
      const K = u.value, O = a, Z = c, et = l, nt = p, gt = U === 0 ? nt + 0 * K * O : nt + (z - U) * K * O;
      if (et.tag === "Just") {
        const ct = O >= 0 ? et._1.cue.time >= nt - 1e-4 && et._1.cue.time <= gt + 1e-4 : et._1.cue.time <= nt + 1e-4 && et._1.cue.time >= gt - 1e-4, $t = ct ? et._1.cue.time : Qo(0)(Ou(n.totalDuration)(gt));
        (O >= 0 ? $t + 1e-4 < nt : $t > nt + 1e-4) && ($.value = v), W($t)(), vi((Rt) => P(Rt))(_1(n.cues)(nt)($t)(O))();
        const Pt = H("target", O, et._1.targetId, et._1.targetStep, !0);
        return ct && Pt(), ct ? void 0 : ot();
      }
      if (et.tag === "Nothing") {
        const ct = O >= 0 ? n.totalDuration : 0, $t = !Z && (O >= 0 ? ct >= nt - 1e-4 && ct <= gt + 1e-4 : ct <= nt + 1e-4 && ct >= gt - 1e-4), Pt = Z ? gA(gt)(n.totalDuration + 0.8) : Qo(0)(Ou(n.totalDuration)(gt));
        (O >= 0 ? Pt + 1e-4 < nt : Pt > nt + 1e-4) && ($.value = v), W(Pt)(), vi((rn) => P(rn))(_1(n.cues)(nt)(Pt)(O))();
        const Rt = H("boundary", O, "", "", !0);
        return $t && Rt(), $t ? void 0 : ot();
      }
      f();
    }
  }, ot = () => {
    if (!y && !g) {
      g = !0;
      const z = ka();
      r0(rt)(z)();
    }
  }, M = () => (m = 0, d = !0, ot()), q = () => (a = 1, c = !0, l = v, M(), E(p)()), A = (L, I) => () => {
    const z = p;
    return a = L, c = !1, l = v, lf(u)(I)(w("Just", L >= 0 ? n.totalDuration - z : z))(), M();
  }, R = (L, I) => () => {
    const z = p, U = _, K = SA(I)(z)(U)(L);
    if (K.tag === "Nothing")
      return A(g1(I)(1), I)();
    if (K.tag === "Just") {
      const O = L.time - z, Z = O < 0 ? -O : O;
      return a = K._1, c = !1, l = w("Just", { cue: L, direction: K._1, targetId: L.id, targetStep: L.name }), lf(u)(I)(w("Just", Z))(), Z <= 1e-4 ? (B(L.time)(), P(L)(), H("target", K._1, L.id, L.name, !0)()) : M();
    }
    f();
  };
  return J = jm(t)(() => {
    if (!y) {
      const I = p;
      return Au(t)(e)(r)(o)(i)(s)(n)(h)($)(x)(I)(), E(I)();
    }
  })(), M(), {
    play: q,
    playWith: (L) => {
      const I = g1(L)(1);
      return () => (a = I, c = xA(L)(!1), l = v, lf(u)(L)(v)(), M(), E(p)());
    },
    pause: Q,
    toggle: () => d ? Q() : q(),
    seek: (L) => B(L),
    seekCue: (L) => {
      const I = en((z) => z.id === L)(n.cues);
      if (I.tag === "Nothing")
        return () => {
        };
      if (I.tag === "Just") {
        const z = I._1, U = B(z.time);
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
        const z = I._1, U = B(z.time);
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
      const I = p, z = _, U = bA(n.cues)(l1(L)(["step"]))(I)(z);
      if (U.tag === "Nothing")
        return A(1, L)();
      if (U.tag === "Just")
        return R(U._1, L)();
      f();
    },
    playPrevious: (L) => () => {
      const I = p, z = _, U = kA(n.cues)(l1(L)(["step"]))(I)(z);
      if (U.tag === "Nothing")
        return A(-1, L)();
      if (U.tag === "Just")
        return R(U._1, wA(L)(-1))();
      f();
    },
    setSpeed: (L) => {
      const I = Qo(1e-4)(L < 0 ? -L : L);
      return () => u.value = I;
    },
    currentTime: () => p,
    currentKeyframe: () => {
      const L = p;
      return ff(n)(L);
    },
    isPlaying: () => d,
    duration: n.totalDuration,
    cues: n.cues,
    steps: ht((L) => L.kind === "step", n.cues),
    subscribe: (L) => () => {
      N = Lt(N)(L);
      const z = p, U = d;
      L({ time: z, keyframe: ff(n)(z), playing: U })();
      const K = ws((O) => !Qu(O)(L));
      return () => {
        N = K(N);
      };
    },
    subscribeCue: (L) => () => {
      C = Lt(C)(L);
      const z = ws((U) => !Qu(U)(L));
      return () => {
        C = z(C);
      };
    },
    subscribeComplete: (L) => () => {
      S = Lt(S)(L);
      const z = ws((U) => !Qu(U)(L));
      return () => {
        S = z(S);
      };
    },
    destroy: () => (y = !0, J())
  };
}, EA = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = CA(n);
  if (u.tag === "Left")
    return () => Et("Left", u._1);
  if (u.tag === "Right") {
    if (u._1.tag === "LoadedAnimation") {
      const a = vA()(r)(u._1._1);
      return () => {
        const c = a();
        if (c.tag === "Left")
          return Et("Left", c._1);
        if (c.tag === "Right") {
          const l = LA(t)(c._1.schedule)(e)(r)(o)(i)(s)();
          return Et("Right", l);
        }
        f();
      };
    }
    if (u._1.tag === "LoadedSequence") {
      const a = yA(t)(e)(r)(u._1._1);
      return () => {
        const c = a();
        return Et("Right", c);
      };
    }
  }
  f();
}, Ql = () => document.createElement("canvas"), PA = (t, n) => {
  t.letterSpacing = n;
}, AA = (t, n) => {
  t.fontKerning = n;
}, i$ = /* @__PURE__ */ Vs(PA), Ol = /* @__PURE__ */ Vs(AA), RA = { alpha: !0, premultipliedAlpha: !0, antialias: !0, depth: !1 }, FA = (t) => t.getContext("webgl", RA), GA = (t, n, e) => {
  const r = (i, s) => {
    const u = t.createShader(i);
    return t.shaderSource(u, s), t.compileShader(u), t.getShaderParameter(u, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(u)), u;
  }, o = t.createProgram();
  return t.attachShader(o, r(t.VERTEX_SHADER, n)), t.attachShader(o, r(t.FRAGMENT_SHADER, e)), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || console.error(t.getProgramInfoLog(o)), t.useProgram(o), o;
}, IA = (t, n) => {
  const e = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW);
  const r = t.getAttribLocation(n, "position");
  t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0);
}, BA = (t, n) => t.getExtension(n), DA = (t, n, e) => t.getUniformLocation(n, e), zA = (t, n, e) => t.uniform1f(n, e), HA = (t, n, e, r) => t.uniform2f(n, e, r), QA = (t, n, e) => t.uniform1i(n, e), OA = (t, n, e) => t.uniform4fv(n, new Float32Array(e)), WA = (t, n, e) => t.uniform2fv(n, new Float32Array(e)), qA = (t, n, e) => t.uniform1fv(n, new Float32Array(e)), XA = (t) => t.createTexture(), YA = (t, n, e, r) => {
  t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, n), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
}, MA = (t, n, e, r) => {
  (n.width !== e || n.height !== r) && (n.width = e, n.height = r), t.viewport(0, 0, e, r);
}, UA = (t) => {
  t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);
}, KA = (t) => t.drawArrays(t.TRIANGLE_STRIP, 0, 4), VA = (t) => ({ width: t.clientWidth, height: t.clientHeight }), jA = () => window.devicePixelRatio, d1 = () => performance.now(), Ea = /* @__PURE__ */ I0(YA), sn = /* @__PURE__ */ es(DA), ZA = /* @__PURE__ */ es(OA), ds = (t) => (n) => {
  const e = ZA(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, tR = /* @__PURE__ */ es(WA), hs = (t) => (n) => {
  const e = tR(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, nR = /* @__PURE__ */ I0(HA), uo = /* @__PURE__ */ es(QA), eR = /* @__PURE__ */ es(qA), ur = (t) => (n) => {
  const e = eR(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, xr = /* @__PURE__ */ es(zA), rR = /* @__PURE__ */ Vs(IA), oR = /* @__PURE__ */ I0(MA), iR = /* @__PURE__ */ Vs(BA), sR = /* @__PURE__ */ ns(FA), uR = /* @__PURE__ */ ns(KA), h1 = /* @__PURE__ */ ns(XA), aR = /* @__PURE__ */ ns(VA), cR = /* @__PURE__ */ ns(UA), fR = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, s$ = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ye);
  return (n) => t(ge("IterNode", n, Xe));
})(), lR = /* @__PURE__ */ Us(ii), gR = (t) => bt((n) => n)(D((n) => {
  if (n.target.tag === "TokenWindow") {
    const e = fR(n.target._2)(t.layout.edges);
    if (e.tag === "Just")
      return w(
        "Just",
        {
          points: D((() => {
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
          labels: D(eo)(n.target._6),
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
})(t.windows)), _R = (t) => t.msg + " (line " + an(t.line) + ", cols " + an(t.column) + "-" + an(t.endColumn) + ")", dR = (t) => (n) => (e) => (r) => {
  const o = r._2.w * e.scale, i = r._2.h * e.scale;
  return {
    id: r._1,
    path: D(eo)(n),
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
}, hR = (t) => (n) => (e) => (r) => ({
  id: r._1,
  path: D(eo)(n),
  points: D((o) => ({ x: o.x * e.scale + e.tx, y: o.y * e.scale + e.ty }))(r._2),
  depth: t,
  arrowhead: (() => {
    const o = wo("conn:")(r._1);
    if (o.tag === "Just")
      return !1;
    if (o.tag === "Nothing")
      return !0;
    f();
  })()
}), pR = (t) => D(dR(t.path.length)(t.path)(t.placement))(s$(t.layout.nodes)), m1 = (t) => (n) => {
  const e = en((r) => lR(r.path)(n))(t);
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = hn(e._1.layout), o = r.w * e._1.placement.scale, i = r.h * e._1.placement.scale;
    return { x: r.x * e._1.placement.scale + e._1.placement.tx + o / 2, y: r.y * e._1.placement.scale + e._1.placement.ty + i / 2, w: o, h: i };
  }
  f();
}, mR = (t) => D(hR(t.path.length)(t.path)(t.placement))(s$(t.layout.edges)), $R = (t) => (n) => ({
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
}), yR = (t) => {
  const n = Hl(t), e = (() => {
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
    const o = mc(r)(hc)._1;
    if (o.tag === "Left")
      return Et("Left", _R(o._1));
    if (o.tag === "Right") {
      const i = El(Va)(Ll)(o._1)(ic(G)(G)(o._1));
      if (i.tag === "Left")
        return Et("Left", "schedule: " + an(i._1.length) + " error(s)");
      if (i.tag === "Right")
        return Et(
          "Right",
          {
            ok: !0,
            error: "",
            duration: i._1.totalDuration,
            nodes: Nt(i._1.segments)(pR),
            edges: Nt(i._1.segments)(mR),
            tokens: Nt(i._1.segments)(gR),
            dives: D($R(i._1.segments))(i._1.dives)
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
}, lo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xR = (t) => (n) => (e) => {
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
}, o0 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $1 = (t) => (n) => (e) => (r) => (o) => {
  const i = t + e + r, s = r * 2, u = lo(0)(n - t - 2 * e), a = i + u - s;
  return s <= u ? xR(i)(a)(o) : t + (n - t) / 2;
}, y1 = (t) => (n) => ({ ...n, cx: $1(t.minX)(t.maxX)(t.margin)(n.hw)(n.cx), cy: $1(t.minY)(t.maxY)(t.margin)(n.hh)(n.cy) }), vR = (t) => (n) => {
  const e = lo(0)(t.minY + t.margin - (n.cy - n.hh)) + lo(0)(n.cy + n.hh - (t.maxY - t.margin)), r = lo(0)(t.minX + t.margin - (n.cx - n.hw)) + lo(0)(n.cx + n.hw - (t.maxX - t.margin));
  return r * n.hh * 2 + e * n.hw * 2 + r * e;
}, wR = (t) => (n) => (e) => {
  const r = T(lo)(0)(D((o) => n.cx - n.hw < o.cx + o.hw + t && n.cx + n.hw > o.cx - o.hw - t && n.cy - n.hh < o.cy + o.hh + t && n.cy + n.hh > o.cy - o.hh - t ? o0((o.cx + o.hw + t - (n.cx - n.hw)) / 0.7071067811865476)((o.cy + o.hh + t - (n.cy - n.hh)) / 0.7071067811865476) : 0)(e));
  return { ...n, cx: n.cx + r * 0.7071067811865476, cy: n.cy + r * 0.7071067811865476 };
}, TR = (t) => (n) => {
  const e = o0(t.cx + t.hw)(n.cx + n.hw) - lo(t.cx - t.hw)(n.cx - n.hw), r = o0(t.cy + t.hh)(n.cy + n.hh) - lo(t.cy - t.hh)(n.cy - n.hh);
  return t.cx - t.hw < n.cx + n.hw && t.cx + t.hw > n.cx - n.hw && t.cy - t.hh < n.cy + n.hh && t.cy + t.hh > n.cy - n.hh ? e * r : 0;
}, NR = (t) => (n) => (e) => (r) => (o) => {
  const i = o.cy - o.dotY, s = o.cy - r.cy;
  return (() => {
    const u = o.cx - o.dotX, a = o.cx - r.cx;
    return 1e6 * vR(t)(o) + 1e4 * T((c) => (l) => c + TR(o)(l))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.cy < e.dotY ? 100 : 0);
}, JR = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = y1(t)(s);
    return { chip: u, score: NR(t)(n)(e)(r)(u) };
  }, i = Ht(
    (s) => v,
    (s) => (u) => w("Just", { head: s, tail: u }),
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
    return T((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).chip;
  f();
}, CR = (t) => (n) => (e) => (r) => T((o) => (i) => {
  const s = wR(n)(i.chip)(o.obstacles), u = s.cx - s.hw >= t.minX + t.margin && s.cx + s.hw <= t.maxX - t.margin && s.cy - s.hh >= t.minY + t.margin && s.cy + s.hh <= t.maxY - t.margin ? s : JR(t)(o.obstacles)(i.chip)(s), a = u.cx - i.chip.cx, c = u.cy - i.chip.cy;
  return {
    resolved: Lt(o.resolved)({ chip: u, glyphs: D((l) => ({ ...l, cx: l.cx + a, cy: l.cy + c }))(i.glyphs) }),
    obstacles: Lt(o.obstacles)({ cx: u.cx, cy: u.cy, hw: u.hw, hh: u.hh })
  };
})({ resolved: [], obstacles: e })(r).resolved, u$ = (t) => t, x1 = /* @__PURE__ */ u$("Visible"), bR = /* @__PURE__ */ u$("Hidden");
function kR(t) {
  return t.readyState;
}
const SR = (t) => () => {
  const n = kR(t);
  return n === "visible" ? x1 : n === "hidden" ? bR : x1;
}, LR = (t) => () => {
  const n = ka(), e = sA(n)(), r = ka();
  let o = !0;
  const i = () => {
    const _ = o, d = SR(e)();
    return t(_ && d === "Visible")();
  }, s = uf((_) => i)();
  af("visibilitychange")(s)(!1)(e)();
  const u = uf((_) => () => (o = !1, i()))();
  af("blur")(u)(!1)(r)();
  const a = cf("blur")(u)(!1)(r), c = uf((_) => () => (o = !0, i()))();
  af("focus")(c)(!1)(r)();
  const l = cf("focus")(c)(!1)(r);
  return () => (cf("visibilitychange")(s)(!1)(e)(), a(), l());
};
function ER(t, n, e) {
  return e.then(t, n);
}
function v1(t) {
  return Promise.resolve(t);
}
function PR(t, n, e) {
  return e instanceof Error ? t(e) : n;
}
const Wl = (t) => (n) => LC((e) => () => (ER(
  (r) => {
    const i = e(Et("Right", r))();
    return v1(i);
  },
  (r) => {
    const i = e(Et("Left", t(r)))();
    return v1(i);
  },
  n
), EC)), ql = (t) => {
  const n = PR(qt, v, t), e = gy(Fe)("String")(t), r = (() => {
    const o = (() => {
      if (e.tag === "Left")
        return v;
      if (e.tag === "Right")
        return w("Just", ug(e._1));
      f();
    })();
    return n.tag === "Nothing" ? o : n;
  })();
  if (r.tag === "Nothing")
    return ug("Promise failed, couldn't extract JS Error or String");
  if (r.tag === "Just")
    return r._1;
  f();
}, w1 = _e.createElement;
_e.Fragment;
function bo(t) {
  return (n) => Array.isArray(n.children) ? w1.apply(null, [t, n].concat(n.children)) : w1(t, n);
}
function AR(t) {
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
const Xl = /* @__PURE__ */ AR(bo), a$ = /* @__PURE__ */ Xl("div")(), c$ = /* @__PURE__ */ Xl("canvas")(), RR = (t, n) => {
  const e = _e.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
_e.memo;
_e.memo;
function T1(t, n) {
  const [e, r] = _e.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function ks(t, n, e) {
  const r = RR(t, n);
  _e.useEffect(e, [r]);
}
const re = _e.useRef;
function FR(t) {
  return t.current;
}
function GR(t, n) {
  t.current = n;
}
_e.useContext;
_e.useDebugValue;
_e.useId;
_e.useDeferredValue;
_e.useSyncExternalStore;
_e.useSyncExternalStore;
function Yl(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
_e.useEffectEvent || _e.experimental_useEffectEvent;
const wn = /* @__PURE__ */ Vs(GR), f$ = (t) => (n) => (e) => () => ks((r, o) => t.eq(r)(o), n, e), $n = /* @__PURE__ */ ns(FR), IR = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, l$ = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => IR
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, BR = () => typeof document < "u" && document.fonts ? document.fonts : null, Ml = (t) => {
  const n = BR();
  return n ? n.load(t).then(() => {
  }) : Promise.resolve();
}, DR = "attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }", zR = `
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
`, HR = (t, n, e, r, o) => {
  const i = (c) => {
    c.preventDefault(), n(c.deltaX)(c.deltaY)(c.ctrlKey ? 1 : 0)();
  }, s = (c) => {
    c.preventDefault(), e(c.clientX)(c.clientY)();
  }, u = (c) => r(c.clientX)(c.clientY)(c.buttons)(c.shiftKey ? 1 : 0)(), a = (c) => o(c.clientX)(c.clientY)();
  return t.addEventListener("wheel", i, { passive: !1 }), t.addEventListener("pointerdown", s), window.addEventListener("pointermove", u), window.addEventListener("pointerup", a), () => {
    t.removeEventListener("wheel", i), t.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", a);
  };
}, QR = /* @__PURE__ */ Us(ii), N1 = (t) => (e) => {
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, cn = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Pa = /* @__PURE__ */ T(fr)(0), OR = (t) => (n) => (e) => {
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
}, g$ = /* @__PURE__ */ (() => {
  const t = xo.traverse(oi);
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
        o = !1, i = w("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ce = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, WR = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, qR = (t) => T((n) => (e) => {
  if (n.tag === "Nothing")
    return w("Just", e);
  if (n.tag === "Just")
    return w("Just", t(n._1)(e) === "LT" ? n._1 : e);
  f();
})(v), XR = /* @__PURE__ */ uy(oi)(F0), YR = /* @__PURE__ */ Fr(oi)(Fa), C1 = (t) => (n) => (e) => {
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
}, MR = l$().pure, UR = /* @__PURE__ */ bo(a$), KR = /* @__PURE__ */ bo(c$), b1 = (t) => (n) => {
  const e = rr(t);
  if (e.tag === "Just") {
    const r = rr(e._1.init);
    if (r.tag === "Just")
      return w("Just", n(r._1.last)(e._1.last));
    if (r.tag === "Nothing")
      return v;
    f();
  }
  if (e.tag === "Nothing")
    return v;
  f();
}, k1 = (t) => (n) => (e) => ({ chip: { ...e.chip, cx: e.chip.cx + t, cy: e.chip.cy + n }, glyphs: D((r) => ({ ...r, cx: r.cx + t, cy: r.cy + n }))(e.glyphs) }), VR = /* @__PURE__ */ hy(HR), jR = (t) => ({ cx: t.x, cy: t.y, hw: t.hw, hh: t.hh }), _$ = (t) => (n) => {
  const e = (r) => [r, ...Nt(r.minis)((o) => e(o))];
  return en((r) => QR(D(eo)(r.segment.path))(t))(Nt(n.levels)(e));
}, ZR = (t) => (n) => {
  if (t.tag === "Nothing")
    return { alpha: 1, scale: 1 };
  if (t.tag === "Just") {
    const e = _$(n.path)(t._1);
    if (e.tag === "Just") {
      const r = N1(n.id)(e._1.state.nodes);
      if (r.tag === "Just") {
        const o = ai(r._1);
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
}, Aa = (t) => (n) => (e) => ({ cx: t.cx + (n.cx - t.cx) * e, cy: t.cy + (n.cy - t.cy) * e, hw: t.hw * Di(n.hw / cn(1e-4)(t.hw))(e), hh: t.hh * Di(n.hh / cn(1e-4)(t.hh))(e) }), Kr = (t) => (n) => ne((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)), t6 = (t) => (n) => {
  const e = (r) => cn(0)(1 - Kr(n)({ x: r.x, y: r.y }) / (cn(r.hw)(r.hh) + t.ballRadius));
  return T((r) => (o) => e(o) > r.glow ? { glow: e(o), x: o.x, y: o.y } : r)({ glow: 0, x: 0, y: 0 })(t.worldNodes);
}, n6 = (t) => {
  const n = Ln(Vn, t, At(1, t.length, t)), e = Pa(D((r) => Kr(r._1)(r._2))(n));
  return e <= 1e-9 ? [] : T((r) => (o) => {
    const i = r.distance + Kr(o._1)(o._2);
    return { distance: i, segments: Lt(r.segments)({ from: o._1, to: o._2, lo: r.distance / e, hi: i / e }) };
  })({ distance: 0, segments: [] })(n).segments;
}, e6 = (t) => (n) => (e) => (r) => (o) => {
  const i = Nl({ width: n, height: e })((() => {
    const a = To(r)(o);
    return { vx: a.x, vy: a.y, vw: a.w, vh: a.h };
  })()), s = (i.vx + i.vw / 2 - t.midX) * t.scaleFactor, u = -(i.vy + i.vh / 2 - t.midY) * t.scaleFactor;
  return {
    centerX: s,
    centerY: u,
    camZ: i.vh * t.scaleFactor,
    viewport: { cx: s, cy: u, hw: i.vw * t.scaleFactor / 2, hh: i.vh * t.scaleFactor / 2 }
  };
}, r6 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (t.cameraSchedule.tag === "Just") {
    const s = gm({ widthPx: e, heightPx: r })(t.cameraSchedule._1), u = Wi(s.cameraConfig)(s.layout)(s.cameraSpans)(i).camera, a = (() => {
      if (n.tag === "Nothing")
        return u;
      if (n.tag === "Just")
        return Jd(s.cameraConfig.cameraDecay)(o)(n._1)(u);
      f();
    })();
    return w("Just", { camera: a, world: e6(t)(e)(r)(s.layout)(a) });
  }
  if (t.cameraSchedule.tag === "Nothing")
    return v;
  f();
}, Nc = "500 " + an(dn(Qe(144))) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", Ul = /* @__PURE__ */ bt((t) => t)(/* @__PURE__ */ D(Cx)(/* @__PURE__ */ Vt(32, 126))), o6 = je((Ul.length + 16 | 0) - 1 | 0, 16), i6 = (t) => V(OR(0)(Ul.length - 1 | 0)(br(t) - 32 | 0)), S1 = V(16) * 76, L1 = V(o6) * 100, E1 = () => {
  const t = Ql();
  za(t)(S1)(), Ha(t)(L1)();
  const n = Ks(t)();
  x0(n)({ x: 0, y: 0, width: S1, height: L1 })(), m0(n)("#fff")(), Qa(n)("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")(), A0(n)(C0)(), P0(n)(J0)(), Ol(n)("normal")();
  const e = g$(Xt(Vn)(Ul))((r) => {
    const o = ts(r._2), i = v0(n)(o)(V(Vr(r._1)(16)) * 76 + 38)(V(je(r._1, 16)) * 100 + 50);
    return () => (i(), rd(n)(o)().width / 64);
  })();
  return { canvas: t, advances: e };
}, P1 = (t) => (n) => 2.36 * cn(t.hw / cn(0.2)(n))(t.hh), s6 = (t) => (n) => (e) => () => {
  const r = E1();
  Ea(t)(n)(r.canvas)(1)(), wn(e)(r.advances)(), il(
    sl,
    qo(qo(Xo(() => Ml("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")))(Wl(ql)))(() => Xo(() => {
      const i = E1();
      return Ea(t)(n)(i.canvas)(1)(), wn(e)(i.advances)();
    }))
  )().run();
}, A1 = (t) => (n) => {
  if (t.tag === "Nothing")
    return { lo: 0, hi: 1, alpha: 1 };
  if (t.tag === "Just") {
    const e = _$(n.path)(t._1);
    if (e.tag === "Just") {
      const r = J1(n.id)(e._1.state.edges);
      if (r.tag === "Just") {
        const o = rp(r._1);
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
}, u6 = (t) => (n) => (e) => (r) => r < 0.31999999999999995 ? Aa(n)(e.parent)((() => {
  const o = r / 0.31999999999999995;
  return o * o * (3 - 2 * o);
})()) : Aa(e.parent)(t)((() => {
  const o = (r - 0.31999999999999995) / 0.68;
  return o * o * (3 - 2 * o);
})()), a6 = (t) => (n) => (e) => e < 0.68 ? Aa(t)(n.parent)((() => {
  const r = e / 0.68;
  return r * r * (3 - 2 * r);
})()) : Aa(n.parent)(n.child)((() => {
  const r = (e - 0.68) / 0.31999999999999995;
  return r * r * (3 - 2 * r);
})()), c6 = (t) => (n) => (e) => (r) => e.dir > 0.5 ? a6(n)(e)(r) : u6(t)(n)(e)(r), d$ = (t) => (n) => cn(0)(Ce(1)((n - t.startT) / cn(1e-4)(t.endT - t.startT))), f6 = (t) => (n) => (e) => T((r) => (o) => e <= o.startT ? r : c6(t)(r)(o)(d$(o)(e)))(t)(n), l6 = (t) => (n) => {
  if (t.dir > 0.5) {
    const r = cn(0)(Ce(1)((n - 0.68) / 0.31999999999999995));
    return r * r * (3 - 2 * r);
  }
  const e = cn(0)(Ce(1)(n / 0.31999999999999995));
  return e * e * (3 - 2 * e);
}, g6 = (t) => (n) => T((e) => (r) => n <= r.startT ? e : n >= r.endT ? r.dir > 0.5 ? e + 1 : e + -1 : e + (r.dir > 0.5 ? 1 : -1) * l6(r)(d$(r)(n)))(0)(t), _6 = (t) => (n) => {
  const e = 1 - t.holdPre - t.holdPost;
  return e <= 0 ? n < 0.5 ? 0 : 1 : cn(0)(Ce(1)((n - t.holdPre) / e));
}, d6 = (t) => (n) => (e) => {
  const r = cn(0)(Ce(1)((t * V(n + 1 | 0) - V(e)) / 1.5));
  return r * r * (3 - 2 * r);
}, h6 = (t) => (n) => {
  const e = n.length === 0 ? [""] : n, r = D((_) => V(WR(1)(hr(_))))(e), o = cn(1)(Pa(r)), i = t * o, u = ((_) => (d) => (g) => {
    let p = _, m = d, h = g, $ = !0, x;
    for (; $; ) {
      const y = p, J = m, C = Ht((S) => v, (S) => (P) => w("Just", { head: S, tail: P }), h);
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
  })(0)(0)(r), a = Pa(u < 1 ? [] : At(0, u, r)), c = a / o;
  if (u >= 0 && u < r.length) {
    const _ = (a + r[u]) / o;
    return { line: u >= 0 && u < e.length ? e[u] : "", phase: _ <= c ? 1 : cn(0)(Ce(1)((t - c) / (_ - c))) };
  }
  const l = (a + 1) / o;
  return { line: u >= 0 && u < e.length ? e[u] : "", phase: l <= c ? 1 : cn(0)(Ce(1)((t - c) / (l - c))) };
}, p6 = (t) => (n) => {
  const e = Ln(Vn, t, At(1, t.length, t));
  return ((o) => (i) => {
    let s = o, u = i, a = !0, c;
    for (; a; ) {
      const l = s, d = Ht((g) => v, (g) => (p) => w("Just", { head: g, tail: p }), u);
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
        if (d._1.tail.length === 0 || l <= Kr(d._1.head._1)(d._1.head._2)) {
          const g = Kr(d._1.head._1)(d._1.head._2), p = g <= 0 ? 0 : l / g;
          a = !1, c = { x: d._1.head._1.x + (d._1.head._2.x - d._1.head._1.x) * p, y: d._1.head._1.y + (d._1.head._2.y - d._1.head._1.y) * p };
          continue;
        }
        s = l - Kr(d._1.head._1)(d._1.head._2), u = d._1.tail;
        continue;
      }
      f();
    }
    return c;
  })(cn(0)(Ce(1)(n)) * T((o) => (i) => o + Kr(i._1)(i._2))(0)(e))(e);
}, m6 = (t) => (n) => D((e) => {
  const r = _6(e)((n - e.startT) / (e.endT - e.startT)), o = p6(e.path)(r), i = t6(t)(o);
  return { x: o.x, y: o.y, glow: i.glow, nx: i.x, ny: i.y, labels: e.labels, motionT: r, startT: e.startT, path: e.path };
})(At(0, 8, ht((e) => n >= e.startT && n < e.endT, t.tokenFlows))), $6 = (t) => (n) => {
  const e = t.cameraSchedule.tag === "Just" ? w("Just", Id(t.cameraSchedule._1)(n)) : v, r = D(ZR(e))(t.nodeList), o = D((i) => {
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
  })(Ln(Vn, t.edgeSegments, D((i) => A1(e)(i.key))(t.edgeSegments)));
  return {
    nodeRect: Nt(Ln(Vn, t.worldNodes, r))((i) => [
      i._1.x,
      i._1.y,
      i._1.hw * 2 * i._2.scale,
      i._1.hh * 2 * i._2.scale
    ]),
    nodeAlpha: D((i) => i.alpha)(r),
    edge: Nt(o)((i) => i.flat),
    edgeAlpha: D((i) => i.alpha)(o),
    arrowAlpha: D((i) => {
      const s = A1(e)(i.key);
      return s.alpha > 0 && s.hi >= 0.999999 ? s.alpha : 0;
    })(t.arrowData)
  };
}, y6 = (t) => {
  const n = Hl(t);
  if (n.tag === "Left")
    return v;
  if (n.tag === "Right") {
    const e = mc(n._1)(hc)._1;
    if (e.tag === "Left")
      return v;
    if (e.tag === "Right") {
      const r = El(Va)(Ll)(e._1)(ic(G)(G)(e._1));
      if (r.tag === "Left")
        return v;
      if (r.tag === "Right")
        return w("Just", r._1);
    }
  }
  f();
}, x6 = (t) => {
  const n = yR(t), e = y6(t), r = (() => {
    if (e.tag === "Nothing")
      return Va;
    if (e.tag === "Just")
      return e._1.cameraConfig;
    f();
  })(), o = T((h) => ($) => ({ minX: Ce(h.minX)($.x - $.w / 2), maxX: cn(h.maxX)($.x + $.w / 2), minY: Ce(h.minY)($.y - $.h / 2), maxY: cn(h.maxY)($.y + $.h / 2) }))({ minX: 1e9, maxX: -1e9, minY: 1e9, maxY: -1e9 })(n.nodes), i = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, u = 6.6 / cn(o.maxX - o.minX)(o.maxY - o.minY), a = D((h) => ({
    key: { id: h.id, path: h.path },
    pts: D(($) => ({ x: ($.x - i) * u, y: -($.y - s) * u }))(h.points),
    depth: V(h.depth),
    arrowhead: h.arrowhead
  }))(n.edges), c = D((h) => ({
    x: (h.x - i) * u,
    y: -(h.y - s) * u,
    hw: h.w / 2 * u,
    hh: h.h / 2 * u,
    shape: V(h.shape),
    depth: V(h.depth),
    labelH: r.labelBasePx * h.labelScale * u
  }))(n.nodes), l = (h) => {
    const $ = qR(/* @__PURE__ */ (() => {
      const x = (y) => (h.x - y.x) * (h.x - y.x) + (h.y - y.y) * (h.y - y.y);
      return (y) => (J) => st.compare(x(y))(x(J));
    })())(c);
    if ($.tag === "Just")
      return { x: $._1.x, y: $._1.y };
    if ($.tag === "Nothing")
      return h;
    f();
  }, _ = c.length, d = _ === 0 ? 0.1 : T((h) => ($) => h + $.hh)(0)(c) / V(_), g = (h) => {
    const $ = ht((x) => x.depth === h, c);
    return $.length === 0 ? d : T((x) => (y) => x + y.hh)(0)($) / V($.length);
  }, p = g(0), m = Nt(a)((h) => D(($) => ({ key: h.key, from: $.from, to: $.to, lo: $.lo, hi: $.hi, depth: h.depth }))(n6((() => {
    if (h.arrowhead) {
      const $ = b1(h.pts)(Vn);
      if ($.tag === "Just") {
        const x = Kr($._1._1)($._1._2);
        if (x > 1e-6) {
          const y = rr(h.pts);
          if (y.tag === "Just") {
            const J = Ce(d * g(h.depth) / cn(1e-4)(p) * 0.05 + d * g(h.depth) / cn(1e-4)(p) * 0.55)(x * 0.95);
            return Lt(y._1.init)({ x: $._1._2.x - ($._1._2.x - $._1._1.x) / x * J, y: $._1._2.y - ($._1._2.y - $._1._1.y) / x * J });
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
    halfW: T((h) => ($) => cn(h)(cn($.x + $.hw)($.hw - $.x)))(0)(c) + d * 0.6,
    halfH: T((h) => ($) => cn(h)(cn($.y + $.hh)($.hh - $.y)))(0)(c) + d * 0.6,
    unitHalfH: d,
    ballRadius: d * 0.3,
    scaleFactor: u,
    nodeRectFlat: Nt(c)((h) => [h.x, h.y, h.hw * 2, h.hh * 2]),
    nodeShapeFlat: D((h) => h.shape)(c),
    nodeLabelHeightFlat: D((h) => h.labelH)(c),
    nodeDepthFlat: D((h) => h.depth)(c),
    edgeSegFlat: Nt(m)((h) => [h.from.x, h.from.y, h.to.x, h.to.y]),
    edgeSegDepth: D((h) => h.depth)(m),
    edgeSegments: m,
    arrowData: bt((h) => {
      if (h.arrowhead) {
        const $ = b1(h.pts)(Vn);
        if ($.tag === "Just") {
          const x = Kr($._1._1)($._1._2);
          return x > 1e-6 ? w(
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
    tokenFlows: D((h) => ({
      path: (() => {
        const $ = D((y) => ({ x: (y.x - i) * u, y: -(y.y - s) * u }))(h.points), x = Ht((y) => v, (y) => (J) => w("Just", { head: y, tail: J }), $);
        if (x.tag === "Just") {
          const y = rr($);
          if (y.tag === "Just")
            return [l(x._1.head), ...Lt($)(l(y._1.last))];
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
    dives: D((h) => {
      const $ = (x) => ({ cx: (x.x - i) * u, cy: -(x.y - s) * u, hw: x.w / 2 * u, hh: x.h / 2 * u });
      return { startT: h.startT, endT: h.endT, dir: V(h.dir), parent: $(h.parent), child: $(h.child) };
    })(n.dives),
    duration: n.duration,
    midX: i,
    midY: s,
    cameraSchedule: e
  };
}, R1 = (t) => () => {
  const n = Ql(), e = Ks(n)();
  Ol(e)("normal")(), i$(e)("1px")();
  const r = g$(t)((o) => {
    const i = Qa(e)(Nc);
    return () => (i(), [rd(e)(o.label)().width / 2048, 0.9]);
  })();
  return Ee(r);
}, h$ = (t) => (n) => {
  const e = Ks(n);
  return () => {
    const r = e();
    return x0(r)({ x: 0, y: 0, width: 2048, height: V(t.length) * 160 })(), m0(r)("#fff")(), A0(r)(C0)(), P0(r)(J0)(), Ol(r)("normal")(), i$(r)("1px")(), XR(t)((o) => (i) => {
      const s = Qa(r)(Nc);
      return () => (s(), v0(r)(i.label)(1024)(V(o) * 160 + 80)());
    })();
  };
}, v6 = (t) => () => {
  const n = Ql();
  return za(n)(2048)(), Ha(n)(V(t.length) * 160)(), h$(t)(n)(), n;
}, w6 = (t) => (n) => (e) => {
  const r = v6(t);
  return () => {
    const o = r();
    Ea(n)(e)(o)(0)(), il(
      sl,
      qo(qo(Xo(() => Ml(Nc)))(Wl(ql)))(() => Xo((() => {
        const s = h$(t)(o);
        return () => (s(), Ea(n)(e)(o)(0)());
      })()))
    )().run();
  };
}, T6 = (t) => (n) => {
  const e = (r) => T((o) => (i) => (() => {
    const s = i.nx - r.cx, u = i.ny - r.cy, a = r.unit * 0.6;
    return s * s + u * u < a * a;
  })() ? cn(o)(i.glow) : o)(0)(n);
  return Nt(t.arrowData)((r) => [r.tipX - r.dirX * r.unit * 0.2 * e(r), r.tipY - r.dirY * r.unit * 0.2 * e(r), r.dirX, r.dirY]);
}, N6 = (t) => (n) => (e) => (r) => {
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
      return b(k1($.x - s.chip.cx)($.y - s.chip.cy)(s), $);
    }
    const u = en((d) => d.id === 0)(n), a = (() => {
      if (u.tag === "Nothing")
        return { id: 0, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
      if (u.tag === "Just")
        return u._1;
      f();
    })(), c = a.vx + (180 * (s.chip.cx - a.x) - 22 * a.vx) * o, l = a.vy + (180 * (s.chip.cy - a.y) - 22 * a.vy) * o, _ = { id: 0, x: a.x + c * o, y: a.y + l * o, vx: c, vy: l };
    return b(k1(_.x - s.chip.cx)(_.y - s.chip.cy)(s), _);
  })(r);
}, F1 = (t) => (n) => {
  const e = br(n) - 32 | 0;
  return e >= 0 && e < t.length ? t[e] : 0.5;
}, J6 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = n * 0.6 + n * 0.5454545454545454, u = n * 1.5625, a = u * 0.76, c = n * 0.7272727272727273, l = e.y + r + c + s, _ = h6(o)(i), d = Gr(_.line), g = d.length, p = Pa(D((h) => n * F1(t)(h))(d)), m = e.x + r + c + p / 2;
  return {
    chip: { cx: m, cy: l, hw: p / 2 + n * 1.2727272727272727, hh: s, dotX: e.x, dotY: e.y },
    glyphs: T((h) => ($) => {
      const x = d6(_.phase)(g)($._1), y = n * F1(t)($._2), J = { cx: h._1 + y / 2, cy: l + (1 - x) * n * 0.85, hw: a / 2, hh: u / 2, cell: i6($._2), alpha: x };
      return b(h._1 + y, x > 0 ? Lt(h._2)(J) : h._2);
    })(b(m - p / 2, []))(Xt(Vn)(d))._2
  };
}, C6 = /* @__PURE__ */ Yl(
  "SdfDiagram",
  (t) => {
    const n = re(wi), e = re(0), r = re(0), o = re(v), i = re([]), s = re([]), u = re(v), a = re(8), c = re(1), l = re(0), _ = re(0), d = re(0), g = re(0), p = re(v), m = re({ resW: 0, resH: 0 }), h = re(1), $ = re(!0), x = wn(h)(t.speed);
    ks(
      (N, C) => N === C,
      t.speed,
      () => (x(), () => {
      })
    );
    const y = wn($)(t.playing);
    ks(
      (N, C) => N === C,
      t.playing,
      () => (y(), () => {
      })
    );
    const J = $n(n);
    return ks(
      (N, C) => N === C,
      t.source,
      () => {
        const N = J(), C = Sn(N, v, qt);
        if (C.tag === "Nothing")
          return () => {
          };
        if (C.tag === "Just") {
          const S = sR(C._1)(), P = Sn(S, v, qt);
          if (P.tag === "Nothing")
            return () => {
            };
          if (P.tag === "Just") {
            const E = P._1;
            wn(u)(v)();
            const Q = x6(t.source);
            iR(E)("OES_standard_derivatives")();
            const W = GA(E, DR, zR);
            rR(E)(W)();
            const B = sn(E)(W)("uRes")(), H = sn(E)(W)("uTime")(), rt = sn(E)(W)("uTilt")(), ot = sn(E)(W)("uNodeCount")(), M = sn(E)(W)("uEdgeCount")(), q = sn(E)(W)("uNodeRect")(), A = sn(E)(W)("uNodeAlpha")(), R = sn(E)(W)("uNodeShape")(), X = sn(E)(W)("uEdge")(), L = sn(E)(W)("uEdgeAlpha")(), I = sn(E)(W)("uArrow")(), z = sn(E)(W)("uArrowCount")(), U = sn(E)(W)("uArrowAlpha")(), K = sn(E)(W)("uLabel")(), O = sn(E)(W)("uLabelAspect")(), Z = sn(E)(W)("uLabelFadeStart")(), et = sn(E)(W)("uLabelDim")(), nt = sn(E)(W)("uLabelH")(), gt = sn(E)(W)("uUnit")(), ct = sn(E)(W)("uTokCount")(), $t = sn(E)(W)("uTokPos")(), Pt = sn(E)(W)("uTokGlow")(), Rt = sn(E)(W)("uTokNode")(), rn = sn(E)(W)("uGlyphAtlas")(), xt = sn(E)(W)("uChipCount")(), Gt = sn(E)(W)("uChipRect")(), vt = sn(E)(W)("uChipDot")(), Jt = sn(E)(W)("uGlyphCount")(), _t = sn(E)(W)("uGlyphRect")(), yt = sn(E)(W)("uGlyphCell")(), ft = sn(E)(W)("uGlyphAlpha")(), mt = sn(E)(W)("uCamZ")(), Ft = sn(E)(W)("uCamPanX")(), St = sn(E)(W)("uCamPanY")(), zt = sn(E)(W)("uRotY")(), tn = sn(E)(W)("uActiveDepth")(), pe = sn(E)(W)("uNodeDepth")(), Mn = sn(E)(W)("uEdgeDepth")(), jn = sn(E)(W)("uArrowDepth")();
            uo(E)(K)(0)(), uo(E)(rn)(1)(), xr(E)(O)(12.8)(), xr(E)(Z)(0.92)();
            const Qt = h1(E)(), Ot = h1(E)();
            w6(Q.nodeList)(E)(Qt)(), s6(E)(Ot)(i)();
            const me = R1(Q.nodeList)();
            hs(E)(et)(me)(), il(
              sl,
              qo(qo(Xo(() => Ml(Nc)))(Wl(ql)))(() => qo(Xo(R1(Q.nodeList)))((mn) => Xo(hs(E)(et)(mn))))
            )().run(), uo(E)(ot)(Q.nodeList.length)(), uo(E)(M)(je(Q.edgeSegFlat.length, 4))(), uo(E)(z)(Q.arrowData.length)(), ur(E)(R)(Q.nodeShapeFlat)(), ur(E)(nt)(Q.nodeLabelHeightFlat)(), ur(E)(pe)(Q.nodeDepthFlat)(), ur(E)(Mn)(Q.edgeSegDepth)(), ur(E)(jn)(D((mn) => mn.depth)(Q.arrowData))();
            const Un = ka(), Qn = $n(o), sr = YR((mn) => {
              const ue = uA(mn)(Un);
              return () => (ue(), wn(o)(v)());
            }), on = () => {
              const mn = Qn();
              return sr(mn)();
            }, vn = () => {
              const mn = d1(), ue = $n(r)();
              wn(r)(mn)();
              const Br = $n(h)(), ko = $n($)(), io = Ce(0.05)((mn - ue) / 1e3), ke = ko ? io * Br : 0, $r = $n(e)() + ke;
              wn(e)($r)();
              const Ue = aR(C._1)(), So = jA(), us = cn(1)(Ce(2)(So)), so = $n(i)(), _i = $n(s)(), fu = $n(c)(), jl = $n(l)(), Zl = $n(_)(), m$ = $n(u)(), lu = $n(d)(), gu = 0 + $n(g)(), _u = Ue.width * us, as = Ue.height * us, tg = { cx: 0, cy: 0, hw: Q.halfW, hh: Q.halfH }, $$ = (() => {
                const cs = Q.duration > 0 ? $r - Q.duration * Oe($r / Q.duration) : 0, Lo = m6(Q)(cs), fs = r6(Q)(m$)(Ue.width)(Ue.height)(io)(cs), ls = $6(Q)(cs), gs = f6(tg)(Q.dives)(cs), x$ = { centerX: gs.cx, centerY: gs.cy, camZ: gs.hh * 2, viewport: gs }, Jc = (() => {
                  if (fs.tag === "Nothing")
                    return x$;
                  if (fs.tag === "Just")
                    return fs._1.world;
                  f();
                })(), du = Jc.centerX + jl, Cc = Jc.centerY + Zl, _s = Jc.camZ * 1.18 * fu, v$ = du * fe(lu), w$ = Cc * fe(gu) - du * Te(lu) * Te(gu), bc = _u / as, kc = P1(gs)(bc) / P1(tg)(bc), T$ = Q.ballRadius * kc, N$ = 11 * Q.scaleFactor * kc, ng = Q.unitHalfH * kc, eg = g6(Q.dives)(cs), rg = N6(ke)(_i)(Lo)(CR((() => {
                  const nn = 0.5 * bc * _s / cn(0.3)(fe(lu)), og = 0.5 * _s / cn(0.3)(fe(gu));
                  return { minX: du - nn, maxX: du + nn, minY: Cc - og, maxY: Cc + og, margin: 4 * _s / cn(1)(as) };
                })())(ng * 0.25)(D(jR)(ht((nn) => nn.depth >= eg - 0.5, Q.worldNodes)))(D((nn) => J6(so)(N$)({
                  x: nn.x,
                  y: nn.y
                })(T$)(nn.motionT)(nn.labels))(Lo))), hu = D((nn) => nn._1)(rg), pu = At(0, 40, Nt(hu)((nn) => nn.glyphs)), J$ = D((nn) => nn._2)(rg), C$ = wn(m)({ resW: _u, resH: as });
                return () => (C$(), wn(s)(J$)(), wn(u)(fs.tag === "Just" ? w("Just", fs._1.camera) : v)(), wn(l)(jl)(), wn(_)(Zl)(), wn(a)(_s)(), oR(E)(C._1)(dn(Qe(_u)))(dn(Qe(as)))(), cR(E)(), nR(E)(B)(_u)(as)(), xr(E)(H)($r)(), xr(E)(rt)(gu)(), xr(E)(mt)(_s)(), xr(E)(Ft)(v$)(), xr(E)(St)(w$)(), xr(E)(zt)(lu)(), xr(E)(tn)(eg)(), ds(E)(q)(ls.nodeRect)(), ur(E)(A)(ls.nodeAlpha)(), ds(E)(X)(ls.edge)(), ur(E)(L)(ls.edgeAlpha)(), ur(E)(U)(ls.arrowAlpha)(), xr(E)(gt)(ng)(), uo(E)(ct)(Lo.length)(), hs(E)($t)(Nt(Lo)((nn) => [nn.x, nn.y]))(), ur(E)(Pt)(D((nn) => nn.glow)(Lo))(), hs(E)(Rt)(Nt(Lo)((nn) => [nn.nx, nn.ny]))(), ds(E)(I)(T6(Q)(Lo))(), uo(E)(xt)(hu.length)(), ds(E)(Gt)(Nt(hu)((nn) => [nn.chip.cx, nn.chip.cy, nn.chip.hw, nn.chip.hh]))(), hs(E)(vt)(Nt(hu)((nn) => [nn.chip.dotX, nn.chip.dotY]))(), uo(E)(Jt)(pu.length)(), ds(E)(_t)(Nt(pu)((nn) => [nn.cx, nn.cy, nn.hw, nn.hh]))(), ur(E)(yt)(D((nn) => nn.cell)(pu))(), ur(E)(ft)(D((nn) => nn.alpha)(pu))(), uR(E)());
              })();
              Ue.width > 0 && $$();
              const y$ = r0(vn)(Un)();
              return wn(o)(w("Just", y$))();
            }, Kl = wn(r), au = () => {
              const mn = d1();
              Kl(mn)();
              const ue = r0(vn)(Un)();
              return wn(o)(w("Just", ue))();
            };
            au();
            const cu = LR((mn) => {
              const ue = $n(o);
              return () => {
                const Br = ue();
                if (mn)
                  return Br.tag === "Nothing" ? au() : void 0;
                if (!mn && Br.tag === "Just")
                  return on();
              };
            })(), Vl = VR(C._1)((mn) => (ue) => (Br) => {
              const ko = $n(a);
              return () => {
                const io = ko(), ke = $n(m)();
                if (Br > 0.5) {
                  const Ue = $n(c)();
                  return wn(c)(C1(0.3)(2.6)(Ue * Di(1.01)(ue)))();
                }
                const gi = $n(l)(), $r = $n(_)();
                return wn(l)(gi + mn * io / ke.resH)(), wn(_)($r - ue * io / ke.resH)();
              };
            })((mn) => (ue) => wn(p)(w("Just", { x: mn, y: ue })))((mn) => (ue) => (Br) => (ko) => {
              const io = $n(p);
              return () => {
                const ke = io();
                if (ke.tag !== "Nothing") {
                  if (ke.tag === "Just") {
                    const gi = ue - ke._1.y, $r = mn - ke._1.x;
                    wn(p)(w("Just", { x: mn, y: ue }))();
                    const Ue = $n(a)(), So = $n(m)();
                    if (Br >= 1.5) {
                      const _i = $n(l)(), fu = $n(_)();
                      return wn(l)(_i - $r * Ue / So.resH)(), wn(_)(fu + gi * Ue / So.resH)();
                    }
                    const us = $n(d)(), so = $n(g)();
                    return wn(d)(us + $r * 5e-3)(), wn(g)(C1(-0.8)(0.8)(so + gi * 5e-3))();
                  }
                  f();
                }
              };
            })((mn) => (ue) => wn(p)(v))();
            return () => (on(), cu(), Vl());
          }
        }
        f();
      }
    ), MR(UR({
      style: { position: "absolute", inset: "0" },
      children: [KR({ ref: n, style: { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" } })]
    }))();
  }
), b6 = /* @__PURE__ */ bo(C6), k6 = /* @__PURE__ */ bo(a$), S6 = /* @__PURE__ */ f$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), L6 = /* @__PURE__ */ f$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), De = /* @__PURE__ */ Fr(oi)(Fa), Ra = l$().pure, E6 = /* @__PURE__ */ bo(c$), P6 = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, A6 = /* @__PURE__ */ Xl("svg")(), G1 = (t) => k6({
  className: "markgraf-player",
  style: { position: "relative", width: "100%", height: "100%" },
  children: [
    b6({
      source: t.src,
      speed: 1,
      playing: (() => {
        const n = Sn(t.paused, v, qt);
        if (n.tag === "Nothing")
          return !0;
        if (n.tag === "Just")
          return !n._1;
        f();
      })()
    })
  ]
}), p$ = (t) => (n) => {
  const e = Sn(n.theme, v, qt), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = Sn(n.renderer, v, qt), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = Sn(n.paused, v, qt), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), a = r === "light" ? w("Just", B_) : r === "dark" ? w("Just", qk) : r === "blueprint" ? w("Just", Xk) : r === "whiteboard" ? w("Just", Yk) : r === "isometric" ? w("Just", Mk) : v, c = i === "svg" ? w("Just", lA) : i === "canvas" ? w("Just", f1) : v, l = {
    source: t,
    renderer: (() => {
      if (c.tag === "Nothing")
        return f1;
      if (c.tag === "Just")
        return c._1;
      f();
    })(),
    sizing: (() => {
      const _ = Sn(n.width, v, qt);
      if (_.tag === "Just") {
        const d = Sn(n.height, v, qt);
        if (d.tag === "Just")
          return e$("FixedSize", _._1, d._1);
      }
      return fA;
    })(),
    theme: (() => {
      if (a.tag === "Nothing")
        return B_;
      if (a.tag === "Just")
        return a._1;
      f();
    })(),
    transparency: (() => {
      const _ = Sn(n.transparent, v, qt);
      if (_.tag === "Nothing")
        return !1;
      if (_.tag === "Just")
        return _._1;
      f();
    })() ? Kk : Uk
  };
  return () => {
    const _ = re(wi), d = T1((h, $) => b(h, $), v), g = d._1, p = T1((h, $) => b(h, $), { time: 0, keyframe: "", playing: !1 });
    S6(b(i, r))((() => {
      const h = ig("[markgraf] unknown renderer " + df(i) + ", defaulting to canvas"), $ = (() => {
        if (c.tag === "Nothing")
          return !0;
        if (c.tag === "Just")
          return !1;
        f();
      })() ? h : () => {
      };
      return () => {
        $();
        const x = ig("[markgraf] unknown theme " + df(r) + ", defaulting to light");
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
    return ks(
      (h, $) => P6.eq(h)($),
      l,
      () => {
        const h = m(), $ = Sn(h, v, qt), x = (() => {
          if ($.tag === "Just")
            return iA(v, qt, "Element", $._1);
          if ($.tag === "Nothing")
            return v;
          f();
        })();
        if (x.tag === "Nothing")
          return () => {
          };
        if (x.tag === "Just") {
          const y = EA(x._1)(l.source)(l.renderer)(l.sizing)(l.theme)(l.transparency)(!0)();
          if (y.tag === "Left")
            return R$("[markgraf] " + y._1)(), () => {
            };
          if (y.tag === "Right") {
            const J = y._1;
            d._2((C) => w("Just", J))();
            const N = J.subscribe((C) => p._2((S) => C))();
            return () => (N(), J.destroy(), d._2((C) => v)());
          }
        }
        f();
      }
    ), L6(b(
      u,
      (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        f();
      })()
    ))((() => {
      const h = De(($) => u ? $.pause : $.play)(g);
      return () => (h(), () => {
      });
    })())(), Ra({
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
      play: De((h) => h.play)(g),
      playWith: (h) => De(($) => $.playWith(h))(g),
      pause: De((h) => h.pause)(g),
      toggle: De((h) => h.toggle)(g),
      seek: (h) => De(($) => $.seek(h))(g),
      seekCue: (h) => De(($) => $.seekCue(h))(g),
      seekStep: (h) => De(($) => $.seekStep(h))(g),
      playToCue: (h) => ($) => De((x) => x.playToCue(h)($))(g),
      playToStep: (h) => ($) => De((x) => x.playToStep(h)($))(g),
      playNext: (h) => De(($) => $.playNext(h))(g),
      playPrevious: (h) => De(($) => $.playPrevious(h))(g),
      setSpeed: (h) => De(($) => $.setSpeed(h))(g),
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
}, R6 = /* @__PURE__ */ Yl(
  "MarkgrafHeadlessPlayer",
  (t) => {
    const n = p$(t.src)({ renderer: t.renderer, width: t.width, height: t.height, theme: t.theme, transparent: t.transparent, paused: t.paused })(), e = Sn(t.renderer, v, qt);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? Ra(bo(A6)({ className: "markgraf-player", ref: n.elementRef }))() : Ra(E6({ className: "markgraf-player", ref: n.elementRef }))();
  }
), F6 = /* @__PURE__ */ Yl(
  "MarkgrafPlayer",
  (t) => Ra((() => {
    const n = Sn(t.renderer, v, qt), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      f();
    })();
    return e === "sdf" || e === "webgl" ? G1(t) : bo(R6)(t);
  })())()
), ps = (t) => t ?? null, G6 = (t) => {
  if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
  const n = Object.getPrototypeOf(t);
  return n === Object.prototype || n === null;
}, I6 = (t) => t != null && (G6(t) || "direction" in t || "speed" in t || "duration" in t || "loop" in t || "stopAt" in t), gf = (t) => () => t(), _f = (t) => (n) => () => t(n), B6 = (t) => ({
  ...t,
  play: (n) => I6(n) ? t.playWith(n)() : t.play(),
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
  onCueEnter: (n) => gf(t.onCueEnter(_f(n))()),
  onStepEnter: (n, e) => gf(t.onStepEnter(n)(_f(e))()),
  onComplete: (n) => gf(t.onComplete(_f(n))())
}), H6 = (t, n) => B6(p$(t)(n ?? {})()), Q6 = F6;
export {
  Q6 as MarkgrafPlayer,
  H6 as useMarkgraf
};
