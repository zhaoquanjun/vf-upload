function ur(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ke = { exports: {} }, oe = { exports: {} }, Me = function(e, t) {
  return function() {
    for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
      n[a] = arguments[a];
    return e.apply(t, n);
  };
}, lr = Me, ue = Object.prototype.toString, le = function(r) {
  return function(e) {
    var t = ue.call(e);
    return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function C(r) {
  return r = r.toLowerCase(), function(t) {
    return le(t) === r;
  };
}
function fe(r) {
  return Array.isArray(r);
}
function F(r) {
  return typeof r > "u";
}
function fr(r) {
  return r !== null && !F(r) && r.constructor !== null && !F(r.constructor) && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}
var He = C("ArrayBuffer");
function cr(r) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && He(r.buffer), e;
}
function dr(r) {
  return typeof r == "string";
}
function hr(r) {
  return typeof r == "number";
}
function ze(r) {
  return r !== null && typeof r == "object";
}
function q(r) {
  if (le(r) !== "object")
    return !1;
  var e = Object.getPrototypeOf(r);
  return e === null || e === Object.prototype;
}
var pr = C("Date"), mr = C("File"), vr = C("Blob"), Er = C("FileList");
function ce(r) {
  return ue.call(r) === "[object Function]";
}
function Rr(r) {
  return ze(r) && ce(r.pipe);
}
function yr(r) {
  var e = "[object FormData]";
  return r && (typeof FormData == "function" && r instanceof FormData || ue.call(r) === e || ce(r.toString) && r.toString() === e);
}
var br = C("URLSearchParams");
function wr(r) {
  return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
}
function Or() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function de(r, e) {
  if (!(r === null || typeof r > "u"))
    if (typeof r != "object" && (r = [r]), fe(r))
      for (var t = 0, i = r.length; t < i; t++)
        e.call(null, r[t], t, r);
    else
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && e.call(null, r[n], n, r);
}
function se() {
  var r = {};
  function e(n, a) {
    q(r[a]) && q(n) ? r[a] = se(r[a], n) : q(n) ? r[a] = se({}, n) : fe(n) ? r[a] = n.slice() : r[a] = n;
  }
  for (var t = 0, i = arguments.length; t < i; t++)
    de(arguments[t], e);
  return r;
}
function Cr(r, e, t) {
  return de(e, function(n, a) {
    t && typeof n == "function" ? r[a] = lr(n, t) : r[a] = n;
  }), r;
}
function Sr(r) {
  return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
}
function Ar(r, e, t, i) {
  r.prototype = Object.create(e.prototype, i), r.prototype.constructor = r, t && Object.assign(r.prototype, t);
}
function Tr(r, e, t) {
  var i, n, a, s = {};
  e = e || {};
  do {
    for (i = Object.getOwnPropertyNames(r), n = i.length; n-- > 0; )
      a = i[n], s[a] || (e[a] = r[a], s[a] = !0);
    r = Object.getPrototypeOf(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}
function xr(r, e, t) {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  var i = r.indexOf(e, t);
  return i !== -1 && i === t;
}
function Pr(r) {
  if (!r)
    return null;
  var e = r.length;
  if (F(e))
    return null;
  for (var t = new Array(e); e-- > 0; )
    t[e] = r[e];
  return t;
}
var gr = function(r) {
  return function(e) {
    return r && e instanceof r;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), m = {
  isArray: fe,
  isArrayBuffer: He,
  isBuffer: fr,
  isFormData: yr,
  isArrayBufferView: cr,
  isString: dr,
  isNumber: hr,
  isObject: ze,
  isPlainObject: q,
  isUndefined: F,
  isDate: pr,
  isFile: mr,
  isBlob: vr,
  isFunction: ce,
  isStream: Rr,
  isURLSearchParams: br,
  isStandardBrowserEnv: Or,
  forEach: de,
  merge: se,
  extend: Cr,
  trim: wr,
  stripBOM: Sr,
  inherits: Ar,
  toFlatObject: Tr,
  kindOf: le,
  kindOfTest: C,
  endsWith: xr,
  toArray: Pr,
  isTypedArray: gr,
  isFileList: Er
}, x = m;
function Re(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Ve = function(e, t, i) {
  if (!t)
    return e;
  var n;
  if (i)
    n = i(t);
  else if (x.isURLSearchParams(t))
    n = t.toString();
  else {
    var a = [];
    x.forEach(t, function(l, d) {
      l === null || typeof l > "u" || (x.isArray(l) ? d = d + "[]" : l = [l], x.forEach(l, function(h) {
        x.isDate(h) ? h = h.toISOString() : x.isObject(h) && (h = JSON.stringify(h)), a.push(Re(d) + "=" + Re(h));
      }));
    }), n = a.join("&");
  }
  if (n) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return e;
}, _r = m;
function I() {
  this.handlers = [];
}
I.prototype.use = function(e, t, i) {
  return this.handlers.push({
    fulfilled: e,
    rejected: t,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
I.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
I.prototype.forEach = function(e) {
  _r.forEach(this.handlers, function(i) {
    i !== null && e(i);
  });
};
var Nr = I, Ur = m, Dr = function(e, t) {
  Ur.forEach(e, function(n, a) {
    a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a]);
  });
}, Je = m;
function g(r, e, t, i, n) {
  Error.call(this), this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), i && (this.request = i), n && (this.response = n);
}
Je.inherits(g, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var We = g.prototype, Xe = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(r) {
  Xe[r] = { value: r };
});
Object.defineProperties(g, Xe);
Object.defineProperty(We, "isAxiosError", { value: !0 });
g.from = function(r, e, t, i, n, a) {
  var s = Object.create(We);
  return Je.toFlatObject(r, s, function(l) {
    return l !== Error.prototype;
  }), g.call(s, r.message, e, t, i, n), s.name = r.name, a && Object.assign(s, a), s;
};
var N = g, Ke = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, b = m;
function Lr(r, e) {
  e = e || new FormData();
  var t = [];
  function i(a) {
    return a === null ? "" : b.isDate(a) ? a.toISOString() : b.isArrayBuffer(a) || b.isTypedArray(a) ? typeof Blob == "function" ? new Blob([a]) : Buffer.from(a) : a;
  }
  function n(a, s) {
    if (b.isPlainObject(a) || b.isArray(a)) {
      if (t.indexOf(a) !== -1)
        throw Error("Circular reference detected in " + s);
      t.push(a), b.forEach(a, function(l, d) {
        if (!b.isUndefined(l)) {
          var c = s ? s + "." + d : d, h;
          if (l && !s && typeof l == "object") {
            if (b.endsWith(d, "{}"))
              l = JSON.stringify(l);
            else if (b.endsWith(d, "[]") && (h = b.toArray(l))) {
              h.forEach(function(u) {
                !b.isUndefined(u) && e.append(c, i(u));
              });
              return;
            }
          }
          n(l, c);
        }
      }), t.pop();
    } else
      e.append(s, i(a));
  }
  return n(r), e;
}
var Qe = Lr, V, ye;
function qr() {
  if (ye)
    return V;
  ye = 1;
  var r = N;
  return V = function(t, i, n) {
    var a = n.config.validateStatus;
    !n.status || !a || a(n.status) ? t(n) : i(new r(
      "Request failed with status code " + n.status,
      [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    ));
  }, V;
}
var J, be;
function Br() {
  if (be)
    return J;
  be = 1;
  var r = m;
  return J = r.isStandardBrowserEnv() ? function() {
    return {
      write: function(i, n, a, s, o, l) {
        var d = [];
        d.push(i + "=" + encodeURIComponent(n)), r.isNumber(a) && d.push("expires=" + new Date(a).toGMTString()), r.isString(s) && d.push("path=" + s), r.isString(o) && d.push("domain=" + o), l === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(i) {
        var n = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(i) {
        this.write(i, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), J;
}
var Fr = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, Ir = function(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}, $r = Fr, jr = Ir, Ye = function(e, t) {
  return e && !$r(t) ? jr(e, t) : t;
}, W, we;
function kr() {
  if (we)
    return W;
  we = 1;
  var r = m, e = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return W = function(i) {
    var n = {}, a, s, o;
    return i && r.forEach(i.split(`
`), function(d) {
      if (o = d.indexOf(":"), a = r.trim(d.substr(0, o)).toLowerCase(), s = r.trim(d.substr(o + 1)), a) {
        if (n[a] && e.indexOf(a) >= 0)
          return;
        a === "set-cookie" ? n[a] = (n[a] ? n[a] : []).concat([s]) : n[a] = n[a] ? n[a] + ", " + s : s;
      }
    }), n;
  }, W;
}
var X, Oe;
function Mr() {
  if (Oe)
    return X;
  Oe = 1;
  var r = m;
  return X = r.isStandardBrowserEnv() ? function() {
    var t = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), n;
    function a(s) {
      var o = s;
      return t && (i.setAttribute("href", o), o = i.href), i.setAttribute("href", o), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      };
    }
    return n = a(window.location.href), function(o) {
      var l = r.isString(o) ? a(o) : o;
      return l.protocol === n.protocol && l.host === n.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), X;
}
var K, Ce;
function $() {
  if (Ce)
    return K;
  Ce = 1;
  var r = N, e = m;
  function t(i) {
    r.call(this, i == null ? "canceled" : i, r.ERR_CANCELED), this.name = "CanceledError";
  }
  return e.inherits(t, r, {
    __CANCEL__: !0
  }), K = t, K;
}
var Q, Se;
function Hr() {
  return Se || (Se = 1, Q = function(e) {
    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || "";
  }), Q;
}
var Y, Ae;
function Te() {
  if (Ae)
    return Y;
  Ae = 1;
  var r = m, e = qr(), t = Br(), i = Ve, n = Ye, a = kr(), s = Mr(), o = Ke, l = N, d = $(), c = Hr();
  return Y = function(u) {
    return new Promise(function(ir, S) {
      var U = u.data, D = u.headers, L = u.responseType, A;
      function me() {
        u.cancelToken && u.cancelToken.unsubscribe(A), u.signal && u.signal.removeEventListener("abort", A);
      }
      r.isFormData(U) && r.isStandardBrowserEnv() && delete D["Content-Type"];
      var f = new XMLHttpRequest();
      if (u.auth) {
        var ar = u.auth.username || "", sr = u.auth.password ? unescape(encodeURIComponent(u.auth.password)) : "";
        D.Authorization = "Basic " + btoa(ar + ":" + sr);
      }
      var M = n(u.baseURL, u.url);
      f.open(u.method.toUpperCase(), i(M, u.params, u.paramsSerializer), !0), f.timeout = u.timeout;
      function ve() {
        if (!!f) {
          var y = "getAllResponseHeaders" in f ? a(f.getAllResponseHeaders()) : null, T = !L || L === "text" || L === "json" ? f.responseText : f.response, O = {
            data: T,
            status: f.status,
            statusText: f.statusText,
            headers: y,
            config: u,
            request: f
          };
          e(function(z) {
            ir(z), me();
          }, function(z) {
            S(z), me();
          }, O), f = null;
        }
      }
      if ("onloadend" in f ? f.onloadend = ve : f.onreadystatechange = function() {
        !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(ve);
      }, f.onabort = function() {
        !f || (S(new l("Request aborted", l.ECONNABORTED, u, f)), f = null);
      }, f.onerror = function() {
        S(new l("Network Error", l.ERR_NETWORK, u, f, f)), f = null;
      }, f.ontimeout = function() {
        var T = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded", O = u.transitional || o;
        u.timeoutErrorMessage && (T = u.timeoutErrorMessage), S(new l(
          T,
          O.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED,
          u,
          f
        )), f = null;
      }, r.isStandardBrowserEnv()) {
        var Ee = (u.withCredentials || s(M)) && u.xsrfCookieName ? t.read(u.xsrfCookieName) : void 0;
        Ee && (D[u.xsrfHeaderName] = Ee);
      }
      "setRequestHeader" in f && r.forEach(D, function(T, O) {
        typeof U > "u" && O.toLowerCase() === "content-type" ? delete D[O] : f.setRequestHeader(O, T);
      }), r.isUndefined(u.withCredentials) || (f.withCredentials = !!u.withCredentials), L && L !== "json" && (f.responseType = u.responseType), typeof u.onDownloadProgress == "function" && f.addEventListener("progress", u.onDownloadProgress), typeof u.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", u.onUploadProgress), (u.cancelToken || u.signal) && (A = function(y) {
        !f || (S(!y || y && y.type ? new d() : y), f.abort(), f = null);
      }, u.cancelToken && u.cancelToken.subscribe(A), u.signal && (u.signal.aborted ? A() : u.signal.addEventListener("abort", A))), U || (U = null);
      var H = c(M);
      if (H && ["http", "https", "file"].indexOf(H) === -1) {
        S(new l("Unsupported protocol " + H + ":", l.ERR_BAD_REQUEST, u));
        return;
      }
      f.send(U);
    });
  }, Y;
}
var G, xe;
function zr() {
  return xe || (xe = 1, G = null), G;
}
var p = m, Pe = Dr, ge = N, Vr = Ke, Jr = Qe, Wr = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function _e(r, e) {
  !p.isUndefined(r) && p.isUndefined(r["Content-Type"]) && (r["Content-Type"] = e);
}
function Xr() {
  var r;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (r = Te()), r;
}
function Kr(r, e, t) {
  if (p.isString(r))
    try {
      return (e || JSON.parse)(r), p.trim(r);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (t || JSON.stringify)(r);
}
var j = {
  transitional: Vr,
  adapter: Xr(),
  transformRequest: [function(e, t) {
    if (Pe(t, "Accept"), Pe(t, "Content-Type"), p.isFormData(e) || p.isArrayBuffer(e) || p.isBuffer(e) || p.isStream(e) || p.isFile(e) || p.isBlob(e))
      return e;
    if (p.isArrayBufferView(e))
      return e.buffer;
    if (p.isURLSearchParams(e))
      return _e(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var i = p.isObject(e), n = t && t["Content-Type"], a;
    if ((a = p.isFileList(e)) || i && n === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return Jr(a ? { "files[]": e } : e, s && new s());
    } else if (i || n === "application/json")
      return _e(t, "application/json"), Kr(e);
    return e;
  }],
  transformResponse: [function(e) {
    var t = this.transitional || j.transitional, i = t && t.silentJSONParsing, n = t && t.forcedJSONParsing, a = !i && this.responseType === "json";
    if (a || n && p.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? ge.from(s, ge.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: zr()
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
p.forEach(["delete", "get", "head"], function(e) {
  j.headers[e] = {};
});
p.forEach(["post", "put", "patch"], function(e) {
  j.headers[e] = p.merge(Wr);
});
var he = j, Qr = m, Yr = he, Gr = function(e, t, i) {
  var n = this || Yr;
  return Qr.forEach(i, function(s) {
    e = s.call(n, e, t);
  }), e;
}, Z, Ne;
function Ge() {
  return Ne || (Ne = 1, Z = function(e) {
    return !!(e && e.__CANCEL__);
  }), Z;
}
var Ue = m, ee = Gr, Zr = Ge(), et = he, rt = $();
function re(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new rt();
}
var tt = function(e) {
  re(e), e.headers = e.headers || {}, e.data = ee.call(
    e,
    e.data,
    e.headers,
    e.transformRequest
  ), e.headers = Ue.merge(
    e.headers.common || {},
    e.headers[e.method] || {},
    e.headers
  ), Ue.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(n) {
      delete e.headers[n];
    }
  );
  var t = e.adapter || et.adapter;
  return t(e).then(function(n) {
    return re(e), n.data = ee.call(
      e,
      n.data,
      n.headers,
      e.transformResponse
    ), n;
  }, function(n) {
    return Zr(n) || (re(e), n && n.response && (n.response.data = ee.call(
      e,
      n.response.data,
      n.response.headers,
      e.transformResponse
    ))), Promise.reject(n);
  });
}, E = m, Ze = function(e, t) {
  t = t || {};
  var i = {};
  function n(c, h) {
    return E.isPlainObject(c) && E.isPlainObject(h) ? E.merge(c, h) : E.isPlainObject(h) ? E.merge({}, h) : E.isArray(h) ? h.slice() : h;
  }
  function a(c) {
    if (E.isUndefined(t[c])) {
      if (!E.isUndefined(e[c]))
        return n(void 0, e[c]);
    } else
      return n(e[c], t[c]);
  }
  function s(c) {
    if (!E.isUndefined(t[c]))
      return n(void 0, t[c]);
  }
  function o(c) {
    if (E.isUndefined(t[c])) {
      if (!E.isUndefined(e[c]))
        return n(void 0, e[c]);
    } else
      return n(void 0, t[c]);
  }
  function l(c) {
    if (c in t)
      return n(e[c], t[c]);
    if (c in e)
      return n(void 0, e[c]);
  }
  var d = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l
  };
  return E.forEach(Object.keys(e).concat(Object.keys(t)), function(h) {
    var u = d[h] || a, R = u(h);
    E.isUndefined(R) && u !== l || (i[h] = R);
  }), i;
}, te, De;
function er() {
  return De || (De = 1, te = {
    version: "0.27.2"
  }), te;
}
var nt = er().version, w = N, pe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(r, e) {
  pe[r] = function(i) {
    return typeof i === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
var Le = {};
pe.transitional = function(e, t, i) {
  function n(a, s) {
    return "[Axios v" + nt + "] Transitional option '" + a + "'" + s + (i ? ". " + i : "");
  }
  return function(a, s, o) {
    if (e === !1)
      throw new w(
        n(s, " has been removed" + (t ? " in " + t : "")),
        w.ERR_DEPRECATED
      );
    return t && !Le[s] && (Le[s] = !0, console.warn(
      n(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(a, s, o) : !0;
  };
};
function it(r, e, t) {
  if (typeof r != "object")
    throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(r), n = i.length; n-- > 0; ) {
    var a = i[n], s = e[a];
    if (s) {
      var o = r[a], l = o === void 0 || s(o, a, r);
      if (l !== !0)
        throw new w("option " + a + " must be " + l, w.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new w("Unknown option " + a, w.ERR_BAD_OPTION);
  }
}
var at = {
  assertOptions: it,
  validators: pe
}, rr = m, st = Ve, qe = Nr, Be = tt, k = Ze, ot = Ye, tr = at, P = tr.validators;
function _(r) {
  this.defaults = r, this.interceptors = {
    request: new qe(),
    response: new qe()
  };
}
_.prototype.request = function(e, t) {
  typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = k(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var i = t.transitional;
  i !== void 0 && tr.assertOptions(i, {
    silentJSONParsing: P.transitional(P.boolean),
    forcedJSONParsing: P.transitional(P.boolean),
    clarifyTimeoutError: P.transitional(P.boolean)
  }, !1);
  var n = [], a = !0;
  this.interceptors.request.forEach(function(R) {
    typeof R.runWhen == "function" && R.runWhen(t) === !1 || (a = a && R.synchronous, n.unshift(R.fulfilled, R.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(R) {
    s.push(R.fulfilled, R.rejected);
  });
  var o;
  if (!a) {
    var l = [Be, void 0];
    for (Array.prototype.unshift.apply(l, n), l = l.concat(s), o = Promise.resolve(t); l.length; )
      o = o.then(l.shift(), l.shift());
    return o;
  }
  for (var d = t; n.length; ) {
    var c = n.shift(), h = n.shift();
    try {
      d = c(d);
    } catch (u) {
      h(u);
      break;
    }
  }
  try {
    o = Be(d);
  } catch (u) {
    return Promise.reject(u);
  }
  for (; s.length; )
    o = o.then(s.shift(), s.shift());
  return o;
};
_.prototype.getUri = function(e) {
  e = k(this.defaults, e);
  var t = ot(e.baseURL, e.url);
  return st(t, e.params, e.paramsSerializer);
};
rr.forEach(["delete", "get", "head", "options"], function(e) {
  _.prototype[e] = function(t, i) {
    return this.request(k(i || {}, {
      method: e,
      url: t,
      data: (i || {}).data
    }));
  };
});
rr.forEach(["post", "put", "patch"], function(e) {
  function t(i) {
    return function(a, s, o) {
      return this.request(k(o || {}, {
        method: e,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  _.prototype[e] = t(), _.prototype[e + "Form"] = t(!0);
});
var ut = _, ne, Fe;
function lt() {
  if (Fe)
    return ne;
  Fe = 1;
  var r = $();
  function e(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    var i;
    this.promise = new Promise(function(s) {
      i = s;
    });
    var n = this;
    this.promise.then(function(a) {
      if (!!n._listeners) {
        var s, o = n._listeners.length;
        for (s = 0; s < o; s++)
          n._listeners[s](a);
        n._listeners = null;
      }
    }), this.promise.then = function(a) {
      var s, o = new Promise(function(l) {
        n.subscribe(l), s = l;
      }).then(a);
      return o.cancel = function() {
        n.unsubscribe(s);
      }, o;
    }, t(function(s) {
      n.reason || (n.reason = new r(s), i(n.reason));
    });
  }
  return e.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, e.prototype.subscribe = function(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }, e.prototype.unsubscribe = function(i) {
    if (!!this._listeners) {
      var n = this._listeners.indexOf(i);
      n !== -1 && this._listeners.splice(n, 1);
    }
  }, e.source = function() {
    var i, n = new e(function(s) {
      i = s;
    });
    return {
      token: n,
      cancel: i
    };
  }, ne = e, ne;
}
var ie, Ie;
function ft() {
  return Ie || (Ie = 1, ie = function(e) {
    return function(i) {
      return e.apply(null, i);
    };
  }), ie;
}
var ae, $e;
function ct() {
  if ($e)
    return ae;
  $e = 1;
  var r = m;
  return ae = function(t) {
    return r.isObject(t) && t.isAxiosError === !0;
  }, ae;
}
var je = m, dt = Me, B = ut, ht = Ze, pt = he;
function nr(r) {
  var e = new B(r), t = dt(B.prototype.request, e);
  return je.extend(t, B.prototype, e), je.extend(t, e), t.create = function(n) {
    return nr(ht(r, n));
  }, t;
}
var v = nr(pt);
v.Axios = B;
v.CanceledError = $();
v.CancelToken = lt();
v.isCancel = Ge();
v.VERSION = er().version;
v.toFormData = Qe;
v.AxiosError = N;
v.Cancel = v.CanceledError;
v.all = function(e) {
  return Promise.all(e);
};
v.spread = ft();
v.isAxiosError = ct();
oe.exports = v;
oe.exports.default = v;
(function(r) {
  r.exports = oe.exports;
})(ke);
const mt = /* @__PURE__ */ ur(ke.exports);
class vt {
  constructor() {
    this.file = null, this.size = 0, this.progress = 0, this.timer = null, this.progressCallback = null, this.compelteCallback = null, this.uploadMethod = "POST", this.uploadUrl = "";
  }
  init(e) {
    if (!e.url)
      return void console.warn("It won't work without a URL, make sure you provide the URL property");
    this.file = e == null ? void 0 : e.file, this.size = ((e == null ? void 0 : e.size) || 1) * 1024 * 1024, this.progressCallback = e == null ? void 0 : e.progressCallback, this.compelteCallback = e == null ? void 0 : e.compelteCallback, this.uploadMethod = e.method || "POST", this.uploadUrl = e.url || "", this.getFragments();
  }
  async getFragments() {
    const e = await this.getVideoTime();
    console.log(e);
    let t = 0, i = 0, n = [], a = this.size;
    s(this.file), n != null && n.length && this.upload(n);
    function s(o) {
      i += a;
      const l = o.slice(t, i);
      return t += a, l.size ? (n.push(l), s(o)) : n;
    }
  }
  upload(e) {
    let t = 0;
    const i = e == null ? void 0 : e.length, n = this;
    a(e.slice(t, t + 5));
    function a(o) {
      console.log(o, t, i);
      const l = [];
      o.forEach((d) => {
        l.push(s());
      }), Promise.all(l).then(() => {
        t >= i || setTimeout(() => {
          a(e.slice(t, t + 5));
        });
      });
    }
    function s() {
      return new Promise((o, l) => {
        mt[n.uploadMethod.toLocaleLowerCase()](n.uploadUrl).then((d) => {
          d.status == 200 ? (t++, n.progressFn(parseInt(t / e.length * 100)), o(t)) : console.error("A network request error occurred,  please check Network to confirm the cause of the error");
        });
      });
    }
  }
  progressFn(e) {
    this.timer && clearInterval(this.timer), this.timer = setInterval(() => {
      this.progress == e ? (clearInterval(this.timer), this.progress == 100 && this.complete()) : (this.progress++, this.notify());
    });
  }
  notify() {
    this.progressCallback(this.progress);
  }
  complete() {
    this.compelteCallback();
  }
  clear() {
    this.file = null, this.size = 0, this.progress = 0, this.timer = null, this.progressCallback = null, this.compelteCallback = null;
  }
  getVideoTime() {
    return new Promise((e) => {
      const t = URL.createObjectURL(this.file), i = new Audio(t);
      i.addEventListener("loadedmetadata", function() {
        var n = parseInt(i.duration / 3600);
        n < 10 && (n = "0" + n);
        var a = parseInt(i.duration % 3600 / 60);
        a < 10 && (a = "0" + a);
        var s = Math.ceil(i.duration % 60);
        s < 10 && (s = "0" + s), e(n + ":" + a + ":" + s);
      });
    });
  }
}
export {
  vt as default
};
//# sourceMappingURL=video-upload.es.js.map
