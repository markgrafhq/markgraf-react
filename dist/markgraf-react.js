import pe from "react";
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
function l() {
  throw new Error("Failed pattern match");
}
function ir(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const jn = (t) => (n) => t, B = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, P$ = { map: B }, M0 = (t) => t, R$ = function(t) {
  return function(n) {
    return {}.hasOwnProperty.call(n, t);
  };
}, F$ = function(t) {
  return function(n) {
    return n[t];
  };
}, fn = function(t) {
  return t.toString();
}, Vo = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, ha = function(t) {
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
}, G$ = function(t) {
  return function(n) {
    for (var e = [], r = 0, o = n.length; r < o; r++)
      e[r] = t(n[r]);
    return "[" + e.join(",") + "]";
  };
}, X0 = (t) => t, Yn = /* @__PURE__ */ X0("LT"), Vn = /* @__PURE__ */ X0("GT"), _e = /* @__PURE__ */ X0("EQ"), T = (t, n) => ({ tag: t, _1: n }), v = /* @__PURE__ */ T("Nothing"), zt = (t) => T("Just", t), Rd = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  l();
}, Fd = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  l();
}, Ui = function(t) {
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
}, Qr = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => M0)(i))(s);
  })(t.pure());
}, ls = (t) => {
  const n = Qr(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, pc = {
  foldr: (t) => (n) => (e) => {
    if (e.tag === "Nothing")
      return n;
    if (e.tag === "Just")
      return t(e._1)(n);
    l();
  },
  foldl: (t) => (n) => (e) => {
    if (e.tag === "Nothing")
      return n;
    if (e.tag === "Just")
      return t(n)(e._1);
    l();
  },
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => (r) => {
      if (r.tag === "Nothing")
        return n;
      if (r.tag === "Just")
        return e(r._1);
      l();
    };
  }
}, Mt = {
  foldr: Ui,
  foldl: N,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Mt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, Pi = null;
function An(t, n, e) {
  return t == null ? n : e(t);
}
const J = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), Zn = (t) => (n) => J(t, n), mc = (t) => t._2, $c = (t) => t._1, I$ = function(t) {
  return function() {
    return t;
  };
}, B$ = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return $i.pure(e(r))();
  },
  Functor0: () => D$
}, $i = { pure: I$, Apply0: () => B$ }, D$ = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, z$ = function(t) {
  return function() {
    console.log(t);
  };
}, Ug = function(t) {
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
}, Rt = (t, n) => ({ tag: t, _1: n }), H$ = (t) => Rt("Left", t), Gd = (t) => Rt("Right", t), O$ = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Rt("Left", n._1);
    if (n.tag === "Right")
      return Rt("Right", t(n._1));
    l();
  }
}, Id = {
  apply: (t) => (n) => {
    if (t.tag === "Left")
      return Rt("Left", t._1);
    if (t.tag === "Right") {
      if (n.tag === "Left")
        return Rt("Left", n._1);
      if (n.tag === "Right")
        return Rt("Right", t._1(n._1));
    }
    l();
  },
  Functor0: () => O$
}, W$ = {
  bind: (t) => {
    if (t.tag === "Left") {
      const n = t._1;
      return (e) => Rt("Left", n);
    }
    if (t.tag === "Right") {
      const n = t._1;
      return (e) => e(n);
    }
    l();
  },
  Apply0: () => Id
}, Q$ = { pure: Gd, Apply0: () => Id }, Bd = { Applicative0: () => Q$, Bind1: () => W$ }, q$ = (t) => t, M$ = { map: (t) => (n) => t(n) }, Dd = { apply: (t) => (n) => t(n), Functor0: () => M$ }, X$ = { bind: (t) => (n) => n(t), Apply0: () => Dd }, U$ = { pure: q$, Apply0: () => Dd }, Be = { Applicative0: () => U$, Bind1: () => X$ }, zi = (t, n) => ({ tag: t, _1: n }), U0 = (t) => zi("Loop", t), Y$ = (t) => zi("Done", t), V$ = {
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
        l();
      }
      return i;
    };
    return (e) => n(t(e));
  },
  Monad0: () => Be
}, K$ = function(t) {
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
}, ty = { map: K$ }, ny = { Applicative0: () => Y0, Bind1: () => ey }, ey = { bind: Z$, Apply0: () => zd }, zd = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Y0.pure(e(r))();
  },
  Functor0: () => ty
}, Y0 = { pure: j$, Apply0: () => zd }, ry = {
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
        s.tag !== "Done" && l();
      }
      const i = o;
      if (i.tag === "Done")
        return i._1;
      l();
    };
  },
  Monad0: () => ny
}, oy = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, iy = function(t, n, e, r) {
  return e >= 0 && e < r.length ? t(r[e]) : n;
}, V0 = function(t) {
  return t.length;
}, sy = function(t, n, e) {
  return e.length > 0 ? t(e.pop()) : n;
}, uy = function(t, n) {
  return n.push(t);
}, ay = /* @__PURE__ */ oy(uy), cy = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), fy = (t) => (n) => (e) => () => {
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
}, ly = (t) => (n) => () => {
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
    l();
  }
}, qt = function(t) {
  return function(n) {
    for (var e = n.length, r = Array(e), o = 0; o < e; o++)
      r[o] = t(o)(n[o]);
    return r;
  };
};
var K0 = function(t) {
  return function(n) {
    return t === n;
  };
};
const gy = K0, _y = K0, Eo = K0, gs = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, zr = { eq: Eo }, dy = { eq: _y }, Jo = { eq: gy };
var j0 = function(t) {
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
const hy = j0, py = j0, my = j0, R = { compare: /* @__PURE__ */ my(Yn)(_e)(Vn), Eq0: () => zr }, ot = { compare: /* @__PURE__ */ py(Yn)(_e)(Vn), Eq0: () => dy }, st = { compare: /* @__PURE__ */ hy(Yn)(_e)(Vn), Eq0: () => Jo }, co = function(t) {
  return t;
}, $y = /* @__PURE__ */ (function() {
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
            function c(f, _) {
              switch (_ - f) {
                case 0:
                  return s([]);
                case 1:
                  return i(t)(u(a[f]));
                case 2:
                  return o(i(n)(u(a[f])))(u(a[f + 1]));
                case 3:
                  return o(o(i(e)(u(a[f])))(u(a[f + 1])))(u(a[f + 2]));
                default:
                  var d = f + Math.floor((_ - f) / 4) * 2;
                  return o(i(r)(c(f, d)))(c(d, _));
              }
            }
            return c(0, a.length);
          };
        };
      };
    };
  };
})(), yy = (t) => t, Ao = {
  traverse: (t) => {
    const n = t.Apply0();
    return $y(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => Ao.traverse(t)(yy),
  Functor0: () => P$,
  Foldable1: () => Mt
}, tn = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var vy = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, xy = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const Ty = typeof Array.prototype.fill == "function" ? vy : xy, nn = /* @__PURE__ */ (function() {
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
}, Hd = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, uo = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, Od = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, Wd = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, ko = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, gn = function(t) {
  return t.slice().reverse();
}, Pe = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, dt = function(t, n) {
  return n.filter(t);
}, wy = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, Ny = /* @__PURE__ */ (function() {
  function t(n, e, r, o, i, s) {
    var u, a, c, f, _, d, g;
    for (u = i + (s - i >> 1), u - i > 1 && t(n, e, o, r, i, u), s - u > 1 && t(n, e, o, r, u, s), a = i, c = u, f = i; a < u && c < s; )
      _ = o[a], d = o[c], g = e(n(_)(d)), g > 0 ? (r[f++] = d, ++c) : (r[f++] = _, ++a);
    for (; a < u; )
      r[f++] = o[a++];
    for (; c < s; )
      r[f++] = o[c++];
  }
  return function(n, e, r) {
    var o;
    return r.length < 2 ? r : (o = r.slice(0), t(n, e, o, r.slice(0), 0, r.length), o);
  };
})(), Et = function(t, n, e) {
  return e.slice(t, n);
}, Fn = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, Cn = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, Qd = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, Gt = (t) => (n) => Ny(
  t,
  (e) => {
    if (e === "GT")
      return 1;
    if (e === "EQ")
      return 0;
    if (e === "LT")
      return -1;
    l();
  },
  n
), Cy = (t) => (n) => Gt((e) => (r) => t.compare(n(e))(n(r))), kt = (t) => (n) => (() => {
  const e = ay(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), Ke = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, v;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? T("Just", { init: Et(0, t.length - 1 | 0, t), last: t[n] }) : v;
}, by = (t) => (n) => (e) => t >= 0 && t < e.length ? ko(zt, v, t, n(e[t]), e) : v, Fr = (t) => (n) => {
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
  l();
}, Yi = (t) => (n) => {
  const e = Gt((r) => (o) => t(r._2)(o._2))(qt(Zn)(n));
  return 0 < e.length ? B(mc)(Cy(st)($c)((() => {
    const r = [e[0]];
    for (const o of e) {
      const i = t((() => {
        const s = r.length - 1 | 0;
        if (s >= 0 && s < r.length)
          return r[s]._2;
        l();
      })())(o._2);
      (i === "LT" || i === "GT" || i !== "EQ") && r.push(o);
    }
    return r;
  })())) : [];
}, Jy = (t) => (n) => {
  const e = [], o = cy(
    (i) => i >= 0 && i < n.length ? T("Just", n[i]) : v,
    { value: 0 }
  );
  return ly(o)((i) => () => {
    const s = [];
    s.push(i), fy(t(i))(o)(s)(), e.push(s);
  })(), e;
}, Kt = (t) => (n) => {
  const e = uo(zt, v, t, n);
  return e.tag === "Just" ? T("Just", n[e._1]) : v;
}, Bs = (t) => (n) => dt(t, n), Ce = (t) => (n) => (e) => {
  const r = uo(zt, v, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  l();
}, yc = (t) => (n) => xt(n)(t), Tt = (t) => yc((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  l();
}), ky = isFinite, Rn = Math.abs, Sy = Math.acos, jo = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, vc = Math.ceil, de = Math.cos, Vi = Math.exp, je = Math.floor, pa = Math.log, Ly = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, Ki = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, Ue = Math.round, Ne = Math.sin, oe = Math.sqrt, Ey = Math.tan, Ay = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, j = function(t) {
  return t;
}, Py = function(t) {
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
}, Ry = /* @__PURE__ */ Py(zt)(v), Fy = /* @__PURE__ */ Ry(10), qd = /* @__PURE__ */ Ay(zt)(v), yn = (t) => {
  if (!ky(t))
    return 0;
  if (t >= j(2147483647))
    return 2147483647;
  if (t <= j(-2147483648))
    return -2147483648;
  const n = qd(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  l();
}, Gy = (t, n) => ({ tag: "NonEmpty", _1: t, _2: n }), Lt = (t, n, e) => ({ tag: t, _1: n, _2: e }), X = /* @__PURE__ */ Lt("Nil"), Sn = {
  foldr: (t) => (n) => {
    const e = Sn.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, a = s, c = !0, f;
      for (; c; ) {
        const _ = u, d = a;
        if (d.tag === "Nil") {
          c = !1, f = _;
          continue;
        }
        if (d.tag === "Cons") {
          u = Lt("Cons", d._1, _), a = d._2;
          continue;
        }
        l();
      }
      return f;
    })(X);
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
      l();
    }
    return u;
  },
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Sn.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, Iy = function(t) {
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
}, By = (t) => {
  if (t.tag === "Just")
    return t._1;
  l();
}, Dy = { unfoldr1: /* @__PURE__ */ Iy(Rd)(By)($c)(mc) }, zy = function(t) {
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
}, Hy = (t) => {
  if (t.tag === "Just")
    return t._1;
  l();
}, Se = {
  unfoldr: /* @__PURE__ */ zy(Rd)(Hy)($c)(mc),
  Unfoldable10: () => Dy
}, cn = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), be = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Iu = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), Yg = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), z = /* @__PURE__ */ cn("Leaf"), cr = /* @__PURE__ */ be("IterLeaf"), Gn = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return cn("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return cn("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    l();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return cn("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return cn("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  l();
}, me = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? cn("Node", 1, 1, t, n, z, z) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      l();
    })() ? Gn(r._5._3, r._5._4, Gn(t, n, e, r._5._5), Gn(r._3, r._4, r._5._6, r._6)) : Gn(r._3, r._4, Gn(t, n, e, r._5), r._6) : Gn(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      l();
    })() ? Gn(r._5._3, r._5._4, Gn(t, n, e, r._5._5), Gn(r._3, r._4, r._5._6, r._6)) : Gn(r._3, r._4, Gn(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      l();
    })() ? Gn(e._6._3, e._6._4, Gn(e._3, e._4, e._5, e._6._5), Gn(t, n, e._6._6, r)) : Gn(e._3, e._4, e._5, Gn(t, n, e._6, r)) : Gn(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      l();
    })() ? Gn(e._6._3, e._6._4, Gn(e._3, e._4, e._5, e._6._5), Gn(t, n, e._6._6, r)) : Gn(e._3, e._4, e._5, Gn(t, n, e._6, r)) : Gn(t, n, e, r);
  l();
}, ji = (t, n, e) => {
  if (e.tag === "Leaf")
    return Iu(v, z, z);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = ji(t, n, e._5);
      return Iu(o._1, o._2, me(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = ji(t, n, e._6);
      return Iu(o._1, me(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Iu(T("Just", e._4), e._5, e._6);
  }
  l();
}, Md = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return Yg(t, n, e);
  if (r.tag === "Node") {
    const o = Md(r._3, r._4, r._5, r._6);
    return Yg(o._1, o._2, me(t, n, e, o._3));
  }
  l();
}, _s = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = Md(t._3, t._4, t._5, t._6);
    return me(e._1, e._2, e._3, n);
  }
  l();
}, hr = (t, n, e) => {
  if (n.tag === "Leaf")
    return z;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = ji(t, e._3, n);
    return _s(hr(t, r._2, e._5), hr(t, r._3, e._6));
  }
  l();
}, ma = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return z;
  if (r.tag === "Node") {
    const o = ji(t, r._3, e), i = ma(t, n, o._2, r._5), s = ma(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return me(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return _s(i, s);
  }
  l();
}, te = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = ji(t, r._3, e), i = te(t, n, o._2, r._5), s = te(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return me(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return me(r._3, r._4, i, s);
  }
  l();
}, Xd = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return z;
    if (o.tag === "Node") {
      const i = t.compare(e)(o._3);
      if (i === "LT")
        return me(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return me(o._3, o._4, o._5, r(o._6));
      if (i === "EQ") {
        const s = n(o._4);
        if (s.tag === "Nothing")
          return _s(o._5, o._6);
        if (s.tag === "Just")
          return cn("Node", o._1, o._2, o._3, s._1, o._5, o._6);
      }
    }
    l();
  };
  return r;
}, Oy = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return z;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return me(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return _s(e(r._5), e(r._6));
    }
    l();
  };
  return e;
}, Wy = (t) => (n) => (r) => {
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
      o = ((c) => (f) => {
        let _ = c, d = f, g = !0, p;
        for (; g; ) {
          const m = _, h = d;
          if (h.tag === "Leaf") {
            g = !1, p = m;
            continue;
          }
          if (h.tag === "Node") {
            if (h._6.tag === "Leaf") {
              _ = be("IterEmit", h._3, h._4, m), d = h._5;
              continue;
            }
            _ = be("IterEmit", h._3, h._4, be("IterNode", h._6, m)), d = h._5;
            continue;
          }
          l();
        }
        return p;
      })(u._2)(u._1);
      continue;
    }
    l();
  }
  return s;
}, fr = /* @__PURE__ */ Wy((t, n, e) => T("Just", J(J(t, n), e)))((t) => v), Ot = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return cn("Node", 1, 1, e, r, z, z);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return me(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return me(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return cn("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    l();
  };
  return o;
}, rt = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return cn("Node", 1, 1, n, e, z, z);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return me(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return me(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return cn("Node", o._1, o._2, n, e, o._5, o._6);
    }
    l();
  };
  return r;
}, dn = (t) => (n) => n.foldl((e) => (r) => rt(t)(r._1)(r._2)(e))(z), Zi = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return z;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return me(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return me(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return _s(r._5, r._6);
    }
    l();
  };
  return e;
}, Ud = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = ji(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return _s(i._2, i._3);
    if (s.tag === "Just")
      return me(r, s._1, i._2, i._3);
    l();
  };
}, En = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, pr = function(t) {
  return function(n) {
    return t + n;
  };
}, oo = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, Jn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, Qy = { append: Jn }, qy = { mempty: [], Semigroup0: () => Qy };
function Z0(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const My = Z0(Number.prototype.toPrecision), Xy = Z0(Number.prototype.toFixed), Uy = Z0(Number.prototype.toExponential), xc = (t, n) => ({ tag: t, _1: n }), Tc = (t) => (n) => (e) => {
  const r = st.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = st.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, wc = (t) => {
  if (t.tag === "Precision")
    return My(t._1);
  if (t.tag === "Fixed")
    return Xy(t._1);
  if (t.tag === "Exponential")
    return Uy(t._1);
  l();
};
function Yy() {
  return Date.now();
}
function Vg(t) {
  return new Error(t);
}
function hu(t) {
  return function() {
    return t.getContext("2d");
  };
}
function Yd(t) {
  return function() {
    return t.width;
  };
}
function Vd(t) {
  return function() {
    return t.height;
  };
}
function Nc(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function Cc(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function tl(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function nl(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function Vy(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function gf(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function _f(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function Ky(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function jy(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function Kd(t) {
  return function() {
    t.beginPath();
  };
}
function el(t) {
  return function() {
    t.stroke();
  };
}
function rl(t) {
  return function() {
    t.fill();
  };
}
function Zy(t) {
  return function() {
    t.clip();
  };
}
function Es(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function jd(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function Zd(t) {
  return function() {
    t.closePath();
  };
}
function tv(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function ol(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function $a(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function Kg(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function nv(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function ev(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function rv(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function bc(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function il(t) {
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
function th(t) {
  return function(n) {
    return function() {
      return t.measureText(n);
    };
  };
}
function Sr(t) {
  return function() {
    t.save();
  };
}
function Lr(t) {
  return function() {
    t.restore();
  };
}
function As(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function ov(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const nh = (t) => t, sl = (t) => t, ul = (t) => t, al = (t) => t, Jc = (t) => t, iv = /* @__PURE__ */ Jc("BaselineTop"), cl = /* @__PURE__ */ Jc("BaselineMiddle"), sv = /* @__PURE__ */ Jc("BaselineAlphabetic"), uv = /* @__PURE__ */ Jc("BaselineBottom"), av = /* @__PURE__ */ al("AlignLeft"), cv = /* @__PURE__ */ al("AlignRight"), fl = /* @__PURE__ */ al("AlignCenter"), ll = /* @__PURE__ */ ul("BevelJoin"), gl = /* @__PURE__ */ ul("RoundJoin"), _l = /* @__PURE__ */ ul("MiterJoin"), dl = /* @__PURE__ */ sl("Round"), hl = /* @__PURE__ */ sl("Square"), pl = /* @__PURE__ */ sl("Butt"), fv = /* @__PURE__ */ nh("SourceOver"), lv = /* @__PURE__ */ nh("Difference"), ml = (t) => (n) => rv(t)((() => {
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
  l();
})()), $l = (t) => (n) => ev(t)((() => {
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
  l();
})()), yl = (t) => (n) => {
  if (n === "BevelJoin")
    return _f(t)("bevel");
  if (n === "RoundJoin")
    return _f(t)("round");
  if (n === "MiterJoin")
    return _f(t)("miter");
  l();
}, vl = (t) => (n) => {
  if (n === "Round")
    return gf(t)("round");
  if (n === "Square")
    return gf(t)("square");
  if (n === "Butt")
    return gf(t)("butt");
  l();
}, jg = (t) => (n) => Ky(t)((() => {
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
  l();
})()), gv = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldrWithIndex((o) => {
    const i = r(o);
    return (s) => {
      const u = i(s);
      return (a) => n.apply(n.Functor0().map((c) => M0)(u))(a);
    };
  })(t.pure());
}, _v = (t) => {
  const n = gv(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, xl = {
  foldrWithIndex: (t) => (n) => {
    const e = Ui((o) => {
      const i = o._1, s = o._2;
      return (u) => t(i)(s)(u);
    })(n), r = qt(Zn);
    return (o) => e(r(o));
  },
  foldlWithIndex: (t) => (n) => {
    const e = N((o) => (i) => t(i._1)(o)(i._2))(n), r = qt(Zn);
    return (o) => e(r(o));
  },
  foldMapWithIndex: (t) => {
    const n = t.mempty;
    return (e) => xl.foldrWithIndex((r) => (o) => (i) => t.Semigroup0().append(e(r)(o))(i))(n);
  },
  Foldable0: () => Mt
}, Re = {
  foldr: (t) => (n) => {
    const e = Sn.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, Lt("Cons", i._3, o(i._6, s)));
        l();
      };
      return o(r, X);
    })());
  }
}, dv = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => te(e, jn, r, o);
    })()
  };
  return { mempty: z, Semigroup0: () => n };
}, Ds = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, Po = function(t) {
  return t.join("");
}, qr = function(t) {
  return t.split("");
}, ds = function(t) {
  return t;
}, xr = function(t) {
  return t.length;
}, Zg = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, ts = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, eh = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, hv = (t) => (n) => {
  const e = eh(xr(n) - xr(t) | 0)(n);
  return e.after === t ? T("Just", e.before) : v;
}, Ro = (t) => (n) => {
  const e = eh(xr(t))(n);
  return e.before === t ? T("Just", e.after) : v;
}, rh = (t) => ({
  bind: (n) => (e) => t.Bind1().bind(n)((r) => {
    if (r.tag === "Left")
      return t.Applicative0().pure(Rt("Left", r._1));
    if (r.tag === "Right")
      return e(r._1);
    l();
  }),
  Apply0: () => oh(t)
}), oh = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = {
    map: (r) => n.map((o) => {
      if (o.tag === "Left")
        return Rt("Left", o._1);
      if (o.tag === "Right")
        return Rt("Right", r(o._1));
      l();
    })
  };
  return {
    apply: (() => {
      const r = rh(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Tl(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Tl = (t) => ({ pure: (n) => t.Applicative0().pure(Rt("Right", n)), Apply0: () => oh(t) }), pv = (t) => {
  const n = { Applicative0: () => Tl(t), Bind1: () => rh(t) };
  return { throwError: (e) => t.Applicative0().pure(Rt("Left", e)), Monad0: () => n };
};
function t1(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const mv = (t, n, e) => ({ tag: t, _1: n, _2: e }), $v = (t) => (n) => (e) => t1(e) === n ? Tl(t).pure(e) : pv(t).throwError(Gy(mv("TypeMismatch", n, t1(e)), X)), yv = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, vv = function(t) {
  return t();
}, hs = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, pu = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, ps = function(n) {
  return function(e) {
    return function(r) {
      return function(o) {
        return function() {
          return n(e, r, o);
        };
      };
    };
  };
}, wl = function(n) {
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
}, xv = function(n) {
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
}, Tv = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, wv = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, ai = (t) => BigInt(t), Nv = (t) => Number(t), na = (t) => (n) => t + n, ea = (t) => (n) => t * n, Vf = (t) => (n) => t - n, ih = 0n, ya = 1n, sh = (t) => (n) => t ^ n, Xs = (t) => (n) => t & n, Nl = (t) => (n) => t << n, Kf = (t) => (n) => t >> n, Cv = (t) => (n) => t == n, bv = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, Jv = { eq: Cv }, n1 = {
  compare: (t) => (n) => {
    const e = bv(t)(n);
    return e === 1 ? Vn : e === 0 ? _e : Yn;
  },
  Eq0: () => Jv
}, kv = /* @__PURE__ */ Tv(zt)(v), Sv = /* @__PURE__ */ wv(zt)(v), va = function(t) {
  throw new Error(t);
}, uh = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = ot.compare(n._1)(e._1);
      return r === "LT" ? Yn : r === "GT" ? Vn : ot.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), Lv = (t) => (n) => Rn(t._1 - n._1) + Rn(t._2 - n._2), yi = (t) => t, kc = (t) => t, Wn = /* @__PURE__ */ kc("North"), Qn = /* @__PURE__ */ kc("South"), Vr = /* @__PURE__ */ kc("East"), Kr = /* @__PURE__ */ kc("West"), Zr = /* @__PURE__ */ yi("Rectangle"), e1 = /* @__PURE__ */ yi("Cylinder"), Ev = /* @__PURE__ */ yi("Parallelogram"), Av = /* @__PURE__ */ yi("Diamond"), Pv = /* @__PURE__ */ yi("Ellipse"), r1 = /* @__PURE__ */ yi("Document"), Rv = /* @__PURE__ */ yi("Cloud"), ah = /* @__PURE__ */ N(pr)(0), Fv = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, vo = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, xa = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, o1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Gv = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, ci = (t) => (n) => {
  const e = Fn(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const a = u.y - s.y, c = u.x - s.x;
        return oe(c * c + a * a);
      })()
    }),
    t,
    Et(1, t.length, t)
  ), r = ah(B((s) => s.len)(e)), o = Fv(0)(r)(n * r), i = (s) => (u) => (a) => {
    let c = s, f = u, _ = a, d = !0, g;
    for (; d; ) {
      const p = c, m = f, h = _, $ = Bt((y) => v, (y) => (x) => T("Just", { head: y, tail: x }), p);
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
        c = $._1.tail, f = m - $._1.head.len, _ = h;
        continue;
      }
      l();
    }
    return g;
  };
  return 0 < t.length ? T("Just", i(e)(o)(t[0])) : v;
}, Iv = (t) => (n) => {
  const e = vo(1e-6)(t.scale);
  return { x: (n.x - t.tx) / e, y: (n.y - t.ty) / e, w: n.w / e, h: n.h / e };
}, mu = (t) => ah(Fn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return oe(o * o + r * r);
  },
  t,
  Et(1, t.length, t)
)), Cl = { scale: 1, tx: 0, ty: 0 }, Bv = (t) => (n) => {
  const e = vo(4)(0.15 * xa(n.w)(n.h)), r = vo(1)(t.w), o = vo(1)(t.h), i = vo(1)(n.w - 2 * e), s = vo(1)(n.h - 2 * e), u = 0.55 * xa(i / r)(s / o);
  return { scale: u, tx: n.x + e + (i - r * u) / 2 - t.x * u, ty: n.y + e + (s - o * u) / 2 + 2.5 - t.y * u };
}, wn = (t) => {
  const n = Bt(
    (e) => v,
    (e) => (r) => T("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, Lt("Cons", r._4, e(r._6, o)));
          l();
        };
        return xt(nn(Sn.foldr, e(t.nodes, X)))(Gv);
      })(),
      ...Pe((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, Lt("Cons", r._4, e(r._6, o)));
          l();
        };
        return nn(Sn.foldr, e(t.edges, X));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: xa(r.minX)(o.x), minY: xa(r.minY)(o.y), maxX: vo(r.maxX)(o.x), maxY: vo(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  l();
}, Dv = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, a = i, c = !0, f;
  for (; c; ) {
    const _ = s, d = u, g = a, p = Bt((m) => v, (m) => (h) => T("Just", { head: m, tail: h }), d);
    if (p.tag === "Nothing") {
      c = !1, f = g;
      continue;
    }
    if (p.tag === "Just") {
      const m = o1(p._1.head)(_.interiors);
      if (m.tag === "Nothing") {
        c = !1, f = g;
        continue;
      }
      if (m.tag === "Just") {
        s = m._1, u = p._1.tail, a = (() => {
          const h = Bv(wn(m._1.layout))((() => {
            const $ = o1(p._1.head)(_.layout.nodes);
            if ($.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Zr };
            if ($.tag === "Just")
              return $._1;
            l();
          })());
          return { scale: g.scale * h.scale, tx: g.scale * h.tx + g.tx, ty: g.scale * h.ty + g.ty };
        })();
        continue;
      }
    }
    l();
  }
  return f;
})(t)(n)(Cl), zv = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Hv = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, ra = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, Ov = (t) => (n) => (e) => (r) => {
  const o = wn(n);
  return e <= 0 || r <= 0 || o.w <= 0 || o.h <= 0 ? 1 : t ? zv(o.w / e)(o.h / r) : Hv(o.w / e)(o.h / r);
}, ch = (t) => (n) => (e) => {
  const r = t.widthPx / t.heightPx, o = e.w / e.h;
  if (t.widthPx <= 0 || t.heightPx <= 0) {
    const s = 1 / ra(0.05)(1)(n);
    return { w: e.w * s, h: e.h * s };
  }
  if (r > o) {
    const s = 1 / ra(0.05)(1)(n);
    return { w: e.h * r * s, h: e.h * s };
  }
  const i = 1 / ra(0.05)(1)(n);
  return { w: e.w * i, h: e.w / r * i };
}, i1 = (t) => (n) => (e) => (r) => (o) => {
  const i = t + o / 2, s = t + n - o / 2, u = t + n / 2, a = e + r / 2;
  return o >= n ? u : ra(i)(s)(a);
}, fh = (t) => (n) => (e) => (r) => {
  const o = wn(t);
  return { x: i1(o.x)(o.w)(n.x)(n.w)(e), y: i1(o.y)(o.h)(n.y)(n.h)(r) };
}, zs = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: Ov(t)(n)(e.w)(e.h) }), Wv = (t) => (n) => (e) => (r) => {
  const o = { x: r.x - t.padding, y: r.y - t.padding, w: r.w + t.padding * 2, h: r.h + t.padding * 2 }, i = ch(n)(0.65)(o), s = fh(e)(o)(i.w)(i.h), u = { x: s.x - i.w / 2, y: s.y - i.h / 2, w: i.w, h: i.h };
  return { focus: r, paddedFocus: o, viewport: u, camera: zs(n.widthPx > 0 && n.heightPx > 0)(e)(u) };
}, Qv = (t) => (n) => (e) => (r) => (o) => {
  const i = {
    x: o.x * r.scale + r.tx,
    y: o.y * r.scale + r.ty,
    w: o.w * r.scale,
    h: o.h * r.scale
  }, s = t.padding * r.scale, u = { x: i.x - s, y: i.y - s, w: i.w + s * 2, h: i.h + s * 2 }, a = ch(n)(0.7)(u), c = fh(e)(u)(a.w)(a.h), f = { x: c.x - a.w / 2, y: c.y - a.h / 2, w: a.w, h: a.h };
  return { footprint: i, viewport: f, camera: zs(n.widthPx > 0 && n.heightPx > 0)(e)(f) };
}, qv = (t) => (n) => (e) => {
  const r = t.widthPx / t.heightPx, o = e.w / e.h;
  return t.widthPx <= 0 || t.heightPx <= 0 ? zs(t.widthPx > 0 && t.heightPx > 0)(n)((() => {
    const i = e.w * 0.8, s = e.h * 0.8;
    return { x: e.x + e.w / 2 - i / 2, y: e.y + e.h / 2 - s / 2, w: i, h: s };
  })()) : r > o ? zs(t.widthPx > 0 && t.heightPx > 0)(n)((() => {
    const i = e.w * 0.8, s = e.w / r * 0.8;
    return { x: e.x + e.w / 2 - i / 2, y: e.y + e.h / 2 - s / 2, w: i, h: s };
  })()) : zs(t.widthPx > 0 && t.heightPx > 0)(n)((() => {
    const i = e.h * r * 0.8, s = e.h * 0.8;
    return { x: e.x + e.w / 2 - i / 2, y: e.y + e.h / 2 - s / 2, w: i, h: s };
  })());
}, lh = (t) => t, Mv = (t, n) => ({ tag: t, _1: n }), bl = (t) => t, ms = (t, n) => ({ tag: t, _1: n }), Jl = (t, n) => ({ tag: t, _1: n }), $u = /* @__PURE__ */ bl("Animated"), Xv = /* @__PURE__ */ bl("StaticStill"), Uv = /* @__PURE__ */ bl("TitleCard"), Yv = /* @__PURE__ */ Jl("First"), s1 = /* @__PURE__ */ lh("Forward"), u1 = /* @__PURE__ */ lh("Backward"), Vv = /* @__PURE__ */ ms("ExitNode"), gh = /* @__PURE__ */ dn(R)(Mt), Kv = (t) => Ui((n) => (e) => ({
  nodes: te(R.compare, jn, n.nodes, e.nodes),
  edges: te(R.compare, jn, n.edges, e.edges)
}))({ nodes: z, edges: z })(t.keyframes), jv = (t) => (n) => ({
  entering: {
    nodes: hr(R.compare, n.nodes, t.nodes),
    edges: hr(R.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: hr(R.compare, t.nodes, n.nodes),
    edges: hr(R.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: ma(R.compare, jn, t.nodes, n.nodes),
    edges: ma(R.compare, jn, t.edges, n.edges)
  }
}), Ta = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, ns = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, wa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, jf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Zv = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), tx = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), nx = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), _h = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, a1 = /* @__PURE__ */ dn(R)(Mt), kl = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: Ta(r.minX)(o.x), minY: Ta(r.minY)(o.y), maxX: ns(r.maxX)(o.x), maxY: ns(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  l();
}, ex = (t) => (n) => (e) => Zv(xt(nn(Re.foldr, e))((r) => {
  const o = wa(r)(t);
  if (o.tag === "Just")
    return dt((i) => !jf(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  l();
})), rx = (t) => t.kind.tag === "SendToken" ? T("Just", J(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : v, ox = (t) => t.tag === "DataFlow" ? Tt(rx)(t._1.events) : [], ix = (t) => (n) => tx(Tt((e) => jf(e._2.source)(n) || jf(e._2.target)(n) ? T("Just", e._1) : v)(nx(t))), Gr = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: Ta(r.minX)(o.x), minY: Ta(r.minY)(o.y), maxX: ns(r.maxX)(o.x + o.w), maxY: ns(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  l();
}, Sl = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return wn(t);
  const r = ix(n)(e), o = [
    ...Tt((i) => {
      const s = _h(i)(t.nodes);
      return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
    })(nn(
      Re.foldr,
      te(R.compare, jn, e, ex(n)(e)(r))
    )),
    ...Tt((i) => {
      const s = wa(i)(t.edges);
      return s.tag === "Just" ? T("Just", kl(s._1)) : v;
    })(nn(Re.foldr, r))
  ];
  return o.length === 0 ? wn(t) : Gr(o);
}, Na = (t) => (n) => (e) => {
  const r = [
    ...Tt((o) => o)([
      (() => {
        const o = wa(e)(t.edges);
        return o.tag === "Just" ? T("Just", kl(o._1)) : v;
      })()
    ]),
    ...(() => {
      const o = wa(e)(n);
      if (o.tag === "Just")
        return Tt((i) => {
          const s = _h(i)(t.nodes);
          return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      l();
    })()
  ];
  return r.length === 0 ? Sl(t)(n)(z) : Gr(r);
}, Ze = (t) => (n) => {
  const e = wn(t), r = e.w / ns(1e-4)(n.zoom), o = e.h / ns(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, sx = (t) => te(
  R.compare,
  jn,
  a1(B((n) => J(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  a1(xt(t.scenes)(ox))
), Ll = (t) => t, ux = (t) => t, dh = /* @__PURE__ */ Ll("Linear"), kr = /* @__PURE__ */ Ll("EaseInOutQuad"), ax = /* @__PURE__ */ Ll("SpringBouncy"), Us = (t) => (n) => (e) => {
  const r = oe(1 - n * n), o = t * r;
  return 1 - Vi(-n * t * e) * (de(o * e) + n / r * Ne(o * e));
}, cx = (t) => {
  const n = ot.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    l();
  })(), r = ot.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  l();
}, Ca = (t) => (n) => (() => {
  if (t === "Linear")
    return ux;
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
    return (e) => e >= 1 ? 1 : 1 - Ki(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Vi(-6 * e);
  if (t === "SpringBouncy")
    return Us(6)(0.7);
  l();
})()(cx(n)), Sc = (t) => t, hh = (t) => t, ph = (t) => t, Ye = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Lc = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, ba = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, fx = (t) => (n) => {
  const e = st.compare(t._1)(n._1);
  return e === "LT" ? Yn : e === "GT" ? Vn : ot.compare(t._2)(n._2);
}, lx = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, gx = /* @__PURE__ */ ph("Hold"), _x = /* @__PURE__ */ ph("Gap"), Ve = /* @__PURE__ */ hh("LinearLerp"), mo = /* @__PURE__ */ hh("ComposedLogLerp"), Zf = /* @__PURE__ */ Sc("Overview"), Ps = /* @__PURE__ */ Sc("DiveHome"), $o = /* @__PURE__ */ Sc("DiveTransition"), Ec = /* @__PURE__ */ Sc("ActionFocus"), dx = (t) => (n) => (e) => {
  const r = t.widthPx > 0 && t.heightPx > 0, o = t.widthPx / Ye(1e-6)(t.heightPx), i = wn(n), s = i.w / Ye(1e-6)(e.zoom), u = i.h / Ye(1e-6)(e.zoom), a = s / Ye(1e-6)(u), c = r && o < a ? s / o : u, f = r && o > a ? u * o : s;
  return { x: e.center.x - f / 2, y: e.center.y - c / 2, w: f, h: c };
}, t0 = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = oe(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return Lc(t.minTransition)(t.maxTransition)(Ye(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, hx = (t) => ({ startT: t.startT, endT: t.endT, fromCam: t.fromCam, toCam: t.toCam, easing: t.easing, interp: t.interp, intent: t.intent }), px = /* @__PURE__ */ N((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : kt(t)(n);
})([]), Ja = (t) => (n) => (e) => {
  const r = Lc(0)(1)((e - t) / Ye(1e-6)(n - t));
  return r * r * r * (r * (r * 6 - 15) + 10);
}, mx = (t) => (n) => {
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
}, $x = (t) => (n) => t.tag === "Just" ? n.tag === "Just" && mx(t._1)(n._1) : t.tag === "Nothing" && n.tag === "Nothing", c1 = (t) => (n) => (e) => (r) => ({
  center: { x: r.center.x * e.scale + e.tx, y: r.center.y * e.scale + e.ty },
  zoom: r.zoom * wn(t).w / Ye(1e-6)(e.scale * wn(n).w)
}), n0 = (t) => (n) => (e) => (r) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Vi((() => {
    const o = pa(Ye(1e-6)(t.zoom));
    return o + (pa(Ye(1e-6)(n.zoom)) - o) * r;
  })())
}), yx = /* @__PURE__ */ N((t) => (n) => {
  if (t.tag === "Nothing")
    return T("Just", n);
  if (t.tag === "Just")
    return n.endT > t._1.endT ? T("Just", n) : T("Just", t._1);
  l();
})(v), mh = (t) => (n) => (e) => (r) => {
  if (t <= 0)
    return r;
  const o = Vi(-t * n);
  return {
    center: { x: r.center.x + (e.center.x - r.center.x) * o, y: r.center.y + (e.center.y - r.center.y) * o },
    zoom: Vi((() => {
      const i = pa(Ye(1e-6)(r.zoom));
      return i + (pa(Ye(1e-6)(e.zoom)) - i) * o;
    })())
  };
}, e0 = (t) => (n) => (e) => n.zoom >= t.zoom ? Ja(0.3)(1)(e) : Ja(0)(0.7)(e), vx = { widthPx: 0, heightPx: 0 }, Ac = {
  padding: 24,
  easing: kr,
  minimumReadableLabelPx: 11,
  minimumVisibleLabelPx: 5,
  labelBasePx: 11,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 0
}, Si = (t) => (n) => (e) => (r) => (o) => {
  const i = dx(n)(e)(r), s = o.x - t.padding, u = o.y - t.padding;
  return s >= i.x && u >= i.y && s + o.w + t.padding * 2 <= i.x + i.w && u + o.h + t.padding * 2 <= i.y + i.h;
}, xx = (t) => (n) => (e) => (r) => (o) => xl.foldlWithIndex((i) => (s) => (u) => {
  const a = (() => {
    if (u.kind === "Hold") {
      const c = (() => {
        if (i === 0)
          return u.toCam;
        if (u.focus.tag === "Just") {
          if (u.intent === "ActionFocus")
            return Si(t)(n)(e)(s.prev)(u.focus._1) ? s.prev : Si(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1) ? { ...u.toCam, center: s.prev.center } : {
              ...u.toCam,
              center: {
                ...u.toCam.center,
                x: (() => {
                  const f = wn(e).w / Ye(1e-6)(u.toCam.zoom);
                  if (f <= 0)
                    return u.toCam.center.x;
                  const _ = u.focus._1.x + u.focus._1.w / 2, d = n.widthPx <= 0 ? 0 : ba(f / 4)(6 * f / n.widthPx), g = s.prev.center.x + f / 2 - d, p = _ < s.prev.center.x - f / 2 + d ? _ - d + f / 2 : _ > g ? _ + d - f / 2 : s.prev.center.x, m = wn(e);
                  return f >= m.w ? m.x + m.w / 2 : Lc(m.x + f / 2)(m.x + m.w - f / 2)(p);
                })()
              }
            };
          if (Si(t)(n)(e)(s.prev)(u.focus._1))
            return s.prev;
          if (Si(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
        }
        return u.toCam;
      })();
      return { startT: u.startT, endT: u.endT, fromCam: c, toCam: c, easing: u.easing, interp: Ve, focus: u.focus, intent: u.intent };
    }
    if (u.kind === "Gap")
      return {
        startT: u.startT,
        endT: u.endT,
        fromCam: s.prev,
        toCam: (() => {
          const c = i + 1 | 0, f = uo(zt, v, (_) => _.kind === "Hold", c < 1 ? o : Et(c, o.length, o));
          if (f.tag === "Just") {
            const _ = (i + 1 | 0) + f._1 | 0;
            return _ >= 0 && _ < o.length ? (() => {
              if (o[_].focus.tag === "Just")
                return Si(t)(n)(e)(s.prev)(o[_].focus._1);
              if (o[_].focus.tag === "Nothing")
                return !1;
              l();
            })() ? s.prev : o[_].fromCam : s.prev;
          }
          if (f.tag === "Nothing")
            return s.prev;
          l();
        })(),
        easing: u.easing,
        interp: Ve,
        focus: v,
        intent: u.intent
      };
    l();
  })();
  return { acc: kt(s.acc)(a), prev: a.toCam };
})({ acc: [], prev: r })(o).acc, Tx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (a, c) => ba(t0(t)(a.toCam)(c.toCam))(a.endT - a.startT), u = N((a) => (c) => {
    if (a.pending.tag === "Nothing")
      return { acc: a.acc, pending: T("Just", c) };
    if (a.pending.tag === "Just") {
      if (!(c.fromCam.zoom === c.toCam.zoom && c.fromCam.center.x === c.toCam.center.x && c.fromCam.center.y === c.toCam.center.y) || (() => {
        if (c.focus.tag === "Just")
          return Si(t)(n)(e)(a.pending._1.toCam)(c.focus._1);
        if (c.focus.tag === "Nothing")
          return !1;
        l();
      })() || (() => {
        const f = a.pending._1.toCam.center.x - c.toCam.center.x;
        return (f < 0 ? -f < 8 : f < 8) && (() => {
          const _ = a.pending._1.toCam.center.y - c.toCam.center.y;
          return (_ < 0 ? -_ < 8 : _ < 8) && (() => {
            const d = a.pending._1.toCam.zoom - c.toCam.zoom;
            return d < 0 ? -d < 0.08 : d < 0.08;
          })();
        })();
      })() || s(a.pending._1, c) <= 0)
        return { acc: kt(a.acc)(a.pending._1), pending: T("Just", c) };
      if ((() => {
        const f = c.startT;
        return Cn((_) => Rn(_ - f) < 1e-4, o);
      })()) {
        const f = {
          startT: c.startT,
          endT: c.startT + ba(t0(t)(a.pending._1.toCam)(c.toCam))(c.endT - c.startT),
          fromCam: a.pending._1.toCam,
          toCam: c.toCam,
          easing: c.easing,
          interp: Ve,
          focus: c.focus,
          intent: c.intent
        }, _ = { ...c, startT: f.endT, fromCam: c.toCam };
        return _.startT < _.endT ? { acc: kt(kt(a.acc)(a.pending._1))(f), pending: T("Just", _) } : { acc: kt(a.acc)(a.pending._1), pending: T("Just", f) };
      }
      return {
        acc: kt(kt(a.acc)({ ...a.pending._1, endT: c.startT - s(a.pending._1, c) }))({
          startT: c.startT - s(a.pending._1, c),
          endT: c.startT,
          fromCam: a.pending._1.toCam,
          toCam: c.toCam,
          easing: c.easing,
          interp: Ve,
          focus: c.focus,
          intent: c.intent
        }),
        pending: T("Just", c)
      };
    }
    l();
  })({ acc: [], pending: v })(i);
  if (u.pending.tag === "Nothing")
    return u.acc;
  if (u.pending.tag === "Just")
    return kt(u.acc)(u.pending._1);
  l();
}, wx = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = wn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : ba(i.w / r)(i.h / o);
}, Nx = (t) => (n) => (e) => n.zoom >= t.zoom ? n0(t)(n)(Ja(0)(0.45)(e))(e0(t)(n)(e)) : n0(t)(n)(Ja(0.55)(1)(e))(e0(t)(n)(e)), Cx = (t) => (n) => (e) => {
  const r = e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT), o = Ca(e.easing)(Lc(0)(1)(r));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * o, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * o },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * o
    };
  if (e.interp === "LogLerp")
    return n0(e.fromCam)(e.toCam)(o)(o);
  if (e.interp === "ComposedLogLerp")
    return Nx(e.fromCam)(e.toCam)(r);
  l();
}, bx = (t) => (n) => {
  if (t.tag === "Just") {
    if (n.tag === "Just")
      return T("Just", Gr([t._1, n._1]));
    if (n.tag === "Nothing")
      return T("Just", t._1);
    l();
  }
  if (t.tag === "Nothing") {
    if (n.tag === "Just")
      return T("Just", n._1);
    if (n.tag === "Nothing")
      return v;
  }
  l();
}, Jx = /* @__PURE__ */ N((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? T("Just", t[e]) : v;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (!(r._1.intent === "ActionFocus" || n.intent === "ActionFocus") || (r._1.intent === "Overview" ? n.intent === "Overview" : r._1.intent === "DiveHome" ? n.intent === "DiveHome" : r._1.intent === "DiveTransition" ? n.intent === "DiveTransition" : r._1.intent === "ActionFocus" && n.intent === "ActionFocus") && $x(r._1.focus)(n.focus)) && (() => {
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
})([]), kx = (t) => {
  const n = Gt((e) => (r) => fx(J(
    (() => {
      if (r.intent === "DiveTransition")
        return 3;
      if (r.intent === "ActionFocus")
        return 2;
      if (r.intent === "DiveHome")
        return 1;
      if (r.intent === "Overview")
        return 0;
      l();
    })(),
    r.startT
  ))(J(
    (() => {
      if (e.intent === "DiveTransition")
        return 3;
      if (e.intent === "ActionFocus")
        return 2;
      if (e.intent === "DiveHome")
        return 1;
      if (e.intent === "Overview")
        return 0;
      l();
    })(),
    e.startT
  )))(t);
  return 0 < n.length ? T("Just", n[0]) : v;
}, r0 = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: Ye(r)(wx(n)(e)(t.padding)) }), Sx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = r0(t)(e)(wn(e))(0), u = dt(
    (c) => c >= 0 && c <= r,
    px(Gt(ot.compare)([0, r, ...o, ...xt(i)((c) => [c.startT, c.endT])]))
  ), a = (c, f) => Cn((_) => _.priority >= 1, dt((_) => _.startT <= f && f < _.endT, i)) ? Wv(t)(n)(e)(Gr(c)).camera : r0(t)(e)(Gr(c))(0);
  return B(hx)(Tx(t)(n)(e)(s)(o)(Jx(xx(t)(n)(e)(s)(Tt((c) => {
    const f = (c._1 + c._2) / 2;
    if (c._2 <= c._1)
      return v;
    const _ = B((d) => d.bbox)(dt(
      (d) => d.priority === N(lx)(0)(B((g) => g.priority)(dt(
        (g) => g.startT <= f && f < g.endT,
        i
      ))),
      dt((d) => d.startT <= f && f < d.endT, i)
    ));
    return _.length === 0 ? T(
      "Just",
      { kind: _x, startT: c._1, endT: c._2, fromCam: s, toCam: s, easing: t.easing, focus: v, intent: Zf }
    ) : T(
      "Just",
      {
        kind: gx,
        startT: c._1,
        endT: c._2,
        fromCam: a(_, f),
        toCam: a(_, f),
        easing: t.easing,
        focus: T("Just", Gr(_)),
        intent: Cn((d) => d.priority >= 1, dt((d) => d.startT <= f && f < d.endT, i)) ? Ec : Zf
      }
    );
  })(Fn(Zn, u, Et(1, u.length, u)))))));
}, So = (t) => (n) => (e) => (r) => {
  const o = kx(dt((i) => r >= i.startT && r < i.endT, e));
  if (o.tag === "Just")
    return { camera: Cx()(r)(o._1), intent: o._1.intent };
  if (o.tag === "Nothing") {
    const i = yx(e);
    return i.tag === "Just" && r >= i._1.endT ? { camera: i._1.toCam, intent: i._1.intent } : {
      camera: (() => {
        const s = r0(t)(n)(wn(n))(0);
        return 0 < e.length ? e[0].fromCam : s;
      })(),
      intent: 0 < e.length ? e[0].intent : Zf
    };
  }
  l();
};
function Ir(t) {
  return t.charCodeAt(0);
}
function El(t) {
  return String.fromCharCode(t);
}
const Lx = (t) => t >= 0 && t <= 65535 ? T("Just", El(t)) : v, sr = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, fo = function(t) {
  return function(n) {
    return n.split(t);
  };
}, Pc = function(t) {
  return t.trim();
}, Mr = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var Ex = typeof Array.from == "function", Ax = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", Px = typeof String.prototype.fromCodePoint == "function", Rx = typeof String.prototype.codePointAt == "function";
const Fx = function(t) {
  return Rx ? function(n) {
    return n.codePointAt(0);
  } : t;
}, Gx = function(t) {
  return Px ? String.fromCodePoint : t;
}, Ix = function(t) {
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
}, Bx = function(t) {
  return function(n) {
    return Ex ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, Rc = (t) => {
  const n = xr(t);
  if (n === 0)
    return v;
  if (n === 1)
    return T("Just", { head: Ir(Ds(0)(t)), tail: "" });
  const e = Ir(Ds(1)(t)), r = Ir(Ds(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? T("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: ts(2)(t) }) : T("Just", { head: r, tail: ts(1)(t) });
}, Dx = (t) => {
  const n = Rc(t);
  return n.tag === "Just" ? T("Just", J(n._1.head, n._1.tail)) : v;
}, zx = (t) => Se.unfoldr(Dx)(t), Hx = (t) => {
  const n = Ir(Ds(0)(t));
  if (55296 <= n && n <= 56319 && xr(t) > 1) {
    const e = Ir(Ds(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, $h = /* @__PURE__ */ Fx(Hx), $s = /* @__PURE__ */ Bx(zx)($h), yh = (t) => $s(t).length, df = (t) => ds(t >= 0 && t <= 65535 ? El(t) : t < 0 ? "\0" : "\uffff"), Ox = (t) => t <= 65535 ? df(t) : df(ir(t - 65536 | 0, 1024) + 55296 | 0) + df(oo(t - 65536 | 0)(1024) + 56320 | 0), Wx = /* @__PURE__ */ Gx(Ox), vh = (t) => (n) => {
  if (t < 1)
    return "";
  const e = Rc(n);
  return e.tag === "Just" ? Wx(e._1.head) + vh(t - 1 | 0)(e._1.tail) : n;
}, Un = /* @__PURE__ */ Ix(vh), Qx = (t) => (n) => n === "" ? v : T("Just", $h(n)), qx = (t) => t, xh = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Al = (t) => (n) => t.width <= 0 || t.height <= 0 ? n : xh(t.width / t.height)(n), Mx = (t) => (n) => {
  if (n.scene.tag === "Structural")
    return n.scene._1.to;
  if (n.scene.tag === "DataFlow")
    return n.scene._1.keyframe;
  if (n.scene.tag === "Hold")
    return n.scene._1;
  if (n.scene.tag === "EnterNode" || n.scene.tag === "ExitNode" || n.scene.tag === "StepScene")
    return t;
  l();
}, Th = (t) => t, ka = (t, n) => ({ tag: t, _1: n }), Te = (t, n, e) => ({ tag: t, _1: n, _2: e }), wh = (t) => t, Ri = (t, n, e, r, o, i, s, u, a) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: a }), o0 = /* @__PURE__ */ wh("PlopIn"), Xx = /* @__PURE__ */ wh("PlopOut"), Ux = /* @__PURE__ */ Th("DiveIn"), Yx = /* @__PURE__ */ Th("DiveOut"), kn = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, fe = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, Nh = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Ch = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Zo = /* @__PURE__ */ gs(Eo), bh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Vx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Jh = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), Kx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, dr = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, Sa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, jx = (t) => t, kh = (t) => (n) => (e) => e < t ? 0 : e > 1 - n ? 1 : (e - t) / kn(0.05)(1 - t - n), Zx = (t) => (n) => t.labelBasePx * 0.62 * j(N(Nh)(0)(B(yh)(xt(n)((e) => fo(`
`)(e))))), f1 = (t) => (n) => {
  if (t.length === 0)
    return n;
  const e = 6.82 * j(N(Nh)(0)(B(yh)(xt(t)((f) => fo(`
`)(f))))), r = e / 2 + 14, o = n.y + n.h / 2, i = o - 5 - 8, s = kn(n.y + n.h)(i + 12.6) - fe(n.y)(i - 12.6), u = n.x + n.w / 2, a = u + 13 + e / 2, c = kn(n.x + n.w)(a + r) - fe(n.x)(a - r);
  return { x: u - c / 2, y: o - s / 2, w: c, h: s };
}, hf = /* @__PURE__ */ (() => {
  const t = N((n) => (e) => {
    const r = n.previous.tag === "Just" && Rn(n.previous._1.endT - e.startT) < 1e-4 ? { ...e, fromCam: n.previous._1.toCam } : e;
    return { previous: T("Just", r), spans: kt(n.spans)(r) };
  })({ previous: v, spans: [] });
  return (n) => t(n).spans;
})(), l1 = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, a = s - u, c = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : c <= a ? e : r + i * (s - u * Vi(-(c - a) / u));
}, pf = (t) => (n) => {
  const e = Ch(n)(t.keyframes);
  if (e.tag === "Nothing")
    return z;
  if (e.tag === "Just")
    return e._1.nodes;
  l();
}, Sh = (t) => (n) => {
  if (n < t.startT)
    return Te("AtKeyframe", t.initialKeyframe);
  const e = Kt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Te("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Te("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Te("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode" || e._1.scene.tag === "StepScene")
      return Te("AtKeyframe", t.initialKeyframe);
    l();
  }
  if (e.tag === "Nothing")
    return Te(
      "AtKeyframe",
      N(Mx)(t.initialKeyframe)(t.spans)
    );
  l();
}, oa = (t) => (n) => (e) => (r) => {
  const o = Kt((i) => Zo(i.path)(n) && (Rn(i.endT - e) < 1e-4 || Rn(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return T("Just", o._1);
  if (o.tag === "Nothing")
    return Kt((i) => Zo(i.path)(n))(t.segments);
  l();
}, mf = (t) => (n) => {
  const e = Ch(n)(t.keyframes);
  if (e.tag === "Nothing")
    return z;
  if (e.tag === "Just")
    return e._1.edges;
  l();
}, g1 = /* @__PURE__ */ (() => {
  const t = (e, r, o, i, s) => {
    let u = e, a = r, c = o, f = i, _ = s, d = !0, g;
    for (; d; ) {
      if (u === 0) {
        const m = Bt((h) => v, (h) => ($) => T("Just", { head: h, tail: $ }), a);
        if (m.tag === "Nothing") {
          d = !1, g = [];
          continue;
        }
        if (m.tag === "Just") {
          u = 1, a = m._1.head, c = m._1.head, f = !1, _ = m._1.tail;
          continue;
        }
        l();
      }
      if (u === 1) {
        const p = a, m = c, h = f, $ = _, y = Bt((x) => v, (x) => (w) => T("Just", { head: x, tail: w }), $);
        if (y.tag === "Just" && m.intent === "Overview" && y._1.head.intent === "Overview" && !(m.fromCam.zoom === m.toCam.zoom && m.fromCam.center.x === m.toCam.center.x && m.fromCam.center.y === m.toCam.center.y) && !(y._1.head.fromCam.zoom === y._1.head.toCam.zoom && y._1.head.fromCam.center.x === y._1.head.toCam.center.x && y._1.head.fromCam.center.y === y._1.head.toCam.center.y) && Rn(m.toCam.center.x - y._1.head.fromCam.center.x) < 1e-4 && Rn(m.toCam.center.y - y._1.head.fromCam.center.y) < 1e-4 && Rn(m.toCam.zoom - y._1.head.fromCam.zoom) < 1e-4 && Rn(m.endT - y._1.head.startT) < 1e-4) {
          u = 1, a = p, c = y._1.head, f = !0, _ = y._1.tail;
          continue;
        }
        d = !1, g = [h ? { ...p, endT: m.endT, toCam: m.toCam, easing: m.easing, interp: Ve } : p, ...n($)];
      }
    }
    return g;
  }, n = (e) => t(0, e);
  return n;
})(), tT = (t) => (n) => {
  const e = wn(n), r = Al({ width: t.widthPx, height: t.heightPx })({
    vx: e.x,
    vy: e.y,
    vw: e.w,
    vh: e.h
  });
  return { w: r.vw, h: r.vh };
}, Pl = (t) => (n) => (e) => (r) => {
  const o = kn(e.center.x - r.x)(r.x + r.w - e.center.x), i = kn(e.center.y - r.y)(r.y + r.h - e.center.y), s = tT(t)(n);
  return fe(o <= 0 ? e.zoom : s.w / (o * 2))(i <= 0 ? e.zoom : s.h / (i * 2));
}, Lh = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = Ke(u);
    if (a.tag === "Just" && a._1.last.intent === "Overview") {
      e = [a._1.last, ...s], r = a._1.init;
      continue;
    }
    o = !1, i = { prefix: u, overview: s };
  }
  return i;
}, nT = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = Bt((c) => v, (c) => (f) => T("Just", { head: c, tail: f }), u);
    if (a.tag === "Just" && a._1.head.intent === "Overview") {
      e = kt(s)(a._1.head), r = a._1.tail;
      continue;
    }
    o = !1, i = { overview: s, rest: u };
  }
  return i;
}, fi = (t) => (n) => (e) => (r) => (o) => {
  const i = { width: n.widthPx, height: n.heightPx }, s = Al(i)((() => {
    const u = Ze(e)(o);
    return { vx: u.x, vy: u.y, vw: u.w, vh: u.h };
  })());
  return t.labelBasePx * r.placement.scale * (i.width <= 0 || s.vw <= 0 ? 0 : i.width / s.vw);
}, eT = (t) => (n) => (e) => (r) => (o) => {
  const i = fi(t)(n)(e)(r)(o);
  return i <= t.minimumReadableLabelPx ? o : { ...o, zoom: o.zoom * t.minimumReadableLabelPx / i };
}, rT = (t) => (n) => (e) => {
  const r = Tt((o) => o.scene.tag === "StepScene" ? T("Just", o.startT) : v)(n.spans);
  return N((o) => (i) => {
    const s = uo(zt, v, (u) => u.startT < i + 1e-4 && u.endT >= i - 1e-4, o);
    if (s.tag === "Nothing")
      return o;
    if (s.tag === "Just") {
      const u = s._1 >= 0 && s._1 < o.length ? T("Just", o[s._1]) : v;
      if (u.tag === "Nothing")
        return o;
      if (u.tag === "Just") {
        if (u._1.startT >= i - 1e-4)
          return o;
        const a = Kt((m) => m > i + 1e-4)(r), c = (() => {
          if (a.tag === "Nothing")
            return n.endT;
          if (a.tag === "Just")
            return a._1;
          l();
        })(), f = Gt(ot.compare)(Tt((m) => m.startT >= i - 1e-4 && m.startT < c - 1e-4 && (m.target.tag === "EdgeWindow" ? m.target._2.tag === "Extend" : m.target.tag === "TokenWindow" || m.target.tag === "FillWindow") ? T("Just", m.startT) : v)(n.windows)), _ = 0 < f.length ? f[0] : i, d = s._1 + 1 | 0, g = d < 1 ? o : Et(d, o.length, o), p = uo(
          zt,
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
            const h = (s._1 + p._1 | 0) + 2 | 0, $ = h < 1 ? o : Et(h, o.length, o), y = u._1.toCam.zoom === m._1.toCam.zoom && u._1.toCam.center.x === m._1.toCam.center.x && u._1.toCam.center.y === m._1.toCam.center.y ? u._1.fromCam : u._1.toCam, x = kt(s._1 < 1 ? [] : Et(0, s._1, o))({ ...u._1, endT: i, toCam: y }), w = m._1.startT - i;
            if (w <= 1e-4)
              return [...x, { ...m._1, fromCam: y }, ...$];
            const C = y.zoom === m._1.toCam.zoom && y.center.x === m._1.toCam.center.x && y.center.y === m._1.toCam.center.y, b = C ? i + 0 : i + fe(w)(t0(t)(y)(m._1.toCam)), k = { ...m._1, startT: b, endT: m._1.startT, fromCam: m._1.toCam, toCam: m._1.toCam }, E = { ...m._1, startT: i, endT: b, fromCam: y };
            return [...x, ...C ? [] : [E], ...k.endT > k.startT + 1e-4 ? [k] : [], { ...m._1, fromCam: m._1.toCam }, ...$];
          }
        }
      }
    }
    l();
  })(e)(r);
}, oT = (t) => (n) => (e) => (r) => ({
  ...r,
  fromCam: c1(t)(n)(e)(r.fromCam),
  toCam: c1(t)(n)(e)(r.toCam)
}), Eh = (t) => (n) => t.widthPx <= 0 ? 0 : fe(n / 4)(32 * n / t.widthPx), iT = (t) => (n) => (e) => (r) => (o) => {
  const i = Eh(n)(e), s = r + e / 2 - i;
  return o.x < r - e / 2 + i ? o.x - i + e / 2 : o.x + o.w > s ? o.x + o.w + i - e / 2 : r;
}, sT = (t) => (n) => (e) => Cn(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), uT = (t) => (n) => (e) => Cn(
  (r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e,
  t
), aT = (t) => (n) => (e) => Cn(
  (r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e,
  t
), cT = (t) => (n) => (e) => Cn(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), La = (t) => (n) => (e) => Cn((r) => e(r) && n >= r.startT && n < r.endT, t), fT = (t) => (n) => (e) => {
  if (n.length === 0)
    return e;
  const r = fe(160)(Zx(t)(n) + 31) / 2, o = fe(40)(t.labelBasePx * 1.2 + 23);
  return { x: e.x - r, y: e.y - o, w: e.w + r * 2, h: e.h + o * 2 };
}, lT = (t) => (n) => (e) => {
  const r = t.padding * 0.75, o = j(8);
  return yc((i) => {
    if (i.target.tag === "NodeWindow")
      return [];
    if (i.target.tag === "EdgeWindow") {
      if (i.target._2.tag === "Extend")
        return [{ startT: i.startT, endT: i.endT, bbox: Na(n)(e)(i.target._1), priority: 1 }];
      if (i.target._2.tag === "Retract")
        return [];
      l();
    }
    if (i.target.tag === "TokenWindow") {
      const s = bh(i.target._2)(n.edges);
      if (s.tag === "Just") {
        const u = (() => {
          if (i.target._3 === "Forward")
            return s._1;
          if (i.target._3 === "Backward")
            return gn(s._1);
          l();
        })();
        return xt(tn(0, 7))((a) => {
          const c = i.startT + (i.endT - i.startT) * (j(a) / o), f = (() => {
            const _ = i.startT + (i.endT - i.startT) * (j(a + 1 | 0) / o);
            return {
              startT: c,
              endT: _,
              box: (() => {
                const d = ci(u)(kh(i.target._7)(i.target._8)(((c + _) / 2 - i.startT) / kn(1e-4)(i.endT - i.startT)));
                if (d.tag === "Just")
                  return { x: d._1.x - r, y: d._1.y - r, w: 0 + r * 2, h: 0 + r * 2 };
                if (d.tag === "Nothing")
                  return { x: 0, y: 0, w: 0, h: 0 };
                l();
              })()
            };
          })();
          return [{ startT: f.startT, endT: f.endT, bbox: f1(i.target._6)(f.box), priority: 1 }];
        });
      }
      if (s.tag === "Nothing")
        return [
          {
            startT: i.startT,
            endT: i.endT,
            bbox: f1(i.target._6)(Na(n)(e)(i.target._2)),
            priority: 1
          }
        ];
      l();
    }
    if (i.target.tag === "FillWindow")
      return [
        {
          startT: i.startT,
          endT: i.endT,
          bbox: fT(t)(i.target._3)(Sl(n)(e)(cn(
            "Node",
            1,
            1,
            i.target._2,
            void 0,
            z,
            z
          ))),
          priority: 1
        }
      ];
    l();
  });
}, gT = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (o.tag === "Nothing")
    return i.zoom;
  if (o.tag === "Just")
    return kn(0)(Pl(n)(e)(i)((() => {
      const s = t.padding * r.placement.scale;
      return { x: o._1.x - s, y: o._1.y - s, w: o._1.w + s * 2, h: o._1.h + s * 2 };
    })()));
  l();
}, _T = (t) => (n) => {
  const e = Sh(t)(n);
  if (e.tag === "AtKeyframe")
    return pf(t)(e._1);
  if (e.tag === "InTransition")
    return te(R.compare, jn, pf(t)(e._1), pf(t)(e._2));
  l();
}, dT = (t) => (n) => (e) => La(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e && r.target._2 === "PlopOut") ? !0 : uT(t.windows)(n)(e) ? !1 : La(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e) ? !0 : aT(t.windows)(n)(e) ? !1 : Vx(e)(_T(t)(n)), Ah = (t) => (n) => Tt((e) => dT(t)(n)(e._1) ? T("Just", { x: e._2.x, y: e._2.y, w: e._2.w, h: e._2.h }) : v)(Jh(t.layout.nodes)), hT = (t) => (n) => {
  const e = Ah(t)(n);
  return e.length === 0 ? v : T("Just", Gr(e));
}, pT = (t) => Tt((n) => {
  const e = hT(t)(kn(n.startT)(n.endT - 1e-4));
  if (e.tag === "Nothing")
    return v;
  if (e.tag === "Just")
    return T("Just", { startT: n.startT, endT: n.endT, bbox: e._1, priority: 0 });
  l();
}), mT = (t) => (n) => (e) => (r) => (o) => [
  ...pT(o)(dt((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...lT(t)(o.layout)(e)(o.windows)
], $T = (t) => (n) => (e) => (r) => (o) => (i) => Sx(t)(n)(i.layout)(o.endT)(Tt((s) => s.scene.tag === "StepScene" ? T("Just", s.startT) : v)(i.spans))(mT(t)(e)(r)(o)(i)), yT = (t) => (n) => {
  const e = Sh(t)(n);
  if (e.tag === "AtKeyframe")
    return mf(t)(e._1);
  if (e.tag === "InTransition")
    return te(R.compare, jn, mf(t)(e._1), mf(t)(e._2));
  l();
}, vT = (t) => (n) => (e) => La(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e) ? !0 : sT(t.windows)(n)(e) ? !1 : La(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._1 === e) ? !0 : cT(t.windows)(n)(e) ? !1 : Kx(e)(yT(t)(n)), xT = (t) => (n) => {
  const e = [
    ...Ah(t)(n),
    ...Tt((r) => vT(t)(n)(r._1) ? T("Just", kl(r._2)) : v)(Jh(t.layout.edges))
  ];
  return e.length === 0 ? v : T("Just", Gr(e));
}, TT = (t) => (n) => (e) => {
  const r = Ze(t)(e);
  return n.x >= r.x && n.x + n.w <= r.x + r.w;
}, _1 = (t) => (n) => (e) => (r) => e >= n ? dr(t + n - e / 2)(t + e / 2)(r) : t + n / 2, d1 = (t) => (n) => (e) => (r) => {
  if ((() => {
    const s = Ze(n)(e);
    return r.x >= s.x && r.y >= s.y && r.x + r.w <= s.x + s.w && r.y + r.h <= s.y + s.h;
  })())
    return e;
  const o = { ...e, zoom: fe(e.zoom)(Pl(t)(n)({ ...e, center: { x: r.x + r.w / 2, y: r.y + r.h / 2 } })(r)) }, i = Ze(n)(o);
  return { ...o, center: { x: _1(r.x)(r.w)(i.w)(e.center.x), y: _1(r.y)(r.h)(i.h)(e.center.y) } };
}, Ph = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  if (o.tag === "Nothing")
    return s;
  if (o.tag === "Just") {
    const u = t.padding * r.placement.scale, a = { x: o._1.x - u, y: o._1.y - u, w: o._1.w + u * 2, h: o._1.h + u * 2 }, c = { x: a.x + a.w / 2, y: a.y + a.h / 2 }, f = { ...s, center: c }, _ = { ...f, zoom: Pl(n)(e)(f)(a) }, d = Ze(e)(_);
    return i.tag === "Nothing" ? {
      ..._,
      center: {
        x: d.w >= o._1.w ? o._1.x + o._1.w / 2 : dr(o._1.x + d.w / 2)(o._1.x + o._1.w - d.w / 2)(c.x),
        y: d.h >= o._1.h ? o._1.y + o._1.h / 2 : dr(o._1.y + d.h / 2)(o._1.y + o._1.h - d.h / 2)(c.y)
      }
    } : i.tag === "Just" ? {
      ..._,
      center: {
        x: d.w >= o._1.w ? o._1.x + o._1.w / 2 : dr(o._1.x + d.w / 2)(o._1.x + o._1.w - d.w / 2)(i._1.x + i._1.w / 2),
        y: d.h >= o._1.h ? o._1.y + o._1.h / 2 : dr(o._1.y + d.h / 2)(o._1.y + o._1.h - d.h / 2)(i._1.y + i._1.h / 2)
      }
    } : {
      ..._,
      center: {
        x: (() => {
          if (d.w >= o._1.w)
            return o._1.x + o._1.w / 2;
          l();
        })(),
        y: (() => {
          if (d.h >= o._1.h)
            return o._1.y + o._1.h / 2;
          l();
        })()
      }
    };
  }
  l();
}, Rh = (t) => (n) => (e) => {
  const r = t.x + t.w / 2, o = e >= t.w ? { lo: r, hi: r } : { lo: t.x + e / 2, hi: t.x + t.w - e / 2 };
  if (e >= n.w) {
    const a = kn(o.lo)(n.x + n.w - e / 2), c = fe(o.hi)(n.x + e / 2);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const i = n.x + n.w / 2;
  if (e >= n.w) {
    const a = kn(o.lo)(i), c = fe(o.hi)(i);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const s = kn(o.lo)(n.x + e / 2), u = fe(o.hi)(n.x + n.w - e / 2);
  return s <= u ? { lo: s, hi: u } : o;
}, wT = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? v : T("Just", { ...e, startT: kn(t)(e.startT), endT: fe(n)(e.endT) }), NT = (t) => (n) => (e) => (r) => (o) => (i) => Tt(wT(i.startT)(i.endT))(B(oT(e)(i.layout)(i.placement))($T(t)(n)(r)(i.edgeEndpoints)(o)(i))), Fh = (t) => (n) => (e) => (r) => {
  const o = wn(t), i = fe(r.zoom)(o.w / kn(1e-4)(n.w));
  return {
    ...r,
    center: {
      ...r.center,
      x: (() => {
        const s = Rh(o)(n)(o.w / kn(1e-4)(i));
        return dr(s.lo)(s.hi)(e.center.x);
      })()
    },
    zoom: i
  };
}, CT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = Eh(n)(u), c = wn(e), f = { x: c.x - a, y: c.y - a, w: c.w + a * 2, h: c.h + a * 2 }, _ = (() => {
    if (o.tag === "Nothing")
      return s.center.x;
    if (o.tag === "Just")
      return iT()(n)(u)(i.center.x)(o._1);
    l();
  })();
  if (r.tag === "Nothing") {
    const d = f.x + f.w / 2;
    return u >= f.w ? dr(d)(d)(_) : dr(f.x + u / 2)(f.x + f.w - u / 2)(_);
  }
  if (r.tag === "Just") {
    const d = { x: r._1.x - a, y: r._1.y - a, w: r._1.w + a * 2, h: r._1.h + a * 2 };
    if (u < d.w) {
      const p = f.x + f.w / 2;
      return u >= f.w ? dr(p)(p)(_) : dr(f.x + u / 2)(f.x + f.w - u / 2)(_);
    }
    const g = Rh(f)(d)(u);
    return dr(g.lo)(g.hi)(_);
  }
  l();
}, bT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Ze(e)(s);
  return u.w <= 0 ? s : { ...s, center: { ...s.center, x: CT()(n)(e)(r)(o)(i)(s)(u.w) } };
}, JT = (t) => (n) => (e) => {
  const r = wn(t), o = r.h / kn(1e-4)(e.zoom), i = r.w / kn(1e-4)(e.zoom);
  return {
    ...e,
    center: {
      x: i >= n.w ? n.x + n.w / 2 : l1(n.x + i / 2)(n.x + n.w - i / 2)(e.center.x),
      y: o >= n.h ? n.y + n.h / 2 : l1(n.y + o / 2)(n.y + n.h - o / 2)(e.center.y)
    }
  };
}, li = (t) => (n) => (e) => JT(t)((() => {
  const r = n * e.placement.scale, o = wn(e.layout);
  return {
    x: o.x * e.placement.scale + e.placement.tx - r,
    y: o.y * e.placement.scale + e.placement.ty - r,
    w: o.w * e.placement.scale + r * 2,
    h: o.h * e.placement.scale + r * 2
  };
})()), kT = (t) => (n) => (e) => (r) => {
  const o = Ze(t)(r), i = wn(t), s = (u) => {
    const a = li(t)(n)(e)(u);
    return li(t)(n)(e)({
      ...a,
      zoom: kn(a.zoom)(kn(i.w / kn(1e-4)(2 * fe(a.center.x - o.x)(o.x + o.w - a.center.x)))(i.h / kn(1e-4)(2 * fe(a.center.y - o.y)(o.y + o.h - a.center.y))))
    });
  };
  return (u) => s(s(u));
}, ST = (t) => (n) => (e) => (r) => li(e)(t.padding)(r)(Qv(t)(n)(e)(r.placement)(wn(r.layout)).camera), Gh = (t) => (n) => (e) => (r) => (o) => {
  const i = ST(t)(n)(e)(o), s = Kt((u) => u.direction === "DiveIn" && Zo(u.childPath)(o.path))(r.dives);
  if (s.tag === "Just") {
    const u = oa(r)(s._1.parentPath)(s._1.startT)(s._1.endT);
    if (u.tag === "Just") {
      const a = Sa(s._1.node)(u._1.layout.nodes);
      if (a.tag === "Just") {
        const c = a._1.w * u._1.placement.scale, f = a._1.h * u._1.placement.scale, _ = fe(c)(f * 2), d = qv(n)(e)({
          h: f,
          w: _,
          x: a._1.x * u._1.placement.scale + u._1.placement.tx + (c - _) * 0.5,
          y: a._1.y * u._1.placement.scale + u._1.placement.ty
        });
        return kT(e)(t.padding)(o)(d)(d.zoom > i.zoom ? d : i);
      }
      if (a.tag === "Nothing")
        return i;
      l();
    }
    if (u.tag === "Nothing")
      return i;
    l();
  }
  if (s.tag === "Nothing")
    return i;
  l();
}, Ih = (t) => (n) => (e) => (r) => (o) => {
  const i = Ze(e)(o);
  return (() => {
    const s = wn(r.layout), u = s.x * r.placement.scale + r.placement.tx, a = s.y * r.placement.scale + r.placement.ty;
    return u >= i.x && a >= i.y && u + s.w * r.placement.scale <= i.x + i.w && a + s.h * r.placement.scale <= i.y + i.h;
  })() && fi(t)(n)(e)(r)(o) >= t.minimumReadableLabelPx;
}, h1 = (t) => (n) => (e) => (r) => (o) => (i) => Ih(t)(n)(e)(r)(o) ? o : eT(t)(n)(e)(r)(i), LT = (t) => (n) => (e) => {
  const r = nT([])(e), o = Bt((a) => v, (a) => (c) => T("Just", { head: a, tail: c }), r.rest), i = r.overview.length - 1 | 0, s = i >= 0 && i < r.overview.length ? T("Just", r.overview[i]) : v, u = 0 < r.overview.length ? T("Just", r.overview[0]) : v;
  if (u.tag === "Just") {
    if (s.tag === "Just") {
      if (o.tag === "Just")
        return Rn(u._1.startT - n.startT) < 1e-4 && o._1.head.intent === "ActionFocus" ? [
          {
            startT: u._1.startT,
            endT: s._1.endT,
            fromCam: t,
            toCam: t,
            easing: u._1.easing,
            interp: Ve,
            intent: Ps
          },
          { ...o._1.head, fromCam: t },
          ...o._1.tail
        ] : e;
      if (o.tag === "Nothing" && Rn(u._1.startT - n.startT) < 1e-4)
        return [
          {
            startT: u._1.startT,
            endT: s._1.endT,
            fromCam: t,
            toCam: t,
            easing: u._1.easing,
            interp: Ve,
            intent: Ps
          }
        ];
    }
    return e;
  }
  if (u.tag === "Nothing" && s.tag === "Nothing" && o.tag === "Just" && Rn(o._1.head.startT - n.startT) < 1e-4 && o._1.head.intent === "ActionFocus") {
    const a = Bt((c) => v, (c) => (f) => T("Just", { head: c, tail: f }), o._1.tail);
    if (a.tag === "Nothing")
      return [
        {
          startT: o._1.head.startT,
          endT: o._1.head.endT,
          fromCam: t,
          toCam: t,
          easing: o._1.head.easing,
          interp: Ve,
          intent: Ps
        }
      ];
    if (a.tag === "Just")
      return [
        {
          startT: o._1.head.startT,
          endT: o._1.head.endT,
          fromCam: t,
          toCam: t,
          easing: o._1.head.easing,
          interp: Ve,
          intent: Ps
        },
        { ...a._1.head, fromCam: t },
        ...a._1.tail
      ];
    l();
  }
  return e;
}, ET = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ ...e._1.head, fromCam: t }, ...e._1.tail];
  l();
}, AT = (t) => (n) => {
  const e = (o) => (i) => (s) => {
    let u = o, a = i, c = s, f = !0, _;
    for (; f; ) {
      const d = u, g = a, m = Bt((h) => v, (h) => ($) => T("Just", { head: h, tail: $ }), c);
      if (m.tag === "Nothing") {
        f = !1, _ = kt(d)(g);
        continue;
      }
      if (m.tag === "Just") {
        if (g.intent === "Overview" && m._1.head.intent === "ActionFocus" && Rn(g.endT - m._1.head.startT) < 1e-4 && g.fromCam.zoom === g.toCam.zoom && g.fromCam.center.x === g.toCam.center.x && g.fromCam.center.y === g.toCam.center.y && (() => {
          const h = m._1.head.startT;
          return !(m._1.head.fromCam.zoom === m._1.head.toCam.zoom && m._1.head.fromCam.center.x === m._1.head.toCam.center.x && m._1.head.fromCam.center.y === m._1.head.toCam.center.y) && Cn(
            ($) => Rn($.startT - h) < 1e-4 && ($.target.tag === "EdgeWindow" ? $.target._2.tag === "Extend" : $.target.tag === "TokenWindow" || $.target.tag === "FillWindow"),
            t.windows
          );
        })()) {
          const h = m._1.head.startT, $ = Gt(ot.compare)(Tt((C) => C.target.tag === "EdgeWindow" && C.target._2.tag === "Extend" && Rn(C.endT - h) < 1e-4 ? T("Just", C.startT) : v)(t.windows)), y = 0 < $.length ? $[0] : h, x = kn(g.startT)(y - (m._1.head.endT - m._1.head.startT)), w = { ...g, endT: x };
          u = kt(w.endT > w.startT ? kt(d)(w) : d)({ ...m._1.head, startT: x, endT: y }), a = { ...m._1.head, startT: y, fromCam: m._1.head.toCam }, c = m._1.tail;
          continue;
        }
        u = kt(d)(g), a = m._1.head, c = m._1.tail;
        continue;
      }
      l();
    }
    return _;
  }, r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just")
    return e([])(r._1.head)(r._1.tail);
  l();
}, PT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = wn(r.layout), u = {
    x: s.x * r.placement.scale + r.placement.tx,
    y: s.y * r.placement.scale + r.placement.ty,
    w: s.w * r.placement.scale,
    h: s.h * r.placement.scale
  }, a = Fh(e)(u)(o)(i);
  return u.w / kn(1e-4)(u.h) >= 0.33 && i.zoom / kn(1e-4)(a.zoom) <= 1.25 && Ze(e)(a).w >= u.w - 1e-3 && fi(t)(n)(e)(r)(a) >= t.minimumReadableLabelPx * 0.85 ? a : i;
}, RT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = wn(r.layout), a = u.w * r.placement.scale, c = a / kn(1e-4)(u.h * r.placement.scale);
  if (o.tag === "Nothing")
    return s;
  if (o.tag === "Just") {
    if (TT(e)(o._1)(s))
      return s;
    const f = Fh(e)(o._1)(i)(s);
    return s.zoom / kn(1e-4)(f.zoom) <= 1.25 && (fi(t)(n)(e)(r)(f) >= t.minimumReadableLabelPx - 1e-3 || o._1.w >= a - 1e-3 && c >= 0.33 && fi(t)(n)(e)(r)(f) >= t.minimumReadableLabelPx * 0.85) ? f : s;
  }
  l();
}, FT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = {
    ...s,
    center: (() => {
      if (i.tag === "Nothing")
        return s.center;
      if (i.tag === "Just")
        return { x: i._1.x + i._1.w / 2, y: i._1.y + i._1.h / 2 };
      l();
    })()
  }, a = fi(t)(n)(e)(r)(u);
  return bT()(n)(e)(o)(i)(s)(RT(t)(n)(e)(r)(o)(s)(PT(t)(n)(e)(r)(s)(a <= 0 ? u : { ...u, zoom: fe(u.zoom * t.minimumReadableLabelPx / a)(gT(t)(n)(e)(r)(i)(u)) })));
}, $f = (t) => (n) => (e) => (r) => (o) => (i) => (s) => r.placement.scale === 1 && r.placement.tx === 0 && r.placement.ty === 0 ? Ph(t)(n)(e)(r)(o)(i)(s) : Ih(t)(n)(e)(r)(s) ? s : FT(t)(n)(e)(r)(o)(i)(s), p1 = (t) => {
  const n = (r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, f = s, _ = Bt((d) => v, (d) => (g) => T("Just", { head: d, tail: g }), f);
      if (_.tag === "Just" && _._1.head.intent === "Overview") {
        i = kt(c)(_._1.head), s = _._1.tail;
        continue;
      }
      u = !1, a = { overview: c, rest: f };
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
                interp: Ve,
                intent: Ec
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
      l();
    }
    return a;
  })([])(t);
}, GT = (t) => (n) => (e) => {
  const r = Lh([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && r.prefix[i].intent === "ActionFocus" && Rn(r.overview[o].endT - n.endT) < 1e-4)
        return [
          ...r.prefix,
          {
            startT: r.overview[0].startT,
            endT: r.overview[o].endT,
            fromCam: r.prefix[i].toCam,
            toCam: r.prefix[i].toCam,
            easing: r.overview[0].easing,
            interp: Ve,
            intent: Ec
          }
        ];
    }
    return e;
  }
  return 0 < r.overview.length && r.prefix.length - 1 | 0, e;
}, m1 = (t) => (n) => (e) => {
  const r = Lh([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && (() => {
        const s = r.overview[o].endT;
        return r.prefix[i].intent === "ActionFocus" && (() => {
          const u = r.overview.length - 1 | 0;
          return Cn((a) => a.direction === "DiveIn" && Zo(a.parentPath)(t.path) && Rn(a.startT - s) < 1e-4, n) && (u >= 0 && u < r.overview.length && 0 < r.overview.length ? r.overview[u].endT - r.overview[0].startT <= 1.0001 : !0);
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
            interp: Ve,
            intent: Ec
          }
        ];
    }
    return e;
  }
  return e;
}, Bh = (t) => (n) => {
  const e = n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y ? (n.startT + n.endT) / 2 : n.endT + 1e-4, r = Tt((o) => o.target.tag === "EdgeWindow" ? o.target._2.tag === "Extend" ? T("Just", Na(t.layout)(t.edgeEndpoints)(o.target._1)) : v : o.target.tag === "TokenWindow" ? T(
    "Just",
    (() => {
      const i = [
        ...Tt((s) => {
          const u = Sa(s)(t.layout.nodes);
          return u.tag === "Just" ? T("Just", { x: u._1.x, y: u._1.y, w: u._1.w, h: u._1.h }) : v;
        })([o.target._4, o.target._5]),
        ...(() => {
          const s = bh(o.target._2)(t.layout.edges), u = kh(o.target._7)(o.target._8)((e - o.startT) / kn(1e-4)(o.endT - o.startT)), a = (() => {
            if (s.tag === "Just")
              return ci((() => {
                if (o.target._3 === "Forward")
                  return s._1;
                if (o.target._3 === "Backward")
                  return gn(s._1);
                l();
              })())(u);
            if (s.tag === "Nothing")
              return v;
            l();
          })();
          return a.tag === "Just" ? [{ x: a._1.x, y: a._1.y, w: 0, h: 0 }] : [];
        })()
      ];
      return i.length === 0 ? Na(t.layout)(t.edgeEndpoints)(o.target._2) : Gr(i);
    })()
  ) : o.target.tag === "FillWindow" ? T(
    "Just",
    Sl(t.layout)(t.edgeEndpoints)(cn(
      "Node",
      1,
      1,
      o.target._2,
      void 0,
      z,
      z
    ))
  ) : v)(dt((o) => o.startT <= e && e < o.endT, t.windows));
  return r.length === 0 ? v : T(
    "Just",
    (() => {
      const o = Gr(r);
      return { x: o.x * t.placement.scale + t.placement.tx, y: o.y * t.placement.scale + t.placement.ty, w: o.w * t.placement.scale, h: o.h * t.placement.scale };
    })()
  );
}, Rl = (t) => (n) => {
  const e = xT(t)(n.endT + 1e-4);
  return e.tag === "Just" ? T(
    "Just",
    { x: e._1.x * t.placement.scale + t.placement.tx, y: e._1.y * t.placement.scale + t.placement.ty, w: e._1.w * t.placement.scale, h: e._1.h * t.placement.scale }
  ) : v;
}, IT = (t) => (n) => (e) => (r) => (o) => {
  const i = Rl(r)(o), s = (u) => {
    const a = fi(t)(n)(e)(r)(u), c = a <= 0 || a >= t.minimumReadableLabelPx ? u : { ...u, zoom: u.zoom * t.minimumReadableLabelPx / a };
    return i.tag === "Just" && (() => {
      const f = Ze(e)(c);
      return !(i._1.x >= f.x && i._1.y >= f.y && i._1.x + i._1.w <= f.x + f.w && i._1.y + i._1.h <= f.y + f.h);
    })() ? u : c;
  };
  return o.intent === "DiveHome" || o.intent === "ActionFocus" && !(r.placement.scale === 1 && r.placement.tx === 0 && r.placement.ty === 0) ? o : { ...o, fromCam: s(o.fromCam), toCam: s(o.toCam) };
}, BT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Bh(r)(i), u = Rl(r)(i), a = (c) => {
    const f = Ph(t)(n)(e)(r)(u)(s)(c);
    return { ...f, zoom: fe(o.zoom)(f.zoom) };
  };
  return { ...i, fromCam: a(i.fromCam), toCam: a(i.toCam) };
}, DT = (t) => (n) => (e) => (r) => (o) => (i) => i.intent === "ActionFocus" ? BT(t)(n)(e)(r)(o)(i) : {
  ...i,
  fromCam: h1(t)(n)(e)(r)(o)(i.fromCam),
  toCam: h1(t)(n)(e)(r)(o)(i.toCam)
}, zT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o(i.fromCam), u = o(i.toCam), a = Bh(r)(i), c = Rl(r)(i);
  return s.zoom === u.zoom && s.center.x === u.center.x && s.center.y === u.center.y ? {
    ...i,
    fromCam: $f(t)(n)(e)(r)(c)(a)(s),
    toCam: $f(t)(n)(e)(r)(c)(a)(u)
  } : { ...i, fromCam: s, toCam: $f(t)(n)(e)(r)(c)(a)(u) };
}, HT = (t) => (n) => (e) => (r) => (o) => o.intent === "ActionFocus" ? zT(t)(n)(e)(r)(jx)(o) : o, Ea = (t) => (n) => (e) => (r) => (o) => (i) => hf(B(IT(t)(n)(e)(i))(rT(t)(i)(AT(i)((() => {
  const s = NT(t)(n)(e)(r)(o)(i);
  if (i.placement.scale === 1 && i.placement.tx === 0 && i.placement.ty === 0)
    return m1(i)(o.dives)(p1(g1(hf(B(HT(t)(n)(e)(i))(s)))));
  const u = Gh(t)(n)(e)(o)(i);
  return s.length === 0 ? [
    {
      startT: i.startT,
      endT: i.endT,
      fromCam: u,
      toCam: u,
      easing: dh,
      interp: Ve,
      intent: Ps
    }
  ] : GT()(i)(LT(u)(i)(m1(i)(o.dives)(p1(g1(hf(ET(u)(B(DT(t)(n)(e)(i)(u))(s))))))));
})())))), OT = (t) => (n) => (e) => (r) => (o) => Gt((i) => (s) => ot.compare(i.startT)(s.startT))(xt(o.segments)(Ea(t)(n)(e)(r)(o))), Js = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  if (i.direction === "DiveIn") {
    const u = li(e)(t.padding)(s)(So(t)(e)(Ea(t)(n)(e)(r)(o)(s))(i.startT - 1e-4).camera), a = Sa(i.node)(s.layout.nodes);
    return i.direction === "DiveIn" && a.tag === "Just" ? d1(n)(e)(u)({
      x: a._1.x * s.placement.scale + s.placement.tx,
      y: a._1.y * s.placement.scale + s.placement.ty,
      w: a._1.w * s.placement.scale,
      h: a._1.h * s.placement.scale
    }) : u;
  }
  if (i.direction === "DiveOut") {
    const u = li(e)(t.padding)(s)(So(t)(e)(Ea(t)(n)(e)(r)(o)(s))(i.endT + 1e-4).camera), a = Sa(i.node)(s.layout.nodes);
    return i.direction === "DiveIn" && a.tag === "Just" ? d1(n)(e)(u)({
      x: a._1.x * s.placement.scale + s.placement.tx,
      y: a._1.y * s.placement.scale + s.placement.ty,
      w: a._1.w * s.placement.scale,
      h: a._1.h * s.placement.scale
    }) : u;
  }
  l();
}, WT = (t) => (n) => (e) => (r) => (o) => xt(o.dives)((i) => {
  const s = oa(o)(i.parentPath)(i.startT)(i.endT);
  if (s.tag === "Just") {
    const u = i.childPath, a = Kt((c) => Zo(c.path)(u))(o.segments);
    if (a.tag === "Just") {
      const c = Ea(t)(n)(e)(r)(o)(a._1), f = Gh(t)(n)(e)(o)(a._1), _ = Js(t)(n)(e)(r)(o)(i)(s._1), d = (() => {
        if (i.direction === "DiveIn")
          return f;
        if (i.direction === "DiveOut")
          return li(e)(t.padding)(a._1)(So(t)(e)(c)(i.startT - 1e-4).camera);
        l();
      })();
      if (i.direction === "DiveIn") {
        const g = Kt((p) => p.direction === "DiveIn" && Zo(p.parentPath)(i.childPath) && Rn(p.startT - i.endT) < 1e-4)(o.dives);
        if (g.tag === "Just") {
          const p = oa(o)(g._1.parentPath)(g._1.startT)(g._1.endT);
          if (p.tag === "Just") {
            if (i.direction === "DiveIn" && i.endT - i.startT > 0.12) {
              const m = i.endT - 0.12, h = {
                easing: kr,
                endT: m,
                fromCam: _,
                intent: $o,
                interp: mo,
                startT: i.startT,
                toCam: Js(t)(n)(e)(r)(o)(g._1)(p._1)
              };
              return [
                h,
                { ...h, startT: m, endT: i.endT, fromCam: Js(t)(n)(e)(r)(o)(g._1)(p._1) }
              ];
            }
            return [
              {
                startT: i.startT,
                endT: i.endT,
                fromCam: _,
                toCam: d,
                easing: kr,
                interp: mo,
                intent: $o
              }
            ];
          }
          if (p.tag === "Nothing")
            return [
              {
                startT: i.startT,
                endT: i.endT,
                fromCam: _,
                toCam: d,
                easing: kr,
                interp: mo,
                intent: $o
              }
            ];
          l();
        }
        if (g.tag === "Nothing")
          return [
            {
              startT: i.startT,
              endT: i.endT,
              fromCam: _,
              toCam: d,
              easing: kr,
              interp: mo,
              intent: $o
            }
          ];
        l();
      }
      if (i.direction === "DiveOut") {
        const g = Kt((p) => p.direction === "DiveIn" && Zo(p.parentPath)(i.childPath) && Rn(p.startT - i.endT) < 1e-4)(o.dives);
        if (g.tag === "Just") {
          const p = oa(o)(g._1.parentPath)(g._1.startT)(g._1.endT);
          if (p.tag === "Just") {
            if (i.direction === "DiveIn" && i.endT - i.startT > 0.12) {
              const m = i.endT - 0.12, h = {
                easing: kr,
                endT: m,
                fromCam: d,
                intent: $o,
                interp: mo,
                startT: i.startT,
                toCam: Js(t)(n)(e)(r)(o)(g._1)(p._1)
              };
              return [
                h,
                { ...h, startT: m, endT: i.endT, fromCam: Js(t)(n)(e)(r)(o)(g._1)(p._1) }
              ];
            }
            return [
              {
                startT: i.startT,
                endT: i.endT,
                fromCam: d,
                toCam: _,
                easing: kr,
                interp: mo,
                intent: $o
              }
            ];
          }
          if (p.tag === "Nothing")
            return [
              {
                startT: i.startT,
                endT: i.endT,
                fromCam: d,
                toCam: _,
                easing: kr,
                interp: mo,
                intent: $o
              }
            ];
          l();
        }
        if (g.tag === "Nothing")
          return [
            {
              startT: i.startT,
              endT: i.endT,
              fromCam: d,
              toCam: _,
              easing: kr,
              interp: mo,
              intent: $o
            }
          ];
      }
      l();
    }
    if (a.tag === "Nothing")
      return [];
    l();
  }
  if (s.tag === "Nothing")
    return [];
  l();
}), Dh = (t) => (n) => (e) => (r) => (o) => [
  ...WT(t)(n)(e)(r)(o),
  ...OT(t)(n)(e)(r)(o)
], Fi = (t, n, e) => ({ tag: t, _1: n, _2: e }), QT = (t) => t, Gi = (t, n) => ({ tag: t, _1: n }), Fl = (t) => t, Aa = (t, n) => ({ tag: t, _1: n }), yf = /* @__PURE__ */ Aa("NotYet"), $1 = /* @__PURE__ */ Aa("Consumed"), qT = /* @__PURE__ */ Fl("FromSource"), y1 = /* @__PURE__ */ Fl("FromTarget"), MT = /* @__PURE__ */ Fl("FromBoth"), vf = /* @__PURE__ */ Gi("Hidden"), zh = /* @__PURE__ */ Gi("Visible"), i0 = /* @__PURE__ */ QT("ExtendFromSource"), xf = /* @__PURE__ */ Fi("Retracted"), Hh = /* @__PURE__ */ Fi("Extended"), XT = {
  eq: (t) => (n) => t.tag === "Retracted" ? n.tag === "Retracted" : t.tag === "Extending" ? n.tag === "Extending" && (t._1 === "ExtendFromSource" ? n._1 === "ExtendFromSource" : t._1 === "ExtendFromTarget" && n._1 === "ExtendFromTarget") && t._2 === n._2 : t.tag === "Extended" ? n.tag === "Extended" : t.tag === "Retracting" && n.tag === "Retracting" && (t._1 === "FromSource" ? n._1 === "FromSource" : t._1 === "FromTarget" ? n._1 === "FromTarget" : t._1 === "FromBoth" && n._1 === "FromBoth") && t._2 === n._2
}, Gl = (t) => t, Pa = { eq: /* @__PURE__ */ gs(Eo) }, Il = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, gi = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, v1 = Mt.foldMap(dv(R)), Bl = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, UT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, YT = /* @__PURE__ */ dn(R)(Mt), VT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, KT = /* @__PURE__ */ dn(R)(Mt), jT = /* @__PURE__ */ dn(R)(Mt), ZT = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, Oh = /* @__PURE__ */ Gl("Backdrop"), tw = /* @__PURE__ */ Gl("FlyThrough"), Ee = /* @__PURE__ */ Gl("Active"), Ra = (t) => (n) => (e) => {
  const r = Kt((o) => Pa.eq(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return Kt((o) => Pa.eq(o.path)(n))(t.segments);
  l();
}, nw = (t) => (n) => {
  if (n.scene.tag === "Structural")
    return n.scene._1.to;
  if (n.scene.tag === "DataFlow")
    return n.scene._1.keyframe;
  if (n.scene.tag === "Hold")
    return n.scene._1;
  if (n.scene.tag === "EnterNode" || n.scene.tag === "ExitNode" || n.scene.tag === "StepScene")
    return t;
  l();
}, ew = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: Cl,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: z
}), rw = (t) => B((n) => n < 1 ? [] : Et(0, n, t))(tn(0, t.length - 1 | 0)), ia = (t) => (n) => {
  const e = Il(n)(t.keyframes);
  if (e.tag === "Nothing")
    return z;
  if (e.tag === "Just")
    return e._1.nodes;
  l();
}, Tf = (t) => (n) => {
  const e = Il(n)(t.keyframes);
  if (e.tag === "Nothing")
    return z;
  if (e.tag === "Just")
    return e._1.edges;
  l();
}, ow = /* @__PURE__ */ N((t) => (n) => {
  const e = Ke(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? kt(e._1.init)({ ...e._1.last, endT: gi(e._1.last.endT)(n.endT), windows: kt(e._1.last.windows)(n) }) : kt(t)({ endT: n.endT, windows: [n] });
})([]), iw = (t) => (n) => (e) => v1((r) => v1((o) => o.target.tag === "FillWindow" ? o.startT <= e ? cn("Node", 1, 1, o.target._2, void 0, z, z) : z : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? cn("Node", 1, 1, o.target._4, void 0, z, z) : z)(r.windows))(dt(
  (r) => e <= r.endT + t,
  ow(Gt((r) => (o) => ot.compare(r.startT)(o.startT))(dt(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), sw = (t) => (n) => (e) => Cn(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), uw = (t) => (n) => (e) => Cn((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), aw = (t) => (n) => (e) => Cn((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), cw = (t) => (n) => (e) => Cn(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), Wh = (t) => {
  const n = Hd(
    v,
    Fd,
    (o) => ia(t)((() => {
      if (o.scene.tag === "Structural")
        return o.scene._1.to;
      if (o.scene.tag === "DataFlow")
        return o.scene._1.keyframe;
      if (o.scene.tag === "Hold")
        return o.scene._1;
      if (o.scene.tag === "EnterNode" || o.scene.tag === "ExitNode" || o.scene.tag === "StepScene")
        return t.initialKeyframe;
      l();
    })()).tag === "Leaf" ? v : T("Just", gi(o.startT)(o.endT - 1e-4)),
    t.spans
  ), e = (() => {
    if (n.tag === "Nothing")
      return t.startT;
    if (n.tag === "Just")
      return n._1;
    l();
  })(), r = Kt((o) => o.target.tag === "NodeWindow" && o.target._2 === "PlopIn")(Gt((o) => (i) => ot.compare(o.startT)(i.startT))(t.windows));
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return gi(r._1.startT)(r._1.endT - 1e-4);
  l();
}, Fa = (t) => (n) => (e) => Kt((r) => e(r) && n >= r.startT && n < r.endT)(t), Fc = (t) => (n) => {
  if (n < t.startT)
    return Te("AtKeyframe", t.initialKeyframe);
  const e = Kt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Te("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Te("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Te("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode" || e._1.scene.tag === "StepScene")
      return Te("AtKeyframe", t.initialKeyframe);
    l();
  }
  if (e.tag === "Nothing")
    return Te("AtKeyframe", N(nw)(t.initialKeyframe)(t.spans));
  l();
}, fw = (t) => (n) => {
  const e = Fc(t)(n), r = Il((() => {
    if (e.tag === "AtKeyframe")
      return e._1;
    if (e.tag === "InTransition")
      return e._2;
    l();
  })())(t.keyframes);
  if (r.tag === "Just")
    return r._1.kind;
  if (r.tag === "Nothing")
    return $u;
  l();
}, lw = (t) => (n) => {
  const e = Fc(t)(n);
  if (e.tag === "AtKeyframe")
    return Un(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return Un(3)(e._2) === "kf-" ? "" : e._2;
  l();
}, gw = {
  nodes: z,
  edges: z,
  tokens: z,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: $u,
  visited: z,
  nodeFadeAlpha: z,
  nodeLabelFadeAlpha: z,
  edgeFadeAlpha: z,
  nodeInvert: z
}, _w = { nodes: z, edges: z, chipExtras: z, edgeLabels: z }, dw = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: _w,
    placement: Cl,
    windows: [],
    spans: [],
    keyframes: z,
    initialKeyframe: "",
    edgeEndpoints: z
  },
  state: gw,
  bgAlpha: 1,
  minis: [],
  role: Ee
}, Ga = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : dw;
}, hw = (t) => (n) => {
  const e = Fc(t)(n);
  if (e.tag === "AtKeyframe")
    return ia(t)(e._1);
  if (e.tag === "InTransition")
    return te(R.compare, jn, ia(t)(e._1), ia(t)(e._2));
  l();
}, pw = (t) => (n) => {
  const e = Fc(t)(n);
  if (e.tag === "AtKeyframe")
    return Tf(t)(e._1);
  if (e.tag === "InTransition")
    return te(R.compare, jn, Tf(t)(e._1), Tf(t)(e._2));
  l();
}, Qh = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : gi(0)(Bl(1)((n - t.startT) / e));
}, mw = (t) => (n) => (e) => e0(So(t.cameraConfig)(t.layout)(t.cameraSpans)(e.startT).camera)(So(t.cameraConfig)(t.layout)(t.cameraSpans)(e.endT).camera)(Qh(e)(n)), $w = (t) => {
  const n = gi(0)(Bl(1)(t));
  return n <= 0 || n >= 1 ? 0 : Ne(3.141592653589793 * n);
}, es = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : gi(0)(Bl(1)((n - t.startT) / e));
}, yw = (t) => (n) => (e) => (r) => (o) => {
  const i = Fa(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._2.tag === "Retract" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = Ca(t.timing.edgeEasing)(es(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : ka("Extend", i0);
    if (u.tag === "Retract")
      return Fi("Retracting", u._1, s);
    if (u.tag === "Extend")
      return Fi("Extending", u._1, s);
    l();
  }
  if (i.tag === "Nothing") {
    if (sw(n)(e)(o))
      return xf;
    const s = Fa(n)(e)((u) => u.target.tag === "EdgeWindow" && u.target._1 === o);
    if (s.tag === "Just") {
      const u = Ca(t.timing.edgeEasing)(es(s._1)(e)), a = s._1.target.tag === "EdgeWindow" ? s._1.target._2 : ka("Extend", i0);
      if (a.tag === "Retract")
        return Fi("Retracting", a._1, u);
      if (a.tag === "Extend")
        return Fi("Extending", a._1, u);
      l();
    }
    if (s.tag === "Nothing")
      return cw(n)(e)(o) ? xf : UT(o)(r) ? Hh : xf;
  }
  l();
}, vw = (t) => (n) => (e) => {
  const r = pw(n)(e);
  return YT(B((o) => J(o, yw(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return z;
      if (i.tag === "Node")
        return cn("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      l();
    };
    return nn(Re.foldr, o(n.layout.edges));
  })()));
}, xw = (t) => (n) => (e) => (r) => {
  const o = Fa(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r && i.target._2 === "PlopOut");
  if (o.tag === "Just") {
    const i = es(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : o0;
    if (s === "PlopIn")
      return Gi("PloppingIn", i);
    if (s === "PlopOut")
      return Gi("PloppingOut", i);
    l();
  }
  if (o.tag === "Nothing") {
    if (uw(t)(n)(r))
      return vf;
    const i = Fa(t)(n)((s) => s.target.tag === "NodeWindow" && s.target._1 === r);
    if (i.tag === "Just") {
      const s = es(i._1)(n), u = i._1.target.tag === "NodeWindow" ? i._1.target._2 : o0;
      if (u === "PlopIn")
        return Gi("PloppingIn", s);
      if (u === "PlopOut")
        return Gi("PloppingOut", s);
      l();
    }
    if (i.tag === "Nothing")
      return aw(t)(n)(r) ? vf : VT(r)(e) ? zh : vf;
  }
  l();
}, Tw = (t) => (n) => {
  const e = hw(t)(n);
  return KT(B((r) => J(r, xw(t.windows)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return z;
      if (o.tag === "Node")
        return cn("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      l();
    };
    return nn(Re.foldr, r(t.layout.nodes));
  })()));
}, ww = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? J(
  n.target._1,
  e < n.startT ? yf : e >= n.endT ? $1 : Aa(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: Ca(t.timing.tokenEasing)(es(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? J(
  n.target._1,
  e < n.startT ? yf : e >= n.endT ? $1 : Aa("Filling", { node: n.target._2, progress: es(n)(e), labels: n.target._3 })
) : J("", yf), Nw = (t) => (n) => (e) => jT(B((r) => ww(t)(r)(e))(dt(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), Cw = (t) => (n) => (e) => ({
  nodes: Tw(n)(e),
  edges: vw(t)(n)(e),
  tokens: Nw(t)(n.windows)(e),
  camera: So(t.cameraConfig)(n.layout)(t.cameraSpans)(e).camera,
  frameTitle: lw(n)(e),
  staticKind: fw(n)(e),
  visited: iw(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: z,
  nodeLabelFadeAlpha: z,
  edgeFadeAlpha: z,
  nodeInvert: z
}), Hi = (t) => (n) => (e) => (r) => ({ segment: e, state: Cw(t)(e)(n), bgAlpha: 1, minis: bw(t)(n)(e), role: r }), bw = (t) => (n) => (e) => Tt((r) => {
  const o = Ra(t)(kt(e.path)(r))(n);
  if (o.tag === "Just")
    return T("Just", { ...Hi(t)(ZT(o._1.startT)(o._1.endT - 1e-4)(n))(o._1)(Oh), bgAlpha: 0 });
  if (o.tag === "Nothing")
    return v;
  l();
})((() => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return z;
    if (o.tag === "Node")
      return cn("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
    l();
  };
  return nn(Re.foldr, r(e.layout.nodes));
})()), Jw = (t) => (n) => {
  if (t.direction === "DiveIn")
    return Wh(n);
  if (t.direction === "DiveOut")
    return t.startT - 1e-4;
  l();
}, qh = (t) => (n) => Tt((e) => {
  const r = Kt((o) => o.direction === "DiveIn" && Pa.eq(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : Et(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = Ra(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return T(
        "Just",
        (() => {
          const i = Hi(t)(r._1.startT - 1e-4)(o._1)(Oh);
          return { ...i, state: { ...i.state, nodeFadeAlpha: cn("Node", 1, 1, r._1.node, 0, z, z) } };
        })()
      );
    if (o.tag === "Nothing")
      return v;
    l();
  }
  if (r.tag === "Nothing")
    return v;
  l();
})(rw(n)), Mh = (t) => (n) => {
  const e = dt((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : ew(t);
}, kw = (t) => (n) => (e) => (r) => {
  const o = (u) => {
    const a = Hi(t)((() => {
      if (e.direction === "DiveIn")
        return e.startT - 1e-4;
      if (e.direction === "DiveOut")
        return e.endT;
      l();
    })())(u)(tw);
    return {
      ...a,
      bgAlpha: 1,
      minis: dt((c) => !Pa.eq(c.segment.path)(e.childPath), a.minis),
      state: {
        ...a.state,
        edgeFadeAlpha: z,
        nodeFadeAlpha: cn("Node", 1, 1, e.node, 0, z, z),
        nodeInvert: z,
        tokens: z
      }
    };
  }, i = Ra(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT;
    l();
  })()), s = Ra(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    l();
  })());
  return [
    ...qh(t)(e.parentPath),
    ...(() => {
      if (i.tag === "Just") {
        if (s.tag === "Just")
          return [o(i._1), { ...Hi(t)(Jw(e)(s._1))(s._1)(Ee), bgAlpha: 1 }];
        if (s.tag === "Nothing")
          return [o(i._1)];
        l();
      }
      if (i.tag === "Nothing")
        return [Hi(t)(n)(Mh(t)(n))(Ee)];
      l();
    })()
  ];
}, Sw = (t) => (n) => Kt((e) => n >= e.startT && n < e.endT)(t.dives), Xh = (t) => (n) => {
  const e = Mh(t)(n), r = t.dives.length !== 0, o = So(t.cameraConfig)(t.layout)(t.cameraSpans)(n).camera, i = li(t.layout)(t.cameraConfig.padding)(e)(o), s = qh(t)(e.path), u = Hi(t)(e.path.length === 0 ? n : gi(n)(Wh(e)))(e)(Ee), a = { ...u, state: { ...u.state, camera: i } }, c = Sw(t)(n);
  if (c.tag === "Just") {
    const f = mw(t)(n)(c._1), _ = Qh(c._1)(n);
    return {
      levels: kw(t)(n)(c._1)(f),
      camera: o,
      rootLayout: t.layout,
      hasDives: r,
      diving: !0,
      zoomStreak: $w(f),
      zoomDirection: (() => {
        if (c._1.direction === "DiveIn")
          return -1;
        if (c._1.direction === "DiveOut")
          return 1;
        l();
      })(),
      diveDepth: (() => {
        if (c._1.direction === "DiveIn")
          return f;
        if (c._1.direction === "DiveOut")
          return 1 - f;
        l();
      })(),
      doorProgress: (() => {
        if (c._1.direction === "DiveIn")
          return _;
        if (c._1.direction === "DiveOut")
          return 1 - f;
        l();
      })()
    };
  }
  if (c.tag === "Nothing")
    return {
      levels: kt(s)(a),
      camera: i,
      rootLayout: t.layout,
      hasDives: r,
      diving: !1,
      zoomStreak: 0,
      zoomDirection: 0,
      diveDepth: 0,
      doorProgress: 0
    };
  l();
}, Lw = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Ew = (t) => {
  const n = t.length;
  return ((r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, f = s;
      if (c >= n) {
        u = !1, a = f;
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
                const w = t[c].position, C = t[c].size, b = t[y].position, k = t[y].size;
                return w._1 < b._1 + k._1 && b._1 < w._1 + C._1 && w._2 < b._2 + k._2 && b._2 < w._2 + C._2;
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
      i = c + 1 | 0, s = _(c + 1 | 0)(f);
    }
    return a;
  })(0)(0);
}, x1 = (t) => N((n) => (e) => n + Lv(e.start)(e.end))(0)(t.segments), Uh = (t) => (n) => (e) => ({
  crossingCount: N((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: N((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: N((r) => (o) => r + x1(o))(0)(n),
  maxEdgeLength: N((r) => (o) => Lw(r)(x1(o)))(0)(n),
  nodeOverlapCount: Ew(t),
  constraintViolations: e,
  jumpCount: N((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), Dl = (t) => t, pn = (t) => (e) => {
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
    l();
  }
  return i;
}, zl = /* @__PURE__ */ Dl("LEFT"), Aw = /* @__PURE__ */ Dl("RIGHT"), Yh = /* @__PURE__ */ Dl("UNDEFINED"), Pw = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, Rw = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? _e : Yn;
    if (n === "LEFT")
      return Vn;
    if (t === "RIGHT")
      return n === "RIGHT" ? _e : Yn;
    if (n === "RIGHT")
      return Vn;
    if (t === "UP")
      return n === "UP" ? _e : Yn;
    if (n === "UP")
      return Vn;
    if (t === "DOWN")
      return n === "DOWN" ? _e : Yn;
    if (n === "DOWN")
      return Vn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return _e;
    l();
  },
  Eq0: () => Pw
}, Fw = (t) => (e) => {
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
    l();
  }
  return i;
}, Gw = { x: 0, y: 0 }, De = (t) => (n) => (e) => {
  const r = pn(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: rt(st)(t)(n(r._1))(e.cNodes) };
  l();
}, Hs = (t) => (n) => (e) => {
  const r = pn(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: rt(st)(t)(n(r._1))(e.cGroups) };
  l();
}, Iw = (t) => N((n) => (e) => De(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Bw = (t) => {
  const n = N((e) => (r) => {
    const o = pn(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return N((i) => (s) => Ot(st)(Jn)(s)([r])(i))(e)(o._1.constraints);
    l();
  })(z)(t.cNodeOrder);
  return N((e) => (r) => De(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = pn(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      l();
    })()
  }))(e))(t)(t.cNodeOrder);
}, Dw = (t) => (n) => De(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), zw = (t) => {
  const n = N((e) => (r) => Hs(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return N((e) => (r) => De(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, ur = { left: !1, right: !1, up: !1, down: !1 }, Hw = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, Hl = (t) => N((n) => (e) => {
  const r = pn(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = N((s) => (u) => {
      const a = pn(u)(n.cNodes);
      if (a.tag === "Nothing")
        return s;
      if (a.tag === "Just") {
        if (s.tag === "Nothing")
          return T("Just", u);
        if (s.tag === "Just") {
          const c = pn(s._1)(n.cNodes);
          if (c.tag === "Nothing")
            return T("Just", u);
          if (c.tag === "Just")
            return a._1.hitbox.x < c._1.hitbox.x ? T("Just", u) : T("Just", s._1);
        }
      }
      l();
    })(v)(r._1.cNodes), i = Hs(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = pn(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return N((a) => (c) => De(c)((f) => ({ ...f, cGroupOffset: { x: f.hitbox.x - u.hitbox.x, y: f.hitbox.y - u.hitbox.y } }))(a))(i)(r._1.cNodes);
      }
    }
  }
  l();
})(t)(t.cGroupOrder), Fe = (t) => Hl({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return z;
      if (e.tag === "Node")
        return cn("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      l();
    };
    return n(t.cNodes);
  })()
}), Cr = (t) => Hl({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return z;
      if (e.tag === "Node")
        return cn(
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
      l();
    };
    return n(t.cNodes);
  })()
}), Vh = (t) => {
  const n = N((e) => (r) => Hs(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return N((e) => (r) => {
    const o = pn(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return N((s) => (u) => {
          const a = pn(u)(s.cNodes);
          if (a.tag === "Nothing")
            return s;
          if (a.tag === "Just")
            return a._1.cGroup.tag === "Just" && a._1.cGroup._1 !== i ? Hs(a._1.cGroup._1)((c) => ({ ...c, outDegree: c.outDegree + 1 | 0, outDegreeReal: c.outDegreeReal + 1 | 0 }))(Hs(i)((c) => Ce(Jo)(u)(c.incomingConstraints) ? c : { ...c, incomingConstraints: [...c.incomingConstraints, u] })(s)) : s;
          l();
        })(e)(o._1.constraints);
      }
    }
    l();
  })(n)(n.cNodeOrder);
}, Bu = (t) => {
  const n = Bw(t.cGraph);
  return { ...t, cGraph: Vh(N((e) => (r) => De(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, Ow = (t) => (n) => N((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return De(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return De(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), rr = (t) => {
  const n = {
    ...t,
    cGraph: Ow(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return z;
          if (r.tag === "Node")
            return cn("Node", r._1, r._2, r._3, { ...r._4, constraints: [] }, e(r._5), e(r._6));
          l();
        };
        return e(t.cGraph.cNodes);
      })()
    })
  };
  return {
    ...n,
    cGraph: Vh((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      l();
    })())
  };
}, Ww = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? rr(r) : n === "RIGHT" ? rr({ ...r, cGraph: Fe(r.cGraph) }) : n === "UP" ? rr({ ...r, cGraph: Cr(r.cGraph) }) : n === "DOWN" ? rr({ ...r, cGraph: Fe(Cr(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? Bu({ ...r, cGraph: Fe(r.cGraph) }) : n === "UP" ? rr({ ...r, cGraph: Cr(r.cGraph) }) : n === "DOWN" ? rr({ ...r, cGraph: Fe(Cr(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? Bu({ ...r, cGraph: Fe(r.cGraph) }) : n === "UP" ? rr({ ...r, cGraph: Cr(Fe(r.cGraph)) }) : n === "DOWN" ? rr({ ...r, cGraph: Fe(Cr(Fe(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? rr({ ...r, cGraph: Cr(r.cGraph) }) : n === "RIGHT" ? rr({ ...r, cGraph: Fe(Cr(r.cGraph)) }) : n === "DOWN" ? Bu({ ...r, cGraph: Fe(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? rr({ ...r, cGraph: Cr(Fe(r.cGraph)) }) : n === "RIGHT" ? rr({ ...r, cGraph: Fe(Cr(Fe(r.cGraph))) }) : n === "UP" ? Bu({ ...r, cGraph: Fe(r.cGraph) }) : r;
  l();
}, Kh = (t) => (n) => n.finished || !Fw(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : Ww(n.direction)(t)(n), Qw = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? Kh(zl)(t) : t, e = { ...n, cGraph: zw(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  l();
}, jh = (t) => (n) => (e) => {
  const r = pn(t)(e.cNodes), o = pn(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    l();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: rt(st)(t)({ ...r._1, cGroup: T("Just", n) })(e.cNodes),
    cGroups: rt(st)(n)({
      ...o._1,
      cNodes: Ce(Jo)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return T("Just", t);
        if (o._1.reference.tag === "Just")
          return T("Just", o._1.reference._1);
        l();
      })()
    })(e.cGroups)
  } : e;
}, Zh = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: rt(st)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: v,
      cGroupOffset: Gw,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: ur
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), Ol = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: N((r) => (o) => jh(o)(e)(r))({
      ...n,
      cGroups: rt(st)(e)({
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
}, qw = (t) => N((n) => (e) => {
  const r = pn(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? Ol({ master: v, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), Mw = (t) => ({
  cGraph: Iw(qw(Hl(t))),
  direction: Yh,
  compactionAlgorithm: v,
  constraintAlgorithm: v,
  spacingsHandler: Hw,
  lockFun: v,
  finished: !1
}), Xw = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Uw = (t) => (n) => {
  const e = ot.compare(t._1)(n._1);
  return e === "LT" ? Yn : e === "GT" ? Vn : st.compare(t._2)(n._2);
}, Yw = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), T1 = (t) => (e) => {
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
    l();
  }
  return i;
}, w1 = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", N1 = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), Gc = (t) => (n) => Uw(J(t.hitbox.x + t.hitbox.width / 2, t.id))(J(n.hitbox.x + n.hitbox.width / 2, n.id)), Vw = (t) => (n) => {
  const e = uo(zt, v, (r) => Gc(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = Od(zt, v, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    l();
  }
  if (e.tag === "Nothing")
    return kt(n)(t);
  l();
}, tp = (t) => (n) => {
  const e = dt((o) => Gc(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? T("Just", e[r]) : v;
}, Kw = (t) => (n) => {
  const e = Vw(n)(t.intervals), r = Kt((i) => Gc(n)(i) === "LT")(e), o = rt(st)(n.id)((() => {
    const i = tp(n)(e);
    return i.tag === "Just" ? T("Just", i._1.id) : v;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return rt(st)(r._1.id)(T("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      l();
    })()
  };
}, jw = (t) => (n) => {
  const e = ot.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? Vn : _e : n.low ? Yn : _e : e;
}, Zw = (t) => N((n) => (e) => De(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(Tt((n) => pn(n)(t.cNodes))(t.cNodeOrder)), wf = (t) => (n) => N((e) => (r) => {
  const o = pn(r._1)(e.cNodes);
  if (o.tag === "Just")
    return De(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  l();
})(n)(Yw(t)), np = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, C1 = (t) => (n) => (e) => N((r) => (o) => e(o) ? De(o.id)(np(t))(r) : r)(n)(Tt((r) => pn(r)(n.cNodes))(n.cNodeOrder)), tN = (t) => (n) => {
  const e = (r, o, i) => {
    const s = De(i)(np(t))(r);
    return o.length <= 1 ? s : N((u) => (a) => a === i ? u : De(a)((c) => c.ignoreSpacing.up ? { ...c, hitbox: { ...c.hitbox, y: c.hitbox.y + t + 0.01, height: c.hitbox.height - t - 0.01 } } : c.ignoreSpacing.down ? { ...c, hitbox: { ...c.hitbox, height: c.hitbox.height - t - 0.01 } } : c)(u))(s)(o);
  };
  return N((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    l();
  })(n)(Tt((r) => pn(r)(n.cGroups))(n.cGroupOrder));
}, nN = (t) => (n) => {
  const e = tp(n)(t.intervals), r = Kt((i) => Gc(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = T1(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? Ot(st)(Jn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = T1(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? Ot(st)(Jn)(n.id)([r._1.id])(o) : o,
    intervals: dt((i) => i.id !== n.id, t.intervals)
  };
}, eN = (t) => (n) => n.low ? Kw(t)(n.node) : nN(t)(n.node), Nf = (t) => (n) => N(eN)({ intervals: [], cand: z, constraints: z })(Gt(jw)(xt(dt(
  t,
  Tt((e) => pn(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, rN = (t) => (n) => {
  const e = Xw(0)(t / 2 - 0.5), r = wf(Nf(w1)(C1(e)(n)(w1)))(n), o = wf(Nf(N1)(C1(e)(r)(N1)))(r);
  return wf(Nf((i) => !0)(tN(e)(o)))(o);
}, oN = (t) => (n) => rN(t)(Zw(n.cGraph)), Ia = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, b1 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Wl = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: Ia(n._1)(e._1), y: Ia(n._2)(e._2), width: Rn(n._1 - e._1), height: Rn(n._2 - e._2) },
  ignoreSpacing: ur,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    l();
  })(),
  aPort: v
}), iN = (t) => (n) => {
  const e = Ia(t.hitbox.x)(n.hitbox.x), r = Ia(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: b1(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: b1(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
      l();
    })()
  };
}, sN = (t) => (n) => Rn(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, uN = (t) => (n) => Rn(t.hitbox.x - n.hitbox.x) <= 1e-4 ? ot.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Yn : Vn, ep = (t, n) => ({ tag: t, _1: n }), Ql = /* @__PURE__ */ dn(R)(Mt), Ic = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, J1 = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = R.compare(e._1)(r._1);
      if (o === "LT")
        return Yn;
      if (o === "GT")
        return Vn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? _e : Yn;
      if (r._2.tag === "Nothing")
        return Vn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return R.compare(e._2._1)(r._2._1);
      l();
    },
    Eq0: () => t
  };
  return N((e) => (r) => rt(n)(r)()(e))(z);
})(), io = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, aN = /* @__PURE__ */ N((t) => (n) => rt(Rw)(n)()(t))(z), Cf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = uh.compare(t)(s._3);
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
    l();
  }
  return i;
}, cN = (t) => (n) => {
  const e = Ql(B((i) => J(i.id, i))(t)), r = Tt((i) => Ic(i)(e))(n), o = st.compare((() => {
    const i = J1(B((s) => J(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    l();
  })())((() => {
    const i = J1(B((s) => J(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    l();
  })());
  if (o === "LT")
    return { ...ur, left: !0, right: !1 };
  if (o === "GT")
    return { ...ur, left: !1, right: !0 };
  if (o === "EQ")
    return ur;
  l();
}, fN = (t) => Tt((n) => {
  if (n.direction === "V")
    return T("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return v;
  l();
})(t.segments), Du = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = io(e)(n);
    if (o.tag === "Just") {
      const i = Kt((s) => s.id === r._1)(o._1);
      if (i.tag === "Just")
        return i._1.side;
      if (i.tag === "Nothing")
        return t;
      l();
    }
    if (o.tag === "Nothing")
      return t;
    l();
  }
  if (r.tag === "Nothing")
    return t;
  l();
}, lN = (t) => (n) => (e) => {
  const r = Zh({
    origin: T("Just", ep("SegmentOrigin", e)),
    kind: T("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = Dw(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = pn(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return jh(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          l();
        }
        if (i.tag === "Nothing")
          return o;
        l();
      }
      return Ol({ master: T("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: N((i) => (s) => Ot(R)(Jn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: rt(st)(r.id)(cN(t)(e.representedEdges))(n.lockMap)
  };
}, gN = (t) => (n) => (e) => {
  const r = Bt(
    (o) => v,
    (o) => (i) => T("Just", { head: o, tail: i }),
    Gt(uN)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = N((i) => (s) => sN(i.survivor)(s) ? { ...i, survivor: iN(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return N(lN(t))(e)([...o.merged, o.survivor]);
  }
  l();
}, _N = (t) => ({
  cGraph: {
    cNodes: z,
    cNodeOrder: [],
    cGroups: z,
    cGroupOrder: [],
    supportedDirections: aN([Yh, zl, Aw]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: z,
  edgeToCs: z,
  lockMap: z
}), dN = (t) => {
  const n = j(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, hN = (t) => (n) => (e) => N((r) => (o) => {
  const i = Zh({ origin: T("Just", ep("NodeOrigin", o.node)), kind: v, hitbox: dN(o) })(r.cGraph), s = io(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return J(0, 0);
    if (s.tag === "Just")
      return s._1;
    l();
  })();
  return {
    ...r,
    cGraph: Ol({ master: T("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: rt(R)(o.node)(i.id)(r.nodeToC),
    lockMap: rt(st)(i.id)((() => {
      const a = u._1 - u._2 | 0;
      return a < 0 ? { ...ur, left: !0 } : a > 0 ? { ...ur, right: !0 } : ur;
    })())(r.lockMap)
  };
})(e)(n), pN = (t) => N((n) => (e) => Ot(R)((r) => (o) => J(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(J(1, 0))(Ot(R)((r) => (o) => J(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(J(
  0,
  1
))(n)))(z)(t), mN = (t) => N((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? rt(R)(e.origin._1._1)(e.hitbox.x)(n) : n)(z)(Tt((n) => pn(n)(t.cNodes))(t.cNodeOrder)), $N = (t) => N((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? rt(R)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(z)(Tt((n) => pn(n)(t.cNodes))(t.cNodeOrder)), yN = (t) => N((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return N((o) => (i) => rt(uh)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(z)(Tt((n) => pn(n)(t.cNodes))(t.cNodeOrder)), rp = (t) => {
  const n = Ql(B((e) => J(e.id, e))(t.edges));
  return Tt((e) => {
    const r = Ic(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: Du(Vr)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: Du(Kr)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: Du(Vr)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: Du(Kr)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return v;
    l();
  })(t.paths);
}, vN = (t) => (n) => {
  const e = xt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = io(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return pn(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return v;
      l();
    })(), s = io(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return pn(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return v;
      l();
    })(), a = (() => {
      if (u.tag === "Just") {
        if (i.tag === "Just") {
          if (u._1.cGroup.tag === "Just") {
            if (i._1.cGroup.tag === "Just")
              return T("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
            if (i._1.cGroup.tag === "Nothing")
              return v;
            l();
          }
          if (u._1.cGroup.tag === "Nothing")
            return v;
          l();
        }
        if (i.tag === "Nothing")
          return v;
        l();
      }
      if (u.tag === "Nothing")
        return v;
      l();
    })(), c = (g) => (p) => (m) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if (m.cGroup.tag === "Just")
            return g(m.hitbox.x) && m.cGroup._1 !== u._1.cGroup._1 ? T("Just", p(m.cGroup._1)(u._1.cGroup._1)) : v;
          if (m.cGroup.tag === "Nothing")
            return v;
          l();
        }
        if (u._1.cGroup.tag === "Nothing")
          return v;
        l();
      }
      if (u.tag === "Nothing")
        return v;
      l();
    }, f = Tt((g) => pn(g)(t.cGraph.cNodes))((() => {
      const g = Ic(r.edgeId)(t.edgeToCs);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      l();
    })()), _ = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const g = u._1;
        return Tt(c((p) => p < g.hitbox.x)((p) => (m) => ({ srcGroup: p, tgtGroup: m, delta: 1, weight: 100 })))(f);
      }
      return [];
    })(), d = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const g = u._1;
        return Tt(c((p) => p > g.hitbox.x)((p) => (m) => ({ srcGroup: m, tgtGroup: p, delta: 1, weight: 100 })))(f);
      }
      return [];
    })();
    if (a.tag === "Nothing")
      return [];
    if (a.tag === "Just")
      return [a._1, ..._, ...d];
    l();
  });
  return {
    sameEdgeVerticalSegments: (r) => (o) => r.origin.tag === "Just" && r.origin._1.tag === "SegmentOrigin" && o.origin.tag === "Just" && o.origin._1.tag === "SegmentOrigin" && (() => {
      const i = o.origin._1._1;
      return Cn((s) => Ce(zr)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, xN = (t) => (n) => {
  const e = j(4), r = mN(t), o = $N(t), i = Ql(B((u) => J(u.id, J(u.from.node, u.to.node)))(n.edges)), s = yN(t);
  return {
    nodes: B((u) => {
      const a = io(u.node)(r);
      if (a.tag === "Just")
        return { ...u, position: J(a._1 / e, u.position._2) };
      if (a.tag === "Nothing")
        return u;
      l();
    })(n.nodes),
    edges: B((u) => {
      const a = Ic(u.edge)(i), c = (() => {
        if (a.tag === "Nothing")
          return u.segments;
        if (a.tag === "Just") {
          const f = io(a._1._1)(o), _ = (() => {
            if (f.tag === "Nothing")
              return 0;
            if (f.tag === "Just")
              return f._1;
            l();
          })(), d = io(a._1._2)(o), g = (() => {
            if (d.tag === "Nothing")
              return 0;
            if (d.tag === "Just")
              return d._1;
            l();
          })();
          return qt((() => {
            const p = u.reversed ? g : _, m = u.reversed ? _ : g, h = u.segments.length;
            return ($) => (y) => {
              if (y.direction === "V") {
                const x = (() => {
                  if ($ === 0)
                    return p;
                  if ($ === (h - 1 | 0))
                    return m;
                  const w = Cf(y.start)(s);
                  if (w.tag === "Nothing")
                    return 0;
                  if (w.tag === "Just")
                    return w._1;
                  l();
                })();
                return { ...y, start: J(y.start._1 + x, y.start._2), end: J(y.end._1 + x, y.end._2) };
              }
              if (y.direction === "H")
                return {
                  ...y,
                  start: J(
                    (() => {
                      if ($ === 0)
                        return y.start._1 + p;
                      const x = Cf(y.start)(s);
                      if (x.tag === "Nothing")
                        return y.start._1 + 0;
                      if (x.tag === "Just")
                        return y.start._1 + x._1;
                      l();
                    })(),
                    y.start._2
                  ),
                  end: J(
                    (() => {
                      if ($ === (h - 1 | 0))
                        return y.end._1 + m;
                      const x = Cf(y.end)(s);
                      if (x.tag === "Nothing")
                        return y.end._1 + 0;
                      if (x.tag === "Just")
                        return y.end._1 + x._1;
                      l();
                    })(),
                    y.end._2
                  )
                };
              l();
            };
          })())(u.segments);
        }
        l();
      })();
      return { ...u, segments: c, bends: Fn((f) => (_) => f.end, c, Et(1, c.length, c)) };
    })(n.paths)
  };
}, TN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Wl(o.nextId)(i._2.start)(i._2.end)(v)(t.edgeId), u = (() => {
    if (i._1 === 0) {
      if (n.tag === "Nothing")
        return s;
      if (n.tag === "Just")
        return {
          ...s,
          ignoreSpacing: i._2.end._2 < n._1.y ? { ...s.ignoreSpacing, down: !0 } : i._2.end._2 > n._1.y + n._1.height ? { ...s.ignoreSpacing, up: !0 } : { ...s.ignoreSpacing, up: !0, down: !0 }
        };
      l();
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
          l();
        }
        return u;
      })()
    ]
  };
}, k1 = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...Wl(i.nextId)(r.start)(J(r.start._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...ur, down: !0 } : { ...ur, up: !0 }
    }
  ]
}), zu = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...Wl(i.nextId)(r.end)(J(r.end._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...ur, down: !0 } : { ...ur, up: !0 }
    }
  ]
}), wN = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = io(e.src)(t.nodeToC), o = io(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const f = pn(r._1)(t.cGraph.cNodes);
      return f.tag === "Just" ? T("Just", f._1.hitbox) : v;
    }
    if (r.tag === "Nothing")
      return v;
    l();
  })(), s = (() => {
    if (o.tag === "Just") {
      const f = pn(o._1)(t.cGraph.cNodes);
      return f.tag === "Just" ? T("Just", f._1.hitbox) : v;
    }
    if (o.tag === "Nothing")
      return v;
    l();
  })(), u = fN(e.path), a = N(TN(e)(i)(s)(u.length - 1 | 0))(n)(qt((f) => (_) => J(
    f,
    _
  ))(u));
  if (0 < u.length) {
    const f = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return k1(e)(r._1)(i._1)(u[0])({ side: Wn, down: !0 })(a);
        if (e.srcSide === "South")
          return k1(e)(r._1)(i._1)(u[0])({ side: Qn, down: !1 })(a);
      }
      return a;
    })(), _ = u.length - 1 | 0;
    if (_ >= 0 && _ < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return zu(e)(o._1)(s._1)(u[_])({ side: Wn, down: !0 })(f);
      if (e.tgtSide === "South")
        return zu(e)(o._1)(s._1)(u[_])({ side: Qn, down: !1 })(f);
    }
    return f;
  }
  const c = u.length - 1 | 0;
  if (c >= 0 && c < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return zu(e)(o._1)(s._1)(u[c])({ side: Wn, down: !0 })(a);
    if (e.tgtSide === "South")
      return zu(e)(o._1)(s._1)(u[c])({ side: Qn, down: !1 })(a);
  }
  return a;
}, NN = (t) => (n) => (e) => gN(t)(N(wN(e))({ nextId: 0, segments: [] })(n).segments)(e), CN = (t) => NN(t.edges)(rp(t))(hN(pN(t.edges))(t.nodes)(_N())), so = (t) => (e) => {
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
    l();
  }
  return i;
}, s0 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, u0 = (t) => (e) => {
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
    l();
  }
  return i;
}, bN = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, JN = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let a = u, c = !0, f;
      for (; c; ) {
        const _ = a, d = Bt((g) => v, (g) => (p) => T("Just", { head: g, tail: p }), _.queue);
        if (d.tag === "Nothing") {
          c = !1, f = _;
          continue;
        }
        if (d.tag === "Just") {
          const g = d._1.head;
          if (((h) => {
            let $ = h, y = !0, x;
            for (; y; ) {
              const w = $;
              if (w.tag === "Leaf") {
                y = !1, x = !1;
                continue;
              }
              if (w.tag === "Node") {
                const C = t.compare(g)(w._3);
                if (C === "LT") {
                  $ = w._5;
                  continue;
                }
                if (C === "GT") {
                  $ = w._6;
                  continue;
                }
                if (C === "EQ") {
                  y = !1, x = !0;
                  continue;
                }
              }
              l();
            }
            return x;
          })(_.removedNodes)) {
            a = { ..._, queue: d._1.tail };
            continue;
          }
          const p = Kt((m) => !so(m.eid)(_.removedEdges) && (n.eq(m.src)(g) || n.eq(m.tgt)(g)))(r);
          if (p.tag === "Nothing") {
            a = { ..._, queue: d._1.tail };
            continue;
          }
          if (p.tag === "Just") {
            const m = n.eq(p._1.src)(g) ? p._1.tgt : p._1.src, h = {
              ..._,
              degree: rt(t)(m)((() => {
                const y = ((x) => {
                  let w = x, C = !0, b;
                  for (; C; ) {
                    const k = w;
                    if (k.tag === "Leaf") {
                      C = !1, b = v;
                      continue;
                    }
                    if (k.tag === "Node") {
                      const E = t.compare(m)(k._3);
                      if (E === "LT") {
                        w = k._5;
                        continue;
                      }
                      if (E === "GT") {
                        w = k._6;
                        continue;
                      }
                      if (E === "EQ") {
                        C = !1, b = T("Just", k._4);
                        continue;
                      }
                    }
                    l();
                  }
                  return b;
                })(_.degree);
                if (y.tag === "Nothing")
                  return -1;
                if (y.tag === "Just")
                  return y._1 - 1 | 0;
                l();
              })())(_.degree),
              removedNodes: rt(t)(g)()(_.removedNodes),
              removedEdges: rt(st)(p._1.eid)()(_.removedEdges),
              record: [..._.record, { node: g, neighbour: m, viaSrc: n.eq(p._1.src)(g) }],
              queue: d._1.tail
            };
            if ((() => {
              const y = ((w) => {
                let C = w, b = !0, k;
                for (; b; ) {
                  const E = C;
                  if (E.tag === "Leaf") {
                    b = !1, k = v;
                    continue;
                  }
                  if (E.tag === "Node") {
                    const S = t.compare(m)(E._3);
                    if (S === "LT") {
                      C = E._5;
                      continue;
                    }
                    if (S === "GT") {
                      C = E._6;
                      continue;
                    }
                    if (S === "EQ") {
                      b = !1, k = T("Just", E._4);
                      continue;
                    }
                  }
                  l();
                }
                return k;
              })(h.degree), x = (w) => {
                let C = w, b = !0, k;
                for (; b; ) {
                  const E = C;
                  if (E.tag === "Leaf") {
                    b = !1, k = !1;
                    continue;
                  }
                  if (E.tag === "Node") {
                    const S = t.compare(m)(E._3);
                    if (S === "LT") {
                      C = E._5;
                      continue;
                    }
                    if (S === "GT") {
                      C = E._6;
                      continue;
                    }
                    if (S === "EQ") {
                      b = !1, k = !0;
                      continue;
                    }
                  }
                  l();
                }
                return k;
              };
              return (() => {
                if (y.tag === "Nothing")
                  return !1;
                if (y.tag === "Just")
                  return y._1 === 1;
                l();
              })() && !x(h.removedNodes);
            })()) {
              a = { ...h, queue: [...h.queue, m] };
              continue;
            }
            a = h;
            continue;
          }
        }
        l();
      }
      return f;
    }, i = N((u) => (a) => Ot(t)(En)(a.src)(1)(Ot(t)(En)(a.tgt)(1)(u)))(z)(r), s = o({
      degree: i,
      removedNodes: z,
      removedEdges: z,
      record: [],
      queue: dt(
        (u) => {
          const c = ((f) => {
            let _ = f, d = !0, g;
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
              l();
            }
            return g;
          })(i);
          if (c.tag === "Nothing")
            return !1;
          if (c.tag === "Just")
            return c._1 === 1;
          l();
        },
        e
      )
    });
    return {
      coreNodes: dt(
        (u) => !((c) => {
          let f = c, _ = !0, d;
          for (; _; ) {
            const g = f;
            if (g.tag === "Leaf") {
              _ = !1, d = !1;
              continue;
            }
            if (g.tag === "Node") {
              const p = t.compare(u)(g._3);
              if (p === "LT") {
                f = g._5;
                continue;
              }
              if (p === "GT") {
                f = g._6;
                continue;
              }
              if (p === "EQ") {
                _ = !1, d = !0;
                continue;
              }
            }
            l();
          }
          return d;
        })(s.removedNodes),
        e
      ),
      coreEdges: dt((u) => !so(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, kN = (t) => (n) => (e) => N((r) => (o) => {
  const i = o.neighbour, s = (() => {
    const u = ((c) => {
      let f = c, _ = !0, d;
      for (; _; ) {
        const g = f;
        if (g.tag === "Leaf") {
          _ = !1, d = v;
          continue;
        }
        if (g.tag === "Node") {
          const p = t.compare(i)(g._3);
          if (p === "LT") {
            f = g._5;
            continue;
          }
          if (p === "GT") {
            f = g._6;
            continue;
          }
          if (p === "EQ") {
            _ = !1, d = T("Just", g._4);
            continue;
          }
        }
        l();
      }
      return d;
    })(r);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    l();
  })();
  return rt(t)(o.node)(o.viaSrc ? s - 1 | 0 : s + 1 | 0)(r);
})(e)(gn(n)), a0 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: rt(t)(r)()(o.treeNode) };
    return N((s) => (u) => {
      if (so(u.eid)(s.st.edgeVisited))
        return s;
      const a = { ...s.st, edgeVisited: rt(st)(u.eid)()(s.st.edgeVisited) }, c = n.eq(u.src)((() => {
        const f = u.src, _ = (g) => {
          let p = g, m = !0, h;
          for (; m; ) {
            const $ = p;
            if ($.tag === "Leaf") {
              m = !1, h = !1;
              continue;
            }
            if ($.tag === "Node") {
              const y = t.compare(f)($._3);
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
            l();
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
            l();
          }
          return $;
        })(a.treeNode);
      })() ? u.src : (() => {
        const f = u.tgt, _ = (g) => {
          let p = g, m = !0, h;
          for (; m; ) {
            const $ = p;
            if ($.tag === "Leaf") {
              m = !1, h = !1;
              continue;
            }
            if ($.tag === "Node") {
              const y = t.compare(f)($._3);
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
            l();
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
            l();
          }
          return $;
        })(a.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if (so(u.eid)(a.treeEdge)) {
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
            l();
          }
          return m;
        })(a.treeNode))
          return { ...s, st: a };
        const f = a0(t)(e)(c)(a);
        return { count: s.count + f.count | 0, st: f.st };
      }
      if ((() => {
        const f = (d) => {
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
            l();
          }
          return m;
        }, _ = u.tgt;
        return !f(a.treeNode) && (() => {
          const g = (($) => {
            let y = $, x = !0, w;
            for (; x; ) {
              const C = y;
              if (C.tag === "Leaf") {
                x = !1, w = v;
                continue;
              }
              if (C.tag === "Node") {
                const b = t.compare(_)(C._3);
                if (b === "LT") {
                  y = C._5;
                  continue;
                }
                if (b === "GT") {
                  y = C._6;
                  continue;
                }
                if (b === "EQ") {
                  x = !1, w = T("Just", C._4);
                  continue;
                }
              }
              l();
            }
            return w;
          })(a.layer), p = u.src, h = (($) => {
            let y = $, x = !0, w;
            for (; x; ) {
              const C = y;
              if (C.tag === "Leaf") {
                x = !1, w = v;
                continue;
              }
              if (C.tag === "Node") {
                const b = t.compare(p)(C._3);
                if (b === "LT") {
                  y = C._5;
                  continue;
                }
                if (b === "GT") {
                  y = C._6;
                  continue;
                }
                if (b === "EQ") {
                  x = !1, w = T("Just", C._4);
                  continue;
                }
              }
              l();
            }
            return w;
          })(a.layer);
          if (g.tag === "Nothing") {
            if (h.tag === "Nothing")
              return u.delta === 0;
            if (h.tag === "Just")
              return u.delta === -h._1;
            l();
          }
          if (g.tag === "Just") {
            if (h.tag === "Nothing")
              return u.delta === (g._1 - 0 | 0);
            if (h.tag === "Just")
              return u.delta === (g._1 - h._1 | 0);
          }
          l();
        })();
      })()) {
        const f = a0(t)(e)(c)({ ...a, treeEdge: rt(st)(u.eid)()(a.treeEdge) });
        return { count: s.count + f.count | 0, st: f.st };
      }
      return { ...s, st: a };
    })({ count: 1, st: i })(dt((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !so(s.eid)(i.edgeVisited), e));
  };
}, Ba = (t) => (n) => (e) => (r) => {
  const o = r.src, s = ((m) => {
    let h = m, $ = !0, y;
    for (; $; ) {
      const x = h;
      if (x.tag === "Leaf") {
        $ = !1, y = v;
        continue;
      }
      if (x.tag === "Node") {
        const w = t.compare(o)(x._3);
        if (w === "LT") {
          h = x._5;
          continue;
        }
        if (w === "GT") {
          h = x._6;
          continue;
        }
        if (w === "EQ") {
          $ = !1, y = T("Just", x._4);
          continue;
        }
      }
      l();
    }
    return y;
  })(n.poID), u = (() => {
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1;
    l();
  })(), a = r.tgt, f = ((m) => {
    let h = m, $ = !0, y;
    for (; $; ) {
      const x = h;
      if (x.tag === "Leaf") {
        $ = !1, y = v;
        continue;
      }
      if (x.tag === "Node") {
        const w = t.compare(a)(x._3);
        if (w === "LT") {
          h = x._5;
          continue;
        }
        if (w === "GT") {
          h = x._6;
          continue;
        }
        if (w === "EQ") {
          $ = !1, y = T("Just", x._4);
          continue;
        }
      }
      l();
    }
    return y;
  })(n.poID), _ = (() => {
    if (f.tag === "Nothing")
      return 0;
    if (f.tag === "Just")
      return f._1;
    l();
  })(), g = ((m) => {
    let h = m, $ = !0, y;
    for (; $; ) {
      const x = h;
      if (x.tag === "Leaf") {
        $ = !1, y = v;
        continue;
      }
      if (x.tag === "Node") {
        const w = t.compare(e)(x._3);
        if (w === "LT") {
          h = x._5;
          continue;
        }
        if (w === "GT") {
          h = x._6;
          continue;
        }
        if (w === "EQ") {
          $ = !1, y = T("Just", x._4);
          continue;
        }
      }
      l();
    }
    return y;
  })(n.poID), p = (() => {
    if (g.tag === "Nothing")
      return 0;
    if (g.tag === "Just")
      return g._1;
    l();
  })();
  return (() => {
    const m = r.src, $ = ((y) => {
      let x = y, w = !0, C;
      for (; w; ) {
        const b = x;
        if (b.tag === "Leaf") {
          w = !1, C = v;
          continue;
        }
        if (b.tag === "Node") {
          const k = t.compare(m)(b._3);
          if (k === "LT") {
            x = b._5;
            continue;
          }
          if (k === "GT") {
            x = b._6;
            continue;
          }
          if (k === "EQ") {
            w = !1, C = T("Just", b._4);
            continue;
          }
        }
        l();
      }
      return C;
    })(n.lowestPoID);
    return (() => {
      if ($.tag === "Nothing")
        return 0 <= p;
      if ($.tag === "Just")
        return $._1 <= p;
      l();
    })() && (() => {
      const y = r.tgt;
      return p <= u && (() => {
        const w = ((C) => {
          let b = C, k = !0, E;
          for (; k; ) {
            const S = b;
            if (S.tag === "Leaf") {
              k = !1, E = v;
              continue;
            }
            if (S.tag === "Node") {
              const I = t.compare(y)(S._3);
              if (I === "LT") {
                b = S._5;
                continue;
              }
              if (I === "GT") {
                b = S._6;
                continue;
              }
              if (I === "EQ") {
                k = !1, E = T("Just", S._4);
                continue;
              }
            }
            l();
          }
          return E;
        })(n.lowestPoID);
        return (() => {
          if (w.tag === "Nothing")
            return 0 <= p;
          if (w.tag === "Just")
            return w._1 <= p;
          l();
        })() && p <= _;
      })();
    })();
  })() ? u >= _ : u < _;
}, SN = (t) => {
  const n = dn(t)(Mt);
  return (e) => ({
    layer: n(B((r) => J(r, 0))(e)),
    treeNode: z,
    treeEdge: z,
    poID: z,
    lowestPoID: z,
    cutvalue: z,
    postOrder: 1,
    edgeVisited: z
  });
}, LN = (t) => (n) => (e) => N((r) => (o) => {
  if ((() => {
    const d = o.src, g = (h) => {
      let $ = h, y = !0, x;
      for (; y; ) {
        const w = $;
        if (w.tag === "Leaf") {
          y = !1, x = !1;
          continue;
        }
        if (w.tag === "Node") {
          const C = t.compare(d)(w._3);
          if (C === "LT") {
            $ = w._5;
            continue;
          }
          if (C === "GT") {
            $ = w._6;
            continue;
          }
          if (C === "EQ") {
            y = !1, x = !0;
            continue;
          }
        }
        l();
      }
      return x;
    }, p = o.tgt, m = (h) => {
      let $ = h, y = !0, x;
      for (; y; ) {
        const w = $;
        if (w.tag === "Leaf") {
          y = !1, x = !1;
          continue;
        }
        if (w.tag === "Node") {
          const C = t.compare(p)(w._3);
          if (C === "LT") {
            $ = w._5;
            continue;
          }
          if (C === "GT") {
            $ = w._6;
            continue;
          }
          if (C === "EQ") {
            y = !1, x = !0;
            continue;
          }
        }
        l();
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
      l();
    }
    return m;
  })(e.layer), a = o.src, f = ((d) => {
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
      l();
    }
    return m;
  })(e.layer), _ = (() => {
    if (u.tag === "Nothing") {
      if (f.tag === "Nothing")
        return -o.delta;
      if (f.tag === "Just")
        return -f._1 - o.delta | 0;
      l();
    }
    if (u.tag === "Just") {
      if (f.tag === "Nothing")
        return (u._1 - 0 | 0) - o.delta | 0;
      if (f.tag === "Just")
        return (u._1 - f._1 | 0) - o.delta | 0;
    }
    l();
  })();
  return _ < r.slack ? { edge: T("Just", o), slack: _ } : r;
})({ edge: v, slack: 1e9 })(n).edge, EN = (t) => {
  const n = dn(t)(Mt);
  return (e) => (r) => {
    const o = N((i) => (s) => s0(i)((() => {
      const a = ((c) => {
        let f = c, _ = !0, d;
        for (; _; ) {
          const g = f;
          if (g.tag === "Leaf") {
            _ = !1, d = v;
            continue;
          }
          if (g.tag === "Node") {
            const p = t.compare(s)(g._3);
            if (p === "LT") {
              f = g._5;
              continue;
            }
            if (p === "GT") {
              f = g._6;
              continue;
            }
            if (p === "EQ") {
              _ = !1, d = T("Just", g._4);
              continue;
            }
          }
          l();
        }
        return d;
      })(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      l();
    })()))(1e9)(e);
    return n(B((i) => J(
      i,
      (() => {
        const u = ((a) => {
          let c = a, f = !0, _;
          for (; f; ) {
            const d = c;
            if (d.tag === "Leaf") {
              f = !1, _ = v;
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
                f = !1, _ = T("Just", d._4);
                continue;
              }
            }
            l();
          }
          return _;
        })(r);
        if (u.tag === "Nothing")
          return -o;
        if (u.tag === "Just")
          return u._1 - o | 0;
        l();
      })()
    ))(e));
  };
}, op = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = N((u) => (a) => {
      const c = op(t)(e)(n.eq(a.src)(r) ? a.tgt : a.src)({ ...u.st, edgeVisited: rt(st)(a.eid)()(u.st.edgeVisited) });
      return { lowest: s0(u.lowest)(c.lowest), st: c.st };
    })({ lowest: 1e9, st: o })(dt(
      (u) => so(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !so(u.eid)(o.edgeVisited),
      e
    )), s = s0(i.lowest)(i.st.postOrder);
    return {
      lowest: s,
      st: {
        ...i.st,
        poID: rt(t)(r)(i.st.postOrder)(i.st.poID),
        lowestPoID: rt(t)(r)(s)(i.st.lowestPoID),
        postOrder: i.st.postOrder + 1 | 0
      }
    };
  };
}, ip = (t) => {
  const n = op(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: z, postOrder: 1, poID: z, lowestPoID: z }).st : o;
}, AN = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => dt((i) => so(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, PN = (t) => (n) => Kt((e) => {
  const r = u0(e.eid)(n.cutvalue);
  return so(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    l();
  })();
})(t), sp = (t) => {
  const n = a0(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? T("Just", e[0]) : v;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: z, treeNode: z, treeEdge: z });
      if (s.count >= e.length)
        return s.st;
      const u = LN(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const a = u._1.tgt, f = ((h) => {
          let $ = h, y = !0, x;
          for (; y; ) {
            const w = $;
            if (w.tag === "Leaf") {
              y = !1, x = v;
              continue;
            }
            if (w.tag === "Node") {
              const C = t.compare(a)(w._3);
              if (C === "LT") {
                $ = w._5;
                continue;
              }
              if (C === "GT") {
                $ = w._6;
                continue;
              }
              if (C === "EQ") {
                y = !1, x = T("Just", w._4);
                continue;
              }
            }
            l();
          }
          return x;
        })(s.st.layer), _ = u._1.src, g = ((h) => {
          let $ = h, y = !0, x;
          for (; y; ) {
            const w = $;
            if (w.tag === "Leaf") {
              y = !1, x = v;
              continue;
            }
            if (w.tag === "Node") {
              const C = t.compare(_)(w._3);
              if (C === "LT") {
                $ = w._5;
                continue;
              }
              if (C === "GT") {
                $ = w._6;
                continue;
              }
              if (C === "EQ") {
                y = !1, x = T("Just", w._4);
                continue;
              }
            }
            l();
          }
          return x;
        })(s.st.layer), p = (() => {
          if (f.tag === "Nothing") {
            if (g.tag === "Nothing")
              return -u._1.delta;
            if (g.tag === "Just")
              return -g._1 - u._1.delta | 0;
            l();
          }
          if (f.tag === "Just") {
            if (g.tag === "Nothing")
              return (f._1 - 0 | 0) - u._1.delta | 0;
            if (g.tag === "Just")
              return (f._1 - g._1 | 0) - u._1.delta | 0;
          }
          l();
        })(), m = (() => {
          const h = u._1.tgt;
          return ((y) => {
            let x = y, w = !0, C;
            for (; w; ) {
              const b = x;
              if (b.tag === "Leaf") {
                w = !1, C = !1;
                continue;
              }
              if (b.tag === "Node") {
                const k = t.compare(h)(b._3);
                if (k === "LT") {
                  x = b._5;
                  continue;
                }
                if (k === "GT") {
                  x = b._6;
                  continue;
                }
                if (k === "EQ") {
                  w = !1, C = !0;
                  continue;
                }
              }
              l();
            }
            return C;
          })(s.st.treeNode);
        })() ? -p : p;
        return sp(t)(e)(r)({
          ...s.st,
          layer: N((h) => ($) => ((x) => {
            let w = x, C = !0, b;
            for (; C; ) {
              const k = w;
              if (k.tag === "Leaf") {
                C = !1, b = !1;
                continue;
              }
              if (k.tag === "Node") {
                const E = t.compare($)(k._3);
                if (E === "LT") {
                  w = k._5;
                  continue;
                }
                if (E === "GT") {
                  w = k._6;
                  continue;
                }
                if (E === "EQ") {
                  C = !1, b = !0;
                  continue;
                }
              }
              l();
            }
            return b;
          })(s.st.treeNode) ? rt(t)($)((() => {
            const x = ((w) => {
              let C = w, b = !0, k;
              for (; b; ) {
                const E = C;
                if (E.tag === "Leaf") {
                  b = !1, k = v;
                  continue;
                }
                if (E.tag === "Node") {
                  const S = t.compare($)(E._3);
                  if (S === "LT") {
                    C = E._5;
                    continue;
                  }
                  if (S === "GT") {
                    C = E._6;
                    continue;
                  }
                  if (S === "EQ") {
                    b = !1, k = T("Just", E._4);
                    continue;
                  }
                }
                l();
              }
              return k;
            })(s.st.layer);
            if (x.tag === "Nothing")
              return 0 + m | 0;
            if (x.tag === "Just")
              return x._1 + m | 0;
            l();
          })())(h) : h)(s.st.layer)(e)
        });
      }
    }
    l();
  };
}, RN = (t) => (n) => (e) => (r) => N((o) => (i) => {
  if (Ba(t)(r)(i.src)(e) && !Ba(t)(r)(i.tgt)(e)) {
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
        l();
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
        l();
      }
      return h;
    })(r.layer), d = (() => {
      if (a.tag === "Nothing") {
        if (_.tag === "Nothing")
          return -i.delta;
        if (_.tag === "Just")
          return -_._1 - i.delta | 0;
        l();
      }
      if (a.tag === "Just") {
        if (_.tag === "Nothing")
          return (a._1 - 0 | 0) - i.delta | 0;
        if (_.tag === "Just")
          return (a._1 - _._1 | 0) - i.delta | 0;
      }
      l();
    })();
    if (d < o.slack)
      return { edge: T("Just", i), slack: d };
  }
  return o;
})({ edge: v, slack: 1e9 })(n).edge, FN = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return N((a) => (c) => {
      if ((() => {
        const f = u0(c.eid)(r.cutvalue);
        if (f.tag === "Just")
          return !0;
        if (f.tag === "Nothing")
          return !1;
        l();
      })()) {
        const f = u0(c.eid)(r.cutvalue), _ = (() => {
          if (f.tag === "Nothing")
            return 0;
          if (f.tag === "Just")
            return f._1;
          l();
        })();
        return n.eq(u)(c.src) || n.eq(s)(c.tgt) ? a - (_ - c.weight) : a + (_ - c.weight);
      }
      return n.eq(o)(u) ? n.eq(c.src)(o) ? a + c.weight : a - c.weight : n.eq(c.src)(o) ? a - c.weight : a + c.weight;
    })(i.weight)(dt((a) => a.eid !== i.eid && (n.eq(a.src)(o) || n.eq(a.tgt)(o)), e));
  };
}, GN = (t) => {
  const n = FN(t);
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
          l();
        }
        return m;
      })(c);
      if (_.tag === "Just")
        return rt(t)(u)(dt((d) => d.eid !== a.eid, _._1))(c);
      if (_.tag === "Nothing")
        return c;
      l();
    };
    return ((u) => (a) => {
      let c = u, f = a, _ = !0, d;
      for (; _; ) {
        const g = c, p = f, h = ((y) => {
          let x = y, w = !0, C;
          for (; w; ) {
            const b = x;
            if (b.tag === "Leaf") {
              w = !1, C = v;
              continue;
            }
            if (b.tag === "Node") {
              const k = t.compare(p)(b._3);
              if (k === "LT") {
                x = b._5;
                continue;
              }
              if (k === "GT") {
                x = b._6;
                continue;
              }
              if (k === "EQ") {
                w = !1, C = T("Just", b._4);
                continue;
              }
            }
            l();
          }
          return C;
        })(g.unknown), $ = (() => {
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
          l();
        })();
        if ($.length === 1) {
          const y = t.Eq0().eq($[0].src)(p) ? $[0].tgt : $[0].src;
          c = {
            unknown: i(p, $[0], i(y, $[0], g.unknown)),
            cutvalue: rt(st)($[0].eid)(n(e)(g)(p)($[0]))(g.cutvalue)
          }, f = y;
          continue;
        }
        _ = !1, d = g;
      }
      return d;
    })(r)(o);
  };
}, up = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (c) => (f) => c.delta === f.delta && c.eid === f.eid && e.eq(c.src)(f.src) && n.eq(c.tgt)(f.tgt) && c.weight === f.weight }, o = {
    compare: (c) => (f) => {
      const _ = st.compare(c.delta)(f.delta);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const d = st.compare(c.eid)(f.eid);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const g = t.compare(c.src)(f.src);
      if (g === "LT" || g === "GT" || g !== "EQ")
        return g;
      const p = t.compare(c.tgt)(f.tgt);
      if (p === "LT" || p === "GT" || p !== "EQ")
        return p;
      const m = ot.compare(c.weight)(f.weight);
      return m === "LT" || m === "GT" || m !== "EQ" ? m : _e;
    },
    Eq0: () => r
  }, i = N((c) => (f) => rt(o)(f)()(c))(z), s = AN(t), u = dn(t)(Mt), a = GN(t);
  return (c) => (f) => (_) => {
    const d = {
      unknown: u(B((g) => J(
        g,
        nn(Re.foldr, i(s(f)(_)(g)))
      ))(c)),
      cutvalue: z
    };
    return {
      ..._,
      cutvalue: N(a(f))(d)(dt(
        (g) => {
          const m = ((h) => {
            let $ = h, y = !0, x;
            for (; y; ) {
              const w = $;
              if (w.tag === "Leaf") {
                y = !1, x = v;
                continue;
              }
              if (w.tag === "Node") {
                const C = t.compare(g)(w._3);
                if (C === "LT") {
                  $ = w._5;
                  continue;
                }
                if (C === "GT") {
                  $ = w._6;
                  continue;
                }
                if (C === "EQ") {
                  y = !1, x = T("Just", w._4);
                  continue;
                }
              }
              l();
            }
            return x;
          })(d.unknown);
          if (m.tag === "Nothing")
            return !1;
          if (m.tag === "Just")
            return m._1.length === 1;
          l();
        },
        c
      )).cutvalue
    };
  };
}, IN = (t) => {
  const n = ip(t), e = up(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const a = { ...u, treeEdge: rt(st)(s.eid)()(Zi(st)(i.eid)(u.treeEdge)) }, c = s.tgt, _ = (($) => {
      let y = $, x = !0, w;
      for (; x; ) {
        const C = y;
        if (C.tag === "Leaf") {
          x = !1, w = v;
          continue;
        }
        if (C.tag === "Node") {
          const b = t.compare(c)(C._3);
          if (b === "LT") {
            y = C._5;
            continue;
          }
          if (b === "GT") {
            y = C._6;
            continue;
          }
          if (b === "EQ") {
            x = !1, w = T("Just", C._4);
            continue;
          }
        }
        l();
      }
      return w;
    })(a.layer), d = s.src, p = (($) => {
      let y = $, x = !0, w;
      for (; x; ) {
        const C = y;
        if (C.tag === "Leaf") {
          x = !1, w = v;
          continue;
        }
        if (C.tag === "Node") {
          const b = t.compare(d)(C._3);
          if (b === "LT") {
            y = C._5;
            continue;
          }
          if (b === "GT") {
            y = C._6;
            continue;
          }
          if (b === "EQ") {
            x = !1, w = T("Just", C._4);
            continue;
          }
        }
        l();
      }
      return w;
    })(a.layer), m = (() => {
      if (_.tag === "Nothing") {
        if (p.tag === "Nothing")
          return -s.delta;
        if (p.tag === "Just")
          return -p._1 - s.delta | 0;
        l();
      }
      if (_.tag === "Just") {
        if (p.tag === "Nothing")
          return (_._1 - 0 | 0) - s.delta | 0;
        if (p.tag === "Just")
          return (_._1 - p._1 | 0) - s.delta | 0;
      }
      l();
    })(), h = Ba(t)(a)(s.tgt)(i) ? m : -m;
    return e(r)(o)(n(r)(o)({
      ...a,
      layer: N(($) => (y) => Ba(t)(a)(y)(i) ? $ : rt(t)(y)((() => {
        const w = ((C) => {
          let b = C, k = !0, E;
          for (; k; ) {
            const S = b;
            if (S.tag === "Leaf") {
              k = !1, E = v;
              continue;
            }
            if (S.tag === "Node") {
              const I = t.compare(y)(S._3);
              if (I === "LT") {
                b = S._5;
                continue;
              }
              if (I === "GT") {
                b = S._6;
                continue;
              }
              if (I === "EQ") {
                k = !1, E = T("Just", S._4);
                continue;
              }
            }
            l();
          }
          return E;
        })(a.layer);
        if (w.tag === "Nothing")
          return 0 + h | 0;
        if (w.tag === "Just")
          return w._1 + h | 0;
        l();
      })())($))(a.layer)(r)
    }));
  };
}, BN = (t) => {
  const n = IN(t);
  return (e) => (r) => (o) => (i) => ((u) => (a) => {
    let c = u, f = a, _ = !0, d;
    for (; _; ) {
      const g = c, p = f;
      if (g === 0) {
        _ = !1, d = p;
        continue;
      }
      const m = PN(o)(p);
      if (m.tag === "Nothing") {
        _ = !1, d = p;
        continue;
      }
      if (m.tag === "Just") {
        const h = RN(t)(o)(m._1)(p);
        if (h.tag === "Nothing") {
          _ = !1, d = p;
          continue;
        }
        if (h.tag === "Just") {
          c = g - 1 | 0, f = n(r)(o)(m._1)(h._1)(p);
          continue;
        }
      }
      l();
    }
    return d;
  })(e)(i);
}, DN = (t) => {
  const n = up(t), e = ip(t), r = sp(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, S1 = (t) => (n) => N((e) => (r) => Ot(t)(Jn)(n(r))([r])(e))(z), zN = (t) => {
  const n = dn(t)(Mt);
  return (e) => (r) => (o) => {
    const i = (a) => (c) => (f) => (_) => {
      let d = a, g = c, p = f, m = _, h = !0, $;
      for (; h; ) {
        const y = d, x = g, w = p, C = m, b = Bt((k) => v, (k) => (E) => T("Just", { head: k, tail: E }), w);
        if (b.tag === "Nothing") {
          h = !1, $ = C;
          continue;
        }
        if (b.tag === "Just") {
          const k = b._1.head, S = ((D) => {
            let O = D, V = !0, et;
            for (; V; ) {
              const K = O;
              if (K.tag === "Leaf") {
                V = !1, et = v;
                continue;
              }
              if (K.tag === "Node") {
                const q = t.compare(k)(K._3);
                if (q === "LT") {
                  O = K._5;
                  continue;
                }
                if (q === "GT") {
                  O = K._6;
                  continue;
                }
                if (q === "EQ") {
                  V = !1, et = T("Just", K._4);
                  continue;
                }
              }
              l();
            }
            return et;
          })(C.layer), I = (() => {
            if (S.tag === "Nothing")
              return 0;
            if (S.tag === "Just")
              return S._1;
            l();
          })(), W = N((D) => (O) => {
            const V = O.tgt, K = ((A) => {
              let P = A, Q = !0, G;
              for (; Q; ) {
                const F = P;
                if (F.tag === "Leaf") {
                  Q = !1, G = v;
                  continue;
                }
                if (F.tag === "Node") {
                  const H = t.compare(V)(F._3);
                  if (H === "LT") {
                    P = F._5;
                    continue;
                  }
                  if (H === "GT") {
                    P = F._6;
                    continue;
                  }
                  if (H === "EQ") {
                    Q = !1, G = T("Just", F._4);
                    continue;
                  }
                }
                l();
              }
              return G;
            })(D.incident), q = (() => {
              if (K.tag === "Nothing")
                return -1;
              if (K.tag === "Just")
                return K._1 - 1 | 0;
              l();
            })();
            return {
              st: {
                ...D.st,
                layer: rt(t)(O.tgt)(bN((() => {
                  const A = O.tgt, Q = ((G) => {
                    let F = G, H = !0, U;
                    for (; H; ) {
                      const Y = F;
                      if (Y.tag === "Leaf") {
                        H = !1, U = v;
                        continue;
                      }
                      if (Y.tag === "Node") {
                        const M = t.compare(A)(Y._3);
                        if (M === "LT") {
                          F = Y._5;
                          continue;
                        }
                        if (M === "GT") {
                          F = Y._6;
                          continue;
                        }
                        if (M === "EQ") {
                          H = !1, U = T("Just", Y._4);
                          continue;
                        }
                      }
                      l();
                    }
                    return U;
                  })(D.st.layer);
                  if (Q.tag === "Nothing")
                    return 0;
                  if (Q.tag === "Just")
                    return Q._1;
                  l();
                })())(I + O.delta | 0))(D.st.layer)
              },
              incident: rt(t)(O.tgt)(q)(D.incident),
              queue: q === 0 ? [...D.queue, O.tgt] : D.queue
            };
          })({ st: C, incident: x, queue: b._1.tail })((() => {
            const O = ((V) => {
              let et = V, K = !0, q;
              for (; K; ) {
                const A = et;
                if (A.tag === "Leaf") {
                  K = !1, q = v;
                  continue;
                }
                if (A.tag === "Node") {
                  const P = t.compare(k)(A._3);
                  if (P === "LT") {
                    et = A._5;
                    continue;
                  }
                  if (P === "GT") {
                    et = A._6;
                    continue;
                  }
                  if (P === "EQ") {
                    K = !1, q = T("Just", A._4);
                    continue;
                  }
                }
                l();
              }
              return q;
            })(y);
            if (O.tag === "Nothing")
              return [];
            if (O.tag === "Just")
              return O._1;
            l();
          })());
          d = y, g = W.incident, p = W.queue, m = W.st;
          continue;
        }
        l();
      }
      return $;
    }, s = S1(t)((a) => a.tgt)(r), u = n(B((a) => J(
      a,
      (() => {
        const f = ((_) => {
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
            l();
          }
          return p;
        })(s);
        if (f.tag === "Nothing")
          return 0;
        if (f.tag === "Just")
          return f._1.length;
        l();
      })()
    ))(e));
    return i(S1(t)((a) => a.src)(r))(u)(dt(
      (a) => {
        const f = ((_) => {
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
            l();
          }
          return p;
        })(u);
        if (f.tag === "Nothing")
          return !0;
        if (f.tag === "Just")
          return f._1 === 0;
        l();
      },
      e
    ))(o);
  };
}, HN = (t) => {
  const n = SN(t), e = zN(t), r = DN(t), o = BN(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, ap = (t) => {
  const n = EN(t), e = HN(t), r = JN(t);
  return (o) => (i) => {
    if (o.length === 0)
      return z;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(kN(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, cp = (t) => (e) => {
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
    l();
  }
  return i;
}, c0 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, ON = /* @__PURE__ */ ap(st), Ys = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), WN = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = j((() => {
      const o = cp(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      l();
    })());
    return De(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  l();
}, QN = (t) => (n) => ({
  ...n,
  cGraph: N(WN(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return Tt((r) => pn(r)(e.cNodes))(e.cNodeOrder);
  })())
}), qN = (t) => (n) => (e) => (r) => (o) => {
  const i = yn(vc(n.cGroupOffset.x - t.cGroupOffset.x));
  return Ys({ src: o.nextNodeId, tgt: r, delta: c0(0)(-i), weight: 1 })(Ys({ src: o.nextNodeId, tgt: e, delta: c0(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, MN = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = c0(0)(yn(vc(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? qN(e)(r)(o)(i)(s) : Ys({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, XN = (t) => (n) => (e) => (r) => (o) => {
  const i = pn(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? MN(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  l();
}, UN = (t) => (n) => (e) => (r) => N(XN(t)(n)(r))(e)(r.constraints), YN = (t) => (n) => Ys({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), VN = (t) => {
  const n = N((o) => (i) => Ot(st)(En)(i.tgt)(1)(o))(z)(t.edges), e = dt(
    (o) => {
      const i = cp(o)(n);
      if (i.tag === "Nothing")
        return !0;
      if (i.tag === "Just")
        return i._1 === 0;
      l();
    },
    t.nodes
  );
  if (e.length <= 1)
    return t;
  const r = t.nextNodeId;
  return N((o) => (i) => Ys({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, KN = (t) => (n) => {
  const e = VN(N(YN)(N(UN(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return Tt((o) => pn(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, jN = (t) => (n) => {
  const e = KN(t)(n);
  return QN(ON(e.nodes)(e.edges))(n);
}, fp = (t) => t, Tn = /* @__PURE__ */ fp("H"), mn = /* @__PURE__ */ fp("V"), ZN = (t) => J(t._2, t._1), lp = (t) => ({ ...t, position: J(t.position._2, t.position._1), size: J(t.size._2, t.size._1) }), tC = (t) => ({
  start: J(t.start._2, t.start._1),
  end: J(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return mn;
    if (t.direction === "V")
      return Tn;
    l();
  })()
}), gp = (t) => ({ ...t, segments: B(tC)(t.segments), bends: B(ZN)(t.bends) }), nC = (t) => ({ nodes: B(lp)(t.nodes), edges: t.edges, paths: B(gp)(t.paths), ports: t.ports }), eC = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, rC = (t) => (n) => ({
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
}), oC = (t) => (n) => jN(n), iC = (t) => (n) => (e) => {
  const r = nC(e), o = CN(r), i = vN(o)(rp(r)), s = xN(Kh(zl)(Qw({
    ...Mw(o.cGraph),
    compactionAlgorithm: T("Just", oC()(i)),
    constraintAlgorithm: T("Just", oN(n.edgeEdge)),
    spacingsHandler: rC(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: B(lp)(s.nodes), edges: B(gp)(s.edges) };
}, L1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, _p = (t) => Un(3)(t) === "$d:", sC = (t) => (n) => (e) => N((r) => (o) => {
  const i = L1(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    l();
  })(), u = L1(o.to.node)(t), a = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    l();
  })();
  if (a <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const c = o.id, f = B((d) => "$d:" + c + ":" + fn(d))(tn(1, a - 1 | 0)), _ = [o.from.node, ...f, o.to.node];
  return {
    ...r,
    layers: N((d) => (g) => {
      const p = g._2, m = by(s + g._1 | 0)((h) => [...h, p])(d);
      if (m.tag === "Nothing")
        return d;
      if (m.tag === "Just")
        return m._1;
      l();
    })(r.layers)(Fn(Zn, tn(1, a - 1 | 0), f)),
    edges: [
      ...r.edges,
      ...Fn(
        (d) => (g) => ({ id: c + ":" + d + "->" + g, from: { node: d, port: o.from.port }, to: { node: g, port: o.to.port }, label: v }),
        _,
        Et(1, _.length, _)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: _ }]
  };
})({ layers: e, edges: [], chains: [] })(n), dp = (t) => t, bi = /* @__PURE__ */ dn(st)(Mt), jt = (t) => (e) => {
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
    l();
  }
  return i;
}, E1 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, wt = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, Ct = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Ii = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, uC = (t) => (n) => {
  const e = st.compare(t._1)(n._1);
  return e === "LT" ? Yn : e === "GT" ? Vn : st.compare(t._2)(n._2);
}, Li = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, aC = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), cC = (t) => t, A1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, fC = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Hu = /* @__PURE__ */ dp("Regular"), Ou = /* @__PURE__ */ dp("Critical"), hp = (t) => (n) => {
  const e = N((s) => (u) => rt(R)(u.node)(u)(s))(z)(n), r = 1.25 * j(4), o = (s, u, a) => ((f) => (_) => (d) => {
    let g = f, p = _, m = d, h = !0, $;
    for (; h; ) {
      const y = g, x = p, w = m;
      if (w.critical) {
        h = !1, $ = w;
        continue;
      }
      const C = Bt((k) => v, (k) => (E) => T("Just", { head: k, tail: E }), y), b = Bt((k) => v, (k) => (E) => T("Just", { head: k, tail: E }), x);
      if (C.tag === "Just" && b.tag === "Just") {
        const k = C._1.head > b._1.head - s && C._1.head < b._1.head + s ? { ...w, critical: !0 } : C._1.head > b._1.head - r && C._1.head < b._1.head + r ? { ...w, conflicts: w.conflicts + 1 | 0 } : w;
        if (k.critical) {
          h = !1, $ = k;
          continue;
        }
        if (C._1.head <= b._1.head) {
          g = C._1.tail, p = x, m = k;
          continue;
        }
        g = y, p = b._1.tail, m = k;
        continue;
      }
      h = !1, $ = w;
    }
    return $;
  })(u)(a)({ conflicts: 0, critical: !1 }), i = (s, u, a) => {
    if (Ct(N(Ct)(-1e18)(u.incoming))(N(Ct)(-1e18)(u.outgoing)) - wt(N(wt)(1e18)(u.incoming))(N(wt)(1e18)(u.outgoing)) < 1e-3 || Ct(N(Ct)(-1e18)(a.incoming))(N(Ct)(-1e18)(a.outgoing)) - wt(N(wt)(1e18)(a.incoming))(N(wt)(1e18)(a.outgoing)) < 1e-3)
      return [];
    const c = o(s, u.outgoing, a.incoming), f = o(s, a.outgoing, u.incoming);
    if (c.critical || f.critical)
      return [...c.critical ? [{ src: a.id, tgt: u.id, weight: 1, kind: Ou }] : [], ...f.critical ? [{ src: u.id, tgt: a.id, weight: 1, kind: Ou }] : []];
    const _ = wt(N(wt)(1e18)(u.incoming))(N(wt)(1e18)(u.outgoing)), d = Ct(N(Ct)(-1e18)(u.incoming))(N(Ct)(-1e18)(u.outgoing)), g = wt(N(wt)(1e18)(a.incoming))(N(wt)(1e18)(a.outgoing)), p = Ct(N(Ct)(-1e18)(a.incoming))(N(Ct)(-1e18)(a.outgoing)), m = (1 * c.conflicts | 0) + (16 * (N(($) => (y) => y > p ? $ : y >= g ? $ + 1 | 0 : $)(0)(u.outgoing) + N(($) => (y) => y > d ? $ : y >= _ ? $ + 1 | 0 : $)(0)(a.incoming) | 0) | 0) | 0, h = (1 * f.conflicts | 0) + (16 * (N(($) => (y) => y > d ? $ : y >= _ ? $ + 1 | 0 : $)(0)(a.outgoing) + N(($) => (y) => y > p ? $ : y >= g ? $ + 1 | 0 : $)(0)(u.incoming) | 0) | 0) | 0;
    return m < h ? [{ src: u.id, tgt: a.id, weight: h - m | 0, kind: Hu }] : m > h ? [{ src: a.id, tgt: u.id, weight: m - h | 0, kind: Hu }] : m > 0 ? [{ src: u.id, tgt: a.id, weight: 0, kind: Hu }, { src: a.id, tgt: u.id, weight: 0, kind: Hu }] : [];
  };
  return N((s) => (u) => N((a) => (c) => rt(R)(c._1)(c._2)(a))(s)((() => {
    const a = N((D) => (O) => {
      const V = O.edge.from.node + "|" + (() => {
        if (O.edge.from.port.tag === "Just")
          return O.edge.from.port._1;
        if (O.edge.from.port.tag === "Nothing")
          return "_auto_" + O.edge.id;
        l();
      })(), et = A1(V)(D.entries);
      if (et.tag === "Nothing")
        return {
          ...D,
          entries: rt(R)(V)({
            id: 0,
            members: [O.edge.id],
            incoming: [O.fromPos._1],
            outgoing: [O.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: v,
            splitPartner: v
          })(D.entries),
          order: [...D.order, V]
        };
      if (et.tag === "Just")
        return {
          ...D,
          entries: rt(R)(V)({
            ...et._1,
            members: [...et._1.members, O.edge.id],
            incoming: [...Fr((K) => K < O.fromPos._1)(et._1.incoming).init, O.fromPos._1, ...Fr((K) => K <= O.fromPos._1)(et._1.incoming).rest],
            outgoing: [...Fr((K) => K < O.toPos._1)(et._1.outgoing).init, O.toPos._1, ...Fr((K) => K <= O.toPos._1)(et._1.outgoing).rest]
          })(D.entries)
        };
      l();
    })({ entries: z, order: [] })(u._2), c = qt((D) => (O) => ({ ...O, id: D }))(Tt((D) => A1(D)(a.entries))(a.order));
    if (c.length === 0)
      return [];
    const f = N((D) => (O) => D.prev.tag === "Just" && O - D.prev._1 < 1e-9 ? D : { prev: T("Just", O), out: [...D.out, O] })({ prev: v, out: [] })(Gt(ot.compare)([
      ...xt(c)((D) => D.incoming),
      ...xt(c)((D) => D.outgoing)
    ])).out, _ = f.length < 2 ? 0.2 * r : 0.2 * N((D) => (O) => {
      if (D.prev.tag === "Nothing")
        return { prev: T("Just", O), mn: D.mn };
      if (D.prev.tag === "Just")
        return { prev: T("Just", O), mn: wt(D.mn)(O - D.prev._1) };
      l();
    })({ prev: v, mn: 1e18 })(f).mn, d = {
      segments: c,
      deps: (() => {
        const D = c.length;
        return xt(xt(tn(0, D - 2 | 0))((O) => xt(tn(O + 1 | 0, D - 1 | 0))((V) => [
          J(O, V)
        ])))((O) => O._1 >= 0 && O._1 < c.length ? O._2 >= 0 && O._2 < c.length ? i(_, c[O._1], c[O._2]) : [] : []);
      })()
    }, g = dt(
      (D) => {
        if (D.kind === "Critical")
          return !0;
        if (D.kind === "Regular")
          return !1;
        l();
      },
      d.deps
    ), p = (() => {
      if (g.length < 2)
        return d;
      const D = bi((() => {
        const q = d.segments;
        return B((A) => J(A.id, A.mark))((() => {
          const A = q.length, P = (F) => {
            let H = F, U = !0, Y;
            for (; U; ) {
              const M = H, tt = Kt((it) => {
                const nt = jt(it)(M.inWeight);
                if (nt.tag === "Nothing")
                  return !0;
                if (nt.tag === "Just")
                  return nt._1 === 0;
                l();
              })(M.remaining);
              if (tt.tag === "Nothing") {
                U = !1, Y = M;
                continue;
              }
              if (tt.tag === "Just") {
                const it = tt._1;
                H = {
                  ...M,
                  inWeight: N((nt) => (ct) => Ot(st)(En)(ct.tgt)(-ct.weight)(nt))(M.inWeight)((() => {
                    const nt = jt(it)(M.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    l();
                  })()),
                  marks: rt(st)(it)(M.nextSource)(M.marks),
                  nextSource: M.nextSource + 1 | 0,
                  outWeight: N((nt) => (ct) => Ot(st)(En)(ct.src)(-ct.weight)(nt))(M.outWeight)((() => {
                    const nt = jt(it)(M.depsByTgt);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    l();
                  })()),
                  remaining: dt((nt) => nt !== it, M.remaining)
                };
                continue;
              }
              l();
            }
            return Y;
          }, Q = (F) => {
            let H = F, U = !0, Y;
            for (; U; ) {
              const M = H, tt = Kt((it) => {
                const nt = jt(it)(M.outWeight);
                if (nt.tag === "Nothing")
                  return !0;
                if (nt.tag === "Just")
                  return nt._1 === 0;
                l();
              })(M.remaining);
              if (tt.tag === "Nothing") {
                U = !1, Y = M;
                continue;
              }
              if (tt.tag === "Just") {
                const it = tt._1;
                H = {
                  ...M,
                  inWeight: N((nt) => (ct) => Ot(st)(En)(ct.tgt)(-ct.weight)(nt))(M.inWeight)((() => {
                    const nt = jt(it)(M.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    l();
                  })()),
                  marks: rt(st)(it)(M.nextSink)(M.marks),
                  nextSink: M.nextSink - 1 | 0,
                  outWeight: N((nt) => (ct) => Ot(st)(En)(ct.src)(-ct.weight)(nt))(M.outWeight)((() => {
                    const nt = jt(it)(M.depsByTgt);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    l();
                  })()),
                  remaining: dt((nt) => nt !== it, M.remaining)
                };
                continue;
              }
              l();
            }
            return Y;
          };
          return ((F) => {
            let H = F, U = !0, Y;
            for (; U; ) {
              const tt = P(Q(H));
              if (tt.remaining.length === 0) {
                U = !1, Y = B((it) => {
                  const nt = jt(it.id)(tt.marks), ct = (() => {
                    if (nt.tag === "Nothing")
                      return it.id;
                    if (nt.tag === "Just")
                      return nt._1;
                    l();
                  })();
                  return { ...it, mark: ct < A ? (ct + A | 0) + 1 | 0 : ct };
                })(q);
                continue;
              }
              H = (() => {
                const it = (ct) => {
                  const lt = jt(ct)(tt.outWeight), pt = jt(ct)(tt.inWeight);
                  return (() => {
                    if (lt.tag === "Nothing")
                      return 0;
                    if (lt.tag === "Just")
                      return lt._1;
                    l();
                  })() - (() => {
                    if (pt.tag === "Nothing")
                      return 0;
                    if (pt.tag === "Just")
                      return pt._1;
                    l();
                  })() | 0;
                }, nt = Gt((ct) => (lt) => st.compare(it(lt))(it(ct)))(tt.remaining);
                if (0 < nt.length) {
                  const ct = nt[0];
                  return {
                    ...tt,
                    inWeight: N((lt) => (pt) => Ot(st)(En)(pt.tgt)(-pt.weight)(lt))(tt.inWeight)((() => {
                      const lt = jt(ct)(tt.depsBySrc);
                      if (lt.tag === "Nothing")
                        return [];
                      if (lt.tag === "Just")
                        return lt._1;
                      l();
                    })()),
                    marks: rt(st)(ct)(tt.nextSource)(tt.marks),
                    nextSource: tt.nextSource + 1 | 0,
                    outWeight: N((lt) => (pt) => Ot(st)(En)(pt.src)(-pt.weight)(lt))(tt.outWeight)((() => {
                      const lt = jt(ct)(tt.depsByTgt);
                      if (lt.tag === "Nothing")
                        return [];
                      if (lt.tag === "Just")
                        return lt._1;
                      l();
                    })()),
                    remaining: dt((lt) => lt !== ct, tt.remaining)
                  };
                }
                return tt;
              })();
            }
            return Y;
          })({
            remaining: B((F) => F.id)(q),
            marks: z,
            inWeight: N((F) => (H) => Ot(st)(En)(H.tgt)(H.weight)(F))(z)(g),
            outWeight: N((F) => (H) => Ot(st)(En)(H.src)(H.weight)(F))(z)(g),
            depsBySrc: N((F) => (H) => Ot(st)(Jn)(H.src)([H])(F))(z)(g),
            depsByTgt: N((F) => (H) => Ot(st)(Jn)(H.tgt)([H])(F))(z)(g),
            nextSink: A - 1 | 0,
            nextSource: A + 1 | 0
          });
        })());
      })()), O = dt(
        (q) => {
          const A = jt(q.src)(D), P = jt(q.tgt)(D);
          return (() => {
            if (A.tag === "Nothing")
              return 0;
            if (A.tag === "Just")
              return A._1;
            l();
          })() > (() => {
            if (P.tag === "Nothing")
              return 0;
            if (P.tag === "Just")
              return P._1;
            l();
          })();
        },
        g
      );
      if (O.length === 0)
        return d;
      const V = N((q) => (A) => {
        if (Ce(Jo)(A.src)(q.decisions) || Ce(Jo)(A.tgt)(q.decisions))
          return q;
        const P = jt(A.src)(q.segMap), Q = jt(A.tgt)(q.segMap);
        if (P.tag === "Just" && Q.tag === "Just") {
          const G = (P._1.incoming.length + P._1.outgoing.length | 0) > 2 && (Q._1.incoming.length + Q._1.outgoing.length | 0) <= 2, F = G ? Q._1 : P._1;
          return {
            decisions: [...q.decisions, F.id],
            segMap: rt(st)(F.id)({ ...F, splitBy: T("Just", G ? P._1.id : Q._1.id) })(q.segMap)
          };
        }
        return q;
      })({ decisions: [], segMap: bi(B((q) => J(q.id, q))(d.segments)) })(O), et = V.segMap, K = N((q) => (A) => {
        const P = wt(N(wt)(1e18)(A.incoming))(N(wt)(1e18)(A.outgoing)), Q = Ct(N(Ct)(-1e18)(A.incoming))(N(Ct)(-1e18)(A.outgoing)), G = dt(
          (M) => M.a.startPosition <= Q && M.a.endPosition >= P,
          qt((M) => (tt) => ({ i: M, a: tt }))(q.freeAreas)
        );
        if (G.length === 0) {
          const M = {
            ...A,
            incoming: Gt(ot.compare)(A.incoming),
            outgoing: Gt(ot.compare)([(P + Q) / 2]),
            splitPartner: T("Just", q.nextId)
          }, tt = {
            id: q.nextId,
            incoming: Gt(ot.compare)([(P + Q) / 2]),
            mark: 0,
            members: A.members,
            outgoing: Gt(ot.compare)(A.outgoing),
            slot: 0,
            splitBy: v,
            splitPartner: T("Just", A.id)
          };
          return {
            segMap: rt(st)(tt.id)(tt)(rt(st)(M.id)(M)(q.segMap)),
            freeAreas: q.freeAreas,
            nextId: q.nextId + 1 | 0
          };
        }
        const F = 0 < G.length ? T("Just", G[0]) : v, H = (() => {
          if (F.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (F.tag === "Just") {
            if (G.length === 1)
              return F._1;
            const M = B((tt) => ({
              c: tt,
              rating: (() => {
                const it = (tt.a.startPosition + tt.a.endPosition) / 2, nt = [it], ct = [it], lt = N((() => {
                  const At = q.segMap;
                  return (Pt) => (en) => {
                    const $t = jt(en.tgt)(At);
                    if ($t.tag === "Nothing")
                      return Pt;
                    if ($t.tag === "Just") {
                      const It = wt(N(wt)(1e18)($t._1.incoming))(N(wt)(1e18)($t._1.outgoing)), yt = Ct(N(Ct)(-1e18)($t._1.incoming))(N(Ct)(-1e18)($t._1.outgoing)), Nt = wt(N(wt)(1e18)(A.incoming))(N(wt)(1e18)(nt)), _t = (() => {
                        const Ht = Ct(N(Ct)(-1e18)(A.incoming))(N(Ct)(-1e18)(nt)), Xt = N((Ut) => (hn) => hn > yt ? Ut : hn >= It ? Ut + 1 | 0 : Ut)(0)(nt) + N((Ut) => (hn) => hn > Ht ? Ut : hn >= Nt ? Ut + 1 | 0 : Ut)(0)($t._1.incoming) | 0, le = wt(N(wt)(1e18)(A.incoming))(N(wt)(1e18)(nt)), Xn = Ct(N(Ct)(-1e18)(A.incoming))(N(Ct)(-1e18)(nt)), se = wt(N(wt)(1e18)($t._1.incoming))(N(wt)(1e18)($t._1.outgoing)), On = Ct(N(Ct)(-1e18)($t._1.incoming))(N(Ct)(-1e18)($t._1.outgoing)), $e = N((Ut) => (hn) => hn > Xn ? Ut : hn >= le ? Ut + 1 | 0 : Ut)(0)($t._1.outgoing) + N((Ut) => (hn) => hn > On ? Ut : hn >= se ? Ut + 1 | 0 : Ut)(0)(A.incoming) | 0;
                        return Xt === $e ? Xt > 0 ? { ...Pt, deps: Pt.deps + 2 | 0, crossings: Pt.crossings + Xt | 0 } : Pt : { ...Pt, deps: Pt.deps + 1 | 0, crossings: Pt.crossings + Li(Xt)($e) | 0 };
                      })(), mt = wt(N(wt)(1e18)($t._1.incoming))(N(wt)(1e18)($t._1.outgoing)), St = Ct(N(Ct)(-1e18)($t._1.incoming))(N(Ct)(-1e18)($t._1.outgoing)), Ft = wt(N(wt)(1e18)(ct))(N(wt)(1e18)(A.outgoing)), Jt = Ct(N(Ct)(-1e18)(ct))(N(Ct)(-1e18)(A.outgoing)), bt = N((Ht) => (Xt) => Xt > St ? Ht : Xt >= mt ? Ht + 1 | 0 : Ht)(0)(A.outgoing) + N((Ht) => (Xt) => Xt > Jt ? Ht : Xt >= Ft ? Ht + 1 | 0 : Ht)(0)($t._1.incoming) | 0, Wt = wt(N(wt)(1e18)(ct))(N(wt)(1e18)(A.outgoing)), Zt = Ct(N(Ct)(-1e18)(ct))(N(Ct)(-1e18)(A.outgoing)), sn = wt(N(wt)(1e18)($t._1.incoming))(N(wt)(1e18)($t._1.outgoing)), rn = Ct(N(Ct)(-1e18)($t._1.incoming))(N(Ct)(-1e18)($t._1.outgoing)), ie = N((Ht) => (Xt) => Xt > Zt ? Ht : Xt >= Wt ? Ht + 1 | 0 : Ht)(0)($t._1.outgoing) + N((Ht) => (Xt) => Xt > rn ? Ht : Xt >= sn ? Ht + 1 | 0 : Ht)(0)(ct) | 0;
                      return bt === ie ? bt > 0 ? { ..._t, deps: _t.deps + 2 | 0, crossings: _t.crossings + bt | 0 } : _t : { ..._t, deps: _t.deps + 1 | 0, crossings: _t.crossings + Li(bt)(ie) | 0 };
                    }
                    l();
                  };
                })())(N((() => {
                  const At = q.segMap;
                  return (Pt) => (en) => {
                    const $t = jt(en.src)(At);
                    if ($t.tag === "Nothing")
                      return Pt;
                    if ($t.tag === "Just") {
                      const It = wt(N(wt)(1e18)($t._1.incoming))(N(wt)(1e18)($t._1.outgoing)), yt = Ct(N(Ct)(-1e18)($t._1.incoming))(N(Ct)(-1e18)($t._1.outgoing)), Nt = wt(N(wt)(1e18)(A.incoming))(N(wt)(1e18)(nt)), _t = (() => {
                        const Ht = Ct(N(Ct)(-1e18)(A.incoming))(N(Ct)(-1e18)(nt)), Xt = N((Ut) => (hn) => hn > yt ? Ut : hn >= It ? Ut + 1 | 0 : Ut)(0)(nt) + N((Ut) => (hn) => hn > Ht ? Ut : hn >= Nt ? Ut + 1 | 0 : Ut)(0)($t._1.incoming) | 0, le = wt(N(wt)(1e18)(A.incoming))(N(wt)(1e18)(nt)), Xn = Ct(N(Ct)(-1e18)(A.incoming))(N(Ct)(-1e18)(nt)), se = wt(N(wt)(1e18)($t._1.incoming))(N(wt)(1e18)($t._1.outgoing)), On = Ct(N(Ct)(-1e18)($t._1.incoming))(N(Ct)(-1e18)($t._1.outgoing)), $e = N((Ut) => (hn) => hn > Xn ? Ut : hn >= le ? Ut + 1 | 0 : Ut)(0)($t._1.outgoing) + N((Ut) => (hn) => hn > On ? Ut : hn >= se ? Ut + 1 | 0 : Ut)(0)(A.incoming) | 0;
                        return Xt === $e ? Xt > 0 ? { ...Pt, deps: Pt.deps + 2 | 0, crossings: Pt.crossings + Xt | 0 } : Pt : { ...Pt, deps: Pt.deps + 1 | 0, crossings: Pt.crossings + Li(Xt)($e) | 0 };
                      })(), mt = wt(N(wt)(1e18)($t._1.incoming))(N(wt)(1e18)($t._1.outgoing)), St = Ct(N(Ct)(-1e18)($t._1.incoming))(N(Ct)(-1e18)($t._1.outgoing)), Ft = wt(N(wt)(1e18)(ct))(N(wt)(1e18)(A.outgoing)), Jt = Ct(N(Ct)(-1e18)(ct))(N(Ct)(-1e18)(A.outgoing)), bt = N((Ht) => (Xt) => Xt > St ? Ht : Xt >= mt ? Ht + 1 | 0 : Ht)(0)(A.outgoing) + N((Ht) => (Xt) => Xt > Jt ? Ht : Xt >= Ft ? Ht + 1 | 0 : Ht)(0)($t._1.incoming) | 0, Wt = wt(N(wt)(1e18)(ct))(N(wt)(1e18)(A.outgoing)), Zt = Ct(N(Ct)(-1e18)(ct))(N(Ct)(-1e18)(A.outgoing)), sn = wt(N(wt)(1e18)($t._1.incoming))(N(wt)(1e18)($t._1.outgoing)), rn = Ct(N(Ct)(-1e18)($t._1.incoming))(N(Ct)(-1e18)($t._1.outgoing)), ie = N((Ht) => (Xt) => Xt > Zt ? Ht : Xt >= Wt ? Ht + 1 | 0 : Ht)(0)($t._1.outgoing) + N((Ht) => (Xt) => Xt > rn ? Ht : Xt >= sn ? Ht + 1 | 0 : Ht)(0)(ct) | 0;
                      return bt === ie ? bt > 0 ? { ..._t, deps: _t.deps + 2 | 0, crossings: _t.crossings + bt | 0 } : _t : { ..._t, deps: _t.deps + 1 | 0, crossings: _t.crossings + Li(bt)(ie) | 0 };
                    }
                    l();
                  };
                })())({ crossings: 0, deps: 0 })(dt((At) => At.tgt === A.id, d.deps)))(dt((At) => At.src === A.id, d.deps)), pt = (() => {
                  if (A.splitBy.tag === "Just")
                    return jt(A.splitBy._1)(q.segMap);
                  if (A.splitBy.tag === "Nothing")
                    return v;
                  l();
                })();
                if (pt.tag === "Just")
                  return {
                    ...lt,
                    deps: lt.deps + 2 | 0,
                    crossings: (() => {
                      const At = wt(N(wt)(1e18)(pt._1.incoming))(N(wt)(1e18)(pt._1.outgoing)), Pt = wt(N(wt)(1e18)(ct))(N(wt)(1e18)(A.outgoing)), en = Ct(N(Ct)(-1e18)(pt._1.incoming))(N(Ct)(-1e18)(pt._1.outgoing)), $t = Ct(N(Ct)(-1e18)(ct))(N(Ct)(-1e18)(A.outgoing)), It = wt(N(wt)(1e18)(A.incoming))(N(wt)(1e18)(nt));
                      return lt.crossings + (() => {
                        const yt = wt(N(wt)(1e18)(pt._1.incoming))(N(wt)(1e18)(pt._1.outgoing)), Nt = Ct(N(Ct)(-1e18)(A.incoming))(N(Ct)(-1e18)(nt)), _t = Ct(N(Ct)(-1e18)(pt._1.incoming))(N(Ct)(-1e18)(pt._1.outgoing));
                        return ((N((mt) => (St) => St > en ? mt : St >= At ? mt + 1 | 0 : mt)(0)(nt) + N((mt) => (St) => St > Nt ? mt : St >= It ? mt + 1 | 0 : mt)(0)(pt._1.incoming) | 0) + N((mt) => (St) => St > $t ? mt : St >= Pt ? mt + 1 | 0 : mt)(0)(pt._1.outgoing) | 0) + N((mt) => (St) => St > _t ? mt : St >= yt ? mt + 1 | 0 : mt)(0)(ct) | 0;
                      })() | 0;
                    })()
                  };
                if (pt.tag === "Nothing")
                  return lt;
                l();
              })()
            }))(G);
            return N((tt) => (it) => it.rating.crossings < tt.rating.crossings || !(it.rating.crossings > tt.rating.crossings) && (it.rating.deps < tt.rating.deps || !(it.rating.deps > tt.rating.deps) && it.c.a.size > tt.c.a.size) ? it : tt)(0 < M.length ? M[0] : { c: F._1, rating: { crossings: 1e6, deps: 1e6 } })(M).c;
          }
          l();
        })(), U = {
          ...A,
          incoming: Gt(ot.compare)(A.incoming),
          outgoing: Gt(ot.compare)([(H.a.startPosition + H.a.endPosition) / 2]),
          splitPartner: T("Just", q.nextId)
        }, Y = {
          id: q.nextId,
          incoming: Gt(ot.compare)([(H.a.startPosition + H.a.endPosition) / 2]),
          mark: 0,
          members: A.members,
          outgoing: Gt(ot.compare)(A.outgoing),
          slot: 0,
          splitBy: v,
          splitPartner: T("Just", A.id)
        };
        return {
          segMap: rt(st)(Y.id)(Y)(rt(st)(U.id)(U)(q.segMap)),
          freeAreas: (() => {
            if (H.i >= 0 && H.i < q.freeAreas.length) {
              const M = Wd(zt, v, H.i, q.freeAreas), tt = (() => {
                if (M.tag === "Nothing")
                  return q.freeAreas;
                if (M.tag === "Just")
                  return M._1;
                l();
              })();
              if (q.freeAreas[H.i].size / 2 < _)
                return tt;
              const it = (q.freeAreas[H.i].startPosition + q.freeAreas[H.i].endPosition) / 2, nt = it - _, ct = it + _;
              return [
                ...H.i < 1 ? [] : Et(0, H.i, tt),
                ...q.freeAreas[H.i].startPosition <= nt ? [{ startPosition: q.freeAreas[H.i].startPosition, endPosition: nt, size: nt - q.freeAreas[H.i].startPosition }] : [],
                ...ct <= q.freeAreas[H.i].endPosition ? [{ startPosition: ct, endPosition: q.freeAreas[H.i].endPosition, size: q.freeAreas[H.i].endPosition - ct }] : [],
                ...H.i < 1 ? tt : Et(H.i, tt.length, tt)
              ];
            }
            return q.freeAreas;
          })(),
          nextId: q.nextId + 1 | 0
        };
      })({
        segMap: et,
        freeAreas: (() => {
          const q = Gt(ot.compare)([
            ...xt(d.segments)((A) => A.incoming),
            ...xt(d.segments)((A) => A.outgoing)
          ]);
          return Tt(cC)(Fn(
            (A) => (P) => P - A >= 2 * _ ? T("Just", { startPosition: A + _, endPosition: P - _, size: P - A - 2 * _ }) : v,
            q,
            Et(1, q.length, q)
          ));
        })(),
        nextId: d.segments.length
      })(Gt((q) => (A) => ot.compare(Ct(N(Ct)(-1e18)(q.incoming))(N(Ct)(-1e18)(q.outgoing)) - wt(N(wt)(1e18)(q.incoming))(N(wt)(1e18)(q.outgoing)))(Ct(N(Ct)(-1e18)(A.incoming))(N(Ct)(-1e18)(A.outgoing)) - wt(N(wt)(1e18)(A.incoming))(N(wt)(1e18)(A.outgoing))))(Tt((q) => jt(q)(et))(V.decisions)));
      return {
        segments: (() => {
          const q = (A, P) => {
            if (A.tag === "Leaf")
              return P;
            if (A.tag === "Node")
              return q(A._5, Lt("Cons", A._4, q(A._6, P)));
            l();
          };
          return nn(Sn.foldr, q(K.segMap, X));
        })(),
        deps: (() => {
          const q = K.segMap, A = (G, F) => {
            if (G.tag === "Leaf")
              return F;
            if (G.tag === "Node")
              return A(G._5, Lt("Cons", G._4, A(G._6, F)));
            l();
          }, P = nn(Sn.foldr, A(q, X)), Q = P.length;
          return [
            ...xt(xt(tn(0, Q - 2 | 0))((G) => xt(tn(G + 1 | 0, Q - 1 | 0))((F) => [
              J(G, F)
            ])))((G) => G._1 >= 0 && G._1 < P.length ? G._2 >= 0 && G._2 < P.length ? P[G._1].splitPartner.tag !== "Nothing" && P[G._1].splitPartner.tag === "Just" && P[G._1].splitPartner._1 === P[G._2].id || P[G._2].splitPartner.tag !== "Nothing" && P[G._2].splitPartner.tag === "Just" && P[G._2].splitPartner._1 === P[G._1].id ? [] : i(_, P[G._1], P[G._2]) : [] : []),
            ...xt(P)((G) => G.splitBy.tag === "Just" && G.splitPartner.tag === "Just" && (() => {
              const F = jt(G.splitPartner._1)(q);
              if (F.tag === "Nothing")
                return !1;
              if (F.tag === "Just")
                return !0;
              l();
            })() && (() => {
              const F = jt(G.splitBy._1)(q);
              if (F.tag === "Nothing")
                return !1;
              if (F.tag === "Just")
                return !0;
              l();
            })() ? [{ src: G.id, tgt: G.splitBy._1, weight: 1, kind: Ou }, { src: G.splitBy._1, tgt: G.splitPartner._1, weight: 1, kind: Ou }] : [])
          ];
        })()
      };
    })(), m = p.segments, h = m.length, $ = (D) => {
      let O = D, V = !0, et;
      for (; V; ) {
        const K = O, q = Kt((A) => {
          const P = jt(A)(K.inWeight);
          if (P.tag === "Nothing")
            return !0;
          if (P.tag === "Just")
            return P._1 === 0;
          l();
        })(K.remaining);
        if (q.tag === "Nothing") {
          V = !1, et = K;
          continue;
        }
        if (q.tag === "Just") {
          const A = q._1;
          O = {
            ...K,
            inWeight: N((P) => (Q) => Ot(st)(En)(Q.tgt)(-Q.weight)(P))(K.inWeight)((() => {
              const P = jt(A)(K.depsBySrc);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              l();
            })()),
            marks: rt(st)(A)(K.nextSource)(K.marks),
            nextSource: K.nextSource + 1 | 0,
            outWeight: N((P) => (Q) => Ot(st)(En)(Q.src)(-Q.weight)(P))(K.outWeight)((() => {
              const P = jt(A)(K.depsByTgt);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              l();
            })()),
            remaining: dt((P) => P !== A, K.remaining)
          };
          continue;
        }
        l();
      }
      return et;
    }, y = (D) => {
      let O = D, V = !0, et;
      for (; V; ) {
        const K = O, q = Kt((A) => {
          const P = jt(A)(K.outWeight);
          if (P.tag === "Nothing")
            return !0;
          if (P.tag === "Just")
            return P._1 === 0;
          l();
        })(K.remaining);
        if (q.tag === "Nothing") {
          V = !1, et = K;
          continue;
        }
        if (q.tag === "Just") {
          const A = q._1;
          O = {
            ...K,
            inWeight: N((P) => (Q) => Ot(st)(En)(Q.tgt)(-Q.weight)(P))(K.inWeight)((() => {
              const P = jt(A)(K.depsBySrc);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              l();
            })()),
            marks: rt(st)(A)(K.nextSink)(K.marks),
            nextSink: K.nextSink - 1 | 0,
            outWeight: N((P) => (Q) => Ot(st)(En)(Q.src)(-Q.weight)(P))(K.outWeight)((() => {
              const P = jt(A)(K.depsByTgt);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              l();
            })()),
            remaining: dt((P) => P !== A, K.remaining)
          };
          continue;
        }
        l();
      }
      return et;
    }, w = ((D) => {
      let O = D, V = !0, et;
      for (; V; ) {
        const q = $(y(O));
        if (q.remaining.length === 0) {
          V = !1, et = B((A) => {
            const P = jt(A.id)(q.marks), Q = (() => {
              if (P.tag === "Nothing")
                return A.id;
              if (P.tag === "Just")
                return P._1;
              l();
            })();
            return { ...A, mark: Q < h ? (Q + h | 0) + 1 | 0 : Q };
          })(m);
          continue;
        }
        O = (() => {
          const A = (Q) => {
            const G = jt(Q)(q.outWeight), F = jt(Q)(q.inWeight);
            return (() => {
              if (G.tag === "Nothing")
                return 0;
              if (G.tag === "Just")
                return G._1;
              l();
            })() - (() => {
              if (F.tag === "Nothing")
                return 0;
              if (F.tag === "Just")
                return F._1;
              l();
            })() | 0;
          }, P = Gt((Q) => (G) => st.compare(A(G))(A(Q)))(q.remaining);
          if (0 < P.length) {
            const Q = P[0];
            return {
              ...q,
              inWeight: N((G) => (F) => Ot(st)(En)(F.tgt)(-F.weight)(G))(q.inWeight)((() => {
                const G = jt(Q)(q.depsBySrc);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                l();
              })()),
              marks: rt(st)(Q)(q.nextSource)(q.marks),
              nextSource: q.nextSource + 1 | 0,
              outWeight: N((G) => (F) => Ot(st)(En)(F.src)(-F.weight)(G))(q.outWeight)((() => {
                const G = jt(Q)(q.depsByTgt);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                l();
              })()),
              remaining: dt((G) => G !== Q, q.remaining)
            };
          }
          return q;
        })();
      }
      return et;
    })({
      remaining: B((D) => D.id)(m),
      marks: z,
      inWeight: N((D) => (O) => Ot(st)(En)(O.tgt)(O.weight)(D))(z)(p.deps),
      outWeight: N((D) => (O) => Ot(st)(En)(O.src)(O.weight)(D))(z)(p.deps),
      depsBySrc: N((D) => (O) => Ot(st)(Jn)(O.src)([O])(D))(z)(p.deps),
      depsByTgt: N((D) => (O) => Ot(st)(Jn)(O.tgt)([O])(D))(z)(p.deps),
      nextSink: h - 1 | 0,
      nextSource: h + 1 | 0
    }), C = (() => {
      const D = (() => {
        const K = bi(B((q) => J(q.id, q.mark))(w));
        return {
          segments: w,
          deps: Tt((q) => (() => {
            if (q.kind === "Critical")
              return !0;
            if (q.kind === "Regular")
              return !1;
            l();
          })() ? T("Just", q) : (() => {
            const A = jt(q.src)(K), P = jt(q.tgt)(K);
            return (() => {
              if (A.tag === "Nothing")
                return 0;
              if (A.tag === "Just")
                return A._1;
              l();
            })() > (() => {
              if (P.tag === "Nothing")
                return 0;
              if (P.tag === "Just")
                return P._1;
              l();
            })();
          })() ? q.weight === 0 ? v : T("Just", { src: q.tgt, tgt: q.src, weight: q.weight, kind: q.kind }) : T("Just", q))(p.deps)
        };
      })(), O = N((K) => (q) => Ot(st)(En)(q.tgt)(1)(K))(z)(D.deps), et = ((K) => {
        let q = K, A = !0, P;
        for (; A; ) {
          const Q = q, G = Bt((F) => v, (F) => (H) => T("Just", { head: F, tail: H }), Q.queue);
          if (G.tag === "Nothing") {
            A = !1, P = Q;
            continue;
          }
          if (G.tag === "Just") {
            q = N((() => {
              const F = jt(G._1.head)(Q.slots), H = (() => {
                if (F.tag === "Nothing")
                  return 0;
                if (F.tag === "Just")
                  return F._1;
                l();
              })();
              return (U) => (Y) => {
                const M = jt(Y)(U.inDegree), tt = (() => {
                  if (M.tag === "Nothing")
                    return -1;
                  if (M.tag === "Just")
                    return M._1 - 1 | 0;
                  l();
                })();
                return {
                  ...U,
                  slots: rt(st)(Y)(E1((() => {
                    const it = jt(Y)(U.slots);
                    if (it.tag === "Nothing")
                      return 0;
                    if (it.tag === "Just")
                      return it._1;
                    l();
                  })())(H + 1 | 0))(U.slots),
                  inDegree: rt(st)(Y)(tt)(U.inDegree),
                  queue: tt === 0 ? [...U.queue, Y] : U.queue
                };
              };
            })())({ ...Q, queue: G._1.tail })((() => {
              const F = jt(G._1.head)(Q.adj);
              if (F.tag === "Nothing")
                return [];
              if (F.tag === "Just")
                return F._1;
              l();
            })());
            continue;
          }
          l();
        }
        return P;
      })({
        slots: bi(B((K) => J(K.id, 0))(D.segments)),
        inDegree: O,
        adj: N((K) => (q) => Ot(st)(Jn)(q.src)([q.tgt])(K))(z)(D.deps),
        queue: B((K) => K.id)(dt(
          (K) => {
            const q = jt(K.id)(O);
            if (q.tag === "Nothing")
              return !0;
            if (q.tag === "Just")
              return q._1 === 0;
            l();
          },
          D.segments
        ))
      });
      return Gt((K) => (q) => st.compare(K.slot)(q.slot))(B((K) => ({
        ...K,
        slot: (() => {
          const q = jt(K.id)(et.slots);
          if (q.tag === "Nothing")
            return 0;
          if (q.tag === "Just")
            return q._1;
          l();
        })()
      }))(D.segments));
    })(), b = 1 + N((D) => (O) => E1(D)(O.slot))(0)(C) | 0, k = xt(C)((D) => D.members), E = dt((D) => Ce(zr)(D.edge.id)(k), t), S = N(Ct)(-1e18)(B((D) => D.fromPos._2)(E)), I = N(wt)(1e18)(B((D) => D.toPos._2)(E));
    if (S > I) {
      const D = bi(B((O) => J(O.id, O))(C));
      return Pe(B((O) => B((V) => J(
        V,
        {
          slot: O.slot,
          slotCount: b,
          gapTop: I,
          gapBottom: S,
          partner: (() => {
            if (O.splitPartner.tag === "Just") {
              const et = jt(O.splitPartner._1)(D);
              if (et.tag === "Just")
                return T("Just", { slot: et._1.slot, splitX: 0 < et._1.incoming.length ? et._1.incoming[0] : 0 });
              if (et.tag === "Nothing")
                return v;
              l();
            }
            if (O.splitPartner.tag === "Nothing")
              return v;
            l();
          })()
        }
      ))(O.members))(dt(
        (O) => {
          if (O.splitPartner.tag === "Just") {
            const V = jt(O.splitPartner._1)(D);
            return !(V.tag === "Just" && (() => {
              if (V._1.splitBy.tag === "Nothing")
                return !1;
              if (V._1.splitBy.tag === "Just")
                return !0;
              l();
            })());
          }
          if (O.splitPartner.tag === "Nothing")
            return !0;
          l();
        },
        C
      )));
    }
    const W = bi(B((D) => J(D.id, D))(C));
    return Pe(B((D) => B((O) => J(
      O,
      {
        slot: D.slot,
        slotCount: b,
        gapTop: S,
        gapBottom: I,
        partner: (() => {
          if (D.splitPartner.tag === "Just") {
            const V = jt(D.splitPartner._1)(W);
            if (V.tag === "Just")
              return T("Just", { slot: V._1.slot, splitX: 0 < V._1.incoming.length ? V._1.incoming[0] : 0 });
            if (V.tag === "Nothing")
              return v;
            l();
          }
          if (D.splitPartner.tag === "Nothing")
            return v;
          l();
        })()
      }
    ))(D.members))(dt(
      (D) => {
        if (D.splitPartner.tag === "Just") {
          const O = jt(D.splitPartner._1)(W);
          return !(O.tag === "Just" && (() => {
            if (O._1.splitBy.tag === "Nothing")
              return !1;
            if (O._1.splitBy.tag === "Just")
              return !0;
            l();
          })());
        }
        if (D.splitPartner.tag === "Nothing")
          return !0;
        l();
      },
      C
    )));
  })()))(z)(aC(N((s) => (u) => {
    const a = Ii(u.edge.from.node)(e);
    if (a.tag === "Just") {
      const c = Ii(u.edge.to.node)(e);
      return c.tag === "Just" && a._1.layer !== c._1.layer ? Ot(st)(Jn)(Li(a._1.layer)(c._1.layer))([u])(s) : s;
    }
    return s;
  })(z)((() => {
    const s = (u) => J(
      (() => {
        const a = Ii(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.layer : 1e6;
      })(),
      (() => {
        const a = Ii(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.order : 1e6;
      })()
    );
    return Gt((u) => (a) => uC(s(u))(s(a)))(t);
  })())));
}, lC = (t) => (n) => {
  const e = hp(t)(n), r = N((o) => (i) => rt(R)(i.node)(i)(o))(z)(n);
  return N((o) => (i) => {
    const s = Ii(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = Ii(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const a = fC(i.edge.id)(e);
        if (a.tag === "Just")
          return rt(st)(Li(s._1.layer)(u._1.layer))(a._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(z)(t);
}, Da = /* @__PURE__ */ dn(R)(Mt), Ur = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, bf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, gC = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t._1)(s._3._1);
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
    l();
  }
  return i;
}, P1 = (t) => (n) => {
  const e = n.position._1 + n.size._1, r = n.position._2 * 2 + n.size._2, o = n.position._1 * 2 + n.size._1, i = n.position._2 + n.size._2;
  if (t === "South")
    return J(o, i * 2);
  if (t === "North")
    return J(o, n.position._2 * 2);
  if (t === "East")
    return J(e * 2, r);
  if (t === "West")
    return J(n.position._1 * 2, r);
  l();
}, Jf = (t) => (n) => {
  const e = j(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  l();
}, R1 = (t) => (n) => N((e) => (r) => Ot(t)(Jn)(n(r))([r])(e))(z), F1 = (t) => (n) => (e) => (r) => {
  const o = (t === "South" || t === "North") && (n === "East" || n === "West") && (() => {
    if (t === "South")
      return r._2 > e._2;
    if (t === "North")
      return r._2 < e._2;
    if (t === "East")
      return r._2 > e._2;
    if (t === "West")
      return r._2 < e._2;
    l();
  })() && (() => {
    if (n === "East")
      return e._1 > r._1;
    if (n === "West" || n === "North")
      return e._1 < r._1;
    if (n === "South")
      return e._1 > r._1;
    l();
  })(), i = (t === "East" || t === "West") && (n === "North" || n === "South") && (() => {
    if (t === "South")
      return r._1 > e._1;
    if (t === "North")
      return r._1 < e._1;
    if (t === "East")
      return r._1 > e._1;
    if (t === "West")
      return r._1 < e._1;
    l();
  })() && (() => {
    if (n === "East")
      return e._2 > r._2;
    if (n === "West" || n === "North")
      return e._2 < r._2;
    if (n === "South")
      return e._2 > r._2;
    l();
  })();
  return (t === "South" ? n === "North" && e._1 === r._1 && r._2 > e._2 : t === "North" ? n === "South" && e._1 === r._1 && r._2 < e._2 : t === "East" ? n === "West" && e._2 === r._2 && r._1 > e._1 : t === "West" && n === "East" && e._2 === r._2 && r._1 < e._1) ? 0 : o || i ? 1 : 2;
}, pp = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? z : Da(o === 1 ? B((i) => J(i, r))(n) : qt((i) => (s) => J(s, t.lo + j(i + 1 | 0) * e / j(o + 1 | 0)))(n));
}, mp = (t) => (n) => (e) => (r) => (o) => {
  const i = R1(R)((g) => g.to.node)(t), s = R1(R)((g) => g.from.node)(t), u = N((g) => (p) => rt(R)(p.node)(p)(g))(z)(n), a = (g, p, m) => {
    const h = Ur(g)(u);
    if (h.tag === "Nothing")
      return J(0, 0);
    if (h.tag === "Just") {
      const $ = Ur(g)(e);
      if ($.tag === "Nothing") {
        const y = j(4);
        if (m === "South")
          return J(h._1.position._1 * y + h._1.size._1 * y / 2, (h._1.position._2 + h._1.size._2) * y);
        if (m === "North")
          return J(h._1.position._1 * y + h._1.size._1 * y / 2, h._1.position._2 * y);
        if (m === "East")
          return J((h._1.position._1 + h._1.size._1) * y, h._1.position._2 * y + h._1.size._2 * y / 2);
        if (m === "West")
          return J(h._1.position._1 * y, h._1.position._2 * y + h._1.size._2 * y / 2);
        l();
      }
      if ($.tag === "Just") {
        const y = Kt((x) => x.id === p)($._1);
        if (y.tag === "Nothing") {
          const x = j(4);
          if (m === "South")
            return J(h._1.position._1 * x + h._1.size._1 * x / 2, (h._1.position._2 + h._1.size._2) * x);
          if (m === "North")
            return J(h._1.position._1 * x + h._1.size._1 * x / 2, h._1.position._2 * x);
          if (m === "East")
            return J((h._1.position._1 + h._1.size._1) * x, h._1.position._2 * x + h._1.size._2 * x / 2);
          if (m === "West")
            return J(h._1.position._1 * x, h._1.position._2 * x + h._1.size._2 * x / 2);
          l();
        }
        if (y.tag === "Just") {
          const x = j(4);
          if (y._1.side === "North")
            return J(h._1.position._1 * x + j(y._1.offset) * x, h._1.position._2 * x);
          if (y._1.side === "South")
            return J(h._1.position._1 * x + j(y._1.offset) * x, (h._1.position._2 + h._1.size._2) * x);
          if (y._1.side === "East")
            return J((h._1.position._1 + h._1.size._1) * x, h._1.position._2 * x + j(y._1.offset) * x);
          if (y._1.side === "West")
            return J(h._1.position._1 * x, h._1.position._2 * x + j(y._1.offset) * x);
        }
      }
    }
    l();
  }, c = Da(xt(r)((g) => {
    if (g.nodes.length <= 2)
      return [];
    const p = j(4);
    if (1 < g.nodes.length) {
      const m = Ur(g.nodes[1])(u);
      if (m.tag === "Nothing")
        return [];
      if (m.tag === "Just") {
        const h = m._1.position._1 * p + m._1.size._1 * p / 2;
        return B(($) => J($, h))(Fn(
          ($) => (y) => g.edgeId + ":" + $ + "->" + y,
          g.nodes,
          Et(1, g.nodes.length, g.nodes)
        ));
      }
      l();
    }
    return [];
  })), f = (g) => {
    const p = Ur(g.from.node)(u), m = Ur(g.to.node)(u);
    if (p.tag === "Just" && m.tag === "Just") {
      const h = p._1, $ = m._1, y = Gt((x) => (w) => st.compare(x.score)(w.score))(B((x) => {
        const w = x._1, C = x._2;
        return {
          from: w,
          to: C,
          score: (() => {
            const b = (I, W, D, O, V) => {
              const et = Jf(I)(W), K = Jf(I)(D);
              return et.lo < K.hi && K.lo < et.hi && (w === "South" ? C === "North" && V._2 > O._2 : w === "North" ? C === "South" && V._2 < O._2 : w === "East" ? C === "West" && V._1 > O._1 : w === "West" && C === "East" && V._1 < O._1) ? 0 : F1(w)(C)(O)(V);
            }, k = P1(w)(h), E = P1(C)($), S = F1(w)(C)(k)(E);
            return (() => {
              if (S > 0) {
                if (w === "South")
                  return C === "North" ? b(Qn, h, $, k, E) * 10 | 0 : S * 10 | 0;
                if (w === "North")
                  return C === "South" ? b(Wn, h, $, k, E) * 10 | 0 : S * 10 | 0;
                if (w === "East")
                  return C === "West" ? b(Vr, h, $, k, E) * 10 | 0 : S * 10 | 0;
                if (w === "West" && C === "East")
                  return b(Kr, h, $, k, E) * 10 | 0;
              }
              return S * 10 | 0;
            })() + (w === "South" ? C === "North" ? $.layer >= h.layer ? 0 : 20 : 15 : w === "North" ? C === "South" ? $.layer <= h.layer ? 0 : 20 : 15 : w === "East" ? C === "West" ? 5 : 15 : w === "West" && C === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        J(Qn, Wn),
        J(Vr, Wn),
        J(Kr, Wn),
        J(Qn, Vr),
        J(Qn, Kr),
        J(Wn, Qn),
        J(Wn, Vr),
        J(Wn, Kr),
        J(Vr, Qn),
        J(Kr, Qn),
        J(Vr, Kr),
        J(Kr, Vr)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: Qn, to: Wn };
  }, _ = Da(B((g) => J(g.id, f(g)))(t)), d = (g, p, m, h, $, y) => {
    const x = j(4), w = Ur(p)(u);
    if (w.tag === "Nothing")
      return J(0, 0);
    if (w.tag === "Just") {
      const C = gC(J(m, g))(o);
      if (C.tag === "Just") {
        const b = w._1.position._1 * x + C._1, k = j(4);
        if (g === "South")
          return J(b, (w._1.position._2 + w._1.size._2) * k);
        if (g === "North")
          return J(b, w._1.position._2 * k);
        if (g === "East")
          return J((w._1.position._1 + w._1.size._1) * k, b);
        if (g === "West")
          return J(w._1.position._1 * k, b);
        l();
      }
      if (C.tag === "Nothing") {
        const b = Jf(g)(w._1), k = (b.lo + b.hi) / 2, E = bf(m)(pp(b)(B((W) => W.id)(Gt((W) => (D) => ot.compare($(g)(W))($(g)(D)))(dt(
          (W) => {
            const D = bf(W.id)(_);
            if (D.tag === "Just") {
              const O = y(D._1);
              return O === "North" ? g === "North" : O === "South" ? g === "South" : O === "East" ? g === "East" : O === "West" && g === "West";
            }
            if (D.tag === "Nothing")
              return !0;
            l();
          },
          (() => {
            const W = Ur(p)(h);
            if (W.tag === "Nothing")
              return [];
            if (W.tag === "Just")
              return W._1;
            l();
          })()
        ))))), S = (() => {
          if (E.tag === "Nothing")
            return k;
          if (E.tag === "Just")
            return E._1;
          l();
        })(), I = j(4);
        if (g === "South")
          return J(S, (w._1.position._2 + w._1.size._2) * I);
        if (g === "North")
          return J(S, w._1.position._2 * I);
        if (g === "East")
          return J((w._1.position._1 + w._1.size._1) * I, S);
        if (g === "West")
          return J(w._1.position._1 * I, S);
      }
    }
    l();
  };
  return B((g) => {
    const p = bf(g.edge.id)(c);
    if (p.tag === "Nothing")
      return g;
    if (p.tag === "Just")
      return {
        ...g,
        fromPos: Un(3)(g.edge.from.node) === "$d:" ? J(p._1, g.fromPos._2) : g.fromPos,
        toPos: Un(3)(g.edge.to.node) === "$d:" ? J(p._1, g.toPos._2) : g.toPos
      };
    l();
  })(B((g) => {
    if (g.from.port.tag === "Just" && g.to.port.tag === "Just")
      return {
        edge: g,
        fromPos: a(g.from.node, g.from.port._1, Qn),
        toPos: a(g.to.node, g.to.port._1, Wn),
        fromSide: Qn,
        toSide: Wn
      };
    const p = f(g);
    return {
      edge: g,
      fromPos: d(
        p.from,
        g.from.node,
        g.id,
        s,
        (m) => (h) => {
          const $ = Ur(h.to.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const y = j(4);
            if (m === "South" || m === "North")
              return $._1.position._1 * y + $._1.size._1 * y / 2;
            if (m === "East" || m === "West")
              return $._1.position._2 * y + $._1.size._2 * y / 2;
          }
          l();
        },
        (m) => m.from
      ),
      toPos: d(
        p.to,
        g.to.node,
        g.id,
        i,
        (m) => (h) => {
          const $ = Ur(h.from.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const y = j(4);
            if (m === "South" || m === "North")
              return $._1.position._1 * y + $._1.size._1 * y / 2;
            if (m === "East" || m === "West")
              return $._1.position._2 * y + $._1.size._2 * y / 2;
          }
          l();
        },
        (m) => m.to
      ),
      fromSide: p.from,
      toSide: p.to
    };
  })(t));
}, za = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = R.compare(n._1)(e._1);
      if (r === "LT")
        return Yn;
      if (r === "GT")
        return Vn;
      if (n._2 === "North")
        return e._2 === "North" ? _e : Yn;
      if (e._2 === "North")
        return Vn;
      if (n._2 === "South")
        return e._2 === "South" ? _e : Yn;
      if (e._2 === "South")
        return Vn;
      if (n._2 === "East")
        return e._2 === "East" ? _e : Yn;
      if (e._2 === "East")
        return Vn;
      if (n._2 === "West" && e._2 === "West")
        return _e;
      l();
    },
    Eq0: () => t
  };
})(), _C = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = za.compare(t)(s._3);
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
    l();
  }
  return i;
}, dC = /* @__PURE__ */ dn(R)(Mt), kf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, hC = /* @__PURE__ */ dn(za)(Mt), G1 = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), Oi = (t) => (n) => (e) => (r) => {
  const o = _C(J(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  l();
}, $p = (t) => (n) => (e) => {
  const r = dC(Pe(B((s) => qt((u) => (a) => J(a, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const a = kf(u.to.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      l();
    }
    if (s === "North") {
      const a = kf(u.from.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      l();
    }
    return 0;
  }, i = (s) => N((u) => (a) => te(
    za.compare,
    jn,
    hC(B((c) => J(J(c._1, s), c._2))(G1(pp({
      lo: 0,
      hi: (() => {
        const c = kf(a._1)(e);
        if (c.tag === "Just")
          return c._1._1;
        if (c.tag === "Nothing")
          return Un(3)(a._1) === "$d:" ? 0 : 1;
        l();
      })()
    })(B((c) => c.id)(Gt((c) => (f) => st.compare(o(s, c))(o(s, f)))(a._2)))))),
    u
  ))(z)(G1(N((u) => (a) => a.from.node === a.to.node ? u : s === "South" ? Ot(R)(Jn)(a.from.node)([a])(u) : s === "North" ? Ot(R)(Jn)(a.to.node)([a])(u) : u)(z)(n)));
  return te(za.compare, jn, i(Wn), i(Qn));
}, yp = (t) => t, vp = (t) => t, xp = (t) => t, pC = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), mC = /* @__PURE__ */ (() => {
  const t = Se.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return T("Just", J(n._1, n._2));
    l();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, Lt("Cons", r._3, e(r._6, o)));
      l();
    };
    return e(n, X);
  })());
})(), ht = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Me = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, Hr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Ar = /* @__PURE__ */ dn(R)(Mt), Sf = /* @__PURE__ */ Ud(R), f0 = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), $C = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, yC = (t) => (e) => {
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
    l();
  }
  return i;
}, I1 = /* @__PURE__ */ xp("VDown"), B1 = /* @__PURE__ */ xp("VUp"), vC = /* @__PURE__ */ vp("ForwardPhase"), xC = /* @__PURE__ */ vp("StackPhase"), D1 = /* @__PURE__ */ yp("HRight"), z1 = /* @__PURE__ */ yp("HLeft"), H1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, TC = (t) => (n) => (e) => {
  const r = N((u) => (a) => Ot(R)(En)(a.tgt)(1)(u))(z)(t), o = mC(pC([
    ...B((u) => u.src)(t),
    ...B((u) => u.tgt)(t),
    ...(() => {
      const u = (a, c) => {
        if (a.tag === "Leaf")
          return c;
        if (a.tag === "Node")
          return u(a._5, Lt("Cons", a._4, u(a._6, c)));
        l();
      };
      return nn(Sn.foldr, u(n, X));
    })()
  ])), i = N((u) => (a) => Ot(R)(Jn)(a.src)([{ target: a.tgt, sep: a.sep }])(u))(z)(t);
  return ((u) => (a) => (c) => {
    let f = u, _ = a, d = c, g = !0, p;
    for (; g; ) {
      const m = f, h = _, $ = d, y = Bt((x) => v, (x) => (w) => T("Just", { head: x, tail: w }), m);
      if (y.tag === "Nothing") {
        g = !1, p = $;
        continue;
      }
      if (y.tag === "Just") {
        const x = ht(y._1.head)($), w = (() => {
          if (x.tag === "Nothing")
            return 0;
          if (x.tag === "Just")
            return x._1;
          l();
        })(), C = N((b) => (k) => {
          const E = ht(k.target)(b.result), S = w + k.sep, I = ht(k.target)(b.indeg), W = (() => {
            if (I.tag === "Nothing")
              return -1;
            if (I.tag === "Just")
              return I._1 - 1 | 0;
            l();
          })();
          return {
            newQueue: W === 0 ? [...b.newQueue, k.target] : b.newQueue,
            result: rt(R)(k.target)((() => {
              if (E.tag === "Nothing")
                return S;
              if (E.tag === "Just") {
                if (e === "VDown")
                  return Me(E._1)(S);
                if (e === "VUp")
                  return Hr(E._1)(S);
              }
              l();
            })())(b.result),
            indeg: rt(R)(k.target)(W)(b.indeg)
          };
        })({ newQueue: [], result: $, indeg: h })((() => {
          const b = ht(y._1.head)(i);
          if (b.tag === "Nothing")
            return [];
          if (b.tag === "Just")
            return b._1;
          l();
        })());
        f = [...y._1.tail, ...C.newQueue], _ = C.indeg, d = C.result;
        continue;
      }
      l();
    }
    return p;
  })(dt(
    (u) => {
      const a = ht(u)(r);
      if (a.tag === "Nothing")
        return !0;
      if (a.tag === "Just")
        return a._1 === 0;
      l();
    },
    o
  ))(r)(N((u) => (a) => rt(R)(a)(0)(u))(z)(o));
}, wC = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, Lt("Cons", i._4, n(i._6, s)));
    l();
  }, e = nn(Sn.foldr, n(t, X)), r = N(Me)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return z;
    if (i.tag === "Node")
      return cn("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    l();
  };
  return o(t);
}, Tp = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, Lt("Cons", i._4, n(i._6, s)));
    l();
  }, e = n(t, X), r = (i) => (s) => {
    let u = i, a = s, c = !0, f;
    for (; c; ) {
      const _ = u, d = a;
      if (d.tag === "Nil") {
        c = !1, f = _;
        continue;
      }
      if (d.tag === "Cons") {
        u = Hr(_)(d._1), a = d._2;
        continue;
      }
      l();
    }
    return f;
  }, o = (i) => (s) => {
    let u = i, a = s, c = !0, f;
    for (; c; ) {
      const _ = u, d = a;
      if (d.tag === "Nil") {
        c = !1, f = _;
        continue;
      }
      if (d.tag === "Cons") {
        u = Me(_)(d._1), a = d._2;
        continue;
      }
      l();
    }
    return f;
  };
  return r(-999999)(e) - o(999999)(e);
}, Rs = (t) => (n) => ((r) => (o) => {
  let i = r, s = o, u = !0, a;
  for (; u; ) {
    const c = i, f = s;
    if (c === n) {
      u = !1, a = f;
      continue;
    }
    i = (() => {
      const _ = ht(c)(t.align);
      if (_.tag === "Nothing")
        return n;
      if (_.tag === "Just")
        return _._1;
      l();
    })(), s = [...f, c];
  }
  return a;
})((() => {
  const r = ht(n)(t.align);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just")
    return r._1;
  l();
})())([n]), NC = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (f) => {
  const _ = (A, P, Q) => {
    const G = A.from.node === P ? A.from.port : A.to.node === P ? A.to.port : v;
    if (G.tag === "Just") {
      const F = ht(P)(o);
      if (F.tag === "Just") {
        const H = Kt((U) => U.id === G._1)(F._1);
        if (H.tag === "Just") {
          const U = j(H._1.offset) * j(4);
          return Q === "North" || Q === "South" ? U : 0;
        }
        if (H.tag === "Nothing") {
          const U = ht(P)(r), Y = Oi(s)(A.id)(Q)((() => {
            if (U.tag === "Nothing")
              return 0.5;
            if (U.tag === "Just")
              return U._1._1 / 2;
            l();
          })());
          return Q === "North" || Q === "South" ? Y : 0;
        }
        l();
      }
      if (F.tag === "Nothing") {
        const H = ht(P)(r), U = Oi(s)(A.id)(Q)((() => {
          if (H.tag === "Nothing")
            return 0.5;
          if (H.tag === "Just")
            return H._1._1 / 2;
          l();
        })());
        return Q === "North" || Q === "South" ? U : 0;
      }
      l();
    }
    if (G.tag === "Nothing") {
      const F = ht(P)(r), H = Oi(s)(A.id)(Q)((() => {
        if (F.tag === "Nothing")
          return 0.5;
        if (F.tag === "Just")
          return F._1._1 / 2;
        l();
      })());
      return Q === "North" || Q === "South" ? H : 0;
    }
    l();
  }, d = (A, P) => {
    if (A.from.node === P) {
      if (f === "HRight")
        return Qn;
      if (f === "HLeft")
        return Wn;
      l();
    }
    if (f === "HRight")
      return Wn;
    if (f === "HLeft")
      return Qn;
    l();
  }, g = (A, P, Q) => N((G) => (F) => rt(R)(F)((() => {
    const H = ht(F)(G);
    if (H.tag === "Nothing")
      return 0 + P;
    if (H.tag === "Just")
      return H._1 + P;
    l();
  })())(G))(Q)(Rs(a)(A)), p = (() => {
    if (f === "HRight")
      return e;
    if (f === "HLeft")
      return gn(e);
    l();
  })(), m = (A) => {
    const P = ht(A)(r);
    if (P.tag === "Nothing")
      return 1;
    if (P.tag === "Just")
      return P._1._1;
    l();
  }, h = Ar(Pe(qt((A) => (P) => B((Q) => J(Q, A))(P))(e))), $ = (A, P) => Un(3)(A) === "$d:" && Un(3)(P) === "$d:" || Un(3)(A) === "$d:" || Un(3)(P) === "$d:" ? 10 : j(t.nodeGap), y = N((A) => (P) => Sf((Q) => T(
    "Just",
    [
      ...(() => {
        if (Q.tag === "Nothing")
          return [];
        if (Q.tag === "Just")
          return Q._1;
        l();
      })(),
      P
    ]
  ))(P.to.node)(A))(z)(i), x = N((A) => (P) => Sf((Q) => T(
    "Just",
    [
      ...(() => {
        if (Q.tag === "Nothing")
          return [];
        if (Q.tag === "Just")
          return Q._1;
        l();
      })(),
      P
    ]
  ))(P.from.node)(A))(z)(i), w = Pe(e), C = N((A) => (P) => {
    const Q = ht(P)(a.root), G = (() => {
      if (Q.tag === "Nothing")
        return P;
      if (Q.tag === "Just")
        return Q._1;
      l();
    })();
    return P === G ? A : Sf((F) => T(
      "Just",
      (() => {
        if (F.tag === "Nothing")
          return !0;
        if (F.tag === "Just")
          return F._1;
        l();
      })() && Un(3)(P) === "$d:"
    ))(G)(A);
  })(Ar(B((A) => J(A, !0))(Yi(R.compare)((() => {
    const A = (P, Q) => {
      if (P.tag === "Leaf")
        return Q;
      if (P.tag === "Node")
        return A(P._5, Lt("Cons", P._4, A(P._6, Q)));
      l();
    };
    return nn(Sn.foldr, A(a.root, X));
  })()))))(w), b = (A, P) => {
    const Q = A.free, G = ht(Q)(a.root), F = (() => {
      if (G.tag === "Nothing")
        return Q;
      if (G.tag === "Just")
        return G._1;
      l();
    })(), H = ht(F)(C), U = (() => {
      if (H.tag === "Nothing")
        return !0;
      if (H.tag === "Just")
        return H._1;
      l();
    })();
    return N((Y) => (M) => {
      if (Y.edge.tag === "Just")
        return Y;
      if (Y.edge.tag === "Nothing") {
        if ((() => {
          const lt = ht(F)(P.su);
          return !U && (() => {
            const pt = ht(M.from.node)(h);
            return M.from.node !== M.to.node && (() => {
              const At = ht(M.to.node)(h);
              return (() => {
                if (pt.tag === "Nothing")
                  return -1;
                if (pt.tag === "Just")
                  return pt._1;
                l();
              })() === (() => {
                if (At.tag === "Nothing")
                  return -1;
                if (At.tag === "Just")
                  return At._1;
                l();
              })();
            })();
          })() || (() => {
            if (lt.tag === "Nothing")
              return !1;
            if (lt.tag === "Just")
              return lt._1;
            l();
          })();
        })())
          return Y;
        const tt = M.from.node === Q ? M.to.node : M.from.node, it = ht(tt)(a.root), nt = (() => {
          if (it.tag === "Nothing")
            return tt;
          if (it.tag === "Just")
            return it._1;
          l();
        })(), ct = nt !== F;
        return ct && (() => {
          const lt = ht(nt)(P.blockFinished);
          if (lt.tag === "Nothing")
            return !1;
          if (lt.tag === "Just")
            return lt._1;
          l();
        })() ? { ...Y, edge: T("Just", M), hasEdges: !0 } : { ...Y, hasEdges: Y.hasEdges || ct };
      }
      l();
    })({ edge: v, hasEdges: !1 })((() => {
      if (A.isRoot) {
        if (f === "HRight") {
          const Y = ht(Q)(y);
          if (Y.tag === "Nothing")
            return [];
          if (Y.tag === "Just")
            return Y._1;
          l();
        }
        if (f === "HLeft") {
          const Y = ht(Q)(x);
          if (Y.tag === "Nothing")
            return [];
          if (Y.tag === "Just")
            return Y._1;
        }
        l();
      }
      if (f === "HRight") {
        const Y = ht(Q)(x);
        if (Y.tag === "Nothing")
          return [];
        if (Y.tag === "Just")
          return Y._1;
        l();
      }
      if (f === "HLeft") {
        const Y = ht(Q)(y);
        if (Y.tag === "Nothing")
          return [];
        if (Y.tag === "Just")
          return Y._1;
      }
      l();
    })());
  }, k = (A, P, Q, G) => {
    const F = (() => {
      if (c === "VDown")
        return -1e18;
      if (c === "VUp")
        return 1e18;
      l();
    })(), H = { free: P, isRoot: Q }, U = b(H, G);
    if (U.edge.tag === "Nothing")
      return U.hasEdges ? { thresh: F, state: { ...G, queue: [...G.queue, H] } } : { thresh: F, state: G };
    if (U.edge.tag === "Just") {
      const Y = U.edge._1.from.node === P ? U.edge._1.to.node : U.edge._1.from.node;
      return {
        thresh: (() => {
          const M = ht((() => {
            const ct = ht(Y)(a.root);
            if (ct.tag === "Nothing")
              return Y;
            if (ct.tag === "Just")
              return ct._1;
            l();
          })())(G.x), tt = ht(Y)(u), it = ht(P)(u), nt = (() => {
            if (M.tag === "Just")
              return M._1;
            if (M.tag === "Nothing")
              return v;
            l();
          })();
          return (() => {
            if (nt.tag === "Nothing")
              return 0;
            if (nt.tag === "Just")
              return nt._1;
            l();
          })() + (() => {
            if (tt.tag === "Nothing")
              return 0;
            if (tt.tag === "Just")
              return tt._1;
            l();
          })() + _(
            U.edge._1,
            Y,
            (() => {
              if (Q) {
                if (f === "HRight")
                  return Qn;
                if (f === "HLeft")
                  return Wn;
                l();
              }
              if (f === "HRight")
                return Wn;
              if (f === "HLeft")
                return Qn;
              l();
            })()
          ) - (() => {
            if (it.tag === "Nothing")
              return 0;
            if (it.tag === "Just")
              return it._1;
            l();
          })() - _(
            U.edge._1,
            P,
            (() => {
              if (Q) {
                if (f === "HRight")
                  return Wn;
                if (f === "HLeft")
                  return Qn;
                l();
              }
              if (f === "HRight")
                return Qn;
              if (f === "HLeft")
                return Wn;
              l();
            })()
          );
        })(),
        state: {
          ...G,
          su: rt(R)((() => {
            const M = ht(U.edge._1.from.node)(a.root);
            if (M.tag === "Nothing")
              return U.edge._1.from.node;
            if (M.tag === "Just")
              return M._1;
            l();
          })())(!0)(rt(R)((() => {
            const M = ht(U.edge._1.to.node)(a.root);
            if (M.tag === "Nothing")
              return U.edge._1.to.node;
            if (M.tag === "Just")
              return M._1;
            l();
          })())(!0)(G.su))
        }
      };
    }
    l();
  }, E = (A, P, Q, G) => {
    const F = P === A, H = ht(P)(a.align), U = (() => {
      if (H.tag === "Nothing")
        return P === A;
      if (H.tag === "Just")
        return H._1 === A;
      l();
    })();
    if (!(F || U))
      return { thresh: Q, state: G };
    const Y = (() => {
      if (c === "VDown")
        return F && Q <= -1e18;
      if (c === "VUp")
        return F && Q >= 1e18;
      l();
    })() ? k(A, P, !0, G) : { thresh: Q, state: G };
    return (() => {
      if (c === "VDown")
        return Y.thresh <= -1e18 && U;
      if (c === "VUp")
        return Y.thresh >= 1e18 && U;
      l();
    })() ? k(A, P, !1, Y.state) : Y;
  }, S = (A) => (P) => (Q) => {
    const G = ht(Q)(n.nodeIndex), F = (() => {
      if (G.tag === "Nothing")
        return 0;
      if (G.tag === "Just")
        return G._1;
      l();
    })(), H = Kt((it) => Ce(zr)(Q)(it))(p), U = (() => {
      if (H.tag === "Nothing")
        return [];
      if (H.tag === "Just")
        return H._1;
      l();
    })(), Y = U.length;
    if ((() => {
      if (c === "VDown")
        return F <= 0;
      if (c === "VUp")
        return F >= (Y - 1 | 0);
      l();
    })()) {
      const it = E(A, Q, P.thresh, P.st);
      return { ...P, st: it.state, thresh: it.thresh };
    }
    const M = (() => {
      if (c === "VDown")
        return F - 1 | 0;
      if (c === "VUp")
        return F + 1 | 0;
      l();
    })(), tt = M >= 0 && M < U.length ? T("Just", U[M]) : v;
    if (tt.tag === "Nothing")
      return P;
    if (tt.tag === "Just") {
      const it = ht(tt._1)(a.root), nt = (() => {
        if (it.tag === "Nothing")
          return tt._1;
        if (it.tag === "Just")
          return it._1;
        l();
      })(), ct = E(A, Q, P.thresh, I(nt)(P.st)), lt = (() => {
        const Wt = ht(A)(ct.state.sink);
        if (Wt.tag === "Nothing")
          return A === A;
        if (Wt.tag === "Just")
          return Wt._1 === A;
        l();
      })() ? {
        ...ct.state,
        sink: rt(R)(A)((() => {
          const Wt = ht(nt)(ct.state.sink);
          if (Wt.tag === "Nothing")
            return nt;
          if (Wt.tag === "Just")
            return Wt._1;
          l();
        })())(ct.state.sink)
      } : ct.state, pt = ht(nt)(lt.sink), At = (() => {
        if (pt.tag === "Nothing")
          return nt;
        if (pt.tag === "Just")
          return pt._1;
        l();
      })(), Pt = ht(A)(lt.sink), en = (() => {
        if (Pt.tag === "Nothing")
          return A;
        if (Pt.tag === "Just")
          return Pt._1;
        l();
      })();
      if (en === At) {
        const Wt = ht(nt)(lt.x), Zt = (() => {
          if (Wt.tag === "Just")
            return Wt._1;
          if (Wt.tag === "Nothing")
            return v;
          l();
        })(), sn = (() => {
          if (Zt.tag === "Nothing")
            return 0;
          if (Zt.tag === "Just")
            return Zt._1;
          l();
        })(), rn = ht(A)(lt.x), ie = (() => {
          if (rn.tag === "Just")
            return rn._1;
          if (rn.tag === "Nothing")
            return v;
          l();
        })(), Ht = (() => {
          if (ie.tag === "Nothing")
            return 0;
          if (ie.tag === "Just")
            return ie._1;
          l();
        })(), Xt = $(Q, tt._1), le = ht(tt._1)(u), Xn = ht(Q)(u), se = (() => {
          if (le.tag === "Nothing")
            return 0;
          if (le.tag === "Just")
            return le._1;
          l();
        })() - (() => {
          if (Xn.tag === "Nothing")
            return 0;
          if (Xn.tag === "Just")
            return Xn._1;
          l();
        })();
        if (c === "VDown") {
          const On = Hr(sn + se + m(tt._1) + Xt)(ct.thresh);
          return {
            st: { ...lt, x: rt(R)(A)(T("Just", P.initial ? On : Hr(Ht)(On)))(lt.x) },
            initial: !1,
            thresh: ct.thresh
          };
        }
        if (c === "VUp") {
          const On = Me(sn + se - Xt - m(Q))(ct.thresh);
          return {
            st: { ...lt, x: rt(R)(A)(T("Just", P.initial ? On : Me(Ht)(On)))(lt.x) },
            initial: !1,
            thresh: ct.thresh
          };
        }
        l();
      }
      const $t = ht(nt)(lt.x), It = (() => {
        if ($t.tag === "Just")
          return $t._1;
        if ($t.tag === "Nothing")
          return v;
        l();
      })(), yt = (() => {
        if (It.tag === "Nothing")
          return 0;
        if (It.tag === "Just")
          return It._1;
        l();
      })(), Nt = ht(A)(lt.x), _t = (() => {
        if (Nt.tag === "Just")
          return Nt._1;
        if (Nt.tag === "Nothing")
          return v;
        l();
      })(), mt = (() => {
        if (_t.tag === "Nothing")
          return 0;
        if (_t.tag === "Just")
          return _t._1;
        l();
      })(), St = j(t.nodeGap), Ft = ht(Q)(u), Jt = ht(tt._1)(u), bt = (() => {
        if (Ft.tag === "Nothing")
          return 0;
        if (Ft.tag === "Just")
          return Ft._1;
        l();
      })() - (() => {
        if (Jt.tag === "Nothing")
          return 0;
        if (Jt.tag === "Just")
          return Jt._1;
        l();
      })();
      return {
        st: {
          ...lt,
          classEdges: [
            ...lt.classEdges,
            {
              src: en,
              tgt: At,
              sep: (() => {
                if (c === "VDown")
                  return mt + bt - yt - m(tt._1) - St;
                if (c === "VUp")
                  return mt + bt + m(Q) + St - yt;
                l();
              })()
            }
          ]
        },
        initial: P.initial,
        thresh: ct.thresh
      };
    }
    l();
  }, I = (A) => (P) => {
    const Q = ht(A)(P.x), G = (() => {
      if (Q.tag === "Just")
        return Q._1;
      if (Q.tag === "Nothing")
        return v;
      l();
    })();
    if (G.tag === "Just")
      return P;
    if (G.tag === "Nothing") {
      const F = N(S(A))({
        st: { ...P, x: rt(R)(A)(T("Just", 0))(P.x) },
        initial: !0,
        thresh: (() => {
          if (c === "VDown")
            return -1e18;
          if (c === "VUp")
            return 1e18;
          l();
        })()
      })(Rs(a)(A));
      return { ...F.st, blockFinished: rt(R)(A)(!0)(F.st.blockFinished) };
    }
    l();
  }, W = N((A) => (P) => N((Q) => (G) => {
    const F = ht(G)(a.root), H = (() => {
      if (F.tag === "Nothing")
        return G;
      if (F.tag === "Just")
        return F._1;
      l();
    })();
    return H === G ? I(H)(Q) : Q;
  })(A)((() => {
    if (c === "VDown")
      return P;
    if (c === "VUp")
      return gn(P);
    l();
  })()))({
    x: Ar(B((A) => J(A, v))(w)),
    sink: Ar(B((A) => J(A, A))(w)),
    classEdges: [],
    su: z,
    blockFinished: z,
    queue: []
  })(p), D = TC(W.classEdges)(W.sink)(c), O = (A, P, Q, G) => {
    const F = ht(P)(G), H = ht(P)(u);
    return (() => {
      if (F.tag === "Nothing")
        return 0;
      if (F.tag === "Just")
        return F._1;
      l();
    })() + (() => {
      if (H.tag === "Nothing")
        return 0;
      if (H.tag === "Just")
        return H._1;
      l();
    })() + _(A, P, Q);
  }, V = Ar(B((A) => J(A, !0))(Yi(R.compare)((() => {
    const A = (P, Q) => {
      if (P.tag === "Leaf")
        return Q;
      if (P.tag === "Node")
        return A(P._5, Lt("Cons", P._4, A(P._6, Q)));
      l();
    };
    return nn(Sn.foldr, A(a.root, X));
  })()))), et = (A) => (P) => (Q) => {
    const G = b(Q, { su: P.su, blockFinished: V }), F = {
      phase: A,
      ppFree: Q.free,
      ppIsRoot: Q.isRoot,
      edgeId: v,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const H = ht((() => {
          const U = ht(Q.free)(a.root);
          if (U.tag === "Nothing")
            return Q.free;
          if (U.tag === "Just")
            return U._1;
          l();
        })())(P.su);
        if (H.tag === "Nothing")
          return !1;
        if (H.tag === "Just")
          return H._1;
        l();
      })(),
      hasEdges: G.hasEdges,
      candCount: (() => {
        if (Q.isRoot) {
          if (f === "HRight") {
            const H = ht(Q.free)(y);
            if (H.tag === "Nothing")
              return 0;
            if (H.tag === "Just")
              return H._1.length;
            l();
          }
          if (f === "HLeft") {
            const H = ht(Q.free)(x);
            if (H.tag === "Nothing")
              return 0;
            if (H.tag === "Just")
              return H._1.length;
          }
          l();
        }
        if (f === "HRight") {
          const H = ht(Q.free)(x);
          if (H.tag === "Nothing")
            return 0;
          if (H.tag === "Just")
            return H._1.length;
          l();
        }
        if (f === "HLeft") {
          const H = ht(Q.free)(y);
          if (H.tag === "Nothing")
            return 0;
          if (H.tag === "Just")
            return H._1.length;
        }
        l();
      })()
    };
    if (G.edge.tag === "Nothing")
      return { ...P, stack: [...P.stack, Q], trace: [...P.trace, F], x: P.x };
    if (G.edge.tag === "Just") {
      const H = G.edge._1.from.node === Q.free ? J(G.edge._1.from.node, G.edge._1.to.node) : J(G.edge._1.to.node, G.edge._1.from.node), U = O(G.edge._1, H._1, d(G.edge._1, H._1), P.x) - O(G.edge._1, H._2, d(G.edge._1, H._2), P.x), Y = ht(H._1)(a.root), M = (() => {
        if (Y.tag === "Nothing")
          return H._1;
        if (Y.tag === "Just")
          return Y._1;
        l();
      })(), tt = { ...F, edgeId: T("Just", G.edge._1.id), delta: U };
      if (U > 0 && U < 1e300) {
        const it = N((lt) => (pt) => {
          const At = ht(pt)(h), Pt = (() => {
            if (At.tag === "Nothing")
              return -1;
            if (At.tag === "Just")
              return At._1;
            l();
          })();
          if (Pt >= 0 && Pt < e.length) {
            const It = e[Pt], yt = ht(pt)(n.nodeIndex), Nt = (() => {
              if (yt.tag === "Nothing")
                return -2;
              if (yt.tag === "Just")
                return yt._1 - 1 | 0;
              l();
            })();
            return Nt >= 0 && Nt < It.length ? Me(lt)((() => {
              const _t = ht(pt)(P.x), mt = ht(pt)(u), St = ht(It[Nt])(P.x), Ft = ht(It[Nt])(u);
              return (() => {
                if (_t.tag === "Nothing")
                  return 0;
                if (_t.tag === "Just")
                  return _t._1;
                l();
              })() + (() => {
                if (mt.tag === "Nothing")
                  return 0;
                if (mt.tag === "Just")
                  return mt._1;
                l();
              })() - ((() => {
                if (St.tag === "Nothing")
                  return 0;
                if (St.tag === "Just")
                  return St._1;
                l();
              })() + (() => {
                if (Ft.tag === "Nothing")
                  return 0;
                if (Ft.tag === "Just")
                  return Ft._1;
                l();
              })() + m(It[Nt]) + $(pt, It[Nt]));
            })()) : lt;
          }
          const en = ht(pt)(n.nodeIndex), $t = (() => {
            if (en.tag === "Nothing")
              return -2;
            if (en.tag === "Just")
              return en._1 - 1 | 0;
            l();
          })();
          return $t >= 0 && $t < 0 ? Me(lt)((() => {
            const It = ht(pt)(P.x), yt = ht(pt)(u), Nt = ht([][$t])(P.x), _t = ht([][$t])(u);
            return (() => {
              if (It.tag === "Nothing")
                return 0;
              if (It.tag === "Just")
                return It._1;
              l();
            })() + (() => {
              if (yt.tag === "Nothing")
                return 0;
              if (yt.tag === "Just")
                return yt._1;
              l();
            })() - ((() => {
              if (Nt.tag === "Nothing")
                return 0;
              if (Nt.tag === "Just")
                return Nt._1;
              l();
            })() + (() => {
              if (_t.tag === "Nothing")
                return 0;
              if (_t.tag === "Just")
                return _t._1;
              l();
            })() + m([][$t]) + $(pt, [][$t]));
          })()) : lt;
        })(U)(Rs(a)(M)), nt = it > 0 ? -it : 0, ct = { ...P, x: it > 0 ? g(M, nt, P.x) : P.x, trace: [...P.trace, { ...tt, avail: it, shift: nt }] };
        return it > 0 ? ct : { ...ct, stack: [...ct.stack, Q] };
      }
      if (U < 0 && -U < 1e300) {
        const it = N((lt) => (pt) => {
          const At = ht(pt)(h), Pt = (() => {
            if (At.tag === "Nothing")
              return -1;
            if (At.tag === "Just")
              return At._1;
            l();
          })();
          if (Pt >= 0 && Pt < e.length) {
            const It = e[Pt], yt = ht(pt)(n.nodeIndex), Nt = (() => {
              if (yt.tag === "Nothing")
                return 0;
              if (yt.tag === "Just")
                return yt._1 + 1 | 0;
              l();
            })();
            return Nt >= 0 && Nt < It.length ? Me(lt)((() => {
              const _t = ht(It[Nt])(P.x), mt = ht(It[Nt])(u), St = ht(pt)(P.x), Ft = ht(pt)(u);
              return (() => {
                if (_t.tag === "Nothing")
                  return 0;
                if (_t.tag === "Just")
                  return _t._1;
                l();
              })() + (() => {
                if (mt.tag === "Nothing")
                  return 0;
                if (mt.tag === "Just")
                  return mt._1;
                l();
              })() - ((() => {
                if (St.tag === "Nothing")
                  return 0;
                if (St.tag === "Just")
                  return St._1;
                l();
              })() + (() => {
                if (Ft.tag === "Nothing")
                  return 0;
                if (Ft.tag === "Just")
                  return Ft._1;
                l();
              })() + m(pt) + $(pt, It[Nt]));
            })()) : lt;
          }
          const en = ht(pt)(n.nodeIndex), $t = (() => {
            if (en.tag === "Nothing")
              return 0;
            if (en.tag === "Just")
              return en._1 + 1 | 0;
            l();
          })();
          return $t >= 0 && $t < 0 ? Me(lt)((() => {
            const It = ht([][$t])(P.x), yt = ht([][$t])(u), Nt = ht(pt)(P.x), _t = ht(pt)(u);
            return (() => {
              if (It.tag === "Nothing")
                return 0;
              if (It.tag === "Just")
                return It._1;
              l();
            })() + (() => {
              if (yt.tag === "Nothing")
                return 0;
              if (yt.tag === "Just")
                return yt._1;
              l();
            })() - ((() => {
              if (Nt.tag === "Nothing")
                return 0;
              if (Nt.tag === "Just")
                return Nt._1;
              l();
            })() + (() => {
              if (_t.tag === "Nothing")
                return 0;
              if (_t.tag === "Just")
                return _t._1;
              l();
            })() + m(pt) + $(pt, [][$t]));
          })()) : lt;
        })(-U)(Rs(a)(M)), nt = it > 0 ? it : 0, ct = { ...P, x: it > 0 ? g(M, nt, P.x) : P.x, trace: [...P.trace, { ...tt, avail: it, shift: nt }] };
        return it > 0 ? ct : { ...ct, stack: [...ct.stack, Q] };
      }
      return { ...P, stack: [...P.stack, Q], trace: [...P.trace, tt], x: P.x };
    }
    l();
  }, K = N(et(vC))({
    x: Ar(B((A) => J(
      A,
      (() => {
        const P = ht(A)(a.root), Q = (() => {
          if (P.tag === "Nothing")
            return A;
          if (P.tag === "Just")
            return P._1;
          l();
        })(), G = ht(Q)(W.x), F = ht((() => {
          const U = ht(Q)(W.sink);
          if (U.tag === "Nothing")
            return Q;
          if (U.tag === "Just")
            return U._1;
          l();
        })())(D), H = (() => {
          if (G.tag === "Just")
            return G._1;
          if (G.tag === "Nothing")
            return v;
          l();
        })();
        return (() => {
          if (H.tag === "Nothing")
            return 0;
          if (H.tag === "Just")
            return H._1;
          l();
        })() + (() => {
          if (F.tag === "Nothing")
            return 0;
          if (F.tag === "Just")
            return F._1;
          l();
        })();
      })()
    ))(w)),
    su: W.su,
    stack: [],
    trace: []
  })(W.queue), q = N(et(xC))({ ...K, stack: [] })(gn(K.stack));
  return { x: q.x, queue: W.queue, trace: q.trace };
}, CC = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (f) => NC(t)(n)(e)(r)(o)(i)(s)(u)(a)(c)(f).x, bC = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (a, c, f) => {
    const _ = ht(c)(e), d = (() => {
      if (_.tag === "Nothing")
        return 0.5;
      if (_.tag === "Just")
        return _._1._1 / 2;
      l();
    })(), g = a.from.node === c ? a.from.port : a.to.node === c ? a.to.port : v;
    if (g.tag === "Just") {
      const p = ht(c)(n);
      if (p.tag === "Just") {
        const m = Kt((h) => h.id === g._1)(p._1);
        if (m.tag === "Just") {
          const h = j(m._1.offset) * j(4);
          return f === "North" || f === "South" ? h : 0;
        }
        if (m.tag === "Nothing") {
          const h = Oi(o)(a.id)(f)(d);
          return f === "North" || f === "South" ? h : 0;
        }
        l();
      }
      if (p.tag === "Nothing") {
        const m = Oi(o)(a.id)(f)(d);
        return f === "North" || f === "South" ? m : 0;
      }
      l();
    }
    if (g.tag === "Nothing") {
      const p = Oi(o)(a.id)(f)(d);
      return f === "North" || f === "South" ? p : 0;
    }
    l();
  }, u = (a) => (c) => (f) => (_) => {
    let d = a, g = c, p = f, m = _, h = !0, $;
    for (; h; ) {
      const y = d, x = g, w = p, b = Bt((k) => v, (k) => (E) => T("Just", { head: k, tail: E }), m);
      if (b.tag === "Nothing") {
        h = !1, $ = y;
        continue;
      }
      if (b.tag === "Just") {
        const k = b._1.head, E = Kt((I) => I.from.node === w && I.to.node === k || I.from.node === k && I.to.node === w)(r), S = (() => {
          if (E.tag === "Nothing")
            return x + 0;
          if (E.tag === "Just")
            return x + (s(E._1, w, E._1.from.node === w ? Qn : Wn) - s(
              E._1,
              k,
              E._1.from.node === k ? Qn : Wn
            ));
          l();
        })();
        d = rt(R)(k)(S)(y), g = S, p = k, m = b._1.tail;
        continue;
      }
      l();
    }
    return $;
  };
  return N((a) => (c) => {
    const f = Bt((g) => v, (g) => (p) => T("Just", { head: g, tail: p }), Rs(t)(c)), _ = (() => {
      if (f.tag === "Nothing")
        return rt(R)(c)(0)(z);
      if (f.tag === "Just")
        return u(rt(R)(f._1.head)(0)(z))(0)(f._1.head)(f._1.tail);
      l();
    })(), d = N((g) => (p) => Hr(g)(-p._2))(0)(f0(_));
    return N((g) => (p) => rt(R)(p._1)(p._2 + d)(g))(a)(f0(_));
  })(z)(Yi(R.compare)((() => {
    const a = (c, f) => {
      if (c.tag === "Leaf")
        return f;
      if (c.tag === "Node")
        return a(c._5, Lt("Cons", c._4, a(c._6, f)));
      l();
    };
    return nn(Sn.foldr, a(t.root, X));
  })()));
}, JC = (t) => (n) => {
  const e = (o, i, s) => Un(3)(i) === "$d:" && Qd(
    _p,
    (() => {
      const u = ht(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      l();
    })()
  ), r = (o) => (i) => (s) => (u) => (a) => (c) => (f) => {
    let _ = o, d = i, g = u, p = c, m = f, h = !0, $;
    for (; h; ) {
      const y = _, x = d, w = g, C = p, b = m, k = x.length;
      if (b >= k) {
        h = !1, $ = y;
        continue;
      }
      const E = b >= 0 && b < x.length ? T("Just", x[b]) : v, S = (() => {
        if (E.tag === "Nothing")
          return "";
        if (E.tag === "Just")
          return E._1;
        l();
      })(), I = e(t, S);
      if (b === (k - 1 | 0) || I) {
        const W = (() => {
          if (I) {
            const D = ht(S)(t.preds), O = (() => {
              if (D.tag === "Nothing")
                return [];
              if (D.tag === "Just")
                return D._1;
              l();
            })();
            if (0 < O.length) {
              const V = w - 1 | 0, et = ht(O[0])(t.nodeIndex);
              if (et.tag === "Nothing")
                return V;
              if (et.tag === "Just")
                return et._1;
              l();
            }
          }
          return w - 1 | 0;
        })();
        _ = N((D) => (O) => {
          if (O >= 0 && O < x.length) {
            const V = x[O];
            return e(t, V) ? D : N((et) => (K) => {
              const q = ht(K)(t.nodeIndex), A = (() => {
                if (q.tag === "Nothing")
                  return 0;
                if (q.tag === "Just")
                  return q._1;
                l();
              })();
              return A < C || A > W ? rt(R)(K + "→" + V)()(et) : et;
            })(D)((() => {
              const et = ht(V)(t.preds);
              if (et.tag === "Nothing")
                return [];
              if (et.tag === "Just")
                return et._1;
              l();
            })());
          }
          return e(t, "") ? D : N((V) => (et) => {
            const K = ht(et)(t.nodeIndex), q = (() => {
              if (K.tag === "Nothing")
                return 0;
              if (K.tag === "Just")
                return K._1;
              l();
            })();
            return q < C || q > W ? rt(R)(et + "→")()(V) : V;
          })(D)((() => {
            const V = ht("")(t.preds);
            if (V.tag === "Nothing")
              return [];
            if (V.tag === "Just")
              return V._1;
            l();
          })());
        })(y)(tn(0, b)), d = x, g = w, p = W, m = b + 1 | 0;
        continue;
      }
      _ = y, d = x, g = w, p = C, m = b + 1 | 0;
    }
    return $;
  };
  return n.length < 3 ? z : N((o) => (i) => {
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
  })(z)(tn(1, n.length - 2 | 0));
}, kC = (t) => (n) => (e) => (r) => (o) => {
  const i = Pe(n), s = N((u) => (a) => {
    const c = N((f) => (_) => {
      const d = (() => {
        if (o === "HRight") {
          const h = ht(_)(t.preds);
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
          l();
        }
        if (o === "HLeft") {
          const h = ht(_)(t.succs);
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
        }
        l();
      })(), g = d.length;
      if (g === 0)
        return f;
      const p = ir(g - 1 | 0, 2), m = ir(g, 2);
      return N((h) => ($) => {
        if ((() => {
          const y = ht(_)(h.align);
          if (y.tag === "Nothing")
            return _ !== _;
          if (y.tag === "Just")
            return y._1 !== _;
          l();
        })())
          return h;
        if ($ >= 0 && $ < d.length) {
          const y = ht(d[$])(t.nodeIndex), x = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            l();
          })();
          if (!(H1(d[$] + "→" + _)(e) || H1(_ + "→" + d[$])(e)) && (() => {
            if (r === "VDown")
              return h.r < x;
            if (r === "VUp")
              return h.r > x;
            l();
          })()) {
            const w = ht(d[$])(h.root), C = (() => {
              if (w.tag === "Nothing")
                return d[$];
              if (w.tag === "Just")
                return w._1;
              l();
            })();
            return {
              root: rt(R)(_)(C)(h.root),
              align: rt(R)(d[$])(_)(rt(R)(_)(C)(h.align)),
              r: x
            };
          }
        }
        return h;
      })(f)((() => {
        if (r === "VDown")
          return tn(p, m);
        if (r === "VUp")
          return gn(tn(p, m));
        l();
      })());
    })({
      root: u.root,
      align: u.align,
      r: (() => {
        if (r === "VDown")
          return -1;
        if (r === "VUp")
          return 999999;
        l();
      })()
    })((() => {
      if (r === "VDown")
        return a;
      if (r === "VUp")
        return gn(a);
      l();
    })());
    return { root: c.root, align: c.align };
  })({ root: Ar(B((u) => J(u, u))(i)), align: Ar(B((u) => J(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return gn(n);
    l();
  })());
  return { root: s.root, align: s.align };
}, Wu = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => {
  const f = kC(n)(e)(u)(a)(c), _ = bC(f)(o)(r)(i)(s)(c);
  return Oy()((d) => (g) => T(
    "Just",
    (() => {
      const p = ht(d)(_);
      if (p.tag === "Nothing")
        return g + 0;
      if (p.tag === "Just")
        return g + p._1;
      l();
    })()
  ))(CC(t)(n)(e)(r)(o)(i)(s)(_)(f)(a)(c));
}, O1 = (t) => (n) => qt((e) => (r) => N((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = tn(0, n.length - 1 | 0);
  return e < 1 ? [] : Et(0, e, o);
})()))(n), SC = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = $C(0)(n.length - 1 | 0), a = j(t.layerGap), c = s(Ty(u, a)), f = lC(mp(o)(c)(r)(i)(z))(c);
  return B((_) => {
    const d = yC(_)(f);
    return d.tag === "Just" && d._1 > 0 ? Hr(a)(2 + j(d._1 - 1 | 0) * 2.5) : a;
  })(tn(0, u - 1 | 0));
}, wp = (t) => (n) => (e) => (r) => Qd(
  (o) => N((i) => (s) => {
    if (!i.ok)
      return i;
    const u = ht(s)(r), a = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      l();
    })(), c = ht(s)(e), f = (() => {
      if (c.tag === "Nothing")
        return a + 1;
      if (c.tag === "Just")
        return a + c._1._1;
      l();
    })();
    return a + 1e-4 > i.pos && f + 1e-4 > i.pos ? { ok: !0, pos: f } : { ok: !1, pos: i.pos };
  })({ ok: !0, pos: -1e18 })(o).ok,
  n
), LC = (t) => (n) => (e) => (r) => {
  const o = Gt((i) => (s) => ot.compare(i.w)(s.w))(B((i) => ({ l: i, w: Tp(i) }))(dt(
    wp()(n)(e),
    r
  )));
  return 0 < o.length ? T("Just", o[0].l) : v;
}, EC = (t) => (n) => {
  const e = Ar(Pe(B(qt((o) => (i) => J(i, o)))(t))), r = (o) => Gt((i) => (s) => st.compare((() => {
    const u = ht(i)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    l();
  })())((() => {
    const u = ht(s)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    l();
  })()))(o);
  return {
    preds: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return z;
        if (i.tag === "Node")
          return cn("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        l();
      };
      return o(N((i) => (s) => Ot(R)(Jn)(s.to.node)([s.from.node])(i))(z)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return z;
        if (i.tag === "Node")
          return cn("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        l();
      };
      return o(N((i) => (s) => Ot(R)(Jn)(s.from.node)([s.to.node])(i))(z)(n));
    })(),
    nodeIndex: e
  };
}, AC = (t) => (n) => {
  const e = Gt((_) => (d) => ot.compare(_.w)(d.w))(qt((_) => (d) => ({ i: _, l: d, w: Tp(d) }))(n)), r = 0 < e.length ? T("Just", e[0]) : v, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    l();
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
            p = Me(y)(x._1), m = x._2;
            continue;
          }
          l();
        }
        return $;
      })(999999)((() => {
        const d = (g, p) => {
          if (g.tag === "Leaf")
            return p;
          if (g.tag === "Node")
            return d(g._5, Lt("Cons", g._4, d(g._6, p)));
          l();
        };
        return d(i._1, X);
      })());
    if (i.tag === "Nothing")
      return 0;
    l();
  })(), u = (_) => N((d) => (g) => Hr(d)((() => {
    const p = ht(g._1)(t);
    if (p.tag === "Nothing")
      return g._2 + 1;
    if (p.tag === "Just")
      return g._2 + p._1._1;
    l();
  })()))(-999999)(f0(_)), a = o >= 0 && o < n.length ? T("Just", n[o]) : v, c = (() => {
    if (a.tag === "Just")
      return u(a._1);
    if (a.tag === "Nothing")
      return 0;
    l();
  })(), f = Fn(
    (_) => (d) => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return z;
        if (p.tag === "Node")
          return cn("Node", p._1, p._2, p._3, p._4 + d, g(p._5), g(p._6));
        l();
      };
      return g(_);
    },
    n,
    qt((_) => (d) => oo(_)(2) === 0 ? s - ((p) => (m) => {
      let h = p, $ = m, y = !0, x;
      for (; y; ) {
        const w = h, C = $;
        if (C.tag === "Nil") {
          y = !1, x = w;
          continue;
        }
        if (C.tag === "Cons") {
          h = Me(w)(C._1), $ = C._2;
          continue;
        }
        l();
      }
      return x;
    })(999999)((() => {
      const p = (m, h) => {
        if (m.tag === "Leaf")
          return h;
        if (m.tag === "Node")
          return p(m._5, Lt("Cons", m._4, p(m._6, h)));
        l();
      };
      return p(d, X);
    })()) : c - u(d))(n)
  );
  return wC(N((_) => (d) => {
    const g = Gt(ot.compare)(Tt(ht(d))(f));
    return rt(R)(d)(g.length === 4 ? 1 < g.length && 2 < g.length ? (g[1] + g[2]) / 2 : 0 : 0 < g.length ? g[0] : 0)(_);
  })(z)(Yi(R.compare)(Pe(B((_) => {
    const d = (g) => {
      if (g.tag === "Leaf")
        return z;
      if (g.tag === "Node")
        return cn("Node", g._1, g._2, g._3, void 0, d(g._5), d(g._6));
      l();
    };
    return nn(Re.foldr, d(_));
  })(f)))));
}, PC = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = EC(n)(o), u = JC(s)(n), a = { nodeGap: t.nodeGap * 4 | 0 }, c = te(
    R.compare,
    jn,
    Ar(B((g) => J(g, J(1, 1)))(dt(
      _p,
      Pe(n)
    ))),
    (() => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return z;
        if (p.tag === "Node")
          return cn("Node", p._1, p._2, p._3, J(p._4._1 * j(4), p._4._2), g(p._5), g(p._6));
        l();
      };
      return g(e);
    })()
  ), f = [
    Wu(a)(s)(n)(c)(r)(o)(i)(u)(I1)(D1),
    Wu(a)(s)(n)(c)(r)(o)(i)(u)(B1)(D1),
    Wu(a)(s)(n)(c)(r)(o)(i)(u)(I1)(z1),
    Wu(a)(s)(n)(c)(r)(o)(i)(u)(B1)(z1)
  ], _ = AC(c)(f);
  if (wp()(n)(c)(_))
    return _;
  const d = LC()(n)(c)(f);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return f[0];
  l();
}, RC = (t) => (n) => (e) => (r) => {
  const o = Hd(
    v,
    Fd,
    (i) => i.node === n ? T("Just", i.position) : v,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return B((s) => s.node === e ? { ...s, position: J(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  l();
}, FC = (t) => (n) => (e) => (r) => {
  const o = dt((s) => Ce(zr)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return N((s) => (u) => Me(s)(u.position._1))(99999)(o);
      if (r === "End")
        return N((s) => (u) => Hr(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = N((u) => (a) => u + a.position._1)(0)(o);
        return o.length === 0 ? 0 : s / j(o.length);
      }
      l();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return N((s) => (u) => Me(s)(u.position._2))(99999)(o);
      if (r === "End")
        return N((s) => (u) => Hr(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = N((u) => (a) => u + a.position._2)(0)(o);
        return o.length === 0 ? 0 : s / j(o.length);
      }
    }
    l();
  })();
  return B((s) => {
    if (Ce(zr)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: J(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: J(s.position._1, i) };
      l();
    }
    return s;
  })(t);
}, GC = (t) => (n) => N((e) => (r) => r.tag === "AlignGroup" ? FC(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? RC(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), IC = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = B((_) => N((d) => (g) => Hr(d)((() => {
    const p = ht(g)(r);
    if (p.tag === "Nothing")
      return 1;
    if (p.tag === "Just")
      return p._1._2;
    l();
  })()))(1)(_))(e), c = PC(t)(e)(r)(o)(i)(u), f = O1(SC(t)(e)(r)(o)(i)(s)((_) => {
    const d = O1(_)(a);
    return Pe(qt((g) => (p) => qt((m) => (h) => ({
      node: h,
      position: J(
        (() => {
          const $ = ht(h)(c);
          return (() => {
            if ($.tag === "Nothing")
              return 0;
            if ($.tag === "Just")
              return $._1;
            l();
          })() / j(4);
        })(),
        g >= 0 && g < d.length ? d[g] : 0
      ),
      size: (() => {
        const $ = Un(3)(h) === "$d:" ? J(0, 1) : J(1, 1), y = ht(h)(r);
        if (y.tag === "Nothing")
          return $;
        if (y.tag === "Just")
          return y._1;
        l();
      })(),
      layer: g,
      order: m
    }))(p))(e));
  }))(a);
  return GC(n)(Pe(qt((_) => (d) => qt((g) => (p) => ({
    node: p,
    position: J(
      (() => {
        const m = ht(p)(c);
        return (() => {
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just")
            return m._1;
          l();
        })() / j(4);
      })(),
      _ >= 0 && _ < f.length ? f[_] : 0
    ),
    size: (() => {
      const m = Un(3)(p) === "$d:" ? J(0, 1) : J(1, 1), h = ht(p)(r);
      if (h.tag === "Nothing")
        return m;
      if (h.tag === "Just")
        return h._1;
      l();
    })(),
    layer: _,
    order: g
  }))(d))(e)));
}, Lf = /* @__PURE__ */ Nl(ya)(/* @__PURE__ */ ai(32)), W1 = /* @__PURE__ */ Nl(ya)(/* @__PURE__ */ ai(31)), Vs = /* @__PURE__ */ (() => {
  const t = kv("25214903917");
  if (t.tag === "Nothing")
    return ih;
  if (t.tag === "Just")
    return t._1;
  l();
})(), Ks = /* @__PURE__ */ Vf(/* @__PURE__ */ Nl(ya)(/* @__PURE__ */ ai(48)))(ya), BC = (t) => {
  const n = Sv(t);
  return Xs(sh((() => {
    if (n.tag === "Nothing")
      return ih;
    if (n.tag === "Just")
      return n._1;
    l();
  })())(Vs))(Ks);
}, l0 = /* @__PURE__ */ ai(11), Ha = (t) => (n) => {
  const e = Xs(na(ea(n)(Vs))(l0))(Ks);
  return J(
    (() => {
      const r = qd(Nv(Kf(e)(ai(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      l();
    })(),
    e
  );
}, DC = (t) => {
  const n = Ha(26)(t), e = Ha(27)(n._2);
  return J((j(n._1) * Ki(2)(27) + j(e._1)) / Ki(2)(53), e._2);
}, zC = (t) => (n) => {
  const e = N((r) => (o) => {
    const i = DC(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return J(
    B((r) => r.x)(Gt((r) => (o) => ot.compare(r.k)(o.k))(Fn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, HC = (t) => {
  const n = Xs(na(ea(t)(Vs))(l0))(Ks), e = Xs(na(ea(n)(Vs))(l0))(Ks);
  return J(
    na(ea((() => {
      const r = Kf(n)(ai(16));
      return n1.compare(r)(W1) !== "LT" ? Vf(r)(Lf) : r;
    })())(Lf))((() => {
      const r = Kf(e)(ai(16));
      return n1.compare(r)(W1) !== "LT" ? Vf(r)(Lf) : r;
    })()),
    e
  );
}, js = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Oa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, ql = /* @__PURE__ */ dn(R)(Mt), Bi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Wa = /* @__PURE__ */ dn(R)(Mt), OC = /* @__PURE__ */ gs(Eo), WC = /* @__PURE__ */ N(pr)(0), QC = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Q1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, qC = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = ko(zt, v, t, e[n], e);
      if (o.tag === "Just")
        return ko(zt, v, n, r, o._1);
      if (o.tag === "Nothing")
        return v;
      l();
    }
  }
  return v;
}, MC = (t) => (n) => (e) => (r) => (o) => ql(N((i) => (s) => {
  const u = Gt((a) => (c) => st.compare((() => {
    const f = js(a.id)(o);
    if (f.tag === "Nothing")
      return 1e6;
    if (f.tag === "Just")
      return f._1;
    l();
  })())((() => {
    const f = js(c.id)(o);
    if (f.tag === "Nothing")
      return 1e6;
    if (f.tag === "Just")
      return f._1;
    l();
  })()))(dt((a) => Oa(a.to.node)(e), dt((a) => a.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...qt((a) => (c) => J(c.id, j((i.rankSum + a | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), XC = (t) => (n) => (e) => (r) => (o) => ql(N((i) => (s) => {
  const u = Gt((c) => (f) => {
    const _ = st.compare((() => {
      const d = Bi(f.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      l();
    })())((() => {
      const d = Bi(c.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      l();
    })());
    return _ === "EQ" ? st.compare((() => {
      const d = js(c.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      l();
    })())((() => {
      const d = js(f.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      l();
    })()) : _;
  })(dt((c) => Oa(c.from.node)(e), dt((c) => c.to.node === s, r))), a = u.length;
  return {
    ranks: [...i.ranks, ...qt((c) => (f) => J(f.id, j((i.rankSum + a | 0) - c | 0)))(u)],
    rankSum: i.rankSum + a | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), g0 = (t) => (n) => (e) => {
  const r = Wa(qt((u) => (a) => J(a, u))(t)), o = Wa(qt((u) => (a) => J(a, u))(n)), i = Tt((u) => {
    const a = Bi(u.from.node)(r), c = Bi(u.to.node)(o);
    if (a.tag === "Just" && c.tag === "Just")
      return T("Just", J(a._1, c._1));
    const f = Bi(u.from.node)(o), _ = Bi(u.to.node)(r);
    return f.tag === "Just" && _.tag === "Just" ? T("Just", J(_._1, f._1)) : v;
  })(e), s = i.length;
  return N((u) => (a) => N((c) => (f) => a >= 0 && a < i.length && f >= 0 && f < i.length && ((i[a]._1 - i[f]._1 | 0) * (i[a]._2 - i[f]._2 | 0) | 0) < 0 ? c + 1 | 0 : c)(u)(tn(a + 1 | 0, s - 1 | 0)))(0)(tn(0, s - 2 | 0));
}, UC = (t) => (n) => (e) => (r) => {
  const o = (s) => (u) => {
    let a = s, c = u, f = !0, _;
    for (; f; ) {
      const d = a, g = c;
      if (g >= (d.length - 1 | 0)) {
        f = !1, _ = d;
        continue;
      }
      if (g >= 0 && g < d.length) {
        const p = g + 1 | 0;
        if (p >= 0 && p < d.length) {
          const m = d[g], h = d[p];
          if (Cn((w) => w.before === m && w.after === h, r)) {
            a = d, c = g + 1 | 0;
            continue;
          }
          const $ = ko(zt, v, g, h, d), y = (() => {
            if ($.tag === "Just")
              return ko(zt, v, g + 1 | 0, m, $._1);
            if ($.tag === "Nothing")
              return v;
            l();
          })(), x = (() => {
            if (y.tag === "Nothing")
              return d;
            if (y.tag === "Just")
              return y._1;
            l();
          })();
          if (g0(n)(x)(e) < g0(n)(d)(e)) {
            a = x, c = g + 1 | 0;
            continue;
          }
          a = d, c = g + 1 | 0;
          continue;
        }
        f = !1, _ = d;
        continue;
      }
      f = !1, _ = d;
    }
    return _;
  };
  return ((s) => {
    let u = s, a = !0, c;
    for (; a; ) {
      const f = u, _ = o(f)(0);
      if (OC(_)(f)) {
        a = !1, c = f;
        continue;
      }
      u = _;
    }
    return c;
  })(t);
}, Qu = (t) => (n) => N((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + g0(o)(t[i])(n) | 0;
  }
  return e;
})(0)(tn(0, t.length - 2 | 0)), YC = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (a) => {
        let c = u, f = a, _ = !0, d;
        for (; _; ) {
          const g = c, p = f, m = p - 1 | 0;
          if (m >= 0 && m < g.length) {
            if (p >= 0 && p < g.length && p > 0 && g[m].key > g[p].key) {
              const h = qC(p - 1 | 0)(p)(g);
              if (h.tag === "Just") {
                c = h._1, f = p - 1 | 0;
                continue;
              }
              if (h.tag === "Nothing") {
                _ = !1, d = g;
                continue;
              }
              l();
            }
            _ = !1, d = g;
            continue;
          }
          _ = !1, d = g;
        }
        return d;
      };
      return N((u) => (a) => s(u)(a))(n)(tn(1, n.length - 1 | 0));
    }
    const e = ir(n.length, 2), r = t(Et(0, e, n)), o = t(Et(e, n.length, n));
    return ((s) => (u) => (a) => {
      let c = s, f = u, _ = a, d = !0, g;
      for (; d; ) {
        const p = c, m = f, h = _;
        if (m >= 0 && m < r.length) {
          if (h >= 0 && h < o.length) {
            if (r[m].key > o[h].key) {
              c = kt(p)(o[h]), f = m, _ = h + 1 | 0;
              continue;
            }
            c = kt(p)(r[m]), f = m + 1 | 0, _ = h;
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
})(), VC = (t) => (n) => (e) => {
  const r = Tt((c) => c.tag === "OrderConstraint" ? T("Just", { before: c._1.before, after: c._1.after }) : v)(t.constraints), o = (c) => N((f) => (_) => {
    const d = _.after, g = _.before, p = uo(zt, v, (h) => h === g, f), m = uo(zt, v, (h) => h === d, f);
    if (p.tag === "Just" && m.tag === "Just" && p._1 > m._1) {
      const h = Wd(zt, v, p._1, f), $ = (() => {
        if (h.tag === "Nothing")
          return f;
        if (h.tag === "Just")
          return h._1;
        l();
      })(), y = Od(zt, v, m._1, g, $);
      if (y.tag === "Nothing")
        return $;
      if (y.tag === "Just")
        return y._1;
      l();
    }
    return f;
  })(c)(r), i = ql(qt((c) => (f) => J(f.id, c))(e)), s = (c, f, _) => {
    const d = c.length;
    return N((g) => (p) => {
      const m = f ? p - 1 | 0 : p + 1 | 0, h = m >= 0 && m < g._1.length ? T("Just", g._1[m]) : v;
      if (h.tag === "Just") {
        const $ = p >= 0 && p < g._1.length ? T("Just", g._1[p]) : v;
        if ($.tag === "Just") {
          const y = Wa(qt((k) => (E) => J(E, k))(h._1)), x = Wa(qt((k) => (E) => J(E, k))($._1)), w = f ? MC(h._1)(y)(x)(e)(i) : XC(h._1)(y)(x)(e)(i), C = N((k) => (E) => {
            const S = Tt((W) => js(W.id)(w))(dt(f ? (W) => W.to.node === E._2 && Oa(W.from.node)(y) : (W) => W.from.node === E._2 && Oa(W.to.node)(y), e));
            if (S.length === 0)
              return { ...k, items: [...k.items, { n: E._2, key: v, origIdx: E._1 }] };
            const I = Ha(24)(k.r);
            return {
              items: [
                ...k.items,
                {
                  n: E._2,
                  key: T("Just", (WC(S) + (j(I._1) * 4172325152040912e-24 - 0.03500000014901161)) / j(S.length)),
                  origIdx: E._1
                }
              ],
              r: I._2
            };
          })({ items: [], r: g._2 })(qt(Zn)($._1)), b = ko(
            zt,
            v,
            p,
            UC(o(B((k) => k.n)(YC((() => {
              const k = C.items, E = (I) => (W) => {
                let D = I, O = W, V = !0, et;
                for (; V; ) {
                  const K = D, q = O;
                  if (K >= 0 && K < k.length) {
                    if (k[K].key.tag === "Just") {
                      V = !1, et = k[K].key._1;
                      continue;
                    }
                    if (k[K].key.tag === "Nothing") {
                      D = K + 1 | 0, O = q;
                      continue;
                    }
                    l();
                  }
                  V = !1, et = q;
                }
                return et;
              };
              return ((I) => (W) => (D) => {
                let O = I, V = W, et = D, K = !0, q;
                for (; K; ) {
                  const A = O, P = V, Q = et;
                  if (A >= 0 && A < k.length) {
                    if (k[A].key.tag === "Just") {
                      O = A + 1 | 0, V = k[A].key._1, et = [...Q, { n: k[A].n, key: k[A].key._1, origIdx: k[A].origIdx }];
                      continue;
                    }
                    if (k[A].key.tag === "Nothing") {
                      const G = (P + E(A + 1 | 0)(P + 1)) / 2;
                      O = A + 1 | 0, V = G, et = [...Q, { n: k[A].n, key: G, origIdx: k[A].origIdx }];
                      continue;
                    }
                    l();
                  }
                  K = !1, q = Q;
                }
                return q;
              })(0)(-1)([]);
            })()))))(h._1)(e)(r),
            g._1
          );
          if (b.tag === "Just")
            return J(b._1, C.r);
          if (b.tag === "Nothing")
            return J(g._1, g._2);
          l();
        }
        if ($.tag === "Nothing")
          return J(g._1, g._2);
        l();
      }
      if (h.tag === "Nothing")
        return J(g._1, g._2);
      l();
    })(J(c, _))(f ? tn(1, d - 1 | 0) : gn(tn(0, d - 2 | 0)));
  }, u = N((c) => (f) => rt(R)(f.from.node)()(rt(R)(f.to.node)()(c)))(z)(e), a = N((c) => (f) => {
    if (c.result.crossings === 0)
      return c;
    const _ = (y) => (x) => (w) => (C) => {
      let b = y, k = x, E = w, S = C, I = !0, W;
      for (; I; ) {
        const D = b, O = k, V = E, et = S;
        if (V === 0) {
          I = !1, W = { layout: D, crossings: 0, random: et };
          continue;
        }
        const K = s(D, O, et), q = Qu(K._1)(e);
        if (q < V) {
          b = K._1, k = !O, E = q, S = K._2;
          continue;
        }
        I = !1, W = { layout: D, crossings: V, random: K._2 };
      }
      return W;
    }, d = Ha(1)(c.result.random), g = d._1 !== 0, p = t.modelOrder.tag === "Leaf", m = (c.firstTry || c.secondTry) && !p ? c.firstTry : g, h = (() => {
      if (!p) {
        const C = s(n, m, d._2);
        return _(C._1)(!m)(Qu(C._1)(e))(C._2);
      }
      const y = m ? 0 : QC(0)(n.length - 1 | 0), x = y >= 0 && y < n.length ? T("Just", n[y]) : v;
      if (x.tag === "Just" && x._1.length > 1) {
        const C = dt((b) => Q1(b)(u), x._1);
        if (C.length > 1) {
          const b = zC(d._2)(C), k = b._1, E = ko(
            zt,
            v,
            y,
            o(N((S) => (I) => Q1(I)(u) ? S.idx >= 0 && S.idx < k.length ? { idx: S.idx + 1 | 0, result: [...S.result, k[S.idx]] } : { idx: S.idx, result: [...S.result, I] } : { idx: S.idx, result: [...S.result, I] })({ idx: 0, result: [] })(x._1).result),
            n
          );
          if (E.tag === "Just") {
            const S = s(E._1, m, b._2);
            return _(S._1)(!m)(Qu(S._1)(e))(S._2);
          }
        }
      }
      const w = s(n, m, d._2);
      return _(w._1)(!m)(Qu(w._1)(e))(w._2);
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
      random: Xs(sh(HC(BC(1))._1)(Vs))(Ks)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(tn(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : a.layout;
}, KC = (t) => t, q1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
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
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, rs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Zs = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = R.compare(n._1)(e._1);
      return r === "LT" ? Yn : r === "GT" ? Vn : R.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), jC = /* @__PURE__ */ dn(R)(Mt), ZC = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = Zs.compare(t)(s._3);
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
    l();
  }
  return i;
}, tb = /* @__PURE__ */ KC("Greedy"), Ef = (t) => (n) => (e) => N((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !q1(o.to.node)(r.marks)) {
    const i = xe(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      l();
    })(), u = rt(R)(o.to.node)(s)(r.inDeg);
    return (() => {
      const a = xe(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (a.tag === "Nothing")
          return !1;
        if (a.tag === "Just")
          return a._1 > 0;
        l();
      })() && !Ce(zr)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !q1(o.from.node)(r.marks)) {
    const i = xe(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      l();
    })(), u = rt(R)(o.from.node)(s)(r.outDeg);
    return (() => {
      const a = xe(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (a.tag === "Nothing")
          return !1;
        if (a.tag === "Just")
          return a._1 > 0;
        l();
      })() && !Ce(zr)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: dt((r) => r !== n, e.remaining) })(t), nb = /* @__PURE__ */ N((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return rt(R)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return rt(R)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return rt(R)(n._1.node)(99999)(t);
  }
  return t;
})(z), Np = (t) => (n) => (e) => {
  const r = xe(n)(t), o = xe(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, Cp = (t) => (n) => (e) => (r) => {
  if (rs(e)(r.visited) || rs(e)(r.visiting))
    return r;
  const o = N(eb(t)(n)(e))({ ...r, visiting: rt(R)(e)()(r.visiting) })((() => {
    const i = xe(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    l();
  })());
  return {
    ...o,
    visiting: Zi(R)(e)(o.visiting),
    visited: rt(R)(e)()(o.visited)
  };
}, eb = (t) => (n) => (e) => (r) => (o) => Np(t)(e)(o) ? { ...r, backEdges: rt(Zs)(J(e, o))()(r.backEdges) } : rs(o)(r.visiting) ? { ...r, backEdges: rt(Zs)(J(e, o))()(r.backEdges) } : rs(o)(r.visited) ? r : Cp(t)(n)(o)(r), rb = (t) => (n) => (e) => {
  const r = (d) => {
    let g = d, p = !0, m;
    for (; p; ) {
      const h = g, $ = Bt((y) => v, (y) => (x) => T("Just", { head: y, tail: x }), h.sinks);
      if ($.tag === "Just") {
        g = Ef(e)($._1.head)({
          ...h,
          sinks: $._1.tail,
          marks: rt(R)($._1.head)(h.nextRight)(h.marks),
          nextRight: h.nextRight - 1 | 0
        });
        continue;
      }
      if ($.tag === "Nothing") {
        const y = Bt((x) => v, (x) => (w) => T("Just", { head: x, tail: w }), h.sources);
        if (y.tag === "Just") {
          g = Ef(e)(y._1.head)({
            ...h,
            sources: y._1.tail,
            marks: rt(R)(y._1.head)(h.nextLeft)(h.marks),
            nextLeft: h.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const x = (C) => {
            const b = xe(C)(h.outDeg), k = xe(C)(h.inDeg);
            return (() => {
              if (b.tag === "Nothing")
                return 0;
              if (b.tag === "Just")
                return b._1;
              l();
            })() - (() => {
              if (k.tag === "Nothing")
                return 0;
              if (k.tag === "Just")
                return k._1;
              l();
            })() | 0;
          }, w = Gt((C) => (b) => {
            const k = st.compare(x(b))(x(C));
            return k === "EQ" ? st.compare((() => {
              const E = xe(C)(n);
              if (E.tag === "Nothing")
                return 1e6;
              if (E.tag === "Just")
                return E._1;
              l();
            })())((() => {
              const E = xe(b)(n);
              if (E.tag === "Nothing")
                return 1e6;
              if (E.tag === "Just")
                return E._1;
              l();
            })()) : k;
          })(h.remaining);
          if (0 < w.length) {
            const C = w[0];
            g = Ef(e)(C)({
              ...h,
              remaining: dt((b) => b !== C, h.remaining),
              marks: rt(R)(C)(h.nextLeft)(h.marks),
              nextLeft: h.nextLeft + 1 | 0
            });
            continue;
          }
          p = !1, m = h;
          continue;
        }
      }
      l();
    }
    return m;
  }, o = Yi(R.compare)([...B((d) => d.from.node)(e), ...B((d) => d.to.node)(e)]), i = dt((d) => d.from.node !== d.to.node, e), s = N((d) => (g) => Ot(R)(En)(g.to.node)(1)(d))(z)(i), u = N((d) => (g) => Ot(R)(En)(g.from.node)(1)(d))(z)(i), a = dt(
    (d) => {
      const g = xe(d)(s);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      l();
    },
    o
  ), c = dt(
    (d) => {
      const g = xe(d)(u);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      l();
    },
    o
  ), f = o.length + 1 | 0, _ = N((d) => (g) => {
    const p = xe(g)(d);
    return p.tag === "Just" && p._1 < 0 ? rt(R)(g)(p._1 + f | 0)(d) : d;
  })(r({
    remaining: dt((d) => !Ce(zr)(d)(a) && !Ce(zr)(d)(c), o),
    marks: z,
    inDeg: s,
    outDeg: u,
    sources: a,
    sinks: c,
    nextLeft: 1,
    nextRight: -1
  }).marks)(o);
  return N((d) => (g) => {
    if (g.from.node === g.to.node)
      return d;
    if (Np(t)(g.from.node)(g.to.node))
      return rt(Zs)(J(g.from.node, g.to.node))()(d);
    const p = xe(g.from.node)(_), m = xe(g.to.node)(_);
    return p.tag === "Just" && m.tag === "Just" && p._1 > m._1 ? rt(Zs)(J(g.from.node, g.to.node))()(d) : d;
  })(z)(e);
}, ob = /* @__PURE__ */ N((t) => (n) => Ot(R)(Jn)(n.from.node)([n.to.node])(t))(z), ib = (t) => (n) => {
  const e = ob(n), r = Yi(R.compare)([...B((i) => i.from.node)(n), ...B((i) => i.to.node)(n)]), o = N((i) => (s) => rt(R)(s.to.node)()(i))(z)(n);
  return N((i) => (s) => Cp(t)(e)(s)(i))({
    visiting: z,
    visited: z,
    backEdges: z
  })([...dt((i) => !rs(i)(o), r), ...dt((i) => rs(i)(o), r)]).backEdges;
}, sb = (t) => (n) => (e) => (r) => {
  const o = jC(qt((u) => (a) => J(a, u))(n)), i = nb(e), s = (() => {
    if (t === "DepthFirst")
      return ib(i)(r);
    if (t === "Greedy")
      return rb(i)(o)(r);
    l();
  })();
  return {
    edges: B((u) => ZC(J(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, bp = Mt.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), Dn = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, zn = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Fs = (t) => (n) => (e) => (r) => bp((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), Qa = (t) => (n) => (e) => (r) => Fs(Dn(n)(e))(zn(n)(e))(r)(t), qu = /* @__PURE__ */ j(4), ub = /* @__PURE__ */ yc((t) => {
  if (t.direction === "H") {
    const n = Dn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: zn(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = Dn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: zn(t.start._2)(t.end._2) - n }];
  }
  l();
}), tu = /* @__PURE__ */ Bs((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), ab = (t) => (n) => (e) => {
  const r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = Ke(r._1.tail);
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
  l();
}, nu = (t) => {
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
        l();
      })() ? n({ start: r.start, end: i._1.head.end, direction: r.direction })(i._1.tail) : [r, ...n(i._1.head)(i._1.tail)];
    l();
  }, e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  l();
}, Gs = (t) => (n) => (e) => (r) => bp((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), Os = (t) => (n) => (e) => (r) => Gs(Dn(n)(e))(zn(n)(e))(r)(t), cb = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : Et(o, n.length, n), s = e < 1 ? [] : Et(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), a = e === 0, c = e >= 0 && e < n.length ? T("Just", n[e]) : v;
  if (c.tag === "Just") {
    const f = e + 1 | 0, _ = f >= 0 && f < n.length ? T("Just", n[f]) : v;
    if (_.tag === "Just") {
      const d = c._1.start._1 === _._1.end._1 && (!a || c._1.direction === "V") && (!u || _._1.direction === "V") && !Qa(t)(Dn(c._1.start._2)(_._1.end._2))(zn(c._1.start._2)(_._1.end._2))(c._1.start._1) ? T("Just", [...s, { start: c._1.start, end: _._1.end, direction: mn }, ...i]) : v, g = c._1.start._2 === _._1.end._2 && (!a || c._1.direction === "H") && (!u || _._1.direction === "H") && !Os(t)(Dn(c._1.start._1)(_._1.end._1))(zn(c._1.start._1)(_._1.end._1))(c._1.start._2) ? T("Just", [...s, { start: c._1.start, end: _._1.end, direction: Tn }, ...i]) : v;
      return d.tag === "Nothing" ? g : d;
    }
    if (_.tag === "Nothing")
      return v;
    l();
  }
  if (c.tag === "Nothing")
    return v;
  l();
}, fb = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const c = cb(t)(n)(a)(e);
      if (c.tag === "Just") {
        s = !1, u = c._1;
        continue;
      }
      if (c.tag === "Nothing") {
        i = a + 1 | 0;
        continue;
      }
      l();
    }
    return u;
  })(0);
}, lb = (t) => (n) => (e) => (r) => {
  const o = (d, g, p) => !Qa(t)(Dn(g)(p))(zn(g)(p))(d), i = e + 3 | 0, s = i < 1 ? n : Et(i, n.length, n), u = e < 1 ? [] : Et(0, e, n), a = (e + 2 | 0) === (r - 1 | 0), c = e === 0, f = (d, g, p) => !Os(t)(Dn(g)(p))(zn(g)(p))(d), _ = e >= 0 && e < n.length ? T("Just", n[e]) : v;
  if (_.tag === "Just") {
    const d = e + 2 | 0, g = d >= 0 && d < n.length ? T("Just", n[d]) : v;
    if (g.tag === "Just") {
      const p = _._1.start._1 === g._1.end._1 && (!c || _._1.direction === "V") && (!a || g._1.direction === "V") && o(_._1.start._1, _._1.start._2, g._1.end._2) ? T("Just", [...u, { start: _._1.start, end: g._1.end, direction: mn }, ...s]) : _._1.start._2 === g._1.end._2 && (!c || _._1.direction === "H") && (!a || g._1.direction === "H") && f(_._1.start._2, _._1.start._1, g._1.end._1) ? T("Just", [...u, { start: _._1.start, end: g._1.end, direction: Tn }, ...s]) : v, m = (!c || _._1.direction === "V") && (!a || g._1.direction === "H") && o(_._1.start._1, _._1.start._2, g._1.end._2) && f(
        g._1.end._2,
        _._1.start._1,
        g._1.end._1
      ) ? T(
        "Just",
        [
          ...u,
          { start: _._1.start, end: J(_._1.start._1, g._1.end._2), direction: mn },
          { start: J(_._1.start._1, g._1.end._2), end: g._1.end, direction: Tn },
          ...s
        ]
      ) : v, h = (!c || _._1.direction === "H") && (!a || g._1.direction === "V") && f(_._1.start._2, _._1.start._1, g._1.end._1) && o(
        g._1.end._1,
        _._1.start._2,
        g._1.end._2
      ) ? T(
        "Just",
        [
          ...u,
          { start: _._1.start, end: J(g._1.end._1, _._1.start._2), direction: Tn },
          { start: J(g._1.end._1, _._1.start._2), end: g._1.end, direction: mn },
          ...s
        ]
      ) : v, $ = m.tag === "Nothing" ? h : m;
      return p.tag === "Nothing" ? $ : p;
    }
    if (g.tag === "Nothing")
      return v;
    l();
  }
  if (_.tag === "Nothing")
    return v;
  l();
}, gb = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const c = lb(t)(n)(a)(e);
      if (c.tag === "Just") {
        s = !1, u = c._1;
        continue;
      }
      if (c.tag === "Nothing") {
        i = a + 1 | 0;
        continue;
      }
      l();
    }
    return u;
  })(0);
}, _b = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = nu(tu(fb(t)(gb(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(nu(tu(e)));
}, db = (t) => (n) => (e) => (r) => {
  const o = Dn(e)(r), i = zn(e)(r), s = dt((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = Gt((c) => (f) => ot.compare(c.x)(f.x))(s);
    return 0 < a.length ? a[0].x - 1 : (e + r) / 2;
  }
  const u = Gt((a) => (c) => ot.compare(c.x)(a.x))(B((a) => ({ ...a, x: a.x + a.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, hb = (t) => (n) => (e) => (r) => {
  const o = Dn(e)(r), i = zn(e)(r), s = dt((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = Gt((c) => (f) => ot.compare(c.y)(f.y))(s);
    return 0 < a.length ? a[0].y - 1 : (e + r) / 2;
  }
  const u = Gt((a) => (c) => ot.compare(c.y)(a.y))(B((a) => ({ ...a, y: a.y + a.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, pb = (t) => (n) => (e) => (r) => {
  const o = Dn(e)(r), i = zn(e)(r), s = dt((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = Gt((c) => (f) => ot.compare(f.x)(c.x))(B((c) => ({ ...c, x: c.x + c.w }))(s));
    return 0 < a.length ? a[0].x : (e + r) / 2;
  }
  const u = Gt((a) => (c) => ot.compare(a.x)(c.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, mb = (t) => (n) => (e) => (r) => {
  const o = Dn(e)(r), i = zn(e)(r), s = dt((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = Gt((c) => (f) => ot.compare(f.y)(c.y))(B((c) => ({ ...c, y: c.y + c.h }))(s));
    return 0 < a.length ? a[0].y : (e + r) / 2;
  }
  const u = Gt((a) => (c) => ot.compare(a.y)(c.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, Jp = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, f = i;
    if (f > 100) {
      s = !1, u = c;
      continue;
    }
    if (!a(c + f)) {
      s = !1, u = c + f;
      continue;
    }
    if (!a(c - f)) {
      s = !1, u = c - f;
      continue;
    }
    r = a, o = c, i = f + 1;
  }
  return u;
}, M1 = (t) => (n) => (e) => (r) => (o) => {
  const i = Dn(n)(e), s = zn(n)(e);
  if (!Fs(i)(s)(r)(t))
    return r;
  if (!Fs(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return Fs(i)(s)(u)(t) ? Jp((a) => Fs(i)(s)(a)(t))(u)(1) : u;
}, $b = (t) => (n) => (e) => (r) => (o) => {
  const i = Dn(n)(e), s = zn(n)(e);
  if (!Gs(i)(s)(r)(t))
    return r;
  if (!Gs(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return Gs(i)(s)(u)(t) ? Jp((a) => Gs(i)(s)(a)(t))(u)(1) : u;
}, yb = (t) => (n) => (e) => (r) => {
  const o = Dn(n)(e), i = zn(n)(e), s = dt((c) => r >= c.x && r < c.x + c.w && c.y + c.h > o && c.y < i, t), u = N((c) => (f) => zn(c)(f.x + f.w + 4))(r + 4)(s), a = N((c) => (f) => Dn(c)(f.x - 4))(r - 4)(s);
  return (() => {
    const c = u - r, f = a - r;
    return (c < 0 ? -c : c) <= (f < 0 ? -f : f);
  })() ? u : a;
}, vb = (t) => (n) => (e) => (r) => {
  const o = Dn(n)(e), i = zn(n)(e), s = dt((c) => r >= c.y && r < c.y + c.h && c.x + c.w > o && c.x < i, t), u = N((c) => (f) => zn(c)(f.y + f.h + 4))(r + 4)(s), a = N((c) => (f) => Dn(c)(f.y - 4))(r - 4)(s);
  return (() => {
    const c = u - r, f = a - r;
    return (c < 0 ? -c : c) <= (f < 0 ? -f : f);
  })() ? u : a;
}, xb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (() => {
    if (r === "South")
      return J(o._1, o._2 + 4);
    if (r === "North")
      return J(o._1, o._2 - 4);
    if (r === "East")
      return J(o._1 + 4, o._2);
    if (r === "West")
      return J(o._1 - 4, o._2);
    l();
  })(), a = (() => {
    if (i === "South")
      return J(s._1, s._2 + 4);
    if (i === "North")
      return J(s._1, s._2 - 4);
    if (i === "East")
      return J(s._1 + 4, s._2);
    if (i === "West")
      return J(s._1 - 4, s._2);
    l();
  })(), c = (C, b, k) => !Qa(n)(Dn(b)(k))(zn(b)(k))(C), f = (C, b, k) => !Qa(e)(Dn(b)(k))(zn(b)(k))(C), _ = (C, b, k, E) => t.tag === "Just" && !Os(e)(Dn(C)(b))(zn(C)(b))(t._1) ? t._1 : $b(n)(C)(b)(k)(E), d = (C, b, k, E) => {
    if (C === k) {
      const I = yb(n)(b)(E)(C), W = hb(n)(C)(b)(E), D = mb(n)(C)(b)(E);
      return [
        { start: J(C, b), end: J(C, W), direction: mn },
        { start: J(C, W), end: J(I, W), direction: Tn },
        { start: J(I, W), end: J(I, D), direction: mn },
        { start: J(I, D), end: J(k, D), direction: Tn },
        { start: J(k, D), end: J(k, E), direction: mn }
      ];
    }
    const S = _(C, k, b, E);
    return [
      { start: J(C, b), end: J(C, S), direction: mn },
      { start: J(C, S), end: J(k, S), direction: Tn },
      { start: J(k, S), end: J(k, E), direction: mn }
    ];
  }, g = (C, b, k, E) => {
    if (b === E) {
      const I = vb(n)(C)(k)(b), W = db(n)(b)(C)(k), D = pb(n)(b)(C)(k);
      return [
        { start: J(C, b), end: J(W, b), direction: Tn },
        { start: J(W, b), end: J(W, I), direction: mn },
        { start: J(W, I), end: J(D, I), direction: Tn },
        { start: J(D, I), end: J(D, E), direction: mn },
        { start: J(D, E), end: J(k, E), direction: Tn }
      ];
    }
    const S = M1(n)(b)(E)(C)(k);
    return [
      { start: J(C, b), end: J(S, b), direction: Tn },
      { start: J(S, b), end: J(S, E), direction: mn },
      { start: J(S, E), end: J(k, E), direction: Tn }
    ];
  }, p = (C, b, k) => !Os(n)(Dn(b)(k))(zn(b)(k))(C), m = (C, b, k) => !Os(e)(Dn(b)(k))(zn(b)(k))(C), h = (C, b, k, E) => {
    if (m(b, C, k) && f(k, b, E))
      return [
        { start: J(C, b), end: J(k, b), direction: Tn },
        { start: J(k, b), end: J(k, E), direction: mn }
      ];
    const S = M1(n)(b)(E)(C)(k);
    return [
      { start: J(C, b), end: J(S, b), direction: Tn },
      { start: J(S, b), end: J(S, E), direction: mn },
      { start: J(S, E), end: J(k, E), direction: Tn }
    ];
  }, $ = (C, b, k, E) => {
    if (f(C, b, E) && m(E, C, k))
      return [
        { start: J(C, b), end: J(C, E), direction: mn },
        { start: J(C, E), end: J(k, E), direction: Tn }
      ];
    const S = _(C, k, b, E);
    return [
      { start: J(C, b), end: J(C, S), direction: mn },
      { start: J(C, S), end: J(k, S), direction: Tn },
      { start: J(k, S), end: J(k, E), direction: mn }
    ];
  }, y = (() => {
    if (r === "South")
      return i === "North" ? u._1 === a._1 && c(u._1, u._2, a._2) ? [{ start: J(u._1, u._2), end: J(a._1, a._2), direction: mn }] : d(u._1, u._2, a._1, a._2) : i === "East" || i === "West" ? $(u._1, u._2, a._1, a._2) : d(u._1, u._2, a._1, a._2);
    if (r === "North")
      return i === "South" ? u._1 === a._1 && c(u._1, u._2, a._2) ? [{ start: J(u._1, u._2), end: J(a._1, a._2), direction: mn }] : d(u._1, u._2, a._1, a._2) : i === "East" || i === "West" ? $(u._1, u._2, a._1, a._2) : d(u._1, u._2, a._1, a._2);
    if (r === "East")
      return i === "West" ? u._2 === a._2 && p(u._2, u._1, a._1) ? [{ start: J(u._1, u._2), end: J(a._1, a._2), direction: Tn }] : g(u._1, u._2, a._1, a._2) : i === "North" || i === "South" ? h(u._1, u._2, a._1, a._2) : d(u._1, u._2, a._1, a._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === a._2 && p(u._2, u._1, a._1) ? [{ start: J(u._1, u._2), end: J(a._1, a._2), direction: Tn }] : g(u._1, u._2, a._1, a._2);
      if (i === "North" || i === "South")
        return h(u._1, u._2, a._1, a._2);
    }
    return d(u._1, u._2, a._1, a._2);
  })(), x = (() => {
    if (r === "South" || r === "North")
      return mn;
    if (r === "East" || r === "West")
      return Tn;
    l();
  })(), w = {
    start: J(a._1, a._2),
    end: J(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return mn;
      if (i === "East" || i === "West")
        return Tn;
      l();
    })()
  };
  return u._1 === a._1 && u._2 === a._2 ? [{ start: J(o._1, o._2), end: J(s._1, s._2), direction: x }] : ab({ start: J(o._1, o._2), end: J(u._1, u._2), direction: x })(y)(w);
}, Tb = /* @__PURE__ */ B((t) => ({ x: t.position._1 * qu - 2, y: t.position._2 * qu - 2, w: t.size._1 * qu + 4, h: t.size._2 * qu + 4 })), kp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Wi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, wb = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), _0 = (t) => (n) => t.gapTop + 1 * j(4) + j(n) * 2.5 * j(4), Nb = (t) => (n) => {
  const e = kp(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return T("Just", { slot1Y: _0(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: _0(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return v;
    l();
  }
  if (e.tag === "Nothing")
    return v;
  l();
}, Cb = (t) => (n) => {
  const e = N((r) => (o) => rt(R)(o.node)(o)(r))(z)(n);
  return Pe(qt((r) => (o) => {
    const i = Wi(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return qt((u) => (a) => {
        const c = o.edges.length, f = j(4), _ = s.position._1 * f, d = s.position._2 * f, g = s.size._2 * f, p = j((2 * c | 0) + 1 | 0), m = d + g * j(c - u | 0) / p, h = d + g * j((c + 1 | 0) + u | 0) / p, $ = _ - f * 2.5 * j(u + 1 | 0), y = [
          { start: J(_, m), end: J($, m), direction: Tn },
          { start: J($, m), end: J($, h), direction: mn },
          { start: J($, h), end: J(_, h), direction: Tn }
        ];
        return { edge: a.id, segments: y, bends: Fn((x) => (w) => x.end, y, Et(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    l();
  })(B((r) => ({ node: r._1, edges: r._2 }))(wb(N((r) => (o) => Ot(R)(Jn)(o.from.node)([
    o
  ])(r))(z)(t)))));
}, bb = (t) => (n) => {
  const e = N((i) => (s) => rt(R)(s.node)(s)(i))(z)(n), r = (i) => {
    const s = Wi(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    l();
  }, o = (i) => {
    const s = Wi(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    l();
  };
  return Gt((i) => (s) => {
    const u = st.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const a = ot.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return a === "EQ" ? ot.compare(r(i.edge.to.node))(r(s.edge.to.node)) : a;
    }
    return u;
  })(t);
}, ye = (t) => {
  const n = j(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, Jb = (t) => t.from.node === t.to.node, kb = (t) => (n) => (e) => (r) => {
  const o = _b(e)(xb(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: Fn((i) => (s) => i.end, o, Et(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, Sb = (t) => (n) => (e) => (r) => {
  const o = [
    { start: J(r.fromPos._1, r.fromPos._2), end: J(r.fromPos._1, t.slot1Y), direction: mn },
    { start: J(r.fromPos._1, t.slot1Y), end: J(t.splitX, t.slot1Y), direction: Tn },
    { start: J(t.splitX, t.slot1Y), end: J(t.splitX, t.slot2Y), direction: mn },
    { start: J(t.splitX, t.slot2Y), end: J(r.toPos._1, t.slot2Y), direction: Tn },
    { start: J(r.toPos._1, t.slot2Y), end: J(r.toPos._1, r.toPos._2), direction: mn }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: Fn((i) => (s) => i.end, o, Et(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, Lb = (t) => (n) => (e) => {
  const r = Wi(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Wi(t.edge.to.node)(e);
    return i.tag === "Just" ? dt(
      (s) => !(s.h === ye(r._1).h && s.w === ye(r._1).w && s.x === ye(r._1).x && s.y === ye(r._1).y) && !(s.h === ye(i._1).h && s.w === ye(i._1).w && s.x === ye(i._1).x && s.y === ye(i._1).y),
      n
    ) : dt((s) => !(s.h === ye(r._1).h && s.w === ye(r._1).w && s.x === ye(r._1).x && s.y === ye(r._1).y), n);
  }
  const o = Wi(t.edge.to.node)(e);
  return o.tag === "Just" ? dt((i) => !(i.h === ye(o._1).h && i.w === ye(o._1).w && i.x === ye(o._1).x && i.y === ye(o._1).y), n) : dt((i) => !0, n);
}, Eb = (t) => (n) => {
  const e = kp(n.edge.id)(t);
  if (e.tag === "Just")
    return T("Just", _0(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return v;
  l();
}, Ab = (t) => (n) => (e) => (r) => (o) => {
  const i = N((c) => (f) => rt(R)(f.node)(f)(c))(z)(n), s = Tb(n), u = mp(dt((c) => c.from.node !== c.to.node, t))(n)(e)(r)(o), a = hp(u)(n);
  return [
    ...Cb(dt(Jb, t))(n),
    ...N((c) => (f) => {
      const _ = Lb(f)(s)(i), d = [..._, ...c.edgeObstacles], g = Nb(a)(f), p = (() => {
        if (g.tag === "Just")
          return Sb(g._1)(_)(d)(f);
        if (g.tag === "Nothing")
          return kb(Eb(a)(f))(_)(d)(f);
        l();
      })();
      return { results: [...c.results, p], edgeObstacles: [...c.edgeObstacles, ...ub(p.segments)] };
    })({ results: [], edgeObstacles: [] })(bb(u)(n)).results
  ];
}, Co = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, bo = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Pb = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return v;
  const r = bo(Co(t.start._2)(t.end._2))(Co(n.start._2)(n.end._2)), o = Co(bo(t.start._2)(t.end._2))(bo(n.start._2)(n.end._2));
  return r < o ? T("Just", { position: J(t.start._1, (r + o) / 2), crossingEdge: e }) : v;
}, Rb = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return v;
  const r = bo(Co(t.start._1)(t.end._1))(Co(n.start._1)(n.end._1)), o = Co(bo(t.start._1)(t.end._1))(bo(n.start._1)(n.end._1));
  return r < o ? T("Just", { position: J((r + o) / 2, t.start._2), crossingEdge: e }) : v;
}, Fb = (t) => (n) => (e) => {
  if (t.direction === "H")
    return Rb(t)(n)(e);
  if (t.direction === "V")
    return Pb(t)(n)(e);
  l();
}, Gb = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : Et(r, e.length, e);
  return xt(n.segments)((i) => xt(o)((s) => Tt((u) => Fb(i)(u)(s.edge))(dt(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, Ib = (t) => (n) => (e) => n.start._1 > Co(t.start._1)(t.end._1) && n.start._1 < bo(t.start._1)(t.end._1) && t.start._2 > Co(n.start._2)(n.end._2) && t.start._2 < bo(n.start._2)(n.end._2) ? T("Just", { position: J(n.start._1, t.start._2), crossingEdge: e }) : v, Bb = (t) => (n) => xt(dt((e) => e.direction === "H", t.segments))((e) => xt(n)((r) => Tt((o) => Ib(e)(o)(r.edge))(dt(
  (o) => o.direction === "V",
  r.segments
)))), Sp = (t) => (n) => (e) => [
  ...Bb(n)(dt((r) => r.edge !== n.edge, e)),
  ...Gb(t)(n)(e)
], Lp = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Db = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), qa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, zb = /* @__PURE__ */ ap(R), Jr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, X1 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, Af = (t) => (e) => {
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
    l();
  }
  return i;
}, Hb = /* @__PURE__ */ dn(st)(Mt), Ob = (t) => (n) => te(R.compare, jn, t, n), Ep = /* @__PURE__ */ qt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), Wb = (t) => N((n) => (e) => ({
  base: (() => {
    const r = (o) => (i) => {
      let s = o, u = i, a = !0, c;
      for (; a; ) {
        const f = s, _ = u;
        if (_.tag === "Nil") {
          a = !1, c = f;
          continue;
        }
        if (_.tag === "Cons") {
          s = Lp(f)(_._1), u = _._2;
          continue;
        }
        l();
      }
      return c;
    };
    return (n.base + r(0)((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, Lt("Cons", i._4, o(i._6, s)));
        l();
      };
      return o(e, X);
    })()) | 0) + 1 | 0;
  })(),
  result: [
    ...n.result,
    (() => {
      if (n.base === 0)
        return e;
      const r = (o) => {
        if (o.tag === "Leaf")
          return z;
        if (o.tag === "Node")
          return cn("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        l();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, Qb = (t) => (n) => {
  const e = Db(t);
  return zb(t)(Ep(dt((r) => qa(r.src)(e) && qa(r.tgt)(e), n)));
}, qb = (t) => (n) => {
  const e = N((o) => (i) => Ot(R)(Jn)(i.tgt)([i.src])(Ot(R)(Jn)(i.src)([
    i.tgt
  ])(o)))(z)(n), r = (o) => (i) => (s) => {
    let u = o, a = i, c = s, f = !0, _;
    for (; f; ) {
      const d = u, g = a, p = c, m = Bt((h) => v, (h) => ($) => T("Just", { head: h, tail: $ }), d);
      if (m.tag === "Nothing") {
        f = !1, _ = { nodes: p };
        continue;
      }
      if (m.tag === "Just") {
        if (qa(m._1.head)(g)) {
          u = m._1.tail, a = g, c = p;
          continue;
        }
        u = [
          ...m._1.tail,
          ...(() => {
            const h = Jr(m._1.head)(e);
            if (h.tag === "Nothing")
              return [];
            if (h.tag === "Just")
              return h._1;
            l();
          })()
        ], a = rt(R)(m._1.head)()(g), c = [...p, m._1.head];
        continue;
      }
      l();
    }
    return _;
  };
  return N((o) => (i) => {
    if (qa(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: N((u) => (a) => rt(R)(a)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: z, components: [] })(t).components;
}, Mb = (t) => (n) => (e) => {
  const r = N((i) => (s) => Ot(R)(En)(s.tgt)(1)(i))(z)(n), o = N((i) => (s) => Ot(R)(En)(s.src)(1)(i))(z)(n);
  return N((i) => (s) => {
    const u = Jr(s)(r), a = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      l();
    })();
    if ((() => {
      const y = Jr(s)(o);
      return (() => {
        if (y.tag === "Nothing")
          return a !== 0;
        if (y.tag === "Just")
          return a !== y._1;
        l();
      })() || a === 0;
    })())
      return i;
    const c = Jr(s)(i.layers), f = (() => {
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      l();
    })(), _ = i.layers, d = N((y) => (x) => x.tgt === s ? {
      ...y,
      mIn: X1(y.mIn)((() => {
        const w = Jr(s)(_), C = Jr(x.src)(_);
        return (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          l();
        })() - (() => {
          if (C.tag === "Nothing")
            return 0;
          if (C.tag === "Just")
            return C._1;
          l();
        })() | 0;
      })())
    } : x.src === s ? {
      ...y,
      mOut: X1(y.mOut)((() => {
        const w = Jr(x.tgt)(_), C = Jr(s)(_);
        return (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          l();
        })() - (() => {
          if (C.tag === "Nothing")
            return 0;
          if (C.tag === "Just")
            return C._1;
          l();
        })() | 0;
      })())
    } : y)({ mIn: 1e9, mOut: 1e9 })(n), g = d.mIn === 1e9 ? -1 : d.mIn, p = d.mOut === 1e9 ? -1 : d.mOut;
    if (g < 0 || p < 0)
      return i;
    const m = (f - g | 0) + 1 | 0, h = (f + p | 0) - 1 | 0;
    if (h < m)
      return i;
    const $ = N((y) => (x) => {
      const w = Af(x)(i.filling), C = (() => {
        if (w.tag === "Nothing")
          return 0;
        if (w.tag === "Just")
          return w._1;
        l();
      })();
      return C < y.bestFill ? { best: x, bestFill: C } : y;
    })({
      best: f,
      bestFill: (() => {
        const y = Af(f)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        l();
      })()
    })(tn(m, h));
    return $.best === f ? i : {
      layers: rt(R)(s)($.best)(i.layers),
      filling: rt(st)(f)((() => {
        const y = Af(f)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        l();
      })())(rt(st)($.best)($.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: Hb(B((i) => J(
      i,
      N((s) => (u) => (() => {
        const a = Jr(u)(e);
        return a.tag === "Nothing" ? !1 : a.tag === "Just" && a._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(tn(
      0,
      N((i) => (s) => Lp(i)((() => {
        const u = Jr(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        l();
      })()))(0)(t)
    )))
  })(t).layers;
}, Xb = (t) => (n) => Mb(t)(Ep(n))(N(Ob)(z)(Wb(B((e) => Qb(e)(n))(qb(t)(n))))), Ub = (t) => t, ti = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Ma = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Ap = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), Yb = /* @__PURE__ */ Ub("NetworkSimplex"), Vb = (t) => (n) => N((e) => (r) => {
  const o = N(Ma)(0)(Tt((i) => ti(i)(e))(r));
  return N((i) => (s) => rt(R)(s)(o)(i))(e)(r);
})(n)(t), Kb = (t) => (n) => ({
  layers: B((e) => dt(
    (r) => {
      const o = ti(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(tn(
    0,
    ((r) => (o) => {
      let i = r, s = o, u = !0, a;
      for (; u; ) {
        const c = i, f = s;
        if (f.tag === "Nil") {
          u = !1, a = c;
          continue;
        }
        if (f.tag === "Cons") {
          i = Ma(c)(f._1), s = f._2;
          continue;
        }
        l();
      }
      return a;
    })(0)((() => {
      const r = (o, i) => {
        if (o.tag === "Leaf")
          return i;
        if (o.tag === "Node")
          return r(o._5, Lt("Cons", o._4, r(o._6, i)));
        l();
      };
      return r(n, X);
    })())
  )),
  nodeLayer: n
}), jb = (t) => (n) => (e) => {
  const r = N((o) => (i) => rt(R)(i)(!0)(o))(z)(n);
  return N((o) => (i) => rt(R)(i._1)(i._2)(o))(Xb(n)(Tt((o) => o.from.node === o.to.node || (() => {
    const i = ti(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    l();
  })() || (() => {
    const i = ti(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    l();
  })() ? v : T("Just", { src: o.from.node, tgt: o.to.node }))(t)))(Ap(e));
}, Zb = (t) => (n) => (e) => (r) => {
  const o = (a) => (c) => {
    const f = ti(c)(a);
    if (f.tag === "Just")
      return a;
    if (f.tag === "Nothing") {
      const _ = dt(
        (g) => g !== c,
        (() => {
          const g = ti(c)(t);
          if (g.tag === "Nothing")
            return [];
          if (g.tag === "Just")
            return g._1;
          l();
        })()
      ), d = N(o)(a)(_);
      return rt(R)(c)(1 + N(Ma)(0)(Tt((g) => ti(g)(d))(_)) | 0)(d);
    }
    l();
  }, i = N(o)(z)(e), u = ((a) => (c) => {
    let f = a, _ = c, d = !0, g;
    for (; d; ) {
      const p = f, m = _;
      if (m.tag === "Nil") {
        d = !1, g = p;
        continue;
      }
      if (m.tag === "Cons") {
        f = Ma(p)(m._1), _ = m._2;
        continue;
      }
      l();
    }
    return g;
  })(1)((() => {
    const a = (c, f) => {
      if (c.tag === "Leaf")
        return f;
      if (c.tag === "Node")
        return a(c._5, Lt("Cons", c._4, a(c._6, f)));
      l();
    };
    return a(i, X);
  })());
  return N((a) => (c) => rt(R)(c._1)(c._2)(a))((() => {
    const a = (c) => {
      if (c.tag === "Leaf")
        return z;
      if (c.tag === "Node")
        return cn("Node", c._1, c._2, c._3, u - c._4 | 0, a(c._5), a(c._6));
      l();
    };
    return a(i);
  })())(Ap(r));
}, tJ = /* @__PURE__ */ N((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return rt(R)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return rt(R)(n._1.node)(0)(t);
  }
  return t;
})(z), nJ = /* @__PURE__ */ N((t) => (n) => Ot(R)(Jn)(n.to.node)([n.from.node])(t))(z), eJ = /* @__PURE__ */ N((t) => (n) => Ot(R)(Jn)(n.from.node)([n.to.node])(t))(z), rJ = (t) => (n) => (e) => (r) => {
  const o = eJ(e), i = nJ(e), s = tJ(n);
  return Kb(r)(Vb(Tt((u) => u.tag === "SameLayer" ? T("Just", u._1.nodes) : v)(n))((() => {
    if (t === "LongestPath")
      return Zb(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return jb(e)(r)(s);
    l();
  })()));
}, oJ = /* @__PURE__ */ dn(R)(Mt), iJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, U1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Y1 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, eu = /* @__PURE__ */ dn(R)(Mt), sJ = /* @__PURE__ */ dn(R)(Mt), V1 = /* @__PURE__ */ (() => {
  const t = B((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => gn(t(n));
})(), uJ = (t) => (n) => (e) => (r) => {
  const o = oJ(B((s) => J(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = iJ(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return B((s) => {
    if (s.nodes.length <= 2) {
      const f = U1(s.edgeId)(o);
      if (f.tag === "Just") {
        const _ = i(s), d = nu(tu(_ ? V1(f._1.segments) : f._1.segments));
        return { ...f._1, edge: s.edgeId, segments: d, bends: Fn((g) => (p) => g.end, d, Et(1, d.length, d)), reversed: _ };
      }
      if (f.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      l();
    }
    const u = xt(Tt((f) => U1(f)(o))(Fn(
      (f) => (_) => s.edgeId + ":" + f + "->" + _,
      s.nodes,
      Et(1, s.nodes.length, s.nodes)
    )))((f) => f.segments), a = i(s), c = nu(tu(a ? V1(u) : u));
    return {
      edge: s.edgeId,
      segments: c,
      bends: Fn((f) => (_) => f.end, c, Et(1, c.length, c)),
      bendType: [],
      jumps: [],
      reversed: a
    };
  })(t);
}, aJ = { layers: [], edges: [], chains: [] }, cJ = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: Yb,
  cycleBreaker: tb,
  compactPostRouting: !0,
  compactionSpacings: eC
}, fJ = (t) => ({
  pos: J(0, 0),
  size: J(
    N((n) => (e) => Y1(n)(e.position._1 + e.size._1))(0)(t),
    N((n) => (e) => Y1(n)(e.position._2 + e.size._2))(0)(t)
  )
}), lJ = (t) => (n) => (e) => {
  const r = eu(B((c) => J(c.id, c.ports))(n.nodes)), o = dt((c) => Un(3)(c.node) !== "$d:", e.placements), i = uJ(e.withDummies.chains)(e.acyclic.reversedEdges)(sJ(B((c) => J(
    c.id,
    J(c.from.node, c.to.node)
  ))(n.edges)))(Ab(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)($p(e.ordered)(dt(
    (c) => c.from.node !== c.to.node,
    e.withDummies.edges
  ))((() => {
    const c = (f) => {
      if (f.tag === "Leaf")
        return z;
      if (f.tag === "Node")
        return cn("Node", f._1, f._2, f._3, J(f._4._1 * 4, f._4._2), c(f._5), c(f._6));
      l();
    };
    return c(eu(B((f) => J(f.id, f.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? iC()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = B((c) => {
    const f = nu(tu(c.segments));
    return { ...c, segments: f, bends: Fn((_) => (d) => _.end, f, Et(1, f.length, f)) };
  })(s.edges), a = qt((c) => (f) => ({ ...f, jumps: Sp(c)(f)(u) }))(u);
  return { nodes: s.nodes, edges: a, boundingBox: fJ(s.nodes), metrics: Uh(s.nodes)(a)(0) };
}, Pp = (t) => (n) => (e) => {
  const r = eu(B((i) => J(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: IC({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(eu(B((i) => J(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)($p(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return z;
        if (s.tag === "Node")
          return cn("Node", s._1, s._2, s._3, J(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        l();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: lJ(t)(n)(o) };
}, gJ = (t) => (n) => (e) => Pp(t)(n)({
  ...e,
  ordered: VC({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: eu(qt((r) => (o) => J(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), _J = (t) => (n) => (e) => gJ(t)(n)({
  ...e,
  withDummies: sC(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), dJ = (t) => (n) => {
  const e = B((o) => o.id)(n.nodes), r = sb(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return _J(t)(n)({
    acyclic: r,
    layered: rJ(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: aJ,
    ordered: [],
    placements: []
  });
}, d0 = /* @__PURE__ */ dn(R)(Mt), hJ = /* @__PURE__ */ dn(R)(Mt), pJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Er = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Ws = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Xa = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, mJ = (t) => (n) => {
  const e = n.result.nodes, r = d0(B((u) => J(u.node, u))(e)), o = hJ(B((u) => J(u.id, u))(t.edges)), i = B((u) => {
    const a = pJ(u.edge)(o);
    if (a.tag === "Just") {
      const c = Er(a._1.from.node)(r);
      if (c.tag === "Just") {
        const f = Er(a._1.to.node)(r);
        if (f.tag === "Just") {
          if (c._1.layer >= f._1.layer || u.jumps.length !== 0)
            return u;
          const _ = j(4), d = c._1.position._1 * _, g = (c._1.position._1 + c._1.size._1) * _, p = f._1.position._1 * _, m = (f._1.position._1 + f._1.size._1) * _, h = Ws(d)(p), $ = Xa(g)(m);
          if (h > $)
            return u;
          const y = (d + g) * 0.5, x = (p + m) * 0.5, w = Xa($)(Ws(h)(c._1.size._1 <= f._1.size._1 ? y : x)), C = (c._1.position._2 + c._1.size._2) * _, b = f._1.position._2 * _;
          return (() => {
            const k = a._1.from.node, E = a._1.to.node;
            return Cn(
              (S) => {
                const I = j(4);
                return S.node !== k && S.node !== E && w > S.position._1 * I && w < (S.position._1 + S.size._1) * I && S.position._2 * I < b && (S.position._2 + S.size._2) * I > C;
              },
              e
            );
          })() ? u : {
            ...u,
            segments: [{ start: J(w, C), end: J(w, b), direction: mn }],
            bends: [],
            bendType: [],
            jumps: []
          };
        }
        if (f.tag === "Nothing")
          return u;
        l();
      }
      if (c.tag === "Nothing")
        return u;
      l();
    }
    if (a.tag === "Nothing")
      return u;
    l();
  })(n.result.edges), s = qt((u) => (a) => ({ ...a, jumps: Sp(u)(a)(i) }))(i);
  return { ...n, result: { ...n.result, edges: s, metrics: Uh(n.result.nodes)(s)(n.result.metrics.constraintViolations) } };
}, $J = (t) => (n) => (e) => {
  const r = e.result.nodes, o = d0(B((s) => J(s.node, s))(r)), i = e.result.boundingBox.size._1;
  return d0(Tt((s) => {
    const u = Er(s.id)(o);
    if (u.tag === "Just") {
      const a = Er(s.id)(e.pipeline.layered.nodeLayer);
      if (a.tag === "Just") {
        const c = a._1, f = Tt((d) => {
          if (d.from.node === s.id) {
            const g = Er(d.to.node)(e.pipeline.layered.nodeLayer);
            if (g.tag === "Just")
              return g._1 <= c ? v : Er(d.to.node)(o);
            if (g.tag === "Nothing")
              return v;
            l();
          }
          if (d.to.node === s.id) {
            const g = Er(d.from.node)(e.pipeline.layered.nodeLayer);
            if (g.tag === "Just")
              return g._1 >= c ? v : Er(d.from.node)(o);
            if (g.tag === "Nothing")
              return v;
            l();
          }
          return v;
        })(n.edges);
        if (f.length < 2)
          return v;
        const _ = Bt(
          (d) => v,
          (d) => (g) => T("Just", { head: d, tail: g }),
          B((d) => d.position._1 + d.size._1 * 0.5)(f)
        );
        if (_.tag === "Just") {
          const d = Ws(s.size._1)(N(Ws)(_._1.head)(_._1.tail) - N(Xa)(_._1.head)(_._1.tail) + 2), g = u._1.position._1, p = g + u._1.size._1, m = dt(
            (h) => {
              const $ = Er(h.node)(e.pipeline.layered.nodeLayer);
              return h.node !== s.id && ($.tag === "Nothing" ? !1 : $.tag === "Just" && $._1 === c);
            },
            r
          );
          return d > s.size._1 + 0.5 && d <= N((h) => ($) => $.position._1 >= p ? Xa(h)($.position._1 - j(t.nodeGap)) : h)(i)(m) - N((h) => ($) => $.position._1 + $.size._1 <= g ? Ws(h)($.position._1 + $.size._1 + j(t.nodeGap)) : h)(0)(m) ? T("Just", J(s.id, J(d, s.size._2))) : v;
        }
        if (_.tag === "Nothing")
          return v;
        l();
      }
      if (a.tag === "Nothing")
        return v;
      l();
    }
    if (u.tag === "Nothing")
      return v;
    l();
  })(n.nodes));
}, yJ = (t) => (n) => {
  const e = dJ(t)(n), r = $J(t)(n)(e), o = mJ(n)(Pp(t)({
    ...n,
    nodes: B((i) => {
      const s = Er(i.id)(r);
      if (s.tag === "Just")
        return { ...i, size: s._1 };
      if (s.tag === "Nothing")
        return i;
      l();
    })(n.nodes)
  })(e.pipeline));
  return r.tag === "Leaf" || N((i) => (s) => i + s.bends.length | 0)(0)(o.result.edges) >= N((i) => (s) => i + s.bends.length | 0)(0)(e.result.edges) ? e : o;
}, Rp = (t) => t, Fp = /* @__PURE__ */ Rp("RunText"), vJ = /* @__PURE__ */ Rp("RunCode"), Gp = (t) => (n) => (e) => n.length === 0 ? e : kt(e)({ style: t, text: Po(n) }), xJ = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return vJ;
    if (t.style === "RunCode")
      return Fp;
    l();
  })(),
  buf: [],
  runs: Gp(t.style)(t.buf)(t.runs)
}), TJ = (t) => (n) => 0 < n.length ? { ...t, buf: kt(t.buf)(n[0]) } : { ...t, buf: kt(t.buf)("\\") }, wJ = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, a = Bt((c) => v, (c) => (f) => T("Just", { head: c, tail: f }), r);
    if (a.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (a.tag === "Just") {
      if (a._1.head === "\\") {
        e = TJ(s)(a._1.tail), r = Et(1, a._1.tail.length, a._1.tail);
        continue;
      }
      if (a._1.head === "`") {
        e = xJ(s), r = a._1.tail;
        continue;
      }
      e = { ...s, buf: kt(s.buf)(a._1.head) }, r = a._1.tail;
      continue;
    }
    l();
  }
  return i;
}, Ip = (t) => {
  const n = wJ({ style: Fp, buf: [], runs: [] })(qr(t));
  return Gp(n.style)(n.buf)(n.runs);
};
let Mu = null;
function NJ() {
  return Mu || (typeof document > "u" ? null : (Mu = document.createElement("canvas").getContext("2d"), Mu));
}
const K1 = /* @__PURE__ */ new Map(), CJ = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = K1.get(o);
  if (i !== void 0) return i;
  const s = NJ();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return K1.set(o, u), u;
}, bJ = Ao.traverse($i), JJ = /* @__PURE__ */ N(pr)(0), _i = /* @__PURE__ */ (() => {
  const t = sr(`\r
`)(" "), n = sr(`
`)(" "), e = (() => {
    const r = sr("\r")(" "), o = (() => {
      const i = sr("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Bp = (t) => (n) => {
  const e = bJ((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      l();
    })();
    return CJ(o.family)(o.size)(o.weight)(_i(r.text));
  })(Ip(_i(n)));
  return () => {
    const r = e();
    return JJ(r);
  };
}, kJ = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, SJ = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, Dp = { text: kJ, code: SJ }, LJ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Ei = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, EJ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, AJ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, PJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, j1 = (t) => Po(gn(Fr((n) => n === " ")(gn(Fr((n) => n === " ")(qr(t)).rest)).rest)), RJ = (t) => N((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? T("Just", e._1) : n)(v)(qt(Zn)(t)), h0 = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (xr(n) <= t)
    return [n];
  const e = qr(n), r = t < 1 ? [] : Et(0, t, e), o = RJ(r);
  if (o.tag === "Just") {
    const i = j1(Zg(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = j1(ts(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...h0(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = Zg(t)(n), s = ts(t)(n);
    return s === "" ? [i] : [i, ...h0(t)(s)];
  }
  l();
}, FJ = { cellW: 7, cellH: 3, maxLineWidth: 20 }, GJ = (t) => (n) => {
  const e = B((i) => J(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      l();
    })(),
    i
  ))(n.nodes), r = Ei(1)(ir(
    (EJ(t.maxLineWidth)(N((i) => (s) => Ei(i)(xr(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: B((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = xt(fo(`
`)(i._1))(h0(o)), u = N((c) => (f) => Ei(c)(xr(f)))(0)(s), a = i._2.shape === "Cylinder" ? Ei(1)(ir((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: J(
          j(u > o ? ir((u + 2 | 0) + t.cellW | 0, t.cellW) : a),
          j(Ei(1)(ir(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, IJ = (t) => (n) => (e) => ({
  ...e,
  nodes: B((r) => {
    const o = PJ(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: J(
          AJ(r.size._1)(j(Ei(1)(yn(vc(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    l();
  })(e.nodes)
}), Bc = (t) => t, BJ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, Oo = /* @__PURE__ */ Bc("TopSide"), Wo = /* @__PURE__ */ Bc("BottomSide"), Qo = /* @__PURE__ */ Bc("LeftSide"), qo = /* @__PURE__ */ Bc("RightSide"), DJ = (t) => {
  const n = ot.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    l();
  })(), r = ot.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  l();
}, Z1 = (t) => (n) => (e) => {
  const r = BJ(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * oe(DJ((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, ve = (t) => (n) => (e) => (r) => {
  let o = t, i = n, s = e, u = r, a = !0, c;
  for (; a; ) {
    const f = o, _ = i, d = s, g = u;
    if (f === "Rectangle") {
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
      o = Zr, i = _, s = d, u = g;
      continue;
    }
    if (f === "Cylinder") {
      if (d === "TopSide") {
        a = !1, c = Z1(_)(-1)(g);
        continue;
      }
      if (d === "BottomSide") {
        a = !1, c = Z1(_)(1)(g);
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
    o = Zr, i = _, s = d, u = g;
  }
  return c;
}, t_ = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, a = n.y - (t.y + t.h), c = a < 0 ? -a : a;
  return r <= c && r <= u && r <= i ? Oo : c <= u && c <= i ? Wo : u <= i ? Qo : qo;
}, zJ = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), Ml = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, ru = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, ou = /* @__PURE__ */ dn(R)(Mt), HJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, OJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, WJ = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), QJ = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), Dc = Ao.traverse($i), Ua = /* @__PURE__ */ dn(R)(Mt), qJ = (t) => (n) => te(R.compare, jn, t, n), MJ = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), XJ = /* @__PURE__ */ dn(R)(Mt), UJ = (t) => (n) => te(R.compare, jn, t, n), YJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, n_ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, VJ = (t) => (n) => ({
  ...n,
  edges: ou(B((e) => J(
    e._1,
    (() => {
      const r = Ml(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = ru(r._1._2)(n.nodes), i = ru(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Bt((a) => v, (a) => (c) => T("Just", { head: a, tail: c }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just")
              return [
                (() => {
                  const a = Bt((d) => v, (d) => (g) => T("Just", { head: d, tail: g }), u._1.tail), c = a.tag === "Just" ? T("Just", a._1.head) : v, f = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, _ = (() => {
                    if (c.tag === "Just") {
                      if ((c._1.x > u._1.head.x ? c._1.x - u._1.head.x < 0.5 : u._1.head.x - c._1.x < 0.5) && u._1.head.x >= f.x - 0.5 && u._1.head.x <= f.x + f.w + 0.5)
                        return c._1.y >= f.y + f.h ? T("Just", Wo) : c._1.y <= f.y ? T("Just", Oo) : v;
                      if ((c._1.y > u._1.head.y ? c._1.y - u._1.head.y < 0.5 : u._1.head.y - c._1.y < 0.5) && u._1.head.y >= f.y - 0.5 && u._1.head.y <= f.y + f.h + 0.5) {
                        if (c._1.x >= f.x + f.w)
                          return T("Just", qo);
                        if (c._1.x <= f.x)
                          return T("Just", Qo);
                      }
                      return v;
                    }
                    if (c.tag === "Nothing")
                      return v;
                    l();
                  })();
                  if (_.tag === "Just") {
                    if (_._1 === "TopSide")
                      return { ...u._1.head, y: ve(i._1.shape)(f)(Oo)(u._1.head.x) };
                    if (_._1 === "BottomSide")
                      return { ...u._1.head, y: ve(i._1.shape)(f)(Wo)(u._1.head.x) };
                    if (_._1 === "LeftSide")
                      return { ...u._1.head, x: ve(i._1.shape)(f)(Qo)(u._1.head.y) };
                    if (_._1 === "RightSide")
                      return { ...u._1.head, x: ve(i._1.shape)(f)(qo)(u._1.head.y) };
                    l();
                  }
                  if (_.tag === "Nothing") {
                    const d = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, g = t_(d)(u._1.head);
                    if (g === "TopSide")
                      return { ...u._1.head, y: ve(i._1.shape)(d)(Oo)(u._1.head.x) };
                    if (g === "BottomSide")
                      return { ...u._1.head, y: ve(i._1.shape)(d)(Wo)(u._1.head.x) };
                    if (g === "LeftSide")
                      return { ...u._1.head, x: ve(i._1.shape)(d)(Qo)(u._1.head.y) };
                    if (g === "RightSide")
                      return { ...u._1.head, x: ve(i._1.shape)(d)(qo)(u._1.head.y) };
                  }
                  l();
                })(),
                ...u._1.tail
              ];
          }
          l();
        })();
        if (o.tag === "Nothing")
          return s;
        if (o.tag === "Just") {
          const u = Ke(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return kt(u._1.init)((() => {
              const a = Ke(u._1.init), c = a.tag === "Just" ? T("Just", a._1.last) : v, f = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, _ = (() => {
                if (c.tag === "Just") {
                  if ((c._1.x > u._1.last.x ? c._1.x - u._1.last.x < 0.5 : u._1.last.x - c._1.x < 0.5) && u._1.last.x >= f.x - 0.5 && u._1.last.x <= f.x + f.w + 0.5)
                    return c._1.y >= f.y + f.h ? T("Just", Wo) : c._1.y <= f.y ? T("Just", Oo) : v;
                  if ((c._1.y > u._1.last.y ? c._1.y - u._1.last.y < 0.5 : u._1.last.y - c._1.y < 0.5) && u._1.last.y >= f.y - 0.5 && u._1.last.y <= f.y + f.h + 0.5) {
                    if (c._1.x >= f.x + f.w)
                      return T("Just", qo);
                    if (c._1.x <= f.x)
                      return T("Just", Qo);
                  }
                  return v;
                }
                if (c.tag === "Nothing")
                  return v;
                l();
              })();
              if (_.tag === "Just") {
                if (_._1 === "TopSide")
                  return { ...u._1.last, y: ve(o._1.shape)(f)(Oo)(u._1.last.x) };
                if (_._1 === "BottomSide")
                  return { ...u._1.last, y: ve(o._1.shape)(f)(Wo)(u._1.last.x) };
                if (_._1 === "LeftSide")
                  return { ...u._1.last, x: ve(o._1.shape)(f)(Qo)(u._1.last.y) };
                if (_._1 === "RightSide")
                  return { ...u._1.last, x: ve(o._1.shape)(f)(qo)(u._1.last.y) };
                l();
              }
              if (_.tag === "Nothing") {
                const d = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, g = t_(d)(u._1.last);
                if (g === "TopSide")
                  return { ...u._1.last, y: ve(o._1.shape)(d)(Oo)(u._1.last.x) };
                if (g === "BottomSide")
                  return { ...u._1.last, y: ve(o._1.shape)(d)(Wo)(u._1.last.x) };
                if (g === "LeftSide")
                  return { ...u._1.last, x: ve(o._1.shape)(d)(Qo)(u._1.last.y) };
                if (g === "RightSide")
                  return { ...u._1.last, x: ve(o._1.shape)(d)(qo)(u._1.last.y) };
              }
              l();
            })());
        }
      }
      l();
    })()
  ))(zJ(n.edges)))
}), KJ = (t) => (n) => (e) => {
  const r = Kt((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return Ml(e)(n);
  l();
}, jJ = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = ru(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    l();
  })(),
  shape: (() => {
    const o = ru(r.node)(e);
    if (o.tag === "Nothing")
      return Zr;
    if (o.tag === "Just")
      return o._1;
    l();
  })()
}), ZJ = (t) => ({ id: t, size: J(1, 1), ports: [], label: T("Just", t), shape: Zr }), t3 = (t) => (n) => (e) => (r) => J(r.node, jJ(t)(n)(e)(r)), zp = (t) => {
  const n = fo(`
`)(t);
  return n.length === 0 ? [""] : n;
}, Hp = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, Lt("Cons", e._4, n(e._6, r)));
    l();
  };
  return nn(Sn.foldr, n(t.interiors, X));
}, n3 = (t) => ou(Tt((n) => T(
  "Just",
  J(n.edge, { id: n.edge, from: { node: n.from, port: v }, to: { node: n.to, port: v }, label: v })
))(xt(t.scenes)((n) => n.tag === "DataFlow" ? Tt((e) => e.kind.tag === "SendToken" ? T("Just", e.kind._1) : v)(n._1.events) : []))), Op = (t) => {
  const n = Kv(t), e = dt((o) => HJ(o.id)(n.nodes), t.graph.nodes), r = dt((o) => OJ(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...B(ZJ)(nn(
        Re.foldr,
        hr(R.compare, n.nodes, WJ(B((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...Tt(KJ(t)(n3(t)))(nn(
        Re.foldr,
        hr(R.compare, n.edges, QJ(B((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, e3 = (t) => {
  const n = Dc((e) => {
    const r = Bp(Dp)((() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      l();
    })());
    return () => {
      const o = r();
      return J(e.id, o);
    };
  })(Op(t).nodes);
  return () => {
    const e = n();
    return Ua(e);
  };
}, Wp = (t) => {
  const n = e3(t);
  return () => {
    const e = n(), r = Dc(Wp)(Hp(t))();
    return N(qJ)(e)(r);
  };
}, r3 = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...B((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  l();
}, o3 = (t) => (n) => J(n.edge, r3(t)(n)), i3 = (t) => (n) => (e) => (r) => ({
  nodes: Ua(B(t3(j(4) * t)(n)(e))(r.nodes)),
  edges: ou(B(o3(t))(r.edges)),
  chipExtras: z,
  edgeLabels: z
}), s3 = (t) => (n) => ({
  ...VJ(ou(B((e) => J(e.id, J(e.from.node, e.to.node)))(n.edges)))(i3(8)(Ua(B((e) => J(
    e.id,
    (() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      l();
    })()
  ))(n.nodes)))(Ua(B((e) => J(e.id, e.shape))(n.nodes)))(yJ(cJ)(n).result)),
  edgeLabels: ou(Tt((e) => e.label.tag === "Just" ? T("Just", J(e.id, e.label._1)) : v)(n.edges))
}), u3 = (t) => N((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return N((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return N((i) => (s) => rt(R)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return N((i) => (s) => rt(R)(s)()(i))(r)(o.kind._1.labels);
      l();
    })(n)(e._1.events);
  if (e.tag === "Hold" || e.tag === "EnterNode" || e.tag === "ExitNode" || e.tag === "StepScene")
    return n;
  l();
})(z)(t.scenes), a3 = (t) => {
  const n = Dc((e) => {
    const r = Bp(Dp)(e);
    return () => {
      const o = r();
      return J(e, { labelW: o, charCount: xr(_i(e)), lineCount: 1 });
    };
  })(nn(
    Re.foldr,
    MJ(xt(nn(Re.foldr, u3(t)))(zp))
  ));
  return () => {
    const e = n();
    return XJ(e);
  };
}, Qp = (t) => {
  const n = a3(t);
  return () => {
    const e = n(), r = Dc(Qp)(Hp(t))();
    return N(UJ)(e)(r);
  };
}, c3 = j(4) * 8, f3 = (t) => xt(t.scenes)((n) => {
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
  l();
}), l3 = (t) => (n) => (e) => {
  const r = (o) => {
    const i = Tt((s) => {
      const u = YJ(s)(t);
      return u.tag === "Just" ? T("Just", { w: u._1.labelW + 28, h: j(LJ(1)(u._1.lineCount)) * 13.2 + 12 }) : v;
    })(xt(o)(zp));
    return i.length === 0 ? v : T(
      "Just",
      { w: N(n_)(0)(B((s) => s.w)(i)), h: N(n_)(0)(B((s) => s.h)(i)) }
    );
  };
  return N((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = Ml(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const a = u._1;
        return Ot(R)(Jn)(i.kind._1.edge)(B((c) => ({ x: c.x + 14 + a.w, y: c.y - 6 - 8 - a.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = ru(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? Ot(R)(Jn)("__fill__:" + i.kind._1.node)((() => {
        const a = s._1.y - u._1.h - 14, c = s._1.x + s._1.w / 2, f = c - u._1.w / 2, _ = c + u._1.w / 2, d = s._1.y - 14;
        return [{ x: f, y: a }, { x: _, y: a }, { x: f, y: d }, { x: _, y: d }];
      })())(o) : o;
    }
    l();
  })(z)(f3(n));
}, zc = (t) => (n) => (e) => ({
  layout: (() => {
    const r = s3()(IJ(c3)(t)(GJ(FJ)(Op(e))));
    return { ...r, chipExtras: l3(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = zc(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return z;
      if (i.tag === "Node")
        return cn("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      l();
    };
    return o(e.interiors);
  })()
}), e_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, p0 = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const a = e_(u._3)(e), c = (() => {
            if (a.tag === "Just")
              return a._1;
            if (a.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            l();
          })(), f = c.vx + (180 * (u._4.x - c.x) - 22 * c.vx) * r, _ = c.vy + (180 * (u._4.y - c.y) - 22 * c.vy) * r;
          return rt(R)(u._3)({ x: c.x + f * r, y: c.y + _ * r, vx: f, vy: _ })(o(s, u._5));
        })(),
        u._6
      );
    l();
  }, i = o(z, n);
  return {
    springs: i,
    applied: (() => {
      const s = (u, a) => {
        if (a.tag === "Leaf")
          return u;
        if (a.tag === "Node")
          return s(
            (() => {
              const c = s(u, a._5), f = e_(a._3)(i);
              if (f.tag === "Just")
                return rt(R)(a._3)({ ...a._4, x: f._1.x, y: f._1.y })(c);
              if (f.tag === "Nothing")
                return rt(R)(a._3)(a._4)(c);
              l();
            })(),
            a._6
          );
        l();
      };
      return s(z, n);
    })()
  };
}, ut = (t, n) => ({ tag: "CatQueue", _1: t, _2: n }), g3 = (t) => {
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
          let a = s, c = u, f = !0, _;
          for (; f; ) {
            const d = a, g = c;
            if (g.tag === "Nil") {
              f = !1, _ = d;
              continue;
            }
            if (g.tag === "Cons") {
              a = Lt("Cons", g._1, d), c = g._2;
              continue;
            }
            l();
          }
          return _;
        })(X)(o._2),
        X
      );
      continue;
    }
    if (o._1.tag === "Cons") {
      e = !1, r = T("Just", J(o._1._1, ut(o._1._2, o._2)));
      continue;
    }
    l();
  }
  return r;
}, at = (t, n, e) => ({ tag: t, _1: n, _2: e }), gt = /* @__PURE__ */ at("CatNil"), _3 = (t) => (n) => {
  if (t.tag === "CatNil")
    return n;
  if (n.tag === "CatNil")
    return t;
  if (t.tag === "CatCons")
    return at("CatCons", t._1, ut(t._2._1, Lt("Cons", n, t._2._2)));
  l();
}, d3 = (t) => (n) => (e) => {
  const r = (i) => (s) => (u) => {
    let a = i, c = s, f = u, _ = !0, d;
    for (; _; ) {
      const g = a, p = c, m = f;
      if (m.tag === "Nil") {
        _ = !1, d = p;
        continue;
      }
      if (m.tag === "Cons") {
        a = g, c = g(p)(m._1), f = m._2;
        continue;
      }
      l();
    }
    return d;
  };
  return ((i) => (s) => {
    let u = i, a = s, c = !0, f;
    for (; c; ) {
      const _ = u, d = a, g = g3(_);
      if (g.tag === "Nothing") {
        c = !1, f = r((p) => (m) => m(p))(n)(d);
        continue;
      }
      if (g.tag === "Just") {
        u = g._1._2, a = Lt("Cons", t(g._1._1), d);
        continue;
      }
      l();
    }
    return f;
  })(e)(X);
}, h3 = (t) => {
  if (t.tag === "CatNil")
    return v;
  if (t.tag === "CatCons")
    return T("Just", J(t._1, t._2._1.tag === "Nil" && t._2._2.tag === "Nil" ? gt : d3(_3)(gt)(t._2)));
  l();
}, Z = (t, n) => ({ tag: "Free", _1: t, _2: n }), ft = (t, n, e) => ({ tag: t, _1: n, _2: e }), qp = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const o = n;
    if (o._1.tag === "Return") {
      const i = h3(o._2);
      if (i.tag === "Nothing") {
        e = !1, r = ft("Return", o._1._1);
        continue;
      }
      if (i.tag === "Just") {
        n = (() => {
          const s = i._1._1(o._1._1);
          return Z(
            s._1,
            (() => {
              if (s._2.tag === "CatNil")
                return i._1._2;
              if (i._1._2.tag === "CatNil")
                return s._2;
              if (s._2.tag === "CatCons")
                return at("CatCons", s._2._1, ut(s._2._2._1, Lt("Cons", i._1._2, s._2._2._2)));
              l();
            })()
          );
        })();
        continue;
      }
      l();
    }
    if (o._1.tag === "Bind") {
      e = !1, r = ft(
        "Bind",
        o._1._1,
        (i) => {
          const s = o._1._2(i);
          return Z(
            s._1,
            (() => {
              if (s._2.tag === "CatNil")
                return o._2;
              if (o._2.tag === "CatNil")
                return s._2;
              if (s._2.tag === "CatCons")
                return at("CatCons", s._2._1, ut(s._2._2._1, Lt("Cons", o._2, s._2._2._2)));
              l();
            })()
          );
        }
      );
      continue;
    }
    l();
  }
  return r;
}, p3 = (t) => (n) => {
  const e = n.Monad0(), r = e.Bind1().Apply0().Functor0();
  return (o) => n.tailRecM((i) => {
    const s = qp(i);
    if (s.tag === "Return")
      return r.map(Y$)(e.Applicative0().pure(s._1));
    if (s.tag === "Bind")
      return r.map(U0)(o(t.map(s._2)(s._1)));
    l();
  });
}, m3 = (t) => (n) => (e) => {
  const r = qp(e);
  if (r.tag === "Return")
    return n(r._1);
  if (r.tag === "Bind")
    return t(r._1)(r._2);
  l();
}, Xl = { Applicative0: () => di, Bind1: () => Mp }, $3 = { map: (t) => (n) => Mp.bind(n)((e) => di.pure(t(e))) }, Mp = {
  bind: (t) => (n) => Z(
    t._1,
    (() => {
      if (t._2.tag === "CatNil")
        return at("CatCons", n, ut(X, X));
      if (t._2.tag === "CatCons")
        return at(
          "CatCons",
          t._2._1,
          ut(
            t._2._2._1,
            Lt("Cons", at("CatCons", n, ut(X, X)), t._2._2._2)
          )
        );
      l();
    })()
  ),
  Apply0: () => Xp
}, Xp = {
  apply: (t) => (n) => {
    const e = (r) => Z(
      n._1,
      (() => {
        if (n._2.tag === "CatNil")
          return at("CatCons", (o) => di.pure(r(o)), ut(X, X));
        if (n._2.tag === "CatCons")
          return at(
            "CatCons",
            n._2._1,
            ut(
              n._2._2._1,
              Lt(
                "Cons",
                at("CatCons", (o) => di.pure(r(o)), ut(X, X)),
                n._2._2._2
              )
            )
          );
        l();
      })()
    );
    return Z(
      t._1,
      (() => {
        if (t._2.tag === "CatNil")
          return at("CatCons", e, ut(X, X));
        if (t._2.tag === "CatCons")
          return at(
            "CatCons",
            t._2._1,
            ut(
              t._2._2._1,
              Lt("Cons", at("CatCons", e, ut(X, X)), t._2._2._2)
            )
          );
        l();
      })()
    );
  },
  Functor0: () => $3
}, di = { pure: (t) => Z(ft("Return", t), gt), Apply0: () => Xp }, y3 = () => () => () => (t) => (n) => (e) => R$(e.type)(t) ? F$(e.type)(t)(e.value) : n(e), v3 = { map: (t) => (n) => ({ type: n.type, value: n.map(t)(n.value), map: n.map }) }, x3 = (t) => va("Data.Functor.Variant: pattern match failure [" + t.type + "]"), T3 = () => () => () => (t) => y3()()()(t)(x3);
var vi = (function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", a = "Fork", c = "Sequential", f = "Map", _ = "Apply", d = "Alt", g = "Cons", p = "Resume", m = "Release", h = "Finalizer", $ = "Finalized", y = "Forked";
  function x(G, F, H, U) {
    this.tag = G, this._1 = F, this._2 = H, this._3 = U;
  }
  function w(G) {
    var F = function(H, U, Y) {
      return new x(G, H, U, Y);
    };
    return F.tag = G, F;
  }
  function C(G) {
    return new x(n, void 0);
  }
  function b(G) {
    try {
      G();
    } catch (F) {
      setTimeout(function() {
        throw F;
      }, 0);
    }
  }
  function k(G, F, H) {
    try {
      return F(H());
    } catch (U) {
      return G(U);
    }
  }
  function E(G, F, H) {
    try {
      return F(H)();
    } catch (U) {
      return H(G(U))(), C;
    }
  }
  var S = (function() {
    var G = 1024, F = 0, H = 0, U = new Array(G), Y = !1;
    function M() {
      var tt;
      for (Y = !0; F !== 0; )
        F--, tt = U[H], U[H] = void 0, H = (H + 1) % G, tt();
      Y = !1;
    }
    return {
      isDraining: function() {
        return Y;
      },
      enqueue: function(tt) {
        var it;
        F === G && (it = Y, M(), Y = it), U[(H + F) % G] = tt, F++, Y || M();
      }
    };
  })();
  function I(G) {
    var F = {}, H = 0, U = 0;
    return {
      register: function(Y) {
        var M = H++;
        Y.onComplete({
          rethrow: !0,
          handler: function(tt) {
            return function() {
              U--, delete F[M];
            };
          }
        })(), F[M] = Y, U++;
      },
      isEmpty: function() {
        return U === 0;
      },
      killAll: function(Y, M) {
        return function() {
          if (U === 0)
            return M();
          var tt = 0, it = {};
          function nt(lt) {
            it[lt] = F[lt].kill(Y, function(pt) {
              return function() {
                delete it[lt], tt--, G.isLeft(pt) && G.fromLeft(pt) && setTimeout(function() {
                  throw G.fromLeft(pt);
                }, 0), tt === 0 && M();
              };
            })();
          }
          for (var ct in F)
            F.hasOwnProperty(ct) && (tt++, nt(ct));
          return F = {}, H = 0, U = 0, function(lt) {
            return new x(o, function() {
              for (var pt in it)
                it.hasOwnProperty(pt) && it[pt]();
            });
          };
        };
      }
    };
  }
  var W = 0, D = 1, O = 2, V = 3, et = 4, K = 5, q = 6;
  function A(G, F, H) {
    var U = 0, Y = W, M = H, tt = null, it = null, nt = null, ct = null, lt = null, pt = 0, At = 0, Pt = null, en = !0;
    function $t(_t) {
      for (var mt, St, Ft; ; )
        switch (mt = null, St = null, Ft = null, Y) {
          case O:
            Y = D;
            try {
              M = nt(M), ct === null ? nt = null : (nt = ct._1, ct = ct._2);
            } catch (bt) {
              Y = K, tt = G.left(bt), M = null;
            }
            break;
          case V:
            G.isLeft(M) ? (Y = K, tt = M, M = null) : nt === null ? Y = K : (Y = O, M = G.fromRight(M));
            break;
          case D:
            switch (M.tag) {
              case s:
                nt && (ct = new x(g, nt, ct)), nt = M._2, Y = D, M = M._1;
                break;
              case n:
                nt === null ? (Y = K, M = G.right(M._1)) : (Y = O, M = M._1);
                break;
              case o:
                Y = V, M = k(G.left, G.right, M._1);
                break;
              case i:
                Y = et, M = E(G.left, M._1, function(bt) {
                  return function() {
                    U === _t && (U++, S.enqueue(function() {
                      U === _t + 1 && (Y = V, M = bt, $t(U));
                    }));
                  };
                });
                return;
              case e:
                Y = K, tt = G.left(M._1), M = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                nt === null ? lt = new x(g, M, lt, it) : lt = new x(g, M, new x(g, new x(p, nt, ct), lt, it), it), nt = null, ct = null, Y = D, M = M._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                pt++, nt === null ? lt = new x(g, M, lt, it) : lt = new x(g, M, new x(g, new x(p, nt, ct), lt, it), it), nt = null, ct = null, Y = D, M = M._1;
                break;
              case a:
                Y = V, mt = A(G, F, M._2), F && F.register(mt), M._1 && mt.run(), M = G.right(mt);
                break;
              case c:
                Y = D, M = Q(G, F, M._1);
                break;
            }
            break;
          case K:
            if (nt = null, ct = null, lt === null)
              Y = q, M = it || tt || M;
            else
              switch (mt = lt._3, Ft = lt._1, lt = lt._2, Ft.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  it && it !== mt && pt === 0 ? Y = K : tt && (Y = D, M = Ft._2(G.fromLeft(tt)), tt = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case p:
                  it && it !== mt && pt === 0 || tt ? Y = K : (nt = Ft._1, ct = Ft._2, Y = O, M = G.fromRight(M));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  pt--, tt === null && (St = G.fromRight(M), lt = new x(g, new x(m, Ft._2, St), lt, mt), (it === mt || pt > 0) && (Y = D, M = Ft._3(St)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case m:
                  lt = new x(g, new x($, M, tt), lt, it), Y = D, it && it !== mt && pt === 0 ? M = Ft._1.killed(G.fromLeft(it))(Ft._2) : tt ? M = Ft._1.failed(G.fromLeft(tt))(Ft._2) : M = Ft._1.completed(G.fromRight(M))(Ft._2), tt = null, pt++;
                  break;
                case h:
                  pt++, lt = new x(g, new x($, M, tt), lt, it), Y = D, M = Ft._1;
                  break;
                case $:
                  pt--, Y = K, M = Ft._1, tt = Ft._2;
                  break;
              }
            break;
          case q:
            for (var Jt in Pt)
              Pt.hasOwnProperty(Jt) && (en = en && Pt[Jt].rethrow, b(Pt[Jt].handler(M)));
            Pt = null, it && tt ? setTimeout(function() {
              throw G.fromLeft(tt);
            }, 0) : G.isLeft(M) && en && setTimeout(function() {
              if (en)
                throw G.fromLeft(M);
            }, 0);
            return;
          case W:
            Y = D;
            break;
          case et:
            return;
        }
    }
    function It(_t) {
      return function() {
        if (Y === q)
          return en = en && _t.rethrow, _t.handler(M)(), function() {
          };
        var mt = At++;
        return Pt = Pt || {}, Pt[mt] = _t, function() {
          Pt !== null && delete Pt[mt];
        };
      };
    }
    function yt(_t, mt) {
      return function() {
        if (Y === q)
          return mt(G.right(void 0))(), function() {
          };
        var St = It({
          rethrow: !1,
          handler: function() {
            return mt(G.right(void 0));
          }
        })();
        switch (Y) {
          case W:
            it = G.left(_t), Y = q, M = it, $t(U);
            break;
          case et:
            it === null && (it = G.left(_t)), pt === 0 && (Y === et && (lt = new x(g, new x(h, M(_t)), lt, it)), Y = K, M = null, tt = null, $t(++U));
            break;
          default:
            it === null && (it = G.left(_t)), pt === 0 && (Y = K, M = null, tt = null);
        }
        return St;
      };
    }
    function Nt(_t) {
      return function() {
        var mt = It({
          rethrow: !1,
          handler: _t
        })();
        return Y === W && $t(U), mt;
      };
    }
    return {
      kill: yt,
      join: Nt,
      onComplete: It,
      isSuspended: function() {
        return Y === W;
      },
      run: function() {
        Y === W && (S.isDraining() ? $t(U) : S.enqueue(function() {
          $t(U);
        }));
      }
    };
  }
  function P(G, F, H, U) {
    var Y = 0, M = {}, tt = 0, it = {}, nt = new Error("[ParAff] Early exit"), ct = null, lt = t;
    function pt(It, yt, Nt) {
      var _t = yt, mt = null, St = null, Ft = 0, Jt = {}, bt, Wt;
      t: for (; ; )
        switch (bt = null, _t.tag) {
          case y:
            if (_t._3 === t && (bt = M[_t._1], Jt[Ft++] = bt.kill(It, function(Zt) {
              return function() {
                Ft--, Ft === 0 && Nt(Zt)();
              };
            })), mt === null)
              break t;
            _t = mt._2, St === null ? mt = null : (mt = St._1, St = St._2);
            break;
          case f:
            _t = _t._2;
            break;
          case _:
          case d:
            mt && (St = new x(g, mt, St)), mt = _t, _t = _t._1;
            break;
        }
      if (Ft === 0)
        Nt(G.right(void 0))();
      else
        for (Wt = 0, bt = Ft; Wt < bt; Wt++)
          Jt[Wt] = Jt[Wt]();
      return Jt;
    }
    function At(It, yt, Nt) {
      var _t, mt, St, Ft, Jt, bt;
      for (G.isLeft(It) ? (_t = It, mt = null) : (mt = It, _t = null); ; ) {
        if (St = null, Ft = null, Jt = null, bt = null, ct !== null)
          return;
        if (yt === null) {
          U(_t || mt)();
          return;
        }
        if (yt._3 !== t)
          return;
        switch (yt.tag) {
          case f:
            _t === null ? (yt._3 = G.right(yt._1(G.fromRight(mt))), mt = yt._3) : yt._3 = _t;
            break;
          case _:
            if (St = yt._1._3, Ft = yt._2._3, _t) {
              if (yt._3 = _t, Jt = !0, bt = tt++, it[bt] = pt(nt, _t === St ? yt._2 : yt._1, function() {
                return function() {
                  delete it[bt], Jt ? Jt = !1 : Nt === null ? At(_t, null, null) : At(_t, Nt._1, Nt._2);
                };
              }), Jt) {
                Jt = !1;
                return;
              }
            } else {
              if (St === t || Ft === t)
                return;
              mt = G.right(G.fromRight(St)(G.fromRight(Ft))), yt._3 = mt;
            }
            break;
          case d:
            if (St = yt._1._3, Ft = yt._2._3, St === t && G.isLeft(Ft) || Ft === t && G.isLeft(St))
              return;
            if (St !== t && G.isLeft(St) && Ft !== t && G.isLeft(Ft))
              _t = mt === St ? Ft : St, mt = null, yt._3 = _t;
            else if (yt._3 = mt, Jt = !0, bt = tt++, it[bt] = pt(nt, mt === St ? yt._2 : yt._1, function() {
              return function() {
                delete it[bt], Jt ? Jt = !1 : Nt === null ? At(mt, null, null) : At(mt, Nt._1, Nt._2);
              };
            }), Jt) {
              Jt = !1;
              return;
            }
            break;
        }
        Nt === null ? yt = null : (yt = Nt._1, Nt = Nt._2);
      }
    }
    function Pt(It) {
      return function(yt) {
        return function() {
          delete M[It._1], It._3 = yt, At(yt, It._2._1, It._2._2);
        };
      };
    }
    function en() {
      var It = D, yt = H, Nt = null, _t = null, mt, St;
      t: for (; ; )
        switch (mt = null, St = null, It) {
          case D:
            switch (yt.tag) {
              case f:
                Nt && (_t = new x(g, Nt, _t)), Nt = new x(f, yt._1, t, t), yt = yt._2;
                break;
              case _:
                Nt && (_t = new x(g, Nt, _t)), Nt = new x(_, t, yt._2, t), yt = yt._1;
                break;
              case d:
                Nt && (_t = new x(g, Nt, _t)), Nt = new x(d, t, yt._2, t), yt = yt._1;
                break;
              default:
                St = Y++, It = K, mt = yt, yt = new x(y, St, new x(g, Nt, _t), t), mt = A(G, F, mt), mt.onComplete({
                  rethrow: !1,
                  handler: Pt(yt)
                })(), M[St] = mt, F && F.register(mt);
            }
            break;
          case K:
            if (Nt === null)
              break t;
            Nt._1 === t ? (Nt._1 = yt, It = D, yt = Nt._2, Nt._2 = t) : (Nt._2 = yt, yt = Nt, _t === null ? Nt = null : (Nt = _t._1, _t = _t._2));
        }
      for (lt = yt, St = 0; St < Y; St++)
        M[St].run();
    }
    function $t(It, yt) {
      ct = G.left(It);
      var Nt;
      for (var _t in it)
        if (it.hasOwnProperty(_t)) {
          Nt = it[_t];
          for (_t in Nt)
            Nt.hasOwnProperty(_t) && Nt[_t]();
        }
      it = null;
      var mt = pt(It, lt, yt);
      return function(St) {
        return new x(i, function(Ft) {
          return function() {
            for (var Jt in mt)
              mt.hasOwnProperty(Jt) && mt[Jt]();
            return C;
          };
        });
      };
    }
    return en(), function(It) {
      return new x(i, function(yt) {
        return function() {
          return $t(It, yt);
        };
      });
    };
  }
  function Q(G, F, H) {
    return new x(i, function(U) {
      return function() {
        return P(G, F, H, U);
      };
    });
  }
  return x.EMPTY = t, x.Pure = w(n), x.Throw = w(e), x.Catch = w(r), x.Sync = w(o), x.Async = w(i), x.Bind = w(s), x.Bracket = w(u), x.Fork = w(a), x.Seq = w(c), x.ParMap = w(f), x.ParApply = w(_), x.ParAlt = w(d), x.Fiber = A, x.Supervisor = I, x.Scheduler = S, x.nonCanceler = C, x;
})();
const w3 = vi.Pure;
vi.Throw;
function ni(t) {
  return function(n) {
    return vi.Bind(t, n);
  };
}
const ei = vi.Sync, N3 = vi.Async;
function Ul(t, n) {
  return function() {
    return vi.Fiber(t, null, n);
  };
}
vi.Seq;
const Yl = {
  isLeft: (t) => {
    if (t.tag === "Left")
      return !0;
    if (t.tag === "Right")
      return !1;
    l();
  },
  fromLeft: (t) => {
    if (t.tag === "Left")
      return t._1;
    if (t.tag === "Right")
      return va("unsafeFromLeft: Right");
    l();
  },
  fromRight: (t) => {
    if (t.tag === "Right")
      return t._1;
    if (t.tag === "Left")
      return va("unsafeFromRight: Left");
    l();
  },
  left: H$,
  right: Gd
}, C3 = /* @__PURE__ */ (() => {
  const t = w3();
  return (n) => t;
})(), b3 = (t) => (n) => m3((e) => (r) => t({ type: e.type, value: e.map((o) => r(o))(e.value), map: e.map }))(n), J3 = (t) => {
  const n = t.Bind1(), e = t.Applicative0().pure;
  return (r) => {
    const o = A$(() => b3((s) => n.bind(r(s))(o()))(e));
    return o();
  };
};
let Pf = null;
function k3() {
  return Pf || (typeof document > "u" ? null : Pf = document.createElement("canvas").getContext("2d"));
}
const Rf = /* @__PURE__ */ new Map();
function Up(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Rf.has(u)) return Rf.get(u);
  const a = k3();
  if (!a) return i;
  a.font = s;
  const c = o(a.measureText(r)), f = typeof document < "u" ? document.fonts : null;
  if (!f || f.check(s)) Rf.set(u, c);
  else if (f && f.load)
    try {
      f.load(s);
    } catch {
    }
  return c;
}
const S3 = (t, n, e, r) => Up(t, n, e, r, (o) => o.width, -1), L3 = (t, n, e, r) => Up(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), Ya = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Yp = (t) => t, Vp = {
  map: (t) => (n) => {
    if (n.tag === "MeasureText")
      return Ya("MeasureText", n._1, n._2, (e) => t(n._3(e)));
    if (n.tag === "MeasureInk")
      return Ya("MeasureInk", n._1, n._2, (e) => t(n._3(e)));
    l();
  }
}, Vl = (t) => (n) => {
  const e = S3(t.family, t.size, t.weight, _i(n));
  return e < 0 ? j($s(n).length) * t.size * 0.62 : e;
}, Kl = (t) => (n) => {
  const e = L3(t.family, t.size, t.weight, _i(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, E3 = (t) => (n) => Z(
  ft(
    "Bind",
    { type: "metrics", value: Ya("MeasureInk", t, n, Yp), map: Vp.map },
    (e) => Z(ft("Return", e), gt)
  ),
  gt
), yu = (t) => (n) => Z(
  ft(
    "Bind",
    { type: "metrics", value: Ya("MeasureText", t, n, Yp), map: Vp.map },
    (e) => Z(ft("Return", e), gt)
  ),
  gt
), Kp = (t) => t, jp = (t) => t, Hc = (t) => t, Zp = (t) => t, tm = (t) => t, Yt = (t, n, e, r, o) => ({ tag: t, _1: n, _2: e, _3: r, _4: o }), nm = (t) => t, jl = (t) => t, A3 = /* @__PURE__ */ jl("BaselineTop"), tr = /* @__PURE__ */ jl("BaselineMiddle"), P3 = /* @__PURE__ */ jl("BaselineBottom"), os = /* @__PURE__ */ nm("AlignLeft"), lo = /* @__PURE__ */ nm("AlignCenter"), re = /* @__PURE__ */ tm("RoundJoin"), vu = /* @__PURE__ */ tm("MiterJoin"), ze = /* @__PURE__ */ Zp("ButtCap"), yr = /* @__PURE__ */ Zp("RoundCap"), R3 = /* @__PURE__ */ Hc("LayerPolyOut"), F3 = /* @__PURE__ */ Hc("LayerPolyIn"), G3 = /* @__PURE__ */ Hc("LayerNodeMask"), I3 = /* @__PURE__ */ Hc("LayerOverlay"), is = /* @__PURE__ */ jp("NonZero"), Zl = /* @__PURE__ */ jp("EvenOdd"), r_ = /* @__PURE__ */ Kp("Normal"), sa = /* @__PURE__ */ Kp("Difference"), bn = { r: 255, g: 255, b: 255, a: 255 }, iu = [5], Ln = {
  map: (t) => (n) => {
    if (n.tag === "FillPath")
      return Yt("FillPath", n._1, n._2, t(n._3));
    if (n.tag === "StrokePath")
      return Yt("StrokePath", n._1, n._2, t(n._3));
    if (n.tag === "FillStrokePath")
      return Yt("FillStrokePath", n._1, n._2, n._3, t(n._4));
    if (n.tag === "DrawText")
      return Yt("DrawText", n._1, t(n._2));
    if (n.tag === "DrawTextAffine")
      return Yt("DrawTextAffine", n._1, n._2, t(n._3));
    if (n.tag === "PushTransform")
      return Yt("PushTransform", n._1, t(n._2));
    if (n.tag === "PopTransform")
      return Yt("PopTransform", t(n._1));
    if (n.tag === "PushClip")
      return Yt("PushClip", n._1, n._2, t(n._3));
    if (n.tag === "PopClip")
      return Yt("PopClip", t(n._1));
    if (n.tag === "PushBlend")
      return Yt("PushBlend", n._1, t(n._2));
    if (n.tag === "PopBlend")
      return Yt("PopBlend", t(n._1));
    if (n.tag === "PushAlpha")
      return Yt("PushAlpha", n._1, t(n._2));
    if (n.tag === "PopAlpha")
      return Yt("PopAlpha", t(n._1));
    if (n.tag === "PushBlur")
      return Yt("PushBlur", n._1, t(n._2));
    if (n.tag === "PopBlur")
      return Yt("PopBlur", t(n._1));
    if (n.tag === "PushLayer")
      return Yt("PushLayer", n._1, t(n._2));
    if (n.tag === "PopLayer")
      return Yt("PopLayer", t(n._1));
    if (n.tag === "SetViewport")
      return Yt("SetViewport", n._1, t(n._2));
    if (n.tag === "ClearBackground")
      return Yt("ClearBackground", n._1, t(n._2));
    if (n.tag === "BackgroundDots")
      return Yt("BackgroundDots", n._1, t(n._2));
    l();
  }
}, Yr = { r: 26, g: 26, b: 26, a: 255 }, m0 = (t) => (n) => Math.imul(t, n), ys = (t) => {
  const n = t + 1831565813 | 0, e = m0(n ^ n >>> 15)(n | 1), r = e ^ (e + m0(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (j(o) + 4294967296) / 4294967296 : j(o) / 4294967296 };
}, qn = (t) => (n) => (e) => {
  const r = ys(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, $0 = (t) => (n) => N((e) => (r) => m0(e ^ r)(-2048144789))(n)(B(Ir)(qr(t))), B3 = (t) => t, em = (t) => t, D3 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, He = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, rm = (t) => (n) => (e) => {
  const r = st.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = st.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, y0 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, z3 = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, H3 = /* @__PURE__ */ em("FlatLevel"), O3 = /* @__PURE__ */ em("NestedLevel"), tg = /* @__PURE__ */ B3("GenieSilhouette"), W3 = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = ys(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, Q3 = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = ys(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, o_ = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = oe(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = oe(D3(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, a = t.cy + i * e / o, c = { x: u - s * e / o, y: a + s * r / o }, f = { x: u + s * e / o, y: a - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : c.y < f.y ? c : f;
}, Qi = (t) => (n) => {
  const e = He(n)(He(t.w / 2)(t.h / 2));
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
}, q3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = ys(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, om = (t) => {
  const n = He(t.w)(t.h) / 2;
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
}, M3 = (t) => (n) => (e) => {
  const r = ys(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = rm(0)(o - 1 | 0)(yn(je(r.value * j(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, X3 = (t) => (n) => {
  const e = ys(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = rm(0)(r - 1 | 0)(yn(je(e.value * j(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, im = (t) => {
  const n = He(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, sm = (t) => [
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
], um = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, U3 = (t) => {
  const n = He(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
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
}, am = (t) => {
  const n = He(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
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
}, cm = (t) => (n) => {
  const e = n.y + n.h, r = Ly(t.rBase * n.h)(n.w / (2 * (1 + (j(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = y0(t.minN)(o <= 0 || i <= 0 ? t.minN : yn(Ue(o / i)) + 1 | 0), u = s >= 3 ? tn(1, s - 2 | 0) : [], a = u.length, c = ir(a + 1 | 0, 2), f = c < 1 ? [] : Et(0, c, u), _ = X3(t.seed)((() => {
    const h = a - c | 0;
    return h < 1 ? u : Et(h, u.length, u);
  })()), d = _.idx, g = M3(_.prng)(dt((h) => h !== d, f))(y0(1)(f.length - (Ce(Jo)(d)(f) ? 1 : 0) | 0)), p = g.idx, m = s >= 2 ? o / (j(s) - 1) : 0;
  return N((h) => ($) => {
    const y = $ === p, x = $ === d, w = $ === 0 || $ === (s - 1 | 0), C = q3(h.prng)(w)(x)(y)(r)(t), b = W3(C.prng)(w)(t)(n.h), k = Q3(b.prng)(w)(t)(m);
    return {
      prng: k.prng,
      circles: kt(h.circles)({
        cx: n.x + z3(C.r)(n.w - C.r)((s >= 2 ? r + j($) / (j(s) - 1) * o + k.dx : r + 0 * o + k.dx) + (x ? t.heroShift * m : y ? -1 * t.smallShift * m : 0)),
        cy: e - b.yLift,
        r: C.r
      })
    };
  })({ prng: g.prng, circles: [] })(tn(0, s - 1 | 0)).circles;
}, fm = (t) => (n) => {
  const e = t.length;
  return qt((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? o_(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? o_(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, lm = (t) => {
  const n = He(t.h * 0.4)(t.w * 0.2);
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
}, Y3 = (t) => (n) => (e) => {
  const r = jo(n.y - t.cy)(n.x - t.cx), o = jo(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = y0(1)(yn(vc(i / 1.5707963267948966))), u = i / j(s), a = 1.3333333333333333 * Ey(u / 4);
  return xt(tn(0, s - 1 | 0))((c) => {
    const f = r + j(c + 1 | 0) * u, _ = t.cx + t.r * de(f), d = t.cy + t.r * Ne(f), g = r + j(c) * u;
    return [
      4,
      t.cx + t.r * de(g) - a * t.r * Ne(g),
      t.cy + t.r * Ne(g) + a * t.r * de(g),
      _ + a * t.r * Ne(f),
      d - a * t.r * de(f),
      _,
      d
    ];
  });
}, gm = (t) => (n) => {
  const e = t.h * 0.38, r = fm(cm(um)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = He(n)(He(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...xt(r)((i) => Y3(i.c)(i.p1)(i.p2)),
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
  ] : Qi(t)(n);
}, Ff = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
    const s = am(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      l();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    l();
  }
  if (n === "Parallelogram") {
    const s = im(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      l();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    l();
  }
  if (n === "Diamond") {
    const s = lm(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      l();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    l();
  }
  if (n === "Ellipse") {
    const s = om(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      l();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    l();
  }
  if (n === "Document") {
    const s = sm(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      l();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    l();
  }
  if (n === "Cloud") {
    const s = gm(e)(r);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      l();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    l();
  }
  return t.drawRoundedRect(e)(r)(o)(i);
}, V3 = {
  fillPath: (t) => (n) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("FillPath", t, n, void 0), map: Ln.map },
      (e) => Z(ft("Return", e), gt)
    ),
    gt
  ),
  strokePath: (t) => (n) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("StrokePath", t, n, void 0), map: Ln.map },
      (e) => Z(ft("Return", e), gt)
    ),
    gt
  ),
  fillStrokePath: (t) => (n) => (e) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("FillStrokePath", t, n, e, void 0), map: Ln.map },
      (r) => Z(ft("Return", r), gt)
    ),
    gt
  ),
  drawRoundedRect: (t) => (n) => (e) => (r) => {
    if (e.tag === "Just") {
      if (r.tag === "Just")
        return Z(
          ft(
            "Bind",
            {
              type: "render",
              value: Yt("FillStrokePath", Qi(t)(n), e._1, r._1, void 0),
              map: Ln.map
            },
            (o) => Z(ft("Return", o), gt)
          ),
          gt
        );
      if (r.tag === "Nothing")
        return Z(
          ft(
            "Bind",
            {
              type: "render",
              value: Yt("FillPath", Qi(t)(n), e._1, void 0),
              map: Ln.map
            },
            (o) => Z(ft("Return", o), gt)
          ),
          gt
        );
      l();
    }
    if (e.tag === "Nothing") {
      if (r.tag === "Just")
        return Z(
          ft(
            "Bind",
            {
              type: "render",
              value: Yt("StrokePath", Qi(t)(n), r._1, void 0),
              map: Ln.map
            },
            (o) => Z(ft("Return", o), gt)
          ),
          gt
        );
      if (r.tag === "Nothing")
        return Z(ft("Return", void 0), gt);
    }
    l();
  },
  drawText: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("DrawText", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  drawTextAffine: (t) => (n) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("DrawTextAffine", t, n, void 0), map: Ln.map },
      (e) => Z(ft("Return", e), gt)
    ),
    gt
  ),
  pushTransform: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PushTransform", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  popTransform: Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PopTransform", void 0), map: Ln.map },
      (t) => Z(ft("Return", t), gt)
    ),
    gt
  ),
  pushBakedTransform: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PushTransform", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  popBakedTransform: Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PopTransform", void 0), map: Ln.map },
      (t) => Z(ft("Return", t), gt)
    ),
    gt
  ),
  pushClip: (t) => (n) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PushClip", t, n, void 0), map: Ln.map },
      (e) => Z(ft("Return", e), gt)
    ),
    gt
  ),
  popClip: Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PopClip", void 0), map: Ln.map },
      (t) => Z(ft("Return", t), gt)
    ),
    gt
  ),
  pushBlend: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PushBlend", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  popBlend: Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PopBlend", void 0), map: Ln.map },
      (t) => Z(ft("Return", t), gt)
    ),
    gt
  ),
  pushAlpha: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PushAlpha", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  popAlpha: Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PopAlpha", void 0), map: Ln.map },
      (t) => Z(ft("Return", t), gt)
    ),
    gt
  ),
  pushBlur: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PushBlur", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  popBlur: Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PopBlur", void 0), map: Ln.map },
      (t) => Z(ft("Return", t), gt)
    ),
    gt
  ),
  pushLayer: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PushLayer", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  popLayer: Z(
    ft(
      "Bind",
      { type: "render", value: Yt("PopLayer", void 0), map: Ln.map },
      (t) => Z(ft("Return", t), gt)
    ),
    gt
  ),
  setViewport: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("SetViewport", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  clearBackground: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("ClearBackground", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  backgroundDots: (t) => Z(
    ft(
      "Bind",
      { type: "render", value: Yt("BackgroundDots", t, void 0), map: Ln.map },
      (n) => Z(ft("Return", n), gt)
    ),
    gt
  ),
  measureText: (t) => (n) => yu(t)(n),
  measureInk: (t) => (n) => E3(t)(n),
  insideTokenStyle: (t) => Z(ft("Return", tg), gt),
  Monad0: () => Xl
}, K3 = (t) => () => t.clip("evenodd"), j3 = (t) => (n) => () => {
  t.filter = `blur(${n}px)`;
}, Z3 = (t) => (n) => () => {
  const e = n > 0 ? t.canvas.width / n : 1;
  t.setTransform(e, 0, 0, e, 0, 0);
}, tk = (t) => (n) => (e) => (r) => (o) => () => {
  const i = n > 0 ? t.canvas.width / n : 1;
  t.setTransform(
    i * e,
    0,
    0,
    i * e,
    i * r,
    i * o
  );
}, nk = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().translateSelf(n.ox, n.oy).scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, v0 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, ng = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = Vy(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, ek = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = bc(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, xu = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = nl(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, Oc = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = jd(t)((() => {
        const c = i + 1 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })())((() => {
        const c = i + 2 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })()), a = r(i + 3 | 0);
      return () => (u(), a());
    }
    if (s === 2) {
      const u = Es(t)((() => {
        const c = i + 1 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })())((() => {
        const c = i + 2 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })()), a = r(i + 3 | 0);
      return () => (u(), a());
    }
    if (s === 3) {
      const u = As(t)({
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
      const u = ov(t)({
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
      const u = Zd(t), a = r(i + 1 | 0);
      return () => (u(), a());
    }
    return () => {
    };
  }, o = Kd(t);
  return () => (o(), r(0)());
}, rk = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = v0(i)(v0(r / 2)(o / 2)), u = jd(t)(n + s)(e);
  return () => (u(), Es(t)(n + r - s)(e)(), As(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), Es(t)(n + r)(e + o - s)(), As(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), Es(t)(n + s)(e + o)(), As(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), Es(t)(n)(e + s)(), As(t)({ cpx: n, cpy: e, x: n + s, y: e })(), Zd(t)());
}, ok = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), _m = (t) => (n) => {
  const e = ol(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = ok();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 }, groupAlpha: { value: 1 }, alphaSaves: { value: [] } };
  };
}, ik = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, sk = (t) => fn(t.weight) + " " + Vo(t.size) + "px " + t.family, Or = (t) => {
  const n = Vo(j(t.a) / 255);
  return t.a >= 255 ? "rgb(" + fn(t.r) + "," + fn(t.g) + "," + fn(t.b) + ")" : "rgba(" + fn(t.r) + "," + fn(t.g) + "," + fn(t.b) + "," + n + ")";
}, uk = (t) => (n) => (e) => (r) => {
  const o = Sr(t);
  return () => (o(), Z3(t)(n.width)(), xu(t)(e)(Or(r))(), tv(t)({ x: 0, y: 0, width: n.width, height: n.height })(), Lr(t)(), e.font.value = "", e.fill.value = "", e.stroke.value = "");
}, ak = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", nk(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: Or(e.bgColor),
    dotCss: Or(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius,
    ox: e.origin.x,
    oy: e.origin.y
  })());
}, ck = (t) => (n) => (e) => (r) => {
  const o = xu(t)(n)(Or(r));
  return () => (o(), Oc(t)(e)(), rl(t)());
}, fk = (t) => (n) => (e) => (r) => (o) => {
  const i = xu(t)(n)(Or(r));
  return () => (i(), ng(t)(n)(Or(o.color))(), tl(t)(o.width)(), yl(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return gl;
    if (o.lineJoin === "BevelJoin")
      return ll;
    if (o.lineJoin === "MiterJoin")
      return _l;
    l();
  })())(), vl(t)((() => {
    if (o.lineCap === "ButtCap")
      return pl;
    if (o.lineCap === "RoundCap")
      return dl;
    if (o.lineCap === "SquareCap")
      return hl;
    l();
  })())(), Oc(t)(e)(), rl(t)(), el(t)());
}, lk = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Kd(t);
  return () => {
    if (s(), rk(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (xu(t)(n)(Or(o._1.color))(), rl(t)()) : o.tag === "Nothing" || l(), i.tag === "Just")
      return ng(t)(n)(Or(i._1.color))(), tl(t)(i._1.width)(), yl(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return gl;
        if (i._1.lineJoin === "BevelJoin")
          return ll;
        if (i._1.lineJoin === "MiterJoin")
          return _l;
        l();
      })())(), vl(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return pl;
        if (i._1.lineCap === "RoundCap")
          return dl;
        if (i._1.lineCap === "SquareCap")
          return hl;
        l();
      })())(), el(t)();
    i.tag !== "Nothing" && l();
  };
}, gk = (t) => (n) => (e) => (r) => {
  const o = ng(t)(n)(Or(r.color));
  return () => (o(), tl(t)(r.width)(), yl(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return gl;
    if (r.lineJoin === "BevelJoin")
      return ll;
    if (r.lineJoin === "MiterJoin")
      return _l;
    l();
  })())(), vl(t)((() => {
    if (r.lineCap === "ButtCap")
      return pl;
    if (r.lineCap === "RoundCap")
      return dl;
    if (r.lineCap === "SquareCap")
      return hl;
    l();
  })())(), Oc(t)(e)(), el(t)());
}, i_ = (t) => (n) => (e) => {
  const r = xu(t)(n)(Or(e.color));
  return () => (r(), ek(t)(n)(sk(e.font))(), $l(t)((() => {
    if (e.align === "AlignLeft")
      return av;
    if (e.align === "AlignCenter")
      return fl;
    if (e.align === "AlignRight")
      return cv;
    l();
  })())(), ml(t)((() => {
    if (e.baseline === "BaselineTop")
      return iv;
    if (e.baseline === "BaselineMiddle")
      return cl;
    if (e.baseline === "BaselineAlphabetic")
      return sv;
    if (e.baseline === "BaselineBottom")
      return uv;
    l();
  })())(), il(t)(e.content)(e.x)(e.y)());
}, dm = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => ik
}, _k = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => dm
}, dk = (t) => (n) => (e) => {
  const r = v0(n.width / e.vw)(n.height / e.vh);
  return tk(t)(n.width)(r)((n.width - e.vw * r) / 2 - e.vx * r)((n.height - e.vh * r) / 2 - e.vy * r);
}, hk = { pure: (t) => (n) => () => t, Apply0: () => dm }, hm = { Applicative0: () => hk, Bind1: () => _k }, eg = {
  fillPath: (t) => (n) => (e) => {
    const r = ck(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = gk(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = fk(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = lk(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = i_(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = Sr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", nv(e.ctx)(t)(), i_(e.ctx)(e.styleCache)(n)(), Lr(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = Sr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Kg(n.ctx)({ translateX: t.tx, translateY: t.ty })(), $a(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
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
    const e = Sr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Kg(n.ctx)({ translateX: t.tx, translateY: t.ty })(), $a(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
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
    const r = Sr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", Oc(e.ctx)(t)(), n === "NonZero")
          return Zy(e.ctx)();
        if (n === "EvenOdd")
          return K3(e.ctx)();
        l();
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
    const e = Sr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return jg(n.ctx)(fv)();
        if (t === "Difference")
          return jg(n.ctx)(lv)();
        l();
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
    const e = Sr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = n.groupAlpha.value, s = n.alphaSaves.value;
        n.alphaSaves.value = [...s, i];
        const u = i * t;
        return n.groupAlpha.value = u, jy(n.ctx)(u)();
      }
    };
  },
  popAlpha: (t) => {
    const n = Lr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0) {
        n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
        const o = t.alphaSaves.value, i = Ke(o);
        if (i.tag === "Just")
          return t.alphaSaves.value = i._1.init, t.groupAlpha.value = i._1.last;
        if (i.tag === "Nothing")
          return t.groupAlpha.value = 1;
        l();
      }
    };
  },
  pushBlur: (t) => (n) => {
    const e = Sr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = j3(n.ctx)(t);
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
    const e = dk(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = uk(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = ak(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = Vl(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = Kl(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => tg,
  Monad0: () => hm
}, pk = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, ss = (t) => (n) => (e) => {
  const r = pk(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, x0 = (t) => {
  const n = ot.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    l();
  })(), r = ot.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  l();
}, pm = (t) => {
  if (t.tag === "Retracted")
    return { lo: 0, hi: 0 };
  if (t.tag === "Extended")
    return { lo: 0, hi: 1 };
  if (t.tag === "Extending") {
    if (t._1 === "ExtendFromSource")
      return { lo: 0, hi: x0(t._2) };
    if (t._1 === "ExtendFromTarget")
      return { lo: 1 - t._2, hi: 1 };
    l();
  }
  if (t.tag === "Retracting") {
    if (t._1 === "FromSource")
      return { lo: t._2, hi: 1 };
    if (t._1 === "FromTarget")
      return { lo: 0, hi: 1 - t._2 };
    if (t._1 === "FromBoth")
      return { lo: t._2 / 2, hi: 1 - t._2 / 2 };
  }
  l();
}, go = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: Us(8)(0.6)(x0(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: Us(8)(0.6)(x0(1 - t._1)) };
  l();
};
function mk(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function $k(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: mk(o, i) };
  }
  return e;
}
function yk(t, n, e) {
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
function s_(t, n) {
  if (n.length === 0) return [];
  const e = $k(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = yk(e, n, i * r / t);
  return o;
}
function vk(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function xk(t, n) {
  const e = n.length;
  if (e === 0) return n;
  let r = 0, o = 1 / 0;
  for (let i = 0; i < e; i++) {
    let s = 0;
    for (let u = 0; u < e; u++) {
      const a = t[u] || { x: 0, y: 0 }, c = n[(u + i) % e] || { x: 0, y: 0 }, f = a.x - c.x, _ = a.y - c.y;
      s += f * f + _ * _;
    }
    s < o && (o = s, r = i);
  }
  return vk(r, n);
}
const u_ = (t) => (n) => (e) => {
  const r = s_(t, n), o = s_(t, e), i = xk(r, o);
  return { from: r, to: i };
};
function a_(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function Tk(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function wk(t, n) {
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
function Nk(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const c_ = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = a_(n), s = a_(e), u = Tk(i, s), a = new Array(o);
  let c = 1 / 0, f = -1 / 0;
  for (let g = 0; g < o; g++) {
    const p = n[g], m = (p.x - i.x) * u.x + (p.y - i.y) * u.y;
    a[g] = m, m < c && (c = m), m > f && (f = m);
  }
  const _ = f - c;
  let d = new Array(o);
  for (let g = 0; g < o; g++) {
    const p = n[g], m = e[g];
    if (m === void 0) {
      d[g] = p;
      continue;
    }
    const h = _ <= 1e-4 ? 0 : r.maxDelay * (1 - (a[g] - c) / _), $ = Math.max(1e-4, 1 - h), y = Nk((t - h) / $), x = y * y * (3 - 2 * y);
    d[g] = {
      x: p.x + (m.x - p.x) * x,
      y: p.y + (m.y - p.y) * x
    };
  }
  for (let g = 0; g < r.smoothPasses; g++)
    d = wk(0.5, d);
  return d;
}, mm = (t, n) => ({ tag: t, _1: n }), $m = (t, n) => ({ tag: t, _1: n }), Bn = (t, n, e) => ({ tag: t, _1: n, _2: e }), ym = (t) => t, su = (t, n) => ({ tag: t, _1: n }), uu = (t, n) => ({ tag: t, _1: n }), Wc = (t) => t, Qc = (t, n) => ({ tag: t, _1: n }), In = (t, n, e) => ({ tag: t, _1: n, _2: e }), xi = (t, n) => ({ tag: t, _1: n }), Tu = (t, n) => ({ tag: t, _1: n }), vm = (t, n) => ({ tag: t, _1: n }), xm = (t) => t, Tm = (t, n) => ({ tag: t, _1: n }), Ko = (t, n, e) => ({ tag: t, _1: n, _2: e }), wm = (t) => t, Ck = (t) => t, ri = /* @__PURE__ */ wm("NormalTransform"), bk = /* @__PURE__ */ wm("BakedTransform"), Nm = /* @__PURE__ */ xm("TokenOutside"), f_ = /* @__PURE__ */ xm("TokenInside"), qc = /* @__PURE__ */ Tu("PlainText"), Cm = /* @__PURE__ */ xi("FrameTitle"), Jk = /* @__PURE__ */ xi("Watermark"), kk = /* @__PURE__ */ Wc("NodeShadow"), Sk = /* @__PURE__ */ Wc("NodeDoorwayFrame"), rg = /* @__PURE__ */ Wc("NodeBody"), Lk = /* @__PURE__ */ Wc("NodeInversion"), og = /* @__PURE__ */ ym("LabelsShown"), us = /* @__PURE__ */ ym("LabelsHidden"), ar = {
  map: (t) => (n) => {
    if (n.tag === "BeginFrame")
      return In("BeginFrame", n._1, t(n._2));
    if (n.tag === "EndFrame")
      return In("EndFrame", t(n._1));
    if (n.tag === "BeginGroup")
      return In("BeginGroup", n._1, t(n._2));
    if (n.tag === "EndGroup")
      return In("EndGroup", n._1, t(n._2));
    if (n.tag === "Background")
      return In("Background", n._1, t(n._2));
    if (n.tag === "Overlay")
      return In("Overlay", n._1, t(n._2));
    if (n.tag === "Node")
      return In("Node", n._1, t(n._2));
    if (n.tag === "Edge")
      return In("Edge", n._1, t(n._2));
    if (n.tag === "Text")
      return In("Text", n._1, t(n._2));
    if (n.tag === "Token")
      return In("Token", n._1, t(n._2));
    if (n.tag === "AskInsideTokenStyle")
      return In("AskInsideTokenStyle", n._1, (e) => t(n._2(e)));
    l();
  }
}, bm = (t) => (n) => yu(t)(n), Ek = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = J3(t);
  return (r) => (o) => e(T3()()()({
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
      l();
    },
    metrics: (i) => {
      if (i.tag === "MeasureText")
        return n.map(i._3)(r.measureText(i._1)(i._2));
      if (i.tag === "MeasureInk")
        return n.map(i._3)(r.measureInk(i._1)(i._2));
      l();
    }
  }))(o);
}, Ak = (t) => Z(
  ft(
    "Bind",
    { type: "scene", value: In("AskInsideTokenStyle", t, Ck), map: ar.map },
    (n) => Z(ft("Return", n), gt)
  ),
  gt
), Jm = (t) => Z(
  ft(
    "Bind",
    { type: "scene", value: In("Background", t, void 0), map: ar.map },
    (n) => Z(ft("Return", n), gt)
  ),
  gt
), km = (t) => Z(
  ft(
    "Bind",
    { type: "scene", value: In("Edge", t, void 0), map: ar.map },
    (n) => Z(ft("Return", n), gt)
  ),
  gt
), au = (t) => Z(
  ft(
    "Bind",
    { type: "scene", value: In("Node", t, void 0), map: ar.map },
    (n) => Z(ft("Return", n), gt)
  ),
  gt
), Mc = (t) => Z(
  ft(
    "Bind",
    { type: "scene", value: In("Overlay", t, void 0), map: ar.map },
    (n) => Z(ft("Return", n), gt)
  ),
  gt
), wu = (t) => Z(
  ft(
    "Bind",
    { type: "scene", value: In("Text", t, void 0), map: ar.map },
    (n) => Z(ft("Return", n), gt)
  ),
  gt
), Sm = (t) => Z(
  ft(
    "Bind",
    { type: "scene", value: In("Token", t, void 0), map: ar.map },
    (n) => Z(ft("Return", n), gt)
  ),
  gt
), Pk = (t) => (n) => Z(
  ft(
    "Bind",
    { type: "scene", value: In("BeginFrame", t, void 0), map: ar.map },
    (e) => Z(ft("Return", e), gt)
  ),
  at(
    "CatCons",
    () => Z(
      n._1,
      (() => {
        if (n._2.tag === "CatNil")
          return at(
            "CatCons",
            () => Z(
              ft(
                "Bind",
                { type: "scene", value: In("EndFrame", void 0), map: ar.map },
                (e) => Z(ft("Return", e), gt)
              ),
              gt
            ),
            ut(X, X)
          );
        if (n._2.tag === "CatCons")
          return at(
            "CatCons",
            n._2._1,
            ut(
              n._2._2._1,
              Lt(
                "Cons",
                at(
                  "CatCons",
                  () => Z(
                    ft(
                      "Bind",
                      { type: "scene", value: In("EndFrame", void 0), map: ar.map },
                      (e) => Z(ft("Return", e), gt)
                    ),
                    gt
                  ),
                  ut(X, X)
                ),
                n._2._2._2
              )
            )
          );
        l();
      })()
    ),
    ut(X, X)
  )
), ce = (t) => (n) => Z(
  ft(
    "Bind",
    { type: "scene", value: In("BeginGroup", t, void 0), map: ar.map },
    (e) => Z(ft("Return", e), gt)
  ),
  at(
    "CatCons",
    () => {
      const e = () => Z(
        ft(
          "Bind",
          { type: "scene", value: In("EndGroup", t, void 0), map: ar.map },
          (r) => Z(ft("Return", r), gt)
        ),
        gt
      );
      return Z(
        n._1,
        (() => {
          if (n._2.tag === "CatNil")
            return at("CatCons", e, ut(X, X));
          if (n._2.tag === "CatCons")
            return at(
              "CatCons",
              n._2._1,
              ut(
                n._2._2._1,
                Lt("Cons", at("CatCons", e, ut(X, X)), n._2._2._2)
              )
            );
          l();
        })()
      );
    },
    ut(X, X)
  )
), Wr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, l_ = /* @__PURE__ */ N(pr)(0), g_ = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, Rk = /* @__PURE__ */ N((t) => (n) => t + n.len)(0), Lm = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(Et(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  l();
}, cu = (t) => (n) => {
  const e = Wr(n)(Wr(t.w / 2)(t.h / 2));
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
}, Fk = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(n._1.tail)((e) => [2, e.x, e.y])];
  l();
}, ig = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return am(n);
  if (t.shape === "Parallelogram")
    return im(n);
  if (t.shape === "Diamond")
    return lm(n);
  if (t.shape === "Ellipse")
    return om(n);
  if (t.shape === "Document")
    return sm(n);
  if (t.shape === "Cloud")
    return gm(n)(7);
  if (t.shape === "Rectangle")
    return cu(n)(7);
  l();
}, Mn = (t) => (n) => (e) => B((r) => {
  const o = j(r) / j(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(tn(0, e - 1 | 0)), Gk = (t) => {
  const n = He(t.w * 0.18)(t.h * 0.6);
  return [
    ...Mn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...Mn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...Mn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...Mn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, T0 = (t) => (n) => {
  const e = Wr(t)(Wr(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, w0 = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return oe(r * r + e * e);
}, Ik = (t) => Fn((n) => (e) => ({ a: n, b: e, len: w0(n)(e) }), t, Et(1, t.length, t)), Bk = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? T("Just", n[e]) : v, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    l();
  })(), i = 0 < n.length ? T("Just", n[0]) : v, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    l();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...xt(tn(1, u - 2 | 0))((a) => {
      const c = a + 1 | 0, f = c >= 0 && c < n.length ? T("Just", n[c]) : v, _ = a >= 0 && a < n.length ? T("Just", n[a]) : v, d = a - 1 | 0, g = d >= 0 && d < n.length ? T("Just", n[d]) : v;
      if (g.tag === "Just" && _.tag === "Just" && f.tag === "Just") {
        const p = _._1, m = w0(p)(f._1), h = w0(g._1)(p), $ = Wr(t)(m / 2), y = Wr(t)(h / 2), x = m > 0 ? $ / m : 0, w = p.x + (f._1.x - p.x) * x, C = p.y + (f._1.y - p.y) * x, b = h > 0 ? y / h : 0, k = p.x + (g._1.x - p.x) * b, E = p.y + (g._1.y - p.y) * b;
        return B((S) => {
          const I = j(S) / j(10), W = 1 - I;
          return { x: W * W * k + 2 * W * I * p.x + I * I * w, y: W * W * E + 2 * W * I * p.y + I * I * C };
        })(tn(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, Dk = (t) => (n) => (e) => (r) => (o) => B((i) => {
  const s = j(i) / j(o), u = 1 - s, a = s * s * s, c = 3 * u * s * s, f = 3 * u * u * s, _ = u * u * u;
  return { x: _ * t.x + f * n.x + c * e.x + a * r.x, y: _ * t.y + f * n.y + c * e.y + a * r.y };
})(tn(0, o - 1 | 0)), zk = (t) => [
  ...Mn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...Mn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...Dk({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...Mn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], __ = (t) => (n) => B((e) => {
  const r = 6.283185307179586 * j(e) / j(64);
  return { x: t.x + n * de(r), y: t.y + n * Ne(r) };
})(tn(0, 63)), Em = (t) => (n) => {
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
}, Hk = (t) => {
  const n = t.y + t.h / 2, e = He(t.h * 0.4)(t.w * 0.2);
  return [
    ...Mn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...Mn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...Mn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...Mn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...Mn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...Mn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, sg = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: l_(B((e) => e.x)(t)) / j(n), y: l_(B((e) => e.y)(t)) / j(n) };
}, Xu = (t) => (n) => (e) => (r) => (o) => B((i) => {
  const s = e + (r - e) * (j(i) / j(o));
  return { x: t.x + n * de(s), y: t.y + n * Ne(s) };
})(tn(0, o - 1 | 0)), N0 = (t) => (n) => {
  const e = Wr(t)(Wr(n.w / 2)(n.h / 2));
  return [
    ...Mn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...Xu({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...Mn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...Xu({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...Mn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...Xu({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...Mn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...Xu({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, Va = (t) => (n) => (e) => (r) => (o) => (i) => B((s) => {
  const u = r + (o - r) * (j(s) / j(i));
  return { x: t.x + n * de(u), y: t.y + e * Ne(u) };
})(tn(0, i - 1 | 0)), Ok = (t) => {
  const n = t.h * 0.38;
  return [
    ...xt(fm(cm(um)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = jo(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = jo(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return Va({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...Mn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...Mn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...Mn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, Wk = (t) => {
  const n = Wr(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...Va({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...Mn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...Va({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...Mn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, hi = (t) => (n) => n.shape === "Cylinder" ? Wk(n) : n.shape === "Parallelogram" ? Gk(n) : n.shape === "Diamond" ? Hk(n) : n.shape === "Ellipse" ? N0(He(n.w)(n.h) / 2)(n) : n.shape === "Document" ? zk(n) : n.shape === "Cloud" ? Ok(n) : N0(t)(n), Qk = (t) => {
  const n = Wr(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return Va({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, qk = (t) => (n) => (e) => N((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, a = n > r.pos ? (n - r.pos) / o.len : 0, c = { x: o.a.x + (o.b.x - o.a.x) * a, y: o.a.y + (o.b.y - o.a.y) * a }, f = r.points.length - 1 | 0, _ = f >= 0 && f < r.points.length ? (() => {
    const d = r.points[f].x - c.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const g = r.points[f].y - c.y;
      return g < 0 ? -g < 1e-4 : g < 1e-4;
    })();
  })() ? kt(r.points)(u) : [...r.points, c, u] : [c, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: _ };
})({ pos: 0, points: [] })(t).points, Mk = (t) => (n) => (e) => {
  const r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = Ik(t), i = Rk(o), s = g_(0)(i)(n * i), u = g_(0)(i)(e * i);
    return u <= s ? [] : qk(o)(s)(u);
  }
  l();
}, Xk = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, a = e.x - t.x, c = e.y - t.y, f = s * i - u * o, _ = (a * i - c * o) / f, d = (a * u - c * s) / f;
  return (f < 0 ? -f < 1e-9 : f < 1e-9) ? v : _ >= 0 && _ <= 1 && d >= 0 && d <= 1 ? T("Just", _) : v;
}, Uk = (t) => (n) => (e) => {
  const r = Gt((o) => (i) => ot.compare(o.t)(i.t))(Tt((o) => {
    const i = Xk(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? T("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : v;
  })(Fn(Zn, t, [...Et(1, t.length, t), ...Et(0, 1, t)])));
  return 0 < r.length ? T("Just", r[0].p) : v;
}, d_ = (t) => (n) => {
  const e = Ke(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = Uk(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return kt(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      l();
    }
    return n;
  }
  l();
}, xo = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, C0 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, Yk = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, Vk = (t) => (n) => {
  const e = xo(0)(t.y + 4 - n.y) + xo(0)(n.y + n.h - (t.y + t.h - 4)), r = xo(0)(t.x + 4 - n.x) + xo(0)(n.x + n.w - (t.x + t.w - 4));
  return r * n.h + e * n.w + r * e;
}, Kk = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = N(xo)(0)(B((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? C0((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, jk = (t) => (n) => {
  const e = C0(t.x + t.w)(n.x + n.w) - xo(t.x)(n.x), r = C0(t.y + t.h)(n.y + n.h) - xo(t.y)(n.y);
  return t.x < n.x + n.w && t.x + t.w > n.x && t.y < n.y + n.h && t.y + t.h > n.y ? e * r : 0;
}, h_ = (t) => (n) => (e) => (r) => {
  const o = t + 4, i = xo(0)(n - 8), s = o + i - e;
  return e <= i ? Yk(o)(s)(r) : t + (n - e) / 2;
}, b0 = (t) => (n) => ({ ...n, x: h_(t.x)(t.w)(n.w)(n.x), y: h_(t.y)(t.h)(n.h)(n.y) }), Zk = (t) => {
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
}, tS = (t) => (n) => (e) => (r) => (o) => {
  const i = o.y + o.h / 2 - e.token.y, s = o.y - r.y;
  return (() => {
    const u = o.x + o.w / 2 - e.token.x, a = o.x - r.x;
    return 1e6 * Vk(t)(o) + 1e4 * N((c) => (f) => c + jk(o)(f))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.y > e.token.y ? 100 : 0);
}, nS = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = b0(t)(s);
    return { rect: u, score: tS(t)(n)(e)(r)(u) };
  }, i = Bt((s) => v, (s) => (u) => T("Just", { head: s, tail: u }), [r, e.rect, ...Zk(e)]);
  if (i.tag === "Nothing")
    return b0(t)(r);
  if (i.tag === "Just")
    return N((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).rect;
  l();
}, eS = (t) => (n) => (e) => N((r) => (o) => {
  const i = Kk(o.rect)(r.obstacles), s = i.x >= t.x + 4 && i.y >= t.y + 4 && i.x + i.w <= t.x + t.w - 4 && i.y + i.h <= t.y + t.h - 4 ? i : nS(t)(r.obstacles)(o)(i);
  return { acc: rt(R)(o.id)(s)(r.acc), obstacles: kt(r.obstacles)(s) };
})({ acc: z, obstacles: n })(e).acc, ug = (t) => t, jr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, oi = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, rS = /* @__PURE__ */ ls(Y0)(Mt), oS = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, iS = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, p_ = /* @__PURE__ */ ug("SegMove"), sS = /* @__PURE__ */ ug("SegLine"), uS = /* @__PURE__ */ ug("SegQuad"), m_ = { offset: 0.4, passes: 1, rMax: 1.5 }, Am = (t) => yn(je(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, Ka = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, Xc = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, to = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, fu = /* @__PURE__ */ (() => {
  const t = N((n) => (e) => ((n * 31 | 0) + yn(je(e.x * 100)) | 0) + yn(je(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), aS = (t) => {
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
        n.push({ kind: p_, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
        continue;
      }
      if (s._1 === 2) {
        const u = {
          x: (() => {
            const f = o + 1 | 0;
            return f >= 0 && f < t.length ? t[f] : 0;
          })(),
          y: (() => {
            const f = o + 2 | 0;
            return f >= 0 && f < t.length ? t[f] : 0;
          })()
        }, a = u.x - i.x, c = u.y - i.y;
        n.push({ kind: sS, m: i, c: i, p: u, len: oe(a * a + c * c) }), r = u, e = o + 3 | 0;
        continue;
      }
      if (s._1 === 3) {
        const u = {
          x: (() => {
            const f = o + 3 | 0;
            return f >= 0 && f < t.length ? t[f] : 0;
          })(),
          y: (() => {
            const f = o + 4 | 0;
            return f >= 0 && f < t.length ? t[f] : 0;
          })()
        }, a = u.x - i.x, c = u.y - i.y;
        n.push({
          kind: uS,
          m: i,
          c: {
            x: (() => {
              const f = o + 1 | 0;
              return f >= 0 && f < t.length ? t[f] : 0;
            })(),
            y: (() => {
              const f = o + 2 | 0;
              return f >= 0 && f < t.length ? t[f] : 0;
            })()
          },
          p: u,
          len: oe(a * a + c * c) * 1.05
        }), r = u, e = o + 5 | 0;
        continue;
      }
      if (s._1 === 5) {
        n.push({ kind: p_, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    l();
  }
  return n;
}, cS = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : Et(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? T("Just", r[s]) : v;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, a = oe(u * u + s * s);
    return a <= 1e-4 ? n : kt((() => {
      const c = n.length - 1 | 0;
      return c < 1 ? [] : Et(0, c, n);
    })())({ x: n[i].x + u / a * t, y: n[i].y + s / a * t });
  }
  return n;
}, fS = (t) => (n) => (e) => gn(N((r) => (o) => {
  const i = qn(0)(t)(r.prng), s = qn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * de(s.value), y: o.y + i.value * Ne(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), lS = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return Xc(t)(n.p);
  if (n.kind === "SegLine")
    return to(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return to(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  l();
}, gS = (t) => (n) => {
  if (n.kind === "SegMove")
    return Xc(t)(n.p);
  if (n.kind === "SegLine")
    return to(t)(n.p);
  if (n.kind === "SegQuad")
    return Ka(t)(n.c)(n.p);
  l();
}, Pm = (t) => (n) => {
  const e = aS(n), r = N((u) => (a) => u + a.len)(0)(e) * jr(0)(oi(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, a = i;
    if (u >= 0 && u < e.length) {
      if (a + e[u].len <= r) {
        const c = e[u];
        gS(o)(c)(), i = a + c.len, s = u + 1 | 0;
        continue;
      }
      if (a >= r) {
        s = e.length;
        continue;
      }
      lS(o)(e[u])((r - a) / jr(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, $_ = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Rm = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = oe(s * s + o * o), a = e.x - n.x, c = oe(a * a + i * i), f = oi(t.rMax * (Sy(c > 0 && u > 0 ? jr(-1)(oi(1)((a * s + i * o) / (c * u))) : 1) / 3.141592653589793))(0.4 * oi(c)(u));
  return { inP: c > 0 ? { x: e.x - a / c * f, y: e.y - i / c * f } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * f, y: e.y + o / u * f } : e };
}, Fm = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? T("Just", n[0]) : v;
  if (o.tag === "Just" ? Xc(r)(o._1)() : o.tag === "Nothing" || l(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, a = u + 1 | 0;
      if (a >= 0 && a < n.length) {
        if (u >= 0 && u < n.length) {
          const c = u - 1 | 0;
          if (c >= 0 && c < n.length) {
            const f = Rm(t)(n[c])(n[u])(n[a]);
            to(r)(f.inP)(), Ka(r)(f.curr)(f.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && to(r)(n[i])(), r;
}, _S = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return Fm(t)(o);
  const i = 0 < o.length ? T("Just", o[0]) : v, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    l();
  })(), u = o.length - 1 | 0, a = oo(oo(n)(u) + u | 0)(u), c = (g) => {
    const p = oo(g + u | 0)(u);
    return p >= 0 && p < o.length ? o[p] : s;
  }, f = B((g) => Rm(t)(c((a + g | 0) - 1 | 0))(c(a + g | 0))(c((a + g | 0) + 1 | 0)))(tn(
    0,
    u - 1 | 0
  )), _ = [], d = 0 < f.length ? T("Just", f[0]) : v;
  if (d.tag === "Just")
    if (Xc(_)(d._1.outP)(), rS((() => {
      const g = Bt((p) => v, (p) => (m) => T("Just", m), f);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      l();
    })())((g) => {
      const p = to(_)(g.inP);
      return () => (p(), Ka(_)(g.curr)(g.outP)());
    })(), e)
      to(_)(d._1.inP)(), Ka(_)(d._1.curr)(d._1.outP)(), _.push(5);
    else {
      const g = f.length - 1 | 0;
      g >= 0 && g < f.length ? to(_)((() => {
        const p = 1 - r;
        return { x: f[g].outP.x + (d._1.inP.x - f[g].outP.x) * p, y: f[g].outP.y + (d._1.inP.y - f[g].outP.y) * p };
      })())() : to(_)(d._1.inP)();
    }
  else d.tag === "Nothing" || l();
  return _;
}, qi = (t) => (n) => (e) => (r) => {
  const o = oS(1)(r.length - 1 | 0), i = qn(0)(j(o))($0("shape")(n)), s = iS(o - 1 | 0)(yn(je(i.value))), u = i.prng;
  return B((a) => {
    const c = qn(0)(1)($0(fn(a))(u)), f = qn(-0.18)(0.3)(c.prng), _ = c.value < 0.7, d = qn(0.5)(0.85)(f.prng), g = fS(t.offset)(d.prng)(r);
    return { path: e ? _S(t)(s)(_)(f.value)(g) : Fm(t)(g), alpha: d.value };
  })(tn(0, t.passes - 1 | 0));
}, dS = (t) => (n) => (e) => qi(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), hS = (t) => (n) => (e) => {
  const r = jr(0)(oi(1)(e)), o = n.h / j(4), i = jr(6)(o * 1.4);
  return Tt((s) => s)(B((s) => {
    if (r < jr(0)(j(s) / j(4) - 0.05))
      return v;
    const u = $0(fn(s))(t), a = jr(0)(j(s) / j(4) - 0.05), c = oo(s)(2) === 0, f = c ? n.x - 2 : n.x + n.w + 2, _ = c ? n.x + n.w + 2 : n.x - 2, d = n.y + (j(s) + 0.5) * o;
    return T(
      "Just",
      {
        path: Pm(jr(0)(oi(1)((r - a) / jr(1e-4)(oi(1)(j(s + 1 | 0) / j(4) + 0.05) - a))))((() => {
          const g = { rMax: 2, offset: 0.6, passes: 1 }, p = gn(N((h) => ($) => {
            const y = qn(-o * 0.08)(o * 0.08)(h.prng);
            return { prng: y.prng, out: [{ x: f + (_ - f) * (j($) / j(4)), y: d + y.value }, ...h.out] };
          })({ prng: u, out: [] })(tn(0, 4)).out), m = p.length < 2 ? [] : qi(g)(u)(!1)(p);
          return 0 < m.length ? m[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(tn(0, 3)));
}, Gf = (t, n, e) => ({ tag: t, _1: n, _2: e }), ja = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, Hn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, he = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), _r = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Mo = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, ao = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, pS = Mt.foldMap(qy), ua = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Gm = /* @__PURE__ */ dn(R)(Mt), Im = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, mS = /* @__PURE__ */ Ud(R), $S = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, pi = (t) => {
  const n = t.Apply0();
  return (e) => N((r) => (o) => n.apply(n.Functor0().map((i) => M0)(r))(e(o)))(t.pure());
}, _o = /* @__PURE__ */ pi(di), Bm = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, a = ss(o)(i)(r), c = 0 < t.length ? T("Just", t[0]) : v, f = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    l();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? T("Just", t[_]) : v, g = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    l();
  })(), p = u_(128)(hi(4)(n))(__(f)(6)), m = f.x - u.x, h = 2 * (() => {
    const O = f.y - u.y;
    return (m < 0 ? -m : m) + (O < 0 ? -O : O);
  })(), $ = g.x - s.x, y = 2 * (() => {
    const O = g.y - s.y;
    return ($ < 0 ? -$ : $) + (O < 0 ? -O : O);
  })(), x = h + mu(t) + y, w = x <= 1e-4 ? 1 : 1 - y / x, C = x <= 1e-4 ? 0 : h / x, b = w - C, k = u_(128)(__(g)(6))(hi(4)(e)), E = { maxDelay: 0.4, smoothPasses: 2 }, S = ci(t)(ja(0)(1)(b <= 1e-4 ? 0 : (a - C) / b)), I = (() => {
    if (S.tag === "Just")
      return S._1;
    if (S.tag === "Nothing")
      return f;
    l();
  })(), W = (() => {
    if (w >= 1)
      return 0;
    const O = (a - w) / (1 - w), V = O < 0 ? 0 : O > 1 ? 1 : O;
    return V * V * (3 - 2 * V);
  })(), D = (() => {
    if (C <= 1e-4)
      return 1;
    const O = a / C, V = O < 0 ? 0 : O > 1 ? 1 : O;
    return V * V * (3 - 2 * V);
  })();
  return a < C ? Ko("PolyShape", c_(D)(p.from)(p.to)(E)) : a >= w ? Ko("PolyShape", c_(W)(k.from)(k.to)(E)) : Ko("CircleShape", I, 6);
}, ag = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Bm(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return sg(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  l();
}, cg = /* @__PURE__ */ (() => {
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
        chipText: Yr,
        nodeFill: bn,
        nodeStroke: Yr,
        text: Yr,
        edge: Yr,
        arrowFill: Yr,
        tokenOutsideFill: Yr,
        tokenOutsideStroke: bn,
        tokenInside: bn,
        tokenInsideStroke: bn,
        tokenInsideBlend: sa,
        tokenInsideAlpha: 1,
        chipPillFill: Yr,
        chipPillText: bn,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: Yr,
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
        nodeFill: Yr,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: bn,
        tokenOutsideStroke: bn,
        tokenInside: bn,
        tokenInsideStroke: bn,
        tokenInsideBlend: sa,
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
        shadowDot: bn,
        chip: bn,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: bn,
        text: bn,
        edge: bn,
        arrowFill: bn,
        tokenOutsideFill: bn,
        tokenOutsideStroke: bn,
        tokenInside: bn,
        tokenInsideStroke: bn,
        tokenInsideBlend: r_,
        tokenInsideAlpha: 0.35,
        chipPillFill: bn,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: bn,
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
        tokenInsideBlend: r_,
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
        tokenOutsideStroke: bn,
        tokenInside: bn,
        tokenInsideStroke: bn,
        tokenInsideBlend: sa,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: bn,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    l();
  };
})(), J0 = (t) => (n) => xt(he(t.nodes))((e) => {
  const r = Hn(e._1)(n.nodes);
  return r.tag === "Just" && go(r._1).alpha > 0 ? ig(e._2) : [];
}), yS = (t) => (n) => (e) => [
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
  ...J0(n)(e)
], vS = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = Ao.traverse(r);
  return (i) => (s) => {
    const u = qr(s), a = 0.32 * i.size;
    return o((c) => e.bind(c === 0 ? r.pure(0) : t.measureText(i)(Un(c)(s)))((f) => e.bind(t.measureText(i)(Un(c + 1 | 0)(s)))((_) => e.bind(t.measureInk(i)(c >= 0 && c < u.length ? ds(u[c]) : " "))((d) => r.pure({ x: f, w: _ - f, up: d.ascent - a, down: d.descent + a })))))(tn(
      0,
      u.length - 1 | 0
    ));
  };
}, Dm = (t) => [
  ...cu({ ...t, x: t.x - 1.25, y: t.y - 1.25, w: t.w + 2.5, h: t.h + 2.5 })(8.25),
  ...cu({ ...t, y: t.y - 5 })(7)
], xS = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = N((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return B((o) => {
    const i = j(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, k0 = (t) => {
  const n = fo(`
`)(t);
  return n.length === 0 ? [""] : n;
}, TS = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, a = ss(o)(i)(r), c = 0 < t.length ? T("Just", t[0]) : v, f = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    l();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? T("Just", t[_]) : v, g = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    l();
  })(), p = f.x - u.x, m = 2 * (() => {
    const E = f.y - u.y;
    return (p < 0 ? -p : p) + (E < 0 ? -E : E);
  })(), h = g.x - s.x, $ = 2 * (() => {
    const E = g.y - s.y;
    return (h < 0 ? -h : h) + (E < 0 ? -E : E);
  })(), y = m + mu(t) + $, x = y <= 1e-4 ? 1 : 1 - $ / y, w = y <= 1e-4 ? 0 : m / y, C = x - w, b = ci(t)(ja(0)(1)(C <= 1e-4 ? 0 : (a - w) / C)), k = (() => {
    if (b.tag === "Just")
      return b._1;
    if (b.tag === "Nothing")
      return f;
    l();
  })();
  return a < w ? Gf("InsideRect", T0(2)(n)) : a >= x ? Gf("InsideRect", T0(2)(e)) : Gf("InsideBall", k, 6);
}, S0 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (a, c) => Sm({
    id: a,
    pass: t,
    geometry: vm("FlatToken", c),
    position: (() => {
      if (c.tag === "CircleShape")
        return c._1;
      if (c.tag === "PolyShape")
        return sg(c._1);
      l();
    })(),
    plan: Tm("FlatTokenPlan", { wobble: e, fill: i, stroke: s })
  });
  return _o((a) => {
    if (a._2.tag === "Travelling") {
      const c = Hn(a._2._1.target)(r.nodes), f = Hn(a._2._1.source)(r.nodes);
      if (f.tag === "Just" && c.tag === "Just") {
        const _ = ao(a._2._1.edge)(r.edges);
        if (_.tag === "Just") {
          const d = (() => {
            if (a._2._1.direction === "Forward")
              return _._1;
            if (a._2._1.direction === "Backward")
              return gn(_._1);
            l();
          })();
          return u(
            a._1,
            (() => {
              if (n) {
                const g = TS(d)(f._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost);
                if (g.tag === "InsideRect")
                  return Ko("PolyShape", N0(4)(g._1));
                if (g.tag === "InsideBall")
                  return Ko("CircleShape", g._1, g._2);
                l();
              }
              return Bm(d)(f._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost);
            })()
          );
        }
        if (_.tag === "Nothing") {
          const d = ss(a._2._1.holdPre)(a._2._1.holdPost)(a._2._1.progress), g = { x: f._1.x + f._1.w / 2, y: f._1.y + f._1.h / 2 }, p = { x: c._1.x + c._1.w / 2, y: c._1.y + c._1.h / 2 };
          return ce({
            path: [],
            role: Ee,
            layer: v,
            effects: [
              Bn(
                "GroupAlpha",
                (() => {
                  if (d < 0.5) {
                    const h = d * 2;
                    return 1 - _r(0)(Mo(1)(h)) * _r(0)(Mo(1)(h)) * (3 - 2 * _r(0)(Mo(1)(h)));
                  }
                  const m = (d - 0.5) * 2;
                  return _r(0)(Mo(1)(m)) * _r(0)(Mo(1)(m)) * (3 - 2 * _r(0)(Mo(1)(m)));
                })()
              )
            ]
          })(u(a._1, Ko("CircleShape", d < 0.5 ? g : p, 6)));
        }
        l();
      }
      return Z(ft("Return", void 0), gt);
    }
    if (a._2.tag === "Filling") {
      if (e)
        return Z(ft("Return", void 0), gt);
      const c = Hn(a._2._1.node)(r.nodes);
      if (c.tag === "Just")
        return u(
          a._1,
          Ko(
            "PolyShape",
            hi(4)(n ? T0(2)(c._1) : c._1)
          )
        );
      if (c.tag === "Nothing")
        return Z(ft("Return", void 0), gt);
      l();
    }
    return Z(ft("Return", void 0), gt);
  })(he(o.tokens));
}, wS = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0();
  return (o) => e.bind((() => {
    const i = r.pure();
    if (o.clear.tag === "Nothing")
      return i;
    if (o.clear.tag === "Just")
      return t.clearBackground(o.clear._1);
    l();
  })())(() => e.bind(t.setViewport(o.viewport))(() => {
    const i = r.pure();
    if (o.dots.tag === "Nothing")
      return i;
    if (o.dots.tag === "Just")
      return t.backgroundDots(o.dots._1);
    l();
  }));
}, zm = (t) => (n) => (e) => (r) => ce({
  path: [],
  role: Ee,
  layer: v,
  effects: [
    Bn("GroupAlpha", e.fadeAlpha),
    Bn(
      "GroupTransform",
      ri,
      { tx: t.x * (1 - e.popScale), ty: (t.y + t.h) * (1 - e.popScale), sx: e.popScale, sy: e.popScale }
    ),
    Bn(
      "GroupTransform",
      ri,
      { tx: 0, ty: n.y * (1 - e.flipY), sx: 1, sy: e.flipY }
    )
  ]
})(wu(r)), L0 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = go(i), u = i.tag === "PloppingOut" && t.wobble ? { alpha: 1, scale: 1 } : s, a = fo(`
`)(o.label === "" ? r : o.label), c = a.length === 0 ? [""] : a, f = { family: t.fontFamily, size: t.wobble ? 15 : 11, weight: t.wobble ? 800 : 500 }, _ = f.size * 1.2, d = (o.shape === "Cylinder" ? (o.y + (o.y + o.h + 5 - 2 * He(o.h * 0.075)(o.w * 0.075))) / 2 : (o.y + o.y + o.h) / 2) - j(c.length) * _ / 2 + _ / 2, g = ce({
    path: [],
    role: Ee,
    layer: v,
    effects: [
      Bn("GroupAlpha", u.alpha * n),
      Bn(
        "GroupTransform",
        ri,
        { tx: (o.x + o.w / 2) * (1 - u.scale), ty: (o.y + o.h / 2) * (1 - u.scale), sx: u.scale, sy: u.scale }
      ),
      Bn("GroupAlpha", e)
    ]
  })(_o((p) => wu({
    owner: xi("NodeText", r),
    text: p._2,
    spec: {
      x: o.x + o.w / 2,
      y: d + j(p._1) * _,
      content: p._2,
      font: f,
      color: t.text,
      align: lo,
      baseline: tr
    },
    bounds: v,
    plan: qc
  }))(qt(Zn)(c)));
  return e > 0 && u.alpha * n > 0 ? g : Z(ft("Return", void 0), gt);
}, Hm = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (f) => {
  const _ = au({
    id: a,
    role: t,
    geometry: su("FlatNode", { shape: c.shape, bounds: { x: c.x, y: c.y, w: c.w, h: c.h } }),
    alpha: o,
    plan: uu(
      "FlatNodePlan",
      { palette: r, label: c.label, labelVisibility: n, inkBoost: e, labelAlpha: s, outlineAlpha: i, arrival: u, animState: f }
    )
  }), d = () => {
    if (n === "LabelsHidden")
      return Z(ft("Return", void 0), gt);
    if (n === "LabelsShown")
      return L0(r)(o)(s)(a)(c)(f);
    l();
  };
  return Z(
    _._1,
    (() => {
      if (_._2.tag === "CatNil")
        return at("CatCons", d, ut(X, X));
      if (_._2.tag === "CatCons")
        return at(
          "CatCons",
          _._2._1,
          ut(
            _._2._2._1,
            Lt("Cons", at("CatCons", d, ut(X, X)), _._2._2._2)
          )
        );
      l();
    })()
  );
}, NS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => zm(o)(i)(s)({
  owner: xi("TokenText", t),
  text: e,
  spec: {
    x: i.x,
    y: i.y,
    content: e,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipText,
    align: lo,
    baseline: tr
  },
  bounds: T("Just", o),
  plan: Tu(
    "TokenFillingText",
    {
      shadow: { ...o, y: o.y + 1.5 },
      shadowFill: { color: n.chipShadow, flat: !0 },
      radius: 6,
      fill: { color: n.chip, flat: !0 },
      stroke: { color: n.chipHairline, width: 1, lineJoin: re, lineCap: ze },
      leader: [1, i.x, o.y + o.h, 2, r.x + r.w / 2, r.y]
    }
  )
}), CS = { offset: 0.8, passes: 2, rMax: 5 }, E0 = (t) => (n) => (e) => (r) => ce({
  path: [],
  role: Ee,
  layer: T("Just", R3),
  effects: [Bn("GroupClip", yS(n)(e)(r), Zl)]
})(S0(Nm)(!0)(t.wobble)(e)(r)(t.tokenOutsideFill)(t.tokenOutsideStroke)), Om = (t) => (n) => (e) => (r) => {
  if (n.tokenInsideBlend === "Difference") {
    const o = Ak(t), i = (s) => {
      const u = ce({
        path: [],
        role: Ee,
        layer: T("Just", F3),
        effects: [
          Bn("GroupBlend", sa),
          Bn("GroupClip", J0(e)(r), is)
        ]
      })(S0(f_)(s === "ConvexAbsorb")(n.wobble)(e)(r)(n.tokenInside)(n.tokenInsideStroke)), a = () => ce({
        path: [],
        role: Ee,
        layer: T("Just", G3),
        effects: []
      })(_o((c) => {
        const f = Hn(c._1)(r.nodes);
        return f.tag === "Just" && go(f._1).alpha > 0 ? Mc(Qc(
          "FloorOverlay",
          {
            path: ig(c._2),
            fill: T("Just", { color: bn, flat: !1 }),
            stroke: v
          }
        )) : Z(ft("Return", void 0), gt);
      })(he(e.nodes)));
      return Z(
        u._1,
        (() => {
          if (u._2.tag === "CatNil")
            return at("CatCons", a, ut(X, X));
          if (u._2.tag === "CatCons")
            return at(
              "CatCons",
              u._2._1,
              ut(
                u._2._2._1,
                Lt("Cons", at("CatCons", a, ut(X, X)), u._2._2._2)
              )
            );
          l();
        })()
      );
    };
    return Z(
      o._1,
      (() => {
        if (o._2.tag === "CatNil")
          return at("CatCons", i, ut(X, X));
        if (o._2.tag === "CatCons")
          return at(
            "CatCons",
            o._2._1,
            ut(
              o._2._2._1,
              Lt("Cons", at("CatCons", i, ut(X, X)), o._2._2._2)
            )
          );
        l();
      })()
    );
  }
  if (n.tokenInsideBlend === "Normal")
    return ce({
      path: [],
      role: Ee,
      layer: v,
      effects: [
        Bn("GroupClip", J0(e)(r), is),
        Bn("GroupAlpha", n.tokenInsideAlpha)
      ]
    })(S0(f_)(!1)(n.wobble)(e)(r)(n.tokenInside)(n.tokenInsideStroke));
  l();
}, y_ = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Bt(
    (i) => v,
    (i) => (s) => T("Just", { head: i, tail: s }),
    B((i) => i.pt)(wy(
      (i) => (s) => {
        const u = j(s) / j(72), a = qn(-0.18)(0.18)(i.prng), c = qn(-0.1)(0.1)(a.prng), f = qn(-0.07)(0.07)(c.prng), _ = e * (0.05 + 0.55 * u) * (1 + c.value), d = u * 28.274333882308138 + a.value;
        return { prng: f.prng, pt: { x: n.x + de(d) * _ + f.value * e, y: n.y + Ne(d) * _ + f.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      tn(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...pS((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  l();
})())({ color: r, width: 5.5, lineJoin: re, lineCap: yr }), bS = (t) => {
  const n = t.Monad0().Applicative0();
  return (e) => {
    if (e.geometry.tag === "FlatToken" && e.plan.tag === "FlatTokenPlan") {
      if (e.geometry._1.tag === "CircleShape")
        return e.plan._1.wobble ? y_(t)(e.geometry._1._1)(e.geometry._1._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(Em(e.geometry._1._1)(e.geometry._1._2))({
          color: e.plan._1.fill,
          flat: !0
        })({ color: e.plan._1.stroke, width: 1, lineJoin: re, lineCap: ze });
      if (e.geometry._1.tag === "PolyShape")
        return e.plan._1.wobble && e.geometry._1._1.length >= 3 ? y_(t)(sg(e.geometry._1._1))(6)({ r: 200, g: 35, b: 30, a: 220 }) : e.geometry._1._1.length >= 3 ? t.fillStrokePath(Lm(e.geometry._1._1))({ color: e.plan._1.fill, flat: !0 })({
          color: e.plan._1.stroke,
          width: 1,
          lineJoin: re,
          lineCap: ze
        }) : n.pure();
      l();
    }
    return n.pure();
  };
}, JS = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popClip, i = t.popTransform, s = t.popAlpha;
  return (u) => (a) => (c) => (f) => (_) => {
    const d = go(_), g = c * d.alpha, p = { ...f, y: f.y + 5 }, m = f.x + f.w / 2, h = f.y + f.h / 2, $ = Dm(p), y = r.bind(t.pushAlpha(g))(() => r.bind(t.pushTransform({
      tx: m * (1 - d.scale),
      ty: h * (1 - d.scale),
      sx: d.scale,
      sy: d.scale
    }))(() => r.bind(t.pushClip($)(Zl))(() => r.bind(t.drawRoundedRect({
      x: p.x,
      y: p.y,
      w: p.w,
      h: p.h
    })(7)(T("Just", { color: u.shadowFill, flat: !0 }))(v))(() => r.bind((() => {
      const x = r.bind(t.pushClip(cu(p)(7))(is))(() => r.bind(t.backgroundDots({
        viewport: { vx: p.x, vy: p.y, vw: p.w, vh: p.h },
        bgColor: u.bgTransparent,
        dotColor: u.shadowDot,
        tile: 1.6,
        dotRadius: 0.25,
        origin: { x: 0, y: 0 }
      }))(() => o));
      return a && !u.wobble ? x : e.pure();
    })())(() => r.bind(t.drawRoundedRect({ x: p.x, y: p.y, w: p.w, h: p.h })(7)(v)(T(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: re, lineCap: ze }
    )))(() => r.bind(o)(() => r.bind(i)(() => s))))))));
    return g > 0 && !u.wobble ? y : e.pure();
  };
}, Wm = (t) => (n) => (e) => (r) => (o) => _o((i) => {
  if (t.tag === "Just" && i._1 === t._1)
    return Z(ft("Return", void 0), gt);
  const s = Hn(i._1)(o.nodes);
  if (s.tag === "Just")
    return au({
      id: i._1,
      role: kk,
      geometry: su("FlatNode", { shape: i._2.shape, bounds: { x: i._2.x, y: i._2.y, w: i._2.w, h: i._2.h } }),
      alpha: (() => {
        const u = Hn(i._1)(o.nodeFadeAlpha), a = (() => {
          if (u.tag === "Nothing")
            return 1;
          if (u.tag === "Just")
            return u._1;
          l();
        })();
        return a < 1 ? 0 : a;
      })(),
      plan: uu(
        "FlatNodePlan",
        {
          palette: n,
          label: i._2.label,
          labelVisibility: us,
          inkBoost: e ? 1 : 0,
          labelAlpha: 0,
          outlineAlpha: v,
          arrival: v,
          animState: s._1
        }
      )
    });
  if (s.tag === "Nothing")
    return Z(ft("Return", void 0), gt);
  l();
})(he(r.nodes)), Qm = (t) => (n) => (e) => {
  const r = { ...t, nodeFill: t.text, text: t.nodeFill, nodeStroke: t.nodeFill };
  return _o((o) => {
    const i = Hn(o._1)(e.nodes), s = Hn(o._1)(n.nodes), u = s.tag === "Just" && i.tag === "Just" ? ce({
      path: [],
      role: Ee,
      layer: v,
      effects: [Bn("GroupAlpha", o._2)]
    })(Hm(Lk)(og)(1)(r)(1)(v)(1)(v)(o._1)(s._1)(i._1)) : Z(ft("Return", void 0), gt);
    return o._2 > 0 ? u : Z(ft("Return", void 0), gt);
  })(he(e.nodeInvert));
}, kS = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = pi(n.Applicative0());
  return (i) => (s) => (u) => o((a) => e.bind(t.pushAlpha(a.alpha))(() => e.bind(t.strokePath(a.path)({
    color: i.nodeFill,
    width: a.width,
    lineJoin: re,
    lineCap: yr
  }))(() => r)))(hS(Am(s) + 7777 | 0)(s)(u));
}, SS = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = pi(o), s = t.popClip, u = pi(o), a = Ao.traverse(o), c = vS(t), f = kS(t), _ = t.popTransform;
  return (d) => (g) => (p) => (m) => (h) => ($) => (y) => (x) => (w) => (C) => {
    const b = (Q) => e.bind(t.pushAlpha(Q.alpha))(() => e.bind(t.strokePath(Q.path)({
      color: p.nodeStroke,
      width: 2,
      lineJoin: re,
      lineCap: yr
    }))(() => r)), k = { family: p.fontFamily, size: p.wobble ? 15 : 11, weight: p.wobble ? 800 : 500 }, E = fo(`
`)(w.label === "" ? x : w.label), S = E.length === 0 ? [""] : E, I = k.size * 1.2, W = w.shape === "Cylinder" ? t.strokePath(U3({ x: w.x, y: w.y, w: w.w, h: w.h }))({
      color: p.nodeStroke,
      width: 1.25,
      lineJoin: re,
      lineCap: ze
    }) : o.pure(), D = (w.shape === "Cylinder" ? (w.y + (w.y + w.h + 5 - 2 * He(w.h * 0.075)(w.w * 0.075))) / 2 : (w.y + w.y + w.h) / 2) - j(S.length) * I / 2 + I / 2, O = C.tag === "PloppingOut" && p.wobble ? C._1 : -1, V = O >= 0, et = go(C), K = V ? { alpha: 1, scale: 1 } : et, q = w.x + w.w / 2, A = w.y + w.h / 2, P = e.bind(t.pushAlpha(K.alpha))(() => e.bind(t.pushTransform({
      tx: q * (1 - K.scale),
      ty: A * (1 - K.scale),
      sx: K.scale,
      sy: K.scale
    }))(() => {
      const Q = { x: w.x, y: w.y, w: w.w, h: w.h }, G = {
        color: p.nodeStroke,
        width: p.wobble ? 2 : 1.25 * g,
        lineJoin: re,
        lineCap: p.wobble ? yr : ze
      }, F = (() => {
        if (p.wobble) {
          if (w.shape === "Rectangle")
            return i(b)(dS($_)(Am(Q))(Q));
          const H = hi(7)(w);
          return e.bind(i(b)((() => {
            const U = fu(H);
            return H.length < 4 ? [] : qi(m_)(U)(!0)(H);
          })()))(() => u((U) => i(b)((() => {
            const Y = fu(U);
            return U.length < 2 ? [] : qi(m_)(Y)(!1)(U);
          })()))(w.shape === "Cylinder" ? [Qk(w)] : []));
        }
        return e.bind(Ff(t)(w.shape)(Q)(7)(v)(T("Just", G)))(() => W);
      })();
      return e.bind((() => {
        if (h.tag === "Nothing")
          return e.bind(t.pushAlpha(m))(() => e.bind(p.wobble ? F : e.bind(Ff(t)(w.shape)(Q)(7)(T("Just", { color: p.nodeFill, flat: !1 }))(T(
            "Just",
            G
          )))(() => W))(() => e.bind((() => {
            if (y.tag === "Just" && p.wobble && !V) {
              const H = y._1;
              return e.bind(a(c(k))(S))((U) => {
                const Y = Gt((Jt) => (bt) => ot.compare(Jt.x)(bt.x)), M = yn(je(w.x * 7919 + w.y * 3001)) * -1640531535 | 0, tt = qn(5)(7.5)(M), it = qn(0)(tt.value)(tt.prng), nt = -(1 + 2 * qn(-1)(1)(it.prng).value * 3.141592653589793 / 180), ct = (Jt, bt, Wt, Zt, sn) => Y(Tt((rn) => rn)([
                  nt * bt + Jt >= Zt && nt * bt + Jt <= sn ? T("Just", { x: bt, y: nt * bt + Jt }) : v,
                  nt * Wt + Jt >= Zt && nt * Wt + Jt <= sn ? T("Just", { x: Wt, y: nt * Wt + Jt }) : v,
                  (() => {
                    const rn = (Zt - Jt) / nt;
                    return rn >= bt && rn <= Wt ? T("Just", { x: rn, y: Zt }) : v;
                  })(),
                  (() => {
                    const rn = (sn - Jt) / nt;
                    return rn >= bt && rn <= Wt ? T("Just", { x: rn, y: sn }) : v;
                  })()
                ])), lt = tt.value, pt = oo(H.frameHash)(3), At = pt === 0 ? { r: 200, g: 35, b: 30, a: 220 } : pt === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, Pt = w.x + w.w / 2, en = Pe(qt((Jt) => (bt) => qt((() => {
                  const Wt = D + j(Jt) * I, Zt = Pt - N((sn) => (rn) => sn + rn.w)(0)(bt) / 2;
                  return (sn) => (rn) => {
                    const ie = k.size * 0.1, Ht = sn - 1 | 0, Xt = Ht >= 0 && Ht < bt.length && sn > 0 ? (bt[Ht].x + bt[Ht].w + rn.x) / 2 : rn.x - ie;
                    return {
                      x: Zt + Xt - 1,
                      y: Wt - rn.up - 1,
                      w: _r(0)((() => {
                        const le = sn + 1 | 0;
                        return le >= 0 && le < bt.length && sn < (bt.length - 1 | 0) ? (rn.x + rn.w + bt[le].x) / 2 - Xt : rn.x + rn.w + ie - Xt;
                      })()) + 2,
                      h: rn.up + rn.down + 2
                    };
                  };
                })())(bt))(U)), $t = w.y + 4, It = w.x + w.w - 4, yt = w.x + 4, Nt = $t - nt * yt + it.value, _t = w.y + w.h - 4, mt = xt(xt(qt((Jt) => (bt) => {
                  const Wt = (bt.from.x + bt.to.x) / 2, Zt = (bt.from.y + bt.to.y) / 2, sn = qn(-1)(1)(M + (911 * (Jt + 1 | 0) | 0) | 0), rn = qn(-3)(5)(sn.prng), ie = sn.value * 3.141592653589793 / 180, Ht = de(ie), Xt = Ne(ie), le = (Xn) => ({ x: Wt + (Xn.x - Wt) * Ht - (Xn.y - Zt) * Xt, y: Zt + (Xn.x - Wt) * Xt + (Xn.y - Zt) * Ht });
                  return {
                    from: (() => {
                      const Xn = le(bt.from), se = Xn.y - Zt, On = Xn.x - Wt, $e = oe(On * On + se * se), Ut = $e < 1e-4 ? 1 : ($e + rn.value) / $e;
                      return { x: Wt + On * Ut, y: Zt + se * Ut };
                    })(),
                    to: (() => {
                      const Xn = le(bt.to), se = qn(-3)(5)(rn.prng).value, On = Xn.y - Zt, $e = Xn.x - Wt, Ut = oe($e * $e + On * On), hn = Ut < 1e-4 ? 1 : (Ut + se) / Ut;
                      return { x: Wt + $e * hn, y: Zt + On * hn };
                    })()
                  };
                })(Tt((Jt) => {
                  const bt = ct(Nt + j(Jt) * lt, yt, It, $t, _t);
                  return bt.length === 2 ? T("Just", { from: bt[0], to: bt[1] }) : v;
                })(tn(0, ua(1)(yn(je((_t - nt * It - Nt) / lt)))))))((Jt) => dt(
                  (bt) => bt.to.x - bt.from.x > 1,
                  N((bt) => (Wt) => xt(bt)((Zt) => {
                    const sn = ct(Zt.from.y - nt * Zt.from.x, Wt.x, Wt.x + Wt.w, Wt.y, Wt.y + Wt.h);
                    return sn.length === 2 ? sn[0].x > Zt.from.x + 1e-3 && sn[1].x < Zt.to.x - 1e-3 ? [{ from: Zt.from, to: sn[0] }, { from: sn[1], to: Zt.to }] : sn[0].x <= Zt.from.x + 1e-3 && sn[1].x < Zt.to.x - 1e-3 ? [{ from: sn[1], to: Zt.to }] : sn[0].x > Zt.from.x + 1e-3 && sn[1].x >= Zt.to.x - 1e-3 ? [{ from: Zt.from, to: sn[0] }] : [] : [Zt];
                  }))([Jt])(en)
                )))((Jt) => (() => {
                  const bt = Jt.to.x - Jt.from.x;
                  return oe(2) * (bt >= 0 ? bt : -bt) <= 28;
                })() ? [Jt] : [
                  { from: Jt.from, to: { x: Jt.from.x + (Jt.to.x - Jt.from.x) * 0.495, y: Jt.from.y + (Jt.to.y - Jt.from.y) * 0.495 } },
                  { from: { x: Jt.from.x + (Jt.to.x - Jt.from.x) * 0.505, y: Jt.from.y + (Jt.to.y - Jt.from.y) * 0.505 }, to: Jt.to }
                ]), St = mt.length, Ft = (Jt) => _r(0)(Mo(1)(H.t * j(St) - j(Jt)));
                return e.bind(t.pushClip(Lm(hi(7)(w)))(is))(() => e.bind(i((Jt) => {
                  const bt = Jt._1, Wt = qn(1.4)(1.9)(M + (1303 * (bt + 1 | 0) | 0) | 0), Zt = qn(0.35)(0.8)(Wt.prng), sn = i((rn) => e.bind(t.pushAlpha(rn.alpha * Zt.value))(() => e.bind(t.strokePath(Pm(Ft(bt))(rn.path))({
                    color: At,
                    width: Wt.value,
                    lineJoin: re,
                    lineCap: yr
                  }))(() => r)))(qi({
                    ...$_,
                    rMax: 0,
                    offset: 0.5
                  })(M + (53 * (bt + 1 | 0) | 0) | 0)(!1)([Jt._2.from, Jt._2.to]));
                  return Ft(bt) > 0 ? sn : o.pure();
                })(qt(Zn)(mt)))(() => s));
              });
            }
            return o.pure();
          })())(() => e.bind((() => {
            if (d === "LabelsShown") {
              const H = e.bind(t.pushAlpha($))(() => e.bind(i((U) => t.drawText({
                x: w.x + w.w / 2,
                y: D + j(U._1) * I,
                content: U._2,
                font: k,
                color: p.text,
                align: lo,
                baseline: tr
              }))(qt(Zn)(S)))(() => r));
              return $ > 0 ? H : o.pure();
            }
            if (d === "LabelsHidden")
              return o.pure();
            l();
          })())(() => e.bind((() => {
            const H = f(p)(Q)(O);
            return V ? H : o.pure();
          })())(() => r)))));
        if (h.tag === "Just") {
          const H = h._1;
          return e.bind((() => {
            const U = e.bind(t.pushAlpha(m))(() => e.bind(Ff(t)(w.shape)(Q)(7)(T(
              "Just",
              { color: p.nodeFill, flat: !1 }
            ))(v))(() => r));
            return m > 0 && !p.wobble ? U : o.pure();
          })())(() => {
            const U = e.bind(t.pushAlpha(H))(() => e.bind(F)(() => r));
            return H > 0 ? U : o.pure();
          });
        }
        l();
      })())(() => e.bind(_)(() => r));
    }));
    return K.alpha * _r(m)((() => {
      if (h.tag === "Nothing")
        return m;
      if (h.tag === "Just")
        return h._1;
      l();
    })()) > 0 ? P : o.pure();
  };
}, qm = (t) => (n) => (e) => {
  const r = (o) => {
    const i = Kt((s) => o.x >= s._2.x - 1 && o.x <= s._2.x + s._2.w + 1 && o.y >= s._2.y - 1 && o.y <= s._2.y + s._2.h + 1)(he(n.nodes));
    return i.tag === "Just" ? T("Just", i._1._2) : v;
  };
  return _o((o) => {
    const i = ao(o._1)(e.edges);
    if (i.tag === "Just") {
      const s = ao(o._1)(e.edgeFadeAlpha), u = (() => {
        if (s.tag === "Nothing")
          return 1;
        if (s.tag === "Just")
          return s._1;
        l();
      })(), a = km({
        id: o._1,
        geometry: mm(
          "FlatRoute",
          (() => {
            const c = (() => {
              if (0 < o._2.length) {
                const _ = r(o._2[0]);
                if (_.tag === "Just")
                  return gn(d_(hi(7)(_._1))(gn(o._2)));
              }
              return o._2;
            })(), f = c.length - 1 | 0;
            if (f >= 0 && f < c.length) {
              const _ = r(c[f]);
              if (_.tag === "Just")
                return d_(hi(7)(_._1))(c);
            }
            return c;
          })()
        ),
        visible: pm(i._1),
        arrow: (() => {
          const c = Ro("conn:")(o._1);
          if (c.tag === "Just")
            return !1;
          if (c.tag === "Nothing")
            return !0;
          l();
        })(),
        settlingAtTarget: i._1.tag === "Extending" && i._1._1 === "ExtendFromSource",
        plan: $m("FlatEdgePlan", t)
      });
      return u === 1 ? a : ce({
        path: [],
        role: Ee,
        layer: v,
        effects: [Bn("GroupAlpha", u)]
      })(a);
    }
    if (i.tag === "Nothing")
      return Z(ft("Return", void 0), gt);
    l();
  })(he(n.edges));
}, LS = (t) => (n) => (e) => {
  const r = { family: t.fontFamily, size: 11, weight: 500 };
  return _o((o) => {
    if (o._2 === "" || (() => {
      const u = ao(o._1)(e.edges);
      return u.tag === "Nothing" || !(u.tag === "Just" && XT.eq(u._1)(Hh));
    })())
      return Z(ft("Return", void 0), gt);
    const i = ao(o._1)(n.edges), s = (() => {
      if (i.tag === "Just")
        return ci(i._1)(0.5);
      if (i.tag === "Nothing")
        return v;
      l();
    })();
    if (s.tag === "Nothing")
      return Z(ft("Return", void 0), gt);
    if (s.tag === "Just") {
      const u = s._1, a = yu(r)(o._2), c = (f) => {
        const _ = f + 12;
        return wu({
          owner: xi("EdgeText", o._1),
          text: o._2,
          spec: {
            x: u.x,
            y: u.y,
            content: o._2,
            font: r,
            color: t.chipPillText,
            align: lo,
            baseline: tr
          },
          bounds: T("Just", { x: u.x - _ / 2, y: u.y - 8.5, w: _, h: 17 }),
          plan: Tu(
            "RoundedText",
            { radius: 3, fill: T("Just", { color: t.chipPillFill, flat: !0 }), stroke: v }
          )
        });
      };
      return Z(
        a._1,
        (() => {
          if (a._2.tag === "CatNil")
            return at("CatCons", c, ut(X, X));
          if (a._2.tag === "CatCons")
            return at(
              "CatCons",
              a._2._1,
              ut(
                a._2._2._1,
                Lt("Cons", at("CatCons", c, ut(X, X)), a._2._2._2)
              )
            );
          l();
        })()
      );
    }
    l();
  })(he(n.edgeLabels));
}, ES = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popClip, i = t.popTransform, s = t.popAlpha;
  return (u) => (a) => (c) => (f) => (_) => {
    const d = go(_), g = c * d.alpha, p = f.x + f.w / 2, m = f.y - 5 + f.h / 2, h = Dm(f), $ = r.bind(t.pushAlpha(g))(() => r.bind(t.pushTransform({
      tx: p * (1 - d.scale),
      ty: m * (1 - d.scale),
      sx: d.scale,
      sy: d.scale
    }))(() => r.bind(t.pushClip(h)(Zl))(() => r.bind(t.drawRoundedRect({ x: f.x, y: f.y, w: f.w, h: f.h })(7)(T(
      "Just",
      { color: u.shadowFill, flat: !0 }
    ))(v))(() => r.bind((() => {
      const y = r.bind(t.pushClip(cu(f)(7))(is))(() => r.bind(t.backgroundDots({
        viewport: { vx: f.x, vy: f.y, vw: f.w, vh: f.h },
        bgColor: u.bgTransparent,
        dotColor: u.shadowDot,
        tile: 1.6,
        dotRadius: 0.25,
        origin: { x: 0, y: 0 }
      }))(() => o));
      return a ? y : e.pure();
    })())(() => r.bind(t.drawRoundedRect({ x: f.x, y: f.y, w: f.w, h: f.h })(7)(v)(T(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: re, lineCap: ze }
    )))(() => r.bind(o)(() => r.bind(i)(() => s))))))));
    return g > 0 && !u.wobble ? $ : e.pure();
  };
}, AS = (t) => {
  const n = JS(t), e = ES(t), r = SS(t);
  return (o) => {
    if (o.geometry.tag === "FlatNode" && o.plan.tag === "FlatNodePlan") {
      const i = {
        x: o.geometry._1.bounds.x,
        y: o.geometry._1.bounds.y,
        w: o.geometry._1.bounds.w,
        h: o.geometry._1.bounds.h,
        label: o.plan._1.label,
        shape: o.geometry._1.shape
      };
      if (o.role === "NodeShadow")
        return n(o.plan._1.palette)(o.plan._1.inkBoost > 0)(o.alpha)(i)(o.plan._1.animState);
      if (o.role === "NodeDoorwayFrame")
        return e(o.plan._1.palette)(o.plan._1.inkBoost > 0)(o.alpha)(i)(o.plan._1.animState);
      if (o.role === "NodeBody" || o.role === "NodeInversion")
        return r(us)(o.plan._1.inkBoost)(o.plan._1.palette)(o.alpha)(o.plan._1.outlineAlpha)(0)(o.plan._1.arrival)(o.id)(i)(o.plan._1.animState);
      l();
    }
    return t.Monad0().Applicative0().pure();
  };
}, Mm = (t) => {
  const n = (e) => {
    if (e.tag === "Leaf")
      return z;
    if (e.tag === "Node")
      return cn(
        "Node",
        e._1,
        e._2,
        e._3,
        b0({ x: t.vx, y: t.vy, w: t.vw, h: t.vh })(e._4),
        n(e._5),
        n(e._6)
      );
    l();
  };
  return n;
}, PS = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = pi(r);
  return (i) => (s) => (u) => (a) => (c) => (f) => {
    const _ = $s(f).length, d = j(_ + 1 | 0), g = ($) => {
      const y = (u * d - j($)) / 1.5, x = y < 0 ? 0 : y > 1 ? 1 : y;
      return x * x * (3 - 2 * x);
    }, m = (($) => {
      let y = $, x = !0, w;
      for (; x; ) {
        const C = y;
        if (C >= _) {
          x = !1, w = C;
          continue;
        }
        if (g(C) >= 1) {
          y = C + 1 | 0;
          continue;
        }
        x = !1, w = C;
      }
      return w;
    })(0), h = m >= _ ? [] : Fr(($) => g($) > 0)(tn(m, _ - 1 | 0)).init;
    return e.bind((() => {
      const $ = t.drawText({
        x: a,
        y: c,
        content: Un(m)(f),
        font: i,
        color: s,
        align: os,
        baseline: tr
      });
      return m > 0 ? $ : r.pure();
    })())(() => o(($) => e.bind(t.measureText(i)(Un($)(f)))((y) => {
      const x = g($);
      return t.drawText({
        x: a + y,
        y: c - (1 - x) * 10,
        content: Un(1)(ts(xr(Un($)(f)))(f)),
        font: i,
        color: { ...s, a: yn(je(x * j(s.a))) },
        align: os,
        baseline: tr
      });
    }))(h));
  };
}, Xm = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = pi(r), i = PS(t);
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
        l();
      })())(() => t.drawText(s.spec));
    if (s.plan.tag === "TokenTravelText") {
      const u = s.plan._1;
      return e.bind(o((a) => t.fillPath(Em(a)(1.5))(u.trailFill))(u.trail))(() => e.bind((() => {
        const a = r.pure();
        if (s.bounds.tag === "Nothing")
          return a;
        if (s.bounds.tag === "Just")
          return t.drawRoundedRect(s.bounds._1)(u.radius)(T("Just", u.fill))(v);
        l();
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
        l();
      })())(() => e.bind(t.strokePath(u.leader)(u.stroke))(() => t.drawText(s.spec))));
    }
    if (s.plan.tag === "AffineText")
      return t.drawTextAffine(s.plan._1)(s.spec);
    l();
  };
}, RS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => zm(r)(o)(i)({
  owner: xi("TokenText", t),
  text: e.line,
  spec: {
    x: o.x,
    y: o.y,
    content: e.line,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipPillText,
    align: os,
    baseline: tr
  },
  bounds: T("Just", r),
  plan: Tu(
    "TokenTravelText",
    {
      trail: xS(r)(s),
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
}), Za = (t) => (n) => (e) => (r) => {
  const o = B((p) => j(ua(1)($s(p).length)))(r), i = _r(1)(N(pr)(0)(o)), s = ss(n)(e)(t), u = s * i, a = ua(1)(r.length), f = ((p) => (m) => (h) => {
    let $ = p, y = m, x = h, w = !0, C;
    for (; w; ) {
      const b = $, k = y, S = Bt((I) => v, (I) => (W) => T("Just", { head: I, tail: W }), x);
      if (S.tag === "Nothing") {
        w = !1, C = ua(0)(a - 1 | 0);
        continue;
      }
      if (S.tag === "Just") {
        if (k + S._1.head >= u) {
          w = !1, C = b;
          continue;
        }
        $ = b + 1 | 0, y = k + S._1.head, x = S._1.tail;
        continue;
      }
      l();
    }
    return C;
  })(0)(0)(o), _ = N(pr)(0)(f < 1 ? [] : Et(0, f, o)), d = _ / i;
  if (f >= 0 && f < o.length) {
    const p = (_ + o[f]) / i;
    return {
      line: f >= 0 && f < r.length ? r[f] : "",
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
    line: f >= 0 && f < r.length ? r[f] : "",
    phaseInLabel: (() => {
      if (g <= d)
        return 1;
      const p = (s - d) / (g - d);
      return p < 0 ? 0 : p > 1 ? 1 : p;
    })()
  };
}, Um = (t) => (n) => (e) => (r) => (o) => t.Bind1().bind(n({
  family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif",
  size: 11,
  weight: 500
})(Za(r)(0)(0)(B(co)(o)).line))((i) => {
  const s = i + 28;
  return t.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
}), FS = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = Ao.traverse(e);
  return (o) => (i) => (s) => n.Apply0().Functor0().map((u) => Gm(Tt((a) => a)(u)))(r((u) => {
    if (u._2.tag === "Filling" && u._2._1.labels.length !== 0) {
      const a = Hn(u._2._1.node)(i.nodes);
      if (a.tag === "Just")
        return n.bind(Um(t)(o)(a._1)(u._2._1.progress)(u._2._1.labels))((c) => e.pure(T(
          "Just",
          J(u._1, c)
        )));
      if (a.tag === "Nothing")
        return e.pure(v);
      l();
    }
    return e.pure(v);
  })(he(s.tokens)));
}, GS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = ag(e)(r)(o)(i)(s)(u);
  return t.Bind1().bind(n({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Za(i)(s)(u)(xt(a)(k0)).line))((f) => t.Applicative0().pure({
    x: c.x + 14 + f / 2 - f / 2 - 14,
    y: c.y - 6 - 8 - 6.6 - 6,
    w: f + 28,
    h: 25.2
  }));
}, IS = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = Ao.traverse(e);
  return (o) => (i) => (s) => n.Apply0().Functor0().map((u) => Gm(Tt((a) => a)(u)))(r((u) => {
    if (u._2.tag === "Travelling" && u._2._1.labels.length !== 0) {
      const a = Hn(u._2._1.target)(i.nodes), c = Hn(u._2._1.source)(i.nodes), f = ao(u._2._1.edge)(i.edges);
      if (f.tag === "Just" && c.tag === "Just" && a.tag === "Just") {
        const _ = (() => {
          if (u._2._1.direction === "Forward")
            return f._1;
          if (u._2._1.direction === "Backward")
            return gn(f._1);
          l();
        })(), d = ag(_)(c._1)(a._1)(u._2._1.progress)(u._2._1.holdPre)(u._2._1.holdPost);
        return n.bind(GS(t)(o)(_)(c._1)(a._1)(u._2._1.progress)(u._2._1.holdPre)(u._2._1.holdPost)(u._2._1.labels))((g) => e.pure(T(
          "Just",
          J(u._1, { id: u._1, rect: g, token: d })
        )));
      }
    }
    return e.pure(v);
  })(he(s.tokens)));
}, fg = (t) => {
  const n = t.Bind1(), e = IS(t), r = FS(t);
  return (o) => (i) => (s) => (u) => n.bind(e(o)(s)(u))((a) => n.bind(r(o)(s)(u))((c) => t.Applicative0().pure(eS({
    x: i.vx,
    y: i.vy,
    w: i.vw,
    h: i.vh
  })([
    ...Tt((f) => {
      const _ = Hn(f._1)(u.nodes);
      return _.tag === "Just" && go(_._1).alpha > 0 ? T("Just", { x: f._2.x, y: f._2.y, w: f._2.w, h: f._2.h }) : v;
    })(he(s.nodes)),
    ...(() => {
      const f = (_, d) => {
        if (_.tag === "Leaf")
          return d;
        if (_.tag === "Node")
          return f(_._5, Lt("Cons", _._4, f(_._6, d)));
        l();
      };
      return nn(Sn.foldr, f(c, X));
    })()
  ])(Tt((f) => Im(f)(a))((() => {
    const f = (_) => {
      if (_.tag === "Leaf")
        return z;
      if (_.tag === "Node")
        return cn("Node", _._1, _._2, _._3, void 0, f(_._5), f(_._6));
      l();
    };
    return Gt(R.compare)(nn(Re.foldr, f(a)));
  })())))));
}, BS = /* @__PURE__ */ fg(Xl), v_ = (t) => (n) => (e) => {
  const r = Us(6)(0.55)(ja(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Us(6)(0.55)(ja(0)(1)(t / 0.06)), u = t < 0.06, a = u && n > 1e-4, c = o && e <= 1e-4;
  return {
    popScale: a ? s : i ? r : 1,
    flipY: u && n <= 1e-4 ? s : c ? r : 1,
    fadeAlpha: (() => {
      if (a) {
        const f = t / 0.06;
        return f < 0 ? 0.55 : f > 1 ? 1 : 0.55 + 0.44999999999999996 * f;
      }
      if (i) {
        const f = (1 - t) / 0.06;
        return f < 0 ? 0.55 : f > 1 ? 1 : 0.55 + 0.44999999999999996 * f;
      }
      return 1;
    })()
  };
}, tc = (t) => (n) => (e) => (r) => ce({
  path: [],
  role: Ee,
  layer: T("Just", I3),
  effects: []
})(_o((o) => {
  if (o._2.tag === "Travelling") {
    if (o._2._1.labels.length !== 0) {
      const i = Hn(o._2._1.target)(n.nodes), s = Hn(o._2._1.source)(n.nodes), u = ao(o._2._1.edge)(n.edges), a = Im(o._1)(r);
      if (a.tag === "Just" && u.tag === "Just" && s.tag === "Just" && i.tag === "Just")
        return RS(o._1)(t)(Za(o._2._1.progress)(o._2._1.holdPre)(o._2._1.holdPost)(xt(o._2._1.labels)(k0)))(a._1)({
          x: a._1.x + a._1.w / 2,
          y: a._1.y + a._1.h / 2
        })(v_(o._2._1.progress)(o._2._1.holdPre)(o._2._1.holdPost))(ag((() => {
          if (o._2._1.direction === "Forward")
            return u._1;
          if (o._2._1.direction === "Backward")
            return gn(u._1);
          l();
        })())(s._1)(i._1)(o._2._1.progress)(o._2._1.holdPre)(o._2._1.holdPost));
    }
    return Z(ft("Return", void 0), gt);
  }
  if (o._2.tag === "Filling" && o._2._1.labels.length !== 0) {
    const i = Hn(o._2._1.node)(n.nodes);
    if (i.tag === "Just") {
      const s = i._1, u = Um(Xl)(bm)(s)(o._2._1.progress)(o._2._1.labels), a = (c) => NS(o._1)(t)(Za(o._2._1.progress)(0)(0)(xt(o._2._1.labels)(k0)).line)(s)(c)({
        x: c.x + c.w / 2,
        y: c.y + c.h / 2
      })(v_(o._2._1.progress)(0)(0));
      return Z(
        u._1,
        (() => {
          if (u._2.tag === "CatNil")
            return at("CatCons", a, ut(X, X));
          if (u._2.tag === "CatCons")
            return at(
              "CatCons",
              u._2._1,
              ut(
                u._2._2._1,
                Lt("Cons", at("CatCons", a, ut(X, X)), u._2._2._2)
              )
            );
          l();
        })()
      );
    }
    if (i.tag === "Nothing")
      return Z(ft("Return", void 0), gt);
    l();
  }
  return Z(ft("Return", void 0), gt);
})(he(e.tokens))), Ym = (t) => (n) => (e) => (r) => {
  const o = BS(bm)(n)(e)(r);
  return Z(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return at("CatCons", (i) => tc(t)(e)(r)(i), ut(X, X));
      if (o._2.tag === "CatCons")
        return at(
          "CatCons",
          o._2._1,
          ut(
            o._2._2._1,
            Lt(
              "Cons",
              at("CatCons", (i) => tc(t)(e)(r)(i), ut(X, X)),
              o._2._2._2
            )
          )
        );
      l();
    })()
  );
}, DS = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : Et(0, i, o), u = s.length - 1 | 0, a = u >= 0 && u < s.length ? T("Just", s[u]) : v, c = o.length - 1 | 0, f = c >= 0 && c < o.length ? T("Just", o[c]) : v;
    if (f.tag === "Just" && a.tag === "Just") {
      const _ = qn(0.78)(1.18)(fu(o) + 19 | 0), d = qn(0.4)(0.62)(_.prng), g = r.wobble ? 8.75 * d.value : 4.375, p = qn(0.4)(0.62)(d.prng), m = r.wobble ? 8.75 * p.value : 4.375, h = f._1.y - a._1.y, $ = f._1.x - a._1.x, y = oe($ * $ + h * h), x = h / y, w = -x, C = $ / y, b = f._1.x + C * 0.875, k = f._1.y + x * 0.875, E = r.wobble ? 8.75 * _.value : 8.75, S = b - C * E, I = k - x * E, W = S + w * g, D = I + C * g, O = [1, b, k, 2, S + w * 4.375, I + C * 4.375, 2, S - w * 4.375, I - C * 4.375, 5], V = S - w * m, et = I - C * m, K = { color: r.arrowFill, width: 2, lineJoin: re, lineCap: yr };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, W, D, 2, b, k])(K))(() => t.strokePath([1, V, et, 2, b, k])(K)) : t.fillPath(O)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, zS = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = pi(e), i = t.popAlpha, s = DS(t);
  return (u) => (a) => (c) => (f) => (_) => {
    const d = Bk(8)(f), g = c && _.hi >= 0.9 && (1 - _.hi) * mu(d) <= 8.75 ? 1 : _.hi;
    if (g <= _.lo)
      return e.pure();
    const p = Mk(d)(_.lo)(g);
    if (p.length === 0)
      return e.pure();
    const m = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: re, lineCap: yr }, h = u.wobble ? qn(-10)(4)(fu(p)).value : 0, $ = u.wobble ? cS(h)(p) : p;
    return r.bind(u.wobble ? o((y) => r.bind(t.pushAlpha(y.alpha))(() => r.bind(t.strokePath(y.path)(m))(() => i)))((() => {
      const y = fu(p);
      return $.length < 2 ? [] : qi(CS)(y)(!1)($);
    })()) : t.strokePath(Fk(p))(m))(() => {
      const y = s(u)($);
      return a && g >= 0.999 ? y : e.pure();
    });
  };
}, HS = (t) => {
  const n = zS(t);
  return (e) => e.geometry.tag === "FlatRoute" && e.plan.tag === "FlatEdgePlan" ? n(e.plan._1)(e.arrow)(e.settlingAtTarget)(e.geometry._1)(e.visible) : t.Monad0().Applicative0().pure();
}, OS = (t) => (n) => {
  const e = (i) => {
    const s = Hn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !Cn(
        (a) => 0 < a._2.length && a._2[0].x >= u.x && a._2[0].x <= u.x + u.w && a._2[0].y >= u.y && a._2[0].y <= u.y + u.h,
        he(t.edges)
      );
    }
    l();
  }, r = N((i) => (s) => (i * 31 | 0) + Ir(s) | 0)(5381)(qr(n.frameTitle)), o = (i) => {
    const s = Hn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !Cn(
        (a) => {
          const c = a._2.length - 1 | 0;
          return c >= 0 && c < a._2.length && a._2[c].x >= u.x && a._2[c].x <= u.x + u.w && a._2[c].y >= u.y && a._2[c].y <= u.y + u.h;
        },
        he(t.edges)
      );
    }
    l();
  };
  return N((i) => (s) => {
    const u = s._2;
    return mS((a) => {
      if (a.tag === "Nothing")
        return T("Just", u);
      if (a.tag === "Just")
        return T(
          "Just",
          { t: _r(a._1.t)(u.t), angle: u.t >= a._1.t ? u.angle : a._1.angle, bigCircle: a._1.bigCircle || u.bigCircle, frameHash: a._1.frameHash }
        );
      l();
    })(s._1)(i);
  })(z)(xt(he(n.tokens))((i) => {
    if (i._2.tag === "Filling") {
      const s = i._2._1.node;
      return [
        J(
          s,
          {
            t: 1,
            angle: (() => {
              const u = Tt((a) => (() => {
                const c = Hn(s)(t.nodes), f = a._2.length - 1 | 0;
                return f >= 0 && f < a._2.length && c.tag === "Just" && a._2[f].x >= c._1.x && a._2[f].x <= c._1.x + c._1.w && a._2[f].y >= c._1.y && a._2[f].y <= c._1.y + c._1.h;
              })() ? T("Just", a._2) : v)(he(t.edges));
              if (0 < u.length) {
                const a = u[0].length - 1 | 0, c = a < 1 ? [] : Et(0, a, u[0]), f = c.length - 1 | 0;
                if (f >= 0 && f < c.length) {
                  const _ = u[0].length - 1 | 0;
                  return _ >= 0 && _ < u[0].length ? jo(u[0][_].y - c[f].y)(u[0][_].x - c[f].x) : 0;
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
          J(
            i._2._1.target,
            {
              t: (i._2._1.progress - 0.75) / 0.25,
              angle: (() => {
                const s = ao(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, a = u < 1 ? [] : Et(0, u, s._1), c = a.length - 1 | 0;
                  if (c >= 0 && c < a.length) {
                    const f = s._1.length - 1 | 0;
                    return f >= 0 && f < s._1.length ? jo(s._1[f].y - a[c].y)(s._1[f].x - a[c].x) : 0;
                  }
                  return s._1.length - 1 | 0, 0;
                }
                if (s.tag === "Nothing")
                  return 0;
                l();
              })(),
              bigCircle: e(i._2._1.target) || o(i._2._1.target),
              frameHash: r
            }
          )
        ];
      if (i._2._1.progress < 0.25)
        return [
          J(
            i._2._1.source,
            {
              t: i._2._1.progress / 0.25,
              angle: (() => {
                const s = ao(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? jo(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
                if (s.tag === "Nothing")
                  return 0;
                l();
              })(),
              bigCircle: e(i._2._1.source) || o(i._2._1.source),
              frameHash: r
            }
          )
        ];
    }
    return [];
  }));
}, WS = (t) => N((n) => (e) => (n * 31 | 0) + Ir(e) | 0)(5381)(qr(t.frameTitle)), Vm = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = WS(i), u = OS(o)(i);
  return _o((a) => {
    const c = Hn(a._1)(i.nodes);
    if (c.tag === "Just")
      return Hm(rg)(n)(e)(r)((() => {
        const f = Hn(a._1)(i.nodeFadeAlpha);
        if (f.tag === "Nothing")
          return 1;
        if (f.tag === "Just")
          return f._1;
        l();
      })())(t(a._1))((() => {
        const f = Hn(a._1)(i.nodeLabelFadeAlpha);
        if (f.tag === "Nothing")
          return 1;
        if (f.tag === "Just")
          return f._1;
        l();
      })())((() => {
        const f = Hn(a._1)(u);
        return f.tag === "Just" ? T("Just", f._1) : f.tag === "Nothing" && $S(a._1)(i.visited) ? T("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: s }) : v;
      })())(a._1)(a._2)(c._1);
    if (c.tag === "Nothing")
      return Z(ft("Return", void 0), gt);
    l();
  })(he(o.nodes));
}, QS = (t) => (n) => (e) => {
  const r = st.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = st.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, x_ = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, T_ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, A0 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, qS = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, MS = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, P0 = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), XS = /* @__PURE__ */ Qr(di)(Mt), US = (t) => (n) => {
  const e = Ne(t.angle), r = de(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, YS = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], R0 = (t) => (n) => {
  const e = (r) => QS(0)(255)(yn(Ue(j(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, ae = (t) => (n) => (e) => (r) => ({ x: (n - e) * de(t.angle), y: (n + e) * Ne(t.angle) - r }), lg = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  l();
}, VS = (t) => (n) => (e) => {
  const r = e.id, o = e.np, i = au({
    id: r,
    role: rg,
    geometry: su(
      "IsoSlab",
      {
        south: [e.box.ground.d, e.box.ground.c, e.box.top.c, e.box.top.d],
        east: [e.box.ground.b, e.box.ground.c, e.box.top.c, e.box.top.b],
        top: [e.box.top.a, e.box.top.b, e.box.top.c, e.box.top.d]
      }
    ),
    alpha: 1,
    plan: uu("IsoNodePlan", { config: t, palette: n })
  }), s = () => wu({
    owner: xi("NodeText", r),
    text: o.label,
    spec: {
      x: o.x + o.w / 2,
      y: 0,
      content: o.label,
      font: { family: n.fontFamily, size: 11, weight: 600 },
      color: n.text,
      align: lo,
      baseline: tr
    },
    bounds: v,
    plan: Tu("AffineText", US(t)(o.y + o.h))
  });
  return Z(
    i._1,
    (() => {
      if (i._2.tag === "CatNil")
        return at("CatCons", s, ut(X, X));
      if (i._2.tag === "CatCons")
        return at(
          "CatCons",
          i._2._1,
          ut(
            i._2._2._1,
            Lt("Cons", at("CatCons", s, ut(X, X)), i._2._2._2)
          )
        );
      l();
    })()
  );
}, KS = (t) => (n) => (e) => (r) => (o) => {
  const i = Fn(Zn, o, Et(1, o.length, o)), s = i.length - 1 | 0;
  return qt((u) => (a) => ({
    depth: (a._1.x + a._1.y + a._2.x + a._2.y) / 2,
    draw: km({
      id: e,
      geometry: mm("IsoSegments", [[ae(t)(a._1.x)(a._1.y)(0), ae(t)(a._2.x)(a._2.y)(0)]]),
      visible: { lo: 0, hi: 1 },
      arrow: r && u === s,
      settlingAtTarget: !1,
      plan: $m("IsoEdgePlan", { config: t, palette: n })
    })
  }))(i);
}, jS = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return gn(o);
    l();
  })();
  if (0 < i.length) {
    const u = ci(i)(x_(0)(1)(ss(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    l();
  }
  const s = ci(i)(x_(0)(1)(ss(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  l();
}, ZS = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(n._1.tail)((e) => [2, e.x, e.y])];
  l();
}, t5 = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: T_(r.minX)(o.x), minY: T_(r.minY)(o.y), maxX: A0(r.maxX)(o.x), maxY: A0(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  l();
}, n5 = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoSlab" && r.plan.tag === "IsoNodePlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(lg(u))({ color: a, flat: !0 })({
        color: i.nodeStroke,
        width: 1,
        lineJoin: re,
        lineCap: ze
      });
      return e.bind(s(o.south, R0(0.66)(i.nodeFill)))(() => e.bind(s(o.east, R0(0.82)(i.nodeFill)))(() => s(o.top, i.nodeFill)));
    }
    return n.Applicative0().pure();
  };
}, e5 = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoCube" && r.plan.tag === "IsoTokenPlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(lg(u))({ color: R0(a)(i.tokenOutsideFill), flat: !0 })({
        color: i.tokenOutsideStroke,
        width: 1,
        lineJoin: re,
        lineCap: ze
      });
      return e.bind(s(o.south, 0.66))(() => e.bind(s(o.east, 0.82))(() => s(o.top, 1)));
    }
    return n.Applicative0().pure();
  };
}, r5 = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, o5 = (t) => (n) => (e) => {
  const r = e.x - 5.5, o = e.x + 5.5, i = e.y - 5.5, s = e.y + 5.5, u = n + 11, a = ae(t)(o)(i)(u), c = ae(t)(o)(s)(u), f = ae(t)(r)(s)(u), _ = ae(t)(o)(s)(n);
  return { south: [ae(t)(r)(s)(n), _, c, f], east: [ae(t)(o)(i)(n), _, c, a], top: [ae(t)(r)(i)(u), a, c, f] };
}, i5 = (t) => (n) => (e) => (r) => {
  const o = r._1, i = (s, u) => ({
    depth: u.x + u.y,
    draw: Sm({
      id: o,
      pass: Nm,
      geometry: vm("IsoCube", o5(t)(s)(u)),
      position: u,
      plan: Tm("IsoTokenPlan", { config: t, palette: n, baseZ: s })
    })
  });
  if (r._2.tag === "Travelling") {
    const s = qS(r._2._1.edge)(e.edges);
    return s.tag === "Just" ? T("Just", i(0, jS(r._2._1.direction)(r._2._1.progress)(r._2._1.holdPre)(r._2._1.holdPost)(s._1))) : v;
  }
  if (r._2.tag === "Filling") {
    const s = MS(r._2._1.node)(e.nodes);
    if (s.tag === "Just")
      return T("Just", i(t.boxHeight, { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 }));
  }
  return v;
}, s5 = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: ae(t)(n.x)(n.y)(0), b: ae(t)(r)(n.y)(0), c: ae(t)(r)(e)(0), d: ae(t)(n.x)(e)(0) },
    top: { a: ae(t)(n.x)(n.y)(t.boxHeight), b: ae(t)(r)(n.y)(t.boxHeight), c: ae(t)(r)(e)(t.boxHeight), d: ae(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, Km = (t) => (n) => B((e) => ({ id: e._1, np: e._2, box: s5(t)(e._2) }))(P0(n.nodes)), u5 = (t) => (n) => [
  ...xt(Km(t)(n))(YS),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, Lt("Cons", r._4, e(r._6, o)));
      l();
    };
    return xt(nn(Sn.foldr, e(n.edges, X)))(B((r) => ae(t)(r.x)(r.y)(0)));
  })()
], a5 = (t) => (n) => (e) => (r) => {
  const o = cg(n), i = [
    ...xt(P0(e.edges))((a) => KS(t)(o)(a._1)((() => {
      const c = Ro("conn:")(a._1);
      if (c.tag === "Just")
        return !1;
      if (c.tag === "Nothing")
        return !0;
      l();
    })())(a._2)),
    ...B((a) => ({ depth: a.box.depth, draw: VS(t)(o)(a) }))(Km(t)(e)),
    ...Tt(i5(t)(o)(e))(P0(r.tokens))
  ], s = Jm({
    viewport: t5(u5(t)(e)),
    clear: T("Just", t.transparentBg ? o.bgTransparent : o.bg),
    dots: v
  }), u = () => XS((a) => a.draw)(Gt((a) => (c) => ot.compare(a.depth)(c.depth))(i));
  return Z(
    s._1,
    (() => {
      if (s._2.tag === "CatNil")
        return at("CatCons", u, ut(X, X));
      if (s._2.tag === "CatCons")
        return at(
          "CatCons",
          s._2._1,
          ut(
            s._2._2._1,
            Lt("Cons", at("CatCons", u, ut(X, X)), s._2._2._2)
          )
        );
      l();
    })()
  );
}, c5 = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = A0(1e-4)(oe(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return lg([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, f5 = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = Qr(e)(Mt);
  return (o) => {
    if (o.geometry.tag === "IsoSegments" && o.plan.tag === "IsoEdgePlan") {
      const i = o.plan._1.palette, s = o.geometry._1;
      return n.Bind1().bind(r((u) => t.strokePath(ZS(u))({
        color: i.edge,
        width: 1.5,
        lineJoin: re,
        lineCap: yr
      }))(s))(() => {
        const u = s.length - 1 | 0;
        if (u >= 0 && u < s.length) {
          const c = s[u], f = c.length - 1 | 0, _ = f < 1 ? [] : Et(0, f, c), d = _.length - 1 | 0;
          if (d >= 0 && d < _.length) {
            const p = s.length - 1 | 0, m = (() => {
              if (p >= 0 && p < s.length) {
                const h = s[p], $ = h.length - 1 | 0;
                if ($ >= 0 && $ < h.length)
                  return t.fillPath(c5({ from: _[d], to: h[$] }))({ color: i.arrowFill, flat: !0 });
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
}, jm = (t, n) => ({ tag: t, _1: n }), F0 = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, gg = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, Mi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, l5 = /* @__PURE__ */ ls(di)(Mt), g5 = /* @__PURE__ */ jm("ResolvedLabels"), _5 = (t) => {
  const n = Kt((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return Ga(t);
  l();
}, d5 = (t) => (n) => (e) => {
  const r = F0(0)(1)((e - t) / gg(1e-6)(n - t));
  return r * r * (3 - 2 * r);
}, Nu = (t) => (n) => {
  const e = gg(1)(wn(n.rootLayout).w), r = !n.diving && n.levels.length === 1, o = r ? 1 : n.diving ? 1 - F0(0)(1)(n.doorProgress) : 0, i = Ze(n.rootLayout)(n.camera), s = r ? 1 : F0(0)(1)(i.w / e), u = Ga(n).state.frameTitle === "" ? 0 * s * o : 40 * s * o, a = t.padding * s * s * o;
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return qx;
    if (t.outputAspect.tag === "Just")
      return xh(t.outputAspect._1);
    l();
  })()({ vx: i.x - a, vy: i.y - a - u, vw: i.w + 2 * a, vh: i.h + 2 * a + u });
}, h5 = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = Mi(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  l();
}, _g = (t) => (n) => {
  const e = Iv(n.segment.placement)({ x: t.vx, y: t.vy, w: t.vw, h: t.vh });
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, w_ = (t) => (n) => t === "" ? Z(ft("Return", void 0), gt) : wu({
  owner: Jk,
  text: t,
  spec: {
    x: n.vx + 6,
    y: n.vy + 6,
    content: t,
    font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
    color: { r: 180, g: 180, b: 180, a: 255 },
    align: os,
    baseline: A3
  },
  bounds: v,
  plan: qc
}), N_ = (t) => (n) => {
  if (t === "")
    return Z(ft("Return", void 0), gt);
  const e = n.vh / 720, r = 56 * e, o = yu({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 56, weight: 700 })(t), i = (s) => {
    const u = r + 16 * e * 2, a = s * e + 28 * e * 2, c = n.vy + n.vh / 2, f = n.vx + n.vw / 2, _ = { x: f - a / 2, y: c - u / 2, w: a, h: u };
    return Mc(Qc(
      "TitleCardOverlay",
      {
        backing: {
          path: Qi(_)(16 * e),
          fill: T("Just", { color: { r: 255, g: 255, b: 255, a: 235 }, flat: !0 }),
          stroke: T(
            "Just",
            { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * e, lineJoin: re, lineCap: yr }
          )
        },
        text: {
          owner: Cm,
          text: t,
          spec: {
            x: f,
            y: c,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 700 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: lo,
            baseline: tr
          },
          bounds: T("Just", _),
          plan: qc
        }
      }
    ));
  };
  return Z(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return at("CatCons", i, ut(X, X));
      if (o._2.tag === "CatCons")
        return at(
          "CatCons",
          o._2._1,
          ut(
            o._2._2._1,
            Lt("Cons", at("CatCons", i, ut(X, X)), o._2._2._2)
          )
        );
      l();
    })()
  );
}, C_ = (t) => (n) => {
  if (t === "")
    return Z(ft("Return", void 0), gt);
  const e = n.vh / 720, r = 15 * e, o = yu({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 15, weight: 600 })(t), i = (s) => {
    const u = n.vy + 12 * e, a = r + 6 * e * 2, c = s * e + 11 * e * 2, f = n.vx + n.vw / 2, _ = { x: f - c / 2, y: u, w: c, h: a };
    return Mc(Qc(
      "FrameTitleOverlay",
      {
        backing: T(
          "Just",
          {
            path: Qi(_)(a / 2),
            fill: T("Just", { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }),
            stroke: T(
              "Just",
              { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * e, lineJoin: re, lineCap: yr }
            )
          }
        ),
        text: {
          owner: Cm,
          text: t,
          spec: {
            x: f,
            y: u + a / 2,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 600 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: lo,
            baseline: tr
          },
          bounds: T("Just", _),
          plan: qc
        }
      }
    ));
  };
  return Z(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return at("CatCons", i, ut(X, X));
      if (o._2.tag === "CatCons")
        return at(
          "CatCons",
          o._2._1,
          ut(
            o._2._2._1,
            Lt("Cons", at("CatCons", i, ut(X, X)), o._2._2._2)
          )
        );
      l();
    })()
  );
}, p5 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = cg(t.theme), c = (() => {
    if (u.tag === "ResolvedLabels")
      return Ym(a)(o)(i)(s);
    if (u.tag === "SpringLabels")
      return tc(a)(i)(s)(Mm(o)(u._1));
    l();
  })(), f = Jm({ viewport: o, clear: T("Just", t.transparentBg ? a.bgTransparent : a.bg), dots: v }), _ = () => {
    const d = ce({
      path: [],
      role: Ee,
      layer: v,
      effects: e < 1 ? [Bn("GroupAlpha", e)] : []
    })((() => {
      const g = qm(a)(i)(s), p = () => {
        const m = Wm(r)(a)(t.halftoneShadows)(i)(s), h = () => {
          const $ = Vm((x) => r.tag !== "Nothing" && r.tag === "Just" && r._1 === x ? T("Just", 0) : v)(og)(1)(a)(i)(s), y = () => {
            const x = Qm(a)(i)(s), w = () => {
              const C = E0(a)(o)(i)(s), b = () => {
                const k = Om(H3)(a)(i)(s), E = () => {
                  const S = () => {
                    const I = LS(a)(i)(s);
                    return s.staticKind !== "Animated" ? I : Z(ft("Return", void 0), gt);
                  };
                  return Z(
                    c._1,
                    (() => {
                      if (c._2.tag === "CatNil")
                        return at("CatCons", S, ut(X, X));
                      if (c._2.tag === "CatCons")
                        return at(
                          "CatCons",
                          c._2._1,
                          ut(
                            c._2._2._1,
                            Lt(
                              "Cons",
                              at("CatCons", S, ut(X, X)),
                              c._2._2._2
                            )
                          )
                        );
                      l();
                    })()
                  );
                };
                return Z(
                  k._1,
                  (() => {
                    if (k._2.tag === "CatNil")
                      return at("CatCons", E, ut(X, X));
                    if (k._2.tag === "CatCons")
                      return at(
                        "CatCons",
                        k._2._1,
                        ut(
                          k._2._2._1,
                          Lt(
                            "Cons",
                            at("CatCons", E, ut(X, X)),
                            k._2._2._2
                          )
                        )
                      );
                    l();
                  })()
                );
              };
              return Z(
                C._1,
                (() => {
                  if (C._2.tag === "CatNil")
                    return at("CatCons", b, ut(X, X));
                  if (C._2.tag === "CatCons")
                    return at(
                      "CatCons",
                      C._2._1,
                      ut(
                        C._2._2._1,
                        Lt("Cons", at("CatCons", b, ut(X, X)), C._2._2._2)
                      )
                    );
                  l();
                })()
              );
            };
            return Z(
              x._1,
              (() => {
                if (x._2.tag === "CatNil")
                  return at("CatCons", w, ut(X, X));
                if (x._2.tag === "CatCons")
                  return at(
                    "CatCons",
                    x._2._1,
                    ut(
                      x._2._2._1,
                      Lt("Cons", at("CatCons", w, ut(X, X)), x._2._2._2)
                    )
                  );
                l();
              })()
            );
          };
          return Z(
            $._1,
            (() => {
              if ($._2.tag === "CatNil")
                return at("CatCons", y, ut(X, X));
              if ($._2.tag === "CatCons")
                return at(
                  "CatCons",
                  $._2._1,
                  ut(
                    $._2._2._1,
                    Lt("Cons", at("CatCons", y, ut(X, X)), $._2._2._2)
                  )
                );
              l();
            })()
          );
        };
        return Z(
          m._1,
          (() => {
            if (m._2.tag === "CatNil")
              return at("CatCons", h, ut(X, X));
            if (m._2.tag === "CatCons")
              return at(
                "CatCons",
                m._2._1,
                ut(
                  m._2._2._1,
                  Lt("Cons", at("CatCons", h, ut(X, X)), m._2._2._2)
                )
              );
            l();
          })()
        );
      };
      return Z(
        g._1,
        (() => {
          if (g._2.tag === "CatNil")
            return at("CatCons", p, ut(X, X));
          if (g._2.tag === "CatCons")
            return at(
              "CatCons",
              g._2._1,
              ut(
                g._2._2._1,
                Lt("Cons", at("CatCons", p, ut(X, X)), g._2._2._2)
              )
            );
          l();
        })()
      );
    })());
    if (e > 0) {
      const g = () => {
        const p = w_(t.watermark)(o), m = () => s.staticKind === "TitleCard" ? N_(s.frameTitle)(o) : C_(s.frameTitle)(o);
        return Z(
          p._1,
          (() => {
            if (p._2.tag === "CatNil")
              return at("CatCons", m, ut(X, X));
            if (p._2.tag === "CatCons")
              return at(
                "CatCons",
                p._2._1,
                ut(
                  p._2._2._1,
                  Lt("Cons", at("CatCons", m, ut(X, X)), p._2._2._2)
                )
              );
            l();
          })()
        );
      };
      return Z(
        d._1,
        (() => {
          if (d._2.tag === "CatNil")
            return at("CatCons", g, ut(X, X));
          if (d._2.tag === "CatCons")
            return at(
              "CatCons",
              d._2._1,
              ut(
                d._2._2._1,
                Lt("Cons", at("CatCons", g, ut(X, X)), d._2._2._2)
              )
            );
          l();
        })()
      );
    }
    return Z(
      ft("Return", void 0),
      at(
        "CatCons",
        () => {
          const g = w_(t.watermark)(o), p = () => s.staticKind === "TitleCard" ? N_(s.frameTitle)(o) : C_(s.frameTitle)(o);
          return Z(
            g._1,
            (() => {
              if (g._2.tag === "CatNil")
                return at("CatCons", p, ut(X, X));
              if (g._2.tag === "CatCons")
                return at(
                  "CatCons",
                  g._2._1,
                  ut(
                    g._2._2._1,
                    Lt("Cons", at("CatCons", p, ut(X, X)), g._2._2._2)
                  )
                );
              l();
            })()
          );
        },
        ut(X, X)
      )
    );
  };
  return Z(
    f._1,
    (() => {
      if (f._2.tag === "CatNil")
        return at("CatCons", _, ut(X, X));
      if (f._2.tag === "CatCons")
        return at(
          "CatCons",
          f._2._1,
          ut(
            f._2._2._1,
            Lt("Cons", at("CatCons", _, ut(X, X)), f._2._2._2)
          )
        );
      l();
    })()
  );
}, m5 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = i.segment.path.length - 1 | 0, u = s >= 0 && s < i.segment.path.length ? T("Just", i.segment.path[s]) : v;
  if (u.tag === "Nothing")
    return Z(ft("Return", void 0), gt);
  if (u.tag === "Just") {
    const a = Mi(u._1)(o.segment.layout.nodes);
    if (a.tag === "Nothing")
      return Z(ft("Return", void 0), gt);
    if (a.tag === "Just") {
      const c = a._1, f = Mi(u._1)(o.state.nodes), _ = (() => {
        if (f.tag === "Nothing")
          return zh;
        if (f.tag === "Just")
          return f._1;
        l();
      })(), d = Mi(u._1)(o.state.nodeInvert), g = (1 - d5(0.08)(0.14)(r)) * (() => {
        if (d.tag === "Nothing")
          return 1;
        if (d.tag === "Just")
          return 1 - d._1;
        l();
      })();
      return ce({
        path: o.segment.path,
        role: o.role,
        layer: v,
        effects: [
          Bn("GroupAlpha", o.bgAlpha),
          Bn("GroupTransform", ri, e)
        ]
      })((() => {
        const p = au({
          id: u._1,
          role: Sk,
          geometry: su("FlatNode", { shape: c.shape, bounds: { x: c.x, y: c.y + 5, w: c.w, h: c.h } }),
          alpha: 1,
          plan: uu(
            "FlatNodePlan",
            {
              palette: t,
              label: c.label,
              labelVisibility: us,
              inkBoost: n ? 1 : 0,
              labelAlpha: 0,
              outlineAlpha: T("Just", 1),
              arrival: v,
              animState: _
            }
          )
        }), m = () => {
          const h = au({
            id: u._1,
            role: rg,
            geometry: su("FlatNode", { shape: c.shape, bounds: { x: c.x, y: c.y, w: c.w, h: c.h } }),
            alpha: g,
            plan: uu(
              "FlatNodePlan",
              {
                palette: t,
                label: c.label,
                labelVisibility: us,
                inkBoost: 1,
                labelAlpha: 0,
                outlineAlpha: T("Just", 1),
                arrival: v,
                animState: _
              }
            )
          });
          return Z(
            h._1,
            (() => {
              if (h._2.tag === "CatNil")
                return at(
                  "CatCons",
                  () => L0(t)(1)(g)(u._1)(c)(_),
                  ut(X, X)
                );
              if (h._2.tag === "CatCons")
                return at(
                  "CatCons",
                  h._2._1,
                  ut(
                    h._2._2._1,
                    Lt(
                      "Cons",
                      at(
                        "CatCons",
                        () => L0(t)(1)(g)(u._1)(c)(_),
                        ut(X, X)
                      ),
                      h._2._2._2
                    )
                  )
                );
              l();
            })()
          );
        };
        return Z(
          p._1,
          (() => {
            if (p._2.tag === "CatNil")
              return at("CatCons", m, ut(X, X));
            if (p._2.tag === "CatCons")
              return at(
                "CatCons",
                p._2._1,
                ut(
                  p._2._2._1,
                  Lt("Cons", at("CatCons", m, ut(X, X)), p._2._2._2)
                )
              );
            l();
          })()
        );
      })());
    }
  }
  l();
}, Zm = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = [
    1,
    n.viewport.vx,
    n.viewport.vy,
    2,
    n.viewport.vx + n.viewport.vw,
    n.viewport.vy,
    2,
    n.viewport.vx + n.viewport.vw,
    n.viewport.vy + n.viewport.vh,
    2,
    n.viewport.vx,
    n.viewport.vy + n.viewport.vh,
    5
  ], f = a.state, _ = { tx: u.segment.placement.tx, ty: u.segment.placement.ty, sx: u.segment.placement.scale, sy: u.segment.placement.scale }, d = cg(t.theme), g = a.segment.layout, p = wn(g), m = { vx: p.x - 1e3, vy: p.y - 1e3, vw: p.w + 2e3, vh: p.h + 2e3 }, h = a.segment.path.length - 1 | 0, $ = h >= 0 && h < a.segment.path.length ? Mi(a.segment.path[h])(u.segment.layout.nodes) : v, y = a.role === "Active" || 11 * a.segment.placement.scale * e >= 5 ? og : us, x = _g(n.viewport)(a), w = (() => {
    if (y === "LabelsHidden")
      return Z(ft("Return", void 0), gt);
    if (y === "LabelsShown")
      return i.tag === "Leaf" ? Ym(d)(x)(g)(f) : tc(d)(g)(f)(Mm(x)(i));
    l();
  })(), C = { tx: a.segment.placement.tx, ty: a.segment.placement.ty, sx: a.segment.placement.scale, sy: a.segment.placement.scale }, b = ce({
    path: a.segment.path,
    role: a.role,
    layer: v,
    effects: [Bn("GroupAlpha", a.bgAlpha)]
  })((() => {
    const E = ce({
      path: a.segment.path,
      role: a.role,
      layer: v,
      effects: [
        Bn(
          "GroupClip",
          (() => {
            if (r >= 0.52)
              return c;
            const I = h5(u)((() => {
              const W = a.segment.path.length - 1 | 0;
              return W >= 0 && W < a.segment.path.length ? T("Just", a.segment.path[W]) : v;
            })());
            return I.length === 0 ? c : I;
          })(),
          is
        )
      ]
    })((() => {
      const I = (() => {
        if ($.tag === "Just")
          return ce({
            path: u.segment.path,
            role: u.role,
            layer: v,
            effects: [Bn("GroupTransform", ri, _)]
          })(Mc(Qc(
            "FloorOverlay",
            {
              path: ig({
                ...$._1,
                x: $._1.x + 1,
                y: $._1.y + 1,
                w: $._1.w - 2,
                h: $._1.h - 2
              }),
              fill: T("Just", { color: d.bg, flat: !0 }),
              stroke: v
            }
          )));
        if ($.tag === "Nothing")
          return Z(ft("Return", void 0), gt);
        l();
      })(), W = (u.role === "Active" || u.role === "FlyThrough") && !t.transparentBg ? I : Z(ft("Return", void 0), gt), D = () => {
        const O = ce({
          path: a.segment.path,
          role: a.role,
          layer: v,
          effects: [Bn("GroupTransform", ri, C)]
        })((() => {
          const et = qm(d)(g)(f), K = () => {
            const q = Wm(s)(d)(t.halftoneShadows)(g)(f), A = () => {
              const P = Vm((G) => s.tag !== "Nothing" && s.tag === "Just" && s._1 === G ? T("Just", 0) : v)(y)(1)(d)(g)(f), Q = () => {
                const G = Qm(d)(g)(f);
                return Z(
                  G._1,
                  (() => {
                    if (G._2.tag === "CatNil")
                      return at(
                        "CatCons",
                        () => E0(d)(m)(g)(f),
                        ut(X, X)
                      );
                    if (G._2.tag === "CatCons")
                      return at(
                        "CatCons",
                        G._2._1,
                        ut(
                          G._2._2._1,
                          Lt(
                            "Cons",
                            at(
                              "CatCons",
                              () => E0(d)(m)(g)(f),
                              ut(X, X)
                            ),
                            G._2._2._2
                          )
                        )
                      );
                    l();
                  })()
                );
              };
              return Z(
                P._1,
                (() => {
                  if (P._2.tag === "CatNil")
                    return at("CatCons", Q, ut(X, X));
                  if (P._2.tag === "CatCons")
                    return at(
                      "CatCons",
                      P._2._1,
                      ut(
                        P._2._2._1,
                        Lt("Cons", at("CatCons", Q, ut(X, X)), P._2._2._2)
                      )
                    );
                  l();
                })()
              );
            };
            return Z(
              q._1,
              (() => {
                if (q._2.tag === "CatNil")
                  return at("CatCons", A, ut(X, X));
                if (q._2.tag === "CatCons")
                  return at(
                    "CatCons",
                    q._2._1,
                    ut(
                      q._2._2._1,
                      Lt("Cons", at("CatCons", A, ut(X, X)), q._2._2._2)
                    )
                  );
                l();
              })()
            );
          };
          return Z(
            et._1,
            (() => {
              if (et._2.tag === "CatNil")
                return at("CatCons", K, ut(X, X));
              if (et._2.tag === "CatCons")
                return at(
                  "CatCons",
                  et._2._1,
                  ut(
                    et._2._2._1,
                    Lt("Cons", at("CatCons", K, ut(X, X)), et._2._2._2)
                  )
                );
              l();
            })()
          );
        })()), V = () => ce({
          path: a.segment.path,
          role: a.role,
          layer: v,
          effects: [Bn("GroupTransform", bk, C)]
        })(Om(O3)(d)(g)(f));
        return Z(
          O._1,
          (() => {
            if (O._2.tag === "CatNil")
              return at("CatCons", V, ut(X, X));
            if (O._2.tag === "CatCons")
              return at(
                "CatCons",
                O._2._1,
                ut(
                  O._2._2._1,
                  Lt("Cons", at("CatCons", V, ut(X, X)), O._2._2._2)
                )
              );
            l();
          })()
        );
      };
      return Z(
        W._1,
        (() => {
          if (W._2.tag === "CatNil")
            return at("CatCons", D, ut(X, X));
          if (W._2.tag === "CatCons")
            return at(
              "CatCons",
              W._2._1,
              ut(
                W._2._2._1,
                Lt("Cons", at("CatCons", D, ut(X, X)), W._2._2._2)
              )
            );
          l();
        })()
      );
    })()), S = () => ce({
      path: a.segment.path,
      role: a.role,
      layer: v,
      effects: [Bn("GroupTransform", ri, C)]
    })(w);
    return Z(
      E._1,
      (() => {
        if (E._2.tag === "CatNil")
          return at("CatCons", S, ut(X, X));
        if (E._2.tag === "CatCons")
          return at(
            "CatCons",
            E._2._1,
            ut(
              E._2._2._1,
              Lt("Cons", at("CatCons", S, ut(X, X)), E._2._2._2)
            )
          );
        l();
      })()
    );
  })()), k = () => u.role === "FlyThrough" ? m5(d)(t.halftoneShadows)(_)(o)(u)(a) : Z(ft("Return", void 0), gt);
  return Z(
    b._1,
    (() => {
      if (b._2.tag === "CatNil")
        return at("CatCons", k, ut(X, X));
      if (b._2.tag === "CatCons")
        return at(
          "CatCons",
          b._2._1,
          ut(
            b._2._2._1,
            Lt("Cons", at("CatCons", k, ut(X, X)), b._2._2._2)
          )
        );
      l();
    })()
  );
}, $5 = (t) => (n) => (e) => (r) => l5(r.minis)((o) => {
  const i = Zm(t)(n)(e)(0)(0)(z)(v)(r)(o);
  return (() => {
    const s = o.segment.path.length - 1 | 0;
    return o.bgAlpha > 0 && s >= 0 && s < o.segment.path.length && (() => {
      const u = Mi(o.segment.path[s])(r.state.nodes);
      if (u.tag === "Just")
        return u._1.tag === "Hidden" ? !1 : u._1.tag !== "PloppingOut";
      if (u.tag === "Nothing")
        return !1;
      l();
    })();
  })() ? i : Z(ft("Return", void 0), gt);
}), y5 = (t) => (n) => (e) => {
  if (t.theme === "Isometric")
    return a5({ ...r5, transparentBg: t.transparentBg })(t.theme)(Ga(e).segment.layout)(Ga(e).state);
  const r = Nu(t)(e), o = (a) => e.hasDives ? r.vw / gg(1)(wn(e.rootLayout).w) : 1, i = { tileScale: o(), viewport: r }, s = (a) => (c) => {
    if (c.length === 0)
      return Z(ft("Return", void 0), gt);
    const f = Bt((_) => v, (_) => (d) => T("Just", { head: _, tail: d }), c);
    if (f.tag === "Nothing")
      return Z(ft("Return", void 0), gt);
    if (f.tag === "Just") {
      const _ = Zm(t)(i)(e.camera.zoom)(e.diveDepth)(e.doorProgress)(f._1.head.role === "Active" ? n : z)((() => {
        if (f._1.head.role === "FlyThrough" && 0 < f._1.tail.length) {
          const d = f._1.tail[0].segment.path.length - 1 | 0;
          if (d >= 0 && d < f._1.tail[0].segment.path.length)
            return T("Just", f._1.tail[0].segment.path[d]);
        }
        return v;
      })())(a)(f._1.head);
      return f._1.head.role === "Active" || f._1.head.role === "FlyThrough" ? Z(
        _._1,
        (() => {
          if (_._2.tag === "CatNil")
            return at("CatCons", () => s(f._1.head)(f._1.tail), ut(X, X));
          if (_._2.tag === "CatCons")
            return at(
              "CatCons",
              _._2._1,
              ut(
                _._2._2._1,
                Lt(
                  "Cons",
                  at("CatCons", () => s(f._1.head)(f._1.tail), ut(X, X)),
                  _._2._2._2
                )
              )
            );
          l();
        })()
      ) : Z(
        ft("Return", void 0),
        at("CatCons", () => s(f._1.head)(f._1.tail), ut(X, X))
      );
    }
    l();
  }, u = Bt((a) => v, (a) => (c) => T("Just", { head: a, tail: c }), e.levels);
  if (u.tag === "Nothing")
    return Z(ft("Return", void 0), gt);
  if (u.tag === "Just") {
    const a = u._1.tail, c = u._1.head, f = a.length === 0, _ = p5(t)(o())(c.role === "Active" || c.role === "FlyThrough" ? c.bgAlpha : 0)((() => {
      if (c.role === "FlyThrough" && 0 < a.length) {
        const g = a[0].segment.path.length - 1 | 0;
        if (g >= 0 && g < a[0].segment.path.length)
          return T("Just", a[0].segment.path[g]);
      }
      return v;
    })())(r)(c.segment.layout)(_5(e).state)(f && n.tag !== "Leaf" ? jm("SpringLabels", n) : g5), d = () => {
      const g = $5(t)(i)(e.camera.zoom)(c);
      return c.role === "Active" || c.role === "FlyThrough" ? Z(
        g._1,
        (() => {
          if (g._2.tag === "CatNil")
            return at("CatCons", () => s(c)(a), ut(X, X));
          if (g._2.tag === "CatCons")
            return at(
              "CatCons",
              g._2._1,
              ut(
                g._2._2._1,
                Lt(
                  "Cons",
                  at("CatCons", () => s(c)(a), ut(X, X)),
                  g._2._2._2
                )
              )
            );
          l();
        })()
      ) : Z(
        ft("Return", void 0),
        at("CatCons", () => s(c)(a), ut(X, X))
      );
    };
    return Z(
      _._1,
      (() => {
        if (_._2.tag === "CatNil")
          return at("CatCons", d, ut(X, X));
        if (_._2.tag === "CatCons")
          return at(
            "CatCons",
            _._2._1,
            ut(
              _._2._2._1,
              Lt("Cons", at("CatCons", d, ut(X, X)), _._2._2._2)
            )
          );
        l();
      })()
    );
  }
  l();
}, G0 = (t) => (n) => (e) => Pk({ viewport: Nu(t)(e), camera: e.camera })(y5(t)(n)(e)), If = (t) => (n) => {
  if (n.fill.tag === "Just") {
    if (n.stroke.tag === "Just")
      return t.fillStrokePath(n.path)(n.fill._1)(n.stroke._1);
    if (n.stroke.tag === "Nothing")
      return t.fillPath(n.path)(n.fill._1);
    l();
  }
  if (n.fill.tag === "Nothing") {
    if (n.stroke.tag === "Just")
      return t.strokePath(n.path)(n.stroke._1);
    if (n.stroke.tag === "Nothing")
      return t.Monad0().Applicative0().pure();
  }
  l();
}, v5 = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Qr(n.Applicative0())(pc), o = Xm(t);
  return (i) => {
    if (i.tag === "FrameTitleOverlay") {
      const s = i._1;
      return e.bind(r(If(t))(s.backing))(() => o(s.text));
    }
    if (i.tag === "TitleCardOverlay") {
      const s = i._1;
      return e.bind(If(t)(s.backing))(() => o(s.text));
    }
    if (i.tag === "FloorOverlay")
      return If(t)(i._1);
    l();
  };
}, x5 = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = Qr(e)(Mt), o = t.popTransform, i = t.popBakedTransform, s = (() => {
    const a = t.popClip, c = t.popAlpha, f = t.popBlend, _ = t.popBlur;
    return (d) => {
      if (d.tag === "GroupTransform") {
        if (d._1 === "NormalTransform")
          return o;
        if (d._1 === "BakedTransform")
          return i;
        l();
      }
      if (d.tag === "GroupClip")
        return a;
      if (d.tag === "GroupAlpha")
        return c;
      if (d.tag === "GroupBlend")
        return f;
      if (d.tag === "GroupBlur")
        return _;
      l();
    };
  })(), u = t.popLayer;
  return (a) => n.Bind1().bind(r(s)(gn(a.effects)))(() => {
    if (a.layer.tag === "Just")
      return u;
    if (a.layer.tag === "Nothing")
      return e.pure();
    l();
  });
}, T5 = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = Qr(e)(Mt);
  return (o) => n.Bind1().bind((() => {
    if (o.layer.tag === "Just")
      return t.pushLayer(o.layer._1);
    if (o.layer.tag === "Nothing")
      return e.pure();
    l();
  })())(() => r((i) => {
    if (i.tag === "GroupTransform") {
      if (i._1 === "NormalTransform")
        return t.pushTransform(i._2);
      if (i._1 === "BakedTransform")
        return t.pushBakedTransform(i._2);
      l();
    }
    if (i.tag === "GroupClip")
      return t.pushClip(i._1)(i._2);
    if (i.tag === "GroupAlpha")
      return t.pushAlpha(i._1);
    if (i.tag === "GroupBlend")
      return t.pushBlend(i._1);
    if (i.tag === "GroupBlur")
      return t.pushBlur(i._1);
    l();
  })(o.effects));
}, t2 = (t) => {
  const n = t.Monad0(), e = AS(t), r = n5(t), o = HS(t), i = f5(t), s = bS(t), u = e5(t);
  return Ek(n)({
    beginFrame: (a) => t.setViewport(a.viewport),
    endFrame: n.Applicative0().pure(),
    beginGroup: T5(t),
    endGroup: x5(t),
    background: wS(t),
    overlay: v5(t),
    node: (a) => {
      if (a.geometry.tag === "FlatNode")
        return e(a);
      if (a.geometry.tag === "IsoSlab")
        return r(a);
      l();
    },
    edge: (a) => {
      if (a.geometry.tag === "FlatRoute")
        return o(a);
      if (a.geometry.tag === "IsoSegments")
        return i(a);
      l();
    },
    text: Xm(t),
    token: (a) => {
      if (a.geometry.tag === "FlatToken")
        return s(a);
      if (a.geometry.tag === "IsoCube")
        return u(a);
      l();
    },
    insideTokenStyle: t.insideTokenStyle,
    measureText: t.measureText,
    measureInk: t.measureInk
  });
}, w5 = fg(hm)(eg.measureText), b_ = /* @__PURE__ */ t2(eg), aa = (t) => Nu({
  padding: 24,
  outputAspect: t.width <= 0 || t.height <= 0 ? v : T("Just", t.width / t.height)
}), N5 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = {
    padding: 24,
    transparentBg: (() => {
      if (n === "TransparentBackground")
        return !0;
      if (n === "PaintBackground")
        return !1;
      l();
    })(),
    halftoneShadows: !1,
    watermark: "",
    theme: t,
    outputAspect: r.width <= 0 || r.height <= 0 ? v : T("Just", r.width / r.height)
  }, a = _m(e)(r);
  return () => {
    const c = a(), f = o.levels.length - 1 | 0;
    if (f >= 0 && f < o.levels.length) {
      const d = w5(_g(aa(r)(o))(o.levels[f]))(o.levels[f].segment.layout)(o.levels[f].state)(c)(), g = p0(i)(d)(s);
      return b_(G0(u)(g.applied)(o))(c)(), g.springs;
    }
    const _ = p0(i)(z)(s);
    return b_(G0(u)(_.applied)(o))(c)(), _.springs;
  };
}, Cu = (t) => "rgb(" + fn(t.r) + "," + fn(t.g) + "," + fn(t.b) + ")", Xo = (t) => t === 1 ? 7 : t === 2 ? 10 : t === 3 ? 14 : t === 4 ? 13 : t === 5 ? 5 : t === 6 ? 1 : t === 7 ? 4 : t === 8 ? 1 : t === 9 ? 2 : t === 10 ? 1 : t === 11 ? 2 : t === 12 ? 1 : t === 18 ? 2 : t === 19 ? 1 : t === 13 ? 2 : t === 14 ? 1 : t === 15 || t === 16 ? 5 : 1, _n = /* @__PURE__ */ wc(/* @__PURE__ */ xc("Fixed", /* @__PURE__ */ Tc(0)(20)(2))), dg = (t) => {
  const n = (e) => {
    const r = e >= 0 && e < t.length ? T("Just", t[e]) : v;
    if (r.tag === "Just")
      return r._1 === 1 ? [
        "M",
        _n((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 3 | 0)
      ] : r._1 === 2 ? [
        "L",
        _n((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 3 | 0)
      ] : r._1 === 3 ? [
        "Q",
        _n((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 3 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 4 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 5 | 0)
      ] : r._1 === 4 ? [
        "C",
        _n((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 3 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 4 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 5 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        _n((() => {
          const o = e + 6 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 7 | 0)
      ] : r._1 === 5 ? ["Z", ...n(e + 1 | 0)] : [];
    if (r.tag === "Nothing")
      return [];
    l();
  };
  return Mr(" ")(n(0));
}, C5 = (t) => _n(t.vx) + " " + _n(t.vy) + " " + _n(t.vw) + " " + _n(t.vh), Xe = (t) => (n) => yn(je(n >= 0 && n < t.length ? t[n] : 0)), Bf = (t) => (n) => {
  const e = Xe(t.ops)(n + 1 | 0);
  return Et(e, e + Xe(t.ops)(n + 2 | 0) | 0, t.paths);
}, J_ = /* @__PURE__ */ (() => {
  const t = sr("&")("&amp;"), n = sr("<")("&lt;"), e = (() => {
    const r = sr(">")("&gt;"), o = (() => {
      const i = sr('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), b5 = { vx: 0, vy: 0, vw: 1, vh: 1 }, J5 = (t) => ((e) => {
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
      r = s + Xo(t[s]) | 0;
      continue;
    }
    o = !1, i = b5;
  }
  return i;
})(0), Qs = (t) => (n) => ({ r: Xe(t)(n), g: Xe(t)(n + 1 | 0), b: Xe(t)(n + 2 | 0), a: Xe(t)(n + 3 | 0) }), k_ = (t) => (n) => ({
  color: Qs(t)(n),
  width: (() => {
    const e = n + 4 | 0;
    return e >= 0 && e < t.length ? t[e] : 0;
  })(),
  join: Xe(t)(n + 5 | 0),
  cap: Xe(t)(n + 6 | 0)
}), k5 = (t) => (n) => '<rect x="' + _n(t.vx) + '" y="' + _n(t.vy) + '" width="' + _n(t.vw) + '" height="' + _n(t.vh) + '" fill="' + Cu(n) + '" opacity="' + _n(j(n.a) / 255) + '"/>', S5 = (t) => (n) => '<path d="' + dg(t) + '" fill="' + Cu(n) + '" fill-opacity="' + _n(j(n.a) / 255) + '"/>', n2 = (t) => ' stroke="' + Cu(t.color) + '" stroke-opacity="' + _n(j(t.color.a) / 255) + '" stroke-width="' + _n(t.width) + '" stroke-linejoin="' + (t.join === 0 ? "round" : t.join === 1 ? "bevel" : "miter") + '" stroke-linecap="' + (t.cap === 0 ? "butt" : t.cap === 1 ? "round" : "square") + '"', L5 = (t) => (n) => (e) => '<path d="' + dg(t) + '" fill="' + Cu(n) + '" fill-opacity="' + _n(j(n.a) / 255) + '"' + n2(e) + "/>", E5 = (t) => (n) => '<path d="' + dg(t) + '" fill="none"' + n2(n) + "/>", A5 = (t) => (n) => {
  const e = Qs(t.ops)(n + 7 | 0), r = Xe(t.ops)(n + 12 | 0), o = Xe(t.ops)(n + 11 | 0);
  return '<text x="' + _n((() => {
    const i = n + 1 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" y="' + _n((() => {
    const i = n + 2 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '"' + (r === 0 ? ' dy="0.8em"' : r === 1 ? ' dy="0.32em"' : "") + ' fill="' + Cu(e) + '" fill-opacity="' + _n(j(e.a) / 255) + '" font-size="' + _n((() => {
    const i = n + 5 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" font-family="' + J_((() => {
    const i = Xe(t.ops)(n + 4 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] + ", ui-sans-serif, system-ui, sans-serif" : ", ui-sans-serif, system-ui, sans-serif";
  })()) + '" font-weight="' + fn(Xe(t.ops)(n + 6 | 0)) + '" text-anchor="' + (o === 0 ? "start" : o === 1 ? "middle" : "end") + '">' + J_((() => {
    const i = Xe(t.ops)(n + 3 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] : "";
  })()) + "</text>";
}, Uo = (t) => (n) => (e) => {
  const r = e >= 0 && e < n.ops.length ? T("Just", n.ops[e]) : v;
  if (r.tag === "Just")
    return r._1 === 1 ? S5(Bf(n)(e))(Qs(n.ops)(e + 3 | 0)) + Uo(t)(n)(e + Xo(r._1) | 0) : r._1 === 2 ? E5(Bf(n)(e))(k_(n.ops)(e + 3 | 0)) + Uo(t)(n)(e + Xo(r._1) | 0) : r._1 === 3 ? L5(Bf(n)(e))(Qs(n.ops)(e + 3 | 0))(k_(n.ops)(e + 7 | 0)) + Uo(t)(n)(e + Xo(r._1) | 0) : r._1 === 4 ? A5(n)(e) + Uo(t)(n)(e + Xo(r._1) | 0) : r._1 === 16 ? k5(t)(Qs(n.ops)(e + 1 | 0)) + Uo(t)(n)(e + Xo(r._1) | 0) : Uo(t)(n)(e + Xo(r._1) | 0);
  if (r.tag === "Nothing")
    return "";
  l();
}, P5 = (t) => {
  const n = J5(t.ops);
  return { viewBox: C5(n), body: Uo(n)(t)(0), vx: n.vx, vy: n.vy, vw: n.vw, vh: n.vh };
}, R5 = /* @__PURE__ */ p3(v3)(ry), S_ = (t) => (n) => {
  const e = t.strs;
  return () => {
    const r = V0(e);
    return t.strs.push(n), r;
  };
}, Uu = (t) => (n) => {
  const e = t.paths;
  return () => {
    const r = V0(e);
    return t.paths.push(...n), { offset: r, len: n.length };
  };
}, F5 = (t) => (n) => {
  const e = n.tx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.ty), t.ops.push(n.sx), t.ops.push(n.sy);
  };
}, L_ = (t) => (n) => {
  const e = n.vx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.vy), t.ops.push(n.vw), t.ops.push(n.vh);
  };
}, no = (t) => (n) => {
  const e = j(n), r = t.ops;
  return () => {
    r.push(e);
  };
}, Yu = (t) => (n) => {
  const e = n.len, r = no(t)(n.offset);
  return () => (r(), no(t)(e)());
}, G5 = () => {
  const t = [], n = [], e = [], r = [];
  return r.push(1), { ops: t, paths: n, strs: e, alphaStack: r };
}, I5 = (t) => {
  if (t.tag === "MeasureText") {
    const n = t._3(Vl(t._1)(t._2));
    return () => n;
  }
  if (t.tag === "MeasureInk") {
    const n = t._3(Kl(t._1)(t._2));
    return () => n;
  }
  l();
}, e2 = (t) => {
  const n = t.alphaStack;
  return () => {
    const e = V0(n);
    if (e === 0)
      return 1;
    const r = iy(zt, v, e - 1 | 0, t.alphaStack);
    if (r.tag === "Nothing")
      return 1;
    if (r.tag === "Just")
      return r._1;
    l();
  };
}, Yo = (t) => (n) => {
  const e = e2(t);
  return () => {
    const r = e();
    return no(t)(n.r)(), no(t)(n.g)(), no(t)(n.b)(), no(t)(yn(je(j(n.a) * r + 0.5)))();
  };
}, E_ = (t) => (n) => {
  const e = Yo(t)(n.color);
  return () => {
    e(), t.ops.push(n.width), t.ops.push((() => {
      if (n.lineJoin === "RoundJoin")
        return 0;
      if (n.lineJoin === "BevelJoin")
        return 1;
      if (n.lineJoin === "MiterJoin")
        return 2;
      l();
    })()), t.ops.push((() => {
      if (n.lineCap === "ButtCap")
        return 0;
      if (n.lineCap === "RoundCap")
        return 1;
      if (n.lineCap === "SquareCap")
        return 2;
      l();
    })());
  };
}, B5 = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r;
    if (u.tag === "FillPath") {
      const a = u._3, c = u._2, f = Uu(s)(u._1);
      o = !1, i = () => {
        const _ = f();
        return s.ops.push(1), Yu(s)(_)(), Yo(s)(c.color)(), a;
      };
      continue;
    }
    if (u.tag === "StrokePath") {
      const a = u._3, c = u._2, f = Uu(s)(u._1);
      o = !1, i = () => {
        const _ = f();
        return s.ops.push(2), Yu(s)(_)(), E_(s)(c)(), a;
      };
      continue;
    }
    if (u.tag === "FillStrokePath") {
      const a = u._2, c = u._4, f = u._3, _ = Uu(s)(u._1);
      o = !1, i = () => {
        const d = _();
        return s.ops.push(3), Yu(s)(d)(), Yo(s)(a.color)(), E_(s)(f)(), c;
      };
      continue;
    }
    if (u.tag === "DrawText") {
      const a = u._2, c = u._1, f = S_(s)(_i(c.content));
      o = !1, i = () => {
        const _ = f(), d = S_(s)(c.font.family)();
        return s.ops.push(4), s.ops.push(c.x), s.ops.push(c.y), no(s)(_)(), no(s)(d)(), s.ops.push(c.font.size), no(s)(c.font.weight)(), Yo(s)(c.color)(), s.ops.push((() => {
          if (c.align === "AlignLeft")
            return 0;
          if (c.align === "AlignCenter")
            return 1;
          if (c.align === "AlignRight")
            return 2;
          l();
        })()), s.ops.push((() => {
          if (c.baseline === "BaselineTop")
            return 0;
          if (c.baseline === "BaselineMiddle")
            return 1;
          if (c.baseline === "BaselineAlphabetic")
            return 2;
          if (c.baseline === "BaselineBottom")
            return 3;
          l();
        })()), a;
      };
      continue;
    }
    if (u.tag === "DrawTextAffine") {
      e = s, r = Yt(
        "DrawText",
        { ...u._2, x: u._1.a * u._2.x + u._1.c * u._2.y + u._1.e, y: u._1.b * u._2.x + u._1.d * u._2.y + u._1.f },
        u._3
      );
      continue;
    }
    if (u.tag === "PushTransform") {
      const a = u._2, c = u._1, f = s.ops;
      o = !1, i = () => (f.push(5), F5(s)(c)(), a);
      continue;
    }
    if (u.tag === "PopTransform") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(6), a);
      continue;
    }
    if (u.tag === "PushClip") {
      const a = u._3, c = u._2, f = Uu(s)(u._1);
      o = !1, i = () => {
        const _ = f();
        return s.ops.push(7), Yu(s)(_)(), s.ops.push((() => {
          if (c === "NonZero")
            return 0;
          if (c === "EvenOdd")
            return 1;
          l();
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
      const a = u._1, c = u._2, f = s.ops;
      o = !1, i = () => (f.push(9), s.ops.push((() => {
        if (a === "Normal")
          return 0;
        if (a === "Difference")
          return 1;
        l();
      })()), c);
      continue;
    }
    if (u.tag === "PopBlend") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(10), a);
      continue;
    }
    if (u.tag === "PushAlpha") {
      const a = u._1, c = u._2, f = e2(s);
      o = !1, i = () => {
        const _ = f();
        return s.alphaStack.push(_ * a), s.ops.push(11), s.ops.push(a), c;
      };
      continue;
    }
    if (u.tag === "PopAlpha") {
      const a = u._1, c = s.alphaStack;
      o = !1, i = () => (sy(zt, v, c), s.ops.push(12), a);
      continue;
    }
    if (u.tag === "PushBlur") {
      const a = u._2, c = u._1, f = s.ops;
      o = !1, i = () => (f.push(18), s.ops.push(c), a);
      continue;
    }
    if (u.tag === "PopBlur") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(19), a);
      continue;
    }
    if (u.tag === "PushLayer") {
      const a = u._1, c = u._2, f = s.ops;
      o = !1, i = () => (f.push(13), s.ops.push((() => {
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
        l();
      })()), c);
      continue;
    }
    if (u.tag === "PopLayer") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(14), a);
      continue;
    }
    if (u.tag === "SetViewport") {
      const a = u._2, c = u._1, f = s.ops;
      o = !1, i = () => (f.push(15), L_(s)(c)(), a);
      continue;
    }
    if (u.tag === "ClearBackground") {
      const a = u._1, c = u._2, f = s.ops;
      o = !1, i = () => (f.push(16), Yo(s)(a)(), c);
      continue;
    }
    if (u.tag === "BackgroundDots") {
      const a = u._2, c = u._1, f = s.ops;
      o = !1, i = () => (f.push(17), L_(s)(c.viewport)(), Yo(s)(c.bgColor)(), Yo(s)(c.dotColor)(), s.ops.push(c.tile), s.ops.push(c.dotRadius), s.ops.push(c.origin.x), s.ops.push(c.origin.y), a);
      continue;
    }
    l();
  }
  return i;
}, D5 = (t) => (n) => n.type === "metrics" ? I5(n.value) : n.type === "render" ? B5(t)(n.value) : va("Data.Functor.Variant: pattern match failure [" + n.type + "]"), z5 = (t) => {
  const n = G5();
  return R5(D5(n))(t)(), { ops: n.ops, paths: n.paths, strs: n.strs };
}, r2 = (t) => t, bu = (t) => t, A_ = /* @__PURE__ */ bu("Light"), H5 = /* @__PURE__ */ bu("Dark"), O5 = /* @__PURE__ */ bu("Blueprint"), W5 = /* @__PURE__ */ bu("Whiteboard"), Q5 = /* @__PURE__ */ bu("Isometric"), q5 = /* @__PURE__ */ r2("PaintBackground"), M5 = /* @__PURE__ */ r2("TransparentBackground"), Lo = (t) => "rgb(" + fn(t.r) + "," + fn(t.g) + "," + fn(t.b) + ")", Vu = /* @__PURE__ */ wc(/* @__PURE__ */ xc("Fixed", /* @__PURE__ */ Tc(0)(20)(6))), Pr = /* @__PURE__ */ wc(/* @__PURE__ */ xc("Fixed", /* @__PURE__ */ Tc(0)(20)(4))), X5 = (t) => "translate(" + Pr(t.tx) + "," + Pr(t.ty) + ") scale(" + Pr(t.sx) + "," + Pr(t.sy) + ")", Qt = /* @__PURE__ */ wc(/* @__PURE__ */ xc("Fixed", /* @__PURE__ */ Tc(0)(20)(2))), hg = (t) => {
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
        n.push("M"), n.push(Qt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(Qt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(Qt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(Qt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Qt((() => {
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
    l();
  }
  return Mr(" ")(n);
}, U5 = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, I0 = /* @__PURE__ */ (() => {
  const t = sr("&")("&amp;"), n = sr("<")("&lt;"), e = (() => {
    const r = sr(">")("&gt;"), o = (() => {
      const i = sr('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Y5 = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + I0(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + I0(t.text) + "</tspan>";
  l();
}, ne = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, V5 = (t) => (n) => {
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
    l();
  }
  return e;
}, Ku = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return V5(r._1)(n);
    l();
  };
}, o2 = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => U5
}, K5 = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => o2
}, j5 = { pure: (t) => (n) => () => t, Apply0: () => o2 }, i2 = { Applicative0: () => j5, Bind1: () => K5 }, Z5 = (t) => (n) => '<defs><pattern id="' + t + '" x="' + Qt(n.origin.x) + '" y="' + Qt(n.origin.y) + '" width="' + Qt(n.tile) + '" height="' + Qt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + Qt(n.tile) + '" height="' + Qt(n.tile) + '" fill="' + Lo(n.bgColor) + '" fill-opacity="' + Qt(j(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + Qt(n.tile / 2) + '" cy="' + Qt(n.tile / 2) + '" r="' + Qt(n.dotRadius) + '" fill="' + Lo(n.dotColor) + '"/></pattern></defs><rect x="' + Qt(n.viewport.vx) + '" y="' + Qt(n.viewport.vy) + '" width="' + Qt(n.viewport.vw) + '" height="' + Qt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', P_ = (t) => (n) => '<path d="' + hg(t) + '" fill="' + Lo(n) + '" fill-opacity="' + Qt(j(n.a) / 255) + '"/>', tL = (t) => (n) => (e) => (r) => '<rect x="' + Qt(t.x) + '" y="' + Qt(t.y) + '" width="' + Qt(t.w) + '" height="' + Qt(t.h) + '" rx="' + Qt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + Lo(e._1.color) + '" fill-opacity="' + Qt(j(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  l();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + Lo(r._1.color) + '" stroke-opacity="' + Qt(j(r._1.color.a) / 255) + '" stroke-width="' + Qt(r._1.width) + '" stroke-linejoin="' + (() => {
      if (r._1.lineJoin === "RoundJoin")
        return "round";
      if (r._1.lineJoin === "BevelJoin")
        return "bevel";
      if (r._1.lineJoin === "MiterJoin")
        return "miter";
      l();
    })() + '" stroke-linecap="' + (() => {
      if (r._1.lineCap === "ButtCap")
        return "butt";
      if (r._1.lineCap === "RoundCap")
        return "round";
      if (r._1.lineCap === "SquareCap")
        return "square";
      l();
    })() + '"';
  if (r.tag === "Nothing")
    return "";
  l();
})() + "/>", R_ = (t) => (n) => '<path d="' + hg(t) + '" fill="none" stroke="' + Lo(n.color) + '" stroke-opacity="' + Qt(j(n.color.a) / 255) + '" stroke-width="' + Qt(n.width) + '" stroke-linejoin="' + (() => {
  if (n.lineJoin === "RoundJoin")
    return "round";
  if (n.lineJoin === "BevelJoin")
    return "bevel";
  if (n.lineJoin === "MiterJoin")
    return "miter";
  l();
})() + '" stroke-linecap="' + (() => {
  if (n.lineCap === "ButtCap")
    return "butt";
  if (n.lineCap === "RoundCap")
    return "round";
  if (n.lineCap === "SquareCap")
    return "square";
  l();
})() + '"/>', F_ = (t) => {
  const n = Ip(_i(t.content));
  return '<text x="' + Qt(t.x) + '" y="' + Qt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    l();
  })() + ' fill="' + Lo(t.color) + '" fill-opacity="' + Qt(j(t.color.a) / 255) + '" font-size="' + Qt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + fn(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    l();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? I0(n[0].text) : Mr("")(B(Y5)(n))) + "</text>";
}, nL = (t) => "matrix(" + Pr(t.a) + " " + Pr(t.b) + " " + Pr(t.c) + " " + Pr(t.d) + " " + Pr(t.e) + " " + Pr(t.f) + ")", s2 = {
  fillPath: (t) => (n) => (e) => {
    const r = Ku(e)(t);
    return () => {
      const o = r();
      return ne(P_(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = Ku(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return ne(R_(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        l();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = Ku(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return ne(P_(i)(n.color) + R_(i)((() => {
        if (s.tag === "Nothing")
          return e;
        if (s.tag === "Just")
          return { ...e, width: s._1.sx * e.width };
        l();
      })()))(r)();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = o.bake;
    return () => {
      const s = i.value;
      return ne(tL((() => {
        if (s.tag === "Nothing")
          return t;
        if (s.tag === "Just")
          return { x: s._1.sx * t.x + s._1.tx, y: s._1.sy * t.y + s._1.ty, w: s._1.sx * t.w, h: s._1.sy * t.h };
        l();
      })())((() => {
        if (s.tag === "Nothing")
          return n;
        if (s.tag === "Just")
          return s._1.sx * n;
        l();
      })())(e)(r.tag === "Just" ? T(
        "Just",
        (() => {
          if (s.tag === "Nothing")
            return r._1;
          if (s.tag === "Just")
            return { ...r._1, width: s._1.sx * r._1.width };
          l();
        })()
      ) : v))(o)();
    };
  },
  drawText: (t) => (n) => {
    const e = n.bake;
    return () => {
      const r = e.value;
      return ne(F_((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        l();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => ne((() => {
    const e = 'transform="' + nL(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + F_(n) + "</g>";
  })()),
  pushTransform: (t) => ne((() => {
    const n = 'transform="' + X5(t) + '"';
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
      const i = Ku(e)(t)(), s = "clip" + fn(o);
      return ne((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + hg(i) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          l();
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
      l();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ ne("</g>"),
  pushAlpha: (t) => ne((() => {
    const n = 'opacity="' + Qt(t) + '"';
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
      const o = "lvl-blur-" + fn(r);
      return ne((() => {
        const i = 'filter="url(#' + o + ')"';
        return '<defs><filter id="' + o + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="' + Qt(t) + '"/></filter></defs>' + (i === "" ? "<g>" : "<g " + i + ">");
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
  clearBackground: (t) => (n) => ne('<rect x="' + Qt(n.viewport.vx) + '" y="' + Qt(n.viewport.vy) + '" width="' + Qt(n.viewport.vw) + '" height="' + Qt(n.viewport.vh) + '" fill="' + Lo(t) + '" opacity="' + Qt(j(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, ne(Z5("bg-dots-" + fn(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = Vl(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = Kl(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => tg,
  Monad0: () => i2
}, eL = /* @__PURE__ */ t2(s2), rL = fg(i2)(s2.measureText), oL = (t) => (n) => (e) => (r) => (o) => {
  const i = {
    padding: 24,
    transparentBg: (() => {
      if (r === "TransparentBackground")
        return !0;
      if (r === "PaintBackground")
        return !1;
      l();
    })(),
    halftoneShadows: !1,
    watermark: "",
    theme: e,
    outputAspect: t
  }, s = Nu(i)(o);
  return {
    viewBox: Vu(s.vx) + " " + Vu(s.vy) + " " + Vu(s.vw) + " " + Vu(s.vh),
    body: (() => {
      const u = [], a = { value: 0 }, c = { value: 0 }, f = { value: 0 }, _ = { value: v };
      return eL(G0(i)(n)(o))({ out: u, maskDepth: a, clipCounter: c, patternCounter: f, viewport: s, bake: _ })(), Mr("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, iL = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = {
    padding: 24,
    transparentBg: (() => {
      if (e === "TransparentBackground")
        return !0;
      if (e === "PaintBackground")
        return !1;
      l();
    })(),
    outputAspect: t
  }, u = p0(o)((() => {
    const a = [], c = { value: 0 }, f = { value: 0 }, _ = { value: 0 }, d = { value: v }, g = r.levels.length - 1 | 0;
    if (g >= 0 && g < r.levels.length) {
      const p = _g(Nu(s)(r))(r.levels[g]);
      return rL(p)(r.levels[g].segment.layout)(r.levels[g].state)({
        out: a,
        maskDepth: c,
        clipCounter: f,
        patternCounter: _,
        viewport: p,
        bake: d
      })();
    }
    return z;
  })())(i);
  return { parts: oL(t)(u.applied)(n)(e)(r), springs: u.springs };
}, To = (t, n) => ({ tag: t, _1: n }), Uc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Oe = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, u2 = /* @__PURE__ */ dn(R)(Mt), G_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, a2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, c2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, I_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Ji = /* @__PURE__ */ (() => {
  const t = Se.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return T("Just", J(n._1, n._2));
    l();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, Lt("Cons", r._3, e(r._6, o)));
      l();
    };
    return e(n, X);
  })());
})(), sL = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), B0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, f2 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, uL = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, ju = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, aL = /* @__PURE__ */ To("NoKeyframes"), cL = (t) => To("DuplicateEventId", t), fL = (t) => To("UnknownEvent", t), l2 = (t) => (n) => ({
  ...n,
  cameraSpans: Dh(n.cameraConfig)(t)(n.layout)(n.keyframes)({
    endT: n.totalDuration,
    spans: n.spans,
    windows: n.windows,
    segments: n.segments,
    dives: n.dives
  })
}), lL = (t) => (n) => (e) => (r) => {
  const o = Uc(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return mu(o._1);
    l();
  })(), s = Oe(t.minTokenDuration)(Oe(j(N((u) => (a) => u + $s(a).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.post;
  return { duration: s, holdPre: 0, holdPost: s <= 0 ? 0 : e.post / s };
}, gL = /* @__PURE__ */ yc((t) => {
  const n = fo(`
`)(t);
  return n.length === 0 ? [""] : n;
}), _L = (t) => (n) => u2(Tt((e) => {
  if (e.kind.tag === "SendToken")
    return T(
      "Just",
      J(
        e.id,
        {
          post: (() => {
            const r = e.id;
            return (() => {
              const o = e.kind._1.to;
              return Cn(
                (i) => {
                  if (i.kind.tag === "SendToken")
                    return (i.when.tag === "First" ? !1 : i.when.tag === "After" && i.when._1 === r) && i.kind._1.from === o;
                  if (i.kind.tag === "FillNodeWithoutTransition")
                    return !1;
                  l();
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
  l();
})(n)), dL = (t) => {
  if (t.event.kind.tag === "SendToken")
    return T(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: Ri(
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
      { startT: t.startT, endT: t.endT, target: Ri("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) }
    );
  l();
}, hL = (t) => Tt((() => {
  const n = t.path;
  return (e) => e.target.tag === "TokenWindow" ? T(
    "Just",
    { path: n, eventId: e.target._1, window: e, from: e.target._4, to: e.target._5, labels: e.target._6, holdPre: e.target._7, holdPost: e.target._8 }
  ) : v;
})())(t.windows), pL = (t) => (n) => (e) => {
  const r = Uc(e)(t);
  if (r.tag === "Nothing")
    return y1;
  if (r.tag === "Just") {
    const o = G_(r._1.target)(n);
    return G_(r._1.source)(n) ? o ? MT : qT : y1;
  }
  l();
}, B_ = (t) => (n) => {
  if (t.tag === "Just" && t._1 > n.endT + 1e-4) {
    const e = Oe(0)(n.endT - n.startT), r = Oe(n.startT)(t._1 - e);
    return { ...n, startT: r, endT: r + e };
  }
  return n;
}, g2 = /* @__PURE__ */ B(co), mL = { post: 0 }, $L = (t) => (n) => (e) => (r) => (o) => {
  const i = a2(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return mL;
    if (i.tag === "Just")
      return i._1;
    l();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const c = o.event.when._1, f = Kt((_) => _.event.id === c)(r);
      if (f.tag === "Nothing")
        return 0;
      if (f.tag === "Just")
        return f._1.endT;
      l();
    }
    if (o.event.when.tag === "With") {
      const c = o.event.when._1, f = Kt((_) => _.event.id === c)(r);
      if (f.tag === "Nothing")
        return 0;
      if (f.tag === "Just")
        return f._1.startT;
    }
    l();
  })(), a = (() => {
    if (o.event.kind.tag === "SendToken")
      return lL(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    l();
  })();
  return kt(r)({ startT: u, endT: u + a.duration, event: o.event, holdPre: a.holdPre, holdPost: a.holdPost });
}, _2 = (t) => (n) => (e) => N($L(t)(n)(_L(t)(e)))([])(qt((r) => (o) => ({ event: o }))(e)), yL = (t) => N((n) => (e) => {
  const r = Ke(n);
  if (r.tag === "Nothing")
    return [e];
  if (r.tag === "Just")
    return e.startT <= r._1.last.endT + 1e-4 ? kt(r._1.init)({ ...r._1.last, endT: Oe(r._1.last.endT)(e.endT) }) : kt(n)(e);
  l();
})([])(Gt((n) => (e) => ot.compare(n.startT)(e.startT))(t)), vL = (t) => (n) => {
  const e = c2(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  l();
}, xL = (t) => (n) => {
  const e = Gt(ot.compare)(Tt((r) => r.target.tag === "TokenWindow" ? r.target._4 === n || r.target._5 === n ? T("Just", r.startT) : v : r.target.tag === "FillWindow" && r.target._2 === n ? T("Just", r.startT) : v)(t));
  return 0 < e.length ? T("Just", e[0]) : v;
}, TL = (t) => (n) => {
  const e = Gt(ot.compare)(Tt((r) => r.target.tag === "TokenWindow" && r.target._2 === n ? T("Just", r.startT) : v)(t));
  return 0 < e.length ? T("Just", e[0]) : v;
}, wL = (t) => (n) => n.target.tag === "NodeWindow" ? n.target._2 === "PlopIn" ? B_(xL(t.windows)(n.target._1))(n) : n : n.target.tag === "EdgeWindow" && n.target._2.tag === "Extend" ? B_(TL(t.windows)(n.target._1))(n) : n, NL = (t) => ({ ...t, windows: Gt((n) => (e) => ot.compare(n.startT)(e.startT))(B(wL(t))(t.windows)) }), CL = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  l();
}, D_ = { id: "", nodes: z, edges: z, kind: $u }, bL = (t) => (n) => jv((() => {
  const e = I_(n.from)(t);
  if (e.tag === "Nothing")
    return D_;
  if (e.tag === "Just")
    return e._1;
  l();
})())((() => {
  const e = I_(n.to)(t);
  if (e.tag === "Nothing")
    return D_;
  if (e.tag === "Just")
    return e._1;
  l();
})()), JL = (t) => (n) => {
  const e = c2(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: z };
  if (e.tag === "Just")
    return e._1;
  l();
}, d2 = { id: "", index: -1, kind: "", name: "", time: 0, endTime: 0, path: [], tokenIndex: -1, lineIndex: -1, text: "", from: "", to: "" }, kL = (t) => (n) => n.scene.tag === "StepScene" ? T(
  "Just",
  { ...d2, id: "step:" + n.scene._1, kind: "step", name: n.scene._1, time: n.startT, endTime: n.startT, path: g2(t) }
) : v, SL = (t) => Tt(kL(t.path))(t.spans), Df = (t) => (n) => (e) => (r) => {
  const o = Uc(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Oe(n)(mu(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  l();
}, h2 = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = bL(e)(o), u = B((g) => ({
    startT: 0,
    endT: 0 + Df(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Ri(
      "EdgeWindow",
      g,
      ka("Extend", i0)
    )
  }))(Ji(s.entering.edges)), a = B((g) => ({ startT: 0, endT: i, target: Ri("NodeWindow", g, o0) }))(Ji(s.entering.nodes)), c = N(Oe)(0)(B((g) => Df(t.edgeSpeed)(t.minEdgeDuration)(n)(g))(Ji(s.leaving.edges))), f = (g) => Cn(
    (p) => {
      const m = Uc(p)(r);
      if (m.tag === "Just")
        return m._1.source === g || m._1.target === g;
      if (m.tag === "Nothing")
        return !1;
      l();
    },
    Ji(s.leaving.edges)
  ) ? c : 0, _ = B((g) => ({
    startT: f(g),
    endT: f(g) + t.plop,
    target: Ri("NodeWindow", g, Xx)
  }))(Ji(s.leaving.nodes)), d = B((g) => ({
    startT: 0,
    endT: Df(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Ri(
      "EdgeWindow",
      g,
      ka("Retract", pL(r)(s.leaving.nodes)(g))
    )
  }))(Ji(s.leaving.edges));
  return {
    duration: (() => {
      const g = Gt(ot.compare)([
        ...B((m) => m.endT)(d),
        ...B((m) => m.endT)(_),
        ...B((m) => m.endT)(a),
        ...B((m) => m.endT)(u)
      ]), p = g.length - 1 | 0;
      return p >= 0 && p < g.length ? g[p] + t.gap : t.gap;
    })(),
    windows: [...d, ..._, ...a, ...u]
  };
}, LL = (t) => (n) => (e) => (r) => (o) => (i) => B((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(h2(t)(n)(e)(r)(i).windows), EL = (t) => Tt((n) => nn(Ui, n).length > 1 ? T(
  "Just",
  (() => {
    const e = Bt(
      (r) => v,
      (r) => (o) => T("Just", { head: r, tail: o }),
      nn(Ui, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    l();
  })()
) : v)(Jy(Eo)(Gt(R.compare)(t))), AL = (t) => {
  const n = B((r) => r.id)(t), e = sL(n);
  return [
    ...B(cL)(EL(n)),
    ...B(fL)(dt((r) => !B0(r)(e), xt(t)(CL)))
  ];
}, PL = (t) => {
  const n = u2(B((r) => J(
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
      l();
    })()
  ))(t)), e = (r) => (o) => (i) => {
    if (B0(i)(o))
      return [To("ScheduleCycle", [...nn(Re.foldr, o), i])];
    if (B0(i)(r))
      return [];
    const s = a2(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return xt(s._1)(e(rt(R)(i)()(r))(rt(R)(i)()(o)));
    l();
  };
  return xt(t)((r) => e(z)(z)(r.id));
}, pg = {
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
  nodeEasing: ax,
  edgeEasing: kr,
  tokenEasing: dh,
  diveDur: 2.45,
  retreatDur: 2.45
}, RL = (t) => (n) => (e) => (r) => B((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(Tt(dL)(_2(t)(n)(r.events))), FL = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return LL(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return RL(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  if (o.scene.tag === "StepScene")
    return [];
  l();
}, GL = (t) => (n) => (e) => {
  const r = _2(t)(n)(e.events);
  return r.length === 0 ? t.gap : N(Oe)(0)(B((o) => o.endT)(r)) + t.gap;
}, IL = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return h2(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return GL(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode" || o.tag === "StepScene")
    return 0;
  l();
}, p2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Dv(n)(r), u = e.layout, a = gh(B((h) => J(h.id, h))(o.keyframes)), c = 0 < o.keyframes.length ? T("Just", o.keyframes[0]) : v, f = (() => {
    if (c.tag === "Just")
      return c._1.id;
    if (c.tag === "Nothing")
      return "";
    l();
  })(), _ = sx(o), d = (h) => ({ startT: h.runStart, endT: h.t, path: r, layout: u, placement: s, windows: h.runWindows, spans: h.runSpans, keyframes: a, initialKeyframe: f, edgeEndpoints: _ }), g = (h) => ({ segments: h.runSpans.length === 0 ? h.segments : kt(h.segments)(d(h)), spans: h.spans, windows: h.windows, dives: h.dives }), p = N((h) => ($) => {
    if ($.tag === "EnterNode") {
      const C = g(h), b = h.runSpans.length === 0 ? { ...C, segments: kt(C.segments)(d(h)) } : C, k = h.t + t.diveDur, E = kt(r)($._1), S = p2(t)(n)(JL(e)($._1))(E)(vL(o)($._1))(k), I = S.endT + t.retreatDur;
      return {
        ...h,
        t: I,
        runStart: I,
        runSpans: [],
        runWindows: [],
        segments: [...b.segments, ...S.segments],
        spans: [...b.spans, ...S.spans],
        windows: [...b.windows, ...S.windows],
        dives: [
          ...b.dives,
          { startT: h.t, endT: k, node: $._1, parentPath: r, childPath: E, direction: Ux },
          ...S.dives,
          { startT: S.endT, endT: I, node: $._1, parentPath: r, childPath: E, direction: Yx }
        ]
      };
    }
    if ($.tag === "ExitNode")
      return h;
    const y = h.t + IL(t)(u)(a)(_)($), x = { startT: h.t, endT: y, scene: $ }, w = FL(t)(u)(a)(_)(x);
    return {
      ...h,
      t: y,
      runSpans: kt(h.runSpans)(x),
      runWindows: [...h.runWindows, ...w],
      spans: kt(h.spans)(x),
      windows: [...h.windows, ...w]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), m = g(p);
  return {
    endT: p.t,
    spans: m.spans,
    windows: Gt((h) => ($) => ot.compare(h.startT)($.startT))(m.windows),
    segments: m.segments,
    dives: m.dives
  };
}, BL = (t) => (n) => {
  const e = ot.compare(t.time)(n.time);
  return e === "EQ" ? R.compare(t.id)(n.id) : e;
}, Qe = (t) => (n) => n - N((e) => (r) => e + Oe(0)(f2(n)(r.endT) - r.startT))(0)(t), DL = (t) => (n) => {
  const e = Oe(t.startT)(n.startT), r = f2(t.endT)(n.endT);
  return r > e + 1e-4 ? T("Just", { startT: e, endT: r }) : v;
}, zL = (t) => (n) => {
  if (n.scene.tag === "Structural") {
    const e = N((r) => (o) => ({ cursor: Oe(r.cursor)(o.endT), cuts: o.startT > r.cursor + 1e-4 ? kt(r.cuts)({ startT: r.cursor, endT: o.startT }) : r.cuts }))({ cursor: n.startT, cuts: [] })(Gt((r) => (o) => ot.compare(r.startT)(o.startT))(Tt(DL(n))(t)));
    return n.endT > e.cursor + 1e-4 ? kt(e.cuts)({ startT: e.cursor, endT: n.endT }) : e.cuts;
  }
  return [];
}, HL = (t) => {
  const n = yL(xt(t.spans)(zL(t.windows)));
  return n.length === 0 ? t : {
    ...t,
    endT: Qe(n)(t.endT),
    spans: B((e) => ({ ...e, startT: Qe(n)(e.startT), endT: Qe(n)(e.endT) }))(t.spans),
    windows: Gt((e) => (r) => ot.compare(e.startT)(r.startT))(B((e) => ({ ...e, startT: Qe(n)(e.startT), endT: Qe(n)(e.endT) }))(t.windows)),
    segments: B((e) => ({
      ...e,
      startT: Qe(n)(e.startT),
      endT: Qe(n)(e.endT),
      spans: B((r) => ({ ...r, startT: Qe(n)(r.startT), endT: Qe(n)(r.endT) }))(e.spans),
      windows: Gt((r) => (o) => ot.compare(r.startT)(o.startT))(B((r) => ({ ...r, startT: Qe(n)(r.startT), endT: Qe(n)(r.endT) }))(e.windows))
    }))(t.segments),
    dives: B((e) => ({ ...e, startT: Qe(n)(e.startT), endT: Qe(n)(e.endT) }))(t.dives)
  };
}, OL = (t) => {
  const n = B(NL)(t.segments);
  return HL({
    ...t,
    segments: n,
    windows: Gt((e) => (r) => ot.compare(e.startT)(r.startT))(xt(n)((e) => e.windows))
  });
}, WL = (t) => (n) => (e) => {
  const r = Oe(0.05)(1 - t - n), o = (a) => {
    if (a <= 0)
      return 0;
    if (a >= 1)
      return 1;
    const c = t + a * r;
    return c < 0 ? 0 : c > 1 ? 1 : c;
  }, i = gL(e), s = B((a) => j(uL(1)($s(a).length)))(i), u = Oe(1)(N(pr)(0)(s));
  return qt((a) => (c) => ({
    lineIndex: a,
    text: c,
    start: o(N(pr)(0)(a < 1 ? [] : Et(0, a, s)) / u),
    end: o(a >= 0 && a < s.length ? (N(pr)(0)(a < 1 ? [] : Et(0, a, s)) + s[a]) / u : (N(pr)(0)(a < 1 ? [] : Et(0, a, s)) + 1) / u)
  }))(i);
}, QL = (t) => {
  const n = Oe(0)(t.window.endT - t.window.startT);
  return B((e) => ({
    ...d2,
    id: "token:" + t.eventId + ":line:" + fn(e.lineIndex),
    kind: "tokenLine",
    time: t.window.startT + e.start * n,
    endTime: t.window.startT + e.end * n,
    path: g2(t.path),
    tokenIndex: t.tokenIndex,
    lineIndex: e.lineIndex,
    text: e.text,
    from: t.from,
    to: t.to
  }))(WL(t.holdPre)(t.holdPost)(t.labels));
}, qL = (t) => xt(qt((n) => (e) => ({ path: e.path, eventId: e.eventId, window: e.window, from: e.from, to: e.to, labels: e.labels, holdPre: e.holdPre, holdPost: e.holdPost, tokenIndex: n }))(xt(t)(hL)))(QL), ML = (t) => qt((n) => (e) => ({ ...e, index: n }))(Gt(BL)([
  ...xt(t.segments)(SL),
  ...qL(t.segments)
])), XL = (t) => (n) => {
  if (n.tag === "Structural")
    return Tt((e) => e)([
      ju(n._1.from)(t) ? v : T("Just", To("UnknownKeyframe", n._1.from)),
      ju(n._1.to)(t) ? v : T("Just", To("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return Tt((e) => e)([ju(n._1)(t) ? v : T("Just", To("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...Tt((e) => e)([ju(n._1.keyframe)(t) ? v : T("Just", To("UnknownKeyframe", n._1.keyframe))]),
      ...AL(n._1.events),
      ...PL(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  if (n.tag === "StepScene")
    return [];
  l();
}, UL = (t) => (n) => {
  const e = xt(n)(XL(t));
  return e.length === 0 ? Rt("Right", void 0) : Rt("Left", e);
}, mg = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = gh(B((u) => J(u.id, u))(e.keyframes)), s = UL(i)(e.scenes);
    return (() => {
      if (s.tag === "Left") {
        const u = s._1;
        return (a) => Rt("Left", u);
      }
      if (s.tag === "Right") {
        const u = s._1;
        return (a) => a(u);
      }
      l();
    })()(() => {
      const u = OL(p2(n)(r)(r)([])(e)(0));
      return Rt(
        "Right",
        {
          totalDuration: u.endT,
          windows: u.windows,
          spans: u.spans,
          keyframes: i,
          initialKeyframe: o.id,
          timing: n,
          layout: r.layout,
          cameraSpans: Dh(t)(vx)(r.layout)(i)(u),
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          cues: ML(u),
          seed: e.seed
        }
      );
    });
  }
  return Rt("Left", [aL]);
}, Ti = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => m2(t) }), m2 = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => J(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = Ti(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => wi(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, wi = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(J(n, e)), Apply0: () => m2(t) }), $2 = (t) => {
  const n = { Applicative0: () => wi(t), Bind1: () => Ti(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, ii = (t, n) => ({ tag: t, _1: n }), Br = (t, n) => ({ tag: t, _1: n }), Yc = (t) => t, Tr = (t, n) => ({ tag: t, _1: n }), $g = (t) => t, Pn = /* @__PURE__ */ $2(Be), YL = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, VL = /* @__PURE__ */ dn(R)(Mt), yg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, KL = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), Vt = /* @__PURE__ */ Ti(Be), ee = Pn.state((t) => J(t, t)), $n = /* @__PURE__ */ wi(Be), y2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, v2 = /* @__PURE__ */ Qr($n), vg = /* @__PURE__ */ v2(Mt), jL = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Rr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, ZL = /* @__PURE__ */ (() => {
  const t = Se.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return T("Just", J(n._1, n._2));
    l();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, Lt("Cons", r._3, e(r._6, o)));
      l();
    };
    return e(n, X);
  })());
})(), mr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, tE = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, Vc = (t) => (n) => (e) => N((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), nE = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), eE = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const a = o, c = i;
      if (c.tag === "Nil") {
        s = !1, u = a;
        continue;
      }
      if (c.tag === "Cons") {
        o = rt(R)(c._1)()(a), i = c._2;
        continue;
      }
      l();
    }
    return u;
  })(z);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, Lt("Cons", o._3, r(o._6, i)));
      l();
    };
    return r(e, X);
  })());
})(), rE = /* @__PURE__ */ v2(pc), oE = /* @__PURE__ */ N((t) => (n) => rt(R)(n)()(t))(z), iE = /* @__PURE__ */ $g("AnimatedSurface"), sE = /* @__PURE__ */ $g("StillSurface"), uE = /* @__PURE__ */ $g("SequenceSurface"), aE = /* @__PURE__ */ Tr("Exit"), nc = /* @__PURE__ */ Yc("AnimatedKeyframe"), xg = /* @__PURE__ */ Yc("Still"), cE = /* @__PURE__ */ Yc("Title"), x2 = /* @__PURE__ */ Yc("StepMarker"), fE = (t) => Br("Par", t), lE = (t) => Br("Seq", t), gE = (t) => Br("GroupSeq", t), T2 = (t) => ii("StepDive", t), _E = { line: 0, column: 0, endLine: 0, endColumn: 0 }, dE = (t) => (n) => (e) => {
  const r = uo(zt, v, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = ko(zt, v, r._1, J(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    l();
  }
  if (r.tag === "Nothing")
    return kt(e)(J(t, n));
  l();
}, hE = (t) => (n) => B((e) => e._1 === t ? J(e._1, { ...e._2, label: T("Just", n) }) : J(e._1, e._2)), w2 = (t) => {
  const n = t.compare;
  return (e) => N((r) => (o) => te(n, jn, r, e(o)))(z);
}, D0 = /* @__PURE__ */ w2(R), z0 = /* @__PURE__ */ w2(R), pE = (t) => {
  const n = t.span;
  return Pn.state((e) => J(void 0, { ...e, currentSpan: n }));
}, zf = (t) => (n) => ({ structural: [...t.structural, ...n.structural], flow: t.flow || n.flow, dives: [...t.dives, ...n.dives] }), mE = (t) => (n) => n.kind === "Animated" || YL(n.id)(t), Kc = {
  graphNodes: [],
  graphEdges: z,
  currNodes: z,
  currEdges: z,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: v,
  currentSpan: _E,
  error: v,
  enterStack: [],
  interiorOf: z,
  stepNames: z
}, z_ = (t) => (n) => (e) => {
  const r = nn(Re.foldr, e);
  return Mr(", ")(B(n)(Et(0, 6, r))) + (r.length > 6 ? ", …" : "");
}, $E = (t) => (n) => {
  const e = yg(n)(VL(B((r) => J(r.id, r))(t.graph.edges)));
  if (e.tag === "Just")
    return (() => {
      const r = Ro("conn:")(e._1.id);
      if (r.tag === "Just")
        return !1;
      if (r.tag === "Nothing")
        return !0;
      l();
    })() ? e._1.from.node + " -> " + e._1.to.node : e._1.from.node + " -- " + e._1.to.node;
  if (e.tag === "Nothing")
    return n;
  l();
}, yE = (t) => (n) => (e) => {
  const r = z_()(co)(n), o = z_()($E(t))(e);
  return (r === "" ? "animated flow contains unused topology: every animated node or edge must be visited by a token or fill." : "animated flow contains unused topology: every animated node or edge must be visited by a token or fill. Unused nodes: " + r + ".") + (o === "" ? "" : " Unused edges: " + o + ".") + " Move context-only topology into a `still`/`title`, remove it, or add token/fill events.";
}, vE = (t) => {
  if (t.kind.tag === "SendToken")
    return KL([t.kind._1.from, t.kind._1.to]);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return cn("Node", 1, 1, t.kind._1.node, void 0, z, z);
  l();
}, xE = (t) => D0(vE)(t.events), TE = (t) => {
  if (t.kind.tag === "SendToken")
    return cn("Node", 1, 1, t.kind._1.edge, void 0, z, z);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return z;
  l();
}, wE = (t) => z0(TE)(t.events), vr = (t) => Pn.state((n) => J(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return {
        ...n,
        error: T("Just", { msg: t, line: n.currentSpan.line, column: n.currentSpan.column, endLine: n.currentSpan.endLine, endColumn: n.currentSpan.endColumn })
      };
    l();
  })()
)), NE = /* @__PURE__ */ vg((t) => Vt.bind(ee)((n) => {
  if (n.error.tag === "Just")
    return $n.pure();
  if (n.error.tag === "Nothing")
    return y2(t.node)(n.interiorOf) ? vr("node " + t.node + " has more than one `inside` block") : Pn.state((e) => J(void 0, { ...e, interiorOf: rt(R)(t.node)(t.doc)(e.interiorOf) }));
  l();
})), CE = (t) => Vt.bind(ee)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + fn(n.kfCounter);
  if (Cn((o) => o.id === e, n.keyframes))
    return vr("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: kt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, kind: $u }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: T("Just", e)
  };
  return Pn.state((o) => J(void 0, r));
}), we = (t) => (n) => Vt.bind(Pn.state((e) => J(void 0, { ...e, currentSpan: t })))(() => vr(n)), H_ = (t) => (n) => Vt.bind(ee)((e) => jL(n)(e.stepNames) ? we(t)("duplicate step name " + n) : Pn.state((r) => J(
  void 0,
  {
    ...r,
    scenes: kt(r.scenes)(ms("StepScene", n)),
    stepNames: rt(R)(n)()(r.stepNames)
  }
))), bE = (t) => {
  if (t.ops.tag === "Leaf") {
    const n = t.ops._1;
    return Vt.bind((() => {
      const e = n.span;
      return Pn.state((r) => J(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? H_(n.span)(n.op._1.name) : vr("step marker frame did not contain a step"));
  }
  if (t.ops.tag === "Seq" && t.ops._1.length === 1 && t.ops._1[0].tag === "Leaf") {
    const n = t.ops._1[0]._1;
    return Vt.bind((() => {
      const e = n.span;
      return Pn.state((r) => J(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? H_(n.span)(n.op._1.name) : vr("step marker frame did not contain a step"));
  }
  return vr("step marker frame did not contain a step");
}, JE = (t) => Vt.bind((() => {
  const n = t.span;
  return Pn.state((e) => J(void 0, { ...e, currentSpan: n }));
})())(() => Vt.bind(ee)((n) => {
  if (n.error.tag === "Just")
    return $n.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!Rr(t.op._1.id)(n.currNodes))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot dive into node " + t.op._1.id + ": does not exist");
      if (!y2(t.op._1.id)(n.interiorOf))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot enter node " + t.op._1.id + ": it has no `inside` block. Add the block at the document level, alongside the animated statements:\n\ninside " + t.op._1.id + ` {
  + detail: Detail
}`);
      const e = t.op._1;
      return Pn.state((r) => J(
        void 0,
        { ...r, enterStack: kt(r.enterStack)(e.id), scenes: kt(r.scenes)(ms("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = Ke(n.enterStack);
      if (e.tag === "Nothing")
        return vr("`out` without a matching `into`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return Pn.state((o) => J(void 0, { ...o, enterStack: r, scenes: kt(o.scenes)(Vv) }));
      }
      l();
    }
    return $n.pure();
  }
  l();
})), ki = { structural: [], flow: !1, dives: [] }, kE = Vt.bind(ee)((t) => {
  if (t.error.tag === "Just")
    return $n.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return Pn.state((e) => J(void 0, { ...e, scenes: kt(e.scenes)(ms("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return $n.pure();
  }
  l();
}), SE = (t) => (n) => Vt.bind(ee)((e) => {
  const r = "ev-" + fn(e.eventCounter);
  return Vt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return Pn.state((i) => J(void 0, o));
  })())(() => $n.pure({ events: [{ id: r, kind: n, when: t }], firstId: T("Just", r), lastId: T("Just", r) }));
}), LE = (t) => t.tag === "DataFlow" ? T("Just", t._1) : v, EE = (t) => Tt((n) => yg(n)(t.graphEdges))(nn(Ui, ZL(t.currEdges))), AE = (t) => (n) => {
  const e = dt((o) => o.from.node === n.id || o.to.node === n.id, EE(t)), r = Vc(Bd)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, a = i.from + "->" + i.to, c = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!mr(s)(t.currEdges))
      return Rt("Left", c);
    const f = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!mr(u)(t.currEdges))
      return Rt("Left", f);
    const _ = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return mr(a)(t.currEdges) || tE(a)(o.synthesized) ? Rt("Left", _) : Rt(
      "Right",
      {
        consumed: rt(R)(s)()(rt(R)(u)()(o.consumed)),
        synthesized: rt(R)(a)({
          id: a,
          from: { node: i.from, port: v },
          to: { node: i.to, port: v },
          label: v
        })(o.synthesized)
      }
    );
  })({ consumed: z, synthesized: z })(n.via);
  return (() => {
    if (r.tag === "Left") {
      const o = r._1;
      return (i) => Rt("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    l();
  })()((o) => {
    const i = o.consumed, s = dt((u) => !mr(u.id)(i), e);
    return s.length === 0 ? Rt(
      "Right",
      {
        nextCurrEdges: te(
          R.compare,
          jn,
          hr(R.compare, t.currEdges, nE(B((u) => u.id)(e))),
          eE((() => {
            const u = (a) => {
              if (a.tag === "Leaf")
                return z;
              if (a.tag === "Node")
                return cn("Node", a._1, a._2, a._3, void 0, u(a._5), u(a._6));
              l();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : Rt(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + Mr(", ")(B((u) => (() => {
        const a = Ro("conn:")(u.id);
        if (a.tag === "Just")
          return !1;
        if (a.tag === "Nothing")
          return !0;
        l();
      })() ? u.from.node + "→" + u.to.node : u.from.node + "--" + u.to.node)(s)) + "). Use `- a -> b` or `- a -- b` to drop them, or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, N2 = (t) => (n) => (e) => {
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
}, ca = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq" || t.tag === "GroupSeq")
    return xt(t._1)(ca);
  l();
}, PE = (t) => ({
  nodes: B(mc)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, Lt("Cons", e._4, n(e._6, r)));
      l();
    };
    return nn(Sn.foldr, n(t.graphEdges, X));
  })(),
  constraints: []
}), qs = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? { ...ki, structural: [t._1] } : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? { ...ki, dives: [t._1] } : { ...ki, flow: !0 };
  if (t.tag === "Seq" || t.tag === "GroupSeq" || t.tag === "Par")
    return N(zf)(ki)(B(qs)(t._1));
  l();
}, jc = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? [ii("StepStructural", [t._1])] : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? [ii("StepDive", t._1)] : [ii("StepFlow", t)];
  if (t.tag === "Seq")
    return xt(t._1)(jc);
  if (t.tag === "GroupSeq")
    return FE(t)(t._1);
  if (t.tag === "Par")
    return RE(t)(t._1);
  l();
}, RE = (t) => (n) => {
  const e = qs(t);
  return e.structural.length !== 0 && !e.flow && e.dives.length === 0 ? [ii("StepStructural", e.structural)] : e.structural.length === 0 && e.flow && e.dives.length === 0 ? [ii("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? B(T2)(e.dives) : xt(n)(jc);
}, FE = (t) => (n) => {
  const e = qs(t);
  return e.structural.length === 0 && e.flow && e.dives.length === 0 ? [ii("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? B(T2)(e.dives) : xt(n)(jc);
}, GE = (t) => (n) => Vt.bind(ee)((e) => {
  const r = n.from + "->" + n.to, o = n.newFrom + "->" + n.newTo;
  return mr(r)(e.currEdges) ? Rr(n.newFrom)(e.currNodes) ? Rr(n.newTo)(e.currNodes) ? r !== o && mr(o)(e.currEdges) ? we((() => {
    const i = 2 < t.operands.length ? t.operands[2] : t.span, s = 3 < t.operands.length ? t.operands[3] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists") : Pn.state((i) => J(
    void 0,
    {
      ...i,
      currEdges: rt(R)(o)()(Zi(R)(r)(i.currEdges)),
      graphEdges: rt(R)(o)({
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
}), IE = (t) => {
  if (t.op.tag === "AddNode") {
    const n = t.op._1;
    return Vt.bind(ee)((e) => Rr(n.id)(e.currNodes) ? we(0 < t.operands.length ? t.operands[0] : t.span)("cannot add node " + n.id + ": already exists") : Pn.state((r) => J(
      void 0,
      {
        ...r,
        graphNodes: dE(n.id)({ id: n.id, size: J(1, 1), ports: [], label: T("Just", n.label), shape: n.shape })(r.graphNodes),
        currNodes: rt(R)(n.id)()(r.currNodes)
      }
    )));
  }
  if (t.op.tag === "DelNode") {
    const n = t.op._1;
    return Vt.bind(ee)((e) => {
      if (!Rr(n.id)(e.currNodes))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot delete node " + n.id + ": does not exist");
      const r = AE(e)(n);
      if (r.tag === "Left")
        return we(0 < t.operands.length ? t.operands[0] : t.span)(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return Pn.state((i) => J(
          void 0,
          {
            ...i,
            currNodes: Zi(R)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: te(R.compare, jn, o.synthesized, i.graphEdges)
          }
        ));
      }
      l();
    });
  }
  if (t.op.tag === "ModNode") {
    const n = t.op._1;
    return Vt.bind(ee)((e) => {
      if (!Rr(n.id)(e.currNodes))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return Pn.state((o) => J(void 0, { ...o, graphNodes: hE(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return $n.pure();
      l();
    });
  }
  if (t.op.tag === "AddEdge") {
    const n = t.op._1;
    return Vt.bind(ee)((e) => {
      const r = !Rr(n.from)(e.currNodes), o = !Rr(n.to)(e.currNodes);
      if (r || o)
        return we(N2(r)(o)(t))((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return mr(i)(e.currEdges) ? we((() => {
        const s = 0 < t.operands.length ? t.operands[0] : t.span, u = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: s.line, column: s.column, endLine: u.endLine, endColumn: u.endColumn };
      })())((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": already exists") : Pn.state((s) => J(
        void 0,
        {
          ...s,
          graphEdges: rt(R)(i)({
            id: i,
            from: { node: n.from, port: v },
            to: { node: n.to, port: v },
            label: n.label
          })(s.graphEdges),
          currEdges: rt(R)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.op.tag === "DelEdge") {
    const n = t.op._1;
    return Vt.bind(ee)((e) => {
      const r = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return mr(r)(e.currEdges) ? Pn.state((o) => J(void 0, { ...o, currEdges: Zi(R)(r)(o.currEdges) })) : we((() => {
        const o = 0 < t.operands.length ? t.operands[0] : t.span, i = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: o.line, column: o.column, endLine: i.endLine, endColumn: i.endColumn };
      })())((n.directed ? "cannot delete edge " : "cannot delete connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": does not exist");
    });
  }
  return t.op.tag === "RepointEdge" ? GE(t)(t.op._1) : $n.pure();
}, BE = (t) => Vt.bind((() => {
  const n = t.span;
  return Pn.state((e) => J(void 0, { ...e, currentSpan: n }));
})())(() => IE(t)), C2 = (t) => (n) => (e) => Vt.bind(vg(BE)(e))(() => Vt.bind(ee)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + fn(r.kfCounter);
  if (Cn((s) => s.id === o, r.keyframes))
    return Vt.bind(rE(pE)(0 < e.length ? T("Just", e[0]) : v))(() => vr("duplicate frame name " + o));
  const i = {
    ...r,
    keyframes: kt(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: T("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return kt(r.scenes)(ms("Structural", { from: r.currentKf._1, to: o, focus: v }));
      l();
    })()
  };
  return Pn.state((s) => J(void 0, i));
})), O_ = (t) => (n) => {
  const e = ca(n.ops), r = dt(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    e
  ), o = dt(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
    e
  );
  return 0 < o.length ? Vt.bind((() => {
    const i = o[0].span;
    return Pn.state((s) => J(void 0, { ...s, currentSpan: i }));
  })())(() => vr("still/title blocks hold a still snapshot; they cannot contain movement tokens (`api ~> db`) or dive commands (`into`/`out`)")) : t === "TitleCard" && r.length === 0 ? vr(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Vt.bind(C2(t)(n.name)(r))(() => kE);
}, DE = (t) => (n) => {
  const e = Tt(LE)(n.scenes), r = dt(mE(oE(B((s) => s.keyframe)(e))), n.keyframes), o = hr(R.compare, D0((s) => s.nodes)(r), D0(xE)(e)), i = hr(R.compare, z0((s) => s.edges)(r), z0(wE)(e));
  return t !== "AnimatedSurface" || e.length === 0 || o.tag === "Leaf" && i.tag === "Leaf" ? v : T("Just", yE(n)(o)(i));
}, zE = (t) => (n) => {
  const e = n.to + "->" + n.from, r = n.from + "->" + n.to, o = n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
  if (mr(r)(t.currEdges))
    return T("Just", { id: r, direction: s1 });
  if (mr(e)(t.currEdges))
    return T("Just", { id: e, direction: u1 });
  const i = yg(o)(t.graphEdges);
  if (i.tag === "Just")
    return mr(o)(t.currEdges) ? T(
      "Just",
      { id: o, direction: i._1.from.node === n.from && i._1.to.node === n.to ? s1 : u1 }
    ) : v;
  if (i.tag === "Nothing")
    return v;
  l();
}, HE = (t) => (n) => {
  if (n.op.tag === "Token") {
    const e = n.op._1;
    return Vt.bind(ee)((r) => {
      const o = !Rr(e.from)(r.currNodes), i = !Rr(e.to)(r.currNodes);
      if (o || i)
        return Vt.bind(we(N2(o)(i)(n))(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => $n.pure({ events: [], firstId: v, lastId: v }));
      const s = zE(r)(e);
      if (s.tag === "Just")
        return SE(t)(Mv("SendToken", { from: e.from, to: e.to, edge: s._1.id, direction: s._1.direction, labels: e.labels }));
      if (s.tag === "Nothing")
        return Vt.bind(we((() => {
          const u = 0 < n.operands.length ? n.operands[0] : n.span, a = 1 < n.operands.length ? n.operands[1] : n.span;
          return { line: u.line, column: u.column, endLine: a.endLine, endColumn: a.endColumn };
        })())("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => $n.pure({
          events: [],
          firstId: v,
          lastId: v
        }));
      l();
    });
  }
  return $n.pure({ events: [], firstId: v, lastId: v });
}, W_ = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return $n.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Vt.bind(lu(t)(e._1.head))((o) => Vt.bind(Vc({
      Applicative0: () => wi(Be),
      Bind1: () => Ti(Be)
    })((i) => (s) => Vt.bind(lu((() => {
      if (i.lastId.tag === "Just")
        return Jl("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      l();
    })())(s))((u) => $n.pure({
      events: [...i.events, ...u.events],
      firstId: (() => {
        if (i.firstId.tag === "Just")
          return T("Just", i.firstId._1);
        if (i.firstId.tag === "Nothing")
          return u.firstId;
        l();
      })(),
      lastId: (() => {
        if (u.lastId.tag === "Just")
          return T("Just", u.lastId._1);
        if (u.lastId.tag === "Nothing")
          return i.lastId;
        l();
      })()
    })))(o)(r))((i) => $n.pure(i)));
  }
  l();
}, OE = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return $n.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Vt.bind(lu(t)(e._1.head))((o) => Vt.bind(WE((() => {
      if (o.firstId.tag === "Just")
        return Jl("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      l();
    })())(r))((i) => $n.pure({
      events: [...o.events, ...i.events],
      firstId: o.firstId,
      lastId: (() => {
        if (o.lastId.tag === "Just")
          return T("Just", o.lastId._1);
        if (o.lastId.tag === "Nothing")
          return i.lastId;
        l();
      })()
    })));
  }
  l();
}, lu = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Vt.bind((() => {
      const r = e.span;
      return Pn.state((o) => J(void 0, { ...o, currentSpan: r }));
    })())(() => HE(t)(e));
  }
  if (n.tag === "Seq" || n.tag === "GroupSeq")
    return W_(t)(n._1);
  if (n.tag === "Par")
    return OE(t)(n._1);
  l();
}, WE = (t) => Vc({
  Applicative0: () => wi(Be),
  Bind1: () => Ti(Be)
})((n) => (e) => Vt.bind(lu(t)(e))((r) => $n.pure({
  events: [...n.events, ...r.events],
  firstId: (() => {
    if (n.firstId.tag === "Just")
      return T("Just", n.firstId._1);
    if (n.firstId.tag === "Nothing")
      return r.firstId;
    l();
  })(),
  lastId: (() => {
    if (r.lastId.tag === "Just")
      return T("Just", r.lastId._1);
    if (r.lastId.tag === "Nothing")
      return n.lastId;
    l();
  })()
})))({ events: [], firstId: v, lastId: v }), QE = (t) => Vt.bind(ee)((n) => {
  if (n.currentKf.tag === "Nothing")
    return vr("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Vt.bind(lu(Yv)(t))((r) => Vt.bind(ee)((o) => {
      const i = { ...o, scenes: kt(o.scenes)(ms("DataFlow", { keyframe: e, events: r.events, focus: v })) };
      return Pn.state((s) => J(void 0, i));
    }));
  }
  l();
}), qE = (t) => (n) => (e) => {
  if (e.tag === "StepStructural")
    return Vt.bind((() => {
      const r = C2($u)(n ? v : t)(e._1);
      return e._1.length !== 0 ? r : $n.pure();
    })())(() => $n.pure(!0));
  if (e.tag === "StepFlow") {
    const r = e._1, o = !n && (() => {
      if (t.tag === "Just")
        return t._1 !== "";
      if (t.tag === "Nothing")
        return !1;
      l();
    })();
    return Vt.bind((() => {
      const i = CE(t);
      return o ? i : $n.pure();
    })())(() => Vt.bind(QE(r))(() => $n.pure(n || o)));
  }
  if (e.tag === "StepDive")
    return Vt.bind(JE(e._1))(() => $n.pure(n));
  l();
}, b2 = (t) => (n) => (e) => {
  const r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), e);
  if (r.tag === "Nothing")
    return $n.pure();
  if (r.tag === "Just") {
    const o = r._1.head, i = r._1.tail;
    return Vt.bind(ee)((s) => {
      if (s.error.tag === "Just")
        return $n.pure();
      if (s.error.tag === "Nothing")
        return Vt.bind(qE(t)(n)(o))((u) => b2(t)(u)(i));
      l();
    });
  }
  l();
}, ME = (t) => Vt.bind(ee)((n) => {
  if (n.error.tag === "Just")
    return $n.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return b2(t.name)(!1)(jc(t.ops));
    if (t.kind === "Still")
      return O_(Xv)(t);
    if (t.kind === "Title")
      return O_(Uv)(t);
    if (t.kind === "StepMarker")
      return bE(t);
  }
  l();
}), Zc = (t) => Vt.bind(NE(t.interiors))(() => Vt.bind(vg(ME)(t.frames))(() => Vt.bind(ee)((n) => {
  if (n.error.tag === "Just")
    return $n.pure(Rt("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = XE(t.interiors);
    if (e.tag === "Left")
      return $n.pure(Rt("Left", e._1));
    if (e.tag === "Right") {
      const r = { seed: t.seed, graph: PE(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 };
      return $n.pure((() => {
        const o = DE(t.mode)(r);
        if (o.tag === "Just")
          return Rt("Left", { msg: o._1, line: 0, column: 0, endLine: 0, endColumn: 0 });
        if (o.tag === "Nothing")
          return Rt("Right", r);
        l();
      })());
    }
  }
  l();
}))), XE = (t) => {
  const n = Vc(Bd)((e) => (r) => {
    const o = Zc(r.doc)(Kc)._1;
    return (() => {
      if (o.tag === "Left") {
        const i = o._1;
        return (s) => Rt("Left", i);
      }
      if (o.tag === "Right") {
        const i = o._1;
        return (s) => s(i);
      }
      l();
    })()((i) => Rt("Right", rt(R)(r.node)(i)(e)));
  })(z)(t);
  if (n.tag === "Left")
    return Rt("Left", n._1);
  if (n.tag === "Right")
    return Rt("Right", n._1);
  l();
}, Dr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), L = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), ec = (t, n, e) => ({ tag: t, _1: n, _2: e }), UE = (t) => ec("More", t), YE = (t) => ec("Lift", t), VE = {
  defer: (t) => {
    const n = yv(t);
    return (e, r, o, i, s) => vv(n)(e, r, o, i, s);
  }
}, J2 = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (a, c) => r((f) => s(a, t(c))))) }, KE = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, a = e._2;
    return r((c) => t(
      L(u, a, !1),
      r,
      o,
      (f, _) => {
        const d = f._3;
        return r((g) => d ? i(f, _) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => J2
}, jE = (t) => {
  const n = t.Monad0();
  return (e) => (r) => {
    const o = (i) => {
      let s = i, u = !0, a;
      for (; u; ) {
        const f = s();
        if (f.tag === "More") {
          s = f._1;
          continue;
        }
        if (f.tag === "Lift") {
          u = !1, a = n.Bind1().Apply0().Functor0().map(U0)(f._1);
          continue;
        }
        if (f.tag === "Stop") {
          u = !1, a = n.Applicative0().pure(zi("Done", J(f._2, f._1)));
          continue;
        }
        l();
      }
      return a;
    };
    return t.tailRecM(o)((i) => r(
      e,
      UE,
      YE,
      (s, u) => ec("Stop", s, Rt("Left", u)),
      (s, u) => ec("Stop", s, Rt("Right", u))
    ));
  };
}, wr = (t, n, e, r, o) => o(t, t._2), ZE = { index: 0, line: 1, column: 1 }, tA = (t) => {
  const n = jE(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map($c)(n(L(e, ZE, !1))(r));
}, nA = /* @__PURE__ */ tA(V$), tf = (t, n, e, r, o) => o(L(t._1, t._2, !0), void 0), k2 = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (a, c) => r((f) => {
      const _ = e._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return n(_, r, o, i, (d, g) => r((p) => s(_._3 && !d._3 ? L(d._1, d._2, !0) : d, c(g))));
    })
  )),
  Functor0: () => J2
}, S2 = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => k2 }, eA = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (a, c) => r((f) => n(c)(e._3 && !a._3 ? L(a._1, a._2, !0) : a, r, o, i, s))
  )),
  Apply0: () => k2
}, rA = { Applicative0: () => S2, Bind1: () => eA }, nf = (t) => (n, e, r, o, i) => e((s) => wr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => o(n._3 && !u._3 ? L(u._1, u._2, !0) : u, Dr(t, a)))
)), oA = { empty: /* @__PURE__ */ nf("No alternative"), Alt0: () => KE }, iA = { Applicative0: () => S2, Plus1: () => oA }, sA = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (a, c, f) => t(c)(
      a,
      r,
      o,
      i,
      (_, d) => {
        const g = a._3 && !_._3 ? L(_._1, _._2, !0) : _;
        if (d.tag === "Loop")
          return f === 0 ? r((p) => u(g, d._1, 30)) : u(g, d._1, f - 1 | 0);
        if (d.tag === "Done")
          return s(g, d._1);
        l();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => rA
}, uA = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(U0)(o))(r.pure(zi(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return zi("Loop", Lt("Cons", s._1, i));
    if (s.tag === "Done")
      return zi(
        "Done",
        ((a) => (c) => {
          let f = a, _ = c, d = !0, g;
          for (; d; ) {
            const p = f, m = _;
            if (m.tag === "Nil") {
              d = !1, g = p;
              continue;
            }
            if (m.tag === "Cons") {
              f = Lt("Cons", m._1, p), _ = m._2;
              continue;
            }
            l();
          }
          return g;
        })(X)(i)
      );
    l();
  })())))(X);
}, nr = /* @__PURE__ */ uA(sA)(iA), vt = (t) => (n) => {
  const e = nf("Expected " + n);
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((f) => t(
      L(a, c, !1),
      o,
      i,
      (_, d) => {
        const g = _._3;
        return o((p) => g ? s(_, d) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, as = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, a = n._2;
  return e((c) => {
    const f = (_, d) => {
      const g = _._3;
      return e((p) => g ? o(L(_._1, _._2, s), d) : i(n, void 0));
    };
    return e((_) => e((d) => t(
      L(u, a, !1),
      e,
      r,
      (g, p) => f(L(g._1, g._2, !1), p),
      (g, p) => e((m) => e((h) => nf("Negated parser succeeded")(
        g,
        e,
        r,
        f,
        ($, y) => e((x) => i(g._3 && !$._3 ? L($._1, $._2, !0) : $, y))
      )))
    )));
  });
}, aA = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return T("Just", e);
    if (r.tag === "Just")
      return T(
        "Just",
        (o, i, s, u, a) => {
          const c = o._1, f = o._2;
          return i((_) => e(
            L(c, f, !1),
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
    l();
  })(v);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return nf("No alternative");
    if (r.tag === "Just")
      return r._1;
    l();
  };
}, L2 = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => o((c) => o((f) => o((_) => t(
  r,
  o,
  i,
  s,
  (d, g) => o((p) => o((m) => {
    const h = r._3 && !d._3 ? L(d._1, d._2, !0) : d;
    return e(
      h,
      o,
      i,
      s,
      ($, y) => o((x) => {
        const w = h._3 && !$._3 ? L($._1, $._2, !0) : $;
        return o((C) => o((b) => {
          const k = r._3 && !w._3 ? L(w._1, w._2, !0) : w;
          return n(
            k,
            o,
            i,
            s,
            (E, S) => o((I) => u(k._3 && !E._3 ? L(E._1, E._2, !0) : E, y))
          );
        }));
      })
    );
  }))
))))), H0 = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = Qx()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - oo(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, cA = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, f = i, _ = Rc(c);
    if (_.tag === "Nothing") {
      s = !1, u = a;
      continue;
    }
    if (_.tag === "Just") {
      r = _._1.tail === "" ? H0(a)(_._1.head)(f) : H0(a)(_._1.head)(_._1.tail), o = _._1.tail, i = f;
      continue;
    }
    l();
  }
  return u;
}, Dt = (t) => (n, e, r, o, i) => {
  const s = Rc(n._1);
  if (s.tag === "Nothing")
    return o(n, Dr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Dr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = El(s._1.head);
      return t(u) ? i(L(s._1.tail, H0(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Dr("Predicate unsatisfied", n._2));
    }
  }
  l();
}, Ju = (t, n, e, r, o) => t._1 === "" ? o(L(t._1, t._2, !0), void 0) : r(t, Dr("Expected EOF", t._2)), fA = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Dr(s._1, n._2));
  if (s.tag === "Right")
    return i(L(s._1.remainder, cA(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  l();
}, Je = (t) => fA((n) => {
  const e = Ro(t)(n);
  return e.tag === "Just" ? Rt("Right", { value: t, consumed: t, remainder: e._1 }) : Rt("Left", "Expected " + ha(t));
}), lA = /* @__PURE__ */ Dt((t) => !0), Zu = (t, n) => ({ tag: t, _1: n }), Tg = /* @__PURE__ */ aA(Mt), gA = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, _A = /* @__PURE__ */ dn(R)(Mt), dA = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, wg = /* @__PURE__ */ (() => {
  const t = vt(Dt((r) => r === "}"))("'}'"), n = vt(Dt((r) => r === "#"))("'#'"), e = Dt((r) => r === `
` || r === "\r");
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((f) => o((_) => t(
      L(a, c, !1),
      o,
      i,
      (d, g) => o((p) => {
        const m = r._1, h = r._2;
        return o(($) => o((y) => n(
          L(m, h, !1),
          o,
          i,
          (x, w) => o((C) => {
            const b = r._1, k = r._2;
            return o((E) => o((S) => e(
              L(b, k, !1),
              o,
              i,
              (I, W) => o((D) => Ju(r, o, i, s, u)),
              (I, W) => o((D) => u(L(b, k, !1), void 0))
            )));
          }),
          (x, w) => o((C) => u(L(m, h, !1), void 0))
        )));
      }),
      (d, g) => o((p) => u(L(a, c, !1), void 0))
    )));
  };
})(), Ie = (t) => (n, e, r, o, i) => e((s) => wr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const f = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
    return e((_) => t(
      f,
      e,
      r,
      o,
      (d, g) => e((p) => {
        const m = f._3 && !d._3 ? L(d._1, d._2, !0) : d;
        return e((h) => wr(
          m,
          e,
          r,
          o,
          ($, y) => e((x) => i(
            m._3 && !$._3 ? L($._1, $._2, !0) : $,
            J(g, { line: a.line, column: a.column, endLine: y.line, endColumn: y.column })
          ))
        ));
      })
    ));
  })
)), hA = /* @__PURE__ */ (() => {
  const t = Dt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? L(u._1, u._2, !0) : u, void 0))
  ));
})(), E2 = (t, n, e, r, o) => n((i) => Je("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = nr(Dt((_) => _ !== `
`)), f = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((_) => c(
      f,
      n,
      e,
      r,
      (d, g) => n((p) => o(f._3 && !d._3 ? L(d._1, d._2, !0) : d, void 0))
    ));
  })
)), A2 = /* @__PURE__ */ vt(/* @__PURE__ */ (() => {
  const t = vt(Dt((e) => e === "}"))("'}'"), n = Dt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, a = e._2;
    return r((c) => r((f) => t(
      L(u, a, !1),
      r,
      o,
      (_, d) => r((g) => {
        const p = e._1, m = e._2;
        return r((h) => r(($) => E2(
          L(p, m, !1),
          r,
          o,
          (y, x) => {
            const w = y._3;
            return r((C) => {
              if (w)
                return i(y, x);
              const b = e._1, k = e._2;
              return r((E) => r((S) => n(
                L(b, k, !1),
                r,
                o,
                (I, W) => {
                  const D = I._3;
                  return r((O) => D ? i(I, W) : Ju(e, r, o, i, s));
                },
                (I, W) => r((D) => s(I, void 0))
              )));
            });
          },
          (y, x) => r((w) => s(y, void 0))
        )));
      }),
      (_, d) => r((g) => s(L(u, a, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), Ae = /* @__PURE__ */ (() => {
  const t = nr((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => hA(
      L(s, u, !1),
      e,
      r,
      (c, f) => {
        const _ = c._3;
        return e((d) => _ ? o(c, f) : E2(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? L(u._1, u._2, !0) : u, void 0))
  ));
})(), pA = /* @__PURE__ */ (() => {
  const t = Dt((n) => n !== "|");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => e((c) => Je("\\|")(
      L(s, u, !1),
      e,
      r,
      (f, _) => e((d) => e((g) => t(n, e, r, o, (p, m) => e((h) => i(p, ds(m)))))),
      (f, _) => e((d) => i(f, "|"))
    )));
  };
})(), mA = /* @__PURE__ */ vt(/* @__PURE__ */ Tg([
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Je("->")(t, n, e, (u, a) => r(L(u._1, u._2, s), a), (u, a) => n((c) => o(u, !0)));
  }),
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Je("--")(t, n, e, (u, a) => r(L(u._1, u._2, s), a), (u, a) => n((c) => o(u, !1)));
  })
]))("edge arrow '->' or '--'"), $A = (t) => t !== `
` && t !== "\r" && t !== "#" && t !== "}" && t !== "{", ef = /* @__PURE__ */ Dt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), yA = (t) => t === " " || t === "	" || t === "\r", vA = (t) => Po(gn(Fr(yA)(gn(qr(t))).rest)), Ng = (t) => t === `
` || t === "\r" || t === "#" || t === "}", xA = (t) => t === `
` || t === "\r" || t === "#" || t === "}" || t === "{", TA = (t) => t !== "{" && t !== `
` && t !== "\r", Q_ = (t) => Pc(t) === "", wA = (t) => gn(Fr(Q_)(gn(Fr(Q_)(t).rest)).rest), NA = (t) => ((e) => (r) => {
  let o = e, i = r, s = !0, u;
  for (; s; ) {
    const a = o, f = Bt((_) => v, (_) => (d) => T("Just", { head: _, tail: d }), i);
    if (f.tag === "Just" && (f._1.head === " " || f._1.head === "	")) {
      o = a + 1 | 0, i = f._1.tail;
      continue;
    }
    s = !1, u = a;
  }
  return u;
})(0)(qr(t)), CA = (t) => {
  const n = Bt(
    (e) => v,
    (e) => (r) => T("Just", { head: e, tail: r }),
    B(NA)(dt((e) => Pc(e) !== "", t))
  );
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return N(gA)(n._1.head)(n._1.tail);
  l();
}, bA = /* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => {
    const s = n._3;
    return e((u) => t(
      n,
      e,
      r,
      (a, c) => o(L(a._1, a._2, s), c),
      (a, c) => e((f) => {
        const _ = as((() => {
          const g = vt(Dt((m) => m === ">"))("'>'"), p = vt(Dt((m) => m === "-"))("'-'");
          return (m, h, $, y, x) => {
            const w = m._1, C = m._2;
            return h((b) => g(
              L(w, C, !1),
              h,
              $,
              (k, E) => {
                const S = k._3;
                return h((I) => S ? y(k, E) : p(m, h, $, y, x));
              },
              x
            ));
          };
        })()), d = n._3 && !a._3 ? L(a._1, a._2, !0) : a;
        return e((g) => _(
          d,
          e,
          r,
          (p, m) => o(L(p._1, p._2, s), m),
          (p, m) => e((h) => i(d._3 && !p._3 ? L(p._1, p._2, !0) : p, "-"))
        ));
      })
    ));
  };
})(), an = /* @__PURE__ */ (() => {
  const t = nr(Dt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? L(u._1, u._2, !0) : u, void 0))
  ));
})(), Fo = /* @__PURE__ */ (() => {
  const t = Dt((n) => n === " " || n === "	");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => an(n._3 && !u._3 ? L(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), P2 = (t, n, e, r, o) => n((i) => n((s) => an(
  t,
  n,
  e,
  r,
  (u, a) => n((c) => n((f) => {
    const _ = t._3 && !u._3 ? L(u._1, u._2, !0) : u;
    return wg(
      _,
      n,
      e,
      r,
      (d, g) => n((p) => o(_._3 && !d._3 ? L(d._1, d._2, !0) : d, g))
    );
  }))
))), R2 = (t, n, e, r, o) => n((i) => an(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(Dt((_) => _ === "-"))("'-'"), f = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((_) => {
      const d = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return (y, x, w, C, b) => x((k) => mA(
            y,
            x,
            w,
            C,
            (E, S) => x((I) => b(E, T("Just", S)))
          ));
        if (h.tag === "Nothing")
          return (y, x, w, C, b) => b(y, v);
        l();
      })()(f._3 && !m._3 ? L(m._1, m._2, !0) : m, n, e, r, o)), g = f._1, p = f._2;
      return n((m) => n((h) => c(
        L(g, p, !1),
        n,
        e,
        ($, y) => n((x) => d(f, v)),
        ($, y) => n((x) => d(L(g, p, !1), T("Just", y)))
      )));
    });
  })
)), JA = (t) => {
  const n = Ro("Expected ")(t), e = (() => {
    if (n.tag === "Nothing")
      return t;
    if (n.tag === "Just")
      return n._1;
    l();
  })();
  return e === "'{'" ? "Open the block with `{`." : e === "integer (seed value)" ? "Put an integer after `seed`." : e === "closing '}'" ? "Close this block with `}`." : e === `closing '"' (unterminated string)` ? 'This string is unterminated; close it with `"`.' : e === "closing '|'" ? "Close this pipe label with `|`." : e === "space after '+'" ? "Put a space after `+`: `+ api: API`." : e === "node identifier after '+'" ? "Put a node id after `+`: `+ api: API`." : e === "space after '-'" ? "Put a space after `-`: `- api`." : e === "node identifier after '-'" ? "Put a node id after `-`: `- api`." : e === "space after '~'" ? "Put a space after `~`: `~ api -> db => api -> cache`." : e === "node identifier" ? "Put a node identifier here." : e === "space after 'inside'" ? "Put a space after `inside`: `inside api { ... }`." : e === "node identifier after 'inside'" ? "Tell `inside` which node owns this interior: `inside api { ... }`." : e === "source node identifier after 'via'" ? "Put the source node after `via`: `via a b`." : e === "target node identifier after 'via'" ? "Put the second endpoint after `via`: `via a b`." : e === "source node identifier" ? "Put a source node identifier here." : e === "new source node identifier" ? "Put the new source node identifier after `=>`." : e === "new target node identifier" ? "Put the new target node identifier after the replacement arrow." : e === "edge arrow '->' or '--'" ? "Use `->` for a directed edge or `--` for an undirected edge." : e === "source edge arrow '->'" ? "Use `->` in the edge you are changing: `~ api -> db => api -> cache`." : e === "replacement edge arrow '->'" ? "Use `->` in the replacement edge: `~ api -> db => api -> cache`." : e === "repoint separator '=>'" ? "Use `=>` before the replacement edge: `~ api -> db => api -> cache`." : e === "target node identifier" ? "Put a target node after the arrow." : e === "'~>'" ? "Use `~>` for movement from left to right." : e === "'<~'" ? "Use `<~` for movement from right to left." : e === "'->' or '<-'" ? "Use `~>` / `<~` for movement tokens." : e === 'label ("…", : rest-of-line, or |…|)' ? 'label must use `: text`, `"text"`, or `|multi-line|`.' : e === "attribute key" ? "Start each attribute with a name, like `shape`." : e === "':'" ? "Put `:` between the attribute name and value: `{shape: cylinder}`." : e === "attribute value" ? "Put an attribute value after `:`." : e === "closing '}' for attributes" ? "Close the attribute block with `}`." : e === "space after 'into'" ? "Put a space after `into`: `into api`." : e === "node identifier after 'into'" ? "Tell `into` which node to dive into." : e === "space after 'step'" ? "Put a space after `step`: `step request`." : e === "step name" ? "Name the step: `step request`." : e === "newline or '}' (statements end at the end of the line)" ? "This statement has extra text. Put the next statement on a new line or close the block with `}`." : e === "statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')" ? "I don't recognize this statement. Start with `+`, `-`, `~`, `into`, `out`, `par`, `seq`, or movement like `api ~> db`." : e === "'scene', 'still', 'title', 'step', 'inside', a statement, or end of input" ? "Start with a statement like `+ api: API`, a marker like `step request`, or a block with `scene`, `still`, `title`, or `inside`." : e;
}, kA = (t) => {
  const n = Pc(t), e = Ro('"')(n), r = (() => {
    if (e.tag === "Just")
      return hv('"')(e._1);
    if (e.tag === "Nothing")
      return v;
    l();
  })(), o = (() => {
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    l();
  })();
  return o === "" ? v : T("Just", o);
}, F2 = (t) => (n) => t !== "AnimatedSurface" && n.statements.length !== 0 ? {
  ...n,
  frames: kt(n.frames)((() => {
    if (t === "StillSurface")
      return { name: v, ops: Br("Seq", n.statements), kind: xg };
    if (t === "SequenceSurface")
      return { name: v, ops: Br("Seq", n.statements), kind: nc };
    if (t === "AnimatedSurface")
      return { name: v, ops: Br("Seq", n.statements), kind: nc };
    l();
  })()),
  statements: []
} : n, SA = /* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const f = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
      return e((_) => lA(
        f,
        e,
        r,
        o,
        (d, g) => e((p) => i(
          f._3 && !d._3 ? L(d._1, d._2, !0) : d,
          g === "n" ? `
` : g === "t" ? "	" : g === "r" ? "\r" : g
        ))
      ));
    })
  ));
})(), LA = /* @__PURE__ */ (() => {
  const t = Dt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => SA(L(s, u, !1), e, r, (c, f) => e((_) => t(n, e, r, o, i)), i));
  };
})(), EA = /* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const f = nr(LA), _ = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
      return e((d) => f(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = vt(vt(Dt((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), $ = _._3 && !g._3 ? L(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, w) => e((C) => i(
              $._3 && !x._3 ? L(x._1, x._2, !0) : x,
              Po(nn(Sn.foldr, p))
            ))
          ));
        })
      ));
    })
  ));
})(), AA = { frames: [], statements: [] }, PA = (t) => {
  const n = wA(fo(`
`)(t));
  return Mr(`
`)(B(vA)(B(ts(CA(n)))(n)));
}, RA = /* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const f = nr(pA), _ = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
      return e((d) => f(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = vt(vt(Dt((y) => y === "|"))("'|'"))("closing '|'"), $ = _._3 && !g._3 ? L(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, w) => e((C) => i(
              $._3 && !x._3 ? L(x._1, x._2, !0) : x,
              PA(Mr("")(nn(Sn.foldr, p)))
            ))
          ));
        })
      ));
    })
  ));
})(), gu = /* @__PURE__ */ Dt((t) => t >= "0" && t <= "9"), FA = /* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => ef(
      L(s, u, !1),
      e,
      r,
      (c, f) => {
        const _ = c._3;
        return e((d) => {
          if (_)
            return o(c, f);
          const g = n._1, p = n._2;
          return e((m) => gu(
            L(g, p, !1),
            e,
            r,
            (h, $) => {
              const y = h._3;
              return e((x) => {
                if (y)
                  return o(h, $);
                const w = n._1, C = n._2;
                return e((b) => t(
                  L(w, C, !1),
                  e,
                  r,
                  (k, E) => {
                    const S = k._3;
                    return e((I) => S ? o(k, E) : bA(n, e, r, o, i));
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
  const t = vt(Dt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (f, _) => e((d) => {
      const g = nr(FA), p = n._3 && !f._3 ? L(f._1, f._2, !0) : f;
      return e((m) => g(
        p,
        e,
        r,
        o,
        (h, $) => e((y) => i(
          p._3 && !h._3 ? L(h._1, h._2, !0) : h,
          ds(_) + Po(nn(Sn.foldr, $))
        ))
      ));
    }), a = n._1, c = n._2;
    return e((f) => ef(
      L(a, c, !1),
      e,
      r,
      (_, d) => {
        const g = _._3;
        return e((p) => g ? o(_, d) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), q_ = (t, n, e, r, o) => n((i) => an(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(Kn)("attribute key"), f = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((_) => c(
      f,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = f._3 && !d._3 ? L(d._1, d._2, !0) : d;
        return n((h) => an(
          m,
          n,
          e,
          r,
          ($, y) => n((x) => {
            const w = vt(vt(Dt((b) => b === ":"))("':'"))("':'"), C = m._3 && !$._3 ? L($._1, $._2, !0) : $;
            return n((b) => w(
              C,
              n,
              e,
              r,
              (k, E) => n((S) => {
                const I = C._3 && !k._3 ? L(k._1, k._2, !0) : k;
                return n((W) => an(
                  I,
                  n,
                  e,
                  r,
                  (D, O) => n((V) => {
                    const et = vt(Kn)("attribute value"), K = I._3 && !D._3 ? L(D._1, D._2, !0) : D;
                    return n((q) => et(
                      K,
                      n,
                      e,
                      r,
                      (A, P) => n((Q) => {
                        const G = K._3 && !A._3 ? L(A._1, A._2, !0) : A;
                        return n((F) => an(
                          G,
                          n,
                          e,
                          r,
                          (H, U) => n((Y) => o(G._3 && !H._3 ? L(H._1, H._2, !0) : H, J(g, P)))
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
)), GA = /* @__PURE__ */ L2(/* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (a, c) => e((f) => e((_) => {
      const d = n._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return an(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? L(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ vt(/* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => an(
    n,
    e,
    r,
    o,
    (a, c) => e((f) => e((_) => {
      const d = n._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return t(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? L(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}' for attributes"))(/* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => {
    const u = (f, _) => e((d) => (() => {
      if (_.tag === "Just")
        return (g, p, m, h, $) => $(g, z);
      if (_.tag === "Nothing")
        return (g, p, m, h, $) => p((y) => q_(
          g,
          p,
          m,
          h,
          (x, w) => p((C) => {
            const b = nr((() => {
              const E = vt(Dt((S) => S === ","))("','");
              return (S, I, W, D, O) => {
                const V = S._3;
                return I((et) => I((K) => I((q) => I((A) => I((P) => I((Q) => an(
                  S,
                  I,
                  W,
                  (G, F) => D(L(G._1, G._2, V), F),
                  (G, F) => I((H) => I((U) => {
                    const Y = S._3 && !G._3 ? L(G._1, G._2, !0) : G;
                    return E(
                      Y,
                      I,
                      W,
                      (M, tt) => D(L(M._1, M._2, V), tt),
                      (M, tt) => I((it) => {
                        const nt = Y._3 && !M._3 ? L(M._1, M._2, !0) : M;
                        return I((ct) => I((lt) => {
                          const pt = S._3 && !nt._3 ? L(nt._1, nt._2, !0) : nt;
                          return an(
                            pt,
                            I,
                            W,
                            (At, Pt) => D(L(At._1, At._2, V), Pt),
                            (At, Pt) => I((en) => {
                              const $t = pt._3 && !At._3 ? L(At._1, At._2, !0) : At;
                              return I((It) => I((yt) => {
                                const Nt = S._3 && !$t._3 ? L($t._1, $t._2, !0) : $t;
                                return q_(
                                  Nt,
                                  I,
                                  W,
                                  (_t, mt) => D(L(_t._1, _t._2, V), mt),
                                  (_t, mt) => I((St) => O(Nt._3 && !_t._3 ? L(_t._1, _t._2, !0) : _t, mt))
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
            })()), k = g._3 && !x._3 ? L(x._1, x._2, !0) : x;
            return p((E) => b(
              k,
              p,
              m,
              h,
              (S, I) => p((W) => $(
                k._3 && !S._3 ? L(S._1, S._2, !0) : S,
                _A([w, ...nn(Sn.foldr, I)])
              ))
            ));
          })
        ));
      l();
    })()(n._3 && !f._3 ? L(f._1, f._2, !0) : f, e, r, o, i)), a = n._1, c = n._2;
    return e((f) => e((_) => t(
      L(a, c, !1),
      e,
      r,
      (d, g) => e((p) => u(n, v)),
      (d, g) => e((p) => u(L(a, c, !1), T("Just", g)))
    )));
  });
})()), IA = (t, n, e, r, o) => n((i) => an(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(Dt((_) => _ === "{"))("'{'"), f = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((_) => {
      const d = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return GA;
        if (h.tag === "Nothing")
          return (y, x, w, C, b) => b(y, z);
        l();
      })()(f._3 && !m._3 ? L(m._1, m._2, !0) : m, n, e, r, o)), g = f._1, p = f._2;
      return n((m) => n((h) => c(
        L(g, p, !1),
        n,
        e,
        ($, y) => n((x) => d(f, v)),
        ($, y) => n((x) => d(L(g, p, !1), T("Just", y)))
      )));
    });
  })
)), BA = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => an(
  r,
  o,
  i,
  s,
  (c, f) => o((_) => {
    const d = Ie(vt(Kn)("target node identifier")), g = r._3 && !c._3 ? L(c._1, c._2, !0) : c;
    return o((p) => d(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => u(
        g._3 && !m._3 ? L(m._1, m._2, !0) : m,
        { op: Tr("DelEdge", { from: t, to: h._1, directed: e }), operands: [n, h._2] }
      ))
    ));
  })
)), DA = (t, n, e, r, o) => n((i) => wr(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((f) => {
      const _ = c._3;
      return n((d) => Kn(
        c,
        n,
        e,
        (g, p) => r(L(g._1, g._2, _), p),
        (g, p) => n((m) => {
          const h = c._3 && !g._3 ? L(g._1, g._2, !0) : g;
          return n(($) => an(
            h,
            n,
            e,
            (y, x) => r(L(y._1, y._2, _), x),
            (y, x) => n((w) => {
              const C = h._3 && !y._3 ? L(y._1, y._2, !0) : y;
              return n((b) => {
                const k = (I, W) => n((D) => {
                  const O = C._3 && !I._3 ? L(I._1, I._2, !0) : I;
                  return n((V) => r(c._3 && !O._3 ? L(O._1, O._2, !0) : O, Dr("Use `~>` / `<~` for movement tokens.", u)));
                }), E = C._1, S = C._2;
                return n((I) => Je("->")(
                  L(E, S, !1),
                  n,
                  e,
                  (W, D) => {
                    const O = W._3;
                    return n((V) => O ? r(L(W._1, W._2, _), D) : Je("<-")(C, n, e, (et, K) => r(L(et._1, et._2, _), K), k));
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
)), zA = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Ie(Kn)(
    t,
    n,
    e,
    (a, c) => r(L(a._1, a._2, s), c),
    (a, c) => n((f) => {
      const _ = t._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return n((d) => an(
        _,
        n,
        e,
        (g, p) => r(L(g._1, g._2, s), p),
        (g, p) => n((m) => {
          const h = vt(Dt((y) => y === "~"))("'~'"), $ = _._3 && !g._3 ? L(g._1, g._2, !0) : g;
          return n((y) => {
            const x = (b, k) => n((E) => {
              const S = $._3 && !b._3 ? L(b._1, b._2, !0) : b;
              return n((I) => {
                const W = c._1, D = c._2, O = t._3 && !S._3 ? L(S._1, S._2, !0) : S;
                return n((V) => an(
                  O,
                  n,
                  e,
                  r,
                  (et, K) => n((q) => {
                    const A = vt(Dt((G) => G === "~"))("'~'"), P = vt(Dt((G) => G === "<"))("'<'"), Q = O._3 && !et._3 ? L(et._1, et._2, !0) : et;
                    return n((G) => {
                      const F = (Y, M) => n((tt) => {
                        const it = M === "~" ? vt(Je("~>"))("'~>'") : vt(Je("<~"))("'<~'"), nt = Q._3 && !Y._3 ? L(Y._1, Y._2, !0) : Y;
                        return n((ct) => it(
                          nt,
                          n,
                          e,
                          r,
                          (lt, pt) => n((At) => o(
                            nt._3 && !lt._3 ? L(lt._1, lt._2, !0) : lt,
                            J(W, J(D, pt))
                          ))
                        ));
                      }), H = Q._1, U = Q._2;
                      return n((Y) => A(
                        L(H, U, !1),
                        n,
                        e,
                        (M, tt) => {
                          const it = M._3;
                          return n((nt) => it ? r(Q, tt) : P(Q, n, e, (ct, lt) => r(Q, lt), (ct, lt) => F(Q, lt)));
                        },
                        (M, tt) => F(Q, tt)
                      ));
                    });
                  })
                ));
              });
            }), w = $._1, C = $._2;
            return n((b) => h(
              L(w, C, !1),
              n,
              e,
              (k, E) => {
                const S = k._3;
                return n((I) => S ? r(L($._1, $._2, s), E) : n((W) => Je("<~")(
                  $,
                  n,
                  e,
                  (D, O) => r(L($._1, $._2, s), O),
                  (D, O) => n((V) => x($))
                )));
              },
              (k, E) => x($)
            ));
          });
        })
      ));
    })
  ));
}), HA = /* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "~"))("'~'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const f = vt(Fo)("space after '~'"), _ = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
      return e((d) => f(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Ie(vt(Kn)("source node identifier")), $ = _._3 && !g._3 ? L(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, w) => e((C) => {
              const b = w._1, k = w._2, E = $._3 && !x._3 ? L(x._1, x._2, !0) : x;
              return e((S) => an(
                E,
                e,
                r,
                o,
                (I, W) => e((D) => {
                  const O = vt(Je("->"))("source edge arrow '->'"), V = E._3 && !I._3 ? L(I._1, I._2, !0) : I;
                  return e((et) => O(
                    V,
                    e,
                    r,
                    o,
                    (K, q) => e((A) => {
                      const P = V._3 && !K._3 ? L(K._1, K._2, !0) : K;
                      return e((Q) => an(
                        P,
                        e,
                        r,
                        o,
                        (G, F) => e((H) => {
                          const U = Ie(vt(Kn)("target node identifier")), Y = P._3 && !G._3 ? L(G._1, G._2, !0) : G;
                          return e((M) => U(
                            Y,
                            e,
                            r,
                            o,
                            (tt, it) => e((nt) => {
                              const ct = it._1, lt = it._2, pt = Y._3 && !tt._3 ? L(tt._1, tt._2, !0) : tt;
                              return e((At) => an(
                                pt,
                                e,
                                r,
                                o,
                                (Pt, en) => e(($t) => {
                                  const It = vt(Je("=>"))("repoint separator '=>'"), yt = pt._3 && !Pt._3 ? L(Pt._1, Pt._2, !0) : Pt;
                                  return e((Nt) => It(
                                    yt,
                                    e,
                                    r,
                                    o,
                                    (_t, mt) => e((St) => {
                                      const Ft = yt._3 && !_t._3 ? L(_t._1, _t._2, !0) : _t;
                                      return e((Jt) => an(
                                        Ft,
                                        e,
                                        r,
                                        o,
                                        (bt, Wt) => e((Zt) => {
                                          const sn = Ie(vt(Kn)("new source node identifier")), rn = Ft._3 && !bt._3 ? L(bt._1, bt._2, !0) : bt;
                                          return e((ie) => sn(
                                            rn,
                                            e,
                                            r,
                                            o,
                                            (Ht, Xt) => e((le) => {
                                              const Xn = Xt._1, se = Xt._2, On = rn._3 && !Ht._3 ? L(Ht._1, Ht._2, !0) : Ht;
                                              return e(($e) => an(
                                                On,
                                                e,
                                                r,
                                                o,
                                                (Ut, hn) => e((Dg) => {
                                                  const ku = vt(Je("->"))("replacement edge arrow '->'"), Su = On._3 && !Ut._3 ? L(Ut._1, Ut._2, !0) : Ut;
                                                  return e((zg) => ku(
                                                    Su,
                                                    e,
                                                    r,
                                                    o,
                                                    (vn, ge) => e((Xr) => {
                                                      const Bo = Su._3 && !vn._3 ? L(vn._1, vn._2, !0) : vn;
                                                      return e((ho) => an(
                                                        Bo,
                                                        e,
                                                        r,
                                                        o,
                                                        (Le, Ni) => e((Nr) => {
                                                          const er = Ie(vt(Kn)("new target node identifier")), Do = Bo._3 && !Le._3 ? L(Le._1, Le._2, !0) : Le;
                                                          return e((vs) => er(
                                                            Do,
                                                            e,
                                                            r,
                                                            o,
                                                            (po, Ci) => e((Lu) => i(
                                                              Do._3 && !po._3 ? L(po._1, po._2, !0) : po,
                                                              {
                                                                op: Tr("RepointEdge", { from: b, to: ct, newFrom: Xn, newTo: Ci._1 }),
                                                                operands: [k, lt, se, Ci._2]
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
})(), OA = (t, n, e, r, o) => n((i) => gu(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = nr(gu), f = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((_) => c(
      f,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = Fy(ds(u) + Po(nn(
          Sn.foldr,
          g
        )));
        return (() => {
          if (m.tag === "Just") {
            const h = m._1;
            return ($, y, x, w, C) => C($, h);
          }
          if (m.tag === "Nothing")
            return (h, $, y, x, w) => w(h, 0);
          l();
        })()(f._3 && !d._3 ? L(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), WA = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Je(t)(
    n,
    e,
    r,
    (a, c) => o(L(a._1, a._2, s), c),
    (a, c) => e((f) => {
      const _ = as((() => {
        const g = vt(Dt((m) => m === "_"))("'_'"), p = vt(Dt((m) => m === "-"))("'-'");
        return (m, h, $, y, x) => {
          const w = m._1, C = m._2;
          return h((b) => ef(
            L(w, C, !1),
            h,
            $,
            (k, E) => {
              const S = k._3;
              return h((I) => {
                if (S)
                  return y(k, E);
                const W = m._1, D = m._2;
                return h((O) => gu(
                  L(W, D, !1),
                  h,
                  $,
                  (V, et) => {
                    const K = V._3;
                    return h((q) => {
                      if (K)
                        return y(V, et);
                      const A = m._1, P = m._2;
                      return h((Q) => g(
                        L(A, P, !1),
                        h,
                        $,
                        (G, F) => {
                          const H = G._3;
                          return h((U) => H ? y(G, F) : p(m, h, $, y, x));
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
      })()), d = n._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return e((g) => _(
        d,
        e,
        r,
        (p, m) => o(L(p._1, p._2, s), m),
        (p, m) => e((h) => {
          const $ = d._3 && !p._3 ? L(p._1, p._2, !0) : p;
          return e((y) => Ae(
            $,
            e,
            r,
            (x, w) => o(L(x._1, x._2, s), w),
            (x, w) => e((C) => i($._3 && !x._3 ? L(x._1, x._2, !0) : x, t))
          ));
        })
      ));
    })
  ));
}, We = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Je(t)(
    n,
    e,
    r,
    (a, c) => o(L(a._1, a._2, s), c),
    (a, c) => e((f) => {
      const _ = as((() => {
        const g = vt(Dt((m) => m === "_"))("'_'"), p = vt(Dt((m) => m === "-"))("'-'");
        return (m, h, $, y, x) => {
          const w = m._1, C = m._2;
          return h((b) => ef(
            L(w, C, !1),
            h,
            $,
            (k, E) => {
              const S = k._3;
              return h((I) => {
                if (S)
                  return y(k, E);
                const W = m._1, D = m._2;
                return h((O) => gu(
                  L(W, D, !1),
                  h,
                  $,
                  (V, et) => {
                    const K = V._3;
                    return h((q) => {
                      if (K)
                        return y(V, et);
                      const A = m._1, P = m._2;
                      return h((Q) => g(
                        L(A, P, !1),
                        h,
                        $,
                        (G, F) => {
                          const H = G._3;
                          return h((U) => H ? y(G, F) : p(m, h, $, y, x));
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
      })()), d = n._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return e((g) => _(
        d,
        e,
        r,
        (p, m) => o(L(p._1, p._2, s), m),
        (p, m) => e((h) => i(d._3 && !p._3 ? L(p._1, p._2, !0) : p, void 0))
      ));
    })
  ));
}, QA = (t, n, e, r, o) => n((i) => We("into")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(Fo)("space after 'into'"), f = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((_) => c(
      f,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = Ie(vt(Kn)("node identifier after 'into'")), h = f._3 && !d._3 ? L(d._1, d._2, !0) : d;
        return n(($) => m(
          h,
          n,
          e,
          r,
          (y, x) => n((w) => o(
            h._3 && !y._3 ? L(y._1, y._2, !0) : y,
            { op: Tr("Enter", { id: x._1 }), operands: [x._2] }
          ))
        ));
      })
    ));
  })
)), qA = (t, n, e, r, o) => n((i) => We("out")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => o(t._3 && !s._3 ? L(s._1, s._2, !0) : s, { op: aE, operands: [] }))
)), MA = (t, n, e, r, o) => n((i) => We("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((f) => an(
      c,
      n,
      e,
      r,
      (_, d) => n((g) => {
        const p = vt(OA)("integer (seed value)"), m = c._3 && !_._3 ? L(_._1, _._2, !0) : _;
        return n((h) => p(
          m,
          n,
          e,
          r,
          ($, y) => n((x) => {
            const w = m._3 && !$._3 ? L($._1, $._2, !0) : $;
            return n((C) => Ae(
              w,
              n,
              e,
              r,
              (b, k) => n((E) => o(w._3 && !b._3 ? L(b._1, b._2, !0) : b, y))
            ));
          })
        ));
      })
    ));
  })
)), G2 = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => We("diagram")(
    t,
    n,
    e,
    (u, a) => r(L(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const f = vt(Fo)("space after 'diagram'"), _ = t._3 && !u._3 ? L(u._1, u._2, !0) : u;
      return n((d) => f(
        _,
        n,
        e,
        (g, p) => r(L(g._1, g._2, i), p),
        (g, p) => n((m) => {
          const h = vt(We("sequence"))("diagram mode"), $ = _._3 && !g._3 ? L(g._1, g._2, !0) : g;
          return n((y) => h(
            $,
            n,
            e,
            (x, w) => r(L(x._1, x._2, i), w),
            (x, w) => n((C) => {
              const b = $._3 && !x._3 ? L(x._1, x._2, !0) : x;
              return n((k) => P2(
                b,
                n,
                e,
                (E, S) => r(L(E._1, E._2, i), S),
                (E, S) => n((I) => o(
                  b._3 && !E._3 ? L(E._1, E._2, !0) : E,
                  uE
                ))
              ));
            })
          ));
        })
      ));
    })
  ));
}, I2 = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => We("still")(
    t,
    n,
    e,
    (u, a) => r(L(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const f = t._3 && !u._3 ? L(u._1, u._2, !0) : u;
      return n((_) => P2(
        f,
        n,
        e,
        (d, g) => r(L(d._1, d._2, i), g),
        (d, g) => n((p) => o(f._3 && !d._3 ? L(d._1, d._2, !0) : d, sE))
      ));
    })
  ));
}, B2 = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => I2(
    L(i, s, !1),
    n,
    e,
    (a, c) => {
      const f = a._3;
      return n((_) => f ? r(a, c) : G2(t, n, e, r, o));
    },
    o
  ));
}, XA = (t) => (n, e, r, o, i) => e((s) => wr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const f = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
    return e((_) => {
      const d = f._3;
      return B2(
        f,
        e,
        r,
        (g, p) => o(L(g._1, g._2, d), p),
        (g, p) => e((m) => o(
          f._3 && !g._3 ? L(g._1, g._2, !0) : g,
          Dr(
            (() => {
              if (t === "AnimatedSurface")
                return "Put diagram mode headers at the top of the document.";
              if (t === "AnimatedSurface")
                return "This document already declares `animation`; choose one diagram mode.";
              if (t === "StillSurface")
                return "This document already declares `still`; choose one diagram mode.";
              if (t === "SequenceSurface")
                return "This document already declares `diagram sequence`; choose one diagram mode.";
              l();
            })(),
            a
          )
        ))
      );
    });
  })
)), UA = (t) => (n, e, r, o, i) => e((s) => wr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const f = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
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
            l();
          })();
          return (x, w, C, b, k) => b(x, Dr(y, a));
        }
        if (h.tag === "Nothing")
          return (y, x, w, C, b) => b(y, void 0);
        l();
      })()(f._3 && !m._3 ? L(m._1, m._2, !0) : m, e, r, o, i)), g = f._1, p = f._2;
      return e((m) => e((h) => B2(
        L(g, p, !1),
        e,
        r,
        ($, y) => {
          const x = $._3;
          return e((w) => x ? o($, y) : d(f, v));
        },
        ($, y) => e((x) => d($, T("Just", y)))
      )));
    });
  })
)), YA = (t, n, e, r, o) => n((i) => {
  const s = (c, f) => n((_) => {
    const d = t._3 && !c._3 ? L(c._1, c._2, !0) : c;
    return n((g) => Ae(
      d,
      n,
      e,
      r,
      (p, m) => n((h) => {
        const $ = d._3 && !p._3 ? L(p._1, p._2, !0) : p;
        return n((y) => UA(f)(
          $,
          n,
          e,
          r,
          (x, w) => n((C) => o($._3 && !x._3 ? L(x._1, x._2, !0) : x, f))
        ));
      })
    ));
  }), u = t._1, a = t._2;
  return n((c) => I2(
    L(u, a, !1),
    n,
    e,
    (f, _) => {
      const d = f._3;
      return n((g) => d ? r(f, _) : G2(t, n, e, r, s));
    },
    s
  ));
}), VA = (t, n, e, r, o) => n((i) => {
  const s = (c, f) => n((_) => o(
    c,
    (() => {
      if (f.tag === "Nothing")
        return iE;
      if (f.tag === "Just")
        return f._1;
      l();
    })()
  )), u = t._1, a = t._2;
  return n((c) => n((f) => YA(
    L(u, a, !1),
    n,
    e,
    (_, d) => {
      const g = _._3;
      return n((p) => g ? r(_, d) : s(t, v));
    },
    (_, d) => n((g) => s(_, T("Just", d)))
  )));
}), KA = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => an(
    t,
    n,
    e,
    (a, c) => r(L(a._1, a._2, s), c),
    (a, c) => n((f) => We("via")(
      t._3 && !a._3 ? L(a._1, a._2, !0) : a,
      n,
      e,
      (_, d) => r(L(_._1, _._2, s), d),
      (_, d) => n((g) => {
        const p = t._3 && !_._3 ? L(_._1, _._2, !0) : _;
        return n((m) => tf(
          p,
          n,
          e,
          r,
          (h, $) => n((y) => {
            const x = p._3 && !h._3 ? L(h._1, h._2, !0) : h;
            return n((w) => Fo(
              x,
              n,
              e,
              r,
              (C, b) => n((k) => {
                const E = vt(Kn)("source node identifier after 'via'"), S = x._3 && !C._3 ? L(C._1, C._2, !0) : C;
                return n((I) => E(
                  S,
                  n,
                  e,
                  r,
                  (W, D) => n((O) => {
                    const V = S._3 && !W._3 ? L(W._1, W._2, !0) : W;
                    return n((et) => an(
                      V,
                      n,
                      e,
                      r,
                      (K, q) => n((A) => {
                        const P = vt(Kn)("target node identifier after 'via'"), Q = V._3 && !K._3 ? L(K._1, K._2, !0) : K;
                        return n((G) => P(
                          Q,
                          n,
                          e,
                          r,
                          (F, H) => n((U) => o(Q._3 && !F._3 ? L(F._1, F._2, !0) : F, { from: D, to: H }))
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
}), jA = (t) => (n) => {
  const e = nr(KA);
  return (r, o, i, s, u) => o((a) => e(
    r,
    o,
    i,
    s,
    (c, f) => o((_) => u(
      r._3 && !c._3 ? L(c._1, c._2, !0) : c,
      { op: Tr("DelNode", { id: t, via: nn(Sn.foldr, f) }), operands: [n] }
    ))
  ));
}, ZA = /* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const f = vt(Fo)("space after '-'"), _ = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
      return e((d) => f(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Ie(vt(Kn)("node identifier after '-'")), $ = _._3 && !g._3 ? L(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, w) => e((C) => {
              const b = w._1, k = w._2, E = $._3 && !x._3 ? L(x._1, x._2, !0) : x;
              return e((S) => R2(
                E,
                e,
                r,
                o,
                (I, W) => e((D) => (() => {
                  if (W.tag === "Just")
                    return BA(b)(k)(W._1);
                  if (W.tag === "Nothing")
                    return jA(b)(k);
                  l();
                })()(E._3 && !I._3 ? L(I._1, I._2, !0) : I, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), gr = (t) => (n) => (e, r, o, i, s) => r((u) => wr(
  e,
  r,
  o,
  i,
  (a, c) => r((f) => {
    const _ = e._3 && !a._3 ? L(a._1, a._2, !0) : a;
    return r((d) => We(t)(
      _,
      r,
      o,
      i,
      (g, p) => r((m) => i(_._3 && !g._3 ? L(g._1, g._2, !0) : g, Dr(n, c)))
    ));
  })
)), tP = (t) => t === "AnimatedSurface" ? (n, e, r, o, i) => e((s) => wr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const f = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
    return e((_) => We("step")(
      f,
      e,
      r,
      o,
      (d, g) => e((p) => {
        const m = vt(Fo)("space after 'step'"), h = f._3 && !d._3 ? L(d._1, d._2, !0) : d;
        return e(($) => m(
          h,
          e,
          r,
          o,
          (y, x) => e((w) => {
            const C = Ie(vt(Kn)("step name")), b = h._3 && !y._3 ? L(y._1, y._2, !0) : y;
            return e((k) => C(
              b,
              e,
              r,
              o,
              (E, S) => e((I) => {
                const W = S._1, D = S._2, O = b._3 && !E._3 ? L(E._1, E._2, !0) : E;
                return e((V) => wr(
                  O,
                  e,
                  r,
                  o,
                  (et, K) => e((q) => {
                    const A = O._3 && !et._3 ? L(et._1, et._2, !0) : et;
                    return e((P) => an(
                      A,
                      e,
                      r,
                      o,
                      (Q, G) => e((F) => {
                        const H = A._3 && !Q._3 ? L(Q._1, Q._2, !0) : Q;
                        return e((U) => A2(
                          H,
                          e,
                          r,
                          o,
                          (Y, M) => e((tt) => {
                            const it = H._3 && !Y._3 ? L(Y._1, Y._2, !0) : Y;
                            return e((nt) => Ae(
                              it,
                              e,
                              r,
                              o,
                              (ct, lt) => e((pt) => {
                                const At = { line: a.line, column: a.column, endLine: K.line, endColumn: K.column };
                                return i(
                                  it._3 && !ct._3 ? L(ct._1, ct._2, !0) : ct,
                                  {
                                    name: T("Just", W),
                                    ops: Br(
                                      "Leaf",
                                      {
                                        op: Tr("Step", { name: W }),
                                        line: At.line,
                                        column: At.column,
                                        endLine: At.endLine,
                                        endColumn: At.endColumn,
                                        span: At,
                                        operands: [D]
                                      }
                                    ),
                                    kind: x2
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
)) : gr("step")("`step` markers are only supported in animated diagrams."), nP = /* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const f = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
      return e((_) => an(
        f,
        e,
        r,
        o,
        (d, g) => e((p) => {
          const m = nr(Dt($A)), h = f._3 && !d._3 ? L(d._1, d._2, !0) : d;
          return e(($) => m(
            h,
            e,
            r,
            o,
            (y, x) => e((w) => i(
              h._3 && !y._3 ? L(y._1, y._2, !0) : y,
              Pc(Po(nn(Sn.foldr, x)))
            ))
          ));
        })
      ));
    })
  ));
})(), eP = (t, n, e, r, o) => n((i) => an(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => vt((c, f, _, d, g) => {
    const p = c._1, m = c._2;
    return f((h) => nP(
      L(p, m, !1),
      f,
      _,
      ($, y) => {
        const x = $._3;
        return f((w) => {
          if (x)
            return d($, y);
          const C = c._1, b = c._2;
          return f((k) => RA(
            L(C, b, !1),
            f,
            _,
            (E, S) => {
              const I = E._3;
              return f((W) => I ? d(E, S) : EA(c, f, _, d, g));
            },
            g
          ));
        });
      },
      g
    ));
  })('label ("…", : rest-of-line, or |…|)')(t._3 && !s._3 ? L(s._1, s._2, !0) : s, n, e, r, o))
)), rf = (t) => (n, e, r, o, i) => e((s) => an(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const f = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
    return e((_) => {
      const d = (m, h) => e(($) => (h ? ((y, x, w, C, b) => b(y, v)) : (y, x, w, C, b) => x((k) => eP(
        y,
        x,
        w,
        C,
        (E, S) => x((I) => b(E, T("Just", S)))
      )))(f._3 && !m._3 ? L(m._1, m._2, !0) : m, e, r, o, i)), g = f._1, p = f._2;
      return e((m) => {
        const h = ($, y) => {
          const x = $._3;
          return e((w) => x ? o($, y) : d(f, !1));
        };
        return e(($) => e((y) => e((x) => Ju(
          L(g, p, !1),
          e,
          r,
          (w, C) => {
            const b = w._3;
            return e((k) => b ? h(L(g, p, !1), C) : e((E) => Dt(t)(
              L(g, p, !1),
              e,
              r,
              (S, I) => h(L(g, p, !1), I),
              (S, I) => e((W) => e((D) => d(L(g, p, !1), !0)))
            )));
          },
          (w, C) => e((b) => e((k) => d(L(g, p, !1), !0)))
        ))));
      });
    });
  })
)), rP = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => an(
  r,
  o,
  i,
  s,
  (c, f) => o((_) => {
    const d = Ie(vt(Kn)("target node identifier")), g = r._3 && !c._3 ? L(c._1, c._2, !0) : c;
    return o((p) => d(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => {
        const y = h._1, x = h._2, w = g._3 && !m._3 ? L(m._1, m._2, !0) : m;
        return o((C) => rf(Ng)(
          w,
          o,
          i,
          s,
          (b, k) => o((E) => u(
            w._3 && !b._3 ? L(b._1, b._2, !0) : b,
            {
              op: Tr("AddEdge", { from: t, to: y, label: k.tag === "Just" ? T("Just", k._1) : v, directed: e }),
              operands: [n, x]
            }
          ))
        ));
      })
    ));
  })
)), oP = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Ie(Kn)(
    t,
    n,
    e,
    (a, c) => r(L(a._1, a._2, s), c),
    (a, c) => n((f) => {
      const _ = t._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return n((d) => an(
        _,
        n,
        e,
        (g, p) => r(L(g._1, g._2, s), p),
        (g, p) => n((m) => {
          const h = vt(Dt((y) => y === "<"))("'<'"), $ = _._3 && !g._3 ? L(g._1, g._2, !0) : g;
          return n((y) => h(
            $,
            n,
            e,
            (x, w) => r(L($._1, $._2, s), w),
            (x, w) => n((C) => {
              const b = as((E, S, I, W, D) => {
                const O = E._3;
                return Je("<-")(E, S, I, (V, et) => W(L(V._1, V._2, O), et), D);
              }), k = $._3 && !$._3 ? L($._1, $._2, !0) : $;
              return n((E) => b(
                k,
                n,
                e,
                (S, I) => r(L(S._1, S._2, s), I),
                (S, I) => n((W) => {
                  const D = k._3 && !S._3 ? L(S._1, S._2, !0) : S;
                  return n((O) => {
                    const V = c._1, et = c._2, K = t._3 && !D._3 ? L(D._1, D._2, !0) : D;
                    return n((q) => an(
                      K,
                      n,
                      e,
                      r,
                      (A, P) => n((Q) => {
                        const G = vt(Je("<~"))("'<~'"), F = K._3 && !A._3 ? L(A._1, A._2, !0) : A;
                        return n((H) => G(
                          F,
                          n,
                          e,
                          r,
                          (U, Y) => n((M) => {
                            const tt = F._3 && !U._3 ? L(U._1, U._2, !0) : U;
                            return n((it) => an(
                              tt,
                              n,
                              e,
                              r,
                              (nt, ct) => n((lt) => {
                                const pt = Ie(vt(Kn)("target node identifier")), At = tt._3 && !nt._3 ? L(nt._1, nt._2, !0) : nt;
                                return n((Pt) => pt(
                                  At,
                                  n,
                                  e,
                                  r,
                                  (en, $t) => n((It) => {
                                    const yt = $t._1, Nt = $t._2, _t = At._3 && !en._3 ? L(en._1, en._2, !0) : en;
                                    return n((mt) => rf(Ng)(
                                      _t,
                                      n,
                                      e,
                                      r,
                                      (St, Ft) => n((Jt) => o(
                                        _t._3 && !St._3 ? L(St._1, St._2, !0) : St,
                                        {
                                          op: Tr(
                                            "Token",
                                            {
                                              from: yt,
                                              to: V,
                                              labels: (() => {
                                                if (Ft.tag === "Nothing")
                                                  return [];
                                                if (Ft.tag === "Just")
                                                  return [Ft._1];
                                                l();
                                              })()
                                            }
                                          ),
                                          operands: [Nt, et]
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
}), iP = (t, n, e, r, o) => n((i) => zA(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = u._2._2, f = u._1, _ = u._2._1, d = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((g) => an(
      d,
      n,
      e,
      r,
      (p, m) => n((h) => {
        const $ = Ie(vt(Kn)("target node identifier")), y = d._3 && !p._3 ? L(p._1, p._2, !0) : p;
        return n((x) => $(
          y,
          n,
          e,
          r,
          (w, C) => n((b) => {
            const k = C._1, E = C._2, S = y._3 && !w._3 ? L(w._1, w._2, !0) : w;
            return n((I) => rf(Ng)(
              S,
              n,
              e,
              r,
              (W, D) => n((O) => (c === "<~" ? ((V, et, K, q, A) => A(
                V,
                {
                  op: Tr(
                    "Token",
                    {
                      from: k,
                      to: f,
                      labels: (() => {
                        if (D.tag === "Nothing")
                          return [];
                        if (D.tag === "Just")
                          return [D._1];
                        l();
                      })()
                    }
                  ),
                  operands: c === "<~" ? [E, _] : [_, E]
                }
              )) : (V, et, K, q, A) => A(
                V,
                {
                  op: Tr(
                    "Token",
                    {
                      from: f,
                      to: k,
                      labels: (() => {
                        if (D.tag === "Nothing")
                          return [];
                        if (D.tag === "Just")
                          return [D._1];
                        l();
                      })()
                    }
                  ),
                  operands: c === "<~" ? [E, _] : [_, E]
                }
              ))(S._3 && !W._3 ? L(W._1, W._2, !0) : W, n, e, r, o))
            ));
          })
        ));
      })
    ));
  })
)), sP = (t, n, e, r, o) => n((i) => rf(xA)(
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
      l();
    })()
  ))
)), uP = (t) => (n) => (e, r, o, i, s) => r((u) => sP(
  e,
  r,
  o,
  i,
  (a, c) => r((f) => {
    const _ = e._3 && !a._3 ? L(a._1, a._2, !0) : a;
    return r((d) => IA(
      _,
      r,
      o,
      i,
      (g, p) => r((m) => s(
        _._3 && !g._3 ? L(g._1, g._2, !0) : g,
        {
          op: Tr(
            "AddNode",
            {
              id: t,
              label: c,
              shape: (() => {
                const h = dA("shape")(p);
                if (h.tag === "Just")
                  return h._1 === "rectangle" || h._1 === "rect" ? Zr : h._1 === "cylinder" || h._1 === "cyl" ? e1 : h._1 === "parallelogram" ? Ev : h._1 === "diamond" ? Av : h._1 === "ellipse" ? Pv : h._1 === "document" || h._1 === "doc" ? r1 : h._1 === "cloud" ? Rv : Zr;
                if (h.tag === "Nothing")
                  return Zr;
                l();
              })()
            }
          ),
          operands: [n]
        }
      ))
    ));
  })
)), aP = /* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "+"))("'+'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const f = vt(Fo)("space after '+'"), _ = n._3 && !u._3 ? L(u._1, u._2, !0) : u;
      return e((d) => f(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Ie(vt(Kn)("node identifier after '+'")), $ = _._3 && !g._3 ? L(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, w) => e((C) => {
              const b = w._1, k = w._2, E = $._3 && !x._3 ? L(x._1, x._2, !0) : x;
              return e((S) => R2(
                E,
                e,
                r,
                o,
                (I, W) => e((D) => (() => {
                  if (W.tag === "Just")
                    return rP(b)(k)(W._1);
                  if (W.tag === "Nothing")
                    return uP(b)(k);
                  l();
                })()(E._3 && !I._3 ? L(I._1, I._2, !0) : I, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), cP = (t, n, e, r, o) => n((i) => wr(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(Tg([
      gr("+node")("Node additions use `+ api: API`."),
      gr("+edge")("Graph edges use `+ api -> db`."),
      gr("+conn")("Undirected graph edges use `+ api -- db`."),
      gr("-node")("Node removals use `- api`."),
      gr("-edge")("Graph edge removals use `- api -> db`."),
      gr("-conn")("Undirected graph edge removals use `- api -- db`."),
      gr("~edge")("Graph edge repoints use `~ api -> db => api -> cache`."),
      gr("enter")("Dive commands use `into api`."),
      gr("exit")("Return from a dive with `out`."),
      DA,
      aP,
      ZA,
      HA,
      iP,
      oP,
      QA,
      qA
    ]))("statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')"), f = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((_) => c(
      f,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = f._3 && !d._3 ? L(d._1, d._2, !0) : d;
        return n((h) => wr(
          m,
          n,
          e,
          r,
          ($, y) => n((x) => {
            const w = { line: u.line, column: u.column, endLine: y.line, endColumn: y.column };
            return o(
              m._3 && !$._3 ? L($._1, $._2, !0) : $,
              Br(
                "Leaf",
                { op: g.op, line: w.line, column: w.column, endLine: w.endLine, endColumn: w.endColumn, span: w, operands: g.operands }
              )
            );
          })
        ));
      })
    ));
  })
)), Cg = /* @__PURE__ */ L2(/* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (a, c) => e((f) => e((_) => {
      const d = n._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return Ae(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? L(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ vt(/* @__PURE__ */ (() => {
  const t = vt(Dt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Ae(
    n,
    e,
    r,
    o,
    (a, c) => e((f) => e((_) => {
      const d = n._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return t(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? L(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}'")), D2 = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Ae(
    t,
    n,
    e,
    (a, c) => r(L(a._1, a._2, s), c),
    (a, c) => n((f) => {
      const _ = as(vt(Dt((g) => g === "}"))("'}'")), d = t._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return n((g) => _(
        d,
        n,
        e,
        (p, m) => r(L(p._1, p._2, s), m),
        (p, m) => n((h) => as(Ju)(
          d._3 && !p._3 ? L(p._1, p._2, !0) : p,
          n,
          e,
          ($, y) => r(L($._1, $._2, s), y),
          ($, y) => n((x) => {
            const w = t._3 && !$._3 ? L($._1, $._2, !0) : $;
            return n((C) => tf(
              w,
              n,
              e,
              r,
              (b, k) => n((E) => {
                const S = Tg([lP, fP, cP]), I = w._3 && !b._3 ? L(b._1, b._2, !0) : b;
                return n((W) => S(
                  I,
                  n,
                  e,
                  r,
                  (D, O) => n((V) => {
                    const et = I._3 && !D._3 ? L(D._1, D._2, !0) : D;
                    return n((K) => an(
                      et,
                      n,
                      e,
                      r,
                      (q, A) => n((P) => {
                        const Q = et._3 && !q._3 ? L(q._1, q._2, !0) : q;
                        return n((G) => A2(
                          Q,
                          n,
                          e,
                          r,
                          (F, H) => n((U) => {
                            const Y = Q._3 && !F._3 ? L(F._1, F._2, !0) : F;
                            return n((M) => Ae(
                              Y,
                              n,
                              e,
                              r,
                              (tt, it) => n((nt) => o(Y._3 && !tt._3 ? L(tt._1, tt._2, !0) : tt, O))
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
}), fP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, f) => {
      const _ = c._3;
      return n((d) => _ ? r(c, f) : n((g) => {
        const p = t._3;
        return n((m) => We("seq")(
          t,
          n,
          e,
          (h, $) => r(L(h._1, h._2, p), $),
          (h, $) => n((y) => {
            const x = t._3 && !h._3 ? L(h._1, h._2, !0) : h;
            return n((w) => an(
              x,
              n,
              e,
              (C, b) => r(L(C._1, C._2, p), b),
              (C, b) => n((k) => wg(
                x._3 && !C._3 ? L(C._1, C._2, !0) : C,
                n,
                e,
                (E, S) => r(L(E._1, E._2, p), S),
                (E, S) => n((I) => {
                  const W = t._3 && !E._3 ? L(E._1, E._2, !0) : E;
                  return n((D) => tf(
                    W,
                    n,
                    e,
                    r,
                    (O, V) => n((et) => {
                      const K = vt(vt(Dt((A) => A === "{"))("'{'"))("'{'"), q = W._3 && !O._3 ? L(O._1, O._2, !0) : O;
                      return n((A) => K(
                        q,
                        n,
                        e,
                        r,
                        (P, Q) => n((G) => o(
                          q._3 && !P._3 ? L(P._1, P._2, !0) : P,
                          Br("GroupSeq", [])
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
    return n((c) => n((f) => We("seq")(
      L(i, s, !1),
      n,
      e,
      (_, d) => a(L(_._1, _._2, !1), d),
      (_, d) => n((g) => n((p) => an(
        _,
        n,
        e,
        (m, h) => a(L(m._1, m._2, !1), h),
        (m, h) => n(($) => {
          const y = _._3 && !m._3 ? L(m._1, m._2, !0) : m;
          return vt(Dt((x) => x === "{"))("'{'")(
            y,
            n,
            e,
            (x, w) => a(L(y._1, y._2, !1), w),
            (x, w) => n((C) => Cg(bg(gE))(y, n, e, a, o))
          );
        })
      )))
    )));
  });
}, lP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, f) => {
      const _ = c._3;
      return n((d) => _ ? r(c, f) : n((g) => {
        const p = t._3;
        return n((m) => We("par")(
          t,
          n,
          e,
          (h, $) => r(L(h._1, h._2, p), $),
          (h, $) => n((y) => {
            const x = t._3 && !h._3 ? L(h._1, h._2, !0) : h;
            return n((w) => an(
              x,
              n,
              e,
              (C, b) => r(L(C._1, C._2, p), b),
              (C, b) => n((k) => wg(
                x._3 && !C._3 ? L(C._1, C._2, !0) : C,
                n,
                e,
                (E, S) => r(L(E._1, E._2, p), S),
                (E, S) => n((I) => {
                  const W = t._3 && !E._3 ? L(E._1, E._2, !0) : E;
                  return n((D) => tf(
                    W,
                    n,
                    e,
                    r,
                    (O, V) => n((et) => {
                      const K = vt(vt(Dt((A) => A === "{"))("'{'"))("'{'"), q = W._3 && !O._3 ? L(O._1, O._2, !0) : O;
                      return n((A) => K(
                        q,
                        n,
                        e,
                        r,
                        (P, Q) => n((G) => o(
                          q._3 && !P._3 ? L(P._1, P._2, !0) : P,
                          Br("Par", [])
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
    return n((c) => n((f) => We("par")(
      L(i, s, !1),
      n,
      e,
      (_, d) => a(L(_._1, _._2, !1), d),
      (_, d) => n((g) => n((p) => an(
        _,
        n,
        e,
        (m, h) => a(L(m._1, m._2, !1), h),
        (m, h) => n(($) => {
          const y = _._3 && !m._3 ? L(m._1, m._2, !0) : m;
          return vt(Dt((x) => x === "{"))("'{'")(
            y,
            n,
            e,
            (x, w) => a(L(y._1, y._2, !1), w),
            (x, w) => n((C) => Cg(bg(fE))(y, n, e, a, o))
          );
        })
      )))
    )));
  });
}, bg = (t) => {
  const n = nr(D2);
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (a, c) => r((f) => s(
      e._3 && !a._3 ? L(a._1, a._2, !0) : a,
      t(nn(Sn.foldr, c))
    ))
  ));
}, Hf = (t) => (n) => (e, r, o, i, s) => r((u) => WA(t)(
  e,
  r,
  o,
  i,
  (a, c) => r((f) => {
    const _ = nr(Dt(TA)), d = e._3 && !a._3 ? L(a._1, a._2, !0) : a;
    return r((g) => _(
      d,
      r,
      o,
      i,
      (p, m) => r((h) => {
        const $ = vt(vt(Dt((x) => x === "{"))("'{'"))("'{'"), y = d._3 && !p._3 ? L(p._1, p._2, !0) : p;
        return r((x) => $(
          y,
          r,
          o,
          i,
          (w, C) => r((b) => {
            const k = y._3 && !w._3 ? L(w._1, w._2, !0) : w;
            return r((E) => Ae(
              k,
              r,
              o,
              i,
              (S, I) => r((W) => {
                const D = bg(lE), O = k._3 && !S._3 ? L(S._1, S._2, !0) : S;
                return r((V) => D(
                  O,
                  r,
                  o,
                  i,
                  (et, K) => r((q) => {
                    const A = O._3 && !et._3 ? L(et._1, et._2, !0) : et;
                    return r((P) => Ae(
                      A,
                      r,
                      o,
                      i,
                      (Q, G) => r((F) => {
                        const H = vt(vt(Dt((Y) => Y === "}"))("'}'"))("closing '}'"), U = A._3 && !Q._3 ? L(Q._1, Q._2, !0) : Q;
                        return r((Y) => H(
                          U,
                          r,
                          o,
                          i,
                          (M, tt) => r((it) => {
                            const nt = U._3 && !M._3 ? L(M._1, M._2, !0) : M;
                            return r((ct) => Ae(
                              nt,
                              r,
                              o,
                              i,
                              (lt, pt) => r((At) => s(
                                nt._3 && !lt._3 ? L(lt._1, lt._2, !0) : lt,
                                { name: kA(Po(nn(Sn.foldr, m))), ops: K, kind: n }
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
)), gP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => gr("keyframe")("Drop the `keyframe` wrapper; Markgraf animates statements in order.")(
    L(i, s, !1),
    n,
    e,
    (a, c) => {
      const f = a._3;
      return n((_) => {
        if (f)
          return r(a, c);
        const d = t._1, g = t._2;
        return n((p) => Hf("scene")(nc)(
          L(d, g, !1),
          n,
          e,
          (m, h) => {
            const $ = m._3;
            return n((y) => {
              if ($)
                return r(m, h);
              const x = t._1, w = t._2;
              return n((C) => Hf("still")(xg)(
                L(x, w, !1),
                n,
                e,
                (b, k) => {
                  const E = b._3;
                  return n((S) => E ? r(b, k) : Hf("title")(cE)(t, n, e, r, o));
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
}, _P = (t) => (n) => (e) => {
  if (t === "AnimatedSurface")
    return { ...n, frames: kt(n.frames)({ name: v, ops: e, kind: nc }) };
  if (t === "StillSurface")
    return { ...n, statements: kt(n.statements)(e) };
  if (t === "SequenceSurface")
    return { ...n, statements: kt(n.statements)(e) };
  l();
}, dP = (t) => (n) => (e) => {
  if (e.tag === "TopFrame") {
    const r = F2(t)(n);
    return {
      ...r,
      frames: kt(r.frames)((() => {
        if (t === "AnimatedSurface")
          return e._1;
        if (t === "StillSurface")
          return {
            ...e._1,
            kind: e._1.kind === "AnimatedKeyframe" ? xg : e._1.kind === "StepMarker" ? x2 : e._1.kind
          };
        if (t === "SequenceSurface")
          return e._1;
        l();
      })())
    };
  }
  if (e.tag === "TopStatement")
    return _P(t)(n)(e._1);
  if (e.tag === "TopInside")
    return n;
  l();
}, hP = (t) => {
  const n = N(dP(t))(AA);
  return (e) => F2(t)(n(e)).frames;
}, pP = (t) => VE.defer((n) => {
  const e = tP(t);
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((f) => XA(t)(
      L(a, c, !1),
      o,
      i,
      (_, d) => {
        const g = _._3;
        return o((p) => {
          if (g)
            return s(_, d);
          const m = r._1, h = r._2;
          return o(($) => o((y) => mP(
            L(m, h, !1),
            o,
            i,
            (x, w) => {
              const C = x._3;
              return o((b) => {
                if (C)
                  return s(x, w);
                const k = r._1, E = r._2;
                return o((S) => o((I) => e(
                  L(k, E, !1),
                  o,
                  i,
                  (W, D) => {
                    const O = W._3;
                    return o((V) => {
                      if (O)
                        return s(W, D);
                      const et = r._1, K = r._2;
                      return o((q) => o((A) => gP(
                        L(et, K, !1),
                        o,
                        i,
                        (P, Q) => {
                          const G = P._3;
                          return o((F) => G ? s(P, Q) : o((H) => D2(r, o, i, s, (U, Y) => o((M) => u(U, Zu("TopStatement", Y))))));
                        },
                        (P, Q) => o((G) => u(P, Zu("TopFrame", Q)))
                      )));
                    });
                  },
                  (W, D) => o((O) => u(W, Zu("TopFrame", D)))
                )));
              });
            },
            (x, w) => o((C) => u(x, Zu("TopInside", w)))
          )));
        });
      },
      u
    ));
  };
}), mP = (t, n, e, r, o) => n((i) => We("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(Fo)("space after 'inside'"), f = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((_) => c(
      f,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = vt(Kn)("node identifier after 'inside'"), h = f._3 && !d._3 ? L(d._1, d._2, !0) : d;
        return n(($) => m(
          h,
          n,
          e,
          r,
          (y, x) => n((w) => {
            const C = h._3 && !y._3 ? L(y._1, y._2, !0) : y;
            return n((b) => Ae(
              C,
              n,
              e,
              r,
              (k, E) => n((S) => {
                const I = C._3 && !k._3 ? L(k._1, k._2, !0) : k;
                return n((W) => Cg(z2)(
                  I,
                  n,
                  e,
                  r,
                  (D, O) => n((V) => {
                    const et = I._3 && !D._3 ? L(D._1, D._2, !0) : D;
                    return n((K) => Ae(
                      et,
                      n,
                      e,
                      r,
                      (q, A) => n((P) => o(et._3 && !q._3 ? L(q._1, q._2, !0) : q, { node: x, doc: O }))
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
)), z2 = (t, n, e, r, o) => n((i) => VA(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? L(s._1, s._2, !0) : s;
    return n((f) => {
      const _ = (p, m) => n((h) => {
        const $ = nr(pP(u)), y = c._3 && !p._3 ? L(p._1, p._2, !0) : p;
        return n((x) => $(
          y,
          n,
          e,
          r,
          (w, C) => n((b) => {
            const k = nn(Sn.foldr, C);
            return o(
              y._3 && !w._3 ? L(w._1, w._2, !0) : w,
              {
                seed: (() => {
                  if (m.tag === "Nothing")
                    return 0;
                  if (m.tag === "Just")
                    return m._1;
                  l();
                })(),
                mode: u,
                frames: hP(u)(k),
                interiors: Tt((E) => {
                  if (E.tag === "TopInside")
                    return T("Just", E._1);
                  if (E.tag === "TopFrame" || E.tag === "TopStatement")
                    return v;
                  l();
                })(k)
              }
            );
          })
        ));
      }), d = c._1, g = c._2;
      return n((p) => n((m) => MA(
        L(d, g, !1),
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
)), $P = /* @__PURE__ */ (() => {
  const t = vt((n, e, r, o, i) => e((s) => e((u) => Ae(
    n,
    e,
    r,
    o,
    (a, c) => e((f) => e((_) => {
      const d = n._3 && !a._3 ? L(a._1, a._2, !0) : a;
      return Ju(
        d,
        e,
        r,
        o,
        (g, p) => e((m) => i(d._3 && !g._3 ? L(g._1, g._2, !0) : g, p))
      );
    }))
  ))))("'scene', 'still', 'title', 'step', 'inside', a statement, or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((a) => e((c) => Ae(
    n,
    e,
    r,
    o,
    (f, _) => e((d) => e((g) => {
      const p = n._3 && !f._3 ? L(f._1, f._2, !0) : f;
      return z2(
        p,
        e,
        r,
        o,
        (m, h) => e(($) => {
          const y = p._3 && !m._3 ? L(m._1, m._2, !0) : m;
          return e((x) => e((w) => {
            const C = n._3 && !y._3 ? L(y._1, y._2, !0) : y;
            return t(
              C,
              e,
              r,
              o,
              (b, k) => e((E) => i(C._3 && !b._3 ? L(b._1, b._2, !0) : b, h))
            );
          }));
        })
      );
    }))
  )))));
})(), yP = (t) => {
  const n = nA(t)($P);
  if (n.tag === "Left")
    return Rt("Left", { msg: JA(n._1._1), line: n._1._2.line, column: n._1._2.column, endLine: n._1._2.line, endColumn: n._1._2.column + 1 | 0 });
  if (n.tag === "Right")
    return Rt("Right", n._1);
  l();
}, Jg = (t) => {
  const n = yP(t);
  if (n.tag === "Left")
    return Rt("Left", n._1.msg);
  if (n.tag === "Right")
    return Rt("Right", n._1);
  l();
}, vP = () => ({ tag: "ParFrag" }), H2 = (t) => t, xP = /* @__PURE__ */ H2("Sync"), TP = /* @__PURE__ */ H2("SelfMsg"), wP = /* @__PURE__ */ vP(), Go = /* @__PURE__ */ $2(Be), cs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, or = /* @__PURE__ */ Ti(Be), eo = Go.state((t) => J(t, t)), M_ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, fa = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, mi = /* @__PURE__ */ wi(Be), NP = (t) => (n) => N((e) => (r) => Ti(Be).bind(e)((o) => t(o)(r)))(wi(Be).pure(n)), O0 = /* @__PURE__ */ Qr(mi)(Mt), CP = (t) => Go.state((n) => J(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: T("Just", t) };
    l();
  })()
)), bP = (t) => (n) => Go.state((e) => J(
  void 0,
  { ...e, lifelines: Xd(R)((r) => T("Just", { ...r, label: n }))(t)(e.lifelines) }
)), JP = (t) => (n) => (e) => {
  const r = cs(e)(t.lifelines);
  return cs(n)(t.lifelines).tag === "Nothing" ? r.tag === "Nothing" ? n + ", " + e : n : r.tag === "Nothing" ? e : "";
}, kP = { lifelines: z, lifelineOrder: [], messages: [], fragments: [], frameEndRows: [], row: 0, error: v }, SP = (t) => (n) => (e) => or.bind(eo)((r) => {
  const o = cs(t)(r.lifelines), i = cs(n)(r.lifelines);
  if (o.tag === "Just" && i.tag === "Just") {
    const s = {
      ...r,
      messages: [
        { fromCol: o._1.column, toCol: i._1.column, labels: e, row: r.row, kind: t === n ? TP : xP },
        ...r.messages
      ],
      row: r.row + 1 | 0
    };
    return Go.state((u) => J(void 0, s));
  }
  return CP("token references unknown node: " + JP(r)(t)(n));
}), LP = (t) => Go.state((n) => J(
  void 0,
  { ...n, lifelines: Xd(R)((e) => T("Just", { ...e, destroyedAt: T("Just", n.row) }))(t)(n.lifelines) }
)), EP = (t) => (n) => {
  const e = n.lifelineOrder.length, r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return { fromCol: 0, toCol: fa(0)(n.lifelineOrder.length - 1 | 0) };
  if (r.tag === "Just")
    return N((o) => (i) => ({ fromCol: M_(o.fromCol)(M_(i.fromCol)(i.toCol)), toCol: fa(o.toCol)(fa(i.fromCol)(i.toCol)) }))({ fromCol: e, toCol: 0 })(t);
  l();
}, AP = (t) => ({
  lifelines: Tt((n) => cs(n)(t.lifelines))(t.lifelineOrder),
  messages: gn(t.messages),
  fragments: gn(t.fragments),
  frameEndRows: t.frameEndRows,
  totalRows: t.row
}), PP = (t) => (n) => or.bind(eo)((e) => {
  const r = cs(t)(e.lifelines);
  if (r.tag === "Just")
    return mi.pure();
  if (r.tag === "Nothing") {
    const o = {
      ...e,
      lifelines: rt(R)(t)({ id: t, label: n, column: e.lifelineOrder.length, createdAt: e.row, destroyedAt: v })(e.lifelines),
      lifelineOrder: kt(e.lifelineOrder)(t),
      row: e.row > 0 || e.messages.length !== 0 ? e.row + 1 | 0 : e.row
    };
    return Go.state((i) => J(void 0, o));
  }
  l();
}), RP = (t) => {
  if (t.tag === "AddNode")
    return PP(t._1.id)(t._1.label);
  if (t.tag === "DelNode")
    return LP(t._1.id);
  if (t.tag === "ModNode") {
    if (t._1.label.tag === "Just")
      return bP(t._1.id)(t._1.label._1);
    if (t._1.label.tag === "Nothing")
      return mi.pure();
    l();
  }
  return t.tag === "Token" ? SP(t._1.from)(t._1.to)(t._1.labels) : mi.pure();
}, FP = (t) => or.bind(eo)((n) => {
  const e = n.row;
  return or.bind(NP((r) => (o) => or.bind(eo)((i) => {
    const s = r.childMessages.length === 0 ? r.dividers : [i.row, ...r.dividers], u = i.messages;
    return or.bind(rc(o))(() => or.bind(eo)((a) => mi.pure({
      dividers: s,
      childMessages: [
        ...r.childMessages,
        ...(() => {
          const c = a.messages.length - u.length | 0;
          return c < 1 ? [] : Et(0, c, a.messages);
        })()
      ]
    })));
  }))({ dividers: [], childMessages: [] })(t))((r) => or.bind(eo)((o) => {
    const i = EP(r.childMessages)(o), s = {
      kind: wP,
      label: "par",
      fromRow: e,
      toRow: fa(o.row)(e + 1 | 0),
      fromCol: i.fromCol,
      toCol: i.toCol,
      regionDividers: gn(r.dividers)
    }, u = Go.state((a) => J(void 0, { ...a, fragments: [s, ...a.fragments] }));
    return r.childMessages.length >= 2 ? u : mi.pure();
  }));
}), rc = (t) => {
  if (t.tag === "Leaf")
    return RP(t._1.op);
  if (t.tag === "Seq" || t.tag === "GroupSeq")
    return O0(rc)(t._1);
  if (t.tag === "Par")
    return FP(t._1);
  l();
}, GP = (t) => {
  const n = or.bind(O0((e) => or.bind(eo)((r) => or.bind(rc(e.ops))(() => or.bind(eo)((o) => {
    const i = Go.state((s) => J(void 0, { ...s, frameEndRows: kt(s.frameEndRows)(s.row - 1 | 0) }));
    return (o.messages.length - r.messages.length | 0) > 0 ? i : mi.pure();
  }))))(t.frames))(() => eo)(kP)._1;
  if (n.error.tag === "Just")
    return Rt("Left", n.error._1);
  if (n.error.tag === "Nothing")
    return Rt("Right", AP(n));
  l();
}, IP = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, BP = { padding: 24, headerHeight: 36, headerWidth: 120, columnSpacing: 160, rowHeight: 36, topGap: 24, bottomGap: 24 }, DP = (t) => {
  const n = 84 + j(IP(1)(t.totalRows)) * 36, e = qt((r) => (o) => ({ lifeline: o, x: 84 + j(r) * 160 }))(t.lifelines);
  return {
    metrics: BP,
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
}, zP = (t) => (e) => {
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
    l();
  }
  return i;
}, O2 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, W2 = (t) => (e) => {
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
    l();
  }
  return i;
}, Q2 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, HP = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, OP = /* @__PURE__ */ N((t) => (n) => rt(st)(n)()(t))(z), WP = { r: 255, g: 255, b: 255, a: 255 }, of = { r: 26, g: 26, b: 26, a: 255 }, QP = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, qP = { r: 232, g: 232, b: 232, a: 255 }, oc = (t) => (n) => (e) => (r) => (o) => [
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
  ...iu
], X_ = (t) => (n) => (e) => ({ ...e, stack: kt(e.stack)(t), openedAt: rt(st)(t)(n)(e.openedAt) }), sf = (t) => (n) => {
  const e = n.stack.length - 1 | 0;
  if (e >= 0 && e < n.stack.length) {
    const r = zP(n.stack[e])(n.openedAt), o = (() => {
      if (r.tag === "Nothing")
        return t;
      if (r.tag === "Just")
        return r._1;
      l();
    })();
    return {
      ...n,
      stack: n.stack.length === 0 ? [] : Et(0, n.stack.length - 1 | 0, n.stack),
      openedAt: Zi(st)(n.stack[e])(n.openedAt),
      spans: kt(n.spans)({ col: n.stack[e], fromRow: o, toRow: O2(o)(t) })
    };
  }
  return n;
}, U_ = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, f = i, _ = f.stack.length - 1 | 0;
    if (_ >= 0 && _ < f.stack.length) {
      if (a(f.stack[_])) {
        s = !1, u = f;
        continue;
      }
      r = a, o = c, i = sf(c)(f);
      continue;
    }
    s = !1, u = f;
  }
  return u;
}, q2 = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = u.stack.length - 1 | 0;
    if (a >= 0 && a < u.stack.length) {
      e = s, r = sf(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, MP = (t) => (n) => {
  const e = Ce(Jo)(n.fromCol)(t.stack) ? U_((() => {
    const r = n.fromCol;
    return (o) => r === o;
  })())(n.row - 1 | 0)(t) : X_(n.fromCol)(n.row)(q2(n.row - 1 | 0)(t));
  if (Ce(Jo)(n.toCol)(e.stack)) {
    const r = U_((() => {
      const o = n.toCol;
      return (i) => o === i;
    })())(n.row - 1 | 0)(sf(n.row)(e));
    return { ...r, returnRows: rt(st)(n.row)()(r.returnRows) };
  }
  return X_(n.toCol)(n.row)(e);
}, XP = (t) => (n) => (e) => {
  const r = MP(n)(e);
  return W2(e.row)(t) ? q2(e.row)(r) : r;
}, la = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: vu, lineCap: yr }, M2 = { r: 26, g: 26, b: 26, a: 255 }, UP = { color: { r: 130, g: 130, b: 130, a: 255 }, width: 1, lineJoin: vu, lineCap: ze }, Y_ = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: vu, lineCap: ze }, YP = { color: { r: 244, g: 244, b: 244, a: 255 }, flat: !0 }, V_ = (t) => (n) => (e) => Cn((r) => r.col === n && r.fromRow <= e && e <= r.toRow, t), K_ = { color: { r: 90, g: 90, b: 90, a: 255 }, width: 1, lineJoin: vu, lineCap: ze }, VP = { stack: [], openedAt: z, spans: [], returnRows: z }, KP = { color: { r: 150, g: 150, b: 150, a: 255 }, width: 1, lineJoin: vu, lineCap: ze }, jP = (t) => (n) => (e) => (r) => (o) => {
  const i = n.bodyTop + (j(o) + 0.5) * n.metrics.rowHeight - n.metrics.rowHeight / 2;
  return t.strokePath([1, e, i, 2, r, i])(KP);
}, ZP = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ls(n.Applicative0())(Mt);
  return (o) => (i) => {
    const s = o.bodyTop + (j(i.fromRow) + 0.5) * o.metrics.rowHeight - o.metrics.rowHeight / 2 - 6, u = i.fromCol >= 0 && i.fromCol < o.columns.length ? o.columns[i.fromCol].x - 16 : o.metrics.padding - 16, a = [1, u, s, 2, u + 38, s, 2, u + 32, s + 14, 2, u, s + 14, ...iu], c = i.toCol >= 0 && i.toCol < o.columns.length ? o.columns[i.toCol].x + 16 : o.metrics.padding + 16, f = o.bodyTop + (j(O2(i.toRow)(i.fromRow + 1 | 0) - 1 | 0) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight / 2 + 6;
    return e.bind(t.strokePath([1, u, s, 2, c, s, 2, c, f, 2, u, f, ...iu])(K_))(() => e.bind(t.fillStrokePath(a)(QP)(K_))(() => e.bind(t.drawText({
      x: u + 6,
      y: s + 7,
      content: "par",
      font: { family: "Inter", size: 11, weight: 700 },
      color: of,
      align: os,
      baseline: tr
    }))(() => r(i.regionDividers)(jP(t)(o)(u)(c)))));
  };
}, X2 = (t) => (n) => t >= n ? [] : [J(t, Q2(n)(t + 6)), ...X2(t + 10)(n)], tR = (t) => (n) => {
  if (n <= t)
    return [];
  const e = (r) => r >= n ? [] : [J(r, Q2(n)(r + 6)), ...e(r + 10)];
  return e(t);
}, nR = (t) => {
  const n = ls(t.Monad0().Applicative0())(Mt);
  return (e) => (r) => n(tR(e.headerTop + e.metrics.headerHeight + j(r.lifeline.createdAt) * e.metrics.rowHeight + 4)((() => {
    if (r.lifeline.destroyedAt.tag === "Just")
      return e.bodyTop + (j(r.lifeline.destroyedAt._1) + 0.5) * e.metrics.rowHeight;
    if (r.lifeline.destroyedAt.tag === "Nothing")
      return e.bodyBottom;
    l();
  })()))((o) => t.strokePath([1, r.x, o._1, 2, r.x, o._2])(UP));
}, U2 = (t) => (n) => t <= n ? [] : [J(t, HP(n)(t - 6)), ...U2(t - 6 - 4)(n)], eR = (t) => (n) => t === n ? [] : t < n ? X2(t)(n) : U2(t)(n), rR = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.headerTop + j(r.lifeline.createdAt) * e.metrics.rowHeight, i = e.metrics.headerWidth / 2, s = o + e.metrics.headerHeight, u = oc(r.x - i)(o)(r.x + i)(s)(6);
    return n.bind(t.fillStrokePath(oc(r.x - i)(o + 5)(r.x + i)(s + 5)(6))({ color: qP, flat: !0 })(Y_))(() => n.bind(t.fillStrokePath(u)(YP)(Y_))(() => t.drawText({
      x: r.x,
      y: o + e.metrics.headerHeight / 2,
      content: r.lifeline.label,
      font: { family: "Inter", size: 14, weight: 600 },
      color: of,
      align: lo,
      baseline: tr
    })));
  };
}, oR = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = u.stack.length - 1 | 0;
    if (a >= 0 && a < u.stack.length) {
      e = s, r = sf(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, iR = (t) => oR((() => {
  const n = t.diagram.messages.length - 1 | 0;
  return n >= 0 && n < t.diagram.messages.length ? t.diagram.messages[n].row : 0;
})())(N(XP(OP(t.diagram.frameEndRows)))(VP)(dt(
  (n) => n.kind === "Sync" || n.kind !== "SelfMsg",
  t.diagram.messages
))), sR = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.bodyTop + (j(r.row) + 0.5) * e.metrics.rowHeight, i = r.fromCol >= 0 && r.fromCol < e.columns.length ? e.columns[r.fromCol].x : e.metrics.padding, s = o - e.metrics.rowHeight * 0.3, u = i + 36, a = o + e.metrics.rowHeight * 0.3, c = i + 10, f = [1, i, a, 2, c, a - 5, 2, c, a + 5, ...iu];
    return n.bind(t.strokePath([1, i, s, 2, u, s, 2, u, a, 2, i, a])(la))(() => n.bind(t.fillPath(f)({
      color: M2,
      flat: !0
    }))(() => t.drawText({
      x: i + 42,
      y: o,
      content: Mr(" ")(B(co)(r.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: of,
      align: os,
      baseline: tr
    })));
  };
}, uR = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ls(n.Applicative0())(Mt);
  return (o) => (i) => (s) => (u) => {
    const a = s ? o.bodyTop + (j(u.row) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight * 0.5 : o.bodyTop + (j(u.row) + 0.5) * o.metrics.rowHeight, c = u.toCol >= u.fromCol ? 1 : -1, f = (u.fromCol >= 0 && u.fromCol < o.columns.length ? o.columns[u.fromCol].x : o.metrics.padding) + (V_(i)(u.fromCol)(u.row) ? c * 6 : c * 0), _ = (u.toCol >= 0 && u.toCol < o.columns.length ? o.columns[u.toCol].x : o.metrics.padding) - (V_(i)(u.toCol)(u.row) ? c * 6 : c * 0), d = _ - c * 10, g = s ? t.strokePath([1, d, a - 5, 2, _, a, 2, d, a + 5])(la) : t.fillPath([1, _, a, 2, d, a - 5, 2, d, a + 5, ...iu])({ color: M2, flat: !0 });
    return e.bind(s ? r(eR(f)(_))((p) => t.strokePath([1, p._1, a, 2, p._2, a])(la)) : t.strokePath([1, f, a, 2, _, a])(la))(() => e.bind(g)(() => t.drawText({
      x: (f + _) / 2,
      y: a - 6,
      content: Mr(" ")(B(co)(u.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: of,
      align: lo,
      baseline: P3
    })));
  };
}, aR = (t) => {
  const n = sR(t), e = uR(t);
  return (r) => (o) => (i) => (s) => {
    if (s.kind === "SelfMsg")
      return n(r)(s);
    if (s.kind === "Sync")
      return e(r)(o)(W2(s.row)(i))(s);
    l();
  };
}, j_ = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.25, lineJoin: re, lineCap: ze }, cR = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, fR = { color: { r: 252, g: 252, b: 252, a: 255 }, flat: !0 }, lR = (t) => (n) => (e) => {
  const r = e.col >= 0 && e.col < n.columns.length ? n.columns[e.col].x : n.metrics.padding, o = n.bodyTop + (j(e.fromRow) + 0.5) * n.metrics.rowHeight, i = n.bodyTop + (j(e.toRow) + 0.5) * n.metrics.rowHeight + n.metrics.rowHeight * 0.5, s = oc(r - 6)(o)(r + 6)(i)(3);
  return t.Monad0().Bind1().bind(t.fillStrokePath(oc(r - 6)(o + 5)(r + 6)(i + 5)(3))(cR)(j_))(() => t.fillStrokePath(s)(fR)(j_));
}, Y2 = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ls(n.Applicative0())(Mt), o = rR(t), i = nR(t), s = ZP(t), u = aR(t);
  return (a) => {
    const c = iR(a);
    return e.bind(t.setViewport({ vx: 0, vy: 0, vw: a.width, vh: a.height }))(() => e.bind(t.clearBackground(WP))(() => e.bind(r(a.columns)(o(a)))(() => e.bind(r(a.columns)(i(a)))(() => e.bind(r(c.spans)(lR(t)(a)))(() => e.bind(r(a.diagram.fragments)(s(a)))(() => r(a.diagram.messages)(u(a)(c.spans)(c.returnRows))))))));
  };
}, gR = /* @__PURE__ */ Y2(V3);
function _R(t, n, e, r) {
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
function Ge(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
function Of(t) {
  return function() {
    return function(n) {
      return t(n)();
    };
  };
}
function Wf(t) {
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
function Qf(t) {
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
const ic = function() {
  return window;
};
function dR(t) {
  return function() {
    return t.document;
  };
}
function W0(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
function hR(t) {
  return function(n) {
    return function() {
      return n.cancelAnimationFrame(t);
    };
  };
}
const sc = (t) => t, uc = (t) => () => {
  const n = t.getBoundingClientRect?.(), e = n?.width || t.clientWidth || 0, r = n?.height || t.clientHeight || 0;
  return { width: e, height: r };
}, V2 = (t) => (n) => () => {
  let e = 0;
  const r = () => {
    e || (e = requestAnimationFrame(() => {
      e = 0, n();
    }));
  }, o = typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
  return o?.observe(t), window.addEventListener("resize", r), () => {
    e && cancelAnimationFrame(e), o?.disconnect(), window.removeEventListener("resize", r);
  };
}, K2 = () => window.devicePixelRatio || 1, pR = (t) => (n) => (e) => (r) => (o) => () => {
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
    const f = t.getContext("2d");
    if (!f) return;
    f.save(), f.scale(c, c), f.clearRect(0, 0, i, s), f.fillStyle = "#111827", f.fillRect(0, 0, i, s), f.textAlign = "center", f.textBaseline = "middle", f.fillStyle = "#f9fafb", f.font = "700 18px system-ui, sans-serif", f.fillText(u, i / 2, s / 2 - 10), f.fillStyle = "#cbd5e1", f.font = "13px system-ui, sans-serif", f.fillText(a, i / 2, s / 2 + 18), f.restore();
    return;
  }
  t.textContent = `${u}. ${a}.`;
}, j2 = (t, n) => {
  n.innerHTML = t;
}, ac = (t, n, e) => {
  t.style.setProperty(n, e);
}, ga = (t) => (n) => t === n, si = /* @__PURE__ */ new WeakMap(), _u = /* @__PURE__ */ new WeakSet(), du = /* @__PURE__ */ new WeakMap(), cc = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakSet(), Di = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap();
let mR = 0;
const $R = `#version 300 es
precision highp float;
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`, yR = `#version 300 es
precision highp float;
uniform sampler2D uScene;
uniform float uStrength;
uniform float uFilmAmount;
uniform float uTime;
in vec2 vUv;
out vec4 fragColor;


float grain(vec2 pixel, float frame) {
  vec2 cell = floor(pixel);
  return fract(sin(dot(cell + vec2(frame * 17.0, frame * 31.0), vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float film = clamp(uFilmAmount, 0.0, 1.0);
  vec4 color = texture(uScene, vUv);
  float strength = clamp(uStrength, 0.0, 1.0);
  // Non-spatial film character only: never shift, resample, or shade scene
  // pixels. Spatial vignettes read as muddy gradients on flat diagram fills.
  float frame = floor(uTime * 18.0);
  float grainValue = grain(gl_FragCoord.xy, frame) - 0.5;
  color.rgb += grainValue * (0.026 + 0.014 * strength) * film;
  float flicker = sin(uTime * 21.7) * 0.004 + sin(uTime * 7.1) * 0.003;
  color.rgb *= 1.0 + flicker * film;
  fragColor = color;
}`, vR = `#version 300 es
precision highp float;
uniform vec4 uDestRect;
uniform float uOpen;
uniform float uPanel;
uniform float uFall;
out vec2 vLocal;
out float vSurface;
out float vThickness;

void main() {
  vec2 corners[6] = vec2[6](
    vec2(0.0, 0.0), vec2(1.0, 0.0), vec2(0.0, 1.0),
    vec2(0.0, 1.0), vec2(1.0, 0.0), vec2(1.0, 1.0)
  );
  int surface = gl_VertexID / 6;
  vec2 p = corners[gl_VertexID - surface * 6];
  bool falling = uFall > 0.5;
  bool left = uPanel < 0.0;
  if (surface == 3 || (!falling && surface == 0 && !left)) p.x = 1.0 - p.x;
  float closedX;
  float localY;
  float thickness;
  if (falling) {
    if (surface == 0) {
      // The top edge of a single panel hinged along its bottom.
      closedX = p.x;
      localY = 0.0;
      thickness = p.y;
    } else if (surface == 1 || surface == 2) {
      // Left and right edges.
      closedX = surface == 1 ? 0.0 : 1.0;
      localY = p.x;
      thickness = p.y;
    } else {
      closedX = p.x;
      localY = p.y;
      thickness = surface == 3 ? 1.0 : 0.0;
    }
  } else if (surface == 0) {
    // The unhinged vertical edge.
    closedX = 0.5;
    localY = p.y;
    thickness = p.x;
  } else if (surface == 1 || surface == 2) {
    // Top and bottom edges.
    closedX = left ? p.x * 0.5 : 0.5 + p.x * 0.5;
    localY = surface == 1 ? 0.0 : 1.0;
    thickness = p.y;
  } else {
    closedX = left ? p.x * 0.5 : 0.5 + p.x * 0.5;
    localY = p.y;
    thickness = surface == 3 ? 1.0 : 0.0;
  }

  float slabDepth = 0.032;
  float projectedW;
  vec2 projectedLocal;
  if (falling) {
    float angle = max(0.0, uOpen) * 3.05;
    float towardViewer = (1.0 - localY) * sin(angle);
    float rotatedY = 1.0 + (localY - 1.0) * cos(angle);
    rotatedY += slabDepth * sin(angle) * thickness;
    towardViewer -= slabDepth * cos(angle) * thickness;
    projectedW = 1.0 - towardViewer * 0.22;
    projectedLocal = vec2(closedX, rotatedY);
  } else {
    float hingeX = left ? 0.0 : 1.0;
    float angle = max(0.0, uOpen) * 1.91986;
    float towardViewer = abs(closedX - hingeX) * sin(angle);
    float rotatedX = hingeX + (closedX - hingeX) * cos(angle);
    // The authored face is the front of a shallow slab. Its body extends away
    // from the viewer, rotated about the same border-welded vertical hinge.
    float panelSide = left ? 1.0 : -1.0;
    rotatedX += panelSide * slabDepth * sin(angle) * thickness;
    towardViewer -= slabDepth * cos(angle) * thickness;
    projectedW = 1.0 - towardViewer * 1.1;
    projectedLocal = vec2(rotatedX, localY);
  }
  vec2 center = uDestRect.xy + uDestRect.zw * 0.5;
  vec2 world = uDestRect.xy + projectedLocal * uDestRect.zw;
  vec2 projected = center + (world - center) / projectedW;
  vec2 ndc = vec2(projected.x * 2.0 - 1.0, 1.0 - projected.y * 2.0);
  gl_Position = vec4(ndc * projectedW, 0.0, projectedW);
  vLocal = vec2(closedX, localY);
  vSurface = float(surface);
  vThickness = thickness;
}`, xR = `#version 300 es
precision highp float;
uniform sampler2D uDoor;
uniform vec4 uCaptureRect;
uniform vec2 uFaceSize;
uniform float uOpen;
uniform float uAttention;
uniform float uPanel;
uniform float uFall;
uniform float uRadius;
in vec2 vLocal;
in float vSurface;
in float vThickness;
out vec4 fragColor;

float roundedPanel(vec2 local) {
  bool falling = uFall > 0.5;
  bool left = uPanel < 0.0;
  vec2 panelLocal = falling
    ? local
    : vec2(left ? local.x * 2.0 : (local.x - 0.5) * 2.0, local.y);
  vec2 panelSize = vec2(falling ? uFaceSize.x : uFaceSize.x * 0.5, uFaceSize.y);
  vec2 halfSize = panelSize * 0.5;
  float radius = min(uRadius, min(halfSize.x, halfSize.y));
  bool innerCorner = !falling && (left ? panelLocal.x > 0.5 : panelLocal.x < 0.5);
  float innerReveal = smoothstep(0.08, 0.20, uOpen);
  float cornerRadius = innerCorner ? radius * innerReveal : radius;
  vec2 q =
    abs((panelLocal - 0.5) * panelSize) -
    (halfSize - vec2(cornerRadius));
  return
    length(max(q, 0.0)) +
    min(max(q.x, q.y), 0.0) -
    cornerRadius;
}
vec2 doorUv(vec2 local) {
  return vec2(
    uCaptureRect.x + local.x * uCaptureRect.z,
    1.0 - (uCaptureRect.y + local.y * uCaptureRect.w)
  );
}
float bayer4(vec2 pixel) {
  float thresholds[16] = float[16](
    0.0, 8.0, 2.0, 10.0,
    12.0, 4.0, 14.0, 6.0,
    3.0, 11.0, 1.0, 9.0,
    15.0, 7.0, 13.0, 5.0
  );
  ivec2 cell = ivec2(mod(floor(pixel), 4.0));
  return (thresholds[cell.y * 4 + cell.x] + 0.5) / 16.0;
}



void main() {
  // Each moving half keeps the authored outer radius. Its cut-edge corners
  // round only after the split opens, so the closed leaves still form one
  // continuous rounded face without a notched centre seam.
  if (roundedPanel(vLocal) > 0.0) discard;
  if (uOpen < 0.08 && vSurface < 3.5) discard;
  vec4 material = texture(uDoor, doorUv(vLocal));
  if (vSurface > 3.5) {
    material.rgb *= 1.0 - 0.20 * uOpen;
  } else if (vSurface > 2.5) {
    // Recover a label-free base color, then use a uniform two-tone stipple.
    // Spatial lighting ramps looked like accidental gradients on flat nodes.
    vec4 back0 = texture(uDoor, doorUv(vec2(0.34, 0.30)));
    vec4 back1 = texture(uDoor, doorUv(vec2(0.66, 0.30)));
    vec4 back2 = texture(uDoor, doorUv(vec2(0.34, 0.70)));
    vec4 back3 = texture(uDoor, doorUv(vec2(0.66, 0.70)));
    float backWeight = back0.a + back1.a + back2.a + back3.a;
    vec3 backMaterial =
      (
        back0.rgb * back0.a +
        back1.rgb * back1.a +
        back2.rgb * back2.a +
        back3.rgb * back3.a
      ) / max(0.001, backWeight);
    if (backWeight < 0.1) backMaterial = material.rgb;
    float angle = smoothstep(0.08, 0.18, uOpen) * 1.91986;
    float facing = abs(cos(angle));
    float density = mix(0.46, 0.66, facing);
    float dither = bayer4(gl_FragCoord.xy * 0.5);
    vec3 darkInk = backMaterial * 0.48;
    vec3 lightInk = min(vec3(1.0), backMaterial * 0.96 + vec3(0.025));
    material.rgb = mix(darkInk, lightInk, step(dither, density));
  } else {
    if (vSurface > 0.5 && vSurface < 1.5) {
      float ledgeDither = bayer4(gl_FragCoord.xy * 0.5);
      material.rgb = mix(vec3(0.11), vec3(0.46), step(ledgeDither, 0.44));
    } else {
      material.rgb = vec3(vSurface < 0.5 ? 0.18 : 0.24);
    }
  }
  if (vSurface > 2.5) {
    float splitReveal = smoothstep(0.18, 0.34, uOpen);
    float edgeDistance = abs(roundedPanel(vLocal));
    float screenPixel = max(fwidth(edgeDistance), 0.0001);
    float outline = splitReveal
      * (1.0 - smoothstep(0.35 * screenPixel, 3.5 * screenPixel, edgeDistance));
    float outlineX = uPanel < 0.0 ? 0.0 : 1.0;
    vec4 outlineMaterial = texture(uDoor, doorUv(vec2(outlineX, 0.5)));
    material.rgb = mix(material.rgb, outlineMaterial.rgb, outline);
    material.a = max(material.a, outline * outlineMaterial.a);
  }
  material.a = 1.0;
  fragColor = material;
}`, Z_ = (t, n, e) => {
  const r = t.createShader(n);
  if (!r) throw new Error("Unable to allocate zoom shader");
  if (t.shaderSource(r, e), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(r) || "Zoom shader compilation failed";
    throw t.deleteShader(r), new Error(o);
  }
  return r;
}, td = (t, n, e, r) => {
  const o = Z_(t, t.VERTEX_SHADER, n), i = Z_(t, t.FRAGMENT_SHADER, e), s = t.createProgram();
  if (!s) throw new Error(`Unable to allocate ${r} program`);
  if (t.attachShader(s, o), t.attachShader(s, i), t.linkProgram(s), t.deleteShader(o), t.deleteShader(i), !t.getProgramParameter(s, t.LINK_STATUS)) {
    const u = t.getProgramInfoLog(s) || `${r} shader link failed`;
    throw t.deleteProgram(s), new Error(u);
  }
  return s;
}, Z2 = (t) => {
  if (typeof document > "u" || typeof t?.getContext != "function" || !t.parentElement)
    return null;
  const n = document.createElement("canvas"), e = n.getContext("webgl2", {
    alpha: !0,
    antialias: !1,
    depth: !1,
    premultipliedAlpha: !1,
    preserveDrawingBuffer: !1,
    stencil: !1
  });
  if (!e) return null;
  const r = t.parentElement, o = r.style.position, i = getComputedStyle(r).position === "static";
  i && (r.style.position = "relative"), n.dataset.mg = "velocity-pass", n.setAttribute("aria-hidden", "true"), Object.assign(n.style, {
    display: "none",
    left: `${t.offsetLeft}px`,
    pointerEvents: "none",
    position: "absolute",
    top: `${t.offsetTop}px`,
    zIndex: "1"
  }), t.insertAdjacentElement("afterend", n);
  try {
    const s = td(e, $R, yR, "zoom"), u = td(e, vR, xR, "door"), a = e.createTexture();
    if (!a) throw new Error("Unable to allocate zoom texture");
    return e.bindTexture(e.TEXTURE_2D, a), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0), e.useProgram(s), e.uniform1i(e.getUniformLocation(s, "uScene"), 0), e.useProgram(u), e.uniform1i(e.getUniformLocation(u, "uDoor"), 1), {
      changedPosition: i,
      doorAttentionLocation: e.getUniformLocation(u, "uAttention"),
      doorCaptureLocation: e.getUniformLocation(u, "uCaptureRect"),
      doorDestLocation: e.getUniformLocation(u, "uDestRect"),
      doorFaceSizeLocation: e.getUniformLocation(u, "uFaceSize"),
      doorRadiusLocation: e.getUniformLocation(u, "uRadius"),
      doorFallLocation: e.getUniformLocation(u, "uFall"),
      doorOpenLocation: e.getUniformLocation(u, "uOpen"),
      doorPanelLocation: e.getUniformLocation(u, "uPanel"),
      doorProgram: u,
      doorTextures: /* @__PURE__ */ new Map(),
      gl: e,
      overlay: n,
      overlayHeight: -1,
      overlayLeft: -1,
      overlayTop: -1,
      overlayWidth: -1,
      parent: r,
      program: s,
      restorePosition: o,
      restoreVisibility: t.style.visibility,
      sceneTextureHeight: 0,
      sceneTextureWidth: 0,
      source: t,
      texture: a,
      zoomFilmAmountLocation: e.getUniformLocation(s, "uFilmAmount"),
      zoomStrengthLocation: e.getUniformLocation(s, "uStrength"),
      zoomTimeLocation: e.getUniformLocation(s, "uTime")
    };
  } catch {
    return n.remove(), i && r.style.position === "relative" && (r.style.position = o), null;
  }
}, t$ = (t) => {
  const n = Di.get(t);
  n && n(), Di.delete(t);
}, TR = (t) => {
  if (si.has(t) || _u.has(t) || Di.has(t))
    return;
  const n = () => {
    if (Di.delete(t), !t.isConnected || si.has(t)) return;
    let e = null;
    try {
      e = Z2(t);
    } catch {
      e = null;
    }
    e ? si.set(t, e) : (_u.add(t), t.setAttribute("data-mg-gpu-pass", "unavailable"));
  };
  if (typeof requestIdleCallback == "function") {
    const e = requestIdleCallback(n, { timeout: 50 });
    Di.set(t, () => cancelIdleCallback(e));
  } else {
    const e = setTimeout(n, 0);
    Di.set(t, () => clearTimeout(e));
  }
}, wR = (t, n) => {
  n && (n.overlay.style.display !== "none" && (n.overlay.style.display = "none"), t.style.visibility !== n.restoreVisibility && (t.style.visibility = n.restoreVisibility)), t.getAttribute("data-mg-gpu-pass") !== "idle" && t.setAttribute("data-mg-gpu-pass", "idle"), t.removeAttribute("data-mg-door-motion");
}, NR = (t, n) => {
  const e = du.get(t), r = e?.canvas || document.createElement("canvas");
  r.width !== t.width && (r.width = t.width), r.height !== t.height && (r.height = t.height);
  const o = r.getContext("2d");
  o && (o.clearRect(0, 0, r.width, r.height), o.drawImage(t, 0, 0), du.set(t, {
    canvas: r,
    capture: [n.x, n.y, n.w, n.h],
    faceSize: [n.w * t.width, n.h * t.height],
    key: String(n.key),
    radius: n.r * t.width,
    version: (e?.version || 0) + 1
  }));
}, kg = (t, n, e) => {
  const r = Math.max(0, Math.min(1, (e - t) / Math.max(1e-6, n - t)));
  return r * r * (3 - 2 * r);
}, CR = (t, n, e) => Math.max(0, Math.min(
  Number(t) || 0,
  Math.max(0, Number(n) || 0) * 0.5,
  Math.max(0, Number(e) || 0) * 0.5
)), bR = 4, JR = (t, n) => Math.max(0, Number(t) || 0) / Math.max(1e-6, Math.max(0, Number(n) || 0)) >= bR, kR = (t, n) => {
  let e = (Number(t) | 0) ^ 2166136261;
  for (let r = 0; r < String(n).length; r += 1)
    e = Math.imul(e ^ String(n).charCodeAt(r), 16777619);
  return e >>> 0;
}, n$ = (t, n, e, r) => JR(e, r) || kR(t, n) % 3 === 0, fs = 0.48, Xi = 10.8, e$ = Math.sqrt(1 - fs * fs), lc = Xi * e$, r$ = fs / e$, SR = 1 - Math.exp(-fs * Xi) * (Math.cos(lc) + r$ * Math.sin(lc)), qf = (t) => {
  const n = Math.max(0, Math.min(1, t));
  return (1 - Math.exp(-fs * Xi * n) * (Math.cos(lc * n) + r$ * Math.sin(lc * n))) / SR;
}, LR = (t, n, e) => {
  let r = Number.isFinite(t.value) ? t.value : 0, o = Number.isFinite(t.velocity) ? t.velocity : 0, i = Math.max(0, Math.min(0.1, Number(e) || 0));
  const s = Number(n) >= 0.5 ? 1 : 0;
  for (; i > 0; ) {
    const u = Math.min(i, 0.008333333333333333), a = Xi * Xi * (s - r) - 2 * fs * Xi * o;
    o += a * u, r += o * u, i -= u;
  }
  return { value: r, velocity: o };
}, o$ = (t, n, e, r) => {
  const o = String(n.key), i = Number(n.progress) || 0, s = Number(n.depth) || 0, u = cc.get(t), a = u && u.key === o && u.direction === e, c = a && Math.abs(i - u.progress) > 0.12;
  let f = a ? u : {
    direction: e,
    key: o,
    progress: i,
    value: nd(s, i, e),
    velocity: 0
  };
  if (c)
    f = {
      ...f,
      value: nd(s, i, e),
      velocity: 0
    };
  else {
    const _ = 1 - Math.max(0, Math.min(1, s)), g = (e < 0 ? i >= 0.25 : _ < 0.48) ? 1 : 0;
    f = {
      ...f,
      ...LR(f, g, r)
    };
  }
  return f.progress = i, cc.set(t, f), f.value;
}, nd = (t, n, e) => {
  if (e < 0) {
    const u = Math.max(
      0,
      Math.min(1, (n - 0.25) / 0.28)
    );
    return qf(u * u * u);
  }
  const r = 1 - Math.max(0, Math.min(1, t)), o = Math.max(
    0,
    Math.min(1, (r - 0.48) / 0.5)
  ), i = 0.48, s = qf(o * i) / qf(i);
  return Math.min(1, Math.abs(1 - s));
}, Ho = "http://www.w3.org/2000/svg", ER = (t) => {
  if (!t.parentElement) return null;
  const n = t.parentElement, e = n.style.position, r = getComputedStyle(n).position === "static";
  r && (n.style.position = "relative");
  const o = document.createElementNS(Ho, "svg");
  o.dataset.mg = "svg-door-pass", o.setAttribute("aria-hidden", "true"), o.setAttribute("viewBox", "0 0 1 1"), o.setAttribute("preserveAspectRatio", "none");
  const i = document.createElementNS(Ho, "defs");
  o.appendChild(i);
  const s = (p) => {
    const m = document.createElementNS(Ho, "path");
    m.dataset.mgDoorLeaf = p;
    const h = `mg-door-${p}-${++mR}`;
    m.setAttribute("id", h), m.setAttribute("vector-effect", "non-scaling-stroke"), m.setAttribute("stroke-linejoin", "round"), o.appendChild(m);
    const $ = document.createElementNS(Ho, "clipPath"), y = `${h}-clip`;
    $.setAttribute("id", y), $.setAttribute("clipPathUnits", "userSpaceOnUse");
    const x = document.createElementNS(Ho, "use");
    x.setAttribute("href", `#${h}`), $.appendChild(x), i.appendChild($);
    const w = document.createElementNS(Ho, "text");
    return w.dataset.mgDoorLabelClip = `url(#${y})`, w.dataset.mgDoorLabelHalf = p, w.setAttribute("clip-path", `url(#${y})`), w.setAttribute("text-anchor", "middle"), w.setAttribute("stroke", "none"), { label: w, leaf: m };
  }, u = s("left"), a = s("right"), c = (p, m) => {
    const h = document.createElementNS(Ho, "path");
    return h.dataset[p === "outer" ? "mgDoorOuter" : "mgDoorSeam"] = m, h.setAttribute("fill", "none"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("vector-effect", "non-scaling-stroke"), o.appendChild(h), h;
  }, f = c("outer", "left"), _ = c("outer", "right"), d = c("seam", "left"), g = c("seam", "right");
  return o.appendChild(u.label), o.appendChild(a.label), Object.assign(o.style, {
    display: "none",
    pointerEvents: "none",
    position: "absolute",
    zIndex: "1"
  }), t.insertAdjacentElement("afterend", o), {
    changedPosition: r,
    left: u.leaf,
    leftLabel: u.label,
    overlay: o,
    leftOuter: f,
    leftSeam: d,
    parent: n,
    restorePosition: e,
    right: a.leaf,
    rightLabel: a.label,
    rightOuter: _,
    rightSeam: g
  };
}, wo = (t, n, e, r, o) => {
  const i = e ? 0 : 1, s = Math.abs(r - i) * Math.sin(n), u = i + (r - i) * Math.cos(n), a = 1 - s * 1.1, c = Number(t.x) + Number(t.w) * 0.5, f = Number(t.y) + Number(t.h) * 0.5, _ = Number(t.x) + u * Number(t.w), d = Number(t.y) + o * Number(t.h);
  return [
    c + (_ - c) / a,
    f + (d - f) / a
  ];
}, ed = (t, n, e, r) => {
  const o = Math.max(0, n) * 1.91986, i = Math.max(
    0,
    Math.min(0.5, Number(t.r) / Math.max(1e-6, Number(t.w)))
  ), s = Math.max(
    0,
    Math.min(
      0.5,
      Number(t.r) * r / Math.max(1e-6, Number(t.h))
    )
  ), u = (h) => wo(t, o, e, h[0], h[1]), a = (h, ...$) => `${h}${$.map(u).map((y) => `${y[0]},${y[1]}`).join(" ")}`, c = 0.5522847498307936, f = kg(0.08, 0.2, n), _ = i * f, d = s * f, g = [
    a("M", [0.5, d]),
    a("L", [0.5, 1 - d])
  ].join(" ");
  if (e) {
    const h = [
      a("M", [i, 0]),
      a(
        "C",
        [i * (1 - c), 0],
        [0, s * (1 - c)],
        [0, s]
      ),
      a("L", [0, 1 - s]),
      a(
        "C",
        [0, 1 - s * (1 - c)],
        [i * (1 - c), 1],
        [i, 1]
      ),
      a("L", [0.5 - _, 1]),
      a(
        "C",
        [0.5 - _ * (1 - c), 1],
        [0.5, 1 - d * (1 - c)],
        [0.5, 1 - d]
      ),
      a("L", [0.5, d]),
      a(
        "C",
        [0.5, d * (1 - c)],
        [0.5 - _ * (1 - c), 0],
        [0.5 - _, 0]
      ),
      "Z"
    ].join(" "), $ = [
      a("M", [0.5, d]),
      a(
        "C",
        [0.5, d * (1 - c)],
        [0.5 - _ * (1 - c), 0],
        [0.5 - _, 0]
      ),
      a("L", [i, 0]),
      a(
        "C",
        [i * (1 - c), 0],
        [0, s * (1 - c)],
        [0, s]
      ),
      a("L", [0, 1 - s]),
      a(
        "C",
        [0, 1 - s * (1 - c)],
        [i * (1 - c), 1],
        [i, 1]
      ),
      a("L", [0.5 - _, 1]),
      a(
        "C",
        [0.5 - _ * (1 - c), 1],
        [0.5, 1 - d * (1 - c)],
        [0.5, 1 - d]
      )
    ].join(" ");
    return { fill: h, outer: $, seam: g };
  }
  const p = [
    a("M", [0.5 + _, 0]),
    a("L", [1 - i, 0]),
    a(
      "C",
      [1 - i * (1 - c), 0],
      [1, s * (1 - c)],
      [1, s]
    ),
    a("L", [1, 1 - s]),
    a(
      "C",
      [1, 1 - s * (1 - c)],
      [1 - i * (1 - c), 1],
      [1 - i, 1]
    ),
    a("L", [0.5 + _, 1]),
    a(
      "C",
      [0.5 + _ * (1 - c), 1],
      [0.5, 1 - d * (1 - c)],
      [0.5, 1 - d]
    ),
    a("L", [0.5, d]),
    a(
      "C",
      [0.5, d * (1 - c)],
      [0.5 + _ * (1 - c), 0],
      [0.5 + _, 0]
    ),
    "Z"
  ].join(" "), m = [
    a("M", [0.5, d]),
    a(
      "C",
      [0.5, d * (1 - c)],
      [0.5 + _ * (1 - c), 0],
      [0.5 + _, 0]
    ),
    a("L", [1 - i, 0]),
    a(
      "C",
      [1 - i * (1 - c), 0],
      [1, s * (1 - c)],
      [1, s]
    ),
    a("L", [1, 1 - s]),
    a(
      "C",
      [1, 1 - s * (1 - c)],
      [1 - i * (1 - c), 1],
      [1 - i, 1]
    ),
    a("L", [0.5 + _, 1]),
    a(
      "C",
      [0.5 + _ * (1 - c), 1],
      [0.5, 1 - d * (1 - c)],
      [0.5, 1 - d]
    )
  ].join(" ");
  return { fill: p, outer: m, seam: g };
}, Sg = (t, n) => {
  const e = Math.max(0, n) * 3.05, r = Math.cos(e);
  return {
    expansion: 1 + Math.sin(e) * 0.16,
    verticalScale: Math.abs(r) < 0.06 ? r < 0 ? -0.06 : 0.06 : r
  };
}, Lg = (t, n, e, r) => {
  const { expansion: o, verticalScale: i } = Sg(t, n), s = Number(t.x) + Number(t.w) * 0.5, u = Number(t.y) + Number(t.h), a = Number(t.x) + e * Number(t.w), c = Number(t.y) + r * Number(t.h);
  return [
    s + (a - s) * o,
    u + (c - u) * i
  ];
}, AR = (t, n, e) => {
  const r = Math.max(
    0,
    Math.min(0.5, Number(t.r) / Math.max(1e-6, Number(t.w)))
  ), o = Math.max(
    0,
    Math.min(
      0.5,
      Number(t.r) * e / Math.max(1e-6, Number(t.h))
    )
  ), i = (c) => Lg(t, n, c[0], c[1]), s = (c, ...f) => `${c}${f.map(i).map((_) => `${_[0]},${_[1]}`).join(" ")}`, u = 0.5522847498307936, a = [
    s("M", [r, 0]),
    s("C", [r * (1 - u), 0], [0, o * (1 - u)], [0, o]),
    s("L", [0, 1 - o]),
    s("C", [0, 1 - o * (1 - u)], [r * (1 - u), 1], [r, 1]),
    s("L", [1 - r, 1]),
    s("C", [1 - r * (1 - u), 1], [1, 1 - o * (1 - u)], [1, 1 - o]),
    s("L", [1, o]),
    s("C", [1, o * (1 - u)], [1 - r * (1 - u), 0], [1 - r, 0]),
    "Z"
  ].join(" ");
  return { fill: a, outer: a, seam: "" };
}, PR = (t, n, e) => {
  const { expansion: r, verticalScale: o } = Sg(t, n), i = Number(t.x) + Number(t.w) * 0.5, s = Number(t.y) + Number(t.h) * 0.5, u = Lg(t, n, 0.5, 0.5), a = r * e, c = o * e;
  return `matrix(${a} 0 0 ${c} ${u[0] - a * i} ${u[1] - c * s})`;
}, RR = (t, n, e) => {
  const r = e.left + (Number(n.x) + Number(n.w) * 0.5) * e.width, o = e.top + (Number(n.y) + Number(n.h) * 0.5) * e.height, i = (g) => String(g || "").replace(/\s+/g, " ").trim(), s = i(n.label);
  let u = null, a = null, c = 1 / 0, f = !1;
  for (const g of t.querySelectorAll("text")) {
    const p = i(g.textContent);
    if (!p) continue;
    const m = g.getBoundingClientRect();
    if (m.width <= 0 || m.height <= 0) continue;
    const h = s !== "" && p === s;
    if (h && !f && (c = 1 / 0, u = null, a = null, f = !0), f && !h) continue;
    const $ = Math.abs(m.left + m.width * 0.5 - r) + Math.abs(m.top + m.height * 0.5 - o);
    $ < c && (c = $, u = g, a = m);
  }
  if (!u || !a) return null;
  const _ = getComputedStyle(u), d = Number.parseFloat(_.fontSize) || Number.parseFloat(u.getAttribute("font-size")) || a.height * 0.8;
  return {
    dominantBaseline: u.getAttribute("dominant-baseline"),
    dy: u.getAttribute("dy"),
    fill: u.getAttribute("fill") || _.fill || "rgb(244,244,245)",
    fontFamily: u.getAttribute("font-family") || _.fontFamily || "sans-serif",
    doorHeight: Math.max(1e-6, Math.abs(Number(n.h))),
    fontSize: d / Math.max(1, e.height),
    fontStyle: u.getAttribute("font-style") || _.fontStyle || "normal",
    fontWeight: u.getAttribute("font-weight") || _.fontWeight || "400",
    opacity: u.getAttribute("fill-opacity") || _.fillOpacity || "1",
    text: s || u.textContent.trim()
  };
}, FR = (t, n, e, r, o) => {
  const i = Math.max(0, n) * 1.91986, s = Number(t.x), u = Number(t.y), a = Number(t.w), c = Number(t.h), f = e ? 0 : 1, _ = 0.5, d = [s + f * a, u], g = [s + _ * a, u], p = wo(t, i, e, f, 0), m = wo(t, i, e, _, 0), h = wo(t, i, e, f, 1);
  let $ = (m[0] - p[0]) / (g[0] - d[0]), y = (m[1] - p[1]) / (g[0] - d[0]), x = (h[0] - p[0]) / c, w = (h[1] - p[1]) / c;
  const C = Math.hypot(
    $ * r.width,
    y * r.height
  ), k = ($ < 0 ? -1 : 1) * r.height / Math.max(1e-6, C);
  $ *= k * o, y *= k * o, x *= o, w *= o;
  const E = 0.5, S = s + E * a, I = u + c * 0.5, W = wo(t, i, e, E, 0.5), D = W[0] - $ * S - x * I, O = W[1] - y * S - w * I;
  return `matrix(${$} ${y} ${x} ${w} ${D} ${O})`;
}, GR = (t, n, e) => {
  const r = Array.from(t.querySelectorAll("rect[fill][stroke]")).filter(
    (c) => c.getAttribute("fill") !== "none" && c.getAttribute("stroke") !== "none"
  ), o = {
    x: e.left + Number(n.x) * e.width,
    y: e.top + Number(n.y) * e.height,
    w: Number(n.w) * e.width,
    h: Number(n.h) * e.height
  }, i = o.x + o.w * 0.5, s = o.y + o.h * 0.5;
  let u = null, a = 1 / 0;
  for (const c of r) {
    const f = c.getBoundingClientRect();
    if (f.width <= 0 || f.height <= 0) continue;
    const _ = Math.abs(f.left + f.width * 0.5 - i) / Math.max(1, o.w) + Math.abs(f.top + f.height * 0.5 - s) / Math.max(1, o.h), d = Math.abs(Math.log(f.width / Math.max(1, o.w))) + Math.abs(Math.log(f.height / Math.max(1, o.h))), g = _ + d;
    g < a && (a = g, u = c);
  }
  return u || (u = r[0] || null), {
    fill: u?.getAttribute("fill") || "rgb(24,24,27)",
    stroke: u?.getAttribute("stroke") || "rgb(244,244,245)"
  };
}, rd = (t, n, e, r) => {
  const o = e?.armed > 0 && Number(e.w) > 0 && Number(e.h) > 0, i = o && e?.active > 0, s = String(e?.key || "");
  let u = null, a = da.get(t);
  if (o && a?.key !== s) {
    da.delete(t), u = t.getBoundingClientRect();
    const V = RR(t, e, u);
    V ? (a = { key: s, label: V }, da.set(t, a)) : a = null;
  }
  const c = i ? o$(t, e, n, r) : 0, f = i && (c > 0.08 || Number(e?.faceAlpha) < 0.999);
  let _ = fc.get(t);
  if (!f) {
    _ && (_.overlay.style.display = "none"), t.setAttribute("data-mg-svg-door-pass", "idle"), t.removeAttribute("data-mg-door-motion");
    return;
  }
  if (!_) {
    if (_ = ER(t), !_) return;
    fc.set(t, _);
  }
  u || (u = t.getBoundingClientRect());
  const d = n$(
    e.seed,
    e.key,
    Number(e.w) * u.width,
    Number(e.h) * u.height
  );
  t.setAttribute("data-mg-door-motion", d ? "fall" : "split");
  const { fill: g, stroke: p } = GR(t, e, u);
  for (const V of [_.left, _.right])
    V.setAttribute("fill", g), V.setAttribute("stroke", "none"), V.setAttribute("fill-opacity", "1");
  for (const V of [_.leftOuter, _.rightOuter])
    V.setAttribute("stroke", p), V.setAttribute("stroke-width", "1.25"), V.setAttribute("stroke-opacity", "1");
  const m = d ? 0 : kg(0.08, 0.26, c);
  for (const V of [_.leftSeam, _.rightSeam])
    V.setAttribute("stroke", p), V.setAttribute("stroke-width", "1.25"), V.setAttribute("stroke-opacity", String(m));
  const h = u.width / Math.max(1e-6, u.height), $ = d ? AR(e, c, h) : ed(e, c, !0, h), y = d ? { fill: "", outer: "", seam: "" } : ed(e, c, !1, h);
  _.left.setAttribute("d", $.fill), _.leftOuter.setAttribute("d", $.outer), _.leftSeam.setAttribute("d", $.seam), _.right.setAttribute("d", y.fill), _.rightOuter.setAttribute("d", y.outer), _.rightSeam.setAttribute("d", y.seam);
  const x = a?.key === s ? a.label : null, w = Math.max(0, c) * 1.91986, C = Sg(e, c), b = d ? C.verticalScale > 0 : wo(e, w, !0, 0.5, 0)[0] > wo(e, w, !0, 0, 0)[0], k = x ? Math.abs(Number(e.h)) / Math.max(1e-6, x.doorHeight) : 0, E = x ? x.fontSize * u.height * k * (d ? C.verticalScale : 1) : 0, S = d ? [Lg(e, c, 0.5, 0.5)].some(([V, et]) => V >= 0 && V <= 1 && et >= 0 && et <= 1) : [!0, !1].map((V) => wo(e, w, V, 0.5, 0.5)).some(([V, et]) => V >= 0 && V <= 1 && et >= 0 && et <= 1), I = b && E >= 8 && S, W = [
    [_.leftLabel, !0],
    [_.rightLabel, !1]
  ];
  for (const [V, et] of W) {
    if (!x) {
      V.setAttribute("display", "none");
      continue;
    }
    if (!I && !et || d && !et) {
      V.setAttribute("display", "none"), V.textContent = "";
      continue;
    }
    V.removeAttribute("display"), V.textContent = x.text, V.setAttribute("fill", x.fill), V.setAttribute("fill-opacity", x.opacity), V.setAttribute("font-family", x.fontFamily), V.setAttribute("font-size", String(x.fontSize)), V.setAttribute("font-style", x.fontStyle), V.setAttribute("font-weight", x.fontWeight), x.dominantBaseline == null ? V.removeAttribute("dominant-baseline") : V.setAttribute("dominant-baseline", x.dominantBaseline), x.dy == null ? V.removeAttribute("dy") : V.setAttribute("dy", x.dy);
    const K = Math.max(
      0.04,
      Math.min(0.96, Number(e.x) + Number(e.w) * 0.5)
    ), q = Math.max(
      0.04,
      Math.min(0.96, Number(e.y) + Number(e.h) * 0.5)
    );
    V.setAttribute(
      "x",
      String(I ? Number(e.x) + Number(e.w) * 0.5 : K)
    ), V.setAttribute(
      "y",
      String(I ? Number(e.y) + Number(e.h) * 0.5 : q)
    ), I ? (V.setAttribute("clip-path", V.dataset.mgDoorLabelClip), V.setAttribute(
      "transform",
      d ? PR(e, c, k) : FR(e, c, et, u, k)
    )) : (V.removeAttribute("clip-path"), V.removeAttribute("transform"));
  }
  const { overlay: D } = _, O = _.parent.getBoundingClientRect();
  D.style.left = `${u.left - O.left - _.parent.clientLeft}px`, D.style.top = `${u.top - O.top - _.parent.clientTop}px`, D.style.width = `${u.width}px`, D.style.height = `${u.height}px`, D.style.display = "block", t.setAttribute("data-mg-svg-door-pass", "active");
}, IR = (t) => {
  const n = fc.get(t);
  n && (n.overlay.remove(), n.changedPosition && n.parent.style.position === "relative" && (n.parent.style.position = n.restorePosition)), fc.delete(t), cc.delete(t), da.delete(t), t.removeAttribute("data-mg-svg-door-pass"), t.removeAttribute("data-mg-door-motion");
}, BR = (t, n, e) => {
  const { gl: r } = t, o = du.get(n), i = o?.key === String(e.key) ? o : null, s = i?.canvas || n, u = r.createTexture();
  return u ? (r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, u), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s), r.generateMipmap(r.TEXTURE_2D), {
    capture: i?.capture || [e.x, e.y, e.w, e.h],
    faceSize: i?.faceSize || [e.w * s.width, e.h * s.height],
    radius: i?.radius || e.r * s.width,
    version: i?.version || 0,
    texture: u
  }) : null;
}, od = (t, n, e, r, o) => {
  const i = r?.active > 0 && Number(r.w) > 0 && Number(r.h) > 0, s = i ? o$(t, r, e, o) : 0, u = i && (s > 0.08 || Number(r?.faceAlpha) < 0.999), a = i && (u || Number(n) >= 8e-3);
  let c = si.get(t);
  if (r?.prewarm > 0 && !c && TR(t), !a) {
    r?.armed > 0 ? _a.has(t) || (NR(t, r), _a.add(t)) : _a.delete(t), wR(t, c);
    return;
  }
  if (_u.has(t)) {
    t.setAttribute("data-mg-gpu-pass", "unavailable");
    return;
  }
  if (!c) {
    t$(t);
    try {
      c = Z2(t);
    } catch {
      c = null;
    }
    if (!c) {
      _u.add(t), t.setAttribute("data-mg-gpu-pass", "unavailable");
      return;
    }
    si.set(t, c);
  }
  const { gl: f, overlay: _, program: d, texture: g } = c, p = Math.max(1, t.width), m = Math.max(1, t.height), h = p, $ = m;
  _.width !== h && (_.width = h), _.height !== $ && (_.height = $);
  const y = t.offsetLeft, x = t.offsetTop, w = t.clientWidth, C = t.clientHeight;
  c.overlayLeft !== y && (_.style.left = `${y}px`, c.overlayLeft = y), c.overlayTop !== x && (_.style.top = `${x}px`, c.overlayTop = x), c.overlayWidth !== w && (_.style.width = `${w}px`, c.overlayWidth = w), c.overlayHeight !== C && (_.style.height = `${C}px`, c.overlayHeight = C), _.style.display !== "block" && (_.style.display = "block"), f.activeTexture(f.TEXTURE0), f.bindTexture(f.TEXTURE_2D, g), c.sceneTextureWidth !== p || c.sceneTextureHeight !== m ? (f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, f.RGBA, f.UNSIGNED_BYTE, t), c.sceneTextureWidth = p, c.sceneTextureHeight = m) : f.texSubImage2D(f.TEXTURE_2D, 0, 0, 0, f.RGBA, f.UNSIGNED_BYTE, t), f.bindFramebuffer(f.FRAMEBUFFER, null), f.viewport(0, 0, h, $), f.activeTexture(f.TEXTURE0), f.bindTexture(f.TEXTURE_2D, g), f.useProgram(d), f.uniform1f(
    c.zoomFilmAmountLocation,
    Math.sqrt(Math.max(0, Math.min(1, Number(n) || 0)))
  ), f.uniform1f(c.zoomTimeLocation, performance.now() / 1e3), f.uniform1f(c.zoomStrengthLocation, Math.max(0, Math.min(1, Number(n) || 0))), f.drawArrays(f.TRIANGLES, 0, 3);
  const b = i ? du.get(t) : null, k = b?.key === String(r.key) ? b.version : null;
  let E = i ? c.doorTextures.get(String(r.key)) : null;
  i && (!E || k !== null && E.version !== k) && (E && f.deleteTexture(E.texture), E = BR(c, t, r), E && c.doorTextures.set(String(r.key), E));
  const S = kg(0.08, 0.18, s), I = Number(r.faceAlpha) < 0.999;
  if (i && E && (S > 1e-3 || I)) {
    f.enable(f.BLEND), f.blendFunc(f.SRC_ALPHA, f.ONE_MINUS_SRC_ALPHA), f.enable(f.CULL_FACE), f.frontFace(f.CW), f.activeTexture(f.TEXTURE1), f.bindTexture(f.TEXTURE_2D, E.texture), f.useProgram(c.doorProgram), f.uniform4fv(c.doorCaptureLocation, E.capture), f.uniform2fv(c.doorFaceSizeLocation, E.faceSize), f.uniform1f(
      c.doorRadiusLocation,
      CR(E.radius, E.faceSize[0], E.faceSize[1])
    );
    const W = Number(r.x), D = Number(r.y), O = Number(r.w), V = Number(r.h);
    f.uniform4f(c.doorDestLocation, W, D, O, V), f.uniform1f(c.doorAttentionLocation, 0), f.uniform1f(c.doorOpenLocation, s);
    const et = n$(r.seed, r.key, E.faceSize[0], E.faceSize[1]);
    t.setAttribute("data-mg-door-motion", et ? "fall" : "split"), f.uniform1f(c.doorFallLocation, et ? 1 : 0), et ? (f.uniform1f(c.doorPanelLocation, 0), f.drawArrays(f.TRIANGLES, 0, 30)) : (f.uniform1f(c.doorPanelLocation, -1), f.drawArrays(f.TRIANGLES, 0, 30), f.uniform1f(c.doorPanelLocation, 1), f.drawArrays(f.TRIANGLES, 0, 30)), f.disable(f.BLEND), f.disable(f.CULL_FACE);
  }
  t.getAttribute("data-mg-gpu-pass") !== "active" && t.setAttribute("data-mg-gpu-pass", "active"), t.style.visibility !== "hidden" && (t.style.visibility = "hidden");
}, DR = (t) => {
  t$(t);
  const n = si.get(t);
  if (n) {
    n.gl.deleteTexture(n.texture);
    for (const e of n.doorTextures.values()) n.gl.deleteTexture(e.texture);
    n.gl.deleteProgram(n.doorProgram), n.gl.deleteProgram(n.program), n.overlay.remove(), t.style.visibility = n.restoreVisibility, n.changedPosition && n.parent.style.position === "relative" && (n.parent.style.position = n.restorePosition);
  }
  si.delete(t), _u.delete(t), du.delete(t), _a.delete(t), t.removeAttribute("data-mg-gpu-pass"), t.removeAttribute("data-mg-door-motion"), cc.delete(t);
}, id = (t, n) => ({ tag: t, _1: n }), i$ = (t) => t, s$ = (t, n, e) => ({ tag: t, _1: n, _2: e }), $r = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, zR = /* @__PURE__ */ Y2(eg), HR = /* @__PURE__ */ gs(Eo), Is = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, u$ = /* @__PURE__ */ G$(ha), ui = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, OR = /* @__PURE__ */ s$("AutoSize"), sd = /* @__PURE__ */ i$("CanvasRenderer"), WR = /* @__PURE__ */ i$("SvgRenderer"), QR = (t) => (n) => {
  const e = t - n * j(yn(je(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, Ai = (t) => N((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), ud = (t) => (n) => {
  const e = An(t, v, zt);
  if (e.tag === "Just") {
    const r = An(e._1.stopAt, v, zt);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    l();
  }
  if (e.tag === "Nothing")
    return n;
  l();
}, qR = (t) => (n) => Cn((e) => e.direction === "DiveIn" && e.startT >= n && e.startT - n <= 1, t.dives), a$ = (t) => (n) => ({ ...n, state: { ...n.state, camera: t }, minis: B((e) => a$(t)(e))(n.minis) }), MR = (t) => (n) => (e) => {
  const r = Ze(e.rootLayout)(e.camera), o = Ge("data-mg-too-small")("0")(t);
  return () => (o(), Ge("data-mg-camera-vw")(Vo(r.w))(t)(), Ge("data-mg-camera-vh")(Vo(r.h))(t)(), Ge("data-mg-camera-zoom")(Vo(e.camera.zoom))(t)(), Ge("data-mg-viewport-css-width")(Vo(n.w))(t)(), Ge("data-mg-viewport-css-height")(Vo(n.h))(t)());
}, XR = (t) => {
  const n = GP(t);
  if (n.tag === "Left")
    return Rt("Left", n._1);
  if (n.tag === "Right")
    return Rt("Right", DP(n._1));
  l();
}, UR = (t) => (n) => (e) => {
  if (n.tag === "FixedSize")
    return () => ({ w: n._1, h: n._2 });
  if (n.tag === "AutoSize") {
    const r = uc(t);
    return () => {
      const o = r(), i = o.width <= 0 ? e.width : o.width;
      return { w: i, h: o.height <= 0 ? i * e.height / $r(1)(e.width) : o.height };
    };
  }
  l();
}, YR = (t) => (n) => (e) => {
  const r = P5(z5(gR(e))), o = Ge("viewBox")(r.viewBox)(t);
  return () => (o(), Ge("preserveAspectRatio")("xMidYMid meet")(t)(), n.tag === "FixedSize" ? (Ge("width")(fn(yn(Ue(n._1))))(t)(), Ge("height")(fn(yn(Ue(n._2))))(t)()) : n.tag === "AutoSize" || l(), j2(r.body, t));
}, VR = (t) => (n) => (e) => {
  const r = sc(t), o = UR(t)(n)(e);
  return () => {
    const i = o(), s = K2(), u = i.w * s, a = i.h * s, c = Yd(r)(), f = Vd(r)(), _ = Nc(r)(u);
    c !== u && _();
    const d = Cc(r)(a);
    f !== a && d(), n.tag === "FixedSize" ? (ac(t, "width", fn(yn(Ue(i.w))) + "px"), ac(t, "height", fn(yn(Ue(i.h))) + "px")) : n.tag === "AutoSize" || l();
    const g = hu(r)();
    Sr(g)(), $a(g)({ scaleX: s, scaleY: s })();
    const p = _m(g)({ width: i.w, height: i.h })();
    return zR(e)(p)(), Lr(g)();
  };
}, KR = (t) => (n) => (e) => (r) => {
  if (n === "CanvasRenderer")
    return VR(t)(e)(r);
  if (n === "SvgRenderer")
    return YR(t)(e)(r);
  l();
}, jR = (t) => (n) => (e) => (r) => () => {
  let o = !1, i = () => {
  }, s = [];
  const u = () => {
    const f = o, _ = KR(t)(n)(e)(r);
    if (!f)
      return _();
  }, a = { time: 0, keyframe: "sequence", playing: !1 };
  return u(), i = V2(t)(() => {
    u();
    const f = s;
    return Ai((_) => _(a))(f)();
  })(), {
    play: () => {
    },
    playWith: (f) => () => {
    },
    pause: () => {
    },
    toggle: () => {
    },
    seek: (f) => () => {
    },
    seekCue: (f) => () => {
    },
    seekStep: (f) => () => {
    },
    playToCue: (f) => (_) => () => {
    },
    playToStep: (f) => (_) => () => {
    },
    playNext: (f) => () => {
    },
    playPrevious: (f) => () => {
    },
    setSpeed: (f) => () => {
    },
    currentTime: (() => {
      const f = a.time;
      return () => f;
    })(),
    currentKeyframe: (() => {
      const f = a.keyframe;
      return () => f;
    })(),
    isPlaying: () => !1,
    duration: 0,
    cues: [],
    steps: [],
    subscribe: (f) => () => {
      s = kt(s)(f), f(a)();
      const d = Bs((g) => !ga(g)(f));
      return () => {
        s = d(s);
      };
    },
    subscribeCue: (f) => () => () => {
    },
    subscribeComplete: (f) => () => () => {
    },
    destroy: () => (o = !0, i())
  };
}, ZR = (t) => (n) => {
  const e = Kt((r) => r.direction === "DiveIn" && r.startT >= n && r.startT - n <= 0.12)(t.dives);
  if (e.tag === "Just") {
    const r = e._1, o = Kt((i) => HR(i.path)(r.parentPath) && i.startT <= n && r.startT <= i.endT + 1e-4)(t.segments);
    if (o.tag === "Just") {
      const i = Is(r.node)(o._1.layout.nodes);
      if (i.tag === "Just")
        return T(
          "Just",
          {
            box: {
              x: i._1.x * o._1.placement.scale + o._1.placement.tx,
              y: i._1.y * o._1.placement.scale + o._1.placement.ty,
              w: i._1.w * o._1.placement.scale,
              h: i._1.h * o._1.placement.scale
            },
            faceAlpha: 1,
            label: i._1.label,
            radius: 7 * o._1.placement.scale,
            key: u$(r.childPath)
          }
        );
      if (i.tag === "Nothing")
        return v;
      l();
    }
    if (o.tag === "Nothing")
      return v;
    l();
  }
  if (e.tag === "Nothing")
    return v;
  l();
}, c$ = () => Yy() / 1e3, t4 = (t) => (n) => {
  const e = An(t, v, zt);
  if (e.tag === "Just") {
    const r = An(e._1.loop, v, zt);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    l();
  }
  if (e.tag === "Nothing")
    return n;
  l();
}, Mf = (t) => (n) => {
  const e = Kt((r) => r.startT <= n && n < r.endT)(t.spans);
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
    l();
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
      l();
    }
    return "";
  }
  l();
}, Q0 = { active: 0, armed: 0, depth: 0, faceAlpha: 1, progress: 0, h: 0, key: "", label: "", prewarm: 0, r: 0, seed: 0, w: 0, x: 0, y: 0 }, n4 = (t) => (n) => (e) => {
  const r = Wp(e);
  return () => {
    const o = r(), i = Qp(e)(), s = mg(Ac)(pg)(e)(zc(o)(i)(e));
    if (s.tag === "Left")
      return Rt("Left", "precompute failed");
    if (s.tag === "Right")
      return Rt("Right", { schedule: s._1 });
    l();
  };
}, e4 = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const i = Bt((s) => v, (s) => (u) => T("Just", { head: s, tail: u }), n);
    if (i.tag === "Nothing") {
      e = !1, r = v;
      continue;
    }
    if (i.tag === "Just") {
      const s = 0 < i._1.tail.length ? T("Just", i._1.tail[0]) : v;
      if (s.tag === "Just" && i._1.head.role === "FlyThrough") {
        const u = s._1.segment.path.length - 1 | 0, a = u >= 0 && u < s._1.segment.path.length ? T("Just", s._1.segment.path[u]) : v;
        if (a.tag === "Just") {
          const c = Is(a._1)(i._1.head.segment.layout.nodes);
          if (c.tag === "Just") {
            e = !1, r = T(
              "Just",
              {
                box: (() => {
                  const f = i._1.head.segment.placement;
                  return { x: c._1.x * f.scale + f.tx, y: c._1.y * f.scale + f.ty, w: c._1.w * f.scale, h: c._1.h * f.scale };
                })(),
                faceAlpha: ui((() => {
                  const f = Is(a._1)(i._1.head.state.nodes);
                  return f.tag === "Just" ? go(f._1).alpha : 0;
                })())(ui((() => {
                  const f = Is(a._1)(i._1.head.state.nodeFadeAlpha);
                  if (f.tag === "Nothing")
                    return 1;
                  if (f.tag === "Just")
                    return f._1;
                  l();
                })())((() => {
                  const f = Is(a._1)(i._1.head.state.nodeLabelFadeAlpha);
                  if (f.tag === "Nothing")
                    return 1;
                  if (f.tag === "Just")
                    return f._1;
                  l();
                })())),
                label: c._1.label,
                key: u$(s._1.segment.path),
                radius: 7 * i._1.head.segment.placement.scale
              }
            );
            continue;
          }
          if (c.tag === "Nothing") {
            e = !1, r = v;
            continue;
          }
          l();
        }
        if (a.tag === "Nothing") {
          e = !1, r = v;
          continue;
        }
        l();
      }
      n = i._1.tail;
      continue;
    }
    l();
  }
  return r;
}, ad = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = $r(1)(e), u = $r(1)(r), a = ui(s / $r(1e-6)(o.vw))(u / $r(1e-6)(o.vh)), c = (u - o.vh * a) / 2, f = (s - o.vw * a) / 2, _ = (g, p, m, h) => ({
    active: g,
    armed: 1,
    depth: p,
    faceAlpha: h.faceAlpha,
    progress: m,
    h: h.box.h * a / u,
    key: h.key,
    label: h.label,
    prewarm: 1,
    r: h.radius * a / s,
    seed: j(t.seed),
    w: h.box.w * a / s,
    x: (f + (h.box.x - o.vx) * a) / s,
    y: (c + (h.box.y - o.vy) * a) / u
  }), d = e4(i.levels);
  if (d.tag === "Just")
    return _(1, i.diveDepth, i.doorProgress, d._1);
  if (d.tag === "Nothing") {
    const g = ZR(t)(n);
    if (g.tag === "Just")
      return _(0, 0, 0, g._1);
    if (g.tag === "Nothing")
      return { ...Q0, prewarm: qR(t)(n) ? 1 : 0 };
  }
  l();
}, r4 = (t) => (n) => (() => {
  const e = An(t, v, zt);
  if (e.tag === "Just")
    return { ...e._1, direction: n < 0 ? "backward" : "forward" };
  if (e.tag === "Nothing")
    return {
      direction: n < 0 ? "backward" : "forward",
      speed: Pi,
      duration: Pi,
      loop: Pi,
      stopAt: Pi
    };
  l();
})(), cd = (t) => (n) => {
  const e = An(t, v, zt);
  if (e.tag === "Just") {
    const r = An(e._1.direction, v, zt);
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
  l();
}, o4 = (t) => (n) => {
  const e = dt((o) => o.time <= n + 1e-4, t), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r].index : -1;
}, i4 = (t) => (n) => {
  if (n.tag === "FixedSize") {
    const e = n._1 <= 0 || n._2 <= 0 ? v : T("Just", n._1 / n._2);
    return () => e;
  }
  if (n.tag === "AutoSize") {
    const e = uc(t);
    return () => {
      const r = e();
      return r.width <= 0 || r.height <= 0 ? v : T("Just", r.width / r.height);
    };
  }
  l();
}, ta = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (f) => (_) => () => {
  const d = c$(), g = f.value;
  f.value = d;
  const p = g === 0 ? 0 : d - g, m = (() => {
    if (e.tag === "FixedSize")
      return { w: e._1, h: e._2 };
    if (e.tag === "AutoSize") {
      const E = uc(t)();
      return { w: E.width <= 0 ? 200 : E.width, h: E.height <= 0 ? 180 : E.height };
    }
    l();
  })();
  if (m.w < 200 || m.h < 180) {
    if (pR(t)(m.w)(m.h)(200)(180)(), n === "CanvasRenderer")
      return od(sc(t), 0, 0, Q0, p);
    if (n === "SvgRenderer")
      return rd(t, 0, Q0, p);
    l();
  }
  const h = u.value, $ = (() => {
    if (h.tag === "Just" && h._1.w === m.w && h._1.h === m.h)
      return h._1.schedule;
    const E = l2({ widthPx: m.w, heightPx: m.h })(s);
    return u.value = T("Just", { w: m.w, h: m.h, schedule: E }), E;
  })(), y = ui(_)($.totalDuration), x = Xh($)(y), w = i ? x : { ...x, levels: B((E) => ({ ...E, state: { ...E.state, frameTitle: "" } }))(x.levels) }, C = c.value, b = (() => {
    if (C.tag === "Nothing")
      return w.camera;
    if (C.tag === "Just")
      return mh(s.cameraConfig.cameraDecay)(p)(C._1)(w.camera);
    l();
  })();
  c.value = T("Just", b);
  const k = { ...w, camera: b, levels: B(a$(b))(w.levels) };
  if (MR(t)(m)(k)(), n === "CanvasRenderer") {
    const E = sc(t), S = aa({ width: 0, height: 0 })(k), I = (() => {
      if (e.tag === "FixedSize")
        return { w: e._1, h: e._2 };
      if (e.tag === "AutoSize") {
        const G = uc(t)();
        return {
          w: G.width,
          h: G.height <= 0 ? S.vw <= 0 ? G.width : G.width * S.vh / S.vw : G.height
        };
      }
      l();
    })(), W = K2(), D = I.w * W, O = I.h * W, V = Yd(E)(), et = Vd(E)(), K = Nc(E)(D);
    V !== D && K();
    const q = Cc(E)(O);
    et !== O && q(), e.tag === "FixedSize" ? (ac(t, "width", fn(yn(Ue(I.w))) + "px"), ac(t, "height", fn(yn(Ue(I.h))) + "px")) : e.tag === "AutoSize" || l();
    const A = hu(E)();
    Sr(A)(), $a(A)({ scaleX: W, scaleY: W })();
    const P = a.value, Q = N5(r)(o)(A)({ width: I.w, height: I.h })(k)(p)(P)();
    return a.value = Q, Lr(A)(), od(
      E,
      k.zoomStreak,
      k.zoomDirection,
      ad($)(y)(I.w)(I.h)(aa({ width: I.w, height: I.h })(k))(k),
      p
    );
  }
  if (n === "SvgRenderer") {
    const E = a.value, S = i4(t)(e)(), I = iL(S)(r)(o)(k)(p)(E);
    return a.value = I.springs, Ge("viewBox")(I.parts.viewBox)(t)(), Ge("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (Ge("width")(fn(yn(Ue(e._1))))(t)(), Ge("height")(fn(yn(Ue(e._2))))(t)()) : e.tag === "AutoSize" || l(), j2(I.parts.body, t), rd(
      t,
      k.zoomDirection,
      ad($)(y)(m.w)(m.h)(aa({ width: m.w, height: m.h })(k))(k),
      p
    );
  }
  l();
}, s4 = (t) => {
  const n = Zc(t)(Kc)._1;
  if (n.tag === "Left")
    return Rt("Left", n._1.msg);
  if (n.tag === "Right")
    return Rt("Right", n._1);
  l();
}, u4 = (t) => {
  const n = Jg(t);
  if (n.tag === "Left")
    return Rt("Left", n._1);
  if (n.tag === "Right") {
    if (n._1.mode === "SequenceSurface") {
      const r = XR(n._1);
      if (r.tag === "Left")
        return Rt("Left", r._1);
      if (r.tag === "Right")
        return Rt("Right", id("LoadedSequence", r._1));
      l();
    }
    const e = s4(n._1);
    if (e.tag === "Left")
      return Rt("Left", e._1);
    if (e.tag === "Right")
      return Rt("Right", id("LoadedAnimation", e._1));
  }
  l();
}, fd = (t) => (n) => (e) => (r) => {
  const o = e + 1e-4 >= n ? dt((s) => s.time > n + 1e-4 && s.time <= e + 1e-4, t) : [...dt((s) => s.time > n + 1e-4, t), ...dt((s) => s.time <= e + 1e-4, t)], i = e <= n + 1e-4 ? gn(dt((s) => s.time < n - 1e-4 && s.time >= e - 1e-4, t)) : [...gn(dt((s) => s.time < n - 1e-4, t)), ...gn(dt((s) => s.time >= e - 1e-4, t))];
  return (() => {
    const s = e - n;
    return s < 0 ? -s <= 1e-4 : s <= 1e-4;
  })() ? [] : r >= 0 ? o : i;
}, a4 = (t) => (n) => (e) => (r) => Kt((o) => Cn((i) => i === o.kind, n) && (o.time > e + 1e-4 || (() => {
  const i = o.time - e;
  return (i < 0 ? -i <= 1e-4 : i <= 1e-4) && o.index > r;
})()))(t), c4 = (t) => (n) => (e) => (r) => {
  const o = dt(
    (s) => Cn((u) => u === s.kind, n) && (s.time < e - 1e-4 || (() => {
      const u = s.time - e;
      return (u < 0 ? -u <= 1e-4 : u <= 1e-4) && s.index < r;
    })()),
    t
  ), i = o.length - 1 | 0;
  return i >= 0 && i < o.length ? T("Just", o[i]) : v;
}, Xf = (t) => (n) => (e) => {
  const r = An(n, v, zt);
  if (r.tag === "Just") {
    const o = An(r._1.speed, v, zt);
    if (o.tag === "Just") {
      const i = $r(1e-4)(o._1 < 0 ? -o._1 : o._1);
      return () => t.value = i;
    }
    if (o.tag === "Nothing") {
      const i = An(r._1.duration, v, zt);
      if (i.tag === "Just" && e.tag === "Just") {
        const s = e._1 / i._1, u = $r(1e-4)(s < 0 ? -s : s);
        if (i._1 > 0)
          return () => t.value = u;
      }
      return () => {
      };
    }
    l();
  }
  if (r.tag === "Nothing")
    return () => {
    };
  l();
}, f4 = (t) => (n) => (e) => (r) => {
  const o = r.time - n, i = o < 0 ? -o <= 1e-4 : o <= 1e-4, s = r.time < n - 1e-4 || i && r.index < e, u = s ? -1 : 1, a = r.time > n + 1e-4 || i && r.index > e, c = An(t, v, zt);
  if (c.tag === "Just") {
    const f = An(c._1.direction, v, zt);
    if (f.tag === "Just") {
      if (f._1 === "forward")
        return i || a ? T("Just", 1) : v;
      if (f._1 === "backward" || f._1 === "reverse")
        return i || s ? T("Just", -1) : v;
    }
    return T("Just", u);
  }
  if (c.tag === "Nothing")
    return T("Just", u);
  l();
}, l4 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  const u = { value: 1 };
  let a = 1, c = !0, f = v, _ = -1, d = !0, g = !1, p = 0, m = 0;
  const h = { value: z }, $ = { value: v }, y = { value: 0 }, x = { value: v };
  let w = !1, C = () => {
  }, b = [], k = [], E = [];
  ta(t)(e)(r)(o)(i)(s)(n)(x)(h)($)(y)(0)();
  const S = (F) => {
    const H = F.index;
    return () => {
      _ = H;
      const U = k;
      return Ai((Y) => Y(F))(U)();
    };
  }, I = (F) => () => {
    const H = b, U = d, Y = { time: F, keyframe: Mf(n)(F), playing: U };
    return Ai((M) => M(Y))(H)();
  }, W = () => (d = !1, f = v, I(p)()), D = (F) => () => (p = F, ta(t)(e)(r)(o)(i)(s)(n)(x)(h)($)(y)(F)(), I(F)()), O = (F) => {
    const H = $r(0)(ui(n.totalDuration)(F));
    return () => (p = H, _ = o4(n.cues)(H), m = 0, f = v, $.value = v, ta(t)(e)(r)(o)(i)(s)(n)(x)(h)($)(y)(H)(), I(H)());
  }, V = (F, H, U, Y, M) => () => {
    d = !1, f = v;
    const tt = p;
    I(tt)();
    const it = { reason: F, direction: H < 0 ? "backward" : "forward", targetId: U, targetStep: Y, reached: M, time: tt }, nt = E;
    return Ai((ct) => ct(it))(nt)();
  }, et = () => {
    if (!w && (g = !1, d)) {
      const U = c$(), Y = m;
      m = U;
      const M = u.value, tt = a, it = c, nt = f, ct = p, lt = Y === 0 ? ct + 0 * M * tt : ct + (U - Y) * M * tt;
      if (nt.tag === "Just") {
        const pt = tt >= 0 ? nt._1.cue.time >= ct - 1e-4 && nt._1.cue.time <= lt + 1e-4 : nt._1.cue.time <= ct + 1e-4 && nt._1.cue.time >= lt - 1e-4, At = pt ? nt._1.cue.time : $r(0)(ui(n.totalDuration)(lt));
        (tt >= 0 ? At + 1e-4 < ct : At > ct + 1e-4) && ($.value = v), D(At)(), Ai((en) => S(en))(fd(n.cues)(ct)(At)(tt))();
        const Pt = V("target", tt, nt._1.targetId, nt._1.targetStep, !0);
        return pt && Pt(), pt ? void 0 : K();
      }
      if (nt.tag === "Nothing") {
        const pt = tt >= 0 ? n.totalDuration : 0, At = !it && (tt >= 0 ? pt >= ct - 1e-4 && pt <= lt + 1e-4 : pt <= ct + 1e-4 && pt >= lt - 1e-4), Pt = it ? QR(lt)(n.totalDuration + 0.8) : $r(0)(ui(n.totalDuration)(lt));
        (tt >= 0 ? Pt + 1e-4 < ct : Pt > ct + 1e-4) && ($.value = v), D(Pt)(), Ai(($t) => S($t))(fd(n.cues)(ct)(Pt)(tt))();
        const en = V("boundary", tt, "", "", !0);
        return At && en(), At ? void 0 : K();
      }
      l();
    }
  }, K = () => {
    if (!w && !g) {
      g = !0;
      const U = ic();
      W0(et)(U)();
    }
  }, q = () => (m = 0, d = !0, K()), A = () => (a = 1, c = !0, f = v, q(), I(p)()), P = (F, H) => () => {
    const U = p;
    return a = F, c = !1, f = v, Xf(u)(H)(T("Just", F >= 0 ? n.totalDuration - U : U))(), q();
  }, Q = (F, H) => () => {
    const U = p, Y = _, M = f4(H)(U)(Y)(F);
    if (M.tag === "Nothing")
      return P(cd(H)(1), H)();
    if (M.tag === "Just") {
      const tt = F.time - U, it = tt < 0 ? -tt : tt;
      return a = M._1, c = !1, f = T("Just", { cue: F, direction: M._1, targetId: F.id, targetStep: F.name }), Xf(u)(H)(T("Just", it))(), it <= 1e-4 ? (O(F.time)(), S(F)(), V("target", M._1, F.id, F.name, !0)()) : q();
    }
    l();
  };
  return C = V2(t)(() => {
    if (!w) {
      const H = p;
      return ta(t)(e)(r)(o)(i)(s)(n)(x)(h)($)(y)(H)(), I(H)();
    }
  })(), q(), {
    play: A,
    playWith: (F) => {
      const H = cd(F)(1);
      return () => (a = H, c = t4(F)(!1), f = v, Xf(u)(F)(v)(), q(), I(p)());
    },
    pause: W,
    toggle: () => d ? W() : A(),
    seek: (F) => O(F),
    seekCue: (F) => {
      const H = Kt((U) => U.id === F)(n.cues);
      if (H.tag === "Nothing")
        return () => {
        };
      if (H.tag === "Just") {
        const U = H._1, Y = O(U.time);
        return () => (Y(), S(U)());
      }
      l();
    },
    seekStep: (F) => {
      const H = Kt((U) => U.kind === "step" && U.name === F)(n.cues);
      if (H.tag === "Nothing")
        return () => {
        };
      if (H.tag === "Just") {
        const U = H._1, Y = O(U.time);
        return () => (Y(), S(U)());
      }
      l();
    },
    playToCue: (F) => (H) => {
      const U = Kt((Y) => Y.id === F)(n.cues);
      if (U.tag === "Nothing")
        return () => {
        };
      if (U.tag === "Just")
        return Q(U._1, H);
      l();
    },
    playToStep: (F) => (H) => {
      const U = Kt((Y) => Y.kind === "step" && Y.name === F)(n.cues);
      if (U.tag === "Nothing")
        return () => {
        };
      if (U.tag === "Just")
        return Q(U._1, H);
      l();
    },
    playNext: (F) => () => {
      const H = p, U = _, Y = a4(n.cues)(ud(F)(["step"]))(H)(U);
      if (Y.tag === "Nothing")
        return P(1, F)();
      if (Y.tag === "Just")
        return Q(Y._1, F)();
      l();
    },
    playPrevious: (F) => () => {
      const H = p, U = _, Y = c4(n.cues)(ud(F)(["step"]))(H)(U);
      if (Y.tag === "Nothing")
        return P(-1, F)();
      if (Y.tag === "Just")
        return Q(Y._1, r4(F)(-1))();
      l();
    },
    setSpeed: (F) => {
      const H = $r(1e-4)(F < 0 ? -F : F);
      return () => u.value = H;
    },
    currentTime: () => p,
    currentKeyframe: () => {
      const F = p;
      return Mf(n)(F);
    },
    isPlaying: () => d,
    duration: n.totalDuration,
    cues: n.cues,
    steps: dt((F) => F.kind === "step", n.cues),
    subscribe: (F) => () => {
      b = kt(b)(F);
      const U = p, Y = d;
      F({ time: U, keyframe: Mf(n)(U), playing: Y })();
      const M = Bs((tt) => !ga(tt)(F));
      return () => {
        b = M(b);
      };
    },
    subscribeCue: (F) => () => {
      k = kt(k)(F);
      const U = Bs((Y) => !ga(Y)(F));
      return () => {
        k = U(k);
      };
    },
    subscribeComplete: (F) => () => {
      E = kt(E)(F);
      const U = Bs((Y) => !ga(Y)(F));
      return () => {
        E = U(E);
      };
    },
    destroy: () => {
      if (w = !0, C(), e === "CanvasRenderer")
        return DR(sc(t));
      if (e === "SvgRenderer")
        return IR(t);
      l();
    }
  };
}, g4 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = u4(n);
  if (u.tag === "Left")
    return () => Rt("Left", u._1);
  if (u.tag === "Right") {
    if (u._1.tag === "LoadedAnimation") {
      const a = n4()(r)(u._1._1);
      return () => {
        const c = a();
        if (c.tag === "Left")
          return Rt("Left", c._1);
        if (c.tag === "Right") {
          const f = l4(t)(c._1.schedule)(e)(r)(o)(i)(s)();
          return Rt("Right", f);
        }
        l();
      };
    }
    if (u._1.tag === "LoadedSequence") {
      const a = jR(t)(e)(r)(u._1._1);
      return () => {
        const c = a();
        return Rt("Right", c);
      };
    }
  }
  l();
}, Eg = () => document.createElement("canvas"), _4 = (t, n) => {
  t.letterSpacing = n;
}, d4 = (t, n) => {
  t.fontKerning = n;
}, f$ = /* @__PURE__ */ pu(_4), Ag = /* @__PURE__ */ pu(d4), h4 = { alpha: !0, premultipliedAlpha: !0, antialias: !0, depth: !1 }, p4 = (t) => t.getContext("webgl", h4), m4 = (t, n, e) => {
  const r = (i, s) => {
    const u = t.createShader(i);
    return t.shaderSource(u, s), t.compileShader(u), t.getShaderParameter(u, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(u)), u;
  }, o = t.createProgram();
  return t.attachShader(o, r(t.VERTEX_SHADER, n)), t.attachShader(o, r(t.FRAGMENT_SHADER, e)), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || console.error(t.getProgramInfoLog(o)), t.useProgram(o), o;
}, $4 = (t, n) => {
  const e = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW);
  const r = t.getAttribLocation(n, "position");
  t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0);
}, y4 = (t, n) => t.getExtension(n), v4 = (t, n, e) => t.getUniformLocation(n, e), x4 = (t, n, e) => t.uniform1f(n, e), T4 = (t, n, e, r) => t.uniform2f(n, e, r), w4 = (t, n, e) => t.uniform1i(n, e), N4 = (t, n, e) => t.uniform4fv(n, new Float32Array(e)), C4 = (t, n, e) => t.uniform2fv(n, new Float32Array(e)), b4 = (t, n, e) => t.uniform1fv(n, new Float32Array(e)), J4 = (t) => t.createTexture(), k4 = (t, n, e, r) => {
  t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, n), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
}, S4 = (t, n, e, r) => {
  (n.width !== e || n.height !== r) && (n.width = e, n.height = r), t.viewport(0, 0, e, r);
}, L4 = (t) => {
  t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);
}, E4 = (t) => t.drawArrays(t.TRIANGLE_STRIP, 0, 4), A4 = (t) => ({ width: t.clientWidth, height: t.clientHeight }), P4 = () => window.devicePixelRatio, ld = () => performance.now(), gc = /* @__PURE__ */ wl(k4), un = /* @__PURE__ */ ps(v4), R4 = /* @__PURE__ */ ps(N4), ks = (t) => (n) => {
  const e = R4(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, F4 = /* @__PURE__ */ ps(C4), Ss = (t) => (n) => {
  const e = F4(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, G4 = /* @__PURE__ */ wl(T4), yo = /* @__PURE__ */ ps(w4), I4 = /* @__PURE__ */ ps(b4), lr = (t) => (n) => {
  const e = I4(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, br = /* @__PURE__ */ ps(x4), B4 = /* @__PURE__ */ pu($4), D4 = /* @__PURE__ */ wl(S4), z4 = /* @__PURE__ */ pu(y4), H4 = /* @__PURE__ */ hs(p4), O4 = /* @__PURE__ */ hs(E4), gd = /* @__PURE__ */ hs(J4), W4 = /* @__PURE__ */ hs(A4), Q4 = /* @__PURE__ */ hs(L4), q4 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, _d = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, l$ = /* @__PURE__ */ (() => {
  const t = Se.unfoldr(fr);
  return (n) => t(be("IterNode", n, cr));
})(), M4 = /* @__PURE__ */ gs(Eo), X4 = (t) => Tt((n) => n)(B((n) => {
  if (n.target.tag === "TokenWindow") {
    const e = q4(n.target._2)(t.layout.edges);
    if (e.tag === "Just")
      return T(
        "Just",
        {
          points: B((() => {
            const r = t.placement;
            return (o) => ({ x: o.x * r.scale + r.tx, y: o.y * r.scale + r.ty });
          })())([
            ...(() => {
              const r = _d(n.target._4)(t.layout.nodes);
              if (r.tag === "Nothing")
                return [];
              if (r.tag === "Just")
                return [{ x: r._1.x + r._1.w / 2, y: r._1.y + r._1.h / 2 }];
              l();
            })(),
            ...(() => {
              if (n.target._3 === "Forward")
                return e._1;
              if (n.target._3 === "Backward")
                return gn(e._1);
              l();
            })(),
            ...(() => {
              const r = _d(n.target._5)(t.layout.nodes);
              if (r.tag === "Nothing")
                return [];
              if (r.tag === "Just")
                return [{ x: r._1.x + r._1.w / 2, y: r._1.y + r._1.h / 2 }];
              l();
            })()
          ]),
          labels: B(co)(n.target._6),
          startT: n.startT,
          endT: n.endT,
          holdPre: n.target._7,
          holdPost: n.target._8
        }
      );
    if (e.tag === "Nothing")
      return v;
    l();
  }
  return v;
})(t.windows)), U4 = (t) => t.msg + " (line " + fn(t.line) + ", cols " + fn(t.column) + "-" + fn(t.endColumn) + ")", Y4 = (t) => (n) => (e) => (r) => {
  const o = r._2.w * e.scale, i = r._2.h * e.scale;
  return {
    id: r._1,
    path: B(co)(n),
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
      l();
    })(),
    depth: t,
    labelScale: e.scale
  };
}, V4 = (t) => (n) => (e) => (r) => ({
  id: r._1,
  path: B(co)(n),
  points: B((o) => ({ x: o.x * e.scale + e.tx, y: o.y * e.scale + e.ty }))(r._2),
  depth: t,
  arrowhead: (() => {
    const o = Ro("conn:")(r._1);
    if (o.tag === "Just")
      return !1;
    if (o.tag === "Nothing")
      return !0;
    l();
  })()
}), K4 = (t) => B(Y4(t.path.length)(t.path)(t.placement))(l$(t.layout.nodes)), dd = (t) => (n) => {
  const e = Kt((r) => M4(r.path)(n))(t);
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = wn(e._1.layout), o = r.w * e._1.placement.scale, i = r.h * e._1.placement.scale;
    return { x: r.x * e._1.placement.scale + e._1.placement.tx + o / 2, y: r.y * e._1.placement.scale + e._1.placement.ty + i / 2, w: o, h: i };
  }
  l();
}, j4 = (t) => B(V4(t.path.length)(t.path)(t.placement))(l$(t.layout.edges)), Z4 = (t) => (n) => ({
  startT: n.startT,
  endT: n.endT,
  dir: (() => {
    if (n.direction === "DiveIn")
      return 1;
    if (n.direction === "DiveOut")
      return 0;
    l();
  })(),
  parent: dd(t)(n.parentPath),
  child: dd(t)(n.childPath)
}), tF = (t) => {
  const n = Jg(t), e = (() => {
    if (n.tag === "Left") {
      const r = n._1;
      return (o) => Rt("Left", r);
    }
    if (n.tag === "Right") {
      const r = n._1;
      return (o) => o(r);
    }
    l();
  })()((r) => {
    const o = Zc(r)(Kc)._1;
    if (o.tag === "Left")
      return Rt("Left", U4(o._1));
    if (o.tag === "Right") {
      const i = mg(Ac)(pg)(o._1)(zc(z)(z)(o._1));
      if (i.tag === "Left")
        return Rt("Left", "schedule: " + fn(i._1.length) + " error(s)");
      if (i.tag === "Right")
        return Rt(
          "Right",
          {
            ok: !0,
            error: "",
            duration: i._1.totalDuration,
            nodes: xt(i._1.segments)(K4),
            edges: xt(i._1.segments)(j4),
            tokens: xt(i._1.segments)(X4),
            dives: B(Z4(i._1.segments))(i._1.dives)
          }
        );
    }
    l();
  });
  if (e.tag === "Left")
    return { ok: !1, error: e._1, duration: 0, nodes: [], edges: [], tokens: [], dives: [] };
  if (e.tag === "Right")
    return e._1;
  l();
}, No = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, nF = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, q0 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, hd = (t) => (n) => (e) => (r) => (o) => {
  const i = t + e + r, s = r * 2, u = No(0)(n - t - 2 * e), a = i + u - s;
  return s <= u ? nF(i)(a)(o) : t + (n - t) / 2;
}, pd = (t) => (n) => ({ ...n, cx: hd(t.minX)(t.maxX)(t.margin)(n.hw)(n.cx), cy: hd(t.minY)(t.maxY)(t.margin)(n.hh)(n.cy) }), eF = (t) => (n) => {
  const e = No(0)(t.minY + t.margin - (n.cy - n.hh)) + No(0)(n.cy + n.hh - (t.maxY - t.margin)), r = No(0)(t.minX + t.margin - (n.cx - n.hw)) + No(0)(n.cx + n.hw - (t.maxX - t.margin));
  return r * n.hh * 2 + e * n.hw * 2 + r * e;
}, rF = (t) => (n) => (e) => {
  const r = N(No)(0)(B((o) => n.cx - n.hw < o.cx + o.hw + t && n.cx + n.hw > o.cx - o.hw - t && n.cy - n.hh < o.cy + o.hh + t && n.cy + n.hh > o.cy - o.hh - t ? q0((o.cx + o.hw + t - (n.cx - n.hw)) / 0.7071067811865476)((o.cy + o.hh + t - (n.cy - n.hh)) / 0.7071067811865476) : 0)(e));
  return { ...n, cx: n.cx + r * 0.7071067811865476, cy: n.cy + r * 0.7071067811865476 };
}, oF = (t) => (n) => {
  const e = q0(t.cx + t.hw)(n.cx + n.hw) - No(t.cx - t.hw)(n.cx - n.hw), r = q0(t.cy + t.hh)(n.cy + n.hh) - No(t.cy - t.hh)(n.cy - n.hh);
  return t.cx - t.hw < n.cx + n.hw && t.cx + t.hw > n.cx - n.hw && t.cy - t.hh < n.cy + n.hh && t.cy + t.hh > n.cy - n.hh ? e * r : 0;
}, iF = (t) => (n) => (e) => (r) => (o) => {
  const i = o.cy - o.dotY, s = o.cy - r.cy;
  return (() => {
    const u = o.cx - o.dotX, a = o.cx - r.cx;
    return 1e6 * eF(t)(o) + 1e4 * N((c) => (f) => c + oF(o)(f))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.cy < e.dotY ? 100 : 0);
}, sF = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = pd(t)(s);
    return { chip: u, score: iF(t)(n)(e)(r)(u) };
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
    return pd(t)(r);
  if (i.tag === "Just")
    return N((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).chip;
  l();
}, uF = (t) => (n) => (e) => (r) => N((o) => (i) => {
  const s = rF(n)(i.chip)(o.obstacles), u = s.cx - s.hw >= t.minX + t.margin && s.cx + s.hw <= t.maxX - t.margin && s.cy - s.hh >= t.minY + t.margin && s.cy + s.hh <= t.maxY - t.margin ? s : sF(t)(o.obstacles)(i.chip)(s), a = u.cx - i.chip.cx, c = u.cy - i.chip.cy;
  return {
    resolved: kt(o.resolved)({ chip: u, glyphs: B((f) => ({ ...f, cx: f.cx + a, cy: f.cy + c }))(i.glyphs) }),
    obstacles: kt(o.obstacles)({ cx: u.cx, cy: u.cy, hw: u.hw, hh: u.hh })
  };
})({ resolved: [], obstacles: e })(r).resolved, g$ = (t) => t, md = /* @__PURE__ */ g$("Visible"), aF = /* @__PURE__ */ g$("Hidden");
function cF(t) {
  return t.readyState;
}
const fF = (t) => () => {
  const n = cF(t);
  return n === "visible" ? md : n === "hidden" ? aF : md;
}, lF = (t) => () => {
  const n = ic(), e = dR(n)(), r = ic();
  let o = !0;
  const i = () => {
    const _ = o, d = fF(e)();
    return t(_ && d === "Visible")();
  }, s = Of((_) => i)();
  Wf("visibilitychange")(s)(!1)(e)();
  const u = Of((_) => () => (o = !1, i()))();
  Wf("blur")(u)(!1)(r)();
  const a = Qf("blur")(u)(!1)(r), c = Of((_) => () => (o = !0, i()))();
  Wf("focus")(c)(!1)(r)();
  const f = Qf("focus")(c)(!1)(r);
  return () => (Qf("visibilitychange")(s)(!1)(e)(), a(), f());
};
function gF(t, n, e) {
  return e.then(t, n);
}
function $d(t) {
  return Promise.resolve(t);
}
function _F(t, n, e) {
  return e instanceof Error ? t(e) : n;
}
const Pg = (t) => (n) => N3((e) => () => (gF(
  (r) => {
    const i = e(Rt("Right", r))();
    return $d(i);
  },
  (r) => {
    const i = e(Rt("Left", t(r)))();
    return $d(i);
  },
  n
), C3)), Rg = (t) => {
  const n = _F(zt, v, t), e = $v(Be)("String")(t), r = (() => {
    const o = (() => {
      if (e.tag === "Left")
        return v;
      if (e.tag === "Right")
        return T("Just", Vg(e._1));
      l();
    })();
    return n.tag === "Nothing" ? o : n;
  })();
  if (r.tag === "Nothing")
    return Vg("Promise failed, couldn't extract JS Error or String");
  if (r.tag === "Just")
    return r._1;
  l();
}, yd = pe.createElement;
pe.Fragment;
function Io(t) {
  return (n) => Array.isArray(n.children) ? yd.apply(null, [t, n].concat(n.children)) : yd(t, n);
}
function dF(t) {
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
      const r = pe.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const Fg = /* @__PURE__ */ dF(Io), _$ = /* @__PURE__ */ Fg("div")(), d$ = /* @__PURE__ */ Fg("canvas")(), hF = (t, n) => {
  const e = pe.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
pe.memo;
pe.memo;
function vd(t, n) {
  const [e, r] = pe.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function Ms(t, n, e) {
  const r = hF(t, n);
  pe.useEffect(e, [r]);
}
const ue = pe.useRef;
function pF(t) {
  return t.current;
}
function mF(t, n) {
  t.current = n;
}
pe.useContext;
pe.useDebugValue;
pe.useId;
pe.useDeferredValue;
pe.useSyncExternalStore;
pe.useSyncExternalStore;
function Gg(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
pe.useEffectEvent || pe.experimental_useEffectEvent;
const Nn = /* @__PURE__ */ pu(mF), h$ = (t) => (n) => (e) => () => Ms((r, o) => t.eq(r)(o), n, e), xn = /* @__PURE__ */ hs(pF), $F = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, p$ = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => $F
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, yF = () => typeof document < "u" && document.fonts ? document.fonts : null, Ig = (t) => {
  const n = yF();
  return n ? n.load(t).then(() => {
  }) : Promise.resolve();
}, vF = "attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }", xF = `
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
`, TF = (t, n, e, r, o) => {
  const i = (c) => {
    c.preventDefault(), n(c.deltaX)(c.deltaY)(c.ctrlKey ? 1 : 0)();
  }, s = (c) => {
    c.preventDefault(), e(c.clientX)(c.clientY)();
  }, u = (c) => r(c.clientX)(c.clientY)(c.buttons)(c.shiftKey ? 1 : 0)(), a = (c) => o(c.clientX)(c.clientY)();
  return t.addEventListener("wheel", i, { passive: !1 }), t.addEventListener("pointerdown", s), window.addEventListener("pointermove", u), window.addEventListener("pointerup", a), () => {
    t.removeEventListener("wheel", i), t.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", a);
  };
}, wF = /* @__PURE__ */ gs(Eo), xd = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, ln = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, _c = /* @__PURE__ */ N(pr)(0), NF = (t) => (n) => (e) => {
  const r = st.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = st.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, m$ = /* @__PURE__ */ (() => {
  const t = Ao.traverse($i);
  return (n) => (e) => t(e)(n);
})(), Td = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = R.compare(t)(s._3);
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
    l();
  }
  return i;
}, ke = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  l();
}, CF = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  l();
}, bF = (t) => N((n) => (e) => {
  if (n.tag === "Nothing")
    return T("Just", e);
  if (n.tag === "Just")
    return T("Just", t(n._1)(e) === "LT" ? n._1 : e);
  l();
})(v), JF = /* @__PURE__ */ _v($i)(xl), kF = /* @__PURE__ */ Qr($i)(pc), wd = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    l();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  l();
}, SF = p$().pure, LF = /* @__PURE__ */ Io(_$), EF = /* @__PURE__ */ Io(d$), Nd = (t) => (n) => {
  const e = Ke(t);
  if (e.tag === "Just") {
    const r = Ke(e._1.init);
    if (r.tag === "Just")
      return T("Just", n(r._1.last)(e._1.last));
    if (r.tag === "Nothing")
      return v;
    l();
  }
  if (e.tag === "Nothing")
    return v;
  l();
}, Cd = (t) => (n) => (e) => ({ chip: { ...e.chip, cx: e.chip.cx + t, cy: e.chip.cy + n }, glyphs: B((r) => ({ ...r, cx: r.cx + t, cy: r.cy + n }))(e.glyphs) }), AF = /* @__PURE__ */ xv(TF), PF = (t) => ({ cx: t.x, cy: t.y, hw: t.hw, hh: t.hh }), $$ = (t) => (n) => {
  const e = (r) => [r, ...xt(r.minis)((o) => e(o))];
  return Kt((r) => wF(B(co)(r.segment.path))(t))(xt(n.levels)(e));
}, RF = (t) => (n) => {
  if (t.tag === "Nothing")
    return { alpha: 1, scale: 1 };
  if (t.tag === "Just") {
    const e = $$(n.path)(t._1);
    if (e.tag === "Just") {
      const r = xd(n.id)(e._1.state.nodes);
      if (r.tag === "Just") {
        const o = go(r._1);
        return {
          alpha: (() => {
            const i = xd(n.id)(e._1.state.nodeFadeAlpha);
            if (i.tag === "Nothing")
              return o.alpha * 1;
            if (i.tag === "Just")
              return o.alpha * i._1;
            l();
          })(),
          scale: o.scale
        };
      }
      if (r.tag === "Nothing")
        return { alpha: 0, scale: 1 };
      l();
    }
    if (e.tag === "Nothing")
      return { alpha: 0, scale: 1 };
  }
  l();
}, dc = (t) => (n) => (e) => ({ cx: t.cx + (n.cx - t.cx) * e, cy: t.cy + (n.cy - t.cy) * e, hw: t.hw * Ki(n.hw / ln(1e-4)(t.hw))(e), hh: t.hh * Ki(n.hh / ln(1e-4)(t.hh))(e) }), ro = (t) => (n) => oe((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)), FF = (t) => (n) => {
  const e = (r) => ln(0)(1 - ro(n)({ x: r.x, y: r.y }) / (ln(r.hw)(r.hh) + t.ballRadius));
  return N((r) => (o) => e(o) > r.glow ? { glow: e(o), x: o.x, y: o.y } : r)({ glow: 0, x: 0, y: 0 })(t.worldNodes);
}, GF = (t) => {
  const n = Fn(Zn, t, Et(1, t.length, t)), e = _c(B((r) => ro(r._1)(r._2))(n));
  return e <= 1e-9 ? [] : N((r) => (o) => {
    const i = r.distance + ro(o._1)(o._2);
    return { distance: i, segments: kt(r.segments)({ from: o._1, to: o._2, lo: r.distance / e, hi: i / e }) };
  })({ distance: 0, segments: [] })(n).segments;
}, IF = (t) => (n) => (e) => (r) => (o) => {
  const i = Al({ width: n, height: e })((() => {
    const a = Ze(r)(o);
    return { vx: a.x, vy: a.y, vw: a.w, vh: a.h };
  })()), s = (i.vx + i.vw / 2 - t.midX) * t.scaleFactor, u = -(i.vy + i.vh / 2 - t.midY) * t.scaleFactor;
  return {
    centerX: s,
    centerY: u,
    camZ: i.vh * t.scaleFactor,
    viewport: { cx: s, cy: u, hw: i.vw * t.scaleFactor / 2, hh: i.vh * t.scaleFactor / 2 }
  };
}, BF = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (t.cameraSchedule.tag === "Just") {
    const s = l2({ widthPx: e, heightPx: r })(t.cameraSchedule._1), u = So(s.cameraConfig)(s.layout)(s.cameraSpans)(i).camera, a = (() => {
      if (n.tag === "Nothing")
        return u;
      if (n.tag === "Just")
        return mh(s.cameraConfig.cameraDecay)(o)(n._1)(u);
      l();
    })();
    return T("Just", { camera: a, world: IF(t)(e)(r)(s.layout)(a) });
  }
  if (t.cameraSchedule.tag === "Nothing")
    return v;
  l();
}, uf = "500 " + fn(yn(Ue(144))) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", Bg = /* @__PURE__ */ Tt((t) => t)(/* @__PURE__ */ B(Lx)(/* @__PURE__ */ tn(32, 126))), DF = ir((Bg.length + 16 | 0) - 1 | 0, 16), zF = (t) => j(NF(0)(Bg.length - 1 | 0)(Ir(t) - 32 | 0)), bd = j(16) * 76, Jd = j(DF) * 100, kd = () => {
  const t = Eg();
  Nc(t)(bd)(), Cc(t)(Jd)();
  const n = hu(t)();
  ol(n)({ x: 0, y: 0, width: bd, height: Jd })(), nl(n)("#fff")(), bc(n)("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")(), $l(n)(fl)(), ml(n)(cl)(), Ag(n)("normal")();
  const e = m$(qt(Zn)(Bg))((r) => {
    const o = ds(r._2), i = il(n)(o)(j(oo(r._1)(16)) * 76 + 38)(j(ir(r._1, 16)) * 100 + 50);
    return () => (i(), th(n)(o)().width / 64);
  })();
  return { canvas: t, advances: e };
}, Sd = (t) => (n) => 2.36 * ln(t.hw / ln(0.2)(n))(t.hh), HF = (t) => (n) => (e) => () => {
  const r = kd();
  gc(t)(n)(r.canvas)(1)(), Nn(e)(r.advances)(), Ul(
    Yl,
    ni(ni(ei(() => Ig("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")))(Pg(Rg)))(() => ei(() => {
      const i = kd();
      return gc(t)(n)(i.canvas)(1)(), Nn(e)(i.advances)();
    }))
  )().run();
}, Ld = (t) => (n) => {
  if (t.tag === "Nothing")
    return { lo: 0, hi: 1, alpha: 1 };
  if (t.tag === "Just") {
    const e = $$(n.path)(t._1);
    if (e.tag === "Just") {
      const r = Td(n.id)(e._1.state.edges);
      if (r.tag === "Just") {
        const o = pm(r._1);
        return {
          lo: o.lo,
          hi: o.hi,
          alpha: (() => {
            const i = Td(n.id)(e._1.state.edgeFadeAlpha);
            if (i.tag === "Nothing")
              return 1;
            if (i.tag === "Just")
              return i._1;
            l();
          })()
        };
      }
      if (r.tag === "Nothing")
        return { lo: 0, hi: 0, alpha: 0 };
      l();
    }
    if (e.tag === "Nothing")
      return { lo: 0, hi: 0, alpha: 0 };
  }
  l();
}, OF = (t) => (n) => (e) => (r) => r < 0.31999999999999995 ? dc(n)(e.parent)((() => {
  const o = r / 0.31999999999999995;
  return o * o * (3 - 2 * o);
})()) : dc(e.parent)(t)((() => {
  const o = (r - 0.31999999999999995) / 0.68;
  return o * o * (3 - 2 * o);
})()), WF = (t) => (n) => (e) => e < 0.68 ? dc(t)(n.parent)((() => {
  const r = e / 0.68;
  return r * r * (3 - 2 * r);
})()) : dc(n.parent)(n.child)((() => {
  const r = (e - 0.68) / 0.31999999999999995;
  return r * r * (3 - 2 * r);
})()), QF = (t) => (n) => (e) => (r) => e.dir > 0.5 ? WF(n)(e)(r) : OF(t)(n)(e)(r), y$ = (t) => (n) => ln(0)(ke(1)((n - t.startT) / ln(1e-4)(t.endT - t.startT))), qF = (t) => (n) => (e) => N((r) => (o) => e <= o.startT ? r : QF(t)(r)(o)(y$(o)(e)))(t)(n), MF = (t) => (n) => {
  if (t.dir > 0.5) {
    const r = ln(0)(ke(1)((n - 0.68) / 0.31999999999999995));
    return r * r * (3 - 2 * r);
  }
  const e = ln(0)(ke(1)(n / 0.31999999999999995));
  return e * e * (3 - 2 * e);
}, XF = (t) => (n) => N((e) => (r) => n <= r.startT ? e : n >= r.endT ? r.dir > 0.5 ? e + 1 : e + -1 : e + (r.dir > 0.5 ? 1 : -1) * MF(r)(y$(r)(n)))(0)(t), UF = (t) => (n) => {
  const e = 1 - t.holdPre - t.holdPost;
  return e <= 0 ? n < 0.5 ? 0 : 1 : ln(0)(ke(1)((n - t.holdPre) / e));
}, YF = (t) => (n) => (e) => {
  const r = ln(0)(ke(1)((t * j(n + 1 | 0) - j(e)) / 1.5));
  return r * r * (3 - 2 * r);
}, VF = (t) => (n) => {
  const e = n.length === 0 ? [""] : n, r = B((_) => j(CF(1)(xr(_))))(e), o = ln(1)(_c(r)), i = t * o, u = ((_) => (d) => (g) => {
    let p = _, m = d, h = g, $ = !0, y;
    for (; $; ) {
      const x = p, w = m, b = Bt((k) => v, (k) => (E) => T("Just", { head: k, tail: E }), h);
      if (b.tag === "Nothing") {
        $ = !1, y = e.length - 1 | 0;
        continue;
      }
      if (b.tag === "Just") {
        if (w + b._1.head >= i) {
          $ = !1, y = x;
          continue;
        }
        p = x + 1 | 0, m = w + b._1.head, h = b._1.tail;
        continue;
      }
      l();
    }
    return y;
  })(0)(0)(r), a = _c(u < 1 ? [] : Et(0, u, r)), c = a / o;
  if (u >= 0 && u < r.length) {
    const _ = (a + r[u]) / o;
    return { line: u >= 0 && u < e.length ? e[u] : "", phase: _ <= c ? 1 : ln(0)(ke(1)((t - c) / (_ - c))) };
  }
  const f = (a + 1) / o;
  return { line: u >= 0 && u < e.length ? e[u] : "", phase: f <= c ? 1 : ln(0)(ke(1)((t - c) / (f - c))) };
}, KF = (t) => (n) => {
  const e = Fn(Zn, t, Et(1, t.length, t));
  return ((o) => (i) => {
    let s = o, u = i, a = !0, c;
    for (; a; ) {
      const f = s, d = Bt((g) => v, (g) => (p) => T("Just", { head: g, tail: p }), u);
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
        if (d._1.tail.length === 0 || f <= ro(d._1.head._1)(d._1.head._2)) {
          const g = ro(d._1.head._1)(d._1.head._2), p = g <= 0 ? 0 : f / g;
          a = !1, c = { x: d._1.head._1.x + (d._1.head._2.x - d._1.head._1.x) * p, y: d._1.head._1.y + (d._1.head._2.y - d._1.head._1.y) * p };
          continue;
        }
        s = f - ro(d._1.head._1)(d._1.head._2), u = d._1.tail;
        continue;
      }
      l();
    }
    return c;
  })(ln(0)(ke(1)(n)) * N((o) => (i) => o + ro(i._1)(i._2))(0)(e))(e);
}, jF = (t) => (n) => B((e) => {
  const r = UF(e)((n - e.startT) / (e.endT - e.startT)), o = KF(e.path)(r), i = FF(t)(o);
  return { x: o.x, y: o.y, glow: i.glow, nx: i.x, ny: i.y, labels: e.labels, motionT: r, startT: e.startT, path: e.path };
})(Et(0, 8, dt((e) => n >= e.startT && n < e.endT, t.tokenFlows))), ZF = (t) => (n) => {
  const e = t.cameraSchedule.tag === "Just" ? T("Just", Xh(t.cameraSchedule._1)(n)) : v, r = B(RF(e))(t.nodeList), o = B((i) => {
    const s = ln(1e-9)(i._1.hi - i._1.lo), u = ln(0)(ke(1)((i._2.lo - i._1.lo) / s)), a = ln(0)(ke(1)((i._2.hi - i._1.lo) / s));
    return {
      flat: [
        i._1.from.x + (i._1.to.x - i._1.from.x) * u,
        i._1.from.y + (i._1.to.y - i._1.from.y) * u,
        i._1.from.x + (i._1.to.x - i._1.from.x) * a,
        i._1.from.y + (i._1.to.y - i._1.from.y) * a
      ],
      alpha: i._2.alpha > 0 && a > u + 1e-9 ? i._2.alpha : 0
    };
  })(Fn(Zn, t.edgeSegments, B((i) => Ld(e)(i.key))(t.edgeSegments)));
  return {
    nodeRect: xt(Fn(Zn, t.worldNodes, r))((i) => [
      i._1.x,
      i._1.y,
      i._1.hw * 2 * i._2.scale,
      i._1.hh * 2 * i._2.scale
    ]),
    nodeAlpha: B((i) => i.alpha)(r),
    edge: xt(o)((i) => i.flat),
    edgeAlpha: B((i) => i.alpha)(o),
    arrowAlpha: B((i) => {
      const s = Ld(e)(i.key);
      return s.alpha > 0 && s.hi >= 0.999999 ? s.alpha : 0;
    })(t.arrowData)
  };
}, t6 = (t) => {
  const n = Jg(t);
  if (n.tag === "Left")
    return v;
  if (n.tag === "Right") {
    const e = Zc(n._1)(Kc)._1;
    if (e.tag === "Left")
      return v;
    if (e.tag === "Right") {
      const r = mg(Ac)(pg)(e._1)(zc(z)(z)(e._1));
      if (r.tag === "Left")
        return v;
      if (r.tag === "Right")
        return T("Just", r._1);
    }
  }
  l();
}, n6 = (t) => {
  const n = tF(t), e = t6(t), r = (() => {
    if (e.tag === "Nothing")
      return Ac;
    if (e.tag === "Just")
      return e._1.cameraConfig;
    l();
  })(), o = N((h) => ($) => ({ minX: ke(h.minX)($.x - $.w / 2), maxX: ln(h.maxX)($.x + $.w / 2), minY: ke(h.minY)($.y - $.h / 2), maxY: ln(h.maxY)($.y + $.h / 2) }))({ minX: 1e9, maxX: -1e9, minY: 1e9, maxY: -1e9 })(n.nodes), i = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, u = 6.6 / ln(o.maxX - o.minX)(o.maxY - o.minY), a = B((h) => ({
    key: { id: h.id, path: h.path },
    pts: B(($) => ({ x: ($.x - i) * u, y: -($.y - s) * u }))(h.points),
    depth: j(h.depth),
    arrowhead: h.arrowhead
  }))(n.edges), c = B((h) => ({
    x: (h.x - i) * u,
    y: -(h.y - s) * u,
    hw: h.w / 2 * u,
    hh: h.h / 2 * u,
    shape: j(h.shape),
    depth: j(h.depth),
    labelH: r.labelBasePx * h.labelScale * u
  }))(n.nodes), f = (h) => {
    const $ = bF(/* @__PURE__ */ (() => {
      const y = (x) => (h.x - x.x) * (h.x - x.x) + (h.y - x.y) * (h.y - x.y);
      return (x) => (w) => ot.compare(y(x))(y(w));
    })())(c);
    if ($.tag === "Just")
      return { x: $._1.x, y: $._1.y };
    if ($.tag === "Nothing")
      return h;
    l();
  }, _ = c.length, d = _ === 0 ? 0.1 : N((h) => ($) => h + $.hh)(0)(c) / j(_), g = (h) => {
    const $ = dt((y) => y.depth === h, c);
    return $.length === 0 ? d : N((y) => (x) => y + x.hh)(0)($) / j($.length);
  }, p = g(0), m = xt(a)((h) => B(($) => ({ key: h.key, from: $.from, to: $.to, lo: $.lo, hi: $.hi, depth: h.depth }))(GF((() => {
    if (h.arrowhead) {
      const $ = Nd(h.pts)(Zn);
      if ($.tag === "Just") {
        const y = ro($._1._1)($._1._2);
        if (y > 1e-6) {
          const x = Ke(h.pts);
          if (x.tag === "Just") {
            const w = ke(d * g(h.depth) / ln(1e-4)(p) * 0.05 + d * g(h.depth) / ln(1e-4)(p) * 0.55)(y * 0.95);
            return kt(x._1.init)({ x: $._1._2.x - ($._1._2.x - $._1._1.x) / y * w, y: $._1._2.y - ($._1._2.y - $._1._1.y) / y * w });
          }
          if (x.tag === "Nothing")
            return h.pts;
          l();
        }
        return h.pts;
      }
      if ($.tag === "Nothing")
        return h.pts;
      l();
    }
    return h.pts;
  })())));
  return {
    nodeList: n.nodes,
    worldNodes: c,
    halfW: N((h) => ($) => ln(h)(ln($.x + $.hw)($.hw - $.x)))(0)(c) + d * 0.6,
    halfH: N((h) => ($) => ln(h)(ln($.y + $.hh)($.hh - $.y)))(0)(c) + d * 0.6,
    unitHalfH: d,
    ballRadius: d * 0.3,
    scaleFactor: u,
    nodeRectFlat: xt(c)((h) => [h.x, h.y, h.hw * 2, h.hh * 2]),
    nodeShapeFlat: B((h) => h.shape)(c),
    nodeLabelHeightFlat: B((h) => h.labelH)(c),
    nodeDepthFlat: B((h) => h.depth)(c),
    edgeSegFlat: xt(m)((h) => [h.from.x, h.from.y, h.to.x, h.to.y]),
    edgeSegDepth: B((h) => h.depth)(m),
    edgeSegments: m,
    arrowData: Tt((h) => {
      if (h.arrowhead) {
        const $ = Nd(h.pts)(Zn);
        if ($.tag === "Just") {
          const y = ro($._1._1)($._1._2);
          return y > 1e-6 ? T(
            "Just",
            (() => {
              const x = f($._1._2);
              return {
                key: h.key,
                tipX: $._1._2.x - ($._1._2.x - $._1._1.x) / y * (d * g(h.depth) / ln(1e-4)(p)) * 0.05,
                tipY: $._1._2.y - ($._1._2.y - $._1._1.y) / y * (d * g(h.depth) / ln(1e-4)(p)) * 0.05,
                dirX: ($._1._2.x - $._1._1.x) / y,
                dirY: ($._1._2.y - $._1._1.y) / y,
                cx: x.x,
                cy: x.y,
                depth: h.depth,
                unit: d * g(h.depth) / ln(1e-4)(p)
              };
            })()
          ) : v;
        }
        if ($.tag === "Nothing")
          return v;
        l();
      }
      return v;
    })(a),
    tokenFlows: B((h) => ({
      path: (() => {
        const $ = B((x) => ({ x: (x.x - i) * u, y: -(x.y - s) * u }))(h.points), y = Bt((x) => v, (x) => (w) => T("Just", { head: x, tail: w }), $);
        if (y.tag === "Just") {
          const x = Ke($);
          if (x.tag === "Just")
            return [f(y._1.head), ...kt($)(f(x._1.last))];
          if (x.tag === "Nothing")
            return $;
          l();
        }
        if (y.tag === "Nothing")
          return $;
        l();
      })(),
      labels: h.labels,
      startT: h.startT,
      endT: h.endT,
      holdPre: h.holdPre,
      holdPost: h.holdPost
    }))(n.tokens),
    dives: B((h) => {
      const $ = (y) => ({ cx: (y.x - i) * u, cy: -(y.y - s) * u, hw: y.w / 2 * u, hh: y.h / 2 * u });
      return { startT: h.startT, endT: h.endT, dir: j(h.dir), parent: $(h.parent), child: $(h.child) };
    })(n.dives),
    duration: n.duration,
    midX: i,
    midY: s,
    cameraSchedule: e
  };
}, Ed = (t) => () => {
  const n = Eg(), e = hu(n)();
  Ag(e)("normal")(), f$(e)("1px")();
  const r = m$(t)((o) => {
    const i = bc(e)(uf);
    return () => (i(), [th(e)(o.label)().width / 2048, 0.9]);
  })();
  return Pe(r);
}, v$ = (t) => (n) => {
  const e = hu(n);
  return () => {
    const r = e();
    return ol(r)({ x: 0, y: 0, width: 2048, height: j(t.length) * 160 })(), nl(r)("#fff")(), $l(r)(fl)(), ml(r)(cl)(), Ag(r)("normal")(), f$(r)("1px")(), JF(t)((o) => (i) => {
      const s = bc(r)(uf);
      return () => (s(), il(r)(i.label)(1024)(j(o) * 160 + 80)());
    })();
  };
}, e6 = (t) => () => {
  const n = Eg();
  return Nc(n)(2048)(), Cc(n)(j(t.length) * 160)(), v$(t)(n)(), n;
}, r6 = (t) => (n) => (e) => {
  const r = e6(t);
  return () => {
    const o = r();
    gc(n)(e)(o)(0)(), Ul(
      Yl,
      ni(ni(ei(() => Ig(uf)))(Pg(Rg)))(() => ei((() => {
        const s = v$(t)(o);
        return () => (s(), gc(n)(e)(o)(0)());
      })()))
    )().run();
  };
}, o6 = (t) => (n) => {
  const e = (r) => N((o) => (i) => (() => {
    const s = i.nx - r.cx, u = i.ny - r.cy, a = r.unit * 0.6;
    return s * s + u * u < a * a;
  })() ? ln(o)(i.glow) : o)(0)(n);
  return xt(t.arrowData)((r) => [r.tipX - r.dirX * r.unit * 0.2 * e(r), r.tipY - r.dirY * r.unit * 0.2 * e(r), r.dirX, r.dirY]);
}, i6 = (t) => (n) => (e) => (r) => {
  const o = ke(0.05)(t);
  return qt((i) => (s) => {
    if (i >= 0 && i < e.length) {
      const d = e[i].startT, g = Kt((y) => y.id === d)(n), p = (() => {
        if (g.tag === "Nothing")
          return { id: d, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
        if (g.tag === "Just")
          return g._1;
        l();
      })(), m = p.vx + (180 * (s.chip.cx - p.x) - 22 * p.vx) * o, h = p.vy + (180 * (s.chip.cy - p.y) - 22 * p.vy) * o, $ = { id: d, x: p.x + m * o, y: p.y + h * o, vx: m, vy: h };
      return J(Cd($.x - s.chip.cx)($.y - s.chip.cy)(s), $);
    }
    const u = Kt((d) => d.id === 0)(n), a = (() => {
      if (u.tag === "Nothing")
        return { id: 0, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
      if (u.tag === "Just")
        return u._1;
      l();
    })(), c = a.vx + (180 * (s.chip.cx - a.x) - 22 * a.vx) * o, f = a.vy + (180 * (s.chip.cy - a.y) - 22 * a.vy) * o, _ = { id: 0, x: a.x + c * o, y: a.y + f * o, vx: c, vy: f };
    return J(Cd(_.x - s.chip.cx)(_.y - s.chip.cy)(s), _);
  })(r);
}, Ad = (t) => (n) => {
  const e = Ir(n) - 32 | 0;
  return e >= 0 && e < t.length ? t[e] : 0.5;
}, s6 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = n * 0.6 + n * 0.5454545454545454, u = n * 1.5625, a = u * 0.76, c = n * 0.7272727272727273, f = e.y + r + c + s, _ = VF(o)(i), d = qr(_.line), g = d.length, p = _c(B((h) => n * Ad(t)(h))(d)), m = e.x + r + c + p / 2;
  return {
    chip: { cx: m, cy: f, hw: p / 2 + n * 1.2727272727272727, hh: s, dotX: e.x, dotY: e.y },
    glyphs: N((h) => ($) => {
      const y = YF(_.phase)(g)($._1), x = n * Ad(t)($._2), w = { cx: h._1 + x / 2, cy: f + (1 - y) * n * 0.85, hw: a / 2, hh: u / 2, cell: zF($._2), alpha: y };
      return J(h._1 + x, y > 0 ? kt(h._2)(w) : h._2);
    })(J(m - p / 2, []))(qt(Zn)(d))._2
  };
}, u6 = /* @__PURE__ */ Gg(
  "SdfDiagram",
  (t) => {
    const n = ue(Pi), e = ue(0), r = ue(0), o = ue(v), i = ue([]), s = ue([]), u = ue(v), a = ue(8), c = ue(1), f = ue(0), _ = ue(0), d = ue(0), g = ue(0), p = ue(v), m = ue({ resW: 0, resH: 0 }), h = ue(1), $ = ue(!0), y = Nn(h)(t.speed);
    Ms(
      (C, b) => C === b,
      t.speed,
      () => (y(), () => {
      })
    );
    const x = Nn($)(t.playing);
    Ms(
      (C, b) => C === b,
      t.playing,
      () => (x(), () => {
      })
    );
    const w = xn(n);
    return Ms(
      (C, b) => C === b,
      t.source,
      () => {
        const C = w(), b = An(C, v, zt);
        if (b.tag === "Nothing")
          return () => {
          };
        if (b.tag === "Just") {
          const k = H4(b._1)(), E = An(k, v, zt);
          if (E.tag === "Nothing")
            return () => {
            };
          if (E.tag === "Just") {
            const S = E._1;
            Nn(u)(v)();
            const I = n6(t.source);
            z4(S)("OES_standard_derivatives")();
            const W = m4(S, vF, xF);
            B4(S)(W)();
            const D = un(S)(W)("uRes")(), O = un(S)(W)("uTime")(), V = un(S)(W)("uTilt")(), et = un(S)(W)("uNodeCount")(), K = un(S)(W)("uEdgeCount")(), q = un(S)(W)("uNodeRect")(), A = un(S)(W)("uNodeAlpha")(), P = un(S)(W)("uNodeShape")(), Q = un(S)(W)("uEdge")(), G = un(S)(W)("uEdgeAlpha")(), F = un(S)(W)("uArrow")(), H = un(S)(W)("uArrowCount")(), U = un(S)(W)("uArrowAlpha")(), Y = un(S)(W)("uLabel")(), M = un(S)(W)("uLabelAspect")(), tt = un(S)(W)("uLabelFadeStart")(), it = un(S)(W)("uLabelDim")(), nt = un(S)(W)("uLabelH")(), ct = un(S)(W)("uUnit")(), lt = un(S)(W)("uTokCount")(), pt = un(S)(W)("uTokPos")(), At = un(S)(W)("uTokGlow")(), Pt = un(S)(W)("uTokNode")(), en = un(S)(W)("uGlyphAtlas")(), $t = un(S)(W)("uChipCount")(), It = un(S)(W)("uChipRect")(), yt = un(S)(W)("uChipDot")(), Nt = un(S)(W)("uGlyphCount")(), _t = un(S)(W)("uGlyphRect")(), mt = un(S)(W)("uGlyphCell")(), St = un(S)(W)("uGlyphAlpha")(), Ft = un(S)(W)("uCamZ")(), Jt = un(S)(W)("uCamPanX")(), bt = un(S)(W)("uCamPanY")(), Wt = un(S)(W)("uRotY")(), Zt = un(S)(W)("uActiveDepth")(), sn = un(S)(W)("uNodeDepth")(), rn = un(S)(W)("uEdgeDepth")(), ie = un(S)(W)("uArrowDepth")();
            yo(S)(Y)(0)(), yo(S)(en)(1)(), br(S)(M)(12.8)(), br(S)(tt)(0.92)();
            const Ht = gd(S)(), Xt = gd(S)();
            r6(I.nodeList)(S)(Ht)(), HF(S)(Xt)(i)();
            const le = Ed(I.nodeList)();
            Ss(S)(it)(le)(), Ul(
              Yl,
              ni(ni(ei(() => Ig(uf)))(Pg(Rg)))(() => ni(ei(Ed(I.nodeList)))((vn) => ei(Ss(S)(it)(vn))))
            )().run(), yo(S)(et)(I.nodeList.length)(), yo(S)(K)(ir(I.edgeSegFlat.length, 4))(), yo(S)(H)(I.arrowData.length)(), lr(S)(P)(I.nodeShapeFlat)(), lr(S)(nt)(I.nodeLabelHeightFlat)(), lr(S)(sn)(I.nodeDepthFlat)(), lr(S)(rn)(I.edgeSegDepth)(), lr(S)(ie)(B((vn) => vn.depth)(I.arrowData))();
            const se = ic(), On = xn(o), $e = kF((vn) => {
              const ge = hR(vn)(se);
              return () => (ge(), Nn(o)(v)());
            }), Ut = () => {
              const vn = On();
              return $e(vn)();
            }, hn = () => {
              const vn = ld(), ge = xn(r)();
              Nn(r)(vn)();
              const Xr = xn(h)(), Bo = xn($)(), ho = ke(0.05)((vn - ge) / 1e3), Le = Bo ? ho * Xr : 0, Nr = xn(e)() + Le;
              Nn(e)(Nr)();
              const er = W4(b._1)(), Do = P4(), vs = ln(1)(ke(2)(Do)), po = xn(i)(), Ci = xn(s)(), Lu = xn(c)(), Hg = xn(f)(), Og = xn(_)(), T$ = xn(u)(), Eu = xn(d)(), Au = 0 + xn(g)(), Pu = er.width * vs, xs = er.height * vs, Wg = { cx: 0, cy: 0, hw: I.halfW, hh: I.halfH }, w$ = (() => {
                const Ts = I.duration > 0 ? Nr - I.duration * je(Nr / I.duration) : 0, zo = jF(I)(Ts), ws = BF(I)(T$)(er.width)(er.height)(ho)(Ts), Ns = ZF(I)(Ts), Cs = qF(Wg)(I.dives)(Ts), C$ = { centerX: Cs.cx, centerY: Cs.cy, camZ: Cs.hh * 2, viewport: Cs }, af = (() => {
                  if (ws.tag === "Nothing")
                    return C$;
                  if (ws.tag === "Just")
                    return ws._1.world;
                  l();
                })(), Ru = af.centerX + Hg, cf = af.centerY + Og, bs = af.camZ * 1.18 * Lu, b$ = Ru * de(Eu), J$ = cf * de(Au) - Ru * Ne(Eu) * Ne(Au), ff = Pu / xs, lf = Sd(Cs)(ff) / Sd(Wg)(ff), k$ = I.ballRadius * lf, S$ = 11 * I.scaleFactor * lf, Qg = I.unitHalfH * lf, qg = XF(I.dives)(Ts), Mg = i6(Le)(Ci)(zo)(uF((() => {
                  const on = 0.5 * ff * bs / ln(0.3)(de(Eu)), Xg = 0.5 * bs / ln(0.3)(de(Au));
                  return { minX: Ru - on, maxX: Ru + on, minY: cf - Xg, maxY: cf + Xg, margin: 4 * bs / ln(1)(xs) };
                })())(Qg * 0.25)(B(PF)(dt((on) => on.depth >= qg - 0.5, I.worldNodes)))(B((on) => s6(po)(S$)({
                  x: on.x,
                  y: on.y
                })(k$)(on.motionT)(on.labels))(zo))), Fu = B((on) => on._1)(Mg), Gu = Et(0, 40, xt(Fu)((on) => on.glyphs)), L$ = B((on) => on._2)(Mg), E$ = Nn(m)({ resW: Pu, resH: xs });
                return () => (E$(), Nn(s)(L$)(), Nn(u)(ws.tag === "Just" ? T("Just", ws._1.camera) : v)(), Nn(f)(Hg)(), Nn(_)(Og)(), Nn(a)(bs)(), D4(S)(b._1)(yn(Ue(Pu)))(yn(Ue(xs)))(), Q4(S)(), G4(S)(D)(Pu)(xs)(), br(S)(O)(Nr)(), br(S)(V)(Au)(), br(S)(Ft)(bs)(), br(S)(Jt)(b$)(), br(S)(bt)(J$)(), br(S)(Wt)(Eu)(), br(S)(Zt)(qg)(), ks(S)(q)(Ns.nodeRect)(), lr(S)(A)(Ns.nodeAlpha)(), ks(S)(Q)(Ns.edge)(), lr(S)(G)(Ns.edgeAlpha)(), lr(S)(U)(Ns.arrowAlpha)(), br(S)(ct)(Qg)(), yo(S)(lt)(zo.length)(), Ss(S)(pt)(xt(zo)((on) => [on.x, on.y]))(), lr(S)(At)(B((on) => on.glow)(zo))(), Ss(S)(Pt)(xt(zo)((on) => [on.nx, on.ny]))(), ks(S)(F)(o6(I)(zo))(), yo(S)($t)(Fu.length)(), ks(S)(It)(xt(Fu)((on) => [on.chip.cx, on.chip.cy, on.chip.hw, on.chip.hh]))(), Ss(S)(yt)(xt(Fu)((on) => [on.chip.dotX, on.chip.dotY]))(), yo(S)(Nt)(Gu.length)(), ks(S)(_t)(xt(Gu)((on) => [on.cx, on.cy, on.hw, on.hh]))(), lr(S)(mt)(B((on) => on.cell)(Gu))(), lr(S)(St)(B((on) => on.alpha)(Gu))(), O4(S)());
              })();
              er.width > 0 && w$();
              const N$ = W0(hn)(se)();
              return Nn(o)(T("Just", N$))();
            }, Dg = Nn(r), ku = () => {
              const vn = ld();
              Dg(vn)();
              const ge = W0(hn)(se)();
              return Nn(o)(T("Just", ge))();
            };
            ku();
            const Su = lF((vn) => {
              const ge = xn(o);
              return () => {
                const Xr = ge();
                if (vn)
                  return Xr.tag === "Nothing" ? ku() : void 0;
                if (!vn && Xr.tag === "Just")
                  return Ut();
              };
            })(), zg = AF(b._1)((vn) => (ge) => (Xr) => {
              const Bo = xn(a);
              return () => {
                const ho = Bo(), Le = xn(m)();
                if (Xr > 0.5) {
                  const er = xn(c)();
                  return Nn(c)(wd(0.3)(2.6)(er * Ki(1.01)(ge)))();
                }
                const Ni = xn(f)(), Nr = xn(_)();
                return Nn(f)(Ni + vn * ho / Le.resH)(), Nn(_)(Nr - ge * ho / Le.resH)();
              };
            })((vn) => (ge) => Nn(p)(T("Just", { x: vn, y: ge })))((vn) => (ge) => (Xr) => (Bo) => {
              const ho = xn(p);
              return () => {
                const Le = ho();
                if (Le.tag !== "Nothing") {
                  if (Le.tag === "Just") {
                    const Ni = ge - Le._1.y, Nr = vn - Le._1.x;
                    Nn(p)(T("Just", { x: vn, y: ge }))();
                    const er = xn(a)(), Do = xn(m)();
                    if (Xr >= 1.5) {
                      const Ci = xn(f)(), Lu = xn(_)();
                      return Nn(f)(Ci - Nr * er / Do.resH)(), Nn(_)(Lu + Ni * er / Do.resH)();
                    }
                    const vs = xn(d)(), po = xn(g)();
                    return Nn(d)(vs + Nr * 5e-3)(), Nn(g)(wd(-0.8)(0.8)(po + Ni * 5e-3))();
                  }
                  l();
                }
              };
            })((vn) => (ge) => Nn(p)(v))();
            return () => (Ut(), Su(), zg());
          }
        }
        l();
      }
    ), SF(LF({
      style: { position: "absolute", inset: "0" },
      children: [EF({ ref: n, style: { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" } })]
    }))();
  }
), a6 = /* @__PURE__ */ Io(u6), c6 = /* @__PURE__ */ Io(_$), f6 = /* @__PURE__ */ h$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), l6 = /* @__PURE__ */ h$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), qe = /* @__PURE__ */ Qr($i)(pc), hc = p$().pure, g6 = /* @__PURE__ */ Io(d$), _6 = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && t.showTitle === n.showTitle && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, d6 = /* @__PURE__ */ Fg("svg")(), Pd = (t) => c6({
  className: "markgraf-player",
  style: { position: "relative", width: "100%", height: "100%" },
  children: [
    a6({
      source: t.src,
      speed: 1,
      playing: (() => {
        const n = An(t.paused, v, zt);
        if (n.tag === "Nothing")
          return !0;
        if (n.tag === "Just")
          return !n._1;
        l();
      })()
    })
  ]
}), x$ = (t) => (n) => {
  const e = An(n.theme, v, zt), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    l();
  })(), o = An(n.renderer, v, zt), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    l();
  })(), s = An(n.paused, v, zt), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    l();
  })(), a = r === "light" ? T("Just", A_) : r === "dark" ? T("Just", H5) : r === "blueprint" ? T("Just", O5) : r === "whiteboard" ? T("Just", W5) : r === "isometric" ? T("Just", Q5) : v, c = i === "svg" ? T("Just", WR) : i === "canvas" ? T("Just", sd) : v, f = {
    source: t,
    renderer: (() => {
      if (c.tag === "Nothing")
        return sd;
      if (c.tag === "Just")
        return c._1;
      l();
    })(),
    sizing: (() => {
      const _ = An(n.width, v, zt);
      if (_.tag === "Just") {
        const d = An(n.height, v, zt);
        if (d.tag === "Just")
          return s$("FixedSize", _._1, d._1);
      }
      return OR;
    })(),
    theme: (() => {
      if (a.tag === "Nothing")
        return A_;
      if (a.tag === "Just")
        return a._1;
      l();
    })(),
    transparency: (() => {
      const _ = An(n.transparent, v, zt);
      if (_.tag === "Nothing")
        return !1;
      if (_.tag === "Just")
        return _._1;
      l();
    })() ? M5 : q5,
    showTitle: (() => {
      const _ = An(n.showTitle, v, zt);
      if (_.tag === "Nothing")
        return !0;
      if (_.tag === "Just")
        return _._1;
      l();
    })()
  };
  return () => {
    const _ = ue(Pi), d = vd((h, $) => J(h, $), v), g = d._1, p = vd((h, $) => J(h, $), { time: 0, keyframe: "", playing: !1 });
    f6(J(i, r))((() => {
      const h = Ug("[markgraf] unknown renderer " + ha(i) + ", defaulting to canvas"), $ = (() => {
        if (c.tag === "Nothing")
          return !0;
        if (c.tag === "Just")
          return !1;
        l();
      })() ? h : () => {
      };
      return () => {
        $();
        const y = Ug("[markgraf] unknown theme " + ha(r) + ", defaulting to light");
        return (() => {
          if (a.tag === "Nothing")
            return !0;
          if (a.tag === "Just")
            return !1;
          l();
        })() && y(), () => {
        };
      };
    })())();
    const m = xn(_);
    return Ms(
      (h, $) => _6.eq(h)($),
      f,
      () => {
        const h = m(), $ = An(h, v, zt), y = (() => {
          if ($.tag === "Just")
            return _R(v, zt, "Element", $._1);
          if ($.tag === "Nothing")
            return v;
          l();
        })();
        if (y.tag === "Nothing")
          return () => {
          };
        if (y.tag === "Just") {
          const x = g4(y._1)(f.source)(f.renderer)(f.sizing)(f.theme)(f.transparency)(f.showTitle)();
          if (x.tag === "Left")
            return z$("[markgraf] " + x._1)(), () => {
            };
          if (x.tag === "Right") {
            const w = x._1;
            d._2((b) => T("Just", w))();
            const C = w.subscribe((b) => p._2((k) => b))();
            return () => (C(), w.destroy(), d._2((b) => v)());
          }
        }
        l();
      }
    ), l6(J(
      u,
      (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        l();
      })()
    ))((() => {
      const h = qe(($) => u ? $.pause : $.play)(g);
      return () => (h(), () => {
      });
    })())(), hc({
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
        l();
      })(),
      play: qe((h) => h.play)(g),
      playWith: (h) => qe(($) => $.playWith(h))(g),
      pause: qe((h) => h.pause)(g),
      toggle: qe((h) => h.toggle)(g),
      seek: (h) => qe(($) => $.seek(h))(g),
      seekCue: (h) => qe(($) => $.seekCue(h))(g),
      seekStep: (h) => qe(($) => $.seekStep(h))(g),
      playToCue: (h) => ($) => qe((y) => y.playToCue(h)($))(g),
      playToStep: (h) => ($) => qe((y) => y.playToStep(h)($))(g),
      playNext: (h) => qe(($) => $.playNext(h))(g),
      playPrevious: (h) => qe(($) => $.playPrevious(h))(g),
      setSpeed: (h) => qe(($) => $.setSpeed(h))(g),
      cues: g.tag === "Just" ? g._1.cues : [],
      steps: g.tag === "Just" ? g._1.steps : [],
      onCueEnter: (h) => {
        if (g.tag === "Just")
          return g._1.subscribeCue(h);
        if (g.tag === "Nothing")
          return () => () => {
          };
        l();
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
        l();
      },
      onComplete: (h) => {
        if (g.tag === "Just")
          return g._1.subscribeComplete(h);
        if (g.tag === "Nothing")
          return () => () => {
          };
        l();
      }
    })();
  };
}, h6 = /* @__PURE__ */ Gg(
  "MarkgrafHeadlessPlayer",
  (t) => {
    const n = x$(t.src)({
      renderer: t.renderer,
      width: t.width,
      height: t.height,
      theme: t.theme,
      transparent: t.transparent,
      showTitle: t.showTitle,
      paused: t.paused
    })(), e = An(t.renderer, v, zt);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      l();
    })() === "svg" ? hc(Io(d6)({ className: "markgraf-player", ref: n.elementRef }))() : hc(g6({ className: "markgraf-player", ref: n.elementRef }))();
  }
), p6 = /* @__PURE__ */ Gg(
  "MarkgrafPlayer",
  (t) => hc((() => {
    const n = An(t.renderer, v, zt), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      l();
    })();
    return e === "sdf" || e === "webgl" ? Pd(t) : Io(h6)(t);
  })())()
), Ls = (t) => t ?? null, m6 = (t) => {
  if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
  const n = Object.getPrototypeOf(t);
  return n === Object.prototype || n === null;
}, $6 = (t) => t != null && (m6(t) || "direction" in t || "speed" in t || "duration" in t || "loop" in t || "stopAt" in t), Uf = (t) => () => t(), Yf = (t) => (n) => () => t(n), y6 = (t) => ({
  ...t,
  play: (n) => $6(n) ? t.playWith(n)() : t.play(),
  playWith: (n) => t.playWith(Ls(n))(),
  pause: () => t.pause(),
  toggle: () => t.toggle(),
  seek: (n) => t.seek(n)(),
  seekCue: (n) => t.seekCue(n)(),
  seekStep: (n) => t.seekStep(n)(),
  playToCue: (n, e) => t.playToCue(n)(Ls(e))(),
  playToStep: (n, e) => t.playToStep(n)(Ls(e))(),
  playNext: (n) => t.playNext(Ls(n))(),
  playPrevious: (n) => t.playPrevious(Ls(n))(),
  setSpeed: (n) => t.setSpeed(n)(),
  onCueEnter: (n) => Uf(t.onCueEnter(Yf(n))()),
  onStepEnter: (n, e) => Uf(t.onStepEnter(n)(Yf(e))()),
  onComplete: (n) => Uf(t.onComplete(Yf(n))())
}), T6 = (t, n) => y6(x$(t)(n ?? {})()), w6 = p6;
export {
  w6 as MarkgrafPlayer,
  T6 as useMarkgraf
};
