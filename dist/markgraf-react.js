import Ne from "react";
function yy(t) {
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
function rr(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const ne = (t) => (n) => t, B = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, xy = { map: B }, cl = (t) => t, vy = function(t) {
  return function(n) {
    return {}.hasOwnProperty.call(n, t);
  };
}, Ty = function(t) {
  return function(n) {
    return n[t];
  };
}, en = function(t) {
  return t.toString();
}, mo = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, c0 = function(t) {
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
}, fl = (t) => t, jn = /* @__PURE__ */ fl("LT"), Zn = /* @__PURE__ */ fl("GT"), Te = /* @__PURE__ */ fl("EQ"), T = (t, n) => ({ tag: t, _1: n }), x = /* @__PURE__ */ T("Nothing"), Ht = (t) => T("Just", t), th = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, nh = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, fs = function(t) {
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
}, ro = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => cl)(i))(s);
  })(t.pure());
}, ws = (t) => {
  const n = ro(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Tc = {
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
  foldr: fs,
  foldl: N,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => qt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, Zi = null;
function bn(t, n, e) {
  return t == null ? n : e(t);
}
const S = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), Kn = (t) => (n) => S(t, n), wc = (t) => t._2, Nc = (t) => t._1, wy = function(t) {
  return function() {
    return t;
  };
}, Ny = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Bi.pure(e(r))();
  },
  Functor0: () => Cy
}, Bi = { pure: wy, Apply0: () => Ny }, Cy = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Jy = function(t) {
  return function() {
    console.log(t);
  };
}, a_ = function(t) {
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
}, Pt = (t, n) => ({ tag: t, _1: n }), by = (t) => Pt("Left", t), eh = (t) => Pt("Right", t), ky = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Pt("Left", n._1);
    if (n.tag === "Right")
      return Pt("Right", t(n._1));
    f();
  }
}, rh = {
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
  Functor0: () => ky
}, Ly = {
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
  Apply0: () => rh
}, Sy = { pure: eh, Apply0: () => rh }, oh = { Applicative0: () => Sy, Bind1: () => Ly }, Ey = (t) => t, Py = { map: (t) => (n) => t(n) }, ih = { apply: (t) => (n) => t(n), Functor0: () => Py }, Ay = { bind: (t) => (n) => n(t), Apply0: () => ih }, Ry = { pure: Ey, Apply0: () => ih }, Xe = { Applicative0: () => Ry, Bind1: () => Ay }, os = (t, n) => ({ tag: t, _1: n }), ll = (t) => os("Loop", t), Fy = (t) => os("Done", t), Gy = {
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
  Monad0: () => Xe
}, Iy = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, By = function(t) {
  return function() {
    return t;
  };
}, Dy = function(t) {
  return function(n) {
    return function() {
      return n(t())();
    };
  };
}, zy = { map: Iy }, Hy = { Applicative0: () => gl, Bind1: () => Wy }, Wy = { bind: Dy, Apply0: () => sh }, sh = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return gl.pure(e(r))();
  },
  Functor0: () => zy
}, gl = { pure: By, Apply0: () => sh }, Qy = {
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
  Monad0: () => Hy
}, Oy = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, qy = function(t, n, e, r) {
  return e >= 0 && e < r.length ? t(r[e]) : n;
}, _l = function(t) {
  return t.length;
}, Xy = function(t, n, e) {
  return e.length > 0 ? t(e.pop()) : n;
}, My = function(t, n) {
  return n.push(t);
}, Uy = /* @__PURE__ */ Oy(My), Yy = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), Ky = (t) => (n) => (e) => () => {
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
}, Vy = (t) => (n) => () => {
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
}, Qt = function(t) {
  return function(n) {
    for (var e = n.length, r = Array(e), o = 0; o < e; o++)
      r[o] = t(o)(n[o]);
    return r;
  };
};
var dl = function(t) {
  return function(n) {
    return t === n;
  };
};
const jy = dl, Zy = dl, Di = dl, bu = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, Zr = { eq: Di }, tx = { eq: Zy }, qo = { eq: jy };
var hl = function(t) {
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
const nx = hl, ex = hl, rx = hl, F = { compare: /* @__PURE__ */ rx(jn)(Te)(Zn), Eq0: () => Zr }, st = { compare: /* @__PURE__ */ ex(jn)(Te)(Zn), Eq0: () => tx }, ct = { compare: /* @__PURE__ */ nx(jn)(Te)(Zn), Eq0: () => qo }, ko = function(t) {
  return t;
}, ox = /* @__PURE__ */ (function() {
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
            function c(l, d) {
              switch (d - l) {
                case 0:
                  return s([]);
                case 1:
                  return i(t)(u(a[l]));
                case 2:
                  return o(i(n)(u(a[l])))(u(a[l + 1]));
                case 3:
                  return o(o(i(e)(u(a[l])))(u(a[l + 1])))(u(a[l + 2]));
                default:
                  var _ = l + Math.floor((d - l) / 4) * 2;
                  return o(i(r)(c(l, _)))(c(_, d));
              }
            }
            return c(0, a.length);
          };
        };
      };
    };
  };
})(), ix = (t) => t, Lo = {
  traverse: (t) => {
    const n = t.Apply0();
    return ox(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => Lo.traverse(t)(ix),
  Functor0: () => xy,
  Foldable1: () => qt
}, Zt = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var sx = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, ux = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const ci = typeof Array.prototype.fill == "function" ? sx : ux, Xt = /* @__PURE__ */ (function() {
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
}, uh = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, bo = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, ah = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, ch = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, Xo = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, un = function(t) {
  return t.slice().reverse();
}, De = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, _t = function(t, n) {
  return n.filter(t);
}, ax = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, cx = /* @__PURE__ */ (function() {
  function t(n, e, r, o, i, s) {
    var u, a, c, l, d, _, g;
    for (u = i + (s - i >> 1), u - i > 1 && t(n, e, o, r, i, u), s - u > 1 && t(n, e, o, r, u, s), a = i, c = u, l = i; a < u && c < s; )
      d = o[a], _ = o[c], g = e(n(d)(_)), g > 0 ? (r[l++] = _, ++c) : (r[l++] = d, ++a);
    for (; a < u; )
      r[l++] = o[a++];
    for (; c < s; )
      r[l++] = o[c++];
  }
  return function(n, e, r) {
    var o;
    return r.length < 2 ? r : (o = r.slice(0), t(n, e, o, r.slice(0), 0, r.length), o);
  };
})(), Ft = function(t, n, e) {
  return e.slice(t, n);
}, Gn = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, sn = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, pl = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, Bt = (t) => (n) => cx(
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
), fx = (t) => (n) => Bt((e) => (r) => t.compare(n(e))(n(r))), Lt = (t) => (n) => (() => {
  const e = Uy(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), ur = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, x;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? T("Just", { init: Ft(0, t.length - 1 | 0, t), last: t[n] }) : x;
}, lx = (t) => (n) => (e) => t >= 0 && t < e.length ? Xo(Ht, x, t, n(e[t]), e) : x, Ur = (t) => (n) => {
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
      s = !1, u = x;
    }
    return u;
  })(0);
  if (r.tag === "Just")
    return r._1 === 0 ? { init: [], rest: n } : { init: Ft(0, r._1, n), rest: Ft(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  f();
}, ls = (t) => (n) => {
  const e = Bt((r) => (o) => t(r._2)(o._2))(Qt(Kn)(n));
  return 0 < e.length ? B(wc)(fx(ct)(Nc)((() => {
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
}, gx = (t) => (n) => {
  const e = [], o = Yy(
    (i) => i >= 0 && i < n.length ? T("Just", n[i]) : x,
    { value: 0 }
  );
  return Vy(o)((i) => () => {
    const s = [];
    s.push(i), Ky(t(i))(o)(s)(), e.push(s);
  })(), e;
}, Vt = (t) => (n) => {
  const e = bo(Ht, x, t, n);
  return e.tag === "Just" ? T("Just", n[e._1]) : x;
}, Ks = (t) => (n) => _t(t, n), Se = (t) => (n) => (e) => {
  const r = bo(Ht, x, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, Cc = (t) => (n) => wt(n)(t), Tt = (t) => Cc((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), ml = isFinite;
function _x(t, n, e, r) {
  var o = parseFloat(t);
  return n(o) ? e(o) : r;
}
const $n = Math.abs, dx = Math.acos, mi = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, Jc = Math.ceil, ie = Math.cos, gs = Math.exp, ar = Math.floor, Ta = Math.log, hx = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, _s = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, Ge = Math.round, se = Math.sin, _e = Math.sqrt, px = Math.tan, mx = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, tt = function(t) {
  return t;
}, $x = function(t) {
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
}, yx = /* @__PURE__ */ $x(Ht)(x), xx = /* @__PURE__ */ yx(10), fh = /* @__PURE__ */ mx(Ht)(x), mn = (t) => {
  if (!ml(t))
    return 0;
  if (t >= tt(2147483647))
    return 2147483647;
  if (t <= tt(-2147483648))
    return -2147483648;
  const n = fh(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, vx = (t, n) => ({ tag: "NonEmpty", _1: t, _2: n }), xt = (t, n, e) => ({ tag: t, _1: n, _2: e }), R = /* @__PURE__ */ xt("Nil"), _n = {
  foldr: (t) => (n) => {
    const e = _n.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, a = s, c = !0, l;
      for (; c; ) {
        const d = u, _ = a;
        if (_.tag === "Nil") {
          c = !1, l = d;
          continue;
        }
        if (_.tag === "Cons") {
          u = xt("Cons", _._1, d), a = _._2;
          continue;
        }
        f();
      }
      return l;
    })(R);
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
    return (e) => _n.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, Tx = function(t) {
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
}, wx = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, Nx = { unfoldr1: /* @__PURE__ */ Tx(th)(wx)(Nc)(wc) }, Cx = function(t) {
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
}, Jx = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, Re = {
  unfoldr: /* @__PURE__ */ Cx(th)(Jx)(Nc)(wc),
  Unfoldable10: () => Nx
}, nn = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), Ee = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Uu = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), c_ = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), z = /* @__PURE__ */ nn("Leaf"), Cr = /* @__PURE__ */ Ee("IterLeaf"), Dn = (t, n, e, r) => {
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
}, Ce = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? nn("Node", 1, 1, t, n, z, z) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? Dn(r._5._3, r._5._4, Dn(t, n, e, r._5._5), Dn(r._3, r._4, r._5._6, r._6)) : Dn(r._3, r._4, Dn(t, n, e, r._5), r._6) : Dn(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? Dn(r._5._3, r._5._4, Dn(t, n, e, r._5._5), Dn(r._3, r._4, r._5._6, r._6)) : Dn(r._3, r._4, Dn(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? Dn(e._6._3, e._6._4, Dn(e._3, e._4, e._5, e._6._5), Dn(t, n, e._6._6, r)) : Dn(e._3, e._4, e._5, Dn(t, n, e._6, r)) : Dn(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? Dn(e._6._3, e._6._4, Dn(e._3, e._4, e._5, e._6._5), Dn(t, n, e._6._6, r)) : Dn(e._3, e._4, e._5, Dn(t, n, e._6, r)) : Dn(t, n, e, r);
  f();
}, ds = (t, n, e) => {
  if (e.tag === "Leaf")
    return Uu(x, z, z);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = ds(t, n, e._5);
      return Uu(o._1, o._2, Ce(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = ds(t, n, e._6);
      return Uu(o._1, Ce(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Uu(T("Just", e._4), e._5, e._6);
  }
  f();
}, lh = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return c_(t, n, e);
  if (r.tag === "Node") {
    const o = lh(r._3, r._4, r._5, r._6);
    return c_(o._1, o._2, Ce(t, n, e, o._3));
  }
  f();
}, Ns = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = lh(t._3, t._4, t._5, t._6);
    return Ce(e._1, e._2, e._3, n);
  }
  f();
}, Er = (t, n, e) => {
  if (n.tag === "Leaf")
    return z;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = ds(t, e._3, n);
    return Ns(Er(t, r._2, e._5), Er(t, r._3, e._6));
  }
  f();
}, wa = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return z;
  if (r.tag === "Node") {
    const o = ds(t, r._3, e), i = wa(t, n, o._2, r._5), s = wa(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Ce(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Ns(i, s);
  }
  f();
}, ee = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = ds(t, r._3, e), i = ee(t, n, o._2, r._5), s = ee(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Ce(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Ce(r._3, r._4, i, s);
  }
  f();
}, gh = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return z;
    if (o.tag === "Node") {
      const i = t.compare(e)(o._3);
      if (i === "LT")
        return Ce(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return Ce(o._3, o._4, o._5, r(o._6));
      if (i === "EQ") {
        const s = n(o._4);
        if (s.tag === "Nothing")
          return Ns(o._5, o._6);
        if (s.tag === "Just")
          return nn("Node", o._1, o._2, o._3, s._1, o._5, o._6);
      }
    }
    f();
  };
  return r;
}, bx = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return z;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return Ce(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return Ns(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, kx = (t) => (n) => (r) => {
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
        let d = c, _ = l, g = !0, p;
        for (; g; ) {
          const $ = d, h = _;
          if (h.tag === "Leaf") {
            g = !1, p = $;
            continue;
          }
          if (h.tag === "Node") {
            if (h._6.tag === "Leaf") {
              d = Ee("IterEmit", h._3, h._4, $), _ = h._5;
              continue;
            }
            d = Ee("IterEmit", h._3, h._4, Ee("IterNode", h._6, $)), _ = h._5;
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
}, Jr = /* @__PURE__ */ kx((t, n, e) => T("Just", S(S(t, n), e)))((t) => x), Ot = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return nn("Node", 1, 1, e, r, z, z);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return Ce(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return Ce(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return nn("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, rt = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return nn("Node", 1, 1, n, e, z, z);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return Ce(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return Ce(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return nn("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, dn = (t) => (n) => n.foldl((e) => (r) => rt(t)(r._1)(r._2)(e))(z), hs = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return z;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return Ce(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return Ce(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return Ns(r._5, r._6);
    }
    f();
  };
  return e;
}, _h = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = ds(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Ns(i._2, i._3);
    if (s.tag === "Just")
      return Ce(r, s._1, i._2, i._3);
    f();
  };
}, An = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, mr = function(t) {
  return function(n) {
    return t + n;
  };
}, No = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, Sn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, Lx = { append: Sn }, Sx = { mempty: [], Semigroup0: () => Lx };
function $l(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const Ex = $l(Number.prototype.toPrecision), Px = $l(Number.prototype.toFixed), Ax = $l(Number.prototype.toExponential), bc = (t, n) => ({ tag: t, _1: n }), kc = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Lc = (t) => {
  if (t.tag === "Precision")
    return Ex(t._1);
  if (t.tag === "Fixed")
    return Px(t._1);
  if (t.tag === "Exponential")
    return Ax(t._1);
  f();
};
function f_(t) {
  return new Error(t);
}
function ku(t) {
  return function() {
    return t.getContext("2d");
  };
}
function dh(t) {
  return function() {
    return t.width;
  };
}
function hh(t) {
  return function() {
    return t.height;
  };
}
function Sc(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function Ec(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function yl(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function xl(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function Rx(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function wf(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function Nf(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function Fx(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function Gx(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function ph(t) {
  return function() {
    t.beginPath();
  };
}
function vl(t) {
  return function() {
    t.stroke();
  };
}
function Tl(t) {
  return function() {
    t.fill();
  };
}
function Ix(t) {
  return function() {
    t.clip();
  };
}
function Qs(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function mh(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function $h(t) {
  return function() {
    t.closePath();
  };
}
function Bx(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function wl(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Na(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function l_(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function Dx(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function zx(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function Hx(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function Pc(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function Nl(t) {
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
function yh(t) {
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
function Os(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function Wx(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const xh = (t) => t, Cl = (t) => t, Jl = (t) => t, bl = (t) => t, Ac = (t) => t, Qx = /* @__PURE__ */ Ac("BaselineTop"), kl = /* @__PURE__ */ Ac("BaselineMiddle"), Ox = /* @__PURE__ */ Ac("BaselineAlphabetic"), qx = /* @__PURE__ */ Ac("BaselineBottom"), Xx = /* @__PURE__ */ bl("AlignLeft"), Mx = /* @__PURE__ */ bl("AlignRight"), Ll = /* @__PURE__ */ bl("AlignCenter"), Sl = /* @__PURE__ */ Jl("BevelJoin"), El = /* @__PURE__ */ Jl("RoundJoin"), Pl = /* @__PURE__ */ Jl("MiterJoin"), Al = /* @__PURE__ */ Cl("Round"), Rl = /* @__PURE__ */ Cl("Square"), Fl = /* @__PURE__ */ Cl("Butt"), Ux = /* @__PURE__ */ xh("SourceOver"), Yx = /* @__PURE__ */ xh("Difference"), Gl = (t) => (n) => Hx(t)((() => {
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
})()), Il = (t) => (n) => zx(t)((() => {
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
})()), Bl = (t) => (n) => {
  if (n === "BevelJoin")
    return Nf(t)("bevel");
  if (n === "RoundJoin")
    return Nf(t)("round");
  if (n === "MiterJoin")
    return Nf(t)("miter");
  f();
}, Dl = (t) => (n) => {
  if (n === "Round")
    return wf(t)("round");
  if (n === "Square")
    return wf(t)("square");
  if (n === "Butt")
    return wf(t)("butt");
  f();
}, g_ = (t) => (n) => Fx(t)((() => {
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
})()), Kx = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldrWithIndex((o) => {
    const i = r(o);
    return (s) => {
      const u = i(s);
      return (a) => n.apply(n.Functor0().map((c) => cl)(u))(a);
    };
  })(t.pure());
}, Vx = (t) => {
  const n = Kx(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, zl = {
  foldrWithIndex: (t) => (n) => {
    const e = fs((o) => {
      const i = o._1, s = o._2;
      return (u) => t(i)(s)(u);
    })(n), r = Qt(Kn);
    return (o) => e(r(o));
  },
  foldlWithIndex: (t) => (n) => {
    const e = N((o) => (i) => t(i._1)(o)(i._2))(n), r = Qt(Kn);
    return (o) => e(r(o));
  },
  foldMapWithIndex: (t) => {
    const n = t.mempty;
    return (e) => zl.foldrWithIndex((r) => (o) => (i) => t.Semigroup0().append(e(r)(o))(i))(n);
  },
  Foldable0: () => qt
}, Ae = {
  foldr: (t) => (n) => {
    const e = _n.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, xt("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, R);
    })());
  }
}, jx = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => ee(e, ne, r, o);
    })()
  };
  return { mempty: z, Semigroup0: () => n };
}, Vs = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, _r = function(t) {
  return t.join("");
}, Me = function(t) {
  return t.split("");
}, yr = function(t) {
  return t;
}, Nr = function(t) {
  return t.length;
}, __ = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, ps = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, vh = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, Zx = (t) => (n) => {
  const e = vh(Nr(n) - Nr(t) | 0)(n);
  return e.after === t ? T("Just", e.before) : x;
}, cr = (t) => (n) => {
  const e = vh(Nr(t))(n);
  return e.before === t ? T("Just", e.after) : x;
}, Th = (t) => ({
  bind: (n) => (e) => t.Bind1().bind(n)((r) => {
    if (r.tag === "Left")
      return t.Applicative0().pure(Pt("Left", r._1));
    if (r.tag === "Right")
      return e(r._1);
    f();
  }),
  Apply0: () => wh(t)
}), wh = (t) => {
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
      const r = Th(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Hl(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Hl = (t) => ({ pure: (n) => t.Applicative0().pure(Pt("Right", n)), Apply0: () => wh(t) }), tv = (t) => {
  const n = { Applicative0: () => Hl(t), Bind1: () => Th(t) };
  return { throwError: (e) => t.Applicative0().pure(Pt("Left", e)), Monad0: () => n };
};
function d_(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const nv = (t, n, e) => ({ tag: t, _1: n, _2: e }), ev = (t) => (n) => (e) => d_(e) === n ? Hl(t).pure(e) : tv(t).throwError(vx(nv("TypeMismatch", n, d_(e)), R)), rv = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, ov = function(t) {
  return t();
}, Cs = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, Lu = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, Js = function(n) {
  return function(e) {
    return function(r) {
      return function(o) {
        return function() {
          return n(e, r, o);
        };
      };
    };
  };
}, Wl = function(n) {
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
}, iv = function(n) {
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
}, sv = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, uv = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, bi = (t) => BigInt(t), av = (t) => Number(t), la = (t) => (n) => t + n, ga = (t) => (n) => t * n, f0 = (t) => (n) => t - n, Nh = 0n, Ca = 1n, Ch = (t) => (n) => t ^ n, su = (t) => (n) => t & n, Ql = (t) => (n) => t << n, l0 = (t) => (n) => t >> n, cv = (t) => (n) => t == n, fv = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, lv = { eq: cv }, h_ = {
  compare: (t) => (n) => {
    const e = fv(t)(n);
    return e === 1 ? Zn : e === 0 ? Te : jn;
  },
  Eq0: () => lv
}, gv = /* @__PURE__ */ sv(Ht)(x), _v = /* @__PURE__ */ uv(Ht)(x), Ja = function(t) {
  throw new Error(t);
}, Jh = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = st.compare(n._1)(e._1);
      return r === "LT" ? jn : r === "GT" ? Zn : st.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), dv = (t) => (n) => $n(t._1 - n._1) + $n(t._2 - n._2), zi = (t) => t, Rc = (t) => t, qn = /* @__PURE__ */ Rc("North"), Xn = /* @__PURE__ */ Rc("South"), uo = /* @__PURE__ */ Rc("East"), ao = /* @__PURE__ */ Rc("West"), xo = /* @__PURE__ */ zi("Rectangle"), p_ = /* @__PURE__ */ zi("Cylinder"), hv = /* @__PURE__ */ zi("Parallelogram"), pv = /* @__PURE__ */ zi("Diamond"), mv = /* @__PURE__ */ zi("Ellipse"), m_ = /* @__PURE__ */ zi("Document"), $v = /* @__PURE__ */ zi("Cloud"), bh = /* @__PURE__ */ N(mr)(0), yv = (t) => (n) => (e) => {
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
}, Bo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ba = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $_ = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, xv = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, ms = (t) => (n) => {
  const e = Gn(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const a = u.y - s.y, c = u.x - s.x;
        return _e(c * c + a * a);
      })()
    }),
    t,
    Ft(1, t.length, t)
  ), r = bh(B((s) => s.len)(e)), o = yv(0)(r)(n * r), i = (s) => (u) => (a) => {
    let c = s, l = u, d = a, _ = !0, g;
    for (; _; ) {
      const p = c, $ = l, h = d, m = Rt((y) => x, (y) => (v) => T("Just", { head: y, tail: v }), p);
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
        c = m._1.tail, l = $ - m._1.head.len, d = h;
        continue;
      }
      f();
    }
    return g;
  };
  return 0 < t.length ? T("Just", i(e)(o)(t[0])) : x;
}, vv = (t) => (n) => {
  const e = Bo(1e-6)(t.scale);
  return { x: (n.x - t.tx) / e, y: (n.y - t.ty) / e, w: n.w / e, h: n.h / e };
}, Fc = (t) => bh(Gn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return _e(o * o + r * r);
  },
  t,
  Ft(1, t.length, t)
)), Ol = { scale: 1, tx: 0, ty: 0 }, Tv = (t) => (n) => {
  const e = Bo(4)(0.15 * ba(n.w)(n.h)), r = Bo(1)(t.w), o = Bo(1)(t.h), i = Bo(1)(n.w - 2 * e), s = Bo(1)(n.h - 2 * e), u = 0.55 * ba(i / r)(s / o);
  return { scale: u, tx: n.x + e + (i - r * u) / 2 - t.x * u, ty: n.y + e + (s - o * u) / 2 + 2.5 - t.y * u };
}, Cn = (t) => {
  const n = Rt(
    (e) => x,
    (e) => (r) => T("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, xt("Cons", r._4, e(r._6, o)));
          f();
        };
        return wt(Xt(_n.foldr, e(t.nodes, R)))(xv);
      })(),
      ...De((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, xt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Xt(_n.foldr, e(t.edges, R));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: ba(r.minX)(o.x), minY: ba(r.minY)(o.y), maxX: Bo(r.maxX)(o.x), maxY: Bo(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, wv = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, a = i, c = !0, l;
  for (; c; ) {
    const d = s, _ = u, g = a, p = Rt(($) => x, ($) => (h) => T("Just", { head: $, tail: h }), _);
    if (p.tag === "Nothing") {
      c = !1, l = g;
      continue;
    }
    if (p.tag === "Just") {
      const $ = $_(p._1.head)(d.interiors);
      if ($.tag === "Nothing") {
        c = !1, l = g;
        continue;
      }
      if ($.tag === "Just") {
        s = $._1, u = p._1.tail, a = (() => {
          const h = Tv(Cn($._1.layout))((() => {
            const m = $_(p._1.head)(d.layout.nodes);
            if (m.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: xo };
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
})(t)(n)(Ol), Nv = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Cv = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, _a = (t) => (n) => (e) => {
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
}, Jv = (t) => (n) => (e) => (r) => {
  const o = Cn(n);
  return e <= 0 || r <= 0 || o.w <= 0 || o.h <= 0 ? 1 : t ? Nv(o.w / e)(o.h / r) : Cv(o.w / e)(o.h / r);
}, kh = (t) => (n) => (e) => {
  const r = t.widthPx / t.heightPx, o = e.w / e.h;
  if (t.widthPx <= 0 || t.heightPx <= 0) {
    const s = 1 / _a(0.05)(1)(n);
    return { w: e.w * s, h: e.h * s };
  }
  if (r > o) {
    const s = 1 / _a(0.05)(1)(n);
    return { w: e.h * r * s, h: e.h * s };
  }
  const i = 1 / _a(0.05)(1)(n);
  return { w: e.w * i, h: e.w / r * i };
}, y_ = (t) => (n) => (e) => (r) => (o) => {
  const i = t + o / 2, s = t + n - o / 2, u = t + n / 2, a = e + r / 2;
  return o >= n ? u : _a(i)(s)(a);
}, Lh = (t) => (n) => (e) => (r) => {
  const o = Cn(t);
  return { x: y_(o.x)(o.w)(n.x)(n.w)(e), y: y_(o.y)(o.h)(n.y)(n.h)(r) };
}, js = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: Jv(t)(n)(e.w)(e.h) }), bv = (t) => (n) => (e) => (r) => {
  const o = { x: r.x - t.padding, y: r.y - t.padding, w: r.w + t.padding * 2, h: r.h + t.padding * 2 }, i = kh(n)(0.65)(o), s = Lh(e)(o)(i.w)(i.h), u = { x: s.x - i.w / 2, y: s.y - i.h / 2, w: i.w, h: i.h };
  return { focus: r, paddedFocus: o, viewport: u, camera: js(n.widthPx > 0 && n.heightPx > 0)(e)(u) };
}, kv = (t) => (n) => (e) => (r) => (o) => {
  const i = {
    x: o.x * r.scale + r.tx,
    y: o.y * r.scale + r.ty,
    w: o.w * r.scale,
    h: o.h * r.scale
  }, s = t.padding * r.scale, u = { x: i.x - s, y: i.y - s, w: i.w + s * 2, h: i.h + s * 2 }, a = kh(n)(0.7)(u), c = Lh(e)(u)(a.w)(a.h), l = { x: c.x - a.w / 2, y: c.y - a.h / 2, w: a.w, h: a.h };
  return { footprint: i, viewport: l, camera: js(n.widthPx > 0 && n.heightPx > 0)(e)(l) };
}, Lv = (t) => (n) => (e) => {
  const r = t.widthPx / t.heightPx, o = e.w / e.h;
  return t.widthPx <= 0 || t.heightPx <= 0 ? js(t.widthPx > 0 && t.heightPx > 0)(n)((() => {
    const i = e.w * 0.8, s = e.h * 0.8;
    return { x: e.x + e.w / 2 - i / 2, y: e.y + e.h / 2 - s / 2, w: i, h: s };
  })()) : r > o ? js(t.widthPx > 0 && t.heightPx > 0)(n)((() => {
    const i = e.w * 0.8, s = e.w / r * 0.8;
    return { x: e.x + e.w / 2 - i / 2, y: e.y + e.h / 2 - s / 2, w: i, h: s };
  })()) : js(t.widthPx > 0 && t.heightPx > 0)(n)((() => {
    const i = e.h * r * 0.8, s = e.h * 0.8;
    return { x: e.x + e.w / 2 - i / 2, y: e.y + e.h / 2 - s / 2, w: i, h: s };
  })());
}, Sh = (t) => t, Sv = (t, n) => ({ tag: t, _1: n }), ql = (t) => t, bs = (t, n) => ({ tag: t, _1: n }), Xl = (t, n) => ({ tag: t, _1: n }), Su = /* @__PURE__ */ ql("Animated"), Ev = /* @__PURE__ */ ql("StaticStill"), Pv = /* @__PURE__ */ ql("TitleCard"), Av = /* @__PURE__ */ Xl("First"), x_ = /* @__PURE__ */ Sh("Forward"), v_ = /* @__PURE__ */ Sh("Backward"), Rv = /* @__PURE__ */ bs("ExitNode"), Eh = /* @__PURE__ */ dn(F)(qt), Fv = (t) => fs((n) => (e) => ({
  nodes: ee(F.compare, ne, n.nodes, e.nodes),
  edges: ee(F.compare, ne, n.edges, e.edges)
}))({ nodes: z, edges: z })(t.keyframes), Gv = (t) => (n) => ({
  entering: {
    nodes: Er(F.compare, n.nodes, t.nodes),
    edges: Er(F.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: Er(F.compare, t.nodes, n.nodes),
    edges: Er(F.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: wa(F.compare, ne, t.nodes, n.nodes),
    edges: wa(F.compare, ne, t.edges, n.edges)
  }
}), ka = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $s = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, La = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, g0 = (t) => (e) => {
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
}, Iv = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), Bv = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), Dv = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), Ph = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, T_ = /* @__PURE__ */ dn(F)(qt), Ml = (t) => {
  const n = Rt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: ka(r.minX)(o.x), minY: ka(r.minY)(o.y), maxX: $s(r.maxX)(o.x), maxY: $s(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, zv = (t) => (n) => (e) => Iv(wt(Xt(Ae.foldr, e))((r) => {
  const o = La(r)(t);
  if (o.tag === "Just")
    return _t((i) => !g0(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), Hv = (t) => t.kind.tag === "SendToken" ? T("Just", S(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : x, Wv = (t) => t.tag === "DataFlow" ? Tt(Hv)(t._1.events) : [], Qv = (t) => (n) => Bv(Tt((e) => g0(e._2.source)(n) || g0(e._2.target)(n) ? T("Just", e._1) : x)(Dv(t))), Yr = (t) => {
  const n = Rt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: ka(r.minX)(o.x), minY: ka(r.minY)(o.y), maxX: $s(r.maxX)(o.x + o.w), maxY: $s(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, uu = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return Cn(t);
  const r = Qv(n)(e), o = [
    ...Tt((i) => {
      const s = Ph(i)(t.nodes);
      return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
    })(Xt(
      Ae.foldr,
      ee(F.compare, ne, e, zv(n)(e)(r))
    )),
    ...Tt((i) => {
      const s = La(i)(t.edges);
      return s.tag === "Just" ? T("Just", Ml(s._1)) : x;
    })(Xt(Ae.foldr, r))
  ];
  return o.length === 0 ? Cn(t) : Yr(o);
}, Sa = (t) => (n) => (e) => {
  const r = [
    ...Tt((o) => o)([
      (() => {
        const o = La(e)(t.edges);
        return o.tag === "Just" ? T("Just", Ml(o._1)) : x;
      })()
    ]),
    ...(() => {
      const o = La(e)(n);
      if (o.tag === "Just")
        return Tt((i) => {
          const s = Ph(i)(t.nodes);
          return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? uu(t)(n)(z) : Yr(r);
}, fr = (t) => (n) => {
  const e = Cn(t), r = e.w / $s(1e-4)(n.zoom), o = e.h / $s(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, Ov = (t) => ee(
  F.compare,
  ne,
  T_(B((n) => S(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  T_(wt(t.scenes)(Wv))
), Ul = (t) => t, qv = (t) => t, Ah = /* @__PURE__ */ Ul("Linear"), Wr = /* @__PURE__ */ Ul("EaseInOutQuad"), Xv = /* @__PURE__ */ Ul("SpringBouncy"), au = (t) => (n) => (e) => {
  const r = _e(1 - n * n), o = t * r;
  return 1 - gs(-n * t * e) * (ie(o * e) + n / r * se(o * e));
}, Mv = (t) => {
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
}, Ea = (t) => (n) => (() => {
  if (t === "Linear")
    return qv;
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
    return (e) => e >= 1 ? 1 : 1 - _s(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * gs(-6 * e);
  if (t === "SpringBouncy")
    return au(6)(0.7);
  f();
})()(Mv(n)), Gc = (t) => t, Rh = (t) => t, Fh = (t) => t, or = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ic = (t) => (n) => (e) => {
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
}, Pa = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Uv = (t) => (n) => {
  const e = ct.compare(t._1)(n._1);
  return e === "LT" ? jn : e === "GT" ? Zn : st.compare(t._2)(n._2);
}, Yv = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Kv = /* @__PURE__ */ Fh("Hold"), Vv = /* @__PURE__ */ Fh("Gap"), ir = /* @__PURE__ */ Rh("LinearLerp"), Ro = /* @__PURE__ */ Rh("ComposedLogLerp"), _0 = /* @__PURE__ */ Gc("Overview"), qs = /* @__PURE__ */ Gc("DiveHome"), Fo = /* @__PURE__ */ Gc("DiveTransition"), Bc = /* @__PURE__ */ Gc("ActionFocus"), jv = (t) => (n) => (e) => {
  const r = t.widthPx > 0 && t.heightPx > 0, o = t.widthPx / or(1e-6)(t.heightPx), i = Cn(n), s = i.w / or(1e-6)(e.zoom), u = i.h / or(1e-6)(e.zoom), a = s / or(1e-6)(u), c = r && o < a ? s / o : u, l = r && o > a ? u * o : s;
  return { x: e.center.x - l / 2, y: e.center.y - c / 2, w: l, h: c };
}, d0 = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = _e(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return Ic(t.minTransition)(t.maxTransition)(or(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, Zv = (t) => ({ startT: t.startT, endT: t.endT, fromCam: t.fromCam, toCam: t.toCam, easing: t.easing, interp: t.interp, intent: t.intent }), tT = /* @__PURE__ */ N((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Lt(t)(n);
})([]), Aa = (t) => (n) => (e) => {
  const r = Ic(0)(1)((e - t) / or(1e-6)(n - t));
  return r * r * r * (r * (r * 6 - 15) + 10);
}, nT = (t) => (n) => {
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
}, eT = (t) => (n) => t.tag === "Just" ? n.tag === "Just" && nT(t._1)(n._1) : t.tag === "Nothing" && n.tag === "Nothing", w_ = (t) => (n) => (e) => (r) => ({
  center: { x: r.center.x * e.scale + e.tx, y: r.center.y * e.scale + e.ty },
  zoom: r.zoom * Cn(t).w / or(1e-6)(e.scale * Cn(n).w)
}), h0 = (t) => (n) => (e) => (r) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: gs((() => {
    const o = Ta(or(1e-6)(t.zoom));
    return o + (Ta(or(1e-6)(n.zoom)) - o) * r;
  })())
}), rT = /* @__PURE__ */ N((t) => (n) => {
  if (t.tag === "Nothing")
    return T("Just", n);
  if (t.tag === "Just")
    return n.endT > t._1.endT ? T("Just", n) : T("Just", t._1);
  f();
})(x), Gh = (t) => (n) => (e) => (r) => {
  if (t <= 0)
    return r;
  const o = gs(-t * n);
  return {
    center: { x: r.center.x + (e.center.x - r.center.x) * o, y: r.center.y + (e.center.y - r.center.y) * o },
    zoom: gs((() => {
      const i = Ta(or(1e-6)(r.zoom));
      return i + (Ta(or(1e-6)(e.zoom)) - i) * o;
    })())
  };
}, p0 = (t) => (n) => (e) => n.zoom >= t.zoom ? Aa(0.3)(1)(e) : Aa(0)(0.7)(e), oT = { widthPx: 0, heightPx: 0 }, Dc = {
  padding: 24,
  easing: Wr,
  minimumReadableLabelPx: 11,
  minimumVisibleLabelPx: 5,
  labelBasePx: 11,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 0
}, Yi = (t) => (n) => (e) => (r) => (o) => {
  const i = jv(n)(e)(r), s = o.x - t.padding, u = o.y - t.padding;
  return s >= i.x && u >= i.y && s + o.w + t.padding * 2 <= i.x + i.w && u + o.h + t.padding * 2 <= i.y + i.h;
}, iT = (t) => (n) => (e) => (r) => (o) => zl.foldlWithIndex((i) => (s) => (u) => {
  const a = (() => {
    if (u.kind === "Hold") {
      const c = (() => {
        if (i === 0)
          return u.toCam;
        if (u.focus.tag === "Just") {
          if (u.intent === "ActionFocus")
            return Yi(t)(n)(e)(s.prev)(u.focus._1) ? s.prev : Yi(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1) ? { ...u.toCam, center: s.prev.center } : {
              ...u.toCam,
              center: {
                ...u.toCam.center,
                x: (() => {
                  const l = Cn(e).w / or(1e-6)(u.toCam.zoom);
                  if (l <= 0)
                    return u.toCam.center.x;
                  const d = u.focus._1.x + u.focus._1.w / 2, _ = n.widthPx <= 0 ? 0 : Pa(l / 4)(6 * l / n.widthPx), g = s.prev.center.x + l / 2 - _, p = d < s.prev.center.x - l / 2 + _ ? d - _ + l / 2 : d > g ? d + _ - l / 2 : s.prev.center.x, $ = Cn(e);
                  return l >= $.w ? $.x + $.w / 2 : Ic($.x + l / 2)($.x + $.w - l / 2)(p);
                })()
              }
            };
          if (Yi(t)(n)(e)(s.prev)(u.focus._1))
            return s.prev;
          if (Yi(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
        }
        return u.toCam;
      })();
      return { startT: u.startT, endT: u.endT, fromCam: c, toCam: c, easing: u.easing, interp: ir, focus: u.focus, intent: u.intent };
    }
    if (u.kind === "Gap")
      return {
        startT: u.startT,
        endT: u.endT,
        fromCam: s.prev,
        toCam: (() => {
          const c = i + 1 | 0, l = bo(Ht, x, (d) => d.kind === "Hold", c < 1 ? o : Ft(c, o.length, o));
          if (l.tag === "Just") {
            const d = (i + 1 | 0) + l._1 | 0;
            return d >= 0 && d < o.length ? (() => {
              if (o[d].focus.tag === "Just")
                return Yi(t)(n)(e)(s.prev)(o[d].focus._1);
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
        interp: ir,
        focus: x,
        intent: u.intent
      };
    f();
  })();
  return { acc: Lt(s.acc)(a), prev: a.toCam };
})({ acc: [], prev: r })(o).acc, sT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (a, c) => Pa(d0(t)(a.toCam)(c.toCam))(a.endT - a.startT), u = N((a) => (c) => {
    if (a.pending.tag === "Nothing")
      return { acc: a.acc, pending: T("Just", c) };
    if (a.pending.tag === "Just") {
      if (!(c.fromCam.zoom === c.toCam.zoom && c.fromCam.center.x === c.toCam.center.x && c.fromCam.center.y === c.toCam.center.y) || (() => {
        if (c.focus.tag === "Just")
          return Yi(t)(n)(e)(a.pending._1.toCam)(c.focus._1);
        if (c.focus.tag === "Nothing")
          return !1;
        f();
      })() || (() => {
        const l = a.pending._1.toCam.center.x - c.toCam.center.x;
        return (l < 0 ? -l < 8 : l < 8) && (() => {
          const d = a.pending._1.toCam.center.y - c.toCam.center.y;
          return (d < 0 ? -d < 8 : d < 8) && (() => {
            const _ = a.pending._1.toCam.zoom - c.toCam.zoom;
            return _ < 0 ? -_ < 0.08 : _ < 0.08;
          })();
        })();
      })() || s(a.pending._1, c) <= 0)
        return { acc: Lt(a.acc)(a.pending._1), pending: T("Just", c) };
      if ((() => {
        const l = c.startT;
        return sn((d) => $n(d - l) < 1e-4, o);
      })()) {
        const l = {
          startT: c.startT,
          endT: c.startT + Pa(d0(t)(a.pending._1.toCam)(c.toCam))(c.endT - c.startT),
          fromCam: a.pending._1.toCam,
          toCam: c.toCam,
          easing: c.easing,
          interp: ir,
          focus: c.focus,
          intent: c.intent
        }, d = { ...c, startT: l.endT, fromCam: c.toCam };
        return d.startT < d.endT ? { acc: Lt(Lt(a.acc)(a.pending._1))(l), pending: T("Just", d) } : { acc: Lt(a.acc)(a.pending._1), pending: T("Just", l) };
      }
      return {
        acc: Lt(Lt(a.acc)({ ...a.pending._1, endT: c.startT - s(a.pending._1, c) }))({
          startT: c.startT - s(a.pending._1, c),
          endT: c.startT,
          fromCam: a.pending._1.toCam,
          toCam: c.toCam,
          easing: c.easing,
          interp: ir,
          focus: c.focus,
          intent: c.intent
        }),
        pending: T("Just", c)
      };
    }
    f();
  })({ acc: [], pending: x })(i);
  if (u.pending.tag === "Nothing")
    return u.acc;
  if (u.pending.tag === "Just")
    return Lt(u.acc)(u.pending._1);
  f();
}, uT = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = Cn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : Pa(i.w / r)(i.h / o);
}, aT = (t) => (n) => (e) => n.zoom >= t.zoom ? h0(t)(n)(Aa(0)(0.45)(e))(p0(t)(n)(e)) : h0(t)(n)(Aa(0.55)(1)(e))(p0(t)(n)(e)), cT = (t) => (n) => (e) => {
  const r = e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT), o = Ea(e.easing)(Ic(0)(1)(r));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * o, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * o },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * o
    };
  if (e.interp === "LogLerp")
    return h0(e.fromCam)(e.toCam)(o)(o);
  if (e.interp === "ComposedLogLerp")
    return aT(e.fromCam)(e.toCam)(r);
  f();
}, fT = (t) => (n) => {
  if (t.tag === "Just") {
    if (n.tag === "Just")
      return T("Just", Yr([t._1, n._1]));
    if (n.tag === "Nothing")
      return T("Just", t._1);
    f();
  }
  if (t.tag === "Nothing") {
    if (n.tag === "Just")
      return T("Just", n._1);
    if (n.tag === "Nothing")
      return x;
  }
  f();
}, lT = /* @__PURE__ */ N((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? T("Just", t[e]) : x;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (!(r._1.intent === "ActionFocus" || n.intent === "ActionFocus") || (r._1.intent === "Overview" ? n.intent === "Overview" : r._1.intent === "DiveHome" ? n.intent === "DiveHome" : r._1.intent === "DiveTransition" ? n.intent === "DiveTransition" : r._1.intent === "ActionFocus" && n.intent === "ActionFocus") && eT(r._1.focus)(n.focus)) && (() => {
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
    return o < 1 ? [] : Ft(0, o, t);
  })())({ ...r._1, endT: n.endT, focus: fT(r._1.focus)(n.focus) }) : Lt(t)(n);
})([]), gT = (t) => {
  const n = Bt((e) => (r) => Uv(S(
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
  ))(S(
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
  return 0 < n.length ? T("Just", n[0]) : x;
}, m0 = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: or(r)(uT(n)(e)(t.padding)) }), _T = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = m0(t)(e)(Cn(e))(0), u = _t(
    (c) => c >= 0 && c <= r,
    tT(Bt(st.compare)([0, r, ...o, ...wt(i)((c) => [c.startT, c.endT])]))
  ), a = (c, l) => sn((d) => d.priority >= 1, _t((d) => d.startT <= l && l < d.endT, i)) ? bv(t)(n)(e)(Yr(c)).camera : m0(t)(e)(Yr(c))(0);
  return B(Zv)(sT(t)(n)(e)(s)(o)(lT(iT(t)(n)(e)(s)(Tt((c) => {
    const l = (c._1 + c._2) / 2;
    if (c._2 <= c._1)
      return x;
    const d = B((_) => _.bbox)(_t(
      (_) => _.priority === N(Yv)(0)(B((g) => g.priority)(_t(
        (g) => g.startT <= l && l < g.endT,
        i
      ))),
      _t((_) => _.startT <= l && l < _.endT, i)
    ));
    return d.length === 0 ? T(
      "Just",
      { kind: Vv, startT: c._1, endT: c._2, fromCam: s, toCam: s, easing: t.easing, focus: x, intent: _0 }
    ) : T(
      "Just",
      {
        kind: Kv,
        startT: c._1,
        endT: c._2,
        fromCam: a(d, l),
        toCam: a(d, l),
        easing: t.easing,
        focus: T("Just", Yr(d)),
        intent: sn((_) => _.priority >= 1, _t((_) => _.startT <= l && l < _.endT, i)) ? Bc : _0
      }
    );
  })(Gn(Kn, u, Ft(1, u.length, u)))))));
}, Mo = (t) => (n) => (e) => (r) => {
  const o = gT(_t((i) => r >= i.startT && r < i.endT, e));
  if (o.tag === "Just")
    return { camera: cT()(r)(o._1), intent: o._1.intent };
  if (o.tag === "Nothing") {
    const i = rT(e);
    return i.tag === "Just" && r >= i._1.endT ? { camera: i._1.toCam, intent: i._1.intent } : {
      camera: (() => {
        const s = m0(t)(n)(Cn(n))(0);
        return 0 < e.length ? e[0].fromCam : s;
      })(),
      intent: 0 < e.length ? e[0].intent : _0
    };
  }
  f();
};
function Kr(t) {
  return t.charCodeAt(0);
}
function Yl(t) {
  return String.fromCharCode(t);
}
const dT = (t) => t >= 0 && t <= 65535 ? T("Just", Yl(t)) : x, $r = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, Hi = function(t) {
  return function(n) {
    return n.split(t);
  };
}, Eu = function(t) {
  return t.trim();
}, dr = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var hT = typeof Array.from == "function", pT = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", mT = typeof String.prototype.fromCodePoint == "function", $T = typeof String.prototype.codePointAt == "function";
const yT = function(t) {
  return $T ? function(n) {
    return n.codePointAt(0);
  } : t;
}, xT = function(t) {
  return mT ? String.fromCodePoint : t;
}, vT = function(t) {
  return function(n) {
    return pT ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, TT = function(t) {
  return function(n) {
    return hT ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, zc = (t) => {
  const n = Nr(t);
  if (n === 0)
    return x;
  if (n === 1)
    return T("Just", { head: Kr(Vs(0)(t)), tail: "" });
  const e = Kr(Vs(1)(t)), r = Kr(Vs(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? T("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: ps(2)(t) }) : T("Just", { head: r, tail: ps(1)(t) });
}, wT = (t) => {
  const n = zc(t);
  return n.tag === "Just" ? T("Just", S(n._1.head, n._1.tail)) : x;
}, NT = (t) => Re.unfoldr(wT)(t), CT = (t) => {
  const n = Kr(Vs(0)(t));
  if (55296 <= n && n <= 56319 && Nr(t) > 1) {
    const e = Kr(Vs(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Ih = /* @__PURE__ */ yT(CT), ve = /* @__PURE__ */ TT(NT)(Ih), Bh = (t) => ve(t).length, Cf = (t) => yr(t >= 0 && t <= 65535 ? Yl(t) : t < 0 ? "\0" : "\uffff"), JT = (t) => t <= 65535 ? Cf(t) : Cf(rr(t - 65536 | 0, 1024) + 55296 | 0) + Cf(No(t - 65536 | 0)(1024) + 56320 | 0), bT = /* @__PURE__ */ xT(JT), Dh = (t) => (n) => {
  if (t < 1)
    return "";
  const e = zc(n);
  return e.tag === "Just" ? bT(e._1.head) + Dh(t - 1 | 0)(e._1.tail) : n;
}, Yn = /* @__PURE__ */ vT(Dh), kT = (t) => (n) => n === "" ? x : T("Just", Ih(n)), LT = (t) => t, zh = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Kl = (t) => (n) => t.width <= 0 || t.height <= 0 ? n : zh(t.width / t.height)(n), ST = (t) => (n) => {
  if (n.scene.tag === "Structural")
    return n.scene._1.to;
  if (n.scene.tag === "DataFlow")
    return n.scene._1.keyframe;
  if (n.scene.tag === "Hold")
    return n.scene._1;
  if (n.scene.tag === "EnterNode" || n.scene.tag === "ExitNode" || n.scene.tag === "StepScene")
    return t;
  f();
}, Hh = (t) => t, Ra = (t, n) => ({ tag: t, _1: n }), Le = (t, n, e) => ({ tag: t, _1: n, _2: e }), Wh = (t) => t, _i = (t, n, e, r, o, i, s, u, a) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: a }), $0 = /* @__PURE__ */ Wh("PlopIn"), ET = /* @__PURE__ */ Wh("PlopOut"), PT = /* @__PURE__ */ Hh("DiveIn"), AT = /* @__PURE__ */ Hh("DiveOut"), En = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $e = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Qh = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Oh = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $i = /* @__PURE__ */ bu(Di), qh = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, RT = (t) => (e) => {
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
}, Xh = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), FT = (t) => (e) => {
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
}, Sr = (t) => (n) => (e) => {
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
}, Fa = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, GT = (t) => t, Mh = (t) => (n) => (e) => e < t ? 0 : e > 1 - n ? 1 : (e - t) / En(0.05)(1 - t - n), IT = (t) => (n) => t.labelBasePx * 0.62 * tt(N(Qh)(0)(B(Bh)(wt(n)((e) => Hi(`
`)(e))))), N_ = (t) => (n) => {
  if (t.length === 0)
    return n;
  const e = 6.82 * tt(N(Qh)(0)(B(Bh)(wt(t)((l) => Hi(`
`)(l))))), r = e / 2 + 14, o = n.y + n.h / 2, i = o - 5 - 8, s = En(n.y + n.h)(i + 12.6) - $e(n.y)(i - 12.6), u = n.x + n.w / 2, a = u + 13 + e / 2, c = En(n.x + n.w)(a + r) - $e(n.x)(a - r);
  return { x: u - c / 2, y: o - s / 2, w: c, h: s };
}, Jf = /* @__PURE__ */ (() => {
  const t = N((n) => (e) => {
    const r = n.previous.tag === "Just" && $n(n.previous._1.endT - e.startT) < 1e-4 ? { ...e, fromCam: n.previous._1.toCam } : e;
    return { previous: T("Just", r), spans: Lt(n.spans)(r) };
  })({ previous: x, spans: [] });
  return (n) => t(n).spans;
})(), C_ = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, a = s - u, c = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : c <= a ? e : r + i * (s - u * gs(-(c - a) / u));
}, bf = (t) => (n) => {
  const e = Oh(n)(t.keyframes);
  if (e.tag === "Nothing")
    return z;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, Uh = (t) => (n) => {
  if (n < t.startT)
    return Le("AtKeyframe", t.initialKeyframe);
  const e = Vt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Le("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Le("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Le("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode" || e._1.scene.tag === "StepScene")
      return Le("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing")
    return Le(
      "AtKeyframe",
      N(ST)(t.initialKeyframe)(t.spans)
    );
  f();
}, da = (t) => (n) => (e) => (r) => {
  const o = Vt((i) => $i(i.path)(n) && ($n(i.endT - e) < 1e-4 || $n(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return T("Just", o._1);
  if (o.tag === "Nothing")
    return Vt((i) => $i(i.path)(n))(t.segments);
  f();
}, kf = (t) => (n) => {
  const e = Oh(n)(t.keyframes);
  if (e.tag === "Nothing")
    return z;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, J_ = /* @__PURE__ */ (() => {
  const t = (e, r, o, i, s) => {
    let u = e, a = r, c = o, l = i, d = s, _ = !0, g;
    for (; _; ) {
      if (u === 0) {
        const $ = Rt((h) => x, (h) => (m) => T("Just", { head: h, tail: m }), a);
        if ($.tag === "Nothing") {
          _ = !1, g = [];
          continue;
        }
        if ($.tag === "Just") {
          u = 1, a = $._1.head, c = $._1.head, l = !1, d = $._1.tail;
          continue;
        }
        f();
      }
      if (u === 1) {
        const p = a, $ = c, h = l, m = d, y = Rt((v) => x, (v) => (w) => T("Just", { head: v, tail: w }), m);
        if (y.tag === "Just" && $.intent === "Overview" && y._1.head.intent === "Overview" && !($.fromCam.zoom === $.toCam.zoom && $.fromCam.center.x === $.toCam.center.x && $.fromCam.center.y === $.toCam.center.y) && !(y._1.head.fromCam.zoom === y._1.head.toCam.zoom && y._1.head.fromCam.center.x === y._1.head.toCam.center.x && y._1.head.fromCam.center.y === y._1.head.toCam.center.y) && $n($.toCam.center.x - y._1.head.fromCam.center.x) < 1e-4 && $n($.toCam.center.y - y._1.head.fromCam.center.y) < 1e-4 && $n($.toCam.zoom - y._1.head.fromCam.zoom) < 1e-4 && $n($.endT - y._1.head.startT) < 1e-4) {
          u = 1, a = p, c = y._1.head, l = !0, d = y._1.tail;
          continue;
        }
        _ = !1, g = [h ? { ...p, endT: $.endT, toCam: $.toCam, easing: $.easing, interp: ir } : p, ...n(m)];
      }
    }
    return g;
  }, n = (e) => t(0, e);
  return n;
})(), BT = (t) => (n) => {
  const e = Cn(n), r = Kl({ width: t.widthPx, height: t.heightPx })({
    vx: e.x,
    vy: e.y,
    vw: e.w,
    vh: e.h
  });
  return { w: r.vw, h: r.vh };
}, Vl = (t) => (n) => (e) => (r) => {
  const o = En(e.center.x - r.x)(r.x + r.w - e.center.x), i = En(e.center.y - r.y)(r.y + r.h - e.center.y), s = BT(t)(n);
  return $e(o <= 0 ? e.zoom : s.w / (o * 2))(i <= 0 ? e.zoom : s.h / (i * 2));
}, Yh = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = ur(u);
    if (a.tag === "Just" && a._1.last.intent === "Overview") {
      e = [a._1.last, ...s], r = a._1.init;
      continue;
    }
    o = !1, i = { prefix: u, overview: s };
  }
  return i;
}, DT = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = Rt((c) => x, (c) => (l) => T("Just", { head: c, tail: l }), u);
    if (a.tag === "Just" && a._1.head.intent === "Overview") {
      e = Lt(s)(a._1.head), r = a._1.tail;
      continue;
    }
    o = !1, i = { overview: s, rest: u };
  }
  return i;
}, ki = (t) => (n) => (e) => (r) => (o) => {
  const i = { width: n.widthPx, height: n.heightPx }, s = Kl(i)((() => {
    const u = fr(e)(o);
    return { vx: u.x, vy: u.y, vw: u.w, vh: u.h };
  })());
  return t.labelBasePx * r.placement.scale * (i.width <= 0 || s.vw <= 0 ? 0 : i.width / s.vw);
}, zT = (t) => (n) => (e) => (r) => (o) => {
  const i = ki(t)(n)(e)(r)(o);
  return i <= t.minimumReadableLabelPx ? o : { ...o, zoom: o.zoom * t.minimumReadableLabelPx / i };
}, HT = (t) => (n) => (e) => {
  const r = Tt((o) => o.scene.tag === "StepScene" ? T("Just", o.startT) : x)(n.spans);
  return N((o) => (i) => {
    const s = bo(Ht, x, (u) => u.startT < i + 1e-4 && u.endT >= i - 1e-4, o);
    if (s.tag === "Nothing")
      return o;
    if (s.tag === "Just") {
      const u = s._1 >= 0 && s._1 < o.length ? T("Just", o[s._1]) : x;
      if (u.tag === "Nothing")
        return o;
      if (u.tag === "Just") {
        if (u._1.startT >= i - 1e-4)
          return o;
        const a = Vt(($) => $ > i + 1e-4)(r), c = (() => {
          if (a.tag === "Nothing")
            return n.endT;
          if (a.tag === "Just")
            return a._1;
          f();
        })(), l = Bt(st.compare)(Tt(($) => $.startT >= i - 1e-4 && $.startT < c - 1e-4 && ($.target.tag === "RelabelWindow" || ($.target.tag === "EdgeWindow" ? $.target._2.tag === "Extend" : $.target.tag === "TokenWindow" || $.target.tag === "FillWindow")) ? T("Just", $.startT) : x)(n.windows)), d = 0 < l.length ? l[0] : i, _ = s._1 + 1 | 0, g = _ < 1 ? o : Ft(_, o.length, o), p = bo(
          Ht,
          x,
          ($) => $.intent === "ActionFocus" && $.startT >= d - 1e-4 && $.startT < c - 1e-4,
          g
        );
        if (p.tag === "Nothing")
          return o;
        if (p.tag === "Just") {
          const $ = p._1 >= 0 && p._1 < g.length ? T("Just", g[p._1]) : x;
          if ($.tag === "Nothing")
            return o;
          if ($.tag === "Just") {
            const h = (s._1 + p._1 | 0) + 2 | 0, m = h < 1 ? o : Ft(h, o.length, o), y = u._1.toCam.zoom === $._1.toCam.zoom && u._1.toCam.center.x === $._1.toCam.center.x && u._1.toCam.center.y === $._1.toCam.center.y ? u._1.fromCam : u._1.toCam, v = Lt(s._1 < 1 ? [] : Ft(0, s._1, o))({ ...u._1, endT: i, toCam: y }), w = $._1.startT - i;
            if (w <= 1e-4)
              return [...v, { ...$._1, fromCam: y }, ...m];
            const C = y.zoom === $._1.toCam.zoom && y.center.x === $._1.toCam.center.x && y.center.y === $._1.toCam.center.y, J = C ? i + 0 : i + $e(w)(d0(t)(y)($._1.toCam)), k = { ...$._1, startT: J, endT: $._1.startT, fromCam: $._1.toCam, toCam: $._1.toCam }, E = { ...$._1, startT: i, endT: J, fromCam: y };
            return [...v, ...C ? [] : [E], ...k.endT > k.startT + 1e-4 ? [k] : [], { ...$._1, fromCam: $._1.toCam }, ...m];
          }
        }
      }
    }
    f();
  })(e)(r);
}, WT = (t) => (n) => (e) => (r) => ({
  ...r,
  fromCam: w_(t)(n)(e)(r.fromCam),
  toCam: w_(t)(n)(e)(r.toCam)
}), Kh = (t) => (n) => t.widthPx <= 0 ? 0 : $e(n / 4)(32 * n / t.widthPx), QT = (t) => (n) => (e) => (r) => (o) => {
  const i = Kh(n)(e), s = r + e / 2 - i;
  return o.x < r - e / 2 + i ? o.x - i + e / 2 : o.x + o.w > s ? o.x + o.w + i - e / 2 : r;
}, OT = (t) => (n) => (e) => sn(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), qT = (t) => (n) => (e) => sn(
  (r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e,
  t
), XT = (t) => (n) => (e) => sn(
  (r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e,
  t
), MT = (t) => (n) => (e) => sn(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), Ga = (t) => (n) => (e) => sn((r) => e(r) && n >= r.startT && n < r.endT, t), UT = (t) => (n) => (e) => {
  if (n.length === 0)
    return e;
  const r = $e(160)(IT(t)(n) + 31) / 2, o = $e(40)(t.labelBasePx * 1.2 + 23);
  return { x: e.x - r, y: e.y - o, w: e.w + r * 2, h: e.h + o * 2 };
}, YT = (t) => (n) => (e) => {
  const r = t.padding * 0.75, o = tt(8);
  return Cc((i) => {
    if (i.target.tag === "NodeWindow")
      return [];
    if (i.target.tag === "RelabelWindow")
      return [
        {
          startT: i.startT,
          endT: i.endT,
          bbox: uu(n)(e)(nn(
            "Node",
            1,
            1,
            i.target._1,
            void 0,
            z,
            z
          )),
          priority: 1
        }
      ];
    if (i.target.tag === "EdgeWindow") {
      if (i.target._2.tag === "Extend")
        return [{ startT: i.startT, endT: i.endT, bbox: Sa(n)(e)(i.target._1), priority: 1 }];
      if (i.target._2.tag === "Retract")
        return [];
      f();
    }
    if (i.target.tag === "TokenWindow") {
      const s = qh(i.target._2)(n.edges);
      if (s.tag === "Just") {
        const u = (() => {
          if (i.target._3 === "Forward")
            return s._1;
          if (i.target._3 === "Backward")
            return un(s._1);
          f();
        })();
        return wt(Zt(0, 7))((a) => {
          const c = i.startT + (i.endT - i.startT) * (tt(a) / o), l = (() => {
            const d = i.startT + (i.endT - i.startT) * (tt(a + 1 | 0) / o);
            return {
              startT: c,
              endT: d,
              box: (() => {
                const _ = ms(u)(Mh(i.target._7)(i.target._8)(((c + d) / 2 - i.startT) / En(1e-4)(i.endT - i.startT)));
                if (_.tag === "Just")
                  return { x: _._1.x - r, y: _._1.y - r, w: 0 + r * 2, h: 0 + r * 2 };
                if (_.tag === "Nothing")
                  return { x: 0, y: 0, w: 0, h: 0 };
                f();
              })()
            };
          })();
          return [{ startT: l.startT, endT: l.endT, bbox: N_(i.target._6)(l.box), priority: 1 }];
        });
      }
      if (s.tag === "Nothing")
        return [
          {
            startT: i.startT,
            endT: i.endT,
            bbox: N_(i.target._6)(Sa(n)(e)(i.target._2)),
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
          bbox: UT(t)(i.target._3)(uu(n)(e)(nn(
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
    f();
  });
}, KT = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (o.tag === "Nothing")
    return i.zoom;
  if (o.tag === "Just")
    return En(0)(Vl(n)(e)(i)((() => {
      const s = t.padding * r.placement.scale;
      return { x: o._1.x - s, y: o._1.y - s, w: o._1.w + s * 2, h: o._1.h + s * 2 };
    })()));
  f();
}, VT = (t) => (n) => {
  const e = Uh(t)(n);
  if (e.tag === "AtKeyframe")
    return bf(t)(e._1);
  if (e.tag === "InTransition")
    return ee(F.compare, ne, bf(t)(e._1), bf(t)(e._2));
  f();
}, jT = (t) => (n) => (e) => Ga(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e && r.target._2 === "PlopOut") ? !0 : qT(t.windows)(n)(e) ? !1 : Ga(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e) ? !0 : XT(t.windows)(n)(e) ? !1 : RT(e)(VT(t)(n)), Vh = (t) => (n) => Tt((e) => jT(t)(n)(e._1) ? T("Just", { x: e._2.x, y: e._2.y, w: e._2.w, h: e._2.h }) : x)(Xh(t.layout.nodes)), ZT = (t) => (n) => {
  const e = Vh(t)(n);
  return e.length === 0 ? x : T("Just", Yr(e));
}, tw = (t) => Tt((n) => {
  const e = ZT(t)(En(n.startT)(n.endT - 1e-4));
  if (e.tag === "Nothing")
    return x;
  if (e.tag === "Just")
    return T("Just", { startT: n.startT, endT: n.endT, bbox: e._1, priority: 0 });
  f();
}), nw = (t) => (n) => (e) => (r) => (o) => [
  ...tw(o)(_t((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...YT(t)(o.layout)(e)(o.windows)
], ew = (t) => (n) => (e) => (r) => (o) => (i) => _T(t)(n)(i.layout)(o.endT)(Tt((s) => s.scene.tag === "StepScene" ? T("Just", s.startT) : x)(i.spans))(nw(t)(e)(r)(o)(i)), rw = (t) => (n) => {
  const e = Uh(t)(n);
  if (e.tag === "AtKeyframe")
    return kf(t)(e._1);
  if (e.tag === "InTransition")
    return ee(F.compare, ne, kf(t)(e._1), kf(t)(e._2));
  f();
}, ow = (t) => (n) => (e) => Ga(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e) ? !0 : OT(t.windows)(n)(e) ? !1 : Ga(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._1 === e) ? !0 : MT(t.windows)(n)(e) ? !1 : FT(e)(rw(t)(n)), iw = (t) => (n) => {
  const e = [
    ...Vh(t)(n),
    ...Tt((r) => ow(t)(n)(r._1) ? T("Just", Ml(r._2)) : x)(Xh(t.layout.edges))
  ];
  return e.length === 0 ? x : T("Just", Yr(e));
}, sw = (t) => (n) => (e) => {
  const r = fr(t)(e);
  return n.x >= r.x && n.x + n.w <= r.x + r.w;
}, b_ = (t) => (n) => (e) => (r) => e >= n ? Sr(t + n - e / 2)(t + e / 2)(r) : t + n / 2, k_ = (t) => (n) => (e) => (r) => {
  if ((() => {
    const s = fr(n)(e);
    return r.x >= s.x && r.y >= s.y && r.x + r.w <= s.x + s.w && r.y + r.h <= s.y + s.h;
  })())
    return e;
  const o = { ...e, zoom: $e(e.zoom)(Vl(t)(n)({ ...e, center: { x: r.x + r.w / 2, y: r.y + r.h / 2 } })(r)) }, i = fr(n)(o);
  return { ...o, center: { x: b_(r.x)(r.w)(i.w)(e.center.x), y: b_(r.y)(r.h)(i.h)(e.center.y) } };
}, jh = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  if (o.tag === "Nothing")
    return s;
  if (o.tag === "Just") {
    const u = t.padding * r.placement.scale, a = { x: o._1.x - u, y: o._1.y - u, w: o._1.w + u * 2, h: o._1.h + u * 2 }, c = { x: a.x + a.w / 2, y: a.y + a.h / 2 }, l = { ...s, center: c }, d = { ...l, zoom: Vl(n)(e)(l)(a) }, _ = fr(e)(d);
    return i.tag === "Nothing" ? {
      ...d,
      center: {
        x: _.w >= o._1.w ? o._1.x + o._1.w / 2 : Sr(o._1.x + _.w / 2)(o._1.x + o._1.w - _.w / 2)(c.x),
        y: _.h >= o._1.h ? o._1.y + o._1.h / 2 : Sr(o._1.y + _.h / 2)(o._1.y + o._1.h - _.h / 2)(c.y)
      }
    } : i.tag === "Just" ? {
      ...d,
      center: {
        x: _.w >= o._1.w ? o._1.x + o._1.w / 2 : Sr(o._1.x + _.w / 2)(o._1.x + o._1.w - _.w / 2)(i._1.x + i._1.w / 2),
        y: _.h >= o._1.h ? o._1.y + o._1.h / 2 : Sr(o._1.y + _.h / 2)(o._1.y + o._1.h - _.h / 2)(i._1.y + i._1.h / 2)
      }
    } : {
      ...d,
      center: {
        x: (() => {
          if (_.w >= o._1.w)
            return o._1.x + o._1.w / 2;
          f();
        })(),
        y: (() => {
          if (_.h >= o._1.h)
            return o._1.y + o._1.h / 2;
          f();
        })()
      }
    };
  }
  f();
}, Zh = (t) => (n) => (e) => {
  const r = t.x + t.w / 2, o = e >= t.w ? { lo: r, hi: r } : { lo: t.x + e / 2, hi: t.x + t.w - e / 2 };
  if (e >= n.w) {
    const a = En(o.lo)(n.x + n.w - e / 2), c = $e(o.hi)(n.x + e / 2);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const i = n.x + n.w / 2;
  if (e >= n.w) {
    const a = En(o.lo)(i), c = $e(o.hi)(i);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const s = En(o.lo)(n.x + e / 2), u = $e(o.hi)(n.x + n.w - e / 2);
  return s <= u ? { lo: s, hi: u } : o;
}, uw = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? x : T("Just", { ...e, startT: En(t)(e.startT), endT: $e(n)(e.endT) }), aw = (t) => (n) => (e) => (r) => (o) => (i) => Tt(uw(i.startT)(i.endT))(B(WT(e)(i.layout)(i.placement))(ew(t)(n)(r)(i.edgeEndpoints)(o)(i))), tp = (t) => (n) => (e) => (r) => {
  const o = Cn(t), i = $e(r.zoom)(o.w / En(1e-4)(n.w));
  return {
    ...r,
    center: {
      ...r.center,
      x: (() => {
        const s = Zh(o)(n)(o.w / En(1e-4)(i));
        return Sr(s.lo)(s.hi)(e.center.x);
      })()
    },
    zoom: i
  };
}, cw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = Kh(n)(u), c = Cn(e), l = { x: c.x - a, y: c.y - a, w: c.w + a * 2, h: c.h + a * 2 }, d = (() => {
    if (o.tag === "Nothing")
      return s.center.x;
    if (o.tag === "Just")
      return QT()(n)(u)(i.center.x)(o._1);
    f();
  })();
  if (r.tag === "Nothing") {
    const _ = l.x + l.w / 2;
    return u >= l.w ? Sr(_)(_)(d) : Sr(l.x + u / 2)(l.x + l.w - u / 2)(d);
  }
  if (r.tag === "Just") {
    const _ = { x: r._1.x - a, y: r._1.y - a, w: r._1.w + a * 2, h: r._1.h + a * 2 };
    if (u < _.w) {
      const p = l.x + l.w / 2;
      return u >= l.w ? Sr(p)(p)(d) : Sr(l.x + u / 2)(l.x + l.w - u / 2)(d);
    }
    const g = Zh(l)(_)(u);
    return Sr(g.lo)(g.hi)(d);
  }
  f();
}, fw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = fr(e)(s);
  return u.w <= 0 ? s : { ...s, center: { ...s.center, x: cw()(n)(e)(r)(o)(i)(s)(u.w) } };
}, lw = (t) => (n) => (e) => {
  const r = Cn(t), o = r.h / En(1e-4)(e.zoom), i = r.w / En(1e-4)(e.zoom);
  return {
    ...e,
    center: {
      x: i >= n.w ? n.x + n.w / 2 : C_(n.x + i / 2)(n.x + n.w - i / 2)(e.center.x),
      y: o >= n.h ? n.y + n.h / 2 : C_(n.y + o / 2)(n.y + n.h - o / 2)(e.center.y)
    }
  };
}, Li = (t) => (n) => (e) => lw(t)((() => {
  const r = n * e.placement.scale, o = Cn(e.layout);
  return {
    x: o.x * e.placement.scale + e.placement.tx - r,
    y: o.y * e.placement.scale + e.placement.ty - r,
    w: o.w * e.placement.scale + r * 2,
    h: o.h * e.placement.scale + r * 2
  };
})()), gw = (t) => (n) => (e) => (r) => {
  const o = fr(t)(r), i = Cn(t), s = (u) => {
    const a = Li(t)(n)(e)(u);
    return Li(t)(n)(e)({
      ...a,
      zoom: En(a.zoom)(En(i.w / En(1e-4)(2 * $e(a.center.x - o.x)(o.x + o.w - a.center.x)))(i.h / En(1e-4)(2 * $e(a.center.y - o.y)(o.y + o.h - a.center.y))))
    });
  };
  return (u) => s(s(u));
}, _w = (t) => (n) => (e) => (r) => Li(e)(t.padding)(r)(kv(t)(n)(e)(r.placement)(Cn(r.layout)).camera), np = (t) => (n) => (e) => (r) => (o) => {
  const i = _w(t)(n)(e)(o), s = Vt((u) => u.direction === "DiveIn" && $i(u.childPath)(o.path))(r.dives);
  if (s.tag === "Just") {
    const u = da(r)(s._1.parentPath)(s._1.startT)(s._1.endT);
    if (u.tag === "Just") {
      const a = Fa(s._1.node)(u._1.layout.nodes);
      if (a.tag === "Just") {
        const c = a._1.w * u._1.placement.scale, l = a._1.h * u._1.placement.scale, d = $e(c)(l * 2), _ = Lv(n)(e)({
          h: l,
          w: d,
          x: a._1.x * u._1.placement.scale + u._1.placement.tx + (c - d) * 0.5,
          y: a._1.y * u._1.placement.scale + u._1.placement.ty
        });
        return gw(e)(t.padding)(o)(_)(_.zoom > i.zoom ? _ : i);
      }
      if (a.tag === "Nothing")
        return i;
      f();
    }
    if (u.tag === "Nothing")
      return i;
    f();
  }
  if (s.tag === "Nothing")
    return i;
  f();
}, ep = (t) => (n) => (e) => (r) => (o) => {
  const i = fr(e)(o);
  return (() => {
    const s = Cn(r.layout), u = s.x * r.placement.scale + r.placement.tx, a = s.y * r.placement.scale + r.placement.ty;
    return u >= i.x && a >= i.y && u + s.w * r.placement.scale <= i.x + i.w && a + s.h * r.placement.scale <= i.y + i.h;
  })() && ki(t)(n)(e)(r)(o) >= t.minimumReadableLabelPx;
}, L_ = (t) => (n) => (e) => (r) => (o) => (i) => ep(t)(n)(e)(r)(o) ? o : zT(t)(n)(e)(r)(i), dw = (t) => (n) => (e) => {
  const r = DT([])(e), o = Rt((a) => x, (a) => (c) => T("Just", { head: a, tail: c }), r.rest), i = r.overview.length - 1 | 0, s = i >= 0 && i < r.overview.length ? T("Just", r.overview[i]) : x, u = 0 < r.overview.length ? T("Just", r.overview[0]) : x;
  if (u.tag === "Just") {
    if (s.tag === "Just") {
      if (o.tag === "Just")
        return $n(u._1.startT - n.startT) < 1e-4 && o._1.head.intent === "ActionFocus" ? [
          {
            startT: u._1.startT,
            endT: s._1.endT,
            fromCam: t,
            toCam: t,
            easing: u._1.easing,
            interp: ir,
            intent: qs
          },
          { ...o._1.head, fromCam: t },
          ...o._1.tail
        ] : e;
      if (o.tag === "Nothing" && $n(u._1.startT - n.startT) < 1e-4)
        return [
          {
            startT: u._1.startT,
            endT: s._1.endT,
            fromCam: t,
            toCam: t,
            easing: u._1.easing,
            interp: ir,
            intent: qs
          }
        ];
    }
    return e;
  }
  if (u.tag === "Nothing" && s.tag === "Nothing" && o.tag === "Just" && $n(o._1.head.startT - n.startT) < 1e-4 && o._1.head.intent === "ActionFocus") {
    const a = Rt((c) => x, (c) => (l) => T("Just", { head: c, tail: l }), o._1.tail);
    if (a.tag === "Nothing")
      return [
        {
          startT: o._1.head.startT,
          endT: o._1.head.endT,
          fromCam: t,
          toCam: t,
          easing: o._1.head.easing,
          interp: ir,
          intent: qs
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
          interp: ir,
          intent: qs
        },
        { ...a._1.head, fromCam: t },
        ...a._1.tail
      ];
    f();
  }
  return e;
}, hw = (t) => (n) => {
  const e = Rt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ ...e._1.head, fromCam: t }, ...e._1.tail];
  f();
}, pw = (t) => (n) => {
  const e = (o) => (i) => (s) => {
    let u = o, a = i, c = s, l = !0, d;
    for (; l; ) {
      const _ = u, g = a, $ = Rt((h) => x, (h) => (m) => T("Just", { head: h, tail: m }), c);
      if ($.tag === "Nothing") {
        l = !1, d = Lt(_)(g);
        continue;
      }
      if ($.tag === "Just") {
        if (g.intent === "Overview" && $._1.head.intent === "ActionFocus" && $n(g.endT - $._1.head.startT) < 1e-4 && g.fromCam.zoom === g.toCam.zoom && g.fromCam.center.x === g.toCam.center.x && g.fromCam.center.y === g.toCam.center.y && (() => {
          const h = $._1.head.startT;
          return !($._1.head.fromCam.zoom === $._1.head.toCam.zoom && $._1.head.fromCam.center.x === $._1.head.toCam.center.x && $._1.head.fromCam.center.y === $._1.head.toCam.center.y) && sn(
            (m) => $n(m.startT - h) < 1e-4 && (m.target.tag === "RelabelWindow" ? !0 : m.target.tag === "EdgeWindow" ? m.target._2.tag === "Extend" : m.target.tag === "TokenWindow" || m.target.tag === "FillWindow"),
            t.windows
          );
        })()) {
          const h = $._1.head.startT, m = Bt(st.compare)(Tt((C) => C.target.tag === "EdgeWindow" && C.target._2.tag === "Extend" && $n(C.endT - h) < 1e-4 ? T("Just", C.startT) : x)(t.windows)), y = 0 < m.length ? m[0] : h, v = En(g.startT)(y - ($._1.head.endT - $._1.head.startT)), w = { ...g, endT: v };
          u = Lt(w.endT > w.startT ? Lt(_)(w) : _)({ ...$._1.head, startT: v, endT: y }), a = { ...$._1.head, startT: y, fromCam: $._1.head.toCam }, c = $._1.tail;
          continue;
        }
        u = Lt(_)(g), a = $._1.head, c = $._1.tail;
        continue;
      }
      f();
    }
    return d;
  }, r = Rt((o) => x, (o) => (i) => T("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just")
    return e([])(r._1.head)(r._1.tail);
  f();
}, mw = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Cn(r.layout), u = {
    x: s.x * r.placement.scale + r.placement.tx,
    y: s.y * r.placement.scale + r.placement.ty,
    w: s.w * r.placement.scale,
    h: s.h * r.placement.scale
  }, a = tp(e)(u)(o)(i);
  return u.w / En(1e-4)(u.h) >= 0.33 && i.zoom / En(1e-4)(a.zoom) <= 1.25 && fr(e)(a).w >= u.w - 1e-3 && ki(t)(n)(e)(r)(a) >= t.minimumReadableLabelPx * 0.85 ? a : i;
}, $w = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Cn(r.layout), a = u.w * r.placement.scale, c = a / En(1e-4)(u.h * r.placement.scale);
  if (o.tag === "Nothing")
    return s;
  if (o.tag === "Just") {
    if (sw(e)(o._1)(s))
      return s;
    const l = tp(e)(o._1)(i)(s);
    return s.zoom / En(1e-4)(l.zoom) <= 1.25 && (ki(t)(n)(e)(r)(l) >= t.minimumReadableLabelPx - 1e-3 || o._1.w >= a - 1e-3 && c >= 0.33 && ki(t)(n)(e)(r)(l) >= t.minimumReadableLabelPx * 0.85) ? l : s;
  }
  f();
}, yw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = {
    ...s,
    center: (() => {
      if (i.tag === "Nothing")
        return s.center;
      if (i.tag === "Just")
        return { x: i._1.x + i._1.w / 2, y: i._1.y + i._1.h / 2 };
      f();
    })()
  }, a = ki(t)(n)(e)(r)(u);
  return fw()(n)(e)(o)(i)(s)($w(t)(n)(e)(r)(o)(s)(mw(t)(n)(e)(r)(s)(a <= 0 ? u : { ...u, zoom: $e(u.zoom * t.minimumReadableLabelPx / a)(KT(t)(n)(e)(r)(i)(u)) })));
}, Lf = (t) => (n) => (e) => (r) => (o) => (i) => (s) => r.placement.scale === 1 && r.placement.tx === 0 && r.placement.ty === 0 ? jh(t)(n)(e)(r)(o)(i)(s) : ep(t)(n)(e)(r)(s) ? s : yw(t)(n)(e)(r)(o)(i)(s), S_ = (t) => {
  const n = (r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, l = s, d = Rt((_) => x, (_) => (g) => T("Just", { head: _, tail: g }), l);
      if (d.tag === "Just" && d._1.head.intent === "Overview") {
        i = Lt(c)(d._1.head), s = d._1.tail;
        continue;
      }
      u = !1, a = { overview: c, rest: l };
    }
    return a;
  };
  return ((r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, d = Rt((_) => x, (_) => (g) => T("Just", { head: _, tail: g }), s);
      if (d.tag === "Nothing") {
        u = !1, a = c;
        continue;
      }
      if (d.tag === "Just") {
        if (d._1.head.intent === "Overview") {
          const _ = n([d._1.head])(d._1.tail), g = Rt((h) => x, (h) => (m) => T("Just", { head: h, tail: m }), _.rest), p = c.length - 1 | 0, $ = p >= 0 && p < c.length ? T("Just", c[p]) : x;
          if ($.tag === "Just" && g.tag === "Just" && $._1.intent === "ActionFocus" && (() => {
            const h = _.overview.length - 1 | 0;
            return g._1.head.intent === "ActionFocus" && (h >= 0 && h < _.overview.length && 0 < _.overview.length ? _.overview[h].endT - _.overview[0].startT <= 1.0001 : !0);
          })() && 0 < _.overview.length) {
            const h = _.overview.length - 1 | 0;
            if (h >= 0 && h < _.overview.length) {
              i = Lt(c)({
                startT: _.overview[0].startT,
                endT: _.overview[h].endT,
                fromCam: $._1.toCam,
                toCam: $._1.toCam,
                easing: _.overview[0].easing,
                interp: ir,
                intent: Bc
              }), s = [{ ...g._1.head, fromCam: $._1.toCam }, ...g._1.tail];
              continue;
            }
          }
          i = [...c, ..._.overview], s = _.rest;
          continue;
        }
        i = Lt(c)(d._1.head), s = d._1.tail;
        continue;
      }
      f();
    }
    return a;
  })([])(t);
}, xw = (t) => (n) => (e) => {
  const r = Yh([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && r.prefix[i].intent === "ActionFocus" && $n(r.overview[o].endT - n.endT) < 1e-4)
        return [
          ...r.prefix,
          {
            startT: r.overview[0].startT,
            endT: r.overview[o].endT,
            fromCam: r.prefix[i].toCam,
            toCam: r.prefix[i].toCam,
            easing: r.overview[0].easing,
            interp: ir,
            intent: Bc
          }
        ];
    }
    return e;
  }
  return 0 < r.overview.length && r.prefix.length - 1 | 0, e;
}, E_ = (t) => (n) => (e) => {
  const r = Yh([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && (() => {
        const s = r.overview[o].endT;
        return r.prefix[i].intent === "ActionFocus" && (() => {
          const u = r.overview.length - 1 | 0;
          return sn((a) => a.direction === "DiveIn" && $i(a.parentPath)(t.path) && $n(a.startT - s) < 1e-4, n) && (u >= 0 && u < r.overview.length && 0 < r.overview.length ? r.overview[u].endT - r.overview[0].startT <= 1.0001 : !0);
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
            interp: ir,
            intent: Bc
          }
        ];
    }
    return e;
  }
  return e;
}, rp = (t) => (n) => {
  const e = n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y ? (n.startT + n.endT) / 2 : n.endT + 1e-4, r = Tt((o) => o.target.tag === "RelabelWindow" ? T(
    "Just",
    uu(t.layout)(t.edgeEndpoints)(nn(
      "Node",
      1,
      1,
      o.target._1,
      void 0,
      z,
      z
    ))
  ) : o.target.tag === "EdgeWindow" ? o.target._2.tag === "Extend" ? T("Just", Sa(t.layout)(t.edgeEndpoints)(o.target._1)) : x : o.target.tag === "TokenWindow" ? T(
    "Just",
    (() => {
      const i = [
        ...Tt((s) => {
          const u = Fa(s)(t.layout.nodes);
          return u.tag === "Just" ? T("Just", { x: u._1.x, y: u._1.y, w: u._1.w, h: u._1.h }) : x;
        })([o.target._4, o.target._5]),
        ...(() => {
          const s = qh(o.target._2)(t.layout.edges), u = Mh(o.target._7)(o.target._8)((e - o.startT) / En(1e-4)(o.endT - o.startT)), a = (() => {
            if (s.tag === "Just")
              return ms((() => {
                if (o.target._3 === "Forward")
                  return s._1;
                if (o.target._3 === "Backward")
                  return un(s._1);
                f();
              })())(u);
            if (s.tag === "Nothing")
              return x;
            f();
          })();
          return a.tag === "Just" ? [{ x: a._1.x, y: a._1.y, w: 0, h: 0 }] : [];
        })()
      ];
      return i.length === 0 ? Sa(t.layout)(t.edgeEndpoints)(o.target._2) : Yr(i);
    })()
  ) : o.target.tag === "FillWindow" ? T(
    "Just",
    uu(t.layout)(t.edgeEndpoints)(nn(
      "Node",
      1,
      1,
      o.target._2,
      void 0,
      z,
      z
    ))
  ) : x)(_t((o) => o.startT <= e && e < o.endT, t.windows));
  return r.length === 0 ? x : T(
    "Just",
    (() => {
      const o = Yr(r);
      return { x: o.x * t.placement.scale + t.placement.tx, y: o.y * t.placement.scale + t.placement.ty, w: o.w * t.placement.scale, h: o.h * t.placement.scale };
    })()
  );
}, jl = (t) => (n) => {
  const e = iw(t)(n.endT + 1e-4);
  return e.tag === "Just" ? T(
    "Just",
    { x: e._1.x * t.placement.scale + t.placement.tx, y: e._1.y * t.placement.scale + t.placement.ty, w: e._1.w * t.placement.scale, h: e._1.h * t.placement.scale }
  ) : x;
}, vw = (t) => (n) => (e) => (r) => (o) => {
  const i = jl(r)(o), s = (u) => {
    const a = ki(t)(n)(e)(r)(u), c = a <= 0 || a >= t.minimumReadableLabelPx ? u : { ...u, zoom: u.zoom * t.minimumReadableLabelPx / a };
    return i.tag === "Just" && (() => {
      const l = fr(e)(c);
      return !(i._1.x >= l.x && i._1.y >= l.y && i._1.x + i._1.w <= l.x + l.w && i._1.y + i._1.h <= l.y + l.h);
    })() ? u : c;
  };
  return o.intent === "DiveHome" || o.intent === "ActionFocus" && !(r.placement.scale === 1 && r.placement.tx === 0 && r.placement.ty === 0) ? o : { ...o, fromCam: s(o.fromCam), toCam: s(o.toCam) };
}, Tw = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = rp(r)(i), u = jl(r)(i), a = (c) => {
    const l = jh(t)(n)(e)(r)(u)(s)(c);
    return { ...l, zoom: $e(o.zoom)(l.zoom) };
  };
  return { ...i, fromCam: a(i.fromCam), toCam: a(i.toCam) };
}, ww = (t) => (n) => (e) => (r) => (o) => (i) => i.intent === "ActionFocus" ? Tw(t)(n)(e)(r)(o)(i) : {
  ...i,
  fromCam: L_(t)(n)(e)(r)(o)(i.fromCam),
  toCam: L_(t)(n)(e)(r)(o)(i.toCam)
}, Nw = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o(i.fromCam), u = o(i.toCam), a = rp(r)(i), c = jl(r)(i);
  return s.zoom === u.zoom && s.center.x === u.center.x && s.center.y === u.center.y ? {
    ...i,
    fromCam: Lf(t)(n)(e)(r)(c)(a)(s),
    toCam: Lf(t)(n)(e)(r)(c)(a)(u)
  } : { ...i, fromCam: s, toCam: Lf(t)(n)(e)(r)(c)(a)(u) };
}, Cw = (t) => (n) => (e) => (r) => (o) => o.intent === "ActionFocus" ? Nw(t)(n)(e)(r)(GT)(o) : o, Ia = (t) => (n) => (e) => (r) => (o) => (i) => Jf(B(vw(t)(n)(e)(i))(HT(t)(i)(pw(i)((() => {
  const s = aw(t)(n)(e)(r)(o)(i);
  if (i.placement.scale === 1 && i.placement.tx === 0 && i.placement.ty === 0)
    return E_(i)(o.dives)(S_(J_(Jf(B(Cw(t)(n)(e)(i))(s)))));
  const u = np(t)(n)(e)(o)(i);
  return s.length === 0 ? [
    {
      startT: i.startT,
      endT: i.endT,
      fromCam: u,
      toCam: u,
      easing: Ah,
      interp: ir,
      intent: qs
    }
  ] : xw()(i)(dw(u)(i)(E_(i)(o.dives)(S_(J_(Jf(hw(u)(B(ww(t)(n)(e)(i)(u))(s))))))));
})())))), Jw = (t) => (n) => (e) => (r) => (o) => Bt((i) => (s) => st.compare(i.startT)(s.startT))(wt(o.segments)(Ia(t)(n)(e)(r)(o))), Is = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  if (i.direction === "DiveIn") {
    const u = Li(e)(t.padding)(s)(Mo(t)(e)(Ia(t)(n)(e)(r)(o)(s))(i.startT - 1e-4).camera), a = Fa(i.node)(s.layout.nodes);
    return i.direction === "DiveIn" && a.tag === "Just" ? k_(n)(e)(u)({
      x: a._1.x * s.placement.scale + s.placement.tx,
      y: a._1.y * s.placement.scale + s.placement.ty,
      w: a._1.w * s.placement.scale,
      h: a._1.h * s.placement.scale
    }) : u;
  }
  if (i.direction === "DiveOut") {
    const u = Li(e)(t.padding)(s)(Mo(t)(e)(Ia(t)(n)(e)(r)(o)(s))(i.endT + 1e-4).camera), a = Fa(i.node)(s.layout.nodes);
    return i.direction === "DiveIn" && a.tag === "Just" ? k_(n)(e)(u)({
      x: a._1.x * s.placement.scale + s.placement.tx,
      y: a._1.y * s.placement.scale + s.placement.ty,
      w: a._1.w * s.placement.scale,
      h: a._1.h * s.placement.scale
    }) : u;
  }
  f();
}, bw = (t) => (n) => (e) => (r) => (o) => wt(o.dives)((i) => {
  const s = da(o)(i.parentPath)(i.startT)(i.endT);
  if (s.tag === "Just") {
    const u = i.childPath, a = Vt((c) => $i(c.path)(u))(o.segments);
    if (a.tag === "Just") {
      const c = Ia(t)(n)(e)(r)(o)(a._1), l = np(t)(n)(e)(o)(a._1), d = Is(t)(n)(e)(r)(o)(i)(s._1), _ = (() => {
        if (i.direction === "DiveIn")
          return l;
        if (i.direction === "DiveOut")
          return Li(e)(t.padding)(a._1)(Mo(t)(e)(c)(i.startT - 1e-4).camera);
        f();
      })();
      if (i.direction === "DiveIn") {
        const g = Vt((p) => p.direction === "DiveIn" && $i(p.parentPath)(i.childPath) && $n(p.startT - i.endT) < 1e-4)(o.dives);
        if (g.tag === "Just") {
          const p = da(o)(g._1.parentPath)(g._1.startT)(g._1.endT);
          if (p.tag === "Just") {
            if (i.direction === "DiveIn" && i.endT - i.startT > 0.12) {
              const $ = i.endT - 0.12, h = {
                easing: Wr,
                endT: $,
                fromCam: d,
                intent: Fo,
                interp: Ro,
                startT: i.startT,
                toCam: Is(t)(n)(e)(r)(o)(g._1)(p._1)
              };
              return [
                h,
                { ...h, startT: $, endT: i.endT, fromCam: Is(t)(n)(e)(r)(o)(g._1)(p._1) }
              ];
            }
            return [
              {
                startT: i.startT,
                endT: i.endT,
                fromCam: d,
                toCam: _,
                easing: Wr,
                interp: Ro,
                intent: Fo
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
                easing: Wr,
                interp: Ro,
                intent: Fo
              }
            ];
          f();
        }
        if (g.tag === "Nothing")
          return [
            {
              startT: i.startT,
              endT: i.endT,
              fromCam: d,
              toCam: _,
              easing: Wr,
              interp: Ro,
              intent: Fo
            }
          ];
        f();
      }
      if (i.direction === "DiveOut") {
        const g = Vt((p) => p.direction === "DiveIn" && $i(p.parentPath)(i.childPath) && $n(p.startT - i.endT) < 1e-4)(o.dives);
        if (g.tag === "Just") {
          const p = da(o)(g._1.parentPath)(g._1.startT)(g._1.endT);
          if (p.tag === "Just") {
            if (i.direction === "DiveIn" && i.endT - i.startT > 0.12) {
              const $ = i.endT - 0.12, h = {
                easing: Wr,
                endT: $,
                fromCam: _,
                intent: Fo,
                interp: Ro,
                startT: i.startT,
                toCam: Is(t)(n)(e)(r)(o)(g._1)(p._1)
              };
              return [
                h,
                { ...h, startT: $, endT: i.endT, fromCam: Is(t)(n)(e)(r)(o)(g._1)(p._1) }
              ];
            }
            return [
              {
                startT: i.startT,
                endT: i.endT,
                fromCam: _,
                toCam: d,
                easing: Wr,
                interp: Ro,
                intent: Fo
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
                easing: Wr,
                interp: Ro,
                intent: Fo
              }
            ];
          f();
        }
        if (g.tag === "Nothing")
          return [
            {
              startT: i.startT,
              endT: i.endT,
              fromCam: _,
              toCam: d,
              easing: Wr,
              interp: Ro,
              intent: Fo
            }
          ];
      }
      f();
    }
    if (a.tag === "Nothing")
      return [];
    f();
  }
  if (s.tag === "Nothing")
    return [];
  f();
}), op = (t) => (n) => (e) => (r) => (o) => [
  ...bw(t)(n)(e)(r)(o),
  ...Jw(t)(n)(e)(r)(o)
], ts = (t, n, e) => ({ tag: t, _1: n, _2: e }), kw = (t) => t, ns = (t, n) => ({ tag: t, _1: n }), P_ = (t, n) => ({ tag: t, _1: n }), Zl = (t) => t, Ba = (t, n) => ({ tag: t, _1: n }), Sf = /* @__PURE__ */ Ba("NotYet"), A_ = /* @__PURE__ */ Ba("Consumed"), Lw = /* @__PURE__ */ Zl("FromSource"), R_ = /* @__PURE__ */ Zl("FromTarget"), Sw = /* @__PURE__ */ Zl("FromBoth"), Ef = /* @__PURE__ */ ns("Hidden"), ip = /* @__PURE__ */ ns("Visible"), y0 = /* @__PURE__ */ kw("ExtendFromSource"), Pf = /* @__PURE__ */ ts("Retracted"), sp = /* @__PURE__ */ ts("Extended"), Ew = {
  eq: (t) => (n) => t.tag === "Retracted" ? n.tag === "Retracted" : t.tag === "Extending" ? n.tag === "Extending" && (t._1 === "ExtendFromSource" ? n._1 === "ExtendFromSource" : t._1 === "ExtendFromTarget" && n._1 === "ExtendFromTarget") && t._2 === n._2 : t.tag === "Extended" ? n.tag === "Extended" : t.tag === "Retracting" && n.tag === "Retracting" && (t._1 === "FromSource" ? n._1 === "FromSource" : t._1 === "FromTarget" ? n._1 === "FromTarget" : t._1 === "FromBoth" && n._1 === "FromBoth") && t._2 === n._2
}, tg = (t) => t, Da = (t, n) => ({ tag: t, _1: n }), za = { eq: /* @__PURE__ */ bu(Di) }, Hc = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, up = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Vr = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, F_ = qt.foldMap(jx(F)), cu = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ap = /* @__PURE__ */ dn(F)(qt), Pw = (t) => (e) => {
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
}, Aw = /* @__PURE__ */ dn(F)(qt), Rw = (t) => (e) => {
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
}, Fw = /* @__PURE__ */ dn(F)(qt), Gw = (t) => (n) => (e) => {
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
}, cp = /* @__PURE__ */ Da("Closed"), Iw = /* @__PURE__ */ Da("Open"), fp = /* @__PURE__ */ tg("Backdrop"), Bw = /* @__PURE__ */ tg("FlyThrough"), we = /* @__PURE__ */ tg("Active"), Ha = (t) => (n) => (e) => {
  const r = Vt((o) => za.eq(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return Vt((o) => za.eq(o.path)(n))(t.segments);
  f();
}, Dw = (t) => (n) => {
  if (n.scene.tag === "Structural")
    return n.scene._1.to;
  if (n.scene.tag === "DataFlow")
    return n.scene._1.keyframe;
  if (n.scene.tag === "Hold")
    return n.scene._1;
  if (n.scene.tag === "EnterNode" || n.scene.tag === "ExitNode" || n.scene.tag === "StepScene")
    return t;
  f();
}, zw = (t) => {
  const n = Vt((e) => e.path.length === 0)(t.segments);
  if (n.tag === "Just")
    return n._1.edgeEndpoints;
  if (n.tag === "Nothing")
    return z;
  f();
}, Hw = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: Ol,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: zw(t)
}), Ww = (t) => B((n) => n < 1 ? [] : Ft(0, n, t))(Zt(0, t.length - 1 | 0)), ha = (t) => (n) => {
  const e = Hc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return z;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, Af = (t) => (n) => (e) => {
  const r = Hc(n)(t.keyframes);
  if (r.tag === "Just")
    return up(e)(r._1.labels);
  if (r.tag === "Nothing")
    return x;
  f();
}, Rf = (t) => (n) => {
  const e = Hc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return z;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, Qw = (t) => (n) => Tt((e) => up(n)(e.labels))((() => {
  const e = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return e(r._5, xt("Cons", r._4, e(r._6, o)));
    f();
  };
  return Xt(_n.foldr, e(t.keyframes, R));
})()), Ow = /* @__PURE__ */ N((t) => (n) => {
  const e = ur(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Lt(e._1.init)({ ...e._1.last, endT: Vr(e._1.last.endT)(n.endT), windows: Lt(e._1.last.windows)(n) }) : Lt(t)({ endT: n.endT, windows: [n] });
})([]), qw = (t) => (n) => (e) => F_((r) => F_((o) => o.target.tag === "FillWindow" ? o.startT <= e ? nn("Node", 1, 1, o.target._2, void 0, z, z) : z : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? nn("Node", 1, 1, o.target._4, void 0, z, z) : z)(r.windows))(_t(
  (r) => e <= r.endT + t,
  Ow(Bt((r) => (o) => st.compare(r.startT)(o.startT))(_t(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), Xw = (t) => (n) => {
  const e = Rt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), Qw(t)(n));
  if (e.tag === "Nothing")
    return !1;
  if (e.tag === "Just") {
    const r = e._1.head;
    return sn((o) => o !== r, e._1.tail);
  }
  f();
}, Mw = (t) => (n) => (e) => sn(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), Uw = (t) => (n) => (e) => sn((r) => r.endT <= n && r.target.tag === "RelabelWindow" && r.target._1 === e, t), Yw = (t) => (n) => (e) => sn((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), Kw = (t) => (n) => (e) => sn((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), Vw = (t) => (n) => (e) => sn(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), lp = (t) => {
  const n = uh(
    x,
    nh,
    (o) => ha(t)((() => {
      if (o.scene.tag === "Structural")
        return o.scene._1.to;
      if (o.scene.tag === "DataFlow")
        return o.scene._1.keyframe;
      if (o.scene.tag === "Hold")
        return o.scene._1;
      if (o.scene.tag === "EnterNode" || o.scene.tag === "ExitNode" || o.scene.tag === "StepScene")
        return t.initialKeyframe;
      f();
    })()).tag === "Leaf" ? x : T("Just", Vr(o.startT)(o.endT - 1e-4)),
    t.spans
  ), e = (() => {
    if (n.tag === "Nothing")
      return t.startT;
    if (n.tag === "Just")
      return n._1;
    f();
  })(), r = Vt((o) => o.target.tag === "NodeWindow" && o.target._2 === "PlopIn")(Bt((o) => (i) => st.compare(o.startT)(i.startT))(t.windows));
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return Vr(r._1.startT)(r._1.endT - 1e-4);
  f();
}, fu = (t) => (n) => (e) => Vt((r) => e(r) && n >= r.startT && n < r.endT)(t), Pu = (t) => (n) => {
  if (n < t.startT)
    return Le("AtKeyframe", t.initialKeyframe);
  const e = Vt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Le("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Le("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Le("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode" || e._1.scene.tag === "StepScene")
      return Le("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing")
    return Le("AtKeyframe", N(Dw)(t.initialKeyframe)(t.spans));
  f();
}, jw = (t) => (n) => {
  const e = Pu(t)(n), r = Hc((() => {
    if (e.tag === "AtKeyframe")
      return e._1;
    if (e.tag === "InTransition")
      return e._2;
    f();
  })())(t.keyframes);
  if (r.tag === "Just")
    return r._1.kind;
  if (r.tag === "Nothing")
    return Su;
  f();
}, Zw = (t) => (n) => {
  const e = Pu(t)(n);
  if (e.tag === "AtKeyframe")
    return Yn(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return Yn(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, tN = (t) => (n) => (e) => {
  const r = Pu(t)(n);
  if (r.tag === "AtKeyframe")
    return Af(t)(r._1)(e);
  if (r.tag === "InTransition")
    return Uw(t.windows)(n)(e) ? Af(t)(r._2)(e) : Af(t)(r._1)(e);
  f();
}, nN = {
  animationTime: 0,
  nodes: z,
  nodeLabels: z,
  edgeEndpoints: z,
  edges: z,
  tokens: z,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: Su,
  visited: z,
  nodeFadeAlpha: z,
  nodeLabelFadeAlpha: z,
  edgeFadeAlpha: z,
  nodeInvert: z
}, eN = { nodes: z, edges: z, chipExtras: z, edgeLabels: z }, rN = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: eN,
    placement: Ol,
    windows: [],
    spans: [],
    keyframes: z,
    initialKeyframe: "",
    edgeEndpoints: z
  },
  state: nN,
  bgAlpha: 1,
  minis: [],
  role: we
}, Wa = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : rN;
}, oN = (t) => (n) => {
  const e = Pu(t)(n);
  if (e.tag === "AtKeyframe")
    return ha(t)(e._1);
  if (e.tag === "InTransition")
    return ee(F.compare, ne, ha(t)(e._1), ha(t)(e._2));
  f();
}, iN = (t) => (n) => {
  const e = Pu(t)(n);
  if (e.tag === "AtKeyframe")
    return Rf(t)(e._1);
  if (e.tag === "InTransition")
    return ee(F.compare, ne, Rf(t)(e._1), Rf(t)(e._2));
  f();
}, gp = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : Vr(0)(cu(1)((n - t.startT) / e));
}, sN = (t) => (n) => (e) => p0(Mo(t.cameraConfig)(t.layout)(t.cameraSpans)(e.startT).camera)(Mo(t.cameraConfig)(t.layout)(t.cameraSpans)(e.endT).camera)(gp(e)(n)), G_ = (t) => (n) => (e) => {
  const r = Vr(0)(cu(1)((e - t) / Vr(1e-6)(n - t)));
  return r * r * r * (r * (r * 6 - 15) + 10);
}, _p = (t) => {
  if (t.tag === "Closed")
    return 0;
  if (t.tag === "Opening")
    return G_(0.3)(1)(t._1);
  if (t.tag === "Open")
    return 1;
  if (t.tag === "Closing")
    return 1 - G_(0)(0.7)(t._1);
  f();
}, uN = (t) => {
  const n = _p(t);
  return n <= 0 || n >= 1 ? 0 : se(3.141592653589793 * n);
}, Si = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : Vr(0)(cu(1)((n - t.startT) / e));
}, aN = (t) => (n) => ap(Tt((e) => {
  const r = fu(t.windows)(n)((o) => o.target.tag === "RelabelWindow" && o.target._1 === e);
  if (r.tag === "Just")
    return r._1.target.tag === "RelabelWindow" ? T(
      "Just",
      S(
        e,
        P_("RelabelingNode", { oldLabel: r._1.target._2, newLabel: r._1.target._3, progress: Si(r._1)(n) })
      )
    ) : x;
  if (r.tag === "Nothing") {
    if (Xw(t)(e)) {
      const o = tN(t)(n)(e);
      if (o.tag === "Just")
        return T("Just", S(e, P_("StaticNodeLabel", o._1)));
      if (o.tag === "Nothing")
        return x;
      f();
    }
    return x;
  }
  f();
})((() => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return z;
    if (r.tag === "Node")
      return nn("Node", r._1, r._2, r._3, void 0, e(r._5), e(r._6));
    f();
  };
  return Xt(Ae.foldr, e(t.layout.nodes));
})())), cN = (t) => (n) => (e) => (r) => (o) => {
  const i = fu(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._2.tag === "Retract" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = Ea(t.timing.edgeEasing)(Si(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : Ra("Extend", y0);
    if (u.tag === "Retract")
      return ts("Retracting", u._1, s);
    if (u.tag === "Extend")
      return ts("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing") {
    if (Mw(n)(e)(o))
      return Pf;
    const s = fu(n)(e)((u) => u.target.tag === "EdgeWindow" && u.target._1 === o);
    if (s.tag === "Just") {
      const u = Ea(t.timing.edgeEasing)(Si(s._1)(e)), a = s._1.target.tag === "EdgeWindow" ? s._1.target._2 : Ra("Extend", y0);
      if (a.tag === "Retract")
        return ts("Retracting", a._1, u);
      if (a.tag === "Extend")
        return ts("Extending", a._1, u);
      f();
    }
    if (s.tag === "Nothing")
      return Vw(n)(e)(o) ? Pf : Pw(o)(r) ? sp : Pf;
  }
  f();
}, fN = (t) => (n) => (e) => {
  const r = iN(n)(e);
  return Aw(B((o) => S(o, cN(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return z;
      if (i.tag === "Node")
        return nn("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Xt(Ae.foldr, o(n.layout.edges));
  })()));
}, lN = (t) => (n) => (e) => (r) => {
  const o = fu(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r && i.target._2 === "PlopOut");
  if (o.tag === "Just") {
    const i = Si(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : $0;
    if (s === "PlopIn")
      return ns("PloppingIn", i);
    if (s === "PlopOut")
      return ns("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing") {
    if (Yw(t)(n)(r))
      return Ef;
    const i = fu(t)(n)((s) => s.target.tag === "NodeWindow" && s.target._1 === r);
    if (i.tag === "Just") {
      const s = Si(i._1)(n), u = i._1.target.tag === "NodeWindow" ? i._1.target._2 : $0;
      if (u === "PlopIn")
        return ns("PloppingIn", s);
      if (u === "PlopOut")
        return ns("PloppingOut", s);
      f();
    }
    if (i.tag === "Nothing")
      return Kw(t)(n)(r) ? Ef : Rw(r)(e) ? ip : Ef;
  }
  f();
}, gN = (t) => (n) => {
  const e = oN(t)(n);
  return ap(B((r) => S(r, lN(t.windows)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return z;
      if (o.tag === "Node")
        return nn("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      f();
    };
    return Xt(Ae.foldr, r(t.layout.nodes));
  })()));
}, _N = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? S(
  n.target._1,
  e < n.startT ? Sf : e >= n.endT ? A_ : Ba(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: Ea(t.timing.tokenEasing)(Si(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? S(
  n.target._1,
  e < n.startT ? Sf : e >= n.endT ? A_ : Ba("Filling", { node: n.target._2, progress: Si(n)(e), labels: n.target._3 })
) : S("", Sf), dN = (t) => (n) => (e) => Fw(B((r) => _N(t)(r)(e))(_t(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), hN = (t) => (n) => (e) => ({
  animationTime: e,
  nodes: gN(n)(e),
  nodeLabels: aN(n)(e),
  edgeEndpoints: n.edgeEndpoints,
  edges: fN(t)(n)(e),
  tokens: dN(t)(n.windows)(e),
  camera: Mo(t.cameraConfig)(n.layout)(t.cameraSpans)(e).camera,
  frameTitle: Zw(n)(e),
  staticKind: jw(n)(e),
  visited: qw(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: z,
  nodeLabelFadeAlpha: z,
  edgeFadeAlpha: z,
  nodeInvert: z
}), is = (t) => (n) => (e) => (r) => ({ segment: e, state: hN(t)(e)(n), bgAlpha: 1, minis: pN(t)(n)(e), role: r }), pN = (t) => (n) => (e) => Tt((r) => {
  const o = Ha(t)(Lt(e.path)(r))(n);
  if (o.tag === "Just")
    return T("Just", { ...is(t)(Gw(o._1.startT)(o._1.endT - 1e-4)(n))(o._1)(fp), bgAlpha: 0 });
  if (o.tag === "Nothing")
    return x;
  f();
})((() => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return z;
    if (o.tag === "Node")
      return nn("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
    f();
  };
  return Xt(Ae.foldr, r(e.layout.nodes));
})()), mN = (t) => (n) => {
  if (t.direction === "DiveIn")
    return lp(n);
  if (t.direction === "DiveOut")
    return t.startT - 1e-4;
  f();
}, dp = (t) => (n) => Tt((e) => {
  const r = Vt((o) => o.direction === "DiveIn" && za.eq(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : Ft(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = Ha(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return T(
        "Just",
        (() => {
          const i = is(t)(r._1.startT - 1e-4)(o._1)(fp);
          return { ...i, state: { ...i.state, nodeFadeAlpha: nn("Node", 1, 1, r._1.node, 0, z, z) } };
        })()
      );
    if (o.tag === "Nothing")
      return x;
    f();
  }
  if (r.tag === "Nothing")
    return x;
  f();
})(Ww(n)), hp = (t) => (n) => {
  const e = _t((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : Hw(t);
}, $N = (t) => (n) => (e) => (r) => {
  const o = (u) => {
    const a = is(t)((() => {
      if (e.direction === "DiveIn")
        return e.startT - 1e-4;
      if (e.direction === "DiveOut")
        return e.endT;
      f();
    })())(u)(Bw);
    return {
      ...a,
      bgAlpha: 1,
      minis: _t((c) => !za.eq(c.segment.path)(e.childPath), a.minis),
      state: {
        ...a.state,
        edgeFadeAlpha: z,
        nodeFadeAlpha: nn("Node", 1, 1, e.node, 0, z, z),
        nodeInvert: z,
        tokens: z
      }
    };
  }, i = Ha(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT;
    f();
  })()), s = Ha(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })());
  return [
    ...dp(t)(e.parentPath),
    ...(() => {
      if (i.tag === "Just") {
        if (s.tag === "Just")
          return [o(i._1), { ...is(t)(mN(e)(s._1))(s._1)(we), bgAlpha: 1 }];
        if (s.tag === "Nothing")
          return [o(i._1)];
        f();
      }
      if (i.tag === "Nothing")
        return [is(t)(n)(hp(t)(n))(we)];
      f();
    })()
  ];
}, yN = (t) => (n) => Vt((e) => n >= e.startT && n < e.endT)(t.dives), pp = (t) => (n) => {
  const e = hp(t)(n), r = t.dives.length !== 0, o = Mo(t.cameraConfig)(t.layout)(t.cameraSpans)(n).camera, i = Li(t.layout)(t.cameraConfig.padding)(e)(o), s = dp(t)(e.path), u = is(t)(e.path.length === 0 ? n : Vr(n)(lp(e)))(e)(we), a = { ...u, state: { ...u.state, camera: i } }, c = yN(t)(n);
  if (c.tag === "Just") {
    const l = gp(c._1)(n);
    return {
      levels: $N(t)(n)(c._1)(sN(t)(n)(c._1)),
      camera: o,
      rootLayout: t.layout,
      hasDives: r,
      portalState: (() => {
        if (c._1.direction === "DiveIn")
          return Da("Opening", Vr(0)(cu(1)(l)));
        if (c._1.direction === "DiveOut")
          return Da("Closing", Vr(0)(cu(1)(l)));
        f();
      })()
    };
  }
  if (c.tag === "Nothing")
    return { levels: Lt(s)(a), camera: i, rootLayout: t.layout, hasDives: r, portalState: e.path.length === 0 ? cp : Iw };
  f();
}, xN = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vN = (t) => {
  const n = t.length;
  return ((r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, l = s;
      if (c >= n) {
        u = !1, a = l;
        continue;
      }
      const d = (_) => (g) => {
        let p = _, $ = g, h = !0, m;
        for (; h; ) {
          const y = p, v = $;
          if (y >= n) {
            h = !1, m = v;
            continue;
          }
          if (c >= 0 && c < t.length) {
            if (y >= 0 && y < t.length) {
              p = y + 1 | 0, $ = (() => {
                const w = t[c].position, C = t[c].size, J = t[y].position, k = t[y].size;
                return w._1 < J._1 + k._1 && J._1 < w._1 + C._1 && w._2 < J._2 + k._2 && J._2 < w._2 + C._2;
              })() ? v + 1 | 0 : v;
              continue;
            }
            p = y + 1 | 0, $ = v;
            continue;
          }
          h = !1, m = v;
        }
        return m;
      };
      i = c + 1 | 0, s = d(c + 1 | 0)(l);
    }
    return a;
  })(0)(0);
}, I_ = (t) => N((n) => (e) => n + dv(e.start)(e.end))(0)(t.segments), mp = (t) => (n) => (e) => ({
  crossingCount: N((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: N((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: N((r) => (o) => r + I_(o))(0)(n),
  maxEdgeLength: N((r) => (o) => xN(r)(I_(o)))(0)(n),
  nodeOverlapCount: vN(t),
  constraintViolations: e,
  jumpCount: N((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), ng = (t) => t, yn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, eg = /* @__PURE__ */ ng("LEFT"), TN = /* @__PURE__ */ ng("RIGHT"), $p = /* @__PURE__ */ ng("UNDEFINED"), wN = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, NN = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? Te : jn;
    if (n === "LEFT")
      return Zn;
    if (t === "RIGHT")
      return n === "RIGHT" ? Te : jn;
    if (n === "RIGHT")
      return Zn;
    if (t === "UP")
      return n === "UP" ? Te : jn;
    if (n === "UP")
      return Zn;
    if (t === "DOWN")
      return n === "DOWN" ? Te : jn;
    if (n === "DOWN")
      return Zn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return Te;
    f();
  },
  Eq0: () => wN
}, CN = (t) => (e) => {
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
}, JN = { x: 0, y: 0 }, Ue = (t) => (n) => (e) => {
  const r = yn(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: rt(ct)(t)(n(r._1))(e.cNodes) };
  f();
}, Zs = (t) => (n) => (e) => {
  const r = yn(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: rt(ct)(t)(n(r._1))(e.cGroups) };
  f();
}, bN = (t) => N((n) => (e) => Ue(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), kN = (t) => {
  const n = N((e) => (r) => {
    const o = yn(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return N((i) => (s) => Ot(ct)(Sn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(z)(t.cNodeOrder);
  return N((e) => (r) => Ue(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = yn(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      f();
    })()
  }))(e))(t)(t.cNodeOrder);
}, LN = (t) => (n) => Ue(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), SN = (t) => {
  const n = N((e) => (r) => Zs(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return N((e) => (r) => Ue(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, xr = { left: !1, right: !1, up: !1, down: !1 }, EN = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, rg = (t) => N((n) => (e) => {
  const r = yn(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = N((s) => (u) => {
      const a = yn(u)(n.cNodes);
      if (a.tag === "Nothing")
        return s;
      if (a.tag === "Just") {
        if (s.tag === "Nothing")
          return T("Just", u);
        if (s.tag === "Just") {
          const c = yn(s._1)(n.cNodes);
          if (c.tag === "Nothing")
            return T("Just", u);
          if (c.tag === "Just")
            return a._1.hitbox.x < c._1.hitbox.x ? T("Just", u) : T("Just", s._1);
        }
      }
      f();
    })(x)(r._1.cNodes), i = Zs(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = yn(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return N((a) => (c) => Ue(c)((l) => ({ ...l, cGroupOffset: { x: l.hitbox.x - u.hitbox.x, y: l.hitbox.y - u.hitbox.y } }))(a))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), Qe = (t) => rg({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return z;
      if (e.tag === "Node")
        return nn("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), Dr = (t) => rg({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return z;
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
}), yp = (t) => {
  const n = N((e) => (r) => Zs(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return N((e) => (r) => {
    const o = yn(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return N((s) => (u) => {
          const a = yn(u)(s.cNodes);
          if (a.tag === "Nothing")
            return s;
          if (a.tag === "Just")
            return a._1.cGroup.tag === "Just" && a._1.cGroup._1 !== i ? Zs(a._1.cGroup._1)((c) => ({ ...c, outDegree: c.outDegree + 1 | 0, outDegreeReal: c.outDegreeReal + 1 | 0 }))(Zs(i)((c) => Se(qo)(u)(c.incomingConstraints) ? c : { ...c, incomingConstraints: [...c.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, Yu = (t) => {
  const n = kN(t.cGraph);
  return { ...t, cGraph: yp(N((e) => (r) => Ue(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, PN = (t) => (n) => N((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Ue(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Ue(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), hr = (t) => {
  const n = {
    ...t,
    cGraph: PN(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return z;
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
    cGraph: yp((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, AN = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? hr(r) : n === "RIGHT" ? hr({ ...r, cGraph: Qe(r.cGraph) }) : n === "UP" ? hr({ ...r, cGraph: Dr(r.cGraph) }) : n === "DOWN" ? hr({ ...r, cGraph: Qe(Dr(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? Yu({ ...r, cGraph: Qe(r.cGraph) }) : n === "UP" ? hr({ ...r, cGraph: Dr(r.cGraph) }) : n === "DOWN" ? hr({ ...r, cGraph: Qe(Dr(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? Yu({ ...r, cGraph: Qe(r.cGraph) }) : n === "UP" ? hr({ ...r, cGraph: Dr(Qe(r.cGraph)) }) : n === "DOWN" ? hr({ ...r, cGraph: Qe(Dr(Qe(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? hr({ ...r, cGraph: Dr(r.cGraph) }) : n === "RIGHT" ? hr({ ...r, cGraph: Qe(Dr(r.cGraph)) }) : n === "DOWN" ? Yu({ ...r, cGraph: Qe(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? hr({ ...r, cGraph: Dr(Qe(r.cGraph)) }) : n === "RIGHT" ? hr({ ...r, cGraph: Qe(Dr(Qe(r.cGraph))) }) : n === "UP" ? Yu({ ...r, cGraph: Qe(r.cGraph) }) : r;
  f();
}, xp = (t) => (n) => n.finished || !CN(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : AN(n.direction)(t)(n), RN = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? xp(eg)(t) : t, e = { ...n, cGraph: SN(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, vp = (t) => (n) => (e) => {
  const r = yn(t)(e.cNodes), o = yn(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: rt(ct)(t)({ ...r._1, cGroup: T("Just", n) })(e.cNodes),
    cGroups: rt(ct)(n)({
      ...o._1,
      cNodes: Se(qo)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return T("Just", t);
        if (o._1.reference.tag === "Just")
          return T("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, Tp = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: rt(ct)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: x,
      cGroupOffset: JN,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: xr
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), og = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: N((r) => (o) => vp(o)(e)(r))({
      ...n,
      cGroups: rt(ct)(e)({
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
}, FN = (t) => N((n) => (e) => {
  const r = yn(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? og({ master: x, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), GN = (t) => ({
  cGraph: bN(FN(rg(t))),
  direction: $p,
  compactionAlgorithm: x,
  constraintAlgorithm: x,
  spacingsHandler: EN,
  lockFun: x,
  finished: !1
}), IN = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, BN = (t) => (n) => {
  const e = st.compare(t._1)(n._1);
  return e === "LT" ? jn : e === "GT" ? Zn : ct.compare(t._2)(n._2);
}, DN = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), B_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, D_ = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", z_ = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), Wc = (t) => (n) => BN(S(t.hitbox.x + t.hitbox.width / 2, t.id))(S(n.hitbox.x + n.hitbox.width / 2, n.id)), zN = (t) => (n) => {
  const e = bo(Ht, x, (r) => Wc(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = ah(Ht, x, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Lt(n)(t);
  f();
}, wp = (t) => (n) => {
  const e = _t((o) => Wc(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? T("Just", e[r]) : x;
}, HN = (t) => (n) => {
  const e = zN(n)(t.intervals), r = Vt((i) => Wc(n)(i) === "LT")(e), o = rt(ct)(n.id)((() => {
    const i = wp(n)(e);
    return i.tag === "Just" ? T("Just", i._1.id) : x;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return rt(ct)(r._1.id)(T("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      f();
    })()
  };
}, WN = (t) => (n) => {
  const e = st.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? Zn : Te : n.low ? jn : Te : e;
}, QN = (t) => N((n) => (e) => Ue(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(Tt((n) => yn(n)(t.cNodes))(t.cNodeOrder)), Ff = (t) => (n) => N((e) => (r) => {
  const o = yn(r._1)(e.cNodes);
  if (o.tag === "Just")
    return Ue(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(DN(t)), Np = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, H_ = (t) => (n) => (e) => N((r) => (o) => e(o) ? Ue(o.id)(Np(t))(r) : r)(n)(Tt((r) => yn(r)(n.cNodes))(n.cNodeOrder)), ON = (t) => (n) => {
  const e = (r, o, i) => {
    const s = Ue(i)(Np(t))(r);
    return o.length <= 1 ? s : N((u) => (a) => a === i ? u : Ue(a)((c) => c.ignoreSpacing.up ? { ...c, hitbox: { ...c.hitbox, y: c.hitbox.y + t + 0.01, height: c.hitbox.height - t - 0.01 } } : c.ignoreSpacing.down ? { ...c, hitbox: { ...c.hitbox, height: c.hitbox.height - t - 0.01 } } : c)(u))(s)(o);
  };
  return N((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(Tt((r) => yn(r)(n.cGroups))(n.cGroupOrder));
}, qN = (t) => (n) => {
  const e = wp(n)(t.intervals), r = Vt((i) => Wc(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = B_(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? Ot(ct)(Sn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = B_(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? Ot(ct)(Sn)(n.id)([r._1.id])(o) : o,
    intervals: _t((i) => i.id !== n.id, t.intervals)
  };
}, XN = (t) => (n) => n.low ? HN(t)(n.node) : qN(t)(n.node), Gf = (t) => (n) => N(XN)({ intervals: [], cand: z, constraints: z })(Bt(WN)(wt(_t(
  t,
  Tt((e) => yn(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, MN = (t) => (n) => {
  const e = IN(0)(t / 2 - 0.5), r = Ff(Gf(D_)(H_(e)(n)(D_)))(n), o = Ff(Gf(z_)(H_(e)(r)(z_)))(r);
  return Ff(Gf((i) => !0)(ON(e)(o)))(o);
}, UN = (t) => (n) => MN(t)(QN(n.cGraph)), Qa = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, W_ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ig = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: Qa(n._1)(e._1), y: Qa(n._2)(e._2), width: $n(n._1 - e._1), height: $n(n._2 - e._2) },
  ignoreSpacing: xr,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: x
}), YN = (t) => (n) => {
  const e = Qa(t.hitbox.x)(n.hitbox.x), r = Qa(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: W_(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: W_(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, KN = (t) => (n) => $n(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, VN = (t) => (n) => $n(t.hitbox.x - n.hitbox.x) <= 1e-4 ? st.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? jn : Zn, Cp = (t, n) => ({ tag: t, _1: n }), sg = /* @__PURE__ */ dn(F)(qt), Qc = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Q_ = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = F.compare(e._1)(r._1);
      if (o === "LT")
        return jn;
      if (o === "GT")
        return Zn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? Te : jn;
      if (r._2.tag === "Nothing")
        return Zn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return F.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return N((e) => (r) => rt(n)(r)()(e))(z);
})(), Co = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, jN = /* @__PURE__ */ N((t) => (n) => rt(NN)(n)()(t))(z), If = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Jh.compare(t)(s._3);
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
}, ZN = (t) => (n) => {
  const e = sg(B((i) => S(i.id, i))(t)), r = Tt((i) => Qc(i)(e))(n), o = ct.compare((() => {
    const i = Q_(B((s) => S(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = Q_(B((s) => S(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...xr, left: !0, right: !1 };
  if (o === "GT")
    return { ...xr, left: !1, right: !0 };
  if (o === "EQ")
    return xr;
  f();
}, tC = (t) => Tt((n) => {
  if (n.direction === "V")
    return T("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return x;
  f();
})(t.segments), Ku = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = Co(e)(n);
    if (o.tag === "Just") {
      const i = Vt((s) => s.id === r._1)(o._1);
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
}, nC = (t) => (n) => (e) => {
  const r = Tp({
    origin: T("Just", Cp("SegmentOrigin", e)),
    kind: T("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = LN(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = yn(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return vp(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return og({ master: T("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: N((i) => (s) => Ot(F)(Sn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: rt(ct)(r.id)(ZN(t)(e.representedEdges))(n.lockMap)
  };
}, eC = (t) => (n) => (e) => {
  const r = Rt(
    (o) => x,
    (o) => (i) => T("Just", { head: o, tail: i }),
    Bt(VN)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = N((i) => (s) => KN(i.survivor)(s) ? { ...i, survivor: YN(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return N(nC(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, rC = (t) => ({
  cGraph: {
    cNodes: z,
    cNodeOrder: [],
    cGroups: z,
    cGroupOrder: [],
    supportedDirections: jN([$p, eg, TN]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: z,
  edgeToCs: z,
  lockMap: z
}), oC = (t) => {
  const n = tt(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, iC = (t) => (n) => (e) => N((r) => (o) => {
  const i = Tp({ origin: T("Just", Cp("NodeOrigin", o.node)), kind: x, hitbox: oC(o) })(r.cGraph), s = Co(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return S(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: og({ master: T("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: rt(F)(o.node)(i.id)(r.nodeToC),
    lockMap: rt(ct)(i.id)((() => {
      const a = u._1 - u._2 | 0;
      return a < 0 ? { ...xr, left: !0 } : a > 0 ? { ...xr, right: !0 } : xr;
    })())(r.lockMap)
  };
})(e)(n), sC = (t) => N((n) => (e) => Ot(F)((r) => (o) => S(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(S(1, 0))(Ot(F)((r) => (o) => S(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(S(
  0,
  1
))(n)))(z)(t), uC = (t) => N((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? rt(F)(e.origin._1._1)(e.hitbox.x)(n) : n)(z)(Tt((n) => yn(n)(t.cNodes))(t.cNodeOrder)), aC = (t) => N((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? rt(F)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(z)(Tt((n) => yn(n)(t.cNodes))(t.cNodeOrder)), cC = (t) => N((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return N((o) => (i) => rt(Jh)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(z)(Tt((n) => yn(n)(t.cNodes))(t.cNodeOrder)), Jp = (t) => {
  const n = sg(B((e) => S(e.id, e))(t.edges));
  return Tt((e) => {
    const r = Qc(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: Ku(uo)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: Ku(ao)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: Ku(uo)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: Ku(ao)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return x;
    f();
  })(t.paths);
}, fC = (t) => (n) => {
  const e = wt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = Co(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return yn(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return x;
      f();
    })(), s = Co(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return yn(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return x;
      f();
    })(), a = (() => {
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
    })(), c = (g) => (p) => ($) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if ($.cGroup.tag === "Just")
            return g($.hitbox.x) && $.cGroup._1 !== u._1.cGroup._1 ? T("Just", p($.cGroup._1)(u._1.cGroup._1)) : x;
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
    }, l = Tt((g) => yn(g)(t.cGraph.cNodes))((() => {
      const g = Qc(r.edgeId)(t.edgeToCs);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })()), d = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const g = u._1;
        return Tt(c((p) => p < g.hitbox.x)((p) => ($) => ({ srcGroup: p, tgtGroup: $, delta: 1, weight: 100 })))(l);
      }
      return [];
    })(), _ = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const g = u._1;
        return Tt(c((p) => p > g.hitbox.x)((p) => ($) => ({ srcGroup: $, tgtGroup: p, delta: 1, weight: 100 })))(l);
      }
      return [];
    })();
    if (a.tag === "Nothing")
      return [];
    if (a.tag === "Just")
      return [a._1, ...d, ..._];
    f();
  });
  return {
    sameEdgeVerticalSegments: (r) => (o) => r.origin.tag === "Just" && r.origin._1.tag === "SegmentOrigin" && o.origin.tag === "Just" && o.origin._1.tag === "SegmentOrigin" && (() => {
      const i = o.origin._1._1;
      return sn((s) => Se(Zr)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, lC = (t) => (n) => {
  const e = tt(4), r = uC(t), o = aC(t), i = sg(B((u) => S(u.id, S(u.from.node, u.to.node)))(n.edges)), s = cC(t);
  return {
    nodes: B((u) => {
      const a = Co(u.node)(r);
      if (a.tag === "Just")
        return { ...u, position: S(a._1 / e, u.position._2) };
      if (a.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: B((u) => {
      const a = Qc(u.edge)(i), c = (() => {
        if (a.tag === "Nothing")
          return u.segments;
        if (a.tag === "Just") {
          const l = Co(a._1._1)(o), d = (() => {
            if (l.tag === "Nothing")
              return 0;
            if (l.tag === "Just")
              return l._1;
            f();
          })(), _ = Co(a._1._2)(o), g = (() => {
            if (_.tag === "Nothing")
              return 0;
            if (_.tag === "Just")
              return _._1;
            f();
          })();
          return Qt((() => {
            const p = u.reversed ? g : d, $ = u.reversed ? d : g, h = u.segments.length;
            return (m) => (y) => {
              if (y.direction === "V") {
                const v = (() => {
                  if (m === 0)
                    return p;
                  if (m === (h - 1 | 0))
                    return $;
                  const w = If(y.start)(s);
                  if (w.tag === "Nothing")
                    return 0;
                  if (w.tag === "Just")
                    return w._1;
                  f();
                })();
                return { ...y, start: S(y.start._1 + v, y.start._2), end: S(y.end._1 + v, y.end._2) };
              }
              if (y.direction === "H")
                return {
                  ...y,
                  start: S(
                    (() => {
                      if (m === 0)
                        return y.start._1 + p;
                      const v = If(y.start)(s);
                      if (v.tag === "Nothing")
                        return y.start._1 + 0;
                      if (v.tag === "Just")
                        return y.start._1 + v._1;
                      f();
                    })(),
                    y.start._2
                  ),
                  end: S(
                    (() => {
                      if (m === (h - 1 | 0))
                        return y.end._1 + $;
                      const v = If(y.end)(s);
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
      return { ...u, segments: c, bends: Gn((l) => (d) => l.end, c, Ft(1, c.length, c)) };
    })(n.paths)
  };
}, gC = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = ig(o.nextId)(i._2.start)(i._2.end)(x)(t.edgeId), u = (() => {
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
}, O_ = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...ig(i.nextId)(r.start)(S(r.start._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...xr, down: !0 } : { ...xr, up: !0 }
    }
  ]
}), Vu = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...ig(i.nextId)(r.end)(S(r.end._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...xr, down: !0 } : { ...xr, up: !0 }
    }
  ]
}), _C = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = Co(e.src)(t.nodeToC), o = Co(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const l = yn(r._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? T("Just", l._1.hitbox) : x;
    }
    if (r.tag === "Nothing")
      return x;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const l = yn(o._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? T("Just", l._1.hitbox) : x;
    }
    if (o.tag === "Nothing")
      return x;
    f();
  })(), u = tC(e.path), a = N(gC(e)(i)(s)(u.length - 1 | 0))(n)(Qt((l) => (d) => S(
    l,
    d
  ))(u));
  if (0 < u.length) {
    const l = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return O_(e)(r._1)(i._1)(u[0])({ side: qn, down: !0 })(a);
        if (e.srcSide === "South")
          return O_(e)(r._1)(i._1)(u[0])({ side: Xn, down: !1 })(a);
      }
      return a;
    })(), d = u.length - 1 | 0;
    if (d >= 0 && d < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return Vu(e)(o._1)(s._1)(u[d])({ side: qn, down: !0 })(l);
      if (e.tgtSide === "South")
        return Vu(e)(o._1)(s._1)(u[d])({ side: Xn, down: !1 })(l);
    }
    return l;
  }
  const c = u.length - 1 | 0;
  if (c >= 0 && c < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return Vu(e)(o._1)(s._1)(u[c])({ side: qn, down: !0 })(a);
    if (e.tgtSide === "South")
      return Vu(e)(o._1)(s._1)(u[c])({ side: Xn, down: !1 })(a);
  }
  return a;
}, dC = (t) => (n) => (e) => eC(t)(N(_C(e))({ nextId: 0, segments: [] })(n).segments)(e), hC = (t) => dC(t.edges)(Jp(t))(iC(sC(t.edges))(t.nodes)(rC())), Jo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, x0 = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, v0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, pC = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, mC = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let a = u, c = !0, l;
      for (; c; ) {
        const d = a, _ = Rt((g) => x, (g) => (p) => T("Just", { head: g, tail: p }), d.queue);
        if (_.tag === "Nothing") {
          c = !1, l = d;
          continue;
        }
        if (_.tag === "Just") {
          const g = _._1.head;
          if (((h) => {
            let m = h, y = !0, v;
            for (; y; ) {
              const w = m;
              if (w.tag === "Leaf") {
                y = !1, v = !1;
                continue;
              }
              if (w.tag === "Node") {
                const C = t.compare(g)(w._3);
                if (C === "LT") {
                  m = w._5;
                  continue;
                }
                if (C === "GT") {
                  m = w._6;
                  continue;
                }
                if (C === "EQ") {
                  y = !1, v = !0;
                  continue;
                }
              }
              f();
            }
            return v;
          })(d.removedNodes)) {
            a = { ...d, queue: _._1.tail };
            continue;
          }
          const p = Vt(($) => !Jo($.eid)(d.removedEdges) && (n.eq($.src)(g) || n.eq($.tgt)(g)))(r);
          if (p.tag === "Nothing") {
            a = { ...d, queue: _._1.tail };
            continue;
          }
          if (p.tag === "Just") {
            const $ = n.eq(p._1.src)(g) ? p._1.tgt : p._1.src, h = {
              ...d,
              degree: rt(t)($)((() => {
                const y = ((v) => {
                  let w = v, C = !0, J;
                  for (; C; ) {
                    const k = w;
                    if (k.tag === "Leaf") {
                      C = !1, J = x;
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
                        C = !1, J = T("Just", k._4);
                        continue;
                      }
                    }
                    f();
                  }
                  return J;
                })(d.degree);
                if (y.tag === "Nothing")
                  return -1;
                if (y.tag === "Just")
                  return y._1 - 1 | 0;
                f();
              })())(d.degree),
              removedNodes: rt(t)(g)()(d.removedNodes),
              removedEdges: rt(ct)(p._1.eid)()(d.removedEdges),
              record: [...d.record, { node: g, neighbour: $, viaSrc: n.eq(p._1.src)(g) }],
              queue: _._1.tail
            };
            if ((() => {
              const y = ((w) => {
                let C = w, J = !0, k;
                for (; J; ) {
                  const E = C;
                  if (E.tag === "Leaf") {
                    J = !1, k = x;
                    continue;
                  }
                  if (E.tag === "Node") {
                    const L = t.compare($)(E._3);
                    if (L === "LT") {
                      C = E._5;
                      continue;
                    }
                    if (L === "GT") {
                      C = E._6;
                      continue;
                    }
                    if (L === "EQ") {
                      J = !1, k = T("Just", E._4);
                      continue;
                    }
                  }
                  f();
                }
                return k;
              })(h.degree), v = (w) => {
                let C = w, J = !0, k;
                for (; J; ) {
                  const E = C;
                  if (E.tag === "Leaf") {
                    J = !1, k = !1;
                    continue;
                  }
                  if (E.tag === "Node") {
                    const L = t.compare($)(E._3);
                    if (L === "LT") {
                      C = E._5;
                      continue;
                    }
                    if (L === "GT") {
                      C = E._6;
                      continue;
                    }
                    if (L === "EQ") {
                      J = !1, k = !0;
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
              })() && !v(h.removedNodes);
            })()) {
              a = { ...h, queue: [...h.queue, $] };
              continue;
            }
            a = h;
            continue;
          }
        }
        f();
      }
      return l;
    }, i = N((u) => (a) => Ot(t)(An)(a.src)(1)(Ot(t)(An)(a.tgt)(1)(u)))(z)(r), s = o({
      degree: i,
      removedNodes: z,
      removedEdges: z,
      record: [],
      queue: _t(
        (u) => {
          const c = ((l) => {
            let d = l, _ = !0, g;
            for (; _; ) {
              const p = d;
              if (p.tag === "Leaf") {
                _ = !1, g = x;
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
                  _ = !1, g = T("Just", p._4);
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
      coreNodes: _t(
        (u) => !((c) => {
          let l = c, d = !0, _;
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
      coreEdges: _t((u) => !Jo(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, $C = (t) => (n) => (e) => N((r) => (o) => {
  const i = o.neighbour, s = (() => {
    const u = ((c) => {
      let l = c, d = !0, _;
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
            d = !1, _ = T("Just", g._4);
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
  return rt(t)(o.node)(o.viaSrc ? s - 1 | 0 : s + 1 | 0)(r);
})(e)(un(n)), T0 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: rt(t)(r)()(o.treeNode) };
    return N((s) => (u) => {
      if (Jo(u.eid)(s.st.edgeVisited))
        return s;
      const a = { ...s.st, edgeVisited: rt(ct)(u.eid)()(s.st.edgeVisited) }, c = n.eq(u.src)((() => {
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
        return d(a.treeNode) && !((p) => {
          let $ = p, h = !0, m;
          for (; h; ) {
            const y = $;
            if (y.tag === "Leaf") {
              h = !1, m = !1;
              continue;
            }
            if (y.tag === "Node") {
              const v = t.compare(_)(y._3);
              if (v === "LT") {
                $ = y._5;
                continue;
              }
              if (v === "GT") {
                $ = y._6;
                continue;
              }
              if (v === "EQ") {
                h = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(a.treeNode);
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
        return d(a.treeNode) && !((p) => {
          let $ = p, h = !0, m;
          for (; h; ) {
            const y = $;
            if (y.tag === "Leaf") {
              h = !1, m = !1;
              continue;
            }
            if (y.tag === "Node") {
              const v = t.compare(_)(y._3);
              if (v === "LT") {
                $ = y._5;
                continue;
              }
              if (v === "GT") {
                $ = y._6;
                continue;
              }
              if (v === "EQ") {
                h = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(a.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if (Jo(u.eid)(a.treeEdge)) {
        if (((_) => {
          let g = _, p = !0, $;
          for (; p; ) {
            const h = g;
            if (h.tag === "Leaf") {
              p = !1, $ = !1;
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
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(a.treeNode))
          return { ...s, st: a };
        const l = T0(t)(e)(c)(a);
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
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        }, d = u.tgt;
        return !l(a.treeNode) && (() => {
          const g = ((m) => {
            let y = m, v = !0, w;
            for (; v; ) {
              const C = y;
              if (C.tag === "Leaf") {
                v = !1, w = x;
                continue;
              }
              if (C.tag === "Node") {
                const J = t.compare(d)(C._3);
                if (J === "LT") {
                  y = C._5;
                  continue;
                }
                if (J === "GT") {
                  y = C._6;
                  continue;
                }
                if (J === "EQ") {
                  v = !1, w = T("Just", C._4);
                  continue;
                }
              }
              f();
            }
            return w;
          })(a.layer), p = u.src, h = ((m) => {
            let y = m, v = !0, w;
            for (; v; ) {
              const C = y;
              if (C.tag === "Leaf") {
                v = !1, w = x;
                continue;
              }
              if (C.tag === "Node") {
                const J = t.compare(p)(C._3);
                if (J === "LT") {
                  y = C._5;
                  continue;
                }
                if (J === "GT") {
                  y = C._6;
                  continue;
                }
                if (J === "EQ") {
                  v = !1, w = T("Just", C._4);
                  continue;
                }
              }
              f();
            }
            return w;
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
        const l = T0(t)(e)(c)({ ...a, treeEdge: rt(ct)(u.eid)()(a.treeEdge) });
        return { count: s.count + l.count | 0, st: l.st };
      }
      return { ...s, st: a };
    })({ count: 1, st: i })(_t((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !Jo(s.eid)(i.edgeVisited), e));
  };
}, Oa = (t) => (n) => (e) => (r) => {
  const o = r.src, s = (($) => {
    let h = $, m = !0, y;
    for (; m; ) {
      const v = h;
      if (v.tag === "Leaf") {
        m = !1, y = x;
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
          m = !1, y = T("Just", v._4);
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
  })(), a = r.tgt, l = (($) => {
    let h = $, m = !0, y;
    for (; m; ) {
      const v = h;
      if (v.tag === "Leaf") {
        m = !1, y = x;
        continue;
      }
      if (v.tag === "Node") {
        const w = t.compare(a)(v._3);
        if (w === "LT") {
          h = v._5;
          continue;
        }
        if (w === "GT") {
          h = v._6;
          continue;
        }
        if (w === "EQ") {
          m = !1, y = T("Just", v._4);
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
      const v = h;
      if (v.tag === "Leaf") {
        m = !1, y = x;
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
          m = !1, y = T("Just", v._4);
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
      let v = y, w = !0, C;
      for (; w; ) {
        const J = v;
        if (J.tag === "Leaf") {
          w = !1, C = x;
          continue;
        }
        if (J.tag === "Node") {
          const k = t.compare($)(J._3);
          if (k === "LT") {
            v = J._5;
            continue;
          }
          if (k === "GT") {
            v = J._6;
            continue;
          }
          if (k === "EQ") {
            w = !1, C = T("Just", J._4);
            continue;
          }
        }
        f();
      }
      return C;
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
        const w = ((C) => {
          let J = C, k = !0, E;
          for (; k; ) {
            const L = J;
            if (L.tag === "Leaf") {
              k = !1, E = x;
              continue;
            }
            if (L.tag === "Node") {
              const I = t.compare(y)(L._3);
              if (I === "LT") {
                J = L._5;
                continue;
              }
              if (I === "GT") {
                J = L._6;
                continue;
              }
              if (I === "EQ") {
                k = !1, E = T("Just", L._4);
                continue;
              }
            }
            f();
          }
          return E;
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
}, yC = (t) => {
  const n = dn(t)(qt);
  return (e) => ({
    layer: n(B((r) => S(r, 0))(e)),
    treeNode: z,
    treeEdge: z,
    poID: z,
    lowestPoID: z,
    cutvalue: z,
    postOrder: 1,
    edgeVisited: z
  });
}, xC = (t) => (n) => (e) => N((r) => (o) => {
  if ((() => {
    const _ = o.src, g = (h) => {
      let m = h, y = !0, v;
      for (; y; ) {
        const w = m;
        if (w.tag === "Leaf") {
          y = !1, v = !1;
          continue;
        }
        if (w.tag === "Node") {
          const C = t.compare(_)(w._3);
          if (C === "LT") {
            m = w._5;
            continue;
          }
          if (C === "GT") {
            m = w._6;
            continue;
          }
          if (C === "EQ") {
            y = !1, v = !0;
            continue;
          }
        }
        f();
      }
      return v;
    }, p = o.tgt, $ = (h) => {
      let m = h, y = !0, v;
      for (; y; ) {
        const w = m;
        if (w.tag === "Leaf") {
          y = !1, v = !1;
          continue;
        }
        if (w.tag === "Node") {
          const C = t.compare(p)(w._3);
          if (C === "LT") {
            m = w._5;
            continue;
          }
          if (C === "GT") {
            m = w._6;
            continue;
          }
          if (C === "EQ") {
            y = !1, v = !0;
            continue;
          }
        }
        f();
      }
      return v;
    };
    return g(e.treeNode) === $(e.treeNode);
  })())
    return r;
  const i = o.tgt, u = ((_) => {
    let g = _, p = !0, $;
    for (; p; ) {
      const h = g;
      if (h.tag === "Leaf") {
        p = !1, $ = x;
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
          p = !1, $ = T("Just", h._4);
          continue;
        }
      }
      f();
    }
    return $;
  })(e.layer), a = o.src, l = ((_) => {
    let g = _, p = !0, $;
    for (; p; ) {
      const h = g;
      if (h.tag === "Leaf") {
        p = !1, $ = x;
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
          p = !1, $ = T("Just", h._4);
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
  return d < r.slack ? { edge: T("Just", o), slack: d } : r;
})({ edge: x, slack: 1e9 })(n).edge, vC = (t) => {
  const n = dn(t)(qt);
  return (e) => (r) => {
    const o = N((i) => (s) => x0(i)((() => {
      const a = ((c) => {
        let l = c, d = !0, _;
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
              d = !1, _ = T("Just", g._4);
              continue;
            }
          }
          f();
        }
        return _;
      })(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    })()))(1e9)(e);
    return n(B((i) => S(
      i,
      (() => {
        const u = ((a) => {
          let c = a, l = !0, d;
          for (; l; ) {
            const _ = c;
            if (_.tag === "Leaf") {
              l = !1, d = x;
              continue;
            }
            if (_.tag === "Node") {
              const g = t.compare(i)(_._3);
              if (g === "LT") {
                c = _._5;
                continue;
              }
              if (g === "GT") {
                c = _._6;
                continue;
              }
              if (g === "EQ") {
                l = !1, d = T("Just", _._4);
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
}, bp = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = N((u) => (a) => {
      const c = bp(t)(e)(n.eq(a.src)(r) ? a.tgt : a.src)({ ...u.st, edgeVisited: rt(ct)(a.eid)()(u.st.edgeVisited) });
      return { lowest: x0(u.lowest)(c.lowest), st: c.st };
    })({ lowest: 1e9, st: o })(_t(
      (u) => Jo(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !Jo(u.eid)(o.edgeVisited),
      e
    )), s = x0(i.lowest)(i.st.postOrder);
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
}, kp = (t) => {
  const n = bp(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: z, postOrder: 1, poID: z, lowestPoID: z }).st : o;
}, TC = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => _t((i) => Jo(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, wC = (t) => (n) => Vt((e) => {
  const r = v0(e.eid)(n.cutvalue);
  return Jo(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), Lp = (t) => {
  const n = T0(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? T("Just", e[0]) : x;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: z, treeNode: z, treeEdge: z });
      if (s.count >= e.length)
        return s.st;
      const u = xC(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const a = u._1.tgt, l = ((h) => {
          let m = h, y = !0, v;
          for (; y; ) {
            const w = m;
            if (w.tag === "Leaf") {
              y = !1, v = x;
              continue;
            }
            if (w.tag === "Node") {
              const C = t.compare(a)(w._3);
              if (C === "LT") {
                m = w._5;
                continue;
              }
              if (C === "GT") {
                m = w._6;
                continue;
              }
              if (C === "EQ") {
                y = !1, v = T("Just", w._4);
                continue;
              }
            }
            f();
          }
          return v;
        })(s.st.layer), d = u._1.src, g = ((h) => {
          let m = h, y = !0, v;
          for (; y; ) {
            const w = m;
            if (w.tag === "Leaf") {
              y = !1, v = x;
              continue;
            }
            if (w.tag === "Node") {
              const C = t.compare(d)(w._3);
              if (C === "LT") {
                m = w._5;
                continue;
              }
              if (C === "GT") {
                m = w._6;
                continue;
              }
              if (C === "EQ") {
                y = !1, v = T("Just", w._4);
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
        })(), $ = (() => {
          const h = u._1.tgt;
          return ((y) => {
            let v = y, w = !0, C;
            for (; w; ) {
              const J = v;
              if (J.tag === "Leaf") {
                w = !1, C = !1;
                continue;
              }
              if (J.tag === "Node") {
                const k = t.compare(h)(J._3);
                if (k === "LT") {
                  v = J._5;
                  continue;
                }
                if (k === "GT") {
                  v = J._6;
                  continue;
                }
                if (k === "EQ") {
                  w = !1, C = !0;
                  continue;
                }
              }
              f();
            }
            return C;
          })(s.st.treeNode);
        })() ? -p : p;
        return Lp(t)(e)(r)({
          ...s.st,
          layer: N((h) => (m) => ((v) => {
            let w = v, C = !0, J;
            for (; C; ) {
              const k = w;
              if (k.tag === "Leaf") {
                C = !1, J = !1;
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
                  C = !1, J = !0;
                  continue;
                }
              }
              f();
            }
            return J;
          })(s.st.treeNode) ? rt(t)(m)((() => {
            const v = ((w) => {
              let C = w, J = !0, k;
              for (; J; ) {
                const E = C;
                if (E.tag === "Leaf") {
                  J = !1, k = x;
                  continue;
                }
                if (E.tag === "Node") {
                  const L = t.compare(m)(E._3);
                  if (L === "LT") {
                    C = E._5;
                    continue;
                  }
                  if (L === "GT") {
                    C = E._6;
                    continue;
                  }
                  if (L === "EQ") {
                    J = !1, k = T("Just", E._4);
                    continue;
                  }
                }
                f();
              }
              return k;
            })(s.st.layer);
            if (v.tag === "Nothing")
              return 0 + $ | 0;
            if (v.tag === "Just")
              return v._1 + $ | 0;
            f();
          })())(h) : h)(s.st.layer)(e)
        });
      }
    }
    f();
  };
}, NC = (t) => (n) => (e) => (r) => N((o) => (i) => {
  if (Oa(t)(r)(i.src)(e) && !Oa(t)(r)(i.tgt)(e)) {
    const s = i.tgt, a = ((g) => {
      let p = g, $ = !0, h;
      for (; $; ) {
        const m = p;
        if (m.tag === "Leaf") {
          $ = !1, h = x;
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
            $ = !1, h = T("Just", m._4);
            continue;
          }
        }
        f();
      }
      return h;
    })(r.layer), c = i.src, d = ((g) => {
      let p = g, $ = !0, h;
      for (; $; ) {
        const m = p;
        if (m.tag === "Leaf") {
          $ = !1, h = x;
          continue;
        }
        if (m.tag === "Node") {
          const y = t.compare(c)(m._3);
          if (y === "LT") {
            p = m._5;
            continue;
          }
          if (y === "GT") {
            p = m._6;
            continue;
          }
          if (y === "EQ") {
            $ = !1, h = T("Just", m._4);
            continue;
          }
        }
        f();
      }
      return h;
    })(r.layer), _ = (() => {
      if (a.tag === "Nothing") {
        if (d.tag === "Nothing")
          return -i.delta;
        if (d.tag === "Just")
          return -d._1 - i.delta | 0;
        f();
      }
      if (a.tag === "Just") {
        if (d.tag === "Nothing")
          return (a._1 - 0 | 0) - i.delta | 0;
        if (d.tag === "Just")
          return (a._1 - d._1 | 0) - i.delta | 0;
      }
      f();
    })();
    if (_ < o.slack)
      return { edge: T("Just", i), slack: _ };
  }
  return o;
})({ edge: x, slack: 1e9 })(n).edge, CC = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return N((a) => (c) => {
      if ((() => {
        const l = v0(c.eid)(r.cutvalue);
        if (l.tag === "Just")
          return !0;
        if (l.tag === "Nothing")
          return !1;
        f();
      })()) {
        const l = v0(c.eid)(r.cutvalue), d = (() => {
          if (l.tag === "Nothing")
            return 0;
          if (l.tag === "Just")
            return l._1;
          f();
        })();
        return n.eq(u)(c.src) || n.eq(s)(c.tgt) ? a - (d - c.weight) : a + (d - c.weight);
      }
      return n.eq(o)(u) ? n.eq(c.src)(o) ? a + c.weight : a - c.weight : n.eq(c.src)(o) ? a - c.weight : a + c.weight;
    })(i.weight)(_t((a) => a.eid !== i.eid && (n.eq(a.src)(o) || n.eq(a.tgt)(o)), e));
  };
}, JC = (t) => {
  const n = CC(t);
  return (e) => (r) => (o) => {
    const i = (u, a, c) => {
      const d = ((_) => {
        let g = _, p = !0, $;
        for (; p; ) {
          const h = g;
          if (h.tag === "Leaf") {
            p = !1, $ = x;
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
              p = !1, $ = T("Just", h._4);
              continue;
            }
          }
          f();
        }
        return $;
      })(c);
      if (d.tag === "Just")
        return rt(t)(u)(_t((_) => _.eid !== a.eid, d._1))(c);
      if (d.tag === "Nothing")
        return c;
      f();
    };
    return ((u) => (a) => {
      let c = u, l = a, d = !0, _;
      for (; d; ) {
        const g = c, p = l, h = ((y) => {
          let v = y, w = !0, C;
          for (; w; ) {
            const J = v;
            if (J.tag === "Leaf") {
              w = !1, C = x;
              continue;
            }
            if (J.tag === "Node") {
              const k = t.compare(p)(J._3);
              if (k === "LT") {
                v = J._5;
                continue;
              }
              if (k === "GT") {
                v = J._6;
                continue;
              }
              if (k === "EQ") {
                w = !1, C = T("Just", J._4);
                continue;
              }
            }
            f();
          }
          return C;
        })(g.unknown), m = (() => {
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
          f();
        })();
        if (m.length === 1) {
          const y = t.Eq0().eq(m[0].src)(p) ? m[0].tgt : m[0].src;
          c = {
            unknown: i(p, m[0], i(y, m[0], g.unknown)),
            cutvalue: rt(ct)(m[0].eid)(n(e)(g)(p)(m[0]))(g.cutvalue)
          }, l = y;
          continue;
        }
        d = !1, _ = g;
      }
      return _;
    })(r)(o);
  };
}, Sp = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (c) => (l) => c.delta === l.delta && c.eid === l.eid && e.eq(c.src)(l.src) && n.eq(c.tgt)(l.tgt) && c.weight === l.weight }, o = {
    compare: (c) => (l) => {
      const d = ct.compare(c.delta)(l.delta);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const _ = ct.compare(c.eid)(l.eid);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const g = t.compare(c.src)(l.src);
      if (g === "LT" || g === "GT" || g !== "EQ")
        return g;
      const p = t.compare(c.tgt)(l.tgt);
      if (p === "LT" || p === "GT" || p !== "EQ")
        return p;
      const $ = st.compare(c.weight)(l.weight);
      return $ === "LT" || $ === "GT" || $ !== "EQ" ? $ : Te;
    },
    Eq0: () => r
  }, i = N((c) => (l) => rt(o)(l)()(c))(z), s = TC(t), u = dn(t)(qt), a = JC(t);
  return (c) => (l) => (d) => {
    const _ = {
      unknown: u(B((g) => S(
        g,
        Xt(Ae.foldr, i(s(l)(d)(g)))
      ))(c)),
      cutvalue: z
    };
    return {
      ...d,
      cutvalue: N(a(l))(_)(_t(
        (g) => {
          const $ = ((h) => {
            let m = h, y = !0, v;
            for (; y; ) {
              const w = m;
              if (w.tag === "Leaf") {
                y = !1, v = x;
                continue;
              }
              if (w.tag === "Node") {
                const C = t.compare(g)(w._3);
                if (C === "LT") {
                  m = w._5;
                  continue;
                }
                if (C === "GT") {
                  m = w._6;
                  continue;
                }
                if (C === "EQ") {
                  y = !1, v = T("Just", w._4);
                  continue;
                }
              }
              f();
            }
            return v;
          })(_.unknown);
          if ($.tag === "Nothing")
            return !1;
          if ($.tag === "Just")
            return $._1.length === 1;
          f();
        },
        c
      )).cutvalue
    };
  };
}, bC = (t) => {
  const n = kp(t), e = Sp(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const a = { ...u, treeEdge: rt(ct)(s.eid)()(hs(ct)(i.eid)(u.treeEdge)) }, c = s.tgt, d = ((m) => {
      let y = m, v = !0, w;
      for (; v; ) {
        const C = y;
        if (C.tag === "Leaf") {
          v = !1, w = x;
          continue;
        }
        if (C.tag === "Node") {
          const J = t.compare(c)(C._3);
          if (J === "LT") {
            y = C._5;
            continue;
          }
          if (J === "GT") {
            y = C._6;
            continue;
          }
          if (J === "EQ") {
            v = !1, w = T("Just", C._4);
            continue;
          }
        }
        f();
      }
      return w;
    })(a.layer), _ = s.src, p = ((m) => {
      let y = m, v = !0, w;
      for (; v; ) {
        const C = y;
        if (C.tag === "Leaf") {
          v = !1, w = x;
          continue;
        }
        if (C.tag === "Node") {
          const J = t.compare(_)(C._3);
          if (J === "LT") {
            y = C._5;
            continue;
          }
          if (J === "GT") {
            y = C._6;
            continue;
          }
          if (J === "EQ") {
            v = !1, w = T("Just", C._4);
            continue;
          }
        }
        f();
      }
      return w;
    })(a.layer), $ = (() => {
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
    })(), h = Oa(t)(a)(s.tgt)(i) ? $ : -$;
    return e(r)(o)(n(r)(o)({
      ...a,
      layer: N((m) => (y) => Oa(t)(a)(y)(i) ? m : rt(t)(y)((() => {
        const w = ((C) => {
          let J = C, k = !0, E;
          for (; k; ) {
            const L = J;
            if (L.tag === "Leaf") {
              k = !1, E = x;
              continue;
            }
            if (L.tag === "Node") {
              const I = t.compare(y)(L._3);
              if (I === "LT") {
                J = L._5;
                continue;
              }
              if (I === "GT") {
                J = L._6;
                continue;
              }
              if (I === "EQ") {
                k = !1, E = T("Just", L._4);
                continue;
              }
            }
            f();
          }
          return E;
        })(a.layer);
        if (w.tag === "Nothing")
          return 0 + h | 0;
        if (w.tag === "Just")
          return w._1 + h | 0;
        f();
      })())(m))(a.layer)(r)
    }));
  };
}, kC = (t) => {
  const n = bC(t);
  return (e) => (r) => (o) => (i) => ((u) => (a) => {
    let c = u, l = a, d = !0, _;
    for (; d; ) {
      const g = c, p = l;
      if (g === 0) {
        d = !1, _ = p;
        continue;
      }
      const $ = wC(o)(p);
      if ($.tag === "Nothing") {
        d = !1, _ = p;
        continue;
      }
      if ($.tag === "Just") {
        const h = NC(t)(o)($._1)(p);
        if (h.tag === "Nothing") {
          d = !1, _ = p;
          continue;
        }
        if (h.tag === "Just") {
          c = g - 1 | 0, l = n(r)(o)($._1)(h._1)(p);
          continue;
        }
      }
      f();
    }
    return _;
  })(e)(i);
}, LC = (t) => {
  const n = Sp(t), e = kp(t), r = Lp(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, q_ = (t) => (n) => N((e) => (r) => Ot(t)(Sn)(n(r))([r])(e))(z), SC = (t) => {
  const n = dn(t)(qt);
  return (e) => (r) => (o) => {
    const i = (a) => (c) => (l) => (d) => {
      let _ = a, g = c, p = l, $ = d, h = !0, m;
      for (; h; ) {
        const y = _, v = g, w = p, C = $, J = Rt((k) => x, (k) => (E) => T("Just", { head: k, tail: E }), w);
        if (J.tag === "Nothing") {
          h = !1, m = C;
          continue;
        }
        if (J.tag === "Just") {
          const k = J._1.head, L = ((G) => {
            let O = G, ut = !0, ot;
            for (; ut; ) {
              const Z = O;
              if (Z.tag === "Leaf") {
                ut = !1, ot = x;
                continue;
              }
              if (Z.tag === "Node") {
                const U = t.compare(k)(Z._3);
                if (U === "LT") {
                  O = Z._5;
                  continue;
                }
                if (U === "GT") {
                  O = Z._6;
                  continue;
                }
                if (U === "EQ") {
                  ut = !1, ot = T("Just", Z._4);
                  continue;
                }
              }
              f();
            }
            return ot;
          })(C.layer), I = (() => {
            if (L.tag === "Nothing")
              return 0;
            if (L.tag === "Just")
              return L._1;
            f();
          })(), H = N((G) => (O) => {
            const ut = O.tgt, Z = ((P) => {
              let A = P, Q = !0, D;
              for (; Q; ) {
                const M = A;
                if (M.tag === "Leaf") {
                  Q = !1, D = x;
                  continue;
                }
                if (M.tag === "Node") {
                  const Y = t.compare(ut)(M._3);
                  if (Y === "LT") {
                    A = M._5;
                    continue;
                  }
                  if (Y === "GT") {
                    A = M._6;
                    continue;
                  }
                  if (Y === "EQ") {
                    Q = !1, D = T("Just", M._4);
                    continue;
                  }
                }
                f();
              }
              return D;
            })(G.incident), U = (() => {
              if (Z.tag === "Nothing")
                return -1;
              if (Z.tag === "Just")
                return Z._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...G.st,
                layer: rt(t)(O.tgt)(pC((() => {
                  const P = O.tgt, Q = ((D) => {
                    let M = D, Y = !0, q;
                    for (; Y; ) {
                      const X = M;
                      if (X.tag === "Leaf") {
                        Y = !1, q = x;
                        continue;
                      }
                      if (X.tag === "Node") {
                        const W = t.compare(P)(X._3);
                        if (W === "LT") {
                          M = X._5;
                          continue;
                        }
                        if (W === "GT") {
                          M = X._6;
                          continue;
                        }
                        if (W === "EQ") {
                          Y = !1, q = T("Just", X._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return q;
                  })(G.st.layer);
                  if (Q.tag === "Nothing")
                    return 0;
                  if (Q.tag === "Just")
                    return Q._1;
                  f();
                })())(I + O.delta | 0))(G.st.layer)
              },
              incident: rt(t)(O.tgt)(U)(G.incident),
              queue: U === 0 ? [...G.queue, O.tgt] : G.queue
            };
          })({ st: C, incident: v, queue: J._1.tail })((() => {
            const O = ((ut) => {
              let ot = ut, Z = !0, U;
              for (; Z; ) {
                const P = ot;
                if (P.tag === "Leaf") {
                  Z = !1, U = x;
                  continue;
                }
                if (P.tag === "Node") {
                  const A = t.compare(k)(P._3);
                  if (A === "LT") {
                    ot = P._5;
                    continue;
                  }
                  if (A === "GT") {
                    ot = P._6;
                    continue;
                  }
                  if (A === "EQ") {
                    Z = !1, U = T("Just", P._4);
                    continue;
                  }
                }
                f();
              }
              return U;
            })(y);
            if (O.tag === "Nothing")
              return [];
            if (O.tag === "Just")
              return O._1;
            f();
          })());
          _ = y, g = H.incident, p = H.queue, $ = H.st;
          continue;
        }
        f();
      }
      return m;
    }, s = q_(t)((a) => a.tgt)(r), u = n(B((a) => S(
      a,
      (() => {
        const l = ((d) => {
          let _ = d, g = !0, p;
          for (; g; ) {
            const $ = _;
            if ($.tag === "Leaf") {
              g = !1, p = x;
              continue;
            }
            if ($.tag === "Node") {
              const h = t.compare(a)($._3);
              if (h === "LT") {
                _ = $._5;
                continue;
              }
              if (h === "GT") {
                _ = $._6;
                continue;
              }
              if (h === "EQ") {
                g = !1, p = T("Just", $._4);
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
    return i(q_(t)((a) => a.src)(r))(u)(_t(
      (a) => {
        const l = ((d) => {
          let _ = d, g = !0, p;
          for (; g; ) {
            const $ = _;
            if ($.tag === "Leaf") {
              g = !1, p = x;
              continue;
            }
            if ($.tag === "Node") {
              const h = t.compare(a)($._3);
              if (h === "LT") {
                _ = $._5;
                continue;
              }
              if (h === "GT") {
                _ = $._6;
                continue;
              }
              if (h === "EQ") {
                g = !1, p = T("Just", $._4);
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
}, EC = (t) => {
  const n = yC(t), e = SC(t), r = LC(t), o = kC(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, Ep = (t) => {
  const n = vC(t), e = EC(t), r = mC(t);
  return (o) => (i) => {
    if (o.length === 0)
      return z;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)($C(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, Pp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, w0 = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, PC = /* @__PURE__ */ Ep(ct), lu = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), AC = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = tt((() => {
      const o = Pp(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return Ue(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, RC = (t) => (n) => ({
  ...n,
  cGraph: N(AC(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return Tt((r) => yn(r)(e.cNodes))(e.cNodeOrder);
  })())
}), FC = (t) => (n) => (e) => (r) => (o) => {
  const i = mn(Jc(n.cGroupOffset.x - t.cGroupOffset.x));
  return lu({ src: o.nextNodeId, tgt: r, delta: w0(0)(-i), weight: 1 })(lu({ src: o.nextNodeId, tgt: e, delta: w0(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, GC = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = w0(0)(mn(Jc(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? FC(e)(r)(o)(i)(s) : lu({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, IC = (t) => (n) => (e) => (r) => (o) => {
  const i = yn(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? GC(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, BC = (t) => (n) => (e) => (r) => N(IC(t)(n)(r))(e)(r.constraints), DC = (t) => (n) => lu({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), zC = (t) => {
  const n = N((o) => (i) => Ot(ct)(An)(i.tgt)(1)(o))(z)(t.edges), e = _t(
    (o) => {
      const i = Pp(o)(n);
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
  return N((o) => (i) => lu({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, HC = (t) => (n) => {
  const e = zC(N(DC)(N(BC(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return Tt((o) => yn(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, WC = (t) => (n) => {
  const e = HC(t)(n);
  return RC(PC(e.nodes)(e.edges))(n);
}, Ap = (t) => t, wn = /* @__PURE__ */ Ap("H"), xn = /* @__PURE__ */ Ap("V"), QC = (t) => S(t._2, t._1), Rp = (t) => ({ ...t, position: S(t.position._2, t.position._1), size: S(t.size._2, t.size._1) }), OC = (t) => ({
  start: S(t.start._2, t.start._1),
  end: S(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return xn;
    if (t.direction === "V")
      return wn;
    f();
  })()
}), Fp = (t) => ({ ...t, segments: B(OC)(t.segments), bends: B(QC)(t.bends) }), qC = (t) => ({ nodes: B(Rp)(t.nodes), edges: t.edges, paths: B(Fp)(t.paths), ports: t.ports }), XC = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, MC = (t) => (n) => ({
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
}), UC = (t) => (n) => WC(n), YC = (t) => (n) => (e) => {
  const r = qC(e), o = hC(r), i = fC(o)(Jp(r)), s = lC(xp(eg)(RN({
    ...GN(o.cGraph),
    compactionAlgorithm: T("Just", UC()(i)),
    constraintAlgorithm: T("Just", UN(n.edgeEdge)),
    spacingsHandler: MC(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: B(Rp)(s.nodes), edges: B(Fp)(s.edges) };
}, X_ = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Gp = (t) => Yn(3)(t) === "$d:", KC = (t) => (n) => (e) => N((r) => (o) => {
  const i = X_(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = X_(o.to.node)(t), a = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (a <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const c = o.id, l = B((_) => "$d:" + c + ":" + en(_))(Zt(1, a - 1 | 0)), d = [o.from.node, ...l, o.to.node];
  return {
    ...r,
    layers: N((_) => (g) => {
      const p = g._2, $ = lx(s + g._1 | 0)((h) => [...h, p])(_);
      if ($.tag === "Nothing")
        return _;
      if ($.tag === "Just")
        return $._1;
      f();
    })(r.layers)(Gn(Kn, Zt(1, a - 1 | 0), l)),
    edges: [
      ...r.edges,
      ...Gn(
        (_) => (g) => ({ id: c + ":" + _ + "->" + g, from: { node: _, port: o.from.port }, to: { node: g, port: o.to.port }, label: x }),
        d,
        Ft(1, d.length, d)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: d }]
  };
})({ layers: e, edges: [], chains: [] })(n), Ip = (t) => t, Xi = /* @__PURE__ */ dn(ct)(qt), tn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, M_ = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Jt = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, bt = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, es = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, VC = (t) => (n) => {
  const e = ct.compare(t._1)(n._1);
  return e === "LT" ? jn : e === "GT" ? Zn : ct.compare(t._2)(n._2);
}, Ki = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, jC = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), ZC = (t) => t, U_ = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, tJ = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ju = /* @__PURE__ */ Ip("Regular"), Zu = /* @__PURE__ */ Ip("Critical"), Bp = (t) => (n) => {
  const e = N((s) => (u) => rt(F)(u.node)(u)(s))(z)(n), r = 1.25 * tt(4), o = (s, u, a) => ((l) => (d) => (_) => {
    let g = l, p = d, $ = _, h = !0, m;
    for (; h; ) {
      const y = g, v = p, w = $;
      if (w.critical) {
        h = !1, m = w;
        continue;
      }
      const C = Rt((k) => x, (k) => (E) => T("Just", { head: k, tail: E }), y), J = Rt((k) => x, (k) => (E) => T("Just", { head: k, tail: E }), v);
      if (C.tag === "Just" && J.tag === "Just") {
        const k = C._1.head > J._1.head - s && C._1.head < J._1.head + s ? { ...w, critical: !0 } : C._1.head > J._1.head - r && C._1.head < J._1.head + r ? { ...w, conflicts: w.conflicts + 1 | 0 } : w;
        if (k.critical) {
          h = !1, m = k;
          continue;
        }
        if (C._1.head <= J._1.head) {
          g = C._1.tail, p = v, $ = k;
          continue;
        }
        g = y, p = J._1.tail, $ = k;
        continue;
      }
      h = !1, m = w;
    }
    return m;
  })(u)(a)({ conflicts: 0, critical: !1 }), i = (s, u, a) => {
    if (bt(N(bt)(-1e18)(u.incoming))(N(bt)(-1e18)(u.outgoing)) - Jt(N(Jt)(1e18)(u.incoming))(N(Jt)(1e18)(u.outgoing)) < 1e-3 || bt(N(bt)(-1e18)(a.incoming))(N(bt)(-1e18)(a.outgoing)) - Jt(N(Jt)(1e18)(a.incoming))(N(Jt)(1e18)(a.outgoing)) < 1e-3)
      return [];
    const c = o(s, u.outgoing, a.incoming), l = o(s, a.outgoing, u.incoming);
    if (c.critical || l.critical)
      return [...c.critical ? [{ src: a.id, tgt: u.id, weight: 1, kind: Zu }] : [], ...l.critical ? [{ src: u.id, tgt: a.id, weight: 1, kind: Zu }] : []];
    const d = Jt(N(Jt)(1e18)(u.incoming))(N(Jt)(1e18)(u.outgoing)), _ = bt(N(bt)(-1e18)(u.incoming))(N(bt)(-1e18)(u.outgoing)), g = Jt(N(Jt)(1e18)(a.incoming))(N(Jt)(1e18)(a.outgoing)), p = bt(N(bt)(-1e18)(a.incoming))(N(bt)(-1e18)(a.outgoing)), $ = (1 * c.conflicts | 0) + (16 * (N((m) => (y) => y > p ? m : y >= g ? m + 1 | 0 : m)(0)(u.outgoing) + N((m) => (y) => y > _ ? m : y >= d ? m + 1 | 0 : m)(0)(a.incoming) | 0) | 0) | 0, h = (1 * l.conflicts | 0) + (16 * (N((m) => (y) => y > _ ? m : y >= d ? m + 1 | 0 : m)(0)(a.outgoing) + N((m) => (y) => y > p ? m : y >= g ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return $ < h ? [{ src: u.id, tgt: a.id, weight: h - $ | 0, kind: ju }] : $ > h ? [{ src: a.id, tgt: u.id, weight: $ - h | 0, kind: ju }] : $ > 0 ? [{ src: u.id, tgt: a.id, weight: 0, kind: ju }, { src: a.id, tgt: u.id, weight: 0, kind: ju }] : [];
  };
  return N((s) => (u) => N((a) => (c) => rt(F)(c._1)(c._2)(a))(s)((() => {
    const a = N((G) => (O) => {
      const ut = O.edge.from.node + "|" + (() => {
        if (O.edge.from.port.tag === "Just")
          return O.edge.from.port._1;
        if (O.edge.from.port.tag === "Nothing")
          return "_auto_" + O.edge.id;
        f();
      })(), ot = U_(ut)(G.entries);
      if (ot.tag === "Nothing")
        return {
          ...G,
          entries: rt(F)(ut)({
            id: 0,
            members: [O.edge.id],
            incoming: [O.fromPos._1],
            outgoing: [O.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: x,
            splitPartner: x
          })(G.entries),
          order: [...G.order, ut]
        };
      if (ot.tag === "Just")
        return {
          ...G,
          entries: rt(F)(ut)({
            ...ot._1,
            members: [...ot._1.members, O.edge.id],
            incoming: [...Ur((Z) => Z < O.fromPos._1)(ot._1.incoming).init, O.fromPos._1, ...Ur((Z) => Z <= O.fromPos._1)(ot._1.incoming).rest],
            outgoing: [...Ur((Z) => Z < O.toPos._1)(ot._1.outgoing).init, O.toPos._1, ...Ur((Z) => Z <= O.toPos._1)(ot._1.outgoing).rest]
          })(G.entries)
        };
      f();
    })({ entries: z, order: [] })(u._2), c = Qt((G) => (O) => ({ ...O, id: G }))(Tt((G) => U_(G)(a.entries))(a.order));
    if (c.length === 0)
      return [];
    const l = N((G) => (O) => G.prev.tag === "Just" && O - G.prev._1 < 1e-9 ? G : { prev: T("Just", O), out: [...G.out, O] })({ prev: x, out: [] })(Bt(st.compare)([
      ...wt(c)((G) => G.incoming),
      ...wt(c)((G) => G.outgoing)
    ])).out, d = l.length < 2 ? 0.2 * r : 0.2 * N((G) => (O) => {
      if (G.prev.tag === "Nothing")
        return { prev: T("Just", O), mn: G.mn };
      if (G.prev.tag === "Just")
        return { prev: T("Just", O), mn: Jt(G.mn)(O - G.prev._1) };
      f();
    })({ prev: x, mn: 1e18 })(l).mn, _ = {
      segments: c,
      deps: (() => {
        const G = c.length;
        return wt(wt(Zt(0, G - 2 | 0))((O) => wt(Zt(O + 1 | 0, G - 1 | 0))((ut) => [
          S(O, ut)
        ])))((O) => O._1 >= 0 && O._1 < c.length ? O._2 >= 0 && O._2 < c.length ? i(d, c[O._1], c[O._2]) : [] : []);
      })()
    }, g = _t(
      (G) => {
        if (G.kind === "Critical")
          return !0;
        if (G.kind === "Regular")
          return !1;
        f();
      },
      _.deps
    ), p = (() => {
      if (g.length < 2)
        return _;
      const G = Xi((() => {
        const U = _.segments;
        return B((P) => S(P.id, P.mark))((() => {
          const P = U.length, A = (M) => {
            let Y = M, q = !0, X;
            for (; q; ) {
              const W = Y, nt = Vt((et) => {
                const it = tn(et)(W.inWeight);
                if (it.tag === "Nothing")
                  return !0;
                if (it.tag === "Just")
                  return it._1 === 0;
                f();
              })(W.remaining);
              if (nt.tag === "Nothing") {
                q = !1, X = W;
                continue;
              }
              if (nt.tag === "Just") {
                const et = nt._1;
                Y = {
                  ...W,
                  inWeight: N((it) => (lt) => Ot(ct)(An)(lt.tgt)(-lt.weight)(it))(W.inWeight)((() => {
                    const it = tn(et)(W.depsBySrc);
                    if (it.tag === "Nothing")
                      return [];
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })()),
                  marks: rt(ct)(et)(W.nextSource)(W.marks),
                  nextSource: W.nextSource + 1 | 0,
                  outWeight: N((it) => (lt) => Ot(ct)(An)(lt.src)(-lt.weight)(it))(W.outWeight)((() => {
                    const it = tn(et)(W.depsByTgt);
                    if (it.tag === "Nothing")
                      return [];
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })()),
                  remaining: _t((it) => it !== et, W.remaining)
                };
                continue;
              }
              f();
            }
            return X;
          }, Q = (M) => {
            let Y = M, q = !0, X;
            for (; q; ) {
              const W = Y, nt = Vt((et) => {
                const it = tn(et)(W.outWeight);
                if (it.tag === "Nothing")
                  return !0;
                if (it.tag === "Just")
                  return it._1 === 0;
                f();
              })(W.remaining);
              if (nt.tag === "Nothing") {
                q = !1, X = W;
                continue;
              }
              if (nt.tag === "Just") {
                const et = nt._1;
                Y = {
                  ...W,
                  inWeight: N((it) => (lt) => Ot(ct)(An)(lt.tgt)(-lt.weight)(it))(W.inWeight)((() => {
                    const it = tn(et)(W.depsBySrc);
                    if (it.tag === "Nothing")
                      return [];
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })()),
                  marks: rt(ct)(et)(W.nextSink)(W.marks),
                  nextSink: W.nextSink - 1 | 0,
                  outWeight: N((it) => (lt) => Ot(ct)(An)(lt.src)(-lt.weight)(it))(W.outWeight)((() => {
                    const it = tn(et)(W.depsByTgt);
                    if (it.tag === "Nothing")
                      return [];
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })()),
                  remaining: _t((it) => it !== et, W.remaining)
                };
                continue;
              }
              f();
            }
            return X;
          };
          return ((M) => {
            let Y = M, q = !0, X;
            for (; q; ) {
              const nt = A(Q(Y));
              if (nt.remaining.length === 0) {
                q = !1, X = B((et) => {
                  const it = tn(et.id)(nt.marks), lt = (() => {
                    if (it.tag === "Nothing")
                      return et.id;
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })();
                  return { ...et, mark: lt < P ? (lt + P | 0) + 1 | 0 : lt };
                })(U);
                continue;
              }
              Y = (() => {
                const et = (lt) => {
                  const gt = tn(lt)(nt.outWeight), pt = tn(lt)(nt.inWeight);
                  return (() => {
                    if (gt.tag === "Nothing")
                      return 0;
                    if (gt.tag === "Just")
                      return gt._1;
                    f();
                  })() - (() => {
                    if (pt.tag === "Nothing")
                      return 0;
                    if (pt.tag === "Just")
                      return pt._1;
                    f();
                  })() | 0;
                }, it = Bt((lt) => (gt) => ct.compare(et(gt))(et(lt)))(nt.remaining);
                if (0 < it.length) {
                  const lt = it[0];
                  return {
                    ...nt,
                    inWeight: N((gt) => (pt) => Ot(ct)(An)(pt.tgt)(-pt.weight)(gt))(nt.inWeight)((() => {
                      const gt = tn(lt)(nt.depsBySrc);
                      if (gt.tag === "Nothing")
                        return [];
                      if (gt.tag === "Just")
                        return gt._1;
                      f();
                    })()),
                    marks: rt(ct)(lt)(nt.nextSource)(nt.marks),
                    nextSource: nt.nextSource + 1 | 0,
                    outWeight: N((gt) => (pt) => Ot(ct)(An)(pt.src)(-pt.weight)(gt))(nt.outWeight)((() => {
                      const gt = tn(lt)(nt.depsByTgt);
                      if (gt.tag === "Nothing")
                        return [];
                      if (gt.tag === "Just")
                        return gt._1;
                      f();
                    })()),
                    remaining: _t((gt) => gt !== lt, nt.remaining)
                  };
                }
                return nt;
              })();
            }
            return X;
          })({
            remaining: B((M) => M.id)(U),
            marks: z,
            inWeight: N((M) => (Y) => Ot(ct)(An)(Y.tgt)(Y.weight)(M))(z)(g),
            outWeight: N((M) => (Y) => Ot(ct)(An)(Y.src)(Y.weight)(M))(z)(g),
            depsBySrc: N((M) => (Y) => Ot(ct)(Sn)(Y.src)([Y])(M))(z)(g),
            depsByTgt: N((M) => (Y) => Ot(ct)(Sn)(Y.tgt)([Y])(M))(z)(g),
            nextSink: P - 1 | 0,
            nextSource: P + 1 | 0
          });
        })());
      })()), O = _t(
        (U) => {
          const P = tn(U.src)(G), A = tn(U.tgt)(G);
          return (() => {
            if (P.tag === "Nothing")
              return 0;
            if (P.tag === "Just")
              return P._1;
            f();
          })() > (() => {
            if (A.tag === "Nothing")
              return 0;
            if (A.tag === "Just")
              return A._1;
            f();
          })();
        },
        g
      );
      if (O.length === 0)
        return _;
      const ut = N((U) => (P) => {
        if (Se(qo)(P.src)(U.decisions) || Se(qo)(P.tgt)(U.decisions))
          return U;
        const A = tn(P.src)(U.segMap), Q = tn(P.tgt)(U.segMap);
        if (A.tag === "Just" && Q.tag === "Just") {
          const D = (A._1.incoming.length + A._1.outgoing.length | 0) > 2 && (Q._1.incoming.length + Q._1.outgoing.length | 0) <= 2, M = D ? Q._1 : A._1;
          return {
            decisions: [...U.decisions, M.id],
            segMap: rt(ct)(M.id)({ ...M, splitBy: T("Just", D ? A._1.id : Q._1.id) })(U.segMap)
          };
        }
        return U;
      })({ decisions: [], segMap: Xi(B((U) => S(U.id, U))(_.segments)) })(O), ot = ut.segMap, Z = N((U) => (P) => {
        const A = Jt(N(Jt)(1e18)(P.incoming))(N(Jt)(1e18)(P.outgoing)), Q = bt(N(bt)(-1e18)(P.incoming))(N(bt)(-1e18)(P.outgoing)), D = _t(
          (W) => W.a.startPosition <= Q && W.a.endPosition >= A,
          Qt((W) => (nt) => ({ i: W, a: nt }))(U.freeAreas)
        );
        if (D.length === 0) {
          const W = {
            ...P,
            incoming: Bt(st.compare)(P.incoming),
            outgoing: Bt(st.compare)([(A + Q) / 2]),
            splitPartner: T("Just", U.nextId)
          }, nt = {
            id: U.nextId,
            incoming: Bt(st.compare)([(A + Q) / 2]),
            mark: 0,
            members: P.members,
            outgoing: Bt(st.compare)(P.outgoing),
            slot: 0,
            splitBy: x,
            splitPartner: T("Just", P.id)
          };
          return {
            segMap: rt(ct)(nt.id)(nt)(rt(ct)(W.id)(W)(U.segMap)),
            freeAreas: U.freeAreas,
            nextId: U.nextId + 1 | 0
          };
        }
        const M = 0 < D.length ? T("Just", D[0]) : x, Y = (() => {
          if (M.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (M.tag === "Just") {
            if (D.length === 1)
              return M._1;
            const W = B((nt) => ({
              c: nt,
              rating: (() => {
                const et = (nt.a.startPosition + nt.a.endPosition) / 2, it = [et], lt = [et], gt = N((() => {
                  const St = U.segMap;
                  return (Gt) => (Wt) => {
                    const $t = tn(Wt.tgt)(St);
                    if ($t.tag === "Nothing")
                      return Gt;
                    if ($t.tag === "Just") {
                      const At = Jt(N(Jt)(1e18)($t._1.incoming))(N(Jt)(1e18)($t._1.outgoing)), Nt = bt(N(bt)(-1e18)($t._1.incoming))(N(bt)(-1e18)($t._1.outgoing)), Ct = Jt(N(Jt)(1e18)(P.incoming))(N(Jt)(1e18)(it)), dt = (() => {
                        const Yt = bt(N(bt)(-1e18)(P.incoming))(N(bt)(-1e18)(it)), Mt = N((ln) => (kn) => kn > Nt ? ln : kn >= At ? ln + 1 | 0 : ln)(0)(it) + N((ln) => (kn) => kn > Yt ? ln : kn >= Ct ? ln + 1 | 0 : ln)(0)($t._1.incoming) | 0, In = Jt(N(Jt)(1e18)(P.incoming))(N(Jt)(1e18)(it)), Fe = bt(N(bt)(-1e18)(P.incoming))(N(bt)(-1e18)(it)), de = Jt(N(Jt)(1e18)($t._1.incoming))(N(Jt)(1e18)($t._1.outgoing)), fe = bt(N(bt)(-1e18)($t._1.incoming))(N(bt)(-1e18)($t._1.outgoing)), We = N((ln) => (kn) => kn > Fe ? ln : kn >= In ? ln + 1 | 0 : ln)(0)($t._1.outgoing) + N((ln) => (kn) => kn > fe ? ln : kn >= de ? ln + 1 | 0 : ln)(0)(P.incoming) | 0;
                        return Mt === We ? Mt > 0 ? { ...Gt, deps: Gt.deps + 2 | 0, crossings: Gt.crossings + Mt | 0 } : Gt : { ...Gt, deps: Gt.deps + 1 | 0, crossings: Gt.crossings + Ki(Mt)(We) | 0 };
                      })(), yt = Jt(N(Jt)(1e18)($t._1.incoming))(N(Jt)(1e18)($t._1.outgoing)), Et = bt(N(bt)(-1e18)($t._1.incoming))(N(bt)(-1e18)($t._1.outgoing)), mt = Jt(N(Jt)(1e18)(lt))(N(Jt)(1e18)(P.outgoing)), kt = bt(N(bt)(-1e18)(lt))(N(bt)(-1e18)(P.outgoing)), Dt = N((Yt) => (Mt) => Mt > Et ? Yt : Mt >= yt ? Yt + 1 | 0 : Yt)(0)(P.outgoing) + N((Yt) => (Mt) => Mt > kt ? Yt : Mt >= mt ? Yt + 1 | 0 : Yt)(0)($t._1.incoming) | 0, zt = Jt(N(Jt)(1e18)(lt))(N(Jt)(1e18)(P.outgoing)), rn = bt(N(bt)(-1e18)(lt))(N(bt)(-1e18)(P.outgoing)), fn = Jt(N(Jt)(1e18)($t._1.incoming))(N(Jt)(1e18)($t._1.outgoing)), ye = bt(N(bt)(-1e18)($t._1.incoming))(N(bt)(-1e18)($t._1.outgoing)), On = N((Yt) => (Mt) => Mt > rn ? Yt : Mt >= zt ? Yt + 1 | 0 : Yt)(0)($t._1.outgoing) + N((Yt) => (Mt) => Mt > ye ? Yt : Mt >= fn ? Yt + 1 | 0 : Yt)(0)(lt) | 0;
                      return Dt === On ? Dt > 0 ? { ...dt, deps: dt.deps + 2 | 0, crossings: dt.crossings + Dt | 0 } : dt : { ...dt, deps: dt.deps + 1 | 0, crossings: dt.crossings + Ki(Dt)(On) | 0 };
                    }
                    f();
                  };
                })())(N((() => {
                  const St = U.segMap;
                  return (Gt) => (Wt) => {
                    const $t = tn(Wt.src)(St);
                    if ($t.tag === "Nothing")
                      return Gt;
                    if ($t.tag === "Just") {
                      const At = Jt(N(Jt)(1e18)($t._1.incoming))(N(Jt)(1e18)($t._1.outgoing)), Nt = bt(N(bt)(-1e18)($t._1.incoming))(N(bt)(-1e18)($t._1.outgoing)), Ct = Jt(N(Jt)(1e18)(P.incoming))(N(Jt)(1e18)(it)), dt = (() => {
                        const Yt = bt(N(bt)(-1e18)(P.incoming))(N(bt)(-1e18)(it)), Mt = N((ln) => (kn) => kn > Nt ? ln : kn >= At ? ln + 1 | 0 : ln)(0)(it) + N((ln) => (kn) => kn > Yt ? ln : kn >= Ct ? ln + 1 | 0 : ln)(0)($t._1.incoming) | 0, In = Jt(N(Jt)(1e18)(P.incoming))(N(Jt)(1e18)(it)), Fe = bt(N(bt)(-1e18)(P.incoming))(N(bt)(-1e18)(it)), de = Jt(N(Jt)(1e18)($t._1.incoming))(N(Jt)(1e18)($t._1.outgoing)), fe = bt(N(bt)(-1e18)($t._1.incoming))(N(bt)(-1e18)($t._1.outgoing)), We = N((ln) => (kn) => kn > Fe ? ln : kn >= In ? ln + 1 | 0 : ln)(0)($t._1.outgoing) + N((ln) => (kn) => kn > fe ? ln : kn >= de ? ln + 1 | 0 : ln)(0)(P.incoming) | 0;
                        return Mt === We ? Mt > 0 ? { ...Gt, deps: Gt.deps + 2 | 0, crossings: Gt.crossings + Mt | 0 } : Gt : { ...Gt, deps: Gt.deps + 1 | 0, crossings: Gt.crossings + Ki(Mt)(We) | 0 };
                      })(), yt = Jt(N(Jt)(1e18)($t._1.incoming))(N(Jt)(1e18)($t._1.outgoing)), Et = bt(N(bt)(-1e18)($t._1.incoming))(N(bt)(-1e18)($t._1.outgoing)), mt = Jt(N(Jt)(1e18)(lt))(N(Jt)(1e18)(P.outgoing)), kt = bt(N(bt)(-1e18)(lt))(N(bt)(-1e18)(P.outgoing)), Dt = N((Yt) => (Mt) => Mt > Et ? Yt : Mt >= yt ? Yt + 1 | 0 : Yt)(0)(P.outgoing) + N((Yt) => (Mt) => Mt > kt ? Yt : Mt >= mt ? Yt + 1 | 0 : Yt)(0)($t._1.incoming) | 0, zt = Jt(N(Jt)(1e18)(lt))(N(Jt)(1e18)(P.outgoing)), rn = bt(N(bt)(-1e18)(lt))(N(bt)(-1e18)(P.outgoing)), fn = Jt(N(Jt)(1e18)($t._1.incoming))(N(Jt)(1e18)($t._1.outgoing)), ye = bt(N(bt)(-1e18)($t._1.incoming))(N(bt)(-1e18)($t._1.outgoing)), On = N((Yt) => (Mt) => Mt > rn ? Yt : Mt >= zt ? Yt + 1 | 0 : Yt)(0)($t._1.outgoing) + N((Yt) => (Mt) => Mt > ye ? Yt : Mt >= fn ? Yt + 1 | 0 : Yt)(0)(lt) | 0;
                      return Dt === On ? Dt > 0 ? { ...dt, deps: dt.deps + 2 | 0, crossings: dt.crossings + Dt | 0 } : dt : { ...dt, deps: dt.deps + 1 | 0, crossings: dt.crossings + Ki(Dt)(On) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(_t((St) => St.tgt === P.id, _.deps)))(_t((St) => St.src === P.id, _.deps)), pt = (() => {
                  if (P.splitBy.tag === "Just")
                    return tn(P.splitBy._1)(U.segMap);
                  if (P.splitBy.tag === "Nothing")
                    return x;
                  f();
                })();
                if (pt.tag === "Just")
                  return {
                    ...gt,
                    deps: gt.deps + 2 | 0,
                    crossings: (() => {
                      const St = Jt(N(Jt)(1e18)(pt._1.incoming))(N(Jt)(1e18)(pt._1.outgoing)), Gt = Jt(N(Jt)(1e18)(lt))(N(Jt)(1e18)(P.outgoing)), Wt = bt(N(bt)(-1e18)(pt._1.incoming))(N(bt)(-1e18)(pt._1.outgoing)), $t = bt(N(bt)(-1e18)(lt))(N(bt)(-1e18)(P.outgoing)), At = Jt(N(Jt)(1e18)(P.incoming))(N(Jt)(1e18)(it));
                      return gt.crossings + (() => {
                        const Nt = Jt(N(Jt)(1e18)(pt._1.incoming))(N(Jt)(1e18)(pt._1.outgoing)), Ct = bt(N(bt)(-1e18)(P.incoming))(N(bt)(-1e18)(it)), dt = bt(N(bt)(-1e18)(pt._1.incoming))(N(bt)(-1e18)(pt._1.outgoing));
                        return ((N((yt) => (Et) => Et > Wt ? yt : Et >= St ? yt + 1 | 0 : yt)(0)(it) + N((yt) => (Et) => Et > Ct ? yt : Et >= At ? yt + 1 | 0 : yt)(0)(pt._1.incoming) | 0) + N((yt) => (Et) => Et > $t ? yt : Et >= Gt ? yt + 1 | 0 : yt)(0)(pt._1.outgoing) | 0) + N((yt) => (Et) => Et > dt ? yt : Et >= Nt ? yt + 1 | 0 : yt)(0)(lt) | 0;
                      })() | 0;
                    })()
                  };
                if (pt.tag === "Nothing")
                  return gt;
                f();
              })()
            }))(D);
            return N((nt) => (et) => et.rating.crossings < nt.rating.crossings || !(et.rating.crossings > nt.rating.crossings) && (et.rating.deps < nt.rating.deps || !(et.rating.deps > nt.rating.deps) && et.c.a.size > nt.c.a.size) ? et : nt)(0 < W.length ? W[0] : { c: M._1, rating: { crossings: 1e6, deps: 1e6 } })(W).c;
          }
          f();
        })(), q = {
          ...P,
          incoming: Bt(st.compare)(P.incoming),
          outgoing: Bt(st.compare)([(Y.a.startPosition + Y.a.endPosition) / 2]),
          splitPartner: T("Just", U.nextId)
        }, X = {
          id: U.nextId,
          incoming: Bt(st.compare)([(Y.a.startPosition + Y.a.endPosition) / 2]),
          mark: 0,
          members: P.members,
          outgoing: Bt(st.compare)(P.outgoing),
          slot: 0,
          splitBy: x,
          splitPartner: T("Just", P.id)
        };
        return {
          segMap: rt(ct)(X.id)(X)(rt(ct)(q.id)(q)(U.segMap)),
          freeAreas: (() => {
            if (Y.i >= 0 && Y.i < U.freeAreas.length) {
              const W = ch(Ht, x, Y.i, U.freeAreas), nt = (() => {
                if (W.tag === "Nothing")
                  return U.freeAreas;
                if (W.tag === "Just")
                  return W._1;
                f();
              })();
              if (U.freeAreas[Y.i].size / 2 < d)
                return nt;
              const et = (U.freeAreas[Y.i].startPosition + U.freeAreas[Y.i].endPosition) / 2, it = et - d, lt = et + d;
              return [
                ...Y.i < 1 ? [] : Ft(0, Y.i, nt),
                ...U.freeAreas[Y.i].startPosition <= it ? [{ startPosition: U.freeAreas[Y.i].startPosition, endPosition: it, size: it - U.freeAreas[Y.i].startPosition }] : [],
                ...lt <= U.freeAreas[Y.i].endPosition ? [{ startPosition: lt, endPosition: U.freeAreas[Y.i].endPosition, size: U.freeAreas[Y.i].endPosition - lt }] : [],
                ...Y.i < 1 ? nt : Ft(Y.i, nt.length, nt)
              ];
            }
            return U.freeAreas;
          })(),
          nextId: U.nextId + 1 | 0
        };
      })({
        segMap: ot,
        freeAreas: (() => {
          const U = Bt(st.compare)([
            ...wt(_.segments)((P) => P.incoming),
            ...wt(_.segments)((P) => P.outgoing)
          ]);
          return Tt(ZC)(Gn(
            (P) => (A) => A - P >= 2 * d ? T("Just", { startPosition: P + d, endPosition: A - d, size: A - P - 2 * d }) : x,
            U,
            Ft(1, U.length, U)
          ));
        })(),
        nextId: _.segments.length
      })(Bt((U) => (P) => st.compare(bt(N(bt)(-1e18)(U.incoming))(N(bt)(-1e18)(U.outgoing)) - Jt(N(Jt)(1e18)(U.incoming))(N(Jt)(1e18)(U.outgoing)))(bt(N(bt)(-1e18)(P.incoming))(N(bt)(-1e18)(P.outgoing)) - Jt(N(Jt)(1e18)(P.incoming))(N(Jt)(1e18)(P.outgoing))))(Tt((U) => tn(U)(ot))(ut.decisions)));
      return {
        segments: (() => {
          const U = (P, A) => {
            if (P.tag === "Leaf")
              return A;
            if (P.tag === "Node")
              return U(P._5, xt("Cons", P._4, U(P._6, A)));
            f();
          };
          return Xt(_n.foldr, U(Z.segMap, R));
        })(),
        deps: (() => {
          const U = Z.segMap, P = (D, M) => {
            if (D.tag === "Leaf")
              return M;
            if (D.tag === "Node")
              return P(D._5, xt("Cons", D._4, P(D._6, M)));
            f();
          }, A = Xt(_n.foldr, P(U, R)), Q = A.length;
          return [
            ...wt(wt(Zt(0, Q - 2 | 0))((D) => wt(Zt(D + 1 | 0, Q - 1 | 0))((M) => [
              S(D, M)
            ])))((D) => D._1 >= 0 && D._1 < A.length ? D._2 >= 0 && D._2 < A.length ? A[D._1].splitPartner.tag !== "Nothing" && A[D._1].splitPartner.tag === "Just" && A[D._1].splitPartner._1 === A[D._2].id || A[D._2].splitPartner.tag !== "Nothing" && A[D._2].splitPartner.tag === "Just" && A[D._2].splitPartner._1 === A[D._1].id ? [] : i(d, A[D._1], A[D._2]) : [] : []),
            ...wt(A)((D) => D.splitBy.tag === "Just" && D.splitPartner.tag === "Just" && (() => {
              const M = tn(D.splitPartner._1)(U);
              if (M.tag === "Nothing")
                return !1;
              if (M.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const M = tn(D.splitBy._1)(U);
              if (M.tag === "Nothing")
                return !1;
              if (M.tag === "Just")
                return !0;
              f();
            })() ? [{ src: D.id, tgt: D.splitBy._1, weight: 1, kind: Zu }, { src: D.splitBy._1, tgt: D.splitPartner._1, weight: 1, kind: Zu }] : [])
          ];
        })()
      };
    })(), $ = p.segments, h = $.length, m = (G) => {
      let O = G, ut = !0, ot;
      for (; ut; ) {
        const Z = O, U = Vt((P) => {
          const A = tn(P)(Z.inWeight);
          if (A.tag === "Nothing")
            return !0;
          if (A.tag === "Just")
            return A._1 === 0;
          f();
        })(Z.remaining);
        if (U.tag === "Nothing") {
          ut = !1, ot = Z;
          continue;
        }
        if (U.tag === "Just") {
          const P = U._1;
          O = {
            ...Z,
            inWeight: N((A) => (Q) => Ot(ct)(An)(Q.tgt)(-Q.weight)(A))(Z.inWeight)((() => {
              const A = tn(P)(Z.depsBySrc);
              if (A.tag === "Nothing")
                return [];
              if (A.tag === "Just")
                return A._1;
              f();
            })()),
            marks: rt(ct)(P)(Z.nextSource)(Z.marks),
            nextSource: Z.nextSource + 1 | 0,
            outWeight: N((A) => (Q) => Ot(ct)(An)(Q.src)(-Q.weight)(A))(Z.outWeight)((() => {
              const A = tn(P)(Z.depsByTgt);
              if (A.tag === "Nothing")
                return [];
              if (A.tag === "Just")
                return A._1;
              f();
            })()),
            remaining: _t((A) => A !== P, Z.remaining)
          };
          continue;
        }
        f();
      }
      return ot;
    }, y = (G) => {
      let O = G, ut = !0, ot;
      for (; ut; ) {
        const Z = O, U = Vt((P) => {
          const A = tn(P)(Z.outWeight);
          if (A.tag === "Nothing")
            return !0;
          if (A.tag === "Just")
            return A._1 === 0;
          f();
        })(Z.remaining);
        if (U.tag === "Nothing") {
          ut = !1, ot = Z;
          continue;
        }
        if (U.tag === "Just") {
          const P = U._1;
          O = {
            ...Z,
            inWeight: N((A) => (Q) => Ot(ct)(An)(Q.tgt)(-Q.weight)(A))(Z.inWeight)((() => {
              const A = tn(P)(Z.depsBySrc);
              if (A.tag === "Nothing")
                return [];
              if (A.tag === "Just")
                return A._1;
              f();
            })()),
            marks: rt(ct)(P)(Z.nextSink)(Z.marks),
            nextSink: Z.nextSink - 1 | 0,
            outWeight: N((A) => (Q) => Ot(ct)(An)(Q.src)(-Q.weight)(A))(Z.outWeight)((() => {
              const A = tn(P)(Z.depsByTgt);
              if (A.tag === "Nothing")
                return [];
              if (A.tag === "Just")
                return A._1;
              f();
            })()),
            remaining: _t((A) => A !== P, Z.remaining)
          };
          continue;
        }
        f();
      }
      return ot;
    }, w = ((G) => {
      let O = G, ut = !0, ot;
      for (; ut; ) {
        const U = m(y(O));
        if (U.remaining.length === 0) {
          ut = !1, ot = B((P) => {
            const A = tn(P.id)(U.marks), Q = (() => {
              if (A.tag === "Nothing")
                return P.id;
              if (A.tag === "Just")
                return A._1;
              f();
            })();
            return { ...P, mark: Q < h ? (Q + h | 0) + 1 | 0 : Q };
          })($);
          continue;
        }
        O = (() => {
          const P = (Q) => {
            const D = tn(Q)(U.outWeight), M = tn(Q)(U.inWeight);
            return (() => {
              if (D.tag === "Nothing")
                return 0;
              if (D.tag === "Just")
                return D._1;
              f();
            })() - (() => {
              if (M.tag === "Nothing")
                return 0;
              if (M.tag === "Just")
                return M._1;
              f();
            })() | 0;
          }, A = Bt((Q) => (D) => ct.compare(P(D))(P(Q)))(U.remaining);
          if (0 < A.length) {
            const Q = A[0];
            return {
              ...U,
              inWeight: N((D) => (M) => Ot(ct)(An)(M.tgt)(-M.weight)(D))(U.inWeight)((() => {
                const D = tn(Q)(U.depsBySrc);
                if (D.tag === "Nothing")
                  return [];
                if (D.tag === "Just")
                  return D._1;
                f();
              })()),
              marks: rt(ct)(Q)(U.nextSource)(U.marks),
              nextSource: U.nextSource + 1 | 0,
              outWeight: N((D) => (M) => Ot(ct)(An)(M.src)(-M.weight)(D))(U.outWeight)((() => {
                const D = tn(Q)(U.depsByTgt);
                if (D.tag === "Nothing")
                  return [];
                if (D.tag === "Just")
                  return D._1;
                f();
              })()),
              remaining: _t((D) => D !== Q, U.remaining)
            };
          }
          return U;
        })();
      }
      return ot;
    })({
      remaining: B((G) => G.id)($),
      marks: z,
      inWeight: N((G) => (O) => Ot(ct)(An)(O.tgt)(O.weight)(G))(z)(p.deps),
      outWeight: N((G) => (O) => Ot(ct)(An)(O.src)(O.weight)(G))(z)(p.deps),
      depsBySrc: N((G) => (O) => Ot(ct)(Sn)(O.src)([O])(G))(z)(p.deps),
      depsByTgt: N((G) => (O) => Ot(ct)(Sn)(O.tgt)([O])(G))(z)(p.deps),
      nextSink: h - 1 | 0,
      nextSource: h + 1 | 0
    }), C = (() => {
      const G = (() => {
        const Z = Xi(B((U) => S(U.id, U.mark))(w));
        return {
          segments: w,
          deps: Tt((U) => (() => {
            if (U.kind === "Critical")
              return !0;
            if (U.kind === "Regular")
              return !1;
            f();
          })() ? T("Just", U) : (() => {
            const P = tn(U.src)(Z), A = tn(U.tgt)(Z);
            return (() => {
              if (P.tag === "Nothing")
                return 0;
              if (P.tag === "Just")
                return P._1;
              f();
            })() > (() => {
              if (A.tag === "Nothing")
                return 0;
              if (A.tag === "Just")
                return A._1;
              f();
            })();
          })() ? U.weight === 0 ? x : T("Just", { src: U.tgt, tgt: U.src, weight: U.weight, kind: U.kind }) : T("Just", U))(p.deps)
        };
      })(), O = N((Z) => (U) => Ot(ct)(An)(U.tgt)(1)(Z))(z)(G.deps), ot = ((Z) => {
        let U = Z, P = !0, A;
        for (; P; ) {
          const Q = U, D = Rt((M) => x, (M) => (Y) => T("Just", { head: M, tail: Y }), Q.queue);
          if (D.tag === "Nothing") {
            P = !1, A = Q;
            continue;
          }
          if (D.tag === "Just") {
            U = N((() => {
              const M = tn(D._1.head)(Q.slots), Y = (() => {
                if (M.tag === "Nothing")
                  return 0;
                if (M.tag === "Just")
                  return M._1;
                f();
              })();
              return (q) => (X) => {
                const W = tn(X)(q.inDegree), nt = (() => {
                  if (W.tag === "Nothing")
                    return -1;
                  if (W.tag === "Just")
                    return W._1 - 1 | 0;
                  f();
                })();
                return {
                  ...q,
                  slots: rt(ct)(X)(M_((() => {
                    const et = tn(X)(q.slots);
                    if (et.tag === "Nothing")
                      return 0;
                    if (et.tag === "Just")
                      return et._1;
                    f();
                  })())(Y + 1 | 0))(q.slots),
                  inDegree: rt(ct)(X)(nt)(q.inDegree),
                  queue: nt === 0 ? [...q.queue, X] : q.queue
                };
              };
            })())({ ...Q, queue: D._1.tail })((() => {
              const M = tn(D._1.head)(Q.adj);
              if (M.tag === "Nothing")
                return [];
              if (M.tag === "Just")
                return M._1;
              f();
            })());
            continue;
          }
          f();
        }
        return A;
      })({
        slots: Xi(B((Z) => S(Z.id, 0))(G.segments)),
        inDegree: O,
        adj: N((Z) => (U) => Ot(ct)(Sn)(U.src)([U.tgt])(Z))(z)(G.deps),
        queue: B((Z) => Z.id)(_t(
          (Z) => {
            const U = tn(Z.id)(O);
            if (U.tag === "Nothing")
              return !0;
            if (U.tag === "Just")
              return U._1 === 0;
            f();
          },
          G.segments
        ))
      });
      return Bt((Z) => (U) => ct.compare(Z.slot)(U.slot))(B((Z) => ({
        ...Z,
        slot: (() => {
          const U = tn(Z.id)(ot.slots);
          if (U.tag === "Nothing")
            return 0;
          if (U.tag === "Just")
            return U._1;
          f();
        })()
      }))(G.segments));
    })(), J = 1 + N((G) => (O) => M_(G)(O.slot))(0)(C) | 0, k = wt(C)((G) => G.members), E = _t((G) => Se(Zr)(G.edge.id)(k), t), L = N(bt)(-1e18)(B((G) => G.fromPos._2)(E)), I = N(Jt)(1e18)(B((G) => G.toPos._2)(E));
    if (L > I) {
      const G = Xi(B((O) => S(O.id, O))(C));
      return De(B((O) => B((ut) => S(
        ut,
        {
          slot: O.slot,
          slotCount: J,
          gapTop: I,
          gapBottom: L,
          partner: (() => {
            if (O.splitPartner.tag === "Just") {
              const ot = tn(O.splitPartner._1)(G);
              if (ot.tag === "Just")
                return T("Just", { slot: ot._1.slot, splitX: 0 < ot._1.incoming.length ? ot._1.incoming[0] : 0 });
              if (ot.tag === "Nothing")
                return x;
              f();
            }
            if (O.splitPartner.tag === "Nothing")
              return x;
            f();
          })()
        }
      ))(O.members))(_t(
        (O) => {
          if (O.splitPartner.tag === "Just") {
            const ut = tn(O.splitPartner._1)(G);
            return !(ut.tag === "Just" && (() => {
              if (ut._1.splitBy.tag === "Nothing")
                return !1;
              if (ut._1.splitBy.tag === "Just")
                return !0;
              f();
            })());
          }
          if (O.splitPartner.tag === "Nothing")
            return !0;
          f();
        },
        C
      )));
    }
    const H = Xi(B((G) => S(G.id, G))(C));
    return De(B((G) => B((O) => S(
      O,
      {
        slot: G.slot,
        slotCount: J,
        gapTop: L,
        gapBottom: I,
        partner: (() => {
          if (G.splitPartner.tag === "Just") {
            const ut = tn(G.splitPartner._1)(H);
            if (ut.tag === "Just")
              return T("Just", { slot: ut._1.slot, splitX: 0 < ut._1.incoming.length ? ut._1.incoming[0] : 0 });
            if (ut.tag === "Nothing")
              return x;
            f();
          }
          if (G.splitPartner.tag === "Nothing")
            return x;
          f();
        })()
      }
    ))(G.members))(_t(
      (G) => {
        if (G.splitPartner.tag === "Just") {
          const O = tn(G.splitPartner._1)(H);
          return !(O.tag === "Just" && (() => {
            if (O._1.splitBy.tag === "Nothing")
              return !1;
            if (O._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (G.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      C
    )));
  })()))(z)(jC(N((s) => (u) => {
    const a = es(u.edge.from.node)(e);
    if (a.tag === "Just") {
      const c = es(u.edge.to.node)(e);
      return c.tag === "Just" && a._1.layer !== c._1.layer ? Ot(ct)(Sn)(Ki(a._1.layer)(c._1.layer))([u])(s) : s;
    }
    return s;
  })(z)((() => {
    const s = (u) => S(
      (() => {
        const a = es(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.layer : 1e6;
      })(),
      (() => {
        const a = es(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.order : 1e6;
      })()
    );
    return Bt((u) => (a) => VC(s(u))(s(a)))(t);
  })())));
}, nJ = (t) => (n) => {
  const e = Bp(t)(n), r = N((o) => (i) => rt(F)(i.node)(i)(o))(z)(n);
  return N((o) => (i) => {
    const s = es(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = es(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const a = tJ(i.edge.id)(e);
        if (a.tag === "Just")
          return rt(ct)(Ki(s._1.layer)(u._1.layer))(a._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(z)(t);
}, qa = /* @__PURE__ */ dn(F)(qt), io = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Bf = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, eJ = (t) => (e) => {
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
}, Y_ = (t) => (n) => {
  const e = n.position._1 + n.size._1, r = n.position._2 * 2 + n.size._2, o = n.position._1 * 2 + n.size._1, i = n.position._2 + n.size._2;
  if (t === "South")
    return S(o, i * 2);
  if (t === "North")
    return S(o, n.position._2 * 2);
  if (t === "East")
    return S(e * 2, r);
  if (t === "West")
    return S(n.position._1 * 2, r);
  f();
}, Df = (t) => (n) => {
  const e = tt(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  f();
}, K_ = (t) => (n) => N((e) => (r) => Ot(t)(Sn)(n(r))([r])(e))(z), V_ = (t) => (n) => (e) => (r) => {
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
}, Dp = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? z : qa(o === 1 ? B((i) => S(i, r))(n) : Qt((i) => (s) => S(s, t.lo + tt(i + 1 | 0) * e / tt(o + 1 | 0)))(n));
}, zp = (t) => (n) => (e) => (r) => (o) => {
  const i = K_(F)((g) => g.to.node)(t), s = K_(F)((g) => g.from.node)(t), u = N((g) => (p) => rt(F)(p.node)(p)(g))(z)(n), a = (g, p, $) => {
    const h = io(g)(u);
    if (h.tag === "Nothing")
      return S(0, 0);
    if (h.tag === "Just") {
      const m = io(g)(e);
      if (m.tag === "Nothing") {
        const y = tt(4);
        if ($ === "South")
          return S(h._1.position._1 * y + h._1.size._1 * y / 2, (h._1.position._2 + h._1.size._2) * y);
        if ($ === "North")
          return S(h._1.position._1 * y + h._1.size._1 * y / 2, h._1.position._2 * y);
        if ($ === "East")
          return S((h._1.position._1 + h._1.size._1) * y, h._1.position._2 * y + h._1.size._2 * y / 2);
        if ($ === "West")
          return S(h._1.position._1 * y, h._1.position._2 * y + h._1.size._2 * y / 2);
        f();
      }
      if (m.tag === "Just") {
        const y = Vt((v) => v.id === p)(m._1);
        if (y.tag === "Nothing") {
          const v = tt(4);
          if ($ === "South")
            return S(h._1.position._1 * v + h._1.size._1 * v / 2, (h._1.position._2 + h._1.size._2) * v);
          if ($ === "North")
            return S(h._1.position._1 * v + h._1.size._1 * v / 2, h._1.position._2 * v);
          if ($ === "East")
            return S((h._1.position._1 + h._1.size._1) * v, h._1.position._2 * v + h._1.size._2 * v / 2);
          if ($ === "West")
            return S(h._1.position._1 * v, h._1.position._2 * v + h._1.size._2 * v / 2);
          f();
        }
        if (y.tag === "Just") {
          const v = tt(4);
          if (y._1.side === "North")
            return S(h._1.position._1 * v + tt(y._1.offset) * v, h._1.position._2 * v);
          if (y._1.side === "South")
            return S(h._1.position._1 * v + tt(y._1.offset) * v, (h._1.position._2 + h._1.size._2) * v);
          if (y._1.side === "East")
            return S((h._1.position._1 + h._1.size._1) * v, h._1.position._2 * v + tt(y._1.offset) * v);
          if (y._1.side === "West")
            return S(h._1.position._1 * v, h._1.position._2 * v + tt(y._1.offset) * v);
        }
      }
    }
    f();
  }, c = qa(wt(r)((g) => {
    if (g.nodes.length <= 2)
      return [];
    const p = tt(4);
    if (1 < g.nodes.length) {
      const $ = io(g.nodes[1])(u);
      if ($.tag === "Nothing")
        return [];
      if ($.tag === "Just") {
        const h = $._1.position._1 * p + $._1.size._1 * p / 2;
        return B((m) => S(m, h))(Gn(
          (m) => (y) => g.edgeId + ":" + m + "->" + y,
          g.nodes,
          Ft(1, g.nodes.length, g.nodes)
        ));
      }
      f();
    }
    return [];
  })), l = (g) => {
    const p = io(g.from.node)(u), $ = io(g.to.node)(u);
    if (p.tag === "Just" && $.tag === "Just") {
      const h = p._1, m = $._1, y = Bt((v) => (w) => ct.compare(v.score)(w.score))(B((v) => {
        const w = v._1, C = v._2;
        return {
          from: w,
          to: C,
          score: (() => {
            const J = (I, H, G, O, ut) => {
              const ot = Df(I)(H), Z = Df(I)(G);
              return ot.lo < Z.hi && Z.lo < ot.hi && (w === "South" ? C === "North" && ut._2 > O._2 : w === "North" ? C === "South" && ut._2 < O._2 : w === "East" ? C === "West" && ut._1 > O._1 : w === "West" && C === "East" && ut._1 < O._1) ? 0 : V_(w)(C)(O)(ut);
            }, k = Y_(w)(h), E = Y_(C)(m), L = V_(w)(C)(k)(E);
            return (() => {
              if (L > 0) {
                if (w === "South")
                  return C === "North" ? J(Xn, h, m, k, E) * 10 | 0 : L * 10 | 0;
                if (w === "North")
                  return C === "South" ? J(qn, h, m, k, E) * 10 | 0 : L * 10 | 0;
                if (w === "East")
                  return C === "West" ? J(uo, h, m, k, E) * 10 | 0 : L * 10 | 0;
                if (w === "West" && C === "East")
                  return J(ao, h, m, k, E) * 10 | 0;
              }
              return L * 10 | 0;
            })() + (w === "South" ? C === "North" ? m.layer >= h.layer ? 0 : 20 : 15 : w === "North" ? C === "South" ? m.layer <= h.layer ? 0 : 20 : 15 : w === "East" ? C === "West" ? 5 : 15 : w === "West" && C === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        S(Xn, qn),
        S(uo, qn),
        S(ao, qn),
        S(Xn, uo),
        S(Xn, ao),
        S(qn, Xn),
        S(qn, uo),
        S(qn, ao),
        S(uo, Xn),
        S(ao, Xn),
        S(uo, ao),
        S(ao, uo)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: Xn, to: qn };
  }, d = qa(B((g) => S(g.id, l(g)))(t)), _ = (g, p, $, h, m, y) => {
    const v = tt(4), w = io(p)(u);
    if (w.tag === "Nothing")
      return S(0, 0);
    if (w.tag === "Just") {
      const C = eJ(S($, g))(o);
      if (C.tag === "Just") {
        const J = w._1.position._1 * v + C._1, k = tt(4);
        if (g === "South")
          return S(J, (w._1.position._2 + w._1.size._2) * k);
        if (g === "North")
          return S(J, w._1.position._2 * k);
        if (g === "East")
          return S((w._1.position._1 + w._1.size._1) * k, J);
        if (g === "West")
          return S(w._1.position._1 * k, J);
        f();
      }
      if (C.tag === "Nothing") {
        const J = Df(g)(w._1), k = (J.lo + J.hi) / 2, E = Bf($)(Dp(J)(B((H) => H.id)(Bt((H) => (G) => st.compare(m(g)(H))(m(g)(G)))(_t(
          (H) => {
            const G = Bf(H.id)(d);
            if (G.tag === "Just") {
              const O = y(G._1);
              return O === "North" ? g === "North" : O === "South" ? g === "South" : O === "East" ? g === "East" : O === "West" && g === "West";
            }
            if (G.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const H = io(p)(h);
            if (H.tag === "Nothing")
              return [];
            if (H.tag === "Just")
              return H._1;
            f();
          })()
        ))))), L = (() => {
          if (E.tag === "Nothing")
            return k;
          if (E.tag === "Just")
            return E._1;
          f();
        })(), I = tt(4);
        if (g === "South")
          return S(L, (w._1.position._2 + w._1.size._2) * I);
        if (g === "North")
          return S(L, w._1.position._2 * I);
        if (g === "East")
          return S((w._1.position._1 + w._1.size._1) * I, L);
        if (g === "West")
          return S(w._1.position._1 * I, L);
      }
    }
    f();
  };
  return B((g) => {
    const p = Bf(g.edge.id)(c);
    if (p.tag === "Nothing")
      return g;
    if (p.tag === "Just")
      return {
        ...g,
        fromPos: Yn(3)(g.edge.from.node) === "$d:" ? S(p._1, g.fromPos._2) : g.fromPos,
        toPos: Yn(3)(g.edge.to.node) === "$d:" ? S(p._1, g.toPos._2) : g.toPos
      };
    f();
  })(B((g) => {
    if (g.from.port.tag === "Just" && g.to.port.tag === "Just")
      return {
        edge: g,
        fromPos: a(g.from.node, g.from.port._1, Xn),
        toPos: a(g.to.node, g.to.port._1, qn),
        fromSide: Xn,
        toSide: qn
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
          const m = io(h.to.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = tt(4);
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
          const m = io(h.from.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = tt(4);
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
}, Xa = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = F.compare(n._1)(e._1);
      if (r === "LT")
        return jn;
      if (r === "GT")
        return Zn;
      if (n._2 === "North")
        return e._2 === "North" ? Te : jn;
      if (e._2 === "North")
        return Zn;
      if (n._2 === "South")
        return e._2 === "South" ? Te : jn;
      if (e._2 === "South")
        return Zn;
      if (n._2 === "East")
        return e._2 === "East" ? Te : jn;
      if (e._2 === "East")
        return Zn;
      if (n._2 === "West" && e._2 === "West")
        return Te;
      f();
    },
    Eq0: () => t
  };
})(), rJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Xa.compare(t)(s._3);
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
}, oJ = /* @__PURE__ */ dn(F)(qt), zf = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, iJ = /* @__PURE__ */ dn(Xa)(qt), j_ = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), ss = (t) => (n) => (e) => (r) => {
  const o = rJ(S(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, Hp = (t) => (n) => (e) => {
  const r = oJ(De(B((s) => Qt((u) => (a) => S(a, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const a = zf(u.to.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    }
    if (s === "North") {
      const a = zf(u.from.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    }
    return 0;
  }, i = (s) => N((u) => (a) => ee(
    Xa.compare,
    ne,
    iJ(B((c) => S(S(c._1, s), c._2))(j_(Dp({
      lo: 0,
      hi: (() => {
        const c = zf(a._1)(e);
        if (c.tag === "Just")
          return c._1._1;
        if (c.tag === "Nothing")
          return Yn(3)(a._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(B((c) => c.id)(Bt((c) => (l) => ct.compare(o(s, c))(o(s, l)))(a._2)))))),
    u
  ))(z)(j_(N((u) => (a) => a.from.node === a.to.node ? u : s === "South" ? Ot(F)(Sn)(a.from.node)([a])(u) : s === "North" ? Ot(F)(Sn)(a.to.node)([a])(u) : u)(z)(n)));
  return ee(Xa.compare, ne, i(qn), i(Xn));
}, Wp = (t) => t, Qp = (t) => t, Op = (t) => t, sJ = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), uJ = /* @__PURE__ */ (() => {
  const t = Re.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return T("Just", S(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, xt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, R);
  })());
})(), ht = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, tr = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, to = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xr = /* @__PURE__ */ dn(F)(qt), Hf = /* @__PURE__ */ _h(F), N0 = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), aJ = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, Z_ = /* @__PURE__ */ Op("VDown"), t1 = /* @__PURE__ */ Op("VUp"), fJ = /* @__PURE__ */ Qp("ForwardPhase"), lJ = /* @__PURE__ */ Qp("StackPhase"), n1 = /* @__PURE__ */ Wp("HRight"), e1 = /* @__PURE__ */ Wp("HLeft"), r1 = (t) => (e) => {
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
}, gJ = (t) => (n) => (e) => {
  const r = N((u) => (a) => Ot(F)(An)(a.tgt)(1)(u))(z)(t), o = uJ(sJ([
    ...B((u) => u.src)(t),
    ...B((u) => u.tgt)(t),
    ...(() => {
      const u = (a, c) => {
        if (a.tag === "Leaf")
          return c;
        if (a.tag === "Node")
          return u(a._5, xt("Cons", a._4, u(a._6, c)));
        f();
      };
      return Xt(_n.foldr, u(n, R));
    })()
  ])), i = N((u) => (a) => Ot(F)(Sn)(a.src)([{ target: a.tgt, sep: a.sep }])(u))(z)(t);
  return ((u) => (a) => (c) => {
    let l = u, d = a, _ = c, g = !0, p;
    for (; g; ) {
      const $ = l, h = d, m = _, y = Rt((v) => x, (v) => (w) => T("Just", { head: v, tail: w }), $);
      if (y.tag === "Nothing") {
        g = !1, p = m;
        continue;
      }
      if (y.tag === "Just") {
        const v = ht(y._1.head)(m), w = (() => {
          if (v.tag === "Nothing")
            return 0;
          if (v.tag === "Just")
            return v._1;
          f();
        })(), C = N((J) => (k) => {
          const E = ht(k.target)(J.result), L = w + k.sep, I = ht(k.target)(J.indeg), H = (() => {
            if (I.tag === "Nothing")
              return -1;
            if (I.tag === "Just")
              return I._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: H === 0 ? [...J.newQueue, k.target] : J.newQueue,
            result: rt(F)(k.target)((() => {
              if (E.tag === "Nothing")
                return L;
              if (E.tag === "Just") {
                if (e === "VDown")
                  return tr(E._1)(L);
                if (e === "VUp")
                  return to(E._1)(L);
              }
              f();
            })())(J.result),
            indeg: rt(F)(k.target)(H)(J.indeg)
          };
        })({ newQueue: [], result: m, indeg: h })((() => {
          const J = ht(y._1.head)(i);
          if (J.tag === "Nothing")
            return [];
          if (J.tag === "Just")
            return J._1;
          f();
        })());
        l = [...y._1.tail, ...C.newQueue], d = C.indeg, _ = C.result;
        continue;
      }
      f();
    }
    return p;
  })(_t(
    (u) => {
      const a = ht(u)(r);
      if (a.tag === "Nothing")
        return !0;
      if (a.tag === "Just")
        return a._1 === 0;
      f();
    },
    o
  ))(r)(N((u) => (a) => rt(F)(a)(0)(u))(z)(o));
}, _J = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, xt("Cons", i._4, n(i._6, s)));
    f();
  }, e = Xt(_n.foldr, n(t, R)), r = N(tr)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return z;
    if (i.tag === "Node")
      return nn("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, qp = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, xt("Cons", i._4, n(i._6, s)));
    f();
  }, e = n(t, R), r = (i) => (s) => {
    let u = i, a = s, c = !0, l;
    for (; c; ) {
      const d = u, _ = a;
      if (_.tag === "Nil") {
        c = !1, l = d;
        continue;
      }
      if (_.tag === "Cons") {
        u = to(d)(_._1), a = _._2;
        continue;
      }
      f();
    }
    return l;
  }, o = (i) => (s) => {
    let u = i, a = s, c = !0, l;
    for (; c; ) {
      const d = u, _ = a;
      if (_.tag === "Nil") {
        c = !1, l = d;
        continue;
      }
      if (_.tag === "Cons") {
        u = tr(d)(_._1), a = _._2;
        continue;
      }
      f();
    }
    return l;
  };
  return r(-999999)(e) - o(999999)(e);
}, Xs = (t) => (n) => ((r) => (o) => {
  let i = r, s = o, u = !0, a;
  for (; u; ) {
    const c = i, l = s;
    if (c === n) {
      u = !1, a = l;
      continue;
    }
    i = (() => {
      const d = ht(c)(t.align);
      if (d.tag === "Nothing")
        return n;
      if (d.tag === "Just")
        return d._1;
      f();
    })(), s = [...l, c];
  }
  return a;
})((() => {
  const r = ht(n)(t.align);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just")
    return r._1;
  f();
})())([n]), dJ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => {
  const d = (P, A, Q) => {
    const D = P.from.node === A ? P.from.port : P.to.node === A ? P.to.port : x;
    if (D.tag === "Just") {
      const M = ht(A)(o);
      if (M.tag === "Just") {
        const Y = Vt((q) => q.id === D._1)(M._1);
        if (Y.tag === "Just") {
          const q = tt(Y._1.offset) * tt(4);
          return Q === "North" || Q === "South" ? q : 0;
        }
        if (Y.tag === "Nothing") {
          const q = ht(A)(r), X = ss(s)(P.id)(Q)((() => {
            if (q.tag === "Nothing")
              return 0.5;
            if (q.tag === "Just")
              return q._1._1 / 2;
            f();
          })());
          return Q === "North" || Q === "South" ? X : 0;
        }
        f();
      }
      if (M.tag === "Nothing") {
        const Y = ht(A)(r), q = ss(s)(P.id)(Q)((() => {
          if (Y.tag === "Nothing")
            return 0.5;
          if (Y.tag === "Just")
            return Y._1._1 / 2;
          f();
        })());
        return Q === "North" || Q === "South" ? q : 0;
      }
      f();
    }
    if (D.tag === "Nothing") {
      const M = ht(A)(r), Y = ss(s)(P.id)(Q)((() => {
        if (M.tag === "Nothing")
          return 0.5;
        if (M.tag === "Just")
          return M._1._1 / 2;
        f();
      })());
      return Q === "North" || Q === "South" ? Y : 0;
    }
    f();
  }, _ = (P, A) => {
    if (P.from.node === A) {
      if (l === "HRight")
        return Xn;
      if (l === "HLeft")
        return qn;
      f();
    }
    if (l === "HRight")
      return qn;
    if (l === "HLeft")
      return Xn;
    f();
  }, g = (P, A, Q) => N((D) => (M) => rt(F)(M)((() => {
    const Y = ht(M)(D);
    if (Y.tag === "Nothing")
      return 0 + A;
    if (Y.tag === "Just")
      return Y._1 + A;
    f();
  })())(D))(Q)(Xs(a)(P)), p = (() => {
    if (l === "HRight")
      return e;
    if (l === "HLeft")
      return un(e);
    f();
  })(), $ = (P) => {
    const A = ht(P)(r);
    if (A.tag === "Nothing")
      return 1;
    if (A.tag === "Just")
      return A._1._1;
    f();
  }, h = Xr(De(Qt((P) => (A) => B((Q) => S(Q, P))(A))(e))), m = (P, A) => Yn(3)(P) === "$d:" && Yn(3)(A) === "$d:" || Yn(3)(P) === "$d:" || Yn(3)(A) === "$d:" ? 10 : tt(t.nodeGap), y = N((P) => (A) => Hf((Q) => T(
    "Just",
    [
      ...(() => {
        if (Q.tag === "Nothing")
          return [];
        if (Q.tag === "Just")
          return Q._1;
        f();
      })(),
      A
    ]
  ))(A.to.node)(P))(z)(i), v = N((P) => (A) => Hf((Q) => T(
    "Just",
    [
      ...(() => {
        if (Q.tag === "Nothing")
          return [];
        if (Q.tag === "Just")
          return Q._1;
        f();
      })(),
      A
    ]
  ))(A.from.node)(P))(z)(i), w = De(e), C = N((P) => (A) => {
    const Q = ht(A)(a.root), D = (() => {
      if (Q.tag === "Nothing")
        return A;
      if (Q.tag === "Just")
        return Q._1;
      f();
    })();
    return A === D ? P : Hf((M) => T(
      "Just",
      (() => {
        if (M.tag === "Nothing")
          return !0;
        if (M.tag === "Just")
          return M._1;
        f();
      })() && Yn(3)(A) === "$d:"
    ))(D)(P);
  })(Xr(B((P) => S(P, !0))(ls(F.compare)((() => {
    const P = (A, Q) => {
      if (A.tag === "Leaf")
        return Q;
      if (A.tag === "Node")
        return P(A._5, xt("Cons", A._4, P(A._6, Q)));
      f();
    };
    return Xt(_n.foldr, P(a.root, R));
  })()))))(w), J = (P, A) => {
    const Q = P.free, D = ht(Q)(a.root), M = (() => {
      if (D.tag === "Nothing")
        return Q;
      if (D.tag === "Just")
        return D._1;
      f();
    })(), Y = ht(M)(C), q = (() => {
      if (Y.tag === "Nothing")
        return !0;
      if (Y.tag === "Just")
        return Y._1;
      f();
    })();
    return N((X) => (W) => {
      if (X.edge.tag === "Just")
        return X;
      if (X.edge.tag === "Nothing") {
        if ((() => {
          const gt = ht(M)(A.su);
          return !q && (() => {
            const pt = ht(W.from.node)(h);
            return W.from.node !== W.to.node && (() => {
              const St = ht(W.to.node)(h);
              return (() => {
                if (pt.tag === "Nothing")
                  return -1;
                if (pt.tag === "Just")
                  return pt._1;
                f();
              })() === (() => {
                if (St.tag === "Nothing")
                  return -1;
                if (St.tag === "Just")
                  return St._1;
                f();
              })();
            })();
          })() || (() => {
            if (gt.tag === "Nothing")
              return !1;
            if (gt.tag === "Just")
              return gt._1;
            f();
          })();
        })())
          return X;
        const nt = W.from.node === Q ? W.to.node : W.from.node, et = ht(nt)(a.root), it = (() => {
          if (et.tag === "Nothing")
            return nt;
          if (et.tag === "Just")
            return et._1;
          f();
        })(), lt = it !== M;
        return lt && (() => {
          const gt = ht(it)(A.blockFinished);
          if (gt.tag === "Nothing")
            return !1;
          if (gt.tag === "Just")
            return gt._1;
          f();
        })() ? { ...X, edge: T("Just", W), hasEdges: !0 } : { ...X, hasEdges: X.hasEdges || lt };
      }
      f();
    })({ edge: x, hasEdges: !1 })((() => {
      if (P.isRoot) {
        if (l === "HRight") {
          const X = ht(Q)(y);
          if (X.tag === "Nothing")
            return [];
          if (X.tag === "Just")
            return X._1;
          f();
        }
        if (l === "HLeft") {
          const X = ht(Q)(v);
          if (X.tag === "Nothing")
            return [];
          if (X.tag === "Just")
            return X._1;
        }
        f();
      }
      if (l === "HRight") {
        const X = ht(Q)(v);
        if (X.tag === "Nothing")
          return [];
        if (X.tag === "Just")
          return X._1;
        f();
      }
      if (l === "HLeft") {
        const X = ht(Q)(y);
        if (X.tag === "Nothing")
          return [];
        if (X.tag === "Just")
          return X._1;
      }
      f();
    })());
  }, k = (P, A, Q, D) => {
    const M = (() => {
      if (c === "VDown")
        return -1e18;
      if (c === "VUp")
        return 1e18;
      f();
    })(), Y = { free: A, isRoot: Q }, q = J(Y, D);
    if (q.edge.tag === "Nothing")
      return q.hasEdges ? { thresh: M, state: { ...D, queue: [...D.queue, Y] } } : { thresh: M, state: D };
    if (q.edge.tag === "Just") {
      const X = q.edge._1.from.node === A ? q.edge._1.to.node : q.edge._1.from.node;
      return {
        thresh: (() => {
          const W = ht((() => {
            const lt = ht(X)(a.root);
            if (lt.tag === "Nothing")
              return X;
            if (lt.tag === "Just")
              return lt._1;
            f();
          })())(D.x), nt = ht(X)(u), et = ht(A)(u), it = (() => {
            if (W.tag === "Just")
              return W._1;
            if (W.tag === "Nothing")
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
            if (nt.tag === "Nothing")
              return 0;
            if (nt.tag === "Just")
              return nt._1;
            f();
          })() + d(
            q.edge._1,
            X,
            (() => {
              if (Q) {
                if (l === "HRight")
                  return Xn;
                if (l === "HLeft")
                  return qn;
                f();
              }
              if (l === "HRight")
                return qn;
              if (l === "HLeft")
                return Xn;
              f();
            })()
          ) - (() => {
            if (et.tag === "Nothing")
              return 0;
            if (et.tag === "Just")
              return et._1;
            f();
          })() - d(
            q.edge._1,
            A,
            (() => {
              if (Q) {
                if (l === "HRight")
                  return qn;
                if (l === "HLeft")
                  return Xn;
                f();
              }
              if (l === "HRight")
                return Xn;
              if (l === "HLeft")
                return qn;
              f();
            })()
          );
        })(),
        state: {
          ...D,
          su: rt(F)((() => {
            const W = ht(q.edge._1.from.node)(a.root);
            if (W.tag === "Nothing")
              return q.edge._1.from.node;
            if (W.tag === "Just")
              return W._1;
            f();
          })())(!0)(rt(F)((() => {
            const W = ht(q.edge._1.to.node)(a.root);
            if (W.tag === "Nothing")
              return q.edge._1.to.node;
            if (W.tag === "Just")
              return W._1;
            f();
          })())(!0)(D.su))
        }
      };
    }
    f();
  }, E = (P, A, Q, D) => {
    const M = A === P, Y = ht(A)(a.align), q = (() => {
      if (Y.tag === "Nothing")
        return A === P;
      if (Y.tag === "Just")
        return Y._1 === P;
      f();
    })();
    if (!(M || q))
      return { thresh: Q, state: D };
    const X = (() => {
      if (c === "VDown")
        return M && Q <= -1e18;
      if (c === "VUp")
        return M && Q >= 1e18;
      f();
    })() ? k(P, A, !0, D) : { thresh: Q, state: D };
    return (() => {
      if (c === "VDown")
        return X.thresh <= -1e18 && q;
      if (c === "VUp")
        return X.thresh >= 1e18 && q;
      f();
    })() ? k(P, A, !1, X.state) : X;
  }, L = (P) => (A) => (Q) => {
    const D = ht(Q)(n.nodeIndex), M = (() => {
      if (D.tag === "Nothing")
        return 0;
      if (D.tag === "Just")
        return D._1;
      f();
    })(), Y = Vt((et) => Se(Zr)(Q)(et))(p), q = (() => {
      if (Y.tag === "Nothing")
        return [];
      if (Y.tag === "Just")
        return Y._1;
      f();
    })(), X = q.length;
    if ((() => {
      if (c === "VDown")
        return M <= 0;
      if (c === "VUp")
        return M >= (X - 1 | 0);
      f();
    })()) {
      const et = E(P, Q, A.thresh, A.st);
      return { ...A, st: et.state, thresh: et.thresh };
    }
    const W = (() => {
      if (c === "VDown")
        return M - 1 | 0;
      if (c === "VUp")
        return M + 1 | 0;
      f();
    })(), nt = W >= 0 && W < q.length ? T("Just", q[W]) : x;
    if (nt.tag === "Nothing")
      return A;
    if (nt.tag === "Just") {
      const et = ht(nt._1)(a.root), it = (() => {
        if (et.tag === "Nothing")
          return nt._1;
        if (et.tag === "Just")
          return et._1;
        f();
      })(), lt = E(P, Q, A.thresh, I(it)(A.st)), gt = (() => {
        const zt = ht(P)(lt.state.sink);
        if (zt.tag === "Nothing")
          return P === P;
        if (zt.tag === "Just")
          return zt._1 === P;
        f();
      })() ? {
        ...lt.state,
        sink: rt(F)(P)((() => {
          const zt = ht(it)(lt.state.sink);
          if (zt.tag === "Nothing")
            return it;
          if (zt.tag === "Just")
            return zt._1;
          f();
        })())(lt.state.sink)
      } : lt.state, pt = ht(it)(gt.sink), St = (() => {
        if (pt.tag === "Nothing")
          return it;
        if (pt.tag === "Just")
          return pt._1;
        f();
      })(), Gt = ht(P)(gt.sink), Wt = (() => {
        if (Gt.tag === "Nothing")
          return P;
        if (Gt.tag === "Just")
          return Gt._1;
        f();
      })();
      if (Wt === St) {
        const zt = ht(it)(gt.x), rn = (() => {
          if (zt.tag === "Just")
            return zt._1;
          if (zt.tag === "Nothing")
            return x;
          f();
        })(), fn = (() => {
          if (rn.tag === "Nothing")
            return 0;
          if (rn.tag === "Just")
            return rn._1;
          f();
        })(), ye = ht(P)(gt.x), On = (() => {
          if (ye.tag === "Just")
            return ye._1;
          if (ye.tag === "Nothing")
            return x;
          f();
        })(), Yt = (() => {
          if (On.tag === "Nothing")
            return 0;
          if (On.tag === "Just")
            return On._1;
          f();
        })(), Mt = m(Q, nt._1), In = ht(nt._1)(u), Fe = ht(Q)(u), de = (() => {
          if (In.tag === "Nothing")
            return 0;
          if (In.tag === "Just")
            return In._1;
          f();
        })() - (() => {
          if (Fe.tag === "Nothing")
            return 0;
          if (Fe.tag === "Just")
            return Fe._1;
          f();
        })();
        if (c === "VDown") {
          const fe = to(fn + de + $(nt._1) + Mt)(lt.thresh);
          return {
            st: { ...gt, x: rt(F)(P)(T("Just", A.initial ? fe : to(Yt)(fe)))(gt.x) },
            initial: !1,
            thresh: lt.thresh
          };
        }
        if (c === "VUp") {
          const fe = tr(fn + de - Mt - $(Q))(lt.thresh);
          return {
            st: { ...gt, x: rt(F)(P)(T("Just", A.initial ? fe : tr(Yt)(fe)))(gt.x) },
            initial: !1,
            thresh: lt.thresh
          };
        }
        f();
      }
      const $t = ht(it)(gt.x), At = (() => {
        if ($t.tag === "Just")
          return $t._1;
        if ($t.tag === "Nothing")
          return x;
        f();
      })(), Nt = (() => {
        if (At.tag === "Nothing")
          return 0;
        if (At.tag === "Just")
          return At._1;
        f();
      })(), Ct = ht(P)(gt.x), dt = (() => {
        if (Ct.tag === "Just")
          return Ct._1;
        if (Ct.tag === "Nothing")
          return x;
        f();
      })(), yt = (() => {
        if (dt.tag === "Nothing")
          return 0;
        if (dt.tag === "Just")
          return dt._1;
        f();
      })(), Et = tt(t.nodeGap), mt = ht(Q)(u), kt = ht(nt._1)(u), Dt = (() => {
        if (mt.tag === "Nothing")
          return 0;
        if (mt.tag === "Just")
          return mt._1;
        f();
      })() - (() => {
        if (kt.tag === "Nothing")
          return 0;
        if (kt.tag === "Just")
          return kt._1;
        f();
      })();
      return {
        st: {
          ...gt,
          classEdges: [
            ...gt.classEdges,
            {
              src: Wt,
              tgt: St,
              sep: (() => {
                if (c === "VDown")
                  return yt + Dt - Nt - $(nt._1) - Et;
                if (c === "VUp")
                  return yt + Dt + $(Q) + Et - Nt;
                f();
              })()
            }
          ]
        },
        initial: A.initial,
        thresh: lt.thresh
      };
    }
    f();
  }, I = (P) => (A) => {
    const Q = ht(P)(A.x), D = (() => {
      if (Q.tag === "Just")
        return Q._1;
      if (Q.tag === "Nothing")
        return x;
      f();
    })();
    if (D.tag === "Just")
      return A;
    if (D.tag === "Nothing") {
      const M = N(L(P))({
        st: { ...A, x: rt(F)(P)(T("Just", 0))(A.x) },
        initial: !0,
        thresh: (() => {
          if (c === "VDown")
            return -1e18;
          if (c === "VUp")
            return 1e18;
          f();
        })()
      })(Xs(a)(P));
      return { ...M.st, blockFinished: rt(F)(P)(!0)(M.st.blockFinished) };
    }
    f();
  }, H = N((P) => (A) => N((Q) => (D) => {
    const M = ht(D)(a.root), Y = (() => {
      if (M.tag === "Nothing")
        return D;
      if (M.tag === "Just")
        return M._1;
      f();
    })();
    return Y === D ? I(Y)(Q) : Q;
  })(P)((() => {
    if (c === "VDown")
      return A;
    if (c === "VUp")
      return un(A);
    f();
  })()))({
    x: Xr(B((P) => S(P, x))(w)),
    sink: Xr(B((P) => S(P, P))(w)),
    classEdges: [],
    su: z,
    blockFinished: z,
    queue: []
  })(p), G = gJ(H.classEdges)(H.sink)(c), O = (P, A, Q, D) => {
    const M = ht(A)(D), Y = ht(A)(u);
    return (() => {
      if (M.tag === "Nothing")
        return 0;
      if (M.tag === "Just")
        return M._1;
      f();
    })() + (() => {
      if (Y.tag === "Nothing")
        return 0;
      if (Y.tag === "Just")
        return Y._1;
      f();
    })() + d(P, A, Q);
  }, ut = Xr(B((P) => S(P, !0))(ls(F.compare)((() => {
    const P = (A, Q) => {
      if (A.tag === "Leaf")
        return Q;
      if (A.tag === "Node")
        return P(A._5, xt("Cons", A._4, P(A._6, Q)));
      f();
    };
    return Xt(_n.foldr, P(a.root, R));
  })()))), ot = (P) => (A) => (Q) => {
    const D = J(Q, { su: A.su, blockFinished: ut }), M = {
      phase: P,
      ppFree: Q.free,
      ppIsRoot: Q.isRoot,
      edgeId: x,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const Y = ht((() => {
          const q = ht(Q.free)(a.root);
          if (q.tag === "Nothing")
            return Q.free;
          if (q.tag === "Just")
            return q._1;
          f();
        })())(A.su);
        if (Y.tag === "Nothing")
          return !1;
        if (Y.tag === "Just")
          return Y._1;
        f();
      })(),
      hasEdges: D.hasEdges,
      candCount: (() => {
        if (Q.isRoot) {
          if (l === "HRight") {
            const Y = ht(Q.free)(y);
            if (Y.tag === "Nothing")
              return 0;
            if (Y.tag === "Just")
              return Y._1.length;
            f();
          }
          if (l === "HLeft") {
            const Y = ht(Q.free)(v);
            if (Y.tag === "Nothing")
              return 0;
            if (Y.tag === "Just")
              return Y._1.length;
          }
          f();
        }
        if (l === "HRight") {
          const Y = ht(Q.free)(v);
          if (Y.tag === "Nothing")
            return 0;
          if (Y.tag === "Just")
            return Y._1.length;
          f();
        }
        if (l === "HLeft") {
          const Y = ht(Q.free)(y);
          if (Y.tag === "Nothing")
            return 0;
          if (Y.tag === "Just")
            return Y._1.length;
        }
        f();
      })()
    };
    if (D.edge.tag === "Nothing")
      return { ...A, stack: [...A.stack, Q], trace: [...A.trace, M], x: A.x };
    if (D.edge.tag === "Just") {
      const Y = D.edge._1.from.node === Q.free ? S(D.edge._1.from.node, D.edge._1.to.node) : S(D.edge._1.to.node, D.edge._1.from.node), q = O(D.edge._1, Y._1, _(D.edge._1, Y._1), A.x) - O(D.edge._1, Y._2, _(D.edge._1, Y._2), A.x), X = ht(Y._1)(a.root), W = (() => {
        if (X.tag === "Nothing")
          return Y._1;
        if (X.tag === "Just")
          return X._1;
        f();
      })(), nt = { ...M, edgeId: T("Just", D.edge._1.id), delta: q };
      if (q > 0 && q < 1e300) {
        const et = N((gt) => (pt) => {
          const St = ht(pt)(h), Gt = (() => {
            if (St.tag === "Nothing")
              return -1;
            if (St.tag === "Just")
              return St._1;
            f();
          })();
          if (Gt >= 0 && Gt < e.length) {
            const At = e[Gt], Nt = ht(pt)(n.nodeIndex), Ct = (() => {
              if (Nt.tag === "Nothing")
                return -2;
              if (Nt.tag === "Just")
                return Nt._1 - 1 | 0;
              f();
            })();
            return Ct >= 0 && Ct < At.length ? tr(gt)((() => {
              const dt = ht(pt)(A.x), yt = ht(pt)(u), Et = ht(At[Ct])(A.x), mt = ht(At[Ct])(u);
              return (() => {
                if (dt.tag === "Nothing")
                  return 0;
                if (dt.tag === "Just")
                  return dt._1;
                f();
              })() + (() => {
                if (yt.tag === "Nothing")
                  return 0;
                if (yt.tag === "Just")
                  return yt._1;
                f();
              })() - ((() => {
                if (Et.tag === "Nothing")
                  return 0;
                if (Et.tag === "Just")
                  return Et._1;
                f();
              })() + (() => {
                if (mt.tag === "Nothing")
                  return 0;
                if (mt.tag === "Just")
                  return mt._1;
                f();
              })() + $(At[Ct]) + m(pt, At[Ct]));
            })()) : gt;
          }
          const Wt = ht(pt)(n.nodeIndex), $t = (() => {
            if (Wt.tag === "Nothing")
              return -2;
            if (Wt.tag === "Just")
              return Wt._1 - 1 | 0;
            f();
          })();
          return $t >= 0 && $t < 0 ? tr(gt)((() => {
            const At = ht(pt)(A.x), Nt = ht(pt)(u), Ct = ht([][$t])(A.x), dt = ht([][$t])(u);
            return (() => {
              if (At.tag === "Nothing")
                return 0;
              if (At.tag === "Just")
                return At._1;
              f();
            })() + (() => {
              if (Nt.tag === "Nothing")
                return 0;
              if (Nt.tag === "Just")
                return Nt._1;
              f();
            })() - ((() => {
              if (Ct.tag === "Nothing")
                return 0;
              if (Ct.tag === "Just")
                return Ct._1;
              f();
            })() + (() => {
              if (dt.tag === "Nothing")
                return 0;
              if (dt.tag === "Just")
                return dt._1;
              f();
            })() + $([][$t]) + m(pt, [][$t]));
          })()) : gt;
        })(q)(Xs(a)(W)), it = et > 0 ? -et : 0, lt = { ...A, x: et > 0 ? g(W, it, A.x) : A.x, trace: [...A.trace, { ...nt, avail: et, shift: it }] };
        return et > 0 ? lt : { ...lt, stack: [...lt.stack, Q] };
      }
      if (q < 0 && -q < 1e300) {
        const et = N((gt) => (pt) => {
          const St = ht(pt)(h), Gt = (() => {
            if (St.tag === "Nothing")
              return -1;
            if (St.tag === "Just")
              return St._1;
            f();
          })();
          if (Gt >= 0 && Gt < e.length) {
            const At = e[Gt], Nt = ht(pt)(n.nodeIndex), Ct = (() => {
              if (Nt.tag === "Nothing")
                return 0;
              if (Nt.tag === "Just")
                return Nt._1 + 1 | 0;
              f();
            })();
            return Ct >= 0 && Ct < At.length ? tr(gt)((() => {
              const dt = ht(At[Ct])(A.x), yt = ht(At[Ct])(u), Et = ht(pt)(A.x), mt = ht(pt)(u);
              return (() => {
                if (dt.tag === "Nothing")
                  return 0;
                if (dt.tag === "Just")
                  return dt._1;
                f();
              })() + (() => {
                if (yt.tag === "Nothing")
                  return 0;
                if (yt.tag === "Just")
                  return yt._1;
                f();
              })() - ((() => {
                if (Et.tag === "Nothing")
                  return 0;
                if (Et.tag === "Just")
                  return Et._1;
                f();
              })() + (() => {
                if (mt.tag === "Nothing")
                  return 0;
                if (mt.tag === "Just")
                  return mt._1;
                f();
              })() + $(pt) + m(pt, At[Ct]));
            })()) : gt;
          }
          const Wt = ht(pt)(n.nodeIndex), $t = (() => {
            if (Wt.tag === "Nothing")
              return 0;
            if (Wt.tag === "Just")
              return Wt._1 + 1 | 0;
            f();
          })();
          return $t >= 0 && $t < 0 ? tr(gt)((() => {
            const At = ht([][$t])(A.x), Nt = ht([][$t])(u), Ct = ht(pt)(A.x), dt = ht(pt)(u);
            return (() => {
              if (At.tag === "Nothing")
                return 0;
              if (At.tag === "Just")
                return At._1;
              f();
            })() + (() => {
              if (Nt.tag === "Nothing")
                return 0;
              if (Nt.tag === "Just")
                return Nt._1;
              f();
            })() - ((() => {
              if (Ct.tag === "Nothing")
                return 0;
              if (Ct.tag === "Just")
                return Ct._1;
              f();
            })() + (() => {
              if (dt.tag === "Nothing")
                return 0;
              if (dt.tag === "Just")
                return dt._1;
              f();
            })() + $(pt) + m(pt, [][$t]));
          })()) : gt;
        })(-q)(Xs(a)(W)), it = et > 0 ? et : 0, lt = { ...A, x: et > 0 ? g(W, it, A.x) : A.x, trace: [...A.trace, { ...nt, avail: et, shift: it }] };
        return et > 0 ? lt : { ...lt, stack: [...lt.stack, Q] };
      }
      return { ...A, stack: [...A.stack, Q], trace: [...A.trace, nt], x: A.x };
    }
    f();
  }, Z = N(ot(fJ))({
    x: Xr(B((P) => S(
      P,
      (() => {
        const A = ht(P)(a.root), Q = (() => {
          if (A.tag === "Nothing")
            return P;
          if (A.tag === "Just")
            return A._1;
          f();
        })(), D = ht(Q)(H.x), M = ht((() => {
          const q = ht(Q)(H.sink);
          if (q.tag === "Nothing")
            return Q;
          if (q.tag === "Just")
            return q._1;
          f();
        })())(G), Y = (() => {
          if (D.tag === "Just")
            return D._1;
          if (D.tag === "Nothing")
            return x;
          f();
        })();
        return (() => {
          if (Y.tag === "Nothing")
            return 0;
          if (Y.tag === "Just")
            return Y._1;
          f();
        })() + (() => {
          if (M.tag === "Nothing")
            return 0;
          if (M.tag === "Just")
            return M._1;
          f();
        })();
      })()
    ))(w)),
    su: H.su,
    stack: [],
    trace: []
  })(H.queue), U = N(ot(lJ))({ ...Z, stack: [] })(un(Z.stack));
  return { x: U.x, queue: H.queue, trace: U.trace };
}, hJ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => dJ(t)(n)(e)(r)(o)(i)(s)(u)(a)(c)(l).x, pJ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (a, c, l) => {
    const d = ht(c)(e), _ = (() => {
      if (d.tag === "Nothing")
        return 0.5;
      if (d.tag === "Just")
        return d._1._1 / 2;
      f();
    })(), g = a.from.node === c ? a.from.port : a.to.node === c ? a.to.port : x;
    if (g.tag === "Just") {
      const p = ht(c)(n);
      if (p.tag === "Just") {
        const $ = Vt((h) => h.id === g._1)(p._1);
        if ($.tag === "Just") {
          const h = tt($._1.offset) * tt(4);
          return l === "North" || l === "South" ? h : 0;
        }
        if ($.tag === "Nothing") {
          const h = ss(o)(a.id)(l)(_);
          return l === "North" || l === "South" ? h : 0;
        }
        f();
      }
      if (p.tag === "Nothing") {
        const $ = ss(o)(a.id)(l)(_);
        return l === "North" || l === "South" ? $ : 0;
      }
      f();
    }
    if (g.tag === "Nothing") {
      const p = ss(o)(a.id)(l)(_);
      return l === "North" || l === "South" ? p : 0;
    }
    f();
  }, u = (a) => (c) => (l) => (d) => {
    let _ = a, g = c, p = l, $ = d, h = !0, m;
    for (; h; ) {
      const y = _, v = g, w = p, J = Rt((k) => x, (k) => (E) => T("Just", { head: k, tail: E }), $);
      if (J.tag === "Nothing") {
        h = !1, m = y;
        continue;
      }
      if (J.tag === "Just") {
        const k = J._1.head, E = Vt((I) => I.from.node === w && I.to.node === k || I.from.node === k && I.to.node === w)(r), L = (() => {
          if (E.tag === "Nothing")
            return v + 0;
          if (E.tag === "Just")
            return v + (s(E._1, w, E._1.from.node === w ? Xn : qn) - s(
              E._1,
              k,
              E._1.from.node === k ? Xn : qn
            ));
          f();
        })();
        _ = rt(F)(k)(L)(y), g = L, p = k, $ = J._1.tail;
        continue;
      }
      f();
    }
    return m;
  };
  return N((a) => (c) => {
    const l = Rt((g) => x, (g) => (p) => T("Just", { head: g, tail: p }), Xs(t)(c)), d = (() => {
      if (l.tag === "Nothing")
        return rt(F)(c)(0)(z);
      if (l.tag === "Just")
        return u(rt(F)(l._1.head)(0)(z))(0)(l._1.head)(l._1.tail);
      f();
    })(), _ = N((g) => (p) => to(g)(-p._2))(0)(N0(d));
    return N((g) => (p) => rt(F)(p._1)(p._2 + _)(g))(a)(N0(d));
  })(z)(ls(F.compare)((() => {
    const a = (c, l) => {
      if (c.tag === "Leaf")
        return l;
      if (c.tag === "Node")
        return a(c._5, xt("Cons", c._4, a(c._6, l)));
      f();
    };
    return Xt(_n.foldr, a(t.root, R));
  })()));
}, mJ = (t) => (n) => {
  const e = (o, i, s) => Yn(3)(i) === "$d:" && pl(
    Gp,
    (() => {
      const u = ht(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (a) => (c) => (l) => {
    let d = o, _ = i, g = u, p = c, $ = l, h = !0, m;
    for (; h; ) {
      const y = d, v = _, w = g, C = p, J = $, k = v.length;
      if (J >= k) {
        h = !1, m = y;
        continue;
      }
      const E = J >= 0 && J < v.length ? T("Just", v[J]) : x, L = (() => {
        if (E.tag === "Nothing")
          return "";
        if (E.tag === "Just")
          return E._1;
        f();
      })(), I = e(t, L);
      if (J === (k - 1 | 0) || I) {
        const H = (() => {
          if (I) {
            const G = ht(L)(t.preds), O = (() => {
              if (G.tag === "Nothing")
                return [];
              if (G.tag === "Just")
                return G._1;
              f();
            })();
            if (0 < O.length) {
              const ut = w - 1 | 0, ot = ht(O[0])(t.nodeIndex);
              if (ot.tag === "Nothing")
                return ut;
              if (ot.tag === "Just")
                return ot._1;
              f();
            }
          }
          return w - 1 | 0;
        })();
        d = N((G) => (O) => {
          if (O >= 0 && O < v.length) {
            const ut = v[O];
            return e(t, ut) ? G : N((ot) => (Z) => {
              const U = ht(Z)(t.nodeIndex), P = (() => {
                if (U.tag === "Nothing")
                  return 0;
                if (U.tag === "Just")
                  return U._1;
                f();
              })();
              return P < C || P > H ? rt(F)(Z + "→" + ut)()(ot) : ot;
            })(G)((() => {
              const ot = ht(ut)(t.preds);
              if (ot.tag === "Nothing")
                return [];
              if (ot.tag === "Just")
                return ot._1;
              f();
            })());
          }
          return e(t, "") ? G : N((ut) => (ot) => {
            const Z = ht(ot)(t.nodeIndex), U = (() => {
              if (Z.tag === "Nothing")
                return 0;
              if (Z.tag === "Just")
                return Z._1;
              f();
            })();
            return U < C || U > H ? rt(F)(ot + "→")()(ut) : ut;
          })(G)((() => {
            const ut = ht("")(t.preds);
            if (ut.tag === "Nothing")
              return [];
            if (ut.tag === "Just")
              return ut._1;
            f();
          })());
        })(y)(Zt(0, J)), _ = v, g = w, p = H, $ = J + 1 | 0;
        continue;
      }
      d = y, _ = v, g = w, p = C, $ = J + 1 | 0;
    }
    return m;
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
  })(z)(Zt(1, n.length - 2 | 0));
}, $J = (t) => (n) => (e) => (r) => (o) => {
  const i = De(n), s = N((u) => (a) => {
    const c = N((l) => (d) => {
      const _ = (() => {
        if (o === "HRight") {
          const h = ht(d)(t.preds);
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
          f();
        }
        if (o === "HLeft") {
          const h = ht(d)(t.succs);
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
        }
        f();
      })(), g = _.length;
      if (g === 0)
        return l;
      const p = rr(g - 1 | 0, 2), $ = rr(g, 2);
      return N((h) => (m) => {
        if ((() => {
          const y = ht(d)(h.align);
          if (y.tag === "Nothing")
            return d !== d;
          if (y.tag === "Just")
            return y._1 !== d;
          f();
        })())
          return h;
        if (m >= 0 && m < _.length) {
          const y = ht(_[m])(t.nodeIndex), v = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (!(r1(_[m] + "→" + d)(e) || r1(d + "→" + _[m])(e)) && (() => {
            if (r === "VDown")
              return h.r < v;
            if (r === "VUp")
              return h.r > v;
            f();
          })()) {
            const w = ht(_[m])(h.root), C = (() => {
              if (w.tag === "Nothing")
                return _[m];
              if (w.tag === "Just")
                return w._1;
              f();
            })();
            return {
              root: rt(F)(d)(C)(h.root),
              align: rt(F)(_[m])(d)(rt(F)(d)(C)(h.align)),
              r: v
            };
          }
        }
        return h;
      })(l)((() => {
        if (r === "VDown")
          return Zt(p, $);
        if (r === "VUp")
          return un(Zt(p, $));
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
        return un(a);
      f();
    })());
    return { root: c.root, align: c.align };
  })({ root: Xr(B((u) => S(u, u))(i)), align: Xr(B((u) => S(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return un(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, ta = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => {
  const l = $J(n)(e)(u)(a)(c), d = pJ(l)(o)(r)(i)(s)(c);
  return bx()((_) => (g) => T(
    "Just",
    (() => {
      const p = ht(_)(d);
      if (p.tag === "Nothing")
        return g + 0;
      if (p.tag === "Just")
        return g + p._1;
      f();
    })()
  ))(hJ(t)(n)(e)(r)(o)(i)(s)(d)(l)(a)(c));
}, o1 = (t) => (n) => Qt((e) => (r) => N((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Zt(0, n.length - 1 | 0);
  return e < 1 ? [] : Ft(0, e, o);
})()))(n), yJ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = aJ(0)(n.length - 1 | 0), a = tt(t.layerGap), c = s(ci(u, a)), l = nJ(zp(o)(c)(r)(i)(z))(c);
  return B((d) => {
    const _ = cJ(d)(l);
    return _.tag === "Just" && _._1 > 0 ? to(a)(2 + tt(_._1 - 1 | 0) * 2.5) : a;
  })(Zt(0, u - 1 | 0));
}, Xp = (t) => (n) => (e) => (r) => pl(
  (o) => N((i) => (s) => {
    if (!i.ok)
      return i;
    const u = ht(s)(r), a = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })(), c = ht(s)(e), l = (() => {
      if (c.tag === "Nothing")
        return a + 1;
      if (c.tag === "Just")
        return a + c._1._1;
      f();
    })();
    return a + 1e-4 > i.pos && l + 1e-4 > i.pos ? { ok: !0, pos: l } : { ok: !1, pos: i.pos };
  })({ ok: !0, pos: -1e18 })(o).ok,
  n
), xJ = (t) => (n) => (e) => (r) => {
  const o = Bt((i) => (s) => st.compare(i.w)(s.w))(B((i) => ({ l: i, w: qp(i) }))(_t(
    Xp()(n)(e),
    r
  )));
  return 0 < o.length ? T("Just", o[0].l) : x;
}, vJ = (t) => (n) => {
  const e = Xr(De(B(Qt((o) => (i) => S(i, o)))(t))), r = (o) => Bt((i) => (s) => ct.compare((() => {
    const u = ht(i)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    f();
  })())((() => {
    const u = ht(s)(e);
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
          return z;
        if (i.tag === "Node")
          return nn("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(N((i) => (s) => Ot(F)(Sn)(s.to.node)([s.from.node])(i))(z)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return z;
        if (i.tag === "Node")
          return nn("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(N((i) => (s) => Ot(F)(Sn)(s.from.node)([s.to.node])(i))(z)(n));
    })(),
    nodeIndex: e
  };
}, TJ = (t) => (n) => {
  const e = Bt((d) => (_) => st.compare(d.w)(_.w))(Qt((d) => (_) => ({ i: d, l: _, w: qp(_) }))(n)), r = 0 < e.length ? T("Just", e[0]) : x, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? T("Just", n[o]) : x, s = (() => {
    if (i.tag === "Just")
      return ((_) => (g) => {
        let p = _, $ = g, h = !0, m;
        for (; h; ) {
          const y = p, v = $;
          if (v.tag === "Nil") {
            h = !1, m = y;
            continue;
          }
          if (v.tag === "Cons") {
            p = tr(y)(v._1), $ = v._2;
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
            return _(g._5, xt("Cons", g._4, _(g._6, p)));
          f();
        };
        return _(i._1, R);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (d) => N((_) => (g) => to(_)((() => {
    const p = ht(g._1)(t);
    if (p.tag === "Nothing")
      return g._2 + 1;
    if (p.tag === "Just")
      return g._2 + p._1._1;
    f();
  })()))(-999999)(N0(d)), a = o >= 0 && o < n.length ? T("Just", n[o]) : x, c = (() => {
    if (a.tag === "Just")
      return u(a._1);
    if (a.tag === "Nothing")
      return 0;
    f();
  })(), l = Gn(
    (d) => (_) => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return z;
        if (p.tag === "Node")
          return nn("Node", p._1, p._2, p._3, p._4 + _, g(p._5), g(p._6));
        f();
      };
      return g(d);
    },
    n,
    Qt((d) => (_) => No(d)(2) === 0 ? s - ((p) => ($) => {
      let h = p, m = $, y = !0, v;
      for (; y; ) {
        const w = h, C = m;
        if (C.tag === "Nil") {
          y = !1, v = w;
          continue;
        }
        if (C.tag === "Cons") {
          h = tr(w)(C._1), m = C._2;
          continue;
        }
        f();
      }
      return v;
    })(999999)((() => {
      const p = ($, h) => {
        if ($.tag === "Leaf")
          return h;
        if ($.tag === "Node")
          return p($._5, xt("Cons", $._4, p($._6, h)));
        f();
      };
      return p(_, R);
    })()) : c - u(_))(n)
  );
  return _J(N((d) => (_) => {
    const g = Bt(st.compare)(Tt(ht(_))(l));
    return rt(F)(_)(g.length === 4 ? 1 < g.length && 2 < g.length ? (g[1] + g[2]) / 2 : 0 : 0 < g.length ? g[0] : 0)(d);
  })(z)(ls(F.compare)(De(B((d) => {
    const _ = (g) => {
      if (g.tag === "Leaf")
        return z;
      if (g.tag === "Node")
        return nn("Node", g._1, g._2, g._3, void 0, _(g._5), _(g._6));
      f();
    };
    return Xt(Ae.foldr, _(d));
  })(l)))));
}, wJ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = vJ(n)(o), u = mJ(s)(n), a = { nodeGap: t.nodeGap * 4 | 0 }, c = ee(
    F.compare,
    ne,
    Xr(B((g) => S(g, S(1, 1)))(_t(
      Gp,
      De(n)
    ))),
    (() => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return z;
        if (p.tag === "Node")
          return nn("Node", p._1, p._2, p._3, S(p._4._1 * tt(4), p._4._2), g(p._5), g(p._6));
        f();
      };
      return g(e);
    })()
  ), l = [
    ta(a)(s)(n)(c)(r)(o)(i)(u)(Z_)(n1),
    ta(a)(s)(n)(c)(r)(o)(i)(u)(t1)(n1),
    ta(a)(s)(n)(c)(r)(o)(i)(u)(Z_)(e1),
    ta(a)(s)(n)(c)(r)(o)(i)(u)(t1)(e1)
  ], d = TJ(c)(l);
  if (Xp()(n)(c)(d))
    return d;
  const _ = xJ()(n)(c)(l);
  if (_.tag === "Just")
    return _._1;
  if (_.tag === "Nothing")
    return l[0];
  f();
}, NJ = (t) => (n) => (e) => (r) => {
  const o = uh(
    x,
    nh,
    (i) => i.node === n ? T("Just", i.position) : x,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return B((s) => s.node === e ? { ...s, position: S(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, CJ = (t) => (n) => (e) => (r) => {
  const o = _t((s) => Se(Zr)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return N((s) => (u) => tr(s)(u.position._1))(99999)(o);
      if (r === "End")
        return N((s) => (u) => to(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = N((u) => (a) => u + a.position._1)(0)(o);
        return o.length === 0 ? 0 : s / tt(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return N((s) => (u) => tr(s)(u.position._2))(99999)(o);
      if (r === "End")
        return N((s) => (u) => to(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = N((u) => (a) => u + a.position._2)(0)(o);
        return o.length === 0 ? 0 : s / tt(o.length);
      }
    }
    f();
  })();
  return B((s) => {
    if (Se(Zr)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: S(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: S(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, JJ = (t) => (n) => N((e) => (r) => r.tag === "AlignGroup" ? CJ(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? NJ(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), bJ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = B((d) => N((_) => (g) => to(_)((() => {
    const p = ht(g)(r);
    if (p.tag === "Nothing")
      return 1;
    if (p.tag === "Just")
      return p._1._2;
    f();
  })()))(1)(d))(e), c = wJ(t)(e)(r)(o)(i)(u), l = o1(yJ(t)(e)(r)(o)(i)(s)((d) => {
    const _ = o1(d)(a);
    return De(Qt((g) => (p) => Qt(($) => (h) => ({
      node: h,
      position: S(
        (() => {
          const m = ht(h)(c);
          return (() => {
            if (m.tag === "Nothing")
              return 0;
            if (m.tag === "Just")
              return m._1;
            f();
          })() / tt(4);
        })(),
        g >= 0 && g < _.length ? _[g] : 0
      ),
      size: (() => {
        const m = Yn(3)(h) === "$d:" ? S(0, 1) : S(1, 1), y = ht(h)(r);
        if (y.tag === "Nothing")
          return m;
        if (y.tag === "Just")
          return y._1;
        f();
      })(),
      layer: g,
      order: $
    }))(p))(e));
  }))(a);
  return JJ(n)(De(Qt((d) => (_) => Qt((g) => (p) => ({
    node: p,
    position: S(
      (() => {
        const $ = ht(p)(c);
        return (() => {
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just")
            return $._1;
          f();
        })() / tt(4);
      })(),
      d >= 0 && d < l.length ? l[d] : 0
    ),
    size: (() => {
      const $ = Yn(3)(p) === "$d:" ? S(0, 1) : S(1, 1), h = ht(p)(r);
      if (h.tag === "Nothing")
        return $;
      if (h.tag === "Just")
        return h._1;
      f();
    })(),
    layer: d,
    order: g
  }))(_))(e)));
}, Wf = /* @__PURE__ */ Ql(Ca)(/* @__PURE__ */ bi(32)), i1 = /* @__PURE__ */ Ql(Ca)(/* @__PURE__ */ bi(31)), gu = /* @__PURE__ */ (() => {
  const t = gv("25214903917");
  if (t.tag === "Nothing")
    return Nh;
  if (t.tag === "Just")
    return t._1;
  f();
})(), _u = /* @__PURE__ */ f0(/* @__PURE__ */ Ql(Ca)(/* @__PURE__ */ bi(48)))(Ca), kJ = (t) => {
  const n = _v(t);
  return su(Ch((() => {
    if (n.tag === "Nothing")
      return Nh;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(gu))(_u);
}, C0 = /* @__PURE__ */ bi(11), Ma = (t) => (n) => {
  const e = su(la(ga(n)(gu))(C0))(_u);
  return S(
    (() => {
      const r = fh(av(l0(e)(bi(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, LJ = (t) => {
  const n = Ma(26)(t), e = Ma(27)(n._2);
  return S((tt(n._1) * _s(2)(27) + tt(e._1)) / _s(2)(53), e._2);
}, SJ = (t) => (n) => {
  const e = N((r) => (o) => {
    const i = LJ(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return S(
    B((r) => r.x)(Bt((r) => (o) => st.compare(r.k)(o.k))(Gn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, EJ = (t) => {
  const n = su(la(ga(t)(gu))(C0))(_u), e = su(la(ga(n)(gu))(C0))(_u);
  return S(
    la(ga((() => {
      const r = l0(n)(bi(16));
      return h_.compare(r)(i1) !== "LT" ? f0(r)(Wf) : r;
    })())(Wf))((() => {
      const r = l0(e)(bi(16));
      return h_.compare(r)(i1) !== "LT" ? f0(r)(Wf) : r;
    })()),
    e
  );
}, du = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ua = (t) => (e) => {
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
}, ug = /* @__PURE__ */ dn(F)(qt), rs = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ya = /* @__PURE__ */ dn(F)(qt), PJ = /* @__PURE__ */ bu(Di), AJ = /* @__PURE__ */ N(mr)(0), RJ = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, s1 = (t) => (e) => {
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
}, FJ = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = Xo(Ht, x, t, e[n], e);
      if (o.tag === "Just")
        return Xo(Ht, x, n, r, o._1);
      if (o.tag === "Nothing")
        return x;
      f();
    }
  }
  return x;
}, GJ = (t) => (n) => (e) => (r) => (o) => ug(N((i) => (s) => {
  const u = Bt((a) => (c) => ct.compare((() => {
    const l = du(a.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })())((() => {
    const l = du(c.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })()))(_t((a) => Ua(a.to.node)(e), _t((a) => a.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Qt((a) => (c) => S(c.id, tt((i.rankSum + a | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), IJ = (t) => (n) => (e) => (r) => (o) => ug(N((i) => (s) => {
  const u = Bt((c) => (l) => {
    const d = ct.compare((() => {
      const _ = rs(l.from.node)(e);
      if (_.tag === "Nothing")
        return -1;
      if (_.tag === "Just")
        return _._1;
      f();
    })())((() => {
      const _ = rs(c.from.node)(e);
      if (_.tag === "Nothing")
        return -1;
      if (_.tag === "Just")
        return _._1;
      f();
    })());
    return d === "EQ" ? ct.compare((() => {
      const _ = du(c.id)(o);
      if (_.tag === "Nothing")
        return 1e6;
      if (_.tag === "Just")
        return _._1;
      f();
    })())((() => {
      const _ = du(l.id)(o);
      if (_.tag === "Nothing")
        return 1e6;
      if (_.tag === "Just")
        return _._1;
      f();
    })()) : d;
  })(_t((c) => Ua(c.from.node)(e), _t((c) => c.to.node === s, r))), a = u.length;
  return {
    ranks: [...i.ranks, ...Qt((c) => (l) => S(l.id, tt((i.rankSum + a | 0) - c | 0)))(u)],
    rankSum: i.rankSum + a | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), J0 = (t) => (n) => (e) => {
  const r = Ya(Qt((u) => (a) => S(a, u))(t)), o = Ya(Qt((u) => (a) => S(a, u))(n)), i = Tt((u) => {
    const a = rs(u.from.node)(r), c = rs(u.to.node)(o);
    if (a.tag === "Just" && c.tag === "Just")
      return T("Just", S(a._1, c._1));
    const l = rs(u.from.node)(o), d = rs(u.to.node)(r);
    return l.tag === "Just" && d.tag === "Just" ? T("Just", S(d._1, l._1)) : x;
  })(e), s = i.length;
  return N((u) => (a) => N((c) => (l) => a >= 0 && a < i.length && l >= 0 && l < i.length && ((i[a]._1 - i[l]._1 | 0) * (i[a]._2 - i[l]._2 | 0) | 0) < 0 ? c + 1 | 0 : c)(u)(Zt(a + 1 | 0, s - 1 | 0)))(0)(Zt(0, s - 2 | 0));
}, BJ = (t) => (n) => (e) => (r) => {
  const o = (s) => (u) => {
    let a = s, c = u, l = !0, d;
    for (; l; ) {
      const _ = a, g = c;
      if (g >= (_.length - 1 | 0)) {
        l = !1, d = _;
        continue;
      }
      if (g >= 0 && g < _.length) {
        const p = g + 1 | 0;
        if (p >= 0 && p < _.length) {
          const $ = _[g], h = _[p];
          if (sn((w) => w.before === $ && w.after === h, r)) {
            a = _, c = g + 1 | 0;
            continue;
          }
          const m = Xo(Ht, x, g, h, _), y = (() => {
            if (m.tag === "Just")
              return Xo(Ht, x, g + 1 | 0, $, m._1);
            if (m.tag === "Nothing")
              return x;
            f();
          })(), v = (() => {
            if (y.tag === "Nothing")
              return _;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (J0(n)(v)(e) < J0(n)(_)(e)) {
            a = v, c = g + 1 | 0;
            continue;
          }
          a = _, c = g + 1 | 0;
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
    let u = s, a = !0, c;
    for (; a; ) {
      const l = u, d = o(l)(0);
      if (PJ(d)(l)) {
        a = !1, c = l;
        continue;
      }
      u = d;
    }
    return c;
  })(t);
}, na = (t) => (n) => N((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + J0(o)(t[i])(n) | 0;
  }
  return e;
})(0)(Zt(0, t.length - 2 | 0)), DJ = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (a) => {
        let c = u, l = a, d = !0, _;
        for (; d; ) {
          const g = c, p = l, $ = p - 1 | 0;
          if ($ >= 0 && $ < g.length) {
            if (p >= 0 && p < g.length && p > 0 && g[$].key > g[p].key) {
              const h = FJ(p - 1 | 0)(p)(g);
              if (h.tag === "Just") {
                c = h._1, l = p - 1 | 0;
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
      return N((u) => (a) => s(u)(a))(n)(Zt(1, n.length - 1 | 0));
    }
    const e = rr(n.length, 2), r = t(Ft(0, e, n)), o = t(Ft(e, n.length, n));
    return ((s) => (u) => (a) => {
      let c = s, l = u, d = a, _ = !0, g;
      for (; _; ) {
        const p = c, $ = l, h = d;
        if ($ >= 0 && $ < r.length) {
          if (h >= 0 && h < o.length) {
            if (r[$].key > o[h].key) {
              c = Lt(p)(o[h]), l = $, d = h + 1 | 0;
              continue;
            }
            c = Lt(p)(r[$]), l = $ + 1 | 0, d = h;
            continue;
          }
          _ = !1, g = [...p, ...$ < 1 ? r : Ft($, r.length, r)];
          continue;
        }
        _ = !1, g = [...p, ...h < 1 ? o : Ft(h, o.length, o)];
      }
      return g;
    })([])(0)(0);
  };
  return t;
})(), zJ = (t) => (n) => (e) => {
  const r = Tt((c) => c.tag === "OrderConstraint" ? T("Just", { before: c._1.before, after: c._1.after }) : x)(t.constraints), o = (c) => N((l) => (d) => {
    const _ = d.after, g = d.before, p = bo(Ht, x, (h) => h === g, l), $ = bo(Ht, x, (h) => h === _, l);
    if (p.tag === "Just" && $.tag === "Just" && p._1 > $._1) {
      const h = ch(Ht, x, p._1, l), m = (() => {
        if (h.tag === "Nothing")
          return l;
        if (h.tag === "Just")
          return h._1;
        f();
      })(), y = ah(Ht, x, $._1, g, m);
      if (y.tag === "Nothing")
        return m;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return l;
  })(c)(r), i = ug(Qt((c) => (l) => S(l.id, c))(e)), s = (c, l, d) => {
    const _ = c.length;
    return N((g) => (p) => {
      const $ = l ? p - 1 | 0 : p + 1 | 0, h = $ >= 0 && $ < g._1.length ? T("Just", g._1[$]) : x;
      if (h.tag === "Just") {
        const m = p >= 0 && p < g._1.length ? T("Just", g._1[p]) : x;
        if (m.tag === "Just") {
          const y = Ya(Qt((k) => (E) => S(E, k))(h._1)), v = Ya(Qt((k) => (E) => S(E, k))(m._1)), w = l ? GJ(h._1)(y)(v)(e)(i) : IJ(h._1)(y)(v)(e)(i), C = N((k) => (E) => {
            const L = Tt((H) => du(H.id)(w))(_t(l ? (H) => H.to.node === E._2 && Ua(H.from.node)(y) : (H) => H.from.node === E._2 && Ua(H.to.node)(y), e));
            if (L.length === 0)
              return { ...k, items: [...k.items, { n: E._2, key: x, origIdx: E._1 }] };
            const I = Ma(24)(k.r);
            return {
              items: [
                ...k.items,
                {
                  n: E._2,
                  key: T("Just", (AJ(L) + (tt(I._1) * 4172325152040912e-24 - 0.03500000014901161)) / tt(L.length)),
                  origIdx: E._1
                }
              ],
              r: I._2
            };
          })({ items: [], r: g._2 })(Qt(Kn)(m._1)), J = Xo(
            Ht,
            x,
            p,
            BJ(o(B((k) => k.n)(DJ((() => {
              const k = C.items, E = (I) => (H) => {
                let G = I, O = H, ut = !0, ot;
                for (; ut; ) {
                  const Z = G, U = O;
                  if (Z >= 0 && Z < k.length) {
                    if (k[Z].key.tag === "Just") {
                      ut = !1, ot = k[Z].key._1;
                      continue;
                    }
                    if (k[Z].key.tag === "Nothing") {
                      G = Z + 1 | 0, O = U;
                      continue;
                    }
                    f();
                  }
                  ut = !1, ot = U;
                }
                return ot;
              };
              return ((I) => (H) => (G) => {
                let O = I, ut = H, ot = G, Z = !0, U;
                for (; Z; ) {
                  const P = O, A = ut, Q = ot;
                  if (P >= 0 && P < k.length) {
                    if (k[P].key.tag === "Just") {
                      O = P + 1 | 0, ut = k[P].key._1, ot = [...Q, { n: k[P].n, key: k[P].key._1, origIdx: k[P].origIdx }];
                      continue;
                    }
                    if (k[P].key.tag === "Nothing") {
                      const D = (A + E(P + 1 | 0)(A + 1)) / 2;
                      O = P + 1 | 0, ut = D, ot = [...Q, { n: k[P].n, key: D, origIdx: k[P].origIdx }];
                      continue;
                    }
                    f();
                  }
                  Z = !1, U = Q;
                }
                return U;
              })(0)(-1)([]);
            })()))))(h._1)(e)(r),
            g._1
          );
          if (J.tag === "Just")
            return S(J._1, C.r);
          if (J.tag === "Nothing")
            return S(g._1, g._2);
          f();
        }
        if (m.tag === "Nothing")
          return S(g._1, g._2);
        f();
      }
      if (h.tag === "Nothing")
        return S(g._1, g._2);
      f();
    })(S(c, d))(l ? Zt(1, _ - 1 | 0) : un(Zt(0, _ - 2 | 0)));
  }, u = N((c) => (l) => rt(F)(l.from.node)()(rt(F)(l.to.node)()(c)))(z)(e), a = N((c) => (l) => {
    if (c.result.crossings === 0)
      return c;
    const d = (y) => (v) => (w) => (C) => {
      let J = y, k = v, E = w, L = C, I = !0, H;
      for (; I; ) {
        const G = J, O = k, ut = E, ot = L;
        if (ut === 0) {
          I = !1, H = { layout: G, crossings: 0, random: ot };
          continue;
        }
        const Z = s(G, O, ot), U = na(Z._1)(e);
        if (U < ut) {
          J = Z._1, k = !O, E = U, L = Z._2;
          continue;
        }
        I = !1, H = { layout: G, crossings: ut, random: Z._2 };
      }
      return H;
    }, _ = Ma(1)(c.result.random), g = _._1 !== 0, p = t.modelOrder.tag === "Leaf", $ = (c.firstTry || c.secondTry) && !p ? c.firstTry : g, h = (() => {
      if (!p) {
        const C = s(n, $, _._2);
        return d(C._1)(!$)(na(C._1)(e))(C._2);
      }
      const y = $ ? 0 : RJ(0)(n.length - 1 | 0), v = y >= 0 && y < n.length ? T("Just", n[y]) : x;
      if (v.tag === "Just" && v._1.length > 1) {
        const C = _t((J) => s1(J)(u), v._1);
        if (C.length > 1) {
          const J = SJ(_._2)(C), k = J._1, E = Xo(
            Ht,
            x,
            y,
            o(N((L) => (I) => s1(I)(u) ? L.idx >= 0 && L.idx < k.length ? { idx: L.idx + 1 | 0, result: [...L.result, k[L.idx]] } : { idx: L.idx, result: [...L.result, I] } : { idx: L.idx, result: [...L.result, I] })({ idx: 0, result: [] })(v._1).result),
            n
          );
          if (E.tag === "Just") {
            const L = s(E._1, $, J._2);
            return d(L._1)(!$)(na(L._1)(e))(L._2);
          }
        }
      }
      const w = s(n, $, _._2);
      return d(w._1)(!$)(na(w._1)(e))(w._2);
    })(), m = c.secondTry ? !1 : c.secondTry;
    return c.firstTry ? {
      result: h.crossings < c.result.crossings ? { layout: h.layout, crossings: h.crossings, random: h.random } : { ...c.result, random: h.random },
      firstTry: !1,
      secondTry: !0
    } : {
      result: h.crossings < c.result.crossings ? { layout: h.layout, crossings: h.crossings, random: h.random } : { ...c.result, random: h.random },
      firstTry: c.firstTry,
      secondTry: m
    };
  })({
    result: {
      layout: n,
      crossings: 1e9,
      random: su(Ch(EJ(kJ(1))._1)(gu))(_u)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(Zt(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : a.layout;
}, HJ = (t) => t, u1 = (t) => (e) => {
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
}, ke = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ys = (t) => (e) => {
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
}, hu = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = F.compare(n._1)(e._1);
      return r === "LT" ? jn : r === "GT" ? Zn : F.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), WJ = /* @__PURE__ */ dn(F)(qt), QJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = hu.compare(t)(s._3);
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
}, OJ = /* @__PURE__ */ HJ("Greedy"), Qf = (t) => (n) => (e) => N((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !u1(o.to.node)(r.marks)) {
    const i = ke(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = rt(F)(o.to.node)(s)(r.inDeg);
    return (() => {
      const a = ke(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (a.tag === "Nothing")
          return !1;
        if (a.tag === "Just")
          return a._1 > 0;
        f();
      })() && !Se(Zr)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !u1(o.from.node)(r.marks)) {
    const i = ke(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = rt(F)(o.from.node)(s)(r.outDeg);
    return (() => {
      const a = ke(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (a.tag === "Nothing")
          return !1;
        if (a.tag === "Just")
          return a._1 > 0;
        f();
      })() && !Se(Zr)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: _t((r) => r !== n, e.remaining) })(t), qJ = /* @__PURE__ */ N((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return rt(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return rt(F)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return rt(F)(n._1.node)(99999)(t);
  }
  return t;
})(z), Mp = (t) => (n) => (e) => {
  const r = ke(n)(t), o = ke(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, Up = (t) => (n) => (e) => (r) => {
  if (ys(e)(r.visited) || ys(e)(r.visiting))
    return r;
  const o = N(XJ(t)(n)(e))({ ...r, visiting: rt(F)(e)()(r.visiting) })((() => {
    const i = ke(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: hs(F)(e)(o.visiting),
    visited: rt(F)(e)()(o.visited)
  };
}, XJ = (t) => (n) => (e) => (r) => (o) => Mp(t)(e)(o) ? { ...r, backEdges: rt(hu)(S(e, o))()(r.backEdges) } : ys(o)(r.visiting) ? { ...r, backEdges: rt(hu)(S(e, o))()(r.backEdges) } : ys(o)(r.visited) ? r : Up(t)(n)(o)(r), MJ = (t) => (n) => (e) => {
  const r = (_) => {
    let g = _, p = !0, $;
    for (; p; ) {
      const h = g, m = Rt((y) => x, (y) => (v) => T("Just", { head: y, tail: v }), h.sinks);
      if (m.tag === "Just") {
        g = Qf(e)(m._1.head)({
          ...h,
          sinks: m._1.tail,
          marks: rt(F)(m._1.head)(h.nextRight)(h.marks),
          nextRight: h.nextRight - 1 | 0
        });
        continue;
      }
      if (m.tag === "Nothing") {
        const y = Rt((v) => x, (v) => (w) => T("Just", { head: v, tail: w }), h.sources);
        if (y.tag === "Just") {
          g = Qf(e)(y._1.head)({
            ...h,
            sources: y._1.tail,
            marks: rt(F)(y._1.head)(h.nextLeft)(h.marks),
            nextLeft: h.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const v = (C) => {
            const J = ke(C)(h.outDeg), k = ke(C)(h.inDeg);
            return (() => {
              if (J.tag === "Nothing")
                return 0;
              if (J.tag === "Just")
                return J._1;
              f();
            })() - (() => {
              if (k.tag === "Nothing")
                return 0;
              if (k.tag === "Just")
                return k._1;
              f();
            })() | 0;
          }, w = Bt((C) => (J) => {
            const k = ct.compare(v(J))(v(C));
            return k === "EQ" ? ct.compare((() => {
              const E = ke(C)(n);
              if (E.tag === "Nothing")
                return 1e6;
              if (E.tag === "Just")
                return E._1;
              f();
            })())((() => {
              const E = ke(J)(n);
              if (E.tag === "Nothing")
                return 1e6;
              if (E.tag === "Just")
                return E._1;
              f();
            })()) : k;
          })(h.remaining);
          if (0 < w.length) {
            const C = w[0];
            g = Qf(e)(C)({
              ...h,
              remaining: _t((J) => J !== C, h.remaining),
              marks: rt(F)(C)(h.nextLeft)(h.marks),
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
  }, o = ls(F.compare)([...B((_) => _.from.node)(e), ...B((_) => _.to.node)(e)]), i = _t((_) => _.from.node !== _.to.node, e), s = N((_) => (g) => Ot(F)(An)(g.to.node)(1)(_))(z)(i), u = N((_) => (g) => Ot(F)(An)(g.from.node)(1)(_))(z)(i), a = _t(
    (_) => {
      const g = ke(_)(s);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), c = _t(
    (_) => {
      const g = ke(_)(u);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), l = o.length + 1 | 0, d = N((_) => (g) => {
    const p = ke(g)(_);
    return p.tag === "Just" && p._1 < 0 ? rt(F)(g)(p._1 + l | 0)(_) : _;
  })(r({
    remaining: _t((_) => !Se(Zr)(_)(a) && !Se(Zr)(_)(c), o),
    marks: z,
    inDeg: s,
    outDeg: u,
    sources: a,
    sinks: c,
    nextLeft: 1,
    nextRight: -1
  }).marks)(o);
  return N((_) => (g) => {
    if (g.from.node === g.to.node)
      return _;
    if (Mp(t)(g.from.node)(g.to.node))
      return rt(hu)(S(g.from.node, g.to.node))()(_);
    const p = ke(g.from.node)(d), $ = ke(g.to.node)(d);
    return p.tag === "Just" && $.tag === "Just" && p._1 > $._1 ? rt(hu)(S(g.from.node, g.to.node))()(_) : _;
  })(z)(e);
}, UJ = /* @__PURE__ */ N((t) => (n) => Ot(F)(Sn)(n.from.node)([n.to.node])(t))(z), YJ = (t) => (n) => {
  const e = UJ(n), r = ls(F.compare)([...B((i) => i.from.node)(n), ...B((i) => i.to.node)(n)]), o = N((i) => (s) => rt(F)(s.to.node)()(i))(z)(n);
  return N((i) => (s) => Up(t)(e)(s)(i))({
    visiting: z,
    visited: z,
    backEdges: z
  })([..._t((i) => !ys(i)(o), r), ..._t((i) => ys(i)(o), r)]).backEdges;
}, KJ = (t) => (n) => (e) => (r) => {
  const o = WJ(Qt((u) => (a) => S(a, u))(n)), i = qJ(e), s = (() => {
    if (t === "DepthFirst")
      return YJ(i)(r);
    if (t === "Greedy")
      return MJ(i)(o)(r);
    f();
  })();
  return {
    edges: B((u) => QJ(S(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, Yp = qt.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), Wn = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Qn = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ms = (t) => (n) => (e) => (r) => Yp((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), Ka = (t) => (n) => (e) => (r) => Ms(Wn(n)(e))(Qn(n)(e))(r)(t), ea = /* @__PURE__ */ tt(4), VJ = /* @__PURE__ */ Cc((t) => {
  if (t.direction === "H") {
    const n = Wn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: Qn(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = Wn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: Qn(t.start._2)(t.end._2) - n }];
  }
  f();
}), pu = /* @__PURE__ */ Ks((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), jJ = (t) => (n) => (e) => {
  const r = Rt((o) => x, (o) => (i) => T("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = ur(r._1.tail);
    if (i.tag === "Nothing") {
      const s = o.length - 1 | 0;
      return s >= 0 && s < o.length && (o[s].direction === "H" ? e.direction === "H" : o[s].direction === "V" && e.direction === "V") ? [
        ...(() => {
          const u = o.length - 1 | 0;
          return u < 1 ? [] : Ft(0, u, o);
        })(),
        { start: o[s].start, end: e.end, direction: e.direction }
      ] : [...o, e];
    }
    if (i.tag === "Just")
      return (i._1.last.direction === "H" ? e.direction === "H" : i._1.last.direction === "V" && e.direction === "V") ? [...o, ...i._1.init, { start: i._1.last.start, end: e.end, direction: e.direction }] : [...o, ...r._1.tail, e];
  }
  f();
}, mu = (t) => {
  const n = (r) => (o) => {
    const i = Rt((s) => x, (s) => (u) => T("Just", { head: s, tail: u }), o);
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
  }, e = Rt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, Us = (t) => (n) => (e) => (r) => Yp((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), tu = (t) => (n) => (e) => (r) => Us(Wn(n)(e))(Qn(n)(e))(r)(t), ZJ = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : Ft(o, n.length, n), s = e < 1 ? [] : Ft(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), a = e === 0, c = e >= 0 && e < n.length ? T("Just", n[e]) : x;
  if (c.tag === "Just") {
    const l = e + 1 | 0, d = l >= 0 && l < n.length ? T("Just", n[l]) : x;
    if (d.tag === "Just") {
      const _ = c._1.start._1 === d._1.end._1 && (!a || c._1.direction === "V") && (!u || d._1.direction === "V") && !Ka(t)(Wn(c._1.start._2)(d._1.end._2))(Qn(c._1.start._2)(d._1.end._2))(c._1.start._1) ? T("Just", [...s, { start: c._1.start, end: d._1.end, direction: xn }, ...i]) : x, g = c._1.start._2 === d._1.end._2 && (!a || c._1.direction === "H") && (!u || d._1.direction === "H") && !tu(t)(Wn(c._1.start._1)(d._1.end._1))(Qn(c._1.start._1)(d._1.end._1))(c._1.start._2) ? T("Just", [...s, { start: c._1.start, end: d._1.end, direction: wn }, ...i]) : x;
      return _.tag === "Nothing" ? g : _;
    }
    if (d.tag === "Nothing")
      return x;
    f();
  }
  if (c.tag === "Nothing")
    return x;
  f();
}, t3 = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const c = ZJ(t)(n)(a)(e);
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
}, n3 = (t) => (n) => (e) => (r) => {
  const o = (_, g, p) => !Ka(t)(Wn(g)(p))(Qn(g)(p))(_), i = e + 3 | 0, s = i < 1 ? n : Ft(i, n.length, n), u = e < 1 ? [] : Ft(0, e, n), a = (e + 2 | 0) === (r - 1 | 0), c = e === 0, l = (_, g, p) => !tu(t)(Wn(g)(p))(Qn(g)(p))(_), d = e >= 0 && e < n.length ? T("Just", n[e]) : x;
  if (d.tag === "Just") {
    const _ = e + 2 | 0, g = _ >= 0 && _ < n.length ? T("Just", n[_]) : x;
    if (g.tag === "Just") {
      const p = d._1.start._1 === g._1.end._1 && (!c || d._1.direction === "V") && (!a || g._1.direction === "V") && o(d._1.start._1, d._1.start._2, g._1.end._2) ? T("Just", [...u, { start: d._1.start, end: g._1.end, direction: xn }, ...s]) : d._1.start._2 === g._1.end._2 && (!c || d._1.direction === "H") && (!a || g._1.direction === "H") && l(d._1.start._2, d._1.start._1, g._1.end._1) ? T("Just", [...u, { start: d._1.start, end: g._1.end, direction: wn }, ...s]) : x, $ = (!c || d._1.direction === "V") && (!a || g._1.direction === "H") && o(d._1.start._1, d._1.start._2, g._1.end._2) && l(
        g._1.end._2,
        d._1.start._1,
        g._1.end._1
      ) ? T(
        "Just",
        [
          ...u,
          { start: d._1.start, end: S(d._1.start._1, g._1.end._2), direction: xn },
          { start: S(d._1.start._1, g._1.end._2), end: g._1.end, direction: wn },
          ...s
        ]
      ) : x, h = (!c || d._1.direction === "H") && (!a || g._1.direction === "V") && l(d._1.start._2, d._1.start._1, g._1.end._1) && o(
        g._1.end._1,
        d._1.start._2,
        g._1.end._2
      ) ? T(
        "Just",
        [
          ...u,
          { start: d._1.start, end: S(g._1.end._1, d._1.start._2), direction: wn },
          { start: S(g._1.end._1, d._1.start._2), end: g._1.end, direction: xn },
          ...s
        ]
      ) : x, m = $.tag === "Nothing" ? h : $;
      return p.tag === "Nothing" ? m : p;
    }
    if (g.tag === "Nothing")
      return x;
    f();
  }
  if (d.tag === "Nothing")
    return x;
  f();
}, e3 = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const c = n3(t)(n)(a)(e);
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
}, r3 = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = mu(pu(t3(t)(e3(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(mu(pu(e)));
}, o3 = (t) => (n) => (e) => (r) => {
  const o = Wn(e)(r), i = Qn(e)(r), s = _t((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = Bt((c) => (l) => st.compare(c.x)(l.x))(s);
    return 0 < a.length ? a[0].x - 1 : (e + r) / 2;
  }
  const u = Bt((a) => (c) => st.compare(c.x)(a.x))(B((a) => ({ ...a, x: a.x + a.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, i3 = (t) => (n) => (e) => (r) => {
  const o = Wn(e)(r), i = Qn(e)(r), s = _t((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = Bt((c) => (l) => st.compare(c.y)(l.y))(s);
    return 0 < a.length ? a[0].y - 1 : (e + r) / 2;
  }
  const u = Bt((a) => (c) => st.compare(c.y)(a.y))(B((a) => ({ ...a, y: a.y + a.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, s3 = (t) => (n) => (e) => (r) => {
  const o = Wn(e)(r), i = Qn(e)(r), s = _t((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = Bt((c) => (l) => st.compare(l.x)(c.x))(B((c) => ({ ...c, x: c.x + c.w }))(s));
    return 0 < a.length ? a[0].x : (e + r) / 2;
  }
  const u = Bt((a) => (c) => st.compare(a.x)(c.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, u3 = (t) => (n) => (e) => (r) => {
  const o = Wn(e)(r), i = Qn(e)(r), s = _t((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = Bt((c) => (l) => st.compare(l.y)(c.y))(B((c) => ({ ...c, y: c.y + c.h }))(s));
    return 0 < a.length ? a[0].y : (e + r) / 2;
  }
  const u = Bt((a) => (c) => st.compare(a.y)(c.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, Kp = (t) => (n) => (e) => {
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
}, a1 = (t) => (n) => (e) => (r) => (o) => {
  const i = Wn(n)(e), s = Qn(n)(e);
  if (!Ms(i)(s)(r)(t))
    return r;
  if (!Ms(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return Ms(i)(s)(u)(t) ? Kp((a) => Ms(i)(s)(a)(t))(u)(1) : u;
}, a3 = (t) => (n) => (e) => (r) => (o) => {
  const i = Wn(n)(e), s = Qn(n)(e);
  if (!Us(i)(s)(r)(t))
    return r;
  if (!Us(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return Us(i)(s)(u)(t) ? Kp((a) => Us(i)(s)(a)(t))(u)(1) : u;
}, c3 = (t) => (n) => (e) => (r) => {
  const o = Wn(n)(e), i = Qn(n)(e), s = _t((c) => r >= c.x && r < c.x + c.w && c.y + c.h > o && c.y < i, t), u = N((c) => (l) => Qn(c)(l.x + l.w + 4))(r + 4)(s), a = N((c) => (l) => Wn(c)(l.x - 4))(r - 4)(s);
  return (() => {
    const c = u - r, l = a - r;
    return (c < 0 ? -c : c) <= (l < 0 ? -l : l);
  })() ? u : a;
}, f3 = (t) => (n) => (e) => (r) => {
  const o = Wn(n)(e), i = Qn(n)(e), s = _t((c) => r >= c.y && r < c.y + c.h && c.x + c.w > o && c.x < i, t), u = N((c) => (l) => Qn(c)(l.y + l.h + 4))(r + 4)(s), a = N((c) => (l) => Wn(c)(l.y - 4))(r - 4)(s);
  return (() => {
    const c = u - r, l = a - r;
    return (c < 0 ? -c : c) <= (l < 0 ? -l : l);
  })() ? u : a;
}, l3 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (() => {
    if (r === "South")
      return S(o._1, o._2 + 4);
    if (r === "North")
      return S(o._1, o._2 - 4);
    if (r === "East")
      return S(o._1 + 4, o._2);
    if (r === "West")
      return S(o._1 - 4, o._2);
    f();
  })(), a = (() => {
    if (i === "South")
      return S(s._1, s._2 + 4);
    if (i === "North")
      return S(s._1, s._2 - 4);
    if (i === "East")
      return S(s._1 + 4, s._2);
    if (i === "West")
      return S(s._1 - 4, s._2);
    f();
  })(), c = (C, J, k) => !Ka(n)(Wn(J)(k))(Qn(J)(k))(C), l = (C, J, k) => !Ka(e)(Wn(J)(k))(Qn(J)(k))(C), d = (C, J, k, E) => t.tag === "Just" && !tu(e)(Wn(C)(J))(Qn(C)(J))(t._1) ? t._1 : a3(n)(C)(J)(k)(E), _ = (C, J, k, E) => {
    if (C === k) {
      const I = c3(n)(J)(E)(C), H = i3(n)(C)(J)(E), G = u3(n)(C)(J)(E);
      return [
        { start: S(C, J), end: S(C, H), direction: xn },
        { start: S(C, H), end: S(I, H), direction: wn },
        { start: S(I, H), end: S(I, G), direction: xn },
        { start: S(I, G), end: S(k, G), direction: wn },
        { start: S(k, G), end: S(k, E), direction: xn }
      ];
    }
    const L = d(C, k, J, E);
    return [
      { start: S(C, J), end: S(C, L), direction: xn },
      { start: S(C, L), end: S(k, L), direction: wn },
      { start: S(k, L), end: S(k, E), direction: xn }
    ];
  }, g = (C, J, k, E) => {
    if (J === E) {
      const I = f3(n)(C)(k)(J), H = o3(n)(J)(C)(k), G = s3(n)(J)(C)(k);
      return [
        { start: S(C, J), end: S(H, J), direction: wn },
        { start: S(H, J), end: S(H, I), direction: xn },
        { start: S(H, I), end: S(G, I), direction: wn },
        { start: S(G, I), end: S(G, E), direction: xn },
        { start: S(G, E), end: S(k, E), direction: wn }
      ];
    }
    const L = a1(n)(J)(E)(C)(k);
    return [
      { start: S(C, J), end: S(L, J), direction: wn },
      { start: S(L, J), end: S(L, E), direction: xn },
      { start: S(L, E), end: S(k, E), direction: wn }
    ];
  }, p = (C, J, k) => !tu(n)(Wn(J)(k))(Qn(J)(k))(C), $ = (C, J, k) => !tu(e)(Wn(J)(k))(Qn(J)(k))(C), h = (C, J, k, E) => {
    if ($(J, C, k) && l(k, J, E))
      return [
        { start: S(C, J), end: S(k, J), direction: wn },
        { start: S(k, J), end: S(k, E), direction: xn }
      ];
    const L = a1(n)(J)(E)(C)(k);
    return [
      { start: S(C, J), end: S(L, J), direction: wn },
      { start: S(L, J), end: S(L, E), direction: xn },
      { start: S(L, E), end: S(k, E), direction: wn }
    ];
  }, m = (C, J, k, E) => {
    if (l(C, J, E) && $(E, C, k))
      return [
        { start: S(C, J), end: S(C, E), direction: xn },
        { start: S(C, E), end: S(k, E), direction: wn }
      ];
    const L = d(C, k, J, E);
    return [
      { start: S(C, J), end: S(C, L), direction: xn },
      { start: S(C, L), end: S(k, L), direction: wn },
      { start: S(k, L), end: S(k, E), direction: xn }
    ];
  }, y = (() => {
    if (r === "South")
      return i === "North" ? u._1 === a._1 && c(u._1, u._2, a._2) ? [{ start: S(u._1, u._2), end: S(a._1, a._2), direction: xn }] : _(u._1, u._2, a._1, a._2) : i === "East" || i === "West" ? m(u._1, u._2, a._1, a._2) : _(u._1, u._2, a._1, a._2);
    if (r === "North")
      return i === "South" ? u._1 === a._1 && c(u._1, u._2, a._2) ? [{ start: S(u._1, u._2), end: S(a._1, a._2), direction: xn }] : _(u._1, u._2, a._1, a._2) : i === "East" || i === "West" ? m(u._1, u._2, a._1, a._2) : _(u._1, u._2, a._1, a._2);
    if (r === "East")
      return i === "West" ? u._2 === a._2 && p(u._2, u._1, a._1) ? [{ start: S(u._1, u._2), end: S(a._1, a._2), direction: wn }] : g(u._1, u._2, a._1, a._2) : i === "North" || i === "South" ? h(u._1, u._2, a._1, a._2) : _(u._1, u._2, a._1, a._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === a._2 && p(u._2, u._1, a._1) ? [{ start: S(u._1, u._2), end: S(a._1, a._2), direction: wn }] : g(u._1, u._2, a._1, a._2);
      if (i === "North" || i === "South")
        return h(u._1, u._2, a._1, a._2);
    }
    return _(u._1, u._2, a._1, a._2);
  })(), v = (() => {
    if (r === "South" || r === "North")
      return xn;
    if (r === "East" || r === "West")
      return wn;
    f();
  })(), w = {
    start: S(a._1, a._2),
    end: S(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return xn;
      if (i === "East" || i === "West")
        return wn;
      f();
    })()
  };
  return u._1 === a._1 && u._2 === a._2 ? [{ start: S(o._1, o._2), end: S(s._1, s._2), direction: v }] : jJ({ start: S(o._1, o._2), end: S(u._1, u._2), direction: v })(y)(w);
}, g3 = /* @__PURE__ */ B((t) => ({ x: t.position._1 * ea - 2, y: t.position._2 * ea - 2, w: t.size._1 * ea + 4, h: t.size._2 * ea + 4 })), Vp = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, us = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, _3 = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), b0 = (t) => (n) => t.gapTop + 1 * tt(4) + tt(n) * 2.5 * tt(4), d3 = (t) => (n) => {
  const e = Vp(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return T("Just", { slot1Y: b0(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: b0(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return x;
    f();
  }
  if (e.tag === "Nothing")
    return x;
  f();
}, h3 = (t) => (n) => {
  const e = N((r) => (o) => rt(F)(o.node)(o)(r))(z)(n);
  return De(Qt((r) => (o) => {
    const i = us(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Qt((u) => (a) => {
        const c = o.edges.length, l = tt(4), d = s.position._1 * l, _ = s.position._2 * l, g = s.size._2 * l, p = tt((2 * c | 0) + 1 | 0), $ = _ + g * tt(c - u | 0) / p, h = _ + g * tt((c + 1 | 0) + u | 0) / p, m = d - l * 2.5 * tt(u + 1 | 0), y = [
          { start: S(d, $), end: S(m, $), direction: wn },
          { start: S(m, $), end: S(m, h), direction: xn },
          { start: S(m, h), end: S(d, h), direction: wn }
        ];
        return { edge: a.id, segments: y, bends: Gn((v) => (w) => v.end, y, Ft(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(B((r) => ({ node: r._1, edges: r._2 }))(_3(N((r) => (o) => Ot(F)(Sn)(o.from.node)([
    o
  ])(r))(z)(t)))));
}, p3 = (t) => (n) => {
  const e = N((i) => (s) => rt(F)(s.node)(s)(i))(z)(n), r = (i) => {
    const s = us(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = us(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return Bt((i) => (s) => {
    const u = ct.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const a = st.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return a === "EQ" ? st.compare(r(i.edge.to.node))(r(s.edge.to.node)) : a;
    }
    return u;
  })(t);
}, be = (t) => {
  const n = tt(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, m3 = (t) => t.from.node === t.to.node, $3 = (t) => (n) => (e) => (r) => {
  const o = r3(e)(l3(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: Gn((i) => (s) => i.end, o, Ft(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, y3 = (t) => (n) => (e) => (r) => {
  const o = [
    { start: S(r.fromPos._1, r.fromPos._2), end: S(r.fromPos._1, t.slot1Y), direction: xn },
    { start: S(r.fromPos._1, t.slot1Y), end: S(t.splitX, t.slot1Y), direction: wn },
    { start: S(t.splitX, t.slot1Y), end: S(t.splitX, t.slot2Y), direction: xn },
    { start: S(t.splitX, t.slot2Y), end: S(r.toPos._1, t.slot2Y), direction: wn },
    { start: S(r.toPos._1, t.slot2Y), end: S(r.toPos._1, r.toPos._2), direction: xn }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: Gn((i) => (s) => i.end, o, Ft(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, x3 = (t) => (n) => (e) => {
  const r = us(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = us(t.edge.to.node)(e);
    return i.tag === "Just" ? _t(
      (s) => !(s.h === be(r._1).h && s.w === be(r._1).w && s.x === be(r._1).x && s.y === be(r._1).y) && !(s.h === be(i._1).h && s.w === be(i._1).w && s.x === be(i._1).x && s.y === be(i._1).y),
      n
    ) : _t((s) => !(s.h === be(r._1).h && s.w === be(r._1).w && s.x === be(r._1).x && s.y === be(r._1).y), n);
  }
  const o = us(t.edge.to.node)(e);
  return o.tag === "Just" ? _t((i) => !(i.h === be(o._1).h && i.w === be(o._1).w && i.x === be(o._1).x && i.y === be(o._1).y), n) : _t((i) => !0, n);
}, v3 = (t) => (n) => {
  const e = Vp(n.edge.id)(t);
  if (e.tag === "Just")
    return T("Just", b0(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return x;
  f();
}, T3 = (t) => (n) => (e) => (r) => (o) => {
  const i = N((c) => (l) => rt(F)(l.node)(l)(c))(z)(n), s = g3(n), u = zp(_t((c) => c.from.node !== c.to.node, t))(n)(e)(r)(o), a = Bp(u)(n);
  return [
    ...h3(_t(m3, t))(n),
    ...N((c) => (l) => {
      const d = x3(l)(s)(i), _ = [...d, ...c.edgeObstacles], g = d3(a)(l), p = (() => {
        if (g.tag === "Just")
          return y3(g._1)(d)(_)(l);
        if (g.tag === "Nothing")
          return $3(v3(a)(l))(d)(_)(l);
        f();
      })();
      return { results: [...c.results, p], edgeObstacles: [...c.edgeObstacles, ...VJ(p.segments)] };
    })({ results: [], edgeObstacles: [] })(p3(u)(n)).results
  ];
}, Qo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Oo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, w3 = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return x;
  const r = Oo(Qo(t.start._2)(t.end._2))(Qo(n.start._2)(n.end._2)), o = Qo(Oo(t.start._2)(t.end._2))(Oo(n.start._2)(n.end._2));
  return r < o ? T("Just", { position: S(t.start._1, (r + o) / 2), crossingEdge: e }) : x;
}, N3 = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return x;
  const r = Oo(Qo(t.start._1)(t.end._1))(Qo(n.start._1)(n.end._1)), o = Qo(Oo(t.start._1)(t.end._1))(Oo(n.start._1)(n.end._1));
  return r < o ? T("Just", { position: S((r + o) / 2, t.start._2), crossingEdge: e }) : x;
}, C3 = (t) => (n) => (e) => {
  if (t.direction === "H")
    return N3(t)(n)(e);
  if (t.direction === "V")
    return w3(t)(n)(e);
  f();
}, J3 = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : Ft(r, e.length, e);
  return wt(n.segments)((i) => wt(o)((s) => Tt((u) => C3(i)(u)(s.edge))(_t(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, b3 = (t) => (n) => (e) => n.start._1 > Qo(t.start._1)(t.end._1) && n.start._1 < Oo(t.start._1)(t.end._1) && t.start._2 > Qo(n.start._2)(n.end._2) && t.start._2 < Oo(n.start._2)(n.end._2) ? T("Just", { position: S(n.start._1, t.start._2), crossingEdge: e }) : x, k3 = (t) => (n) => wt(_t((e) => e.direction === "H", t.segments))((e) => wt(n)((r) => Tt((o) => b3(e)(o)(r.edge))(_t(
  (o) => o.direction === "V",
  r.segments
)))), jp = (t) => (n) => (e) => [
  ...k3(n)(_t((r) => r.edge !== n.edge, e)),
  ...J3(t)(n)(e)
], Zp = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, L3 = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), Va = (t) => (e) => {
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
}, S3 = /* @__PURE__ */ Ep(F), Hr = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, c1 = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Of = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, E3 = /* @__PURE__ */ dn(ct)(qt), P3 = (t) => (n) => ee(F.compare, ne, t, n), tm = /* @__PURE__ */ Qt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), A3 = (t) => N((n) => (e) => ({
  base: (() => {
    const r = (o) => (i) => {
      let s = o, u = i, a = !0, c;
      for (; a; ) {
        const l = s, d = u;
        if (d.tag === "Nil") {
          a = !1, c = l;
          continue;
        }
        if (d.tag === "Cons") {
          s = Zp(l)(d._1), u = d._2;
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
          return o(i._5, xt("Cons", i._4, o(i._6, s)));
        f();
      };
      return o(e, R);
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
          return nn("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, R3 = (t) => (n) => {
  const e = L3(t);
  return S3(t)(tm(_t((r) => Va(r.src)(e) && Va(r.tgt)(e), n)));
}, F3 = (t) => (n) => {
  const e = N((o) => (i) => Ot(F)(Sn)(i.tgt)([i.src])(Ot(F)(Sn)(i.src)([
    i.tgt
  ])(o)))(z)(n), r = (o) => (i) => (s) => {
    let u = o, a = i, c = s, l = !0, d;
    for (; l; ) {
      const _ = u, g = a, p = c, $ = Rt((h) => x, (h) => (m) => T("Just", { head: h, tail: m }), _);
      if ($.tag === "Nothing") {
        l = !1, d = { nodes: p };
        continue;
      }
      if ($.tag === "Just") {
        if (Va($._1.head)(g)) {
          u = $._1.tail, a = g, c = p;
          continue;
        }
        u = [
          ...$._1.tail,
          ...(() => {
            const h = Hr($._1.head)(e);
            if (h.tag === "Nothing")
              return [];
            if (h.tag === "Just")
              return h._1;
            f();
          })()
        ], a = rt(F)($._1.head)()(g), c = [...p, $._1.head];
        continue;
      }
      f();
    }
    return d;
  };
  return N((o) => (i) => {
    if (Va(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: N((u) => (a) => rt(F)(a)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: z, components: [] })(t).components;
}, G3 = (t) => (n) => (e) => {
  const r = N((i) => (s) => Ot(F)(An)(s.tgt)(1)(i))(z)(n), o = N((i) => (s) => Ot(F)(An)(s.src)(1)(i))(z)(n);
  return N((i) => (s) => {
    const u = Hr(s)(r), a = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const y = Hr(s)(o);
      return (() => {
        if (y.tag === "Nothing")
          return a !== 0;
        if (y.tag === "Just")
          return a !== y._1;
        f();
      })() || a === 0;
    })())
      return i;
    const c = Hr(s)(i.layers), l = (() => {
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    })(), d = i.layers, _ = N((y) => (v) => v.tgt === s ? {
      ...y,
      mIn: c1(y.mIn)((() => {
        const w = Hr(s)(d), C = Hr(v.src)(d);
        return (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          f();
        })() - (() => {
          if (C.tag === "Nothing")
            return 0;
          if (C.tag === "Just")
            return C._1;
          f();
        })() | 0;
      })())
    } : v.src === s ? {
      ...y,
      mOut: c1(y.mOut)((() => {
        const w = Hr(v.tgt)(d), C = Hr(s)(d);
        return (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          f();
        })() - (() => {
          if (C.tag === "Nothing")
            return 0;
          if (C.tag === "Just")
            return C._1;
          f();
        })() | 0;
      })())
    } : y)({ mIn: 1e9, mOut: 1e9 })(n), g = _.mIn === 1e9 ? -1 : _.mIn, p = _.mOut === 1e9 ? -1 : _.mOut;
    if (g < 0 || p < 0)
      return i;
    const $ = (l - g | 0) + 1 | 0, h = (l + p | 0) - 1 | 0;
    if (h < $)
      return i;
    const m = N((y) => (v) => {
      const w = Of(v)(i.filling), C = (() => {
        if (w.tag === "Nothing")
          return 0;
        if (w.tag === "Just")
          return w._1;
        f();
      })();
      return C < y.bestFill ? { best: v, bestFill: C } : y;
    })({
      best: l,
      bestFill: (() => {
        const y = Of(l)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(Zt($, h));
    return m.best === l ? i : {
      layers: rt(F)(s)(m.best)(i.layers),
      filling: rt(ct)(l)((() => {
        const y = Of(l)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        f();
      })())(rt(ct)(m.best)(m.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: E3(B((i) => S(
      i,
      N((s) => (u) => (() => {
        const a = Hr(u)(e);
        return a.tag === "Nothing" ? !1 : a.tag === "Just" && a._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(Zt(
      0,
      N((i) => (s) => Zp(i)((() => {
        const u = Hr(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, I3 = (t) => (n) => G3(t)(tm(n))(N(P3)(z)(A3(B((e) => R3(e)(n))(F3(t)(n))))), B3 = (t) => t, yi = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ja = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, nm = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), D3 = /* @__PURE__ */ B3("NetworkSimplex"), z3 = (t) => (n) => N((e) => (r) => {
  const o = N(ja)(0)(Tt((i) => yi(i)(e))(r));
  return N((i) => (s) => rt(F)(s)(o)(i))(e)(r);
})(n)(t), H3 = (t) => (n) => ({
  layers: B((e) => _t(
    (r) => {
      const o = yi(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(Zt(
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
          i = ja(c)(l._1), s = l._2;
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
          return r(o._5, xt("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, R);
    })())
  )),
  nodeLayer: n
}), W3 = (t) => (n) => (e) => {
  const r = N((o) => (i) => rt(F)(i)(!0)(o))(z)(n);
  return N((o) => (i) => rt(F)(i._1)(i._2)(o))(I3(n)(Tt((o) => o.from.node === o.to.node || (() => {
    const i = yi(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = yi(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? x : T("Just", { src: o.from.node, tgt: o.to.node }))(t)))(nm(e));
}, Q3 = (t) => (n) => (e) => (r) => {
  const o = (a) => (c) => {
    const l = yi(c)(a);
    if (l.tag === "Just")
      return a;
    if (l.tag === "Nothing") {
      const d = _t(
        (g) => g !== c,
        (() => {
          const g = yi(c)(t);
          if (g.tag === "Nothing")
            return [];
          if (g.tag === "Just")
            return g._1;
          f();
        })()
      ), _ = N(o)(a)(d);
      return rt(F)(c)(1 + N(ja)(0)(Tt((g) => yi(g)(_))(d)) | 0)(_);
    }
    f();
  }, i = N(o)(z)(e), u = ((a) => (c) => {
    let l = a, d = c, _ = !0, g;
    for (; _; ) {
      const p = l, $ = d;
      if ($.tag === "Nil") {
        _ = !1, g = p;
        continue;
      }
      if ($.tag === "Cons") {
        l = ja(p)($._1), d = $._2;
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
        return a(c._5, xt("Cons", c._4, a(c._6, l)));
      f();
    };
    return a(i, R);
  })());
  return N((a) => (c) => rt(F)(c._1)(c._2)(a))((() => {
    const a = (c) => {
      if (c.tag === "Leaf")
        return z;
      if (c.tag === "Node")
        return nn("Node", c._1, c._2, c._3, u - c._4 | 0, a(c._5), a(c._6));
      f();
    };
    return a(i);
  })())(nm(r));
}, O3 = /* @__PURE__ */ N((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return rt(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return rt(F)(n._1.node)(0)(t);
  }
  return t;
})(z), q3 = /* @__PURE__ */ N((t) => (n) => Ot(F)(Sn)(n.to.node)([n.from.node])(t))(z), X3 = /* @__PURE__ */ N((t) => (n) => Ot(F)(Sn)(n.from.node)([n.to.node])(t))(z), M3 = (t) => (n) => (e) => (r) => {
  const o = X3(e), i = q3(e), s = O3(n);
  return H3(r)(z3(Tt((u) => u.tag === "SameLayer" ? T("Just", u._1.nodes) : x)(n))((() => {
    if (t === "LongestPath")
      return Q3(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return W3(e)(r)(s);
    f();
  })()));
}, U3 = /* @__PURE__ */ dn(F)(qt), Y3 = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, f1 = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, l1 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $u = /* @__PURE__ */ dn(F)(qt), K3 = /* @__PURE__ */ dn(F)(qt), g1 = /* @__PURE__ */ (() => {
  const t = B((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => un(t(n));
})(), V3 = (t) => (n) => (e) => (r) => {
  const o = U3(B((s) => S(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = Y3(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return B((s) => {
    if (s.nodes.length <= 2) {
      const l = f1(s.edgeId)(o);
      if (l.tag === "Just") {
        const d = i(s), _ = mu(pu(d ? g1(l._1.segments) : l._1.segments));
        return { ...l._1, edge: s.edgeId, segments: _, bends: Gn((g) => (p) => g.end, _, Ft(1, _.length, _)), reversed: d };
      }
      if (l.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = wt(Tt((l) => f1(l)(o))(Gn(
      (l) => (d) => s.edgeId + ":" + l + "->" + d,
      s.nodes,
      Ft(1, s.nodes.length, s.nodes)
    )))((l) => l.segments), a = i(s), c = mu(pu(a ? g1(u) : u));
    return {
      edge: s.edgeId,
      segments: c,
      bends: Gn((l) => (d) => l.end, c, Ft(1, c.length, c)),
      bendType: [],
      jumps: [],
      reversed: a
    };
  })(t);
}, j3 = { layers: [], edges: [], chains: [] }, Z3 = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: D3,
  cycleBreaker: OJ,
  compactPostRouting: !0,
  compactionSpacings: XC
}, tb = (t) => ({
  pos: S(0, 0),
  size: S(
    N((n) => (e) => l1(n)(e.position._1 + e.size._1))(0)(t),
    N((n) => (e) => l1(n)(e.position._2 + e.size._2))(0)(t)
  )
}), nb = (t) => (n) => (e) => {
  const r = $u(B((c) => S(c.id, c.ports))(n.nodes)), o = _t((c) => Yn(3)(c.node) !== "$d:", e.placements), i = V3(e.withDummies.chains)(e.acyclic.reversedEdges)(K3(B((c) => S(
    c.id,
    S(c.from.node, c.to.node)
  ))(n.edges)))(T3(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(Hp(e.ordered)(_t(
    (c) => c.from.node !== c.to.node,
    e.withDummies.edges
  ))((() => {
    const c = (l) => {
      if (l.tag === "Leaf")
        return z;
      if (l.tag === "Node")
        return nn("Node", l._1, l._2, l._3, S(l._4._1 * 4, l._4._2), c(l._5), c(l._6));
      f();
    };
    return c($u(B((l) => S(l.id, l.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? YC()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = B((c) => {
    const l = mu(pu(c.segments));
    return { ...c, segments: l, bends: Gn((d) => (_) => d.end, l, Ft(1, l.length, l)) };
  })(s.edges), a = Qt((c) => (l) => ({ ...l, jumps: jp(c)(l)(u) }))(u);
  return { nodes: s.nodes, edges: a, boundingBox: tb(s.nodes), metrics: mp(s.nodes)(a)(0) };
}, em = (t) => (n) => (e) => {
  const r = $u(B((i) => S(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: bJ({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)($u(B((i) => S(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(Hp(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return z;
        if (s.tag === "Node")
          return nn("Node", s._1, s._2, s._3, S(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: nb(t)(n)(o) };
}, eb = (t) => (n) => (e) => em(t)(n)({
  ...e,
  ordered: zJ({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: $u(Qt((r) => (o) => S(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), rb = (t) => (n) => (e) => eb(t)(n)({
  ...e,
  withDummies: KC(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), ob = (t) => (n) => {
  const e = B((o) => o.id)(n.nodes), r = KJ(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return rb(t)(n)({
    acyclic: r,
    layered: M3(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: j3,
    ordered: [],
    placements: []
  });
}, k0 = /* @__PURE__ */ dn(F)(qt), ib = /* @__PURE__ */ dn(F)(qt), sb = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, nu = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Za = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ub = (t) => (n) => {
  const e = n.result.nodes, r = k0(B((u) => S(u.node, u))(e)), o = ib(B((u) => S(u.id, u))(t.edges)), i = B((u) => {
    const a = sb(u.edge)(o);
    if (a.tag === "Just") {
      const c = qr(a._1.from.node)(r);
      if (c.tag === "Just") {
        const l = qr(a._1.to.node)(r);
        if (l.tag === "Just") {
          if (c._1.layer >= l._1.layer || u.jumps.length !== 0)
            return u;
          const d = tt(4), _ = c._1.position._1 * d, g = (c._1.position._1 + c._1.size._1) * d, p = l._1.position._1 * d, $ = (l._1.position._1 + l._1.size._1) * d, h = nu(_)(p), m = Za(g)($);
          if (h > m)
            return u;
          const y = (_ + g) * 0.5, v = (p + $) * 0.5, w = Za(m)(nu(h)(c._1.size._1 <= l._1.size._1 ? y : v)), C = (c._1.position._2 + c._1.size._2) * d, J = l._1.position._2 * d;
          return (() => {
            const k = a._1.from.node, E = a._1.to.node;
            return sn(
              (L) => {
                const I = tt(4);
                return L.node !== k && L.node !== E && w > L.position._1 * I && w < (L.position._1 + L.size._1) * I && L.position._2 * I < J && (L.position._2 + L.size._2) * I > C;
              },
              e
            );
          })() ? u : {
            ...u,
            segments: [{ start: S(w, C), end: S(w, J), direction: xn }],
            bends: [],
            bendType: [],
            jumps: []
          };
        }
        if (l.tag === "Nothing")
          return u;
        f();
      }
      if (c.tag === "Nothing")
        return u;
      f();
    }
    if (a.tag === "Nothing")
      return u;
    f();
  })(n.result.edges), s = Qt((u) => (a) => ({ ...a, jumps: jp(u)(a)(i) }))(i);
  return { ...n, result: { ...n.result, edges: s, metrics: mp(n.result.nodes)(s)(n.result.metrics.constraintViolations) } };
}, ab = (t) => (n) => (e) => {
  const r = e.result.nodes, o = k0(B((s) => S(s.node, s))(r)), i = e.result.boundingBox.size._1;
  return k0(Tt((s) => {
    const u = qr(s.id)(o);
    if (u.tag === "Just") {
      const a = qr(s.id)(e.pipeline.layered.nodeLayer);
      if (a.tag === "Just") {
        const c = a._1, l = Tt((_) => {
          if (_.from.node === s.id) {
            const g = qr(_.to.node)(e.pipeline.layered.nodeLayer);
            if (g.tag === "Just")
              return g._1 <= c ? x : qr(_.to.node)(o);
            if (g.tag === "Nothing")
              return x;
            f();
          }
          if (_.to.node === s.id) {
            const g = qr(_.from.node)(e.pipeline.layered.nodeLayer);
            if (g.tag === "Just")
              return g._1 >= c ? x : qr(_.from.node)(o);
            if (g.tag === "Nothing")
              return x;
            f();
          }
          return x;
        })(n.edges);
        if (l.length < 2)
          return x;
        const d = Rt(
          (_) => x,
          (_) => (g) => T("Just", { head: _, tail: g }),
          B((_) => _.position._1 + _.size._1 * 0.5)(l)
        );
        if (d.tag === "Just") {
          const _ = nu(s.size._1)(N(nu)(d._1.head)(d._1.tail) - N(Za)(d._1.head)(d._1.tail) + 2), g = u._1.position._1, p = g + u._1.size._1, $ = _t(
            (h) => {
              const m = qr(h.node)(e.pipeline.layered.nodeLayer);
              return h.node !== s.id && (m.tag === "Nothing" ? !1 : m.tag === "Just" && m._1 === c);
            },
            r
          );
          return _ > s.size._1 + 0.5 && _ <= N((h) => (m) => m.position._1 >= p ? Za(h)(m.position._1 - tt(t.nodeGap)) : h)(i)($) - N((h) => (m) => m.position._1 + m.size._1 <= g ? nu(h)(m.position._1 + m.size._1 + tt(t.nodeGap)) : h)(0)($) ? T("Just", S(s.id, S(_, s.size._2))) : x;
        }
        if (d.tag === "Nothing")
          return x;
        f();
      }
      if (a.tag === "Nothing")
        return x;
      f();
    }
    if (u.tag === "Nothing")
      return x;
    f();
  })(n.nodes));
}, cb = (t) => (n) => {
  const e = ob(t)(n), r = ab(t)(n)(e), o = ub(n)(em(t)({
    ...n,
    nodes: B((i) => {
      const s = qr(i.id)(r);
      if (s.tag === "Just")
        return { ...i, size: s._1 };
      if (s.tag === "Nothing")
        return i;
      f();
    })(n.nodes)
  })(e.pipeline));
  return r.tag === "Leaf" || N((i) => (s) => i + s.bends.length | 0)(0)(o.result.edges) >= N((i) => (s) => i + s.bends.length | 0)(0)(e.result.edges) ? e : o;
}, Oc = (t) => t, fb = (t) => t, co = /* @__PURE__ */ Oc("RunText"), ag = /* @__PURE__ */ Oc("RunCode"), cg = /* @__PURE__ */ Oc("RunHighlight"), fg = /* @__PURE__ */ Oc("RunCodeHighlight"), lb = (t) => {
  const n = (r) => {
    const o = Rt((i) => x, (i) => (s) => T("Just", { head: i, tail: s }), r);
    if (o.tag === "Nothing")
      return [];
    if (o.tag === "Just") {
      if (o._1.head === "\\") {
        const i = Rt((s) => x, (s) => (u) => T("Just", { head: s, tail: u }), o._1.tail);
        if (i.tag === "Nothing")
          return [o._1.head];
        if (i.tag === "Just")
          return [o._1.head, i._1.head, ...n(i._1.tail)];
        f();
      }
      return o._1.head === "=" && 0 < o._1.tail.length && o._1.tail[0] === "=" ? n(Ft(1, o._1.tail.length, o._1.tail)) : [o._1.head, ...n(o._1.tail)];
    }
    f();
  }, e = cr("md:")(t);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return _r(n(Me(e._1)));
  f();
}, gb = (t) => "md:" + t, pr = (t) => {
  const n = (() => {
    const r = cr("md:")(t);
    if (r.tag === "Just")
      return !0;
    if (r.tag === "Nothing")
      return !1;
    f();
  })() ? gb : fb, e = Hi(`
`)((() => {
    const r = cr("md:")(t);
    if (r.tag === "Just")
      return r._1;
    if (r.tag === "Nothing")
      return t;
    f();
  })());
  return e.length === 0 ? [n("")] : B(n)(e);
}, lg = (t) => (n) => (e) => n.length === 0 ? e : Lt(e)({ style: t, text: _r(n) }), _b = (t) => ({
  code: !t.code,
  highlight: t.highlight,
  buf: [],
  runs: lg((() => {
    if (!t.highlight) {
      if (!t.code)
        return co;
      if (t.code)
        return ag;
      f();
    }
    if (t.highlight) {
      if (!t.code)
        return cg;
      if (t.code)
        return fg;
    }
    f();
  })())(t.buf)(t.runs)
}), db = (t) => ({
  code: t.code,
  highlight: !t.highlight,
  buf: [],
  runs: lg((() => {
    if (!t.highlight) {
      if (!t.code)
        return co;
      if (t.code)
        return ag;
      f();
    }
    if (t.highlight) {
      if (!t.code)
        return cg;
      if (t.code)
        return fg;
    }
    f();
  })())(t.buf)(t.runs)
}), hb = (t) => (n) => 0 < n.length ? { ...t, buf: Lt(t.buf)(n[0]) } : { ...t, buf: Lt(t.buf)("\\") }, pb = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, d = Rt((_) => x, (_) => (g) => T("Just", { head: _, tail: g }), i);
    if (d.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (d.tag === "Just") {
      if (d._1.head === "\\") {
        r = a, o = hb(c)(d._1.tail), i = Ft(1, d._1.tail.length, d._1.tail);
        continue;
      }
      if (d._1.head === "`") {
        r = a, o = _b(c), i = d._1.tail;
        continue;
      }
      if (a && d._1.head === "=" && 0 < d._1.tail.length && d._1.tail[0] === "=") {
        r = a, o = db(c), i = Ft(1, d._1.tail.length, d._1.tail);
        continue;
      }
      r = a, o = { ...c, buf: Lt(c.buf)(d._1.head) }, i = d._1.tail;
      continue;
    }
    f();
  }
  return u;
}, Pr = (t) => {
  const n = pb((() => {
    const e = cr("md:")(t);
    if (e.tag === "Just")
      return !0;
    if (e.tag === "Nothing")
      return !1;
    f();
  })())({ code: !1, highlight: !1, buf: [], runs: [] })(Me((() => {
    const e = cr("md:")(t);
    if (e.tag === "Just")
      return e._1;
    if (e.tag === "Nothing")
      return t;
    f();
  })()));
  return lg((() => {
    if (!n.highlight) {
      if (!n.code)
        return co;
      if (n.code)
        return ag;
      f();
    }
    if (n.highlight) {
      if (!n.code)
        return cg;
      if (n.code)
        return fg;
    }
    f();
  })())(n.buf)(n.runs);
}, fo = /* @__PURE__ */ (() => {
  const t = dr(""), n = B((e) => e.text);
  return (e) => t(n(Pr(e)));
})();
let ra = null;
function mb() {
  return ra || (typeof document > "u" ? null : (ra = document.createElement("canvas").getContext("2d"), ra));
}
const _1 = /* @__PURE__ */ new Map(), $b = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = _1.get(o);
  if (i !== void 0) return i;
  const s = mb();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return _1.set(o, u), u;
}, yb = Lo.traverse(Bi), xb = /* @__PURE__ */ N(mr)(0), Ei = /* @__PURE__ */ (() => {
  const t = $r(`\r
`)(" "), n = $r(`
`)(" "), e = (() => {
    const r = $r("\r")(" "), o = (() => {
      const i = $r("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), rm = (t) => (n) => {
  const e = yb((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      if (r.style === "RunHighlight")
        return t.text;
      if (r.style === "RunCodeHighlight")
        return t.code;
      f();
    })();
    return $b(o.family)(o.size)(o.weight)(Ei(r.text));
  })(Pr(Ei(n)));
  return () => {
    const r = e();
    return xb(r);
  };
}, vb = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, Tb = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, om = { text: vb, code: Tb }, wb = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Vi = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Nb = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, im = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Cb = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, d1 = (t) => _r(un(Ur((n) => n === " ")(un(Ur((n) => n === " ")(Me(t)).rest)).rest)), Jb = (t) => N((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? T("Just", e._1) : n)(x)(Qt(Kn)(t)), L0 = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (Nr(n) <= t)
    return [n];
  const e = Me(n), r = t < 1 ? [] : Ft(0, t, e), o = Jb(r);
  if (o.tag === "Just") {
    const i = d1(__(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = d1(ps(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...L0(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = __(t)(n), s = ps(t)(n);
    return s === "" ? [i] : [i, ...L0(t)(s)];
  }
  f();
}, bb = { cellW: 7, cellH: 3, maxLineWidth: 20 }, kb = (t) => (n) => {
  const e = B((i) => S(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = Vi(1)(rr(
    (Nb(t.maxLineWidth)(N((i) => (s) => Vi(i)(Nr(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: B((i) => {
      const s = wt(Hi(`
`)(i._1))(L0(o)), u = N((d) => (_) => Vi(d)(Nr(_)))(0)(s), a = Vi(1)(rr(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0, c = i._2.shape === "Cylinder" ? Vi(1)(rr((u + 2 | 0) + t.cellW | 0, t.cellW)) : r, l = u > o ? rr((u + 2 | 0) + t.cellW | 0, t.cellW) : c;
      return {
        ...i._2,
        size: S(
          i._2.size._1 !== 1 ? im(i._2.size._1)(tt(l)) : tt(l),
          i._2.size._2 !== 1 ? i._2.size._2 : tt(a)
        )
      };
    })(e)
  };
}, Lb = (t) => (n) => (e) => ({
  ...e,
  nodes: B((r) => {
    const o = Cb(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: S(
          im(r.size._1)(tt(Vi(1)(mn(Jc(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), qc = (t) => t, Sb = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, lo = /* @__PURE__ */ qc("TopSide"), go = /* @__PURE__ */ qc("BottomSide"), _o = /* @__PURE__ */ qc("LeftSide"), ho = /* @__PURE__ */ qc("RightSide"), Eb = (t) => {
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
}, h1 = (t) => (n) => (e) => {
  const r = Sb(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * _e(Eb((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, re = (t) => (n) => (e) => (r) => {
  let o = t, i = n, s = e, u = r, a = !0, c;
  for (; a; ) {
    const l = o, d = i, _ = s, g = u;
    if (l === "Rectangle") {
      if (_ === "TopSide") {
        a = !1, c = d.y;
        continue;
      }
      if (_ === "BottomSide") {
        a = !1, c = d.y + d.h;
        continue;
      }
      if (_ === "LeftSide") {
        a = !1, c = d.x;
        continue;
      }
      if (_ === "RightSide") {
        a = !1, c = d.x + d.w;
        continue;
      }
      o = xo, i = d, s = _, u = g;
      continue;
    }
    if (l === "Cylinder") {
      if (_ === "TopSide") {
        a = !1, c = h1(d)(-1)(g);
        continue;
      }
      if (_ === "BottomSide") {
        a = !1, c = h1(d)(1)(g);
        continue;
      }
      if (_ === "LeftSide") {
        a = !1, c = d.x;
        continue;
      }
      if (_ === "RightSide") {
        a = !1, c = d.x + d.w;
        continue;
      }
    }
    o = xo, i = d, s = _, u = g;
  }
  return c;
}, p1 = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, a = n.y - (t.y + t.h), c = a < 0 ? -a : a;
  return r <= c && r <= u && r <= i ? lo : c <= u && c <= i ? go : u <= i ? _o : ho;
}, Pb = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), gg = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
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
      const u = F.compare(t)(s._3);
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
}, yu = /* @__PURE__ */ dn(F)(qt), S0 = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ab = (t) => (e) => {
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
}, Rb = (t) => (e) => {
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
}, Fb = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), Gb = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), xu = Lo.traverse(Bi), E0 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vu = /* @__PURE__ */ dn(F)(qt), Ib = (t) => (n) => ee(F.compare, ne, t, n), Bb = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Db = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), zb = /* @__PURE__ */ dn(F)(qt), Hb = (t) => (n) => ee(F.compare, ne, t, n), Wb = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Qb = (t) => (n) => ({
  ...n,
  edges: yu(B((e) => S(
    e._1,
    (() => {
      const r = gg(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = Pi(r._1._2)(n.nodes), i = Pi(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Rt((a) => x, (a) => (c) => T("Just", { head: a, tail: c }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just")
              return [
                (() => {
                  const a = Rt((_) => x, (_) => (g) => T("Just", { head: _, tail: g }), u._1.tail), c = a.tag === "Just" ? T("Just", a._1.head) : x, l = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, d = (() => {
                    if (c.tag === "Just") {
                      if ((c._1.x > u._1.head.x ? c._1.x - u._1.head.x < 0.5 : u._1.head.x - c._1.x < 0.5) && u._1.head.x >= l.x - 0.5 && u._1.head.x <= l.x + l.w + 0.5)
                        return c._1.y >= l.y + l.h ? T("Just", go) : c._1.y <= l.y ? T("Just", lo) : x;
                      if ((c._1.y > u._1.head.y ? c._1.y - u._1.head.y < 0.5 : u._1.head.y - c._1.y < 0.5) && u._1.head.y >= l.y - 0.5 && u._1.head.y <= l.y + l.h + 0.5) {
                        if (c._1.x >= l.x + l.w)
                          return T("Just", ho);
                        if (c._1.x <= l.x)
                          return T("Just", _o);
                      }
                      return x;
                    }
                    if (c.tag === "Nothing")
                      return x;
                    f();
                  })();
                  if (d.tag === "Just") {
                    if (d._1 === "TopSide")
                      return { ...u._1.head, y: re(i._1.shape)(l)(lo)(u._1.head.x) };
                    if (d._1 === "BottomSide")
                      return { ...u._1.head, y: re(i._1.shape)(l)(go)(u._1.head.x) };
                    if (d._1 === "LeftSide")
                      return { ...u._1.head, x: re(i._1.shape)(l)(_o)(u._1.head.y) };
                    if (d._1 === "RightSide")
                      return { ...u._1.head, x: re(i._1.shape)(l)(ho)(u._1.head.y) };
                    f();
                  }
                  if (d.tag === "Nothing") {
                    const _ = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, g = p1(_)(u._1.head);
                    if (g === "TopSide")
                      return { ...u._1.head, y: re(i._1.shape)(_)(lo)(u._1.head.x) };
                    if (g === "BottomSide")
                      return { ...u._1.head, y: re(i._1.shape)(_)(go)(u._1.head.x) };
                    if (g === "LeftSide")
                      return { ...u._1.head, x: re(i._1.shape)(_)(_o)(u._1.head.y) };
                    if (g === "RightSide")
                      return { ...u._1.head, x: re(i._1.shape)(_)(ho)(u._1.head.y) };
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
          const u = ur(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Lt(u._1.init)((() => {
              const a = ur(u._1.init), c = a.tag === "Just" ? T("Just", a._1.last) : x, l = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, d = (() => {
                if (c.tag === "Just") {
                  if ((c._1.x > u._1.last.x ? c._1.x - u._1.last.x < 0.5 : u._1.last.x - c._1.x < 0.5) && u._1.last.x >= l.x - 0.5 && u._1.last.x <= l.x + l.w + 0.5)
                    return c._1.y >= l.y + l.h ? T("Just", go) : c._1.y <= l.y ? T("Just", lo) : x;
                  if ((c._1.y > u._1.last.y ? c._1.y - u._1.last.y < 0.5 : u._1.last.y - c._1.y < 0.5) && u._1.last.y >= l.y - 0.5 && u._1.last.y <= l.y + l.h + 0.5) {
                    if (c._1.x >= l.x + l.w)
                      return T("Just", ho);
                    if (c._1.x <= l.x)
                      return T("Just", _o);
                  }
                  return x;
                }
                if (c.tag === "Nothing")
                  return x;
                f();
              })();
              if (d.tag === "Just") {
                if (d._1 === "TopSide")
                  return { ...u._1.last, y: re(o._1.shape)(l)(lo)(u._1.last.x) };
                if (d._1 === "BottomSide")
                  return { ...u._1.last, y: re(o._1.shape)(l)(go)(u._1.last.x) };
                if (d._1 === "LeftSide")
                  return { ...u._1.last, x: re(o._1.shape)(l)(_o)(u._1.last.y) };
                if (d._1 === "RightSide")
                  return { ...u._1.last, x: re(o._1.shape)(l)(ho)(u._1.last.y) };
                f();
              }
              if (d.tag === "Nothing") {
                const _ = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, g = p1(_)(u._1.last);
                if (g === "TopSide")
                  return { ...u._1.last, y: re(o._1.shape)(_)(lo)(u._1.last.x) };
                if (g === "BottomSide")
                  return { ...u._1.last, y: re(o._1.shape)(_)(go)(u._1.last.x) };
                if (g === "LeftSide")
                  return { ...u._1.last, x: re(o._1.shape)(_)(_o)(u._1.last.y) };
                if (g === "RightSide")
                  return { ...u._1.last, x: re(o._1.shape)(_)(ho)(u._1.last.y) };
              }
              f();
            })());
        }
      }
      f();
    })()
  ))(Pb(n.edges)))
}), Ob = (t) => (n) => (e) => {
  const r = Vt((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return gg(e)(n);
  f();
}, qb = (t) => (n) => (e) => (r) => ({
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
      return xo;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), Xb = (t) => ({ id: t, size: S(1, 1), ports: [], label: T("Just", t), shape: xo }), sm = (t) => (n) => (e) => {
  const r = Tt((i) => Pi(n)(i.labels))(t.keyframes), o = Rt((i) => x, (i) => (s) => T("Just", { head: i, tail: s }), r);
  if (o.tag === "Nothing")
    return [e];
  if (o.tag === "Just")
    return [e, ...r];
  f();
}, Mb = (t) => (n) => (e) => (r) => S(r.node, qb(t)(n)(e)(r)), um = (t) => pr(t), m1 = (t) => {
  const n = Hi(`
`)(t), e = n.length === 0 ? [""] : n;
  return e.length * S0(1)(N((r) => (o) => S0(r)(Nr(o)))(0)(e)) | 0;
}, Ub = (t) => {
  const n = Rt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return "";
  if (n.tag === "Just")
    return N((e) => (r) => m1(r) > m1(e) ? r : e)(n._1.head)(n._1.tail);
  f();
}, Yb = (t) => (n) => Ub(sm(t)(n.id)((() => {
  if (n.label.tag === "Just")
    return n.label._1;
  if (n.label.tag === "Nothing")
    return n.id;
  f();
})())), am = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, xt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Xt(_n.foldr, n(t.interiors, R));
}, Kb = (t) => yu(Tt((n) => T(
  "Just",
  S(n.edge, { id: n.edge, from: { node: n.from, port: x }, to: { node: n.to, port: x }, label: x })
))(wt(t.scenes)((n) => n.tag === "DataFlow" ? Tt((e) => e.kind.tag === "SendToken" ? T("Just", e.kind._1) : x)(n._1.events) : []))), cm = (t) => {
  const n = Fv(t), e = B((o) => ({ ...o, label: T("Just", Yb(t)(o)) }))(_t(
    (o) => Ab(o.id)(n.nodes),
    t.graph.nodes
  )), r = _t((o) => Rb(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...B(Xb)(Xt(
        Ae.foldr,
        Er(F.compare, n.nodes, Fb(B((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...Tt(Ob(t)(Kb(t)))(Xt(
        Ae.foldr,
        Er(F.compare, n.edges, Gb(B((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, Vb = (t) => {
  const n = xu((e) => {
    const r = xu(rm(om))(sm(t)(e.id)((() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })()));
    return () => {
      const o = r();
      return S(e.id, N(E0)(0)(o));
    };
  })(cm(t).nodes);
  return () => {
    const e = n();
    return vu(e);
  };
}, fm = (t) => {
  const n = Vb(t);
  return () => {
    const e = n(), r = xu(fm)(am(t))();
    return N(Ib)(e)(r);
  };
}, jb = (t) => (n) => {
  const e = Rt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...B((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, Zb = (t) => (n) => {
  const e = vu(B((r) => S(r.id, r))(t.nodes));
  return {
    ...n,
    nodes: B((r) => {
      const o = Pi(r.id)(e);
      return o.tag === "Just" && o._1.size._2 === 1 ? {
        ...r,
        size: S(
          r.size._1,
          Bb(r.size._2)(tt(S0(1)(rr(
            pr((() => {
              if (r.label.tag === "Just")
                return r.label._1;
              if (r.label.tag === "Nothing")
                return r.id;
              f();
            })()).length + 3 | 0,
            3
          )) + (r.shape === "Cylinder" || r.shape === "Document" ? 1 : 0) | 0))
        )
      } : r;
    })(n.nodes)
  };
}, tk = (t) => (n) => S(n.edge, jb(t)(n)), nk = (t) => (n) => (e) => (r) => ({
  nodes: vu(B(Mb(tt(4) * t)(n)(e))(r.nodes)),
  edges: yu(B(tk(t))(r.edges)),
  chipExtras: z,
  edgeLabels: z
}), ek = (t) => (n) => ({
  ...Qb(yu(B((e) => S(e.id, S(e.from.node, e.to.node)))(n.edges)))(nk(8)(vu(B((e) => S(
    e.id,
    (() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })()
  ))(n.nodes)))(vu(B((e) => S(e.id, e.shape))(n.nodes)))(cb(Z3)(n).result)),
  edgeLabels: yu(Tt((e) => e.label.tag === "Just" ? T("Just", S(e.id, e.label._1)) : x)(n.edges))
}), rk = (t) => N((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return N((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return N((i) => (s) => rt(F)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return N((i) => (s) => rt(F)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "Hold" || e.tag === "EnterNode" || e.tag === "ExitNode" || e.tag === "StepScene")
    return n;
  f();
})(z)(t.scenes), ok = (t) => {
  const n = xu((e) => {
    const r = rm(om)(e);
    return () => {
      const o = r();
      return S(
        e,
        { labelW: o, charCount: Nr(fo(Ei(e))), lineCount: 1 }
      );
    };
  })(Xt(
    Ae.foldr,
    Db(wt(Xt(Ae.foldr, rk(t)))(um))
  ));
  return () => {
    const e = n();
    return zb(e);
  };
}, lm = (t) => {
  const n = ok(t);
  return () => {
    const e = n(), r = xu(lm)(am(t))();
    return N(Hb)(e)(r);
  };
}, ik = tt(4) * 8, sk = (t) => wt(t.scenes)((n) => {
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
}), uk = (t) => (n) => (e) => {
  const r = (o) => {
    const i = Tt((s) => {
      const u = Wb(s)(t);
      return u.tag === "Just" ? T("Just", { w: u._1.labelW + 28, h: tt(wb(1)(u._1.lineCount)) * 13.2 + 12 }) : x;
    })(wt(o)(um));
    return i.length === 0 ? x : T(
      "Just",
      { w: N(E0)(0)(B((s) => s.w)(i)), h: N(E0)(0)(B((s) => s.h)(i)) }
    );
  };
  return N((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = gg(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const a = u._1;
        return Ot(F)(Sn)(i.kind._1.edge)(B((c) => ({ x: c.x + 14 + a.w, y: c.y - 6 - 8 - a.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = Pi(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? Ot(F)(Sn)("__fill__:" + i.kind._1.node)((() => {
        const a = s._1.y - u._1.h - 14, c = s._1.x + s._1.w / 2, l = c - u._1.w / 2, d = c + u._1.w / 2, _ = s._1.y - 14;
        return [{ x: l, y: a }, { x: d, y: a }, { x: l, y: _ }, { x: d, y: _ }];
      })())(o) : o;
    }
    f();
  })(z)(sk(n));
}, Xc = (t) => (n) => (e) => {
  const r = cm(e);
  return {
    layout: (() => {
      const o = ek()(Zb(r)(Lb(ik)(t)(kb(bb)(r))));
      return { ...o, chipExtras: uk(n)(e)(o) };
    })(),
    interiors: (() => {
      const o = Xc(t)(n), i = (s) => {
        if (s.tag === "Leaf")
          return z;
        if (s.tag === "Node")
          return nn("Node", s._1, s._2, s._3, o(s._4), i(s._5), i(s._6));
        f();
      };
      return i(e.interiors);
    })()
  };
}, $1 = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, P0 = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const a = $1(u._3)(e), c = (() => {
            if (a.tag === "Just")
              return a._1;
            if (a.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            f();
          })(), l = c.vx + (180 * (u._4.x - c.x) - 22 * c.vx) * r, d = c.vy + (180 * (u._4.y - c.y) - 22 * c.vy) * r;
          return rt(F)(u._3)({ x: c.x + l * r, y: c.y + d * r, vx: l, vy: d })(o(s, u._5));
        })(),
        u._6
      );
    f();
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
              const c = s(u, a._5), l = $1(a._3)(i);
              if (l.tag === "Just")
                return rt(F)(a._3)({ ...a._4, x: l._1.x, y: l._1.y })(c);
              if (l.tag === "Nothing")
                return rt(F)(a._3)(a._4)(c);
              f();
            })(),
            a._6
          );
        f();
      };
      return s(z, n);
    })()
  };
}, V = (t, n) => ({ tag: "CatQueue", _1: t, _2: n }), ak = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const o = n;
    if (o._1.tag === "Nil") {
      if (o._2.tag === "Nil") {
        e = !1, r = x;
        continue;
      }
      n = V(
        ((s) => (u) => {
          let a = s, c = u, l = !0, d;
          for (; l; ) {
            const _ = a, g = c;
            if (g.tag === "Nil") {
              l = !1, d = _;
              continue;
            }
            if (g.tag === "Cons") {
              a = xt("Cons", g._1, _), c = g._2;
              continue;
            }
            f();
          }
          return d;
        })(R)(o._2),
        R
      );
      continue;
    }
    if (o._1.tag === "Cons") {
      e = !1, r = T("Just", S(o._1._1, V(o._1._2, o._2)));
      continue;
    }
    f();
  }
  return r;
}, j = (t, n, e) => ({ tag: t, _1: n, _2: e }), ft = /* @__PURE__ */ j("CatNil"), ck = (t) => (n) => {
  if (t.tag === "CatNil")
    return n;
  if (n.tag === "CatNil")
    return t;
  if (t.tag === "CatCons")
    return j("CatCons", t._1, V(t._2._1, xt("Cons", n, t._2._2)));
  f();
}, fk = (t) => (n) => (e) => {
  const r = (i) => (s) => (u) => {
    let a = i, c = s, l = u, d = !0, _;
    for (; d; ) {
      const g = a, p = c, $ = l;
      if ($.tag === "Nil") {
        d = !1, _ = p;
        continue;
      }
      if ($.tag === "Cons") {
        a = g, c = g(p)($._1), l = $._2;
        continue;
      }
      f();
    }
    return _;
  };
  return ((i) => (s) => {
    let u = i, a = s, c = !0, l;
    for (; c; ) {
      const d = u, _ = a, g = ak(d);
      if (g.tag === "Nothing") {
        c = !1, l = r((p) => ($) => $(p))(n)(_);
        continue;
      }
      if (g.tag === "Just") {
        u = g._1._2, a = xt("Cons", t(g._1._1), _);
        continue;
      }
      f();
    }
    return l;
  })(e)(R);
}, lk = (t) => {
  if (t.tag === "CatNil")
    return x;
  if (t.tag === "CatCons")
    return T("Just", S(t._1, t._2._1.tag === "Nil" && t._2._2.tag === "Nil" ? ft : fk(ck)(ft)(t._2)));
  f();
}, K = (t, n) => ({ tag: "Free", _1: t, _2: n }), at = (t, n, e) => ({ tag: t, _1: n, _2: e }), gm = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const o = n;
    if (o._1.tag === "Return") {
      const i = lk(o._2);
      if (i.tag === "Nothing") {
        e = !1, r = at("Return", o._1._1);
        continue;
      }
      if (i.tag === "Just") {
        n = (() => {
          const s = i._1._1(o._1._1);
          return K(
            s._1,
            (() => {
              if (s._2.tag === "CatNil")
                return i._1._2;
              if (i._1._2.tag === "CatNil")
                return s._2;
              if (s._2.tag === "CatCons")
                return j("CatCons", s._2._1, V(s._2._2._1, xt("Cons", i._1._2, s._2._2._2)));
              f();
            })()
          );
        })();
        continue;
      }
      f();
    }
    if (o._1.tag === "Bind") {
      e = !1, r = at(
        "Bind",
        o._1._1,
        (i) => {
          const s = o._1._2(i);
          return K(
            s._1,
            (() => {
              if (s._2.tag === "CatNil")
                return o._2;
              if (o._2.tag === "CatNil")
                return s._2;
              if (s._2.tag === "CatCons")
                return j("CatCons", s._2._1, V(s._2._2._1, xt("Cons", o._2, s._2._2._2)));
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
}, gk = (t) => (n) => {
  const e = n.Monad0(), r = e.Bind1().Apply0().Functor0();
  return (o) => n.tailRecM((i) => {
    const s = gm(i);
    if (s.tag === "Return")
      return r.map(Fy)(e.Applicative0().pure(s._1));
    if (s.tag === "Bind")
      return r.map(ll)(o(t.map(s._2)(s._1)));
    f();
  });
}, _k = (t) => (n) => (e) => {
  const r = gm(e);
  if (r.tag === "Return")
    return n(r._1);
  if (r.tag === "Bind")
    return t(r._1)(r._2);
  f();
}, _g = { Applicative0: () => Uo, Bind1: () => _m }, dk = { map: (t) => (n) => _m.bind(n)((e) => Uo.pure(t(e))) }, _m = {
  bind: (t) => (n) => K(
    t._1,
    (() => {
      if (t._2.tag === "CatNil")
        return j("CatCons", n, V(R, R));
      if (t._2.tag === "CatCons")
        return j(
          "CatCons",
          t._2._1,
          V(
            t._2._2._1,
            xt("Cons", j("CatCons", n, V(R, R)), t._2._2._2)
          )
        );
      f();
    })()
  ),
  Apply0: () => dm
}, dm = {
  apply: (t) => (n) => {
    const e = (r) => K(
      n._1,
      (() => {
        if (n._2.tag === "CatNil")
          return j("CatCons", (o) => Uo.pure(r(o)), V(R, R));
        if (n._2.tag === "CatCons")
          return j(
            "CatCons",
            n._2._1,
            V(
              n._2._2._1,
              xt(
                "Cons",
                j("CatCons", (o) => Uo.pure(r(o)), V(R, R)),
                n._2._2._2
              )
            )
          );
        f();
      })()
    );
    return K(
      t._1,
      (() => {
        if (t._2.tag === "CatNil")
          return j("CatCons", e, V(R, R));
        if (t._2.tag === "CatCons")
          return j(
            "CatCons",
            t._2._1,
            V(
              t._2._2._1,
              xt("Cons", j("CatCons", e, V(R, R)), t._2._2._2)
            )
          );
        f();
      })()
    );
  },
  Functor0: () => dk
}, Uo = { pure: (t) => K(at("Return", t), ft), Apply0: () => dm }, hk = () => () => () => (t) => (n) => (e) => vy(e.type)(t) ? Ty(e.type)(t)(e.value) : n(e), pk = { map: (t) => (n) => ({ type: n.type, value: n.map(t)(n.value), map: n.map }) }, mk = (t) => Ja("Data.Functor.Variant: pattern match failure [" + t.type + "]"), $k = () => () => () => (t) => hk()()()(t)(mk);
var Wi = (function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", a = "Fork", c = "Sequential", l = "Map", d = "Apply", _ = "Alt", g = "Cons", p = "Resume", $ = "Release", h = "Finalizer", m = "Finalized", y = "Forked";
  function v(D, M, Y, q) {
    this.tag = D, this._1 = M, this._2 = Y, this._3 = q;
  }
  function w(D) {
    var M = function(Y, q, X) {
      return new v(D, Y, q, X);
    };
    return M.tag = D, M;
  }
  function C(D) {
    return new v(n, void 0);
  }
  function J(D) {
    try {
      D();
    } catch (M) {
      setTimeout(function() {
        throw M;
      }, 0);
    }
  }
  function k(D, M, Y) {
    try {
      return M(Y());
    } catch (q) {
      return D(q);
    }
  }
  function E(D, M, Y) {
    try {
      return M(Y)();
    } catch (q) {
      return Y(D(q))(), C;
    }
  }
  var L = (function() {
    var D = 1024, M = 0, Y = 0, q = new Array(D), X = !1;
    function W() {
      var nt;
      for (X = !0; M !== 0; )
        M--, nt = q[Y], q[Y] = void 0, Y = (Y + 1) % D, nt();
      X = !1;
    }
    return {
      isDraining: function() {
        return X;
      },
      enqueue: function(nt) {
        var et;
        M === D && (et = X, W(), X = et), q[(Y + M) % D] = nt, M++, X || W();
      }
    };
  })();
  function I(D) {
    var M = {}, Y = 0, q = 0;
    return {
      register: function(X) {
        var W = Y++;
        X.onComplete({
          rethrow: !0,
          handler: function(nt) {
            return function() {
              q--, delete M[W];
            };
          }
        })(), M[W] = X, q++;
      },
      isEmpty: function() {
        return q === 0;
      },
      killAll: function(X, W) {
        return function() {
          if (q === 0)
            return W();
          var nt = 0, et = {};
          function it(gt) {
            et[gt] = M[gt].kill(X, function(pt) {
              return function() {
                delete et[gt], nt--, D.isLeft(pt) && D.fromLeft(pt) && setTimeout(function() {
                  throw D.fromLeft(pt);
                }, 0), nt === 0 && W();
              };
            })();
          }
          for (var lt in M)
            M.hasOwnProperty(lt) && (nt++, it(lt));
          return M = {}, Y = 0, q = 0, function(gt) {
            return new v(o, function() {
              for (var pt in et)
                et.hasOwnProperty(pt) && et[pt]();
            });
          };
        };
      }
    };
  }
  var H = 0, G = 1, O = 2, ut = 3, ot = 4, Z = 5, U = 6;
  function P(D, M, Y) {
    var q = 0, X = H, W = Y, nt = null, et = null, it = null, lt = null, gt = null, pt = 0, St = 0, Gt = null, Wt = !0;
    function $t(dt) {
      for (var yt, Et, mt; ; )
        switch (yt = null, Et = null, mt = null, X) {
          case O:
            X = G;
            try {
              W = it(W), lt === null ? it = null : (it = lt._1, lt = lt._2);
            } catch (Dt) {
              X = Z, nt = D.left(Dt), W = null;
            }
            break;
          case ut:
            D.isLeft(W) ? (X = Z, nt = W, W = null) : it === null ? X = Z : (X = O, W = D.fromRight(W));
            break;
          case G:
            switch (W.tag) {
              case s:
                it && (lt = new v(g, it, lt)), it = W._2, X = G, W = W._1;
                break;
              case n:
                it === null ? (X = Z, W = D.right(W._1)) : (X = O, W = W._1);
                break;
              case o:
                X = ut, W = k(D.left, D.right, W._1);
                break;
              case i:
                X = ot, W = E(D.left, W._1, function(Dt) {
                  return function() {
                    q === dt && (q++, L.enqueue(function() {
                      q === dt + 1 && (X = ut, W = Dt, $t(q));
                    }));
                  };
                });
                return;
              case e:
                X = Z, nt = D.left(W._1), W = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                it === null ? gt = new v(g, W, gt, et) : gt = new v(g, W, new v(g, new v(p, it, lt), gt, et), et), it = null, lt = null, X = G, W = W._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                pt++, it === null ? gt = new v(g, W, gt, et) : gt = new v(g, W, new v(g, new v(p, it, lt), gt, et), et), it = null, lt = null, X = G, W = W._1;
                break;
              case a:
                X = ut, yt = P(D, M, W._2), M && M.register(yt), W._1 && yt.run(), W = D.right(yt);
                break;
              case c:
                X = G, W = Q(D, M, W._1);
                break;
            }
            break;
          case Z:
            if (it = null, lt = null, gt === null)
              X = U, W = et || nt || W;
            else
              switch (yt = gt._3, mt = gt._1, gt = gt._2, mt.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  et && et !== yt && pt === 0 ? X = Z : nt && (X = G, W = mt._2(D.fromLeft(nt)), nt = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case p:
                  et && et !== yt && pt === 0 || nt ? X = Z : (it = mt._1, lt = mt._2, X = O, W = D.fromRight(W));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  pt--, nt === null && (Et = D.fromRight(W), gt = new v(g, new v($, mt._2, Et), gt, yt), (et === yt || pt > 0) && (X = G, W = mt._3(Et)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case $:
                  gt = new v(g, new v(m, W, nt), gt, et), X = G, et && et !== yt && pt === 0 ? W = mt._1.killed(D.fromLeft(et))(mt._2) : nt ? W = mt._1.failed(D.fromLeft(nt))(mt._2) : W = mt._1.completed(D.fromRight(W))(mt._2), nt = null, pt++;
                  break;
                case h:
                  pt++, gt = new v(g, new v(m, W, nt), gt, et), X = G, W = mt._1;
                  break;
                case m:
                  pt--, X = Z, W = mt._1, nt = mt._2;
                  break;
              }
            break;
          case U:
            for (var kt in Gt)
              Gt.hasOwnProperty(kt) && (Wt = Wt && Gt[kt].rethrow, J(Gt[kt].handler(W)));
            Gt = null, et && nt ? setTimeout(function() {
              throw D.fromLeft(nt);
            }, 0) : D.isLeft(W) && Wt && setTimeout(function() {
              if (Wt)
                throw D.fromLeft(W);
            }, 0);
            return;
          case H:
            X = G;
            break;
          case ot:
            return;
        }
    }
    function At(dt) {
      return function() {
        if (X === U)
          return Wt = Wt && dt.rethrow, dt.handler(W)(), function() {
          };
        var yt = St++;
        return Gt = Gt || {}, Gt[yt] = dt, function() {
          Gt !== null && delete Gt[yt];
        };
      };
    }
    function Nt(dt, yt) {
      return function() {
        if (X === U)
          return yt(D.right(void 0))(), function() {
          };
        var Et = At({
          rethrow: !1,
          handler: function() {
            return yt(D.right(void 0));
          }
        })();
        switch (X) {
          case H:
            et = D.left(dt), X = U, W = et, $t(q);
            break;
          case ot:
            et === null && (et = D.left(dt)), pt === 0 && (X === ot && (gt = new v(g, new v(h, W(dt)), gt, et)), X = Z, W = null, nt = null, $t(++q));
            break;
          default:
            et === null && (et = D.left(dt)), pt === 0 && (X = Z, W = null, nt = null);
        }
        return Et;
      };
    }
    function Ct(dt) {
      return function() {
        var yt = At({
          rethrow: !1,
          handler: dt
        })();
        return X === H && $t(q), yt;
      };
    }
    return {
      kill: Nt,
      join: Ct,
      onComplete: At,
      isSuspended: function() {
        return X === H;
      },
      run: function() {
        X === H && (L.isDraining() ? $t(q) : L.enqueue(function() {
          $t(q);
        }));
      }
    };
  }
  function A(D, M, Y, q) {
    var X = 0, W = {}, nt = 0, et = {}, it = new Error("[ParAff] Early exit"), lt = null, gt = t;
    function pt(At, Nt, Ct) {
      var dt = Nt, yt = null, Et = null, mt = 0, kt = {}, Dt, zt;
      t: for (; ; )
        switch (Dt = null, dt.tag) {
          case y:
            if (dt._3 === t && (Dt = W[dt._1], kt[mt++] = Dt.kill(At, function(rn) {
              return function() {
                mt--, mt === 0 && Ct(rn)();
              };
            })), yt === null)
              break t;
            dt = yt._2, Et === null ? yt = null : (yt = Et._1, Et = Et._2);
            break;
          case l:
            dt = dt._2;
            break;
          case d:
          case _:
            yt && (Et = new v(g, yt, Et)), yt = dt, dt = dt._1;
            break;
        }
      if (mt === 0)
        Ct(D.right(void 0))();
      else
        for (zt = 0, Dt = mt; zt < Dt; zt++)
          kt[zt] = kt[zt]();
      return kt;
    }
    function St(At, Nt, Ct) {
      var dt, yt, Et, mt, kt, Dt;
      for (D.isLeft(At) ? (dt = At, yt = null) : (yt = At, dt = null); ; ) {
        if (Et = null, mt = null, kt = null, Dt = null, lt !== null)
          return;
        if (Nt === null) {
          q(dt || yt)();
          return;
        }
        if (Nt._3 !== t)
          return;
        switch (Nt.tag) {
          case l:
            dt === null ? (Nt._3 = D.right(Nt._1(D.fromRight(yt))), yt = Nt._3) : Nt._3 = dt;
            break;
          case d:
            if (Et = Nt._1._3, mt = Nt._2._3, dt) {
              if (Nt._3 = dt, kt = !0, Dt = nt++, et[Dt] = pt(it, dt === Et ? Nt._2 : Nt._1, function() {
                return function() {
                  delete et[Dt], kt ? kt = !1 : Ct === null ? St(dt, null, null) : St(dt, Ct._1, Ct._2);
                };
              }), kt) {
                kt = !1;
                return;
              }
            } else {
              if (Et === t || mt === t)
                return;
              yt = D.right(D.fromRight(Et)(D.fromRight(mt))), Nt._3 = yt;
            }
            break;
          case _:
            if (Et = Nt._1._3, mt = Nt._2._3, Et === t && D.isLeft(mt) || mt === t && D.isLeft(Et))
              return;
            if (Et !== t && D.isLeft(Et) && mt !== t && D.isLeft(mt))
              dt = yt === Et ? mt : Et, yt = null, Nt._3 = dt;
            else if (Nt._3 = yt, kt = !0, Dt = nt++, et[Dt] = pt(it, yt === Et ? Nt._2 : Nt._1, function() {
              return function() {
                delete et[Dt], kt ? kt = !1 : Ct === null ? St(yt, null, null) : St(yt, Ct._1, Ct._2);
              };
            }), kt) {
              kt = !1;
              return;
            }
            break;
        }
        Ct === null ? Nt = null : (Nt = Ct._1, Ct = Ct._2);
      }
    }
    function Gt(At) {
      return function(Nt) {
        return function() {
          delete W[At._1], At._3 = Nt, St(Nt, At._2._1, At._2._2);
        };
      };
    }
    function Wt() {
      var At = G, Nt = Y, Ct = null, dt = null, yt, Et;
      t: for (; ; )
        switch (yt = null, Et = null, At) {
          case G:
            switch (Nt.tag) {
              case l:
                Ct && (dt = new v(g, Ct, dt)), Ct = new v(l, Nt._1, t, t), Nt = Nt._2;
                break;
              case d:
                Ct && (dt = new v(g, Ct, dt)), Ct = new v(d, t, Nt._2, t), Nt = Nt._1;
                break;
              case _:
                Ct && (dt = new v(g, Ct, dt)), Ct = new v(_, t, Nt._2, t), Nt = Nt._1;
                break;
              default:
                Et = X++, At = Z, yt = Nt, Nt = new v(y, Et, new v(g, Ct, dt), t), yt = P(D, M, yt), yt.onComplete({
                  rethrow: !1,
                  handler: Gt(Nt)
                })(), W[Et] = yt, M && M.register(yt);
            }
            break;
          case Z:
            if (Ct === null)
              break t;
            Ct._1 === t ? (Ct._1 = Nt, At = G, Nt = Ct._2, Ct._2 = t) : (Ct._2 = Nt, Nt = Ct, dt === null ? Ct = null : (Ct = dt._1, dt = dt._2));
        }
      for (gt = Nt, Et = 0; Et < X; Et++)
        W[Et].run();
    }
    function $t(At, Nt) {
      lt = D.left(At);
      var Ct;
      for (var dt in et)
        if (et.hasOwnProperty(dt)) {
          Ct = et[dt];
          for (dt in Ct)
            Ct.hasOwnProperty(dt) && Ct[dt]();
        }
      et = null;
      var yt = pt(At, gt, Nt);
      return function(Et) {
        return new v(i, function(mt) {
          return function() {
            for (var kt in yt)
              yt.hasOwnProperty(kt) && yt[kt]();
            return C;
          };
        });
      };
    }
    return Wt(), function(At) {
      return new v(i, function(Nt) {
        return function() {
          return $t(At, Nt);
        };
      });
    };
  }
  function Q(D, M, Y) {
    return new v(i, function(q) {
      return function() {
        return A(D, M, Y, q);
      };
    });
  }
  return v.EMPTY = t, v.Pure = w(n), v.Throw = w(e), v.Catch = w(r), v.Sync = w(o), v.Async = w(i), v.Bind = w(s), v.Bracket = w(u), v.Fork = w(a), v.Seq = w(c), v.ParMap = w(l), v.ParApply = w(d), v.ParAlt = w(_), v.Fiber = P, v.Supervisor = I, v.Scheduler = L, v.nonCanceler = C, v;
})();
const yk = Wi.Pure;
Wi.Throw;
function xi(t) {
  return function(n) {
    return Wi.Bind(t, n);
  };
}
const vi = Wi.Sync, xk = Wi.Async;
function dg(t, n) {
  return function() {
    return Wi.Fiber(t, null, n);
  };
}
Wi.Seq;
const hg = {
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
      return Ja("unsafeFromLeft: Right");
    f();
  },
  fromRight: (t) => {
    if (t.tag === "Right")
      return t._1;
    if (t.tag === "Left")
      return Ja("unsafeFromRight: Left");
    f();
  },
  left: by,
  right: eh
}, vk = /* @__PURE__ */ (() => {
  const t = yk();
  return (n) => t;
})(), Tk = (t) => (n) => _k((e) => (r) => t({ type: e.type, value: e.map((o) => r(o))(e.value), map: e.map }))(n), wk = (t) => {
  const n = t.Bind1(), e = t.Applicative0().pure;
  return (r) => {
    const o = yy(() => Tk((s) => n.bind(r(s))(o()))(e));
    return o();
  };
};
let qf = null;
function Nk() {
  return qf || (typeof document > "u" ? null : qf = document.createElement("canvas").getContext("2d"));
}
const Xf = /* @__PURE__ */ new Map();
function hm(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Xf.has(u)) return Xf.get(u);
  const a = Nk();
  if (!a) return i;
  a.font = s;
  const c = o(a.measureText(r)), l = typeof document < "u" ? document.fonts : null;
  if (!l || l.check(s)) Xf.set(u, c);
  else if (l && l.load)
    try {
      l.load(s);
    } catch {
    }
  return c;
}
const Ck = (t, n, e, r) => hm(t, n, e, r, (o) => o.width, -1), Jk = (t, n, e, r) => hm(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), tc = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), pm = (t) => t, mm = {
  map: (t) => (n) => {
    if (n.tag === "MeasureText")
      return tc("MeasureText", n._1, n._2, (e) => t(n._3(e)));
    if (n.tag === "MeasureInk")
      return tc("MeasureInk", n._1, n._2, (e) => t(n._3(e)));
    f();
  }
}, pg = (t) => (n) => {
  const e = Ck(t.family, t.size, t.weight, Ei(n));
  return e < 0 ? tt(ve(n).length) * t.size * 0.62 : e;
}, mg = (t) => (n) => {
  const e = Jk(t.family, t.size, t.weight, Ei(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, bk = (t) => (n) => K(
  at(
    "Bind",
    { type: "metrics", value: tc("MeasureInk", t, n, pm), map: mm.map },
    (e) => K(at("Return", e), ft)
  ),
  ft
), So = (t) => (n) => K(
  at(
    "Bind",
    { type: "metrics", value: tc("MeasureText", t, n, pm), map: mm.map },
    (e) => K(at("Return", e), ft)
  ),
  ft
), $m = (t) => t, ym = (t) => t, Mc = (t) => t, xm = (t) => t, vm = (t) => t, jt = (t, n, e, r, o) => ({ tag: t, _1: n, _2: e, _3: r, _4: o }), Tm = (t) => t, $g = (t) => t, kk = /* @__PURE__ */ $g("BaselineTop"), ze = /* @__PURE__ */ $g("BaselineMiddle"), Lk = /* @__PURE__ */ $g("BaselineBottom"), Yo = /* @__PURE__ */ Tm("AlignLeft"), Eo = /* @__PURE__ */ Tm("AlignCenter"), ue = /* @__PURE__ */ vm("RoundJoin"), Au = /* @__PURE__ */ vm("MiterJoin"), Ye = /* @__PURE__ */ xm("ButtCap"), vr = /* @__PURE__ */ xm("RoundCap"), Sk = /* @__PURE__ */ Mc("LayerPolyOut"), Ek = /* @__PURE__ */ Mc("LayerPolyIn"), Pk = /* @__PURE__ */ Mc("LayerNodeMask"), Ak = /* @__PURE__ */ Mc("LayerOverlay"), Ko = /* @__PURE__ */ ym("NonZero"), yg = /* @__PURE__ */ ym("EvenOdd"), y1 = /* @__PURE__ */ $m("Normal"), pa = /* @__PURE__ */ $m("Difference"), Ln = { r: 255, g: 255, b: 255, a: 255 }, Ai = [5], Pn = {
  map: (t) => (n) => {
    if (n.tag === "FillPath")
      return jt("FillPath", n._1, n._2, t(n._3));
    if (n.tag === "StrokePath")
      return jt("StrokePath", n._1, n._2, t(n._3));
    if (n.tag === "FillStrokePath")
      return jt("FillStrokePath", n._1, n._2, n._3, t(n._4));
    if (n.tag === "DrawText")
      return jt("DrawText", n._1, t(n._2));
    if (n.tag === "DrawTextAffine")
      return jt("DrawTextAffine", n._1, n._2, t(n._3));
    if (n.tag === "PushTransform")
      return jt("PushTransform", n._1, t(n._2));
    if (n.tag === "PopTransform")
      return jt("PopTransform", t(n._1));
    if (n.tag === "PushClip")
      return jt("PushClip", n._1, n._2, t(n._3));
    if (n.tag === "PopClip")
      return jt("PopClip", t(n._1));
    if (n.tag === "PushBlend")
      return jt("PushBlend", n._1, t(n._2));
    if (n.tag === "PopBlend")
      return jt("PopBlend", t(n._1));
    if (n.tag === "PushAlpha")
      return jt("PushAlpha", n._1, t(n._2));
    if (n.tag === "PopAlpha")
      return jt("PopAlpha", t(n._1));
    if (n.tag === "PushBlur")
      return jt("PushBlur", n._1, t(n._2));
    if (n.tag === "PopBlur")
      return jt("PopBlur", t(n._1));
    if (n.tag === "PushLayer")
      return jt("PushLayer", n._1, t(n._2));
    if (n.tag === "PopLayer")
      return jt("PopLayer", t(n._1));
    if (n.tag === "SetViewport")
      return jt("SetViewport", n._1, t(n._2));
    if (n.tag === "ClearBackground")
      return jt("ClearBackground", n._1, t(n._2));
    if (n.tag === "BackgroundDots")
      return jt("BackgroundDots", n._1, t(n._2));
    f();
  }
}, so = { r: 26, g: 26, b: 26, a: 255 }, A0 = (t) => (n) => Math.imul(t, n), ks = (t) => {
  const n = t + 1831565813 | 0, e = A0(n ^ n >>> 15)(n | 1), r = e ^ (e + A0(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (tt(o) + 4294967296) / 4294967296 : tt(o) / 4294967296 };
}, Mn = (t) => (n) => (e) => {
  const r = ks(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, R0 = (t) => (n) => N((e) => (r) => A0(e ^ r)(-2048144789))(n)(B(Kr)(Me(t))), Rk = (t) => t, wm = (t) => t, Fk = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, He = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Nm = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, F0 = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Gk = (t) => (n) => (e) => {
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
}, Ik = /* @__PURE__ */ wm("FlatLevel"), Bk = /* @__PURE__ */ wm("NestedLevel"), xg = /* @__PURE__ */ Rk("GenieSilhouette"), Dk = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = ks(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, zk = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = ks(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, x1 = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = _e(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = _e(Fk(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, a = t.cy + i * e / o, c = { x: u - s * e / o, y: a + s * r / o }, l = { x: u + s * e / o, y: a - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : c.y < l.y ? c : l;
}, as = (t) => (n) => {
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
}, Hk = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = ks(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, Cm = (t) => {
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
}, Wk = (t) => (n) => (e) => {
  const r = ks(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = Nm(0)(o - 1 | 0)(mn(ar(r.value * tt(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, Qk = (t) => (n) => {
  const e = ks(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = Nm(0)(r - 1 | 0)(mn(ar(e.value * tt(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, Jm = (t) => {
  const n = He(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, bm = (t) => [
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
], km = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, Ok = (t) => {
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
}, Lm = (t) => {
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
}, Sm = (t) => (n) => {
  const e = n.y + n.h, r = hx(t.rBase * n.h)(n.w / (2 * (1 + (tt(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = F0(t.minN)(o <= 0 || i <= 0 ? t.minN : mn(Ge(o / i)) + 1 | 0), u = s >= 3 ? Zt(1, s - 2 | 0) : [], a = u.length, c = rr(a + 1 | 0, 2), l = c < 1 ? [] : Ft(0, c, u), d = Qk(t.seed)((() => {
    const h = a - c | 0;
    return h < 1 ? u : Ft(h, u.length, u);
  })()), _ = d.idx, g = Wk(d.prng)(_t((h) => h !== _, l))(F0(1)(l.length - (Se(qo)(_)(l) ? 1 : 0) | 0)), p = g.idx, $ = s >= 2 ? o / (tt(s) - 1) : 0;
  return N((h) => (m) => {
    const y = m === p, v = m === _, w = m === 0 || m === (s - 1 | 0), C = Hk(h.prng)(w)(v)(y)(r)(t), J = Dk(C.prng)(w)(t)(n.h), k = zk(J.prng)(w)(t)($);
    return {
      prng: k.prng,
      circles: Lt(h.circles)({
        cx: n.x + Gk(C.r)(n.w - C.r)((s >= 2 ? r + tt(m) / (tt(s) - 1) * o + k.dx : r + 0 * o + k.dx) + (v ? t.heroShift * $ : y ? -1 * t.smallShift * $ : 0)),
        cy: e - J.yLift,
        r: C.r
      })
    };
  })({ prng: g.prng, circles: [] })(Zt(0, s - 1 | 0)).circles;
}, Em = (t) => (n) => {
  const e = t.length;
  return Qt((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? x1(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? x1(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, Pm = (t) => {
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
}, qk = (t) => (n) => (e) => {
  const r = mi(n.y - t.cy)(n.x - t.cx), o = mi(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = F0(1)(mn(Jc(i / 1.5707963267948966))), u = i / tt(s), a = 1.3333333333333333 * px(u / 4);
  return wt(Zt(0, s - 1 | 0))((c) => {
    const l = r + tt(c + 1 | 0) * u, d = t.cx + t.r * ie(l), _ = t.cy + t.r * se(l), g = r + tt(c) * u;
    return [
      4,
      t.cx + t.r * ie(g) - a * t.r * se(g),
      t.cy + t.r * se(g) + a * t.r * ie(g),
      d + a * t.r * se(l),
      _ - a * t.r * ie(l),
      d,
      _
    ];
  });
}, Am = (t) => (n) => {
  const e = t.h * 0.38, r = Em(Sm(km)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = He(n)(He(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...wt(r)((i) => qk(i.c)(i.p1)(i.p2)),
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
  ] : as(t)(n);
}, Ti = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
    const s = Lm(e);
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
    const s = Jm(e);
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
    const s = Pm(e);
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
    const s = Cm(e);
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
    const s = bm(e);
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
    const s = Am(e)(r);
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
}, Xk = {
  fillPath: (t) => (n) => K(
    at(
      "Bind",
      { type: "render", value: jt("FillPath", t, n, void 0), map: Pn.map },
      (e) => K(at("Return", e), ft)
    ),
    ft
  ),
  strokePath: (t) => (n) => K(
    at(
      "Bind",
      { type: "render", value: jt("StrokePath", t, n, void 0), map: Pn.map },
      (e) => K(at("Return", e), ft)
    ),
    ft
  ),
  fillStrokePath: (t) => (n) => (e) => K(
    at(
      "Bind",
      { type: "render", value: jt("FillStrokePath", t, n, e, void 0), map: Pn.map },
      (r) => K(at("Return", r), ft)
    ),
    ft
  ),
  drawRoundedRect: (t) => (n) => (e) => (r) => {
    if (e.tag === "Just") {
      if (r.tag === "Just")
        return K(
          at(
            "Bind",
            {
              type: "render",
              value: jt("FillStrokePath", as(t)(n), e._1, r._1, void 0),
              map: Pn.map
            },
            (o) => K(at("Return", o), ft)
          ),
          ft
        );
      if (r.tag === "Nothing")
        return K(
          at(
            "Bind",
            {
              type: "render",
              value: jt("FillPath", as(t)(n), e._1, void 0),
              map: Pn.map
            },
            (o) => K(at("Return", o), ft)
          ),
          ft
        );
      f();
    }
    if (e.tag === "Nothing") {
      if (r.tag === "Just")
        return K(
          at(
            "Bind",
            {
              type: "render",
              value: jt("StrokePath", as(t)(n), r._1, void 0),
              map: Pn.map
            },
            (o) => K(at("Return", o), ft)
          ),
          ft
        );
      if (r.tag === "Nothing")
        return K(at("Return", void 0), ft);
    }
    f();
  },
  drawText: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("DrawText", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  drawTextAffine: (t) => (n) => K(
    at(
      "Bind",
      { type: "render", value: jt("DrawTextAffine", t, n, void 0), map: Pn.map },
      (e) => K(at("Return", e), ft)
    ),
    ft
  ),
  pushTransform: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("PushTransform", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  popTransform: K(
    at(
      "Bind",
      { type: "render", value: jt("PopTransform", void 0), map: Pn.map },
      (t) => K(at("Return", t), ft)
    ),
    ft
  ),
  pushBakedTransform: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("PushTransform", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  popBakedTransform: K(
    at(
      "Bind",
      { type: "render", value: jt("PopTransform", void 0), map: Pn.map },
      (t) => K(at("Return", t), ft)
    ),
    ft
  ),
  pushClip: (t) => (n) => K(
    at(
      "Bind",
      { type: "render", value: jt("PushClip", t, n, void 0), map: Pn.map },
      (e) => K(at("Return", e), ft)
    ),
    ft
  ),
  popClip: K(
    at(
      "Bind",
      { type: "render", value: jt("PopClip", void 0), map: Pn.map },
      (t) => K(at("Return", t), ft)
    ),
    ft
  ),
  pushBlend: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("PushBlend", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  popBlend: K(
    at(
      "Bind",
      { type: "render", value: jt("PopBlend", void 0), map: Pn.map },
      (t) => K(at("Return", t), ft)
    ),
    ft
  ),
  pushAlpha: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("PushAlpha", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  popAlpha: K(
    at(
      "Bind",
      { type: "render", value: jt("PopAlpha", void 0), map: Pn.map },
      (t) => K(at("Return", t), ft)
    ),
    ft
  ),
  pushBlur: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("PushBlur", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  popBlur: K(
    at(
      "Bind",
      { type: "render", value: jt("PopBlur", void 0), map: Pn.map },
      (t) => K(at("Return", t), ft)
    ),
    ft
  ),
  pushLayer: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("PushLayer", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  popLayer: K(
    at(
      "Bind",
      { type: "render", value: jt("PopLayer", void 0), map: Pn.map },
      (t) => K(at("Return", t), ft)
    ),
    ft
  ),
  setViewport: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("SetViewport", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  clearBackground: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("ClearBackground", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  backgroundDots: (t) => K(
    at(
      "Bind",
      { type: "render", value: jt("BackgroundDots", t, void 0), map: Pn.map },
      (n) => K(at("Return", n), ft)
    ),
    ft
  ),
  measureText: (t) => (n) => So(t)(n),
  measureInk: (t) => (n) => bk(t)(n),
  insideTokenStyle: (t) => K(at("Return", xg), ft),
  Monad0: () => _g
}, Mk = (t) => () => t.clip("evenodd"), Uk = (t) => (n) => () => {
  t.filter = `blur(${n}px)`;
}, Yk = (t) => (n) => () => {
  const e = n > 0 ? t.canvas.width / n : 1;
  t.setTransform(e, 0, 0, e, 0, 0);
}, Kk = (t) => (n) => (e) => (r) => (o) => () => {
  const i = n > 0 ? t.canvas.width / n : 1;
  t.setTransform(
    i * e,
    0,
    0,
    i * e,
    i * r,
    i * o
  );
}, Vk = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().translateSelf(n.ox, n.oy).scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, G0 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, vg = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = Rx(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, jk = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = Pc(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, Ru = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = xl(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, Uc = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = mh(t)((() => {
        const c = i + 1 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })())((() => {
        const c = i + 2 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })()), a = r(i + 3 | 0);
      return () => (u(), a());
    }
    if (s === 2) {
      const u = Qs(t)((() => {
        const c = i + 1 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })())((() => {
        const c = i + 2 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })()), a = r(i + 3 | 0);
      return () => (u(), a());
    }
    if (s === 3) {
      const u = Os(t)({
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
      const u = Wx(t)({
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
      const u = $h(t), a = r(i + 1 | 0);
      return () => (u(), a());
    }
    return () => {
    };
  }, o = ph(t);
  return () => (o(), r(0)());
}, Zk = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = G0(i)(G0(r / 2)(o / 2)), u = mh(t)(n + s)(e);
  return () => (u(), Qs(t)(n + r - s)(e)(), Os(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), Qs(t)(n + r)(e + o - s)(), Os(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), Qs(t)(n + s)(e + o)(), Os(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), Qs(t)(n)(e + s)(), Os(t)({ cpx: n, cpy: e, x: n + s, y: e })(), $h(t)());
}, t5 = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), Rm = (t) => (n) => {
  const e = wl(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = t5();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 }, groupAlpha: { value: 1 }, alphaSaves: { value: [] } };
  };
}, n5 = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, e5 = (t) => en(t.weight) + " " + mo(t.size) + "px " + t.family, no = (t) => {
  const n = mo(tt(t.a) / 255);
  return t.a >= 255 ? "rgb(" + en(t.r) + "," + en(t.g) + "," + en(t.b) + ")" : "rgba(" + en(t.r) + "," + en(t.g) + "," + en(t.b) + "," + n + ")";
}, r5 = (t) => (n) => (e) => (r) => {
  const o = Qr(t);
  return () => (o(), Yk(t)(n.width)(), Ru(t)(e)(no(r))(), Bx(t)({ x: 0, y: 0, width: n.width, height: n.height })(), Or(t)(), e.font.value = "", e.fill.value = "", e.stroke.value = "");
}, o5 = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", Vk(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: no(e.bgColor),
    dotCss: no(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius,
    ox: e.origin.x,
    oy: e.origin.y
  })());
}, i5 = (t) => (n) => (e) => (r) => {
  const o = Ru(t)(n)(no(r));
  return () => (o(), Uc(t)(e)(), Tl(t)());
}, s5 = (t) => (n) => (e) => (r) => (o) => {
  const i = Ru(t)(n)(no(r));
  return () => (i(), vg(t)(n)(no(o.color))(), yl(t)(o.width)(), Bl(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return El;
    if (o.lineJoin === "BevelJoin")
      return Sl;
    if (o.lineJoin === "MiterJoin")
      return Pl;
    f();
  })())(), Dl(t)((() => {
    if (o.lineCap === "ButtCap")
      return Fl;
    if (o.lineCap === "RoundCap")
      return Al;
    if (o.lineCap === "SquareCap")
      return Rl;
    f();
  })())(), Uc(t)(e)(), Tl(t)(), vl(t)());
}, u5 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = ph(t);
  return () => {
    if (s(), Zk(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Ru(t)(n)(no(o._1.color))(), Tl(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return vg(t)(n)(no(i._1.color))(), yl(t)(i._1.width)(), Bl(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return El;
        if (i._1.lineJoin === "BevelJoin")
          return Sl;
        if (i._1.lineJoin === "MiterJoin")
          return Pl;
        f();
      })())(), Dl(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return Fl;
        if (i._1.lineCap === "RoundCap")
          return Al;
        if (i._1.lineCap === "SquareCap")
          return Rl;
        f();
      })())(), vl(t)();
    i.tag !== "Nothing" && f();
  };
}, a5 = (t) => (n) => (e) => (r) => {
  const o = vg(t)(n)(no(r.color));
  return () => (o(), yl(t)(r.width)(), Bl(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return El;
    if (r.lineJoin === "BevelJoin")
      return Sl;
    if (r.lineJoin === "MiterJoin")
      return Pl;
    f();
  })())(), Dl(t)((() => {
    if (r.lineCap === "ButtCap")
      return Fl;
    if (r.lineCap === "RoundCap")
      return Al;
    if (r.lineCap === "SquareCap")
      return Rl;
    f();
  })())(), Uc(t)(e)(), vl(t)());
}, v1 = (t) => (n) => (e) => {
  const r = Ru(t)(n)(no(e.color));
  return () => (r(), jk(t)(n)(e5(e.font))(), Il(t)((() => {
    if (e.align === "AlignLeft")
      return Xx;
    if (e.align === "AlignCenter")
      return Ll;
    if (e.align === "AlignRight")
      return Mx;
    f();
  })())(), Gl(t)((() => {
    if (e.baseline === "BaselineTop")
      return Qx;
    if (e.baseline === "BaselineMiddle")
      return kl;
    if (e.baseline === "BaselineAlphabetic")
      return Ox;
    if (e.baseline === "BaselineBottom")
      return qx;
    f();
  })())(), Nl(t)(e.content)(e.x)(e.y)());
}, Fm = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => n5
}, c5 = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Fm
}, f5 = (t) => (n) => (e) => {
  const r = G0(n.width / e.vw)(n.height / e.vh);
  return Kk(t)(n.width)(r)((n.width - e.vw * r) / 2 - e.vx * r)((n.height - e.vh * r) / 2 - e.vy * r);
}, l5 = { pure: (t) => (n) => () => t, Apply0: () => Fm }, Gm = { Applicative0: () => l5, Bind1: () => c5 }, Tg = {
  fillPath: (t) => (n) => (e) => {
    const r = i5(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = a5(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = s5(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = u5(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = v1(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = Qr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", Dx(e.ctx)(t)(), v1(e.ctx)(e.styleCache)(n)(), Or(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = Qr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", l_(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Na(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
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
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", l_(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Na(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
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
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", Uc(e.ctx)(t)(), n === "NonZero")
          return Ix(e.ctx)();
        if (n === "EvenOdd")
          return Mk(e.ctx)();
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
          return g_(n.ctx)(Ux)();
        if (t === "Difference")
          return g_(n.ctx)(Yx)();
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
        return n.groupAlpha.value = u, Gx(n.ctx)(u)();
      }
    };
  },
  popAlpha: (t) => {
    const n = Or(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0) {
        n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
        const o = t.alphaSaves.value, i = ur(o);
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
        const i = Uk(n.ctx)(t);
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
    const e = f5(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = r5(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = o5(n.ctx)(n.styleCache)(t), r = n.maskDepth;
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
    const r = mg(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => xg,
  Monad0: () => Gm
}, g5 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Tu = (t) => (n) => (e) => {
  const r = g5(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, I0 = (t) => {
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
}, Im = (t) => {
  if (t.tag === "Retracted")
    return { lo: 0, hi: 0 };
  if (t.tag === "Extended")
    return { lo: 0, hi: 1 };
  if (t.tag === "Extending") {
    if (t._1 === "ExtendFromSource")
      return { lo: 0, hi: I0(t._2) };
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
}, ei = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 1 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: I0(t._1), scale: 1 };
  if (t.tag === "PloppingOut")
    return { alpha: I0(1 - t._1), scale: 1 };
  f();
};
function _5(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function d5(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: _5(o, i) };
  }
  return e;
}
function h5(t, n, e) {
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
function T1(t, n) {
  if (n.length === 0) return [];
  const e = d5(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = h5(e, n, i * r / t);
  return o;
}
function p5(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function m5(t, n) {
  const e = n.length;
  if (e === 0) return n;
  let r = 0, o = 1 / 0;
  for (let i = 0; i < e; i++) {
    let s = 0;
    for (let u = 0; u < e; u++) {
      const a = t[u] || { x: 0, y: 0 }, c = n[(u + i) % e] || { x: 0, y: 0 }, l = a.x - c.x, d = a.y - c.y;
      s += l * l + d * d;
    }
    s < o && (o = s, r = i);
  }
  return p5(r, n);
}
const w1 = (t) => (n) => (e) => {
  const r = T1(t, n), o = T1(t, e), i = m5(r, o);
  return { from: r, to: i };
};
function N1(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function $5(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function y5(t, n) {
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
function x5(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const C1 = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = N1(n), s = N1(e), u = $5(i, s), a = new Array(o);
  let c = 1 / 0, l = -1 / 0;
  for (let g = 0; g < o; g++) {
    const p = n[g], $ = (p.x - i.x) * u.x + (p.y - i.y) * u.y;
    a[g] = $, $ < c && (c = $), $ > l && (l = $);
  }
  const d = l - c;
  let _ = new Array(o);
  for (let g = 0; g < o; g++) {
    const p = n[g], $ = e[g];
    if ($ === void 0) {
      _[g] = p;
      continue;
    }
    const h = d <= 1e-4 ? 0 : r.maxDelay * (1 - (a[g] - c) / d), m = Math.max(1e-4, 1 - h), y = x5((t - h) / m), v = y * y * (3 - 2 * y);
    _[g] = {
      x: p.x + ($.x - p.x) * v,
      y: p.y + ($.y - p.y) * v
    };
  }
  for (let g = 0; g < r.smoothPasses; g++)
    _ = y5(0.5, _);
  return _;
}, Bm = (t, n) => ({ tag: t, _1: n }), Dm = (t, n) => ({ tag: t, _1: n }), Nn = (t, n, e) => ({ tag: t, _1: n, _2: e }), zm = (t) => t, Yc = (t, n) => ({ tag: t, _1: n }), Kc = (t, n) => ({ tag: t, _1: n }), Vc = (t) => t, $o = (t, n) => ({ tag: t, _1: n }), zn = (t, n, e) => ({ tag: t, _1: n, _2: e }), Po = (t, n) => ({ tag: t, _1: n }), Ri = (t, n) => ({ tag: t, _1: n }), Hm = (t, n) => ({ tag: t, _1: n }), Wm = (t) => t, Qm = (t, n) => ({ tag: t, _1: n }), di = (t, n, e) => ({ tag: t, _1: n, _2: e }), Om = (t) => t, v5 = (t) => t, wi = /* @__PURE__ */ Om("NormalTransform"), T5 = /* @__PURE__ */ Om("BakedTransform"), qm = /* @__PURE__ */ Wm("TokenOutside"), J1 = /* @__PURE__ */ Wm("TokenInside"), jc = /* @__PURE__ */ Ri("PlainText"), Xm = /* @__PURE__ */ Po("FrameTitle"), w5 = /* @__PURE__ */ Po("Watermark"), N5 = /* @__PURE__ */ Vc("NodeShadow"), C5 = /* @__PURE__ */ Vc("NodeDoorwayFrame"), Mm = /* @__PURE__ */ Vc("NodeBody"), J5 = /* @__PURE__ */ Vc("NodeInversion"), wg = /* @__PURE__ */ zm("LabelsShown"), wu = /* @__PURE__ */ zm("LabelsHidden"), Tr = {
  map: (t) => (n) => {
    if (n.tag === "BeginFrame")
      return zn("BeginFrame", n._1, t(n._2));
    if (n.tag === "EndFrame")
      return zn("EndFrame", t(n._1));
    if (n.tag === "BeginGroup")
      return zn("BeginGroup", n._1, t(n._2));
    if (n.tag === "EndGroup")
      return zn("EndGroup", n._1, t(n._2));
    if (n.tag === "Background")
      return zn("Background", n._1, t(n._2));
    if (n.tag === "Overlay")
      return zn("Overlay", n._1, t(n._2));
    if (n.tag === "Node")
      return zn("Node", n._1, t(n._2));
    if (n.tag === "Edge")
      return zn("Edge", n._1, t(n._2));
    if (n.tag === "Text")
      return zn("Text", n._1, t(n._2));
    if (n.tag === "Token")
      return zn("Token", n._1, t(n._2));
    if (n.tag === "AskInsideTokenStyle")
      return zn("AskInsideTokenStyle", n._1, (e) => t(n._2(e)));
    f();
  }
}, Um = (t) => (n) => So(t)(n), b5 = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = wk(t);
  return (r) => (o) => e($k()()()({
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
}, k5 = (t) => K(
  at(
    "Bind",
    { type: "scene", value: zn("AskInsideTokenStyle", t, v5), map: Tr.map },
    (n) => K(at("Return", n), ft)
  ),
  ft
), Ym = (t) => K(
  at(
    "Bind",
    { type: "scene", value: zn("Background", t, void 0), map: Tr.map },
    (n) => K(at("Return", n), ft)
  ),
  ft
), Km = (t) => K(
  at(
    "Bind",
    { type: "scene", value: zn("Edge", t, void 0), map: Tr.map },
    (n) => K(at("Return", n), ft)
  ),
  ft
), Zc = (t) => K(
  at(
    "Bind",
    { type: "scene", value: zn("Node", t, void 0), map: Tr.map },
    (n) => K(at("Return", n), ft)
  ),
  ft
), yo = (t) => K(
  at(
    "Bind",
    { type: "scene", value: zn("Overlay", t, void 0), map: Tr.map },
    (n) => K(at("Return", n), ft)
  ),
  ft
), Qi = (t) => K(
  at(
    "Bind",
    { type: "scene", value: zn("Text", t, void 0), map: Tr.map },
    (n) => K(at("Return", n), ft)
  ),
  ft
), Vm = (t) => K(
  at(
    "Bind",
    { type: "scene", value: zn("Token", t, void 0), map: Tr.map },
    (n) => K(at("Return", n), ft)
  ),
  ft
), L5 = (t) => (n) => K(
  at(
    "Bind",
    { type: "scene", value: zn("BeginFrame", t, void 0), map: Tr.map },
    (e) => K(at("Return", e), ft)
  ),
  j(
    "CatCons",
    () => K(
      n._1,
      (() => {
        if (n._2.tag === "CatNil")
          return j(
            "CatCons",
            () => K(
              at(
                "Bind",
                { type: "scene", value: zn("EndFrame", void 0), map: Tr.map },
                (e) => K(at("Return", e), ft)
              ),
              ft
            ),
            V(R, R)
          );
        if (n._2.tag === "CatCons")
          return j(
            "CatCons",
            n._2._1,
            V(
              n._2._2._1,
              xt(
                "Cons",
                j(
                  "CatCons",
                  () => K(
                    at(
                      "Bind",
                      { type: "scene", value: zn("EndFrame", void 0), map: Tr.map },
                      (e) => K(at("Return", e), ft)
                    ),
                    ft
                  ),
                  V(R, R)
                ),
                n._2._2._2
              )
            )
          );
        f();
      })()
    ),
    V(R, R)
  )
), Hn = (t) => (n) => K(
  at(
    "Bind",
    { type: "scene", value: zn("BeginGroup", t, void 0), map: Tr.map },
    (e) => K(at("Return", e), ft)
  ),
  j(
    "CatCons",
    () => {
      const e = () => K(
        at(
          "Bind",
          { type: "scene", value: zn("EndGroup", t, void 0), map: Tr.map },
          (r) => K(at("Return", r), ft)
        ),
        ft
      );
      return K(
        n._1,
        (() => {
          if (n._2.tag === "CatNil")
            return j("CatCons", e, V(R, R));
          if (n._2.tag === "CatCons")
            return j(
              "CatCons",
              n._2._1,
              V(
                n._2._2._1,
                xt("Cons", j("CatCons", e, V(R, R)), n._2._2._2)
              )
            );
          f();
        })()
      );
    },
    V(R, R)
  )
), eo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, b1 = /* @__PURE__ */ N(mr)(0), k1 = (t) => (n) => (e) => {
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
}, S5 = /* @__PURE__ */ N((t) => (n) => t + n.len)(0), jm = (t) => {
  const n = Rt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(Ft(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, E5 = (t) => (n) => {
  const e = eo(n)(eo(t.w / 2)(t.h / 2));
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
}, P5 = (t) => {
  const n = Rt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, Vo = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return Lm(n);
  if (t.shape === "Parallelogram")
    return Jm(n);
  if (t.shape === "Diamond")
    return Pm(n);
  if (t.shape === "Ellipse")
    return Cm(n);
  if (t.shape === "Document")
    return bm(n);
  if (t.shape === "Cloud")
    return Am(n)(7);
  if (t.shape === "Rectangle")
    return E5(n)(7);
  f();
}, Un = (t) => (n) => (e) => B((r) => {
  const o = tt(r) / tt(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(Zt(0, e - 1 | 0)), A5 = (t) => {
  const n = He(t.w * 0.18)(t.h * 0.6);
  return [
    ...Un({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...Un({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...Un({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...Un({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, B0 = (t) => (n) => {
  const e = eo(t)(eo(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, D0 = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return _e(r * r + e * e);
}, R5 = (t) => Gn((n) => (e) => ({ a: n, b: e, len: D0(n)(e) }), t, Ft(1, t.length, t)), F5 = (t) => (n) => {
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
    ...wt(Zt(1, u - 2 | 0))((a) => {
      const c = a + 1 | 0, l = c >= 0 && c < n.length ? T("Just", n[c]) : x, d = a >= 0 && a < n.length ? T("Just", n[a]) : x, _ = a - 1 | 0, g = _ >= 0 && _ < n.length ? T("Just", n[_]) : x;
      if (g.tag === "Just" && d.tag === "Just" && l.tag === "Just") {
        const p = d._1, $ = D0(p)(l._1), h = D0(g._1)(p), m = eo(t)($ / 2), y = eo(t)(h / 2), v = $ > 0 ? m / $ : 0, w = p.x + (l._1.x - p.x) * v, C = p.y + (l._1.y - p.y) * v, J = h > 0 ? y / h : 0, k = p.x + (g._1.x - p.x) * J, E = p.y + (g._1.y - p.y) * J;
        return B((L) => {
          const I = tt(L) / tt(10), H = 1 - I;
          return { x: H * H * k + 2 * H * I * p.x + I * I * w, y: H * H * E + 2 * H * I * p.y + I * I * C };
        })(Zt(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, G5 = (t) => (n) => (e) => (r) => (o) => B((i) => {
  const s = tt(i) / tt(o), u = 1 - s, a = s * s * s, c = 3 * u * s * s, l = 3 * u * u * s, d = u * u * u;
  return { x: d * t.x + l * n.x + c * e.x + a * r.x, y: d * t.y + l * n.y + c * e.y + a * r.y };
})(Zt(0, o - 1 | 0)), I5 = (t) => [
  ...Un({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...Un({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...G5({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...Un({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], L1 = (t) => (n) => B((e) => {
  const r = 6.283185307179586 * tt(e) / tt(64);
  return { x: t.x + n * ie(r), y: t.y + n * se(r) };
})(Zt(0, 63)), Zm = (t) => (n) => {
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
}, B5 = (t) => {
  const n = t.y + t.h / 2, e = He(t.h * 0.4)(t.w * 0.2);
  return [
    ...Un({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...Un({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...Un({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...Un({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...Un({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...Un({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, Ng = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: b1(B((e) => e.x)(t)) / tt(n), y: b1(B((e) => e.y)(t)) / tt(n) };
}, oa = (t) => (n) => (e) => (r) => (o) => B((i) => {
  const s = e + (r - e) * (tt(i) / tt(o));
  return { x: t.x + n * ie(s), y: t.y + n * se(s) };
})(Zt(0, o - 1 | 0)), z0 = (t) => (n) => {
  const e = eo(t)(eo(n.w / 2)(n.h / 2));
  return [
    ...Un({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...oa({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...Un({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...oa({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...Un({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...oa({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...Un({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...oa({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, nc = (t) => (n) => (e) => (r) => (o) => (i) => B((s) => {
  const u = r + (o - r) * (tt(s) / tt(i));
  return { x: t.x + n * ie(u), y: t.y + e * se(u) };
})(Zt(0, i - 1 | 0)), D5 = (t) => {
  const n = t.h * 0.38;
  return [
    ...wt(Em(Sm(km)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = mi(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = mi(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return nc({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...Un({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...Un({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...Un({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, z5 = (t) => {
  const n = eo(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...nc({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...Un({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...nc({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...Un({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, Fi = (t) => (n) => n.shape === "Cylinder" ? z5(n) : n.shape === "Parallelogram" ? A5(n) : n.shape === "Diamond" ? B5(n) : n.shape === "Ellipse" ? z0(He(n.w)(n.h) / 2)(n) : n.shape === "Document" ? I5(n) : n.shape === "Cloud" ? D5(n) : z0(t)(n), H5 = (t) => {
  const n = eo(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return nc({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, W5 = (t) => (n) => (e) => N((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, a = n > r.pos ? (n - r.pos) / o.len : 0, c = { x: o.a.x + (o.b.x - o.a.x) * a, y: o.a.y + (o.b.y - o.a.y) * a }, l = r.points.length - 1 | 0, d = l >= 0 && l < r.points.length ? (() => {
    const _ = r.points[l].x - c.x;
    return (_ < 0 ? -_ < 1e-4 : _ < 1e-4) && (() => {
      const g = r.points[l].y - c.y;
      return g < 0 ? -g < 1e-4 : g < 1e-4;
    })();
  })() ? Lt(r.points)(u) : [...r.points, c, u] : [c, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: d };
})({ pos: 0, points: [] })(t).points, Q5 = (t) => (n) => (e) => {
  const r = Rt((o) => x, (o) => (i) => T("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = R5(t), i = S5(o), s = k1(0)(i)(n * i), u = k1(0)(i)(e * i);
    return u <= s ? [] : W5(o)(s)(u);
  }
  f();
}, O5 = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, a = e.x - t.x, c = e.y - t.y, l = s * i - u * o, d = (a * i - c * o) / l, _ = (a * u - c * s) / l;
  return (l < 0 ? -l < 1e-9 : l < 1e-9) ? x : d >= 0 && d <= 1 && _ >= 0 && _ <= 1 ? T("Just", d) : x;
}, q5 = (t) => (n) => (e) => {
  const r = Bt((o) => (i) => st.compare(o.t)(i.t))(Tt((o) => {
    const i = O5(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? T("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : x;
  })(Gn(Kn, t, [...Ft(1, t.length, t), ...Ft(0, 1, t)])));
  return 0 < r.length ? T("Just", r[0].p) : x;
}, S1 = (t) => (n) => {
  const e = ur(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = q5(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return Lt(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, Do = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, H0 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, X5 = (t) => (n) => (e) => {
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
}, M5 = (t) => (n) => {
  const e = Do(0)(t.y + 4 - n.y) + Do(0)(n.y + n.h - (t.y + t.h - 4)), r = Do(0)(t.x + 4 - n.x) + Do(0)(n.x + n.w - (t.x + t.w - 4));
  return r * n.h + e * n.w + r * e;
}, U5 = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = N(Do)(0)(B((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? H0((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, Y5 = (t) => (n) => {
  const e = H0(t.x + t.w)(n.x + n.w) - Do(t.x)(n.x), r = H0(t.y + t.h)(n.y + n.h) - Do(t.y)(n.y);
  return t.x < n.x + n.w && t.x + t.w > n.x && t.y < n.y + n.h && t.y + t.h > n.y ? e * r : 0;
}, E1 = (t) => (n) => (e) => (r) => {
  const o = t + 4, i = Do(0)(n - 8), s = o + i - e;
  return e <= i ? X5(o)(s)(r) : t + (n - e) / 2;
}, W0 = (t) => (n) => ({ ...n, x: E1(t.x)(t.w)(n.w)(n.x), y: E1(t.y)(t.h)(n.h)(n.y) }), K5 = (t) => {
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
}, V5 = (t) => (n) => (e) => (r) => (o) => {
  const i = o.y + o.h / 2 - e.token.y, s = o.y - r.y;
  return (() => {
    const u = o.x + o.w / 2 - e.token.x, a = o.x - r.x;
    return 1e6 * M5(t)(o) + 1e4 * N((c) => (l) => c + Y5(o)(l))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.y > e.token.y ? 100 : 0);
}, j5 = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = W0(t)(s);
    return { rect: u, score: V5(t)(n)(e)(r)(u) };
  }, i = Rt((s) => x, (s) => (u) => T("Just", { head: s, tail: u }), [r, e.rect, ...K5(e)]);
  if (i.tag === "Nothing")
    return W0(t)(r);
  if (i.tag === "Just")
    return N((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).rect;
  f();
}, Z5 = (t) => (n) => (e) => N((r) => (o) => {
  const i = U5(o.rect)(r.obstacles), s = i.x >= t.x + 4 && i.y >= t.y + 4 && i.x + i.w <= t.x + t.w - 4 && i.y + i.h <= t.y + t.h - 4 ? i : j5(t)(r.obstacles)(o)(i);
  return { acc: rt(F)(o.id)(s)(r.acc), obstacles: Lt(r.obstacles)(s) };
})({ acc: z, obstacles: n })(e).acc, Cg = (t) => t, po = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ni = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, tL = /* @__PURE__ */ ws(gl)(qt), nL = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, eL = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, P1 = /* @__PURE__ */ Cg("SegMove"), rL = /* @__PURE__ */ Cg("SegLine"), oL = /* @__PURE__ */ Cg("SegQuad"), A1 = { offset: 0.4, passes: 1, rMax: 1.5 }, t2 = (t) => mn(ar(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, ec = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, tf = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, vo = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Nu = /* @__PURE__ */ (() => {
  const t = N((n) => (e) => ((n * 31 | 0) + mn(ar(e.x * 100)) | 0) + mn(ar(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), iL = (t) => {
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
            const a = o + 1 | 0;
            return a >= 0 && a < t.length ? t[a] : 0;
          })(),
          y: (() => {
            const a = o + 2 | 0;
            return a >= 0 && a < t.length ? t[a] : 0;
          })()
        };
        n.push({ kind: P1, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
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
        n.push({ kind: rL, m: i, c: i, p: u, len: _e(a * a + c * c) }), r = u, e = o + 3 | 0;
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
          kind: oL,
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
          len: _e(a * a + c * c) * 1.05
        }), r = u, e = o + 5 | 0;
        continue;
      }
      if (s._1 === 5) {
        n.push({ kind: P1, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, sL = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : Ft(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? T("Just", r[s]) : x;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, a = _e(u * u + s * s);
    return a <= 1e-4 ? n : Lt((() => {
      const c = n.length - 1 | 0;
      return c < 1 ? [] : Ft(0, c, n);
    })())({ x: n[i].x + u / a * t, y: n[i].y + s / a * t });
  }
  return n;
}, uL = (t) => (n) => (e) => un(N((r) => (o) => {
  const i = Mn(0)(t)(r.prng), s = Mn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * ie(s.value), y: o.y + i.value * se(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), aL = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return tf(t)(n.p);
  if (n.kind === "SegLine")
    return vo(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return vo(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, cL = (t) => (n) => {
  if (n.kind === "SegMove")
    return tf(t)(n.p);
  if (n.kind === "SegLine")
    return vo(t)(n.p);
  if (n.kind === "SegQuad")
    return ec(t)(n.c)(n.p);
  f();
}, n2 = (t) => (n) => {
  const e = iL(n), r = N((u) => (a) => u + a.len)(0)(e) * po(0)(Ni(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, a = i;
    if (u >= 0 && u < e.length) {
      if (a + e[u].len <= r) {
        const c = e[u];
        cL(o)(c)(), i = a + c.len, s = u + 1 | 0;
        continue;
      }
      if (a >= r) {
        s = e.length;
        continue;
      }
      aL(o)(e[u])((r - a) / po(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, R1 = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, e2 = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = _e(s * s + o * o), a = e.x - n.x, c = _e(a * a + i * i), l = Ni(t.rMax * (dx(c > 0 && u > 0 ? po(-1)(Ni(1)((a * s + i * o) / (c * u))) : 1) / 3.141592653589793))(0.4 * Ni(c)(u));
  return { inP: c > 0 ? { x: e.x - a / c * l, y: e.y - i / c * l } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * l, y: e.y + o / u * l } : e };
}, r2 = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? T("Just", n[0]) : x;
  if (o.tag === "Just" ? tf(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, a = u + 1 | 0;
      if (a >= 0 && a < n.length) {
        if (u >= 0 && u < n.length) {
          const c = u - 1 | 0;
          if (c >= 0 && c < n.length) {
            const l = e2(t)(n[c])(n[u])(n[a]);
            vo(r)(l.inP)(), ec(r)(l.curr)(l.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && vo(r)(n[i])(), r;
}, fL = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return r2(t)(o);
  const i = 0 < o.length ? T("Just", o[0]) : x, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, a = No(No(n)(u) + u | 0)(u), c = (g) => {
    const p = No(g + u | 0)(u);
    return p >= 0 && p < o.length ? o[p] : s;
  }, l = B((g) => e2(t)(c((a + g | 0) - 1 | 0))(c(a + g | 0))(c((a + g | 0) + 1 | 0)))(Zt(
    0,
    u - 1 | 0
  )), d = [], _ = 0 < l.length ? T("Just", l[0]) : x;
  if (_.tag === "Just")
    if (tf(d)(_._1.outP)(), tL((() => {
      const g = Rt((p) => x, (p) => ($) => T("Just", $), l);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })())((g) => {
      const p = vo(d)(g.inP);
      return () => (p(), ec(d)(g.curr)(g.outP)());
    })(), e)
      vo(d)(_._1.inP)(), ec(d)(_._1.curr)(_._1.outP)(), d.push(5);
    else {
      const g = l.length - 1 | 0;
      g >= 0 && g < l.length ? vo(d)((() => {
        const p = 1 - r;
        return { x: l[g].outP.x + (_._1.inP.x - l[g].outP.x) * p, y: l[g].outP.y + (_._1.inP.y - l[g].outP.y) * p };
      })())() : vo(d)(_._1.inP)();
    }
  else _.tag === "Nothing" || f();
  return d;
}, cs = (t) => (n) => (e) => (r) => {
  const o = nL(1)(r.length - 1 | 0), i = Mn(0)(tt(o))(R0("shape")(n)), s = eL(o - 1 | 0)(mn(ar(i.value))), u = i.prng;
  return B((a) => {
    const c = Mn(0)(1)(R0(en(a))(u)), l = Mn(-0.18)(0.3)(c.prng), d = c.value < 0.7, _ = Mn(0.5)(0.85)(l.prng), g = uL(t.offset)(_.prng)(r);
    return { path: e ? fL(t)(s)(d)(l.value)(g) : r2(t)(g), alpha: _.value };
  })(Zt(0, t.passes - 1 | 0));
}, lL = (t) => (n) => (e) => cs(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), gL = (t) => (n) => (e) => {
  const r = po(0)(Ni(1)(e)), o = n.h / tt(4), i = po(6)(o * 1.4);
  return Tt((s) => s)(B((s) => {
    if (r < po(0)(tt(s) / tt(4) - 0.05))
      return x;
    const u = R0(en(s))(t), a = po(0)(tt(s) / tt(4) - 0.05), c = No(s)(2) === 0, l = c ? n.x - 2 : n.x + n.w + 2, d = c ? n.x + n.w + 2 : n.x - 2, _ = n.y + (tt(s) + 0.5) * o;
    return T(
      "Just",
      {
        path: n2(po(0)(Ni(1)((r - a) / po(1e-4)(Ni(1)(tt(s + 1 | 0) / tt(4) + 0.05) - a))))((() => {
          const g = { rMax: 2, offset: 0.6, passes: 1 }, p = un(N((h) => (m) => {
            const y = Mn(-o * 0.08)(o * 0.08)(h.prng);
            return { prng: y.prng, out: [{ x: l + (d - l) * (tt(m) / tt(4)), y: _ + y.value }, ...h.out] };
          })({ prng: u, out: [] })(Zt(0, 4)).out), $ = p.length < 2 ? [] : cs(g)(u)(!1)(p);
          return 0 < $.length ? $[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(Zt(0, 3)));
}, Mf = (t, n, e) => ({ tag: t, _1: n, _2: e }), Bs = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), o2 = (t) => t, Q0 = (t) => (n) => (e) => {
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
}, me = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, nr = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ge = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), _L = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ci = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, pn = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, dL = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Fr = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, hL = qt.foldMap(Sx), nf = Lo.traverse(Uo), xs = /* @__PURE__ */ N(mr)(0), i2 = /* @__PURE__ */ dn(F)(qt), pL = /* @__PURE__ */ _h(F), mL = (t) => (e) => {
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
}, $L = /* @__PURE__ */ dn(F)(qt), s2 = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, O0 = /* @__PURE__ */ o2("FullTokenGeometry"), yL = /* @__PURE__ */ o2("ConvexInsideGeometry"), Gi = (t) => {
  const n = t.Apply0();
  return (e) => N((r) => (o) => n.apply(n.Functor0().map((i) => cl)(r))(e(o)))(t.pure());
}, sr = /* @__PURE__ */ Gi(Uo), u2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, a = Tu(o)(i)(r), c = 0 < t.length ? T("Just", t[0]) : x, l = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    f();
  })(), d = t.length - 1 | 0, _ = d >= 0 && d < t.length ? T("Just", t[d]) : x, g = (() => {
    if (_.tag === "Just")
      return _._1;
    if (_.tag === "Nothing")
      return s;
    f();
  })(), p = l.x - u.x, $ = 2 * (() => {
    const J = l.y - u.y;
    return (p < 0 ? -p : p) + (J < 0 ? -J : J);
  })(), h = g.x - s.x, m = 2 * (() => {
    const J = g.y - s.y;
    return (h < 0 ? -h : h) + (J < 0 ? -J : J);
  })(), y = $ + Fc(t) + m, v = y <= 1e-4 ? 1 : 1 - m / y, w = y <= 1e-4 ? 0 : $ / y, C = v - w;
  return {
    progress: a,
    morphOutEnd: w,
    morphInStart: v,
    outT: (() => {
      if (w <= 1e-4)
        return 1;
      const J = a / w, k = J < 0 ? 0 : J > 1 ? 1 : J;
      return k * k * (3 - 2 * k);
    })(),
    inT: (() => {
      if (v >= 1)
        return 0;
      const J = (a - v) / (1 - v), k = J < 0 ? 0 : J > 1 ? 1 : J;
      return k * k * (3 - 2 * k);
    })(),
    pathStart: l,
    pathEnd: g,
    travelPt: (() => {
      const J = ms(t)(Q0(0)(1)(C <= 1e-4 ? 0 : (a - w) / C));
      if (J.tag === "Just")
        return J._1;
      if (J.tag === "Nothing")
        return l;
      f();
    })()
  };
}, a2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = u2(t)(n)(e)(r)(o)(i), u = w1(128)(Fi(4)(n))(L1(s.pathStart)(6)), a = w1(128)(L1(s.pathEnd)(6))(Fi(4)(e)), c = { maxDelay: 0.4, smoothPasses: 2 };
  return s.progress < s.morphOutEnd ? di("PolyShape", C1(s.outT)(u.from)(u.to)(c)) : s.progress >= s.morphInStart ? di("PolyShape", C1(s.inT)(a.from)(a.to)(c)) : di("CircleShape", s.travelPt, 6);
}, Jg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = a2(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return Ng(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, F1 = (t) => (n) => (e) => (r) => me(t)(e - 0.5) <= nr(n)(r + 0.5), xL = (t) => {
  const n = (e) => {
    const r = Vt((o) => e.x >= o._2.x - 1 && e.x <= o._2.x + o._2.w + 1 && e.y >= o._2.y - 1 && e.y <= o._2.y + o._2.h + 1)(ge(t.nodes));
    return r.tag === "Just" ? T("Just", r._1._2) : x;
  };
  return (e) => {
    const r = (() => {
      if (0 < e.length) {
        const i = n(e[0]);
        if (i.tag === "Just")
          return un(S1(Fi(7)(i._1))(un(e)));
      }
      return e;
    })(), o = r.length - 1 | 0;
    if (o >= 0 && o < r.length) {
      const i = n(r[o]);
      if (i.tag === "Just")
        return S1(Fi(7)(i._1))(r);
    }
    return r;
  };
}, vL = (t) => (n) => {
  const e = ((t.bg.r + t.bg.g | 0) + t.bg.b | 0) < 384, r = e ? 90 : 104, o = e ? 165 : 122, i = (s) => _L(255)(Ci(0)(mn(Ge(o + r * se(n + s)))));
  return { r: i(0), g: i(-2.0943951023931953), b: i(-4.1887902047863905), a: 255 };
}, c2 = (t) => (n) => {
  if (t <= 0)
    return [];
  const e = Rt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return ve(e._1.head.text).length <= t ? [e._1.head, ...c2(t - ve(e._1.head.text).length | 0)(e._1.tail)] : [{ ...e._1.head, text: Yn(t)(e._1.head.text) }];
  f();
}, bg = /* @__PURE__ */ (() => {
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
        chipText: so,
        nodeFill: Ln,
        nodeStroke: so,
        text: so,
        edge: so,
        arrowFill: so,
        tokenOutsideFill: so,
        tokenOutsideStroke: Ln,
        tokenInside: Ln,
        tokenInsideStroke: Ln,
        tokenInsideBlend: pa,
        tokenInsideAlpha: 1,
        chipPillFill: so,
        chipPillText: Ln,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: so,
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
        nodeFill: so,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: Ln,
        tokenOutsideStroke: Ln,
        tokenInside: Ln,
        tokenInsideStroke: Ln,
        tokenInsideBlend: pa,
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
        shadowDot: Ln,
        chip: Ln,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: Ln,
        text: Ln,
        edge: Ln,
        arrowFill: Ln,
        tokenOutsideFill: Ln,
        tokenOutsideStroke: Ln,
        tokenInside: Ln,
        tokenInsideStroke: Ln,
        tokenInsideBlend: y1,
        tokenInsideAlpha: 0.35,
        chipPillFill: Ln,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: Ln,
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
        tokenInsideBlend: y1,
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
        tokenOutsideStroke: Ln,
        tokenInside: Ln,
        tokenInsideStroke: Ln,
        tokenInsideBlend: pa,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: Ln,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    f();
  };
})(), q0 = (t) => (n) => wt(ge(t))((e) => {
  const r = pn(e._1)(n.nodes);
  return r.tag === "Just" && ei(r._1).alpha > 0 ? Vo(e._2) : [];
}), TL = (t) => (n) => (e) => [
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
  ...q0(n)(e)
], wL = (t) => (n) => (e) => {
  const r = (o, i) => mn(Ge(tt(o) + (tt(i) - tt(o)) * e));
  return { r: r(t.r, n.r), g: r(t.g, n.g), b: r(t.b, n.b), a: r(t.a, n.a) };
}, NL = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = Lo.traverse(r);
  return (i) => (s) => {
    const u = Me(s), a = 0.32 * i.size;
    return o((c) => e.bind(c === 0 ? r.pure(0) : t.measureText(i)(Yn(c)(s)))((l) => e.bind(t.measureText(i)(Yn(c + 1 | 0)(s)))((d) => e.bind(t.measureInk(i)(c >= 0 && c < u.length ? yr(u[c]) : " "))((_) => r.pure({ x: l, w: d - l, up: _.ascent - a, down: _.descent + a })))))(Zt(
      0,
      u.length - 1 | 0
    ));
  };
}, f2 = (t) => [
  ...Vo({ ...t, x: t.x - 1.25, y: t.y - 1.25, w: t.w + 2.5, h: t.h + 2.5 }),
  ...Vo({ ...t, y: t.y - 5 })
], CL = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = N((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return B((o) => {
    const i = tt(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, eu = (t) => (n) => (e) => {
  const r = dL(en(n) + ":" + en(e))(t);
  if (r.tag === "Nothing")
    return 0;
  if (r.tag === "Just")
    return r._1;
  f();
}, JL = (t) => (n) => {
  const e = n.length;
  return N((r) => (o) => N((i) => (s) => rt(F)(en(o) + ":" + en(s))(s >= 0 && s < n.length && o >= 0 && o < t.length ? t[o] === n[s] ? 1 + eu(i)(o + 1 | 0)(s + 1 | 0) | 0 : Ci(eu(i)(o + 1 | 0)(s))(eu(i)(o)(s + 1 | 0)) : 0)(i))(r)(e <= 0 ? [] : un(Zt(0, e - 1 | 0))))(z)((() => {
    const r = t.length;
    return r <= 0 ? [] : un(Zt(0, r - 1 | 0));
  })());
}, X0 = (t) => pr(t), bL = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = u2(t)(n)(e)(r)(o)(i);
  return s.progress < s.morphOutEnd ? Mf("InsideRect", B0(2)(n)) : s.progress >= s.morphInStart ? Mf("InsideRect", B0(2)(e)) : Mf("InsideBall", s.travelPt, 6);
}, M0 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = (c, l) => Vm({
    id: c,
    pass: t,
    geometry: Hm("FlatToken", l),
    position: (() => {
      if (l.tag === "CircleShape")
        return l._1;
      if (l.tag === "PolyShape")
        return Ng(l._1);
      f();
    })(),
    plan: Qm("FlatTokenPlan", { wobble: e, fill: s, stroke: u })
  });
  return sr((c) => {
    if (c._2.tag === "Travelling") {
      const l = pn(c._2._1.target)(r), d = pn(c._2._1.source)(r);
      if (d.tag === "Just" && l.tag === "Just") {
        const _ = Fr(c._2._1.edge)(o);
        if (_.tag === "Just") {
          const g = (() => {
            if (c._2._1.direction === "Forward")
              return _._1;
            if (c._2._1.direction === "Backward")
              return un(_._1);
            f();
          })();
          return a(
            c._1,
            (() => {
              if (n === "FullTokenGeometry")
                return a2(g)(d._1)(l._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost);
              if (n === "ConvexInsideGeometry") {
                const p = bL(g)(d._1)(l._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost);
                if (p.tag === "InsideRect")
                  return di("PolyShape", z0(4)(p._1));
                if (p.tag === "InsideBall")
                  return di("CircleShape", p._1, p._2);
              }
              f();
            })()
          );
        }
        if (_.tag === "Nothing") {
          const g = Tu(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.progress), p = { x: d._1.x + d._1.w / 2, y: d._1.y + d._1.h / 2 }, $ = { x: l._1.x + l._1.w / 2, y: l._1.y + l._1.h / 2 };
          return Hn({
            path: [],
            role: we,
            layer: x,
            effects: [
              Nn(
                "GroupAlpha",
                (() => {
                  if (g < 0.5) {
                    const m = g * 2;
                    return 1 - me(0)(nr(1)(m)) * me(0)(nr(1)(m)) * (3 - 2 * me(0)(nr(1)(m)));
                  }
                  const h = (g - 0.5) * 2;
                  return me(0)(nr(1)(h)) * me(0)(nr(1)(h)) * (3 - 2 * me(0)(nr(1)(h)));
                })()
              )
            ]
          })(a(c._1, di("CircleShape", g < 0.5 ? p : $, 6)));
        }
        f();
      }
      return K(at("Return", void 0), ft);
    }
    if (c._2.tag === "Filling") {
      if (e)
        return K(at("Return", void 0), ft);
      const l = pn(c._2._1.node)(r);
      if (l.tag === "Just")
        return a(
          c._1,
          di(
            "PolyShape",
            Fi(4)(n === "ConvexInsideGeometry" ? B0(2)(l._1) : l._1)
          )
        );
      if (l.tag === "Nothing")
        return K(at("Return", void 0), ft);
      f();
    }
    return K(at("Return", void 0), ft);
  })(ge(i.tokens));
}, kL = (t) => {
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
}, l2 = (t) => (n) => (e) => (r) => Hn({
  path: [],
  role: we,
  layer: x,
  effects: [
    Nn("GroupAlpha", e.fadeAlpha),
    Nn(
      "GroupTransform",
      wi,
      { tx: t.x * (1 - e.popScale), ty: (t.y + t.h) * (1 - e.popScale), sx: e.popScale, sy: e.popScale }
    ),
    Nn(
      "GroupTransform",
      wi,
      { tx: 0, ty: n.y * (1 - e.flipY), sx: 1, sy: e.flipY }
    )
  ]
})(Qi(r)), LL = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = (l) => (d) => {
    const _ = Rt((g) => x, (g) => (p) => T("Just", { head: g, tail: p }), d);
    if (_.tag === "Nothing")
      return K(at("Return", void 0), ft);
    if (_.tag === "Just") {
      const g = _._1, p = So(i)(yr(g.head)), $ = (h) => {
        const m = Qi({
          owner: Po("NodeText", o),
          text: yr(g.head),
          spec: {
            x: l,
            y: u - e * i.size * 0.11 * se(n * 5 - l * 0.22),
            content: yr(g.head),
            font: i,
            color: wL(r.text)(vL(r)(n * 2.2 + l * 0.16))(e),
            align: Yo,
            baseline: ze
          },
          bounds: x,
          plan: t
        });
        return K(
          m._1,
          (() => {
            if (m._2.tag === "CatNil")
              return j("CatCons", () => c(l + h)(g.tail), V(R, R));
            if (m._2.tag === "CatCons")
              return j(
                "CatCons",
                m._2._1,
                V(
                  m._2._2._1,
                  xt(
                    "Cons",
                    j("CatCons", () => c(l + h)(g.tail), V(R, R)),
                    m._2._2._2
                  )
                )
              );
            f();
          })()
        );
      };
      return K(
        p._1,
        (() => {
          if (p._2.tag === "CatNil")
            return j("CatCons", $, V(R, R));
          if (p._2.tag === "CatCons")
            return j(
              "CatCons",
              p._2._1,
              V(
                p._2._2._1,
                xt("Cons", j("CatCons", $, V(R, R)), p._2._2._2)
              )
            );
          f();
        })()
      );
    }
    f();
  };
  return c(s)(Me(a));
}, g2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => s === "RunHighlight" || s === "RunCodeHighlight" ? LL(t)(n)(e)(r)(o)(i)(u)(a)(c) : Qi({
  owner: Po("NodeText", o),
  text: c,
  spec: { x: u, y: a, content: c, font: i, color: r.text, align: Yo, baseline: ze },
  bounds: x,
  plan: t
}), SL = (t) => (n) => (e) => (r) => (o) => (i) => (s) => l2(o)(i)(s)({
  owner: Po("TokenText", t),
  text: e,
  spec: {
    x: i.x,
    y: i.y,
    content: e,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipText,
    align: Eo,
    baseline: ze
  },
  bounds: T("Just", o),
  plan: Ri(
    "TokenFillingText",
    {
      shadow: { ...o, y: o.y + 1.5 },
      shadowFill: { color: n.chipShadow, flat: !0 },
      radius: 6,
      fill: { color: n.chip, flat: !0 },
      stroke: { color: n.chipHairline, width: 1, lineJoin: ue, lineCap: Ye },
      leader: [1, i.x, o.y + o.h, 2, r.x + r.w / 2, r.y]
    }
  )
}), EL = { offset: 0.8, passes: 2, rMax: 5 }, G1 = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Rt(
    (i) => x,
    (i) => (s) => T("Just", { head: i, tail: s }),
    B((i) => i.pt)(ax(
      (i) => (s) => {
        const u = tt(s) / tt(72), a = Mn(-0.18)(0.18)(i.prng), c = Mn(-0.1)(0.1)(a.prng), l = Mn(-0.07)(0.07)(c.prng), d = e * (0.05 + 0.55 * u) * (1 + c.value), _ = u * 28.274333882308138 + a.value;
        return { prng: l.prng, pt: { x: n.x + ie(_) * d + l.value * e, y: n.y + se(_) * d + l.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      Zt(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...hL((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: ue, lineCap: vr }), PL = (t) => {
  const n = t.Monad0().Applicative0();
  return (e) => {
    if (e.geometry.tag === "FlatToken" && e.plan.tag === "FlatTokenPlan") {
      if (e.geometry._1.tag === "CircleShape")
        return e.plan._1.wobble ? G1(t)(e.geometry._1._1)(e.geometry._1._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(Zm(e.geometry._1._1)(e.geometry._1._2))({
          color: e.plan._1.fill,
          flat: !0
        })({ color: e.plan._1.stroke, width: 1, lineJoin: ue, lineCap: Ye });
      if (e.geometry._1.tag === "PolyShape")
        return e.plan._1.wobble && e.geometry._1._1.length >= 3 ? G1(t)(Ng(e.geometry._1._1))(6)({ r: 200, g: 35, b: 30, a: 220 }) : e.geometry._1._1.length >= 3 ? t.fillStrokePath(jm(e.geometry._1._1))({ color: e.plan._1.fill, flat: !0 })({
          color: e.plan._1.stroke,
          width: 1,
          lineJoin: ue,
          lineCap: Ye
        }) : n.pure();
      f();
    }
    return n.pure();
  };
}, AL = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popClip, i = t.popTransform, s = t.popAlpha;
  return (u) => (a) => (c) => (l) => (d) => {
    const _ = ei(d), g = c * _.alpha, p = { ...l, y: l.y + 5 }, $ = l.x + l.w / 2, h = l.y + l.h / 2, m = f2(p), y = r.bind(t.pushAlpha(g))(() => r.bind(t.pushTransform({
      tx: $ * (1 - _.scale),
      ty: h * (1 - _.scale),
      sx: _.scale,
      sy: _.scale
    }))(() => r.bind(t.pushClip(m)(yg))(() => r.bind(Ti(t)(p.shape)({
      x: p.x,
      y: p.y,
      w: p.w,
      h: p.h
    })(7)(T("Just", { color: u.shadowFill, flat: !0 }))(x))(() => r.bind((() => {
      const v = r.bind(t.pushClip(Vo(p))(Ko))(() => r.bind(t.backgroundDots({
        viewport: { vx: p.x, vy: p.y, vw: p.w, vh: p.h },
        bgColor: u.bgTransparent,
        dotColor: u.shadowDot,
        tile: 1.6,
        dotRadius: 0.25,
        origin: { x: 0, y: 0 }
      }))(() => o));
      return a && !u.wobble ? v : e.pure();
    })())(() => r.bind(Ti(t)(p.shape)({ x: p.x, y: p.y, w: p.w, h: p.h })(7)(x)(T(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: ue, lineCap: Ye }
    )))(() => r.bind(o)(() => r.bind(i)(() => s))))))));
    return g > 0 && !u.wobble ? y : e.pure();
  };
}, RL = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = Gi(n.Applicative0());
  return (i) => (s) => (u) => o((a) => e.bind(t.pushAlpha(a.alpha))(() => e.bind(t.strokePath(a.path)({
    color: i.nodeFill,
    width: a.width,
    lineJoin: ue,
    lineCap: vr
  }))(() => r)))(gL(t2(s) + 7777 | 0)(s)(u));
}, FL = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = Gi(o), s = t.popClip, u = Gi(o), a = Lo.traverse(o), c = NL(t), l = RL(t), d = t.popTransform;
  return (_) => (g) => (p) => ($) => (h) => (m) => (y) => (v) => (w) => (C) => {
    const J = (A) => e.bind(t.pushAlpha(A.alpha))(() => e.bind(t.strokePath(A.path)({
      color: p.nodeStroke,
      width: 2,
      lineJoin: ue,
      lineCap: vr
    }))(() => r)), k = { family: p.fontFamily, size: p.wobble ? 15 : 11, weight: p.wobble ? 800 : 500 }, E = pr(w.label === "" ? v : w.label), L = k.size * 1.2, I = w.shape === "Cylinder" ? t.strokePath(Ok({ x: w.x, y: w.y, w: w.w, h: w.h }))({
      color: p.nodeStroke,
      width: 1.25,
      lineJoin: ue,
      lineCap: Ye
    }) : o.pure(), H = (w.shape === "Cylinder" ? (w.y + (w.y + w.h + 5 - 2 * He(w.h * 0.075)(w.w * 0.075))) / 2 : (w.y + w.y + w.h) / 2) - tt(E.length) * L / 2 + L / 2, G = C.tag === "PloppingOut" && p.wobble ? C._1 : -1, O = G >= 0, ut = ei(C), ot = O ? { alpha: 1, scale: 1 } : ut, Z = w.x + w.w / 2, U = w.y + w.h / 2, P = e.bind(t.pushAlpha(ot.alpha))(() => e.bind(t.pushTransform({
      tx: Z * (1 - ot.scale),
      ty: U * (1 - ot.scale),
      sx: ot.scale,
      sy: ot.scale
    }))(() => {
      const A = { x: w.x, y: w.y, w: w.w, h: w.h }, Q = {
        color: p.nodeStroke,
        width: p.wobble ? 2 : 1.25 * g,
        lineJoin: ue,
        lineCap: p.wobble ? vr : Ye
      }, D = (() => {
        if (p.wobble) {
          if (w.shape === "Rectangle")
            return i(J)(lL(R1)(t2(A))(A));
          const M = Fi(7)(w);
          return e.bind(i(J)((() => {
            const Y = Nu(M);
            return M.length < 4 ? [] : cs(A1)(Y)(!0)(M);
          })()))(() => u((Y) => i(J)((() => {
            const q = Nu(Y);
            return Y.length < 2 ? [] : cs(A1)(q)(!1)(Y);
          })()))(w.shape === "Cylinder" ? [H5(w)] : []));
        }
        return e.bind(Ti(t)(w.shape)(A)(7)(x)(T("Just", Q)))(() => I);
      })();
      return e.bind((() => {
        if (h.tag === "Nothing")
          return e.bind(t.pushAlpha($))(() => e.bind(p.wobble ? D : e.bind(Ti(t)(w.shape)(A)(7)(T("Just", { color: p.nodeFill, flat: !1 }))(T(
            "Just",
            Q
          )))(() => I))(() => e.bind((() => {
            if (y.tag === "Just" && p.wobble && !O) {
              const M = y._1;
              return e.bind(a(c(k))(E))((Y) => {
                const q = Bt((mt) => (kt) => st.compare(mt.x)(kt.x)), X = mn(ar(w.x * 7919 + w.y * 3001)) * -1640531535 | 0, W = Mn(5)(7.5)(X), nt = Mn(0)(W.value)(W.prng), et = -(1 + 2 * Mn(-1)(1)(nt.prng).value * 3.141592653589793 / 180), it = (mt, kt, Dt, zt, rn) => q(Tt((fn) => fn)([
                  et * kt + mt >= zt && et * kt + mt <= rn ? T("Just", { x: kt, y: et * kt + mt }) : x,
                  et * Dt + mt >= zt && et * Dt + mt <= rn ? T("Just", { x: Dt, y: et * Dt + mt }) : x,
                  (() => {
                    const fn = (zt - mt) / et;
                    return fn >= kt && fn <= Dt ? T("Just", { x: fn, y: zt }) : x;
                  })(),
                  (() => {
                    const fn = (rn - mt) / et;
                    return fn >= kt && fn <= Dt ? T("Just", { x: fn, y: rn }) : x;
                  })()
                ])), lt = W.value, gt = No(M.frameHash)(3), pt = gt === 0 ? { r: 200, g: 35, b: 30, a: 220 } : gt === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, St = w.x + w.w / 2, Gt = De(Qt((mt) => (kt) => Qt((() => {
                  const Dt = H + tt(mt) * L, zt = St - N((rn) => (fn) => rn + fn.w)(0)(kt) / 2;
                  return (rn) => (fn) => {
                    const ye = k.size * 0.1, On = rn - 1 | 0, Yt = On >= 0 && On < kt.length && rn > 0 ? (kt[On].x + kt[On].w + fn.x) / 2 : fn.x - ye;
                    return {
                      x: zt + Yt - 1,
                      y: Dt - fn.up - 1,
                      w: me(0)((() => {
                        const Mt = rn + 1 | 0;
                        return Mt >= 0 && Mt < kt.length && rn < (kt.length - 1 | 0) ? (fn.x + fn.w + kt[Mt].x) / 2 - Yt : fn.x + fn.w + ye - Yt;
                      })()) + 2,
                      h: fn.up + fn.down + 2
                    };
                  };
                })())(kt))(Y)), Wt = w.y + 4, $t = w.x + w.w - 4, At = w.x + 4, Nt = Wt - et * At + nt.value, Ct = w.y + w.h - 4, dt = wt(wt(Qt((mt) => (kt) => {
                  const Dt = (kt.from.x + kt.to.x) / 2, zt = (kt.from.y + kt.to.y) / 2, rn = Mn(-1)(1)(X + (911 * (mt + 1 | 0) | 0) | 0), fn = Mn(-3)(5)(rn.prng), ye = rn.value * 3.141592653589793 / 180, On = ie(ye), Yt = se(ye), Mt = (In) => ({ x: Dt + (In.x - Dt) * On - (In.y - zt) * Yt, y: zt + (In.x - Dt) * Yt + (In.y - zt) * On });
                  return {
                    from: (() => {
                      const In = Mt(kt.from), Fe = In.y - zt, de = In.x - Dt, fe = _e(de * de + Fe * Fe), We = fe < 1e-4 ? 1 : (fe + fn.value) / fe;
                      return { x: Dt + de * We, y: zt + Fe * We };
                    })(),
                    to: (() => {
                      const In = Mt(kt.to), Fe = Mn(-3)(5)(fn.prng).value, de = In.y - zt, fe = In.x - Dt, We = _e(fe * fe + de * de), ln = We < 1e-4 ? 1 : (We + Fe) / We;
                      return { x: Dt + fe * ln, y: zt + de * ln };
                    })()
                  };
                })(Tt((mt) => {
                  const kt = it(Nt + tt(mt) * lt, At, $t, Wt, Ct);
                  return kt.length === 2 ? T("Just", { from: kt[0], to: kt[1] }) : x;
                })(Zt(0, Ci(1)(mn(ar((Ct - et * $t - Nt) / lt)))))))((mt) => _t(
                  (kt) => kt.to.x - kt.from.x > 1,
                  N((kt) => (Dt) => wt(kt)((zt) => {
                    const rn = it(zt.from.y - et * zt.from.x, Dt.x, Dt.x + Dt.w, Dt.y, Dt.y + Dt.h);
                    return rn.length === 2 ? rn[0].x > zt.from.x + 1e-3 && rn[1].x < zt.to.x - 1e-3 ? [{ from: zt.from, to: rn[0] }, { from: rn[1], to: zt.to }] : rn[0].x <= zt.from.x + 1e-3 && rn[1].x < zt.to.x - 1e-3 ? [{ from: rn[1], to: zt.to }] : rn[0].x > zt.from.x + 1e-3 && rn[1].x >= zt.to.x - 1e-3 ? [{ from: zt.from, to: rn[0] }] : [] : [zt];
                  }))([mt])(Gt)
                )))((mt) => (() => {
                  const kt = mt.to.x - mt.from.x;
                  return _e(2) * (kt >= 0 ? kt : -kt) <= 28;
                })() ? [mt] : [
                  { from: mt.from, to: { x: mt.from.x + (mt.to.x - mt.from.x) * 0.495, y: mt.from.y + (mt.to.y - mt.from.y) * 0.495 } },
                  { from: { x: mt.from.x + (mt.to.x - mt.from.x) * 0.505, y: mt.from.y + (mt.to.y - mt.from.y) * 0.505 }, to: mt.to }
                ]), yt = dt.length, Et = (mt) => me(0)(nr(1)(M.t * tt(yt) - tt(mt)));
                return e.bind(t.pushClip(jm(Fi(7)(w)))(Ko))(() => e.bind(i((mt) => {
                  const kt = mt._1, Dt = Mn(1.4)(1.9)(X + (1303 * (kt + 1 | 0) | 0) | 0), zt = Mn(0.35)(0.8)(Dt.prng), rn = i((fn) => e.bind(t.pushAlpha(fn.alpha * zt.value))(() => e.bind(t.strokePath(n2(Et(kt))(fn.path))({
                    color: pt,
                    width: Dt.value,
                    lineJoin: ue,
                    lineCap: vr
                  }))(() => r)))(cs({
                    ...R1,
                    rMax: 0,
                    offset: 0.5
                  })(X + (53 * (kt + 1 | 0) | 0) | 0)(!1)([mt._2.from, mt._2.to]));
                  return Et(kt) > 0 ? rn : o.pure();
                })(Qt(Kn)(dt)))(() => s));
              });
            }
            return o.pure();
          })())(() => e.bind((() => {
            if (_ === "LabelsShown") {
              const M = e.bind(t.pushAlpha(m))(() => e.bind(i((Y) => t.drawText({
                x: w.x + w.w / 2,
                y: H + tt(Y._1) * L,
                content: Y._2,
                font: k,
                color: p.text,
                align: Eo,
                baseline: ze
              }))(Qt(Kn)(E)))(() => r));
              return m > 0 ? M : o.pure();
            }
            if (_ === "LabelsHidden")
              return o.pure();
            f();
          })())(() => e.bind((() => {
            const M = l(p)(A)(G);
            return O ? M : o.pure();
          })())(() => r)))));
        if (h.tag === "Just") {
          const M = h._1;
          return e.bind((() => {
            const Y = e.bind(t.pushAlpha($))(() => e.bind(Ti(t)(w.shape)(A)(7)(T(
              "Just",
              { color: p.nodeFill, flat: !1 }
            ))(x))(() => r));
            return $ > 0 && !p.wobble ? Y : o.pure();
          })())(() => {
            const Y = e.bind(t.pushAlpha(M))(() => e.bind(D)(() => r));
            return M > 0 ? Y : o.pure();
          });
        }
        f();
      })())(() => e.bind(d)(() => r));
    }));
    return ot.alpha * me($)((() => {
      if (h.tag === "Nothing")
        return $;
      if (h.tag === "Just")
        return h._1;
      f();
    })()) > 0 ? P : o.pure();
  };
}, GL = (t) => (n) => (e) => {
  const r = { family: t.fontFamily, size: 11, weight: 500 };
  return sr((o) => {
    if (o._2 === "" || (() => {
      const u = Fr(o._1)(e.edges);
      return u.tag === "Nothing" || !(u.tag === "Just" && Ew.eq(u._1)(sp));
    })())
      return K(at("Return", void 0), ft);
    const i = Fr(o._1)(n.edges), s = (() => {
      if (i.tag === "Just")
        return ms(i._1)(0.5);
      if (i.tag === "Nothing")
        return x;
      f();
    })();
    if (s.tag === "Nothing")
      return K(at("Return", void 0), ft);
    if (s.tag === "Just") {
      const u = s._1, a = So(r)(o._2), c = (l) => {
        const d = l + 12;
        return Qi({
          owner: Po("EdgeText", o._1),
          text: o._2,
          spec: {
            x: u.x,
            y: u.y,
            content: o._2,
            font: r,
            color: t.chipPillText,
            align: Eo,
            baseline: ze
          },
          bounds: T("Just", { x: u.x - d / 2, y: u.y - 8.5, w: d, h: 17 }),
          plan: Ri(
            "RoundedText",
            { radius: 3, fill: T("Just", { color: t.chipPillFill, flat: !0 }), stroke: x }
          )
        });
      };
      return K(
        a._1,
        (() => {
          if (a._2.tag === "CatNil")
            return j("CatCons", c, V(R, R));
          if (a._2.tag === "CatCons")
            return j(
              "CatCons",
              a._2._1,
              V(
                a._2._2._1,
                xt("Cons", j("CatCons", c, V(R, R)), a._2._2._2)
              )
            );
          f();
        })()
      );
    }
    f();
  })(ge(n.edgeLabels));
}, IL = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popClip, i = t.popTransform, s = t.popAlpha;
  return (u) => (a) => (c) => (l) => (d) => {
    const _ = ei(d), g = c * _.alpha, p = l.x + l.w / 2, $ = l.y - 5 + l.h / 2, h = f2(l), m = r.bind(t.pushAlpha(g))(() => r.bind(t.pushTransform({
      tx: p * (1 - _.scale),
      ty: $ * (1 - _.scale),
      sx: _.scale,
      sy: _.scale
    }))(() => r.bind(t.pushClip(h)(yg))(() => r.bind(Ti(t)(l.shape)({
      x: l.x,
      y: l.y,
      w: l.w,
      h: l.h
    })(7)(T("Just", { color: u.shadowFill, flat: !0 }))(x))(() => r.bind((() => {
      const y = r.bind(t.pushClip(Vo(l))(Ko))(() => r.bind(t.backgroundDots({
        viewport: { vx: l.x, vy: l.y, vw: l.w, vh: l.h },
        bgColor: u.bgTransparent,
        dotColor: u.shadowDot,
        tile: 1.6,
        dotRadius: 0.25,
        origin: { x: 0, y: 0 }
      }))(() => o));
      return a ? y : e.pure();
    })())(() => r.bind(Ti(t)(l.shape)({ x: l.x, y: l.y, w: l.w, h: l.h })(7)(x)(T(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: ue, lineCap: Ye }
    )))(() => r.bind(o)(() => r.bind(i)(() => s))))))));
    return g > 0 && !u.wobble ? m : e.pure();
  };
}, BL = (t) => {
  const n = AL(t), e = IL(t), r = FL(t);
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
        return r(wu)(o.plan._1.inkBoost)(o.plan._1.palette)(o.alpha)(o.plan._1.outlineAlpha)(0)(o.plan._1.arrival)(o.id)(i)(o.plan._1.animState);
      f();
    }
    return t.Monad0().Applicative0().pure();
  };
}, DL = (t) => (n) => {
  const e = Me(t), r = e.length, o = Me(n), i = o.length, s = JL(e)(o);
  return ((a) => (c) => (l) => {
    let d = a, _ = c, g = l, p = !0, $;
    for (; p; ) {
      const h = d, m = _, y = g;
      if (h >= r && m >= i) {
        p = !1, $ = un(y);
        continue;
      }
      if (h >= r) {
        if (m >= 0 && m < o.length) {
          d = h, _ = m + 1 | 0, g = [Bs("DiffInsert", m, o[m]), ...y];
          continue;
        }
        p = !1, $ = un(y);
        continue;
      }
      if (m >= i) {
        if (h >= 0 && h < e.length) {
          d = h + 1 | 0, _ = m, g = [Bs("DiffDelete", h, e[h]), ...y];
          continue;
        }
        p = !1, $ = un(y);
        continue;
      }
      if (m >= 0 && m < o.length) {
        if (h >= 0 && h < e.length) {
          if (e[h] === o[m]) {
            d = h + 1 | 0, _ = m + 1 | 0, g = [Bs("DiffKeep", h, m, e[h]), ...y];
            continue;
          }
          if (eu(s)(h + 1 | 0)(m) >= eu(s)(h)(m + 1 | 0)) {
            d = h + 1 | 0, _ = m, g = [Bs("DiffDelete", h, e[h]), ...y];
            continue;
          }
          d = h, _ = m + 1 | 0, g = [Bs("DiffInsert", m, o[m]), ...y];
          continue;
        }
        p = !1, $ = un(y);
        continue;
      }
      p = !1, $ = un(y);
    }
    return $;
  })(0)(0)([]);
}, _2 = (t) => (n) => (e) => (r) => (o) => sr((i) => {
  if (t.tag === "Just" && i._1 === t._1)
    return K(at("Return", void 0), ft);
  const s = pn(i._1)(o.nodes);
  if (s.tag === "Just") {
    const u = pn(i._1)(o.nodeLabels), a = (() => {
      if (u.tag === "Nothing")
        return i._2;
      if (u.tag === "Just") {
        if (u._1.tag === "StaticNodeLabel")
          return { ...i._2, label: u._1._1 === "" ? i._1 : u._1._1 };
        if (u._1.tag === "RelabelingNode")
          return {
            ...i._2,
            label: (() => {
              const c = u._1._1.progress < 0.5 ? u._1._1.oldLabel : u._1._1.newLabel;
              return c === "" ? i._1 : c;
            })()
          };
      }
      f();
    })();
    return Zc({
      id: i._1,
      role: N5,
      geometry: Yc("FlatNode", { shape: a.shape, bounds: { x: a.x, y: a.y, w: a.w, h: a.h } }),
      alpha: (() => {
        const c = pn(i._1)(o.nodeFadeAlpha), l = (() => {
          if (c.tag === "Nothing")
            return 1;
          if (c.tag === "Just")
            return c._1;
          f();
        })();
        return l < 1 ? 0 : l;
      })(),
      plan: Kc(
        "FlatNodePlan",
        {
          palette: n,
          label: (() => {
            const c = pn(i._1)(o.nodeLabels);
            if (c.tag === "Just") {
              if (c._1.tag === "StaticNodeLabel")
                return c._1._1 === "" ? i._1 : c._1._1;
              if (c._1.tag === "RelabelingNode") {
                const l = c._1._1.progress < 0.5 ? c._1._1.oldLabel : c._1._1.newLabel;
                return l === "" ? i._1 : l;
              }
              f();
            }
            if (c.tag === "Nothing")
              return a.label === "" ? i._1 : a.label;
            f();
          })(),
          labelVisibility: wu,
          inkBoost: e ? 1 : 0,
          labelAlpha: 0,
          outlineAlpha: x,
          arrival: x,
          animState: s._1
        }
      )
    });
  }
  if (s.tag === "Nothing")
    return K(at("Return", void 0), ft);
  f();
})(ge(r.nodes)), zL = (t) => (n) => (e) => (() => {
  const r = t.x - n.x;
  return r < 0 ? -r <= 1e-6 : r <= 1e-6;
})() ? t.x >= e.x - 0.5 && t.x <= e.x + e.w + 0.5 && F1(nr(t.y)(n.y))(me(t.y)(n.y))(e.y)(e.y + e.h) : (() => {
  const r = t.y - n.y;
  return r < 0 ? -r <= 1e-6 : r <= 1e-6;
})() ? t.y >= e.y - 0.5 && t.y <= e.y + e.h + 0.5 && F1(nr(t.x)(n.x))(me(t.x)(n.x))(e.x)(e.x + e.w) : !0, d2 = (t) => (n) => (e) => (r) => r.length === 2 && (() => {
  const o = r[1], i = r[0];
  return pl((s) => s._1 === n || s._1 === e || !zL(i)(o)(s._2), ge(t));
})(), Uf = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = Pr(a), l = (_) => (g) => (p) => {
    const $ = Rt((m) => x, (m) => (y) => T("Just", { head: m, tail: y }), p), h = Rt((m) => x, (m) => (y) => T("Just", { head: m, tail: y }), g);
    if (h.tag === "Just" && $.tag === "Just") {
      const m = g2(t)(n)(e)(r)(o)(h._1.head.style === "RunCode" || h._1.head.style === "RunCodeHighlight" ? { ...i, family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", weight: 400 } : i)(h._1.head.style)(_)(u)(h._1.head.text);
      return K(
        m._1,
        (() => {
          if (m._2.tag === "CatNil")
            return j("CatCons", () => l(_ + $._1.head)(h._1.tail)($._1.tail), V(R, R));
          if (m._2.tag === "CatCons")
            return j(
              "CatCons",
              m._2._1,
              V(
                m._2._2._1,
                xt(
                  "Cons",
                  j("CatCons", () => l(_ + $._1.head)(h._1.tail)($._1.tail), V(R, R)),
                  m._2._2._2
                )
              )
            );
          f();
        })()
      );
    }
    return K(at("Return", void 0), ft);
  };
  if (c.length === 1 && c[0].style === "RunText")
    return Qi({
      owner: Po("NodeText", o),
      text: c[0].text,
      spec: {
        x: s,
        y: u,
        content: c[0].text,
        font: i,
        color: r.text,
        align: Eo,
        baseline: ze
      },
      bounds: x,
      plan: t
    });
  const d = nf((_) => So(_.style === "RunCode" || _.style === "RunCodeHighlight" ? { ...i, family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", weight: 400 } : i)(_.text))(c);
  return K(
    d._1,
    (() => {
      if (d._2.tag === "CatNil")
        return j(
          "CatCons",
          (_) => l(s - xs(_) / 2)(c)(_),
          V(R, R)
        );
      if (d._2.tag === "CatCons")
        return j(
          "CatCons",
          d._2._1,
          V(
            d._2._2._1,
            xt(
              "Cons",
              j(
                "CatCons",
                (_) => l(s - xs(_) / 2)(c)(_),
                V(R, R)
              ),
              d._2._2._2
            )
          )
        );
      f();
    })()
  );
}, HL = (t) => (n) => {
  const e = nf((r) => So(r.style === "RunCode" || r.style === "RunCodeHighlight" ? { ...t, family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", weight: 400 } : t)(r.text))(Pr(n));
  return K(
    e._1,
    (() => {
      if (e._2.tag === "CatNil")
        return j(
          "CatCons",
          (r) => K(at("Return", xs(r)), ft),
          V(R, R)
        );
      if (e._2.tag === "CatCons")
        return j(
          "CatCons",
          e._2._1,
          V(
            e._2._2._1,
            xt(
              "Cons",
              j(
                "CatCons",
                (r) => K(at("Return", xs(r)), ft),
                V(R, R)
              ),
              e._2._2._2
            )
          )
        );
      f();
    })()
  );
}, I1 = (t) => (n) => (e) => (r) => {
  const o = pr(r === "" ? t : r), i = e.size * 1.2, s = (n.shape === "Cylinder" ? (n.y + (n.y + n.h + 5 - 2 * He(n.h * 0.075)(n.w * 0.075))) / 2 : (n.y + n.y + n.h) / 2) - tt(o.length) * i / 2 + i / 2, u = nf(HL(e))(o), a = (c) => K(
    at(
      "Return",
      Qt((l) => (d) => ({
        line: fo(d),
        runs: Pr(d),
        left: l >= 0 && l < c.length ? n.x + n.w / 2 - c[l] / 2 : n.x + n.w / 2 - 0,
        y: s + tt(l) * i
      }))(o)
    ),
    ft
  );
  return K(
    u._1,
    (() => {
      if (u._2.tag === "CatNil")
        return j("CatCons", a, V(R, R));
      if (u._2.tag === "CatCons")
        return j(
          "CatCons",
          u._2._1,
          V(
            u._2._2._1,
            xt("Cons", j("CatCons", a, V(R, R)), u._2._2._2)
          )
        );
      f();
    })()
  );
}, WL = (t) => (n) => (e) => {
  const r = nf((o) => So(o.style === "RunCode" || o.style === "RunCodeHighlight" ? { ...t, family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", weight: 400 } : t)(o.text))(c2(n)(e));
  return K(
    r._1,
    (() => {
      if (r._2.tag === "CatNil")
        return j(
          "CatCons",
          (o) => K(at("Return", xs(o)), ft),
          V(R, R)
        );
      if (r._2.tag === "CatCons")
        return j(
          "CatCons",
          r._2._1,
          V(
            r._2._2._1,
            xt(
              "Cons",
              j(
                "CatCons",
                (o) => K(at("Return", xs(o)), ft),
                V(R, R)
              ),
              r._2._2._2
            )
          )
        );
      f();
    })()
  );
}, h2 = (t) => {
  const n = (e) => {
    if (e.tag === "Leaf")
      return z;
    if (e.tag === "Node")
      return nn(
        "Node",
        e._1,
        e._2,
        e._3,
        W0({ x: t.vx, y: t.vy, w: t.vw, h: t.vh })(e._4),
        n(e._5),
        n(e._6)
      );
    f();
  };
  return n;
}, QL = (t) => (n) => (e) => nr(n)(me(t)(e)), p2 = (t) => (n) => (e) => t > n ? [] : [...B(QL(t)(n))(e), (t + n) / 2], OL = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = Gi(r);
  return (i) => (s) => (u) => (a) => (c) => (l) => {
    const d = ve(l).length, _ = tt(d + 1 | 0), g = (m) => {
      const y = (u * _ - tt(m)) / 1.5, v = y < 0 ? 0 : y > 1 ? 1 : y;
      return v * v * (3 - 2 * v);
    }, $ = ((m) => {
      let y = m, v = !0, w;
      for (; v; ) {
        const C = y;
        if (C >= d) {
          v = !1, w = C;
          continue;
        }
        if (g(C) >= 1) {
          y = C + 1 | 0;
          continue;
        }
        v = !1, w = C;
      }
      return w;
    })(0), h = $ >= d ? [] : Ur((m) => g(m) > 0)(Zt($, d - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: a,
        y: c,
        content: Yn($)(l),
        font: i,
        color: s,
        align: Yo,
        baseline: ze
      });
      return $ > 0 ? m : r.pure();
    })())(() => o((m) => e.bind(t.measureText(i)(Yn(m)(l)))((y) => {
      const v = g(m);
      return t.drawText({
        x: a + y,
        y: c - (1 - v) * 10,
        content: Yn(1)(ps(Nr(Yn(m)(l)))(l)),
        font: i,
        color: { ...s, a: mn(ar(v * tt(s.a))) },
        align: Yo,
        baseline: ze
      });
    }))(h));
  };
}, m2 = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = Gi(r), i = OL(t);
  return (s) => {
    const u = { ...s.spec, content: lb(s.spec.content) };
    if (s.plan.tag === "PlainText")
      return t.drawText(u);
    if (s.plan.tag === "RoundedText")
      return e.bind((() => {
        const a = r.pure();
        if (s.bounds.tag === "Nothing")
          return a;
        if (s.bounds.tag === "Just")
          return t.drawRoundedRect(s.bounds._1)(s.plan._1.radius)(s.plan._1.fill)(s.plan._1.stroke);
        f();
      })())(() => t.drawText(u));
    if (s.plan.tag === "TokenTravelText") {
      const a = s.plan._1;
      return e.bind(o((c) => t.fillPath(Zm(c)(1.5))(a.trailFill))(a.trail))(() => e.bind((() => {
        const c = r.pure();
        if (s.bounds.tag === "Nothing")
          return c;
        if (s.bounds.tag === "Just")
          return t.drawRoundedRect(s.bounds._1)(a.radius)(T("Just", a.fill))(x);
        f();
      })())(() => i(u.font)(u.color)(a.reveal)(a.textLeft)(u.y)(fo(s.text))));
    }
    if (s.plan.tag === "TokenFillingText") {
      const a = s.plan._1;
      return e.bind(t.drawRoundedRect(a.shadow)(a.radius)(T("Just", a.shadowFill))(x))(() => e.bind((() => {
        const c = r.pure();
        if (s.bounds.tag === "Nothing")
          return c;
        if (s.bounds.tag === "Just")
          return t.drawRoundedRect(s.bounds._1)(a.radius)(T("Just", a.fill))(T("Just", a.stroke));
        f();
      })())(() => e.bind(t.strokePath(a.leader)(a.stroke))(() => t.drawText(u))));
    }
    if (s.plan.tag === "AffineText")
      return t.drawTextAffine(s.plan._1)(u);
    f();
  };
}, qL = (t) => (n) => (e) => (r) => (o) => (i) => (s) => l2(r)(o)(i)({
  owner: Po("TokenText", t),
  text: e.line,
  spec: {
    x: o.x,
    y: o.y,
    content: e.line,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipPillText,
    align: Yo,
    baseline: ze
  },
  bounds: T("Just", r),
  plan: Ri(
    "TokenTravelText",
    {
      trail: CL(r)(s),
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
}), rc = (t) => (n) => (e) => (r) => {
  const o = B((p) => tt(Ci(1)(ve(p).length)))(r), i = me(1)(N(mr)(0)(o)), s = Tu(n)(e)(t), u = s * i, a = Ci(1)(r.length), l = ((p) => ($) => (h) => {
    let m = p, y = $, v = h, w = !0, C;
    for (; w; ) {
      const J = m, k = y, L = Rt((I) => x, (I) => (H) => T("Just", { head: I, tail: H }), v);
      if (L.tag === "Nothing") {
        w = !1, C = Ci(0)(a - 1 | 0);
        continue;
      }
      if (L.tag === "Just") {
        if (k + L._1.head >= u) {
          w = !1, C = J;
          continue;
        }
        m = J + 1 | 0, y = k + L._1.head, v = L._1.tail;
        continue;
      }
      f();
    }
    return C;
  })(0)(0)(o), d = N(mr)(0)(l < 1 ? [] : Ft(0, l, o)), _ = d / i;
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
}, $2 = (t) => (n) => (e) => (r) => (o) => t.Bind1().bind(n({
  family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif",
  size: 11,
  weight: 500
})(rc(r)(0)(0)(B(ko)(o)).line))((i) => {
  const s = i + 28;
  return t.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
}), XL = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = Lo.traverse(e);
  return (o) => (i) => (s) => n.Apply0().Functor0().map((u) => i2(Tt((a) => a)(u)))(r((u) => {
    if (u._2.tag === "Filling" && u._2._1.labels.length !== 0) {
      const a = pn(u._2._1.node)(i);
      if (a.tag === "Just")
        return n.bind($2(t)(o)(a._1)(u._2._1.progress)(u._2._1.labels))((c) => e.pure(T(
          "Just",
          S(u._1, c)
        )));
      if (a.tag === "Nothing")
        return e.pure(x);
      f();
    }
    return e.pure(x);
  })(ge(s.tokens)));
}, ML = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = Jg(e)(r)(o)(i)(s)(u);
  return t.Bind1().bind(n({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(rc(i)(s)(u)(wt(a)(X0)).line))((l) => t.Applicative0().pure({
    x: c.x + 14 + l / 2 - l / 2 - 14,
    y: c.y - 6 - 8 - 6.6 - 6,
    w: l + 28,
    h: 25.2
  }));
}, UL = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = Lo.traverse(e);
  return (o) => (i) => (s) => (u) => n.Apply0().Functor0().map((a) => i2(Tt((c) => c)(a)))(r((a) => {
    if (a._2.tag === "Travelling" && a._2._1.labels.length !== 0) {
      const c = pn(a._2._1.target)(i), l = pn(a._2._1.source)(i), d = Fr(a._2._1.edge)(s);
      if (d.tag === "Just" && l.tag === "Just" && c.tag === "Just") {
        const _ = (() => {
          if (a._2._1.direction === "Forward")
            return d._1;
          if (a._2._1.direction === "Backward")
            return un(d._1);
          f();
        })(), g = Jg(_)(l._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost);
        return n.bind(ML(t)(o)(_)(l._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost)(a._2._1.labels))((p) => e.pure(T(
          "Just",
          S(a._1, { id: a._1, rect: p, token: g })
        )));
      }
    }
    return e.pure(x);
  })(ge(u.tokens)));
}, Yf = (t) => (n) => (e) => {
  const r = (n * tt(t + 1 | 0) - tt(e)) / 1.5, o = r < 0 ? 0 : r > 1 ? 1 : r;
  return o * o * (3 - 2 * o);
}, Mi = (t) => (n) => (e) => {
  const r = WL(t)(e)(n.runs);
  return K(
    r._1,
    (() => {
      if (r._2.tag === "CatNil")
        return j(
          "CatCons",
          (o) => K(at("Return", n.left + o), ft),
          V(R, R)
        );
      if (r._2.tag === "CatCons")
        return j(
          "CatCons",
          r._2._1,
          V(
            r._2._2._1,
            xt(
              "Cons",
              j(
                "CatCons",
                (o) => K(at("Return", n.left + o), ft),
                V(R, R)
              ),
              r._2._2._2
            )
          )
        );
      f();
    })()
  );
}, YL = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = a < 0 ? 0 : a > 1 ? 1 : a, l = me(8)(i.size * 0.9), d = ($, h, m, y, v) => {
    const w = Hn({
      path: [],
      role: we,
      layer: x,
      effects: [Nn("GroupAlpha", $)]
    })(g2(t)(n)(1)(e)(r)(v === "RunCode" || v === "RunCodeHighlight" ? { ...i, family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", weight: 400 } : i)(v)(h)(m)(yr(y)));
    return $ > 1e-3 ? w : K(at("Return", void 0), ft);
  }, _ = ($, h) => {
    const m = ve($.line).length;
    return Yf(m)(c)((m - h | 0) - 1 | 0);
  }, g = I1(r)(o)(i)(s), p = ($) => {
    const h = I1(r)(o)(i)(u), m = (y) => sr((v) => {
      const w = v >= 0 && v < $.length ? T("Just", $[v]) : x, C = v >= 0 && v < y.length ? T("Just", y[v]) : x;
      return sr((J) => {
        if (J.tag === "DiffKeep") {
          if (w.tag === "Just") {
            if (C.tag === "Just") {
              const k = C._1, E = w._1, L = Mi(i)(E)(J._1), I = (H) => {
                const G = Mi(i)(k)(J._2), O = (ut) => d(
                  1,
                  H + (ut - H) * c,
                  E.y + (k.y - E.y) * c,
                  J._3,
                  (() => {
                    if (c < 0.5) {
                      const Z = wt(E.runs)((U) => ci(ve(U.text).length, U.style));
                      return J._1 >= 0 && J._1 < Z.length ? Z[J._1] : co;
                    }
                    const ot = wt(k.runs)((Z) => ci(ve(Z.text).length, Z.style));
                    return J._2 >= 0 && J._2 < ot.length ? ot[J._2] : co;
                  })()
                );
                return K(
                  G._1,
                  (() => {
                    if (G._2.tag === "CatNil")
                      return j("CatCons", O, V(R, R));
                    if (G._2.tag === "CatCons")
                      return j(
                        "CatCons",
                        G._2._1,
                        V(
                          G._2._2._1,
                          xt(
                            "Cons",
                            j("CatCons", O, V(R, R)),
                            G._2._2._2
                          )
                        )
                      );
                    f();
                  })()
                );
              };
              return K(
                L._1,
                (() => {
                  if (L._2.tag === "CatNil")
                    return j("CatCons", I, V(R, R));
                  if (L._2.tag === "CatCons")
                    return j(
                      "CatCons",
                      L._2._1,
                      V(
                        L._2._2._1,
                        xt("Cons", j("CatCons", I, V(R, R)), L._2._2._2)
                      )
                    );
                  f();
                })()
              );
            }
            if (C.tag === "Nothing") {
              const k = w._1, E = Mi(i)(k)(J._1), L = (I) => {
                const H = _(k, J._1);
                return d(
                  1 - H,
                  I,
                  k.y - l * H,
                  J._3,
                  (() => {
                    const G = wt(k.runs)((O) => ci(ve(O.text).length, O.style));
                    return J._1 >= 0 && J._1 < G.length ? G[J._1] : co;
                  })()
                );
              };
              return K(
                E._1,
                (() => {
                  if (E._2.tag === "CatNil")
                    return j("CatCons", L, V(R, R));
                  if (E._2.tag === "CatCons")
                    return j(
                      "CatCons",
                      E._2._1,
                      V(
                        E._2._2._1,
                        xt("Cons", j("CatCons", L, V(R, R)), E._2._2._2)
                      )
                    );
                  f();
                })()
              );
            }
            f();
          }
          if (w.tag === "Nothing") {
            if (C.tag === "Just") {
              const k = C._1, E = Mi(i)(k)(J._2), L = (I) => {
                const H = Yf(ve(k.line).length)(c)(J._2);
                return d(
                  H,
                  I,
                  k.y - l * (1 - H),
                  J._3,
                  (() => {
                    const G = wt(k.runs)((O) => ci(ve(O.text).length, O.style));
                    return J._2 >= 0 && J._2 < G.length ? G[J._2] : co;
                  })()
                );
              };
              return K(
                E._1,
                (() => {
                  if (E._2.tag === "CatNil")
                    return j("CatCons", L, V(R, R));
                  if (E._2.tag === "CatCons")
                    return j(
                      "CatCons",
                      E._2._1,
                      V(
                        E._2._2._1,
                        xt("Cons", j("CatCons", L, V(R, R)), E._2._2._2)
                      )
                    );
                  f();
                })()
              );
            }
            if (C.tag === "Nothing")
              return K(at("Return", void 0), ft);
          }
          f();
        }
        if (J.tag === "DiffDelete") {
          if (w.tag === "Just") {
            const k = w._1, E = Mi(i)(k)(J._1), L = (I) => {
              const H = _(k, J._1);
              return d(
                1 - H,
                I,
                k.y - l * H,
                J._2,
                (() => {
                  const G = wt(k.runs)((O) => ci(ve(O.text).length, O.style));
                  return J._1 >= 0 && J._1 < G.length ? G[J._1] : co;
                })()
              );
            };
            return K(
              E._1,
              (() => {
                if (E._2.tag === "CatNil")
                  return j("CatCons", L, V(R, R));
                if (E._2.tag === "CatCons")
                  return j(
                    "CatCons",
                    E._2._1,
                    V(
                      E._2._2._1,
                      xt("Cons", j("CatCons", L, V(R, R)), E._2._2._2)
                    )
                  );
                f();
              })()
            );
          }
          if (w.tag === "Nothing")
            return K(at("Return", void 0), ft);
          f();
        }
        if (J.tag === "DiffInsert") {
          if (C.tag === "Just") {
            const k = C._1, E = Mi(i)(k)(J._1), L = (I) => {
              const H = Yf(ve(k.line).length)(c)(J._1);
              return d(
                H,
                I,
                k.y - l * (1 - H),
                J._2,
                (() => {
                  const G = wt(k.runs)((O) => ci(ve(O.text).length, O.style));
                  return J._1 >= 0 && J._1 < G.length ? G[J._1] : co;
                })()
              );
            };
            return K(
              E._1,
              (() => {
                if (E._2.tag === "CatNil")
                  return j("CatCons", L, V(R, R));
                if (E._2.tag === "CatCons")
                  return j(
                    "CatCons",
                    E._2._1,
                    V(
                      E._2._2._1,
                      xt("Cons", j("CatCons", L, V(R, R)), E._2._2._2)
                    )
                  );
                f();
              })()
            );
          }
          if (C.tag === "Nothing")
            return K(at("Return", void 0), ft);
        }
        f();
      })(DL((() => {
        if (w.tag === "Nothing")
          return "";
        if (w.tag === "Just")
          return w._1.line;
        f();
      })())((() => {
        if (C.tag === "Nothing")
          return "";
        if (C.tag === "Just")
          return C._1.line;
        f();
      })()));
    })(Zt(0, Ci($.length)(y.length) - 1 | 0));
    return K(
      h._1,
      (() => {
        if (h._2.tag === "CatNil")
          return j("CatCons", m, V(R, R));
        if (h._2.tag === "CatCons")
          return j(
            "CatCons",
            h._2._1,
            V(
              h._2._2._1,
              xt("Cons", j("CatCons", m, V(R, R)), h._2._2._2)
            )
          );
        f();
      })()
    );
  };
  return K(
    g._1,
    (() => {
      if (g._2.tag === "CatNil")
        return j("CatCons", p, V(R, R));
      if (g._2.tag === "CatCons")
        return j(
          "CatCons",
          g._2._1,
          V(
            g._2._2._1,
            xt("Cons", j("CatCons", p, V(R, R)), g._2._2._2)
          )
        );
      f();
    })()
  );
}, U0 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = ei(u), l = u.tag === "PloppingOut" && e.wobble ? { alpha: 1, scale: 1 } : c, d = pr((() => {
    if (a.tag === "Just") {
      if (a._1.tag === "StaticNodeLabel")
        return a._1._1 === "" ? i : a._1._1;
      if (a._1.tag === "RelabelingNode") {
        const y = a._1._1.progress < 0.5 ? a._1._1.oldLabel : a._1._1.newLabel;
        return y === "" ? i : y;
      }
      f();
    }
    if (a.tag === "Nothing")
      return s.label === "" ? i : s.label;
    f();
  })()), _ = { family: e.fontFamily, size: e.wobble ? 15 : 11, weight: e.wobble ? 800 : 500 }, g = _.size * 1.2, p = (s.shape === "Cylinder" ? (s.y + (s.y + s.h + 5 - 2 * He(s.h * 0.075)(s.w * 0.075))) / 2 : (s.y + s.y + s.h) / 2) - tt(d.length) * g / 2 + g / 2, $ = (y, v) => {
    const w = Hn({
      path: [],
      role: we,
      layer: x,
      effects: [Nn("GroupAlpha", y)]
    })(sr((C) => Uf(t)(n)(1)(e)(i)(_)(s.x + s.w / 2)(p + tt(C._1) * g)(C._2))(Qt(Kn)(pr(v))));
    return y > 1e-3 ? w : K(at("Return", void 0), ft);
  }, h = (y, v) => sr((w) => Uf(t)(n)(y)(e)(i)(_)(s.x + s.w / 2)(p + tt(w._1) * g)(w._2))(Qt(Kn)(pr(v))), m = Hn({
    path: [],
    role: we,
    layer: x,
    effects: [
      Nn("GroupAlpha", l.alpha * r),
      Nn(
        "GroupTransform",
        wi,
        { tx: (s.x + s.w / 2) * (1 - l.scale), ty: (s.y + s.h / 2) * (1 - l.scale), sx: l.scale, sy: l.scale }
      ),
      Nn("GroupAlpha", o)
    ]
  })((() => {
    if (a.tag === "Just" && a._1.tag === "RelabelingNode" && fo(a._1._1.oldLabel) === fo(a._1._1.newLabel) && !sn(
      (y) => sn((v) => v.style === "RunHighlight" || v.style === "RunCodeHighlight", Pr(y)),
      pr(a._1._1.oldLabel)
    ) && sn(
      (y) => sn((v) => v.style === "RunHighlight" || v.style === "RunCodeHighlight", Pr(y)),
      pr(a._1._1.newLabel)
    ))
      return h(
        a._1._1.progress < 0 ? 0 : a._1._1.progress > 1 ? 1 : a._1._1.progress,
        a._1._1.newLabel
      );
    if (a.tag === "Just" && a._1.tag === "RelabelingNode" && fo(a._1._1.oldLabel) === fo(a._1._1.newLabel) && sn(
      (y) => sn((v) => v.style === "RunHighlight" || v.style === "RunCodeHighlight", Pr(y)),
      pr(a._1._1.oldLabel)
    ) && !sn(
      (y) => sn((v) => v.style === "RunHighlight" || v.style === "RunCodeHighlight", Pr(y)),
      pr(a._1._1.newLabel)
    ))
      return h(
        a._1._1.progress < 0 ? 1 : a._1._1.progress > 1 ? 0 : 1 - a._1._1.progress,
        a._1._1.oldLabel
      );
    if (a.tag === "Just" && a._1.tag === "RelabelingNode") {
      if (fo(a._1._1.oldLabel) === fo(a._1._1.newLabel)) {
        const y = a._1._1, v = $(
          y.progress < 0 ? 1 : y.progress > 1 ? 0 : 1 - y.progress,
          y.oldLabel
        ), w = () => $(
          y.progress < 0 ? 0 : y.progress > 1 ? 1 : y.progress,
          y.newLabel
        );
        return K(
          v._1,
          (() => {
            if (v._2.tag === "CatNil")
              return j("CatCons", w, V(R, R));
            if (v._2.tag === "CatCons")
              return j(
                "CatCons",
                v._2._1,
                V(
                  v._2._2._1,
                  xt("Cons", j("CatCons", w, V(R, R)), v._2._2._2)
                )
              );
            f();
          })()
        );
      }
      return YL(t)(n)(e)(i)(s)(_)(a._1._1.oldLabel)(a._1._1.newLabel)(a._1._1.progress);
    }
    return sr((y) => Uf(t)(n)(1)(e)(i)(_)(s.x + s.w / 2)(p + tt(y._1) * g)(y._2))(Qt(Kn)(d));
  })());
  return o > 0 && l.alpha * r > 0 ? m : K(at("Return", void 0), ft);
}, y2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => (d) => (_) => {
  const g = Zc({
    id: c,
    role: t,
    geometry: Yc("FlatNode", { shape: l.shape, bounds: { x: l.x, y: l.y, w: l.w, h: l.h } }),
    alpha: i,
    plan: Kc(
      "FlatNodePlan",
      {
        palette: o,
        label: (() => {
          if (_.tag === "Just") {
            if (_._1.tag === "StaticNodeLabel")
              return _._1._1 === "" ? c : _._1._1;
            if (_._1.tag === "RelabelingNode") {
              const $ = _._1._1.progress < 0.5 ? _._1._1.oldLabel : _._1._1.newLabel;
              return $ === "" ? c : $;
            }
            f();
          }
          if (_.tag === "Nothing")
            return l.label === "" ? c : l.label;
          f();
        })(),
        labelVisibility: e,
        inkBoost: r,
        labelAlpha: u,
        outlineAlpha: s,
        arrival: a,
        animState: d
      }
    )
  }), p = () => {
    if (e === "LabelsHidden")
      return K(at("Return", void 0), ft);
    if (e === "LabelsShown")
      return U0(jc)(n)(o)(i)(u)(c)(l)(d)(_);
    f();
  };
  return K(
    g._1,
    (() => {
      if (g._2.tag === "CatNil")
        return j("CatCons", p, V(R, R));
      if (g._2.tag === "CatCons")
        return j(
          "CatCons",
          g._2._1,
          V(
            g._2._2._1,
            xt("Cons", j("CatCons", p, V(R, R)), g._2._2._2)
          )
        );
      f();
    })()
  );
}, x2 = (t) => (n) => (e) => {
  const r = { ...t, nodeFill: t.text, text: t.nodeFill, nodeStroke: t.nodeFill };
  return sr((o) => {
    const i = pn(o._1)(e.nodes), s = pn(o._1)(n.nodes), u = s.tag === "Just" && i.tag === "Just" ? Hn({
      path: [],
      role: we,
      layer: x,
      effects: [Nn("GroupAlpha", o._2)]
    })(y2(J5)(e.animationTime)(wg)(1)(r)(1)(x)(1)(x)(o._1)((() => {
      const a = pn(o._1)(e.nodeLabels);
      if (a.tag === "Nothing")
        return s._1;
      if (a.tag === "Just") {
        if (a._1.tag === "StaticNodeLabel")
          return { ...s._1, label: a._1._1 === "" ? o._1 : a._1._1 };
        if (a._1.tag === "RelabelingNode")
          return {
            ...s._1,
            label: (() => {
              const c = a._1._1.progress < 0.5 ? a._1._1.oldLabel : a._1._1.newLabel;
              return c === "" ? o._1 : c;
            })()
          };
      }
      f();
    })())(i._1)(pn(o._1)(e.nodeLabels))) : K(at("Return", void 0), ft);
    return o._2 > 0 ? u : K(at("Return", void 0), ft);
  })(ge(e.nodeInvert));
}, B1 = (t) => (n) => (e) => {
  const r = au(6)(0.55)(Q0(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = au(6)(0.55)(Q0(0)(1)(t / 0.06)), u = t < 0.06, a = u && n > 1e-4, c = o && e <= 1e-4;
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
}, KL = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : Ft(0, i, o), u = s.length - 1 | 0, a = u >= 0 && u < s.length ? T("Just", s[u]) : x, c = o.length - 1 | 0, l = c >= 0 && c < o.length ? T("Just", o[c]) : x;
    if (l.tag === "Just" && a.tag === "Just") {
      const d = Mn(0.78)(1.18)(Nu(o) + 19 | 0), _ = Mn(0.4)(0.62)(d.prng), g = r.wobble ? 8.75 * _.value : 4.375, p = Mn(0.4)(0.62)(_.prng), $ = r.wobble ? 8.75 * p.value : 4.375, h = l._1.y - a._1.y, m = l._1.x - a._1.x, y = _e(m * m + h * h), v = h / y, w = -v, C = m / y, J = l._1.x + C * 0.875, k = l._1.y + v * 0.875, E = r.wobble ? 8.75 * d.value : 8.75, L = J - C * E, I = k - v * E, H = L + w * g, G = I + C * g, O = [1, J, k, 2, L + w * 4.375, I + C * 4.375, 2, L - w * 4.375, I - C * 4.375, 5], ut = L - w * $, ot = I - C * $, Z = { color: r.arrowFill, width: 2, lineJoin: ue, lineCap: vr };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, H, G, 2, J, k])(Z))(() => t.strokePath([1, ut, ot, 2, J, k])(Z)) : t.fillPath(O)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, VL = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = Gi(e), i = t.popAlpha, s = KL(t);
  return (u) => (a) => (c) => (l) => (d) => {
    const _ = F5(8)(l), g = c && d.hi >= 0.9 && (1 - d.hi) * Fc(_) <= 8.75 ? 1 : d.hi;
    if (g <= d.lo)
      return e.pure();
    const p = Q5(_)(d.lo)(g);
    if (p.length === 0)
      return e.pure();
    const $ = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: ue, lineCap: vr }, h = u.wobble ? Mn(-10)(4)(Nu(p)).value : 0, m = u.wobble ? sL(h)(p) : p;
    return r.bind(u.wobble ? o((y) => r.bind(t.pushAlpha(y.alpha))(() => r.bind(t.strokePath(y.path)($))(() => i)))((() => {
      const y = Nu(p);
      return m.length < 2 ? [] : cs(EL)(y)(!1)(m);
    })()) : t.strokePath(P5(p))($))(() => {
      const y = s(u)(m);
      return a && g >= 0.999 ? y : e.pure();
    });
  };
}, jL = (t) => {
  const n = VL(t);
  return (e) => e.geometry.tag === "FlatRoute" && e.plan.tag === "FlatEdgePlan" ? n(e.plan._1)(e.arrow)(e.settlingAtTarget)(e.geometry._1)(e.visible) : t.Monad0().Applicative0().pure();
}, ZL = (t) => (n) => {
  const e = (i) => {
    const s = pn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !sn(
        (a) => 0 < a._2.length && a._2[0].x >= u.x && a._2[0].x <= u.x + u.w && a._2[0].y >= u.y && a._2[0].y <= u.y + u.h,
        ge(t.edges)
      );
    }
    f();
  }, r = N((i) => (s) => (i * 31 | 0) + Kr(s) | 0)(5381)(Me(n.frameTitle)), o = (i) => {
    const s = pn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !sn(
        (a) => {
          const c = a._2.length - 1 | 0;
          return c >= 0 && c < a._2.length && a._2[c].x >= u.x && a._2[c].x <= u.x + u.w && a._2[c].y >= u.y && a._2[c].y <= u.y + u.h;
        },
        ge(t.edges)
      );
    }
    f();
  };
  return N((i) => (s) => {
    const u = s._2;
    return pL((a) => {
      if (a.tag === "Nothing")
        return T("Just", u);
      if (a.tag === "Just")
        return T(
          "Just",
          { t: me(a._1.t)(u.t), angle: u.t >= a._1.t ? u.angle : a._1.angle, bigCircle: a._1.bigCircle || u.bigCircle, frameHash: a._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(z)(wt(ge(n.tokens))((i) => {
    if (i._2.tag === "Filling") {
      const s = i._2._1.node;
      return [
        S(
          s,
          {
            t: 1,
            angle: (() => {
              const u = Tt((a) => (() => {
                const c = pn(s)(t.nodes), l = a._2.length - 1 | 0;
                return l >= 0 && l < a._2.length && c.tag === "Just" && a._2[l].x >= c._1.x && a._2[l].x <= c._1.x + c._1.w && a._2[l].y >= c._1.y && a._2[l].y <= c._1.y + c._1.h;
              })() ? T("Just", a._2) : x)(ge(t.edges));
              if (0 < u.length) {
                const a = u[0].length - 1 | 0, c = a < 1 ? [] : Ft(0, a, u[0]), l = c.length - 1 | 0;
                if (l >= 0 && l < c.length) {
                  const d = u[0].length - 1 | 0;
                  return d >= 0 && d < u[0].length ? mi(u[0][d].y - c[l].y)(u[0][d].x - c[l].x) : 0;
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
          S(
            i._2._1.target,
            {
              t: (i._2._1.progress - 0.75) / 0.25,
              angle: (() => {
                const s = Fr(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, a = u < 1 ? [] : Ft(0, u, s._1), c = a.length - 1 | 0;
                  if (c >= 0 && c < a.length) {
                    const l = s._1.length - 1 | 0;
                    return l >= 0 && l < s._1.length ? mi(s._1[l].y - a[c].y)(s._1[l].x - a[c].x) : 0;
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
          S(
            i._2._1.source,
            {
              t: i._2._1.progress / 0.25,
              angle: (() => {
                const s = Fr(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? mi(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, tS = (t) => N((n) => (e) => (n * 31 | 0) + Kr(e) | 0)(5381)(Me(t.frameTitle)), v2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = tS(i), u = ZL(o)(i);
  return sr((a) => {
    const c = pn(a._1)(i.nodes);
    if (c.tag === "Just")
      return y2(Mm)(i.animationTime)(n)(e)(r)((() => {
        const l = pn(a._1)(i.nodeFadeAlpha);
        if (l.tag === "Nothing")
          return 1;
        if (l.tag === "Just")
          return l._1;
        f();
      })())(t(a._1))((() => {
        const l = pn(a._1)(i.nodeLabelFadeAlpha);
        if (l.tag === "Nothing")
          return 1;
        if (l.tag === "Just")
          return l._1;
        f();
      })())((() => {
        const l = pn(a._1)(u);
        return l.tag === "Just" ? T("Just", l._1) : l.tag === "Nothing" && mL(a._1)(i.visited) ? T("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: s }) : x;
      })())(a._1)((() => {
        const l = pn(a._1)(i.nodeLabels);
        if (l.tag === "Nothing")
          return a._2;
        if (l.tag === "Just") {
          if (l._1.tag === "StaticNodeLabel")
            return { ...a._2, label: l._1._1 === "" ? a._1 : l._1._1 };
          if (l._1.tag === "RelabelingNode")
            return {
              ...a._2,
              label: (() => {
                const d = l._1._1.progress < 0.5 ? l._1._1.oldLabel : l._1._1.newLabel;
                return d === "" ? a._1 : d;
              })()
            };
        }
        f();
      })())(c._1)(pn(a._1)(i.nodeLabels));
    if (c.tag === "Nothing")
      return K(at("Return", void 0), ft);
    f();
  })(ge(o.nodes));
}, D1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o.x + o.w / 2 <= i.x + i.w / 2, u = s ? ho : _o, a = s ? _o : ho, c = me(o.y)(i.y), l = nr(o.y + o.h)(i.y + i.h);
  return Vt(d2(t)(n)(e))(Tt((d) => {
    if (c > l)
      return x;
    const _ = re(i.shape)({ x: i.x, y: i.y, w: i.w, h: i.h })(a)(d), g = re(o.shape)({ x: o.x, y: o.y, w: o.w, h: o.h })(u)(d);
    return (s ? _ >= g + 1e-6 : g >= _ + 1e-6) ? T("Just", [{ x: g, y: d }, { x: _, y: d }]) : x;
  })(p2(c)(l)(Tt((d) => d)([
    (() => {
      if (0 < r.length) {
        const d = r.length - 1 | 0;
        if (d >= 0 && d < r.length) {
          const _ = r[d];
          if ((() => {
            const g = r[0].y - _.y;
            return g < 0 ? -g <= 1e-6 : g <= 1e-6;
          })())
            return T("Just", (r[0].y + _.y) / 2);
        }
      }
      return x;
    })(),
    T("Just", i.y + i.h / 2),
    T("Just", o.y + o.h / 2)
  ]))));
}, z1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o.y + o.h / 2 <= i.y + i.h / 2, u = s ? go : lo, a = s ? lo : go, c = me(o.x)(i.x), l = nr(o.x + o.w)(i.x + i.w);
  return Vt(d2(t)(n)(e))(Tt((d) => {
    if (c > l)
      return x;
    const _ = re(i.shape)({ x: i.x, y: i.y, w: i.w, h: i.h })(a)(d), g = re(o.shape)({ x: o.x, y: o.y, w: o.w, h: o.h })(u)(d);
    return (s ? _ >= g + 1e-6 : g >= _ + 1e-6) ? T("Just", [{ x: d, y: g }, { x: d, y: _ }]) : x;
  })(p2(c)(l)(Tt((d) => d)([
    (() => {
      if (0 < r.length) {
        const d = r.length - 1 | 0;
        if (d >= 0 && d < r.length) {
          const _ = r[d];
          if ((() => {
            const g = r[0].x - _.x;
            return g < 0 ? -g <= 1e-6 : g <= 1e-6;
          })())
            return T("Just", (r[0].x + _.x) / 2);
        }
      }
      return x;
    })(),
    T("Just", i.x + i.w / 2),
    T("Just", o.x + o.w / 2)
  ]))));
}, nS = (t) => (n) => (e) => (r) => {
  const o = pn(n)(t);
  if (o.tag === "Just") {
    const i = pn(e)(t);
    if (i.tag === "Just") {
      if ((() => {
        const a = i._1.y + i._1.h / 2 - (o._1.y + o._1.h / 2), c = i._1.x + i._1.w / 2 - (o._1.x + o._1.w / 2);
        return (a < 0 ? -a : a) >= (c < 0 ? -c : c);
      })()) {
        const a = z1(t)(n)(e)(r)(o._1)(i._1), c = D1(t)(n)(e)(r)(o._1)(i._1);
        if (a.tag === "Just")
          return T("Just", a._1);
        if (a.tag === "Nothing")
          return c;
        f();
      }
      const s = D1(t)(n)(e)(r)(o._1)(i._1), u = z1(t)(n)(e)(r)(o._1)(i._1);
      if (s.tag === "Just")
        return T("Just", s._1);
      if (s.tag === "Nothing")
        return u;
      f();
    }
    if (i.tag === "Nothing")
      return x;
    f();
  }
  if (o.tag === "Nothing")
    return x;
  f();
}, vs = (t) => (n) => (e) => {
  const r = xL(t);
  return ee(
    F.compare,
    ne,
    $L(Tt((o) => {
      const i = Fr(o._1)(t.edges);
      if (i.tag === "Just") {
        const s = nS(e)(o._2.source)(o._2.target)(i._1);
        return s.tag === "Just" ? T("Just", S(o._1, s._1)) : x;
      }
      if (i.tag === "Nothing")
        return x;
      f();
    })(ge(n))),
    (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return z;
        if (i.tag === "Node")
          return nn("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(t.edges);
    })()
  );
}, T2 = (t) => (n) => (e) => sr((() => {
  const r = vs(n)(e.edgeEndpoints)(n.nodes);
  return (o) => {
    const i = Fr(o._1)(e.edges);
    if (i.tag === "Just") {
      const s = Fr(o._1)(e.edgeFadeAlpha), u = (() => {
        if (s.tag === "Nothing")
          return 1;
        if (s.tag === "Just")
          return s._1;
        f();
      })(), a = Km({
        id: o._1,
        geometry: Bm(
          "FlatRoute",
          (() => {
            const c = Fr(o._1)(r);
            if (c.tag === "Nothing")
              return o._2;
            if (c.tag === "Just")
              return c._1;
            f();
          })()
        ),
        visible: Im(i._1),
        arrow: (() => {
          const c = cr("conn:")(o._1);
          if (c.tag === "Just")
            return !1;
          if (c.tag === "Nothing")
            return !0;
          f();
        })(),
        settlingAtTarget: i._1.tag === "Extending" && i._1._1 === "ExtendFromSource",
        plan: Dm("FlatEdgePlan", t)
      });
      return u === 1 ? a : Hn({
        path: [],
        role: we,
        layer: x,
        effects: [Nn("GroupAlpha", u)]
      })(a);
    }
    if (i.tag === "Nothing")
      return K(at("Return", void 0), ft);
    f();
  };
})())(ge(n.edges)), oc = (t) => (n) => (e) => (r) => {
  const o = n.nodes, i = vs(n)(e.edgeEndpoints)(n.nodes);
  return Hn({
    path: [],
    role: we,
    layer: T("Just", Ak),
    effects: []
  })(sr((s) => {
    if (s._2.tag === "Travelling") {
      if (s._2._1.labels.length !== 0) {
        const u = pn(s._2._1.target)(o), a = pn(s._2._1.source)(o), c = Fr(s._2._1.edge)(i), l = s2(s._1)(r);
        if (l.tag === "Just" && c.tag === "Just" && a.tag === "Just" && u.tag === "Just")
          return qL(s._1)(t)(rc(s._2._1.progress)(s._2._1.holdPre)(s._2._1.holdPost)(wt(s._2._1.labels)(X0)))(l._1)({
            x: l._1.x + l._1.w / 2,
            y: l._1.y + l._1.h / 2
          })(B1(s._2._1.progress)(s._2._1.holdPre)(s._2._1.holdPost))(Jg((() => {
            if (s._2._1.direction === "Forward")
              return c._1;
            if (s._2._1.direction === "Backward")
              return un(c._1);
            f();
          })())(a._1)(u._1)(s._2._1.progress)(s._2._1.holdPre)(s._2._1.holdPost));
      }
      return K(at("Return", void 0), ft);
    }
    if (s._2.tag === "Filling" && s._2._1.labels.length !== 0) {
      const u = pn(s._2._1.node)(o);
      if (u.tag === "Just") {
        const a = u._1, c = $2(_g)(Um)(a)(s._2._1.progress)(s._2._1.labels), l = (d) => SL(s._1)(t)(rc(s._2._1.progress)(0)(0)(wt(s._2._1.labels)(X0)).line)(a)(d)({
          x: d.x + d.w / 2,
          y: d.y + d.h / 2
        })(B1(s._2._1.progress)(0)(0));
        return K(
          c._1,
          (() => {
            if (c._2.tag === "CatNil")
              return j("CatCons", l, V(R, R));
            if (c._2.tag === "CatCons")
              return j(
                "CatCons",
                c._2._1,
                V(
                  c._2._2._1,
                  xt("Cons", j("CatCons", l, V(R, R)), c._2._2._2)
                )
              );
            f();
          })()
        );
      }
      if (u.tag === "Nothing")
        return K(at("Return", void 0), ft);
      f();
    }
    return K(at("Return", void 0), ft);
  })(ge(e.tokens)));
}, w2 = (t) => (n) => (e) => (r) => {
  if (n.tokenInsideBlend === "Difference") {
    const o = e.nodes, i = vs(e)(r.edgeEndpoints)(e.nodes), s = k5(t), u = (a) => {
      const c = Hn({
        path: [],
        role: we,
        layer: T("Just", Ek),
        effects: [
          Nn("GroupBlend", pa),
          Nn("GroupClip", q0(o)(r), Ko)
        ]
      })(M0(J1)(a === "ConvexAbsorb" ? yL : O0)(n.wobble)(o)(i)(r)(n.tokenInside)(n.tokenInsideStroke)), l = () => Hn({
        path: [],
        role: we,
        layer: T("Just", Pk),
        effects: []
      })(sr((d) => {
        const _ = pn(d._1)(r.nodes);
        return _.tag === "Just" && ei(_._1).alpha > 0 ? yo($o(
          "FloorOverlay",
          {
            path: Vo(d._2),
            fill: T("Just", { color: Ln, flat: !1 }),
            stroke: x
          }
        )) : K(at("Return", void 0), ft);
      })(ge(o)));
      return K(
        c._1,
        (() => {
          if (c._2.tag === "CatNil")
            return j("CatCons", l, V(R, R));
          if (c._2.tag === "CatCons")
            return j(
              "CatCons",
              c._2._1,
              V(
                c._2._2._1,
                xt("Cons", j("CatCons", l, V(R, R)), c._2._2._2)
              )
            );
          f();
        })()
      );
    };
    return K(
      s._1,
      (() => {
        if (s._2.tag === "CatNil")
          return j("CatCons", u, V(R, R));
        if (s._2.tag === "CatCons")
          return j(
            "CatCons",
            s._2._1,
            V(
              s._2._2._1,
              xt("Cons", j("CatCons", u, V(R, R)), s._2._2._2)
            )
          );
        f();
      })()
    );
  }
  if (n.tokenInsideBlend === "Normal")
    return Hn({
      path: [],
      role: we,
      layer: x,
      effects: [
        Nn("GroupClip", q0(e.nodes)(r), Ko),
        Nn("GroupAlpha", n.tokenInsideAlpha)
      ]
    })(M0(J1)(O0)(n.wobble)(e.nodes)(vs(e)(r.edgeEndpoints)(e.nodes))(r)(n.tokenInside)(n.tokenInsideStroke));
  f();
}, Y0 = (t) => (n) => (e) => (r) => Hn({
  path: [],
  role: we,
  layer: T("Just", Sk),
  effects: [Nn("GroupClip", TL(n)(e.nodes)(r), yg)]
})(M0(qm)(O0)(t.wobble)(e.nodes)(vs(e)(r.edgeEndpoints)(e.nodes))(r)(t.tokenOutsideFill)(t.tokenOutsideStroke)), kg = (t) => {
  const n = t.Bind1(), e = UL(t), r = XL(t);
  return (o) => (i) => (s) => (u) => {
    const a = s.nodes;
    return n.bind(e(o)(a)(vs(s)(u.edgeEndpoints)(s.nodes))(u))((c) => n.bind(r(o)(a)(u))((l) => t.Applicative0().pure(Z5({
      x: i.vx,
      y: i.vy,
      w: i.vw,
      h: i.vh
    })([
      ...Tt((d) => {
        const _ = pn(d._1)(u.nodes);
        return _.tag === "Just" && ei(_._1).alpha > 0 ? T("Just", { x: d._2.x, y: d._2.y, w: d._2.w, h: d._2.h }) : x;
      })(ge(a)),
      ...(() => {
        const d = (_, g) => {
          if (_.tag === "Leaf")
            return g;
          if (_.tag === "Node")
            return d(_._5, xt("Cons", _._4, d(_._6, g)));
          f();
        };
        return Xt(_n.foldr, d(l, R));
      })()
    ])(Tt((d) => s2(d)(c))((() => {
      const d = (_) => {
        if (_.tag === "Leaf")
          return z;
        if (_.tag === "Node")
          return nn("Node", _._1, _._2, _._3, void 0, d(_._5), d(_._6));
        f();
      };
      return Bt(F.compare)(Xt(Ae.foldr, d(c)));
    })())))));
  };
}, eS = /* @__PURE__ */ kg(_g), N2 = (t) => (n) => (e) => (r) => {
  const o = eS(Um)(n)(e)(r);
  return K(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return j("CatCons", (i) => oc(t)(e)(r)(i), V(R, R));
      if (o._2.tag === "CatCons")
        return j(
          "CatCons",
          o._2._1,
          V(
            o._2._2._1,
            xt(
              "Cons",
              j("CatCons", (i) => oc(t)(e)(r)(i), V(R, R)),
              o._2._2._2
            )
          )
        );
      f();
    })()
  );
}, rS = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, H1 = (t) => (n) => (e) => {
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
}, W1 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, K0 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, C2 = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, oS = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, V0 = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), iS = /* @__PURE__ */ ro(Uo)(qt), sS = (t) => (n) => {
  const e = se(t.angle), r = ie(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, uS = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], j0 = (t) => (n) => {
  const e = (r) => rS(0)(255)(mn(Ge(tt(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, pe = (t) => (n) => (e) => (r) => ({ x: (n - e) * ie(t.angle), y: (n + e) * se(t.angle) - r }), Lg = (t) => {
  const n = Rt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, aS = (t) => (n) => (e) => {
  const r = e.id, o = e.np, i = Zc({
    id: r,
    role: Mm,
    geometry: Yc(
      "IsoSlab",
      {
        south: [e.box.ground.d, e.box.ground.c, e.box.top.c, e.box.top.d],
        east: [e.box.ground.b, e.box.ground.c, e.box.top.c, e.box.top.b],
        top: [e.box.top.a, e.box.top.b, e.box.top.c, e.box.top.d]
      }
    ),
    alpha: 1,
    plan: Kc("IsoNodePlan", { config: t, palette: n })
  }), s = () => Qi({
    owner: Po("NodeText", r),
    text: o.label,
    spec: {
      x: o.x + o.w / 2,
      y: 0,
      content: o.label,
      font: { family: n.fontFamily, size: 11, weight: 600 },
      color: n.text,
      align: Eo,
      baseline: ze
    },
    bounds: x,
    plan: Ri("AffineText", sS(t)(o.y + o.h))
  });
  return K(
    i._1,
    (() => {
      if (i._2.tag === "CatNil")
        return j("CatCons", s, V(R, R));
      if (i._2.tag === "CatCons")
        return j(
          "CatCons",
          i._2._1,
          V(
            i._2._2._1,
            xt("Cons", j("CatCons", s, V(R, R)), i._2._2._2)
          )
        );
      f();
    })()
  );
}, cS = (t) => (n) => (e) => (r) => (o) => {
  const i = Gn(Kn, o, Ft(1, o.length, o)), s = i.length - 1 | 0;
  return Qt((u) => (a) => ({
    depth: (a._1.x + a._1.y + a._2.x + a._2.y) / 2,
    draw: Km({
      id: e,
      geometry: Bm("IsoSegments", [[pe(t)(a._1.x)(a._1.y)(0), pe(t)(a._2.x)(a._2.y)(0)]]),
      visible: { lo: 0, hi: 1 },
      arrow: r && u === s,
      settlingAtTarget: !1,
      plan: Dm("IsoEdgePlan", { config: t, palette: n })
    })
  }))(i);
}, fS = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return un(o);
    f();
  })();
  if (0 < i.length) {
    const u = ms(i)(H1(0)(1)(Tu(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = ms(i)(H1(0)(1)(Tu(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, lS = (t) => {
  const n = Rt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, gS = (t) => {
  const n = Rt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: W1(r.minX)(o.x), minY: W1(r.minY)(o.y), maxX: K0(r.maxX)(o.x), maxY: K0(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, _S = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoSlab" && r.plan.tag === "IsoNodePlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(Lg(u))({ color: a, flat: !0 })({
        color: i.nodeStroke,
        width: 1,
        lineJoin: ue,
        lineCap: Ye
      });
      return e.bind(s(o.south, j0(0.66)(i.nodeFill)))(() => e.bind(s(o.east, j0(0.82)(i.nodeFill)))(() => s(o.top, i.nodeFill)));
    }
    return n.Applicative0().pure();
  };
}, dS = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoCube" && r.plan.tag === "IsoTokenPlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(Lg(u))({ color: j0(a)(i.tokenOutsideFill), flat: !0 })({
        color: i.tokenOutsideStroke,
        width: 1,
        lineJoin: ue,
        lineCap: Ye
      });
      return e.bind(s(o.south, 0.66))(() => e.bind(s(o.east, 0.82))(() => s(o.top, 1)));
    }
    return n.Applicative0().pure();
  };
}, hS = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, pS = (t) => (n) => (e) => {
  const r = C2(t)(e.nodeLabels);
  if (r.tag === "Just") {
    if (r._1.tag === "StaticNodeLabel")
      return r._1._1 === "" ? t : r._1._1;
    if (r._1.tag === "RelabelingNode") {
      const o = r._1._1.progress < 0.5 ? r._1._1.oldLabel : r._1._1.newLabel;
      return o === "" ? t : o;
    }
    f();
  }
  if (r.tag === "Nothing")
    return n.label === "" ? t : n.label;
  f();
}, mS = (t) => (n) => (e) => {
  const r = e.x - 5.5, o = e.x + 5.5, i = e.y - 5.5, s = e.y + 5.5, u = n + 11, a = pe(t)(o)(i)(u), c = pe(t)(o)(s)(u), l = pe(t)(r)(s)(u), d = pe(t)(o)(s)(n);
  return { south: [pe(t)(r)(s)(n), d, c, l], east: [pe(t)(o)(i)(n), d, c, a], top: [pe(t)(r)(i)(u), a, c, l] };
}, $S = (t) => (n) => (e) => (r) => {
  const o = r._1, i = (s, u) => ({
    depth: u.x + u.y,
    draw: Vm({
      id: o,
      pass: qm,
      geometry: Hm("IsoCube", mS(t)(s)(u)),
      position: u,
      plan: Qm("IsoTokenPlan", { config: t, palette: n, baseZ: s })
    })
  });
  if (r._2.tag === "Travelling") {
    const s = oS(r._2._1.edge)(e.edges);
    return s.tag === "Just" ? T("Just", i(0, fS(r._2._1.direction)(r._2._1.progress)(r._2._1.holdPre)(r._2._1.holdPost)(s._1))) : x;
  }
  if (r._2.tag === "Filling") {
    const s = C2(r._2._1.node)(e.nodes);
    if (s.tag === "Just")
      return T("Just", i(t.boxHeight, { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 }));
  }
  return x;
}, yS = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: pe(t)(n.x)(n.y)(0), b: pe(t)(r)(n.y)(0), c: pe(t)(r)(e)(0), d: pe(t)(n.x)(e)(0) },
    top: { a: pe(t)(n.x)(n.y)(t.boxHeight), b: pe(t)(r)(n.y)(t.boxHeight), c: pe(t)(r)(e)(t.boxHeight), d: pe(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, J2 = (t) => (n) => B((e) => ({ id: e._1, np: e._2, box: yS(t)(e._2) }))(V0(n.nodes)), xS = (t) => (n) => [
  ...wt(J2(t)(n))(uS),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, xt("Cons", r._4, e(r._6, o)));
      f();
    };
    return wt(Xt(_n.foldr, e(n.edges, R)))(B((r) => pe(t)(r.x)(r.y)(0)));
  })()
], vS = (t) => (n) => (e) => B((r) => ({ ...r, np: { ...r.np, label: pS(r.id)(r.np)(e) } }))(J2(t)(n)), TS = (t) => (n) => (e) => (r) => {
  const o = bg(n), i = [
    ...wt(V0(e.edges))((a) => cS(t)(o)(a._1)((() => {
      const c = cr("conn:")(a._1);
      if (c.tag === "Just")
        return !1;
      if (c.tag === "Nothing")
        return !0;
      f();
    })())(a._2)),
    ...B((a) => ({ depth: a.box.depth, draw: aS(t)(o)(a) }))(vS(t)(e)(r)),
    ...Tt($S(t)(o)(e))(V0(r.tokens))
  ], s = Ym({
    viewport: gS(xS(t)(e)),
    clear: T("Just", t.transparentBg ? o.bgTransparent : o.bg),
    dots: x
  }), u = () => iS((a) => a.draw)(Bt((a) => (c) => st.compare(a.depth)(c.depth))(i));
  return K(
    s._1,
    (() => {
      if (s._2.tag === "CatNil")
        return j("CatCons", u, V(R, R));
      if (s._2.tag === "CatCons")
        return j(
          "CatCons",
          s._2._1,
          V(
            s._2._2._1,
            xt("Cons", j("CatCons", u, V(R, R)), s._2._2._2)
          )
        );
      f();
    })()
  );
}, wS = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = K0(1e-4)(_e(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return Lg([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, NS = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = ro(e)(qt);
  return (o) => {
    if (o.geometry.tag === "IsoSegments" && o.plan.tag === "IsoEdgePlan") {
      const i = o.plan._1.palette, s = o.geometry._1;
      return n.Bind1().bind(r((u) => t.strokePath(lS(u))({
        color: i.edge,
        width: 1.5,
        lineJoin: ue,
        lineCap: vr
      }))(s))(() => {
        const u = s.length - 1 | 0;
        if (u >= 0 && u < s.length) {
          const c = s[u], l = c.length - 1 | 0, d = l < 1 ? [] : Ft(0, l, c), _ = d.length - 1 | 0;
          if (_ >= 0 && _ < d.length) {
            const p = s.length - 1 | 0, $ = (() => {
              if (p >= 0 && p < s.length) {
                const h = s[p], m = h.length - 1 | 0;
                if (m >= 0 && m < h.length)
                  return t.fillPath(wS({ from: d[_], to: h[m] }))({ color: i.arrowFill, flat: !0 });
              }
              return e.pure();
            })();
            return o.arrow ? $ : e.pure();
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
}, b2 = (t) => t, ae = (t) => (n) => {
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
}, CS = /* @__PURE__ */ b2("Split"), JS = /* @__PURE__ */ b2("Fall"), xe = (t) => (n) => (e) => (r) => {
  const o = e ? 0 : 1, i = 1 - $n(r.x - o) * se(n) * 1.1, s = $n(i) < 0.06 ? i < 0 ? -0.06 : 0.06 : i, u = t.y + t.h / 2, a = t.x + t.w / 2;
  return {
    x: a + (t.x + (o + (r.x - o) * ie(n)) * t.w - a) / s,
    y: u + (t.y + r.y * t.h - u) / s
  };
}, bS = (t) => (n) => (e) => {
  const r = xe(t)(n)(e)({ x: 0.5, y: 0.5 }), o = t.x + 0.5 * t.w, i = xe(t)(n)(e)({ x: 0.5, y: 0 }), s = e ? 0 : 1, u = t.x + s * t.w, a = xe(t)(n)(e)({ x: s, y: 0 }), c = xe(t)(n)(e)({ x: s, y: 1 }), l = (c.y - a.y) / ae(1e-6)(t.h), d = (c.x - a.x) / ae(1e-6)(t.h), _ = o - u, g = (i.y - a.y) / ($n(_) < 1e-6 ? _ < 0 ? -1e-6 : 1e-6 : _), p = t.y + t.h / 2, $ = t.x + t.w / 2, h = o - u, m = (i.x - a.x) / ($n(h) < 1e-6 ? h < 0 ? -1e-6 : 1e-6 : h);
  return { a: m, b: g, c: d, d: l, e: r.x - m * $ - d * p, f: r.y - g * $ - l * p };
}, Sg = (t) => {
  const n = ae(0)(t) * 3.05, e = ie(n);
  return {
    expansion: 1 + se(n) * 0.16,
    verticalScale: $n(e) < 0.06 ? e < 0 ? -0.06 : 0.06 : e
  };
}, Io = (t) => (n) => (e) => {
  const r = Sg(n), o = t.x + t.w / 2, i = t.y + t.h;
  return { x: o + (t.x + e.x * t.w - o) * r.expansion, y: i + (t.y + e.y * t.h - i) * r.verticalScale };
}, kS = (t) => (n) => {
  const e = Sg(n), r = Io(t)(n)({ x: 0.5, y: 0.5 });
  return {
    a: e.expansion,
    b: 0,
    c: 0,
    d: e.verticalScale,
    e: r.x - e.expansion * (t.x + t.w / 2),
    f: r.y - e.verticalScale * (t.y + t.h / 2)
  };
}, LS = (t) => ae(0)(t.w) / ae(1e-6)(ae(0)(t.h)) >= 4 ? JS : CS, SS = (t) => (n) => (e) => {
  const r = e / ae(1e-6)(t.h), o = e / ae(1e-6)(t.w), i = (u, a, c) => {
    const l = Io(t)(n)(u), d = Io(t)(n)(a), _ = Io(t)(n)(c);
    return [4, l.x, l.y, d.x, d.y, _.x, _.y];
  }, s = [
    ...(() => {
      const u = Io(t)(n)({ x: o, y: 0 });
      return [1, u.x, u.y];
    })(),
    ...i({ x: o * 0.44771525016920644, y: 0 }, { x: 0, y: r * 0.44771525016920644 }, { x: 0, y: r }),
    ...(() => {
      const u = Io(t)(n)({ x: 0, y: 1 - r });
      return [2, u.x, u.y];
    })(),
    ...i({ x: 0, y: 1 - r * 0.44771525016920644 }, { x: o * 0.44771525016920644, y: 1 }, { x: o, y: 1 }),
    ...(() => {
      const u = Io(t)(n)({ x: 1 - o, y: 1 });
      return [2, u.x, u.y];
    })(),
    ...i({ x: 1 - o * 0.44771525016920644, y: 1 }, { x: 1, y: 1 - r * 0.44771525016920644 }, { x: 1, y: 1 - r }),
    ...(() => {
      const u = Io(t)(n)({ x: 1, y: r });
      return [2, u.x, u.y];
    })(),
    ...i({ x: 1, y: r * 0.44771525016920644 }, { x: 1 - o * 0.44771525016920644, y: 0 }, { x: 1 - o, y: 0 }),
    ...Ai
  ];
  return { face: s, labelAffine: kS(t)(n), labelVisible: Sg(n).verticalScale > 0, outline: s };
}, Kf = (t) => au(10.8)(0.48)(zo(1)(ae(0)(t))) / au(10.8)(0.48)(1), ES = (t) => (n) => {
  const e = Kf(zo(1)(ae(0)((1 - zo(1)(ae(0)(t)) - 0.48) / 0.5)) * 0.48) / Kf(0.48);
  if (n < 0) {
    const r = zo(1)(ae(0)((t - 0.25) / 0.28));
    return Kf(r * r * r);
  }
  return zo(1)($n(1 - e));
}, PS = (t) => ES((() => {
  if (t.tag === "Closed")
    return 0;
  if (t.tag === "Opening")
    return t._1;
  if (t.tag === "Open")
    return 1;
  if (t.tag === "Closing")
    return 1 - t._1;
  f();
})())(t.tag === "Opening" ? -1 : t.tag === "Closing" ? 1 : 0), k2 = (t) => (n) => (e) => {
  const r = zo(1)(ae(0)((e - t) / ae(1e-6)(n - t)));
  return r * r * (3 - 2 * r);
}, Q1 = (t) => (n) => (e) => (r) => {
  const o = e / ae(1e-6)(t.h), i = e / ae(1e-6)(t.w), s = k2(0.08)(0.2)(n), u = o * s, a = i * s, c = ae(0)(n) * 1.91986, l = (d, _, g) => {
    const p = xe(t)(c)(r)(r ? d : { ...d, x: 1 - d.x }), $ = xe(t)(c)(r)(r ? _ : { ..._, x: 1 - _.x }), h = xe(t)(c)(r)(r ? g : { ...g, x: 1 - g.x });
    return [4, p.x, p.y, $.x, $.y, h.x, h.y];
  };
  return {
    leaf: {
      face: [
        ...(() => {
          const d = { x: i, y: 0 }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 1 - d.x });
          return [1, _.x, _.y];
        })(),
        ...l({ x: i * 0.44771525016920644, y: 0 }, { x: 0, y: o * 0.44771525016920644 }, { x: 0, y: o }),
        ...(() => {
          const d = { x: 0, y: 1 - o }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 1 });
          return [2, _.x, _.y];
        })(),
        ...l({ x: 0, y: 1 - o * 0.44771525016920644 }, { x: i * 0.44771525016920644, y: 1 }, { x: i, y: 1 }),
        ...(() => {
          const d = { x: 0.5 - a, y: 1 }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 1 - d.x });
          return [2, _.x, _.y];
        })(),
        ...l({ x: 0.5 - a * 0.44771525016920644, y: 1 }, { x: 0.5, y: 1 - u * 0.44771525016920644 }, { x: 0.5, y: 1 - u }),
        ...(() => {
          const d = { x: 0.5, y: u }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 0.5 });
          return [2, _.x, _.y];
        })(),
        ...l({ x: 0.5, y: u * 0.44771525016920644 }, { x: 0.5 - a * 0.44771525016920644, y: 0 }, { x: 0.5 - a, y: 0 }),
        ...Ai
      ],
      labelAffine: bS(t)(c)(r),
      labelVisible: ie(c) > 0,
      outline: [
        ...(() => {
          const d = { x: 0.5, y: u }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 0.5 });
          return [1, _.x, _.y];
        })(),
        ...l({ x: 0.5, y: u * 0.44771525016920644 }, { x: 0.5 - a * 0.44771525016920644, y: 0 }, { x: 0.5 - a, y: 0 }),
        ...(() => {
          const d = { x: i, y: 0 }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 1 - d.x });
          return [2, _.x, _.y];
        })(),
        ...l({ x: i * 0.44771525016920644, y: 0 }, { x: 0, y: o * 0.44771525016920644 }, { x: 0, y: o }),
        ...(() => {
          const d = { x: 0, y: 1 - o }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 1 });
          return [2, _.x, _.y];
        })(),
        ...l({ x: 0, y: 1 - o * 0.44771525016920644 }, { x: i * 0.44771525016920644, y: 1 }, { x: i, y: 1 }),
        ...(() => {
          const d = { x: 0.5 - a, y: 1 }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 1 - d.x });
          return [2, _.x, _.y];
        })(),
        ...l({ x: 0.5 - a * 0.44771525016920644, y: 1 }, { x: 0.5, y: 1 - u * 0.44771525016920644 }, { x: 0.5, y: 1 - u })
      ]
    },
    seam: [
      ...(() => {
        const d = { x: 0.5, y: u }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 0.5 });
        return [1, _.x, _.y];
      })(),
      ...(() => {
        const d = { x: 0.5, y: 1 - u }, _ = xe(t)(c)(r)(r ? d : { ...d, x: 0.5 });
        return [2, _.x, _.y];
      })()
    ]
  };
}, AS = (t) => (n) => (e) => {
  const r = k2(0.08)(0.26)(n), o = Q1(t)(n)(e)(!1), i = Q1(t)(n)(e)(!0);
  return { leaves: [i.leaf, o.leaf], seams: [{ alpha: r, path: i.seam }, { alpha: r, path: o.seam }] };
}, RS = (t) => (n) => (e) => ae(0)(zo(t)(zo(ae(0)(n) / 2)(ae(0)(e) / 2))), FS = (t) => (n) => (e) => {
  const r = RS(e)(n.w)(n.h), o = PS(t), i = LS(n);
  if (i === "Fall")
    return { leaves: [SS(n)(o)(r)], seams: [] };
  if (i === "Split")
    return AS(n)(o)(r);
  f();
}, L2 = (t, n) => ({ tag: t, _1: n }), S2 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, GS = (t) => (n) => (e) => {
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
}, hi = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Z0 = /* @__PURE__ */ ws(Uo)(qt), IS = /* @__PURE__ */ L2("ResolvedLabels"), BS = (t) => {
  const n = Vt((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return Wa(t);
  f();
}, Fu = (t) => (n) => {
  const e = S2(1)(Cn(n.rootLayout).w), r = n.portalState.tag === "Closed" && n.levels.length === 1, o = (() => {
    if (r)
      return 1;
    if (n.portalState.tag === "Opening" || n.portalState.tag === "Closing") {
      if (n.portalState.tag === "Closed")
        return 1;
      if (n.portalState.tag === "Opening")
        return 1 - n.portalState._1;
      if (n.portalState.tag === "Open")
        return 0;
      if (n.portalState.tag === "Closing")
        return 1 - (1 - n.portalState._1);
      f();
    }
    return 0;
  })(), i = fr(n.rootLayout)(n.camera), s = r ? 1 : GS(0)(1)(i.w / e), u = Wa(n).state.frameTitle === "" ? 0 * s * o : 40 * s * o, a = t.padding * s * s * o;
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return LT;
    if (t.outputAspect.tag === "Just")
      return zh(t.outputAspect._1);
    f();
  })()({ vx: i.x - a, vy: i.y - a - u, vw: i.w + 2 * a, vh: i.h + 2 * a + u });
}, DS = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = hi(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, Eg = (t) => (n) => {
  const e = vv(n.segment.placement)({ x: t.vx, y: t.vy, w: t.vw, h: t.vh });
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, O1 = (t) => (n) => t === "" ? K(at("Return", void 0), ft) : Qi({
  owner: w5,
  text: t,
  spec: {
    x: n.vx + 6,
    y: n.vy + 6,
    content: t,
    font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
    color: { r: 180, g: 180, b: 180, a: 255 },
    align: Yo,
    baseline: kk
  },
  bounds: x,
  plan: jc
}), q1 = (t) => (n) => {
  if (t === "")
    return K(at("Return", void 0), ft);
  const e = n.vh / 720, r = 56 * e, o = So({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 56, weight: 700 })(t), i = (s) => {
    const u = r + 16 * e * 2, a = s * e + 28 * e * 2, c = n.vy + n.vh / 2, l = n.vx + n.vw / 2, d = { x: l - a / 2, y: c - u / 2, w: a, h: u };
    return yo($o(
      "TitleCardOverlay",
      {
        backing: {
          path: as(d)(16 * e),
          fill: T("Just", { color: { r: 255, g: 255, b: 255, a: 235 }, flat: !0 }),
          stroke: T(
            "Just",
            { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * e, lineJoin: ue, lineCap: vr }
          )
        },
        text: {
          owner: Xm,
          text: t,
          spec: {
            x: l,
            y: c,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 700 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: Eo,
            baseline: ze
          },
          bounds: T("Just", d),
          plan: jc
        }
      }
    ));
  };
  return K(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return j("CatCons", i, V(R, R));
      if (o._2.tag === "CatCons")
        return j(
          "CatCons",
          o._2._1,
          V(
            o._2._2._1,
            xt("Cons", j("CatCons", i, V(R, R)), o._2._2._2)
          )
        );
      f();
    })()
  );
}, X1 = (t) => (n) => {
  if (t === "")
    return K(at("Return", void 0), ft);
  const e = n.vh / 720, r = 15 * e, o = So({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 15, weight: 600 })(t), i = (s) => {
    const u = n.vy + 12 * e, a = r + 6 * e * 2, c = s * e + 11 * e * 2, l = n.vx + n.vw / 2, d = { x: l - c / 2, y: u, w: c, h: a };
    return yo($o(
      "FrameTitleOverlay",
      {
        backing: T(
          "Just",
          {
            path: as(d)(a / 2),
            fill: T("Just", { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }),
            stroke: T(
              "Just",
              { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * e, lineJoin: ue, lineCap: vr }
            )
          }
        ),
        text: {
          owner: Xm,
          text: t,
          spec: {
            x: l,
            y: u + a / 2,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 600 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: Eo,
            baseline: ze
          },
          bounds: T("Just", d),
          plan: jc
        }
      }
    ));
  };
  return K(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return j("CatCons", i, V(R, R));
      if (o._2.tag === "CatCons")
        return j(
          "CatCons",
          o._2._1,
          V(
            o._2._2._1,
            xt("Cons", j("CatCons", i, V(R, R)), o._2._2._2)
          )
        );
      f();
    })()
  );
}, zS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = bg(t.theme), c = (() => {
    if (u.tag === "ResolvedLabels")
      return N2(a)(o)(i)(s);
    if (u.tag === "SpringLabels")
      return oc(a)(i)(s)(h2(o)(u._1));
    f();
  })(), l = Ym({ viewport: o, clear: T("Just", t.transparentBg ? a.bgTransparent : a.bg), dots: x }), d = () => {
    const _ = Hn({
      path: [],
      role: we,
      layer: x,
      effects: e < 1 ? [Nn("GroupAlpha", e)] : []
    })((() => {
      const g = T2(a)(i)(s), p = () => {
        const $ = _2(r)(a)(t.halftoneShadows)(i)(s), h = () => {
          const m = v2((v) => r.tag !== "Nothing" && r.tag === "Just" && r._1 === v ? T("Just", 0) : x)(wg)(1)(a)(i)(s), y = () => {
            const v = x2(a)(i)(s), w = () => {
              const C = Y0(a)(o)(i)(s), J = () => {
                const k = w2(Ik)(a)(i)(s), E = () => {
                  const L = () => {
                    const I = GL(a)(i)(s);
                    return s.staticKind !== "Animated" ? I : K(at("Return", void 0), ft);
                  };
                  return K(
                    c._1,
                    (() => {
                      if (c._2.tag === "CatNil")
                        return j("CatCons", L, V(R, R));
                      if (c._2.tag === "CatCons")
                        return j(
                          "CatCons",
                          c._2._1,
                          V(
                            c._2._2._1,
                            xt(
                              "Cons",
                              j("CatCons", L, V(R, R)),
                              c._2._2._2
                            )
                          )
                        );
                      f();
                    })()
                  );
                };
                return K(
                  k._1,
                  (() => {
                    if (k._2.tag === "CatNil")
                      return j("CatCons", E, V(R, R));
                    if (k._2.tag === "CatCons")
                      return j(
                        "CatCons",
                        k._2._1,
                        V(
                          k._2._2._1,
                          xt(
                            "Cons",
                            j("CatCons", E, V(R, R)),
                            k._2._2._2
                          )
                        )
                      );
                    f();
                  })()
                );
              };
              return K(
                C._1,
                (() => {
                  if (C._2.tag === "CatNil")
                    return j("CatCons", J, V(R, R));
                  if (C._2.tag === "CatCons")
                    return j(
                      "CatCons",
                      C._2._1,
                      V(
                        C._2._2._1,
                        xt("Cons", j("CatCons", J, V(R, R)), C._2._2._2)
                      )
                    );
                  f();
                })()
              );
            };
            return K(
              v._1,
              (() => {
                if (v._2.tag === "CatNil")
                  return j("CatCons", w, V(R, R));
                if (v._2.tag === "CatCons")
                  return j(
                    "CatCons",
                    v._2._1,
                    V(
                      v._2._2._1,
                      xt("Cons", j("CatCons", w, V(R, R)), v._2._2._2)
                    )
                  );
                f();
              })()
            );
          };
          return K(
            m._1,
            (() => {
              if (m._2.tag === "CatNil")
                return j("CatCons", y, V(R, R));
              if (m._2.tag === "CatCons")
                return j(
                  "CatCons",
                  m._2._1,
                  V(
                    m._2._2._1,
                    xt("Cons", j("CatCons", y, V(R, R)), m._2._2._2)
                  )
                );
              f();
            })()
          );
        };
        return K(
          $._1,
          (() => {
            if ($._2.tag === "CatNil")
              return j("CatCons", h, V(R, R));
            if ($._2.tag === "CatCons")
              return j(
                "CatCons",
                $._2._1,
                V(
                  $._2._2._1,
                  xt("Cons", j("CatCons", h, V(R, R)), $._2._2._2)
                )
              );
            f();
          })()
        );
      };
      return K(
        g._1,
        (() => {
          if (g._2.tag === "CatNil")
            return j("CatCons", p, V(R, R));
          if (g._2.tag === "CatCons")
            return j(
              "CatCons",
              g._2._1,
              V(
                g._2._2._1,
                xt("Cons", j("CatCons", p, V(R, R)), g._2._2._2)
              )
            );
          f();
        })()
      );
    })());
    if (e > 0) {
      const g = () => {
        const p = O1(t.watermark)(o), $ = () => s.staticKind === "TitleCard" ? q1(s.frameTitle)(o) : X1(s.frameTitle)(o);
        return K(
          p._1,
          (() => {
            if (p._2.tag === "CatNil")
              return j("CatCons", $, V(R, R));
            if (p._2.tag === "CatCons")
              return j(
                "CatCons",
                p._2._1,
                V(
                  p._2._2._1,
                  xt("Cons", j("CatCons", $, V(R, R)), p._2._2._2)
                )
              );
            f();
          })()
        );
      };
      return K(
        _._1,
        (() => {
          if (_._2.tag === "CatNil")
            return j("CatCons", g, V(R, R));
          if (_._2.tag === "CatCons")
            return j(
              "CatCons",
              _._2._1,
              V(
                _._2._2._1,
                xt("Cons", j("CatCons", g, V(R, R)), _._2._2._2)
              )
            );
          f();
        })()
      );
    }
    return K(
      at("Return", void 0),
      j(
        "CatCons",
        () => {
          const g = O1(t.watermark)(o), p = () => s.staticKind === "TitleCard" ? q1(s.frameTitle)(o) : X1(s.frameTitle)(o);
          return K(
            g._1,
            (() => {
              if (g._2.tag === "CatNil")
                return j("CatCons", p, V(R, R));
              if (g._2.tag === "CatCons")
                return j(
                  "CatCons",
                  g._2._1,
                  V(
                    g._2._2._1,
                    xt("Cons", j("CatCons", p, V(R, R)), g._2._2._2)
                  )
                );
              f();
            })()
          );
        },
        V(R, R)
      )
    );
  };
  return K(
    l._1,
    (() => {
      if (l._2.tag === "CatNil")
        return j("CatCons", d, V(R, R));
      if (l._2.tag === "CatCons")
        return j(
          "CatCons",
          l._2._1,
          V(
            l._2._2._1,
            xt("Cons", j("CatCons", d, V(R, R)), l._2._2._2)
          )
        );
      f();
    })()
  );
}, HS = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = i.segment.path.length - 1 | 0, u = s >= 0 && s < i.segment.path.length ? T("Just", i.segment.path[s]) : x;
  if (u.tag === "Nothing")
    return K(at("Return", void 0), ft);
  if (u.tag === "Just") {
    const a = hi(u._1)(o.segment.layout.nodes);
    if (a.tag === "Nothing")
      return K(at("Return", void 0), ft);
    if (a.tag === "Just") {
      const c = a._1, l = hi(u._1)(o.state.nodes), d = (() => {
        if (l.tag === "Nothing")
          return ip;
        if (l.tag === "Just")
          return l._1;
        f();
      })(), _ = { color: t.nodeStroke, width: t.wobble ? 2 : 1.25, lineJoin: ue, lineCap: vr }, g = { ..._, width: 1.25 }, p = FS(r)({ x: c.x, y: c.y, w: c.w, h: c.h })(7);
      return Hn({
        path: o.segment.path,
        role: o.role,
        layer: x,
        effects: [
          Nn("GroupAlpha", o.bgAlpha),
          Nn("GroupTransform", wi, e)
        ]
      })((() => {
        const $ = Zc({
          id: u._1,
          role: C5,
          geometry: Yc("FlatNode", { shape: c.shape, bounds: { x: c.x, y: c.y + 5, w: c.w, h: c.h } }),
          alpha: 1,
          plan: Kc(
            "FlatNodePlan",
            {
              palette: t,
              label: c.label,
              labelVisibility: wu,
              inkBoost: n ? 1 : 0,
              labelAlpha: 0,
              outlineAlpha: T("Just", 1),
              arrival: x,
              animState: d
            }
          )
        }), h = () => {
          const m = yo($o(
            "FloorOverlay",
            { path: Vo(c), fill: x, stroke: T("Just", _) }
          )), y = () => {
            const v = Z0(p.leaves)((C) => {
              const J = yo($o(
                "FloorOverlay",
                { path: C.face, fill: T("Just", { color: t.nodeFill, flat: !1 }), stroke: x }
              ));
              if (J._2.tag === "CatNil")
                return K(
                  J._1,
                  j(
                    "CatCons",
                    () => yo($o(
                      "FloorOverlay",
                      { path: C.outline, fill: x, stroke: T("Just", _) }
                    )),
                    V(
                      R,
                      xt(
                        "Cons",
                        j(
                          "CatCons",
                          () => {
                            const k = Hn({
                              path: o.segment.path,
                              role: o.role,
                              layer: x,
                              effects: [Nn("GroupClip", C.face, Ko)]
                            })(U0(Ri("AffineText", C.labelAffine))(o.state.animationTime)(t)(1)(1)(u._1)(c)(d)(hi(u._1)(o.state.nodeLabels)));
                            return C.labelVisible ? k : K(at("Return", void 0), ft);
                          },
                          V(R, R)
                        ),
                        R
                      )
                    )
                  )
                );
              if (J._2.tag === "CatCons")
                return K(
                  J._1,
                  j(
                    "CatCons",
                    J._2._1,
                    V(
                      J._2._2._1,
                      xt(
                        "Cons",
                        j(
                          "CatCons",
                          () => {
                            const k = Hn({
                              path: o.segment.path,
                              role: o.role,
                              layer: x,
                              effects: [Nn("GroupClip", C.face, Ko)]
                            })(U0(Ri("AffineText", C.labelAffine))(o.state.animationTime)(t)(1)(1)(u._1)(c)(d)(hi(u._1)(o.state.nodeLabels)));
                            return C.labelVisible ? k : K(at("Return", void 0), ft);
                          },
                          V(R, R)
                        ),
                        xt(
                          "Cons",
                          j(
                            "CatCons",
                            () => yo($o(
                              "FloorOverlay",
                              { path: C.outline, fill: x, stroke: T("Just", _) }
                            )),
                            V(R, R)
                          ),
                          J._2._2._2
                        )
                      )
                    )
                  )
                );
              f();
            }), w = () => Z0(p.seams)((C) => {
              const J = Hn({
                path: o.segment.path,
                role: o.role,
                layer: x,
                effects: [Nn("GroupAlpha", C.alpha)]
              })(yo($o(
                "FloorOverlay",
                { path: C.path, fill: x, stroke: T("Just", g) }
              )));
              return C.alpha > 0 ? J : K(at("Return", void 0), ft);
            });
            return K(
              v._1,
              (() => {
                if (v._2.tag === "CatNil")
                  return j("CatCons", w, V(R, R));
                if (v._2.tag === "CatCons")
                  return j(
                    "CatCons",
                    v._2._1,
                    V(
                      v._2._2._1,
                      xt("Cons", j("CatCons", w, V(R, R)), v._2._2._2)
                    )
                  );
                f();
              })()
            );
          };
          return K(
            m._1,
            (() => {
              if (m._2.tag === "CatNil")
                return j("CatCons", y, V(R, R));
              if (m._2.tag === "CatCons")
                return j(
                  "CatCons",
                  m._2._1,
                  V(
                    m._2._2._1,
                    xt("Cons", j("CatCons", y, V(R, R)), m._2._2._2)
                  )
                );
              f();
            })()
          );
        };
        return K(
          $._1,
          (() => {
            if ($._2.tag === "CatNil")
              return j("CatCons", h, V(R, R));
            if ($._2.tag === "CatCons")
              return j(
                "CatCons",
                $._2._1,
                V(
                  $._2._2._1,
                  xt("Cons", j("CatCons", h, V(R, R)), $._2._2._2)
                )
              );
            f();
          })()
        );
      })());
    }
  }
  f();
}, E2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = [
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
  ], c = u.state, l = { tx: s.segment.placement.tx, ty: s.segment.placement.ty, sx: s.segment.placement.scale, sy: s.segment.placement.scale }, d = bg(t.theme), _ = u.segment.layout, g = Cn(_), p = { vx: g.x - 1e3, vy: g.y - 1e3, vw: g.w + 2e3, vh: g.h + 2e3 }, $ = u.segment.path.length - 1 | 0, h = $ >= 0 && $ < u.segment.path.length ? hi(u.segment.path[$])(s.segment.layout.nodes) : x, m = u.role === "Active" || 11 * u.segment.placement.scale * e >= 5 ? wg : wu, y = Eg(n.viewport)(u), v = (() => {
    if (m === "LabelsHidden")
      return K(at("Return", void 0), ft);
    if (m === "LabelsShown")
      return o.tag === "Leaf" ? N2(d)(y)(_)(c) : oc(d)(_)(c)(h2(y)(o));
    f();
  })(), w = { tx: u.segment.placement.tx, ty: u.segment.placement.ty, sx: u.segment.placement.scale, sy: u.segment.placement.scale }, C = Hn({
    path: u.segment.path,
    role: u.role,
    layer: x,
    effects: [Nn("GroupAlpha", u.bgAlpha)]
  })((() => {
    const k = Hn({
      path: u.segment.path,
      role: u.role,
      layer: x,
      effects: [
        Nn(
          "GroupClip",
          (() => {
            if (_p(r) >= 0.52)
              return a;
            const L = DS(s)((() => {
              const I = u.segment.path.length - 1 | 0;
              return I >= 0 && I < u.segment.path.length ? T("Just", u.segment.path[I]) : x;
            })());
            return L.length === 0 ? a : L;
          })(),
          Ko
        )
      ]
    })((() => {
      const L = (() => {
        if (h.tag === "Just")
          return Hn({
            path: s.segment.path,
            role: s.role,
            layer: x,
            effects: [Nn("GroupTransform", wi, l)]
          })(yo($o(
            "FloorOverlay",
            {
              path: Vo({
                ...h._1,
                x: h._1.x + 1,
                y: h._1.y + 1,
                w: h._1.w - 2,
                h: h._1.h - 2
              }),
              fill: T("Just", { color: d.bg, flat: !0 }),
              stroke: x
            }
          )));
        if (h.tag === "Nothing")
          return K(at("Return", void 0), ft);
        f();
      })(), I = (s.role === "Active" || s.role === "FlyThrough") && !t.transparentBg ? L : K(at("Return", void 0), ft), H = () => {
        const G = Hn({
          path: u.segment.path,
          role: u.role,
          layer: x,
          effects: [Nn("GroupTransform", wi, w)]
        })((() => {
          const ut = T2(d)(_)(c), ot = () => {
            const Z = _2(i)(d)(t.halftoneShadows)(_)(c), U = () => {
              const P = v2((Q) => i.tag !== "Nothing" && i.tag === "Just" && i._1 === Q ? T("Just", 0) : x)(m)(1)(d)(_)(c), A = () => {
                const Q = x2(d)(_)(c);
                return K(
                  Q._1,
                  (() => {
                    if (Q._2.tag === "CatNil")
                      return j(
                        "CatCons",
                        () => Y0(d)(p)(_)(c),
                        V(R, R)
                      );
                    if (Q._2.tag === "CatCons")
                      return j(
                        "CatCons",
                        Q._2._1,
                        V(
                          Q._2._2._1,
                          xt(
                            "Cons",
                            j(
                              "CatCons",
                              () => Y0(d)(p)(_)(c),
                              V(R, R)
                            ),
                            Q._2._2._2
                          )
                        )
                      );
                    f();
                  })()
                );
              };
              return K(
                P._1,
                (() => {
                  if (P._2.tag === "CatNil")
                    return j("CatCons", A, V(R, R));
                  if (P._2.tag === "CatCons")
                    return j(
                      "CatCons",
                      P._2._1,
                      V(
                        P._2._2._1,
                        xt("Cons", j("CatCons", A, V(R, R)), P._2._2._2)
                      )
                    );
                  f();
                })()
              );
            };
            return K(
              Z._1,
              (() => {
                if (Z._2.tag === "CatNil")
                  return j("CatCons", U, V(R, R));
                if (Z._2.tag === "CatCons")
                  return j(
                    "CatCons",
                    Z._2._1,
                    V(
                      Z._2._2._1,
                      xt("Cons", j("CatCons", U, V(R, R)), Z._2._2._2)
                    )
                  );
                f();
              })()
            );
          };
          return K(
            ut._1,
            (() => {
              if (ut._2.tag === "CatNil")
                return j("CatCons", ot, V(R, R));
              if (ut._2.tag === "CatCons")
                return j(
                  "CatCons",
                  ut._2._1,
                  V(
                    ut._2._2._1,
                    xt("Cons", j("CatCons", ot, V(R, R)), ut._2._2._2)
                  )
                );
              f();
            })()
          );
        })()), O = () => Hn({
          path: u.segment.path,
          role: u.role,
          layer: x,
          effects: [Nn("GroupTransform", T5, w)]
        })(w2(Bk)(d)(_)(c));
        return K(
          G._1,
          (() => {
            if (G._2.tag === "CatNil")
              return j("CatCons", O, V(R, R));
            if (G._2.tag === "CatCons")
              return j(
                "CatCons",
                G._2._1,
                V(
                  G._2._2._1,
                  xt("Cons", j("CatCons", O, V(R, R)), G._2._2._2)
                )
              );
            f();
          })()
        );
      };
      return K(
        I._1,
        (() => {
          if (I._2.tag === "CatNil")
            return j("CatCons", H, V(R, R));
          if (I._2.tag === "CatCons")
            return j(
              "CatCons",
              I._2._1,
              V(
                I._2._2._1,
                xt("Cons", j("CatCons", H, V(R, R)), I._2._2._2)
              )
            );
          f();
        })()
      );
    })()), E = () => Hn({
      path: u.segment.path,
      role: u.role,
      layer: x,
      effects: [Nn("GroupTransform", wi, w)]
    })(v);
    return K(
      k._1,
      (() => {
        if (k._2.tag === "CatNil")
          return j("CatCons", E, V(R, R));
        if (k._2.tag === "CatCons")
          return j(
            "CatCons",
            k._2._1,
            V(
              k._2._2._1,
              xt("Cons", j("CatCons", E, V(R, R)), k._2._2._2)
            )
          );
        f();
      })()
    );
  })()), J = () => s.role === "FlyThrough" ? HS(d)(t.halftoneShadows)(l)(r)(s)(u) : K(at("Return", void 0), ft);
  return K(
    C._1,
    (() => {
      if (C._2.tag === "CatNil")
        return j("CatCons", J, V(R, R));
      if (C._2.tag === "CatCons")
        return j(
          "CatCons",
          C._2._1,
          V(
            C._2._2._1,
            xt("Cons", j("CatCons", J, V(R, R)), C._2._2._2)
          )
        );
      f();
    })()
  );
}, WS = (t) => (n) => (e) => (r) => Z0(r.minis)((o) => {
  const i = E2(t)(n)(e)(cp)(z)(x)(r)(o);
  return (() => {
    const s = o.segment.path.length - 1 | 0;
    return o.bgAlpha > 0 && s >= 0 && s < o.segment.path.length && (() => {
      const u = hi(o.segment.path[s])(r.state.nodes);
      if (u.tag === "Just")
        return u._1.tag === "Hidden" ? !1 : u._1.tag !== "PloppingOut";
      if (u.tag === "Nothing")
        return !1;
      f();
    })();
  })() ? i : K(at("Return", void 0), ft);
}), QS = (t) => (n) => (e) => {
  if (t.theme === "Isometric")
    return TS({ ...hS, transparentBg: t.transparentBg })(t.theme)(Wa(e).segment.layout)(Wa(e).state);
  const r = Fu(t)(e), o = (a) => e.hasDives ? r.vw / S2(1)(Cn(e.rootLayout).w) : 1, i = { tileScale: o(), viewport: r }, s = (a) => (c) => {
    if (c.length === 0)
      return K(at("Return", void 0), ft);
    const l = Rt((d) => x, (d) => (_) => T("Just", { head: d, tail: _ }), c);
    if (l.tag === "Nothing")
      return K(at("Return", void 0), ft);
    if (l.tag === "Just") {
      const d = E2(t)(i)(e.camera.zoom)(e.portalState)(l._1.head.role === "Active" ? n : z)((() => {
        if (l._1.head.role === "FlyThrough" && 0 < l._1.tail.length) {
          const _ = l._1.tail[0].segment.path.length - 1 | 0;
          if (_ >= 0 && _ < l._1.tail[0].segment.path.length)
            return T("Just", l._1.tail[0].segment.path[_]);
        }
        return x;
      })())(a)(l._1.head);
      return l._1.head.role === "Active" || l._1.head.role === "FlyThrough" ? K(
        d._1,
        (() => {
          if (d._2.tag === "CatNil")
            return j("CatCons", () => s(l._1.head)(l._1.tail), V(R, R));
          if (d._2.tag === "CatCons")
            return j(
              "CatCons",
              d._2._1,
              V(
                d._2._2._1,
                xt(
                  "Cons",
                  j("CatCons", () => s(l._1.head)(l._1.tail), V(R, R)),
                  d._2._2._2
                )
              )
            );
          f();
        })()
      ) : K(
        at("Return", void 0),
        j("CatCons", () => s(l._1.head)(l._1.tail), V(R, R))
      );
    }
    f();
  }, u = Rt((a) => x, (a) => (c) => T("Just", { head: a, tail: c }), e.levels);
  if (u.tag === "Nothing")
    return K(at("Return", void 0), ft);
  if (u.tag === "Just") {
    const a = u._1.tail, c = u._1.head, l = a.length === 0, d = zS(t)(o())(c.role === "Active" || c.role === "FlyThrough" ? c.bgAlpha : 0)((() => {
      if (c.role === "FlyThrough" && 0 < a.length) {
        const g = a[0].segment.path.length - 1 | 0;
        if (g >= 0 && g < a[0].segment.path.length)
          return T("Just", a[0].segment.path[g]);
      }
      return x;
    })())(r)(c.segment.layout)(BS(e).state)(l && n.tag !== "Leaf" ? L2("SpringLabels", n) : IS), _ = () => {
      const g = WS(t)(i)(e.camera.zoom)(c);
      return c.role === "Active" || c.role === "FlyThrough" ? K(
        g._1,
        (() => {
          if (g._2.tag === "CatNil")
            return j("CatCons", () => s(c)(a), V(R, R));
          if (g._2.tag === "CatCons")
            return j(
              "CatCons",
              g._2._1,
              V(
                g._2._2._1,
                xt(
                  "Cons",
                  j("CatCons", () => s(c)(a), V(R, R)),
                  g._2._2._2
                )
              )
            );
          f();
        })()
      ) : K(
        at("Return", void 0),
        j("CatCons", () => s(c)(a), V(R, R))
      );
    };
    return K(
      d._1,
      (() => {
        if (d._2.tag === "CatNil")
          return j("CatCons", _, V(R, R));
        if (d._2.tag === "CatCons")
          return j(
            "CatCons",
            d._2._1,
            V(
              d._2._2._1,
              xt("Cons", j("CatCons", _, V(R, R)), d._2._2._2)
            )
          );
        f();
      })()
    );
  }
  f();
}, tl = (t) => (n) => (e) => L5({ viewport: Fu(t)(e), camera: e.camera })(QS(t)(n)(e)), Vf = (t) => (n) => {
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
}, OS = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ro(n.Applicative0())(Tc), o = m2(t);
  return (i) => {
    if (i.tag === "FrameTitleOverlay") {
      const s = i._1;
      return e.bind(r(Vf(t))(s.backing))(() => o(s.text));
    }
    if (i.tag === "TitleCardOverlay") {
      const s = i._1;
      return e.bind(Vf(t)(s.backing))(() => o(s.text));
    }
    if (i.tag === "FloorOverlay")
      return Vf(t)(i._1);
    f();
  };
}, qS = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = ro(e)(qt), o = t.popTransform, i = t.popBakedTransform, s = (() => {
    const a = t.popClip, c = t.popAlpha, l = t.popBlend, d = t.popBlur;
    return (_) => {
      if (_.tag === "GroupTransform") {
        if (_._1 === "NormalTransform")
          return o;
        if (_._1 === "BakedTransform")
          return i;
        f();
      }
      if (_.tag === "GroupClip")
        return a;
      if (_.tag === "GroupAlpha")
        return c;
      if (_.tag === "GroupBlend")
        return l;
      if (_.tag === "GroupBlur")
        return d;
      f();
    };
  })(), u = t.popLayer;
  return (a) => n.Bind1().bind(r(s)(un(a.effects)))(() => {
    if (a.layer.tag === "Just")
      return u;
    if (a.layer.tag === "Nothing")
      return e.pure();
    f();
  });
}, XS = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = ro(e)(qt);
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
}, P2 = (t) => {
  const n = t.Monad0(), e = BL(t), r = _S(t), o = jL(t), i = NS(t), s = PL(t), u = dS(t);
  return b5(n)({
    beginFrame: (a) => t.setViewport(a.viewport),
    endFrame: n.Applicative0().pure(),
    beginGroup: XS(t),
    endGroup: qS(t),
    background: kL(t),
    overlay: OS(t),
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
    text: m2(t),
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
}, MS = kg(Gm)(Tg.measureText), M1 = /* @__PURE__ */ P2(Tg), A2 = (t) => Fu({
  padding: 24,
  outputAspect: t.width <= 0 || t.height <= 0 ? x : T("Just", t.width / t.height)
}), US = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
    outputAspect: r.width <= 0 || r.height <= 0 ? x : T("Just", r.width / r.height)
  }, a = Rm(e)(r);
  return () => {
    const c = a(), l = o.levels.length - 1 | 0;
    if (l >= 0 && l < o.levels.length) {
      const _ = MS(Eg(A2(r)(o))(o.levels[l]))(o.levels[l].segment.layout)(o.levels[l].state)(c)(), g = P0(i)(_)(s);
      return M1(tl(u)(g.applied)(o))(c)(), g.springs;
    }
    const d = P0(i)(z)(s);
    return M1(tl(u)(d.applied)(o))(c)(), d.springs;
  };
}, Gu = (t) => "rgb(" + en(t.r) + "," + en(t.g) + "," + en(t.b) + ")", fi = (t) => t === 1 ? 7 : t === 2 ? 10 : t === 3 ? 14 : t === 4 ? 13 : t === 5 ? 5 : t === 6 ? 1 : t === 7 ? 4 : t === 8 ? 1 : t === 9 ? 2 : t === 10 ? 1 : t === 11 ? 2 : t === 12 ? 1 : t === 18 ? 2 : t === 19 ? 1 : t === 13 ? 2 : t === 14 ? 1 : t === 15 || t === 16 ? 5 : 1, hn = /* @__PURE__ */ Lc(/* @__PURE__ */ bc("Fixed", /* @__PURE__ */ kc(0)(20)(2))), Pg = (t) => {
  const n = (e) => {
    const r = e >= 0 && e < t.length ? T("Just", t[e]) : x;
    if (r.tag === "Just")
      return r._1 === 1 ? [
        "M",
        hn((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 3 | 0)
      ] : r._1 === 2 ? [
        "L",
        hn((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 3 | 0)
      ] : r._1 === 3 ? [
        "Q",
        hn((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 3 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 4 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 5 | 0)
      ] : r._1 === 4 ? [
        "C",
        hn((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 3 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 4 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 5 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        hn((() => {
          const o = e + 6 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 7 | 0)
      ] : r._1 === 5 ? ["Z", ...n(e + 1 | 0)] : [];
    if (r.tag === "Nothing")
      return [];
    f();
  };
  return dr(" ")(n(0));
}, YS = (t) => hn(t.vx) + " " + hn(t.vy) + " " + hn(t.vw) + " " + hn(t.vh), er = (t) => (n) => mn(ar(n >= 0 && n < t.length ? t[n] : 0)), jf = (t) => (n) => {
  const e = er(t.ops)(n + 1 | 0);
  return Ft(e, e + er(t.ops)(n + 2 | 0) | 0, t.paths);
}, U1 = /* @__PURE__ */ (() => {
  const t = $r("&")("&amp;"), n = $r("<")("&lt;"), e = (() => {
    const r = $r(">")("&gt;"), o = (() => {
      const i = $r('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), KS = { vx: 0, vy: 0, vw: 1, vh: 1 }, VS = (t) => ((e) => {
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
      r = s + fi(t[s]) | 0;
      continue;
    }
    o = !1, i = KS;
  }
  return i;
})(0), ru = (t) => (n) => ({ r: er(t)(n), g: er(t)(n + 1 | 0), b: er(t)(n + 2 | 0), a: er(t)(n + 3 | 0) }), Y1 = (t) => (n) => ({
  color: ru(t)(n),
  width: (() => {
    const e = n + 4 | 0;
    return e >= 0 && e < t.length ? t[e] : 0;
  })(),
  join: er(t)(n + 5 | 0),
  cap: er(t)(n + 6 | 0)
}), jS = (t) => (n) => '<rect x="' + hn(t.vx) + '" y="' + hn(t.vy) + '" width="' + hn(t.vw) + '" height="' + hn(t.vh) + '" fill="' + Gu(n) + '" opacity="' + hn(tt(n.a) / 255) + '"/>', ZS = (t) => (n) => '<path d="' + Pg(t) + '" fill="' + Gu(n) + '" fill-opacity="' + hn(tt(n.a) / 255) + '"/>', R2 = (t) => ' stroke="' + Gu(t.color) + '" stroke-opacity="' + hn(tt(t.color.a) / 255) + '" stroke-width="' + hn(t.width) + '" stroke-linejoin="' + (t.join === 0 ? "round" : t.join === 1 ? "bevel" : "miter") + '" stroke-linecap="' + (t.cap === 0 ? "butt" : t.cap === 1 ? "round" : "square") + '"', tE = (t) => (n) => (e) => '<path d="' + Pg(t) + '" fill="' + Gu(n) + '" fill-opacity="' + hn(tt(n.a) / 255) + '"' + R2(e) + "/>", nE = (t) => (n) => '<path d="' + Pg(t) + '" fill="none"' + R2(n) + "/>", eE = (t) => (n) => {
  const e = ru(t.ops)(n + 7 | 0), r = er(t.ops)(n + 12 | 0), o = er(t.ops)(n + 11 | 0);
  return '<text x="' + hn((() => {
    const i = n + 1 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" y="' + hn((() => {
    const i = n + 2 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '"' + (r === 0 ? ' dy="0.8em"' : r === 1 ? ' dy="0.32em"' : "") + ' fill="' + Gu(e) + '" fill-opacity="' + hn(tt(e.a) / 255) + '" font-size="' + hn((() => {
    const i = n + 5 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" font-family="' + U1((() => {
    const i = er(t.ops)(n + 4 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] + ", ui-sans-serif, system-ui, sans-serif" : ", ui-sans-serif, system-ui, sans-serif";
  })()) + '" font-weight="' + en(er(t.ops)(n + 6 | 0)) + '" text-anchor="' + (o === 0 ? "start" : o === 1 ? "middle" : "end") + '">' + U1((() => {
    const i = er(t.ops)(n + 3 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] : "";
  })()) + "</text>";
}, li = (t) => (n) => (e) => {
  const r = e >= 0 && e < n.ops.length ? T("Just", n.ops[e]) : x;
  if (r.tag === "Just")
    return r._1 === 1 ? ZS(jf(n)(e))(ru(n.ops)(e + 3 | 0)) + li(t)(n)(e + fi(r._1) | 0) : r._1 === 2 ? nE(jf(n)(e))(Y1(n.ops)(e + 3 | 0)) + li(t)(n)(e + fi(r._1) | 0) : r._1 === 3 ? tE(jf(n)(e))(ru(n.ops)(e + 3 | 0))(Y1(n.ops)(e + 7 | 0)) + li(t)(n)(e + fi(r._1) | 0) : r._1 === 4 ? eE(n)(e) + li(t)(n)(e + fi(r._1) | 0) : r._1 === 16 ? jS(t)(ru(n.ops)(e + 1 | 0)) + li(t)(n)(e + fi(r._1) | 0) : li(t)(n)(e + fi(r._1) | 0);
  if (r.tag === "Nothing")
    return "";
  f();
}, rE = (t) => {
  const n = VS(t.ops);
  return { viewBox: YS(n), body: li(n)(t)(0), vx: n.vx, vy: n.vy, vw: n.vw, vh: n.vh };
}, oE = /* @__PURE__ */ gk(pk)(Qy), K1 = (t) => (n) => {
  const e = t.strs;
  return () => {
    const r = _l(e);
    return t.strs.push(n), r;
  };
}, ia = (t) => (n) => {
  const e = t.paths;
  return () => {
    const r = _l(e);
    return t.paths.push(...n), { offset: r, len: n.length };
  };
}, iE = (t) => (n) => {
  const e = n.tx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.ty), t.ops.push(n.sx), t.ops.push(n.sy);
  };
}, V1 = (t) => (n) => {
  const e = n.vx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.vy), t.ops.push(n.vw), t.ops.push(n.vh);
  };
}, To = (t) => (n) => {
  const e = tt(n), r = t.ops;
  return () => {
    r.push(e);
  };
}, sa = (t) => (n) => {
  const e = n.len, r = To(t)(n.offset);
  return () => (r(), To(t)(e)());
}, sE = () => {
  const t = [], n = [], e = [], r = [];
  return r.push(1), { ops: t, paths: n, strs: e, alphaStack: r };
}, uE = (t) => {
  if (t.tag === "MeasureText") {
    const n = t._3(pg(t._1)(t._2));
    return () => n;
  }
  if (t.tag === "MeasureInk") {
    const n = t._3(mg(t._1)(t._2));
    return () => n;
  }
  f();
}, F2 = (t) => {
  const n = t.alphaStack;
  return () => {
    const e = _l(n);
    if (e === 0)
      return 1;
    const r = qy(Ht, x, e - 1 | 0, t.alphaStack);
    if (r.tag === "Nothing")
      return 1;
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, gi = (t) => (n) => {
  const e = F2(t);
  return () => {
    const r = e();
    return To(t)(n.r)(), To(t)(n.g)(), To(t)(n.b)(), To(t)(mn(ar(tt(n.a) * r + 0.5)))();
  };
}, j1 = (t) => (n) => {
  const e = gi(t)(n.color);
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
}, aE = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r;
    if (u.tag === "FillPath") {
      const a = u._3, c = u._2, l = ia(s)(u._1);
      o = !1, i = () => {
        const d = l();
        return s.ops.push(1), sa(s)(d)(), gi(s)(c.color)(), a;
      };
      continue;
    }
    if (u.tag === "StrokePath") {
      const a = u._3, c = u._2, l = ia(s)(u._1);
      o = !1, i = () => {
        const d = l();
        return s.ops.push(2), sa(s)(d)(), j1(s)(c)(), a;
      };
      continue;
    }
    if (u.tag === "FillStrokePath") {
      const a = u._2, c = u._4, l = u._3, d = ia(s)(u._1);
      o = !1, i = () => {
        const _ = d();
        return s.ops.push(3), sa(s)(_)(), gi(s)(a.color)(), j1(s)(l)(), c;
      };
      continue;
    }
    if (u.tag === "DrawText") {
      const a = u._2, c = u._1, l = K1(s)(Ei(c.content));
      o = !1, i = () => {
        const d = l(), _ = K1(s)(c.font.family)();
        return s.ops.push(4), s.ops.push(c.x), s.ops.push(c.y), To(s)(d)(), To(s)(_)(), s.ops.push(c.font.size), To(s)(c.font.weight)(), gi(s)(c.color)(), s.ops.push((() => {
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
      e = s, r = jt(
        "DrawText",
        { ...u._2, x: u._1.a * u._2.x + u._1.c * u._2.y + u._1.e, y: u._1.b * u._2.x + u._1.d * u._2.y + u._1.f },
        u._3
      );
      continue;
    }
    if (u.tag === "PushTransform") {
      const a = u._2, c = u._1, l = s.ops;
      o = !1, i = () => (l.push(5), iE(s)(c)(), a);
      continue;
    }
    if (u.tag === "PopTransform") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(6), a);
      continue;
    }
    if (u.tag === "PushClip") {
      const a = u._3, c = u._2, l = ia(s)(u._1);
      o = !1, i = () => {
        const d = l();
        return s.ops.push(7), sa(s)(d)(), s.ops.push((() => {
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
      const a = u._1, c = u._2, l = F2(s);
      o = !1, i = () => {
        const d = l();
        return s.alphaStack.push(d * a), s.ops.push(11), s.ops.push(a), c;
      };
      continue;
    }
    if (u.tag === "PopAlpha") {
      const a = u._1, c = s.alphaStack;
      o = !1, i = () => (Xy(Ht, x, c), s.ops.push(12), a);
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
      o = !1, i = () => (l.push(15), V1(s)(c)(), a);
      continue;
    }
    if (u.tag === "ClearBackground") {
      const a = u._1, c = u._2, l = s.ops;
      o = !1, i = () => (l.push(16), gi(s)(a)(), c);
      continue;
    }
    if (u.tag === "BackgroundDots") {
      const a = u._2, c = u._1, l = s.ops;
      o = !1, i = () => (l.push(17), V1(s)(c.viewport)(), gi(s)(c.bgColor)(), gi(s)(c.dotColor)(), s.ops.push(c.tile), s.ops.push(c.dotRadius), s.ops.push(c.origin.x), s.ops.push(c.origin.y), a);
      continue;
    }
    f();
  }
  return i;
}, cE = (t) => (n) => n.type === "metrics" ? uE(n.value) : n.type === "render" ? aE(t)(n.value) : Ja("Data.Functor.Variant: pattern match failure [" + n.type + "]"), fE = (t) => {
  const n = sE();
  return oE(cE(n))(t)(), { ops: n.ops, paths: n.paths, strs: n.strs };
}, G2 = (t) => t, Iu = (t) => t, Z1 = /* @__PURE__ */ Iu("Light"), lE = /* @__PURE__ */ Iu("Dark"), gE = /* @__PURE__ */ Iu("Blueprint"), _E = /* @__PURE__ */ Iu("Whiteboard"), dE = /* @__PURE__ */ Iu("Isometric"), hE = /* @__PURE__ */ G2("PaintBackground"), pE = /* @__PURE__ */ G2("TransparentBackground"), jo = (t) => "rgb(" + en(t.r) + "," + en(t.g) + "," + en(t.b) + ")", ua = /* @__PURE__ */ Lc(/* @__PURE__ */ bc("Fixed", /* @__PURE__ */ kc(0)(20)(6))), Mr = /* @__PURE__ */ Lc(/* @__PURE__ */ bc("Fixed", /* @__PURE__ */ kc(0)(20)(4))), mE = (t) => "translate(" + Mr(t.tx) + "," + Mr(t.ty) + ") scale(" + Mr(t.sx) + "," + Mr(t.sy) + ")", Ut = /* @__PURE__ */ Lc(/* @__PURE__ */ bc("Fixed", /* @__PURE__ */ kc(0)(20)(2))), Ag = (t) => {
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
        n.push("M"), n.push(Ut((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(Ut((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(Ut((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(Ut((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Ut((() => {
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
  return dr(" ")(n);
}, $E = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Ys = /* @__PURE__ */ (() => {
  const t = $r("&")("&amp;"), n = $r("<")("&lt;"), e = (() => {
    const r = $r(">")("&gt;"), o = (() => {
      const i = $r('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), yE = (t) => {
  if (t.style === "RunText" || t.style === "RunHighlight")
    return "<tspan>" + Ys(t.text) + "</tspan>";
  if (t.style === "RunCode" || t.style === "RunCodeHighlight")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + Ys(t.text) + "</tspan>";
  f();
}, le = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, xE = (t) => (n) => {
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
}, aa = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return xE(r._1)(n);
    f();
  };
}, I2 = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => $E
}, vE = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => I2
}, TE = { pure: (t) => (n) => () => t, Apply0: () => I2 }, B2 = { Applicative0: () => TE, Bind1: () => vE }, wE = (t) => (n) => '<defs><pattern id="' + t + '" x="' + Ut(n.origin.x) + '" y="' + Ut(n.origin.y) + '" width="' + Ut(n.tile) + '" height="' + Ut(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + Ut(n.tile) + '" height="' + Ut(n.tile) + '" fill="' + jo(n.bgColor) + '" fill-opacity="' + Ut(tt(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + Ut(n.tile / 2) + '" cy="' + Ut(n.tile / 2) + '" r="' + Ut(n.dotRadius) + '" fill="' + jo(n.dotColor) + '"/></pattern></defs><rect x="' + Ut(n.viewport.vx) + '" y="' + Ut(n.viewport.vy) + '" width="' + Ut(n.viewport.vw) + '" height="' + Ut(n.viewport.vh) + '" fill="url(#' + t + ')"/>', td = (t) => (n) => '<path d="' + Ag(t) + '" fill="' + jo(n) + '" fill-opacity="' + Ut(tt(n.a) / 255) + '"/>', NE = (t) => (n) => (e) => (r) => '<rect x="' + Ut(t.x) + '" y="' + Ut(t.y) + '" width="' + Ut(t.w) + '" height="' + Ut(t.h) + '" rx="' + Ut(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + jo(e._1.color) + '" fill-opacity="' + Ut(tt(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + jo(r._1.color) + '" stroke-opacity="' + Ut(tt(r._1.color.a) / 255) + '" stroke-width="' + Ut(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", nd = (t) => (n) => '<path d="' + Ag(t) + '" fill="none" stroke="' + jo(n.color) + '" stroke-opacity="' + Ut(tt(n.color.a) / 255) + '" stroke-width="' + Ut(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', ed = (t) => {
  const n = Pr(Ei(t.content));
  return '<text x="' + Ut(t.x) + '" y="' + Ut(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + jo(t.color) + '" fill-opacity="' + Ut(tt(t.color.a) / 255) + '" font-size="' + Ut(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + en(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? Ys(n[0].text) : dr("")(B(yE)(n))) + "</text>";
}, CE = (t) => "matrix(" + Mr(t.a) + " " + Mr(t.b) + " " + Mr(t.c) + " " + Mr(t.d) + " " + Mr(t.e) + " " + Mr(t.f) + ")", D2 = {
  fillPath: (t) => (n) => (e) => {
    const r = aa(e)(t);
    return () => {
      const o = r();
      return le(td(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = aa(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return le(nd(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = aa(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return le(td(i)(n.color) + nd(i)((() => {
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
      return le(NE((() => {
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
      return le(ed((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => le((() => {
    const e = 'transform="' + CE(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + ed(n) + "</g>";
  })()),
  pushTransform: (t) => le((() => {
    const n = 'transform="' + mE(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ le("</g>"),
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
      const i = aa(e)(t)(), s = "clip" + en(o);
      return le((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + Ag(i) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          f();
        })() + "/></clipPath></defs>" + (u === "" ? "<g>" : "<g " + u + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ le("</g>"),
  pushBlend: (t) => le((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      f();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ le("</g>"),
  pushAlpha: (t) => le((() => {
    const n = 'opacity="' + Ut(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ le("</g>"),
  pushBlur: (t) => (n) => {
    if (t < 0.01)
      return le("<g>")(n);
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      n.patternCounter.value = r + 1 | 0;
      const o = "lvl-blur-" + en(r);
      return le((() => {
        const i = 'filter="url(#' + o + ')"';
        return '<defs><filter id="' + o + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="' + Ut(t) + '"/></filter></defs>' + (i === "" ? "<g>" : "<g " + i + ">");
      })())(n)();
    };
  },
  popBlur: /* @__PURE__ */ le("</g>"),
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
  clearBackground: (t) => (n) => le('<rect x="' + Ut(n.viewport.vx) + '" y="' + Ut(n.viewport.vy) + '" width="' + Ut(n.viewport.vw) + '" height="' + Ut(n.viewport.vh) + '" fill="' + jo(t) + '" opacity="' + Ut(tt(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, le(wE("bg-dots-" + en(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = pg(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = mg(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => xg,
  Monad0: () => B2
}, JE = /* @__PURE__ */ P2(D2), bE = kg(B2)(D2.measureText), kE = (t) => (n) => (e) => (r) => (o) => {
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
  }, s = Fu(i)(o);
  return {
    viewBox: ua(s.vx) + " " + ua(s.vy) + " " + ua(s.vw) + " " + ua(s.vh),
    body: (() => {
      const u = [], a = { value: 0 }, c = { value: 0 }, l = { value: 0 }, d = { value: x };
      return JE(tl(i)(n)(o))({ out: u, maskDepth: a, clipCounter: c, patternCounter: l, viewport: s, bake: d })(), dr("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, LE = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  }, u = P0(o)((() => {
    const a = [], c = { value: 0 }, l = { value: 0 }, d = { value: 0 }, _ = { value: x }, g = r.levels.length - 1 | 0;
    if (g >= 0 && g < r.levels.length) {
      const p = Eg(Fu(s)(r))(r.levels[g]);
      return bE(p)(r.levels[g].segment.layout)(r.levels[g].state)({
        out: a,
        maskDepth: c,
        clipCounter: l,
        patternCounter: d,
        viewport: p,
        bake: _
      })();
    }
    return z;
  })())(i);
  return { parts: kE(t)(u.applied)(n)(e)(r), springs: u.springs };
}, Ho = (t, n) => ({ tag: t, _1: n }), ef = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ke = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, z2 = /* @__PURE__ */ dn(F)(qt), rd = (t) => (e) => {
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
}, H2 = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ic = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, sc = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ai = /* @__PURE__ */ (() => {
  const t = Re.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return T("Just", S(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, xt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, R);
  })());
})(), SE = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), nl = (t) => (e) => {
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
}, W2 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, EE = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ca = (t) => (e) => {
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
}, PE = /* @__PURE__ */ Ho("NoKeyframes"), AE = (t) => Ho("DuplicateEventId", t), RE = (t) => Ho("UnknownEvent", t), Q2 = (t) => (n) => ({
  ...n,
  cameraSpans: op(n.cameraConfig)(t)(n.layout)(n.keyframes)({
    endT: n.totalDuration,
    spans: n.spans,
    windows: n.windows,
    segments: n.segments,
    dives: n.dives
  })
}), FE = (t) => (n) => (e) => (r) => {
  const o = ef(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return Fc(o._1);
    f();
  })(), s = Ke(t.minTokenDuration)(Ke(tt(N((u) => (a) => u + ve(a).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.post;
  return { duration: s, holdPre: 0, holdPost: s <= 0 ? 0 : e.post / s };
}, GE = /* @__PURE__ */ Cc((t) => {
  const n = Hi(`
`)(t);
  return n.length === 0 ? [""] : n;
}), IE = (t) => (n) => z2(Tt((e) => {
  if (e.kind.tag === "SendToken")
    return T(
      "Just",
      S(
        e.id,
        {
          post: (() => {
            const r = e.id;
            return (() => {
              const o = e.kind._1.to;
              return sn(
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
})(n)), BE = (t) => {
  if (t.event.kind.tag === "SendToken")
    return T(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: _i(
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
      { startT: t.startT, endT: t.endT, target: _i("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) }
    );
  f();
}, DE = (t) => Tt((() => {
  const n = t.path;
  return (e) => e.target.tag === "TokenWindow" ? T(
    "Just",
    { path: n, eventId: e.target._1, window: e, from: e.target._4, to: e.target._5, labels: e.target._6, holdPre: e.target._7, holdPost: e.target._8 }
  ) : x;
})())(t.windows), zE = (t) => (n) => (e) => {
  const r = ef(e)(t);
  if (r.tag === "Nothing")
    return R_;
  if (r.tag === "Just") {
    const o = rd(r._1.target)(n);
    return rd(r._1.source)(n) ? o ? Sw : Lw : R_;
  }
  f();
}, od = (t) => (n) => {
  if (t.tag === "Just" && t._1 > n.endT + 1e-4) {
    const e = Ke(0)(n.endT - n.startT), r = Ke(n.startT)(t._1 - e);
    return { ...n, startT: r, endT: r + e };
  }
  return n;
}, O2 = /* @__PURE__ */ B(ko), HE = { post: 0 }, WE = (t) => (n) => (e) => (r) => (o) => {
  const i = H2(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return HE;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const c = o.event.when._1, l = Vt((d) => d.event.id === c)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const c = o.event.when._1, l = Vt((d) => d.event.id === c)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.startT;
    }
    f();
  })(), a = (() => {
    if (o.event.kind.tag === "SendToken")
      return FE(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return Lt(r)({ startT: u, endT: u + a.duration, event: o.event, holdPre: a.holdPre, holdPost: a.holdPost });
}, q2 = (t) => (n) => (e) => N(WE(t)(n)(IE(t)(e)))([])(Qt((r) => (o) => ({ event: o }))(e)), QE = (t) => N((n) => (e) => {
  const r = ur(n);
  if (r.tag === "Nothing")
    return [e];
  if (r.tag === "Just")
    return e.startT <= r._1.last.endT + 1e-4 ? Lt(r._1.init)({ ...r._1.last, endT: Ke(r._1.last.endT)(e.endT) }) : Lt(n)(e);
  f();
})([])(Bt((n) => (e) => st.compare(n.startT)(e.startT))(t)), OE = (t) => (n) => {
  const e = ic(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, qE = (t) => (n) => {
  const e = Bt(st.compare)(Tt((r) => r.target.tag === "RelabelWindow" ? r.target._1 === n ? T("Just", r.startT) : x : r.target.tag === "TokenWindow" ? r.target._4 === n || r.target._5 === n ? T("Just", r.startT) : x : r.target.tag === "FillWindow" && r.target._2 === n ? T("Just", r.startT) : x)(t));
  return 0 < e.length ? T("Just", e[0]) : x;
}, XE = (t) => (n) => {
  const e = Bt(st.compare)(Tt((r) => r.target.tag === "TokenWindow" && r.target._2 === n ? T("Just", r.startT) : x)(t));
  return 0 < e.length ? T("Just", e[0]) : x;
}, ME = (t) => (n) => n.target.tag === "NodeWindow" ? n.target._2 === "PlopIn" ? od(qE(t.windows)(n.target._1))(n) : n : n.target.tag === "EdgeWindow" && n.target._2.tag === "Extend" ? od(XE(t.windows)(n.target._1))(n) : n, UE = (t) => ({ ...t, windows: Bt((n) => (e) => st.compare(n.startT)(e.startT))(B(ME(t))(t.windows)) }), YE = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, uc = { id: "", nodes: z, edges: z, labels: z, kind: Su }, KE = (t) => (n) => Gv((() => {
  const e = sc(n.from)(t);
  if (e.tag === "Nothing")
    return uc;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = sc(n.to)(t);
  if (e.tag === "Nothing")
    return uc;
  if (e.tag === "Just")
    return e._1;
  f();
})()), VE = (t) => (n) => {
  const e = ic(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: z };
  if (e.tag === "Just")
    return e._1;
  f();
}, X2 = { id: "", index: -1, kind: "", name: "", time: 0, endTime: 0, path: [], tokenIndex: -1, lineIndex: -1, text: "", from: "", to: "" }, jE = (t) => (n) => n.scene.tag === "StepScene" ? T(
  "Just",
  { ...X2, id: "step:" + n.scene._1, kind: "step", name: n.scene._1, time: n.startT, endTime: n.startT, path: O2(t) }
) : x, ZE = (t) => Tt(jE(t.path))(t.spans), Zf = (t) => (n) => (e) => (r) => {
  const o = ef(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Ke(n)(Fc(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, M2 = (t) => (n) => (e) => (r) => (o) => {
  const i = sc(o.to)(e), s = (() => {
    if (i.tag === "Nothing")
      return uc;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = t.plop, a = sc(o.from)(e), c = (() => {
    if (a.tag === "Nothing")
      return uc;
    if (a.tag === "Just")
      return a._1;
    f();
  })(), l = KE(e)(o), d = B((y) => ({
    startT: 0,
    endT: 0 + Zf(t.edgeSpeed)(t.minEdgeDuration)(n)(y),
    target: _i(
      "EdgeWindow",
      y,
      Ra("Extend", y0)
    )
  }))(ai(l.entering.edges)), _ = B((y) => ({ startT: 0, endT: u, target: _i("NodeWindow", y, $0) }))(ai(l.entering.nodes)), g = B((y) => ({ startT: 0, endT: t.plop, target: _i("RelabelWindow", y.node, y.oldLabel, y.newLabel) }))(Tt((y) => {
    const v = ic(y)(c.labels);
    if (v.tag === "Just") {
      const w = ic(y)(s.labels);
      if (w.tag === "Just")
        return v._1 === w._1 ? x : T("Just", { node: y, oldLabel: v._1, newLabel: w._1 });
      if (w.tag === "Nothing")
        return x;
      f();
    }
    if (v.tag === "Nothing")
      return x;
    f();
  })(ai(l.surviving.nodes))), p = N(Ke)(0)(B((y) => Zf(t.edgeSpeed)(t.minEdgeDuration)(n)(y))(ai(l.leaving.edges))), $ = (y) => sn(
    (v) => {
      const w = ef(v)(r);
      if (w.tag === "Just")
        return w._1.source === y || w._1.target === y;
      if (w.tag === "Nothing")
        return !1;
      f();
    },
    ai(l.leaving.edges)
  ) ? p : 0, h = B((y) => ({
    startT: $(y),
    endT: $(y) + t.plop,
    target: _i("NodeWindow", y, ET)
  }))(ai(l.leaving.nodes)), m = B((y) => ({
    startT: 0,
    endT: Zf(t.edgeSpeed)(t.minEdgeDuration)(n)(y),
    target: _i(
      "EdgeWindow",
      y,
      Ra("Retract", zE(r)(l.leaving.nodes)(y))
    )
  }))(ai(l.leaving.edges));
  return {
    duration: (() => {
      const y = Bt(st.compare)([
        ...B((w) => w.endT)(m),
        ...B((w) => w.endT)(h),
        ...B((w) => w.endT)(_),
        ...B((w) => w.endT)(g),
        ...B((w) => w.endT)(d)
      ]), v = y.length - 1 | 0;
      return v >= 0 && v < y.length ? y[v] + t.gap : t.gap;
    })(),
    windows: [...m, ...h, ..._, ...g, ...d]
  };
}, tP = (t) => (n) => (e) => (r) => (o) => (i) => B((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(M2(t)(n)(e)(r)(i).windows), nP = (t) => Tt((n) => Xt(fs, n).length > 1 ? T(
  "Just",
  (() => {
    const e = Rt(
      (r) => x,
      (r) => (o) => T("Just", { head: r, tail: o }),
      Xt(fs, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : x)(gx(Di)(Bt(F.compare)(t))), eP = (t) => {
  const n = B((r) => r.id)(t), e = SE(n);
  return [
    ...B(AE)(nP(n)),
    ...B(RE)(_t((r) => !nl(r)(e), wt(t)(YE)))
  ];
}, rP = (t) => {
  const n = z2(B((r) => S(
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
    if (nl(i)(o))
      return [Ho("ScheduleCycle", [...Xt(Ae.foldr, o), i])];
    if (nl(i)(r))
      return [];
    const s = H2(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return wt(s._1)(e(rt(F)(i)()(r))(rt(F)(i)()(o)));
    f();
  };
  return wt(t)((r) => e(z)(z)(r.id));
}, Rg = {
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
  nodeEasing: Xv,
  edgeEasing: Wr,
  tokenEasing: Ah,
  diveDur: 2.45,
  retreatDur: 2.45
}, oP = (t) => (n) => (e) => (r) => B((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(Tt(BE)(q2(t)(n)(r.events))), iP = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return tP(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return oP(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  if (o.scene.tag === "StepScene")
    return [];
  f();
}, sP = (t) => (n) => (e) => {
  const r = q2(t)(n)(e.events);
  return r.length === 0 ? t.gap : N(Ke)(0)(B((o) => o.endT)(r)) + t.gap;
}, uP = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return M2(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return sP(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode" || o.tag === "StepScene")
    return 0;
  f();
}, U2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = wv(n)(r), u = e.layout, a = Eh(B((h) => S(h.id, h))(o.keyframes)), c = 0 < o.keyframes.length ? T("Just", o.keyframes[0]) : x, l = (() => {
    if (c.tag === "Just")
      return c._1.id;
    if (c.tag === "Nothing")
      return "";
    f();
  })(), d = Ov(o), _ = (h) => ({ startT: h.runStart, endT: h.t, path: r, layout: u, placement: s, windows: h.runWindows, spans: h.runSpans, keyframes: a, initialKeyframe: l, edgeEndpoints: d }), g = (h) => ({ segments: h.runSpans.length === 0 ? h.segments : Lt(h.segments)(_(h)), spans: h.spans, windows: h.windows, dives: h.dives }), p = N((h) => (m) => {
    if (m.tag === "EnterNode") {
      const C = g(h), J = h.runSpans.length === 0 ? { ...C, segments: Lt(C.segments)(_(h)) } : C, k = h.t + t.diveDur, E = Lt(r)(m._1), L = U2(t)(n)(VE(e)(m._1))(E)(OE(o)(m._1))(k), I = L.endT + t.retreatDur;
      return {
        ...h,
        t: I,
        runStart: I,
        runSpans: [],
        runWindows: [],
        segments: [...J.segments, ...L.segments],
        spans: [...J.spans, ...L.spans],
        windows: [...J.windows, ...L.windows],
        dives: [
          ...J.dives,
          { startT: h.t, endT: k, node: m._1, parentPath: r, childPath: E, direction: PT },
          ...L.dives,
          { startT: L.endT, endT: I, node: m._1, parentPath: r, childPath: E, direction: AT }
        ]
      };
    }
    if (m.tag === "ExitNode")
      return h;
    const y = h.t + uP(t)(u)(a)(d)(m), v = { startT: h.t, endT: y, scene: m }, w = iP(t)(u)(a)(d)(v);
    return {
      ...h,
      t: y,
      runSpans: Lt(h.runSpans)(v),
      runWindows: [...h.runWindows, ...w],
      spans: Lt(h.spans)(v),
      windows: [...h.windows, ...w]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), $ = g(p);
  return {
    endT: p.t,
    spans: $.spans,
    windows: Bt((h) => (m) => st.compare(h.startT)(m.startT))($.windows),
    segments: $.segments,
    dives: $.dives
  };
}, aP = (t) => (n) => {
  const e = st.compare(t.time)(n.time);
  return e === "EQ" ? F.compare(t.id)(n.id) : e;
}, je = (t) => (n) => n - N((e) => (r) => e + Ke(0)(W2(n)(r.endT) - r.startT))(0)(t), cP = (t) => (n) => {
  const e = Ke(t.startT)(n.startT), r = W2(t.endT)(n.endT);
  return r > e + 1e-4 ? T("Just", { startT: e, endT: r }) : x;
}, fP = (t) => (n) => {
  if (n.scene.tag === "Structural") {
    const e = N((r) => (o) => ({ cursor: Ke(r.cursor)(o.endT), cuts: o.startT > r.cursor + 1e-4 ? Lt(r.cuts)({ startT: r.cursor, endT: o.startT }) : r.cuts }))({ cursor: n.startT, cuts: [] })(Bt((r) => (o) => st.compare(r.startT)(o.startT))(Tt(cP(n))(t)));
    return n.endT > e.cursor + 1e-4 ? Lt(e.cuts)({ startT: e.cursor, endT: n.endT }) : e.cuts;
  }
  return [];
}, lP = (t) => {
  const n = QE(wt(t.spans)(fP(t.windows)));
  return n.length === 0 ? t : {
    ...t,
    endT: je(n)(t.endT),
    spans: B((e) => ({ ...e, startT: je(n)(e.startT), endT: je(n)(e.endT) }))(t.spans),
    windows: Bt((e) => (r) => st.compare(e.startT)(r.startT))(B((e) => ({ ...e, startT: je(n)(e.startT), endT: je(n)(e.endT) }))(t.windows)),
    segments: B((e) => ({
      ...e,
      startT: je(n)(e.startT),
      endT: je(n)(e.endT),
      spans: B((r) => ({ ...r, startT: je(n)(r.startT), endT: je(n)(r.endT) }))(e.spans),
      windows: Bt((r) => (o) => st.compare(r.startT)(o.startT))(B((r) => ({ ...r, startT: je(n)(r.startT), endT: je(n)(r.endT) }))(e.windows))
    }))(t.segments),
    dives: B((e) => ({ ...e, startT: je(n)(e.startT), endT: je(n)(e.endT) }))(t.dives)
  };
}, gP = (t) => {
  const n = B(UE)(t.segments);
  return lP({
    ...t,
    segments: n,
    windows: Bt((e) => (r) => st.compare(e.startT)(r.startT))(wt(n)((e) => e.windows))
  });
}, _P = (t) => (n) => (e) => {
  const r = Ke(0.05)(1 - t - n), o = (a) => {
    if (a <= 0)
      return 0;
    if (a >= 1)
      return 1;
    const c = t + a * r;
    return c < 0 ? 0 : c > 1 ? 1 : c;
  }, i = GE(e), s = B((a) => tt(EE(1)(ve(a).length)))(i), u = Ke(1)(N(mr)(0)(s));
  return Qt((a) => (c) => ({
    lineIndex: a,
    text: c,
    start: o(N(mr)(0)(a < 1 ? [] : Ft(0, a, s)) / u),
    end: o(a >= 0 && a < s.length ? (N(mr)(0)(a < 1 ? [] : Ft(0, a, s)) + s[a]) / u : (N(mr)(0)(a < 1 ? [] : Ft(0, a, s)) + 1) / u)
  }))(i);
}, dP = (t) => {
  const n = Ke(0)(t.window.endT - t.window.startT);
  return B((e) => ({
    ...X2,
    id: "token:" + t.eventId + ":line:" + en(e.lineIndex),
    kind: "tokenLine",
    time: t.window.startT + e.start * n,
    endTime: t.window.startT + e.end * n,
    path: O2(t.path),
    tokenIndex: t.tokenIndex,
    lineIndex: e.lineIndex,
    text: e.text,
    from: t.from,
    to: t.to
  }))(_P(t.holdPre)(t.holdPost)(t.labels));
}, hP = (t) => wt(Qt((n) => (e) => ({ path: e.path, eventId: e.eventId, window: e.window, from: e.from, to: e.to, labels: e.labels, holdPre: e.holdPre, holdPost: e.holdPost, tokenIndex: n }))(wt(t)(DE)))(dP), pP = (t) => Qt((n) => (e) => ({ ...e, index: n }))(Bt(aP)([
  ...wt(t.segments)(ZE),
  ...hP(t.segments)
])), mP = (t) => (n) => {
  if (n.tag === "Structural")
    return Tt((e) => e)([
      ca(n._1.from)(t) ? x : T("Just", Ho("UnknownKeyframe", n._1.from)),
      ca(n._1.to)(t) ? x : T("Just", Ho("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return Tt((e) => e)([ca(n._1)(t) ? x : T("Just", Ho("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...Tt((e) => e)([ca(n._1.keyframe)(t) ? x : T("Just", Ho("UnknownKeyframe", n._1.keyframe))]),
      ...eP(n._1.events),
      ...rP(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  if (n.tag === "StepScene")
    return [];
  f();
}, $P = (t) => (n) => {
  const e = wt(n)(mP(t));
  return e.length === 0 ? Pt("Right", void 0) : Pt("Left", e);
}, Fg = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = Eh(B((u) => S(u.id, u))(e.keyframes)), s = $P(i)(e.scenes);
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
      const u = gP(U2(n)(r)(r)([])(e)(0));
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
          cameraSpans: op(t)(oT)(r.layout)(i)(u),
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          cues: pP(u),
          seed: e.seed
        }
      );
    });
  }
  return Pt("Left", [PE]);
}, Oi = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => Y2(t) }), Y2 = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => S(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = Oi(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => qi(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, qi = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(S(n, e)), Apply0: () => Y2(t) }), K2 = (t) => {
  const n = { Applicative0: () => qi(t), Bind1: () => Oi(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, wr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), b = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), ac = (t, n, e) => ({ tag: t, _1: n, _2: e }), yP = (t) => ac("More", t), xP = (t) => ac("Lift", t), vP = {
  defer: (t) => {
    const n = rv(t);
    return (e, r, o, i, s) => ov(n)(e, r, o, i, s);
  }
}, V2 = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (a, c) => r((l) => s(a, t(c))))) }, TP = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, a = e._2;
    return r((c) => t(
      b(u, a, !1),
      r,
      o,
      (l, d) => {
        const _ = l._3;
        return r((g) => _ ? i(l, d) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => V2
}, wP = (t) => {
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
          u = !1, a = n.Bind1().Apply0().Functor0().map(ll)(l._1);
          continue;
        }
        if (l.tag === "Stop") {
          u = !1, a = n.Applicative0().pure(os("Done", S(l._2, l._1)));
          continue;
        }
        f();
      }
      return a;
    };
    return t.tailRecM(o)((i) => r(
      e,
      yP,
      xP,
      (s, u) => ac("Stop", s, Pt("Left", u)),
      (s, u) => ac("Stop", s, Pt("Right", u))
    ));
  };
}, lr = (t, n, e, r, o) => o(t, t._2), NP = { index: 0, line: 1, column: 1 }, CP = (t) => {
  const n = wP(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(Nc)(n(b(e, NP, !1))(r));
}, j2 = /* @__PURE__ */ CP(Gy), rf = (t, n, e, r, o) => o(b(t._1, t._2, !0), void 0), Z2 = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => {
      const d = e._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return n(d, r, o, i, (_, g) => r((p) => s(d._3 && !_._3 ? b(_._1, _._2, !0) : _, c(g))));
    })
  )),
  Functor0: () => V2
}, t$ = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => Z2 }, JP = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => n(c)(e._3 && !a._3 ? b(a._1, a._2, !0) : a, r, o, i, s))
  )),
  Apply0: () => Z2
}, bP = { Applicative0: () => t$, Bind1: () => JP }, of = (t) => (n, e, r, o, i) => e((s) => lr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => o(n._3 && !u._3 ? b(u._1, u._2, !0) : u, wr(t, a)))
)), kP = { empty: /* @__PURE__ */ of("No alternative"), Alt0: () => TP }, LP = { Applicative0: () => t$, Plus1: () => kP }, SP = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (a, c, l) => t(c)(
      a,
      r,
      o,
      i,
      (d, _) => {
        const g = a._3 && !d._3 ? b(d._1, d._2, !0) : d;
        if (_.tag === "Loop")
          return l === 0 ? r((p) => u(g, _._1, 30)) : u(g, _._1, l - 1 | 0);
        if (_.tag === "Done")
          return s(g, _._1);
        f();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => bP
}, EP = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(ll)(o))(r.pure(os(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return os("Loop", xt("Cons", s._1, i));
    if (s.tag === "Done")
      return os(
        "Done",
        ((a) => (c) => {
          let l = a, d = c, _ = !0, g;
          for (; _; ) {
            const p = l, $ = d;
            if ($.tag === "Nil") {
              _ = !1, g = p;
              continue;
            }
            if ($.tag === "Cons") {
              l = xt("Cons", $._1, p), d = $._2;
              continue;
            }
            f();
          }
          return g;
        })(R)(i)
      );
    f();
  })())))(R);
}, ce = /* @__PURE__ */ EP(SP)(LP), vt = (t) => (n) => {
  const e = of("Expected " + n);
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => t(
      b(a, c, !1),
      o,
      i,
      (d, _) => {
        const g = d._3;
        return o((p) => g ? s(d, _) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, Zo = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, a = n._2;
  return e((c) => {
    const l = (d, _) => {
      const g = d._3;
      return e((p) => g ? o(b(d._1, d._2, s), _) : i(n, void 0));
    };
    return e((d) => e((_) => t(
      b(u, a, !1),
      e,
      r,
      (g, p) => l(b(g._1, g._2, !1), p),
      (g, p) => e(($) => e((h) => of("Negated parser succeeded")(
        g,
        e,
        r,
        l,
        (m, y) => e((v) => i(g._3 && !m._3 ? b(m._1, m._2, !0) : m, y))
      )))
    )));
  });
}, PP = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return T("Just", e);
    if (r.tag === "Just")
      return T(
        "Just",
        (o, i, s, u, a) => {
          const c = o._1, l = o._2;
          return i((d) => e(
            b(c, l, !1),
            i,
            s,
            (_, g) => {
              const p = _._3;
              return i(($) => p ? u(_, g) : r._1(o, i, s, u, a));
            },
            a
          ));
        }
      );
    f();
  })(x);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return of("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, n$ = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => o((c) => o((l) => o((d) => t(
  r,
  o,
  i,
  s,
  (_, g) => o((p) => o(($) => {
    const h = r._3 && !_._3 ? b(_._1, _._2, !0) : _;
    return e(
      h,
      o,
      i,
      s,
      (m, y) => o((v) => {
        const w = h._3 && !m._3 ? b(m._1, m._2, !0) : m;
        return o((C) => o((J) => {
          const k = r._3 && !w._3 ? b(w._1, w._2, !0) : w;
          return n(
            k,
            o,
            i,
            s,
            (E, L) => o((I) => u(k._3 && !E._3 ? b(E._1, E._2, !0) : E, y))
          );
        }));
      })
    );
  }))
))))), el = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = kT()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - No(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, AP = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, l = i, d = zc(c);
    if (d.tag === "Nothing") {
      s = !1, u = a;
      continue;
    }
    if (d.tag === "Just") {
      r = d._1.tail === "" ? el(a)(d._1.head)(l) : el(a)(d._1.head)(d._1.tail), o = d._1.tail, i = l;
      continue;
    }
    f();
  }
  return u;
}, It = (t) => (n, e, r, o, i) => {
  const s = zc(n._1);
  if (s.tag === "Nothing")
    return o(n, wr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, wr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = Yl(s._1.head);
      return t(u) ? i(b(s._1.tail, el(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, wr("Predicate unsatisfied", n._2));
    }
  }
  f();
}, Ls = (t, n, e, r, o) => t._1 === "" ? o(b(t._1, t._2, !0), void 0) : r(t, wr("Expected EOF", t._2)), RP = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, wr(s._1, n._2));
  if (s.tag === "Right")
    return i(b(s._1.remainder, AP(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, Fn = (t) => RP((n) => {
  const e = cr(t)(n);
  return e.tag === "Just" ? Pt("Right", { value: t, consumed: t, remainder: e._1 }) : Pt("Left", "Expected " + c0(t));
}), Gg = /* @__PURE__ */ It((t) => !0), id = (t, n) => ({ tag: t, _1: n }), e$ = (t, n, e) => ({ tag: t, _1: n, _2: e }), FP = (t) => (e) => {
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
}, r$ = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, GP = (t) => (n) => N((e) => (r) => (() => {
  if (e.tag === "Left") {
    const o = e._1;
    return (i) => Pt("Left", o);
  }
  if (e.tag === "Right") {
    const o = e._1;
    return (i) => i(o);
  }
  f();
})()((o) => t(o)(r)))(Pt("Right", n)), o$ = (t) => (n) => (e) => FP(t)(e.values) ? Pt("Right", { ...e, values: rt(F)(t)(n)(e.values) }) : Pt("Left", "label has no placeholder `" + t + "`"), sd = /* @__PURE__ */ (() => {
  const t = Zo((n, e, r, o, i) => {
    const s = n._3;
    return Fn("{{")(n, e, r, (u, a) => o(b(u._1, u._2, s), a), i);
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => Gg(n._3 && !u._3 ? b(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), IP = /* @__PURE__ */ (() => {
  const t = Zo((n, e, r, o, i) => {
    const s = n._3;
    return Fn("}}")(n, e, r, (u, a) => o(b(u._1, u._2, s), a), i);
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => Gg(n._3 && !u._3 ? b(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), Ts = (t) => dr("")(B((n) => {
  if (n.tag === "LabelText")
    return n._1;
  if (n.tag === "LabelSlot") {
    const e = r$(n._1)(t.values);
    if (e.tag === "Just")
      return e._1;
    if (e.tag === "Nothing")
      return "";
  }
  f();
})(t.parts)), BP = (t, n, e, r, o) => n((i) => sd(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = ce(sd), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => c(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => o(
        l._3 && !_._3 ? b(_._1, _._2, !0) : _,
        e$("ParsedText", _r([u, ...Xt(_n.foldr, g)]))
      ))
    ));
  })
)), DP = (t) => t === " " || t === "	" || t === `
` || t === "\r", ud = /* @__PURE__ */ (() => {
  const t = ce(It(DP));
  return (n, e, r, o, i) => e((s) => t(n, e, r, o, (u, a) => e((c) => i(u, void 0))));
})(), zP = (t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z" || t === "_", HP = (t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z" || t === "_" || t >= "0" && t <= "9" || t === "-", WP = (t, n, e, r, o) => n((i) => It(zP)(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = ce(It(HP)), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => c(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => o(
        l._3 && !_._3 ? b(_._1, _._2, !0) : _,
        yr(u) + _r(Xt(_n.foldr, g))
      ))
    ));
  })
)), QP = (t, n, e, r, o) => n((i) => Fn("{{")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((l) => ud(
      c,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = c._3 && !d._3 ? b(d._1, d._2, !0) : d;
        return n(($) => WP(
          p,
          n,
          e,
          r,
          (h, m) => n((y) => {
            const v = p._3 && !h._3 ? b(h._1, h._2, !0) : h;
            return n((w) => ud(
              v,
              n,
              e,
              r,
              (C, J) => n((k) => {
                const E = vt(It((I) => I === ":"))("':'"), L = v._3 && !C._3 ? b(C._1, C._2, !0) : C;
                return n((I) => E(
                  L,
                  n,
                  e,
                  r,
                  (H, G) => n((O) => {
                    const ut = ce(IP), ot = L._3 && !H._3 ? b(H._1, H._2, !0) : H;
                    return n((Z) => n((U) => ut(
                      ot,
                      n,
                      e,
                      r,
                      (P, A) => n((Q) => {
                        const D = _r(Xt(_n.foldr, A));
                        return n((M) => {
                          const Y = ot._3 && !P._3 ? b(P._1, P._2, !0) : P;
                          return n((q) => Fn("}}")(
                            Y,
                            n,
                            e,
                            r,
                            (X, W) => n((nt) => o(
                              Y._3 && !X._3 ? b(X._1, X._2, !0) : X,
                              e$("ParsedSlot", m, Eu(D))
                            ))
                          ));
                        });
                      })
                    )));
                  })
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), OP = /* @__PURE__ */ (() => {
  const t = ce((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => QP(
      b(s, u, !1),
      e,
      r,
      (c, l) => {
        const d = c._3;
        return e((_) => d ? o(c, l) : BP(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(u, Xt(_n.foldr, a)))
  ));
})(), qP = (t) => {
  const n = GP((e) => (r) => {
    if (r.tag === "ParsedText")
      return Pt("Right", { ...e, parts: Lt(e.parts)(id("LabelText", r._1)) });
    if (r.tag === "ParsedSlot") {
      const o = r$(r._1)(e.values);
      return o.tag === "Just" && o._1 !== r._2 ? Pt("Left", "placeholder `" + r._1 + "` has conflicting initial values") : Pt(
        "Right",
        { parts: Lt(e.parts)(id("LabelSlot", r._1)), values: rt(F)(r._1)(r._2)(e.values) }
      );
    }
    f();
  })({ parts: [], values: z })(t);
  if (n.tag === "Left")
    return Pt("Left", n._1);
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, cc = (t) => {
  const n = j2(t)((e, r, o, i, s) => r((u) => r((a) => OP(
    e,
    r,
    o,
    i,
    (c, l) => r((d) => r((_) => {
      const g = e._3 && !c._3 ? b(c._1, c._2, !0) : c;
      return Ls(
        g,
        r,
        o,
        i,
        (p, $) => r((h) => s(g._3 && !p._3 ? b(p._1, p._2, !0) : p, l))
      );
    }))
  ))));
  if (n.tag === "Left")
    return Pt("Left", n._1._1);
  if (n.tag === "Right")
    return qP(n._1);
  f();
}, Ji = (t, n) => ({ tag: t, _1: n }), jr = (t, n) => ({ tag: t, _1: n }), sf = (t) => t, gr = (t, n) => ({ tag: t, _1: n }), Ig = (t) => t, i$ = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, XP = /* @__PURE__ */ dn(F)(qt), s$ = /* @__PURE__ */ (() => {
  const t = Re.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return T("Just", S(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, xt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, R);
  })());
})(), Rn = /* @__PURE__ */ K2(Xe), MP = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, UP = (t) => (e) => {
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
}, YP = /* @__PURE__ */ dn(F)(qt), Bg = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, KP = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), Kt = /* @__PURE__ */ Oi(Xe), oe = Rn.state((t) => S(t, t)), vn = /* @__PURE__ */ qi(Xe), u$ = (t) => (e) => {
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
}, a$ = /* @__PURE__ */ ro(vn), Dg = /* @__PURE__ */ a$(qt), VP = (t) => (e) => {
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
}, Lr = (t) => (e) => {
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
}, Ar = (t) => (e) => {
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
}, jP = (t) => (e) => {
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
}, uf = (t) => (n) => (e) => N((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), ZP = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), tA = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const a = o, c = i;
      if (c.tag === "Nil") {
        s = !1, u = a;
        continue;
      }
      if (c.tag === "Cons") {
        o = rt(F)(c._1)()(a), i = c._2;
        continue;
      }
      f();
    }
    return u;
  })(z);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, xt("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, R);
  })());
})(), nA = /* @__PURE__ */ N((t) => (n) => rt(F)(n)()(t))(z), eA = /* @__PURE__ */ a$(Tc), rA = /* @__PURE__ */ Ig("AnimatedSurface"), oA = /* @__PURE__ */ Ig("StillSurface"), iA = /* @__PURE__ */ Ig("SequenceSurface"), sA = /* @__PURE__ */ gr("Exit"), fc = /* @__PURE__ */ sf("AnimatedKeyframe"), zg = /* @__PURE__ */ sf("Still"), uA = /* @__PURE__ */ sf("Title"), c$ = /* @__PURE__ */ sf("StepMarker"), aA = (t) => jr("Par", t), cA = (t) => jr("Seq", t), fA = (t) => jr("GroupSeq", t), f$ = (t) => Ji("StepDive", t), lA = { line: 0, column: 0, endLine: 0, endColumn: 0 }, gA = (t) => (n) => (e) => {
  const r = bo(Ht, x, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = Xo(Ht, x, r._1, S(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Lt(e)(S(t, n));
  f();
}, _A = (t) => (n) => B((e) => e._1 === t ? S(e._1, { ...e._2, label: T("Just", n) }) : S(e._1, e._2)), l$ = (t) => XP(Tt((n) => {
  const e = i$(n)(t.currLabels);
  return e.tag === "Just" ? T("Just", S(n, e._1)) : x;
})(s$(t.currNodes))), g$ = (t) => {
  const n = t.compare;
  return (e) => N((r) => (o) => ee(n, ne, r, e(o)))(z);
}, rl = /* @__PURE__ */ g$(F), ol = /* @__PURE__ */ g$(F), ad = (t) => (n) => Rn.state((e) => S(
  void 0,
  {
    ...e,
    graphNodes: _A(t)(Ts(n))(e.graphNodes),
    currLabels: rt(F)(t)(Ts(n))(e.currLabels),
    currLabelTemplates: rt(F)(t)(n)(e.currLabelTemplates)
  }
)), dA = (t) => {
  const n = t.span;
  return Rn.state((e) => S(void 0, { ...e, currentSpan: n }));
}, hA = tt(4) * 8, pA = (t) => t.tag === "Just" && ml(t._1) && t._1 > 0 ? S(MP(1)(t._1 / hA), 1) : S(1, 1), t0 = (t) => (n) => ({ structural: [...t.structural, ...n.structural], flow: t.flow || n.flow, dives: [...t.dives, ...n.dives] }), mA = (t) => (n) => n.kind === "Animated" || UP(n.id)(t), af = {
  graphNodes: [],
  graphEdges: z,
  currNodes: z,
  currEdges: z,
  currLabels: z,
  currLabelTemplates: z,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: x,
  currentSpan: lA,
  error: x,
  enterStack: [],
  interiorOf: z,
  stepNames: z
}, cd = (t) => (n) => (e) => {
  const r = Xt(Ae.foldr, e);
  return dr(", ")(B(n)(Ft(0, 6, r))) + (r.length > 6 ? ", …" : "");
}, $A = (t) => (n) => {
  const e = Bg(n)(YP(B((r) => S(r.id, r))(t.graph.edges)));
  if (e.tag === "Just")
    return (() => {
      const r = cr("conn:")(e._1.id);
      if (r.tag === "Just")
        return !1;
      if (r.tag === "Nothing")
        return !0;
      f();
    })() ? e._1.from.node + " -> " + e._1.to.node : e._1.from.node + " -- " + e._1.to.node;
  if (e.tag === "Nothing")
    return n;
  f();
}, yA = (t) => (n) => (e) => {
  const r = cd()(ko)(n), o = cd()($A(t))(e);
  return (r === "" ? "animated flow contains unused topology: every animated node or edge must be visited by a token or fill." : "animated flow contains unused topology: every animated node or edge must be visited by a token or fill. Unused nodes: " + r + ".") + (o === "" ? "" : " Unused edges: " + o + ".") + " Move context-only topology into a `still`/`title`, remove it, or add token/fill events.";
}, xA = (t) => {
  if (t.kind.tag === "SendToken")
    return KP([t.kind._1.from, t.kind._1.to]);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return nn("Node", 1, 1, t.kind._1.node, void 0, z, z);
  f();
}, vA = (t) => rl(xA)(t.events), TA = (t) => {
  if (t.kind.tag === "SendToken")
    return nn("Node", 1, 1, t.kind._1.edge, void 0, z, z);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return z;
  f();
}, wA = (t) => ol(TA)(t.events), Gr = (t) => Rn.state((n) => S(
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
)), NA = /* @__PURE__ */ Dg((t) => Kt.bind(oe)((n) => {
  if (n.error.tag === "Just")
    return vn.pure();
  if (n.error.tag === "Nothing")
    return u$(t.node)(n.interiorOf) ? Gr("node " + t.node + " has more than one `inside` block") : Rn.state((e) => S(void 0, { ...e, interiorOf: rt(F)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), CA = (t) => Kt.bind(oe)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + en(n.kfCounter);
  if (sn((o) => o.id === e, n.keyframes))
    return Gr("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Lt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, labels: l$(n), kind: Su }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: T("Just", e)
  };
  return Rn.state((o) => S(void 0, r));
}), Vn = (t) => (n) => Kt.bind(Rn.state((e) => S(void 0, { ...e, currentSpan: t })))(() => Gr(n)), fd = (t) => (n) => Kt.bind(oe)((e) => VP(n)(e.stepNames) ? Vn(t)("duplicate step name " + n) : Rn.state((r) => S(
  void 0,
  {
    ...r,
    scenes: Lt(r.scenes)(bs("StepScene", n)),
    stepNames: rt(F)(n)()(r.stepNames)
  }
))), JA = (t) => {
  if (t.ops.tag === "Leaf") {
    const n = t.ops._1;
    return Kt.bind((() => {
      const e = n.span;
      return Rn.state((r) => S(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? fd(n.span)(n.op._1.name) : Gr("step marker frame did not contain a step"));
  }
  if (t.ops.tag === "Seq" && t.ops._1.length === 1 && t.ops._1[0].tag === "Leaf") {
    const n = t.ops._1[0]._1;
    return Kt.bind((() => {
      const e = n.span;
      return Rn.state((r) => S(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? fd(n.span)(n.op._1.name) : Gr("step marker frame did not contain a step"));
  }
  return Gr("step marker frame did not contain a step");
}, bA = (t) => Kt.bind((() => {
  const n = t.span;
  return Rn.state((e) => S(void 0, { ...e, currentSpan: n }));
})())(() => Kt.bind(oe)((n) => {
  if (n.error.tag === "Just")
    return vn.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!Lr(t.op._1.id)(n.currNodes))
        return Vn(0 < t.operands.length ? t.operands[0] : t.span)("cannot dive into node " + t.op._1.id + ": does not exist");
      if (!u$(t.op._1.id)(n.interiorOf))
        return Vn(0 < t.operands.length ? t.operands[0] : t.span)("cannot enter node " + t.op._1.id + ": it has no `inside` block. Add the block at the document level, alongside the animated statements:\n\ninside " + t.op._1.id + ` {
  + detail: Detail
}`);
      const e = t.op._1;
      return Rn.state((r) => S(
        void 0,
        { ...r, enterStack: Lt(r.enterStack)(e.id), scenes: Lt(r.scenes)(bs("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = ur(n.enterStack);
      if (e.tag === "Nothing")
        return Gr("`out` without a matching `into`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return Rn.state((o) => S(void 0, { ...o, enterStack: r, scenes: Lt(o.scenes)(Rv) }));
      }
      f();
    }
    return vn.pure();
  }
  f();
})), Ui = { structural: [], flow: !1, dives: [] }, kA = Kt.bind(oe)((t) => {
  if (t.error.tag === "Just")
    return vn.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return Rn.state((e) => S(void 0, { ...e, scenes: Lt(e.scenes)(bs("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return vn.pure();
  }
  f();
}), LA = (t) => (n) => Kt.bind(oe)((e) => {
  const r = "ev-" + en(e.eventCounter);
  return Kt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return Rn.state((i) => S(void 0, o));
  })())(() => vn.pure({ events: [{ id: r, kind: n, when: t }], firstId: T("Just", r), lastId: T("Just", r) }));
}), SA = (t) => t.tag === "DataFlow" ? T("Just", t._1) : x, EA = (t) => Tt((n) => Bg(n)(t.graphEdges))(Xt(fs, s$(t.currEdges))), PA = (t) => (n) => {
  const e = _t((o) => o.from.node === n.id || o.to.node === n.id, EA(t)), r = uf(oh)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, a = i.from + "->" + i.to, c = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!Ar(s)(t.currEdges))
      return Pt("Left", c);
    const l = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!Ar(u)(t.currEdges))
      return Pt("Left", l);
    const d = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return Ar(a)(t.currEdges) || jP(a)(o.synthesized) ? Pt("Left", d) : Pt(
      "Right",
      {
        consumed: rt(F)(s)()(rt(F)(u)()(o.consumed)),
        synthesized: rt(F)(a)({
          id: a,
          from: { node: i.from, port: x },
          to: { node: i.to, port: x },
          label: x
        })(o.synthesized)
      }
    );
  })({ consumed: z, synthesized: z })(n.via);
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
    const i = o.consumed, s = _t((u) => !Ar(u.id)(i), e);
    return s.length === 0 ? Pt(
      "Right",
      {
        nextCurrEdges: ee(
          F.compare,
          ne,
          Er(F.compare, t.currEdges, ZP(B((u) => u.id)(e))),
          tA((() => {
            const u = (a) => {
              if (a.tag === "Leaf")
                return z;
              if (a.tag === "Node")
                return nn("Node", a._1, a._2, a._3, void 0, u(a._5), u(a._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : Pt(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + dr(", ")(B((u) => (() => {
        const a = cr("conn:")(u.id);
        if (a.tag === "Just")
          return !1;
        if (a.tag === "Nothing")
          return !0;
        f();
      })() ? u.from.node + "→" + u.to.node : u.from.node + "--" + u.to.node)(s)) + "). Use `- a -> b` or `- a -- b` to drop them, or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, _$ = (t) => (n) => (e) => {
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
}, ma = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq" || t.tag === "GroupSeq")
    return wt(t._1)(ma);
  f();
}, AA = (t) => ({
  nodes: B(wc)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, xt("Cons", e._4, n(e._6, r)));
      f();
    };
    return Xt(_n.foldr, n(t.graphEdges, R));
  })(),
  constraints: []
}), ou = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "ModNodeSlot" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? { ...Ui, structural: [t._1] } : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? { ...Ui, dives: [t._1] } : { ...Ui, flow: !0 };
  if (t.tag === "Seq" || t.tag === "GroupSeq" || t.tag === "Par")
    return N(t0)(Ui)(B(ou)(t._1));
  f();
}, cf = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "ModNodeSlot" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? [Ji("StepStructural", [t._1])] : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? [Ji("StepDive", t._1)] : [Ji("StepFlow", t)];
  if (t.tag === "Seq")
    return wt(t._1)(cf);
  if (t.tag === "GroupSeq")
    return FA(t)(t._1);
  if (t.tag === "Par")
    return RA(t)(t._1);
  f();
}, RA = (t) => (n) => {
  const e = ou(t);
  return e.structural.length !== 0 && !e.flow && e.dives.length === 0 ? [Ji("StepStructural", e.structural)] : e.structural.length === 0 && e.flow && e.dives.length === 0 ? [Ji("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? B(f$)(e.dives) : wt(n)(cf);
}, FA = (t) => (n) => {
  const e = ou(t);
  return e.structural.length === 0 && e.flow && e.dives.length === 0 ? [Ji("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? B(f$)(e.dives) : wt(n)(cf);
}, GA = (t) => (n) => Kt.bind(oe)((e) => {
  const r = n.from + "->" + n.to, o = n.newFrom + "->" + n.newTo;
  return Ar(r)(e.currEdges) ? Lr(n.newFrom)(e.currNodes) ? Lr(n.newTo)(e.currNodes) ? r !== o && Ar(o)(e.currEdges) ? Vn((() => {
    const i = 2 < t.operands.length ? t.operands[2] : t.span, s = 3 < t.operands.length ? t.operands[3] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists") : Rn.state((i) => S(
    void 0,
    {
      ...i,
      currEdges: rt(F)(o)()(hs(F)(r)(i.currEdges)),
      graphEdges: rt(F)(o)({
        id: o,
        from: { node: n.newFrom, port: x },
        to: { node: n.newTo, port: x },
        label: x
      })(i.graphEdges)
    }
  )) : Vn(3 < t.operands.length ? t.operands[3] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo) : Vn(2 < t.operands.length ? t.operands[2] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom) : Vn((() => {
    const i = 0 < t.operands.length ? t.operands[0] : t.span, s = 1 < t.operands.length ? t.operands[1] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + ": edge does not exist");
}), IA = (t) => (n) => {
  const e = Tt(SA)(n.scenes), r = _t(mA(nA(B((s) => s.keyframe)(e))), n.keyframes), o = Er(F.compare, rl((s) => s.nodes)(r), rl(vA)(e)), i = Er(F.compare, ol((s) => s.edges)(r), ol(wA)(e));
  return t !== "AnimatedSurface" || e.length === 0 || o.tag === "Leaf" && i.tag === "Leaf" ? x : T("Just", yA(n)(o)(i));
}, BA = (t) => (n) => {
  const e = n.to + "->" + n.from, r = n.from + "->" + n.to, o = n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
  if (Ar(r)(t.currEdges))
    return T("Just", { id: r, direction: x_ });
  if (Ar(e)(t.currEdges))
    return T("Just", { id: e, direction: v_ });
  const i = Bg(o)(t.graphEdges);
  if (i.tag === "Just")
    return Ar(o)(t.currEdges) ? T(
      "Just",
      { id: o, direction: i._1.from.node === n.from && i._1.to.node === n.to ? x_ : v_ }
    ) : x;
  if (i.tag === "Nothing")
    return x;
  f();
}, DA = (t) => (n) => {
  if (n.op.tag === "Token") {
    const e = n.op._1;
    return Kt.bind(oe)((r) => {
      const o = !Lr(e.from)(r.currNodes), i = !Lr(e.to)(r.currNodes);
      if (o || i)
        return Kt.bind(Vn(_$(o)(i)(n))(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => vn.pure({ events: [], firstId: x, lastId: x }));
      const s = BA(r)(e);
      if (s.tag === "Just")
        return LA(t)(Sv("SendToken", { from: e.from, to: e.to, edge: s._1.id, direction: s._1.direction, labels: e.labels }));
      if (s.tag === "Nothing")
        return Kt.bind(Vn((() => {
          const u = 0 < n.operands.length ? n.operands[0] : n.span, a = 1 < n.operands.length ? n.operands[1] : n.span;
          return { line: u.line, column: u.column, endLine: a.endLine, endColumn: a.endColumn };
        })())("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => vn.pure({
          events: [],
          firstId: x,
          lastId: x
        }));
      f();
    });
  }
  return vn.pure({ events: [], firstId: x, lastId: x });
}, ld = (t) => (n) => {
  const e = Rt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return vn.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Kt.bind(Cu(t)(e._1.head))((o) => Kt.bind(uf({
      Applicative0: () => qi(Xe),
      Bind1: () => Oi(Xe)
    })((i) => (s) => Kt.bind(Cu((() => {
      if (i.lastId.tag === "Just")
        return Xl("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => vn.pure({
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
    })))(o)(r))((i) => vn.pure(i)));
  }
  f();
}, zA = (t) => (n) => {
  const e = Rt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return vn.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Kt.bind(Cu(t)(e._1.head))((o) => Kt.bind(HA((() => {
      if (o.firstId.tag === "Just")
        return Xl("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => vn.pure({
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
}, Cu = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Kt.bind((() => {
      const r = e.span;
      return Rn.state((o) => S(void 0, { ...o, currentSpan: r }));
    })())(() => DA(t)(e));
  }
  if (n.tag === "Seq" || n.tag === "GroupSeq")
    return ld(t)(n._1);
  if (n.tag === "Par")
    return zA(t)(n._1);
  f();
}, HA = (t) => uf({
  Applicative0: () => qi(Xe),
  Bind1: () => Oi(Xe)
})((n) => (e) => Kt.bind(Cu(t)(e))((r) => vn.pure({
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
})))({ events: [], firstId: x, lastId: x }), WA = (t) => Kt.bind(oe)((n) => {
  if (n.currentKf.tag === "Nothing")
    return Gr("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Kt.bind(Cu(Av)(t))((r) => Kt.bind(oe)((o) => {
      const i = { ...o, scenes: Lt(o.scenes)(bs("DataFlow", { keyframe: e, events: r.events, focus: x })) };
      return Rn.state((s) => S(void 0, i));
    }));
  }
  f();
}), QA = (t) => (n) => Rn.state((e) => S(
  void 0,
  {
    ...e,
    graphNodes: gA(t.id)({
      id: t.id,
      size: pA(t.width),
      ports: [],
      label: T("Just", Ts(n)),
      shape: t.shape
    })(e.graphNodes),
    currNodes: rt(F)(t.id)()(e.currNodes),
    currLabels: rt(F)(t.id)(Ts(n))(e.currLabels),
    currLabelTemplates: rt(F)(t.id)(n)(e.currLabelTemplates)
  }
)), OA = (t) => {
  if (t.op.tag === "AddNode") {
    const n = t.op._1;
    return Kt.bind(oe)((e) => {
      if (Lr(n.id)(e.currNodes))
        return Vn(0 < t.operands.length ? t.operands[0] : t.span)("cannot add node " + n.id + ": already exists");
      const r = cc(n.label);
      if (r.tag === "Left")
        return Vn(0 < t.operands.length ? t.operands[0] : t.span)("invalid label for node " + n.id + ": " + r._1);
      if (r.tag === "Right")
        return QA(n)(r._1);
      f();
    });
  }
  if (t.op.tag === "DelNode") {
    const n = t.op._1;
    return Kt.bind(oe)((e) => {
      if (!Lr(n.id)(e.currNodes))
        return Vn(0 < t.operands.length ? t.operands[0] : t.span)("cannot delete node " + n.id + ": does not exist");
      const r = PA(e)(n);
      if (r.tag === "Left")
        return Vn(0 < t.operands.length ? t.operands[0] : t.span)(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return Rn.state((i) => S(
          void 0,
          {
            ...i,
            currNodes: hs(F)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: ee(F.compare, ne, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.op.tag === "ModNode") {
    const n = t.op._1;
    return Kt.bind(oe)((e) => {
      if (!Lr(n.id)(e.currNodes))
        return Vn(0 < t.operands.length ? t.operands[0] : t.span)("cannot relabel node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = cc(n.label._1);
        if (r.tag === "Left")
          return Vn(0 < t.operands.length ? t.operands[0] : t.span)("invalid label for node " + n.id + ": " + r._1);
        if (r.tag === "Right")
          return ad(n.id)(r._1);
        f();
      }
      if (n.label.tag === "Nothing")
        return vn.pure();
      f();
    });
  }
  if (t.op.tag === "ModNodeSlot") {
    const n = t.op._1;
    return Kt.bind(oe)((e) => {
      if (!Lr(n.id)(e.currNodes))
        return Vn(0 < t.operands.length ? t.operands[0] : t.span)("cannot update placeholder on node " + n.id + ": does not exist");
      const r = i$(n.id)(e.currLabelTemplates);
      if (r.tag === "Nothing")
        return Vn(1 < t.operands.length ? t.operands[1] : t.span)("node " + n.id + " label has no placeholder `" + n.slot + "`");
      if (r.tag === "Just") {
        const o = o$(n.slot)(n.value)(r._1);
        if (o.tag === "Left")
          return Vn(1 < t.operands.length ? t.operands[1] : t.span)("node " + n.id + " " + o._1);
        if (o.tag === "Right")
          return ad(n.id)(o._1);
      }
      f();
    });
  }
  if (t.op.tag === "AddEdge") {
    const n = t.op._1;
    return Kt.bind(oe)((e) => {
      const r = !Lr(n.from)(e.currNodes), o = !Lr(n.to)(e.currNodes);
      if (r || o)
        return Vn(_$(r)(o)(t))((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return Ar(i)(e.currEdges) ? Vn((() => {
        const s = 0 < t.operands.length ? t.operands[0] : t.span, u = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: s.line, column: s.column, endLine: u.endLine, endColumn: u.endColumn };
      })())((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": already exists") : Rn.state((s) => S(
        void 0,
        {
          ...s,
          graphEdges: rt(F)(i)({
            id: i,
            from: { node: n.from, port: x },
            to: { node: n.to, port: x },
            label: n.label
          })(s.graphEdges),
          currEdges: rt(F)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.op.tag === "DelEdge") {
    const n = t.op._1;
    return Kt.bind(oe)((e) => {
      const r = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return Ar(r)(e.currEdges) ? Rn.state((o) => S(void 0, { ...o, currEdges: hs(F)(r)(o.currEdges) })) : Vn((() => {
        const o = 0 < t.operands.length ? t.operands[0] : t.span, i = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: o.line, column: o.column, endLine: i.endLine, endColumn: i.endColumn };
      })())((n.directed ? "cannot delete edge " : "cannot delete connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": does not exist");
    });
  }
  return t.op.tag === "RepointEdge" ? GA(t)(t.op._1) : vn.pure();
}, qA = (t) => Kt.bind((() => {
  const n = t.span;
  return Rn.state((e) => S(void 0, { ...e, currentSpan: n }));
})())(() => OA(t)), d$ = (t) => (n) => (e) => Kt.bind(Dg(qA)(e))(() => Kt.bind(oe)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + en(r.kfCounter);
  if (sn((s) => s.id === o, r.keyframes))
    return Kt.bind(eA(dA)(0 < e.length ? T("Just", e[0]) : x))(() => Gr("duplicate frame name " + o));
  const i = {
    ...r,
    keyframes: Lt(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, labels: l$(r), kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: T("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return Lt(r.scenes)(bs("Structural", { from: r.currentKf._1, to: o, focus: x }));
      f();
    })()
  };
  return Rn.state((s) => S(void 0, i));
})), XA = (t) => (n) => (e) => {
  if (e.tag === "StepStructural")
    return Kt.bind((() => {
      const r = d$(Su)(n ? x : t)(e._1);
      return e._1.length !== 0 ? r : vn.pure();
    })())(() => vn.pure(!0));
  if (e.tag === "StepFlow") {
    const r = e._1, o = !n && (() => {
      if (t.tag === "Just")
        return t._1 !== "";
      if (t.tag === "Nothing")
        return !1;
      f();
    })();
    return Kt.bind((() => {
      const i = CA(t);
      return o ? i : vn.pure();
    })())(() => Kt.bind(WA(r))(() => vn.pure(n || o)));
  }
  if (e.tag === "StepDive")
    return Kt.bind(bA(e._1))(() => vn.pure(n));
  f();
}, h$ = (t) => (n) => (e) => {
  const r = Rt((o) => x, (o) => (i) => T("Just", { head: o, tail: i }), e);
  if (r.tag === "Nothing")
    return vn.pure();
  if (r.tag === "Just") {
    const o = r._1.head, i = r._1.tail;
    return Kt.bind(oe)((s) => {
      if (s.error.tag === "Just")
        return vn.pure();
      if (s.error.tag === "Nothing")
        return Kt.bind(XA(t)(n)(o))((u) => h$(t)(u)(i));
      f();
    });
  }
  f();
}, gd = (t) => (n) => {
  const e = ma(n.ops), r = _t(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "ModNodeSlot" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    e
  ), o = _t(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "ModNodeSlot" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
    e
  );
  return 0 < o.length ? Kt.bind((() => {
    const i = o[0].span;
    return Rn.state((s) => S(void 0, { ...s, currentSpan: i }));
  })())(() => Gr("still/title blocks hold a still snapshot; they cannot contain movement tokens (`api ~> db`) or dive commands (`into`/`out`)")) : t === "TitleCard" && r.length === 0 ? Gr(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Kt.bind(d$(t)(n.name)(r))(() => kA);
}, MA = (t) => Kt.bind(oe)((n) => {
  if (n.error.tag === "Just")
    return vn.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return h$(t.name)(!1)(cf(t.ops));
    if (t.kind === "Still")
      return gd(Ev)(t);
    if (t.kind === "Title")
      return gd(Pv)(t);
    if (t.kind === "StepMarker")
      return JA(t);
  }
  f();
}), ff = (t) => Kt.bind(NA(t.interiors))(() => Kt.bind(Dg(MA)(t.frames))(() => Kt.bind(oe)((n) => {
  if (n.error.tag === "Just")
    return vn.pure(Pt("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = UA(t.interiors);
    if (e.tag === "Left")
      return vn.pure(Pt("Left", e._1));
    if (e.tag === "Right") {
      const r = { seed: t.seed, graph: AA(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 };
      return vn.pure((() => {
        const o = IA(t.mode)(r);
        if (o.tag === "Just")
          return Pt("Left", { msg: o._1, line: 0, column: 0, endLine: 0, endColumn: 0 });
        if (o.tag === "Nothing")
          return Pt("Right", r);
        f();
      })());
    }
  }
  f();
}))), UA = (t) => {
  const n = uf(oh)((e) => (r) => {
    const o = ff(r.doc)(af)._1;
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
    })()((i) => Pt("Right", rt(F)(r.node)(i)(e)));
  })(z)(t);
  if (n.tag === "Left")
    return Pt("Left", n._1);
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, fa = (t, n) => ({ tag: t, _1: n }), Hg = /* @__PURE__ */ PP(qt), YA = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, KA = /* @__PURE__ */ dn(F)(qt), _d = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Bu = /* @__PURE__ */ (() => {
  const t = vt(It((r) => r === "}"))("'}'"), n = vt(It((r) => r === "#"))("'#'"), e = It((r) => r === `
` || r === "\r");
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => o((d) => t(
      b(a, c, !1),
      o,
      i,
      (_, g) => o((p) => {
        const $ = r._1, h = r._2;
        return o((m) => o((y) => n(
          b($, h, !1),
          o,
          i,
          (v, w) => o((C) => {
            const J = r._1, k = r._2;
            return o((E) => o((L) => e(
              b(J, k, !1),
              o,
              i,
              (I, H) => o((G) => Ls(r, o, i, s, u)),
              (I, H) => o((G) => u(b(J, k, !1), void 0))
            )));
          }),
          (v, w) => o((C) => u(b($, h, !1), void 0))
        )));
      }),
      (_, g) => o((p) => u(b(a, c, !1), void 0))
    )));
  };
})(), Ie = (t) => (n, e, r, o, i) => e((s) => lr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
    return e((d) => t(
      l,
      e,
      r,
      o,
      (_, g) => e((p) => {
        const $ = l._3 && !_._3 ? b(_._1, _._2, !0) : _;
        return e((h) => lr(
          $,
          e,
          r,
          o,
          (m, y) => e((v) => i(
            $._3 && !m._3 ? b(m._1, m._2, !0) : m,
            S(g, { line: a.line, column: a.column, endLine: y.line, endColumn: y.column })
          ))
        ));
      })
    ));
  })
)), VA = /* @__PURE__ */ (() => {
  const t = It((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? b(u._1, u._2, !0) : u, void 0))
  ));
})(), p$ = (t, n, e, r, o) => n((i) => Fn("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = ce(It((d) => d !== `
`)), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => c(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => o(l._3 && !_._3 ? b(_._1, _._2, !0) : _, void 0))
    ));
  })
)), m$ = /* @__PURE__ */ vt(/* @__PURE__ */ (() => {
  const t = vt(It((e) => e === "}"))("'}'"), n = It((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, a = e._2;
    return r((c) => r((l) => t(
      b(u, a, !1),
      r,
      o,
      (d, _) => r((g) => {
        const p = e._1, $ = e._2;
        return r((h) => r((m) => p$(
          b(p, $, !1),
          r,
          o,
          (y, v) => {
            const w = y._3;
            return r((C) => {
              if (w)
                return i(y, v);
              const J = e._1, k = e._2;
              return r((E) => r((L) => n(
                b(J, k, !1),
                r,
                o,
                (I, H) => {
                  const G = I._3;
                  return r((O) => G ? i(I, H) : Ls(e, r, o, i, s));
                },
                (I, H) => r((G) => s(I, void 0))
              )));
            });
          },
          (y, v) => r((w) => s(y, void 0))
        )));
      }),
      (d, _) => r((g) => s(b(u, a, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), Be = /* @__PURE__ */ (() => {
  const t = ce((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => VA(
      b(s, u, !1),
      e,
      r,
      (c, l) => {
        const d = c._3;
        return e((_) => d ? o(c, l) : p$(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? b(u._1, u._2, !0) : u, void 0))
  ));
})(), $$ = /* @__PURE__ */ (() => {
  const t = It((n) => n !== "|");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => e((c) => Fn("\\|")(
      b(s, u, !1),
      e,
      r,
      (l, d) => e((_) => e((g) => t(n, e, r, o, (p, $) => e((h) => i(p, yr($)))))),
      (l, d) => e((_) => i(l, "|"))
    )));
  };
})(), jA = /* @__PURE__ */ vt(/* @__PURE__ */ Hg([
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Fn("->")(t, n, e, (u, a) => r(b(u._1, u._2, s), a), (u, a) => n((c) => o(u, !0)));
  }),
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Fn("--")(t, n, e, (u, a) => r(b(u._1, u._2, s), a), (u, a) => n((c) => o(u, !1)));
  })
]))("edge arrow '->' or '--'"), ZA = (t) => t !== `
` && t !== "\r" && t !== "#" && t !== "}" && t !== "{", lf = /* @__PURE__ */ It((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), t4 = (t) => t === " " || t === "	" || t === "\r", n4 = (t) => _r(un(Ur(t4)(un(Me(t))).rest)), Wg = (t) => t === `
` || t === "\r" || t === "#" || t === "}", e4 = (t) => t === `
` || t === "\r" || t === "#" || t === "}" || t === "{", r4 = (t) => t !== "{" && t !== `
` && t !== "\r", dd = (t) => Eu(t) === "", o4 = (t) => un(Ur(dd)(un(Ur(dd)(t).rest)).rest), i4 = (t) => ((e) => (r) => {
  let o = e, i = r, s = !0, u;
  for (; s; ) {
    const a = o, l = Rt((d) => x, (d) => (_) => T("Just", { head: d, tail: _ }), i);
    if (l.tag === "Just" && (l._1.head === " " || l._1.head === "	")) {
      o = a + 1 | 0, i = l._1.tail;
      continue;
    }
    s = !1, u = a;
  }
  return u;
})(0)(Me(t)), s4 = (t) => {
  const n = Rt(
    (e) => x,
    (e) => (r) => T("Just", { head: e, tail: r }),
    B(i4)(_t((e) => Eu(e) !== "", t))
  );
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return N(YA)(n._1.head)(n._1.tail);
  f();
}, u4 = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => {
    const s = n._3;
    return e((u) => t(
      n,
      e,
      r,
      (a, c) => o(b(a._1, a._2, s), c),
      (a, c) => e((l) => {
        const d = Zo((() => {
          const g = vt(It(($) => $ === ">"))("'>'"), p = vt(It(($) => $ === "-"))("'-'");
          return ($, h, m, y, v) => {
            const w = $._1, C = $._2;
            return h((J) => g(
              b(w, C, !1),
              h,
              m,
              (k, E) => {
                const L = k._3;
                return h((I) => L ? y(k, E) : p($, h, m, y, v));
              },
              v
            ));
          };
        })()), _ = n._3 && !a._3 ? b(a._1, a._2, !0) : a;
        return e((g) => d(
          _,
          e,
          r,
          (p, $) => o(b(p._1, p._2, s), $),
          (p, $) => e((h) => i(_._3 && !p._3 ? b(p._1, p._2, !0) : p, "-"))
        ));
      })
    ));
  };
})(), cn = /* @__PURE__ */ (() => {
  const t = ce(It((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? b(u._1, u._2, !0) : u, void 0))
  ));
})(), ri = /* @__PURE__ */ (() => {
  const t = It((n) => n === " " || n === "	");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => cn(n._3 && !u._3 ? b(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), y$ = (t, n, e, r, o) => n((i) => n((s) => cn(
  t,
  n,
  e,
  r,
  (u, a) => n((c) => n((l) => {
    const d = t._3 && !u._3 ? b(u._1, u._2, !0) : u;
    return Bu(
      d,
      n,
      e,
      r,
      (_, g) => n((p) => o(d._3 && !_._3 ? b(_._1, _._2, !0) : _, g))
    );
  }))
))), x$ = (t, n, e, r, o) => n((i) => cn(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(It((d) => d === "-"))("'-'"), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => {
      const _ = ($, h) => n((m) => (() => {
        if (h.tag === "Just")
          return (y, v, w, C, J) => v((k) => jA(
            y,
            v,
            w,
            C,
            (E, L) => v((I) => J(E, T("Just", L)))
          ));
        if (h.tag === "Nothing")
          return (y, v, w, C, J) => J(y, x);
        f();
      })()(l._3 && !$._3 ? b($._1, $._2, !0) : $, n, e, r, o)), g = l._1, p = l._2;
      return n(($) => n((h) => c(
        b(g, p, !1),
        n,
        e,
        (m, y) => n((v) => _(l, x)),
        (m, y) => n((v) => _(b(g, p, !1), T("Just", y)))
      )));
    });
  })
)), a4 = (t) => {
  const n = cr("Expected ")(t), e = (() => {
    if (n.tag === "Nothing")
      return t;
    if (n.tag === "Just")
      return n._1;
    f();
  })();
  return e === "'{'" ? "Open the block with `{`." : e === "integer (seed value)" ? "Put an integer after `seed`." : e === "closing '}'" ? "Close this block with `}`." : e === `closing '"' (unterminated string)` ? 'This string is unterminated; close it with `"`.' : e === "closing '|'" ? "Close this pipe label with `|`." : e === "space after '+'" ? "Put a space after `+`: `+ api: API`." : e === "node identifier after '+'" ? "Put a node id after `+`: `+ api: API`." : e === "space after '-'" ? "Put a space after `-`: `- api`." : e === "node identifier after '-'" ? "Put a node id after `-`: `- api`." : e === "space after '~'" ? "Put a space after `~`: `~ api: API` or `~ api -> db => api -> cache`." : e === "node relabel label" ? "Give the replacement label after `~ api`: `~ api: API`." : e === "node placeholder value" ? "Give the replacement value after the placeholder name: `~ total.count: 3`." : e === "node identifier" ? "Put a node identifier here." : e === "space after 'inside'" ? "Put a space after `inside`: `inside api { ... }`." : e === "node identifier after 'inside'" ? "Tell `inside` which node owns this interior: `inside api { ... }`." : e === "source node identifier after 'via'" ? "Put the source node after `via`: `via a b`." : e === "target node identifier after 'via'" ? "Put the second endpoint after `via`: `via a b`." : e === "source node identifier" ? "Put a source node identifier here." : e === "new source node identifier" ? "Put the new source node identifier after `=>`." : e === "new target node identifier" ? "Put the new target node identifier after the replacement arrow." : e === "edge arrow '->' or '--'" ? "Use `->` for a directed edge or `--` for an undirected edge." : e === "source edge arrow '->'" ? "Use `->` in the edge you are changing: `~ api -> db => api -> cache`." : e === "replacement edge arrow '->'" ? "Use `->` in the replacement edge: `~ api -> db => api -> cache`." : e === "repoint separator '=>'" ? "Use `=>` before the replacement edge: `~ api -> db => api -> cache`." : e === "target node identifier" ? "Put a target node after the arrow." : e === "'~>'" ? "Use `~>` for movement from left to right." : e === "'<~'" ? "Use `<~` for movement from right to left." : e === "'->' or '<-'" ? "Use `~>` / `<~` for movement tokens." : e === 'label ("…", : rest-of-line, or |…|)' ? 'label must use `: text`, `"text"`, or `|multi-line|`.' : e === "attribute key" ? "Start each attribute with a name, like `shape`." : e === "':'" ? "Put `:` between the attribute name and value: `{shape: cylinder}`." : e === "attribute value" ? "Put an attribute value after `:`." : e === "closing '}' for attributes" ? "Close the attribute block with `}`." : e === "space after 'into'" ? "Put a space after `into`: `into api`." : e === "node identifier after 'into'" ? "Tell `into` which node to dive into." : e === "space after 'step'" ? "Put a space after `step`: `step request`." : e === "step name" ? "Name the step: `step request`." : e === "newline or '}' (statements end at the end of the line)" ? "This statement has extra text. Put the next statement on a new line or close the block with `}`." : e === "statement (+ node, - node, + edge, - edge, ~ node, into, out, or 'a ~> b'/'a <~ b')" ? "I don't recognize this statement. Start with `+`, `-`, `~`, `into`, `out`, `par`, `seq`, or movement like `api ~> db`." : e === "'scene', 'still', 'title', 'step', 'inside', a statement, or end of input" ? "Start with a statement like `+ api: API`, a marker like `step request`, or a block with `scene`, `still`, `title`, or `inside`." : e;
}, c4 = (t) => {
  const n = Eu(t), e = cr('"')(n), r = (() => {
    if (e.tag === "Just")
      return Zx('"')(e._1);
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
  return o === "" ? x : T("Just", o);
}, v$ = (t) => (n) => t !== "AnimatedSurface" && n.statements.length !== 0 ? {
  ...n,
  frames: Lt(n.frames)((() => {
    if (t === "StillSurface")
      return { name: x, ops: jr("Seq", n.statements), kind: zg };
    if (t === "SequenceSurface")
      return { name: x, ops: jr("Seq", n.statements), kind: fc };
    if (t === "AnimatedSurface")
      return { name: x, ops: jr("Seq", n.statements), kind: fc };
    f();
  })()),
  statements: []
} : n, f4 = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return e((d) => Gg(
        l,
        e,
        r,
        o,
        (_, g) => e((p) => i(
          l._3 && !_._3 ? b(_._1, _._2, !0) : _,
          g === "n" ? `
` : g === "t" ? "	" : g === "r" ? "\r" : g
        ))
      ));
    })
  ));
})(), l4 = /* @__PURE__ */ (() => {
  const t = It((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => f4(b(s, u, !1), e, r, (c, l) => e((d) => t(n, e, r, o, i)), i));
  };
})(), T$ = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = ce(l4), d = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e(($) => {
          const h = vt(vt(It((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = d._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return e((y) => h(
            m,
            e,
            r,
            o,
            (v, w) => e((C) => i(
              m._3 && !v._3 ? b(v._1, v._2, !0) : v,
              _r(Xt(_n.foldr, p))
            ))
          ));
        })
      ));
    })
  ));
})(), g4 = { frames: [], statements: [] }, w$ = (t) => {
  const n = o4(Hi(`
`)(t));
  return dr(`
`)(B(n4)(B(ps(s4(n)))(n)));
}, _4 = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => Fn("|md")(
    t,
    n,
    e,
    (u, a) => r(b(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const l = vt((_, g, p, $, h) => {
        const m = _._1, y = _._2;
        return g((v) => Fn(`\r
`)(
          b(m, y, !1),
          g,
          p,
          (w, C) => {
            const J = w._3;
            return g((k) => {
              if (J)
                return $(w, C);
              const E = _._1, L = _._2;
              return g((I) => Fn(`
`)(
                b(E, L, !1),
                g,
                p,
                (H, G) => {
                  const O = H._3;
                  return g((ut) => O ? $(H, G) : Fn("\r")(_, g, p, $, h));
                },
                h
              ));
            });
          },
          h
        ));
      })("newline after '|md'"), d = t._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return n((_) => l(
        d,
        n,
        e,
        (g, p) => r(b(g._1, g._2, i), p),
        (g, p) => n(($) => {
          const h = ce($$), m = d._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return n((y) => h(
            m,
            n,
            e,
            (v, w) => r(b(v._1, v._2, i), w),
            (v, w) => n((C) => {
              const J = vt(vt(It((E) => E === "|"))("'|'"))("closing '|'"), k = m._3 && !v._3 ? b(v._1, v._2, !0) : v;
              return n((E) => J(
                k,
                n,
                e,
                (L, I) => r(b(L._1, L._2, i), I),
                (L, I) => n((H) => o(
                  k._3 && !L._3 ? b(L._1, L._2, !0) : L,
                  "md:" + w$(dr("")(Xt(_n.foldr, w)))
                ))
              ));
            })
          ));
        })
      ));
    })
  ));
}, d4 = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = ce($$), d = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e(($) => {
          const h = vt(vt(It((y) => y === "|"))("'|'"))("closing '|'"), m = d._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return e((y) => h(
            m,
            e,
            r,
            o,
            (v, w) => e((C) => i(
              m._3 && !v._3 ? b(v._1, v._2, !0) : v,
              w$(dr("")(Xt(_n.foldr, p)))
            ))
          ));
        })
      ));
    })
  ));
})(), Ii = /* @__PURE__ */ It((t) => t >= "0" && t <= "9"), h4 = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => lf(
      b(s, u, !1),
      e,
      r,
      (c, l) => {
        const d = c._3;
        return e((_) => {
          if (d)
            return o(c, l);
          const g = n._1, p = n._2;
          return e(($) => Ii(
            b(g, p, !1),
            e,
            r,
            (h, m) => {
              const y = h._3;
              return e((v) => {
                if (y)
                  return o(h, m);
                const w = n._1, C = n._2;
                return e((J) => t(
                  b(w, C, !1),
                  e,
                  r,
                  (k, E) => {
                    const L = k._3;
                    return e((I) => L ? o(k, E) : u4(n, e, r, o, i));
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
})(), te = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, d) => e((_) => {
      const g = ce(h4), p = n._3 && !l._3 ? b(l._1, l._2, !0) : l;
      return e(($) => g(
        p,
        e,
        r,
        o,
        (h, m) => e((y) => i(
          p._3 && !h._3 ? b(h._1, h._2, !0) : h,
          yr(d) + _r(Xt(_n.foldr, m))
        ))
      ));
    }), a = n._1, c = n._2;
    return e((l) => lf(
      b(a, c, !1),
      e,
      r,
      (d, _) => {
        const g = d._3;
        return e((p) => g ? o(d, _) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), p4 = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => cn(
  r,
  o,
  i,
  s,
  (c, l) => o((d) => {
    const _ = Ie(vt(te)("target node identifier")), g = r._3 && !c._3 ? b(c._1, c._2, !0) : c;
    return o((p) => _(
      g,
      o,
      i,
      s,
      ($, h) => o((m) => u(
        g._3 && !$._3 ? b($._1, $._2, !0) : $,
        { op: gr("DelEdge", { from: t, to: h._1, directed: e }), operands: [n, h._2] }
      ))
    ));
  })
)), m4 = (t, n, e, r, o) => n((i) => lr(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((l) => {
      const d = c._3;
      return n((_) => te(
        c,
        n,
        e,
        (g, p) => r(b(g._1, g._2, d), p),
        (g, p) => n(($) => {
          const h = c._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return n((m) => cn(
            h,
            n,
            e,
            (y, v) => r(b(y._1, y._2, d), v),
            (y, v) => n((w) => {
              const C = h._3 && !y._3 ? b(y._1, y._2, !0) : y;
              return n((J) => {
                const k = (I, H) => n((G) => {
                  const O = C._3 && !I._3 ? b(I._1, I._2, !0) : I;
                  return n((ut) => r(c._3 && !O._3 ? b(O._1, O._2, !0) : O, wr("Use `~>` / `<~` for movement tokens.", u)));
                }), E = C._1, L = C._2;
                return n((I) => Fn("->")(
                  b(E, L, !1),
                  n,
                  e,
                  (H, G) => {
                    const O = H._3;
                    return n((ut) => O ? r(b(H._1, H._2, d), G) : Fn("<-")(C, n, e, (ot, Z) => r(b(ot._1, ot._2, d), Z), k));
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
)), $4 = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Ie(te)(
    t,
    n,
    e,
    (a, c) => r(b(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const d = t._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return n((_) => cn(
        d,
        n,
        e,
        (g, p) => r(b(g._1, g._2, s), p),
        (g, p) => n(($) => {
          const h = vt(It((y) => y === "~"))("'~'"), m = d._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return n((y) => {
            const v = (J, k) => n((E) => {
              const L = m._3 && !J._3 ? b(J._1, J._2, !0) : J;
              return n((I) => {
                const H = c._1, G = c._2, O = t._3 && !L._3 ? b(L._1, L._2, !0) : L;
                return n((ut) => cn(
                  O,
                  n,
                  e,
                  r,
                  (ot, Z) => n((U) => {
                    const P = vt(It((D) => D === "~"))("'~'"), A = vt(It((D) => D === "<"))("'<'"), Q = O._3 && !ot._3 ? b(ot._1, ot._2, !0) : ot;
                    return n((D) => {
                      const M = (X, W) => n((nt) => {
                        const et = W === "~" ? vt(Fn("~>"))("'~>'") : vt(Fn("<~"))("'<~'"), it = Q._3 && !X._3 ? b(X._1, X._2, !0) : X;
                        return n((lt) => et(
                          it,
                          n,
                          e,
                          r,
                          (gt, pt) => n((St) => o(
                            it._3 && !gt._3 ? b(gt._1, gt._2, !0) : gt,
                            S(H, S(G, pt))
                          ))
                        ));
                      }), Y = Q._1, q = Q._2;
                      return n((X) => P(
                        b(Y, q, !1),
                        n,
                        e,
                        (W, nt) => {
                          const et = W._3;
                          return n((it) => et ? r(Q, nt) : A(Q, n, e, (lt, gt) => r(Q, gt), (lt, gt) => M(Q, gt)));
                        },
                        (W, nt) => M(Q, nt)
                      ));
                    });
                  })
                ));
              });
            }), w = m._1, C = m._2;
            return n((J) => h(
              b(w, C, !1),
              n,
              e,
              (k, E) => {
                const L = k._3;
                return n((I) => L ? r(b(m._1, m._2, s), E) : n((H) => Fn("<~")(
                  m,
                  n,
                  e,
                  (G, O) => r(b(m._1, m._2, s), O),
                  (G, O) => n((ut) => v(m))
                )));
              },
              (k, E) => v(m)
            ));
          });
        })
      ));
    })
  ));
}), y4 = (t) => (n) => {
  const e = vt(Fn("->"))("source edge arrow '->'");
  return (r, o, i, s, u) => o((a) => e(
    r,
    o,
    i,
    s,
    (c, l) => o((d) => {
      const _ = r._3 && !c._3 ? b(c._1, c._2, !0) : c;
      return o((g) => cn(
        _,
        o,
        i,
        s,
        (p, $) => o((h) => {
          const m = Ie(vt(te)("target node identifier")), y = _._3 && !p._3 ? b(p._1, p._2, !0) : p;
          return o((v) => m(
            y,
            o,
            i,
            s,
            (w, C) => o((J) => {
              const k = C._1, E = C._2, L = y._3 && !w._3 ? b(w._1, w._2, !0) : w;
              return o((I) => cn(
                L,
                o,
                i,
                s,
                (H, G) => o((O) => {
                  const ut = vt(Fn("=>"))("repoint separator '=>'"), ot = L._3 && !H._3 ? b(H._1, H._2, !0) : H;
                  return o((Z) => ut(
                    ot,
                    o,
                    i,
                    s,
                    (U, P) => o((A) => {
                      const Q = ot._3 && !U._3 ? b(U._1, U._2, !0) : U;
                      return o((D) => cn(
                        Q,
                        o,
                        i,
                        s,
                        (M, Y) => o((q) => {
                          const X = Ie(vt(te)("new source node identifier")), W = Q._3 && !M._3 ? b(M._1, M._2, !0) : M;
                          return o((nt) => X(
                            W,
                            o,
                            i,
                            s,
                            (et, it) => o((lt) => {
                              const gt = it._1, pt = it._2, St = W._3 && !et._3 ? b(et._1, et._2, !0) : et;
                              return o((Gt) => cn(
                                St,
                                o,
                                i,
                                s,
                                (Wt, $t) => o((At) => {
                                  const Nt = vt(Fn("->"))("replacement edge arrow '->'"), Ct = St._3 && !Wt._3 ? b(Wt._1, Wt._2, !0) : Wt;
                                  return o((dt) => Nt(
                                    Ct,
                                    o,
                                    i,
                                    s,
                                    (yt, Et) => o((mt) => {
                                      const kt = Ct._3 && !yt._3 ? b(yt._1, yt._2, !0) : yt;
                                      return o((Dt) => cn(
                                        kt,
                                        o,
                                        i,
                                        s,
                                        (zt, rn) => o((fn) => {
                                          const ye = Ie(vt(te)("new target node identifier")), On = kt._3 && !zt._3 ? b(zt._1, zt._2, !0) : zt;
                                          return o((Yt) => ye(
                                            On,
                                            o,
                                            i,
                                            s,
                                            (Mt, In) => o((Fe) => u(
                                              On._3 && !Mt._3 ? b(Mt._1, Mt._2, !0) : Mt,
                                              {
                                                op: gr("RepointEdge", { from: t, to: k, newFrom: gt, newTo: In._1 }),
                                                operands: [n, E, pt, In._2]
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
}, x4 = (t, n, e, r, o) => n((i) => Ii(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = ce(Ii), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => c(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const $ = xx(yr(u) + _r(Xt(
          _n.foldr,
          g
        )));
        return (() => {
          if ($.tag === "Just") {
            const h = $._1;
            return (m, y, v, w, C) => C(m, h);
          }
          if ($.tag === "Nothing")
            return (h, m, y, v, w) => w(h, 0);
          f();
        })()(l._3 && !_._3 ? b(_._1, _._2, !0) : _, n, e, r, o);
      })
    ));
  })
)), v4 = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Fn(t)(
    n,
    e,
    r,
    (a, c) => o(b(a._1, a._2, s), c),
    (a, c) => e((l) => {
      const d = Zo((() => {
        const g = vt(It(($) => $ === "_"))("'_'"), p = vt(It(($) => $ === "-"))("'-'");
        return ($, h, m, y, v) => {
          const w = $._1, C = $._2;
          return h((J) => lf(
            b(w, C, !1),
            h,
            m,
            (k, E) => {
              const L = k._3;
              return h((I) => {
                if (L)
                  return y(k, E);
                const H = $._1, G = $._2;
                return h((O) => Ii(
                  b(H, G, !1),
                  h,
                  m,
                  (ut, ot) => {
                    const Z = ut._3;
                    return h((U) => {
                      if (Z)
                        return y(ut, ot);
                      const P = $._1, A = $._2;
                      return h((Q) => g(
                        b(P, A, !1),
                        h,
                        m,
                        (D, M) => {
                          const Y = D._3;
                          return h((q) => Y ? y(D, M) : p($, h, m, y, v));
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
      })()), _ = n._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return e((g) => d(
        _,
        e,
        r,
        (p, $) => o(b(p._1, p._2, s), $),
        (p, $) => e((h) => {
          const m = _._3 && !p._3 ? b(p._1, p._2, !0) : p;
          return e((y) => Be(
            m,
            e,
            r,
            (v, w) => o(b(v._1, v._2, s), w),
            (v, w) => e((C) => i(m._3 && !v._3 ? b(v._1, v._2, !0) : v, t))
          ));
        })
      ));
    })
  ));
}, T4 = (t, n, e, r, o) => n((i) => Ii(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = ce((() => {
      const d = vt(It((_) => _ === "."))("'.'");
      return (_, g, p, $, h) => {
        const m = _._1, y = _._2;
        return g((v) => Ii(
          b(m, y, !1),
          g,
          p,
          (w, C) => {
            const J = w._3;
            return g((k) => J ? $(w, C) : d(_, g, p, $, h));
          },
          h
        ));
      };
    })()), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => c(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => o(
        l._3 && !_._3 ? b(_._1, _._2, !0) : _,
        yr(u) + _r(Xt(_n.foldr, g))
      ))
    ));
  })
)), Ve = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Fn(t)(
    n,
    e,
    r,
    (a, c) => o(b(a._1, a._2, s), c),
    (a, c) => e((l) => {
      const d = Zo((() => {
        const g = vt(It(($) => $ === "_"))("'_'"), p = vt(It(($) => $ === "-"))("'-'");
        return ($, h, m, y, v) => {
          const w = $._1, C = $._2;
          return h((J) => lf(
            b(w, C, !1),
            h,
            m,
            (k, E) => {
              const L = k._3;
              return h((I) => {
                if (L)
                  return y(k, E);
                const H = $._1, G = $._2;
                return h((O) => Ii(
                  b(H, G, !1),
                  h,
                  m,
                  (ut, ot) => {
                    const Z = ut._3;
                    return h((U) => {
                      if (Z)
                        return y(ut, ot);
                      const P = $._1, A = $._2;
                      return h((Q) => g(
                        b(P, A, !1),
                        h,
                        m,
                        (D, M) => {
                          const Y = D._3;
                          return h((q) => Y ? y(D, M) : p($, h, m, y, v));
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
      })()), _ = n._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return e((g) => d(
        _,
        e,
        r,
        (p, $) => o(b(p._1, p._2, s), $),
        (p, $) => e((h) => i(_._3 && !p._3 ? b(p._1, p._2, !0) : p, void 0))
      ));
    })
  ));
}, w4 = (t, n, e, r, o) => n((i) => Ve("into")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(ri)("space after 'into'"), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => c(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const $ = Ie(vt(te)("node identifier after 'into'")), h = l._3 && !_._3 ? b(_._1, _._2, !0) : _;
        return n((m) => $(
          h,
          n,
          e,
          r,
          (y, v) => n((w) => o(
            h._3 && !y._3 ? b(y._1, y._2, !0) : y,
            { op: gr("Enter", { id: v._1 }), operands: [v._2] }
          ))
        ));
      })
    ));
  })
)), N4 = (t, n, e, r, o) => n((i) => Ve("out")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => o(t._3 && !s._3 ? b(s._1, s._2, !0) : s, { op: sA, operands: [] }))
)), C4 = (t, n, e, r, o) => n((i) => Ve("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((l) => cn(
      c,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = vt(x4)("integer (seed value)"), $ = c._3 && !d._3 ? b(d._1, d._2, !0) : d;
        return n((h) => p(
          $,
          n,
          e,
          r,
          (m, y) => n((v) => {
            const w = $._3 && !m._3 ? b(m._1, m._2, !0) : m;
            return n((C) => Be(
              w,
              n,
              e,
              r,
              (J, k) => n((E) => o(w._3 && !J._3 ? b(J._1, J._2, !0) : J, y))
            ));
          })
        ));
      })
    ));
  })
)), N$ = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => Ve("diagram")(
    t,
    n,
    e,
    (u, a) => r(b(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const l = vt(ri)("space after 'diagram'"), d = t._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return n((_) => l(
        d,
        n,
        e,
        (g, p) => r(b(g._1, g._2, i), p),
        (g, p) => n(($) => {
          const h = vt(Ve("sequence"))("diagram mode"), m = d._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return n((y) => h(
            m,
            n,
            e,
            (v, w) => r(b(v._1, v._2, i), w),
            (v, w) => n((C) => {
              const J = m._3 && !v._3 ? b(v._1, v._2, !0) : v;
              return n((k) => y$(
                J,
                n,
                e,
                (E, L) => r(b(E._1, E._2, i), L),
                (E, L) => n((I) => o(
                  J._3 && !E._3 ? b(E._1, E._2, !0) : E,
                  iA
                ))
              ));
            })
          ));
        })
      ));
    })
  ));
}, C$ = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => Ve("still")(
    t,
    n,
    e,
    (u, a) => r(b(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const l = t._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return n((d) => y$(
        l,
        n,
        e,
        (_, g) => r(b(_._1, _._2, i), g),
        (_, g) => n((p) => o(l._3 && !_._3 ? b(_._1, _._2, !0) : _, oA))
      ));
    })
  ));
}, J$ = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => C$(
    b(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((d) => l ? r(a, c) : N$(t, n, e, r, o));
    },
    o
  ));
}, J4 = (t) => (n, e, r, o, i) => e((s) => lr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
    return e((d) => {
      const _ = l._3;
      return J$(
        l,
        e,
        r,
        (g, p) => o(b(g._1, g._2, _), p),
        (g, p) => e(($) => o(
          l._3 && !g._3 ? b(g._1, g._2, !0) : g,
          wr(
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
)), b4 = (t) => (n, e, r, o, i) => e((s) => lr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
    return e((d) => {
      const _ = ($, h) => e((m) => (() => {
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
          return (v, w, C, J, k) => J(v, wr(y, a));
        }
        if (h.tag === "Nothing")
          return (y, v, w, C, J) => J(y, void 0);
        f();
      })()(l._3 && !$._3 ? b($._1, $._2, !0) : $, e, r, o, i)), g = l._1, p = l._2;
      return e(($) => e((h) => J$(
        b(g, p, !1),
        e,
        r,
        (m, y) => {
          const v = m._3;
          return e((w) => v ? o(m, y) : _(l, x));
        },
        (m, y) => e((v) => _(m, T("Just", y)))
      )));
    });
  })
)), k4 = (t, n, e, r, o) => n((i) => {
  const s = (c, l) => n((d) => {
    const _ = t._3 && !c._3 ? b(c._1, c._2, !0) : c;
    return n((g) => Be(
      _,
      n,
      e,
      r,
      (p, $) => n((h) => {
        const m = _._3 && !p._3 ? b(p._1, p._2, !0) : p;
        return n((y) => b4(l)(
          m,
          n,
          e,
          r,
          (v, w) => n((C) => o(m._3 && !v._3 ? b(v._1, v._2, !0) : v, l))
        ));
      })
    ));
  }), u = t._1, a = t._2;
  return n((c) => C$(
    b(u, a, !1),
    n,
    e,
    (l, d) => {
      const _ = l._3;
      return n((g) => _ ? r(l, d) : N$(t, n, e, r, s));
    },
    s
  ));
}), L4 = (t, n, e, r, o) => n((i) => {
  const s = (c, l) => n((d) => o(
    c,
    (() => {
      if (l.tag === "Nothing")
        return rA;
      if (l.tag === "Just")
        return l._1;
      f();
    })()
  )), u = t._1, a = t._2;
  return n((c) => n((l) => k4(
    b(u, a, !1),
    n,
    e,
    (d, _) => {
      const g = d._3;
      return n((p) => g ? r(d, _) : s(t, x));
    },
    (d, _) => n((g) => s(d, T("Just", _)))
  )));
}), S4 = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => cn(
    t,
    n,
    e,
    (a, c) => r(b(a._1, a._2, s), c),
    (a, c) => n((l) => Ve("via")(
      t._3 && !a._3 ? b(a._1, a._2, !0) : a,
      n,
      e,
      (d, _) => r(b(d._1, d._2, s), _),
      (d, _) => n((g) => {
        const p = t._3 && !d._3 ? b(d._1, d._2, !0) : d;
        return n(($) => rf(
          p,
          n,
          e,
          r,
          (h, m) => n((y) => {
            const v = p._3 && !h._3 ? b(h._1, h._2, !0) : h;
            return n((w) => ri(
              v,
              n,
              e,
              r,
              (C, J) => n((k) => {
                const E = vt(te)("source node identifier after 'via'"), L = v._3 && !C._3 ? b(C._1, C._2, !0) : C;
                return n((I) => E(
                  L,
                  n,
                  e,
                  r,
                  (H, G) => n((O) => {
                    const ut = L._3 && !H._3 ? b(H._1, H._2, !0) : H;
                    return n((ot) => cn(
                      ut,
                      n,
                      e,
                      r,
                      (Z, U) => n((P) => {
                        const A = vt(te)("target node identifier after 'via'"), Q = ut._3 && !Z._3 ? b(Z._1, Z._2, !0) : Z;
                        return n((D) => A(
                          Q,
                          n,
                          e,
                          r,
                          (M, Y) => n((q) => o(Q._3 && !M._3 ? b(M._1, M._2, !0) : M, { from: G, to: Y }))
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
}), E4 = (t) => (n) => {
  const e = ce(S4);
  return (r, o, i, s, u) => o((a) => e(
    r,
    o,
    i,
    s,
    (c, l) => o((d) => u(
      r._3 && !c._3 ? b(c._1, c._2, !0) : c,
      { op: gr("DelNode", { id: t, via: Xt(_n.foldr, l) }), operands: [n] }
    ))
  ));
}, P4 = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = vt(ri)("space after '-'"), d = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e(($) => {
          const h = Ie(vt(te)("node identifier after '-'")), m = d._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return e((y) => h(
            m,
            e,
            r,
            o,
            (v, w) => e((C) => {
              const J = w._1, k = w._2, E = m._3 && !v._3 ? b(v._1, v._2, !0) : v;
              return e((L) => x$(
                E,
                e,
                r,
                o,
                (I, H) => e((G) => (() => {
                  if (H.tag === "Just")
                    return p4(J)(k)(H._1);
                  if (H.tag === "Nothing")
                    return E4(J)(k);
                  f();
                })()(E._3 && !I._3 ? b(I._1, I._2, !0) : I, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), kr = (t) => (n) => (e, r, o, i, s) => r((u) => lr(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const d = e._3 && !a._3 ? b(a._1, a._2, !0) : a;
    return r((_) => Ve(t)(
      d,
      r,
      o,
      i,
      (g, p) => r(($) => i(d._3 && !g._3 ? b(g._1, g._2, !0) : g, wr(n, c)))
    ));
  })
)), A4 = (t) => t === "AnimatedSurface" ? (n, e, r, o, i) => e((s) => lr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
    return e((d) => Ve("step")(
      l,
      e,
      r,
      o,
      (_, g) => e((p) => {
        const $ = vt(ri)("space after 'step'"), h = l._3 && !_._3 ? b(_._1, _._2, !0) : _;
        return e((m) => $(
          h,
          e,
          r,
          o,
          (y, v) => e((w) => {
            const C = Ie(vt(te)("step name")), J = h._3 && !y._3 ? b(y._1, y._2, !0) : y;
            return e((k) => C(
              J,
              e,
              r,
              o,
              (E, L) => e((I) => {
                const H = L._1, G = L._2, O = J._3 && !E._3 ? b(E._1, E._2, !0) : E;
                return e((ut) => lr(
                  O,
                  e,
                  r,
                  o,
                  (ot, Z) => e((U) => {
                    const P = O._3 && !ot._3 ? b(ot._1, ot._2, !0) : ot;
                    return e((A) => cn(
                      P,
                      e,
                      r,
                      o,
                      (Q, D) => e((M) => {
                        const Y = P._3 && !Q._3 ? b(Q._1, Q._2, !0) : Q;
                        return e((q) => m$(
                          Y,
                          e,
                          r,
                          o,
                          (X, W) => e((nt) => {
                            const et = Y._3 && !X._3 ? b(X._1, X._2, !0) : X;
                            return e((it) => Be(
                              et,
                              e,
                              r,
                              o,
                              (lt, gt) => e((pt) => {
                                const St = { line: a.line, column: a.column, endLine: Z.line, endColumn: Z.column };
                                return i(
                                  et._3 && !lt._3 ? b(lt._1, lt._2, !0) : lt,
                                  {
                                    name: T("Just", H),
                                    ops: jr(
                                      "Leaf",
                                      {
                                        op: gr("Step", { name: H }),
                                        line: St.line,
                                        column: St.column,
                                        endLine: St.endLine,
                                        endColumn: St.endColumn,
                                        span: St,
                                        operands: [G]
                                      }
                                    ),
                                    kind: c$
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
)) : kr("step")("`step` markers are only supported in animated diagrams."), R4 = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return e((d) => cn(
        l,
        e,
        r,
        o,
        (_, g) => e((p) => {
          const $ = ce(It(ZA)), h = l._3 && !_._3 ? b(_._1, _._2, !0) : _;
          return e((m) => $(
            h,
            e,
            r,
            o,
            (y, v) => e((w) => i(
              h._3 && !y._3 ? b(y._1, y._2, !0) : y,
              Eu(_r(Xt(_n.foldr, v)))
            ))
          ));
        })
      ));
    })
  ));
})(), b$ = /* @__PURE__ */ vt((t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => R4(
    b(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((d) => {
        if (l)
          return r(a, c);
        const _ = t._1, g = t._2;
        return n((p) => _4(
          b(_, g, !1),
          n,
          e,
          ($, h) => {
            const m = $._3;
            return n((y) => {
              if (m)
                return r($, h);
              const v = t._1, w = t._2;
              return n((C) => d4(
                b(v, w, !1),
                n,
                e,
                (J, k) => {
                  const E = J._3;
                  return n((L) => E ? r(J, k) : T$(t, n, e, r, o));
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
})('label ("…", : rest-of-line, or |…|)'), k$ = (t, n, e, r, o) => n((i) => cn(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => b$(t._3 && !s._3 ? b(s._1, s._2, !0) : s, n, e, r, o))
)), gf = (t) => (n, e, r, o, i) => e((s) => cn(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
    return e((d) => {
      const _ = ($, h) => e((m) => (h ? ((y, v, w, C, J) => J(y, x)) : (y, v, w, C, J) => v((k) => k$(
        y,
        v,
        w,
        C,
        (E, L) => v((I) => J(E, T("Just", L)))
      )))(l._3 && !$._3 ? b($._1, $._2, !0) : $, e, r, o, i)), g = l._1, p = l._2;
      return e(($) => {
        const h = (m, y) => {
          const v = m._3;
          return e((w) => v ? o(m, y) : _(l, !1));
        };
        return e((m) => e((y) => e((v) => Ls(
          b(g, p, !1),
          e,
          r,
          (w, C) => {
            const J = w._3;
            return e((k) => J ? h(b(g, p, !1), C) : e((E) => It(t)(
              b(g, p, !1),
              e,
              r,
              (L, I) => h(b(g, p, !1), I),
              (L, I) => e((H) => e((G) => _(b(g, p, !1), !0)))
            )));
          },
          (w, C) => e((J) => e((k) => _(b(g, p, !1), !0)))
        ))));
      });
    });
  })
)), F4 = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => cn(
  r,
  o,
  i,
  s,
  (c, l) => o((d) => {
    const _ = Ie(vt(te)("target node identifier")), g = r._3 && !c._3 ? b(c._1, c._2, !0) : c;
    return o((p) => _(
      g,
      o,
      i,
      s,
      ($, h) => o((m) => {
        const y = h._1, v = h._2, w = g._3 && !$._3 ? b($._1, $._2, !0) : $;
        return o((C) => gf(Wg)(
          w,
          o,
          i,
          s,
          (J, k) => o((E) => u(
            w._3 && !J._3 ? b(J._1, J._2, !0) : J,
            {
              op: gr("AddEdge", { from: t, to: y, label: k.tag === "Just" ? T("Just", k._1) : x, directed: e }),
              operands: [n, v]
            }
          ))
        ));
      })
    ));
  })
)), G4 = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Ie(te)(
    t,
    n,
    e,
    (a, c) => r(b(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const d = t._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return n((_) => cn(
        d,
        n,
        e,
        (g, p) => r(b(g._1, g._2, s), p),
        (g, p) => n(($) => {
          const h = vt(It((y) => y === "<"))("'<'"), m = d._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return n((y) => h(
            m,
            n,
            e,
            (v, w) => r(b(m._1, m._2, s), w),
            (v, w) => n((C) => {
              const J = Zo((E, L, I, H, G) => {
                const O = E._3;
                return Fn("<-")(E, L, I, (ut, ot) => H(b(ut._1, ut._2, O), ot), G);
              }), k = m._3 && !m._3 ? b(m._1, m._2, !0) : m;
              return n((E) => J(
                k,
                n,
                e,
                (L, I) => r(b(L._1, L._2, s), I),
                (L, I) => n((H) => {
                  const G = k._3 && !L._3 ? b(L._1, L._2, !0) : L;
                  return n((O) => {
                    const ut = c._1, ot = c._2, Z = t._3 && !G._3 ? b(G._1, G._2, !0) : G;
                    return n((U) => cn(
                      Z,
                      n,
                      e,
                      r,
                      (P, A) => n((Q) => {
                        const D = vt(Fn("<~"))("'<~'"), M = Z._3 && !P._3 ? b(P._1, P._2, !0) : P;
                        return n((Y) => D(
                          M,
                          n,
                          e,
                          r,
                          (q, X) => n((W) => {
                            const nt = M._3 && !q._3 ? b(q._1, q._2, !0) : q;
                            return n((et) => cn(
                              nt,
                              n,
                              e,
                              r,
                              (it, lt) => n((gt) => {
                                const pt = Ie(vt(te)("target node identifier")), St = nt._3 && !it._3 ? b(it._1, it._2, !0) : it;
                                return n((Gt) => pt(
                                  St,
                                  n,
                                  e,
                                  r,
                                  (Wt, $t) => n((At) => {
                                    const Nt = $t._1, Ct = $t._2, dt = St._3 && !Wt._3 ? b(Wt._1, Wt._2, !0) : Wt;
                                    return n((yt) => gf(Wg)(
                                      dt,
                                      n,
                                      e,
                                      r,
                                      (Et, mt) => n((kt) => o(
                                        dt._3 && !Et._3 ? b(Et._1, Et._2, !0) : Et,
                                        {
                                          op: gr(
                                            "Token",
                                            {
                                              from: Nt,
                                              to: ut,
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
}), I4 = (t, n, e, r, o) => n((i) => $4(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = u._2._2, l = u._1, d = u._2._1, _ = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((g) => cn(
      _,
      n,
      e,
      r,
      (p, $) => n((h) => {
        const m = Ie(vt(te)("target node identifier")), y = _._3 && !p._3 ? b(p._1, p._2, !0) : p;
        return n((v) => m(
          y,
          n,
          e,
          r,
          (w, C) => n((J) => {
            const k = C._1, E = C._2, L = y._3 && !w._3 ? b(w._1, w._2, !0) : w;
            return n((I) => gf(Wg)(
              L,
              n,
              e,
              r,
              (H, G) => n((O) => (c === "<~" ? ((ut, ot, Z, U, P) => P(
                ut,
                {
                  op: gr(
                    "Token",
                    {
                      from: k,
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
                  operands: c === "<~" ? [E, d] : [d, E]
                }
              )) : (ut, ot, Z, U, P) => P(
                ut,
                {
                  op: gr(
                    "Token",
                    {
                      from: l,
                      to: k,
                      labels: (() => {
                        if (G.tag === "Nothing")
                          return [];
                        if (G.tag === "Just")
                          return [G._1];
                        f();
                      })()
                    }
                  ),
                  operands: c === "<~" ? [E, d] : [d, E]
                }
              ))(L._3 && !H._3 ? b(H._1, H._2, !0) : H, n, e, r, o))
            ));
          })
        ));
      })
    ));
  })
)), B4 = (t, n, e, r, o) => n((i) => gf(e4)(
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
)), D4 = (t) => (n) => (e) => (r) => (o, i, s, u, a) => i((c) => lr(
  o,
  i,
  s,
  u,
  (l, d) => i((_) => {
    const g = o._3 && !l._3 ? b(l._1, l._2, !0) : l;
    return i((p) => {
      const $ = (y, v) => i((w) => (() => {
        if (v.tag === "Just")
          return (C, J, k, E, L) => E(C, wr("node placeholder value", d));
        if (v.tag === "Nothing")
          return (C, J, k, E, L) => J((I) => k$(
            C,
            J,
            k,
            E,
            (H, G) => J((O) => L(
              C._3 && !H._3 ? b(H._1, H._2, !0) : H,
              { op: gr("ModNodeSlot", { id: t, slot: e, value: G }), operands: [n, r] }
            ))
          ));
        f();
      })()(g._3 && !y._3 ? b(y._1, y._2, !0) : y, i, s, u, a)), h = g._1, m = g._2;
      return i((y) => i((v) => Bu(
        b(h, m, !1),
        i,
        s,
        (w, C) => i((J) => $(g, x)),
        (w, C) => i((J) => $(b(h, m, !1), T("Just", C)))
      )));
    });
  })
)), z4 = (t) => (n) => (e, r, o, i, s) => r((u) => lr(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const d = e._3 && !a._3 ? b(a._1, a._2, !0) : a;
    return r((_) => {
      const g = (h, m) => r((y) => (() => {
        if (m.tag === "Just")
          return (v, w, C, J, k) => J(v, wr("node relabel label", c));
        if (m.tag === "Nothing")
          return (v, w, C, J, k) => w((E) => b$(
            v,
            w,
            C,
            J,
            (L, I) => w((H) => k(
              v._3 && !L._3 ? b(L._1, L._2, !0) : L,
              { op: gr("ModNode", { id: t, label: T("Just", I) }), operands: [n] }
            ))
          ));
        f();
      })()(d._3 && !h._3 ? b(h._1, h._2, !0) : h, r, o, i, s)), p = d._1, $ = d._2;
      return r((h) => r((m) => Bu(
        b(p, $, !1),
        r,
        o,
        (y, v) => r((w) => g(d, x)),
        (y, v) => r((w) => g(b(p, $, !1), T("Just", v)))
      )));
    });
  })
)), H4 = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "~"))("'~'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = vt(ri)("space after '~'"), d = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e(($) => {
          const h = Ie(vt(te)("source node identifier")), m = d._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return e((y) => h(
            m,
            e,
            r,
            o,
            (v, w) => e((C) => {
              const J = w._1, k = w._2, E = vt(It((H) => H === "."))("'.'"), L = Ie(vt(te)("placeholder name")), I = m._3 && !v._3 ? b(v._1, v._2, !0) : v;
              return e((H) => {
                const G = (ot, Z) => e((U) => (() => {
                  if (Z.tag === "Just")
                    return D4(J)(k)(Z._1._1)(Z._1._2);
                  if (Z.tag === "Nothing")
                    return (P, A, Q, D, M) => A((Y) => cn(
                      P,
                      A,
                      Q,
                      D,
                      (q, X) => A((W) => {
                        const nt = vt(It((it) => it === "-"))("'-'"), et = P._3 && !q._3 ? b(q._1, q._2, !0) : q;
                        return A((it) => {
                          const lt = (St, Gt) => A((Wt) => (() => {
                            if (Gt.tag === "Just")
                              return y4(J)(k);
                            if (Gt.tag === "Nothing")
                              return z4(J)(k);
                            f();
                          })()(et._3 && !St._3 ? b(St._1, St._2, !0) : St, A, Q, D, M)), gt = et._1, pt = et._2;
                          return A((St) => A((Gt) => nt(
                            b(gt, pt, !1),
                            A,
                            Q,
                            (Wt, $t) => A((At) => lt(et, x)),
                            (Wt, $t) => A((At) => lt(b(gt, pt, !1), T("Just", $t)))
                          )));
                        });
                      })
                    ));
                  f();
                })()(I._3 && !ot._3 ? b(ot._1, ot._2, !0) : ot, e, r, o, i)), O = I._1, ut = I._2;
                return e((ot) => e((Z) => {
                  const U = (P, A) => {
                    const Q = P._3;
                    return e((D) => Q ? o(P, A) : G(I, x));
                  };
                  return e((P) => e((A) => E(
                    b(O, ut, !1),
                    e,
                    r,
                    (Q, D) => U(b(Q._1, Q._2, !1), D),
                    (Q, D) => e((M) => e((Y) => L(
                      Q,
                      e,
                      r,
                      (q, X) => U(b(q._1, q._2, !1), X),
                      (q, X) => e((W) => {
                        const nt = Q._3 && !q._3 ? b(q._1, q._2, !0) : q;
                        return e((et) => G(nt, T("Just", X)));
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
})(), Qg = /* @__PURE__ */ n$(/* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((d) => {
      const _ = n._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return Be(_, e, r, o, (g, p) => e(($) => i(_._3 && !g._3 ? b(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ vt(/* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Be(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((d) => {
      const _ = n._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return t(_, e, r, o, (g, p) => e(($) => i(_._3 && !g._3 ? b(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}'")), W4 = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => T$(
    b(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((d) => {
        if (l)
          return r(a, c);
        const _ = t._1, g = t._2;
        return n((p) => T4(
          b(_, g, !1),
          n,
          e,
          ($, h) => {
            const m = $._3;
            return n((y) => m ? r($, h) : te(t, n, e, r, o));
          },
          o
        ));
      });
    },
    o
  ));
}, hd = (t, n, e, r, o) => n((i) => cn(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(te)("attribute key"), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => c(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const $ = l._3 && !_._3 ? b(_._1, _._2, !0) : _;
        return n((h) => cn(
          $,
          n,
          e,
          r,
          (m, y) => n((v) => {
            const w = vt(vt(It((J) => J === ":"))("':'"))("':'"), C = $._3 && !m._3 ? b(m._1, m._2, !0) : m;
            return n((J) => w(
              C,
              n,
              e,
              r,
              (k, E) => n((L) => {
                const I = C._3 && !k._3 ? b(k._1, k._2, !0) : k;
                return n((H) => cn(
                  I,
                  n,
                  e,
                  r,
                  (G, O) => n((ut) => {
                    const ot = vt(W4)("attribute value"), Z = I._3 && !G._3 ? b(G._1, G._2, !0) : G;
                    return n((U) => ot(
                      Z,
                      n,
                      e,
                      r,
                      (P, A) => n((Q) => {
                        const D = Z._3 && !P._3 ? b(P._1, P._2, !0) : P;
                        return n((M) => cn(
                          D,
                          n,
                          e,
                          r,
                          (Y, q) => n((X) => o(D._3 && !Y._3 ? b(Y._1, Y._2, !0) : Y, S(g, A)))
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
)), Q4 = /* @__PURE__ */ n$(/* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((d) => {
      const _ = n._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return cn(_, e, r, o, (g, p) => e(($) => i(_._3 && !g._3 ? b(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ vt(/* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => cn(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((d) => {
      const _ = n._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return t(_, e, r, o, (g, p) => e(($) => i(_._3 && !g._3 ? b(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}' for attributes"))(/* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, d) => e((_) => (() => {
      if (d.tag === "Just")
        return (g, p, $, h, m) => m(g, z);
      if (d.tag === "Nothing")
        return (g, p, $, h, m) => p((y) => hd(
          g,
          p,
          $,
          h,
          (v, w) => p((C) => {
            const J = ce((() => {
              const E = vt(It((L) => L === ","))("','");
              return (L, I, H, G, O) => {
                const ut = L._3;
                return I((ot) => I((Z) => I((U) => I((P) => I((A) => I((Q) => cn(
                  L,
                  I,
                  H,
                  (D, M) => G(b(D._1, D._2, ut), M),
                  (D, M) => I((Y) => I((q) => {
                    const X = L._3 && !D._3 ? b(D._1, D._2, !0) : D;
                    return E(
                      X,
                      I,
                      H,
                      (W, nt) => G(b(W._1, W._2, ut), nt),
                      (W, nt) => I((et) => {
                        const it = X._3 && !W._3 ? b(W._1, W._2, !0) : W;
                        return I((lt) => I((gt) => {
                          const pt = L._3 && !it._3 ? b(it._1, it._2, !0) : it;
                          return cn(
                            pt,
                            I,
                            H,
                            (St, Gt) => G(b(St._1, St._2, ut), Gt),
                            (St, Gt) => I((Wt) => {
                              const $t = pt._3 && !St._3 ? b(St._1, St._2, !0) : St;
                              return I((At) => I((Nt) => {
                                const Ct = L._3 && !$t._3 ? b($t._1, $t._2, !0) : $t;
                                return hd(
                                  Ct,
                                  I,
                                  H,
                                  (dt, yt) => G(b(dt._1, dt._2, ut), yt),
                                  (dt, yt) => I((Et) => O(Ct._3 && !dt._3 ? b(dt._1, dt._2, !0) : dt, yt))
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
            })()), k = g._3 && !v._3 ? b(v._1, v._2, !0) : v;
            return p((E) => J(
              k,
              p,
              $,
              h,
              (L, I) => p((H) => m(
                k._3 && !L._3 ? b(L._1, L._2, !0) : L,
                KA([w, ...Xt(_n.foldr, I)])
              ))
            ));
          })
        ));
      f();
    })()(n._3 && !l._3 ? b(l._1, l._2, !0) : l, e, r, o, i)), a = n._1, c = n._2;
    return e((l) => e((d) => t(
      b(a, c, !1),
      e,
      r,
      (_, g) => e((p) => u(n, x)),
      (_, g) => e((p) => u(b(a, c, !1), T("Just", g)))
    )));
  });
})()), O4 = (t, n, e, r, o) => n((i) => cn(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(It((d) => d === "{"))("'{'"), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => {
      const _ = ($, h) => n((m) => (() => {
        if (h.tag === "Just")
          return Q4;
        if (h.tag === "Nothing")
          return (y, v, w, C, J) => J(y, z);
        f();
      })()(l._3 && !$._3 ? b($._1, $._2, !0) : $, n, e, r, o)), g = l._1, p = l._2;
      return n(($) => n((h) => c(
        b(g, p, !1),
        n,
        e,
        (m, y) => n((v) => _(l, x)),
        (m, y) => n((v) => _(b(g, p, !1), T("Just", y)))
      )));
    });
  })
)), q4 = (t) => (n) => (e, r, o, i, s) => r((u) => B4(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const d = e._3 && !a._3 ? b(a._1, a._2, !0) : a;
    return r((_) => O4(
      d,
      r,
      o,
      i,
      (g, p) => r(($) => s(
        d._3 && !g._3 ? b(g._1, g._2, !0) : g,
        {
          op: gr(
            "AddNode",
            {
              id: t,
              label: c,
              shape: (() => {
                const h = _d("shape")(p);
                if (h.tag === "Just")
                  return h._1 === "rectangle" || h._1 === "rect" ? xo : h._1 === "cylinder" || h._1 === "cyl" ? p_ : h._1 === "parallelogram" ? hv : h._1 === "diamond" ? pv : h._1 === "ellipse" ? mv : h._1 === "document" || h._1 === "doc" ? m_ : h._1 === "cloud" ? $v : xo;
                if (h.tag === "Nothing")
                  return xo;
                f();
              })(),
              width: (() => {
                const h = _d("width")(p);
                if (h.tag === "Just")
                  return _x(h._1, ml, Ht, x);
                if (h.tag === "Nothing")
                  return x;
                f();
              })()
            }
          ),
          operands: [n]
        }
      ))
    ));
  })
)), X4 = /* @__PURE__ */ (() => {
  const t = vt(It((n) => n === "+"))("'+'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = vt(ri)("space after '+'"), d = n._3 && !u._3 ? b(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e(($) => {
          const h = Ie(vt(te)("node identifier after '+'")), m = d._3 && !g._3 ? b(g._1, g._2, !0) : g;
          return e((y) => h(
            m,
            e,
            r,
            o,
            (v, w) => e((C) => {
              const J = w._1, k = w._2, E = m._3 && !v._3 ? b(v._1, v._2, !0) : v;
              return e((L) => x$(
                E,
                e,
                r,
                o,
                (I, H) => e((G) => (() => {
                  if (H.tag === "Just")
                    return F4(J)(k)(H._1);
                  if (H.tag === "Nothing")
                    return q4(J)(k);
                  f();
                })()(E._3 && !I._3 ? b(I._1, I._2, !0) : I, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), M4 = (t, n, e, r, o) => n((i) => lr(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(Hg([
      kr("+node")("Node additions use `+ api: API`."),
      kr("+edge")("Graph edges use `+ api -> db`."),
      kr("+conn")("Undirected graph edges use `+ api -- db`."),
      kr("-node")("Node removals use `- api`."),
      kr("-edge")("Graph edge removals use `- api -> db`."),
      kr("-conn")("Undirected graph edge removals use `- api -- db`."),
      kr("~edge")("Graph edge repoints use `~ api -> db => api -> cache`."),
      kr("enter")("Dive commands use `into api`."),
      kr("exit")("Return from a dive with `out`."),
      m4,
      X4,
      P4,
      H4,
      I4,
      G4,
      w4,
      N4
    ]))("statement (+ node, - node, + edge, - edge, ~ node, into, out, or 'a ~> b'/'a <~ b')"), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => c(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const $ = l._3 && !_._3 ? b(_._1, _._2, !0) : _;
        return n((h) => lr(
          $,
          n,
          e,
          r,
          (m, y) => n((v) => {
            const w = { line: u.line, column: u.column, endLine: y.line, endColumn: y.column };
            return o(
              $._3 && !m._3 ? b(m._1, m._2, !0) : m,
              jr(
                "Leaf",
                { op: g.op, line: w.line, column: w.column, endLine: w.endLine, endColumn: w.endColumn, span: w, operands: g.operands }
              )
            );
          })
        ));
      })
    ));
  })
)), L$ = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Be(
    t,
    n,
    e,
    (a, c) => r(b(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const d = Zo(vt(It((g) => g === "}"))("'}'")), _ = t._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return n((g) => d(
        _,
        n,
        e,
        (p, $) => r(b(p._1, p._2, s), $),
        (p, $) => n((h) => Zo(Ls)(
          _._3 && !p._3 ? b(p._1, p._2, !0) : p,
          n,
          e,
          (m, y) => r(b(m._1, m._2, s), y),
          (m, y) => n((v) => {
            const w = t._3 && !m._3 ? b(m._1, m._2, !0) : m;
            return n((C) => rf(
              w,
              n,
              e,
              r,
              (J, k) => n((E) => {
                const L = Hg([Y4, U4, M4]), I = w._3 && !J._3 ? b(J._1, J._2, !0) : J;
                return n((H) => L(
                  I,
                  n,
                  e,
                  r,
                  (G, O) => n((ut) => {
                    const ot = I._3 && !G._3 ? b(G._1, G._2, !0) : G;
                    return n((Z) => cn(
                      ot,
                      n,
                      e,
                      r,
                      (U, P) => n((A) => {
                        const Q = ot._3 && !U._3 ? b(U._1, U._2, !0) : U;
                        return n((D) => m$(
                          Q,
                          n,
                          e,
                          r,
                          (M, Y) => n((q) => {
                            const X = Q._3 && !M._3 ? b(M._1, M._2, !0) : M;
                            return n((W) => Be(
                              X,
                              n,
                              e,
                              r,
                              (nt, et) => n((it) => o(X._3 && !nt._3 ? b(nt._1, nt._2, !0) : nt, O))
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
}), U4 = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, l) => {
      const d = c._3;
      return n((_) => d ? r(c, l) : n((g) => {
        const p = t._3;
        return n(($) => Ve("seq")(
          t,
          n,
          e,
          (h, m) => r(b(h._1, h._2, p), m),
          (h, m) => n((y) => {
            const v = t._3 && !h._3 ? b(h._1, h._2, !0) : h;
            return n((w) => cn(
              v,
              n,
              e,
              (C, J) => r(b(C._1, C._2, p), J),
              (C, J) => n((k) => Bu(
                v._3 && !C._3 ? b(C._1, C._2, !0) : C,
                n,
                e,
                (E, L) => r(b(E._1, E._2, p), L),
                (E, L) => n((I) => {
                  const H = t._3 && !E._3 ? b(E._1, E._2, !0) : E;
                  return n((G) => rf(
                    H,
                    n,
                    e,
                    r,
                    (O, ut) => n((ot) => {
                      const Z = vt(vt(It((P) => P === "{"))("'{'"))("'{'"), U = H._3 && !O._3 ? b(O._1, O._2, !0) : O;
                      return n((P) => Z(
                        U,
                        n,
                        e,
                        r,
                        (A, Q) => n((D) => o(
                          U._3 && !A._3 ? b(A._1, A._2, !0) : A,
                          jr("GroupSeq", [])
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
    return n((c) => n((l) => Ve("seq")(
      b(i, s, !1),
      n,
      e,
      (d, _) => a(b(d._1, d._2, !1), _),
      (d, _) => n((g) => n((p) => cn(
        d,
        n,
        e,
        ($, h) => a(b($._1, $._2, !1), h),
        ($, h) => n((m) => {
          const y = d._3 && !$._3 ? b($._1, $._2, !0) : $;
          return vt(It((v) => v === "{"))("'{'")(
            y,
            n,
            e,
            (v, w) => a(b(y._1, y._2, !1), w),
            (v, w) => n((C) => Qg(Og(fA))(y, n, e, a, o))
          );
        })
      )))
    )));
  });
}, Y4 = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, l) => {
      const d = c._3;
      return n((_) => d ? r(c, l) : n((g) => {
        const p = t._3;
        return n(($) => Ve("par")(
          t,
          n,
          e,
          (h, m) => r(b(h._1, h._2, p), m),
          (h, m) => n((y) => {
            const v = t._3 && !h._3 ? b(h._1, h._2, !0) : h;
            return n((w) => cn(
              v,
              n,
              e,
              (C, J) => r(b(C._1, C._2, p), J),
              (C, J) => n((k) => Bu(
                v._3 && !C._3 ? b(C._1, C._2, !0) : C,
                n,
                e,
                (E, L) => r(b(E._1, E._2, p), L),
                (E, L) => n((I) => {
                  const H = t._3 && !E._3 ? b(E._1, E._2, !0) : E;
                  return n((G) => rf(
                    H,
                    n,
                    e,
                    r,
                    (O, ut) => n((ot) => {
                      const Z = vt(vt(It((P) => P === "{"))("'{'"))("'{'"), U = H._3 && !O._3 ? b(O._1, O._2, !0) : O;
                      return n((P) => Z(
                        U,
                        n,
                        e,
                        r,
                        (A, Q) => n((D) => o(
                          U._3 && !A._3 ? b(A._1, A._2, !0) : A,
                          jr("Par", [])
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
    return n((c) => n((l) => Ve("par")(
      b(i, s, !1),
      n,
      e,
      (d, _) => a(b(d._1, d._2, !1), _),
      (d, _) => n((g) => n((p) => cn(
        d,
        n,
        e,
        ($, h) => a(b($._1, $._2, !1), h),
        ($, h) => n((m) => {
          const y = d._3 && !$._3 ? b($._1, $._2, !0) : $;
          return vt(It((v) => v === "{"))("'{'")(
            y,
            n,
            e,
            (v, w) => a(b(y._1, y._2, !1), w),
            (v, w) => n((C) => Qg(Og(aA))(y, n, e, a, o))
          );
        })
      )))
    )));
  });
}, Og = (t) => {
  const n = ce(L$);
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => s(
      e._3 && !a._3 ? b(a._1, a._2, !0) : a,
      t(Xt(_n.foldr, c))
    ))
  ));
}, n0 = (t) => (n) => (e, r, o, i, s) => r((u) => v4(t)(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const d = ce(It(r4)), _ = e._3 && !a._3 ? b(a._1, a._2, !0) : a;
    return r((g) => d(
      _,
      r,
      o,
      i,
      (p, $) => r((h) => {
        const m = vt(vt(It((v) => v === "{"))("'{'"))("'{'"), y = _._3 && !p._3 ? b(p._1, p._2, !0) : p;
        return r((v) => m(
          y,
          r,
          o,
          i,
          (w, C) => r((J) => {
            const k = y._3 && !w._3 ? b(w._1, w._2, !0) : w;
            return r((E) => Be(
              k,
              r,
              o,
              i,
              (L, I) => r((H) => {
                const G = Og(cA), O = k._3 && !L._3 ? b(L._1, L._2, !0) : L;
                return r((ut) => G(
                  O,
                  r,
                  o,
                  i,
                  (ot, Z) => r((U) => {
                    const P = O._3 && !ot._3 ? b(ot._1, ot._2, !0) : ot;
                    return r((A) => Be(
                      P,
                      r,
                      o,
                      i,
                      (Q, D) => r((M) => {
                        const Y = vt(vt(It((X) => X === "}"))("'}'"))("closing '}'"), q = P._3 && !Q._3 ? b(Q._1, Q._2, !0) : Q;
                        return r((X) => Y(
                          q,
                          r,
                          o,
                          i,
                          (W, nt) => r((et) => {
                            const it = q._3 && !W._3 ? b(W._1, W._2, !0) : W;
                            return r((lt) => Be(
                              it,
                              r,
                              o,
                              i,
                              (gt, pt) => r((St) => s(
                                it._3 && !gt._3 ? b(gt._1, gt._2, !0) : gt,
                                { name: c4(_r(Xt(_n.foldr, $))), ops: Z, kind: n }
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
)), K4 = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => kr("keyframe")("Drop the `keyframe` wrapper; Markgraf animates statements in order.")(
    b(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((d) => {
        if (l)
          return r(a, c);
        const _ = t._1, g = t._2;
        return n((p) => n0("scene")(fc)(
          b(_, g, !1),
          n,
          e,
          ($, h) => {
            const m = $._3;
            return n((y) => {
              if (m)
                return r($, h);
              const v = t._1, w = t._2;
              return n((C) => n0("still")(zg)(
                b(v, w, !1),
                n,
                e,
                (J, k) => {
                  const E = J._3;
                  return n((L) => E ? r(J, k) : n0("title")(uA)(t, n, e, r, o));
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
}, V4 = (t) => (n) => (e) => {
  if (t === "AnimatedSurface")
    return { ...n, frames: Lt(n.frames)({ name: x, ops: e, kind: fc }) };
  if (t === "StillSurface")
    return { ...n, statements: Lt(n.statements)(e) };
  if (t === "SequenceSurface")
    return { ...n, statements: Lt(n.statements)(e) };
  f();
}, j4 = (t) => (n) => (e) => {
  if (e.tag === "TopFrame") {
    const r = v$(t)(n);
    return {
      ...r,
      frames: Lt(r.frames)((() => {
        if (t === "AnimatedSurface")
          return e._1;
        if (t === "StillSurface")
          return {
            ...e._1,
            kind: e._1.kind === "AnimatedKeyframe" ? zg : e._1.kind === "StepMarker" ? c$ : e._1.kind
          };
        if (t === "SequenceSurface")
          return e._1;
        f();
      })())
    };
  }
  if (e.tag === "TopStatement")
    return V4(t)(n)(e._1);
  if (e.tag === "TopInside")
    return n;
  f();
}, Z4 = (t) => {
  const n = N(j4(t))(g4);
  return (e) => v$(t)(n(e)).frames;
}, tR = (t) => vP.defer((n) => {
  const e = A4(t);
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => J4(t)(
      b(a, c, !1),
      o,
      i,
      (d, _) => {
        const g = d._3;
        return o((p) => {
          if (g)
            return s(d, _);
          const $ = r._1, h = r._2;
          return o((m) => o((y) => nR(
            b($, h, !1),
            o,
            i,
            (v, w) => {
              const C = v._3;
              return o((J) => {
                if (C)
                  return s(v, w);
                const k = r._1, E = r._2;
                return o((L) => o((I) => e(
                  b(k, E, !1),
                  o,
                  i,
                  (H, G) => {
                    const O = H._3;
                    return o((ut) => {
                      if (O)
                        return s(H, G);
                      const ot = r._1, Z = r._2;
                      return o((U) => o((P) => K4(
                        b(ot, Z, !1),
                        o,
                        i,
                        (A, Q) => {
                          const D = A._3;
                          return o((M) => D ? s(A, Q) : o((Y) => L$(r, o, i, s, (q, X) => o((W) => u(q, fa("TopStatement", X))))));
                        },
                        (A, Q) => o((D) => u(A, fa("TopFrame", Q)))
                      )));
                    });
                  },
                  (H, G) => o((O) => u(H, fa("TopFrame", G)))
                )));
              });
            },
            (v, w) => o((C) => u(v, fa("TopInside", w)))
          )));
        });
      },
      u
    ));
  };
}), nR = (t, n, e, r, o) => n((i) => Ve("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = vt(ri)("space after 'inside'"), l = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((d) => c(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const $ = vt(te)("node identifier after 'inside'"), h = l._3 && !_._3 ? b(_._1, _._2, !0) : _;
        return n((m) => $(
          h,
          n,
          e,
          r,
          (y, v) => n((w) => {
            const C = h._3 && !y._3 ? b(y._1, y._2, !0) : y;
            return n((J) => Be(
              C,
              n,
              e,
              r,
              (k, E) => n((L) => {
                const I = C._3 && !k._3 ? b(k._1, k._2, !0) : k;
                return n((H) => Qg(S$)(
                  I,
                  n,
                  e,
                  r,
                  (G, O) => n((ut) => {
                    const ot = I._3 && !G._3 ? b(G._1, G._2, !0) : G;
                    return n((Z) => Be(
                      ot,
                      n,
                      e,
                      r,
                      (U, P) => n((A) => o(ot._3 && !U._3 ? b(U._1, U._2, !0) : U, { node: v, doc: O }))
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
)), S$ = (t, n, e, r, o) => n((i) => L4(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? b(s._1, s._2, !0) : s;
    return n((l) => {
      const d = (p, $) => n((h) => {
        const m = ce(tR(u)), y = c._3 && !p._3 ? b(p._1, p._2, !0) : p;
        return n((v) => m(
          y,
          n,
          e,
          r,
          (w, C) => n((J) => {
            const k = Xt(_n.foldr, C);
            return o(
              y._3 && !w._3 ? b(w._1, w._2, !0) : w,
              {
                seed: (() => {
                  if ($.tag === "Nothing")
                    return 0;
                  if ($.tag === "Just")
                    return $._1;
                  f();
                })(),
                mode: u,
                frames: Z4(u)(k),
                interiors: Tt((E) => {
                  if (E.tag === "TopInside")
                    return T("Just", E._1);
                  if (E.tag === "TopFrame" || E.tag === "TopStatement")
                    return x;
                  f();
                })(k)
              }
            );
          })
        ));
      }), _ = c._1, g = c._2;
      return n((p) => n(($) => C4(
        b(_, g, !1),
        n,
        e,
        (h, m) => {
          const y = h._3;
          return n((v) => y ? r(h, m) : d(c, x));
        },
        (h, m) => n((y) => d(h, T("Just", m)))
      )));
    });
  })
)), eR = /* @__PURE__ */ (() => {
  const t = vt((n, e, r, o, i) => e((s) => e((u) => Be(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((d) => {
      const _ = n._3 && !a._3 ? b(a._1, a._2, !0) : a;
      return Ls(
        _,
        e,
        r,
        o,
        (g, p) => e(($) => i(_._3 && !g._3 ? b(g._1, g._2, !0) : g, p))
      );
    }))
  ))))("'scene', 'still', 'title', 'step', 'inside', a statement, or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((a) => e((c) => Be(
    n,
    e,
    r,
    o,
    (l, d) => e((_) => e((g) => {
      const p = n._3 && !l._3 ? b(l._1, l._2, !0) : l;
      return S$(
        p,
        e,
        r,
        o,
        ($, h) => e((m) => {
          const y = p._3 && !$._3 ? b($._1, $._2, !0) : $;
          return e((v) => e((w) => {
            const C = n._3 && !y._3 ? b(y._1, y._2, !0) : y;
            return t(
              C,
              e,
              r,
              o,
              (J, k) => e((E) => i(C._3 && !J._3 ? b(J._1, J._2, !0) : J, h))
            );
          }));
        })
      );
    }))
  )))));
})(), rR = (t) => {
  const n = j2(t)(eR);
  if (n.tag === "Left")
    return Pt("Left", { msg: a4(n._1._1), line: n._1._2.line, column: n._1._2.column, endLine: n._1._2.line, endColumn: n._1._2.column + 1 | 0 });
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, qg = (t) => {
  const n = rR(t);
  if (n.tag === "Left")
    return Pt("Left", n._1.msg);
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, oR = () => ({ tag: "ParFrag" }), E$ = (t) => t, iR = /* @__PURE__ */ E$("Sync"), sR = /* @__PURE__ */ E$("SelfMsg"), uR = /* @__PURE__ */ oR(), oi = /* @__PURE__ */ K2(Xe), Oe = /* @__PURE__ */ Oi(Xe), Rr = oi.state((t) => S(t, t)), ti = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, pd = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $a = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ni = /* @__PURE__ */ qi(Xe), aR = (t) => (n) => N((e) => (r) => Oi(Xe).bind(e)((o) => t(o)(r)))(qi(Xe).pure(n)), il = /* @__PURE__ */ ro(ni)(qt), P$ = (t) => (n) => oi.state((e) => S(
  void 0,
  {
    ...e,
    lifelines: gh(F)((r) => T("Just", { ...r, label: Ts(n) }))(t)(e.lifelines),
    labelTemplates: rt(F)(t)(n)(e.labelTemplates)
  }
)), Ju = (t) => oi.state((n) => S(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: T("Just", t) };
    f();
  })()
)), cR = (t) => (n) => (e) => Oe.bind(Rr)((r) => {
  const o = ti(t)(r.labelTemplates);
  if (o.tag === "Nothing")
    return Ju("node " + t + " label has no placeholder `" + n + "`");
  if (o.tag === "Just") {
    const i = o$(n)(e)(o._1);
    if (i.tag === "Left")
      return Ju("node " + t + " " + i._1);
    if (i.tag === "Right")
      return P$(t)(i._1);
  }
  f();
}), fR = (t) => (n) => {
  const e = cc(n);
  if (e.tag === "Left")
    return Ju("invalid label for node " + t + ": " + e._1);
  if (e.tag === "Right")
    return P$(t)(e._1);
  f();
}, lR = (t) => (n) => (e) => {
  const r = ti(e)(t.lifelines);
  return ti(n)(t.lifelines).tag === "Nothing" ? r.tag === "Nothing" ? n + ", " + e : n : r.tag === "Nothing" ? e : "";
}, gR = {
  lifelines: z,
  labelTemplates: z,
  lifelineOrder: [],
  messages: [],
  fragments: [],
  frameEndRows: [],
  row: 0,
  error: x
}, _R = (t) => (n) => (e) => Oe.bind(Rr)((r) => {
  const o = ti(t)(r.lifelines), i = ti(n)(r.lifelines);
  if (o.tag === "Just" && i.tag === "Just") {
    const s = {
      ...r,
      messages: [
        { fromCol: o._1.column, toCol: i._1.column, labels: e, row: r.row, kind: t === n ? sR : iR },
        ...r.messages
      ],
      row: r.row + 1 | 0
    };
    return oi.state((u) => S(void 0, s));
  }
  return Ju("token references unknown node: " + lR(r)(t)(n));
}), dR = (t) => oi.state((n) => S(
  void 0,
  { ...n, lifelines: gh(F)((e) => T("Just", { ...e, destroyedAt: T("Just", n.row) }))(t)(n.lifelines) }
)), hR = (t) => (n) => {
  const e = n.lifelineOrder.length, r = Rt((o) => x, (o) => (i) => T("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return { fromCol: 0, toCol: $a(0)(n.lifelineOrder.length - 1 | 0) };
  if (r.tag === "Just")
    return N((o) => (i) => ({ fromCol: pd(o.fromCol)(pd(i.fromCol)(i.toCol)), toCol: $a(o.toCol)($a(i.fromCol)(i.toCol)) }))({ fromCol: e, toCol: 0 })(t);
  f();
}, pR = (t) => ({
  lifelines: Tt((n) => ti(n)(t.lifelines))(t.lifelineOrder),
  messages: un(t.messages),
  fragments: un(t.fragments),
  frameEndRows: t.frameEndRows,
  totalRows: t.row
}), mR = (t) => (n) => Oe.bind(Rr)((e) => {
  const r = ti(t)(e.lifelines);
  if (r.tag === "Just")
    return ni.pure();
  if (r.tag === "Nothing") {
    const o = {
      ...e,
      lifelines: rt(F)(t)({
        id: t,
        label: Ts(n),
        column: e.lifelineOrder.length,
        createdAt: e.row,
        destroyedAt: x
      })(e.lifelines),
      labelTemplates: rt(F)(t)(n)(e.labelTemplates),
      lifelineOrder: Lt(e.lifelineOrder)(t),
      row: e.row > 0 || e.messages.length !== 0 ? e.row + 1 | 0 : e.row
    };
    return oi.state((i) => S(void 0, o));
  }
  f();
}), $R = (t) => (n) => Oe.bind(Rr)((e) => {
  const r = ti(t)(e.lifelines);
  if (r.tag === "Just")
    return ni.pure();
  if (r.tag === "Nothing") {
    const o = cc(n);
    if (o.tag === "Left")
      return Ju("invalid label for node " + t + ": " + o._1);
    if (o.tag === "Right")
      return mR(t)(o._1);
  }
  f();
}), yR = (t) => {
  if (t.tag === "AddNode")
    return $R(t._1.id)(t._1.label);
  if (t.tag === "DelNode")
    return dR(t._1.id);
  if (t.tag === "ModNode") {
    if (t._1.label.tag === "Just")
      return fR(t._1.id)(t._1.label._1);
    if (t._1.label.tag === "Nothing")
      return ni.pure();
    f();
  }
  return t.tag === "ModNodeSlot" ? cR(t._1.id)(t._1.slot)(t._1.value) : t.tag === "Token" ? _R(t._1.from)(t._1.to)(t._1.labels) : ni.pure();
}, xR = (t) => Oe.bind(Rr)((n) => {
  const e = n.row;
  return Oe.bind(aR((r) => (o) => Oe.bind(Rr)((i) => {
    const s = r.childMessages.length === 0 ? r.dividers : [i.row, ...r.dividers], u = i.messages;
    return Oe.bind(lc(o))(() => Oe.bind(Rr)((a) => ni.pure({
      dividers: s,
      childMessages: [
        ...r.childMessages,
        ...(() => {
          const c = a.messages.length - u.length | 0;
          return c < 1 ? [] : Ft(0, c, a.messages);
        })()
      ]
    })));
  }))({ dividers: [], childMessages: [] })(t))((r) => Oe.bind(Rr)((o) => {
    const i = hR(r.childMessages)(o), s = {
      kind: uR,
      label: "par",
      fromRow: e,
      toRow: $a(o.row)(e + 1 | 0),
      fromCol: i.fromCol,
      toCol: i.toCol,
      regionDividers: un(r.dividers)
    }, u = oi.state((a) => S(void 0, { ...a, fragments: [s, ...a.fragments] }));
    return r.childMessages.length >= 2 ? u : ni.pure();
  }));
}), lc = (t) => {
  if (t.tag === "Leaf")
    return yR(t._1.op);
  if (t.tag === "Seq" || t.tag === "GroupSeq")
    return il(lc)(t._1);
  if (t.tag === "Par")
    return xR(t._1);
  f();
}, vR = (t) => {
  const n = Oe.bind(il((e) => Oe.bind(Rr)((r) => Oe.bind(lc(e.ops))(() => Oe.bind(Rr)((o) => {
    const i = oi.state((s) => S(void 0, { ...s, frameEndRows: Lt(s.frameEndRows)(s.row - 1 | 0) }));
    return (o.messages.length - r.messages.length | 0) > 0 ? i : ni.pure();
  }))))(t.frames))(() => Rr)(gR)._1;
  if (n.error.tag === "Just")
    return Pt("Left", n.error._1);
  if (n.error.tag === "Nothing")
    return Pt("Right", pR(n));
  f();
}, TR = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, wR = { padding: 24, headerHeight: 36, headerWidth: 120, columnSpacing: 160, rowHeight: 36, topGap: 24, bottomGap: 24 }, NR = (t) => {
  const n = 84 + tt(TR(1)(t.totalRows)) * 36, e = Qt((r) => (o) => ({ lifeline: o, x: 84 + tt(r) * 160 }))(t.lifelines);
  return {
    metrics: wR,
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
}, CR = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, A$ = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, R$ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = ct.compare(t)(s._3);
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
}, F$ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, JR = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, bR = /* @__PURE__ */ N((t) => (n) => rt(ct)(n)()(t))(z), kR = { r: 255, g: 255, b: 255, a: 255 }, _f = { r: 26, g: 26, b: 26, a: 255 }, LR = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, SR = { r: 232, g: 232, b: 232, a: 255 }, gc = (t) => (n) => (e) => (r) => (o) => [
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
  ...Ai
], md = (t) => (n) => (e) => ({ ...e, stack: Lt(e.stack)(t), openedAt: rt(ct)(t)(n)(e.openedAt) }), df = (t) => (n) => {
  const e = n.stack.length - 1 | 0;
  if (e >= 0 && e < n.stack.length) {
    const r = CR(n.stack[e])(n.openedAt), o = (() => {
      if (r.tag === "Nothing")
        return t;
      if (r.tag === "Just")
        return r._1;
      f();
    })();
    return {
      ...n,
      stack: n.stack.length === 0 ? [] : Ft(0, n.stack.length - 1 | 0, n.stack),
      openedAt: hs(ct)(n.stack[e])(n.openedAt),
      spans: Lt(n.spans)({ col: n.stack[e], fromRow: o, toRow: A$(o)(t) })
    };
  }
  return n;
}, $d = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, l = i, d = l.stack.length - 1 | 0;
    if (d >= 0 && d < l.stack.length) {
      if (a(l.stack[d])) {
        s = !1, u = l;
        continue;
      }
      r = a, o = c, i = df(c)(l);
      continue;
    }
    s = !1, u = l;
  }
  return u;
}, G$ = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = u.stack.length - 1 | 0;
    if (a >= 0 && a < u.stack.length) {
      e = s, r = df(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, ER = (t) => (n) => {
  const e = Se(qo)(n.fromCol)(t.stack) ? $d((() => {
    const r = n.fromCol;
    return (o) => r === o;
  })())(n.row - 1 | 0)(t) : md(n.fromCol)(n.row)(G$(n.row - 1 | 0)(t));
  if (Se(qo)(n.toCol)(e.stack)) {
    const r = $d((() => {
      const o = n.toCol;
      return (i) => o === i;
    })())(n.row - 1 | 0)(df(n.row)(e));
    return { ...r, returnRows: rt(ct)(n.row)()(r.returnRows) };
  }
  return md(n.toCol)(n.row)(e);
}, PR = (t) => (n) => (e) => {
  const r = ER(n)(e);
  return R$(e.row)(t) ? G$(e.row)(r) : r;
}, ya = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: Au, lineCap: vr }, I$ = { r: 26, g: 26, b: 26, a: 255 }, AR = { color: { r: 130, g: 130, b: 130, a: 255 }, width: 1, lineJoin: Au, lineCap: Ye }, yd = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: Au, lineCap: Ye }, RR = { color: { r: 244, g: 244, b: 244, a: 255 }, flat: !0 }, xd = (t) => (n) => (e) => sn((r) => r.col === n && r.fromRow <= e && e <= r.toRow, t), vd = { color: { r: 90, g: 90, b: 90, a: 255 }, width: 1, lineJoin: Au, lineCap: Ye }, FR = { stack: [], openedAt: z, spans: [], returnRows: z }, GR = { color: { r: 150, g: 150, b: 150, a: 255 }, width: 1, lineJoin: Au, lineCap: Ye }, IR = (t) => (n) => (e) => (r) => (o) => {
  const i = n.bodyTop + (tt(o) + 0.5) * n.metrics.rowHeight - n.metrics.rowHeight / 2;
  return t.strokePath([1, e, i, 2, r, i])(GR);
}, BR = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ws(n.Applicative0())(qt);
  return (o) => (i) => {
    const s = o.bodyTop + (tt(i.fromRow) + 0.5) * o.metrics.rowHeight - o.metrics.rowHeight / 2 - 6, u = i.fromCol >= 0 && i.fromCol < o.columns.length ? o.columns[i.fromCol].x - 16 : o.metrics.padding - 16, a = [1, u, s, 2, u + 38, s, 2, u + 32, s + 14, 2, u, s + 14, ...Ai], c = i.toCol >= 0 && i.toCol < o.columns.length ? o.columns[i.toCol].x + 16 : o.metrics.padding + 16, l = o.bodyTop + (tt(A$(i.toRow)(i.fromRow + 1 | 0) - 1 | 0) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight / 2 + 6;
    return e.bind(t.strokePath([1, u, s, 2, c, s, 2, c, l, 2, u, l, ...Ai])(vd))(() => e.bind(t.fillStrokePath(a)(LR)(vd))(() => e.bind(t.drawText({
      x: u + 6,
      y: s + 7,
      content: "par",
      font: { family: "Inter", size: 11, weight: 700 },
      color: _f,
      align: Yo,
      baseline: ze
    }))(() => r(i.regionDividers)(IR(t)(o)(u)(c)))));
  };
}, B$ = (t) => (n) => t >= n ? [] : [S(t, F$(n)(t + 6)), ...B$(t + 10)(n)], DR = (t) => (n) => {
  if (n <= t)
    return [];
  const e = (r) => r >= n ? [] : [S(r, F$(n)(r + 6)), ...e(r + 10)];
  return e(t);
}, zR = (t) => {
  const n = ws(t.Monad0().Applicative0())(qt);
  return (e) => (r) => n(DR(e.headerTop + e.metrics.headerHeight + tt(r.lifeline.createdAt) * e.metrics.rowHeight + 4)((() => {
    if (r.lifeline.destroyedAt.tag === "Just")
      return e.bodyTop + (tt(r.lifeline.destroyedAt._1) + 0.5) * e.metrics.rowHeight;
    if (r.lifeline.destroyedAt.tag === "Nothing")
      return e.bodyBottom;
    f();
  })()))((o) => t.strokePath([1, r.x, o._1, 2, r.x, o._2])(AR));
}, D$ = (t) => (n) => t <= n ? [] : [S(t, JR(n)(t - 6)), ...D$(t - 6 - 4)(n)], HR = (t) => (n) => t === n ? [] : t < n ? B$(t)(n) : D$(t)(n), WR = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.headerTop + tt(r.lifeline.createdAt) * e.metrics.rowHeight, i = e.metrics.headerWidth / 2, s = o + e.metrics.headerHeight, u = gc(r.x - i)(o)(r.x + i)(s)(6);
    return n.bind(t.fillStrokePath(gc(r.x - i)(o + 5)(r.x + i)(s + 5)(6))({ color: SR, flat: !0 })(yd))(() => n.bind(t.fillStrokePath(u)(RR)(yd))(() => t.drawText({
      x: r.x,
      y: o + e.metrics.headerHeight / 2,
      content: r.lifeline.label,
      font: { family: "Inter", size: 14, weight: 600 },
      color: _f,
      align: Eo,
      baseline: ze
    })));
  };
}, QR = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = u.stack.length - 1 | 0;
    if (a >= 0 && a < u.stack.length) {
      e = s, r = df(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, OR = (t) => QR((() => {
  const n = t.diagram.messages.length - 1 | 0;
  return n >= 0 && n < t.diagram.messages.length ? t.diagram.messages[n].row : 0;
})())(N(PR(bR(t.diagram.frameEndRows)))(FR)(_t(
  (n) => n.kind === "Sync" || n.kind !== "SelfMsg",
  t.diagram.messages
))), qR = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.bodyTop + (tt(r.row) + 0.5) * e.metrics.rowHeight, i = r.fromCol >= 0 && r.fromCol < e.columns.length ? e.columns[r.fromCol].x : e.metrics.padding, s = o - e.metrics.rowHeight * 0.3, u = i + 36, a = o + e.metrics.rowHeight * 0.3, c = i + 10, l = [1, i, a, 2, c, a - 5, 2, c, a + 5, ...Ai];
    return n.bind(t.strokePath([1, i, s, 2, u, s, 2, u, a, 2, i, a])(ya))(() => n.bind(t.fillPath(l)({
      color: I$,
      flat: !0
    }))(() => t.drawText({
      x: i + 42,
      y: o,
      content: dr(" ")(B(ko)(r.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: _f,
      align: Yo,
      baseline: ze
    })));
  };
}, XR = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ws(n.Applicative0())(qt);
  return (o) => (i) => (s) => (u) => {
    const a = s ? o.bodyTop + (tt(u.row) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight * 0.5 : o.bodyTop + (tt(u.row) + 0.5) * o.metrics.rowHeight, c = u.toCol >= u.fromCol ? 1 : -1, l = (u.fromCol >= 0 && u.fromCol < o.columns.length ? o.columns[u.fromCol].x : o.metrics.padding) + (xd(i)(u.fromCol)(u.row) ? c * 6 : c * 0), d = (u.toCol >= 0 && u.toCol < o.columns.length ? o.columns[u.toCol].x : o.metrics.padding) - (xd(i)(u.toCol)(u.row) ? c * 6 : c * 0), _ = d - c * 10, g = s ? t.strokePath([1, _, a - 5, 2, d, a, 2, _, a + 5])(ya) : t.fillPath([1, d, a, 2, _, a - 5, 2, _, a + 5, ...Ai])({ color: I$, flat: !0 });
    return e.bind(s ? r(HR(l)(d))((p) => t.strokePath([1, p._1, a, 2, p._2, a])(ya)) : t.strokePath([1, l, a, 2, d, a])(ya))(() => e.bind(g)(() => t.drawText({
      x: (l + d) / 2,
      y: a - 6,
      content: dr(" ")(B(ko)(u.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: _f,
      align: Eo,
      baseline: Lk
    })));
  };
}, MR = (t) => {
  const n = qR(t), e = XR(t);
  return (r) => (o) => (i) => (s) => {
    if (s.kind === "SelfMsg")
      return n(r)(s);
    if (s.kind === "Sync")
      return e(r)(o)(R$(s.row)(i))(s);
    f();
  };
}, Td = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.25, lineJoin: ue, lineCap: Ye }, UR = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, YR = { color: { r: 252, g: 252, b: 252, a: 255 }, flat: !0 }, KR = (t) => (n) => (e) => {
  const r = e.col >= 0 && e.col < n.columns.length ? n.columns[e.col].x : n.metrics.padding, o = n.bodyTop + (tt(e.fromRow) + 0.5) * n.metrics.rowHeight, i = n.bodyTop + (tt(e.toRow) + 0.5) * n.metrics.rowHeight + n.metrics.rowHeight * 0.5, s = gc(r - 6)(o)(r + 6)(i)(3);
  return t.Monad0().Bind1().bind(t.fillStrokePath(gc(r - 6)(o + 5)(r + 6)(i + 5)(3))(UR)(Td))(() => t.fillStrokePath(s)(YR)(Td));
}, z$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ws(n.Applicative0())(qt), o = WR(t), i = zR(t), s = BR(t), u = MR(t);
  return (a) => {
    const c = OR(a);
    return e.bind(t.setViewport({ vx: 0, vy: 0, vw: a.width, vh: a.height }))(() => e.bind(t.clearBackground(kR))(() => e.bind(r(a.columns)(o(a)))(() => e.bind(r(a.columns)(i(a)))(() => e.bind(r(c.spans)(KR(t)(a)))(() => e.bind(r(a.diagram.fragments)(s(a)))(() => r(a.diagram.messages)(u(a)(c.spans)(c.returnRows))))))));
  };
}, VR = /* @__PURE__ */ z$(Xk);
function jR(t, n, e, r) {
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
function qe(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
function e0(t) {
  return function() {
    return function(n) {
      return t(n)();
    };
  };
}
function r0(t) {
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
function o0(t) {
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
const _c = function() {
  return window;
};
function ZR(t) {
  return function() {
    return t.document;
  };
}
function sl(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
function t6(t) {
  return function(n) {
    return function() {
      return n.cancelAnimationFrame(t);
    };
  };
}
const dc = (t) => t, hc = (t) => () => {
  const n = t.getBoundingClientRect?.(), e = n?.width || t.clientWidth || 0, r = n?.height || t.clientHeight || 0;
  return { width: e, height: r };
}, H$ = (t) => (n) => () => {
  let e = 0;
  const r = () => {
    e || (e = requestAnimationFrame(() => {
      e = 0, n();
    }));
  }, o = typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
  return o?.observe(t), window.addEventListener("resize", r), () => {
    e && cancelAnimationFrame(e), o?.disconnect(), window.removeEventListener("resize", r);
  };
}, W$ = () => window.devicePixelRatio || 1, Q$ = () => performance.now() / 1e3, n6 = (t) => (n) => (e) => (r) => (o) => () => {
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
}, O$ = (t, n) => {
  n.innerHTML = t;
}, pc = (t, n, e) => {
  t.style.setProperty(n, e);
}, xa = (t) => (n) => t === n, mc = /* @__PURE__ */ new WeakMap(), ul = /* @__PURE__ */ new WeakSet(), e6 = `#version 300 es
precision highp float;
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`, r6 = `#version 300 es
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
  float frame = floor(uTime * 18.0);
  float grainValue = grain(gl_FragCoord.xy, frame) - 0.5;
  color.rgb += grainValue * (0.026 + 0.014 * strength) * film;
  float flicker = sin(uTime * 21.7) * 0.004 + sin(uTime * 7.1) * 0.003;
  color.rgb *= 1.0 + flicker * film;
  fragColor = color;
}`, wd = (t, n, e) => {
  const r = t.createShader(n);
  if (!r) throw new Error("Unable to allocate zoom shader");
  if (t.shaderSource(r, e), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(r) || "Zoom shader compilation failed";
    throw t.deleteShader(r), new Error(o);
  }
  return r;
}, o6 = (t, n, e) => {
  const r = wd(t, t.VERTEX_SHADER, n), o = wd(t, t.FRAGMENT_SHADER, e), i = t.createProgram();
  if (!i) throw new Error("Unable to allocate zoom program");
  if (t.attachShader(i, r), t.attachShader(i, o), t.linkProgram(i), t.deleteShader(r), t.deleteShader(o), !t.getProgramParameter(i, t.LINK_STATUS)) {
    const s = t.getProgramInfoLog(i) || "Zoom shader link failed";
    throw t.deleteProgram(i), new Error(s);
  }
  return i;
}, i6 = (t) => {
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
    const s = o6(e, e6, r6), u = e.createTexture();
    if (!u) throw new Error("Unable to allocate zoom texture");
    return e.bindTexture(e.TEXTURE_2D, u), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0), e.useProgram(s), e.uniform1i(e.getUniformLocation(s, "uScene"), 0), {
      changedPosition: i,
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
      texture: u,
      zoomFilmAmountLocation: e.getUniformLocation(s, "uFilmAmount"),
      zoomStrengthLocation: e.getUniformLocation(s, "uStrength"),
      zoomTimeLocation: e.getUniformLocation(s, "uTime")
    };
  } catch {
    return n.remove(), i && r.style.position === "relative" && (r.style.position = o), null;
  }
}, s6 = (t, n) => {
  n && (n.overlay.style.display !== "none" && (n.overlay.style.display = "none"), t.style.visibility !== n.restoreVisibility && (t.style.visibility = n.restoreVisibility)), t.getAttribute("data-mg-gpu-pass") !== "idle" && t.setAttribute("data-mg-gpu-pass", "idle");
}, Nd = (t, n) => {
  let e = mc.get(t);
  if (Number(n) < 8e-3) {
    s6(t, e);
    return;
  }
  if (ul.has(t)) {
    t.setAttribute("data-mg-gpu-pass", "unavailable");
    return;
  }
  if (!e) {
    try {
      e = i6(t);
    } catch {
      e = null;
    }
    if (!e) {
      ul.add(t), t.setAttribute("data-mg-gpu-pass", "unavailable");
      return;
    }
    mc.set(t, e);
  }
  const { gl: r, overlay: o, program: i, texture: s } = e, u = Math.max(1, t.width), a = Math.max(1, t.height);
  o.width !== u && (o.width = u), o.height !== a && (o.height = a);
  const c = t.offsetLeft, l = t.offsetTop, d = t.clientWidth, _ = t.clientHeight;
  e.overlayLeft !== c && (o.style.left = `${c}px`, e.overlayLeft = c), e.overlayTop !== l && (o.style.top = `${l}px`, e.overlayTop = l), e.overlayWidth !== d && (o.style.width = `${d}px`, e.overlayWidth = d), e.overlayHeight !== _ && (o.style.height = `${_}px`, e.overlayHeight = _), o.style.display !== "block" && (o.style.display = "block"), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, s), e.sceneTextureWidth !== u || e.sceneTextureHeight !== a ? (r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t), e.sceneTextureWidth = u, e.sceneTextureHeight = a) : r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, t), r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(0, 0, u, a), r.useProgram(i);
  const g = Math.max(0, Math.min(1, Number(n) || 0));
  r.uniform1f(e.zoomFilmAmountLocation, Math.sqrt(g)), r.uniform1f(e.zoomTimeLocation, performance.now() / 1e3), r.uniform1f(e.zoomStrengthLocation, g), r.drawArrays(r.TRIANGLES, 0, 3), t.getAttribute("data-mg-gpu-pass") !== "active" && t.setAttribute("data-mg-gpu-pass", "active"), t.style.visibility !== "hidden" && (t.style.visibility = "hidden");
}, u6 = (t) => {
  const n = mc.get(t);
  n && (n.gl.deleteTexture(n.texture), n.gl.deleteProgram(n.program), n.overlay.remove(), t.style.visibility = n.restoreVisibility, n.changedPosition && n.parent.style.position === "relative" && (n.parent.style.position = n.restorePosition)), mc.delete(t), ul.delete(t), t.removeAttribute("data-mg-gpu-pass");
}, Cd = (t, n) => ({ tag: t, _1: n }), q$ = (t) => t, X$ = (t, n, e) => ({ tag: t, _1: n, _2: e }), pi = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, a6 = /* @__PURE__ */ z$(Tg), va = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, c6 = /* @__PURE__ */ X$("AutoSize"), Jd = /* @__PURE__ */ q$("CanvasRenderer"), f6 = /* @__PURE__ */ q$("SvgRenderer"), l6 = (t) => (n) => {
  const e = t - n * tt(mn(ar(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, ji = (t) => N((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), bd = (t) => (n) => {
  const e = bn(t, x, Ht);
  if (e.tag === "Just") {
    const r = bn(e._1.stopAt, x, Ht);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return n;
  f();
}, g6 = (t) => (n) => {
  const e = (o) => r(o), r = (o) => ({ ...o, state: { ...o.state, animationTime: t }, minis: B(e)(o.minis) });
  return { ...n, levels: B(r)(n.levels) };
}, M$ = (t) => (n) => ({ ...n, state: { ...n.state, camera: t }, minis: B((e) => M$(t)(e))(n.minis) }), _6 = (t) => (n) => (e) => {
  const r = fr(e.rootLayout)(e.camera), o = qe("data-mg-too-small")("0")(t);
  return () => (o(), qe("data-mg-camera-vw")(mo(r.w))(t)(), qe("data-mg-camera-vh")(mo(r.h))(t)(), qe("data-mg-camera-zoom")(mo(e.camera.zoom))(t)(), qe("data-mg-viewport-css-width")(mo(n.w))(t)(), qe("data-mg-viewport-css-height")(mo(n.h))(t)());
}, d6 = (t) => {
  const n = vR(t);
  if (n.tag === "Left")
    return Pt("Left", n._1);
  if (n.tag === "Right")
    return Pt("Right", NR(n._1));
  f();
}, h6 = (t) => (n) => (e) => {
  if (n.tag === "FixedSize")
    return () => ({ w: n._1, h: n._2 });
  if (n.tag === "AutoSize") {
    const r = hc(t);
    return () => {
      const o = r(), i = o.width <= 0 ? e.width : o.width;
      return { w: i, h: o.height <= 0 ? i * e.height / pi(1)(e.width) : o.height };
    };
  }
  f();
}, p6 = (t) => sn(
  (n) => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, xt("Cons", r._4, e(r._6, o)));
      f();
    };
    return sn(
      (r) => {
        const o = (i, s) => {
          if (i.tag === "Leaf")
            return s;
          if (i.tag === "Node")
            return o(i._5, xt("Cons", i._4, o(i._6, s)));
          f();
        };
        return sn(
          (i) => sn((s) => s.style === "RunHighlight" || s.style === "RunCodeHighlight", Pr(i)),
          Xt(_n.foldr, o(r.labels, R))
        );
      },
      Xt(_n.foldr, e(n.keyframes, R))
    );
  },
  t.segments
), m6 = (t) => (n) => (e) => {
  const r = rE(fE(VR(e))), o = qe("viewBox")(r.viewBox)(t);
  return () => (o(), qe("preserveAspectRatio")("xMidYMid meet")(t)(), n.tag === "FixedSize" ? (qe("width")(en(mn(Ge(n._1))))(t)(), qe("height")(en(mn(Ge(n._2))))(t)()) : n.tag === "AutoSize" || f(), O$(r.body, t));
}, $6 = (t) => (n) => (e) => {
  const r = dc(t), o = h6(t)(n)(e);
  return () => {
    const i = o(), s = W$(), u = i.w * s, a = i.h * s, c = dh(r)(), l = hh(r)(), d = Sc(r)(u);
    c !== u && d();
    const _ = Ec(r)(a);
    l !== a && _(), n.tag === "FixedSize" ? (pc(t, "width", en(mn(Ge(i.w))) + "px"), pc(t, "height", en(mn(Ge(i.h))) + "px")) : n.tag === "AutoSize" || f();
    const g = ku(r)();
    Qr(g)(), Na(g)({ scaleX: s, scaleY: s })();
    const p = Rm(g)({ width: i.w, height: i.h })();
    return a6(e)(p)(), Or(g)();
  };
}, y6 = (t) => (n) => (e) => (r) => {
  if (n === "CanvasRenderer")
    return $6(t)(e)(r);
  if (n === "SvgRenderer")
    return m6(t)(e)(r);
  f();
}, x6 = (t) => (n) => (e) => (r) => () => {
  let o = !1, i = () => {
  }, s = [];
  const u = () => {
    const l = o, d = y6(t)(n)(e)(r);
    if (!l)
      return d();
  }, a = { time: 0, keyframe: "sequence", playing: !1 };
  return u(), i = H$(t)(() => {
    u();
    const l = s;
    return ji((d) => d(a))(l)();
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
    playToCue: (l) => (d) => () => {
    },
    playToStep: (l) => (d) => () => {
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
      const _ = Ks((g) => !xa(g)(l));
      return () => {
        s = _(s);
      };
    },
    subscribeCue: (l) => () => () => {
    },
    subscribeComplete: (l) => () => () => {
    },
    destroy: () => (o = !0, i())
  };
}, v6 = (t) => (n) => {
  const e = bn(t, x, Ht);
  if (e.tag === "Just") {
    const r = bn(e._1.loop, x, Ht);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return n;
  f();
}, i0 = (t) => (n) => {
  const e = Vt((r) => r.startT <= n && n < r.endT)(t.spans);
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
}, T6 = (t) => (n) => (e) => {
  const r = fm(e);
  return () => {
    const o = r(), i = lm(e)(), s = Fg(Dc)(Rg)(e)(Xc(o)(i)(e));
    if (s.tag === "Left")
      return Pt("Left", "precompute failed");
    if (s.tag === "Right")
      return Pt("Right", { schedule: s._1 });
    f();
  };
}, w6 = (t) => (n) => (() => {
  const e = bn(t, x, Ht);
  if (e.tag === "Just")
    return { ...e._1, direction: n < 0 ? "backward" : "forward" };
  if (e.tag === "Nothing")
    return {
      direction: n < 0 ? "backward" : "forward",
      speed: Zi,
      duration: Zi,
      loop: Zi,
      stopAt: Zi
    };
  f();
})(), kd = (t) => (n) => {
  const e = bn(t, x, Ht);
  if (e.tag === "Just") {
    const r = bn(e._1.direction, x, Ht);
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
}, N6 = (t) => (n) => {
  const e = _t((o) => o.time <= n + 1e-4, t), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r].index : -1;
}, C6 = (t) => (n) => {
  if (n.tag === "FixedSize") {
    const e = n._1 <= 0 || n._2 <= 0 ? x : T("Just", n._1 / n._2);
    return () => e;
  }
  if (n.tag === "AutoSize") {
    const e = hc(t);
    return () => {
      const r = e();
      return r.width <= 0 || r.height <= 0 ? x : T("Just", r.width / r.height);
    };
  }
  f();
}, Ds = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => (d) => (_) => () => {
  const g = Q$(), p = d.value, $ = l.value, h = p === 0 ? 0 : g - p, m = $ + h;
  d.value = g, l.value = m;
  const y = (() => {
    if (e.tag === "FixedSize")
      return { w: e._1, h: e._2 };
    if (e.tag === "AutoSize") {
      const I = hc(t)();
      return { w: I.width <= 0 ? 200 : I.width, h: I.height <= 0 ? 180 : I.height };
    }
    f();
  })();
  if (y.w < 200 || y.h < 180) {
    if (n6(t)(y.w)(y.h)(200)(180)(), n === "CanvasRenderer")
      return Nd(dc(t), 0);
    if (n === "SvgRenderer")
      return;
    f();
  }
  const v = u.value, w = (() => {
    if (v.tag === "Just" && v._1.w === y.w && v._1.h === y.h)
      return v._1.schedule;
    const I = Q2({ widthPx: y.w, heightPx: y.h })(s);
    return u.value = T("Just", { w: y.w, h: y.h, schedule: I }), I;
  })(), C = g6(m)(pp(w)(va(_)(w.totalDuration))), J = i ? C : { ...C, levels: B((I) => ({ ...I, state: { ...I.state, frameTitle: "" } }))(C.levels) }, k = c.value, E = (() => {
    if (k.tag === "Nothing")
      return J.camera;
    if (k.tag === "Just")
      return Gh(s.cameraConfig.cameraDecay)(h)(k._1)(J.camera);
    f();
  })();
  c.value = T("Just", E);
  const L = { ...J, camera: E, levels: B(M$(E))(J.levels) };
  if (_6(t)(y)(L)(), n === "CanvasRenderer") {
    const I = dc(t), H = A2({ width: 0, height: 0 })(L), G = (() => {
      if (e.tag === "FixedSize")
        return { w: e._1, h: e._2 };
      if (e.tag === "AutoSize") {
        const Y = hc(t)();
        return {
          w: Y.width,
          h: Y.height <= 0 ? H.vw <= 0 ? Y.width : Y.width * H.vh / H.vw : Y.height
        };
      }
      f();
    })(), O = W$(), ut = G.w * O, ot = G.h * O, Z = dh(I)(), U = hh(I)(), P = Sc(I)(ut);
    Z !== ut && P();
    const A = Ec(I)(ot);
    U !== ot && A(), e.tag === "FixedSize" ? (pc(t, "width", en(mn(Ge(G.w))) + "px"), pc(t, "height", en(mn(Ge(G.h))) + "px")) : e.tag === "AutoSize" || f();
    const Q = ku(I)();
    Qr(Q)(), Na(Q)({ scaleX: O, scaleY: O })();
    const D = a.value, M = US(r)(o)(Q)({ width: G.w, height: G.h })(L)(h)(D)();
    return a.value = M, Or(Q)(), Nd(I, uN(L.portalState));
  }
  if (n === "SvgRenderer") {
    const I = a.value, H = C6(t)(e)(), G = LE(H)(r)(o)(L)(h)(I);
    return a.value = G.springs, qe("viewBox")(G.parts.viewBox)(t)(), qe("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (qe("width")(en(mn(Ge(e._1))))(t)(), qe("height")(en(mn(Ge(e._2))))(t)()) : e.tag === "AutoSize" || f(), O$(G.parts.body, t);
  }
  f();
}, J6 = (t) => {
  const n = ff(t)(af)._1;
  if (n.tag === "Left")
    return Pt("Left", n._1.msg);
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, b6 = (t) => {
  const n = qg(t);
  if (n.tag === "Left")
    return Pt("Left", n._1);
  if (n.tag === "Right") {
    if (n._1.mode === "SequenceSurface") {
      const r = d6(n._1);
      if (r.tag === "Left")
        return Pt("Left", r._1);
      if (r.tag === "Right")
        return Pt("Right", Cd("LoadedSequence", r._1));
      f();
    }
    const e = J6(n._1);
    if (e.tag === "Left")
      return Pt("Left", e._1);
    if (e.tag === "Right")
      return Pt("Right", Cd("LoadedAnimation", e._1));
  }
  f();
}, Ld = (t) => (n) => (e) => (r) => {
  const o = e + 1e-4 >= n ? _t((s) => s.time > n + 1e-4 && s.time <= e + 1e-4, t) : [..._t((s) => s.time > n + 1e-4, t), ..._t((s) => s.time <= e + 1e-4, t)], i = e <= n + 1e-4 ? un(_t((s) => s.time < n - 1e-4 && s.time >= e - 1e-4, t)) : [...un(_t((s) => s.time < n - 1e-4, t)), ...un(_t((s) => s.time >= e - 1e-4, t))];
  return (() => {
    const s = e - n;
    return s < 0 ? -s <= 1e-4 : s <= 1e-4;
  })() ? [] : r >= 0 ? o : i;
}, k6 = (t) => (n) => (e) => (r) => Vt((o) => sn((i) => i === o.kind, n) && (o.time > e + 1e-4 || (() => {
  const i = o.time - e;
  return (i < 0 ? -i <= 1e-4 : i <= 1e-4) && o.index > r;
})()))(t), L6 = (t) => (n) => (e) => (r) => {
  const o = _t(
    (s) => sn((u) => u === s.kind, n) && (s.time < e - 1e-4 || (() => {
      const u = s.time - e;
      return (u < 0 ? -u <= 1e-4 : u <= 1e-4) && s.index < r;
    })()),
    t
  ), i = o.length - 1 | 0;
  return i >= 0 && i < o.length ? T("Just", o[i]) : x;
}, s0 = (t) => (n) => (e) => {
  const r = bn(n, x, Ht);
  if (r.tag === "Just") {
    const o = bn(r._1.speed, x, Ht);
    if (o.tag === "Just") {
      const i = pi(1e-4)(o._1 < 0 ? -o._1 : o._1);
      return () => t.value = i;
    }
    if (o.tag === "Nothing") {
      const i = bn(r._1.duration, x, Ht);
      if (i.tag === "Just" && e.tag === "Just") {
        const s = e._1 / i._1, u = pi(1e-4)(s < 0 ? -s : s);
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
}, S6 = (t) => (n) => (e) => (r) => {
  const o = r.time - n, i = o < 0 ? -o <= 1e-4 : o <= 1e-4, s = r.time < n - 1e-4 || i && r.index < e, u = s ? -1 : 1, a = r.time > n + 1e-4 || i && r.index > e, c = bn(t, x, Ht);
  if (c.tag === "Just") {
    const l = bn(c._1.direction, x, Ht);
    if (l.tag === "Just") {
      if (l._1 === "forward")
        return i || a ? T("Just", 1) : x;
      if (l._1 === "backward" || l._1 === "reverse")
        return i || s ? T("Just", -1) : x;
    }
    return T("Just", u);
  }
  if (c.tag === "Nothing")
    return T("Just", u);
  f();
}, E6 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  const u = { value: 1 };
  let a = 1, c = !0, l = x, d = -1, _ = !0, g = !1, p = 0, $ = 0;
  const h = { value: z }, m = { value: x }, y = { value: 0 }, v = { value: 0 }, w = { value: x };
  let C = !1, J = () => {
  }, k = [], E = [], L = [];
  Ds(t)(e)(r)(o)(i)(s)(n)(w)(h)(m)(y)(v)(0)();
  const I = (q) => {
    const X = q.index;
    return () => {
      d = X;
      const W = E;
      return ji((nt) => nt(q))(W)();
    };
  }, H = (q) => () => {
    const X = k, W = _, nt = { time: q, keyframe: i0(n)(q), playing: W };
    return ji((et) => et(nt))(X)();
  }, G = () => (_ = !1, l = x, H(p)()), O = (q) => () => (p = q, Ds(t)(e)(r)(o)(i)(s)(n)(w)(h)(m)(y)(v)(q)(), H(q)()), ut = (q) => {
    const X = pi(0)(va(n.totalDuration)(q));
    return () => (p = X, d = N6(n.cues)(X), $ = 0, l = x, m.value = x, Ds(t)(e)(r)(o)(i)(s)(n)(w)(h)(m)(y)(v)(X)(), H(X)());
  }, ot = (q, X, W, nt, et) => () => {
    _ = !1, l = x;
    const it = p;
    H(it)();
    const lt = { reason: q, direction: X < 0 ? "backward" : "forward", targetId: W, targetStep: nt, reached: et, time: it }, gt = L;
    return ji((pt) => pt(lt))(gt)();
  }, Z = p6(n), U = () => {
    if (!C) {
      if (g = !1, _) {
        const nt = Q$(), et = $;
        $ = nt;
        const it = u.value, lt = a, gt = c, pt = l, St = p, Gt = et === 0 ? St + 0 * it * lt : St + (nt - et) * it * lt;
        if (pt.tag === "Just") {
          const Wt = lt >= 0 ? pt._1.cue.time >= St - 1e-4 && pt._1.cue.time <= Gt + 1e-4 : pt._1.cue.time <= St + 1e-4 && pt._1.cue.time >= Gt - 1e-4, $t = Wt ? pt._1.cue.time : pi(0)(va(n.totalDuration)(Gt));
          (lt >= 0 ? $t + 1e-4 < St : $t > St + 1e-4) && (m.value = x), O($t)(), ji((Nt) => I(Nt))(Ld(n.cues)(St)($t)(lt))();
          const At = ot("target", lt, pt._1.targetId, pt._1.targetStep, !0);
          Wt && At(), Wt || P();
        } else if (pt.tag === "Nothing") {
          const Wt = lt >= 0 ? n.totalDuration : 0, $t = !gt && (lt >= 0 ? Wt >= St - 1e-4 && Wt <= Gt + 1e-4 : Wt <= St + 1e-4 && Wt >= Gt - 1e-4), At = gt ? l6(Gt)(n.totalDuration + 0.8) : pi(0)(va(n.totalDuration)(Gt));
          (lt >= 0 ? At + 1e-4 < St : At > St + 1e-4) && (m.value = x), O(At)(), ji((Ct) => I(Ct))(Ld(n.cues)(St)(At)(lt))();
          const Nt = ot("boundary", lt, "", "", !0);
          $t && Nt(), $t || P();
        } else
          f();
      }
      if (Z && !_) {
        const nt = p;
        return Ds(t)(e)(r)(o)(i)(s)(n)(w)(h)(m)(y)(v)(nt)(), P();
      }
    }
  }, P = () => {
    if (!C && !g) {
      g = !0;
      const W = _c();
      sl(U)(W)();
    }
  }, A = () => ($ = 0, _ = !0, P()), Q = () => (a = 1, c = !0, l = x, A(), H(p)()), D = (q, X) => () => {
    const W = p;
    return a = q, c = !1, l = x, s0(u)(X)(T("Just", q >= 0 ? n.totalDuration - W : W))(), A();
  }, M = (q, X) => () => {
    const W = p, nt = d, et = S6(X)(W)(nt)(q);
    if (et.tag === "Nothing")
      return D(kd(X)(1), X)();
    if (et.tag === "Just") {
      const it = q.time - W, lt = it < 0 ? -it : it;
      return a = et._1, c = !1, l = T("Just", { cue: q, direction: et._1, targetId: q.id, targetStep: q.name }), s0(u)(X)(T("Just", lt))(), lt <= 1e-4 ? (ut(q.time)(), I(q)(), ot("target", et._1, q.id, q.name, !0)()) : A();
    }
    f();
  };
  return J = H$(t)(() => {
    if (!C) {
      const X = p;
      return Ds(t)(e)(r)(o)(i)(s)(n)(w)(h)(m)(y)(v)(X)(), H(X)();
    }
  })(), A(), {
    play: Q,
    playWith: (q) => {
      const X = kd(q)(1);
      return () => (a = X, c = v6(q)(!1), l = x, s0(u)(q)(x)(), A(), H(p)());
    },
    pause: G,
    toggle: () => _ ? G() : Q(),
    seek: (q) => ut(q),
    seekCue: (q) => {
      const X = Vt((W) => W.id === q)(n.cues);
      if (X.tag === "Nothing")
        return () => {
        };
      if (X.tag === "Just") {
        const W = X._1, nt = ut(W.time);
        return () => (nt(), I(W)());
      }
      f();
    },
    seekStep: (q) => {
      const X = Vt((W) => W.kind === "step" && W.name === q)(n.cues);
      if (X.tag === "Nothing")
        return () => {
        };
      if (X.tag === "Just") {
        const W = X._1, nt = ut(W.time);
        return () => (nt(), I(W)());
      }
      f();
    },
    playToCue: (q) => (X) => {
      const W = Vt((nt) => nt.id === q)(n.cues);
      if (W.tag === "Nothing")
        return () => {
        };
      if (W.tag === "Just")
        return M(W._1, X);
      f();
    },
    playToStep: (q) => (X) => {
      const W = Vt((nt) => nt.kind === "step" && nt.name === q)(n.cues);
      if (W.tag === "Nothing")
        return () => {
        };
      if (W.tag === "Just")
        return M(W._1, X);
      f();
    },
    playNext: (q) => () => {
      const X = p, W = d, nt = k6(n.cues)(bd(q)(["step"]))(X)(W);
      if (nt.tag === "Nothing")
        return D(1, q)();
      if (nt.tag === "Just")
        return M(nt._1, q)();
      f();
    },
    playPrevious: (q) => () => {
      const X = p, W = d, nt = L6(n.cues)(bd(q)(["step"]))(X)(W);
      if (nt.tag === "Nothing")
        return D(-1, q)();
      if (nt.tag === "Just")
        return M(nt._1, w6(q)(-1))();
      f();
    },
    setSpeed: (q) => {
      const X = pi(1e-4)(q < 0 ? -q : q);
      return () => u.value = X;
    },
    currentTime: () => p,
    currentKeyframe: () => {
      const q = p;
      return i0(n)(q);
    },
    isPlaying: () => _,
    duration: n.totalDuration,
    cues: n.cues,
    steps: _t((q) => q.kind === "step", n.cues),
    subscribe: (q) => () => {
      k = Lt(k)(q);
      const W = p, nt = _;
      q({ time: W, keyframe: i0(n)(W), playing: nt })();
      const et = Ks((it) => !xa(it)(q));
      return () => {
        k = et(k);
      };
    },
    subscribeCue: (q) => () => {
      E = Lt(E)(q);
      const W = Ks((nt) => !xa(nt)(q));
      return () => {
        E = W(E);
      };
    },
    subscribeComplete: (q) => () => {
      L = Lt(L)(q);
      const W = Ks((nt) => !xa(nt)(q));
      return () => {
        L = W(L);
      };
    },
    destroy: () => {
      if (C = !0, J(), e === "CanvasRenderer")
        return u6(dc(t));
      e !== "SvgRenderer" && f();
    }
  };
}, P6 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = b6(n);
  if (u.tag === "Left")
    return () => Pt("Left", u._1);
  if (u.tag === "Right") {
    if (u._1.tag === "LoadedAnimation") {
      const a = T6()(r)(u._1._1);
      return () => {
        const c = a();
        if (c.tag === "Left")
          return Pt("Left", c._1);
        if (c.tag === "Right") {
          const l = E6(t)(c._1.schedule)(e)(r)(o)(i)(s)();
          return Pt("Right", l);
        }
        f();
      };
    }
    if (u._1.tag === "LoadedSequence") {
      const a = x6(t)(e)(r)(u._1._1);
      return () => {
        const c = a();
        return Pt("Right", c);
      };
    }
  }
  f();
}, Xg = () => document.createElement("canvas"), A6 = (t, n) => {
  t.letterSpacing = n;
}, R6 = (t, n) => {
  t.fontKerning = n;
}, U$ = /* @__PURE__ */ Lu(A6), Mg = /* @__PURE__ */ Lu(R6), F6 = { alpha: !0, premultipliedAlpha: !0, antialias: !0, depth: !1 }, G6 = (t) => t.getContext("webgl", F6), I6 = (t, n, e) => {
  const r = (i, s) => {
    const u = t.createShader(i);
    return t.shaderSource(u, s), t.compileShader(u), t.getShaderParameter(u, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(u)), u;
  }, o = t.createProgram();
  return t.attachShader(o, r(t.VERTEX_SHADER, n)), t.attachShader(o, r(t.FRAGMENT_SHADER, e)), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || console.error(t.getProgramInfoLog(o)), t.useProgram(o), o;
}, B6 = (t, n) => {
  const e = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW);
  const r = t.getAttribLocation(n, "position");
  t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0);
}, D6 = (t, n) => t.getExtension(n), z6 = (t, n, e) => t.getUniformLocation(n, e), H6 = (t, n, e) => t.uniform1f(n, e), W6 = (t, n, e, r) => t.uniform2f(n, e, r), Q6 = (t, n, e) => t.uniform1i(n, e), O6 = (t, n, e) => t.uniform4fv(n, new Float32Array(e)), q6 = (t, n, e) => t.uniform2fv(n, new Float32Array(e)), X6 = (t, n, e) => t.uniform1fv(n, new Float32Array(e)), M6 = (t) => t.createTexture(), U6 = (t, n, e, r) => {
  t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, n), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
}, Y6 = (t, n, e, r) => {
  (n.width !== e || n.height !== r) && (n.width = e, n.height = r), t.viewport(0, 0, e, r);
}, K6 = (t) => {
  t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);
}, V6 = (t) => t.drawArrays(t.TRIANGLE_STRIP, 0, 4), j6 = (t) => ({ width: t.clientWidth, height: t.clientHeight }), Z6 = () => window.devicePixelRatio, Sd = () => performance.now(), $c = /* @__PURE__ */ Wl(U6), an = /* @__PURE__ */ Js(z6), tF = /* @__PURE__ */ Js(O6), zs = (t) => (n) => {
  const e = tF(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, nF = /* @__PURE__ */ Js(q6), Hs = (t) => (n) => {
  const e = nF(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, eF = /* @__PURE__ */ Wl(W6), Go = /* @__PURE__ */ Js(Q6), rF = /* @__PURE__ */ Js(X6), br = (t) => (n) => {
  const e = rF(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, zr = /* @__PURE__ */ Js(H6), oF = /* @__PURE__ */ Lu(B6), iF = /* @__PURE__ */ Wl(Y6), sF = /* @__PURE__ */ Lu(D6), uF = /* @__PURE__ */ Cs(G6), aF = /* @__PURE__ */ Cs(V6), Ed = /* @__PURE__ */ Cs(M6), cF = /* @__PURE__ */ Cs(j6), fF = /* @__PURE__ */ Cs(K6), lF = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Y$ = /* @__PURE__ */ (() => {
  const t = Re.unfoldr(Jr);
  return (n) => t(Ee("IterNode", n, Cr));
})(), gF = /* @__PURE__ */ bu(Di), _F = (t) => Tt((n) => n)(B((n) => {
  if (n.target.tag === "TokenWindow") {
    const e = lF(n.target._2)(t.layout.edges);
    if (e.tag === "Just")
      return T(
        "Just",
        {
          points: B((() => {
            const r = t.placement;
            return (o) => ({ x: o.x * r.scale + r.tx, y: o.y * r.scale + r.ty });
          })())([
            ...(() => {
              const r = Pd(n.target._4)(t.layout.nodes);
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
                return un(e._1);
              f();
            })(),
            ...(() => {
              const r = Pd(n.target._5)(t.layout.nodes);
              if (r.tag === "Nothing")
                return [];
              if (r.tag === "Just")
                return [{ x: r._1.x + r._1.w / 2, y: r._1.y + r._1.h / 2 }];
              f();
            })()
          ]),
          labels: B(ko)(n.target._6),
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
})(t.windows)), dF = (t) => t.msg + " (line " + en(t.line) + ", cols " + en(t.column) + "-" + en(t.endColumn) + ")", hF = (t) => (n) => (e) => (r) => {
  const o = r._2.w * e.scale, i = r._2.h * e.scale;
  return {
    id: r._1,
    path: B(ko)(n),
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
}, pF = (t) => (n) => (e) => (r) => ({
  id: r._1,
  path: B(ko)(n),
  points: B((o) => ({ x: o.x * e.scale + e.tx, y: o.y * e.scale + e.ty }))(r._2),
  depth: t,
  arrowhead: (() => {
    const o = cr("conn:")(r._1);
    if (o.tag === "Just")
      return !1;
    if (o.tag === "Nothing")
      return !0;
    f();
  })()
}), mF = (t) => B(hF(t.path.length)(t.path)(t.placement))(Y$(t.layout.nodes)), Ad = (t) => (n) => {
  const e = Vt((r) => gF(r.path)(n))(t);
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = Cn(e._1.layout), o = r.w * e._1.placement.scale, i = r.h * e._1.placement.scale;
    return { x: r.x * e._1.placement.scale + e._1.placement.tx + o / 2, y: r.y * e._1.placement.scale + e._1.placement.ty + i / 2, w: o, h: i };
  }
  f();
}, $F = (t) => B(pF(t.path.length)(t.path)(t.placement))(Y$(t.layout.edges)), yF = (t) => (n) => ({
  startT: n.startT,
  endT: n.endT,
  dir: (() => {
    if (n.direction === "DiveIn")
      return 1;
    if (n.direction === "DiveOut")
      return 0;
    f();
  })(),
  parent: Ad(t)(n.parentPath),
  child: Ad(t)(n.childPath)
}), xF = (t) => {
  const n = qg(t), e = (() => {
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
    const o = ff(r)(af)._1;
    if (o.tag === "Left")
      return Pt("Left", dF(o._1));
    if (o.tag === "Right") {
      const i = Fg(Dc)(Rg)(o._1)(Xc(z)(z)(o._1));
      if (i.tag === "Left")
        return Pt("Left", "schedule: " + en(i._1.length) + " error(s)");
      if (i.tag === "Right")
        return Pt(
          "Right",
          {
            ok: !0,
            error: "",
            duration: i._1.totalDuration,
            nodes: wt(i._1.segments)(mF),
            edges: wt(i._1.segments)($F),
            tokens: wt(i._1.segments)(_F),
            dives: B(yF(i._1.segments))(i._1.dives)
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
}, Wo = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vF = (t) => (n) => (e) => {
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
}, al = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Rd = (t) => (n) => (e) => (r) => (o) => {
  const i = t + e + r, s = r * 2, u = Wo(0)(n - t - 2 * e), a = i + u - s;
  return s <= u ? vF(i)(a)(o) : t + (n - t) / 2;
}, Fd = (t) => (n) => ({ ...n, cx: Rd(t.minX)(t.maxX)(t.margin)(n.hw)(n.cx), cy: Rd(t.minY)(t.maxY)(t.margin)(n.hh)(n.cy) }), TF = (t) => (n) => {
  const e = Wo(0)(t.minY + t.margin - (n.cy - n.hh)) + Wo(0)(n.cy + n.hh - (t.maxY - t.margin)), r = Wo(0)(t.minX + t.margin - (n.cx - n.hw)) + Wo(0)(n.cx + n.hw - (t.maxX - t.margin));
  return r * n.hh * 2 + e * n.hw * 2 + r * e;
}, wF = (t) => (n) => (e) => {
  const r = N(Wo)(0)(B((o) => n.cx - n.hw < o.cx + o.hw + t && n.cx + n.hw > o.cx - o.hw - t && n.cy - n.hh < o.cy + o.hh + t && n.cy + n.hh > o.cy - o.hh - t ? al((o.cx + o.hw + t - (n.cx - n.hw)) / 0.7071067811865476)((o.cy + o.hh + t - (n.cy - n.hh)) / 0.7071067811865476) : 0)(e));
  return { ...n, cx: n.cx + r * 0.7071067811865476, cy: n.cy + r * 0.7071067811865476 };
}, NF = (t) => (n) => {
  const e = al(t.cx + t.hw)(n.cx + n.hw) - Wo(t.cx - t.hw)(n.cx - n.hw), r = al(t.cy + t.hh)(n.cy + n.hh) - Wo(t.cy - t.hh)(n.cy - n.hh);
  return t.cx - t.hw < n.cx + n.hw && t.cx + t.hw > n.cx - n.hw && t.cy - t.hh < n.cy + n.hh && t.cy + t.hh > n.cy - n.hh ? e * r : 0;
}, CF = (t) => (n) => (e) => (r) => (o) => {
  const i = o.cy - o.dotY, s = o.cy - r.cy;
  return (() => {
    const u = o.cx - o.dotX, a = o.cx - r.cx;
    return 1e6 * TF(t)(o) + 1e4 * N((c) => (l) => c + NF(o)(l))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.cy < e.dotY ? 100 : 0);
}, JF = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = Fd(t)(s);
    return { chip: u, score: CF(t)(n)(e)(r)(u) };
  }, i = Rt(
    (s) => x,
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
    return Fd(t)(r);
  if (i.tag === "Just")
    return N((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).chip;
  f();
}, bF = (t) => (n) => (e) => (r) => N((o) => (i) => {
  const s = wF(n)(i.chip)(o.obstacles), u = s.cx - s.hw >= t.minX + t.margin && s.cx + s.hw <= t.maxX - t.margin && s.cy - s.hh >= t.minY + t.margin && s.cy + s.hh <= t.maxY - t.margin ? s : JF(t)(o.obstacles)(i.chip)(s), a = u.cx - i.chip.cx, c = u.cy - i.chip.cy;
  return {
    resolved: Lt(o.resolved)({ chip: u, glyphs: B((l) => ({ ...l, cx: l.cx + a, cy: l.cy + c }))(i.glyphs) }),
    obstacles: Lt(o.obstacles)({ cx: u.cx, cy: u.cy, hw: u.hw, hh: u.hh })
  };
})({ resolved: [], obstacles: e })(r).resolved, K$ = (t) => t, Gd = /* @__PURE__ */ K$("Visible"), kF = /* @__PURE__ */ K$("Hidden");
function LF(t) {
  return t.readyState;
}
const SF = (t) => () => {
  const n = LF(t);
  return n === "visible" ? Gd : n === "hidden" ? kF : Gd;
}, EF = (t) => () => {
  const n = _c(), e = ZR(n)(), r = _c();
  let o = !0;
  const i = () => {
    const d = o, _ = SF(e)();
    return t(d && _ === "Visible")();
  }, s = e0((d) => i)();
  r0("visibilitychange")(s)(!1)(e)();
  const u = e0((d) => () => (o = !1, i()))();
  r0("blur")(u)(!1)(r)();
  const a = o0("blur")(u)(!1)(r), c = e0((d) => () => (o = !0, i()))();
  r0("focus")(c)(!1)(r)();
  const l = o0("focus")(c)(!1)(r);
  return () => (o0("visibilitychange")(s)(!1)(e)(), a(), l());
};
function PF(t, n, e) {
  return e.then(t, n);
}
function Id(t) {
  return Promise.resolve(t);
}
function AF(t, n, e) {
  return e instanceof Error ? t(e) : n;
}
const Ug = (t) => (n) => xk((e) => () => (PF(
  (r) => {
    const i = e(Pt("Right", r))();
    return Id(i);
  },
  (r) => {
    const i = e(Pt("Left", t(r)))();
    return Id(i);
  },
  n
), vk)), Yg = (t) => {
  const n = AF(Ht, x, t), e = ev(Xe)("String")(t), r = (() => {
    const o = (() => {
      if (e.tag === "Left")
        return x;
      if (e.tag === "Right")
        return T("Just", f_(e._1));
      f();
    })();
    return n.tag === "Nothing" ? o : n;
  })();
  if (r.tag === "Nothing")
    return f_("Promise failed, couldn't extract JS Error or String");
  if (r.tag === "Just")
    return r._1;
  f();
}, Bd = Ne.createElement;
Ne.Fragment;
function ii(t) {
  return (n) => Array.isArray(n.children) ? Bd.apply(null, [t, n].concat(n.children)) : Bd(t, n);
}
function RF(t) {
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
      const r = Ne.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const Kg = /* @__PURE__ */ RF(ii), V$ = /* @__PURE__ */ Kg("div")(), j$ = /* @__PURE__ */ Kg("canvas")(), FF = (t, n) => {
  const e = Ne.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
Ne.memo;
Ne.memo;
function Dd(t, n) {
  const [e, r] = Ne.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function iu(t, n, e) {
  const r = FF(t, n);
  Ne.useEffect(e, [r]);
}
const he = Ne.useRef;
function GF(t) {
  return t.current;
}
function IF(t, n) {
  t.current = n;
}
Ne.useContext;
Ne.useDebugValue;
Ne.useId;
Ne.useDeferredValue;
Ne.useSyncExternalStore;
Ne.useSyncExternalStore;
function Vg(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
Ne.useEffectEvent || Ne.experimental_useEffectEvent;
const Jn = /* @__PURE__ */ Lu(IF), Z$ = (t) => (n) => (e) => () => iu((r, o) => t.eq(r)(o), n, e), Tn = /* @__PURE__ */ Cs(GF), BF = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, ty = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => BF
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, DF = () => typeof document < "u" && document.fonts ? document.fonts : null, jg = (t) => {
  const n = DF();
  return n ? n.load(t).then(() => {
  }) : Promise.resolve();
}, zF = "attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }", HF = `
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
`, WF = (t, n, e, r, o) => {
  const i = (c) => {
    c.preventDefault(), n(c.deltaX)(c.deltaY)(c.ctrlKey ? 1 : 0)();
  }, s = (c) => {
    c.preventDefault(), e(c.clientX)(c.clientY)();
  }, u = (c) => r(c.clientX)(c.clientY)(c.buttons)(c.shiftKey ? 1 : 0)(), a = (c) => o(c.clientX)(c.clientY)();
  return t.addEventListener("wheel", i, { passive: !1 }), t.addEventListener("pointerdown", s), window.addEventListener("pointermove", u), window.addEventListener("pointerup", a), () => {
    t.removeEventListener("wheel", i), t.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", a);
  };
}, QF = /* @__PURE__ */ bu(Di), zd = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, gn = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, yc = /* @__PURE__ */ N(mr)(0), OF = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, ny = /* @__PURE__ */ (() => {
  const t = Lo.traverse(Bi);
  return (n) => (e) => t(e)(n);
})(), Hd = (t) => (e) => {
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Pe = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, qF = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, XF = (t) => N((n) => (e) => {
  if (n.tag === "Nothing")
    return T("Just", e);
  if (n.tag === "Just")
    return T("Just", t(n._1)(e) === "LT" ? n._1 : e);
  f();
})(x), MF = /* @__PURE__ */ Vx(Bi)(zl), UF = /* @__PURE__ */ ro(Bi)(Tc), Wd = (t) => (n) => (e) => {
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
}, YF = ty().pure, KF = /* @__PURE__ */ ii(V$), VF = /* @__PURE__ */ ii(j$), Qd = (t) => (n) => {
  const e = ur(t);
  if (e.tag === "Just") {
    const r = ur(e._1.init);
    if (r.tag === "Just")
      return T("Just", n(r._1.last)(e._1.last));
    if (r.tag === "Nothing")
      return x;
    f();
  }
  if (e.tag === "Nothing")
    return x;
  f();
}, Od = (t) => (n) => (e) => ({ chip: { ...e.chip, cx: e.chip.cx + t, cy: e.chip.cy + n }, glyphs: B((r) => ({ ...r, cx: r.cx + t, cy: r.cy + n }))(e.glyphs) }), jF = /* @__PURE__ */ iv(WF), ZF = (t) => ({ cx: t.x, cy: t.y, hw: t.hw, hh: t.hh }), ey = (t) => (n) => {
  const e = (r) => [r, ...wt(r.minis)((o) => e(o))];
  return Vt((r) => QF(B(ko)(r.segment.path))(t))(wt(n.levels)(e));
}, tG = (t) => (n) => {
  if (t.tag === "Nothing")
    return { alpha: 1, scale: 1 };
  if (t.tag === "Just") {
    const e = ey(n.path)(t._1);
    if (e.tag === "Just") {
      const r = zd(n.id)(e._1.state.nodes);
      if (r.tag === "Just") {
        const o = ei(r._1);
        return {
          alpha: (() => {
            const i = zd(n.id)(e._1.state.nodeFadeAlpha);
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
}, xc = (t) => (n) => (e) => ({ cx: t.cx + (n.cx - t.cx) * e, cy: t.cy + (n.cy - t.cy) * e, hw: t.hw * _s(n.hw / gn(1e-4)(t.hw))(e), hh: t.hh * _s(n.hh / gn(1e-4)(t.hh))(e) }), wo = (t) => (n) => _e((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)), nG = (t) => (n) => {
  const e = (r) => gn(0)(1 - wo(n)({ x: r.x, y: r.y }) / (gn(r.hw)(r.hh) + t.ballRadius));
  return N((r) => (o) => e(o) > r.glow ? { glow: e(o), x: o.x, y: o.y } : r)({ glow: 0, x: 0, y: 0 })(t.worldNodes);
}, eG = (t) => {
  const n = Gn(Kn, t, Ft(1, t.length, t)), e = yc(B((r) => wo(r._1)(r._2))(n));
  return e <= 1e-9 ? [] : N((r) => (o) => {
    const i = r.distance + wo(o._1)(o._2);
    return { distance: i, segments: Lt(r.segments)({ from: o._1, to: o._2, lo: r.distance / e, hi: i / e }) };
  })({ distance: 0, segments: [] })(n).segments;
}, rG = (t) => (n) => (e) => (r) => (o) => {
  const i = Kl({ width: n, height: e })((() => {
    const a = fr(r)(o);
    return { vx: a.x, vy: a.y, vw: a.w, vh: a.h };
  })()), s = (i.vx + i.vw / 2 - t.midX) * t.scaleFactor, u = -(i.vy + i.vh / 2 - t.midY) * t.scaleFactor;
  return {
    centerX: s,
    centerY: u,
    camZ: i.vh * t.scaleFactor,
    viewport: { cx: s, cy: u, hw: i.vw * t.scaleFactor / 2, hh: i.vh * t.scaleFactor / 2 }
  };
}, oG = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (t.cameraSchedule.tag === "Just") {
    const s = Q2({ widthPx: e, heightPx: r })(t.cameraSchedule._1), u = Mo(s.cameraConfig)(s.layout)(s.cameraSpans)(i).camera, a = (() => {
      if (n.tag === "Nothing")
        return u;
      if (n.tag === "Just")
        return Gh(s.cameraConfig.cameraDecay)(o)(n._1)(u);
      f();
    })();
    return T("Just", { camera: a, world: rG(t)(e)(r)(s.layout)(a) });
  }
  if (t.cameraSchedule.tag === "Nothing")
    return x;
  f();
}, hf = "500 " + en(mn(Ge(144))) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", Zg = /* @__PURE__ */ Tt((t) => t)(/* @__PURE__ */ B(dT)(/* @__PURE__ */ Zt(32, 126))), iG = rr((Zg.length + 16 | 0) - 1 | 0, 16), sG = (t) => tt(OF(0)(Zg.length - 1 | 0)(Kr(t) - 32 | 0)), qd = tt(16) * 76, Xd = tt(iG) * 100, Md = () => {
  const t = Xg();
  Sc(t)(qd)(), Ec(t)(Xd)();
  const n = ku(t)();
  wl(n)({ x: 0, y: 0, width: qd, height: Xd })(), xl(n)("#fff")(), Pc(n)("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")(), Il(n)(Ll)(), Gl(n)(kl)(), Mg(n)("normal")();
  const e = ny(Qt(Kn)(Zg))((r) => {
    const o = yr(r._2), i = Nl(n)(o)(tt(No(r._1)(16)) * 76 + 38)(tt(rr(r._1, 16)) * 100 + 50);
    return () => (i(), yh(n)(o)().width / 64);
  })();
  return { canvas: t, advances: e };
}, Ud = (t) => (n) => 2.36 * gn(t.hw / gn(0.2)(n))(t.hh), uG = (t) => (n) => (e) => () => {
  const r = Md();
  $c(t)(n)(r.canvas)(1)(), Jn(e)(r.advances)(), dg(
    hg,
    xi(xi(vi(() => jg("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")))(Ug(Yg)))(() => vi(() => {
      const i = Md();
      return $c(t)(n)(i.canvas)(1)(), Jn(e)(i.advances)();
    }))
  )().run();
}, Yd = (t) => (n) => {
  if (t.tag === "Nothing")
    return { lo: 0, hi: 1, alpha: 1 };
  if (t.tag === "Just") {
    const e = ey(n.path)(t._1);
    if (e.tag === "Just") {
      const r = Hd(n.id)(e._1.state.edges);
      if (r.tag === "Just") {
        const o = Im(r._1);
        return {
          lo: o.lo,
          hi: o.hi,
          alpha: (() => {
            const i = Hd(n.id)(e._1.state.edgeFadeAlpha);
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
}, aG = (t) => (n) => (e) => (r) => r < 0.31999999999999995 ? xc(n)(e.parent)((() => {
  const o = r / 0.31999999999999995;
  return o * o * (3 - 2 * o);
})()) : xc(e.parent)(t)((() => {
  const o = (r - 0.31999999999999995) / 0.68;
  return o * o * (3 - 2 * o);
})()), cG = (t) => (n) => (e) => e < 0.68 ? xc(t)(n.parent)((() => {
  const r = e / 0.68;
  return r * r * (3 - 2 * r);
})()) : xc(n.parent)(n.child)((() => {
  const r = (e - 0.68) / 0.31999999999999995;
  return r * r * (3 - 2 * r);
})()), fG = (t) => (n) => (e) => (r) => e.dir > 0.5 ? cG(n)(e)(r) : aG(t)(n)(e)(r), ry = (t) => (n) => gn(0)(Pe(1)((n - t.startT) / gn(1e-4)(t.endT - t.startT))), lG = (t) => (n) => (e) => N((r) => (o) => e <= o.startT ? r : fG(t)(r)(o)(ry(o)(e)))(t)(n), gG = (t) => (n) => {
  if (t.dir > 0.5) {
    const r = gn(0)(Pe(1)((n - 0.68) / 0.31999999999999995));
    return r * r * (3 - 2 * r);
  }
  const e = gn(0)(Pe(1)(n / 0.31999999999999995));
  return e * e * (3 - 2 * e);
}, _G = (t) => (n) => N((e) => (r) => n <= r.startT ? e : n >= r.endT ? r.dir > 0.5 ? e + 1 : e + -1 : e + (r.dir > 0.5 ? 1 : -1) * gG(r)(ry(r)(n)))(0)(t), dG = (t) => (n) => {
  const e = 1 - t.holdPre - t.holdPost;
  return e <= 0 ? n < 0.5 ? 0 : 1 : gn(0)(Pe(1)((n - t.holdPre) / e));
}, hG = (t) => (n) => (e) => {
  const r = gn(0)(Pe(1)((t * tt(n + 1 | 0) - tt(e)) / 1.5));
  return r * r * (3 - 2 * r);
}, pG = (t) => (n) => {
  const e = n.length === 0 ? [""] : n, r = B((d) => tt(qF(1)(Nr(d))))(e), o = gn(1)(yc(r)), i = t * o, u = ((d) => (_) => (g) => {
    let p = d, $ = _, h = g, m = !0, y;
    for (; m; ) {
      const v = p, w = $, J = Rt((k) => x, (k) => (E) => T("Just", { head: k, tail: E }), h);
      if (J.tag === "Nothing") {
        m = !1, y = e.length - 1 | 0;
        continue;
      }
      if (J.tag === "Just") {
        if (w + J._1.head >= i) {
          m = !1, y = v;
          continue;
        }
        p = v + 1 | 0, $ = w + J._1.head, h = J._1.tail;
        continue;
      }
      f();
    }
    return y;
  })(0)(0)(r), a = yc(u < 1 ? [] : Ft(0, u, r)), c = a / o;
  if (u >= 0 && u < r.length) {
    const d = (a + r[u]) / o;
    return { line: u >= 0 && u < e.length ? e[u] : "", phase: d <= c ? 1 : gn(0)(Pe(1)((t - c) / (d - c))) };
  }
  const l = (a + 1) / o;
  return { line: u >= 0 && u < e.length ? e[u] : "", phase: l <= c ? 1 : gn(0)(Pe(1)((t - c) / (l - c))) };
}, mG = (t) => (n) => {
  const e = Gn(Kn, t, Ft(1, t.length, t));
  return ((o) => (i) => {
    let s = o, u = i, a = !0, c;
    for (; a; ) {
      const l = s, _ = Rt((g) => x, (g) => (p) => T("Just", { head: g, tail: p }), u);
      if (_.tag === "Nothing") {
        const g = t.length - 1 | 0;
        if (g >= 0 && g < t.length) {
          a = !1, c = t[g];
          continue;
        }
        a = !1, c = { x: 0, y: 0 };
        continue;
      }
      if (_.tag === "Just") {
        if (_._1.tail.length === 0 || l <= wo(_._1.head._1)(_._1.head._2)) {
          const g = wo(_._1.head._1)(_._1.head._2), p = g <= 0 ? 0 : l / g;
          a = !1, c = { x: _._1.head._1.x + (_._1.head._2.x - _._1.head._1.x) * p, y: _._1.head._1.y + (_._1.head._2.y - _._1.head._1.y) * p };
          continue;
        }
        s = l - wo(_._1.head._1)(_._1.head._2), u = _._1.tail;
        continue;
      }
      f();
    }
    return c;
  })(gn(0)(Pe(1)(n)) * N((o) => (i) => o + wo(i._1)(i._2))(0)(e))(e);
}, $G = (t) => (n) => B((e) => {
  const r = dG(e)((n - e.startT) / (e.endT - e.startT)), o = mG(e.path)(r), i = nG(t)(o);
  return { x: o.x, y: o.y, glow: i.glow, nx: i.x, ny: i.y, labels: e.labels, motionT: r, startT: e.startT, path: e.path };
})(Ft(0, 8, _t((e) => n >= e.startT && n < e.endT, t.tokenFlows))), yG = (t) => (n) => {
  const e = t.cameraSchedule.tag === "Just" ? T("Just", pp(t.cameraSchedule._1)(n)) : x, r = B(tG(e))(t.nodeList), o = B((i) => {
    const s = gn(1e-9)(i._1.hi - i._1.lo), u = gn(0)(Pe(1)((i._2.lo - i._1.lo) / s)), a = gn(0)(Pe(1)((i._2.hi - i._1.lo) / s));
    return {
      flat: [
        i._1.from.x + (i._1.to.x - i._1.from.x) * u,
        i._1.from.y + (i._1.to.y - i._1.from.y) * u,
        i._1.from.x + (i._1.to.x - i._1.from.x) * a,
        i._1.from.y + (i._1.to.y - i._1.from.y) * a
      ],
      alpha: i._2.alpha > 0 && a > u + 1e-9 ? i._2.alpha : 0
    };
  })(Gn(Kn, t.edgeSegments, B((i) => Yd(e)(i.key))(t.edgeSegments)));
  return {
    nodeRect: wt(Gn(Kn, t.worldNodes, r))((i) => [
      i._1.x,
      i._1.y,
      i._1.hw * 2 * i._2.scale,
      i._1.hh * 2 * i._2.scale
    ]),
    nodeAlpha: B((i) => i.alpha)(r),
    edge: wt(o)((i) => i.flat),
    edgeAlpha: B((i) => i.alpha)(o),
    arrowAlpha: B((i) => {
      const s = Yd(e)(i.key);
      return s.alpha > 0 && s.hi >= 0.999999 ? s.alpha : 0;
    })(t.arrowData)
  };
}, xG = (t) => {
  const n = qg(t);
  if (n.tag === "Left")
    return x;
  if (n.tag === "Right") {
    const e = ff(n._1)(af)._1;
    if (e.tag === "Left")
      return x;
    if (e.tag === "Right") {
      const r = Fg(Dc)(Rg)(e._1)(Xc(z)(z)(e._1));
      if (r.tag === "Left")
        return x;
      if (r.tag === "Right")
        return T("Just", r._1);
    }
  }
  f();
}, vG = (t) => {
  const n = xF(t), e = xG(t), r = (() => {
    if (e.tag === "Nothing")
      return Dc;
    if (e.tag === "Just")
      return e._1.cameraConfig;
    f();
  })(), o = N((h) => (m) => ({ minX: Pe(h.minX)(m.x - m.w / 2), maxX: gn(h.maxX)(m.x + m.w / 2), minY: Pe(h.minY)(m.y - m.h / 2), maxY: gn(h.maxY)(m.y + m.h / 2) }))({ minX: 1e9, maxX: -1e9, minY: 1e9, maxY: -1e9 })(n.nodes), i = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, u = 6.6 / gn(o.maxX - o.minX)(o.maxY - o.minY), a = B((h) => ({
    key: { id: h.id, path: h.path },
    pts: B((m) => ({ x: (m.x - i) * u, y: -(m.y - s) * u }))(h.points),
    depth: tt(h.depth),
    arrowhead: h.arrowhead
  }))(n.edges), c = B((h) => ({
    x: (h.x - i) * u,
    y: -(h.y - s) * u,
    hw: h.w / 2 * u,
    hh: h.h / 2 * u,
    shape: tt(h.shape),
    depth: tt(h.depth),
    labelH: r.labelBasePx * h.labelScale * u
  }))(n.nodes), l = (h) => {
    const m = XF(/* @__PURE__ */ (() => {
      const y = (v) => (h.x - v.x) * (h.x - v.x) + (h.y - v.y) * (h.y - v.y);
      return (v) => (w) => st.compare(y(v))(y(w));
    })())(c);
    if (m.tag === "Just")
      return { x: m._1.x, y: m._1.y };
    if (m.tag === "Nothing")
      return h;
    f();
  }, d = c.length, _ = d === 0 ? 0.1 : N((h) => (m) => h + m.hh)(0)(c) / tt(d), g = (h) => {
    const m = _t((y) => y.depth === h, c);
    return m.length === 0 ? _ : N((y) => (v) => y + v.hh)(0)(m) / tt(m.length);
  }, p = g(0), $ = wt(a)((h) => B((m) => ({ key: h.key, from: m.from, to: m.to, lo: m.lo, hi: m.hi, depth: h.depth }))(eG((() => {
    if (h.arrowhead) {
      const m = Qd(h.pts)(Kn);
      if (m.tag === "Just") {
        const y = wo(m._1._1)(m._1._2);
        if (y > 1e-6) {
          const v = ur(h.pts);
          if (v.tag === "Just") {
            const w = Pe(_ * g(h.depth) / gn(1e-4)(p) * 0.05 + _ * g(h.depth) / gn(1e-4)(p) * 0.55)(y * 0.95);
            return Lt(v._1.init)({ x: m._1._2.x - (m._1._2.x - m._1._1.x) / y * w, y: m._1._2.y - (m._1._2.y - m._1._1.y) / y * w });
          }
          if (v.tag === "Nothing")
            return h.pts;
          f();
        }
        return h.pts;
      }
      if (m.tag === "Nothing")
        return h.pts;
      f();
    }
    return h.pts;
  })())));
  return {
    nodeList: n.nodes,
    worldNodes: c,
    halfW: N((h) => (m) => gn(h)(gn(m.x + m.hw)(m.hw - m.x)))(0)(c) + _ * 0.6,
    halfH: N((h) => (m) => gn(h)(gn(m.y + m.hh)(m.hh - m.y)))(0)(c) + _ * 0.6,
    unitHalfH: _,
    ballRadius: _ * 0.3,
    scaleFactor: u,
    nodeRectFlat: wt(c)((h) => [h.x, h.y, h.hw * 2, h.hh * 2]),
    nodeShapeFlat: B((h) => h.shape)(c),
    nodeLabelHeightFlat: B((h) => h.labelH)(c),
    nodeDepthFlat: B((h) => h.depth)(c),
    edgeSegFlat: wt($)((h) => [h.from.x, h.from.y, h.to.x, h.to.y]),
    edgeSegDepth: B((h) => h.depth)($),
    edgeSegments: $,
    arrowData: Tt((h) => {
      if (h.arrowhead) {
        const m = Qd(h.pts)(Kn);
        if (m.tag === "Just") {
          const y = wo(m._1._1)(m._1._2);
          return y > 1e-6 ? T(
            "Just",
            (() => {
              const v = l(m._1._2);
              return {
                key: h.key,
                tipX: m._1._2.x - (m._1._2.x - m._1._1.x) / y * (_ * g(h.depth) / gn(1e-4)(p)) * 0.05,
                tipY: m._1._2.y - (m._1._2.y - m._1._1.y) / y * (_ * g(h.depth) / gn(1e-4)(p)) * 0.05,
                dirX: (m._1._2.x - m._1._1.x) / y,
                dirY: (m._1._2.y - m._1._1.y) / y,
                cx: v.x,
                cy: v.y,
                depth: h.depth,
                unit: _ * g(h.depth) / gn(1e-4)(p)
              };
            })()
          ) : x;
        }
        if (m.tag === "Nothing")
          return x;
        f();
      }
      return x;
    })(a),
    tokenFlows: B((h) => ({
      path: (() => {
        const m = B((v) => ({ x: (v.x - i) * u, y: -(v.y - s) * u }))(h.points), y = Rt((v) => x, (v) => (w) => T("Just", { head: v, tail: w }), m);
        if (y.tag === "Just") {
          const v = ur(m);
          if (v.tag === "Just")
            return [l(y._1.head), ...Lt(m)(l(v._1.last))];
          if (v.tag === "Nothing")
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
    dives: B((h) => {
      const m = (y) => ({ cx: (y.x - i) * u, cy: -(y.y - s) * u, hw: y.w / 2 * u, hh: y.h / 2 * u });
      return { startT: h.startT, endT: h.endT, dir: tt(h.dir), parent: m(h.parent), child: m(h.child) };
    })(n.dives),
    duration: n.duration,
    midX: i,
    midY: s,
    cameraSchedule: e
  };
}, Kd = (t) => () => {
  const n = Xg(), e = ku(n)();
  Mg(e)("normal")(), U$(e)("1px")();
  const r = ny(t)((o) => {
    const i = Pc(e)(hf);
    return () => (i(), [yh(e)(o.label)().width / 2048, 0.9]);
  })();
  return De(r);
}, oy = (t) => (n) => {
  const e = ku(n);
  return () => {
    const r = e();
    return wl(r)({ x: 0, y: 0, width: 2048, height: tt(t.length) * 160 })(), xl(r)("#fff")(), Il(r)(Ll)(), Gl(r)(kl)(), Mg(r)("normal")(), U$(r)("1px")(), MF(t)((o) => (i) => {
      const s = Pc(r)(hf);
      return () => (s(), Nl(r)(i.label)(1024)(tt(o) * 160 + 80)());
    })();
  };
}, TG = (t) => () => {
  const n = Xg();
  return Sc(n)(2048)(), Ec(n)(tt(t.length) * 160)(), oy(t)(n)(), n;
}, wG = (t) => (n) => (e) => {
  const r = TG(t);
  return () => {
    const o = r();
    $c(n)(e)(o)(0)(), dg(
      hg,
      xi(xi(vi(() => jg(hf)))(Ug(Yg)))(() => vi((() => {
        const s = oy(t)(o);
        return () => (s(), $c(n)(e)(o)(0)());
      })()))
    )().run();
  };
}, NG = (t) => (n) => {
  const e = (r) => N((o) => (i) => (() => {
    const s = i.nx - r.cx, u = i.ny - r.cy, a = r.unit * 0.6;
    return s * s + u * u < a * a;
  })() ? gn(o)(i.glow) : o)(0)(n);
  return wt(t.arrowData)((r) => [r.tipX - r.dirX * r.unit * 0.2 * e(r), r.tipY - r.dirY * r.unit * 0.2 * e(r), r.dirX, r.dirY]);
}, CG = (t) => (n) => (e) => (r) => {
  const o = Pe(0.05)(t);
  return Qt((i) => (s) => {
    if (i >= 0 && i < e.length) {
      const _ = e[i].startT, g = Vt((y) => y.id === _)(n), p = (() => {
        if (g.tag === "Nothing")
          return { id: _, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
        if (g.tag === "Just")
          return g._1;
        f();
      })(), $ = p.vx + (180 * (s.chip.cx - p.x) - 22 * p.vx) * o, h = p.vy + (180 * (s.chip.cy - p.y) - 22 * p.vy) * o, m = { id: _, x: p.x + $ * o, y: p.y + h * o, vx: $, vy: h };
      return S(Od(m.x - s.chip.cx)(m.y - s.chip.cy)(s), m);
    }
    const u = Vt((_) => _.id === 0)(n), a = (() => {
      if (u.tag === "Nothing")
        return { id: 0, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
      if (u.tag === "Just")
        return u._1;
      f();
    })(), c = a.vx + (180 * (s.chip.cx - a.x) - 22 * a.vx) * o, l = a.vy + (180 * (s.chip.cy - a.y) - 22 * a.vy) * o, d = { id: 0, x: a.x + c * o, y: a.y + l * o, vx: c, vy: l };
    return S(Od(d.x - s.chip.cx)(d.y - s.chip.cy)(s), d);
  })(r);
}, Vd = (t) => (n) => {
  const e = Kr(n) - 32 | 0;
  return e >= 0 && e < t.length ? t[e] : 0.5;
}, JG = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = n * 0.6 + n * 0.5454545454545454, u = n * 1.5625, a = u * 0.76, c = n * 0.7272727272727273, l = e.y + r + c + s, d = pG(o)(i), _ = Me(d.line), g = _.length, p = yc(B((h) => n * Vd(t)(h))(_)), $ = e.x + r + c + p / 2;
  return {
    chip: { cx: $, cy: l, hw: p / 2 + n * 1.2727272727272727, hh: s, dotX: e.x, dotY: e.y },
    glyphs: N((h) => (m) => {
      const y = hG(d.phase)(g)(m._1), v = n * Vd(t)(m._2), w = { cx: h._1 + v / 2, cy: l + (1 - y) * n * 0.85, hw: a / 2, hh: u / 2, cell: sG(m._2), alpha: y };
      return S(h._1 + v, y > 0 ? Lt(h._2)(w) : h._2);
    })(S($ - p / 2, []))(Qt(Kn)(_))._2
  };
}, bG = /* @__PURE__ */ Vg(
  "SdfDiagram",
  (t) => {
    const n = he(Zi), e = he(0), r = he(0), o = he(x), i = he([]), s = he([]), u = he(x), a = he(8), c = he(1), l = he(0), d = he(0), _ = he(0), g = he(0), p = he(x), $ = he({ resW: 0, resH: 0 }), h = he(1), m = he(!0), y = Jn(h)(t.speed);
    iu(
      (C, J) => C === J,
      t.speed,
      () => (y(), () => {
      })
    );
    const v = Jn(m)(t.playing);
    iu(
      (C, J) => C === J,
      t.playing,
      () => (v(), () => {
      })
    );
    const w = Tn(n);
    return iu(
      (C, J) => C === J,
      t.source,
      () => {
        const C = w(), J = bn(C, x, Ht);
        if (J.tag === "Nothing")
          return () => {
          };
        if (J.tag === "Just") {
          const k = uF(J._1)(), E = bn(k, x, Ht);
          if (E.tag === "Nothing")
            return () => {
            };
          if (E.tag === "Just") {
            const L = E._1;
            Jn(u)(x)();
            const I = vG(t.source);
            sF(L)("OES_standard_derivatives")();
            const H = I6(L, zF, HF);
            oF(L)(H)();
            const G = an(L)(H)("uRes")(), O = an(L)(H)("uTime")(), ut = an(L)(H)("uTilt")(), ot = an(L)(H)("uNodeCount")(), Z = an(L)(H)("uEdgeCount")(), U = an(L)(H)("uNodeRect")(), P = an(L)(H)("uNodeAlpha")(), A = an(L)(H)("uNodeShape")(), Q = an(L)(H)("uEdge")(), D = an(L)(H)("uEdgeAlpha")(), M = an(L)(H)("uArrow")(), Y = an(L)(H)("uArrowCount")(), q = an(L)(H)("uArrowAlpha")(), X = an(L)(H)("uLabel")(), W = an(L)(H)("uLabelAspect")(), nt = an(L)(H)("uLabelFadeStart")(), et = an(L)(H)("uLabelDim")(), it = an(L)(H)("uLabelH")(), lt = an(L)(H)("uUnit")(), gt = an(L)(H)("uTokCount")(), pt = an(L)(H)("uTokPos")(), St = an(L)(H)("uTokGlow")(), Gt = an(L)(H)("uTokNode")(), Wt = an(L)(H)("uGlyphAtlas")(), $t = an(L)(H)("uChipCount")(), At = an(L)(H)("uChipRect")(), Nt = an(L)(H)("uChipDot")(), Ct = an(L)(H)("uGlyphCount")(), dt = an(L)(H)("uGlyphRect")(), yt = an(L)(H)("uGlyphCell")(), Et = an(L)(H)("uGlyphAlpha")(), mt = an(L)(H)("uCamZ")(), kt = an(L)(H)("uCamPanX")(), Dt = an(L)(H)("uCamPanY")(), zt = an(L)(H)("uRotY")(), rn = an(L)(H)("uActiveDepth")(), fn = an(L)(H)("uNodeDepth")(), ye = an(L)(H)("uEdgeDepth")(), On = an(L)(H)("uArrowDepth")();
            Go(L)(X)(0)(), Go(L)(Wt)(1)(), zr(L)(W)(12.8)(), zr(L)(nt)(0.92)();
            const Yt = Ed(L)(), Mt = Ed(L)();
            wG(I.nodeList)(L)(Yt)(), uG(L)(Mt)(i)();
            const In = Kd(I.nodeList)();
            Hs(L)(et)(In)(), dg(
              hg,
              xi(xi(vi(() => jg(hf)))(Ug(Yg)))(() => xi(vi(Kd(I.nodeList)))((Bn) => vi(Hs(L)(et)(Bn))))
            )().run(), Go(L)(ot)(I.nodeList.length)(), Go(L)(Z)(rr(I.edgeSegFlat.length, 4))(), Go(L)(Y)(I.arrowData.length)(), br(L)(A)(I.nodeShapeFlat)(), br(L)(it)(I.nodeLabelHeightFlat)(), br(L)(fn)(I.nodeDepthFlat)(), br(L)(ye)(I.edgeSegDepth)(), br(L)(On)(B((Bn) => Bn.depth)(I.arrowData))();
            const de = _c(), fe = Tn(o), We = UF((Bn) => {
              const Je = t6(Bn)(de);
              return () => (Je(), Jn(o)(x)());
            }), ln = () => {
              const Bn = fe();
              return We(Bn)();
            }, kn = () => {
              const Bn = Sd(), Je = Tn(r)();
              Jn(r)(Bn)();
              const Ao = Tn(h)(), Du = Tn(m)(), si = Pe(0.05)((Bn - Je) / 1e3), Ir = Du ? si * Ao : 0, oo = Tn(e)() + Ir;
              Jn(e)(oo)();
              const Br = cF(J._1)(), zu = Z6(), Hu = gn(1)(Pe(2)(zu)), pf = Tn(i)(), mf = Tn(s)(), $f = Tn(c)(), n_ = Tn(l)(), e_ = Tn(d)(), cy = Tn(u)(), Wu = Tn(_)(), Qu = 0 + Tn(g)(), Ou = Br.width * Hu, Es = Br.height * Hu, r_ = { cx: 0, cy: 0, hw: I.halfW, hh: I.halfH }, fy = (() => {
                const Ps = I.duration > 0 ? oo - I.duration * ar(oo / I.duration) : 0, ui = $G(I)(Ps), As = oG(I)(cy)(Br.width)(Br.height)(si)(Ps), Rs = yG(I)(Ps), Fs = lG(r_)(I.dives)(Ps), gy = { centerX: Fs.cx, centerY: Fs.cy, camZ: Fs.hh * 2, viewport: Fs }, yf = (() => {
                  if (As.tag === "Nothing")
                    return gy;
                  if (As.tag === "Just")
                    return As._1.world;
                  f();
                })(), qu = yf.centerX + n_, xf = yf.centerY + e_, Gs = yf.camZ * 1.18 * $f, _y = qu * ie(Wu), dy = xf * ie(Qu) - qu * se(Wu) * se(Qu), vf = Ou / Es, Tf = Ud(Fs)(vf) / Ud(r_)(vf), hy = I.ballRadius * Tf, py = 11 * I.scaleFactor * Tf, o_ = I.unitHalfH * Tf, i_ = _G(I.dives)(Ps), s_ = CG(Ir)(mf)(ui)(bF((() => {
                  const on = 0.5 * vf * Gs / gn(0.3)(ie(Wu)), u_ = 0.5 * Gs / gn(0.3)(ie(Qu));
                  return { minX: qu - on, maxX: qu + on, minY: xf - u_, maxY: xf + u_, margin: 4 * Gs / gn(1)(Es) };
                })())(o_ * 0.25)(B(ZF)(_t((on) => on.depth >= i_ - 0.5, I.worldNodes)))(B((on) => JG(pf)(py)({
                  x: on.x,
                  y: on.y
                })(hy)(on.motionT)(on.labels))(ui))), Xu = B((on) => on._1)(s_), Mu = Ft(0, 40, wt(Xu)((on) => on.glyphs)), my = B((on) => on._2)(s_), $y = Jn($)({ resW: Ou, resH: Es });
                return () => ($y(), Jn(s)(my)(), Jn(u)(As.tag === "Just" ? T("Just", As._1.camera) : x)(), Jn(l)(n_)(), Jn(d)(e_)(), Jn(a)(Gs)(), iF(L)(J._1)(mn(Ge(Ou)))(mn(Ge(Es)))(), fF(L)(), eF(L)(G)(Ou)(Es)(), zr(L)(O)(oo)(), zr(L)(ut)(Qu)(), zr(L)(mt)(Gs)(), zr(L)(kt)(_y)(), zr(L)(Dt)(dy)(), zr(L)(zt)(Wu)(), zr(L)(rn)(i_)(), zs(L)(U)(Rs.nodeRect)(), br(L)(P)(Rs.nodeAlpha)(), zs(L)(Q)(Rs.edge)(), br(L)(D)(Rs.edgeAlpha)(), br(L)(q)(Rs.arrowAlpha)(), zr(L)(lt)(o_)(), Go(L)(gt)(ui.length)(), Hs(L)(pt)(wt(ui)((on) => [on.x, on.y]))(), br(L)(St)(B((on) => on.glow)(ui))(), Hs(L)(Gt)(wt(ui)((on) => [on.nx, on.ny]))(), zs(L)(M)(NG(I)(ui))(), Go(L)($t)(Xu.length)(), zs(L)(At)(wt(Xu)((on) => [on.chip.cx, on.chip.cy, on.chip.hw, on.chip.hh]))(), Hs(L)(Nt)(wt(Xu)((on) => [on.chip.dotX, on.chip.dotY]))(), Go(L)(Ct)(Mu.length)(), zs(L)(dt)(wt(Mu)((on) => [on.cx, on.cy, on.hw, on.hh]))(), br(L)(yt)(B((on) => on.cell)(Mu))(), br(L)(Et)(B((on) => on.alpha)(Mu))(), aF(L)());
              })();
              Br.width > 0 && fy();
              const ly = sl(kn)(de)();
              return Jn(o)(T("Just", ly))();
            }, sy = Jn(r), t_ = () => {
              const Bn = Sd();
              sy(Bn)();
              const Je = sl(kn)(de)();
              return Jn(o)(T("Just", Je))();
            };
            t_();
            const uy = EF((Bn) => {
              const Je = Tn(o);
              return () => {
                const Ao = Je();
                if (Bn)
                  return Ao.tag === "Nothing" ? t_() : void 0;
                if (!Bn && Ao.tag === "Just")
                  return ln();
              };
            })(), ay = jF(J._1)((Bn) => (Je) => (Ao) => {
              const Du = Tn(a);
              return () => {
                const si = Du(), Ir = Tn($)();
                if (Ao > 0.5) {
                  const Br = Tn(c)();
                  return Jn(c)(Wd(0.3)(2.6)(Br * _s(1.01)(Je)))();
                }
                const Ss = Tn(l)(), oo = Tn(d)();
                return Jn(l)(Ss + Bn * si / Ir.resH)(), Jn(d)(oo - Je * si / Ir.resH)();
              };
            })((Bn) => (Je) => Jn(p)(T("Just", { x: Bn, y: Je })))((Bn) => (Je) => (Ao) => (Du) => {
              const si = Tn(p);
              return () => {
                const Ir = si();
                if (Ir.tag !== "Nothing") {
                  if (Ir.tag === "Just") {
                    const Ss = Je - Ir._1.y, oo = Bn - Ir._1.x;
                    Jn(p)(T("Just", { x: Bn, y: Je }))();
                    const Br = Tn(a)(), zu = Tn($)();
                    if (Ao >= 1.5) {
                      const mf = Tn(l)(), $f = Tn(d)();
                      return Jn(l)(mf - oo * Br / zu.resH)(), Jn(d)($f + Ss * Br / zu.resH)();
                    }
                    const Hu = Tn(_)(), pf = Tn(g)();
                    return Jn(_)(Hu + oo * 5e-3)(), Jn(g)(Wd(-0.8)(0.8)(pf + Ss * 5e-3))();
                  }
                  f();
                }
              };
            })((Bn) => (Je) => Jn(p)(x))();
            return () => (ln(), uy(), ay());
          }
        }
        f();
      }
    ), YF(KF({
      style: { position: "absolute", inset: "0" },
      children: [VF({ ref: n, style: { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" } })]
    }))();
  }
), kG = /* @__PURE__ */ ii(bG), LG = /* @__PURE__ */ ii(V$), SG = /* @__PURE__ */ Z$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), EG = /* @__PURE__ */ Z$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), Ze = /* @__PURE__ */ ro(Bi)(Tc), vc = ty().pure, PG = /* @__PURE__ */ ii(j$), AG = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && t.showTitle === n.showTitle && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, RG = /* @__PURE__ */ Kg("svg")(), jd = (t) => LG({
  className: "markgraf-player",
  style: { position: "relative", width: "100%", height: "100%" },
  children: [
    kG({
      source: t.src,
      speed: 1,
      playing: (() => {
        const n = bn(t.paused, x, Ht);
        if (n.tag === "Nothing")
          return !0;
        if (n.tag === "Just")
          return !n._1;
        f();
      })()
    })
  ]
}), Zd = (t) => {
  const n = bn(t.height, x, Ht), e = bn(t.width, x, Ht);
  return e.tag === "Just" && n.tag === "Just" ? { width: mo(e._1) + "px", height: mo(n._1) + "px", display: "block" } : { width: "100%", minHeight: "180px", aspectRatio: "16 / 9", display: "block" };
}, iy = (t) => (n) => {
  const e = bn(n.theme, x, Ht), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = bn(n.renderer, x, Ht), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = bn(n.paused, x, Ht), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), a = r === "light" ? T("Just", Z1) : r === "dark" ? T("Just", lE) : r === "blueprint" ? T("Just", gE) : r === "whiteboard" ? T("Just", _E) : r === "isometric" ? T("Just", dE) : x, c = i === "svg" ? T("Just", f6) : i === "canvas" ? T("Just", Jd) : x, l = {
    source: t,
    renderer: (() => {
      if (c.tag === "Nothing")
        return Jd;
      if (c.tag === "Just")
        return c._1;
      f();
    })(),
    sizing: (() => {
      const d = bn(n.width, x, Ht);
      if (d.tag === "Just") {
        const _ = bn(n.height, x, Ht);
        if (_.tag === "Just")
          return X$("FixedSize", d._1, _._1);
      }
      return c6;
    })(),
    theme: (() => {
      if (a.tag === "Nothing")
        return Z1;
      if (a.tag === "Just")
        return a._1;
      f();
    })(),
    transparency: (() => {
      const d = bn(n.transparent, x, Ht);
      if (d.tag === "Nothing")
        return !1;
      if (d.tag === "Just")
        return d._1;
      f();
    })() ? pE : hE,
    showTitle: (() => {
      const d = bn(n.showTitle, x, Ht);
      if (d.tag === "Nothing")
        return !0;
      if (d.tag === "Just")
        return d._1;
      f();
    })()
  };
  return () => {
    const d = he(Zi), _ = Dd((h, m) => S(h, m), x), g = _._1, p = Dd((h, m) => S(h, m), { time: 0, keyframe: "", playing: !1 });
    SG(S(i, r))((() => {
      const h = a_("[markgraf] unknown renderer " + c0(i) + ", defaulting to canvas"), m = (() => {
        if (c.tag === "Nothing")
          return !0;
        if (c.tag === "Just")
          return !1;
        f();
      })() ? h : () => {
      };
      return () => {
        m();
        const y = a_("[markgraf] unknown theme " + c0(r) + ", defaulting to light");
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
    const $ = Tn(d);
    return iu(
      (h, m) => AG.eq(h)(m),
      l,
      () => {
        const h = $(), m = bn(h, x, Ht), y = (() => {
          if (m.tag === "Just")
            return jR(x, Ht, "Element", m._1);
          if (m.tag === "Nothing")
            return x;
          f();
        })();
        if (y.tag === "Nothing")
          return () => {
          };
        if (y.tag === "Just") {
          const v = P6(y._1)(l.source)(l.renderer)(l.sizing)(l.theme)(l.transparency)(l.showTitle)();
          if (v.tag === "Left")
            return Jy("[markgraf] " + v._1)(), () => {
            };
          if (v.tag === "Right") {
            const w = v._1;
            _._2((J) => T("Just", w))();
            const C = w.subscribe((J) => p._2((k) => J))();
            return () => (C(), w.destroy(), _._2((J) => x)());
          }
        }
        f();
      }
    ), EG(S(
      u,
      (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        f();
      })()
    ))((() => {
      const h = Ze((m) => u ? m.pause : m.play)(g);
      return () => (h(), () => {
      });
    })())(), vc({
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
      play: Ze((h) => h.play)(g),
      playWith: (h) => Ze((m) => m.playWith(h))(g),
      pause: Ze((h) => h.pause)(g),
      toggle: Ze((h) => h.toggle)(g),
      seek: (h) => Ze((m) => m.seek(h))(g),
      seekCue: (h) => Ze((m) => m.seekCue(h))(g),
      seekStep: (h) => Ze((m) => m.seekStep(h))(g),
      playToCue: (h) => (m) => Ze((y) => y.playToCue(h)(m))(g),
      playToStep: (h) => (m) => Ze((y) => y.playToStep(h)(m))(g),
      playNext: (h) => Ze((m) => m.playNext(h))(g),
      playPrevious: (h) => Ze((m) => m.playPrevious(h))(g),
      setSpeed: (h) => Ze((m) => m.setSpeed(h))(g),
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
      onStepEnter: (h) => (m) => {
        if (g.tag === "Just")
          return g._1.subscribeCue((y) => {
            const v = m(y);
            return y.kind === "step" && y.name === h ? v : () => {
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
}, FG = /* @__PURE__ */ Vg(
  "MarkgrafHeadlessPlayer",
  (t) => {
    const n = iy(t.src)({
      renderer: t.renderer,
      width: t.width,
      height: t.height,
      theme: t.theme,
      transparent: t.transparent,
      showTitle: t.showTitle,
      paused: t.paused
    })(), e = bn(t.renderer, x, Ht);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? vc(ii(RG)({ className: "markgraf-player", ref: n.elementRef, style: Zd(t) }))() : vc(PG({ className: "markgraf-player", ref: n.elementRef, style: Zd(t) }))();
  }
), GG = /* @__PURE__ */ Vg(
  "MarkgrafPlayer",
  (t) => vc((() => {
    const n = bn(t.renderer, x, Ht), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      f();
    })();
    return e === "sdf" || e === "webgl" ? jd(t) : ii(FG)(t);
  })())()
), Ws = (t) => t ?? null, IG = (t) => {
  if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
  const n = Object.getPrototypeOf(t);
  return n === Object.prototype || n === null;
}, BG = (t) => t != null && (IG(t) || "direction" in t || "speed" in t || "duration" in t || "loop" in t || "stopAt" in t), u0 = (t) => () => t(), a0 = (t) => (n) => () => t(n), DG = (t) => ({
  ...t,
  play: (n) => BG(n) ? t.playWith(n)() : t.play(),
  playWith: (n) => t.playWith(Ws(n))(),
  pause: () => t.pause(),
  toggle: () => t.toggle(),
  seek: (n) => t.seek(n)(),
  seekCue: (n) => t.seekCue(n)(),
  seekStep: (n) => t.seekStep(n)(),
  playToCue: (n, e) => t.playToCue(n)(Ws(e))(),
  playToStep: (n, e) => t.playToStep(n)(Ws(e))(),
  playNext: (n) => t.playNext(Ws(n))(),
  playPrevious: (n) => t.playPrevious(Ws(n))(),
  setSpeed: (n) => t.setSpeed(n)(),
  onCueEnter: (n) => u0(t.onCueEnter(a0(n))()),
  onStepEnter: (n, e) => u0(t.onStepEnter(n)(a0(e))()),
  onComplete: (n) => u0(t.onComplete(a0(n))())
}), WG = (t, n) => DG(iy(t)(n ?? {})()), QG = GG;
export {
  QG as MarkgrafPlayer,
  WG as useMarkgraf
};
