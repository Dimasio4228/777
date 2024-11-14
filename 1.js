var e = Object.defineProperty
  , t = (t, n, r) => (( (t, n, r) => {
    n in t ? e(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[n] = r
}
)(t, "symbol" != typeof n ? n + "" : n, r),
r);
import {g as n, f as r, o, m as i, v as a, J as c, $ as s, a as l, l as u, d as p, u as f, s as d, p as m, j as g, I as h, w as y, k as v, C as w, x as _, S as b, T as k, B as $, F as S, M as x, K as O, V as j, i as P, b as I, c as C, r as T, y as A, e as E, P as N, N as U, h as R, t as L, n as M, E as z, z as D, Q as W, Z as V, q as B, A as F, D as q, G as J, Y as H, X as G, H as K, L as Q, O as X} from "./vendor-core.881b5429.js";
const Z = {}
  , Y = function(e, t, n) {
    return t && 0 !== t.length ? Promise.all(t.map((e => {
        if ((e = function(e) {
            return "https://sta.guazistatic.com/guazi-mall-vue3/" + e
        }(e))in Z)
            return;
        Z[e] = !0;
        const t = e.endsWith(".css")
          , n = t ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${e}"]${n}`))
            return;
        const r = document.createElement("link");
        return r.rel = t ? "stylesheet" : "modulepreload",
        t || (r.as = "script",
        r.crossOrigin = ""),
        r.href = e,
        document.head.appendChild(r),
        t ? new Promise(( (t, n) => {
            r.addEventListener("load", t),
            r.addEventListener("error", ( () => n(new Error(`Unable to preload CSS for ${e}`))))
        }
        )) : void 0
    }
    ))).then(( () => e())) : e()
};
var ee = "undefined" != typeof Symbol && Symbol
  , te = function() {
    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
        return !1;
    if ("symbol" == typeof Symbol.iterator)
        return !0;
    var e = {}
      , t = Symbol("test")
      , n = Object(t);
    if ("string" == typeof t)
        return !1;
    if ("[object Symbol]" !== Object.prototype.toString.call(t))
        return !1;
    if ("[object Symbol]" !== Object.prototype.toString.call(n))
        return !1;
    for (t in e[t] = 42,
    e)
        return !1;
    if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
        return !1;
    if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length)
        return !1;
    var r = Object.getOwnPropertySymbols(e);
    if (1 !== r.length || r[0] !== t)
        return !1;
    if (!Object.prototype.propertyIsEnumerable.call(e, t))
        return !1;
    if ("function" == typeof Object.getOwnPropertyDescriptor) {
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (42 !== o.value || !0 !== o.enumerable)
            return !1
    }
    return !0
}
  , ne = {
    foo: {}
}
  , re = Object
  , oe = "Function.prototype.bind called on incompatible "
  , ie = Array.prototype.slice
  , ae = Object.prototype.toString
  , ce = function(e) {
    var t = this;
    if ("function" != typeof t || "[object Function]" !== ae.call(t))
        throw new TypeError(oe + t);
    for (var n, r = ie.call(arguments, 1), o = function() {
        if (this instanceof n) {
            var o = t.apply(this, r.concat(ie.call(arguments)));
            return Object(o) === o ? o : this
        }
        return t.apply(e, r.concat(ie.call(arguments)))
    }, i = Math.max(0, t.length - r.length), a = [], c = 0; c < i; c++)
        a.push("$" + c);
    if (n = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(o),
    t.prototype) {
        var s = function() {};
        s.prototype = t.prototype,
        n.prototype = new s,
        s.prototype = null
    }
    return n
}
  , se = Function.prototype.bind || ce
  , le = se.call(Function.call, Object.prototype.hasOwnProperty)
  , ue = SyntaxError
  , pe = Function
  , fe = TypeError
  , de = function(e) {
    try {
        return pe('"use strict"; return (' + e + ").constructor;")()
    } catch ($a) {}
}
  , me = Object.getOwnPropertyDescriptor;
if (me)
    try {
        me({}, "")
    } catch ($a) {
        me = null
    }
var ge = function() {
    throw new fe
}
  , he = me ? function() {
    try {
        return ge
    } catch (e) {
        try {
            return me(arguments, "callee").get
        } catch (t) {
            return ge
        }
    }
}() : ge
  , ye = "function" == typeof ee && "function" == typeof Symbol && "symbol" == typeof ee("foo") && "symbol" == typeof Symbol("bar") && te()
  , ve = {
    __proto__: ne
}.foo === ne.foo && !({
    __proto__: null
}instanceof re)
  , we = Object.getPrototypeOf || (ve ? function(e) {
    return e.__proto__
}
: null)
  , _e = {}
  , be = "undefined" != typeof Uint8Array && we ? we(Uint8Array) : undefined
  , ke = {
    "%AggregateError%": "undefined" == typeof AggregateError ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": ye && we ? we([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": _e,
    "%AsyncGenerator%": _e,
    "%AsyncGeneratorFunction%": _e,
    "%AsyncIteratorPrototype%": _e,
    "%Atomics%": "undefined" == typeof Atomics ? undefined : Atomics,
    "%BigInt%": "undefined" == typeof BigInt ? undefined : BigInt,
    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? undefined : BigInt64Array,
    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": "undefined" == typeof DataView ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": "undefined" == typeof Float32Array ? undefined : Float32Array,
    "%Float64Array%": "undefined" == typeof Float64Array ? undefined : Float64Array,
    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? undefined : FinalizationRegistry,
    "%Function%": pe,
    "%GeneratorFunction%": _e,
    "%Int8Array%": "undefined" == typeof Int8Array ? undefined : Int8Array,
    "%Int16Array%": "undefined" == typeof Int16Array ? undefined : Int16Array,
    "%Int32Array%": "undefined" == typeof Int32Array ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": ye && we ? we(we([][Symbol.iterator]())) : undefined,
    "%JSON%": "object" == typeof JSON ? JSON : undefined,
    "%Map%": "undefined" == typeof Map ? undefined : Map,
    "%MapIteratorPrototype%": "undefined" != typeof Map && ye && we ? we((new Map)[Symbol.iterator]()) : undefined,
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": "undefined" == typeof Promise ? undefined : Promise,
    "%Proxy%": "undefined" == typeof Proxy ? undefined : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": "undefined" == typeof Reflect ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": "undefined" == typeof Set ? undefined : Set,
    "%SetIteratorPrototype%": "undefined" != typeof Set && ye && we ? we((new Set)[Symbol.iterator]()) : undefined,
    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": ye && we ? we(""[Symbol.iterator]()) : undefined,
    "%Symbol%": ye ? Symbol : undefined,
    "%SyntaxError%": ue,
    "%ThrowTypeError%": he,
    "%TypedArray%": be,
    "%TypeError%": fe,
    "%Uint8Array%": "undefined" == typeof Uint8Array ? undefined : Uint8Array,
    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? undefined : Uint8ClampedArray,
    "%Uint16Array%": "undefined" == typeof Uint16Array ? undefined : Uint16Array,
    "%Uint32Array%": "undefined" == typeof Uint32Array ? undefined : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": "undefined" == typeof WeakMap ? undefined : WeakMap,
    "%WeakRef%": "undefined" == typeof WeakRef ? undefined : WeakRef,
    "%WeakSet%": "undefined" == typeof WeakSet ? undefined : WeakSet
};
if (we)
    try {
        null.error
    } catch ($a) {
        var $e = we(we($a));
        ke["%Error.prototype%"] = $e
    }
var Se = function e(t) {
    var n;
    if ("%AsyncFunction%" === t)
        n = de("async function () {}");
    else if ("%GeneratorFunction%" === t)
        n = de("function* () {}");
    else if ("%AsyncGeneratorFunction%" === t)
        n = de("async function* () {}");
    else if ("%AsyncGenerator%" === t) {
        var r = e("%AsyncGeneratorFunction%");
        r && (n = r.prototype)
    } else if ("%AsyncIteratorPrototype%" === t) {
        var o = e("%AsyncGenerator%");
        o && we && (n = we(o.prototype))
    }
    return ke[t] = n,
    n
}
  , xe = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
}
  , Oe = se
  , je = le
  , Pe = Oe.call(Function.call, Array.prototype.concat)
  , Ie = Oe.call(Function.apply, Array.prototype.splice)
  , Ce = Oe.call(Function.call, String.prototype.replace)
  , Te = Oe.call(Function.call, String.prototype.slice)
  , Ae = Oe.call(Function.call, RegExp.prototype.exec)
  , Ee = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
  , Ne = /\\(\\)?/g
  , Ue = function(e) {
    var t = Te(e, 0, 1)
      , n = Te(e, -1);
    if ("%" === t && "%" !== n)
        throw new ue("invalid intrinsic syntax, expected closing `%`");
    if ("%" === n && "%" !== t)
        throw new ue("invalid intrinsic syntax, expected opening `%`");
    var r = [];
    return Ce(e, Ee, (function(e, t, n, o) {
        r[r.length] = n ? Ce(o, Ne, "$1") : t || e
    }
    )),
    r
}
  , Re = function(e, t) {
    var n, r = e;
    if (je(xe, r) && (r = "%" + (n = xe[r])[0] + "%"),
    je(ke, r)) {
        var o = ke[r];
        if (o === _e && (o = Se(r)),
        void 0 === o && !t)
            throw new fe("intrinsic " + e + " exists, but is not available. Please file an issue!");
        return {
            alias: n,
            name: r,
            value: o
        }
    }
    throw new ue("intrinsic " + e + " does not exist!")
}
  , Le = function(e, t) {
    if ("string" != typeof e || 0 === e.length)
        throw new fe("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof t)
        throw new fe('"allowMissing" argument must be a boolean');
    if (null === Ae(/^%?[^%]*%?$/, e))
        throw new ue("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = Ue(e)
      , r = n.length > 0 ? n[0] : ""
      , o = Re("%" + r + "%", t)
      , i = o.name
      , a = o.value
      , c = !1
      , s = o.alias;
    s && (r = s[0],
    Ie(n, Pe([0, 1], s)));
    for (var l = 1, u = !0; l < n.length; l += 1) {
        var p = n[l]
          , f = Te(p, 0, 1)
          , d = Te(p, -1);
        if (('"' === f || "'" === f || "`" === f || '"' === d || "'" === d || "`" === d) && f !== d)
            throw new ue("property names with quotes must have matching quotes");
        if ("constructor" !== p && u || (c = !0),
        je(ke, i = "%" + (r += "." + p) + "%"))
            a = ke[i];
        else if (null != a) {
            if (!(p in a)) {
                if (!t)
                    throw new fe("base intrinsic for " + e + " exists, but the property is not available.");
                return
            }
            if (me && l + 1 >= n.length) {
                var m = me(a, p);
                a = (u = !!m) && "get"in m && !("originalValue"in m.get) ? m.get : a[p]
            } else
                u = je(a, p),
                a = a[p];
            u && !c && (ke[i] = a)
        }
    }
    return a
}
  , Me = {
    exports: {}
};
!function(e) {
    var t = se
      , n = Le
      , r = n("%Function.prototype.apply%")
      , o = n("%Function.prototype.call%")
      , i = n("%Reflect.apply%", !0) || t.call(o, r)
      , a = n("%Object.getOwnPropertyDescriptor%", !0)
      , c = n("%Object.defineProperty%", !0)
      , s = n("%Math.max%");
    if (c)
        try {
            c({}, "a", {
                value: 1
            })
        } catch ($a) {
            c = null
        }
    e.exports = function(e) {
        var n = i(t, o, arguments);
        if (a && c) {
            var r = a(n, "length");
            r.configurable && c(n, "length", {
                value: 1 + s(0, e.length - (arguments.length - 1))
            })
        }
        return n
    }
    ;
    var l = function() {
        return i(t, r, arguments)
    };
    c ? c(e.exports, "apply", {
        value: l
    }) : e.exports.apply = l
}(Me);
var ze = Le
  , De = Me.exports
  , We = De(ze("String.prototype.indexOf"));
const Ve = n(Object.freeze(Object.defineProperty({
    __proto__: null,
    default: {}
}, Symbol.toStringTag, {
    value: "Module"
})));
var Be = "function" == typeof Map && Map.prototype
  , Fe = Object.getOwnPropertyDescriptor && Be ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
  , qe = Be && Fe && "function" == typeof Fe.get ? Fe.get : null
  , Je = Be && Map.prototype.forEach
  , He = "function" == typeof Set && Set.prototype
  , Ge = Object.getOwnPropertyDescriptor && He ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
  , Ke = He && Ge && "function" == typeof Ge.get ? Ge.get : null
  , Qe = He && Set.prototype.forEach
  , Xe = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null
  , Ze = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null
  , Ye = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null
  , et = Boolean.prototype.valueOf
  , nt = Object.prototype.toString
  , rt = Function.prototype.toString
  , ot = String.prototype.match
  , it = String.prototype.slice
  , at = String.prototype.replace
  , ct = String.prototype.toUpperCase
  , st = String.prototype.toLowerCase
  , lt = RegExp.prototype.test
  , ut = Array.prototype.concat
  , pt = Array.prototype.join
  , ft = Array.prototype.slice
  , dt = Math.floor
  , mt = "function" == typeof BigInt ? BigInt.prototype.valueOf : null
  , gt = Object.getOwnPropertySymbols
  , ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null
  , yt = "function" == typeof Symbol && "object" == typeof Symbol.iterator
  , vt = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === yt || "symbol") ? Symbol.toStringTag : null
  , wt = Object.prototype.propertyIsEnumerable
  , _t = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
    return e.__proto__
}
: null);
function bt(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || lt.call(/e/, t))
        return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
        var r = e < 0 ? -dt(-e) : dt(e);
        if (r !== e) {
            var o = String(r)
              , i = it.call(t, o.length + 1);
            return at.call(o, n, "$&_") + "." + at.call(at.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return at.call(t, n, "$&_")
}
var kt = Ve
  , $t = kt.custom
  , St = It($t) ? $t : null;
function xt(e, t, n) {
    var r = "double" === (n.quoteStyle || t) ? '"' : "'";
    return r + e + r
}
function Ot(e) {
    return at.call(String(e), /"/g, "&quot;")
}
function jt(e) {
    return !("[object Array]" !== At(e) || vt && "object" == typeof e && vt in e)
}
function Pt(e) {
    return !("[object RegExp]" !== At(e) || vt && "object" == typeof e && vt in e)
}
function It(e) {
    if (yt)
        return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e)
        return !0;
    if (!e || "object" != typeof e || !ht)
        return !1;
    try {
        return ht.call(e),
        !0
    } catch ($a) {}
    return !1
}
var Ct = Object.prototype.hasOwnProperty || function(e) {
    return e in this
}
;
function Tt(e, t) {
    return Ct.call(e, t)
}
function At(e) {
    return nt.call(e)
}
function Et(e, t) {
    if (e.indexOf)
        return e.indexOf(t);
    for (var n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
            return n;
    return -1
}
function Nt(e, t) {
    if (e.length > t.maxStringLength) {
        var n = e.length - t.maxStringLength
          , r = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Nt(it.call(e, 0, t.maxStringLength), t) + r
    }
    return xt(at.call(at.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ut), "single", t)
}
function Ut(e) {
    var t = e.charCodeAt(0)
      , n = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[t];
    return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + ct.call(t.toString(16))
}
function Rt(e) {
    return "Object(" + e + ")"
}
function Lt(e) {
    return e + " { ? }"
}
function Mt(e, t, n, r) {
    return e + " (" + t + ") {" + (r ? zt(n, r) : pt.call(n, ", ")) + "}"
}
function zt(e, t) {
    if (0 === e.length)
        return "";
    var n = "\n" + t.prev + t.base;
    return n + pt.call(e, "," + n) + "\n" + t.prev
}
function Dt(e, t) {
    var n = jt(e)
      , r = [];
    if (n) {
        r.length = e.length;
        for (var o = 0; o < e.length; o++)
            r[o] = Tt(e, o) ? t(e[o], e) : ""
    }
    var i, a = "function" == typeof gt ? gt(e) : [];
    if (yt) {
        i = {};
        for (var c = 0; c < a.length; c++)
            i["$" + a[c]] = a[c]
    }
    for (var s in e)
        Tt(e, s) && (n && String(Number(s)) === s && s < e.length || yt && i["$" + s]instanceof Symbol || (lt.call(/[^\w$]/, s) ? r.push(t(s, e) + ": " + t(e[s], e)) : r.push(s + ": " + t(e[s], e))));
    if ("function" == typeof gt)
        for (var l = 0; l < a.length; l++)
            wt.call(e, a[l]) && r.push("[" + t(a[l]) + "]: " + t(e[a[l]], e));
    return r
}
var Wt = Le
  , Vt = function(e, t) {
    var n = ze(e, !!t);
    return "function" == typeof n && We(e, ".prototype.") > -1 ? De(n) : n
}
  , Bt = function e(t, n, r, o) {
    var i = n || {};
    if (Tt(i, "quoteStyle") && "single" !== i.quoteStyle && "double" !== i.quoteStyle)
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Tt(i, "maxStringLength") && ("number" == typeof i.maxStringLength ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : null !== i.maxStringLength))
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var a = !Tt(i, "customInspect") || i.customInspect;
    if ("boolean" != typeof a && "symbol" !== a)
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Tt(i, "indent") && null !== i.indent && "\t" !== i.indent && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Tt(i, "numericSeparator") && "boolean" != typeof i.numericSeparator)
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var c = i.numericSeparator;
    if (void 0 === t)
        return "undefined";
    if (null === t)
        return "null";
    if ("boolean" == typeof t)
        return t ? "true" : "false";
    if ("string" == typeof t)
        return Nt(t, i);
    if ("number" == typeof t) {
        if (0 === t)
            return 1 / 0 / t > 0 ? "0" : "-0";
        var s = String(t);
        return c ? bt(t, s) : s
    }
    if ("bigint" == typeof t) {
        var l = String(t) + "n";
        return c ? bt(t, l) : l
    }
    var u = void 0 === i.depth ? 5 : i.depth;
    if (void 0 === r && (r = 0),
    r >= u && u > 0 && "object" == typeof t)
        return jt(t) ? "[Array]" : "[Object]";
    var p = function(e, t) {
        var n;
        if ("\t" === e.indent)
            n = "\t";
        else {
            if (!("number" == typeof e.indent && e.indent > 0))
                return null;
            n = pt.call(Array(e.indent + 1), " ")
        }
        return {
            base: n,
            prev: pt.call(Array(t + 1), n)
        }
    }(i, r);
    if (void 0 === o)
        o = [];
    else if (Et(o, t) >= 0)
        return "[Circular]";
    function f(t, n, a) {
        if (n && (o = ft.call(o)).push(n),
        a) {
            var c = {
                depth: i.depth
            };
            return Tt(i, "quoteStyle") && (c.quoteStyle = i.quoteStyle),
            e(t, c, r + 1, o)
        }
        return e(t, i, r + 1, o)
    }
    if ("function" == typeof t && !Pt(t)) {
        var d = function(e) {
            if (e.name)
                return e.name;
            var t = ot.call(rt.call(e), /^function\s*([\w$]+)/);
            if (t)
                return t[1];
            return null
        }(t)
          , m = Dt(t, f);
        return "[Function" + (d ? ": " + d : " (anonymous)") + "]" + (m.length > 0 ? " { " + pt.call(m, ", ") + " }" : "")
    }
    if (It(t)) {
        var g = yt ? at.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : ht.call(t);
        return "object" != typeof t || yt ? g : Rt(g)
    }
    if (function(e) {
        if (!e || "object" != typeof e)
            return !1;
        if ("undefined" != typeof HTMLElement && e instanceof HTMLElement)
            return !0;
        return "string" == typeof e.nodeName && "function" == typeof e.getAttribute
    }(t)) {
        for (var h = "<" + st.call(String(t.nodeName)), y = t.attributes || [], v = 0; v < y.length; v++)
            h += " " + y[v].name + "=" + xt(Ot(y[v].value), "double", i);
        return h += ">",
        t.childNodes && t.childNodes.length && (h += "..."),
        h += "</" + st.call(String(t.nodeName)) + ">"
    }
    if (jt(t)) {
        if (0 === t.length)
            return "[]";
        var w = Dt(t, f);
        return p && !function(e) {
            for (var t = 0; t < e.length; t++)
                if (Et(e[t], "\n") >= 0)
                    return !1;
            return !0
        }(w) ? "[" + zt(w, p) + "]" : "[ " + pt.call(w, ", ") + " ]"
    }
    if (function(e) {
        return !("[object Error]" !== At(e) || vt && "object" == typeof e && vt in e)
    }(t)) {
        var _ = Dt(t, f);
        return "cause"in Error.prototype || !("cause"in t) || wt.call(t, "cause") ? 0 === _.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + pt.call(_, ", ") + " }" : "{ [" + String(t) + "] " + pt.call(ut.call("[cause]: " + f(t.cause), _), ", ") + " }"
    }
    if ("object" == typeof t && a) {
        if (St && "function" == typeof t[St] && kt)
            return kt(t, {
                depth: u - r
            });
        if ("symbol" !== a && "function" == typeof t.inspect)
            return t.inspect()
    }
    if (function(e) {
        if (!qe || !e || "object" != typeof e)
            return !1;
        try {
            qe.call(e);
            try {
                Ke.call(e)
            } catch (h) {
                return !0
            }
            return e instanceof Map
        } catch ($a) {}
        return !1
    }(t)) {
        var b = [];
        return Je && Je.call(t, (function(e, n) {
            b.push(f(n, t, !0) + " => " + f(e, t))
        }
        )),
        Mt("Map", qe.call(t), b, p)
    }
    if (function(e) {
        if (!Ke || !e || "object" != typeof e)
            return !1;
        try {
            Ke.call(e);
            try {
                qe.call(e)
            } catch (t) {
                return !0
            }
            return e instanceof Set
        } catch ($a) {}
        return !1
    }(t)) {
        var k = [];
        return Qe && Qe.call(t, (function(e) {
            k.push(f(e, t))
        }
        )),
        Mt("Set", Ke.call(t), k, p)
    }
    if (function(e) {
        if (!Xe || !e || "object" != typeof e)
            return !1;
        try {
            Xe.call(e, Xe);
            try {
                Ze.call(e, Ze)
            } catch (h) {
                return !0
            }
            return e instanceof WeakMap
        } catch ($a) {}
        return !1
    }(t))
        return Lt("WeakMap");
    if (function(e) {
        if (!Ze || !e || "object" != typeof e)
            return !1;
        try {
            Ze.call(e, Ze);
            try {
                Xe.call(e, Xe)
            } catch (h) {
                return !0
            }
            return e instanceof WeakSet
        } catch ($a) {}
        return !1
    }(t))
        return Lt("WeakSet");
    if (function(e) {
        if (!Ye || !e || "object" != typeof e)
            return !1;
        try {
            return Ye.call(e),
            !0
        } catch ($a) {}
        return !1
    }(t))
        return Lt("WeakRef");
    if (function(e) {
        return !("[object Number]" !== At(e) || vt && "object" == typeof e && vt in e)
    }(t))
        return Rt(f(Number(t)));
    if (function(e) {
        if (!e || "object" != typeof e || !mt)
            return !1;
        try {
            return mt.call(e),
            !0
        } catch ($a) {}
        return !1
    }(t))
        return Rt(f(mt.call(t)));
    if (function(e) {
        return !("[object Boolean]" !== At(e) || vt && "object" == typeof e && vt in e)
    }(t))
        return Rt(et.call(t));
    if (function(e) {
        return !("[object String]" !== At(e) || vt && "object" == typeof e && vt in e)
    }(t))
        return Rt(f(String(t)));
    if (!function(e) {
        return !("[object Date]" !== At(e) || vt && "object" == typeof e && vt in e)
    }(t) && !Pt(t)) {
        var $ = Dt(t, f)
          , S = _t ? _t(t) === Object.prototype : t instanceof Object || t.constructor === Object
          , x = t instanceof Object ? "" : "null prototype"
          , O = !S && vt && Object(t) === t && vt in t ? it.call(At(t), 8, -1) : x ? "Object" : ""
          , j = (S || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (O || x ? "[" + pt.call(ut.call([], O || [], x || []), ": ") + "] " : "");
        return 0 === $.length ? j + "{}" : p ? j + "{" + zt($, p) + "}" : j + "{ " + pt.call($, ", ") + " }"
    }
    return String(t)
}
  , Ft = Wt("%TypeError%")
  , qt = Wt("%WeakMap%", !0)
  , Jt = Wt("%Map%", !0)
  , Ht = Vt("WeakMap.prototype.get", !0)
  , Gt = Vt("WeakMap.prototype.set", !0)
  , Kt = Vt("WeakMap.prototype.has", !0)
  , Qt = Vt("Map.prototype.get", !0)
  , Xt = Vt("Map.prototype.set", !0)
  , Zt = Vt("Map.prototype.has", !0)
  , Yt = function(e, t) {
    for (var n, r = e; null !== (n = r.next); r = n)
        if (n.key === t)
            return r.next = n.next,
            n.next = e.next,
            e.next = n,
            n
}
  , en = String.prototype.replace
  , tn = /%20/g
  , nn = "RFC3986"
  , rn = {
    default: nn,
    formatters: {
        RFC1738: function(e) {
            return en.call(e, tn, "+")
        },
        RFC3986: function(e) {
            return String(e)
        }
    },
    RFC1738: "RFC1738",
    RFC3986: nn
}
  , on = rn
  , an = Object.prototype.hasOwnProperty
  , cn = Array.isArray
  , sn = function() {
    for (var e = [], t = 0; t < 256; ++t)
        e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e
}()
  , ln = function(e, t) {
    for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r)
        void 0 !== e[r] && (n[r] = e[r]);
    return n
}
  , un = {
    arrayToObject: ln,
    assign: function(e, t) {
        return Object.keys(t).reduce((function(e, n) {
            return e[n] = t[n],
            e
        }
        ), e)
    },
    combine: function(e, t) {
        return [].concat(e, t)
    },
    compact: function(e) {
        for (var t = [{
            obj: {
                o: e
            },
            prop: "o"
        }], n = [], r = 0; r < t.length; ++r)
            for (var o = t[r], i = o.obj[o.prop], a = Object.keys(i), c = 0; c < a.length; ++c) {
                var s = a[c]
                  , l = i[s];
                "object" == typeof l && null !== l && -1 === n.indexOf(l) && (t.push({
                    obj: i,
                    prop: s
                }),
                n.push(l))
            }
        return function(e) {
            for (; e.length > 1; ) {
                var t = e.pop()
                  , n = t.obj[t.prop];
                if (cn(n)) {
                    for (var r = [], o = 0; o < n.length; ++o)
                        void 0 !== n[o] && r.push(n[o]);
                    t.obj[t.prop] = r
                }
            }
        }(t),
        e
    },
    decode: function(e, t, n) {
        var r = e.replace(/\+/g, " ");
        if ("iso-8859-1" === n)
            return r.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(r)
        } catch ($a) {
            return r
        }
    },
    encode: function(e, t, n, r, o) {
        if (0 === e.length)
            return e;
        var i = e;
        if ("symbol" == typeof e ? i = Symbol.prototype.toString.call(e) : "string" != typeof e && (i = String(e)),
        "iso-8859-1" === n)
            return escape(i).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
            }
            ));
        for (var a = "", c = 0; c < i.length; ++c) {
            var s = i.charCodeAt(c);
            45 === s || 46 === s || 95 === s || 126 === s || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 || o === on.RFC1738 && (40 === s || 41 === s) ? a += i.charAt(c) : s < 128 ? a += sn[s] : s < 2048 ? a += sn[192 | s >> 6] + sn[128 | 63 & s] : s < 55296 || s >= 57344 ? a += sn[224 | s >> 12] + sn[128 | s >> 6 & 63] + sn[128 | 63 & s] : (c += 1,
            s = 65536 + ((1023 & s) << 10 | 1023 & i.charCodeAt(c)),
            a += sn[240 | s >> 18] + sn[128 | s >> 12 & 63] + sn[128 | s >> 6 & 63] + sn[128 | 63 & s])
        }
        return a
    },
    isBuffer: function(e) {
        return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    isRegExp: function(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e)
    },
    maybeMap: function(e, t) {
        if (cn(e)) {
            for (var n = [], r = 0; r < e.length; r += 1)
                n.push(t(e[r]));
            return n
        }
        return t(e)
    },
    merge: function e(t, n, r) {
        if (!n)
            return t;
        if ("object" != typeof n) {
            if (cn(t))
                t.push(n);
            else {
                if (!t || "object" != typeof t)
                    return [t, n];
                (r && (r.plainObjects || r.allowPrototypes) || !an.call(Object.prototype, n)) && (t[n] = !0)
            }
            return t
        }
        if (!t || "object" != typeof t)
            return [t].concat(n);
        var o = t;
        return cn(t) && !cn(n) && (o = ln(t, r)),
        cn(t) && cn(n) ? (n.forEach((function(n, o) {
            if (an.call(t, o)) {
                var i = t[o];
                i && "object" == typeof i && n && "object" == typeof n ? t[o] = e(i, n, r) : t.push(n)
            } else
                t[o] = n
        }
        )),
        t) : Object.keys(n).reduce((function(t, o) {
            var i = n[o];
            return an.call(t, o) ? t[o] = e(t[o], i, r) : t[o] = i,
            t
        }
        ), o)
    }
}
  , pn = function() {
    var e, t, n, r = {
        assert: function(e) {
            if (!r.has(e))
                throw new Ft("Side channel does not contain " + Bt(e))
        },
        get: function(r) {
            if (qt && r && ("object" == typeof r || "function" == typeof r)) {
                if (e)
                    return Ht(e, r)
            } else if (Jt) {
                if (t)
                    return Qt(t, r)
            } else if (n)
                return function(e, t) {
                    var n = Yt(e, t);
                    return n && n.value
                }(n, r)
        },
        has: function(r) {
            if (qt && r && ("object" == typeof r || "function" == typeof r)) {
                if (e)
                    return Kt(e, r)
            } else if (Jt) {
                if (t)
                    return Zt(t, r)
            } else if (n)
                return function(e, t) {
                    return !!Yt(e, t)
                }(n, r);
            return !1
        },
        set: function(r, o) {
            qt && r && ("object" == typeof r || "function" == typeof r) ? (e || (e = new qt),
            Gt(e, r, o)) : Jt ? (t || (t = new Jt),
            Xt(t, r, o)) : (n || (n = {
                key: {},
                next: null
            }),
            function(e, t, n) {
                var r = Yt(e, t);
                r ? r.value = n : e.next = {
                    key: t,
                    next: e.next,
                    value: n
                }
            }(n, r, o))
        }
    };
    return r
}
  , fn = un
  , dn = rn
  , mn = Object.prototype.hasOwnProperty
  , gn = {
    brackets: function(e) {
        return e + "[]"
    },
    comma: "comma",
    indices: function(e, t) {
        return e + "[" + t + "]"
    },
    repeat: function(e) {
        return e
    }
}
  , hn = Array.isArray
  , yn = Array.prototype.push
  , vn = function(e, t) {
    yn.apply(e, hn(t) ? t : [t])
}
  , wn = Date.prototype.toISOString
  , _n = dn.default
  , bn = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: fn.encode,
    encodeValuesOnly: !1,
    format: _n,
    formatter: dn.formatters[_n],
    indices: !1,
    serializeDate: function(e) {
        return wn.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1
}
  , kn = {}
  , $n = function e(t, n, r, o, i, a, c, s, l, u, p, f, d, m, g, h) {
    for (var y, v = t, w = h, _ = 0, b = !1; void 0 !== (w = w.get(kn)) && !b; ) {
        var k = w.get(t);
        if (_ += 1,
        void 0 !== k) {
            if (k === _)
                throw new RangeError("Cyclic object value");
            b = !0
        }
        void 0 === w.get(kn) && (_ = 0)
    }
    if ("function" == typeof s ? v = s(n, v) : v instanceof Date ? v = p(v) : "comma" === r && hn(v) && (v = fn.maybeMap(v, (function(e) {
        return e instanceof Date ? p(e) : e
    }
    ))),
    null === v) {
        if (i)
            return c && !m ? c(n, bn.encoder, g, "key", f) : n;
        v = ""
    }
    if ("string" == typeof (y = v) || "number" == typeof y || "boolean" == typeof y || "symbol" == typeof y || "bigint" == typeof y || fn.isBuffer(v))
        return c ? [d(m ? n : c(n, bn.encoder, g, "key", f)) + "=" + d(c(v, bn.encoder, g, "value", f))] : [d(n) + "=" + d(String(v))];
    var $, S = [];
    if (void 0 === v)
        return S;
    if ("comma" === r && hn(v))
        m && c && (v = fn.maybeMap(v, c)),
        $ = [{
            value: v.length > 0 ? v.join(",") || null : void 0
        }];
    else if (hn(s))
        $ = s;
    else {
        var x = Object.keys(v);
        $ = l ? x.sort(l) : x
    }
    for (var O = o && hn(v) && 1 === v.length ? n + "[]" : n, j = 0; j < $.length; ++j) {
        var P = $[j]
          , I = "object" == typeof P && void 0 !== P.value ? P.value : v[P];
        if (!a || null !== I) {
            var C = hn(v) ? "function" == typeof r ? r(O, P) : O : O + (u ? "." + P : "[" + P + "]");
            h.set(t, _);
            var T = pn();
            T.set(kn, h),
            vn(S, e(I, C, r, o, i, a, "comma" === r && m && hn(v) ? null : c, s, l, u, p, f, d, m, g, T))
        }
    }
    return S
}
  , Sn = un
  , xn = Object.prototype.hasOwnProperty
  , On = Array.isArray
  , jn = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: Sn.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
}
  , Pn = function(e) {
    return e.replace(/&#(\d+);/g, (function(e, t) {
        return String.fromCharCode(parseInt(t, 10))
    }
    ))
}
  , In = function(e, t) {
    return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
}
  , Cn = function(e, t, n, r) {
    if (e) {
        var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
          , i = /(\[[^[\]]*])/g
          , a = n.depth > 0 && /(\[[^[\]]*])/.exec(o)
          , c = a ? o.slice(0, a.index) : o
          , s = [];
        if (c) {
            if (!n.plainObjects && xn.call(Object.prototype, c) && !n.allowPrototypes)
                return;
            s.push(c)
        }
        for (var l = 0; n.depth > 0 && null !== (a = i.exec(o)) && l < n.depth; ) {
            if (l += 1,
            !n.plainObjects && xn.call(Object.prototype, a[1].slice(1, -1)) && !n.allowPrototypes)
                return;
            s.push(a[1])
        }
        return a && s.push("[" + o.slice(a.index) + "]"),
        function(e, t, n, r) {
            for (var o = r ? t : In(t, n), i = e.length - 1; i >= 0; --i) {
                var a, c = e[i];
                if ("[]" === c && n.parseArrays)
                    a = [].concat(o);
                else {
                    a = n.plainObjects ? Object.create(null) : {};
                    var s = "[" === c.charAt(0) && "]" === c.charAt(c.length - 1) ? c.slice(1, -1) : c
                      , l = parseInt(s, 10);
                    n.parseArrays || "" !== s ? !isNaN(l) && c !== s && String(l) === s && l >= 0 && n.parseArrays && l <= n.arrayLimit ? (a = [])[l] = o : "__proto__" !== s && (a[s] = o) : a = {
                        0: o
                    }
                }
                o = a
            }
            return o
        }(s, t, n, r)
    }
}
  , Tn = function(e, t) {
    var n, r = e, o = function(e) {
        if (!e)
            return bn;
        if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
            throw new TypeError("Encoder has to be a function.");
        var t = e.charset || bn.charset;
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = dn.default;
        if (void 0 !== e.format) {
            if (!mn.call(dn.formatters, e.format))
                throw new TypeError("Unknown format option provided.");
            n = e.format
        }
        var r = dn.formatters[n]
          , o = bn.filter;
        return ("function" == typeof e.filter || hn(e.filter)) && (o = e.filter),
        {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : bn.addQueryPrefix,
            allowDots: void 0 === e.allowDots ? bn.allowDots : !!e.allowDots,
            charset: t,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : bn.charsetSentinel,
            delimiter: void 0 === e.delimiter ? bn.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : bn.encode,
            encoder: "function" == typeof e.encoder ? e.encoder : bn.encoder,
            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : bn.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: r,
            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : bn.serializeDate,
            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : bn.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : bn.strictNullHandling
        }
    }(t);
    "function" == typeof o.filter ? r = (0,
    o.filter)("", r) : hn(o.filter) && (n = o.filter);
    var i, a = [];
    if ("object" != typeof r || null === r)
        return "";
    i = t && t.arrayFormat in gn ? t.arrayFormat : t && "indices"in t ? t.indices ? "indices" : "repeat" : "indices";
    var c = gn[i];
    if (t && "commaRoundTrip"in t && "boolean" != typeof t.commaRoundTrip)
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var s = "comma" === c && t && t.commaRoundTrip;
    n || (n = Object.keys(r)),
    o.sort && n.sort(o.sort);
    for (var l = pn(), u = 0; u < n.length; ++u) {
        var p = n[u];
        o.skipNulls && null === r[p] || vn(a, $n(r[p], p, c, s, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, l))
    }
    var f = a.join(o.delimiter)
      , d = !0 === o.addQueryPrefix ? "?" : "";
    return o.charsetSentinel && ("iso-8859-1" === o.charset ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"),
    f.length > 0 ? d + f : ""
}
  , An = function(e, t) {
    var n = function(e) {
        if (!e)
            return jn;
        if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder)
            throw new TypeError("Decoder has to be a function.");
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var t = void 0 === e.charset ? jn.charset : e.charset;
        return {
            allowDots: void 0 === e.allowDots ? jn.allowDots : !!e.allowDots,
            allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : jn.allowPrototypes,
            allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : jn.allowSparse,
            arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : jn.arrayLimit,
            charset: t,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : jn.charsetSentinel,
            comma: "boolean" == typeof e.comma ? e.comma : jn.comma,
            decoder: "function" == typeof e.decoder ? e.decoder : jn.decoder,
            delimiter: "string" == typeof e.delimiter || Sn.isRegExp(e.delimiter) ? e.delimiter : jn.delimiter,
            depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : jn.depth,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : jn.interpretNumericEntities,
            parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : jn.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : jn.plainObjects,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : jn.strictNullHandling
        }
    }(t);
    if ("" === e || null == e)
        return n.plainObjects ? Object.create(null) : {};
    for (var r = "string" == typeof e ? function(e, t) {
        var n, r = {
            __proto__: null
        }, o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, a = o.split(t.delimiter, i), c = -1, s = t.charset;
        if (t.charsetSentinel)
            for (n = 0; n < a.length; ++n)
                0 === a[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === a[n] ? s = "utf-8" : "utf8=%26%2310003%3B" === a[n] && (s = "iso-8859-1"),
                c = n,
                n = a.length);
        for (n = 0; n < a.length; ++n)
            if (n !== c) {
                var l, u, p = a[n], f = p.indexOf("]="), d = -1 === f ? p.indexOf("=") : f + 1;
                -1 === d ? (l = t.decoder(p, jn.decoder, s, "key"),
                u = t.strictNullHandling ? null : "") : (l = t.decoder(p.slice(0, d), jn.decoder, s, "key"),
                u = Sn.maybeMap(In(p.slice(d + 1), t), (function(e) {
                    return t.decoder(e, jn.decoder, s, "value")
                }
                ))),
                u && t.interpretNumericEntities && "iso-8859-1" === s && (u = Pn(u)),
                p.indexOf("[]=") > -1 && (u = On(u) ? [u] : u),
                xn.call(r, l) ? r[l] = Sn.combine(r[l], u) : r[l] = u
            }
        return r
    }(e, n) : e, o = n.plainObjects ? Object.create(null) : {}, i = Object.keys(r), a = 0; a < i.length; ++a) {
        var c = i[a]
          , s = Cn(c, r[c], n, "string" == typeof e);
        o = Sn.merge(o, s, n)
    }
    return !0 === n.allowSparse ? o : Sn.compact(o)
}
  , En = {
    formats: rn,
    parse: An,
    stringify: Tn
}
  , Nn = function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 0)
}([function(e, t, n) {
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , o = n(1);
    e.exports = function(t, n) {
        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          , a = "object" === ("undefined" == typeof document ? "undefined" : r(document)) && "string" == typeof document.cookie
          , c = "object" === (void 0 === t ? "undefined" : r(t)) && "object" === (void 0 === n ? "undefined" : r(n)) && void 0 !== e
          , s = !a && !c || a && c
          , l = function(e) {
            if (c) {
                var r = t.headers.cookie || "";
                return e && (r = (r = n.getHeaders())["set-cookie"] ? r["set-cookie"].map((function(e) {
                    return e.split(";")[0]
                }
                )).join(";") : ""),
                r
            }
            if (a)
                return document.cookie || ""
        }
          , u = function() {
            var e = n.getHeader("Set-Cookie");
            return (e = "string" == typeof e ? [e] : e) || []
        }
          , p = function(e) {
            return n.setHeader("Set-Cookie", e)
        }
          , f = function(e, t) {
            if (!t)
                return e;
            try {
                return JSON.parse(e)
            } catch (n) {
                return e
            }
        }
          , d = {
            parseJSON: i,
            set: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    path: "/"
                };
                if (!s)
                    if (t = "object" === (void 0 === t ? "undefined" : r(t)) ? JSON.stringify(t) : t,
                    c) {
                        var i = u();
                        i.push(o.serialize(e, t, n)),
                        p(i)
                    } else
                        document.cookie = o.serialize(e, t, n)
            },
            setAll: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                s || Array.isArray(e) && e.forEach((function(e) {
                    var t = e.name
                      , n = void 0 === t ? "" : t
                      , r = e.value
                      , o = void 0 === r ? "" : r
                      , i = e.opts
                      , a = void 0 === i ? {
                        path: "/"
                    } : i;
                    d.set(n, o, a)
                }
                ))
            },
            get: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    fromRes: !1,
                    parseJSON: d.parseJSON
                };
                if (s)
                    return "";
                var n = o.parse(l(t.fromRes))
                  , r = n[e];
                return f(r, t.parseJSON)
            },
            getAll: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    fromRes: !1,
                    parseJSON: d.parseJSON
                };
                if (s)
                    return {};
                var t = o.parse(l(e.fromRes));
                for (var n in t)
                    t[n] = f(t[n], e.parseJSON);
                return t
            },
            remove: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    path: "/"
                };
                s || (t.expires = new Date(0),
                d.set(e, "", t))
            },
            removeAll: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    path: "/"
                };
                if (!s) {
                    var t = o.parse(l());
                    for (var n in t)
                        d.remove(n, e)
                }
            },
            nodeCookie: o
        };
        return d
    }
}
, function(e, t, n) {
    function r(e, t) {
        try {
            return t(e)
        } catch (n) {
            return e
        }
    }
    /*!
  * cookie
  * Copyright(c) 2012-2014 Roman Shtylman
  * Copyright(c) 2015 Douglas Christopher Wilson
  * MIT Licensed
  */
    t.parse = function(e, t) {
        if ("string" != typeof e)
            throw new TypeError("argument str must be a string");
        for (var n = {}, i = t || {}, c = e.split(a), s = i.decode || o, l = 0; l < c.length; l++) {
            var u = c[l]
              , p = u.indexOf("=");
            if (!(p < 0)) {
                var f = u.substr(0, p).trim()
                  , d = u.substr(++p, u.length).trim();
                '"' == d[0] && (d = d.slice(1, -1)),
                null == n[f] && (n[f] = r(d, s))
            }
        }
        return n
    }
    ,
    t.serialize = function(e, t, n) {
        var r = n || {}
          , o = r.encode || i;
        if ("function" != typeof o)
            throw new TypeError("option encode is invalid");
        if (!c.test(e))
            throw new TypeError("argument name is invalid");
        var a = o(t);
        if (a && !c.test(a))
            throw new TypeError("argument val is invalid");
        var s = e + "=" + a;
        if (null != r.maxAge) {
            var l = r.maxAge - 0;
            if (isNaN(l))
                throw new Error("maxAge should be a Number");
            s += "; Max-Age=" + Math.floor(l)
        }
        if (r.domain) {
            if (!c.test(r.domain))
                throw new TypeError("option domain is invalid");
            s += "; Domain=" + r.domain
        }
        if (r.path) {
            if (!c.test(r.path))
                throw new TypeError("option path is invalid");
            s += "; Path=" + r.path
        }
        if (r.expires) {
            if ("function" != typeof r.expires.toUTCString)
                throw new TypeError("option expires is invalid");
            s += "; Expires=" + r.expires.toUTCString()
        }
        if (r.httpOnly && (s += "; HttpOnly"),
        r.secure && (s += "; Secure"),
        r.sameSite)
            switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
            case !0:
                s += "; SameSite=Strict";
                break;
            case "lax":
                s += "; SameSite=Lax";
                break;
            case "strict":
                s += "; SameSite=Strict";
                break;
            case "none":
                s += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid")
            }
        return s
    }
    ;
    var o = decodeURIComponent
      , i = encodeURIComponent
      , a = /; */
      , c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
}
])
  , Un = "wxMiniprogram"
  , Rn = "wxWebview"
  , Ln = "ksMiniprogram"
  , Mn = "ksWebview"
  , zn = "bdMiniprogram"
  , Dn = "bdWebview"
  , Wn = "ttMiniprogram"
  , Vn = "ttWebview"
  , Bn = "h5";
function Fn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function qn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Fn(Object(n), !0).forEach((function(t) {
            Hn(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function Jn(e) {
    return (Jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Hn(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Gn(e, t) {
    return function(e) {
        if (Array.isArray(e))
            return e
    }(e) || function(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == n)
            return;
        var r, o, i = [], a = !0, c = !1;
        try {
            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
            !t || i.length !== t); a = !0)
                ;
        } catch (s) {
            c = !0,
            o = s
        } finally {
            try {
                a || null == n.return || n.return()
            } finally {
                if (c)
                    throw o
            }
        }
        return i
    }(e, t) || function(e, t) {
        if (!e)
            return;
        if ("string" == typeof e)
            return Kn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n)
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return Kn(e, t)
    }(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function Kn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Qn(e) {
    var t = e;
    return "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) || t || (t = window.navigator.userAgent),
    !!t && (!(!/miniProgram/.test(t) || !/KUAISHOU|NEBULA|KmaSimulator/.test(t)) || !!/快手开发者工具/.test(t))
}
function Xn() {
    return "object" === ("undefined" == typeof tt ? "undefined" : Jn(tt)) && "function" == typeof tt.getEnvInfoSync
}
function Zn(e) {
    var t = e;
    return "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) || t || (t = window.navigator.userAgent),
    !!t && (/miniprogram/i.test(t) && !/KUAISHOU|NEBULA|KmaSimulator/i.test(t))
}
function Yn(e) {
    var t = e;
    return "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) || t || (t = window.navigator.userAgent),
    !!t && t.toLowerCase().includes("toutiaomicroapp")
}
function er(e) {
    if ("object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) && "object" === ("undefined" == typeof ks ? "undefined" : Jn(ks)))
        return Ln;
    if (Qn(e))
        return Mn;
    if (Xn())
        return Wn;
    if (!Xn() && "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) && "object" === ("undefined" == typeof wx ? "undefined" : Jn(wx)))
        return Un;
    if (Zn(e))
        return Rn;
    if ("object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) && "object" === ("undefined" == typeof swan ? "undefined" : Jn(swan)))
        return zn;
    var t = function(e) {
        var t = e;
        return "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) || t || (t = window.navigator.userAgent),
        !!t && /swan\//.test(t)
    }(e);
    return t ? Dn : Yn(e) ? Vn : Bn
}
function tr(e) {
    var t = e;
    return "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) || t || (t = window.navigator.userAgent),
    !!t && !!(/miniprogram/i.test(t) || /swan\//.test(t) || /toutiaomicroapp/i.test(t))
}
var nr = function(e) {
    return !!e && /^http/.test(e)
}
  , rr = function(e) {
    return nr(e) && !/^https?:\/\//.test(e)
};
function or(e) {
    var t = window.location.href.lastIndexOf("?")
      , n = {}
      , r = window.location.href.slice(t + 1);
    if (r && r.length > 0) {
        var o = r.split("&");
        o && o.forEach((function(e) {
            var t = Gn(e.split("="), 2)
              , r = t[0]
              , o = t[1];
            n[r] = o
        }
        ))
    }
    return e && n[e] || ""
}
function ir(e, t, n) {
    if (n)
        try {
            var r = document.querySelectorAll('script[src="'.concat(e, '"]'));
            if (r.length)
                return void (r[0] && r.onload ? r[0].addEventListener("load", t) : t())
        } catch (i) {
            console.warn("dynamicLoadJs error --\x3e", i)
        }
    var o = document.createElement("script");
    if (o.type = "text/javascript",
    o.src = e,
    "function" == typeof t) {
        o.onload = function() {
            o.readyState && "loaded" !== o.readyState && "complete" !== o.readyState || (console.log(e, "加载成功"),
            t(),
            o.onload = null)
        }
    }
    document.body.appendChild(o)
}
var ar = {
    h5: function(e, t) {
        "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) && console.warn("h5 env error");
        try {
            localStorage.setItem(e, t)
        } catch ($a) {
            console.warn("h5 setStorageSync error", $a)
        }
    },
    wxMiniprogram: function(e, t) {
        "object" !== ("undefined" == typeof wx ? "undefined" : Jn(wx)) && console.warn("wxMiniprogram env error");
        try {
            wx.setStorageSync(e, t)
        } catch ($a) {
            console.warn("wxMiniprogram setStorageSync error", $a)
        }
    },
    wxWebview: function(e, t) {
        "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) && console.warn("ksWebview env error");
        try {
            localStorage.setItem(e, t)
        } catch ($a) {
            console.warn("ksWebview setStorageSync error", $a)
        }
    },
    ksMiniprogram: function(e, t) {
        "object" !== ("undefined" == typeof ks ? "undefined" : Jn(ks)) && console.warn("ksMiniprogram env error");
        try {
            ks.setStorageSync(e, t)
        } catch ($a) {
            console.warn("ksMiniprogram setStorageSync error", $a)
        }
    },
    ksWebview: function(e, t) {
        "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) && console.warn("ksWebview env error");
        try {
            localStorage.setItem(e, t)
        } catch ($a) {
            console.warn("ksWebview setStorageSync error", $a)
        }
    },
    bdMiniprogram: function(e, t) {
        "object" !== ("undefined" == typeof swan ? "undefined" : Jn(swan)) && console.warn("bdMiniprogram env error");
        var n = swan.setStorageSync(e, t);
        n instanceof Error && console.warn("bdMiniprogram setStorageSync error", n)
    },
    bdWebview: function(e, t) {
        "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) && console.warn("bdWebview env error");
        try {
            localStorage.setItem(e, t)
        } catch ($a) {
            console.warn("bdWebview setStorageSync error", $a)
        }
    },
    ttMiniprogram: function(e, t) {
        "object" !== ("undefined" == typeof tt ? "undefined" : Jn(tt)) && console.warn("ttMiniprogram env error");
        try {
            tt.setStorageSync(e, t)
        } catch ($a) {
            console.warn("ttMiniprogram setStorageSync error", $a)
        }
    },
    ttWebview: function(e, t) {
        "object" !== ("undefined" == typeof window ? "undefined" : Jn(window)) && console.warn("ttWebview env error");
        try {
            localStorage.setItem(e, t)
        } catch ($a) {
            console.warn("ttWebview setStorageSync error", $a)
        }
    }
}
  , cr = function(e, t) {
    if (!e)
        return console.warn("setStorageSync: key 不能为空"),
        "";
    var n = er()
      , r = ar[n];
    return r ? r(e, t) : (console.warn("setStorageSync entry error"),
    "")
}
  , sr = {
    h5: function(e) {
        return Promise.resolve(e)
    },
    wxWebview: function(e) {
        return window.wx ? Promise.resolve(e) : new Promise((function(t) {
            ir("https://res.wx.qq.com/open/js/jweixin-1.6.2.js", (function() {
                return t(e)
            }
            ))
        }
        ))
    },
    ksWebview: function(e) {
        return Promise.resolve(e)
    },
    bdWebview: function(e) {
        return window.swan ? Promise.resolve(e) : new Promise((function(t) {
            ir("https://b.bdstatic.com/searchbox/icms/searchbox/js/swan-2.0.22.js", (function() {
                return t(e)
            }
            ))
        }
        ))
    },
    ttWebview: function(e) {
        return window.tt ? Promise.resolve(e) : new Promise((function(t) {
            ir("https://lf1-cdn-tos.bytegoofy.com/goofy/developer/jssdk/jssdk-1.1.0.js", (function() {
                return t(e)
            }
            ), !0)
        }
        ))
    }
}
  , lr = function(e) {
    var t = er()
      , n = sr[t]
      , r = {
        token: "",
        longitude: "",
        latitude: ""
    };
    if (n) {
        var o = e || {}
          , i = o.needStorage
          , a = void 0 === i || i
          , c = o.tokenQueryKey
          , s = void 0 === c ? "_gztoken" : c
          , l = o.tokenStorageKey
          , u = void 0 === l ? "MINIPROGRAM_TOKEN" : l
          , p = o.coordinatesQueryKey
          , f = void 0 === p ? "lng_lat" : p
          , d = o.coordinatesStorageKey
          , m = void 0 === d ? "MINIPROGRAM_LNG_LAT" : d
          , g = or(s)
          , h = or(f);
        if (g && "null" !== g && "undefined" !== g ? (r.token = g,
        a && cr(u, g)) : a && cr(u, ""),
        h) {
            var y = h.split("_");
            if (r.longitude = y[0] || "",
            r.latitude = y[1] || "",
            a && (cr(m, h),
            "object" === ("undefined" == typeof window ? "undefined" : Jn(window)))) {
                var v = window.location.host.split(".").slice(-2).join(".");
                window.document.cookie = "lng_lat=".concat(h, ";Max-Age=").concat(Math.floor(2592e3), ";Domain=").concat(v, ";Path=/")
            }
        }
        return n(r)
    }
    return Promise.resolve(r)
}
  , ur = {
    h5: function(e) {
        if ("object" !== ("undefined" == typeof window ? "undefined" : Jn(window)))
            return Promise.reject("env error：h5环境识别异常");
        var t = -1;
        return e && (t = -e),
        window.history.go(t),
        Promise.resolve({
            code: 0,
            msg: "success"
        })
    },
    wxMiniprogram: function(e) {
        return "object" !== ("undefined" == typeof wx ? "undefined" : Jn(wx)) ? Promise.reject("env error") : new Promise((function(t) {
            wx.navigateBack({
                delta: e,
                success: function() {
                    t({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    t({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            })
        }
        ))
    },
    wxWebview: function(e) {
        return window.wx ? (wx.miniProgram.navigateBack({
            delta: e
        }),
        Promise.resolve({
            code: 0,
            msg: "success"
        })) : Promise.reject("env error：微信js sdk加载异常")
    },
    ksMiniprogram: function(e) {
        return "object" !== ("undefined" == typeof ks ? "undefined" : Jn(ks)) ? Promise.reject("env error") : new Promise((function(t) {
            ks.navigateBack({
                delta: e,
                success: function() {
                    t({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    t({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            })
        }
        ))
    },
    ksWebview: function(e) {
        return window.ks ? (ks.navigateBack({
            delta: e
        }),
        Promise.resolve({
            code: 0,
            msg: "success"
        })) : Promise.reject("env error：快手js sdk加载异常")
    },
    bdMiniprogram: function(e) {
        return "object" !== ("undefined" == typeof swan ? "undefined" : Jn(swan)) ? Promise.reject("env error") : new Promise((function(t) {
            swan.navigateBack({
                delta: e,
                success: function() {
                    t({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    t({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            })
        }
        ))
    },
    bdWebview: function(e) {
        return window.swan ? new Promise((function(t) {
            swan.webView.navigateBack({
                delta: e,
                success: function() {
                    t({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    t({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            })
        }
        )) : Promise.reject("env error：百度js sdk加载异常")
    },
    ttMiniprogram: function(e) {
        return "object" !== ("undefined" == typeof tt ? "undefined" : Jn(tt)) ? Promise.reject("env error") : new Promise((function(t) {
            tt.navigateBack({
                delta: e,
                success: function() {
                    t({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    t({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            })
        }
        ))
    },
    ttWebview: function(e) {
        return window.tt ? (tt.miniProgram.navigateBack({
            delta: e
        }),
        Promise.resolve({
            code: 0,
            msg: "success"
        })) : Promise.reject("env error：抖音js sdk加载异常")
    }
}
  , pr = function(e) {
    var t = er();
    return new Promise((function(n, r) {
        lr({
            needStorage: !1
        }).then((function() {
            var o = ur[t];
            o ? o(e).then(n) : r("navigateBack entry error")
        }
        ))
    }
    ))
}
  , fr = {
    h5: function(e) {
        if ("object" !== ("undefined" == typeof window ? "undefined" : Jn(window)))
            return Promise.reject("env error：h5环境识别异常");
        var t = e.url;
        return e.replace ? window.location.replace(t) : window.location.href = t,
        Promise.resolve({
            code: 0,
            msg: "success"
        })
    },
    wxMiniprogram: function(e) {
        if ("object" !== ("undefined" == typeof wx ? "undefined" : Jn(wx)))
            return Promise.reject("env error");
        var t = e.url;
        return nr(t) && (t = rr(t) ? "".concat("/pages/web/web", "?").concat("url", "=").concat(t) : "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
        new Promise((function(n) {
            e.tabbar ? wx.switchTab({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : e.reLaunch ? wx.reLaunch(qn(qn({}, e), {}, {
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            })) : e.replace ? wx.redirectTo({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : wx.navigateTo(qn(qn({}, e), {}, {
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }))
        }
        ))
    },
    wxWebview: function(e) {
        if (!window.wx)
            return Promise.reject("env error：微信js sdk加载异常");
        var t = e.url;
        return e.tabbar ? wx.miniProgram.switchTab({
            url: t
        }) : (nr(t) && (t = rr(t) ? "".concat("/pages/web/web", "?").concat("url", "=").concat(t) : "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
        e.replace ? wx.miniProgram.redirectTo({
            url: t
        }) : e.reLaunch ? wx.miniProgram.reLaunch({
            url: t
        }) : wx.miniProgram.navigateTo({
            url: t
        })),
        Promise.resolve({
            code: 0,
            msg: "success"
        })
    },
    ksMiniprogram: function(e) {
        if ("object" !== ("undefined" == typeof ks ? "undefined" : Jn(ks)))
            return Promise.reject("env error");
        var t = e.url;
        return nr(t) && (t = rr(t) ? "".concat("/pages/web/web", "?").concat("url", "=").concat(t) : "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
        new Promise((function(n) {
            e.tabbar ? ks.switchTab({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : e.reLaunch ? ks.reLaunch(qn(qn({}, e), {}, {
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            })) : e.replace ? ks.redirectTo({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : ks.navigateTo(qn(qn({}, e), {}, {
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }))
        }
        ))
    },
    ksWebview: function(e) {
        if (!window.ks)
            return Promise.reject("env error：快手js sdk加载异常");
        var t = e.url;
        return e.tabbar ? ks.switchTab({
            url: t
        }) : (nr(t) && (t = rr(t) ? "".concat("/pages/web/web", "?").concat("url", "=").concat(t) : "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
        e.replace ? ks.redirectTo({
            url: t
        }) : e.reLaunch ? ks.reLaunch({
            url: t
        }) : ks.navigateTo({
            url: t
        })),
        Promise.resolve({
            code: 0,
            msg: "success"
        })
    },
    bdMiniprogram: function(e) {
        if ("object" !== ("undefined" == typeof swan ? "undefined" : Jn(swan)))
            return Promise.reject("env error");
        var t = e.url;
        return nr(t) && (t = rr(t) ? "".concat("/pages/web/web", "?").concat("url", "=").concat(t) : "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
        new Promise((function(n) {
            e.tabbar ? swan.switchTab({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : e.reLaunch ? swan.reLaunch(qn(qn({}, e), {}, {
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            })) : e.replace ? swan.redirectTo({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : swan.navigateTo(qn(qn({}, e), {}, {
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }))
        }
        ))
    },
    bdWebview: function(e) {
        if (!window.swan)
            return Promise.reject("env error：百度js sdk加载异常");
        var t = e.url;
        return t = (t = t.replace(/returnUrl=\/pages\/wap\/index\/index|returnUrl=%2Fpages%2Fwap%2Findex%2Findex/, "returnUrl=/pages/home/web")).replace(/returnUrl=\/pages\/wap\/uc\/index|returnUrl=%2Fpages%2Fwap%2Fuc%2Findex/, "returnUrl=/pages/my/web"),
        new Promise((function(n) {
            e.tabbar ? swan.webView.switchTab({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : e.replace ? !function(e) {
                return /^\/pages/.test(e)
            }(t) ? window.location.replace(t) : swan.webView.redirectTo({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : (nr(t) && (t = "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
            e.reLaunch ? swan.webView.reLaunch({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : swan.webView.navigateTo({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }))
        }
        ))
    },
    ttMiniprogram: function(e) {
        if ("object" !== ("undefined" == typeof tt ? "undefined" : Jn(tt)))
            return Promise.reject("env error");
        var t = e.url;
        if (nr(t))
            if (rr(t))
                t = "".concat("/pages/web/web", "?").concat("url", "=").concat(t);
            else {
                var n = /^https:\/\/(\w|-)+\.guazi(-cloud|-apps)?\.com\/detail\/?\?/;
                t = n.test(t) ? t.replace(n, "/pages/detail/detail?") : "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))
            }
        return new Promise((function(n) {
            e.tabbar ? tt.switchTab({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : e.reLaunch ? tt.reLaunch(qn(qn({}, e), {}, {
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            })) : e.replace ? tt.redirectTo({
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }) : tt.navigateTo(qn(qn({}, e), {}, {
                url: t,
                success: function() {
                    n({
                        code: 0,
                        msg: "success"
                    })
                },
                fail: function(e) {
                    n({
                        code: -1,
                        msg: "fail",
                        data: e
                    })
                }
            }))
        }
        ))
    },
    ttWebview: function(e) {
        if (!window.tt)
            return Promise.reject("env error：抖音js sdk加载异常");
        var t = e.url;
        return e.tabbar ? tt.miniProgram.switchTab({
            url: t
        }) : (nr(t) && (t = rr(t) ? "".concat("/pages/web/web", "?").concat("url", "=").concat(t) : "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
        e.replace ? tt.miniProgram.redirectTo({
            url: t
        }) : e.reLaunch ? tt.miniProgram.reLaunch({
            url: t
        }) : tt.miniProgram.navigateTo({
            url: t
        })),
        Promise.resolve({
            code: 0,
            msg: "success"
        })
    }
}
  , dr = function(e) {
    if (!e || !e.url)
        return Promise.reject("navigateTo: need url param");
    var t = er();
    return new Promise((function(n, r) {
        lr({
            needStorage: !1
        }).then((function() {
            var o = fr[t];
            o ? o(e).then(n) : r("navigateTo entry error")
        }
        ))
    }
    ))
};
dr.ready = function() {
    return lr({
        needStorage: !1
    })
}
,
dr.back = pr;
var mr = {
    wxWebview: function(e) {
        if (window.wx) {
            var t = e.url;
            t && nr(t) && (t = "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
            wx.miniProgram.postMessage({
                data: {
                    actionType: e.actionType || "shareToFriend",
                    url: t,
                    shareImage: e.shareImage || "",
                    shareTitle: e.shareTitle || ""
                }
            })
        } else
            console.error("env error：微信js sdk加载异常")
    },
    ksWebview: function(e) {
        if (window.ks) {
            var t = e.url;
            t && nr(t) && (t = "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
            ks.postMessage({
                data: {
                    actionType: e.actionType || "shareToFriend",
                    url: t,
                    shareImage: e.shareImage || "",
                    shareTitle: e.shareDesc || ""
                }
            })
        } else
            console.error("env error：快手js sdk加载异常")
    },
    bdWebview: function(e) {
        if (window.swan) {
            var t = e.url;
            t && nr(t) && (t = "".concat("/pages/web/web", "?").concat("url", "=").concat(encodeURIComponent(t))),
            swan.webView.postMessage({
                data: {
                    actionType: e.actionType || "shareToFriend",
                    url: t,
                    shareImage: e.shareImage || "",
                    shareTitle: e.shareDesc || ""
                }
            })
        } else
            console.error("env error：百度js sdk加载异常")
    }
}
  , gr = function(e) {
    if (!e)
        return Promise.reject("shareMessageConfig: 参数不能为空");
    var t = er();
    return new Promise((function(n, r) {
        lr({
            needStorage: !1
        }).then((function() {
            var o = mr[t];
            if (o)
                return o(e),
                void n(null);
            r("shareMessageConfig entry error")
        }
        ))
    }
    ))
};
gr.ready = lr;
var hr = {
    /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
    parse: function(e, t) {
        if ("string" != typeof e)
            throw new TypeError("argument str must be a string");
        for (var n = {}, r = t || {}, o = e.split(";"), i = r.decode || yr, a = 0; a < o.length; a++) {
            var c = o[a]
              , s = c.indexOf("=");
            if (!(s < 0)) {
                var l = c.substring(0, s).trim();
                if (null == n[l]) {
                    var u = c.substring(s + 1, c.length).trim();
                    '"' === u[0] && (u = u.slice(1, -1)),
                    n[l] = _r(u, i)
                }
            }
        }
        return n
    },
    serialize: function(e, t, n) {
        var r = n || {}
          , o = r.encode || vr;
        if ("function" != typeof o)
            throw new TypeError("option encode is invalid");
        if (!wr.test(e))
            throw new TypeError("argument name is invalid");
        var i = o(t);
        if (i && !wr.test(i))
            throw new TypeError("argument val is invalid");
        var a = e + "=" + i;
        if (null != r.maxAge) {
            var c = r.maxAge - 0;
            if (isNaN(c) || !isFinite(c))
                throw new TypeError("option maxAge is invalid");
            a += "; Max-Age=" + Math.floor(c)
        }
        if (r.domain) {
            if (!wr.test(r.domain))
                throw new TypeError("option domain is invalid");
            a += "; Domain=" + r.domain
        }
        if (r.path) {
            if (!wr.test(r.path))
                throw new TypeError("option path is invalid");
            a += "; Path=" + r.path
        }
        if (r.expires) {
            if ("function" != typeof r.expires.toUTCString)
                throw new TypeError("option expires is invalid");
            a += "; Expires=" + r.expires.toUTCString()
        }
        r.httpOnly && (a += "; HttpOnly");
        r.secure && (a += "; Secure");
        if (r.sameSite) {
            switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
            case !0:
                a += "; SameSite=Strict";
                break;
            case "lax":
                a += "; SameSite=Lax";
                break;
            case "strict":
                a += "; SameSite=Strict";
                break;
            case "none":
                a += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid")
            }
        }
        return a
    }
}
  , yr = decodeURIComponent
  , vr = encodeURIComponent
  , wr = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function _r(e, t) {
    try {
        return t(e)
    } catch ($a) {
        return e
    }
}
function br(e) {
    return (br = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function kr(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function $r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Sr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? $r(Object(n), !0).forEach((function(t) {
            kr(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function xr(e, t) {
    if (e) {
        if ("string" == typeof e)
            return Or(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Or(e, t) : void 0
    }
}
function Or(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
var jr = {
    line: ""
}
  , Pr = {
    appKey: "common",
    rule: {
        getUserInfo: {
            resMap: {
                username: "userName",
                user_id: "userId",
                long_user_id: "longUserId"
            }
        },
        getDeviceInfo: {
            resMap: {
                osv: "systemVersion"
            },
            transformRes: function(e) {
                var t = e.response
                  , n = t || {}
                  , r = n.env
                  , o = n.screeWH;
                try {
                    var i = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e))
                                return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = []
                                  , r = !0
                                  , o = !1
                                  , i = void 0;
                                try {
                                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                                    !t || n.length !== t); r = !0)
                                        ;
                                } catch (s) {
                                    o = !0,
                                    i = s
                                } finally {
                                    try {
                                        r || null == c.return || c.return()
                                    } finally {
                                        if (o)
                                            throw i
                                    }
                                }
                                return n
                            }
                        }(e, t) || xr(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(o && o.split("X") || [], 2)
                      , a = i[0]
                      , c = i[1];
                    a && (t.screenWidth = a),
                    c && (t.screenHeight = c),
                    t.env = r && r.toLocaleLowerCase(),
                    delete t.screeWH
                } catch (s) {
                    e.log(s && s.message || s, "error")
                }
            }
        },
        getSelectedCity: {
            previousName: "getCityInfo",
            resMap: {
                city_id: "cityId",
                city_name: "cityName"
            },
            transformRes: function(e) {
                e.response || (e.response = {
                    cityId: "-1",
                    cityName: "全国",
                    domain: "www"
                });
                var t = e.response
                  , n = t.city_domain
                  , r = t.domain
                  , o = t.domin;
                t && (t.domain = n || r || o || "www"),
                delete t.city_domain
            }
        },
        onWebviewBeforeBack: {
            previousName: "back",
            transformParam: function(e) {
                var t = e.data || {}
                  , n = t.data;
                t.customResponseData || (e.data = {
                    preventDefault: !n.status
                })
            }
        },
        onTitleBarRightClick: {
            previousName: "headerRightBtnClick"
        },
        setTitleBar: {
            paramMap: {
                hideTitleBar: "noTitle"
            },
            transformParam: function(e) {
                var t = (e.data || {}).rightBtnConfig;
                if (t) {
                    var n = t.icon
                      , r = t.text;
                    e.data.right_btn_icon = n,
                    e.data.right_btn_text = r,
                    delete e.data.rightBtnConfig
                }
            }
        },
        createWebview: {
            previousName: "createWebView"
        },
        closeWebview: {
            previousName: "closeCurrentWebView"
        },
        setSharePreferences: {
            previousName: "storage",
            transformParam: function(e) {
                e.data.action = "set",
                e.data.value = e.data.data,
                delete e.data.data
            }
        },
        getSharePreferences: {
            previousName: "storage",
            transformParam: function(e) {
                e.data.action = "get"
            },
            transformRes: function(e) {
                e.response = {
                    value: e.response || ""
                }
            }
        }
    }
}
  , Ir = {
    closeWebview: "c#6.0.0"
}
  , Cr = function() {
    return (Cr = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
    }
    ).apply(this, arguments)
};
function Tr(e, t, n, r) {
    return new (n || (n = Promise))((function(o, i) {
        function a(e) {
            try {
                s(r.next(e))
            } catch (t) {
                i(t)
            }
        }
        function c(e) {
            try {
                s(r.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function s(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof n ? t : new n((function(e) {
                e(t)
            }
            ))).then(a, c)
        }
        s((r = r.apply(e, t || [])).next())
    }
    ))
}
function Ar(e, t) {
    var n, r, o, i, a = {
        label: 0,
        sent: function() {
            if (1 & o[0])
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return i = {
        next: c(0),
        throw: c(1),
        return: c(2)
    },
    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this
    }
    ),
    i;
    function c(i) {
        return function(c) {
            return function(i) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (n = 1,
                        r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                        0) : r.next) && !(o = o.call(r, i[1])).done)
                            return o;
                        switch (r = 0,
                        o && (i = [2 & i[0], o.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            o = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            r = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < o[1]) {
                                a.label = o[1],
                                o = i;
                                break
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2],
                                a.ops.push(i);
                                break
                            }
                            o[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = t.call(e, a)
                    } catch (c) {
                        i = [6, c],
                        r = 0
                    } finally {
                        n = o = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }([i, c])
        }
    }
}
function Er(e, t) {
    this.config = e,
    this.env = t,
    this._middlewares = [],
    this._registerQueue = [],
    this._invokeQueue = [],
    this.appKey = this.env.appKey || "",
    this.appVersion = this.env.appVersion || "";
    var n = function(e) {
        var t = {}
          , n = {}
          , r = (e.config || {}).mapRules;
        if (r && r.length)
            for (var o = 0; o < r.length; o++)
                if (r[o]) {
                    var i = r[o].appKey;
                    "string" == typeof i && (i = [i]),
                    -1 === i.indexOf("common") && -1 === i.indexOf(e.appKey) || (n = r[o],
                    t = Cr(Cr({}, t), r[o].rule || {}))
                }
        return Cr(Cr({}, n), {
            mapRule: t
        })
    }(this);
    this._mapRule = Cr({}, n.mapRule),
    this.mapRule = n.mapRule,
    this.appConfig = n
}
function Nr(e, t) {
    return Tr(this, void 0, void 0, (function() {
        var n;
        return Ar(this, (function(r) {
            switch (r.label) {
            case 0:
                return n = this.config.invokeVersion,
                e.data && e.data.invokeVersion && (n = e.data.invokeVersion,
                delete e.data.invokeVersion),
                e._supportNewSDK = "OLD_SDK" !== this.version,
                e._userSelectedVersion = n,
                e._appConfigSelectedVersion = this.appConfig.invokeVersion,
                e._useNewSDK = !1,
                !e._supportNewSDK || "v2" !== e._userSelectedVersion && "v2" !== e._appConfigSelectedVersion || (e._useNewSDK = !0),
                "v2" !== e._userSelectedVersion || e._supportNewSDK || e.log(e.api + " 当前APP版本不支持使用v2版本，已默认转为旧版调用", "warn"),
                this.config.debug && console.log("🌹cc ** whether to use new sdk **🌹", e._useNewSDK, {
                    env: this.env,
                    config: this.config,
                    _supportNewSDK: e._supportNewSDK,
                    _userSelectedVersion: e._userSelectedVersion,
                    _appConfigSelectedVersion: e._appConfigSelectedVersion
                }),
                [4, t()];
            case 1:
                return r.sent(),
                [2]
            }
        }
        ))
    }
    ))
}
function Ur(e, t) {
    return Tr(this, void 0, void 0, (function() {
        var n, r, o, i;
        return Ar(this, (function(a) {
            switch (a.label) {
            case 0:
                return n = Date.now(),
                r = !1,
                o = function(t) {
                    r || (r = !0,
                    this._apiCallResult && "function" == typeof this._apiCallResult && "invoke" === e.type && (this._apiCallResult = this._apiCallResult.bind(null),
                    this._apiCallResult({
                        state: t || "timeout",
                        startTime: e.startTime || "",
                        time: Date.now() - n,
                        jsBridgeReadyTime: this.jsBridgeReadyTime || "",
                        line: this.config.line || "",
                        project: this.config.project || "",
                        api: e.api || "",
                        response: JSON.stringify(e.response) || "",
                        appKey: e.appKey || "",
                        appName: this.env.name || "",
                        appVersion: e.appVersion || "",
                        system: this.env.system || "",
                        sdkVersion: this.version || "",
                        deviceInfo: JSON.stringify(this.deviceInfo) || "",
                        variables: JSON.stringify(e.data) || "",
                        userAgent: window.navigator.userAgent || ""
                    })))
                }
                .bind(this),
                this._reportMaxTime && (i = setTimeout(o, this._reportMaxTime)),
                [4, t()];
            case 1:
                return a.sent(),
                i && clearTimeout(i),
                o("success"),
                [2]
            }
        }
        ))
    }
    ))
}
function Rr(e, t) {
    if (0 === arguments.length || !e)
        return null;
    var n, r = t || "{y}-{m}-{d} {h}:{i}:{s}";
    "object" === br(e) ? n = e : (10 === ("" + e).length && (e = 1e3 * parseInt(e)),
    n = new Date(e));
    var o = {
        y: n.getFullYear(),
        m: n.getMonth() + 1,
        d: n.getDate(),
        h: n.getHours(),
        i: n.getMinutes(),
        s: n.getSeconds(),
        a: n.getDay()
    }
      , i = r.replace(/{(y|m|d|h|i|s|a)+}/g, (function(e, t) {
        var n = o[t];
        return "a" === t ? ["日", "一", "二", "三", "四", "五", "六"][n] : (e.length > 0 && n < 10 && (n = "0" + n),
        n || 0)
    }
    ));
    return i
}
function Lr(e, t) {
    return Tr(this, void 0, void 0, (function() {
        return Ar(this, (function(n) {
            switch (n.label) {
            case 0:
                return e.startTime = Rr(Date.now(), "{y}/{m}/{d}-{h}:{i}:{s}"),
                e.log = function(t, n) {
                    "warn" !== n && "error" !== n || console[n]("【" + n + "】" + (t && t.message ? t.message : t));
                    var r = {
                        level: n || "log",
                        startTime: e.startTime || "",
                        endTime: e.endTime || "",
                        line: this.config.line || "",
                        project: this.config.project || "",
                        api: e.api || "",
                        message: t || "",
                        response: JSON.stringify(e.response) || "",
                        appKey: e.appKey || "",
                        appVersion: e.appVersion || "",
                        sdkVersion: this.version || "",
                        deviceInfo: JSON.stringify(this.deviceInfo) || "",
                        variables: JSON.stringify(e.data) || "",
                        userAgent: window.navigator.userAgent || ""
                    }
                      , o = "【" + r.level + "】" + r.startTime + " " + r.project + " " + r.api + " " + (r.variables || "-") + " " + (r.message || "-") + " " + r.userAgent;
                    this.config.log && this.config.log(t, r, o)
                }
                .bind(this),
                this.config.log && ("invoke" === e.type ? e.log(e.startTime + " " + e.api + " start") : e.log(e.startTime + " " + e.api + " register")),
                [4, t()];
            case 1:
                return n.sent(),
                e.endTime = Rr(Date.now(), "{y}/{m}/{d}-{h}:{i}:{s}"),
                "invoke" === e.type && e.log(e.endTime + " " + e.api + " end"),
                [2]
            }
        }
        ))
    }
    ))
}
function Mr(e) {
    return e ? e.replace(/\s+/g, "").split(",").map((function(e) {
        var t = e.split("#");
        return {
            appKey: t[0],
            version: t[1]
        }
    }
    )).reduce((function(e, t) {
        return e[t.appKey] = t.version,
        e
    }
    ), {}) : {}
}
function zr(e, t) {
    for (var n = e.split("-")[0].split("."), r = t.split("-")[0].split("."); n.length || r.length; ) {
        var o = n.shift() || 0
          , i = r.shift() || 0;
        if (+o > +i)
            return 1;
        if (+o < +i)
            return -1
    }
    return 0
}
function Dr(e, t) {
    return Tr(this, void 0, void 0, (function() {
        var n;
        return Ar(this, (function(r) {
            switch (r.label) {
            case 0:
                return e.compareVersion = zr,
                e._useNewSDK || (n = Cr(Cr({}, Mr(Ir[e.api])), Mr(e.data.lowestVersionAvailable || "")),
                delete e.data.lowestVersionAvailable,
                e.lowestVersionAvailable = n,
                e.available = !0,
                n && n[this.appKey] && (e.available = zr(e.appVersion, n[e.appKey]) >= 0,
                e.available || e.log(e.api + " 最低可用app版本是 " + n[e.appKey] + "，当前app版本为 " + e.appVersion, "warn"))),
                [4, t()];
            case 1:
                return r.sent(),
                [2]
            }
        }
        ))
    }
    ))
}
function Wr(e, t) {
    return Tr(this, void 0, void 0, (function() {
        var n, r, o, i, a, c, s;
        return Ar(this, (function(l) {
            switch (l.label) {
            case 0:
                return this.mapRule && !e._useNewSDK && (n = this.mapRule[e.api] || {},
                e.mapRule = n),
                r = e.mapRule || {},
                o = r.previousName,
                i = r.paramMap,
                a = r.resMap,
                c = r.transformParam,
                s = r.transformRes,
                o && (e.log(e.api + " =-=-> " + o),
                e.api = o),
                i && e.data && Object.keys(i).forEach((function(t) {
                    i[t] && e.data.hasOwnProperty(t) && (e.data[i[t]] = e.data[t],
                    delete e.data[t])
                }
                )),
                c && c.call(this, e),
                [4, t()];
            case 1:
                return l.sent(),
                a && e.response && Object.keys(a).forEach((function(t) {
                    a[t] && e.response.hasOwnProperty(t) && ("function" == typeof a[t] ? a[t](e.response[t], e.response) : e.response[a[t]] = e.response[t],
                    delete e.response[t])
                }
                )),
                s && s.call(this, e),
                [2]
            }
        }
        ))
    }
    ))
}
function Vr(e) {
    var t = this;
    return new Promise((function(n, r) {
        var o = e.data;
        o.success,
        o.fail,
        o.complete;
        var i = o._param
          , a = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        }(o, ["success", "fail", "complete", "_param"]);
        if ("getVersion" === e.api) {
            var c = "OLD_SDK";
            t.bridge.getVersion && (c = t.bridge.getVersion());
            var s = {
                code: 0,
                data: {
                    nativeSDK: c,
                    jsSDK: "2.1.48"
                },
                msg: "ok"
            };
            e.response = s,
            n(s)
        }
        try {
            t.config.debug && console.log(e.api, JSON.stringify(a));
            var l = "";
            e._useNewSDK && (l = "2.0.0"),
            setTimeout((function() {
                t.bridge.callHandler(e.api, i || a, (function(t) {
                    e.response = t,
                    n(t)
                }
                ), l)
            }
            ), 0)
        } catch (u) {
            r(u)
        }
    }
    ))
}
function Br(e) {
    var t = this;
    return new Promise((function(n, r) {
        try {
            setTimeout((function() {
                var r = "OLD_SDK" == t.version
                  , o = /android/i.test(window.navigator.userAgent);
                t.bridge.registerHandler(e.api, (function(t, n) {
                    e.data && e.data.customResponseData ? e.callback && e.callback(t, n) : (e.callback && e.callback(t),
                    !n || r && o && "headerRightBtnClick" == e.api || n(e.data))
                }
                )),
                n({})
            }
            ), 0)
        } catch (o) {
            r(o)
        }
    }
    ))
}
function Fr(e, t) {
    return Tr(this, void 0, void 0, (function() {
        return Ar(this, (function(n) {
            switch (n.label) {
            case 0:
                return "invoke" !== e.type ? [3, 2] : [4, Vr.call(this, e)];
            case 1:
            case 3:
                return n.sent(),
                [3, 5];
            case 2:
                return "register" !== e.type ? [3, 4] : [4, Br.call(this, e)];
            case 4:
                return [2, new Error("ctx.type is one of [invoke, register]")];
            case 5:
                return [4, t()];
            case 6:
                return n.sent(),
                [2]
            }
        }
        ))
    }
    ))
}
function qr(e) {
    return "" === e || null == e
}
function Jr(e, t) {
    return Tr(this, void 0, void 0, (function() {
        var n;
        return Ar(this, (function(r) {
            switch (r.label) {
            case 0:
                return [4, t()];
            case 1:
                return r.sent(),
                e._useNewSDK ? (qr(e.response) ? "invoke" === e.type && (e.data.fail && e.data.fail(e.response),
                e.log(e.api + "返回结果为空", "error")) : 0 === e.response.code ? e.data.success && e.data.success(e.response.data) : (n = e.response && (e.response.message || e.response.msg) || "",
                e.response.code > 0 ? (e.data.fail && e.data.fail(e.response),
                e.log(e.api + ": " + n, "warn")) : (e.data.fail && e.data.fail(e.response),
                e.log(e.api + ": " + n, "error"))),
                e.data.complete && e.data.complete(e.response)) : (qr(e.response) || e.response.error ? e.data.fail && e.data.fail(e.response) : e.data.success && e.data.success(e.response),
                e.data.complete && e.data.complete(e.response)),
                [2]
            }
        }
        ))
    }
    ))
}
Er.prototype.useMiddleware = function(e) {
    !function(e, t) {
        if (!Array.isArray(e))
            throw new TypeError("Middleware stack must be an array!");
        for (var n = 0, r = e; n < r.length; n++)
            if ("function" != typeof r[n])
                throw new TypeError("Middleware must be composed of functions!");
        return function(n, r) {
            var o = -1;
            return function i(a) {
                if (a <= o)
                    return Promise.reject(new Error("next() called multiple times"));
                o = a;
                var c = e[a];
                if (a === e.length && (c = r),
                !c)
                    return Promise.resolve("end");
                try {
                    return Promise.resolve(c.call(t, n, i.bind(null, a + 1)))
                } catch (s) {
                    return Promise.reject(s)
                }
            }(0)
        }
    }(this._middlewares, this)(e)
}
,
Er.prototype.use = function(e, t) {
    1 !== this._initialized ? this._middlewares.push(e) : console.error("无效调用")
}
,
Er.prototype.plugin = function(e) {
    if (1 !== this._initialized) {
        if (!e || !e.install)
            throw new Error("pluginDefinition.install must be function");
        e.install.call(this, this)
    } else
        console.error("无效调用")
}
,
Er.prototype.interface = function(e, t) {
    if (1 !== this._initialized) {
        if (!e)
            throw new Error("interfaceDefinition can not be empty!");
        this[e] = t
    } else
        console.error("无效调用")
}
,
Er.prototype.load = function() {
    console.log("NativeSDK#" + this.version + " is ready!")
}
,
Er.prototype._invoke = function(e, t, n) {
    if (!this.env.isGuaziAPP && console.log("请在瓜子app环境中使用!", e),
    this.bridge) {
        var r = {
            type: "invoke",
            api: e,
            appKey: this.appKey,
            appVersion: this.appVersion,
            data: t,
            _nonstandard: "nonstandard" === n
        };
        this.useMiddleware(r)
    } else
        this._invokeQueue.push([e, t])
}
,
Er.prototype._register = function(e, t, n) {
    if (!this.env.isGuaziAPP && console.log("请在瓜子app环境中使用!", e),
    this.bridge) {
        var r = {
            type: "register",
            api: e,
            appKey: this.appKey,
            appVersion: this.appVersion,
            data: t || {},
            callback: n
        };
        this.useMiddleware(r)
    } else
        this._registerQueue.push([e, t, n])
}
;
var Hr = Object.freeze({
    __proto__: null,
    install: function(e) {
        e.use(Lr, "logs"),
        e.use(Nr, "preHandle"),
        e.use(Ur, "reportAPICallResult"),
        e.use(Dr, "checkAppVersion"),
        e.use(Jr, "responseHandler"),
        e.config.middlewares && e.config.middlewares.length && e.config.middlewares.forEach((function(t) {
            e.use(t)
        }
        )),
        e.use(Wr, "paramsMapper"),
        e.use(Fr, "sendByBridge")
    }
});
function Gr() {
    var e = document.createElement("iframe");
    e.style.display = "none",
    e.src = "wvjbscheme://__BRIDGE_LOADED__",
    document.documentElement.appendChild(e),
    setTimeout((function() {
        document.documentElement.removeChild(e)
    }
    ), 0)
}
function Kr(e, t) {
    var n, r = window.navigator.userAgent.toLowerCase();
    console.log("native-sdk get userAgent", r),
    r.indexOf("android") > -1 ? (console.log("start bridge android"),
    function(e) {
        var t = !1;
        if (document.addEventListener("WebViewJavascriptBridgeReady", (function(n) {
            t = !0,
            e(window.WebViewJavascriptBridge)
        }
        ), !1),
        window.WebViewJavascriptBridge) {
            if (document.documentElement && document.documentElement.getElementsByTagName("iframe").length > 0)
                return void e(window.WebViewJavascriptBridge);
            console.log("js bridge 建立异常");
            var r = setInterval((function() {
                if (document.documentElement && document.documentElement.getElementsByTagName("iframe").length > 0 && window.WebViewJavascriptBridge)
                    clearInterval(r);
                else if (document.documentElement && !t) {
                    console.log("补充注入js bridge");
                    try {
                        !function() {
                            var e, t = [], n = [], r = {}, o = {}, i = 1;
                            function a(e) {
                                if (WebViewJavascriptBridge._messageHandler)
                                    throw new Error("WebViewJavascriptBridge.init called twice");
                                WebViewJavascriptBridge._messageHandler = e;
                                var t = n;
                                n = null;
                                for (var r = 0; r < t.length; r++)
                                    f(t[r])
                            }
                            function c(e, t) {
                                u({
                                    data: e
                                }, t)
                            }
                            function s(e, t) {
                                r[e] = t
                            }
                            function l(e, t, n) {
                                u({
                                    handlerName: e,
                                    data: t
                                }, n)
                            }
                            function u(n, r) {
                                if (r) {
                                    var a = "cb_" + i++ + "_" + (new Date).getTime();
                                    o[a] = r,
                                    n.callbackId = a
                                }
                                t.push(n),
                                e.src = "wvjbscheme://__WVJB_QUEUE_MESSAGE__"
                            }
                            function p() {
                                var e = JSON.stringify(t);
                                return t = [],
                                e
                            }
                            function f(e) {
                                setTimeout((function() {
                                    var t = JSON.parse(e);
                                    if (t.responseId) {
                                        if (!(n = o[t.responseId]))
                                            return;
                                        n(t.responseData),
                                        delete o[t.responseId]
                                    } else {
                                        var n;
                                        if (t.callbackId) {
                                            var i = t.callbackId;
                                            n = function(e) {
                                                u({
                                                    responseId: i,
                                                    responseData: e
                                                })
                                            }
                                        }
                                        var a = WebViewJavascriptBridge._messageHandler;
                                        t.handlerName && (a = r[t.handlerName]);
                                        try {
                                            a(t.data, n)
                                        } catch (c) {
                                            "undefined" != typeof console && console.log("WebViewJavascriptBridge: WARNING: javascript handler threw.", t, c)
                                        }
                                    }
                                }
                                ))
                            }
                            function d(e) {
                                n ? n.push(e) : f(e)
                            }
                            function m(e) {
                                return r[e] ? 1 : 0
                            }
                            window.WebViewJavascriptBridge ? (window.WebViewJavascriptBridge.init = a,
                            window.WebViewJavascriptBridge.send = c,
                            window.WebViewJavascriptBridge.registerHandler = s,
                            window.WebViewJavascriptBridge.callHandler = l,
                            window.WebViewJavascriptBridge._fetchQueue = p,
                            window.WebViewJavascriptBridge._handleMessageFromObjC = d,
                            window.WebViewJavascriptBridge._getMessageHandlers = m,
                            window.WebViewJavascriptBridge.fixed = 1) : window.WebViewJavascriptBridge = {
                                init: a,
                                send: c,
                                registerHandler: s,
                                callHandler: l,
                                _fetchQueue: p,
                                _handleMessageFromObjC: d,
                                _getMessageHandlers: m,
                                fixed: 2
                            };
                            var g, h, y = document;
                            h = function() {
                                var e = y.createEvent("Events");
                                e.initEvent("WebViewJavascriptBridgeReady"),
                                e.bridge = WebViewJavascriptBridge,
                                y.dispatchEvent(e)
                            }
                            ,
                            (e = (g = y).createElement("iframe")).style.display = "none",
                            g.documentElement instanceof HTMLElement ? (g.documentElement.appendChild(e),
                            h()) : window.addEventListener("DOMContentLoaded", (function() {
                                g.documentElement.appendChild(e),
                                h()
                            }
                            ))
                        }()
                    } catch (n) {
                        console.log("android_bridge注入异常", n)
                    }
                }
            }
            ), 200)
        }
    }((function(n) {
        Object.defineProperty(window, "WebViewJavascriptBridge", {
            configurable: !1,
            value: n
        }),
        console.log("Android Javascript bridge ready", n),
        e.bridge = n,
        t(n),
        n._messageHandler || n.init((function(e, t) {
            t && t({
                "Javascript Responds": "Wee!"
            })
        }
        ))
    }
    ))) : r.indexOf("arkweb") > -1 ? (console.log("start bridge ArkWeb"),
    n = function(n) {
        console.log("harmony Javascript bridge ready", n),
        e.bridge = n,
        t(n),
        n._messageHandler || n.init((function(e, t) {
            t && t({
                "Javascript Responds": "Wee!"
            })
        }
        ))
    }
    ,
    window.WebViewJavascriptBridge ? n(window.WebViewJavascriptBridge) : document.addEventListener("WebViewJavascriptBridgeReady", (function(e) {
        n(window.WebViewJavascriptBridge)
    }
    ), !1)) : (console.log("start bridge ios"),
    function(e) {
        var t = window.GZWebViewJavascriptBridge || window.WebViewJavascriptBridge;
        t ? e(t) : window.WVJBCallbacks ? window.WVJBCallbacks.push(e) : (window.WVJBCallbacks = [e],
        window.WVJBErrorCallbacks = [Gr],
        Gr())
    }((function(n) {
        console.log("IOS Javascript bridge ready", n),
        e.bridge = n,
        t(n)
    }
    )))
}
var Qr, Xr, Zr = {
    install: function(e) {
        "unchecked" === e.config.mode || e.env.isGuaziAPP ? function(e) {
            Kr(e, (function() {
                for ((t = e).bridge.getVersion ? t.version = t.bridge.getVersion() : (t.version = "OLD_SDK",
                "brief" !== t.config.mode && console.warn("当前webview容器是旧版sdk，不能完全支持新版方法，具体差异请参考API文档底部注意事项")),
                e.jsBridgeReadyTime = Date.now() - e._initStartTimestamp,
                e.load && e.load(); e._invokeQueue.length; )
                    (n = e._invokeQueue.shift()) && e._invoke.apply(e, n);
                for (var t; e._registerQueue.length; ) {
                    var n;
                    (n = e._registerQueue.shift()) && e._register.apply(e, n)
                }
            }
            ))
        }(e) : console.warn("非APP环境 bridge 无法建立!")
    }
}, Yr = function(e) {
    this._invoke("getUserInfo", e || {})
}, eo = function(e) {
    this._invoke("getDeviceInfo", e || {})
}, to = function(e) {
    this._invoke("getNetworkStatus", e || {})
}, no = function(e) {
    this._invoke("checkPermission", e || {})
}, ro = function(e) {
    /android/i.test(window.navigator.userAgent) && "ALBUM" === e.type && (e.type = "STORAGE"),
    this._invoke("requestPermission", e || {})
}, oo = function(e) {
    this._invoke("getVersion", Cr({}, e || {}))
}, io = function(e) {
    this._invoke("alert", Cr({
        confirmText: "确定"
    }, e || {}))
}, ao = function(e) {
    this._invoke("confirm", Cr({
        confirmText: "确定",
        cancelText: "取消"
    }, e || {}))
}, co = function(e) {
    this._invoke("loading", Cr({
        show: !0,
        maxTime: 20
    }, e || {}))
}, so = function(e) {
    this._invoke("loading", Cr({
        show: !1
    }, e || {}))
}, lo = function(e) {
    this._invoke("previewImage", Cr({
        mapRule: {
            nameMap: {
                guagua: "displayImage"
            },
            paramMap: {
                transformParam: function(t) {
                    "guagua" === t.appKey && (e.url = e.urls && e.urls.length && e.urls[0] || "")
                }
            }
        },
        loop: !0
    }, e || {}))
}, uo = function(e) {
    this._invoke("setTitleBar", Cr({
        showCloseBtn: !0
    }, e || {}))
}, po = function(e) {
    this._invoke("showActionSheet", Cr({}, e || {}))
}, fo = function(e) {
    this._invoke("setScreenOrientation", e || {})
}, mo = function(e) {
    this._invoke("login", e || {})
}, go = function(e) {
    this._invoke("logout", e || {})
}, ho = function(e) {
    this._invoke("pickImage", Cr({
        count: 9,
        sourceType: ["album", "camera"],
        compressed: !0,
        autoUpload: !0
    }, e || {}))
}, yo = function(e) {
    this._invoke("pickVideo", Cr({
        sourceType: ["album", "camera"],
        compressed: !0,
        maxDuration: 60,
        camera: "back"
    }, e || {}))
}, vo = function(e) {
    this._invoke("saveToAlbum", e || {})
}, wo = function(e) {
    this._invoke("openPDF", e || {})
}, _o = function(e) {
    this._invoke("scanCode", Cr({
        onlyFromCamera: !1,
        scanType: ["barCode", "qrCode"],
        scanMode: "single"
    }, e || {}))
}, bo = function(e) {
    this._invoke("scanOCR", Cr({
        onlyFromCamera: !1,
        channel: 1
    }, e || {}))
}, ko = function(e) {
    this._invoke("downloadFile", e || {})
}, $o = function(e) {
    this._invoke("getLocation", e || {})
}, So = function(e) {
    this._invoke("getSelectedCity", e || {})
}, xo = function(e) {
    this._invoke("createWebview", Cr({
        hasTitleBar: !0
    }, e || {}))
}, Oo = function(e) {
    this._invoke("closeWebview", e || {})
}, jo = function(e) {
    this._invoke("makePhoneCall", Cr({
        mapRule: {
            paramMap: {
                data: "extension"
            }
        }
    }, e || {}))
}, Po = function(e) {
    this._invoke("request", Cr({
        method: "GET"
    }, e || {}))
}, Io = function(e) {
    this._invoke("back", e || {})
}, Co = function(e) {
    this._invoke("getSharePreferences", e || {})
}, To = function(e) {
    this._invoke("setSharePreferences", e || {})
}, Ao = {
    code: 0,
    data: {},
    msg: "ok"
}, Eo = function(e) {
    this._register("onWebviewDisplayChange", Ao, e)
}, No = function() {
    var e = !0
      , t = arguments[0];
    "object" === br(arguments[0]) && arguments[0].hasOwnProperty("status") && (e = arguments[0].status,
    t = arguments[1]);
    var n = {
        code: 0,
        data: {
            status: e
        },
        msg: "ok"
    };
    "object" === br(arguments[0]) && arguments[0].customResponseData && (n.customResponseData = !0),
    this._register("onWebviewBeforeBack", n, t)
}, Uo = {
    code: 0,
    data: {},
    msg: "ok"
}, Ro = function(e) {
    this._register("onTitleBarRightClick", Uo, e)
}, Lo = function() {
    var e = arguments[0];
    "object" === br(arguments[0]) && (this._reportMaxTime = arguments[0].reportMaxTime,
    e = arguments[1]),
    this._apiCallResult = e
}, Mo = function(e, t) {
    if ("string" != typeof e)
        throw new Error("api参数异常");
    this._invoke(e, t || {}, "nonstandard")
}, zo = function(e) {
    if ("string" != typeof e)
        throw new Error("api参数异常");
    var t = arguments[1] || {}
      , n = arguments[2];
    if ("function" == typeof arguments[1])
        t = {},
        n = arguments[1];
    else if ("function" != typeof arguments[2])
        throw new Error("参数异常，必须传入一个函数类型");
    var r = {
        code: 0,
        data: t,
        msg: "ok"
    };
    this._register(e, r, n)
}, Do = {
    install: function(e) {
        e.interface("getUserInfo", Yr),
        e.interface("getDeviceInfo", eo),
        e.interface("getNetworkStatus", to),
        e.interface("checkPermission", no),
        e.interface("requestPermission", ro),
        e.interface("getVersion", oo),
        e.interface("alert", io),
        e.interface("confirm", ao),
        e.interface("showLoading", co),
        e.interface("hideLoading", so),
        e.interface("previewImage", lo),
        e.interface("setTitleBar", uo),
        e.interface("showActionSheet", po),
        e.interface("setScreenOrientation", fo),
        e.interface("login", mo),
        e.interface("logout", go),
        e.interface("pickImage", ho),
        e.interface("pickVideo", yo),
        e.interface("saveToAlbum", vo),
        e.interface("openPDF", wo),
        e.interface("scanCode", _o),
        e.interface("scanOCR", bo),
        e.interface("downloadFile", ko),
        e.interface("getLocation", $o),
        e.interface("getSelectedCity", So),
        e.interface("createWebview", xo),
        e.interface("closeWebview", Oo),
        e.interface("makePhoneCall", jo),
        e.interface("request", Po),
        e.interface("back", Io),
        e.interface("getSharePreferences", Co),
        e.interface("setSharePreferences", To),
        e.interface("onWebviewDisplayChange", Eo),
        e.interface("onWebviewBeforeBack", No),
        e.interface("onTitleBarRightClick", Ro),
        e.interface("onAPICallResult", Lo),
        e.interface("invoke", Mo),
        e.interface("register", zo)
    }
}, Wo = function(e) {
    var t, n = (t = new Er(e,function() {
        var e = window.navigator.userAgent
          , t = function(e) {
            var t = e.match(/guazi\/(\w|-|\.|\/)+/gi);
            if (t && t[0]) {
                var n = t[0].replace(/(guazi\/)|[0-9\._\-]|debug|ios|store|android|dev|pre/gi, "")
                  , r = t[0].replace(/guazi\//i, "").split("_")[1];
                if (!r) {
                    var o = t[0].match(/[0-9\.]+/gi, "");
                    o ? r = o[0] : (r = "",
                    console.error("未匹配到app版本", e))
                }
                return {
                    appKey: n,
                    appVersion: r
                }
            }
            return {}
        }(e)
          , n = {
            isGuaziAPP: !1,
            appKey: t.appKey,
            appVersion: t.appVersion,
            name: "",
            system: "ios",
            jssdkVersion: "2.1.48"
        };
        return /android/i.test(e) && (n.system = "android"),
        /ArkWeb/i.test(e) && (n.system = "harmony"),
        /guazi|ganji/i.test(e) && (n.isGuaziAPP = !0,
        n.appKey && (n.name = {
            c: "瓜子二手车",
            newcar: "毛豆新车",
            dfs: "大丰收",
            xiangrikui: "向日葵",
            carchoice: "太阳花",
            Chezhixuan: "太阳花",
            MaodouBusiness: "代理商",
            delivery: "交车宝",
            chesupai: "车速拍",
            chesuda: "车速达",
            jianguazi: "检瓜子",
            chm: "车好卖",
            CheSuTransport: "速车物流",
            newcarservice: "毛豆服务商",
            maocaicai: "毛采采",
            jinrongyun: "金融云",
            GZAres: "阿瑞斯",
            aftermarket: "瓜子养车",
            guagua: "呱呱"
        }[n.appKey])),
        n
    }()),
    t.plugin(Hr),
    t);
    return n._initStartTimestamp = Date.now(),
    n.plugin(Do),
    n.plugin(Zr),
    Object.defineProperty(n, "_initialized", {
        writable: !1,
        value: 1
    }),
    "brief" !== e.mode && n.env.isGuaziAPP && (n.invoke("setJSContext", {
        jssdkVersion: "2.1.48",
        line: e.line || "",
        project: e.project || ""
    }),
    n.getDeviceInfo({
        success: function(e) {
            n.deviceInfo = e || ""
        }
    })),
    n
}, Vo = function(e) {
    var t = Sr(Sr({}, jr), e);
    return t.mapRules = [Pr].concat(function(e) {
        return function(e) {
            if (Array.isArray(e))
                return Or(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || xr(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(t.mapRules || [])),
    "brief" !== e.mode && "function" != typeof e.log && console.warn("请配置log方法，否则可能监听不到请求日志"),
    Wo(t)
}, Bo = function(e) {
    if (!window.nativeSDK) {
        var t = Vo(e);
        if ("brief" === e.mode)
            return t;
        window.nativeSDK = t
    }
    return window.nativeSDK
}, Fo = {
    exports: {}
}, qo = {
    exports: {}
};
Qr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
Xr = {
    rotl: function(e, t) {
        return e << t | e >>> 32 - t
    },
    rotr: function(e, t) {
        return e << 32 - t | e >>> t
    },
    endian: function(e) {
        if (e.constructor == Number)
            return 16711935 & Xr.rotl(e, 8) | 4278255360 & Xr.rotl(e, 24);
        for (var t = 0; t < e.length; t++)
            e[t] = Xr.endian(e[t]);
        return e
    },
    randomBytes: function(e) {
        for (var t = []; e > 0; e--)
            t.push(Math.floor(256 * Math.random()));
        return t
    },
    bytesToWords: function(e) {
        for (var t = [], n = 0, r = 0; n < e.length; n++,
        r += 8)
            t[r >>> 5] |= e[n] << 24 - r % 32;
        return t
    },
    wordsToBytes: function(e) {
        for (var t = [], n = 0; n < 32 * e.length; n += 8)
            t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
        return t
    },
    bytesToHex: function(e) {
        for (var t = [], n = 0; n < e.length; n++)
            t.push((e[n] >>> 4).toString(16)),
            t.push((15 & e[n]).toString(16));
        return t.join("")
    },
    hexToBytes: function(e) {
        for (var t = [], n = 0; n < e.length; n += 2)
            t.push(parseInt(e.substr(n, 2), 16));
        return t
    },
    bytesToBase64: function(e) {
        for (var t = [], n = 0; n < e.length; n += 3)
            for (var r = e[n] << 16 | e[n + 1] << 8 | e[n + 2], o = 0; o < 4; o++)
                8 * n + 6 * o <= 8 * e.length ? t.push(Qr.charAt(r >>> 6 * (3 - o) & 63)) : t.push("=");
        return t.join("")
    },
    base64ToBytes: function(e) {
        e = e.replace(/[^A-Z0-9+\/]/gi, "");
        for (var t = [], n = 0, r = 0; n < e.length; r = ++n % 4)
            0 != r && t.push((Qr.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | Qr.indexOf(e.charAt(n)) >>> 6 - 2 * r);
        return t
    }
},
qo.exports = Xr;
var Jo = {
    utf8: {
        stringToBytes: function(e) {
            return Jo.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
            return decodeURIComponent(escape(Jo.bin.bytesToString(e)))
        }
    },
    bin: {
        stringToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push(255 & e.charCodeAt(n));
            return t
        },
        bytesToString: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push(String.fromCharCode(e[n]));
            return t.join("")
        }
    }
}
  , Ho = Jo
  , Go = function(e) {
    return null != e && (Ko(e) || function(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && Ko(e.slice(0, 0))
    }(e) || !!e._isBuffer)
};
function Ko(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
}
!function() {
    var e = qo.exports
      , t = Ho.utf8
      , n = Go
      , r = Ho.bin
      , o = function(i, a) {
        i.constructor == String ? i = a && "binary" === a.encoding ? r.stringToBytes(i) : t.stringToBytes(i) : n(i) ? i = Array.prototype.slice.call(i, 0) : Array.isArray(i) || i.constructor === Uint8Array || (i = i.toString());
        for (var c = e.bytesToWords(i), s = 8 * i.length, l = 1732584193, u = -271733879, p = -1732584194, f = 271733878, d = 0; d < c.length; d++)
            c[d] = 16711935 & (c[d] << 8 | c[d] >>> 24) | 4278255360 & (c[d] << 24 | c[d] >>> 8);
        c[s >>> 5] |= 128 << s % 32,
        c[14 + (s + 64 >>> 9 << 4)] = s;
        var m = o._ff
          , g = o._gg
          , h = o._hh
          , y = o._ii;
        for (d = 0; d < c.length; d += 16) {
            var v = l
              , w = u
              , _ = p
              , b = f;
            l = m(l, u, p, f, c[d + 0], 7, -680876936),
            f = m(f, l, u, p, c[d + 1], 12, -389564586),
            p = m(p, f, l, u, c[d + 2], 17, 606105819),
            u = m(u, p, f, l, c[d + 3], 22, -1044525330),
            l = m(l, u, p, f, c[d + 4], 7, -176418897),
            f = m(f, l, u, p, c[d + 5], 12, 1200080426),
            p = m(p, f, l, u, c[d + 6], 17, -1473231341),
            u = m(u, p, f, l, c[d + 7], 22, -45705983),
            l = m(l, u, p, f, c[d + 8], 7, 1770035416),
            f = m(f, l, u, p, c[d + 9], 12, -1958414417),
            p = m(p, f, l, u, c[d + 10], 17, -42063),
            u = m(u, p, f, l, c[d + 11], 22, -1990404162),
            l = m(l, u, p, f, c[d + 12], 7, 1804603682),
            f = m(f, l, u, p, c[d + 13], 12, -40341101),
            p = m(p, f, l, u, c[d + 14], 17, -1502002290),
            l = g(l, u = m(u, p, f, l, c[d + 15], 22, 1236535329), p, f, c[d + 1], 5, -165796510),
            f = g(f, l, u, p, c[d + 6], 9, -1069501632),
            p = g(p, f, l, u, c[d + 11], 14, 643717713),
            u = g(u, p, f, l, c[d + 0], 20, -373897302),
            l = g(l, u, p, f, c[d + 5], 5, -701558691),
            f = g(f, l, u, p, c[d + 10], 9, 38016083),
            p = g(p, f, l, u, c[d + 15], 14, -660478335),
            u = g(u, p, f, l, c[d + 4], 20, -405537848),
            l = g(l, u, p, f, c[d + 9], 5, 568446438),
            f = g(f, l, u, p, c[d + 14], 9, -1019803690),
            p = g(p, f, l, u, c[d + 3], 14, -187363961),
            u = g(u, p, f, l, c[d + 8], 20, 1163531501),
            l = g(l, u, p, f, c[d + 13], 5, -1444681467),
            f = g(f, l, u, p, c[d + 2], 9, -51403784),
            p = g(p, f, l, u, c[d + 7], 14, 1735328473),
            l = h(l, u = g(u, p, f, l, c[d + 12], 20, -1926607734), p, f, c[d + 5], 4, -378558),
            f = h(f, l, u, p, c[d + 8], 11, -2022574463),
            p = h(p, f, l, u, c[d + 11], 16, 1839030562),
            u = h(u, p, f, l, c[d + 14], 23, -35309556),
            l = h(l, u, p, f, c[d + 1], 4, -1530992060),
            f = h(f, l, u, p, c[d + 4], 11, 1272893353),
            p = h(p, f, l, u, c[d + 7], 16, -155497632),
            u = h(u, p, f, l, c[d + 10], 23, -1094730640),
            l = h(l, u, p, f, c[d + 13], 4, 681279174),
            f = h(f, l, u, p, c[d + 0], 11, -358537222),
            p = h(p, f, l, u, c[d + 3], 16, -722521979),
            u = h(u, p, f, l, c[d + 6], 23, 76029189),
            l = h(l, u, p, f, c[d + 9], 4, -640364487),
            f = h(f, l, u, p, c[d + 12], 11, -421815835),
            p = h(p, f, l, u, c[d + 15], 16, 530742520),
            l = y(l, u = h(u, p, f, l, c[d + 2], 23, -995338651), p, f, c[d + 0], 6, -198630844),
            f = y(f, l, u, p, c[d + 7], 10, 1126891415),
            p = y(p, f, l, u, c[d + 14], 15, -1416354905),
            u = y(u, p, f, l, c[d + 5], 21, -57434055),
            l = y(l, u, p, f, c[d + 12], 6, 1700485571),
            f = y(f, l, u, p, c[d + 3], 10, -1894986606),
            p = y(p, f, l, u, c[d + 10], 15, -1051523),
            u = y(u, p, f, l, c[d + 1], 21, -2054922799),
            l = y(l, u, p, f, c[d + 8], 6, 1873313359),
            f = y(f, l, u, p, c[d + 15], 10, -30611744),
            p = y(p, f, l, u, c[d + 6], 15, -1560198380),
            u = y(u, p, f, l, c[d + 13], 21, 1309151649),
            l = y(l, u, p, f, c[d + 4], 6, -145523070),
            f = y(f, l, u, p, c[d + 11], 10, -1120210379),
            p = y(p, f, l, u, c[d + 2], 15, 718787259),
            u = y(u, p, f, l, c[d + 9], 21, -343485551),
            l = l + v >>> 0,
            u = u + w >>> 0,
            p = p + _ >>> 0,
            f = f + b >>> 0
        }
        return e.endian([l, u, p, f])
    };
    o._ff = function(e, t, n, r, o, i, a) {
        var c = e + (t & n | ~t & r) + (o >>> 0) + a;
        return (c << i | c >>> 32 - i) + t
    }
    ,
    o._gg = function(e, t, n, r, o, i, a) {
        var c = e + (t & r | n & ~r) + (o >>> 0) + a;
        return (c << i | c >>> 32 - i) + t
    }
    ,
    o._hh = function(e, t, n, r, o, i, a) {
        var c = e + (t ^ n ^ r) + (o >>> 0) + a;
        return (c << i | c >>> 32 - i) + t
    }
    ,
    o._ii = function(e, t, n, r, o, i, a) {
        var c = e + (n ^ (t | ~r)) + (o >>> 0) + a;
        return (c << i | c >>> 32 - i) + t
    }
    ,
    o._blocksize = 16,
    o._digestsize = 16,
    Fo.exports = function(t, n) {
        if (null == t)
            throw new Error("Illegal argument " + t);
        var i = e.wordsToBytes(o(t, n));
        return n && n.asBytes ? i : n && n.asString ? r.bytesToString(i) : e.bytesToHex(i)
    }
}();
var Qo = Object.defineProperty
  , Xo = Object.getOwnPropertySymbols
  , Zo = Object.prototype.hasOwnProperty
  , Yo = Object.prototype.propertyIsEnumerable
  , ei = (e, t, n) => t in e ? Qo(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
const ti = "function" == typeof btoa
  , ni = "function" == typeof Buffer;
"function" == typeof TextDecoder && new TextDecoder;
const ri = "function" == typeof TextEncoder ? new TextEncoder : void 0
  , oi = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
(e => {
    let t = {};
    oi.forEach(( (e, n) => t[e] = n))
}
)();
const ii = String.fromCharCode.bind(String);
"function" == typeof Uint8Array.from && Uint8Array.from.bind(Uint8Array);
const ai = ti ? e => btoa(e) : ni ? e => Buffer.from(e, "binary").toString("base64") : e => {
    let t, n, r, o, i = "";
    const a = e.length % 3;
    for (let c = 0; c < e.length; ) {
        if ((n = e.charCodeAt(c++)) > 255 || (r = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255)
            throw new TypeError("invalid character found");
        t = n << 16 | r << 8 | o,
        i += oi[t >> 18 & 63] + oi[t >> 12 & 63] + oi[t >> 6 & 63] + oi[63 & t]
    }
    return a ? i.slice(0, a - 3) + "===".substring(a) : i
}
  , ci = ni ? e => Buffer.from(e).toString("base64") : e => {
    let t = [];
    for (let n = 0, r = e.length; n < r; n += 4096)
        t.push(ii.apply(null, e.subarray(n, n + 4096)));
    return ai(t.join(""))
}
  , si = e => {
    if (e.length < 2)
        return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? ii(192 | t >>> 6) + ii(128 | 63 & t) : ii(224 | t >>> 12 & 15) + ii(128 | t >>> 6 & 63) + ii(128 | 63 & t);
    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
    return ii(240 | t >>> 18 & 7) + ii(128 | t >>> 12 & 63) + ii(128 | t >>> 6 & 63) + ii(128 | 63 & t)
}
  , li = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
  , ui = ni ? e => Buffer.from(e, "utf8").toString("base64") : ri ? e => ci(ri.encode(e)) : e => ai((e => e.replace(li, si))(e))
  , pi = {
    dev: "//storage.guazi-cloud.com",
    develop: "//storage.guazi-cloud.com",
    preview: "//storage-preview.guazi-apps.com",
    pre: "//storage-preview.guazi-apps.com",
    gzOnline: "//storage.guazi-apps.com",
    online: "//storage-cloud.guazi.com"
}
  , fi = {
    qn: "qn",
    qs: "qs",
    qnbdp: "qnbdp",
    qsbds: "qsbds",
    gzbds: "gzbds",
    gz: "gz",
    gzs: "gzs",
    guaziS: "guaziS"
}
  , di = "image.guazistatic.com"
  , mi = {
    "image1.guazistatic.com": fi.qn,
    "image-pub.guazistatic.com": fi.qnbdp,
    [di]: fi.gz,
    "guazi03.guazistatic.com": fi.qs,
    "image-pub-test.guazistatic.com": fi.qnbdp,
    "bjguazi01.ks3-cn-beijing.ksyun.com": fi.gzs,
    "bjguazi01.ks3-cn-beijing.ksyuncs.com": fi.gzs,
    "guazi04.guazistatic.com": fi.gzs,
    "image-pri.guazistatic.com": fi.qsbds,
    "oss.guazi.com": fi.guaziS
}
  , gi = e => {
    let t = "";
    const n = Object.entries(e);
    return n.forEach(( ([e,r], o) => {
        t += `${e}=${r}`,
        o < n.length - 1 && (t += "&")
    }
    )),
    t
}
;
function hi(e) {
    return e = (e = (e = (e = ( (e, t=!1) => t ? (e => e.replace(/=/g, "").replace(/[+\/]/g, (e => "+" == e ? "-" : "_")))(ui(e)) : ui(e))(e)).replace(/\+/g, "-")).replace(/\//g, "_")).replace(/\=/g, "")
}
function yi(e) {
    var t;
    let n = ""
      , r = e;
    return /\.com/.test(e) && (r = e.split(".com/")[1]),
    n = null == (t = r.match(/^[a-z\/\-A-Z0-9]+\.[a-zA-Z0-9]+/)) ? void 0 : t[0],
    n
}
function vi(e) {
    if (!e)
        return "";
    let t = (e = e.replace("https://", "").replace("http://", "")).indexOf(".com");
    return t > 0 ? e.slice(0, t + 4) : ""
}
class wi {
    constructor(e) {
        var t, n;
        ( (e, t, n) => {
            ei(e, "symbol" != typeof t ? t + "" : t, n)
        }
        )(this, "options", {
            login_type: 2,
            app_id: null,
            env: fi.online,
            fileDomainConfig: mi
        });
        const r = e.env || e.storageEnv || "online";
        let o = 2;
        e.hasOwnProperty("login_type") && (o = e.login_type),
        this.options = {
            login_type: o,
            app_id: e.app_id,
            env: r,
            fileDomainConfig: Object.assign(!0, {}, mi, e.fileDomain || {}),
            storageDomain: ("undefined" != typeof process && "node" === (null == (t = null == process ? void 0 : process.release) ? void 0 : t.name) ? "https" : (null == (n = null == window ? void 0 : window.location) ? void 0 : n.protocol) || "https:") + pi[r],
            token: e.token
        }
    }
    makeAjaxData({fileUrl: e, operationList: t, fileName: n, redirect: r, extraConfig: o}) {
        const {token: i, custom_sign_params: a, customSignParams: c, reserveUrlParams: s, https: l} = o
          , u = /\?/.test(e);
        if (s || u && (e = e.split("?")[0]),
        e && !n && !(n = yi(e)))
            return e;
        let p = ( (e, t) => {
            for (var n in t || (t = {}))
                Zo.call(t, n) && ei(e, n, t[n]);
            if (Xo)
                for (var n of Xo(t))
                    Yo.call(t, n) && ei(e, n, t[n]);
            return e
        }
        )({
            files: n,
            login_type: this.options.login_type,
            app_id: this.options.app_id,
            redirect: r
        }, a || c || {});
        l && (p.https = 1);
        const f = this.joinBaiduParams(t, e);
        return this.options.token && (p.token = this.options.token),
        i && (p.token = i),
        null != t && t.length && (p.operation = f),
        0 === p.login_type && (p = a || c || {}),
        p
    }
    joinFileUrlFromStorageService({fileUrl: e, operationList: t, fileName: n, redirect: r, extraConfig: o}) {
        const i = this.makeAjaxData({
            fileUrl: e,
            operationList: t,
            fileName: n,
            redirect: r,
            extraConfig: o
        });
        return this.options.storageDomain + "/v2/show?" + gi(i)
    }
    joinBaiduParams(e, t) {
        let n = /\?x-bce-process=image/.test(t) ? "/" : "x-bce-process=image/"
          , r = e.find((e => "snapshot" === e.type))
          , o = e.find((e => "ignore-error" === e.type));
        return null != e && e.length && !o && e.push({
            type: "ignore-error",
            options: {
                i: 1
            }
        }),
        r && (n = "x-bce-process=video/"),
        e.forEach(( (r, o) => {
            if (r) {
                const {type: i, options: a} = r;
                n += `${i}`;
                for (let e of Object.entries(a)) {
                    let[r,o] = e;
                    "watermark" === i && o && ("image" === r ? o = this.encodeWaterMarkFileName(o, t) : "text" === r && (o = hi(o))),
                    n += `,${r}_${o}`
                }
                +o != e.length - 1 && (n += "/")
            }
        }
        )),
        n
    }
    joinBaiduFileUrl(e, t, n) {
        if (null == t || !t.length)
            return e;
        const {reserveUrlParams: r} = n
          , o = /\?/.test(e);
        r || o && (e = e.split("?")[0]);
        return `${e}${o && !r || !o ? "?" : ""}${this.joinBaiduParams(t, e)}`
    }
    joinQiNiuParams(e, t, n) {
        let r = "";
        const o = n === fi.qn;
        let i = e.find((e => "snapshot" === e.type));
        const a = {
            resize: "thumbnail"
        };
        return e.forEach(( (n, c) => {
            if (n) {
                const {type: s, options: l} = n;
                if (i)
                    r += "vframe";
                else {
                    const e = /\?imageMogr2/.test(t);
                    r += e ? `|imageMogr2/${a[s] || s}/` : `imageMogr2/${a[s] || s}/`
                }
                switch (s) {
                case "crop":
                    {
                        const {x: e, y: t, w: n, h: o} = l;
                        e || t ? (n && o ? r += `!${n}x${o}` : n && !o ? r += `!${n}x` : !n && o && (r += `!x${t}`),
                        r += `a${e || 0}a${t || 0}`) : n && o ? r += `${n}x${o}` : n && !o ? r += `${n}x` : !n && o && (r += `x${t}`);
                        break
                    }
                case "watermark":
                    r += this.handleQiNiuWatermark(l, t, o);
                    break;
                case "resize":
                    {
                        const {p: e, h: t, w: n, m: o} = l;
                        e ? r += e ? `!${e}` : "" : (n && (r += `${n}x`),
                        t && (r += `x${t}`));
                        break
                    }
                case "quality":
                    {
                        const e = l.q;
                        r += e ? `${e}` : "";
                        break
                    }
                case "format":
                    {
                        const e = l.f;
                        r += e ? `${e}` : "";
                        break
                    }
                case "snapshot":
                    {
                        const {t: e, f: t, w: n, h: o, ar: i} = l;
                        t && (r += `/${t}`),
                        e && (r += `/offset/${e}`),
                        n && (r += `/w/${n}`),
                        o && (r += `/h/${o}`),
                        i && (r += `/rotate/${i}`);
                        break
                    }
                }
                +c != e.length - 1 && (r += "|")
            }
        }
        )),
        "?" === r && (r = ""),
        r
    }
    joinQiNiuFileUrl(e, t, n, r) {
        const {reserveUrlParams: o} = r;
        if (null == t || !t.length)
            return e;
        const i = /\?/.test(e);
        o || i && (e = e.split("?")[0]);
        return `${e}${i && !o || !i ? "?" : ""}${this.joinQiNiuParams(t, e, n)}`
    }
    handleJinShanWatermark(e, t) {
        let n = "";
        const {image: r, t: o, g: i, x: a, y: c, P: s} = e;
        if (r) {
            n += `&image=${this.encodeWaterMarkFileName(r, t)}&type=1`,
            o && (n += `&dissolve=${o}`),
            a && (n += `&dx=${a}`),
            c && (n += `&dy=${c}`),
            i && (n += `&gravity=${i}`),
            s && (n += `&ws=${s}`)
        }
        return n
    }
    joinJinShanParams(e, t) {
        let n = "";
        const r = {
            resize: "imgScale",
            crop: "imageScale",
            quality: "imgScale",
            format: "imgScale",
            watermark: "imgWaterMarker"
        };
        return e.forEach(( (o, i) => {
            if (o) {
                const {type: a, options: c} = o;
                switch (n += `tag=${r[a]}`,
                a) {
                case "crop":
                    {
                        const {x: e, y: t, w: r, h: o} = c;
                        r && (n += `&w=${r}`),
                        o && (n += `&h=${o}`),
                        e && (n += `&cox=${e}`),
                        t && (n += `&coy=${t}`),
                        n += "&c=1&f=1";
                        break
                    }
                case "watermark":
                    n += this.handleJinShanWatermark(c, t);
                    break;
                case "resize":
                    {
                        const {p: e, h: t, w: r, m: o} = c;
                        e ? n += `&p=${e}` : (r && (n += `&w=${r}`),
                        t && (n += `&h=${t}`));
                        break
                    }
                case "quality":
                    {
                        const e = c.q;
                        e && (n += `&q=${e}`);
                        break
                    }
                case "format":
                    {
                        const e = c.f;
                        n += `&F=${e}`;
                        break
                    }
                }
                +i != e.length - 1 && (n += "|")
            }
        }
        )),
        n
    }
    joinJinShanFileUrl(e, t, n) {
        if (null == t || !t.length)
            return e;
        const {reserveUrlParams: r} = n
          , o = /@base/.test(e);
        r || o && (e = e.split("@base")[0]);
        return `${e}${o && !r || !o ? "@base@" : "|"}${this.joinJinShanParams(t, e)}`
    }
    handleQiNiuWatermark(e, t, n) {
        let r = "";
        const {image: o, t: i, g: a, x: c, y: s, text: l, size: u, color: p, style: f, layout: d, P: m} = e;
        if (l)
            r += `${"tile" === d ? 4 : 2}/text/${hi(l)}`,
            u && (r += `/fontsize/${u}`),
            p && (r += `/fill/${n ? hi(p) : p}`),
            f && (r += `/fontstyle/${f}`);
        else if (o) {
            r += `1/image/${this.encodeWaterMarkFileName(o, t)}`
        }
        return i && (r += `/dissolve/${i}`),
        c && (r += `/dx/${c}`),
        s && (r += `/dy/${s}`),
        a && (r += `/gravity/${a}`),
        m && (r += `/ws/${m}`),
        r
    }
    encodeWaterMarkFileName(e, t) {
        let n = "";
        const r = vi(t);
        switch (this.options.fileDomainConfig[r]) {
        case fi.qn:
            n = hi(`kodo://guazi001/${e}`);
            break;
        case fi.qnbdp:
            n = hi(e);
            break;
        case fi.gz:
            vi(e) || (e = `http://${di}/${e}`),
            n = hi(e);
            break;
        default:
            n = e
        }
        return n
    }
    handleUrl(e, t=[], n={}) {
        if (!e)
            return e;
        var r;
        r = t,
        "[object Object]" === Object.prototype.toString.call(r) && (t = [t]);
        const o = vi(e);
        if (!o)
            return this.joinFileUrlFromStorageService({
                fileName: yi(e),
                operationList: t,
                redirect: 1,
                extraConfig: n,
                fileUrl: e
            });
        const i = this.options.fileDomainConfig[o];
        let a = "";
        switch (i) {
        case fi.qn:
            a = this.joinQiNiuFileUrl(e, t, i, n);
            break;
        case fi.qnbdp:
        case fi.gz:
            a = this.joinBaiduFileUrl(e, t, n);
            break;
        default:
            a = this.joinFileUrlFromStorageService({
                fileUrl: e,
                operationList: t,
                redirect: 1,
                extraConfig: n
            })
        }
        return a
    }
    getUrl(e, t=[], n={
        reserveUrlParams: !1
    }) {
        return this.handleUrl(e, t, n)
    }
    batchGetUrl(e, t=[], n={
        reserveUrlParams: !1
    }) {
        return e.map((e => this.handleUrl(e, t, n)))
    }
    setUrl(e, t=[], n={
        reserveUrlParams: !0
    }) {
        return this.handleUrl(e, t, n)
    }
    batchSetUrl(e, t=[], n={
        reserveUrlParams: !0
    }) {
        return e.map((e => this.handleUrl(e, t, n)))
    }
    showImage(e, t=[], n={}) {
        return this.handleUrl(e, t, n)
    }
    fetchFileUrlByName(e, t=[], n={}) {
        return fetch(this.joinFileUrlFromStorageService({
            fileName: e,
            operationList: t,
            redirect: 0,
            extraConfig: n
        }), {
            headers: {},
            credentials: "include"
        }).then((e => e.json())).then((t => {
            var n;
            return null == (n = null == t ? void 0 : t.data) ? void 0 : n[e]
        }
        ))
    }
    batchFetchFileUrlByName(e=[], t=[], n={}) {
        const r = e.join(",")
          , o = this.makeAjaxData({
            fileName: r,
            operationList: t,
            redirect: 0,
            extraConfig: n
        })
          , {files: i} = o
          , a = ( (e, t) => {
            var n = {};
            for (var r in e)
                Zo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && Xo)
                for (var r of Xo(e))
                    t.indexOf(r) < 0 && Yo.call(e, r) && (n[r] = e[r]);
            return n
        }
        )(o, ["files"])
          , c = new FormData;
        return c.append("keys", i),
        fetch(this.options.storageDomain + "/v2/show?" + gi(a), {
            method: "POST",
            body: c,
            headers: {},
            credentials: "include"
        }).then((e => e.json())).then((e => e.data))
    }
    fetchImageUrlByName(e, t=[], n={}) {
        return fetch(this.joinFileUrlFromStorageService({
            fileName: e,
            operationList: t,
            redirect: 0,
            extraConfig: n
        }), {
            headers: {},
            credentials: "include"
        }).then((e => e.json())).then((t => {
            var n;
            return null == (n = null == t ? void 0 : t.data) ? void 0 : n[e]
        }
        ))
    }
}
function _i(e, t, n, r, o, i, a) {
    try {
        var c = e[i](a)
          , s = c.value
    } catch (l) {
        return void n(l)
    }
    c.done ? t(s) : u.resolve(s).then(r, o)
}
function bi(e) {
    return function() {
        var t = this
          , n = arguments;
        return new u((function(r, o) {
            var i = e.apply(t, n);
            function a(e) {
                _i(i, r, o, a, c, "next", e)
            }
            function c(e) {
                _i(i, r, o, a, c, "throw", e)
            }
            a(void 0)
        }
        ))
    }
}
function ki(e, t) {
    if (null == e)
        return {};
    var n, r, o = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = {}, i = p(e);
        for (r = 0; r < i.length; r++)
            n = i[r],
            f(t).call(t, n) >= 0 || (o[n] = e[n]);
        return o
    }(e, t);
    if (d) {
        var i = d(e);
        for (r = 0; r < i.length; r++)
            n = i[r],
            f(t).call(t, n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
}
function $i(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Si(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        m(e, r.key, r)
    }
}
function xi(e, t, n) {
    return t && Si(e.prototype, t),
    n && Si(e, n),
    m(e, "prototype", {
        writable: !1
    }),
    e
}
function Oi(e, t, n) {
    return t in e ? m(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function ji(e) {
    return (ji = "function" == typeof A && "symbol" == typeof E ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof A && e.constructor === A && e !== A.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Pi(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Ii(e, t) {
    var n;
    if (e) {
        if ("string" == typeof e)
            return Pi(e, t);
        var r = z(n = Object.prototype.toString.call(e)).call(n, 8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name),
        "Map" === r || "Set" === r ? D(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pi(e, t) : void 0
    }
}
function Ci(e) {
    return function(e) {
        if (N(e))
            return Pi(e)
    }(e) || function(e) {
        if (void 0 !== A && null != U(e) || null != e["@@iterator"])
            return D(e)
    }(e) || Ii(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function Ti(e, t) {
    return function(e) {
        if (N(e))
            return e
    }(e) || function(e, t) {
        var n = null == e ? null : void 0 !== A && U(e) || e["@@iterator"];
        if (null != n) {
            var r, o, i = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                !t || i.length !== t); a = !0)
                    ;
            } catch (s) {
                c = !0,
                o = s
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c)
                        throw o
                }
            }
            return i
        }
    }(e, t) || Ii(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function Ai(e) {
    return "[object Object]" === Object.prototype.toString.call(e)
}
function Ei() {
    for (var e = Q(null), t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
    return o(n).call(n, (function(t) {
        var n;
        t && o(n = R(t)).call(n, (function(n) {
            var r = t[n];
            Ai(r) ? Ai(e[n]) ? e[n] = Ei(e[n], r) : e[n] = Ei(r) : y(r) ? e[n] = Ci(r) : e[n] = r
        }
        ))
    }
    )),
    e
}
function Ni() {
    if (window && window.location) {
        var e, t, n = g(e = window.location.href).call(e, "?"), r = {}, i = h(t = window.location.href).call(t, n + 1);
        if (i && i.length > 0) {
            var a = i.split("&");
            a && o(a).call(a, (function(e) {
                var t = Ti(e.split("="), 2)
                  , n = t[0]
                  , o = t[1];
                r[n] = o
            }
            ))
        }
        return r
    }
    return {}
}
var Ui = Nn()
  , Ri = ""
  , Li = "undefined" == typeof window
  , Mi = "undefined" != typeof window
  , zi = ["wx-xny"];
Mi && (Ri = window.navigator.userAgent);
var Di = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /Guazi\/c_/.test(e)
}
  , Wi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /gz\.quick/i.test(e)
}
  , Vi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return !!/micromessenger/i.test(e)
}
  , Bi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /ios|iphone|ipad|ipod/i.test(e)
}
  , Fi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /iPad/i.test(e)
}
  , qi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /android/i.test(e)
}
  , Ji = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /ArkWeb/i.test(e)
}
  , Hi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return !!e && !/Android|webOS|iPhone|iPod|BlackBerry|ArkWeb/i.test(e)
}
  , Gi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return y(e) ? v(e).call(e, (function(e) {
        return s(zi).call(zi, e)
    }
    )) : !!s(zi).call(zi, e) || /miniprogram/i.test(e)
}
  , Ki = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /swan\//.test(e)
}
  , Qi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /xiangrikui/i.test(e)
}
  , Xi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /Guazi\/chm/i.test(e)
}
  , Zi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /miniProgram/.test(e) && (/KUAISHOU/.test(e) || /KmaSimulator/.test(e))
}
  , Yi = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /miniProgram/.test(e) && (/NEBULA/.test(e) || /KmaSimulator/.test(e))
}
  , ea = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return /toutiaomicroapp/i.test(e)
}
  , ta = function() {
    var e;
    return s(e = ["crm", "qingtian"]).call(e, Ni().system)
}
  , na = function() {
    return s(zi).call(zi, Ni().wx_aid)
}
  , ra = function() {
    return Ni().toBReqUserId && ta() || Ui.get("to_b_req_user_id")
}
  , oa = function(e) {
    return e || (e = window.location.hostname),
    /guazi-mock/.test(e) ? "mock" : /guazi-cloud/.test(e) ? "development" : /\w+-preview/.test(e) ? "preview" : /guazi-online/.test(e) ? "online" : /\w+-dt/.test(e) ? "disaster" : "production"
};
function ia(e) {
    if (Di()) {
        var t = e || Ri;
        return h(t).call(t, w(t).call(t, "Guazi/c_") + "Guazi/c_".length, g(t).call(t, "$"))
    }
    return "0.0.0.0"
}
var aa = "";
function ca(e) {
    var t, n, r, o = e;
    if (!o) {
        if ("object" !== ("undefined" == typeof window ? "undefined" : ji(window)))
            return aa + "__prev";
        o = window.location.href
    }
    var i = new _(o);
    aa = b(t = i.hostname).call(t, ".", "") + b(n = i.pathname).call(n, "/", "_");
    var a = b(r = i.hash.split("?")[0]).call(r, "/", "");
    return s(a).call(a, "wxinfo") || (aa += a),
    aa
}
function sa(e, t) {
    for (var n, r, o, i = t || ia(), a = k(n = h(r = i.split("-")[0].split(".")).call(r, 0, 3)).call(n, (function(e) {
        return Number(e)
    }
    )), c = k(o = e.split(".")).call(o, (function(e) {
        return Number(e)
    }
    )), s = 0; s < a.length; s++) {
        if (a[s] < c[s])
            return !1;
        if (a[s] > c[s])
            return !0
    }
    return !0
}
var la = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri;
    return Di(e) ? "app" : tr(e) ? "xiaochengxu" : "wap"
}
  , ua = oa()
  , pa = {
    mock: "https://muc.guazi-cloud.com",
    development: "https://muc.guazi-cloud.com",
    preview: "https://muc-preview.guazi-apps.com",
    production: "https://uc.guazi.com"
}[ua]
  , fa = {
    mock: "https://buy.guazi-cloud.com",
    development: "https://buy.guazi-cloud.com",
    preview: "https://buy-preview.guazi-apps.com",
    production: "https://m.guazi.com",
    online: "https://m.guazi-online.com",
    disaster: ""
}[ua]
  , da = {
    mock: "https://act.guazi-cloud.com",
    development: "https://act.guazi-cloud.com",
    preview: "https://act-preview.guazi-apps.com",
    production: "https://act.guazi.com"
}[ua]
  , ma = {
    mock: "https://gateway-dev.guazi-cloud.com/call_sale/smart_sale_service",
    development: "https://gateway-dev.guazi-cloud.com/call_sale/smart_sale_service",
    preview: "https://kong-pre.guazi.com/call_sale/smart_sale_service",
    production: "https://kong.guazi.com/call_sale/smart_sale_service"
}[ua]
  , ga = "";
function ha(e) {
    var t = e || ga || "";
    t = t.toLowerCase();
    var n = "";
    if (w(t).call(t, "mac os x") > -1) {
        var r = t.match(/os [\d._]*/gi);
        n = "IOS".concat("".concat(r).replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."))
    } else
        n = w(t).call(t, "arkweb") > -1 ? "Harmony" : w(t).call(t, "android") > -1 || w(t).call(t, "linux") > -1 ? w(t).call(t, "(android;") >= 0 ? "Android".concat(t.substring(w(t).call(t, "(android;") + 9, w(t).call(t, ";dpi"))) : "Android".concat(t.substring(w(t).call(t, "android ") + 8, w(t).call(t, ";", w(t).call(t, "android ")) - w(t).call(t, "android ") - 8)) : w(t).call(t, "bb10") > -1 ? "blackberry".concat(t.substring(w(t).call(t, "bb10") + 5, w(t).call(t, ";", w(t).call(t, "bb10")) - w(t).call(t, "bb10") - 5)) : w(t).call(t, "iemobile") > -1 ? "winphone".concat(t.substring(w(t).call(t, "iemobile") + 9, w(t).call(t, ";", w(t).call(t, "iemobile")) - w(t).call(t, "iemobile") - 9)) : w(t).call(t, "windows nt 5.0") > -1 ? "Windows 2000" : w(t).call(t, "windows nt 5.1") > -1 || w(t).call(t, "windows nt 5.2") > -1 ? "Windows XP" : w(t).call(t, "windows nt 6.0") > -1 ? "Windows Vista" : w(t).call(t, "windows nt 6.1") > -1 || w(t).call(t, "windows 7") > -1 ? "Windows 7" : w(t).call(t, "windows nt 6.2") > -1 || w(t).call(t, "windows 8") > -1 ? "Windows 8" : w(t).call(t, "windows nt 6.3") > -1 ? "Windows 8.1" : w(t).call(t, "windows nt 6.2") > -1 || w(t).call(t, "windows nt 10.0") > -1 ? "Windows 10" : "Unknown";
    return n
}
function ya() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ga
      , t = {
        web: 1,
        wap: 2,
        ios: 3,
        ipad: 4,
        android: 5,
        other: 6,
        weapp: 7,
        swan: 8,
        alipay: 9,
        quickApp: 10,
        ksxcx: 11,
        ksquickxcx: 12,
        harmony: 13,
        dyxcx: 14
    };
    return Hi(e) ? t.web : Di(e) ? Fi(e) ? t.ipad : Bi(e) ? t.ios : qi(e) ? t.android : Ji(e) ? t.harmony : t.other : Zi(e) ? t.ksxcx : Ki(e) ? t.swan : Yi(e) ? t.ksquickxcx : ea(e) ? t.dyxcx : Wi(e) ? t.quickApp : Gi(e) ? t.weapp : t.wap
}
function va() {
    if (Di()) {
        if (Bi())
            return "ios";
        if (Ji())
            return "harmony";
        if (qi())
            return "android"
    } else {
        if (Ki())
            return "bdxcx";
        if (Zi())
            return "ksxcx";
        if (na())
            return "xnyxcx";
        if (ea())
            return "dyxcx";
        if (Gi())
            return "xiaochengxu";
        if (Wi())
            return "kuaiyingyong";
        if (Xi())
            return "chm";
        if (function() {
            return /Guazi\/crm/i.test(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri)
        }())
            return "chmbd"
    }
    return ta() ? "crm2" : "wap"
}
Mi && (ga = window.navigator.userAgent);
var wa = {
    setItem: function() {
        try {
            var e;
            return (e = localStorage).setItem.apply(e, arguments)
        } catch (t) {
            return console.log(t),
            ""
        }
    },
    getItem: function() {
        var e = localStorage.getItem(arguments.length <= 0 ? void 0 : arguments[0]) || "";
        try {
            return $(e).call(e, '"') && S(e).call(e, '"') ? JSON.parse(e) : e
        } catch (t) {
            return console.log(t),
            e
        }
    },
    removeItem: function() {
        return localStorage.removeItem(arguments.length <= 0 ? void 0 : arguments[0])
    },
    clear: function() {
        return localStorage.clear()
    },
    session: {
        setItem: function() {
            try {
                var e;
                return (e = sessionStorage).setItem.apply(e, arguments)
            } catch (t) {
                return console.log(t),
                ""
            }
        },
        getItem: function() {
            var e = sessionStorage.getItem(arguments.length <= 0 ? void 0 : arguments[0]) || "";
            try {
                return $(e).call(e, '"') && S(e).call(e, '"') ? JSON.parse(e) : e
            } catch (t) {
                return console.log(t),
                e
            }
        },
        removeItem: function() {
            return sessionStorage.removeItem(arguments.length <= 0 ? void 0 : arguments[0])
        },
        clear: function() {
            return sessionStorage.clear()
        }
    }
}
  , _a = {};
Mi && (_a = Vo({
    line: "c2c",
    mode: "brief",
    project: "guazi-fe_utils",
    mapRules: [{
        appKey: "c",
        invokeVersion: "v2",
        rule: {
            getNetworkStatus: {
                previousName: "getNetWorkState",
                transformRes: e => {
                    const {code: t} = e.response || {};
                    e.response.type = {
                        0: "WIFI",
                        1: "WWAN",
                        2: "NONE"
                    }[t] || "UNKNOWN",
                    delete e.response.code
                }
            },
            requestPermission: {
                transformParam: e => {
                    const t = {
                        MICROPHONE: 1,
                        PUSH: 3
                    }[e.data.type] || 2;
                    e.data = {
                        mode: t
                    },
                    e.api = "checkPermissionWindow"
                }
            },
            alert: {
                paramMap: {
                    content: "message",
                    confirmText: "btn_text"
                },
                resMap: {
                    value: (e, t) => {
                        t.confirm = !e
                    }
                }
            },
            confirm: {
                paramMap: {
                    content: "message",
                    confirmText: "yes_btn_text",
                    cancelText: "no_btn_text"
                },
                resMap: {
                    value: (e, t) => {
                        t.confirm = !!e
                    }
                }
            },
            setScreenOrientation: {
                previousName: "rotateScreenOrientation",
                transformParam: e => {
                    const {orientation: t} = e.data || {};
                    e.data.screen_orientation = "horizontal" === t ? 1 : 2,
                    delete e.data.orientation
                }
            },
            login: {
                transformParam: e => {
                    const {extra: t} = e.data || {};
                    "object" == typeof t && (e.data = Object.assign({}, e.data, t),
                    delete e.data.extra)
                }
                ,
                transformRes: e => {
                    const {token: t} = e.response || {};
                    e.response.status = -1,
                    t && (e.response.status = 1)
                }
            },
            scanCode: {
                previousName: "ScanQRCode"
            },
            pickImage: {
                transformParam: e => {
                    const {sourceType: t, bizId: n, isPrivate: r, count: o=1} = e.data || {}
                      , i = e.compareVersion(e.appVersion, "9.8.0") >= 0;
                    n && i ? (e._apiV2 = !0,
                    t && ("album" === t[0] ? (e.api = "uploadImageV2",
                    e.data.currentLen = o) : (e.api = "openCameraV2",
                    e.data.remain = o)),
                    e.data.isPrivate = !0 === r ? 1 : 0) : t && ("album" === t[0] ? (e.api = "uploadImage",
                    e.data.currentLen = o) : (e.api = "openCamera",
                    e.data.remain = o))
                }
                ,
                resMap: {
                    url: "files",
                    imgUrls: "files"
                },
                transformRes: e => {
                    if ("string" == typeof e.response ? e.response = {
                        code: 0,
                        files: e.response.split(",")
                    } : "string" == typeof e.response.files && (e.response.files = e.response.files.split(",")),
                    e._apiV2 && e.response.files) {
                        const t = []
                          , n = [];
                        e.response.files.forEach((e => {
                            e && e.url && (t.push(e.url),
                            n.push(e.key || e.url))
                        }
                        )),
                        e.response.files = t,
                        e.response.identify = n
                    }
                }
            },
            pickVideo: {
                transformParam: e => {
                    const {bizId: t, isPrivate: n} = e.data || {}
                      , r = e.compareVersion(e.appVersion, "9.8.0") >= 0;
                    t && r && (e._apiV2 = !0,
                    e.api = "pickVideoV2",
                    e.data.isPrivate = !0 === n ? 1 : 0)
                }
                ,
                transformRes: e => {
                    const {data: t} = e.response || {};
                    "string" == typeof t && (e.response.data = JSON.parse(t));
                    const {fileKey: n} = e.response.data;
                    n && (e.response.data.identify = n)
                }
            },
            saveToAlbum: {
                previousName: "saveAlbum",
                transformParam: e => {
                    const {content: t} = e.data || {};
                    t && (e.data._param = t)
                }
            },
            openPDF: {
                previousName: "openDocument",
                paramMap: {
                    url: "filePath"
                }
            },
            request: {
                previousName: "requestByNative",
                paramMap: {
                    header: "headers",
                    data: "params"
                },
                resMap: {
                    status: "statusCode",
                    headers: "header"
                }
            },
            showActionSheet: {
                previousName: "showShareDialog",
                transformParam: e => {
                    const {groups: t} = e.data || {};
                    try {
                        const n = t[0] && t[0][0];
                        if (n) {
                            const t = {
                                shareTitle: "title",
                                shareContent: "content",
                                shareLink: "url",
                                shareImgUrl: "img"
                            }
                              , r = {
                                shareMediaType: "type",
                                shareTitle: "miniProgramTitle",
                                shareContent: "miniProgramSubTitle",
                                shareLink: "shareMiniProgramUrl",
                                shareAppid: "miniProgramFallbackUrl",
                                shareImgUrl: "shareMiniProgramImageUrl",
                                isSimple: "isSimple"
                            }
                              , o = {
                                shareAppid: "url"
                            };
                            if ("miniprogram" === n.shareMediaType) {
                                const i = {};
                                Object.keys(t).forEach((e => {
                                    i[t[e] || e] = n[e] || ""
                                }
                                )),
                                Object.keys(r).forEach((e => {
                                    i[r[e] || e] = n[e] || ""
                                }
                                )),
                                Object.keys(o).forEach((e => {
                                    i[o[e] || e] = n[e] || ""
                                }
                                )),
                                e.data = {
                                    ...e.data,
                                    ...n,
                                    ...i
                                }
                            } else
                                Object.keys(n).forEach((r => {
                                    e.data[t[r] || r] = n[r] || ""
                                }
                                ));
                            delete e.data.groups
                        }
                    } catch (n) {
                        e.log(n, "error")
                    }
                }
                ,
                transformRes: e => {
                    const t = e.response || {};
                    t.status = t.isSuccess ? 0 : 2;
                    t.channel && (t.type = {
                        1: "share-wx-friend",
                        2: "share-wx-moments"
                    }[t.channel] || "unknown"),
                    t.isSuccess || (t.type = ""),
                    e.response = t
                }
            }
        }
    }],
    log: function(e, t) {
        console.log(e, t)
    }
}));
var ba = _a;
function ka(e) {
    return new a((function(t, n) {
        ba[e]({
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                n(e)
            }
        })
    }
    ))
}
var $a, Sa = {};
$a = bi(r.mark((function e() {
    var t, n, l, u, p, f, d, m, g, h, y, v, w, _, b = arguments;
    return r.wrap((function(e) {
        for (; ; )
            switch (e.prev = e.next) {
            case 0:
                if (t = b.length > 0 && void 0 !== b[0] ? b[0] : [],
                Di()) {
                    e.next = 4;
                    break
                }
                return console.warn("getAppInfo方法只能在二手车app中调用"),
                e.abrupt("return", {});
            case 4:
                if (n = {},
                l = Ni(),
                "{}" === c(Sa) && (Sa = JSON.parse(decodeURIComponent(l.app_info || "{}"))),
                u = [],
                p = [],
                f = {
                    cityInfo: "getSelectedCity",
                    deviceInfo: "getDeviceInfo",
                    userInfo: "getUserInfo"
                },
                s(t).call(t, "cityInfo") && (Sa.city_id && Sa.city_domain ? (n.cityId = Sa.city_id,
                n.cityDomain = Sa.city_domain) : u.push("cityInfo")),
                s(t).call(t, "deviceInfo") && (Sa.device_id && Sa.app_id && Sa.version_id && Sa.os ? (n.deviceId = Sa.device_id,
                n.appId = Sa.app_id,
                n.versionId = Sa.version_id,
                n.system = Sa.os) : (Bi() && (Sa.os = "iOS"),
                qi() && (Sa.os = "Android"),
                u.push("deviceInfo"))),
                s(t).call(t, "userInfo") && (Sa.token ? n.token = Sa.token : u.push("userInfo")),
                !u || 0 !== u.length) {
                    e.next = 15;
                    break
                }
                return e.abrupt("return", n);
            case 15:
                return o(u).call(u, (function(e) {
                    p.push(ka(f[e]))
                }
                )),
                e.prev = 16,
                e.next = 19,
                a.allSettled(p);
            case 19:
                return d = e.sent,
                m = {},
                o(d).call(d, (function(e) {
                    "fulfilled" === e.status && i(m, e.value)
                }
                )),
                g = m.cityId,
                h = m.domain,
                y = m.deviceId,
                v = m.appId,
                w = m.appVersion,
                _ = m.token,
                g && (n.cityId = g),
                h && (n.cityDomain = h),
                y && (n.deviceId = y),
                v && (n.appId = v),
                w && (n.versionId = w),
                _ && (n.token = _),
                e.abrupt("return", n);
            case 32:
                return e.prev = 32,
                e.t0 = e.catch(16),
                console.log("==>getAppInfo error", e.t0),
                e.abrupt("return", n);
            case 36:
            case "end":
                return e.stop()
            }
    }
    ), e, null, [[16, 32]])
}
)));
var xa = Nn();
Wi() && (window.system.onmessage = function(e) {
    "login" === (e = JSON.parse(e)).action ? (xa.set("guaZiUserInfo", e.data.webToken, {
        maxAge: 60,
        path: "/",
        domain: document.domain
    }),
    window.location.reload()) : "logout" === e.action && (xa.remove("guaZiUserInfo", {
        path: "/",
        domain: document.domain
    }),
    window.location.reload())
}
);
var Oa, ja = function(e) {
    var t;
    if (e.withoutToken)
        return e;
    if (Li) {
        if (e.req) {
            var n = hr.parse(e.req.headers.cookie || "").guaZiUserInfo || "";
            32 === n.length ? e.headers.common.token = n : n.length > 0 && (e.headers.common.webToken = n)
        }
    } else {
        if (Di() && !Xi() || "1" === (null === (t = Ni()) || void 0 === t ? void 0 : t.forceNativeToken))
            return e.onGetTokenStart && e.onGetTokenStart(),
            new a((function(t) {
                ba.getUserInfo({
                    success: function(n) {
                        var r = "";
                        n.token && (r = n.token);
                        var o = n.longUserId
                          , i = n.org_user_id;
                        e.headers.common.token = r,
                        e.userId = o,
                        e.orgUserId = i,
                        t(e)
                    },
                    fail: function() {
                        var n = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            if (!Di())
                                return console.warn("getAppInfo方法只能在二手车app中调用"),
                                {};
                            var t = {}
                              , n = Ni();
                            return "{}" === c(Sa) && (Sa = JSON.parse(decodeURIComponent(n.app_info || "{}"))),
                            s(e).call(e, "cityInfo") && Sa.city_id && Sa.city_domain && (t.cityId = Sa.city_id,
                            t.cityDomain = Sa.city_domain),
                            s(e).call(e, "deviceInfo") && Sa.device_id && Sa.app_id && Sa.version_id && Sa.os && (t.deviceId = Sa.device_id,
                            t.appId = Sa.app_id,
                            t.versionId = Sa.version_id,
                            t.system = Sa.os),
                            s(e).call(e, "userInfo") && Sa.token && (t.token = Sa.token),
                            t
                        }(["userInfo"]);
                        e.headers.common.token = n.token || "",
                        t(e)
                    },
                    complete: function() {
                        e.onGetTokenEnd && e.onGetTokenEnd()
                    }
                })
            }
            ));
        tr() ? e.headers.common.token = wa.getItem("MINIPROGRAM_TOKEN") || "" : e.headers.common.token = xa.get("CHDSSO") || ""
    }
    return e
}, Pa = function(e) {
    return e.data && (10001 === e.data.code || -2005 === e.data.code) && e.config.autoLogin ? new a((function() {
        var t = e.data.redirect_uri || function() {
            var e, t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                returnUrl: ""
            }).returnUrl;
            return !t && Vi() && (t = window.location.href),
            j(e = "".concat(pa, "/guazi-user-center/uc/login?next=")).call(e, encodeURIComponent(t) || "")
        }();
        Di() ? (ba.logout({}),
        x((function() {
            ba.login({
                extra: {
                    isNeedAB: !0
                },
                success: function(e) {
                    1 === e.status && window.location.reload()
                }
            })
        }
        ), 300)) : tr() ? dr({
            replace: !0,
            url: "/pages/login/index?returnUrl=".concat(encodeURIComponent(window.location.href), "&replace=1")
        }) : window.location.href = t
    }
    )) : e
}, Ia = new Uint8Array(16);
function Ca() {
    if (!Oa && !(Oa = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Oa(Ia)
}
var Ta = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Aa(e) {
    return "string" == typeof e && Ta.test(e)
}
for (var Ea = [], Na = 0; Na < 256; ++Na)
    Ea.push((Na + 256).toString(16).substr(1));
function Ua(e, t, n) {
    var r = (e = e || {}).random || (e.rng || Ca)();
    if (r[6] = 15 & r[6] | 64,
    r[8] = 63 & r[8] | 128,
    t) {
        n = n || 0;
        for (var o = 0; o < 16; ++o)
            t[n + o] = r[o];
        return t
    }
    return function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          , n = (Ea[e[t + 0]] + Ea[e[t + 1]] + Ea[e[t + 2]] + Ea[e[t + 3]] + "-" + Ea[e[t + 4]] + Ea[e[t + 5]] + "-" + Ea[e[t + 6]] + Ea[e[t + 7]] + "-" + Ea[e[t + 8]] + Ea[e[t + 9]] + "-" + Ea[e[t + 10]] + Ea[e[t + 11]] + Ea[e[t + 12]] + Ea[e[t + 13]] + Ea[e[t + 14]] + Ea[e[t + 15]]).toLowerCase();
        if (!Aa(n))
            throw TypeError("Stringified UUID is invalid");
        return n
    }(r)
}
function Ra(e, t) {
    var n = R(e);
    if (L) {
        var r = L(e);
        t && (r = M(r).call(r, (function(t) {
            return T(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function La(e, t) {
    if (!Mi)
        return a.reject(new Error("非浏览器环境"));
    var n, r, o = t || window.gtk;
    return o ? ("string" == typeof e ? n = e : (n = (null == e ? void 0 : e.moduleId) || (null == e ? void 0 : e.module_id) || "",
    r = "number" == typeof (null == e ? void 0 : e.position) ? null == e ? void 0 : e.position : (null == e ? void 0 : e.position) || "null"),
    new a((function(e) {
        o("get", "mti", {
            module_id: n,
            position: r
        }, (function(t) {
            e(t)
        }
        ))
    }
    ))) : a.reject(new Error("请先引入gtk"))
}
function Ma(e, t) {
    if (!Mi)
        return a.resolve(!1);
    var n = e || window.gtk
      , r = t.autoParams || {};
    return n ? new a((function(t) {
        La({}, e).then((function(e) {
            n("get", "clientTimeOfLastPage", (function(i) {
                n("event", "timeOnPage", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = null != arguments[t] ? arguments[t] : {};
                        if (t % 2)
                            o(n = Ra(Object(r), !0)).call(n, (function(t) {
                                Oi(e, t, r[t])
                            }
                            ));
                        else if (P)
                            I(e, P(r));
                        else {
                            var i;
                            o(i = Ra(Object(r))).call(i, (function(t) {
                                C(e, t, T(r, t))
                            }
                            ))
                        }
                    }
                    return e
                }({
                    time_on_page: J() - i,
                    event_callback: t,
                    mti: e
                }, r))
            }
            ))
        }
        ))
    }
    )) : a.resolve(!1)
}
var za = function(e) {
    try {
        return JSON.parse(e)
    } catch (t) {
        return e
    }
};
var Da = Nn()
  , Wa = {
    g_c: 67,
    g_c_d: "sz",
    g_c_n: "苏州",
    d_g_c: "1",
    l_c: -1,
    l_c_d: "www",
    l_c_n: "",
    s_c: 67,
    s_c_d: "sz",
    s_c_n: "苏州",
    d_s_c: "1"
}
  , Va = {
    guaziCity: "g_c",
    guaziCityName: "g_c_n",
    guaziCityDomain: "g_c_d",
    defaultGzCity: "d_g_c",
    selectedCity: "s_c",
    selectedCityName: "s_c_n",
    selectedCityDomain: "s_c_d",
    defaultSlCity: "d_s_c",
    locationCity: "l_c",
    locationCityName: "l_c_n",
    locationCityDomain: "l_c_d"
}
  , Ba = ["g_c", "s_c"]
  , Fa = !0;
function qa() {
    return new a((function(e) {
        Di() ? ka("getSelectedCity").then((function(t) {
            e({
                cityId: t.cityId,
                cityDomain: t.domain,
                cityName: t.cityName
            })
        }
        )).catch((function() {
            e({
                cityId: "-1",
                cityDomain: "www",
                cityName: "未知"
            })
        }
        )) : e({
            cityId: Da.get("user_city_id") || "-1",
            cityDomain: Da.get("cityDomain") || "www"
        })
    }
    ))
}
var Ja = function(e) {
    return !!e && -1 != e && "undefined" != e
}
  , Ha = function() {
    return Ji() ? function(e) {
        for (var t = document.cookie.split("; "), n = 0; n < t.length; n++) {
            var r = t[n].split("=");
            if (r[0] == e)
                return r[1] ? za(decodeURIComponent(r[1])) : r[1]
        }
    }("gcinfo") : Da.get("gcinfo")
}
  , Ga = function() {
    var e, t = window.location.search.split("?")[1] || "", n = gc(decodeURIComponent(t)), r = {};
    return o(e = R(Va)).call(e, (function(e) {
        var t = Va[e]
          , o = n[t];
        o && (r[t] = decodeURIComponent(o))
    }
    )),
    R(r).length ? r : null
}
  , Ka = function(e) {
    var t, n = {};
    return o(t = R(Va)).call(t, (function(t) {
        var r = e[Va[t]];
        r && (n[t] = r)
    }
    )),
    n
}
  , Qa = function(e) {
    return o(Ba).call(Ba, (function(t) {
        Ja(e[t]) || (e[t] = 67,
        e["".concat(t, "_n")] = "苏州",
        e["".concat(t, "_d")] = "su")
    }
    )),
    Ja(e.l_c) || (e.l_c = -1),
    e
};
function Xa(e) {
    return Za.apply(this, arguments)
}
function Za() {
    return (Za = bi(r.mark((function e(t) {
        return r.wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return e.abrupt("return", new a(function() {
                        var e = bi(r.mark((function e(n) {
                            var a, c, s, l, u, p, f, d, m, g, h, y, v;
                            return r.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!Di()) {
                                            e.next = 4;
                                            break
                                        }
                                        ka("getSelectedCity").then((function(e) {
                                            var t, r, i, a = (null == e ? void 0 : e.domain) || "", c = {
                                                guaziCity: e.cityId,
                                                guaziCityName: e.cityName,
                                                guaziCityDomain: a,
                                                selectedCity: e.selectedCityId || e.cityId,
                                                selectedCityName: e.selectedCityName || e.cityName,
                                                selectedCityDomain: e.selectedCityDomain || a,
                                                locationCity: e.locationCityId || "",
                                                defaultGzCity: (null == e || null === (t = e.defaultPlateCity) || void 0 === t ? void 0 : t.toString()) || "1",
                                                defaultSlCity: (null == e || null === (r = e.defaultSelectCity) || void 0 === r ? void 0 : r.toString()) || "1",
                                                locationCityName: "",
                                                locationCityDomain: e.locationCityDomain || ""
                                            }, s = {};
                                            o(i = R(Va)).call(i, (function(e) {
                                                s[Va[e]] = c[e]
                                            }
                                            )),
                                            ec(s),
                                            n(c)
                                        }
                                        )),
                                        e.next = 33;
                                        break;
                                    case 4:
                                        if (!(a = Ga()) || !Fa) {
                                            e.next = 10;
                                            break
                                        }
                                        return c = Ka(a),
                                        ec(a),
                                        Fa = !1,
                                        e.abrupt("return", n(c));
                                    case 10:
                                        if (!((s = Ha()) && Ja(s.g_c) && Ja(s.s_c))) {
                                            e.next = 14;
                                            break
                                        }
                                        return l = Ka(s),
                                        e.abrupt("return", n(l));
                                    case 14:
                                        return e.next = 16,
                                        Promise.resolve().then((function() {
                                            return Zc
                                        }
                                        ));
                                    case 16:
                                        return u = e.sent.default,
                                        f = (p = t || {}).longitude,
                                        d = p.latitude,
                                        m = {
                                            auth: 2
                                        },
                                        f && d && i(m, {
                                            lng: f,
                                            lat: d,
                                            auth: 1
                                        }),
                                        e.next = 22,
                                        u.requestData("cityLocation", m);
                                    case 22:
                                        if (!(g = e.sent).locationCity) {
                                            e.next = 32;
                                            break
                                        }
                                        return h = g.locationCity,
                                        y = i(Wa, s),
                                        (!s || !Ja(s.g_c) || s && 1 == s.d_g_c && h.defaultFlag) && (y.g_c = h.city_id,
                                        y.g_c_d = h.domain,
                                        y.g_c_n = h.city_name,
                                        y.d_g_c = h.defaultFlag ? "1" : "0"),
                                        (!s || !Ja(s.s_c) || s && 1 == s.d_s_c) && (y.s_c = h.city_id,
                                        y.s_c_d = h.domain,
                                        y.s_c_n = h.city_name,
                                        y.d_s_c = h.defaultFlag ? "1" : "0"),
                                        h.defaultFlag || (y.locationCity = h.city_id,
                                        y.locationCityName = h.city_name,
                                        y.locationCityDomain = h.domain),
                                        v = Ka(y),
                                        ec(y),
                                        e.abrupt("return", n(v));
                                    case 32:
                                        n({
                                            guaziCity: "67",
                                            guaziCityName: "苏州",
                                            guaziCityDomain: "sz",
                                            selectedCity: "67",
                                            selectedCityName: "苏州",
                                            selectedCityDomain: "sz"
                                        });
                                    case 33:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()));
                case 1:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )))).apply(this, arguments)
}
function Ya() {
    return new a((function(e) {
        if (Di() && Fa) {
            Fa = !1;
            var t = gc(window.location.search.split("?")[1] || "");
            if (t && t.app_info) {
                var n = JSON.parse(decodeURIComponent(t.app_info || "{}"));
                ec({
                    g_c: n.city_id,
                    g_c_d: n.city_domain,
                    g_c_n: n.cityName || "",
                    l_c: n.location_city_id || "",
                    s_c: n.select_city_id || n.city_id,
                    s_c_d: n.select_city_domain || n.city_domain,
                    s_c_n: n.selectedCityName || n.cityName || ""
                }),
                x((function() {
                    ka("getSelectedCity").then((function(e) {
                        var t = (null == e ? void 0 : e.domain) || "";
                        ec({
                            g_c: e.cityId,
                            g_c_d: t,
                            g_c_n: e.cityName,
                            l_c: e.locationCityId || "",
                            s_c: e.selectedCityId || e.cityId,
                            s_c_d: e.selectedCityDomain || t,
                            s_c_n: e.selectedCityName || e.cityName
                        })
                    }
                    ))
                }
                ), 0)
            }
        }
        if (!Di() && Fa) {
            var r = Ga();
            r && (ec(r),
            Fa = !1)
        }
        var o = Ha();
        if (o)
            return -1 != o.l_c && -1 == o.g_c && (o.g_c = o.l_c,
            o.g_c_d = o.l_c_d,
            o.g_c_n = o.l_c_n),
            -1 != o.l_c && -1 == o.s_c && (o.s_c = o.l_c,
            o.s_c_d = o.l_c_d,
            o.s_c_n = o.l_c_n),
            void e(Qa(o));
        Di() && ka("getSelectedCity").then((function(t) {
            var n = (null == t ? void 0 : t.domain) || ""
              , r = {
                g_c: t.cityId,
                g_c_d: n,
                g_c_n: t.cityName,
                l_c: t.locationCityId || "",
                s_c: t.selectedCityId || t.cityId,
                s_c_d: t.selectedCityDomain || n,
                s_c_n: t.selectedCityName || t.cityName
            };
            ec(r),
            e(Qa(r))
        }
        )),
        Di() || e({
            g_c: 67,
            g_c_d: "sz",
            g_c_n: "苏州",
            l_c: -1,
            s_c: 67,
            s_c_d: "sz",
            s_c_n: "苏州"
        })
    }
    ))
}
function ec(e, t) {
    var n, r = Ha(), o = i({}, r || Wa, e);
    tr() && null != t && t.isPostMessage && lr({
        needStorage: !1
    }).then((function() {
        var e;
        if (Zn())
            null === (e = window.wx) || void 0 === e || e.miniProgram.postMessage({
                data: o
            });
        else if (Yn()) {
            var t;
            null === (t = window.tt) || void 0 === t || t.miniProgram.postMessage({
                data: o
            })
        }
    }
    )),
    null != t && t.isNotifyNative && (ba.invoke("webCityChange", {
        cityId: o.s_c,
        cityDomain: o.s_c_d,
        cityName: o.s_c_n,
        guaziCityId: o.g_c,
        guaziCityDomain: o.g_c_d,
        guaziCityName: o.g_c_n,
        synChange: 1
    }),
    null != t && t.prePagekey && ba.invoke("broadcatAllWebview", {
        action: "checkPopup",
        target_pagekey: t.prePagekey,
        page: t.prePagekey,
        popScene: "switchGuaziCity",
        delayTime: t.delayTime || 0
    }));
    var a = h(n = location.host.split(".")).call(n, -2).join(".");
    Ji() ? function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            path: "/",
            domain: "",
            days: 0
        };
        t = "object" === ji(t) ? c(t) : t,
        t = encodeURIComponent(t);
        var r = "";
        if (n.days) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * n.days * 60 * 60 * 1e3),
            r = "; expires=" + o.toUTCString()
        }
        var i = n.domain ? "; domain=" + n.domain : "";
        document.cookie = e + "=" + (t || "") + r + i + "; path=/"
    }("gcinfo", o, {
        path: "/",
        domain: a,
        days: 30
    }) : Da.set("gcinfo", o, {
        path: "/",
        domain: a,
        maxAge: 2592e3
    })
}
function tc(e, t) {
    var n = void 0 !== H && U(e) || e["@@iterator"];
    if (!n) {
        if (y(e) || (n = function(e, t) {
            var n;
            if (e) {
                if ("string" == typeof e)
                    return nc(e, t);
                var r = h(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? G(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? nc(e, t) : void 0
            }
        }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0
              , o = function() {};
            return {
                s: o,
                n: function() {
                    return r >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[r++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: o
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, a = !0, c = !1;
    return {
        s: function() {
            n = n.call(e)
        },
        n: function() {
            var e = n.next();
            return a = e.done,
            e
        },
        e: function(e) {
            c = !0,
            i = e
        },
        f: function() {
            try {
                a || null == n.return || n.return()
            } finally {
                if (c)
                    throw i
            }
        }
    }
}
function nc(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function rc(e) {
    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20;
    if (r >= o)
        return "";
    var i = "";
    if (e.textContent)
        i = e.textContent;
    else if (e.innerText && "script" !== e.tagName.toLowerCase())
        i = e.innerText;
    else {
        var a, c = tc(e.childNodes);
        try {
            for (c.s(); !(a = c.n()).done; ) {
                var s, l = a.value;
                l.nodeType === Node.TEXT_NODE ? i += W(s = l.textContent).call(s) : i += rc(l, n, r + 1, o)
            }
        } catch (u) {
            c.e(u)
        } finally {
            c.f()
        }
    }
    return V(t = i.replace(/\s+/g, " ").substring(0, n)).call(t) + (i.length > n ? "..." : "")
}
function oc(e) {
    var t, n, r, o, i, a, c, s, l, u, p = e.getBoundingClientRect(), f = (c = document.documentElement,
    s = document.body,
    l = c.scrollLeft,
    u = c.scrollTop,
    0 === l && "number" == typeof s.scrollLeft && (l = s.scrollLeft),
    0 === u && "number" == typeof s.scrollTop && (u = s.scrollTop),
    {
        scrollLeft: l,
        scrollTop: u
    }), d = {
        tagName: e.tagName.toLowerCase(),
        size: j(t = j(n = j(r = "".concat(p.width, "*")).call(r, p.height, "+")).call(n, e.scrollWidth, "*")).call(t, e.scrollHeight),
        coord: j(o = j(i = j(a = "".concat(p.left, "*")).call(a, p.top, "+")).call(i, f.scrollLeft, "*")).call(o, f.scrollTop)
    };
    return e instanceof HTMLAnchorElement ? d.href = e.href : e instanceof HTMLImageElement ? d.src = e.src : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? d.value = e.value : d.textContent = rc(e),
    d
}
function ic(e, t) {
    var n = R(e);
    if (L) {
        var r = L(e);
        t && (r = M(r).call(r, (function(t) {
            return T(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function ac(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n, r = null != arguments[t] ? arguments[t] : {};
        if (t % 2)
            o(n = ic(Object(r), !0)).call(n, (function(t) {
                Oi(e, t, r[t])
            }
            ));
        else if (P)
            I(e, P(r));
        else {
            var i;
            o(i = ic(Object(r))).call(i, (function(t) {
                C(e, t, T(r, t))
            }
            ))
        }
    }
    return e
}
var cc, sc = function() {
    function e(t) {
        $i(this, e),
        Oi(this, "_clickCoordinates", void 0),
        Oi(this, "debug", void 0),
        Oi(this, "ignoreTagNames", void 0),
        Oi(this, "ignoreClassNames", void 0),
        this._clickCoordinates = {},
        this.ignoreTagNames = (null == t ? void 0 : t.ignoreTagNames) || [],
        this.ignoreClassNames = (null == t ? void 0 : t.ignoreClassNames) || [],
        this.debug = (null == t ? void 0 : t.debug) || !1,
        this.startTrackingClickCoordinates()
    }
    return xi(e, [{
        key: "clearClickCoordinates",
        value: function() {
            this._clickCoordinates = {},
            this.debug && console.log("-hs--清理点击数据---")
        }
    }, {
        key: "getAndClearClickCoordinates",
        value: function() {
            var e = ac({}, this._clickCoordinates);
            return this.debug && console.log("-hs--上报点击数据---\x3e", e),
            this.clearClickCoordinates(),
            e
        }
    }, {
        key: "getClickCoordinates",
        value: function() {
            return ac({}, this._clickCoordinates)
        }
    }, {
        key: "setDebug",
        value: function(e) {
            console.log("-hs--debug---\x3e", e),
            this.debug = e
        }
    }, {
        key: "startTrackingClickCoordinates",
        value: function() {
            var e, t;
            console.log("-hs--开始监听点击事件---"),
            window.removeEventListener("click", O(e = this.handleClickCoordinates).call(e, this), !0),
            window.addEventListener("click", O(t = this.handleClickCoordinates).call(t, this), !0)
        }
    }, {
        key: "updateClickCoordinates",
        value: function(e) {
            this._clickCoordinates && (this._clickCoordinates = e)
        }
    }, {
        key: "handleClickCoordinates",
        value: function(e) {
            var t, n, r, o, i, a = e.target;
            if (!v(t = this.ignoreClassNames).call(t, (function(e) {
                return a.classList.contains(e)
            }
            )) && !s(n = this.ignoreTagNames).call(n, a.tagName)) {
                var c = oc(a)
                  , l = {
                    hsClickCoord: j(r = j(o = j(i = "".concat(e.clientX, "*")).call(i, e.clientY, "+")).call(o, e.pageX, "*")).call(r, e.pageY),
                    hsTarget: c
                };
                this.debug && console.log("-hs--记录点击数据---\x3e", l),
                this.updateClickCoordinates(l)
            }
        }
    }]),
    e
}();
function lc(e, t) {
    var n = R(e);
    if (L) {
        var r = L(e);
        t && (r = M(r).call(r, (function(t) {
            return T(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function uc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n, r = null != arguments[t] ? arguments[t] : {};
        if (t % 2)
            o(n = lc(Object(r), !0)).call(n, (function(t) {
                Oi(e, t, r[t])
            }
            ));
        else if (P)
            I(e, P(r));
        else {
            var i;
            o(i = lc(Object(r))).call(i, (function(t) {
                C(e, t, T(r, t))
            }
            ))
        }
    }
    return e
}
"undefined" != typeof window && (cc = new sc);
var pc = Nn();
function fc(e, t, n) {
    var r = null == e ? void 0 : e.split("?")
      , o = "";
    r.length > 1 && (o = r.pop() || "");
    var i, a = gc(o), c = t.track || t;
    if (a.incident_id || !c.incidentId && !c.incident_id || (i = c.incidentId || c.incident_id),
    c.moduleId)
        La(c, t.gtkFn).then((function(e) {
            var c;
            a.tk_p_mti = e,
            i && (a.incident_id = i),
            t.transferParams && (a = uc(uc({}, t.transferParams), a)),
            o = hc(a, {
                noEncode: !0
            });
            var s = new _(j(c = "".concat(r.join("?"), "?")).call(c, o));
            n(s.href, e)
        }
        ));
    else {
        var s;
        i && (a.incident_id = i),
        t.transferParams && (a = uc(uc({}, t.transferParams), a)),
        o = hc(a, {
            noEncode: !0
        });
        var l = new _(j(s = "".concat(r.join("?"), "?")).call(s, o));
        n(l.href)
    }
}
function dc(e, t) {
    if (e) {
        var n = (t = t || {}).gtkFn || window.gtk
          , r = t.autoParams || {}
          , o = function(e) {
            return new a((function(o) {
                var i, a, c, s = function(e) {
                    var i, a, c, s, l, u, p = function() {
                        var e = arguments.length > 1 ? arguments[1] : void 0;
                        return "click" !== (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "click") ? {} : (cc || (cc = new sc),
                        void 0 !== e && cc.setDebug(e),
                        cc.getAndClearClickCoordinates())
                    }(null === (i = t) || void 0 === i || null === (a = i.track) || void 0 === a ? void 0 : a.tracking_type);
                    n("event", (null === (c = t) || void 0 === c ? void 0 : c.tracking_type) || "click", Ei({}, {
                        mti: e,
                        incident_id: (null === (s = t) || void 0 === s ? void 0 : s.track) && (null === (l = t) || void 0 === l ? void 0 : l.track.incidentId),
                        event_callback: o
                    }, p, r, null === (u = t) || void 0 === u ? void 0 : u.track))
                };
                null !== (i = t) && void 0 !== i && i.sendTrack ? e ? s(e) : La(null === (a = t) || void 0 === a ? void 0 : a.track, null === (c = t) || void 0 === c ? void 0 : c.gtkFn).then((function(e) {
                    s(e)
                }
                )) : o(!0)
            }
            ))
        };
        if ($(e).call(e, "http") || $(e).call(e, "miniprogram"))
            if (S(e).call(e, ".mp4"))
                fc(e = "https://act.guazi.com/video?video=".concat(encodeURIComponent(e), "&hideTitlebar=1"), t, (function(e, t) {
                    o(t),
                    ba.createWebview({
                        url: e
                    })
                }
                ));
            else if (Di())
                fc(e, t, (function(e, n) {
                    var r, i;
                    o(n),
                    null !== (r = t) && void 0 !== r && r.replace ? window.location.replace(e) : ba.createWebview({
                        url: e,
                        isLiveCallingPage: (null === (i = t) || void 0 === i ? void 0 : i.isLiveCallingPage) || 0
                    })
                }
                ));
            else if (tr()) {
                var i = pc.get("HAS_CONFIRM_CITY_POPUP") || "";
                i && (t.transferParams = uc(uc({}, t.transferParams || {}), {}, {
                    hasCCP: i
                })),
                fc(e, t, (function(e, n) {
                    if (o(n),
                    s(e).call(e, "".concat(fa, "/m/empty")) && Gi() && !Zi()) {
                        var r = e.replace("".concat(fa, "/m/empty?"), "");
                        e = "/pages/web/web?url=interceptToCustomerService&".concat(r)
                    }
                    if ((Zn() || Yn()) && (e = e.replace(/^https:\/\/(\w|-)+\.guazi(-cloud|-apps)?\.com\/detail\/?\?/, "/pages/detail/detail?")),
                    s(e).call(e, "miniprogram://")) {
                        var i = e.split("//")[1];
                        e = "/".concat(i)
                    }
                    var a, c;
                    /pages\/detail\/detail/.test(e) ? Ya().then((function(n) {
                        var r, o, i, a, c, s, l, u;
                        e = j(r = j(o = j(i = j(a = j(c = j(s = "".concat(e, "&s_c=")).call(s, n.s_c, "&s_c_n=")).call(c, encodeURI(n.s_c_n), "&s_c_d=")).call(a, n.s_c_d, "&g_c=")).call(i, n.g_c, "&g_c_n=")).call(o, encodeURI(n.g_c_n), "&g_c_d=")).call(r, n.g_c_d),
                        dr(uc(uc({}, t), {}, {
                            replace: null === (l = t) || void 0 === l ? void 0 : l.replace,
                            url: e,
                            tabbar: null === (u = t) || void 0 === u ? void 0 : u.miniTabbar
                        }))
                    }
                    )) : dr(uc(uc({}, t), {}, {
                        replace: null === (a = t) || void 0 === a ? void 0 : a.replace,
                        url: e,
                        tabbar: null === (c = t) || void 0 === c ? void 0 : c.miniTabbar
                    }))
                }
                ))
            } else
                Wi() ? fc(e, t, (function(e, n) {
                    var r;
                    o(n),
                    null !== (r = t) && void 0 !== r && r.replace ? window.location.replace(e) : window.system.postMessage(c({
                        action: "createWebView",
                        data: {
                            url: e
                        }
                    }))
                }
                )) : fc(e, t, (function(e, n) {
                    o(n).then((function() {
                        var n;
                        null !== (n = t) && void 0 !== n && n.replace ? window.location.replace(e) : window.location.href = e
                    }
                    ))
                }
                ));
        else
            fc(e, t, (function(e, t) {
                o(t),
                window.location.href = e
            }
            ));
        t.blockTimeOnPage || Ma(t.gtkFn, {
            autoParams: r
        })
    }
}
function mc(e) {
    Di() && ba.closeWebview(e)
}
function gc(e) {
    var t = {};
    if (e && e.length > 0) {
        var n = e.split("&");
        n && o(n).call(n, (function(e) {
            var n = w(e).call(e, "=")
              , r = h(e).call(e, 0, n)
              , o = h(e).call(e, n + 1);
            t[r] = o
        }
        ))
    }
    return t
}
function hc(e) {
    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = [];
    return o(t = R(e)).call(t, (function(t) {
        var o, i;
        (0 === e[t] || e[t]) && (n.noEncode ? r.push(j(o = "".concat(t, "=")).call(o, e[t])) : r.push(j(i = "".concat(t, "=")).call(i, encodeURIComponent(e[t]))))
    }
    )),
    r.join("&")
}
function yc(e) {
    var t = Nn()
      , n = "guazi.com";
    try {
        var r;
        n = h(r = document.domain.split(".")).call(r, -2).join(".")
    } catch (o) {
        console.warn(o)
    }
    t.set("uuid", e, {
        domain: n
    })
}
function vc(e) {
    return !(!e || "null" === e || "undefined" === e)
}
var wc = function() {
    var e = bi(r.mark((function e() {
        var t, n, o, i, a, c, s;
        return r.wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (t = Nn(),
                    n = t.get("uuid") || "",
                    e.prev = 2,
                    o = "undefined" != typeof window ? window.location.search.split("?") : [],
                    i = "",
                    o.length > 1 && (i = o.pop() || ""),
                    a = gc(i),
                    !Di()) {
                        e.next = 19;
                        break
                    }
                    if (!vc(a.app_info)) {
                        e.next = 14;
                        break
                    }
                    if (!(c = JSON.parse(decodeURIComponent(a.app_info || "{}"))).device_id) {
                        e.next = 12;
                        break
                    }
                    return e.abrupt("return", c.device_id);
                case 12:
                    e.next = 19;
                    break;
                case 14:
                    return e.next = 16,
                    ka("getDeviceInfo");
                case 16:
                    if (!(s = e.sent).deviceId) {
                        e.next = 19;
                        break
                    }
                    return e.abrupt("return", s.deviceId);
                case 19:
                    if (!vc(a.deviceId)) {
                        e.next = 21;
                        break
                    }
                    return e.abrupt("return", a.deviceId);
                case 21:
                    if (!vc(a.from_guid)) {
                        e.next = 23;
                        break
                    }
                    return e.abrupt("return", a.from_guid);
                case 23:
                    if (!Gi() || !vc(a.openid)) {
                        e.next = 25;
                        break
                    }
                    return e.abrupt("return", a.openid);
                case 25:
                    e.next = 30;
                    break;
                case 27:
                    e.prev = 27,
                    e.t0 = e.catch(2),
                    console.error(e.t0);
                case 30:
                    if (!vc(n)) {
                        e.next = 32;
                        break
                    }
                    return e.abrupt("return", n);
                case 32:
                    return yc(n = Ua()),
                    e.abrupt("return", n);
                case 35:
                case "end":
                    return e.stop()
                }
        }
        ), e, null, [[2, 27]])
    }
    )));
    return function() {
        return e.apply(this, arguments)
    }
}();
function _c(e, t) {
    var n = R(e);
    if (L) {
        var r = L(e);
        t && (r = M(r).call(r, (function(t) {
            return T(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function bc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n, r = null != arguments[t] ? arguments[t] : {};
        if (t % 2)
            o(n = _c(Object(r), !0)).call(n, (function(t) {
                Oi(e, t, r[t])
            }
            ));
        else if (P)
            I(e, P(r));
        else {
            var i;
            o(i = _c(Object(r))).call(i, (function(t) {
                C(e, t, T(r, t))
            }
            ))
        }
    }
    return e
}
var kc, $c = "", Sc = [pa], xc = function() {
    var e = bi(r.mark((function e(t, n) {
        var o, i, a, c, l, u, p, f, d, m, g, h;
        return r.wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return o = ia(),
                    i = la(),
                    a = va(),
                    e.next = 5,
                    Ya();
                case 5:
                    if (c = e.sent,
                    $c) {
                        e.next = 10;
                        break
                    }
                    return e.next = 9,
                    wc();
                case 9:
                    $c = e.sent;
                case 10:
                    return l = t.userId || "",
                    u = t.orgUserId || "",
                    p = s(Sc).call(Sc, window.location.origin) ? {} : {
                        client: qi() ? "Android" : Bi() ? "ios" : Ji() ? "harmony" : "other"
                    },
                    f = bc({
                        versionId: o,
                        sourceFrom: i,
                        pf: a,
                        deviceId: $c,
                        guid: $c,
                        userId: l,
                        orgUserId: u,
                        p_key: ca(),
                        unit: "",
                        guazi_city: c.g_c,
                        location_city: c.l_c,
                        selectedCity: c.s_c
                    }, p),
                    d = t.method,
                    t && t.needUnit && (f.unit = $c),
                    "get" === d || "delete" === d ? "[object Object]" === Object.prototype.toString.call(t.params) && (t.params = bc(bc({}, f), t.params)) : "post" !== d && "put" !== d || (m = function() {
                        t.params ? t.params.p_key = ca() : t.params = {
                            p_key: ca()
                        }
                    }
                    ,
                    "[object Object]" === Object.prototype.toString.call(t.data) && (n.crmClient && ra() ? (g = bc(bc({}, f), t.data.requestParam),
                    t.data = bc(bc({}, t.data), {}, {
                        requestParam: g
                    })) : t.data = bc(bc({}, f), t.data),
                    m()),
                    "[object String]" === Object.prototype.toString.call(t.data) && (h = t.data ? En.parse(t.data) : {},
                    t.data = En.stringify(bc(bc({}, f), h)),
                    m())),
                    e.abrupt("return", t);
                case 19:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )));
    return function(t, n) {
        return e.apply(this, arguments)
    }
}();
kc = "undefined" != typeof window ? window : global;
var Oc = ["token"];
function jc(e, t) {
    if (!e)
        return "";
    var n, r = e.split("&"), o = B(r).call(r, (function(e, t) {
        var n = Ti(e.split("="), 1)[0]
          , r = Ti(t.split("="), 1)[0];
        return n === r ? 0 : n > r ? 1 : -1
    }
    ));
    if (t && "post" === t.method && t.disabledDecodeByPOSTVerifyToken)
        return o.join("&");
    try {
        n = decodeURIComponent(o.join("&"))
    } catch (i) {
        n = o.join("&")
    }
    return n
}
var Pc = function(e) {
    return t = e,
    "undefined" != typeof window && (window.stringifyParams = function(t) {
        var n, r, i, a, l = "";
        if ("get" === t.method || "delete" === t.method ? l = function() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, r = t, i = t.split("&"), a = k(i).call(i, (function(e) {
                return e.split("=")[0]
            }
            ));
            return o(e = R(n)).call(e, (function(e) {
                if (!s(a).call(a, e) && Object.prototype.hasOwnProperty.call(n, e)) {
                    var t = n[e]
                      , o = "";
                    if ("null" === t)
                        ;
                    else if ("object" === ji(t)) {
                        var i;
                        o = j(i = "".concat(e, "=")).call(i, c(t))
                    } else {
                        var l;
                        o = j(l = "".concat(e, "=")).call(l, t)
                    }
                    r += r ? "&".concat(o) : "".concat(o)
                }
            }
            )),
            r
        }("", (i = t.params,
        a = function(e) {
            var t, n;
            if (!e)
                return {};
            var r = {}
              , i = B(t = R(e)).call(t);
            return o(n = R(i)).call(n, (function(t) {
                void 0 !== e[i[t]] && (r[i[t]] = encodeURIComponent(e[i[t]]))
            }
            )),
            r
        }(i),
        Oc && o(Oc).call(Oc, (function(e) {
            delete a[e]
        }
        )),
        a)) : "post" !== t.method && "put" !== t.method || "string" == typeof t.data && (l = function(e) {
            if (!e)
                return "";
            var t = e.split("&");
            return F(t).call(t, (function(e, t) {
                var n, r = Ti(t.split("="), 1)[0];
                return s(Oc).call(Oc, r) || (e ? e = j(n = "".concat(e, "&")).call(n, t) : e += t),
                e
            }
            ), "")
        }(t.data)),
        t.url && s(n = t.url).call(n, "?")) {
            var u, p, f, d = w(u = t.url).call(u, "?"), m = h(p = t.url).call(p, d + 1);
            m && (l = l ? j(f = "".concat(l, "&")).call(f, m) : m)
        }
        if (t.newVerifyAlgorithm)
            r = jc(l, t);
        else
            try {
                r = t.disabledDecodeByPOSTVerifyToken ? decodeURIComponent(jc(l, t)) : decodeURIComponent(decodeURIComponent(jc(l)))
            } catch (e) {
                r = jc(l, t)
            }
        return r
    }(t),
    window.ttt = q(String((new Date).getTime() / 1e3)),
    window.md5 = Fo.exports,
    n = ~[],
    (n = {
        ___: ++n,
        $$$$: (!1 + "")[n],
        __$: ++n,
        $_$_: (!1 + "")[n],
        _$_: ++n,
        $_$$: ({} + "")[n],
        $$_$: (n[n] + "")[n],
        _$$: ++n,
        $$$_: (!0 + "")[n],
        $__: ++n,
        $_$: ++n,
        $$__: ({} + "")[n],
        $$_: ++n,
        $$$: ++n,
        $___: ++n,
        $__$: ++n
    }).$_ = (n.$_ = n + "")[n.$_$] + (n._$ = n.$_[n.__$]) + (n.$$ = (n.$ + "")[n.__$]) + (!n + "")[n._$$] + (n.__ = n.$_[n.$$_]) + (n.$ = (!0 + "")[n.__$]) + (n._ = (!0 + "")[n._$_]) + n.$_[n.$_$] + n.__ + n._$ + n.$,
    n.$$ = n.$ + (!0 + "")[n._$$] + n.__ + n._ + n.$ + n.$$,
    n.$ = n.___[n.$_][n.$_],
    n.$(n.$(n.$$ + '"\\' + n.__$ + n.$$_ + n.$$$ + "\\" + n.__$ + n.$_$ + n.__$ + "\\" + n.__$ + n.$_$ + n.$$_ + n.$$_$ + n._$ + "\\" + n.__$ + n.$$_ + n.$$$ + ".\\" + n.__$ + n.$$_ + n.$$_ + n.$$$_ + "\\" + n.__$ + n.$$_ + n._$_ + "\\" + n.__$ + n.$_$ + n.__$ + n.$$$$ + "\\" + n.__$ + n.$$$ + n.__$ + "_" + n.__ + n._$ + "\\" + n.__$ + n.$_$ + n._$$ + n.$$$_ + "\\" + n.__$ + n.$_$ + n.$$_ + "\\" + n.$__ + n.___ + "=\\" + n.$__ + n.___ + "\\" + n.__$ + n.$_$ + n.$_$ + n.$$_$ + n.$_$ + "('\\" + n.__$ + n.$__ + n.$$$ + n._ + n.$_$_ + "\\" + n.__$ + n.$$$ + n._$_ + "\\" + n.__$ + n.$_$ + n.__$ + n.$$__ + (!1 + "")[n._$_] + "\\" + n.__$ + n.$_$ + n.__$ + n.$$$_ + "\\" + n.__$ + n.$_$ + n.$$_ + n.__ + n._ + n.$$__ + "'\\" + n.$__ + n.___ + "+\\" + n.$__ + n.___ + "\\" + n.__$ + n.$_$ + n.$_$ + n.$$_$ + n.$_$ + "(" + n.__ + n.__ + n.__ + "\\" + n.$__ + n.___ + "+\\" + n.$__ + n.___ + "''\\" + n.$__ + n.___ + "+\\" + n.$__ + n.___ + "\\" + n.__$ + n.$$_ + n._$$ + n.__ + "\\" + n.__$ + n.$$_ + n._$_ + "\\" + n.__$ + n.$_$ + n.__$ + "\\" + n.__$ + n.$_$ + n.$$_ + "\\" + n.__$ + n.$__ + n.$$$ + "\\" + n.__$ + n.$_$ + n.__$ + n.$$$$ + "\\" + n.__$ + n.$$$ + n.__$ + "\\" + n.__$ + n._$_ + n.___ + n.$_$_ + "\\" + n.__$ + n.$$_ + n._$_ + n.$_$_ + "\\" + n.__$ + n.$_$ + n.$_$ + "\\" + n.__$ + n.$$_ + n._$$ + '))"')())()),
    e.headers.common["client-time"] = kc.ttt,
    e.headers.common["verify-token"] = kc.verify_token,
    e;
    var t, n
}
  , Ic = Object.defineProperty
  , Cc = Object.getOwnPropertySymbols
  , Tc = Object.prototype.hasOwnProperty
  , Ac = Object.prototype.propertyIsEnumerable
  , Ec = function(e, t, n) {
    return t in e ? Ic(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n
}
  , Nc = ["info", "warning", "error"];
var Uc, Rc, Lc = !1, Mc = "c2c", zc = "";
function Dc(e) {
    return t = e.level,
    n = e.reportLevel,
    Nc.indexOf(t) >= Nc.indexOf(n) ? function(e, t) {
        return function(e, t) {
            return (t = t || {}).headers = t.headers || {},
            t.referrerPolicy = "unsafe-url",
            window.fetch ? fetch(e, t).catch((function(e) {
                console.log(e)
            }
            )) : Promise.resolve()
        }("".concat(e, "/monitor/api?").concat((n = t,
        o = [],
        r = r || {},
        Object.keys(n).forEach((function(e) {
            (0 === n[e] || n[e]) && (r.noEncode ? o.push("".concat(e, "=").concat(n[e])) : o.push("".concat(e, "=").concat(encodeURIComponent(n[e]))))
        }
        )),
        o.join("&"))));
        var n, r, o
    }(Lc ? "https://eagle-service.guazi-cloud.com" : "https://eagle-service.guazi.com", function(e, t) {
        for (var n in t || (t = {}))
            Tc.call(t, n) && Ec(e, n, t[n]);
        if (Cc)
            for (var r = Cc(t), o = 0, i = r.length; o < i; o++)
                n = r[o],
                Ac.call(t, n) && Ec(e, n, t[n]);
        return e
    }({
        line: Mc,
        project: zc
    }, e)) : Promise.resolve();
    var t, n
}
Uc = Mi ? oa() : process.env.MED_ENV ? (console.log("==== MED_ENV: ".concat(process.env.MED_ENV, " ====")),
{
    dev: "development",
    preview: "preview",
    online: "production",
    mock: "mock"
}[process.env.MED_ENV]) : process.env.GUAZI_FE_ENV ? process.env.GUAZI_FE_ENV : "development",
Lc = "development" === (Rc = {
    env: Uc
}).env,
Mc = Rc.line || Mc,
zc = Rc.project || zc;
var Wc = function(e) {
    var t, n, r = e.data, o = e.config;
    return r || (r = {
        code: -1
    }),
    o.monitor && Dc({
        apiUrl: j(t = "".concat(o.baseURL)).call(t, o.url),
        method: o.method,
        httpCode: 200,
        code: r.code,
        msg: r.msg || r.message || "-",
        level: s(n = [0, 10001, -2005]).call(n, r.code) ? "info" : "error",
        reportLevel: o.monitor.level,
        project: o.project
    }),
    e
}
  , Vc = function(e) {
    var t, n, r, o, i = e.config, l = void 0 === i ? {} : i;
    l.monitor && Dc({
        apiUrl: j(n = "".concat(l.baseURL)).call(n, $(r = l.url).call(r, "/") || S(o = l.baseURL).call(o, "/") ? l.url : "/".concat(l.url)),
        method: l.method,
        httpCode: e.response ? e.response.status : "-",
        msg: e.message || "-",
        code: "-",
        level: "error",
        reportLevel: l.monitor.level,
        project: l.project
    });
    var u = e && e.message || ""
      , p = u.match(/status code (.*)/) || []
      , f = s(u).call(u, "timeout")
      , d = {
        url: j(t = "".concat(l.baseURL)).call(t, l.url),
        message: u,
        code: e.code || e.response && e.response.status || p[1] || (f ? "519" : "unknown"),
        headers: l.headers,
        query: l.params
    };
    return e.message = "networkError,".concat(c(d)),
    a.reject(e)
}
  , Bc = function(e) {
    var t = "";
    try {
        t = localStorage.getItem("szlm-id") || ""
    } catch (n) {
        console.log(n)
    }
    return Di() && !Xi() && !Wi() || !t || e.withoutSzlmId || (e.headers.common["szlm-id"] = t),
    e
}
  , Fc = ["httpMethod"];
function qc(e, t) {
    var n = R(e);
    if (L) {
        var r = L(e);
        t && (r = M(r).call(r, (function(t) {
            return T(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Jc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n, r = null != arguments[t] ? arguments[t] : {};
        if (t % 2)
            o(n = qc(Object(r), !0)).call(n, (function(t) {
                Oi(e, t, r[t])
            }
            ));
        else if (P)
            I(e, P(r));
        else {
            var i;
            o(i = qc(Object(r))).call(i, (function(t) {
                C(e, t, T(r, t))
            }
            ))
        }
    }
    return e
}
var Hc = Nn()
  , Gc = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ("2" === t.toSeller) {
        var n = {};
        try {
            n = t.seller_extra && JSON.parse(decodeURIComponent(t.seller_extra))
        } catch (r) {
            console.error(r)
        }
        return i(e, n),
        e
    }
    return e
}
  , Kc = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return "2" === t.toSeller ? i(e, {
        token: t.tmpToken
    }) : e
}
  , Qc = function() {
    function e(t) {
        var n = this;
        $i(this, e),
        Oi(this, "config", void 0),
        Oi(this, "apiList", void 0),
        Oi(this, "project", void 0),
        Oi(this, "crmClient", void 0),
        Oi(this, "baseUrl", void 0),
        Oi(this, "netApi", void 0),
        Oi(this, "urlQuery", {}),
        this.config = t,
        this.apiList = t.apiList,
        this.crmClient = t.client || "",
        this.baseUrl = t.baseURL || "",
        this.urlQuery = Ni(),
        l && (this.netApi = l.create(Jc({
            withCredentials: !0,
            timeout: 1e4
        }, t)),
        t.needVerifyToken && this.netApi.interceptors.request.use(Pc),
        this.netApi.interceptors.request.use((function(e) {
            return xc(e, {
                crmClient: n.crmClient
            })
        }
        )),
        this.netApi.interceptors.request.use(ja),
        this.netApi.interceptors.response.use(Pa),
        Mi && (this.netApi.interceptors.request.use(Bc),
        this.netApi.interceptors.response.use(Wc, Vc)))
    }
    var t, n, o, i, c, s;
    return xi(e, [{
        key: "requestData",
        value: function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Li && r.req && (t = r.req.headers["user-agent"] || "");
            var o = ha(t);
            return n = Jc({
                osv: o
            }, n),
            this.request(e, n, r).then((function(e) {
                var t = (e = e || {}).data || {}
                  , n = t.code
                  , o = t.data;
                return 0 === n ? r.timestamp ? e.data : o : a.reject(e)
            }
            ))
        }
    }, {
        key: "request",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (this.apiList && this.apiList[e]) {
                var r = ""
                  , o = this.apiList[e]
                  , i = o.mockUrl || this.config.mockUrl || "https://rap2api.guazi-apps.com/app/mock/310/GET";
                if (o.isMock && (n.baseURL = i),
                o.monitor && (n.monitor = o.monitor),
                r = "string" == typeof o.path ? o.path : o.path(t),
                this.crmClient && ra())
                    return n.httpMethod ? n.httpMethod = n.httpMethod : n.httpMethod = "get" === o.method ? "get" : "postByForm",
                    this.postJSON(r, t, n);
                if (n.httpMethod) {
                    var c = n.httpMethod
                      , s = ki(n, Fc);
                    if (this[c])
                        return this[c](r, t, s)
                }
                return "get" === o.method ? this.get(r, t, n) : this.postByForm(r, t, n)
            }
            return a.reject(new Error("api name ".concat(e, " not exist")))
        }
    }, {
        key: "get",
        value: (s = bi(r.mark((function e(t) {
            var n, o, i = arguments;
            return r.wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = i.length > 1 && void 0 !== i[1] ? i[1] : {},
                        o = i.length > 2 && void 0 !== i[2] ? i[2] : {},
                        n = Gc(n, this.urlQuery),
                        o.headers = Kc(o.headers, this.urlQuery),
                        (o.needVerifyToken || this.config.needVerifyToken) && (n.platfromSource = "wap"),
                        e.abrupt("return", this.netApi.get(t, Jc({
                            params: n
                        }, o)));
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, this)
        }
        ))),
        function(e) {
            return s.apply(this, arguments)
        }
        )
    }, {
        key: "post",
        value: (c = bi(r.mark((function e(t) {
            var n, o, i = arguments;
            return r.wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = i.length > 1 && void 0 !== i[1] ? i[1] : {},
                        o = i.length > 2 && void 0 !== i[2] ? i[2] : {},
                        n = Gc(n, this.urlQuery),
                        o.headers = Kc(o.headers, this.urlQuery),
                        (o.needVerifyToken || this.config.needVerifyToken) && (n.platfromSource = "wap"),
                        e.abrupt("return", this.netApi.post(t, n, o));
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, this)
        }
        ))),
        function(e) {
            return c.apply(this, arguments)
        }
        )
    }, {
        key: "postByForm",
        value: (i = bi(r.mark((function e(t) {
            var n, o, i = arguments;
            return r.wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = i.length > 1 && void 0 !== i[1] ? i[1] : {},
                        ((o = i.length > 2 && void 0 !== i[2] ? i[2] : {}).needVerifyToken || this.config.needVerifyToken) && (n.platfromSource = "wap"),
                        e.abrupt("return", this.netApi.post(t, En.stringify(n), o));
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, this)
        }
        ))),
        function(e) {
            return i.apply(this, arguments)
        }
        )
    }, {
        key: "put",
        value: (o = bi(r.mark((function e(t) {
            var n, o, i = arguments;
            return r.wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = i.length > 1 && void 0 !== i[1] ? i[1] : {},
                        o = i.length > 2 && void 0 !== i[2] ? i[2] : {},
                        n = Gc(n, this.urlQuery),
                        ((o = Kc(o.headers, this.urlQuery)).needVerifyToken || this.config.needVerifyToken) && (n.platfromSource = "wap"),
                        e.abrupt("return", this.netApi.put(t, n, o));
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, this)
        }
        ))),
        function(e) {
            return o.apply(this, arguments)
        }
        )
    }, {
        key: "delete",
        value: (n = bi(r.mark((function e(t) {
            var n, o, i = arguments;
            return r.wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = i.length > 1 && void 0 !== i[1] ? i[1] : {},
                        o = i.length > 2 && void 0 !== i[2] ? i[2] : {},
                        n = Gc(n, this.urlQuery),
                        ((o = Kc(o.headers, this.urlQuery)).needVerifyToken || this.config.needVerifyToken) && (n.platfromSource = "wap"),
                        e.abrupt("return", this.netApi.delete(t, Jc({
                            params: n
                        }, o)));
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, this)
        }
        ))),
        function(e) {
            return n.apply(this, arguments)
        }
        )
    }, {
        key: "head",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return t = Gc(t, this.urlQuery),
            ((n = Kc(n.headers, this.urlQuery)).needVerifyToken || this.config.needVerifyToken) && (t.platfromSource = "wap"),
            this.netApi.head(e, Jc({
                params: t
            }, n))
        }
    }, {
        key: "postJSON",
        value: (t = bi(r.mark((function e(t) {
            var n, o, i, a = arguments;
            return r.wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = a.length > 1 && void 0 !== a[1] ? a[1] : {},
                        ((o = a.length > 2 && void 0 !== a[2] ? a[2] : {}).needVerifyToken || this.config.needVerifyToken) && (n.platfromSource = "wap"),
                        this.crmClient && ra() && (o.httpMethod && "postJSON" !== o.httpMethod || (o.httpMethod = "postByJson"),
                        i = {
                            client: this.crmClient,
                            host: this.baseUrl,
                            path: t,
                            method: o.httpMethod,
                            requestParam: n,
                            gzUserId: Ni().toBReqUserId || Hc.get("to_b_req_user_id", {
                                parseJSON: !1
                            })
                        },
                        t = "/api/gateway/redirect",
                        n = i,
                        o.baseURL = ma),
                        e.abrupt("return", this.netApi.post(t, n, Jc({
                            headers: {
                                "content-type": "application/json"
                            }
                        }, o)));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, this)
        }
        ))),
        function(e) {
            return t.apply(this, arguments)
        }
        )
    }]),
    e
}();
Oi(Qc, "CancelToken", void 0),
Qc.CancelToken = l && l.CancelToken;
var Xc = new Qc({
    apiList: {
        sendBuyClue: {
            path: "/api/clues/buy/increase/miniproject",
            method: "get"
        },
        getNativeIMUrl: {
            path: "/mall-usercenter/customer/native/im",
            method: "get"
        },
        getMaskPhone: {
            path: "/api/usercenter/mask-phone",
            method: "get"
        },
        getSignature: {
            path: "/mall-usercenter/wechat/jssdk-signature",
            method: "post"
        },
        getAppUrl: {
            path: "/mall-usercenter/userAction/appUrl",
            method: "get"
        },
        batchConfig: {
            path: "/activity/online-inquiry/batch-config",
            method: "get"
        },
        cityLocation: {
            path: "/car-source/city/location",
            method: "get"
        },
        getUserCityInfo: {
            path: "/car-source/city/getUserCityInfo",
            method: "get"
        },
        queryConfiguration: {
            path: "/api/dynamicInterface/queryConfiguration",
            method: "get"
        }
    },
    needVerifyToken: !0,
    baseURL: {
        development: "https://client-restful-api.guazi-cloud.com",
        preview: "https://client-restful-api-preview.guazi-apps.com",
        production: "https://mapi.guazi.com",
        mock: ""
    }[oa()]
})
  , Zc = Object.freeze({
    __proto__: null,
    default: Xc
});
function Yc(e, t) {
    var n = R(e);
    if (L) {
        var r = L(e);
        t && (r = M(r).call(r, (function(t) {
            return T(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function es(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n, r = null != arguments[t] ? arguments[t] : {};
        if (t % 2)
            o(n = Yc(Object(r), !0)).call(n, (function(t) {
                Oi(e, t, r[t])
            }
            ));
        else if (P)
            I(e, P(r));
        else {
            var i;
            o(i = Yc(Object(r))).call(i, (function(t) {
                C(e, t, T(r, t))
            }
            ))
        }
    }
    return e
}
function ts() {
    return ns.apply(this, arguments)
}
function ns() {
    return (ns = bi(r.mark((function e() {
        var t, n, o, i, a, s, l = arguments;
        return r.wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (t = l.length > 0 && void 0 !== l[0] ? l[0] : {},
                    n = Nn(),
                    o = t.caInfo,
                    i = t.cityId,
                    a = t.caExtend,
                    s = ya(),
                    o || (o = n.get("cainfo") || {}),
                    o = a ? es(es({
                        platform: s
                    }, o), a) : es({
                        platform: s
                    }, o),
                    !Di()) {
                        e.next = 25;
                        break
                    }
                    if (e.prev = 8,
                    e.t1 = i,
                    e.t1) {
                        e.next = 14;
                        break
                    }
                    return e.next = 13,
                    ka("getSelectedCity");
                case 13:
                    e.t1 = e.sent.cityId;
                case 14:
                    if (e.t0 = e.t1,
                    e.t0) {
                        e.next = 17;
                        break
                    }
                    e.t0 = -1;
                case 17:
                    i = e.t0,
                    e.next = 23;
                    break;
                case 20:
                    e.prev = 20,
                    e.t2 = e.catch(8),
                    i = -1;
                case 23:
                    e.next = 26;
                    break;
                case 25:
                    i = i || n.get("user_city_id") || -1;
                case 26:
                    return e.abrupt("return", {
                        platForm: o.platform,
                        businessCityId: i,
                        cainfo: c(o)
                    });
                case 27:
                case "end":
                    return e.stop()
                }
        }
        ), e, null, [[8, 20]])
    }
    )))).apply(this, arguments)
}
function rs() {
    return os.apply(this, arguments)
}
function os() {
    return (os = bi(r.mark((function e() {
        var t, n, o, i = arguments;
        return r.wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return t = i.length > 0 && void 0 !== i[0] ? i[0] : {},
                    n = i.length > 1 && void 0 !== i[1] ? i[1] : {},
                    e.next = 4,
                    ts(n);
                case 4:
                    return o = e.sent,
                    e.abrupt("return", Xc.requestData("sendBuyClue", es(es({}, o), t)));
                case 6:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )))).apply(this, arguments)
}
function is(e, t) {
    var n = R(e);
    if (L) {
        var r = L(e);
        t && (r = M(r).call(r, (function(t) {
            return T(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function as(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n, r = null != arguments[t] ? arguments[t] : {};
        if (t % 2)
            o(n = is(Object(r), !0)).call(n, (function(t) {
                Oi(e, t, r[t])
            }
            ));
        else if (P)
            I(e, P(r));
        else {
            var i;
            o(i = is(Object(r))).call(i, (function(t) {
                C(e, t, T(r, t))
            }
            ))
        }
    }
    return e
}
function cs() {
    return ss.apply(this, arguments)
}
function ss() {
    return (ss = bi(r.mark((function e() {
        var t, n, o, i, s, l, u, p, f, d, m, g, h, y, v, w, _, b, k, S, x, O, P, I = arguments;
        return r.wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (t = I.length > 0 && void 0 !== I[0] ? I[0] : {},
                    n = I.length > 1 && void 0 !== I[1] ? I[1] : {},
                    o = I.length > 2 && void 0 !== I[2] ? I[2] : {},
                    i = Nn(),
                    s = n.buyClueInfo,
                    l = n.track,
                    u = J(),
                    p = ya(),
                    f = i.get("dsnDataObj") || {},
                    d = n.caInfo,
                    m = t.cityId,
                    (d = d || i.get("cainfo") || {}).is_cpc && (t = as(as({}, t), {}, {
                        cpcTag: encodeURIComponent(c({
                            store_id: d.store_id,
                            is_cpc: d.is_cpc,
                            ad_location: d.ad_location,
                            rank: d.rank,
                            qpres: d.qpres
                        }))
                    })),
                    g = "",
                    h = J(),
                    y = function() {
                        return a.resolve()
                    }
                    ,
                    !Mi || !window.gtk) {
                        e.next = 22;
                        break
                    }
                    if (h = l && l.incidentId || h,
                    !l) {
                        e.next = 21;
                        break
                    }
                    return e.next = 20,
                    La(l);
                case 20:
                    g = e.sent;
                case 21:
                    y = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = as({
                            im_pos: t.pos
                        }, e);
                        return new a((function(e) {
                            window.gtk("event", l && l.tracking_type || "click", as(as(as({
                                eventid: "901628757817"
                            }, l || {}), n), {}, {
                                mti: g,
                                event_callback: function() {
                                    e()
                                }
                            }))
                        }
                        ))
                    }
                    ;
                case 22:
                    return e.next = 24,
                    qa();
                case 24:
                    if (v = e.sent,
                    m = m || v.cityId,
                    s && rs(s, {
                        caInfo: d,
                        cityId: m
                    }),
                    !Di() || !sa("10.13.5.0", null)) {
                        e.next = 32;
                        break
                    }
                    return _ = as(as({}, t), {}, {
                        clueId: t.clueId,
                        dealerId: t.dealerId,
                        pos: t.pos,
                        isApp: 1,
                        imSourceFrom: p,
                        isHarmonyNext: Ji() ? 1 : 0
                    }, f),
                    b = c(_),
                    k = j(w = "guazi://router/im/startConsult?data=".concat(b, "&tk_p_mti=")).call(w, g),
                    e.abrupt("return", a.resolve(k));
                case 32:
                    if (!Di()) {
                        e.next = 37;
                        break
                    }
                    return e.next = 35,
                    ka("getDeviceInfo");
                case 35:
                    return S = e.sent,
                    e.abrupt("return", Xc.request("getNativeIMUrl", as(as({}, t), {}, {
                        clueId: t.clueId,
                        dealerId: t.dealerId,
                        pos: t.pos,
                        guazi_city: m,
                        deviceId: S.deviceId || "",
                        isApp: 1,
                        versionId: S.appVersion,
                        imSourceFrom: p,
                        isHarmonyNext: Ji() ? 1 : 0
                    }, f), o).then((function(e) {
                        var t = e.data
                          , n = t.code
                          , r = t.data;
                        if (0 === n) {
                            var o, i, c, s, l, f = $(o = r.url).call(o, "https://work.weixin.qq.com") || $(i = r.url).call(i, "guazi://openapi/openWXCustomerService");
                            return y({
                                im_weixin: Number(f),
                                im_source_from: p,
                                im_url: r.url
                            }),
                            f ? r.url : j(c = j(s = j(l = "".concat(r.url, "&tk_p_mti=")).call(l, g, "&incident_id=")).call(s, h, "&im_click_ts=")).call(c, u)
                        }
                        return a.reject(e.data)
                    }
                    )));
                case 37:
                    return x = "self",
                    O = "self",
                    P = "",
                    x = d.ca_s,
                    O = d.ca_n,
                    P = d.guid,
                    e.abrupt("return", Xc.request("getNativeIMUrl", as(as({}, t), {}, {
                        clueId: t.clueId,
                        dealerId: t.dealerId,
                        pos: t.pos,
                        guazi_city: m,
                        ca_s: x,
                        ca_n: O,
                        deviceId: P,
                        isApp: 0,
                        isHarmonyNext: Ji() ? 1 : 0,
                        versionId: "0.0.0",
                        imSourceFrom: p
                    }, f), o).then((function(e) {
                        var t = e.data
                          , n = t.code
                          , r = t.data;
                        return 0 === n ? y({
                            im_source_from: p,
                            im_url: r.url
                        }).then((function() {
                            var e, t, n;
                            return j(e = j(t = j(n = "".concat(r.url, "&tk_p_mti=")).call(n, g, "&incident_id=")).call(t, h, "&im_click_ts=")).call(e, u)
                        }
                        )) : a.reject(e.data)
                    }
                    )));
                case 44:
                case "end":
                    return e.stop()
                }
        }
        ), e)
    }
    )))).apply(this, arguments)
}
function ls() {
    return new a((function(e) {
        var t = {
            state: !1,
            phone: ""
        };
        Di() ? ba.getUserInfo({
            success: function(n) {
                n.token ? (t.state = !0,
                t.phone = n.phone || "",
                e(t)) : e(t)
            },
            fail: function() {
                e(t)
            }
        }) : Xc.requestData("getMaskPhone").then((function(n) {
            t.state = !0,
            t.phone = n.maskPhone || "",
            e(t)
        }
        )).catch((function() {
            e(t)
        }
        ))
    }
    ))
}
function us(e, t) {
    var n = R(e);
    if (L) {
        var r = L(e);
        t && (r = M(r).call(r, (function(t) {
            return T(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function ps(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n, r = null != arguments[t] ? arguments[t] : {};
        if (t % 2)
            o(n = us(Object(r), !0)).call(n, (function(t) {
                Oi(e, t, r[t])
            }
            ));
        else if (P)
            I(e, P(r));
        else {
            var i;
            o(i = us(Object(r))).call(i, (function(t) {
                C(e, t, T(r, t))
            }
            ))
        }
    }
    return e
}
new Qc({
    apiList: {
        getRuleMeta: {
            path: "/api/copilot/ruleMeta",
            method: "get"
        },
        getCopilotInfo: {
            path: "/api/copilot/getCopilotInfo",
            method: "post"
        }
    },
    needVerifyToken: !0,
    baseURL: {
        development: "https://g3-copilot.guazi-cloud.com",
        preview: "https://g3-copilot-preview.guazi-apps.com",
        production: "https://g3-copilot.guazi.com",
        mock: ""
    }[oa()]
});
var fs = function() {
    var e = function() {
        var e = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
        return e ? e[1].replace(/_/g, ".") : ""
    }();
    return function() {
        return /MQQBrowser/.test(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri)
    }() || function() {
        return /MetaSr/.test(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri)
    }() || !e || Number(e.split(".")[0]) < 9
}
  , ds = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      , t = !1;
    if (Bi() && !fs()) {
        var n = "https://link-wuxian.guazi.com/haoche/";
        e.action && (n += "?".concat(hc({
            action: e.action,
            params: c(ps({
                origin: "outside"
            }, e.params || {}))
        }))),
        window.location.href = e.universalLink || n
    } else {
        var r, o = e.schemeUrl || "guazi://openapi/openTab?tab=1";
        e.action && (o = j(r = "guazi://openapi/".concat(e.action, "?")).call(r, hc(ps({
            origin: "outside"
        }, e.params || {})))),
        window.location.href = o
    }
    var i = e.callback;
    if (i || (i = function() {
        if (!1 !== e.fallbackDownload && !t) {
            var n = Nn().get("cainfo") || {}
              , r = 0;
            Vi() ? r = 1 : Bi() && (r = 2),
            Xc.request("getAppUrl", {
                ca_s: n.ca_s || "app_self",
                ca_n: n.ca_n || "app_selfnew",
                pageEnv: r
            }).then((function(e) {
                0 === e.data.code ? window.location.href = e.data.data : console.error(e)
            }
            )).catch((function(e) {
                console.error(e)
            }
            ))
        }
    }
    ),
    Vi() && qi())
        i({
            isWakeUp: t
        });
    else {
        var a = function e() {
            document.hidden && (t = !0,
            i && i({
                isWakeUp: t
            })),
            document.removeEventListener("visibilitychange", e)
        };
        document.addEventListener("visibilitychange", a),
        Bi() && !fs() || x((function() {
            i && i({
                isWakeUp: t
            }),
            document.addEventListener("visibilitychange", a)
        }
        ), 3e3)
    }
}
  , ms = new Qc({
    apiList: {
        getSignature: {
            path: "/api/wechat_signature",
            method: "get"
        }
    },
    needVerifyToken: !1,
    withoutToken: !0,
    baseURL: {
        development: "https://zero-page.guazi-cloud.com",
        preview: "https://zero-page-preview.guazi-apps.com",
        production: "https://zero-page.guazi.com",
        mock: ""
    }[oa()]
})
  , gs = "image1.".concat("guazistatic.com")
  , hs = "image-pub.".concat("guazistatic.com")
  , ys = "".concat("https:", "//").concat(gs)
  , vs = "".concat("https:", "//").concat(hs);
function ws(e, t) {
    var n = R(e);
    if (L) {
        var r = L(e);
        t && (r = M(r).call(r, (function(t) {
            return T(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function _s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n, r = null != arguments[t] ? arguments[t] : {};
        if (t % 2)
            o(n = ws(Object(r), !0)).call(n, (function(t) {
                Oi(e, t, r[t])
            }
            ));
        else if (P)
            I(e, P(r));
        else {
            var i;
            o(i = ws(Object(r))).call(i, (function(t) {
                C(e, t, T(r, t))
            }
            ))
        }
    }
    return e
}
var bs = "aftersale";
function $s(e) {
    var t = ["updateAppMessageShareData", "updateTimelineShareData"]
      , n = ["wx-open-launch-app"]
      , r = function(r) {
        K.exports.config({
            appId: r.appId,
            timestamp: "".concat(r.timestamp),
            nonceStr: r.nonceStr,
            signature: r.signature,
            jsApiList: j(t).call(t, e.jsApiList || []),
            openTagList: j(n).call(n, e.openTagList || []),
            debug: e.debug
        }),
        K.exports.ready((function() {
            var n = e.shareInfo
              , r = {
                title: "你要找的二手车，都在这里！",
                imgUrl: "".concat(ys, "/qn211222112145181e3b271f7e04cfde03032407a4630b.jpg"),
                desc: "瓜子二手车 玩真的 真车源|真车况|真服务|真口碑|真实力",
                link: window.location.href
            };
            if (!0 === n && (n = r),
            n) {
                var i = _s(_s(_s({}, r), n), {}, {
                    success: function() {
                        console.log("分享设置成功")
                    }
                });
                o(t).call(t, (function(e) {
                    K.exports[e](i)
                }
                ))
            }
            console.log("wx js sdk ready", e)
        }
        )),
        K.exports.error((function(e) {
            console.error(e)
        }
        ))
    };
    e.type === bs ? ms.requestData("getSignature", {
        url: window.location.href.split("#")[0],
        type: bs
    }).then((function(e) {
        r(e)
    }
    )) : Xc.requestData("getSignature", {
        url: encodeURIComponent(window.location.href.split("#")[0])
    }).then((function(e) {
        r(e)
    }
    ))
}
var Ss = function(e, t) {
    return void 0 === (r = Nn()).get("gzSupportWebp") && ((n = document.createElement("canvas").toDataURL("image/webp")) && 0 === w(n).call(n, "data:image/webp") ? (r.set("gzSupportWebp", 1),
    document.documentElement.classList.add("webp")) : r.set("gzSupportWebp", 0)),
    1 === r.get("gzSupportWebp") ? function(e, t) {
        if (!e)
            return console.warn("handleWebp，入参不能为空"),
            "";
        if ("string" != typeof e)
            return console.warn("handleWebp，入参应该是字符串"),
            "";
        if (/image.guazistatic.com/.test(e))
            s(e).call(e, "F=WEBP") || (s(e).call(e, "@base@tag=imgScale") ? e += "&F=WEBP" : e += "@base@tag=imgScale&F=WEBP");
        else {
            if (!/image1.guazistatic.com/.test(e)) {
                if (/image-pub.guazistatic.com/.test(e)) {
                    var n = new wi({
                        login_type: 2,
                        app_id: 4750
                    })
                      , r = [{
                        type: "format",
                        options: {
                            f: "webp"
                        }
                    }];
                    return null != t && t.quality && r.push({
                        type: "quality",
                        options: {
                            q: t.quality
                        }
                    }),
                    n.setUrl(e, r)
                }
                return e
            }
            s(e).call(e, "format/webp") || (s(e).call(e, "?") ? e += "/format/webp" : e += "?imageView2/2/format/webp")
        }
        return e
    }(e, t) : e;
    var n, r
};
function xs(e, t) {
    if (!t)
        return {};
    try {
        var n = localStorage.getItem("PAGE_CACHE_VERSION")
          , r = n ? JSON.parse(n) : {}
          , o = !0;
        return t !== r[e] && (r[e] = t,
        o = !1,
        localStorage.setItem("PAGE_CACHE_VERSION", c(r))),
        {
            is_cache: o,
            page_version: t
        }
    } catch (i) {
        return {}
    }
}
var Os = {
    development: "https://abapi-test.guazi-cloud.com",
    preview: "https://abapi.guazi.com",
    production: "https://abapi.guazi.com",
    mock: ""
}[oa()];
function js(e) {
    const {toString: t} = Object.prototype;
    return "[object Object]" === t.call(e)
}
function Ps(...e) {
    const t = Object.create(null);
    return e.forEach((e => {
        e && Object.keys(e).forEach((n => {
            const r = e[n];
            js(r) ? js(t[n]) ? t[n] = Ps(t[n], r) : t[n] = Ps(r) : Array.isArray(r) ? t[n] = [...r] : t[n] = r
        }
        ))
    }
    )),
    t
}
function Is() {
    if (window && window.location) {
        const e = window.location.href.lastIndexOf("?")
          , t = {}
          , n = window.location.href.slice(e + 1);
        if (n && n.length > 0) {
            const e = n.split("&");
            e && e.forEach((e => {
                const [n,r] = e.split("=");
                t[n] = r
            }
            ))
        }
        return t
    }
    return {}
}
oa(),
new Qc({
    apiList: {
        getAbTest: {
            path: "/api/get_treatment",
            method: "get"
        },
        getAbTestBatch: {
            path: "/api/batch_get_treatments",
            method: "get"
        }
    },
    needVerifyToken: !0,
    baseURL: Os
}),
oa();
const Cs = Nn();
let Ts = "";
const As = "undefined" == typeof window
  , Es = "undefined" != typeof window
  , Ns = ["wx-xny"];
Es && (Ts = window.navigator.userAgent);
const Us = (e=Ts) => /Guazi\/c_/.test(e)
  , Rs = (e=Ts) => /gz\.quick/i.test(e)
  , Ls = (e=Ts) => /ios|iphone|ipad|ipod/i.test(e)
  , Ms = (e=Ts) => /android/i.test(e)
  , zs = (e=Ts) => /ArkWeb/i.test(e)
  , Ds = (e=Ts) => Array.isArray(e) ? e.some((e => Ns.includes(e))) : !!Ns.includes(e) || /miniprogram/i.test(e)
  , Ws = (e=Ts) => /Guazi\/chm/i.test(e)
  , Vs = (e=Ts) => /miniProgram/.test(e) && (/KUAISHOU/.test(e) || /KmaSimulator/.test(e))
  , Bs = () => ["crm", "qingtian"].includes(Is().system)
  , Fs = () => Is().toBReqUserId && Bs() || Cs.get("to_b_req_user_id")
  , qs = e => (e || (e = window.location.hostname),
/guazi-mock/.test(e) ? "mock" : /guazi-cloud/.test(e) ? "development" : /\w+-preview/.test(e) ? "preview" : /guazi-online/.test(e) ? "online" : /\w+-dt/.test(e) ? "disaster" : "production");
function Js(e) {
    if (Us()) {
        const t = e || Ts;
        return t.slice(t.indexOf("Guazi/c_") + "Guazi/c_".length, t.lastIndexOf("$"))
    }
    return "0.0.0.0"
}
let Hs = "";
function Gs(e) {
    let t = e;
    if (!t) {
        if ("object" != typeof window)
            return Hs + "__prev";
        t = window.location.href
    }
    const n = new URL(t);
    Hs = n.hostname.replaceAll(".", "") + n.pathname.replaceAll("/", "_");
    const r = n.hash.split("?")[0].replaceAll("/", "");
    return r.includes("wxinfo") || (Hs += r),
    Hs
}
const Ks = {
    setItem(...e) {
        try {
            return localStorage.setItem(...e)
        } catch ($a) {
            return console.log($a),
            ""
        }
    },
    getItem(...e) {
        const t = localStorage.getItem(e[0]) || "";
        try {
            return t.startsWith('"') && t.endsWith('"') ? JSON.parse(t) : t
        } catch ($a) {
            return console.log($a),
            t
        }
    },
    removeItem: (...e) => localStorage.removeItem(e[0]),
    clear: () => localStorage.clear(),
    session: {
        setItem(...e) {
            try {
                return sessionStorage.setItem(...e)
            } catch ($a) {
                return console.log($a),
                ""
            }
        },
        getItem(...e) {
            const t = sessionStorage.getItem(e[0]) || "";
            try {
                return t.startsWith('"') && t.endsWith('"') ? JSON.parse(t) : t
            } catch ($a) {
                return console.log($a),
                t
            }
        },
        removeItem: (...e) => sessionStorage.removeItem(e[0]),
        clear: () => sessionStorage.clear()
    }
}
  , Qs = {
    appKey: "c",
    invokeVersion: "v2",
    rule: {
        getNetworkStatus: {
            previousName: "getNetWorkState",
            transformRes: e => {
                const {code: t} = e.response || {};
                e.response.type = {
                    0: "WIFI",
                    1: "WWAN",
                    2: "NONE"
                }[t] || "UNKNOWN",
                delete e.response.code
            }
        },
        requestPermission: {
            transformParam: e => {
                const t = {
                    MICROPHONE: 1,
                    PUSH: 3
                }[e.data.type] || 2;
                e.data = {
                    mode: t
                },
                e.api = "checkPermissionWindow"
            }
        },
        alert: {
            paramMap: {
                content: "message",
                confirmText: "btn_text"
            },
            resMap: {
                value: (e, t) => {
                    t.confirm = !e
                }
            }
        },
        confirm: {
            paramMap: {
                content: "message",
                confirmText: "yes_btn_text",
                cancelText: "no_btn_text"
            },
            resMap: {
                value: (e, t) => {
                    t.confirm = !!e
                }
            }
        },
        setScreenOrientation: {
            previousName: "rotateScreenOrientation",
            transformParam: e => {
                const {orientation: t} = e.data || {};
                e.data.screen_orientation = "horizontal" === t ? 1 : 2,
                delete e.data.orientation
            }
        },
        login: {
            transformParam: e => {
                const {extra: t} = e.data || {};
                "object" == typeof t && (e.data = Object.assign({}, e.data, t),
                delete e.data.extra)
            }
            ,
            transformRes: e => {
                const {token: t} = e.response || {};
                e.response.status = -1,
                t && (e.response.status = 1)
            }
        },
        scanCode: {
            previousName: "ScanQRCode"
        },
        pickImage: {
            transformParam: e => {
                const {sourceType: t, bizId: n, isPrivate: r, count: o=1} = e.data || {}
                  , i = e.compareVersion(e.appVersion, "9.8.0") >= 0;
                n && i ? (e._apiV2 = !0,
                t && ("album" === t[0] ? (e.api = "uploadImageV2",
                e.data.currentLen = o) : (e.api = "openCameraV2",
                e.data.remain = o)),
                e.data.isPrivate = !0 === r ? 1 : 0) : t && ("album" === t[0] ? (e.api = "uploadImage",
                e.data.currentLen = o) : (e.api = "openCamera",
                e.data.remain = o))
            }
            ,
            resMap: {
                url: "files",
                imgUrls: "files"
            },
            transformRes: e => {
                if ("string" == typeof e.response ? e.response = {
                    code: 0,
                    files: e.response.split(",")
                } : "string" == typeof e.response.files && (e.response.files = e.response.files.split(",")),
                e._apiV2 && e.response.files) {
                    const t = []
                      , n = [];
                    e.response.files.forEach((e => {
                        e && e.url && (t.push(e.url),
                        n.push(e.key || e.url))
                    }
                    )),
                    e.response.files = t,
                    e.response.identify = n
                }
            }
        },
        pickVideo: {
            transformParam: e => {
                const {bizId: t, isPrivate: n} = e.data || {}
                  , r = e.compareVersion(e.appVersion, "9.8.0") >= 0;
                t && r && (e._apiV2 = !0,
                e.api = "pickVideoV2",
                e.data.isPrivate = !0 === n ? 1 : 0)
            }
            ,
            transformRes: e => {
                const {data: t} = e.response || {};
                "string" == typeof t && (e.response.data = JSON.parse(t));
                const {fileKey: n} = e.response.data;
                n && (e.response.data.identify = n)
            }
        },
        saveToAlbum: {
            previousName: "saveAlbum",
            transformParam: e => {
                const {content: t} = e.data || {};
                t && (e.data._param = t)
            }
        },
        openPDF: {
            previousName: "openDocument",
            paramMap: {
                url: "filePath"
            }
        },
        request: {
            previousName: "requestByNative",
            paramMap: {
                header: "headers",
                data: "params"
            },
            resMap: {
                status: "statusCode",
                headers: "header"
            }
        },
        showActionSheet: {
            previousName: "showShareDialog",
            transformParam: e => {
                const {groups: t} = e.data || {};
                try {
                    const n = t[0] && t[0][0];
                    if (n) {
                        const t = {
                            shareTitle: "title",
                            shareContent: "content",
                            shareLink: "url",
                            shareImgUrl: "img"
                        }
                          , r = {
                            shareMediaType: "type",
                            shareTitle: "miniProgramTitle",
                            shareContent: "miniProgramSubTitle",
                            shareLink: "shareMiniProgramUrl",
                            shareAppid: "miniProgramFallbackUrl",
                            shareImgUrl: "shareMiniProgramImageUrl",
                            isSimple: "isSimple"
                        }
                          , o = {
                            shareAppid: "url"
                        };
                        if ("miniprogram" === n.shareMediaType) {
                            const i = {};
                            Object.keys(t).forEach((e => {
                                i[t[e] || e] = n[e] || ""
                            }
                            )),
                            Object.keys(r).forEach((e => {
                                i[r[e] || e] = n[e] || ""
                            }
                            )),
                            Object.keys(o).forEach((e => {
                                i[o[e] || e] = n[e] || ""
                            }
                            )),
                            e.data = {
                                ...e.data,
                                ...n,
                                ...i
                            }
                        } else
                            Object.keys(n).forEach((r => {
                                e.data[t[r] || r] = n[r] || ""
                            }
                            ));
                        delete e.data.groups
                    }
                } catch (n) {
                    e.log(n, "error")
                }
            }
            ,
            transformRes: e => {
                const t = e.response || {};
                t.status = t.isSuccess ? 0 : 2;
                const n = {
                    1: "share-wx-friend",
                    2: "share-wx-moments"
                };
                t.channel && (t.type = n[t.channel] || "unknown"),
                t.isSuccess || (t.type = ""),
                e.response = t
            }
        }
    }
};
let Xs = {};
Es && (Xs = Vo({
    line: "c2c",
    mode: "brief",
    project: "guazi-fe_utils",
    mapRules: [Qs],
    log(e, t) {
        console.log(e, t)
    }
}));
const Zs = Xs;
function Ys(e, t) {
    if (!Es)
        return Promise.reject(new Error("非浏览器环境"));
    const n = t || window.gtk;
    if (!n)
        return Promise.reject(new Error("请先引入gtk"));
    let r, o;
    return "string" == typeof e ? r = e : (r = (null == e ? void 0 : e.moduleId) || (null == e ? void 0 : e.module_id) || "",
    o = "number" == typeof (null == e ? void 0 : e.position) ? null == e ? void 0 : e.position : (null == e ? void 0 : e.position) || "null"),
    new Promise((e => {
        n("get", "mti", {
            module_id: r,
            position: o
        }, (t => {
            e(t)
        }
        ))
    }
    ))
}
function el(e, t) {
    if (!Es)
        return Promise.resolve(!1);
    const n = e || window.gtk
      , r = t.autoParams || {};
    return n ? new Promise((t => {
        Ys({}, e).then((e => {
            n("get", "clientTimeOfLastPage", (o => {
                n("event", "timeOnPage", {
                    time_on_page: Date.now() - o,
                    event_callback: t,
                    mti: e,
                    ...r
                })
            }
            ))
        }
        ))
    }
    )) : Promise.resolve(!1)
}
const tl = (e, t={}) => {
    const n = e || window.gtk
      , r = Ks.session.getItem("WEBVIEW_REQUEST_ID")
      , o = Is() || {};
    if (o.apm_request_id && r !== o.apm_request_id) {
        Ks.session.setItem("WEBVIEW_REQUEST_ID", o.apm_request_id);
        const e = window.location.href.split("?")[0];
        n("get", "mti", {
            module_id: "gzperf-h5_loaded",
            position: "null"
        }, (r => {
            n("event", "show", {
                mti: r,
                ...o,
                ...t,
                page_key: e,
                is_tab: t.is_tab || !1,
                action_time: Date.now().toString(),
                offline_version: t.offline_version || "-"
            })
        }
        ))
    }
}
  , nl = qs()
  , rl = {
    mock: "https://muc.guazi-cloud.com",
    development: "https://muc.guazi-cloud.com",
    preview: "https://muc-preview.guazi-apps.com",
    production: "https://uc.guazi.com"
}[nl]
  , ol = {
    mock: "https://buy.guazi-cloud.com",
    development: "https://buy.guazi-cloud.com",
    preview: "https://buy-preview.guazi-apps.com",
    production: "https://m.guazi.com",
    online: "https://m.guazi-online.com",
    disaster: ""
}[nl]
  , il = {
    mock: "https://gateway-dev.guazi-cloud.com/call_sale/smart_sale_service",
    development: "https://gateway-dev.guazi-cloud.com/call_sale/smart_sale_service",
    preview: "https://kong-pre.guazi.com/call_sale/smart_sale_service",
    production: "https://kong.guazi.com/call_sale/smart_sale_service"
}[nl];
function al(e) {
    return new Promise(( (t, n) => {
        Zs[e]({
            success: e => {
                t(e)
            }
            ,
            fail: e => {
                n(e)
            }
        })
    }
    ))
}
const cl = e => {
    try {
        return JSON.parse(e)
    } catch (t) {
        return e
    }
}
;
const sl = Nn()
  , ll = {
    g_c: 67,
    g_c_d: "sz",
    g_c_n: "苏州",
    d_g_c: "1",
    l_c: -1,
    l_c_d: "www",
    l_c_n: "",
    s_c: 67,
    s_c_d: "sz",
    s_c_n: "苏州",
    d_s_c: "1"
}
  , ul = {
    guaziCity: "g_c",
    guaziCityName: "g_c_n",
    guaziCityDomain: "g_c_d",
    defaultGzCity: "d_g_c",
    selectedCity: "s_c",
    selectedCityName: "s_c_n",
    selectedCityDomain: "s_c_d",
    defaultSlCity: "d_s_c",
    locationCity: "l_c",
    locationCityName: "l_c_n",
    locationCityDomain: "l_c_d"
}
  , pl = 67
  , fl = "苏州"
  , dl = "su"
  , ml = ["g_c", "s_c"];
let gl = !0;
const hl = e => !!e && -1 != e && "undefined" != e
  , yl = () => {
    if (zs())
        return function(e) {
            for (var t = document.cookie.split("; "), n = 0; n < t.length; n++) {
                var r = t[n].split("=");
                if (r[0] == e)
                    return r[1] ? cl(decodeURIComponent(r[1])) : r[1]
            }
        }("gcinfo");
    return sl.get("gcinfo")
}
  , vl = e => (ml.forEach((t => {
    hl(e[t]) || (e[t] = pl,
    e[`${t}_n`] = fl,
    e[`${t}_d`] = dl)
}
)),
hl(e.l_c) || (e.l_c = -1),
e);
function wl() {
    return new Promise((e => {
        if (Us() && gl) {
            gl = !1;
            const e = Pl(window.location.search.split("?")[1] || "");
            if (e && e.app_info) {
                const t = JSON.parse(decodeURIComponent(e.app_info || "{}"));
                _l({
                    g_c: t.city_id,
                    g_c_d: t.city_domain,
                    g_c_n: t.cityName || "",
                    l_c: t.location_city_id || "",
                    s_c: t.select_city_id || t.city_id,
                    s_c_d: t.select_city_domain || t.city_domain,
                    s_c_n: t.selectedCityName || t.cityName || ""
                }),
                setTimeout(( () => {
                    al("getSelectedCity").then((e => {
                        const t = (null == e ? void 0 : e.domain) || "";
                        _l({
                            g_c: e.cityId,
                            g_c_d: t,
                            g_c_n: e.cityName,
                            l_c: e.locationCityId || "",
                            s_c: e.selectedCityId || e.cityId,
                            s_c_d: e.selectedCityDomain || t,
                            s_c_n: e.selectedCityName || e.cityName
                        })
                    }
                    ))
                }
                ), 0)
            }
        }
        if (!Us() && gl) {
            const e = ( () => {
                const e = window.location.search.split("?")[1] || ""
                  , t = Pl(decodeURIComponent(e))
                  , n = {};
                return Object.keys(ul).forEach((e => {
                    const r = ul[e]
                      , o = t[r];
                    o && (n[r] = decodeURIComponent(o))
                }
                )),
                Object.keys(n).length ? n : null
            }
            )();
            e && (_l(e),
            gl = !1)
        }
        const t = yl();
        if (t)
            return -1 != t.l_c && -1 == t.g_c && (t.g_c = t.l_c,
            t.g_c_d = t.l_c_d,
            t.g_c_n = t.l_c_n),
            -1 != t.l_c && -1 == t.s_c && (t.s_c = t.l_c,
            t.s_c_d = t.l_c_d,
            t.s_c_n = t.l_c_n),
            void e(vl(t));
        Us() && al("getSelectedCity").then((t => {
            const n = (null == t ? void 0 : t.domain) || ""
              , r = {
                g_c: t.cityId,
                g_c_d: n,
                g_c_n: t.cityName,
                l_c: t.locationCityId || "",
                s_c: t.selectedCityId || t.cityId,
                s_c_d: t.selectedCityDomain || n,
                s_c_n: t.selectedCityName || t.cityName
            };
            _l(r),
            e(vl(r))
        }
        )),
        Us() || e({
            g_c: 67,
            g_c_d: "sz",
            g_c_n: "苏州",
            l_c: -1,
            s_c: 67,
            s_c_d: "sz",
            s_c_n: "苏州"
        })
    }
    ))
}
function _l(e, t) {
    const n = yl()
      , r = Object.assign({}, n || ll, e);
    tr() && (null == t ? void 0 : t.isPostMessage) && lr({
        needStorage: !1
    }).then(( () => {
        var e, t;
        Zn() ? null == (e = window.wx) || e.miniProgram.postMessage({
            data: r
        }) : Yn() && (null == (t = window.tt) || t.miniProgram.postMessage({
            data: r
        }))
    }
    )),
    (null == t ? void 0 : t.isNotifyNative) && (Zs.invoke("webCityChange", {
        cityId: r.s_c,
        cityDomain: r.s_c_d,
        cityName: r.s_c_n,
        guaziCityId: r.g_c,
        guaziCityDomain: r.g_c_d,
        guaziCityName: r.g_c_n,
        synChange: 1
    }),
    (null == t ? void 0 : t.prePagekey) && Zs.invoke("broadcatAllWebview", {
        action: "checkPopup",
        target_pagekey: t.prePagekey,
        page: t.prePagekey,
        popScene: "switchGuaziCity",
        delayTime: t.delayTime || 0
    }));
    const o = location.host.split(".").slice(-2).join(".");
    zs() ? function(e, t, n={
        path: "/",
        domain: "",
        days: 0
    }) {
        t = "object" == typeof t ? JSON.stringify(t) : t,
        t = encodeURIComponent(t);
        var r = "";
        if (n.days) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * n.days * 60 * 60 * 1e3),
            r = "; expires=" + o.toUTCString()
        }
        var i = n.domain ? "; domain=" + n.domain : "";
        document.cookie = e + "=" + (t || "") + r + i + "; path=/"
    }("gcinfo", r, {
        path: "/",
        domain: o,
        days: 30
    }) : sl.set("gcinfo", r, {
        path: "/",
        domain: o,
        maxAge: 2592e3
    })
}
function bl(e, t=20, n=0, r=20) {
    if (n >= r)
        return "";
    let o = "";
    if (e.textContent)
        o = e.textContent;
    else if (e.innerText && "script" !== e.tagName.toLowerCase())
        o = e.innerText;
    else
        for (const i of e.childNodes)
            i.nodeType === Node.TEXT_NODE ? o += i.textContent.trim() : o += bl(i, t, n + 1, r);
    return o = o.replace(/\s+/g, " ").substring(0, t).trimEnd() + (o.length > t ? "..." : ""),
    o
}
function kl(e) {
    const t = e.getBoundingClientRect()
      , n = function() {
        const e = document.documentElement
          , t = document.body;
        let n = e.scrollLeft
          , r = e.scrollTop;
        return 0 === n && "number" == typeof t.scrollLeft && (n = t.scrollLeft),
        0 === r && "number" == typeof t.scrollTop && (r = t.scrollTop),
        {
            scrollLeft: n,
            scrollTop: r
        }
    }()
      , r = {
        tagName: e.tagName.toLowerCase(),
        size: `${t.width}*${t.height}+${e.scrollWidth}*${e.scrollHeight}`,
        coord: `${t.left}*${t.top}+${n.scrollLeft}*${n.scrollTop}`
    };
    return e instanceof HTMLAnchorElement ? r.href = e.href : e instanceof HTMLImageElement ? r.src = e.src : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? r.value = e.value : r.textContent = bl(e),
    r
}
class $l {
    constructor(e) {
        t(this, "_clickCoordinates"),
        t(this, "debug"),
        t(this, "ignoreTagNames"),
        t(this, "ignoreClassNames"),
        this._clickCoordinates = {},
        this.ignoreTagNames = (null == e ? void 0 : e.ignoreTagNames) || [],
        this.ignoreClassNames = (null == e ? void 0 : e.ignoreClassNames) || [],
        this.debug = (null == e ? void 0 : e.debug) || !1,
        this.startTrackingClickCoordinates()
    }
    clearClickCoordinates() {
        this._clickCoordinates = {},
        this.debug && console.log("-hs--清理点击数据---")
    }
    getAndClearClickCoordinates() {
        const e = {
            ...this._clickCoordinates
        };
        return this.debug && console.log("-hs--上报点击数据---\x3e", e),
        this.clearClickCoordinates(),
        e
    }
    getClickCoordinates() {
        return {
            ...this._clickCoordinates
        }
    }
    setDebug(e) {
        console.log("-hs--debug---\x3e", e),
        this.debug = e
    }
    startTrackingClickCoordinates() {
        console.log("-hs--开始监听点击事件---"),
        window.removeEventListener("click", this.handleClickCoordinates.bind(this), !0),
        window.addEventListener("click", this.handleClickCoordinates.bind(this), !0)
    }
    updateClickCoordinates(e) {
        this._clickCoordinates && (this._clickCoordinates = e)
    }
    handleClickCoordinates(e) {
        const t = e.target;
        if (this.ignoreClassNames.some((e => t.classList.contains(e))) || this.ignoreTagNames.includes(t.tagName))
            return;
        const n = kl(t)
          , r = {
            hsClickCoord: `${e.clientX}*${e.clientY}+${e.pageX}*${e.pageY}`,
            hsTarget: n
        };
        this.debug && console.log("-hs--记录点击数据---\x3e", r),
        this.updateClickCoordinates(r)
    }
}
let Sl;
function xl(e="click", t) {
    return "click" !== e ? {} : (Sl || (Sl = new $l),
    void 0 !== t && Sl.setDebug(t),
    Sl.getAndClearClickCoordinates())
}
"undefined" != typeof window && (Sl = new $l);
const Ol = Nn();
function jl(e, t, n) {
    const r = null == e ? void 0 : e.split("?");
    let o = "";
    r.length > 1 && (o = r.pop() || "");
    let i, a = Pl(o);
    const c = t.track || t;
    if (a.incident_id || !c.incidentId && !c.incident_id || (i = c.incidentId || c.incident_id),
    c.moduleId)
        Ys(c, t.gtkFn).then((e => {
            a.tk_p_mti = e,
            i && (a.incident_id = i),
            t.transferParams && (a = {
                ...t.transferParams,
                ...a
            }),
            o = Il(a, {
                noEncode: !0
            });
            const c = new URL(`${r.join("?")}?${o}`);
            n(c.href, e)
        }
        ));
    else {
        i && (a.incident_id = i),
        t.transferParams && (a = {
            ...t.transferParams,
            ...a
        }),
        o = Il(a, {
            noEncode: !0
        });
        const e = new URL(`${r.join("?")}?${o}`);
        n(e.href)
    }
}
function Pl(e) {
    let t = {};
    if (e && e.length > 0) {
        const n = e.split("&");
        n && n.forEach((e => {
            const n = e.indexOf("=")
              , r = e.slice(0, n)
              , o = e.slice(n + 1);
            t[r] = o
        }
        ))
    }
    return t
}
function Il(e, t={}) {
    const n = [];
    return Object.keys(e).forEach((r => {
        (0 === e[r] || e[r]) && (t.noEncode ? n.push(`${r}=${e[r]}`) : n.push(`${r}=${encodeURIComponent(e[r])}`))
    }
    )),
    n.join("&")
}
let Cl = "";
function Tl() {
    if (Us()) {
        if (Ls())
            return "ios";
        if (zs())
            return "harmony";
        if (Ms())
            return "android"
    } else {
        if (( (e=Ts) => /swan\//.test(e))())
            return "bdxcx";
        if (Vs())
            return "ksxcx";
        if (Ns.includes(Is().wx_aid))
            return "xnyxcx";
        if (( (e=Ts) => /toutiaomicroapp/i.test(e))())
            return "dyxcx";
        if (Ds())
            return "xiaochengxu";
        if (Rs())
            return "kuaiyingyong";
        if (Ws())
            return "chm";
        if (( (e=Ts) => /Guazi\/crm/i.test(e))())
            return "chmbd"
    }
    return Bs() ? "crm2" : "wap"
}
Es && (Cl = window.navigator.userAgent);
let Al = {};
const El = (e={
    returnUrl: ""
}) => {
    let t = e.returnUrl;
    return !t && ( (e=Ts) => !!/micromessenger/i.test(e))() && (t = window.location.href),
    `${rl}/guazi-user-center/uc/login?next=${encodeURIComponent(t) || ""}`
}
  , Nl = Nn();
Rs() && (window.system.onmessage = e => {
    "login" === (e = JSON.parse(e)).action ? (Nl.set("guaZiUserInfo", e.data.webToken, {
        maxAge: 60,
        path: "/",
        domain: document.domain
    }),
    window.location.reload()) : "logout" === e.action && (Nl.remove("guaZiUserInfo", {
        path: "/",
        domain: document.domain
    }),
    window.location.reload())
}
);
const Ul = e => {
    var t;
    if (e.withoutToken)
        return e;
    if (As) {
        if (e.req) {
            const t = hr.parse(e.req.headers.cookie || "").guaZiUserInfo || "";
            32 === t.length ? e.headers.common.token = t : t.length > 0 && (e.headers.common.webToken = t)
        }
    } else {
        if (Us() && !Ws() || "1" === (null == (t = Is()) ? void 0 : t.forceNativeToken))
            return e.onGetTokenStart && e.onGetTokenStart(),
            new Promise((t => {
                Zs.getUserInfo({
                    success: n => {
                        let r = "";
                        n.token && ({token: r} = n);
                        const {longUserId: o, org_user_id: i} = n;
                        e.headers.common.token = r,
                        e.userId = o,
                        e.orgUserId = i,
                        t(e)
                    }
                    ,
                    fail: () => {
                        const n = ( (e=[]) => {
                            if (!Us())
                                return console.warn("getAppInfo方法只能在二手车app中调用"),
                                {};
                            const t = {}
                              , n = Is();
                            return "{}" === JSON.stringify(Al) && (Al = JSON.parse(decodeURIComponent(n.app_info || "{}"))),
                            e.includes("cityInfo") && Al.city_id && Al.city_domain && (t.cityId = Al.city_id,
                            t.cityDomain = Al.city_domain),
                            e.includes("deviceInfo") && Al.device_id && Al.app_id && Al.version_id && Al.os && (t.deviceId = Al.device_id,
                            t.appId = Al.app_id,
                            t.versionId = Al.version_id,
                            t.system = Al.os),
                            e.includes("userInfo") && Al.token && (t.token = Al.token),
                            t
                        }
                        )(["userInfo"]);
                        e.headers.common.token = n.token || "",
                        t(e)
                    }
                    ,
                    complete: () => {
                        e.onGetTokenEnd && e.onGetTokenEnd()
                    }
                })
            }
            ));
        tr() ? e.headers.common.token = Ks.getItem("MINIPROGRAM_TOKEN") || "" : e.headers.common.token = Nl.get("CHDSSO") || ""
    }
    return e
}
  , Rl = e => e.data && (10001 === e.data.code || -2005 === e.data.code) && e.config.autoLogin ? new Promise(( () => {
    const t = e.data.redirect_uri || El();
    Us() ? (Zs.logout({}),
    setTimeout(( () => {
        Zs.login({
            extra: {
                isNeedAB: !0
            },
            success: e => {
                1 === e.status && window.location.reload()
            }
        })
    }
    ), 300)) : tr() ? dr({
        replace: !0,
        url: `/pages/login/index?returnUrl=${encodeURIComponent(window.location.href)}&replace=1`
    }) : window.location.href = t
}
)) : e;
var Ll, Ml = new Uint8Array(16);
function zl() {
    if (!Ll && !(Ll = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Ll(Ml)
}
const Dl = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Wl(e) {
    return "string" == typeof e && Dl.test(e)
}
for (var Vl = [], Bl = 0; Bl < 256; ++Bl)
    Vl.push((Bl + 256).toString(16).substr(1));
function Fl(e, t, n) {
    var r = (e = e || {}).random || (e.rng || zl)();
    if (r[6] = 15 & r[6] | 64,
    r[8] = 63 & r[8] | 128,
    t) {
        n = n || 0;
        for (var o = 0; o < 16; ++o)
            t[n + o] = r[o];
        return t
    }
    return function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          , n = (Vl[e[t + 0]] + Vl[e[t + 1]] + Vl[e[t + 2]] + Vl[e[t + 3]] + "-" + Vl[e[t + 4]] + Vl[e[t + 5]] + "-" + Vl[e[t + 6]] + Vl[e[t + 7]] + "-" + Vl[e[t + 8]] + Vl[e[t + 9]] + "-" + Vl[e[t + 10]] + Vl[e[t + 11]] + Vl[e[t + 12]] + Vl[e[t + 13]] + Vl[e[t + 14]] + Vl[e[t + 15]]).toLowerCase();
        if (!Wl(n))
            throw TypeError("Stringified UUID is invalid");
        return n
    }(r)
}
function ql(e) {
    return !(!e || "null" === e || "undefined" === e)
}
const Jl = async () => {
    let e = Nn().get("uuid") || "";
    try {
        const e = "undefined" != typeof window ? window.location.search.split("?") : [];
        let t = "";
        e.length > 1 && (t = e.pop() || "");
        const n = Pl(t);
        if (Us())
            if (ql(n.app_info)) {
                const e = JSON.parse(decodeURIComponent(n.app_info || "{}"));
                if (e.device_id)
                    return e.device_id
            } else {
                const e = await al("getDeviceInfo");
                if (e.deviceId)
                    return e.deviceId
            }
        if (ql(n.deviceId))
            return n.deviceId;
        if (ql(n.from_guid))
            return n.from_guid;
        if (Ds() && ql(n.openid))
            return n.openid
    } catch ($a) {
        console.error($a)
    }
    return ql(e) || (e = Fl(),
    function(e) {
        const t = Nn();
        let n = "guazi.com";
        try {
            n = document.domain.split(".").slice(-2).join(".")
        } catch (r) {
            console.warn(r)
        }
        t.set("uuid", e, {
            domain: n
        })
    }(e)),
    e
}
;
let Hl = ""
  , Gl = [rl];
const Kl = async (e, t) => {
    const n = Js()
      , r = ( (e=Ts) => Us(e) ? "app" : tr(e) ? "xiaochengxu" : "wap")()
      , o = Tl()
      , i = await wl();
    Hl || (Hl = await Jl());
    const a = e.userId || ""
      , c = e.orgUserId || ""
      , s = Gl.includes(window.location.origin) ? {} : {
        client: Ms() ? "Android" : Ls() ? "ios" : zs() ? "harmony" : "other"
    }
      , l = {
        versionId: n,
        sourceFrom: r,
        pf: o,
        deviceId: Hl,
        guid: Hl,
        userId: a,
        orgUserId: c,
        p_key: Gs(),
        unit: "",
        guazi_city: i.g_c,
        location_city: i.l_c,
        selectedCity: i.s_c,
        ...s
    }
      , u = e.method;
    if (e && e.needUnit && (l.unit = Hl),
    "get" === u || "delete" === u)
        "[object Object]" === Object.prototype.toString.call(e.params) && (e.params = {
            ...l,
            ...e.params
        });
    else if ("post" === u || "put" === u) {
        let n = function() {
            e.params ? e.params.p_key = Gs() : e.params = {
                p_key: Gs()
            }
        };
        if ("[object Object]" === Object.prototype.toString.call(e.data)) {
            if (t.crmClient && Fs()) {
                const t = {
                    ...l,
                    ...e.data.requestParam
                };
                e.data = {
                    ...e.data,
                    requestParam: t
                }
            } else
                e.data = {
                    ...l,
                    ...e.data
                };
            n()
        }
        if ("[object String]" === Object.prototype.toString.call(e.data)) {
            const t = e.data ? En.parse(e.data) : {};
            e.data = En.stringify({
                ...l,
                ...t
            }),
            n()
        }
    }
    return e
}
;
let Ql;
Ql = "undefined" != typeof window ? window : global;
const Xl = ["token"];
function Zl(e) {
    let t;
    "undefined" != typeof window && (window.stringifyParams = function(e) {
        let t, n = "";
        if ("get" === e.method || "delete" === e.method) {
            const t = function(e) {
                const t = function(e) {
                    if (!e)
                        return {};
                    const t = {}
                      , n = Object.keys(e).sort();
                    return Object.keys(n).forEach((r => {
                        void 0 !== e[n[r]] && (t[n[r]] = encodeURIComponent(e[n[r]]))
                    }
                    )),
                    t
                }(e);
                Xl && Xl.forEach((e => {
                    delete t[e]
                }
                ));
                return t
            }(e.params);
            n = function(e="", t) {
                let n = e;
                const r = e.split("&").map((e => e.split("=")[0]));
                return Object.keys(t).forEach((e => {
                    if (!r.includes(e) && Object.prototype.hasOwnProperty.call(t, e)) {
                        const r = t[e];
                        let o = "";
                        "null" === r || (o = "object" == typeof r ? `${e}=${JSON.stringify(r)}` : `${e}=${r}`),
                        n += n ? `&${o}` : `${o}`
                    }
                }
                )),
                n
            }("", t)
        } else
            "post" !== e.method && "put" !== e.method || "string" == typeof e.data && (n = function(e) {
                if (!e)
                    return "";
                const t = e.split("&");
                return t.reduce(( (e, t) => {
                    const [n] = t.split("=");
                    return Xl.includes(n) || (e ? e = `${e}&${t}` : e += t),
                    e
                }
                ), "")
            }(e.data));
        if (e.url && e.url.includes("?")) {
            const t = e.url.indexOf("?")
              , r = e.url.slice(t + 1);
            r && (n = n ? `${n}&${r}` : r)
        }
        if (e.newVerifyAlgorithm)
            t = Yl(n, e);
        else
            try {
                t = e.disabledDecodeByPOSTVerifyToken ? decodeURIComponent(Yl(n, e)) : decodeURIComponent(decodeURIComponent(Yl(n)))
            } catch ($a) {
                t = Yl(n, e)
            }
        return t
    }(e),
    window.ttt = parseInt(String((new Date).getTime() / 1e3)),
    window.md5 = Fo.exports,
    t = ~[],
    t = {
        ___: ++t,
        $$$$: (!1 + "")[t],
        __$: ++t,
        $_$_: (!1 + "")[t],
        _$_: ++t,
        $_$$: ({} + "")[t],
        $$_$: (t[t] + "")[t],
        _$$: ++t,
        $$$_: (!0 + "")[t],
        $__: ++t,
        $_$: ++t,
        $$__: ({} + "")[t],
        $$_: ++t,
        $$$: ++t,
        $___: ++t,
        $__$: ++t
    },
    t.$_ = (t.$_ = t + "")[t.$_$] + (t._$ = t.$_[t.__$]) + (t.$$ = (t.$ + "")[t.__$]) + (!t + "")[t._$$] + (t.__ = t.$_[t.$$_]) + (t.$ = (!0 + "")[t.__$]) + (t._ = (!0 + "")[t._$_]) + t.$_[t.$_$] + t.__ + t._$ + t.$,
    t.$$ = t.$ + (!0 + "")[t._$$] + t.__ + t._ + t.$ + t.$$,
    t.$ = t.___[t.$_][t.$_],
    t.$(t.$(t.$$ + '"\\' + t.__$ + t.$$_ + t.$$$ + "\\" + t.__$ + t.$_$ + t.__$ + "\\" + t.__$ + t.$_$ + t.$$_ + t.$$_$ + t._$ + "\\" + t.__$ + t.$$_ + t.$$$ + ".\\" + t.__$ + t.$$_ + t.$$_ + t.$$$_ + "\\" + t.__$ + t.$$_ + t._$_ + "\\" + t.__$ + t.$_$ + t.__$ + t.$$$$ + "\\" + t.__$ + t.$$$ + t.__$ + "_" + t.__ + t._$ + "\\" + t.__$ + t.$_$ + t._$$ + t.$$$_ + "\\" + t.__$ + t.$_$ + t.$$_ + "\\" + t.$__ + t.___ + "=\\" + t.$__ + t.___ + "\\" + t.__$ + t.$_$ + t.$_$ + t.$$_$ + t.$_$ + "('\\" + t.__$ + t.$__ + t.$$$ + t._ + t.$_$_ + "\\" + t.__$ + t.$$$ + t._$_ + "\\" + t.__$ + t.$_$ + t.__$ + t.$$__ + (!1 + "")[t._$_] + "\\" + t.__$ + t.$_$ + t.__$ + t.$$$_ + "\\" + t.__$ + t.$_$ + t.$$_ + t.__ + t._ + t.$$__ + "'\\" + t.$__ + t.___ + "+\\" + t.$__ + t.___ + "\\" + t.__$ + t.$_$ + t.$_$ + t.$$_$ + t.$_$ + "(" + t.__ + t.__ + t.__ + "\\" + t.$__ + t.___ + "+\\" + t.$__ + t.___ + "''\\" + t.$__ + t.___ + "+\\" + t.$__ + t.___ + "\\" + t.__$ + t.$$_ + t._$$ + t.__ + "\\" + t.__$ + t.$$_ + t._$_ + "\\" + t.__$ + t.$_$ + t.__$ + "\\" + t.__$ + t.$_$ + t.$$_ + "\\" + t.__$ + t.$__ + t.$$$ + "\\" + t.__$ + t.$_$ + t.__$ + t.$$$$ + "\\" + t.__$ + t.$$$ + t.__$ + "\\" + t.__$ + t._$_ + t.___ + t.$_$_ + "\\" + t.__$ + t.$$_ + t._$_ + t.$_$_ + "\\" + t.__$ + t.$_$ + t.$_$ + "\\" + t.__$ + t.$$_ + t._$$ + '))"')())())
}
function Yl(e, t) {
    if (!e)
        return "";
    const n = e.split("&").sort(( (e, t) => {
        const [n] = e.split("=")
          , [r] = t.split("=");
        return n === r ? 0 : n > r ? 1 : -1
    }
    ));
    let r;
    if (t && "post" === t.method && t.disabledDecodeByPOSTVerifyToken)
        return r = n.join("&"),
        r;
    try {
        r = decodeURIComponent(n.join("&"))
    } catch ($a) {
        r = n.join("&")
    }
    return r
}
const eu = e => (Zl(e),
e.headers.common["client-time"] = Ql.ttt,
e.headers.common["verify-token"] = Ql.verify_token,
e);
var tu = Object.defineProperty
  , nu = Object.getOwnPropertySymbols
  , ru = Object.prototype.hasOwnProperty
  , ou = Object.prototype.propertyIsEnumerable
  , iu = function(e, t, n) {
    return t in e ? tu(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n
}
  , au = ["info", "warning", "error"];
function cu(e, t) {
    return function(e, t) {
        return (t = t || {}).headers = t.headers || {},
        t.referrerPolicy = "unsafe-url",
        window.fetch ? fetch(e, t).catch((function(e) {
            console.log(e)
        }
        )) : Promise.resolve()
    }("".concat(e, "/monitor/api?").concat(function(e, t) {
        var n = [];
        return t = t || {},
        Object.keys(e).forEach((function(r) {
            (0 === e[r] || e[r]) && (t.noEncode ? n.push("".concat(r, "=").concat(e[r])) : n.push("".concat(r, "=").concat(encodeURIComponent(e[r]))))
        }
        )),
        n.join("&")
    }(t)))
}
var su = !1
  , lu = "c2c"
  , uu = "";
function pu(e) {
    return t = e.level,
    n = e.reportLevel,
    au.indexOf(t) >= au.indexOf(n) ? cu(su ? "https://eagle-service.guazi-cloud.com" : "https://eagle-service.guazi.com", function(e, t) {
        for (var n in t || (t = {}))
            ru.call(t, n) && iu(e, n, t[n]);
        if (nu)
            for (var r = nu(t), o = 0, i = r.length; o < i; o++)
                n = r[o],
                ou.call(t, n) && iu(e, n, t[n]);
        return e
    }({
        line: lu,
        project: uu
    }, e)) : Promise.resolve();
    var t, n
}
let fu;
var du;
fu = Es ? qs() : ( () => {
    const e = {
        dev: "development",
        preview: "preview",
        online: "production",
        mock: "mock"
    };
    return process.env.MED_ENV ? (console.log(`==== MED_ENV: ${process.env.MED_ENV} ====`),
    e[process.env.MED_ENV]) : process.env.GUAZI_FE_ENV ? process.env.GUAZI_FE_ENV : "development"
}
)(),
su = "development" === (du = {
    env: fu
}).env,
lu = du.line || lu,
uu = du.project || uu;
const mu = e => {
    let {data: t} = e;
    const {config: n} = e;
    return t || (t = {
        code: -1
    }),
    n.monitor && pu({
        apiUrl: `${n.baseURL}${n.url}`,
        method: n.method,
        httpCode: 200,
        code: t.code,
        msg: t.msg || t.message || "-",
        level: [0, 10001, -2005].includes(t.code) ? "info" : "error",
        reportLevel: n.monitor.level,
        project: n.project
    }),
    e
}
  , gu = e => {
    const {config: t={}} = e;
    t.monitor && pu({
        apiUrl: `${t.baseURL}${t.url.startsWith("/") || t.baseURL.endsWith("/") ? t.url : `/${t.url}`}`,
        method: t.method,
        httpCode: e.response ? e.response.status : "-",
        msg: e.message || "-",
        code: "-",
        level: "error",
        reportLevel: t.monitor.level,
        project: t.project
    });
    const n = e && e.message || ""
      , r = n.match(/status code (.*)/) || []
      , o = n.includes("timeout")
      , i = {
        url: `${t.baseURL}${t.url}`,
        message: n,
        code: e.code || e.response && e.response.status || r[1] || (o ? "519" : "unknown"),
        headers: t.headers,
        query: t.params
    };
    return e.message = `networkError,${JSON.stringify(i)}`,
    Promise.reject(e)
}
  , hu = e => {
    let t = "";
    try {
        t = localStorage.getItem("szlm-id") || ""
    } catch (n) {
        console.log(n)
    }
    return Us() && !Ws() && !Rs() || !t || e.withoutSzlmId || (e.headers.common["szlm-id"] = t),
    e
}
  , yu = Nn()
  , vu = function(e={}, t={}) {
    if ("2" === t.toSeller) {
        let r = {};
        try {
            r = t.seller_extra && JSON.parse(decodeURIComponent(t.seller_extra))
        } catch (n) {
            console.error(n)
        }
        return Object.assign(e, r),
        e
    }
    return e
}
  , wu = function(e={}, t={}) {
    return "2" === t.toSeller ? Object.assign(e, {
        token: t.tmpToken
    }) : e
};
class _u {
    constructor(e) {
        t(this, "config"),
        t(this, "apiList"),
        t(this, "project"),
        t(this, "crmClient"),
        t(this, "baseUrl"),
        t(this, "netApi"),
        t(this, "urlQuery", {}),
        this.config = e,
        this.apiList = e.apiList,
        this.crmClient = e.client || "",
        this.baseUrl = e.baseURL || "",
        this.urlQuery = Is(),
        l && (this.netApi = l.create({
            withCredentials: !0,
            timeout: 1e4,
            ...e
        }),
        e.needVerifyToken && this.netApi.interceptors.request.use(eu),
        this.netApi.interceptors.request.use((e => Kl(e, {
            crmClient: this.crmClient
        }))),
        this.netApi.interceptors.request.use(Ul),
        this.netApi.interceptors.response.use(Rl),
        Es && (this.netApi.interceptors.request.use(hu),
        this.netApi.interceptors.response.use(mu, gu)))
    }
    requestData(e, t={}, n={}) {
        let r;
        As && n.req && (r = n.req.headers["user-agent"] || "");
        const o = function(e) {
            let t = e || Cl || "";
            t = t.toLowerCase();
            let n = "";
            if (t.indexOf("mac os x") > -1) {
                const e = /os [\d._]*/gi;
                n = `IOS${`${t.match(e)}`.replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")}`
            } else
                n = t.indexOf("arkweb") > -1 ? "Harmony" : t.indexOf("android") > -1 || t.indexOf("linux") > -1 ? t.indexOf("(android;") >= 0 ? `Android${t.substring(t.indexOf("(android;") + 9, t.indexOf(";dpi"))}` : `Android${t.substring(t.indexOf("android ") + 8, t.indexOf(";", t.indexOf("android ")) - t.indexOf("android ") - 8)}` : t.indexOf("bb10") > -1 ? `blackberry${t.substring(t.indexOf("bb10") + 5, t.indexOf(";", t.indexOf("bb10")) - t.indexOf("bb10") - 5)}` : t.indexOf("iemobile") > -1 ? `winphone${t.substring(t.indexOf("iemobile") + 9, t.indexOf(";", t.indexOf("iemobile")) - t.indexOf("iemobile") - 9)}` : t.indexOf("windows nt 5.0") > -1 ? "Windows 2000" : t.indexOf("windows nt 5.1") > -1 || t.indexOf("windows nt 5.2") > -1 ? "Windows XP" : t.indexOf("windows nt 6.0") > -1 ? "Windows Vista" : t.indexOf("windows nt 6.1") > -1 || t.indexOf("windows 7") > -1 ? "Windows 7" : t.indexOf("windows nt 6.2") > -1 || t.indexOf("windows 8") > -1 ? "Windows 8" : t.indexOf("windows nt 6.3") > -1 ? "Windows 8.1" : t.indexOf("windows nt 6.2") > -1 || t.indexOf("windows nt 10.0") > -1 ? "Windows 10" : "Unknown";
            return n
        }(r);
        return t = {
            osv: o,
            ...t
        },
        this.request(e, t, n).then((e => {
            e = e || {};
            const {code: t, data: r} = e.data || {};
            return 0 === t ? n.timestamp ? e.data : r : Promise.reject(e)
        }
        ))
    }
    request(e, t={}, n={}) {
        if (this.apiList && this.apiList[e]) {
            let r = "";
            const o = this.apiList[e]
              , i = o.mockUrl || this.config.mockUrl || "https://rap2api.guazi-apps.com/app/mock/310/GET";
            if (o.isMock && (n.baseURL = i),
            o.monitor && (n.monitor = o.monitor),
            r = "string" == typeof o.path ? o.path : o.path(t),
            this.crmClient && Fs())
                return n.httpMethod ? n.httpMethod = n.httpMethod : n.httpMethod = "get" === o.method ? "get" : "postByForm",
                this.postJSON(r, t, n);
            if (n.httpMethod) {
                const {httpMethod: e, ...o} = n;
                if (this[e])
                    return this[e](r, t, o)
            }
            return "get" === o.method ? this.get(r, t, n) : this.postByForm(r, t, n)
        }
        return Promise.reject(new Error(`api name ${e} not exist`))
    }
    async get(e, t={}, n={}) {
        return t = vu(t, this.urlQuery),
        n.headers = wu(n.headers, this.urlQuery),
        (n.needVerifyToken || this.config.needVerifyToken) && (t.platfromSource = "wap"),
        this.netApi.get(e, {
            params: t,
            ...n
        })
    }
    async post(e, t={}, n={}) {
        return t = vu(t, this.urlQuery),
        n.headers = wu(n.headers, this.urlQuery),
        (n.needVerifyToken || this.config.needVerifyToken) && (t.platfromSource = "wap"),
        this.netApi.post(e, t, n)
    }
    async postByForm(e, t={}, n={}) {
        return (n.needVerifyToken || this.config.needVerifyToken) && (t.platfromSource = "wap"),
        this.netApi.post(e, En.stringify(t), n)
    }
    async put(e, t={}, n={}) {
        return t = vu(t, this.urlQuery),
        ((n = wu(n.headers, this.urlQuery)).needVerifyToken || this.config.needVerifyToken) && (t.platfromSource = "wap"),
        this.netApi.put(e, t, n)
    }
    async delete(e, t={}, n={}) {
        return t = vu(t, this.urlQuery),
        ((n = wu(n.headers, this.urlQuery)).needVerifyToken || this.config.needVerifyToken) && (t.platfromSource = "wap"),
        this.netApi.delete(e, {
            params: t,
            ...n
        })
    }
    head(e, t={}, n={}) {
        return t = vu(t, this.urlQuery),
        ((n = wu(n.headers, this.urlQuery)).needVerifyToken || this.config.needVerifyToken) && (t.platfromSource = "wap"),
        this.netApi.head(e, {
            params: t,
            ...n
        })
    }
    async postJSON(e, t={}, n={}) {
        if ((n.needVerifyToken || this.config.needVerifyToken) && (t.platfromSource = "wap"),
        this.crmClient && Fs()) {
            n.httpMethod && "postJSON" !== n.httpMethod || (n.httpMethod = "postByJson");
            const r = {
                client: this.crmClient,
                host: this.baseUrl,
                path: e,
                method: n.httpMethod,
                requestParam: t,
                gzUserId: Is().toBReqUserId || yu.get("to_b_req_user_id", {
                    parseJSON: !1
                })
            };
            e = "/api/gateway/redirect",
            t = r,
            n.baseURL = il
        }
        return this.netApi.post(e, t, {
            headers: {
                "content-type": "application/json"
            },
            ...n
        })
    }
}
t(_u, "CancelToken"),
_u.CancelToken = l && l.CancelToken;
const bu = new _u({
    apiList: {
        sendBuyClue: {
            path: "/api/clues/buy/increase/miniproject",
            method: "get"
        },
        getNativeIMUrl: {
            path: "/mall-usercenter/customer/native/im",
            method: "get"
        },
        getMaskPhone: {
            path: "/api/usercenter/mask-phone",
            method: "get"
        },
        getSignature: {
            path: "/mall-usercenter/wechat/jssdk-signature",
            method: "post"
        },
        getAppUrl: {
            path: "/mall-usercenter/userAction/appUrl",
            method: "get"
        },
        batchConfig: {
            path: "/activity/online-inquiry/batch-config",
            method: "get"
        },
        cityLocation: {
            path: "/car-source/city/location",
            method: "get"
        },
        getUserCityInfo: {
            path: "/car-source/city/getUserCityInfo",
            method: "get"
        },
        queryConfiguration: {
            path: "/api/dynamicInterface/queryConfiguration",
            method: "get"
        }
    },
    needVerifyToken: !0,
    baseURL: {
        development: "https://client-restful-api.guazi-cloud.com",
        preview: "https://client-restful-api-preview.guazi-apps.com",
        production: "https://mapi.guazi.com",
        mock: ""
    }[qs()]
})
  , ku = ({gtkFn: e, VueEvent: t, pagekey: n}) => {
    const r = e || window.gtk
      , o = n;
    let i = [];
    const a = '{"times":0,"isCurrState":1,"showNum":0,"firstShowTimeStamp":"","closeTimeStamp":""}'
      , c = (e, t, n) => {
        const r = t || Date.now();
        e.sort((function(e, t) {
            return e.cycle - t.cycle
        }
        ));
        let o = -1;
        if (e.forEach(( (e, t) => {
            if (n = r,
            i = e.cycle,
            n + 24 * i * 60 * 60 * 1e3 > Date.now() && -1 === o)
                o = t;
            else
                var n, i
        }
        )),
        -1 == o)
            return 3;
        let i = e[o] || {};
        return console.log(i, n, "==satisfyIndex"),
        i.timesAuser > n ? 2 : 1
    }
      , s = e => {
        const {questionList: r=[], insetBoxId: o, feedBackKey: i, moduleName: a} = e;
        var c;
        const s = {
            ...r[(c = r.length - 1,
            Math.floor(Math.random() * (c - 0 + 1)) + 0)],
            insetBoxId: o,
            feedBackKey: i,
            pagekey: n,
            moduleName: a
        };
        t.emit && t.emit("feedBackInfo", s),
        t.$emit && t.$emit("feedBackInfo", s)
    }
      , l = (e, t) => {
        e ? setTimeout(( () => {
            console.log("立即触发----延时"),
            s(t)
        }
        ), e) : (s(t),
        console.log("立即触发----"))
    }
      , u = e => {
        if (!i.length)
            return;
        const {trackingType: t, moduleId: n} = e;
        i.forEach((e => {
            const r = e.triggeredCondition || {}
              , i = e.frequency || []
              , s = e.positionFrequency || {}
              , {actionName: u, times: p, timeAfter: f, moduleName: d} = r;
            if (n !== d || t !== u)
                return;
            const m = `${o}_${d}_${u}`
              , g = localStorage.getItem(m) || a;
            let h = JSON.parse(g);
            if (3 === h.isCurrState)
                return void console.log("---已经提交过，不重复出现---");
            const y = c(i, h.firstShowTimeStamp, h.showNum);
            3 === y && (h = JSON.parse(a));
            const v = {
                ...h,
                times: h.times + 1
            };
            if (p <= v.times) {
                if (k = e.insetBoxId,
                !document.querySelector(k))
                    return void console.log(e.insetBoxId + "不存在");
                if ((e => {
                    const t = document.querySelector(e);
                    let n = !1;
                    return t && t.querySelectorAll(".me-feedback").length && (n = !0),
                    n
                }
                )(e.insetBoxId))
                    return;
                var w = Date.now();
                0 === v.showNum && (v.firstShowTimeStamp = w),
                y > 1 && (1 === v.isCurrState && (console.log(y, "常规====isShow"),
                l(f, {
                    ...e,
                    feedBackKey: m,
                    moduleName: d
                }),
                v.showNum = v.showNum + 1),
                2 === v.isCurrState && (_ = v.closeTimeStamp,
                b = s.repeat,
                _ + 24 * b * 60 * 60 * 1e3 < Date.now()) && (console.log(y, "有关闭操作====isShow"),
                v.isCurrState = 1,
                v.closeTimeStamp = "",
                l(f, {
                    ...e,
                    feedBackKey: m,
                    moduleName: d
                }),
                v.showNum = v.showNum + 1))
            }
            var _, b, k;
            localStorage.setItem(m, JSON.stringify(v))
        }
        ))
    }
      , p = e => {
        const {feedBackKey: t, closeType: n} = e
          , r = localStorage.getItem(t);
        if (!r)
            return;
        const o = {
            ...JSON.parse(r),
            isCurrState: "submit" === n ? 3 : 2,
            closeTimeStamp: Date.now()
        };
        localStorage.setItem(t, JSON.stringify(o))
    }
    ;
    r("set", {
        afterCallback: (e, t) => {
            const {moduleId: n, tracking_type: r, anls_info: o={}} = e.params || {};
            u({
                ...e.params,
                ...o,
                moduleId: n,
                trackingType: r
            })
        }
    }),
    setTimeout(( () => {
        ( () => {
            const e = `${n}_feedback`;
            bu.requestData("queryConfiguration", {
                requestKey: e
            }).then((n => {
                const r = (null == n ? void 0 : n.result[e]) || "{}";
                i = JSON.parse(r),
                t.on && t.on("feedBackClose", (e => {
                    p(e)
                }
                )),
                t.$on && t.$on("feedBackClose", (e => {
                    p(e)
                }
                ))
            }
            )).catch((e => {
                console.error(e)
            }
            ))
        }
        )()
    }
    ), 300)
}
  , $u = ["incident_id", "incidentId"]
  , Su = [{
    clueId: "carid",
    incidentId: "incident_id"
}, "incident_id"];
function xu({router: e, pageTypeConfig: t={}, gtkFn: n, transferParams: r=[], autoParams: o=[], autoPageload: i=!1, pageloadExcludes: a=[], autoWebviewLoad: c=!1, webviewLoadExtra: s={}, webviewLoadExcludes: l=[], autoPagetype: u=!0, globalProperties: p, vueDirective: f, VueEvent: d}) {
    const m = {}
      , g = n || window.gtk
      , h = t.map
      , y = t.prefix;
    let v = "";
    const w = () => Pl(window.location.search.split("?")[1] || "");
    r = $u.concat(r),
    o = Su.concat(o);
    const _ = e => {
        let t = {};
        t = e ? {
            ...e.params,
            ...e.query
        } : w() || {};
        let n = {};
        return o.forEach((e => {
            "object" == typeof e ? Object.keys(e).forEach((r => {
                if (void 0 !== t[r]) {
                    const o = e[r].split(".");
                    if (o.length > 1) {
                        let e = {};
                        o.reverse().forEach(( (n, o) => {
                            e = 0 === o ? {
                                [n]: t[r]
                            } : {
                                [n]: Ps({}, e)
                            }
                        }
                        )),
                        n = Ps({}, n, e)
                    } else
                        n[e[r]] = t[r]
                }
            }
            )) : void 0 !== t[e] && (n[e] = t[e])
        }
        )),
        n
    }
      , b = (e, t={}) => {
        const n = _(e)
          , r = {
            hsPageTitle: document.title
        };
        g("get", "mti", {
            module_id: "null",
            position: "null"
        }, (e => {
            g("event", "pageload", {
                mti: e,
                ...r,
                ...n,
                ...t
            })
        }
        ))
    }
      , k = () => {
        (function(e, t={}) {
            if (!Es)
                return Promise.resolve(!1);
            const n = e || window.gtk;
            return n ? new Promise((e => {
                Ys({}).then((r => {
                    n("get", "clientTimeOfLastPage", (n => {
                        const o = Js();
                        let i = "timeOnPage";
                        Ms() && (i = "8.17.0.6" === o || "8.17.1.6" === o ? "TIME_ON_PAGE" : "timeOnPage"),
                        Zs.invoke("sendTrack", {
                            mti: r,
                            time_on_page: Date.now() - n,
                            tracking_type: i,
                            ...t
                        }),
                        e(!0)
                    }
                    ))
                }
                ))
            }
            )) : Promise.resolve(!1)
        }
        )(n).then(( () => {
            var e;
            Us() && Zs.closeWebview(e)
        }
        ))
    }
    ;
    if (u) {
        const t = e => {
            let t = e;
            return h ? (Object.keys(h).some((n => !!h[n].includes(e) && (t = n,
            n))),
            t) : t
        }
        ;
        if (e)
            e.afterEach((e => {
                const n = e.name;
                v = n,
                m[v] = {},
                ku({
                    gtkFn: g,
                    VueEvent: d,
                    pagekey: `${y}${n}`
                }),
                g("set", {
                    pagekey: `${y}${n}`,
                    pagetype: `${y}${t(n)}`
                })
            }
            ));
        else {
            const e = window.location.pathname.split("/")[1];
            v = e,
            m[v] = {},
            g("set", {
                pagekey: `${y}${e}`,
                pagetype: `${y}${t(e)}`
            })
        }
    }
    i && e ? (e.afterEach((e => {
        a.includes(v) || b(e)
    }
    )),
    document.addEventListener("visibilitychange", ( () => {
        "visible" === document.visibilityState && (a.includes(v) || b(e.currentRoute))
    }
    ))) : i && b(),
    c && (e ? e.afterEach((e => {
        l.includes(e.name) || tl(g, s)
    }
    )) : l.includes(v) || tl(g, s));
    p.$trackRoute = function({path: e, query: t={}, track: n, replace: o, blockReportClick: i, blockTimeOnPage: a=!1}) {
        if (!e)
            return void console.error("path不能为空");
        if (!Us() && e.startsWith("guazi://")) {
            if (!e.startsWith("guazi://openapi/openWebview"))
                return void console.error("openapi只能在瓜子APP中打开");
            {
                const t = Pl(e.split("?")[1]);
                e = decodeURIComponent(t.url)
            }
        }
        const c = (n={}) => {
            p.$router[o ? "replace" : "push"]({
                path: e,
                query: {
                    ...t,
                    ...n
                }
            })
        }
          , s = w()
          , l = {};
        if (r.forEach((e => {
            s[e] && (l[e] = s[e])
        }
        )),
        /^(http(s)?:)?\/\//.test(e) || e.startsWith("guazi://")) {
            e.startsWith("//") && (e = window.location.protocol + e);
            const r = _(p.$route)
              , c = !!n && !i;
            let s = Ps({}, m[v].sendTrackParams, n);
            return c && (s = Ps(s)),
            void function(e, t) {
                if (!e)
                    return;
                const n = (t = t || {}).gtkFn || window.gtk
                  , r = t.autoParams || {}
                  , o = e => new Promise((o => {
                    const i = e => {
                        var i;
                        const a = xl(null == (i = null == t ? void 0 : t.track) ? void 0 : i.tracking_type);
                        n("event", (null == t ? void 0 : t.tracking_type) || "click", Ps({}, {
                            mti: e,
                            incident_id: (null == t ? void 0 : t.track) && (null == t ? void 0 : t.track.incidentId),
                            event_callback: o
                        }, a, r, null == t ? void 0 : t.track))
                    }
                    ;
                    (null == t ? void 0 : t.sendTrack) ? e ? i(e) : Ys(null == t ? void 0 : t.track, null == t ? void 0 : t.gtkFn).then((e => {
                        i(e)
                    }
                    )) : o(!0)
                }
                ));
                if (e.startsWith("http") || e.startsWith("miniprogram"))
                    if (e.endsWith(".mp4"))
                        jl(e = `https://act.guazi.com/video?video=${encodeURIComponent(e)}&hideTitlebar=1`, t, ( (e, t) => {
                            o(t),
                            Zs.createWebview({
                                url: e
                            })
                        }
                        ));
                    else if (Us())
                        jl(e, t, ( (e, n) => {
                            o(n),
                            (null == t ? void 0 : t.replace) ? window.location.replace(e) : Zs.createWebview({
                                url: e,
                                isLiveCallingPage: (null == t ? void 0 : t.isLiveCallingPage) || 0
                            })
                        }
                        ));
                    else if (tr()) {
                        const n = Ol.get("HAS_CONFIRM_CITY_POPUP") || "";
                        n && (t.transferParams = {
                            ...t.transferParams || {},
                            hasCCP: n
                        }),
                        jl(e, t, ( (e, n) => {
                            if (o(n),
                            e.includes(`${ol}/m/empty`) && Ds() && !Vs()) {
                                const t = e.replace(`${ol}/m/empty?`, "");
                                e = `/pages/web/web?url=interceptToCustomerService&${t}`
                            }
                            if (Zn() || Yn()) {
                                const t = /^https:\/\/(\w|-)+\.guazi(-cloud|-apps)?\.com\/detail\/?\?/;
                                e = e.replace(t, "/pages/detail/detail?")
                            }
                            if (e.includes("miniprogram://")) {
                                let t = e.split("//")[1];
                                e = `/${t}`
                            }
                            /pages\/detail\/detail/.test(e) ? wl().then((n => {
                                e = `${e}&s_c=${n.s_c}&s_c_n=${encodeURI(n.s_c_n)}&s_c_d=${n.s_c_d}&g_c=${n.g_c}&g_c_n=${encodeURI(n.g_c_n)}&g_c_d=${n.g_c_d}`,
                                dr({
                                    ...t,
                                    replace: null == t ? void 0 : t.replace,
                                    url: e,
                                    tabbar: null == t ? void 0 : t.miniTabbar
                                })
                            }
                            )) : dr({
                                ...t,
                                replace: null == t ? void 0 : t.replace,
                                url: e,
                                tabbar: null == t ? void 0 : t.miniTabbar
                            })
                        }
                        ))
                    } else
                        Rs() ? jl(e, t, ( (e, n) => {
                            o(n),
                            (null == t ? void 0 : t.replace) ? window.location.replace(e) : window.system.postMessage(JSON.stringify({
                                action: "createWebView",
                                data: {
                                    url: e
                                }
                            }))
                        }
                        )) : jl(e, t, ( (e, n) => {
                            o(n).then(( () => {
                                (null == t ? void 0 : t.replace) ? window.location.replace(e) : window.location.href = e
                            }
                            ))
                        }
                        ));
                else
                    jl(e, t, ( (e, t) => {
                        o(t),
                        window.location.href = e
                    }
                    ));
                t.blockTimeOnPage || el(t.gtkFn, {
                    autoParams: r
                })
            }(e, {
                replace: o,
                track: s,
                autoParams: r,
                transferParams: {
                    ...l,
                    ...t,
                    ...m[v].needTransferParams
                },
                gtkFn: g,
                sendTrack: c,
                blockTimeOnPage: a
            })
        }
        n ? g("get", "mti", {
            module_id: n.moduleId,
            position: n.position
        }, (e => {
            const t = _(p.$route);
            if (!i) {
                const r = xl(n.tracking_type);
                g("event", n.tracking_type || "click", Ps({}, {
                    mti: e,
                    incident_id: n.incidentId,
                    ...t
                }, r, m[v].sendTrackParams, n))
            }
            c({
                tk_p_mti: e,
                incident_id: n.incidentId,
                ...l,
                ...m[v].needTransferParams
            })
        }
        )) : c({
            ...l,
            ...m[v].needTransferParams
        })
    }
    ;
    p.$track = function(e) {
        const t = _(p.$route)
          , n = xl(e.tracking_type);
        e.moduleId ? g("get", "mti", {
            module_id: e.moduleId,
            position: e.position
        }, (r => {
            g("event", e.tracking_type || "click", Ps({}, {
                mti: r,
                ...t
            }, n, m[v].sendTrackParams, e))
        }
        )) : g("event", e.tracking_type || "click", Ps({}, t, n, m[v].sendTrackParams, e))
    }
    ;
    function $(e) {
        let t = e.expression;
        if (/^\d+$/.test(t))
            t = {
                eventid: `${t}`
            };
        else
            switch (t = e.value,
            typeof t) {
            case "string":
            case "number":
                t = {
                    eventid: `${t}`
                };
                break;
            case "object":
                break;
            default:
                return void console.error("不支持的数据类型")
            }
        return t
    }
    p.$setPageCommonParams = function(e={}, t={}) {
        m[v] = m[v] || {};
        const n = {
            sendTrackParams: e,
            needTransferParams: t
        };
        m[v] = {
            ...m[v],
            ...n
        }
    }
    ;
    p.$sendPageload = function(e) {
        b(p.$route, e)
    }
    ,
    p.$sendWebviewLoad = function(e) {
        tl(g, e)
    }
    ;
    return p.$closeCurrentPage = function() {
        k()
    }
    ,
    f && (f("beseen", ( (e, t) => {
        const n = _()
          , r = $(t);
        r.mti && r.mti.moduleId && (r.mti.module_id = r.mti.moduleId),
        r.moduleId && (r.mti ? r.mti.module_id = r.moduleId : r.mti = {
            module_id: r.moduleId
        }),
        r.position >= 0 && (r.mti ? r.mti.position = r.position : r.mti = {
            position: r.position
        });
        const o = JSON.stringify(Ps({}, n, m[v].sendTrackParams, r));
        e.getAttribute("data-beseen") !== o && e.setAttribute("data-beseen", o)
    }
    )),
    f("track", ( (e, t) => {
        const n = _()
          , r = $(t);
        function o() {
            const e = xl();
            r.moduleId ? g("get", "mti", {
                module_id: r.moduleId,
                position: r.position
            }, (t => {
                g("event", "click", Ps({}, {
                    mti: t,
                    ...n
                }, e, m[v].sendTrackParams, r))
            }
            )) : g("event", "click", Ps({}, n, e, m[v].sendTrackParams, r))
        }
        setTimeout(( () => {
            e._trackListener && e.removeEventListener("click", e._trackListener),
            e._trackListener = o,
            e.addEventListener("click", o)
        }
        ))
    }
    ))),
    {
        sendPageLoad: t => {
            b(e.currentRoute, t)
        }
        ,
        sendWebviewLoad: e => {
            tl(g, e)
        }
        ,
        closeCurrentPage: k,
        sendTimeOnPage: () => {
            el(n, {
                autoParams: _(e.currentRoute)
            })
        }
    }
}
var Ou = Object.defineProperty
  , ju = Object.getOwnPropertySymbols
  , Pu = Object.prototype.hasOwnProperty
  , Iu = Object.prototype.propertyIsEnumerable
  , Cu = function(e, t, n) {
    return t in e ? Ou(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n
};
function Tu(e, t) {
    return t = t || {},
    function(e, t) {
        return (t = t || {}).headers = t.headers || {},
        t.referrerPolicy = "unsafe-url",
        window.fetch ? fetch(e, t).catch((function(e) {
            console.log(e)
        }
        )) : Promise.resolve()
    }("".concat(e, "/monitor/report?").concat(function(e, t) {
        var n = [];
        return t = t || {},
        Object.keys(e).forEach((function(r) {
            (0 === e[r] || e[r]) && (t.noEncode ? n.push("".concat(r, "=").concat(e[r])) : n.push("".concat(r, "=").concat(encodeURIComponent(e[r]))))
        }
        )),
        n.join("&")
    }(t)))
}
var Au = !1
  , Eu = "c2c"
  , Nu = "";
function Uu(e) {
    Au = "development" === (e = e || {}).env,
    Eu = e.line || Eu,
    Nu = e.project || Nu
}
function Ru(e) {
    return Tu(Au ? "https://eagle-service.guazi-cloud.com" : "https://eagle-service.guazi.com", function(e, t) {
        for (var n in t || (t = {}))
            Pu.call(t, n) && Cu(e, n, t[n]);
        if (ju)
            for (var r = ju(t), o = 0, i = r.length; o < i; o++)
                n = r[o],
                Iu.call(t, n) && Cu(e, n, t[n]);
        return e
    }({
        line: Eu,
        project: Nu
    }, e))
}
var Lu, Mu = {
    exports: {}
};
/**
 * https://github.com/csnover/TraceKit
 * @license MIT
 * @namespace TraceKit
 */
Lu = Mu,
function(e, t) {
    if (e) {
        var n = {}
          , r = e.TraceKit
          , o = [].slice
          , i = "?"
          , a = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
        n.noConflict = function() {
            return e.TraceKit = r,
            n
        }
        ,
        n.wrap = function(e) {
            return function() {
                try {
                    return e.apply(this, arguments)
                } catch ($a) {
                    throw n.report($a),
                    $a
                }
            }
        }
        ,
        n.report = function() {
            var t, r, o, i, s = [], l = null, u = null;
            function p(e, t, r) {
                var o = null;
                if (!t || n.collectWindowErrors) {
                    for (var i in s)
                        if (c(s, i))
                            try {
                                s[i](e, t, r)
                            } catch (a) {
                                o = a
                            }
                    if (o)
                        throw o
                }
            }
            function f(e, r, o, i, c) {
                if (u)
                    n.computeStackTrace.augmentStackTraceWithInitialElement(u, r, o, e),
                    m();
                else if (c)
                    p(n.computeStackTrace(c), !0, c);
                else {
                    var s, l = {
                        url: r,
                        line: o,
                        column: i
                    }, f = e;
                    if ("[object String]" === {}.toString.call(e)) {
                        var d = e.match(a);
                        d && (s = d[1],
                        f = d[2])
                    }
                    l.func = n.computeStackTrace.guessFunctionName(l.url, l.line),
                    l.context = n.computeStackTrace.gatherContext(l.url, l.line),
                    p({
                        name: s,
                        message: f,
                        mode: "onerror",
                        stack: [l]
                    }, !0, null)
                }
                return !!t && t.apply(this, arguments)
            }
            function d(e) {
                p(n.computeStackTrace(e.reason), !0, e.reason)
            }
            function m() {
                var e = u
                  , t = l;
                u = null,
                l = null,
                p(e, !1, t)
            }
            function g(e) {
                if (u) {
                    if (l === e)
                        return;
                    m()
                }
                var t = n.computeStackTrace(e);
                throw u = t,
                l = e,
                setTimeout((function() {
                    l === e && m()
                }
                ), t.incomplete ? 2e3 : 0),
                e
            }
            return g.subscribe = function(n) {
                !0 !== r && (t = e.onerror,
                e.onerror = f,
                r = !0),
                !0 !== i && (o = e.onunhandledrejection,
                e.onunhandledrejection = d,
                i = !0),
                s.push(n)
            }
            ,
            g.unsubscribe = function(n) {
                for (var a = s.length - 1; a >= 0; --a)
                    s[a] === n && s.splice(a, 1);
                0 === s.length && (r && (e.onerror = t,
                r = !1),
                i && (e.onunhandledrejection = o,
                i = !1))
            }
            ,
            g
        }(),
        n.computeStackTrace = function() {
            var t = {};
            function r(r) {
                if ("string" != typeof r)
                    return [];
                if (!c(t, r)) {
                    var o = ""
                      , i = "";
                    try {
                        i = e.document.domain
                    } catch ($a) {}
                    var a = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(r);
                    a && a[2] === i && (o = function(t) {
                        if (!n.remoteFetching)
                            return "";
                        try {
                            var r = function() {
                                try {
                                    return new e.XMLHttpRequest
                                } catch ($a) {
                                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                                }
                            }();
                            return r.open("GET", t, !1),
                            r.send(""),
                            r.responseText
                        } catch ($a) {
                            return ""
                        }
                    }(r)),
                    t[r] = o ? o.split("\n") : []
                }
                return t[r]
            }
            function o(e, t) {
                var n, o = /function ([^(]*)\(([^)]*)\)/, a = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/, c = "", l = r(e);
                if (!l.length)
                    return i;
                for (var u = 0; u < 10; ++u)
                    if (!s(c = l[t - u] + c)) {
                        if (n = a.exec(c))
                            return n[1];
                        if (n = o.exec(c))
                            return n[1]
                    }
                return i
            }
            function a(e, t) {
                var o = r(e);
                if (!o.length)
                    return null;
                var i = []
                  , a = Math.floor(n.linesOfContext / 2)
                  , c = a + n.linesOfContext % 2
                  , l = Math.max(0, t - a - 1)
                  , u = Math.min(o.length, t + c - 1);
                t -= 1;
                for (var p = l; p < u; ++p)
                    s(o[p]) || i.push(o[p]);
                return i.length > 0 ? i : null
            }
            function l(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
            }
            function u(e) {
                return l(e).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
            }
            function p(e, t) {
                for (var n, o, i = 0, a = t.length; i < a; ++i)
                    if ((n = r(t[i])).length && (n = n.join("\n"),
                    o = e.exec(n)))
                        return {
                            url: t[i],
                            line: n.substring(0, o.index).split("\n").length,
                            column: o.index - n.lastIndexOf("\n", o.index) - 1
                        };
                return null
            }
            function f(e, t, n) {
                var o, i = r(t), a = new RegExp("\\b" + l(e) + "\\b");
                return n -= 1,
                i && i.length > n && (o = a.exec(i[n])) ? o.index : null
            }
            function d(t) {
                if (!s(e && e.document)) {
                    for (var n, r, o, i, a = [e.location.href], c = e.document.getElementsByTagName("script"), f = "" + t, d = 0; d < c.length; ++d) {
                        var m = c[d];
                        m.src && a.push(m.src)
                    }
                    if (o = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(f)) {
                        var g = o[1] ? "\\s+" + o[1] : ""
                          , h = o[2].split(",").join("\\s*,\\s*");
                        n = l(o[3]).replace(/;$/, ";?"),
                        r = new RegExp("function" + g + "\\s*\\(\\s*" + h + "\\s*\\)\\s*{\\s*" + n + "\\s*}")
                    } else
                        r = new RegExp(l(f).replace(/\s+/g, "\\s+"));
                    if (i = p(r, a))
                        return i;
                    if (o = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(f)) {
                        var y = o[1];
                        if (n = u(o[2]),
                        i = p(r = new RegExp("on" + y + "=[\\'\"]\\s*" + n + "\\s*[\\'\"]","i"), a[0]))
                            return i;
                        if (i = p(r = new RegExp(n), a))
                            return i
                    }
                    return null
                }
            }
            function m(e) {
                if (!e.stack)
                    return null;
                for (var t, n, r, c = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, p = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, d = /\((\S*)(?::(\d+))(?::(\d+))\)/, m = e.stack.split("\n"), g = [], h = /^(.*) is undefined$/.exec(e.message), y = 0, v = m.length; y < v; ++y) {
                    if (n = c.exec(m[y])) {
                        var w = n[2] && 0 === n[2].indexOf("native");
                        n[2] && 0 === n[2].indexOf("eval") && (t = d.exec(n[2])) && (n[2] = t[1],
                        n[3] = t[2],
                        n[4] = t[3]),
                        r = {
                            url: w ? null : n[2],
                            func: n[1] || i,
                            args: w ? [n[2]] : [],
                            line: n[3] ? +n[3] : null,
                            column: n[4] ? +n[4] : null
                        }
                    } else if (n = u.exec(m[y]))
                        r = {
                            url: n[2],
                            func: n[1] || i,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                    else {
                        if (!(n = l.exec(m[y])))
                            continue;
                        n[3] && n[3].indexOf(" > eval") > -1 && (t = p.exec(n[3])) ? (n[3] = t[1],
                        n[4] = t[2],
                        n[5] = null) : 0 !== y || n[5] || s(e.columnNumber) || (g[0].column = e.columnNumber + 1),
                        r = {
                            url: n[3],
                            func: n[1] || i,
                            args: n[2] ? n[2].split(",") : [],
                            line: n[4] ? +n[4] : null,
                            column: n[5] ? +n[5] : null
                        }
                    }
                    !r.func && r.line && (r.func = o(r.url, r.line)),
                    r.context = r.line ? a(r.url, r.line) : null,
                    g.push(r)
                }
                return g.length ? (g[0] && g[0].line && !g[0].column && h && (g[0].column = f(h[1], g[0].url, g[0].line)),
                {
                    mode: "stack",
                    name: e.name,
                    message: e.message,
                    stack: g
                }) : null
            }
            function g(e, t, n, r) {
                var i = {
                    url: t,
                    line: n
                };
                if (i.url && i.line) {
                    e.incomplete = !1,
                    i.func || (i.func = o(i.url, i.line)),
                    i.context || (i.context = a(i.url, i.line));
                    var c = / '([^']+)' /.exec(r);
                    if (c && (i.column = f(c[1], i.url, i.line)),
                    e.stack.length > 0 && e.stack[0].url === i.url) {
                        if (e.stack[0].line === i.line)
                            return !1;
                        if (!e.stack[0].line && e.stack[0].func === i.func)
                            return e.stack[0].line = i.line,
                            e.stack[0].context = i.context,
                            !1
                    }
                    return e.stack.unshift(i),
                    e.partial = !0,
                    !0
                }
                return e.incomplete = !0,
                !1
            }
            function h(e, t) {
                for (var r, a, c, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, l = [], u = {}, p = !1, m = h.caller; m && !p; m = m.caller)
                    if (m !== y && m !== n.report) {
                        if (a = {
                            url: null,
                            func: i,
                            args: [],
                            line: null,
                            column: null
                        },
                        m.name ? a.func = m.name : (r = s.exec(m.toString())) && (a.func = r[1]),
                        void 0 === a.func)
                            try {
                                a.func = r.input.substring(0, r.input.indexOf("{"))
                            } catch ($a) {}
                        if (c = d(m)) {
                            a.url = c.url,
                            a.line = c.line,
                            a.func === i && (a.func = o(a.url, a.line));
                            var v = / '([^']+)' /.exec(e.message || e.description);
                            v && (a.column = f(v[1], c.url, c.line))
                        }
                        u["" + m] ? p = !0 : u["" + m] = !0,
                        l.push(a)
                    }
                t && l.splice(0, t);
                var w = {
                    mode: "callers",
                    name: e.name,
                    message: e.message,
                    stack: l
                };
                return g(w, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description),
                w
            }
            function y(t, n) {
                var i = null;
                n = null == n ? 0 : +n;
                try {
                    if (i = function(e) {
                        var t = e.stacktrace;
                        if (t) {
                            for (var n, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, c = t.split("\n"), s = [], l = 0; l < c.length; l += 2) {
                                var u = null;
                                if ((n = r.exec(c[l])) ? u = {
                                    url: n[2],
                                    line: +n[1],
                                    column: null,
                                    func: n[3],
                                    args: []
                                } : (n = i.exec(c[l])) && (u = {
                                    url: n[6],
                                    line: +n[1],
                                    column: +n[2],
                                    func: n[3] || n[4],
                                    args: n[5] ? n[5].split(",") : []
                                }),
                                u) {
                                    if (!u.func && u.line && (u.func = o(u.url, u.line)),
                                    u.line)
                                        try {
                                            u.context = a(u.url, u.line)
                                        } catch (p) {}
                                    u.context || (u.context = [c[l + 1]]),
                                    s.push(u)
                                }
                            }
                            return s.length ? {
                                mode: "stacktrace",
                                name: e.name,
                                message: e.message,
                                stack: s
                            } : null
                        }
                    }(t),
                    i)
                        return i
                } catch ($a) {}
                try {
                    if (i = m(t))
                        return i
                } catch ($a) {}
                try {
                    if (i = function(t) {
                        var n = t.message.split("\n");
                        if (n.length < 4)
                            return null;
                        var i, s = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, l = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, f = /^\s*Line (\d+) of function script\s*$/i, d = [], m = e && e.document && e.document.getElementsByTagName("script"), g = [];
                        for (var h in m)
                            c(m, h) && !m[h].src && g.push(m[h]);
                        for (var y = 2; y < n.length; y += 2) {
                            var v = null;
                            if (i = s.exec(n[y]))
                                v = {
                                    url: i[2],
                                    func: i[3],
                                    args: [],
                                    line: +i[1],
                                    column: null
                                };
                            else if (i = l.exec(n[y])) {
                                v = {
                                    url: i[3],
                                    func: i[4],
                                    args: [],
                                    line: +i[1],
                                    column: null
                                };
                                var w = +i[1]
                                  , _ = g[i[2] - 1];
                                if (_) {
                                    var b = r(v.url);
                                    if (b) {
                                        var k = (b = b.join("\n")).indexOf(_.innerText);
                                        k >= 0 && (v.line = w + b.substring(0, k).split("\n").length)
                                    }
                                }
                            } else if (i = f.exec(n[y])) {
                                var $ = e.location.href.replace(/#.*$/, "")
                                  , S = p(new RegExp(u(n[y + 1])), [$]);
                                v = {
                                    url: $,
                                    func: "",
                                    args: [],
                                    line: S ? S.line : i[1],
                                    column: null
                                }
                            }
                            if (v) {
                                v.func || (v.func = o(v.url, v.line));
                                var x = a(v.url, v.line)
                                  , O = x ? x[Math.floor(x.length / 2)] : null;
                                x && O.replace(/^\s*/, "") === n[y + 1].replace(/^\s*/, "") ? v.context = x : v.context = [n[y + 1]],
                                d.push(v)
                            }
                        }
                        return d.length ? {
                            mode: "multiline",
                            name: t.name,
                            message: n[0],
                            stack: d
                        } : null
                    }(t),
                    i)
                        return i
                } catch ($a) {}
                try {
                    if (i = h(t, n + 1))
                        return i
                } catch ($a) {}
                return {
                    name: t.name,
                    message: t.message,
                    mode: "failed"
                }
            }
            return y.augmentStackTraceWithInitialElement = g,
            y.computeStackTraceFromStackProp = m,
            y.guessFunctionName = o,
            y.gatherContext = a,
            y.ofCaller = function(e) {
                e = 1 + (null == e ? 0 : +e);
                try {
                    throw new Error
                } catch (t) {
                    return y(t, e + 1)
                }
            }
            ,
            y.getSource = r,
            y
        }(),
        n.extendToAsynchronousCallbacks = function() {
            var t = function(t) {
                var r = e[t];
                e[t] = function() {
                    var e = o.call(arguments)
                      , t = e[0];
                    return "function" == typeof t && (e[0] = n.wrap(t)),
                    r.apply ? r.apply(this, e) : r(e[0], e[1])
                }
            };
            t("setTimeout"),
            t("setInterval")
        }
        ,
        n.remoteFetching || (n.remoteFetching = !0),
        n.collectWindowErrors || (n.collectWindowErrors = !0),
        (!n.linesOfContext || n.linesOfContext < 1) && (n.linesOfContext = 11),
        Lu.exports && e.module !== Lu ? Lu.exports = n : e.TraceKit = n
    }
    function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function s(e) {
        return void 0 === e
    }
}("undefined" != typeof window ? window : X);
const zu = Mu.exports;
function Du(e) {
    return (Du = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function Wu(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Vu(e, t, n, r, o, i, a) {
    try {
        var c = e[i](a)
          , s = c.value
    } catch (l) {
        return void n(l)
    }
    c.done ? t(s) : Promise.resolve(s).then(r, o)
}
function Bu(e) {
    return function() {
        var t = this
          , n = arguments;
        return new Promise((function(r, o) {
            var i = e.apply(t, n);
            function a(e) {
                Vu(i, r, o, a, c, "next", e)
            }
            function c(e) {
                Vu(i, r, o, a, c, "throw", e)
            }
            a(void 0)
        }
        ))
    }
}
function Fu(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function qu(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
}
function Ju(e, t, n) {
    return t && qu(e.prototype, t),
    n && qu(e, n),
    e
}
var Hu = {
    exports: {}
};
!function(e) {
    var t = function(e) {
        var t, n = Object.prototype, r = n.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
        function s(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            e[t]
        }
        try {
            s({}, "")
        } catch (T) {
            s = function(e, t, n) {
                return e[t] = n
            }
        }
        function l(e, t, n, r) {
            var o = t && t.prototype instanceof h ? t : h
              , i = Object.create(o.prototype)
              , a = new P(r || []);
            return i._invoke = function(e, t, n) {
                var r = p;
                return function(o, i) {
                    if (r === d)
                        throw new Error("Generator is already running");
                    if (r === m) {
                        if ("throw" === o)
                            throw i;
                        return C()
                    }
                    for (n.method = o,
                    n.arg = i; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var c = x(a, n);
                            if (c) {
                                if (c === g)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === p)
                                throw r = m,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = d;
                        var s = u(e, t, n);
                        if ("normal" === s.type) {
                            if (r = n.done ? m : f,
                            s.arg === g)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (r = m,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }(e, n, a),
            i
        }
        function u(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (T) {
                return {
                    type: "throw",
                    arg: T
                }
            }
        }
        e.wrap = l;
        var p = "suspendedStart"
          , f = "suspendedYield"
          , d = "executing"
          , m = "completed"
          , g = {};
        function h() {}
        function y() {}
        function v() {}
        var w = {};
        s(w, i, (function() {
            return this
        }
        ));
        var _ = Object.getPrototypeOf
          , b = _ && _(_(I([])));
        b && b !== n && r.call(b, i) && (w = b);
        var k = v.prototype = h.prototype = Object.create(w);
        function $(e) {
            ["next", "throw", "return"].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e)
                }
                ))
            }
            ))
        }
        function S(e, t) {
            function n(o, i, a, c) {
                var s = u(e[o], e, i);
                if ("throw" !== s.type) {
                    var l = s.arg
                      , p = l.value;
                    return p && "object" == typeof p && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                        n("next", e, a, c)
                    }
                    ), (function(e) {
                        n("throw", e, a, c)
                    }
                    )) : t.resolve(p).then((function(e) {
                        l.value = e,
                        a(l)
                    }
                    ), (function(e) {
                        return n("throw", e, a, c)
                    }
                    ))
                }
                c(s.arg)
            }
            var o;
            this._invoke = function(e, r) {
                function i() {
                    return new t((function(t, o) {
                        n(e, r, t, o)
                    }
                    ))
                }
                return o = o ? o.then(i, i) : i()
            }
        }
        function x(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
                if (n.delegate = null,
                "throw" === n.method) {
                    if (e.iterator.return && (n.method = "return",
                    n.arg = t,
                    x(e, n),
                    "throw" === n.method))
                        return g;
                    n.method = "throw",
                    n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return g
            }
            var o = u(r, e.iterator, n.arg);
            if ("throw" === o.type)
                return n.method = "throw",
                n.arg = o.arg,
                n.delegate = null,
                g;
            var i = o.arg;
            return i ? i.done ? (n[e.resultName] = i.value,
            n.next = e.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = t),
            n.delegate = null,
            g) : i : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            g)
        }
        function O(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function j(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function P(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(O, this),
            this.reset(!0)
        }
        function I(e) {
            if (e) {
                var n = e[i];
                if (n)
                    return n.call(e);
                if ("function" == typeof e.next)
                    return e;
                if (!isNaN(e.length)) {
                    var o = -1
                      , a = function n() {
                        for (; ++o < e.length; )
                            if (r.call(e, o))
                                return n.value = e[o],
                                n.done = !1,
                                n;
                        return n.value = t,
                        n.done = !0,
                        n
                    };
                    return a.next = a
                }
            }
            return {
                next: C
            }
        }
        function C() {
            return {
                value: t,
                done: !0
            }
        }
        return y.prototype = v,
        s(k, "constructor", v),
        s(v, "constructor", y),
        y.displayName = s(v, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
        }
        ,
        e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v,
            s(e, c, "GeneratorFunction")),
            e.prototype = Object.create(k),
            e
        }
        ,
        e.awrap = function(e) {
            return {
                __await: e
            }
        }
        ,
        $(S.prototype),
        s(S.prototype, a, (function() {
            return this
        }
        )),
        e.AsyncIterator = S,
        e.async = function(t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(l(t, n, r, o),i);
            return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                return e.done ? e.value : a.next()
            }
            ))
        }
        ,
        $(k),
        s(k, c, "Generator"),
        s(k, i, (function() {
            return this
        }
        )),
        s(k, "toString", (function() {
            return "[object Generator]"
        }
        )),
        e.keys = function(e) {
            var t = [];
            for (var n in e)
                t.push(n);
            return t.reverse(),
            function n() {
                for (; t.length; ) {
                    var r = t.pop();
                    if (r in e)
                        return n.value = r,
                        n.done = !1,
                        n
                }
                return n.done = !0,
                n
            }
        }
        ,
        e.values = I,
        P.prototype = {
            constructor: P,
            reset: function(e) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = t,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = t,
                this.tryEntries.forEach(j),
                !e)
                    for (var n in this)
                        "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type)
                    throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done)
                    throw e;
                var n = this;
                function o(r, o) {
                    return c.type = "throw",
                    c.arg = e,
                    n.next = r,
                    o && (n.method = "next",
                    n.arg = t),
                    !!o
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i]
                      , c = a.completion;
                    if ("root" === a.tryLoc)
                        return o("end");
                    if (a.tryLoc <= this.prev) {
                        var s = r.call(a, "catchLoc")
                          , l = r.call(a, "finallyLoc");
                        if (s && l) {
                            if (this.prev < a.catchLoc)
                                return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc)
                                return o(a.finallyLoc)
                        } else if (s) {
                            if (this.prev < a.catchLoc)
                                return o(a.catchLoc, !0)
                        } else {
                            if (!l)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc)
                                return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e,
                a.arg = t,
                i ? (this.method = "next",
                this.next = i.finallyLoc,
                g) : this.complete(a)
            },
            complete: function(e, t) {
                if ("throw" === e.type)
                    throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                this.method = "return",
                this.next = "end") : "normal" === e.type && t && (this.next = t),
                g
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc),
                        j(n),
                        g
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            j(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, n, r) {
                return this.delegate = {
                    iterator: I(e),
                    resultName: n,
                    nextLoc: r
                },
                "next" === this.method && (this.arg = t),
                g
            }
        },
        e
    }(Hu.exports);
    try {
        regeneratorRuntime = t
    } catch (n) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
    }
}();
var Gu = Hu.exports
  , Ku = Bo({
    line: "c2c",
    project: "guazi-mall",
    mode: "brief"
});
window.$nativeSDK = Ku;
var Qu = function(e) {
    var t = null;
    try {
        t = JSON.parse(e)
    } catch ($a) {
        t = e
    }
    return t || {}
};
function Xu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function Zu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Xu(Object(n), !0).forEach((function(t) {
            Wu(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xu(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function Yu() {
    var e;
    switch (navigator.connection && navigator.connection.effectiveType) {
    case "wifi":
        e = "wifi";
        break;
    case "4g":
        e = "4G";
        break;
    case "2g":
        e = "2G";
        break;
    case "3g":
        e = "3G";
        break;
    case "ethernet":
        e = "以太网";
        break;
    case "default":
        e = "未知"
    }
    return e
}
function ep() {
    return new Promise((function(e) {
        var t = function(e, t) {
            var n = {};
            if (e && e.length > 0) {
                var r = e.split("&");
                r && r.forEach((function(e) {
                    var t = e.indexOf("=")
                      , r = e.slice(0, t)
                      , o = e.slice(t + 1);
                    n[r] = o
                }
                ))
            }
            return t ? n.key || "" : n
        }(location.search, "orderId")
          , n = {
            error_type: "other",
            location: "".concat(location.hostname).concat(location.pathname),
            query: location.search,
            platform: "".concat(navigator.userAgent || "", " ").concat(Yu()),
            error_message: {
                orderId: t
            }
        };
        Ku.getUserInfo({
            success: function(t) {
                console.log("getUserInfo success", t),
                n.phone_x = t.phone,
                e(n)
            },
            fail: function() {
                console.log("getUserInfo succesfail"),
                e(n)
            }
        }),
        setTimeout((function() {
            e(n)
        }
        ), 2e3)
    }
    ))
}
var tp = function() {
    function e() {
        Fu(this, e)
    }
    return Ju(e, null, [{
        key: "capture",
        value: function(t, n) {
            if (this.instance || (this.instance = new e),
            this.list.length >= 20 && this.list.shift(),
            "click" === t) {
                var r = (o = n.target,
                i = o.tagName,
                a = o.className,
                c = o.id,
                s = o.src,
                l = o.href,
                u = o.innerText,
                {
                    tagName: i,
                    className: a,
                    id: c,
                    src: s,
                    href: l,
                    innerText: (p = void 0 === u ? "" : u).length > 10 ? "".concat(p.slice(0, 10), "...") : p
                } || {});
                this.list.push(Zu(Zu({
                    type: t
                }, r), {}, {
                    timeStamp: n.timeStamp,
                    date: (new Date).valueOf()
                }))
            } else
                "xhr" === t ? this.list.push(Zu(Zu({
                    type: t
                }, n), {}, {
                    date: (new Date).valueOf()
                })) : "manual" === t && this.list.push(Zu({
                    type: t,
                    date: (new Date).valueOf()
                }, n));
            var o, i, a, c, s, l, u, p;
            return this.instance
        }
    }]),
    e
}();
Wu(tp, "instance", null),
Wu(tp, "list", []);
var np = function() {
    function e() {
        Fu(this, e)
    }
    return Ju(e, null, [{
        key: "init",
        value: function(t) {
            return console.log("init==>", Du(t)),
            "function" != typeof t ? (console.log("请传入一个function类型的参数"),
            this.instance) : (this.instance || (this.fn = t,
            this.instance = new e),
            this.instance)
        }
    }]),
    e
}();
function rp(e) {
    return op.apply(this, arguments)
}
function op() {
    return (op = Bu(Gu.mark((function e(t) {
        var n;
        return Gu.wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return e.prev = 0,
                    e.next = 3,
                    ep();
                case 3:
                    n = e.sent,
                    window.carPerformanceSendError(Zu(Zu(Zu({}, n), t), {}, {
                        actionList: JSON.stringify(tp.list)
                    })),
                    e.next = 10;
                    break;
                case 7:
                    e.prev = 7,
                    e.t0 = e.catch(0),
                    console.log(e.t0);
                case 10:
                case "end":
                    return e.stop()
                }
        }
        ), e, null, [[0, 7]])
    }
    )))).apply(this, arguments)
}
function ip(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function ap(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ip(Object(n), !0).forEach((function(t) {
            Wu(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ip(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
Wu(np, "instance", null),
Wu(np, "fn", null),
zu.collectWindowErrors = !0,
zu.report.subscribe((function(e) {
    if ("Script error." !== e.message && e.message) {
        e.message.startsWith("networkError") && (e.name = "network");
        var t = "";
        t = e.name && e.stack ? JSON.stringify(e.stack) : JSON.stringify(e),
        rp(ap(ap({}, e), {}, {
            error_type: e.name || "other",
            error_message: e.message,
            stack: t
        }))
    }
}
));
var cp = function() {
    window.addEventListener("click", (function(e) {
        tp.capture("click", e)
    }
    ))
}
  , sp = {}
  , lp = {};
function up(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function pp(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? up(Object(n), !0).forEach((function(t) {
            fp(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : up(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function fp(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
sp.baseMonitorStart = cp,
sp.start = function(e) {
    var t, n;
    window.carPerformanceSendError = e.sendError,
    np.init(e.networkReportCallback),
    e.vue && function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.config) {
            var t = e.config.errorHandler;
            e.config.errorHandler = function(e, n, r) {
                var o = {
                    error_type: "vue",
                    error_message: e.message,
                    stack: e.stack,
                    computed_name: n && n._name,
                    target: n && n.$el && n.$el.innerHTML,
                    vue_error_info: r
                };
                console.log("上报 vue 异常", o),
                rp(o),
                "function" == typeof t && t.call(this, e, n, r)
            }
        }
    }(e.vue),
    e.errorHandler && (t = e.errorHandler,
    n = t.errorHandler,
    t.errorHandler = function(e, t, r) {
        var o = {
            error_type: "vue",
            error_message: e.message,
            stack: e.stack,
            computed_name: t && t._name,
            target: t && t.$el && t.$el.innerHTML,
            vue_error_info: r
        };
        console.error("上报 vue 异常", o),
        rp(o),
        "function" == typeof n && n.call(this, e, t, r)
    }
    ),
    cp(),
    function(e) {
        var t = e.includeHostnameList
          , n = void 0 === t ? [] : t
          , r = window.XMLHttpRequest
          , o = r.prototype.open
          , i = r.prototype.setRequestHeader
          , a = {
            headers: {}
        };
        r.prototype.open = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            r.prototype._openurl = t[1],
            o.apply(this, t)
        }
        ,
        r.prototype.setRequestHeader = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            a.headers[t[0].toLowerCase()] = t[1],
            i.apply(this, t)
        }
        ;
        var c = r.prototype.send
          , s = {};
        r.prototype.send = function() {
            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                t[o] = arguments[o];
            s[r.prototype._openurl] = t[0];
            var i = this.onreadystatechange;
            this.onreadystatechange = function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r];
                try {
                    var o = t[0] && t[0].target && t[0].target || {}
                      , c = o.responseType
                      , l = "";
                    l = "" === c || "text" === c || "json" === c ? o.responseText : "responseType: " + c;
                    var u = this.readyState
                      , p = this.status;
                    if (this.responseURL) {
                        0 === this.responseURL.indexOf("//") ? this.responseURL = location.protocol + this.responseURL : -1 === this.responseURL.indexOf("http") && (this.responseURL = window.location.origin + this.responseURL);
                        var f = (this.responseURL && new URL(this.responseURL)).hostname;
                        if (a.url = this.responseURL,
                        a.method = this._method,
                        a.body = s[this.responseURL],
                        4 === u) {
                            var d = Qu(l);
                            if (n.includes(f)) {
                                var m = function() {
                                    var e = []
                                      , t = JSON.stringify(a, (function(t, n) {
                                        if ("object" === Du(n) && null !== n) {
                                            if (-1 !== e.indexOf(n))
                                                return;
                                            e.push(n)
                                        }
                                        return n
                                    }
                                    ));
                                    e = null,
                                    rp({
                                        error_type: "network",
                                        error_message: t,
                                        stack: d
                                    }),
                                    tp.capture("xhr", {
                                        url: a.url,
                                        config: t,
                                        response: d
                                    })
                                };
                                np.fn ? np.fn({
                                    responseObj: d,
                                    status: p,
                                    url: a.url
                                }, m) : 200 === p && 0 === Number(d.code) || m()
                            }
                        }
                    }
                } catch (g) {
                    console.error("vision onreadystatechange error", g)
                }
                i && i.apply(this, t)
            }
            ,
            c.apply(this, t)
        }
    }({
        includeHostnameList: e.includeHostnameList
    }),
    e.validationModel && Object.keys(e.validationModel).forEach((function(t) {
        var n = e.validationModel[t];
        lp[t].status = !0,
        n && n.length && n.forEach((function(e) {
            lp[t].events[e] = {
                status: !0
            }
        }
        ))
    }
    ))
}
,
sp.addAction = function(e) {
    tp.capture("manual", e)
}
,
sp.stepupVM = function(e) {
    var t = e.name
      , n = e.event
      , r = e.errorMessage;
    t && n && r && (lp[t].status = !1,
    lp[t].events[n] = {
        status: !1,
        errorMessage: r
    })
}
,
sp.runVM = function(e) {
    var t = e.name;
    t && (lp[t].status || rp({
        validationModel: lp[t]
    }))
}
,
sp.reportNativeSdkError = function(e) {
    rp({
        error_type: "sdk",
        platform: e.deviceInfo,
        error_message: e.message,
        sdk_version: e.sdkVersion,
        sdk_api_name: e.api,
        sdk_variables: e.variables
    })
}
,
sp.manualReportError = function(e) {
    var t = ""
      , n = "";
    "string" == typeof e ? (t = e,
    n = "自定义上报") : "object" === Du(e) && (t = e.message,
    n = e.id || "自定义上报"),
    rp({
        error_type: "manual",
        error_message: n,
        extra: {
            manualErrorMessage: t
        }
    })
}
;
var dp = Bo({
    line: "c2c",
    mode: "brief",
    project: "guazi-fe_luna-utils",
    log: function(e, t) {
        console.log(e, t)
    }
})
  , mp = 0
  , gp = 2
  , hp = mp;
function yp() {
    return hp
}
function vp(e) {
    hp = e
}
function wp(e) {
    return (wp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
var _p = Vo({
    line: "c2c",
    mode: "brief",
    project: "guazi-fe_luna-polyfill",
    mapRules: [{
        appKey: "c",
        invokeVersion: "v2"
    }, {
        appKey: "crm",
        invokeVersion: "v2"
    }],
    log: function(e) {
        console.log("guazi-fe_luna-polyfill", e)
    }
});
console.log("$nativeSDK 实例：", _p);
var bp = ["get", "post"];
function kp(e) {
    var t = window.XMLHttpRequest
      , n = t.prototype.open
      , r = t.prototype.setRequestHeader
      , o = t.prototype.send
      , i = t.prototype.abort
      , a = t.prototype.getAllResponseHeaders
      , c = t.prototype.getResponseHeader
      , s = /ios|iphone|ipad|ipod/i.test(navigator.userAgent)
      , l = e.forceNativeRequest ? (vp(1),
    Promise.resolve(!0)) : function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise((function(t) {
            var n = function(n, r) {
                e.sendMonitor && setTimeout((function() {
                    window.tracker ? window.tracker.send({
                        eventid: "901577075765",
                        isOpen: Number(n),
                        is_success: window.GUAZI_OFFLINE,
                        tracking_type: "monitor",
                        extraInfo: JSON.stringify(pp(pp({}, e), {}, {
                            nativeResult: r
                        }))
                    }) : window.gtk && window.gtk("event", "monitor", {
                        eventid: "901577075765",
                        isOpen: Number(n),
                        is_success: window.GUAZI_OFFLINE,
                        extraInfo: JSON.stringify(pp(pp({}, e), {}, {
                            nativeResult: r
                        }))
                    })
                }
                )),
                t(n)
            };
            if (1 === window.GUAZI_OFFLINE)
                return n(!0);
            if (!1 === e.supportNativeApi)
                return n(!1);
            var r = !1;
            dp.invoke("getOfflineInfo", {
                url: window.location.href,
                success: function(e) {
                    r = !0,
                    e && Object.keys(e).length ? n(!0, e) : n(!1, e)
                },
                fail: function() {
                    r = !0,
                    n(!1, "error")
                }
            }),
            setTimeout((function() {
                r || n(!1)
            }
            ), 5e3)
        }
        ))
    }().then((function(e) {
        return vp(e ? 1 : gp),
        e
    }
    ));
    if (s) {
        var u = [];
        XMLHttpRequest = function() {
            var e = this;
            this.isAborted = !1;
            var n = new t
              , r = function(t) {
                var r = "";
                try {
                    r = wp(n[t])
                } catch ($a) {}
                "function" === r ? ["open", "setRequestHeader", "send", "getAllResponseHeaders", "getResponseHeader"].includes(t) || (e[t] = function() {
                    for (var e, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                        o[i] = arguments[i];
                    return (e = n[t]).call.apply(e, [n].concat(o))
                }
                ) : Object.defineProperty(e, t, {
                    get: function() {
                        return Object.prototype.hasOwnProperty.call(e, "".concat(t, "_")) ? e["".concat(t, "_")] : e.xhr[t]
                    },
                    set: function(e) {
                        var r = this;
                        if ("on" === t.substring(0, 2))
                            r["".concat(t, "_")] = e,
                            n[t] = function(t) {
                                t = function(e, t) {
                                    var n = {};
                                    for (var r in e)
                                        n[r] = e[r];
                                    return n.currentTarget = t,
                                    n.target = n.currentTarget,
                                    n
                                }(t, r),
                                e.call(r, t)
                            }
                            ;
                        else {
                            this["".concat(t, "_")] = e;
                            try {
                                n[t] = e
                            } catch ($a) {
                                console.warn(t, $a)
                            }
                        }
                    },
                    enumerable: !0
                })
            };
            for (var o in n)
                r(o);
            this.xhr = n
        }
        ,
        XMLHttpRequest.prototype.constructor = XMLHttpRequest,
        XMLHttpRequest.prototype.open = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (![gp, mp].includes(yp()) || (n.call.apply(n, [this.xhr].concat(t)),
            gp !== yp())) {
                var o = t[0].toLowerCase();
                bp.includes(o) ? u.push({
                    xhr: this,
                    method: o,
                    url: t[1],
                    headers: {
                        Cookie: document.cookie,
                        "User-Agent": navigator.userAgent
                    }
                }) : n.call.apply(n, [this.xhr].concat(t))
            }
        }
        ,
        XMLHttpRequest.prototype.setRequestHeader = function() {
            for (var e = this, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                n[o] = arguments[o];
            if (![gp, mp].includes(yp()) || (r.call.apply(r, [this.xhr].concat(n)),
            gp !== yp())) {
                var i = u.find((function(t) {
                    return t.xhr === e
                }
                ));
                if (i) {
                    var a = n[0]
                      , c = n[1];
                    i.headers[a] = c
                } else
                    r.call.apply(r, [this.xhr].concat(n))
            }
        }
        ,
        XMLHttpRequest.prototype.send = function() {
            for (var t = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                r[i] = arguments[i];
            if (yp() === gp)
                return o.call.apply(o, [this.xhr].concat(r));
            var a = u.find((function(e) {
                return e.xhr === t
            }
            ));
            if (!a)
                return o.call.apply(o, [this.xhr].concat(r));
            u.splice(u.indexOf(a), 1);
            var c = function() {
                _p.invoke("requestByNative", {
                    url: a.url.startsWith("//") ? "".concat(window.location.protocol).concat(a.url) : a.url,
                    method: a.method,
                    headers: a.headers,
                    params: "get" === a.method.toLowerCase() && r[0] ? null : r[0],
                    success: function(n) {
                        if (!t.isAborted) {
                            if (n) {
                                if (t.readyState = 4,
                                n.data)
                                    if (t.responseHeaders = n.headers || {},
                                    "json" === t.responseType)
                                        try {
                                            t.response = JSON.parse(n.data)
                                        } catch ($a) {
                                            e.exceptionReporter && e.exceptionReporter("ajax代理 JSON.parse native api返回的数据失败:".concat($a.stack))
                                        }
                                    else
                                        "text" === t.responseType ? t.response = n.data : (t.response = n.data,
                                        t.responseText = n.data);
                                t.status = n.status
                            }
                            t.onload && t.onload(),
                            t.onreadystatechange && t.onreadystatechange()
                        }
                        t.onloadend && t.onloadend()
                    },
                    fail: function() {
                        t.onerror && !t.isAborted && t.onerror()
                    }
                })
            };
            yp() === mp ? l.then((function(e) {
                e ? c() : o.call.apply(o, [t.xhr].concat(r))
            }
            )) : c()
        }
        ,
        XMLHttpRequest.prototype.abort = function() {
            return this.onabort && this.onabort(),
            this.isAborted = !0,
            i.call(this.xhr)
        }
        ,
        XMLHttpRequest.prototype.getAllResponseHeaders = function() {
            if (1 !== yp())
                return a.call(this.xhr);
            var e = this.responseHeaders
              , t = [];
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t.map((function(t) {
                return "".concat(t, ": ").concat(e[t])
            }
            )).join("\n")
        }
        ,
        XMLHttpRequest.prototype.getResponseHeader = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (1 !== yp())
                return c.call.apply(c, [this.xhr].concat(t));
            if (!t.length)
                return null;
            var r = t[0]
              , o = null
              , i = this.responseHeaders;
            for (var a in i)
                if (Object.prototype.hasOwnProperty.call(i, a) && a.toLowerCase() === r.toLowerCase()) {
                    o = i[a];
                    break
                }
            return o
        }
    }
}
var $p = "image-pub.".concat("guazistatic.com")
  , Sp = "".concat("https:", "//").concat($p);
export {vs as $, qi as A, Bi as B, fa as C, hc as D, va as E, $s as F, gc as G, Ji as H, gr as I, dc as J, Gi as K, Ni as L, cs as M, Qc as N, Ss as O, ec as P, Ki as Q, rs as R, Vo as S, Ya as T, qa as U, Di as V, Vi as W, ia as X, wi as Y, Qi as Z, Y as _, xu as a, mc as a0, Qn as a1, Sp as a2, pa as a3, wc as a4, da as a5, wa as b, Nn as c, Uu as d, sa as e, kp as f, Qs as g, Yn as h, tr as i, ls as j, Wi as k, lr as l, sp as m, dr as n, pr as o, na as p, Mi as q, Ru as r, oa as s, ea as t, Zn as u, xs as v, Zi as w, Xa as x, ds as y, La as z};
