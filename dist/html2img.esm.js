import e from "@babel/runtime-corejs3/regenerator";
import r from "@babel/runtime-corejs3/core-js/promise";
import t from "@babel/runtime-corejs3/core-js/instance/for-each";
import n from "@babel/runtime-corejs3/core-js/array/from";
import a from "html2canvas";

function c(a) {
    var c, o, s;
    return e.async((function(u) {
        for (; ;) switch (u.prev = u.next) {
            case 0:
                return u.prev = 0, c = a.querySelectorAll("img"), o = n(c, (function(e) {
                    return t = e.src, new r((function(e, r) {
                        if (t.match(/base64/)) return e(t);
                        var n = document.createElement("canvas"), a = n.getContext("2d"), c = new Image;
                        c.crossOrigin = "Anonymous", c.src = t, c.onload = function() {
                            n.width = c.width, n.height = c.height, a && a.drawImage(c, 0, 0), e(n.toDataURL("image/png"))
                        }, c.onerror = r
                    }));
                    var t
                })), u.next = 5, e.awrap(r.all(o));
            case 5:
                s = u.sent, t(s).call(s, (function(e, r) {
                    return c[r].src = e
                })), u.next = 13;
                break;
            case 9:
                return u.prev = 9, u.t0 = u.catch(0), console.error(u.t0, "图片错误"), u.abrupt("return", u.t0);
            case 13:
                return u.prev = 13, u.abrupt("return", a);
            case 16:
            case"end":
                return u.stop()
        }
    }), null, null, [[0, 9, 13, 16]])
}

function o(t, n) {
    var c, o, s, u, i;
    return e.async((function(l) {
        for (; ;) switch (l.prev = l.next) {
            case 0:
                return l.prev = 0, c = document.createElement("canvas"), o = t.offsetWidth, s = t.offsetHeight, u = n.scale, c.width = o * u, c.height = s * u, c.style.width = "".concat(o, "px"), c.style.height = "".concat(s, "px"), l.next = 11, e.awrap(a(t, {
                    width: o,
                    height: s,
                    scale: u,
                    useCORS: !0,
                    canvas: c,
                    scrollX: 0,
                    scrollY: 0,
                    imageTimeout: 0
                }));
            case 11:
                return i = l.sent, l.abrupt("return", i.toDataURL("image/jpeg", 1));
            case 15:
                return l.prev = 15, l.t0 = l.catch(0), l.abrupt("return", r.resolve(l.t0));
            case 18:
            case"end":
                return l.stop()
        }
    }), null, null, [[0, 15]])
}

export default function(t, n) {
    var a, s, u, i, l, p, m, f;
    return e.async((function(h) {
        for (; ;) switch (h.prev = h.next) {
            case 0:
                if (s = (a = n || {}).debug, u = void 0 !== s && s, i = a.scale, l = void 0 === i ? 2 : i, p = a.base64, !(void 0 !== p && p)) {
                    h.next = 7;
                    break
                }
                return h.next = 4, e.awrap(c(t));
            case 4:
                h.t0 = h.sent, h.next = 8;
                break;
            case 7:
                h.t0 = t;
            case 8:
                if (m = h.t0, document.body.appendChild(m), !u) {
                    h.next = 12;
                    break
                }
                return h.abrupt("return", r.resolve(""));
            case 12:
                return h.next = 14, e.awrap(o(m, { scale: l }));
            case 14:
                return f = h.sent, document.body.removeChild(m), h.abrupt("return", f);
            case 17:
            case"end":
                return h.stop()
        }
    }))
}
