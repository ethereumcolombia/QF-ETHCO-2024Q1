!(function(t, e) {
  for (var r in e) t[r] = e[r]
})(
  exports,
  (function(t) {
    var e = {},
      r = { 1: 0 }
    function n(r) {
      if (e[r]) return e[r].exports
      var i = (e[r] = { i: r, l: !1, exports: {} })
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
    }
    return (
      (n.e = function(e) {
        if (0 !== r[e]) {
          var n = require('./' + ({}[e] || e) + '.js'),
            i = n.modules,
            o = n.ids
          for (var s in i) t[s] = i[s]
          for (var a = 0; a < o.length; a++) r[o[a]] = 0
        }
        return Promise.all([])
      }),
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var r = Object.create(null)
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var i in t)
            n.d(
              r,
              i,
              function(e) {
                return t[e]
              }.bind(null, i),
            )
        return r
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      (n.oe = function(t) {
        process.nextTick(function() {
          throw t
        })
      }),
      n((n.s = 268))
    )
  })([
    function(t, e, r) {
      'use strict'
      r.d(e, 'k', function() {
        return s
      }),
        r.d(e, 'j', function() {
          return u
        }),
        r.d(e, 'a', function() {
          return c
        }),
        r.d(e, 'b', function() {
          return h
        }),
        r.d(e, 'o', function() {
          return l
        }),
        r.d(e, 'p', function() {
          return f
        }),
        r.d(e, 'l', function() {
          return d
        }),
        r.d(e, 'i', function() {
          return p
        }),
        r.d(e, 'd', function() {
          return m
        }),
        r.d(e, 'e', function() {
          return g
        }),
        r.d(e, 'c', function() {
          return b
        }),
        r.d(e, 'g', function() {
          return y
        }),
        r.d(e, 'f', function() {
          return v
        }),
        r.d(e, 'h', function() {
          return w
        }),
        r.d(e, 'n', function() {
          return A
        }),
        r.d(e, 'm', function() {
          return E
        })
      const n = new (r(2).b)('bytes/5.7.0')
      function i(t) {
        return !!t.toHexString
      }
      function o(t) {
        return (
          t.slice ||
            (t.slice = function() {
              const e = Array.prototype.slice.call(arguments)
              return o(new Uint8Array(Array.prototype.slice.apply(t, e)))
            }),
          t
        )
      }
      function s(t) {
        return (d(t) && !(t.length % 2)) || u(t)
      }
      function a(t) {
        return 'number' == typeof t && t == t && t % 1 == 0
      }
      function u(t) {
        if (null == t) return !1
        if (t.constructor === Uint8Array) return !0
        if ('string' == typeof t) return !1
        if (!a(t.length) || t.length < 0) return !1
        for (let e = 0; e < t.length; e++) {
          const r = t[e]
          if (!a(r) || r < 0 || r >= 256) return !1
        }
        return !0
      }
      function c(t, e) {
        if ((e || (e = {}), 'number' == typeof t)) {
          n.checkSafeUint53(t, 'invalid arrayify value')
          const e = []
          for (; t; ) e.unshift(255 & t), (t = parseInt(String(t / 256)))
          return 0 === e.length && e.push(0), o(new Uint8Array(e))
        }
        if (
          (e.allowMissingPrefix && 'string' == typeof t && '0x' !== t.substring(0, 2) && (t = '0x' + t),
          i(t) && (t = t.toHexString()),
          d(t))
        ) {
          let r = t.substring(2)
          r.length % 2 &&
            ('left' === e.hexPad
              ? (r = '0' + r)
              : 'right' === e.hexPad
              ? (r += '0')
              : n.throwArgumentError('hex data is odd-length', 'value', t))
          const i = []
          for (let t = 0; t < r.length; t += 2) i.push(parseInt(r.substring(t, t + 2), 16))
          return o(new Uint8Array(i))
        }
        return u(t) ? o(new Uint8Array(t)) : n.throwArgumentError('invalid arrayify value', 'value', t)
      }
      function h(t) {
        const e = t.map(t => c(t)),
          r = e.reduce((t, e) => t + e.length, 0),
          n = new Uint8Array(r)
        return e.reduce((t, e) => (n.set(e, t), t + e.length), 0), o(n)
      }
      function l(t) {
        let e = c(t)
        if (0 === e.length) return e
        let r = 0
        for (; r < e.length && 0 === e[r]; ) r++
        return r && (e = e.slice(r)), e
      }
      function f(t, e) {
        ;(t = c(t)).length > e && n.throwArgumentError('value out of range', 'value', arguments[0])
        const r = new Uint8Array(e)
        return r.set(t, e - t.length), o(r)
      }
      function d(t, e) {
        return !('string' != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
      }
      function p(t, e) {
        if ((e || (e = {}), 'number' == typeof t)) {
          n.checkSafeUint53(t, 'invalid hexlify value')
          let e = ''
          for (; t; ) (e = '0123456789abcdef'[15 & t] + e), (t = Math.floor(t / 16))
          return e.length ? (e.length % 2 && (e = '0' + e), '0x' + e) : '0x00'
        }
        if ('bigint' == typeof t) return (t = t.toString(16)).length % 2 ? '0x0' + t : '0x' + t
        if ((e.allowMissingPrefix && 'string' == typeof t && '0x' !== t.substring(0, 2) && (t = '0x' + t), i(t)))
          return t.toHexString()
        if (d(t))
          return (
            t.length % 2 &&
              ('left' === e.hexPad
                ? (t = '0x0' + t.substring(2))
                : 'right' === e.hexPad
                ? (t += '0')
                : n.throwArgumentError('hex data is odd-length', 'value', t)),
            t.toLowerCase()
          )
        if (u(t)) {
          let e = '0x'
          for (let r = 0; r < t.length; r++) {
            let n = t[r]
            e += '0123456789abcdef'[(240 & n) >> 4] + '0123456789abcdef'[15 & n]
          }
          return e
        }
        return n.throwArgumentError('invalid hexlify value', 'value', t)
      }
      function m(t) {
        if ('string' != typeof t) t = p(t)
        else if (!d(t) || t.length % 2) return null
        return (t.length - 2) / 2
      }
      function g(t, e, r) {
        return (
          'string' != typeof t
            ? (t = p(t))
            : (!d(t) || t.length % 2) && n.throwArgumentError('invalid hexData', 'value', t),
          (e = 2 + 2 * e),
          null != r ? '0x' + t.substring(e, 2 + 2 * r) : '0x' + t.substring(e)
        )
      }
      function b(t) {
        let e = '0x'
        return (
          t.forEach(t => {
            e += p(t).substring(2)
          }),
          e
        )
      }
      function y(t) {
        const e = v(p(t, { hexPad: 'left' }))
        return '0x' === e ? '0x0' : e
      }
      function v(t) {
        'string' != typeof t && (t = p(t)),
          d(t) || n.throwArgumentError('invalid hex string', 'value', t),
          (t = t.substring(2))
        let e = 0
        for (; e < t.length && '0' === t[e]; ) e++
        return '0x' + t.substring(e)
      }
      function w(t, e) {
        for (
          'string' != typeof t ? (t = p(t)) : d(t) || n.throwArgumentError('invalid hex string', 'value', t),
            t.length > 2 * e + 2 && n.throwArgumentError('value out of range', 'value', arguments[1]);
          t.length < 2 * e + 2;

        )
          t = '0x0' + t.substring(2)
        return t
      }
      function A(t) {
        const e = { r: '0x', s: '0x', _vs: '0x', recoveryParam: 0, v: 0, yParityAndS: '0x', compact: '0x' }
        if (s(t)) {
          let r = c(t)
          64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)), (r[32] &= 127), (e.r = p(r.slice(0, 32))), (e.s = p(r.slice(32, 64))))
            : 65 === r.length
            ? ((e.r = p(r.slice(0, 32))), (e.s = p(r.slice(32, 64))), (e.v = r[64]))
            : n.throwArgumentError('invalid signature string', 'signature', t),
            e.v < 27 &&
              (0 === e.v || 1 === e.v ? (e.v += 27) : n.throwArgumentError('signature invalid v byte', 'signature', t)),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = p(r.slice(32, 64)))
        } else {
          if (
            ((e.r = t.r), (e.s = t.s), (e.v = t.v), (e.recoveryParam = t.recoveryParam), (e._vs = t._vs), null != e._vs)
          ) {
            const r = f(c(e._vs), 32)
            e._vs = p(r)
            const i = r[0] >= 128 ? 1 : 0
            null == e.recoveryParam
              ? (e.recoveryParam = i)
              : e.recoveryParam !== i && n.throwArgumentError('signature recoveryParam mismatch _vs', 'signature', t),
              (r[0] &= 127)
            const o = p(r)
            null == e.s ? (e.s = o) : e.s !== o && n.throwArgumentError('signature v mismatch _vs', 'signature', t)
          }
          if (null == e.recoveryParam)
            null == e.v
              ? n.throwArgumentError('signature missing v and recoveryParam', 'signature', t)
              : 0 === e.v || 1 === e.v
              ? (e.recoveryParam = e.v)
              : (e.recoveryParam = 1 - (e.v % 2))
          else if (null == e.v) e.v = 27 + e.recoveryParam
          else {
            const r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2)
            e.recoveryParam !== r && n.throwArgumentError('signature recoveryParam mismatch v', 'signature', t)
          }
          null != e.r && d(e.r)
            ? (e.r = w(e.r, 32))
            : n.throwArgumentError('signature missing or invalid r', 'signature', t),
            null != e.s && d(e.s)
              ? (e.s = w(e.s, 32))
              : n.throwArgumentError('signature missing or invalid s', 'signature', t)
          const r = c(e.s)
          r[0] >= 128 && n.throwArgumentError('signature s out of range', 'signature', t),
            e.recoveryParam && (r[0] |= 128)
          const i = p(r)
          e._vs && (d(e._vs) || n.throwArgumentError('signature invalid _vs', 'signature', t), (e._vs = w(e._vs, 32))),
            null == e._vs
              ? (e._vs = i)
              : e._vs !== i && n.throwArgumentError('signature _vs mismatch v and s', 'signature', t)
        }
        return (e.yParityAndS = e._vs), (e.compact = e.r + e.yParityAndS.substring(2)), e
      }
      function E(t) {
        return p(h([(t = A(t)).r, t.s, t.recoveryParam ? '0x1c' : '0x1b']))
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'd', function() {
        return s
      }),
        r.d(e, 'e', function() {
          return a
        }),
        r.d(e, 'f', function() {
          return u
        }),
        r.d(e, 'b', function() {
          return c
        }),
        r.d(e, 'g', function() {
          return h
        }),
        r.d(e, 'c', function() {
          return d
        }),
        r.d(e, 'a', function() {
          return p
        })
      var n = r(2)
      var i = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const o = new n.b('properties/5.7.0')
      function s(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 })
      }
      function a(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e]
          if (!t.prototype || 'object' != typeof t.prototype) break
          t = Object.getPrototypeOf(t.prototype).constructor
        }
        return null
      }
      function u(t) {
        return i(this, void 0, void 0, function*() {
          const e = Object.keys(t).map(e => {
            const r = t[e]
            return Promise.resolve(r).then(t => ({ key: e, value: t }))
          })
          return (yield Promise.all(e)).reduce((t, e) => ((t[e.key] = e.value), t), {})
        })
      }
      function c(t, e) {
        ;(t && 'object' == typeof t) || o.throwArgumentError('invalid object', 'object', t),
          Object.keys(t).forEach(r => {
            e[r] || o.throwArgumentError('invalid object key - ' + r, 'transaction:' + r, t)
          })
      }
      function h(t) {
        const e = {}
        for (const r in t) e[r] = t[r]
        return e
      }
      const l = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 }
      function f(t) {
        if (
          (function t(e) {
            if (null == e || l[typeof e]) return !0
            if (Array.isArray(e) || 'object' == typeof e) {
              if (!Object.isFrozen(e)) return !1
              const r = Object.keys(e)
              for (let n = 0; n < r.length; n++) {
                let i = null
                try {
                  i = e[r[n]]
                } catch (t) {
                  continue
                }
                if (!t(i)) return !1
              }
              return !0
            }
            return o.throwArgumentError('Cannot deepCopy ' + typeof e, 'object', e)
          })(t)
        )
          return t
        if (Array.isArray(t)) return Object.freeze(t.map(t => d(t)))
        if ('object' == typeof t) {
          const e = {}
          for (const r in t) {
            const n = t[r]
            void 0 !== n && s(e, r, d(n))
          }
          return e
        }
        return o.throwArgumentError('Cannot deepCopy ' + typeof t, 'object', t)
      }
      function d(t) {
        return f(t)
      }
      class p {
        constructor(t) {
          for (const e in t) this[e] = d(t[e])
        }
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return h
      }),
        r.d(e, 'b', function() {
          return f
        })
      let n = !1,
        i = !1
      const o = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 }
      let s = o.default,
        a = null
      const u = (function() {
        try {
          const t = []
          if (
            (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach(e => {
              try {
                if ('test' !== 'test'.normalize(e)) throw new Error('bad normalize')
              } catch (r) {
                t.push(e)
              }
            }),
            t.length)
          )
            throw new Error('missing ' + t.join(', '))
          if (String.fromCharCode(233).normalize('NFD') !== String.fromCharCode(101, 769))
            throw new Error('broken implementation')
        } catch (t) {
          return t.message
        }
        return null
      })()
      var c, h
      !(function(t) {
        ;(t.DEBUG = 'DEBUG'), (t.INFO = 'INFO'), (t.WARNING = 'WARNING'), (t.ERROR = 'ERROR'), (t.OFF = 'OFF')
      })(c || (c = {})),
        (function(t) {
          ;(t.UNKNOWN_ERROR = 'UNKNOWN_ERROR'),
            (t.NOT_IMPLEMENTED = 'NOT_IMPLEMENTED'),
            (t.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION'),
            (t.NETWORK_ERROR = 'NETWORK_ERROR'),
            (t.SERVER_ERROR = 'SERVER_ERROR'),
            (t.TIMEOUT = 'TIMEOUT'),
            (t.BUFFER_OVERRUN = 'BUFFER_OVERRUN'),
            (t.NUMERIC_FAULT = 'NUMERIC_FAULT'),
            (t.MISSING_NEW = 'MISSING_NEW'),
            (t.INVALID_ARGUMENT = 'INVALID_ARGUMENT'),
            (t.MISSING_ARGUMENT = 'MISSING_ARGUMENT'),
            (t.UNEXPECTED_ARGUMENT = 'UNEXPECTED_ARGUMENT'),
            (t.CALL_EXCEPTION = 'CALL_EXCEPTION'),
            (t.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'),
            (t.NONCE_EXPIRED = 'NONCE_EXPIRED'),
            (t.REPLACEMENT_UNDERPRICED = 'REPLACEMENT_UNDERPRICED'),
            (t.UNPREDICTABLE_GAS_LIMIT = 'UNPREDICTABLE_GAS_LIMIT'),
            (t.TRANSACTION_REPLACED = 'TRANSACTION_REPLACED'),
            (t.ACTION_REJECTED = 'ACTION_REJECTED')
        })(h || (h = {}))
      const l = '0123456789abcdef'
      class f {
        constructor(t) {
          Object.defineProperty(this, 'version', { enumerable: !0, value: t, writable: !1 })
        }
        _log(t, e) {
          const r = t.toLowerCase()
          null == o[r] && this.throwArgumentError('invalid log level name', 'logLevel', t),
            s > o[r] || console.log.apply(console, e)
        }
        debug(...t) {
          this._log(f.levels.DEBUG, t)
        }
        info(...t) {
          this._log(f.levels.INFO, t)
        }
        warn(...t) {
          this._log(f.levels.WARNING, t)
        }
        makeError(t, e, r) {
          if (i) return this.makeError('censored error', e, {})
          e || (e = f.errors.UNKNOWN_ERROR), r || (r = {})
          const n = []
          Object.keys(r).forEach(t => {
            const e = r[t]
            try {
              if (e instanceof Uint8Array) {
                let r = ''
                for (let t = 0; t < e.length; t++) (r += l[e[t] >> 4]), (r += l[15 & e[t]])
                n.push(t + '=Uint8Array(0x' + r + ')')
              } else n.push(t + '=' + JSON.stringify(e))
            } catch (e) {
              n.push(t + '=' + JSON.stringify(r[t].toString()))
            }
          }),
            n.push('code=' + e),
            n.push('version=' + this.version)
          const o = t
          let s = ''
          switch (e) {
            case h.NUMERIC_FAULT: {
              s = 'NUMERIC_FAULT'
              const e = t
              switch (e) {
                case 'overflow':
                case 'underflow':
                case 'division-by-zero':
                  s += '-' + e
                  break
                case 'negative-power':
                case 'negative-width':
                  s += '-unsupported'
                  break
                case 'unbound-bitwise-result':
                  s += '-unbound-result'
              }
              break
            }
            case h.CALL_EXCEPTION:
            case h.INSUFFICIENT_FUNDS:
            case h.MISSING_NEW:
            case h.NONCE_EXPIRED:
            case h.REPLACEMENT_UNDERPRICED:
            case h.TRANSACTION_REPLACED:
            case h.UNPREDICTABLE_GAS_LIMIT:
              s = e
          }
          s && (t += ' [ See: https://links.ethers.org/v5-errors-' + s + ' ]'),
            n.length && (t += ' (' + n.join(', ') + ')')
          const a = new Error(t)
          return (
            (a.reason = o),
            (a.code = e),
            Object.keys(r).forEach(function(t) {
              a[t] = r[t]
            }),
            a
          )
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r)
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, f.errors.INVALID_ARGUMENT, { argument: e, value: r })
        }
        assert(t, e, r, n) {
          t || this.throwError(e, r, n)
        }
        assertArgument(t, e, r, n) {
          t || this.throwArgumentError(e, r, n)
        }
        checkNormalize(t) {
          null == t && (t = 'platform missing String.prototype.normalize'),
            u &&
              this.throwError('platform missing String.prototype.normalize', f.errors.UNSUPPORTED_OPERATION, {
                operation: 'String.prototype.normalize',
                form: u,
              })
        }
        checkSafeUint53(t, e) {
          'number' == typeof t &&
            (null == e && (e = 'value not safe'),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'out-of-safe-range',
                value: t,
              }),
            t % 1 &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'non-integer',
                value: t,
              }))
        }
        checkArgumentCount(t, e, r) {
          ;(r = r ? ': ' + r : ''),
            t < e && this.throwError('missing argument' + r, f.errors.MISSING_ARGUMENT, { count: t, expectedCount: e }),
            t > e &&
              this.throwError('too many arguments' + r, f.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: e })
        }
        checkNew(t, e) {
          ;(t !== Object && null != t) || this.throwError('missing new', f.errors.MISSING_NEW, { name: e.name })
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                'cannot instantiate abstract class ' + JSON.stringify(e.name) + ' directly; use a sub-class',
                f.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: 'new' },
              )
            : (t !== Object && null != t) || this.throwError('missing new', f.errors.MISSING_NEW, { name: e.name })
        }
        static globalLogger() {
          return a || (a = new f('logger/5.7.0')), a
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError('cannot permanently disable censorship', f.errors.UNSUPPORTED_OPERATION, {
                operation: 'setCensorship',
              }),
            n)
          ) {
            if (!t) return
            this.globalLogger().throwError('error censorship permanent', f.errors.UNSUPPORTED_OPERATION, {
              operation: 'setCensorship',
            })
          }
          ;(i = !!t), (n = !!e)
        }
        static setLogLevel(t) {
          const e = o[t.toLowerCase()]
          null != e ? (s = e) : f.globalLogger().warn('invalid log level - ' + t)
        }
        static from(t) {
          return new f(t)
        }
      }
      ;(f.errors = h), (f.levels = c)
    },
    function(t, e, r) {
      ;(function(t) {
        !(function(t, e) {
          'use strict'
          function n(t, e) {
            if (!t) throw new Error(e || 'Assertion failed')
          }
          function i(t, e) {
            t.super_ = e
            var r = function() {}
            ;(r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t)
          }
          function o(t, e, r) {
            if (o.isBN(t)) return t
            ;(this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t && (('le' !== e && 'be' !== e) || ((r = e), (e = 10)), this._init(t || 0, e || 10, r || 'be'))
          }
          var s
          'object' == typeof t ? (t.exports = o) : (e.BN = o), (o.BN = o), (o.wordSize = 26)
          try {
            s = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : r(44).Buffer
          } catch (t) {}
          function a(t, e) {
            var r = t.charCodeAt(e)
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
              ? r - 55
              : r >= 97 && r <= 102
              ? r - 87
              : void n(!1, 'Invalid character in ' + t)
          }
          function u(t, e, r) {
            var n = a(t, r)
            return r - 1 >= e && (n |= a(t, r - 1) << 4), n
          }
          function c(t, e, r, i) {
            for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
              var c = t.charCodeAt(u) - 48
              ;(o *= i),
                (s = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
                n(c >= 0 && s < i, 'Invalid character'),
                (o += s)
            }
            return o
          }
          function h(t, e) {
            ;(t.words = e.words), (t.length = e.length), (t.negative = e.negative), (t.red = e.red)
          }
          if (
            ((o.isBN = function(t) {
              return (
                t instanceof o ||
                (null !== t && 'object' == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words))
              )
            }),
            (o.max = function(t, e) {
              return t.cmp(e) > 0 ? t : e
            }),
            (o.min = function(t, e) {
              return t.cmp(e) < 0 ? t : e
            }),
            (o.prototype._init = function(t, e, r) {
              if ('number' == typeof t) return this._initNumber(t, e, r)
              if ('object' == typeof t) return this._initArray(t, e, r)
              'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36)
              var i = 0
              '-' === (t = t.toString().replace(/\s+/g, ''))[0] && (i++, (this.negative = 1)),
                i < t.length &&
                  (16 === e
                    ? this._parseHex(t, i, r)
                    : (this._parseBase(t, e, i), 'le' === r && this._initArray(this.toArray(), e, r)))
            }),
            (o.prototype._initNumber = function(t, e, r) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]), (this.length = 2))
                  : (n(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                'le' === r && this._initArray(this.toArray(), e, r)
            }),
            (o.prototype._initArray = function(t, e, r) {
              if ((n('number' == typeof t.length), t.length <= 0)) return (this.words = [0]), (this.length = 1), this
              ;(this.length = Math.ceil(t.length / 3)), (this.words = new Array(this.length))
              for (var i = 0; i < this.length; i++) this.words[i] = 0
              var o,
                s,
                a = 0
              if ('be' === r)
                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                  (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), o++)
              else if ('le' === r)
                for (i = 0, o = 0; i < t.length; i += 3)
                  (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), o++)
              return this._strip()
            }),
            (o.prototype._parseHex = function(t, e, r) {
              ;(this.length = Math.ceil((t.length - e) / 6)), (this.words = new Array(this.length))
              for (var n = 0; n < this.length; n++) this.words[n] = 0
              var i,
                o = 0,
                s = 0
              if ('be' === r)
                for (n = t.length - 1; n >= e; n -= 2)
                  (i = u(t, e, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8)
              else
                for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2)
                  (i = u(t, e, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8)
              this._strip()
            }),
            (o.prototype._parseBase = function(t, e, r) {
              ;(this.words = [0]), (this.length = 1)
              for (var n = 0, i = 1; i <= 67108863; i *= e) n++
              n--, (i = (i / e) | 0)
              for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, u = 0, h = r; h < a; h += n)
                (u = c(t, h, h + n, e)),
                  this.imuln(i),
                  this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u)
              if (0 !== s) {
                var l = 1
                for (u = c(t, h, t.length, e), h = 0; h < s; h++) l *= e
                this.imuln(l), this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u)
              }
              this._strip()
            }),
            (o.prototype.copy = function(t) {
              t.words = new Array(this.length)
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e]
              ;(t.length = this.length), (t.negative = this.negative), (t.red = this.red)
            }),
            (o.prototype._move = function(t) {
              h(t, this)
            }),
            (o.prototype.clone = function() {
              var t = new o(null)
              return this.copy(t), t
            }),
            (o.prototype._expand = function(t) {
              for (; this.length < t; ) this.words[this.length++] = 0
              return this
            }),
            (o.prototype._strip = function() {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--
              return this._normSign()
            }),
            (o.prototype._normSign = function() {
              return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
            }),
            'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for('nodejs.util.inspect.custom')] = l
            } catch (t) {
              o.prototype.inspect = l
            }
          else o.prototype.inspect = l
          function l() {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
          }
          var f = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000',
            ],
            d = [
              0,
              0,
              25,
              16,
              12,
              11,
              10,
              9,
              8,
              8,
              7,
              7,
              7,
              7,
              6,
              6,
              6,
              6,
              6,
              6,
              6,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
            ],
            p = [
              0,
              0,
              33554432,
              43046721,
              16777216,
              48828125,
              60466176,
              40353607,
              16777216,
              43046721,
              1e7,
              19487171,
              35831808,
              62748517,
              7529536,
              11390625,
              16777216,
              24137569,
              34012224,
              47045881,
              64e6,
              4084101,
              5153632,
              6436343,
              7962624,
              9765625,
              11881376,
              14348907,
              17210368,
              20511149,
              243e5,
              28629151,
              33554432,
              39135393,
              45435424,
              52521875,
              60466176,
            ]
          ;(o.prototype.toString = function(t, e) {
            var r
            if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
              r = ''
              for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  u = (16777215 & ((a << i) | o)).toString(16)
                ;(o = (a >>> (24 - i)) & 16777215),
                  (i += 2) >= 26 && ((i -= 26), s--),
                  (r = 0 !== o || s !== this.length - 1 ? f[6 - u.length] + u + r : u + r)
              }
              for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = '0' + r
              return 0 !== this.negative && (r = '-' + r), r
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var c = d[t],
                h = p[t]
              r = ''
              var l = this.clone()
              for (l.negative = 0; !l.isZero(); ) {
                var m = l.modrn(h).toString(t)
                r = (l = l.idivn(h)).isZero() ? m + r : f[c - m.length] + m + r
              }
              for (this.isZero() && (r = '0' + r); r.length % e != 0; ) r = '0' + r
              return 0 !== this.negative && (r = '-' + r), r
            }
            n(!1, 'Base should be between 2 and 36')
          }),
            (o.prototype.toNumber = function() {
              var t = this.words[0]
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 && n(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -t : t
              )
            }),
            (o.prototype.toJSON = function() {
              return this.toString(16, 2)
            }),
            s &&
              (o.prototype.toBuffer = function(t, e) {
                return this.toArrayLike(s, t, e)
              }),
            (o.prototype.toArray = function(t, e) {
              return this.toArrayLike(Array, t, e)
            })
          function m(t, e, r) {
            r.negative = e.negative ^ t.negative
            var n = (t.length + e.length) | 0
            ;(r.length = n), (n = (n - 1) | 0)
            var i = 0 | t.words[0],
              o = 0 | e.words[0],
              s = i * o,
              a = 67108863 & s,
              u = (s / 67108864) | 0
            r.words[0] = a
            for (var c = 1; c < n; c++) {
              for (
                var h = u >>> 26, l = 67108863 & u, f = Math.min(c, e.length - 1), d = Math.max(0, c - t.length + 1);
                d <= f;
                d++
              ) {
                var p = (c - d) | 0
                ;(h += ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + l) / 67108864) | 0), (l = 67108863 & s)
              }
              ;(r.words[c] = 0 | l), (u = 0 | h)
            }
            return 0 !== u ? (r.words[c] = 0 | u) : r.length--, r._strip()
          }
          ;(o.prototype.toArrayLike = function(t, e, r) {
            this._strip()
            var i = this.byteLength(),
              o = r || Math.max(1, i)
            n(i <= o, 'byte array longer than desired length'), n(o > 0, 'Requested array length <= 0')
            var s = (function(t, e) {
              return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
            })(t, o)
            return this['_toArrayLike' + ('le' === e ? 'LE' : 'BE')](s, i), s
          }),
            (o.prototype._toArrayLikeLE = function(t, e) {
              for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | n
                ;(t[r++] = 255 & s),
                  r < t.length && (t[r++] = (s >> 8) & 255),
                  r < t.length && (t[r++] = (s >> 16) & 255),
                  6 === o ? (r < t.length && (t[r++] = (s >> 24) & 255), (n = 0), (o = 0)) : ((n = s >>> 24), (o += 2))
              }
              if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0
            }),
            (o.prototype._toArrayLikeBE = function(t, e) {
              for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | n
                ;(t[r--] = 255 & s),
                  r >= 0 && (t[r--] = (s >> 8) & 255),
                  r >= 0 && (t[r--] = (s >> 16) & 255),
                  6 === o ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0)) : ((n = s >>> 24), (o += 2))
              }
              if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0
            }),
            Math.clz32
              ? (o.prototype._countBits = function(t) {
                  return 32 - Math.clz32(t)
                })
              : (o.prototype._countBits = function(t) {
                  var e = t,
                    r = 0
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  )
                }),
            (o.prototype._zeroBits = function(t) {
              if (0 === t) return 26
              var e = t,
                r = 0
              return (
                0 == (8191 & e) && ((r += 13), (e >>>= 13)),
                0 == (127 & e) && ((r += 7), (e >>>= 7)),
                0 == (15 & e) && ((r += 4), (e >>>= 4)),
                0 == (3 & e) && ((r += 2), (e >>>= 2)),
                0 == (1 & e) && r++,
                r
              )
            }),
            (o.prototype.bitLength = function() {
              var t = this.words[this.length - 1],
                e = this._countBits(t)
              return 26 * (this.length - 1) + e
            }),
            (o.prototype.zeroBits = function() {
              if (this.isZero()) return 0
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e])
                if (((t += r), 26 !== r)) break
              }
              return t
            }),
            (o.prototype.byteLength = function() {
              return Math.ceil(this.bitLength() / 8)
            }),
            (o.prototype.toTwos = function(t) {
              return 0 !== this.negative
                ? this.abs()
                    .inotn(t)
                    .iaddn(1)
                : this.clone()
            }),
            (o.prototype.fromTwos = function(t) {
              return this.testn(t - 1)
                ? this.notn(t)
                    .iaddn(1)
                    .ineg()
                : this.clone()
            }),
            (o.prototype.isNeg = function() {
              return 0 !== this.negative
            }),
            (o.prototype.neg = function() {
              return this.clone().ineg()
            }),
            (o.prototype.ineg = function() {
              return this.isZero() || (this.negative ^= 1), this
            }),
            (o.prototype.iuor = function(t) {
              for (; this.length < t.length; ) this.words[this.length++] = 0
              for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e]
              return this._strip()
            }),
            (o.prototype.ior = function(t) {
              return n(0 == (this.negative | t.negative)), this.iuor(t)
            }),
            (o.prototype.or = function(t) {
              return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }),
            (o.prototype.uor = function(t) {
              return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }),
            (o.prototype.iuand = function(t) {
              var e
              e = this.length > t.length ? t : this
              for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r]
              return (this.length = e.length), this._strip()
            }),
            (o.prototype.iand = function(t) {
              return n(0 == (this.negative | t.negative)), this.iuand(t)
            }),
            (o.prototype.and = function(t) {
              return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }),
            (o.prototype.uand = function(t) {
              return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }),
            (o.prototype.iuxor = function(t) {
              var e, r
              this.length > t.length ? ((e = this), (r = t)) : ((e = t), (r = this))
              for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n]
              if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n]
              return (this.length = e.length), this._strip()
            }),
            (o.prototype.ixor = function(t) {
              return n(0 == (this.negative | t.negative)), this.iuxor(t)
            }),
            (o.prototype.xor = function(t) {
              return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }),
            (o.prototype.uxor = function(t) {
              return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }),
            (o.prototype.inotn = function(t) {
              n('number' == typeof t && t >= 0)
              var e = 0 | Math.ceil(t / 26),
                r = t % 26
              this._expand(e), r > 0 && e--
              for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i]
              return r > 0 && (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))), this._strip()
            }),
            (o.prototype.notn = function(t) {
              return this.clone().inotn(t)
            }),
            (o.prototype.setn = function(t, e) {
              n('number' == typeof t && t >= 0)
              var r = (t / 26) | 0,
                i = t % 26
              return (
                this._expand(r + 1),
                (this.words[r] = e ? this.words[r] | (1 << i) : this.words[r] & ~(1 << i)),
                this._strip()
              )
            }),
            (o.prototype.iadd = function(t) {
              var e, r, n
              if (0 !== this.negative && 0 === t.negative)
                return (this.negative = 0), (e = this.isub(t)), (this.negative ^= 1), this._normSign()
              if (0 === this.negative && 0 !== t.negative)
                return (t.negative = 0), (e = this.isub(t)), (t.negative = 1), e._normSign()
              this.length > t.length ? ((r = this), (n = t)) : ((r = t), (n = this))
              for (var i = 0, o = 0; o < n.length; o++)
                (e = (0 | r.words[o]) + (0 | n.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26)
              for (; 0 !== i && o < r.length; o++)
                (e = (0 | r.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26)
              if (((this.length = r.length), 0 !== i)) (this.words[this.length] = i), this.length++
              else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o]
              return this
            }),
            (o.prototype.add = function(t) {
              var e
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this)
            }),
            (o.prototype.isub = function(t) {
              if (0 !== t.negative) {
                t.negative = 0
                var e = this.iadd(t)
                return (t.negative = 1), e._normSign()
              }
              if (0 !== this.negative) return (this.negative = 0), this.iadd(t), (this.negative = 1), this._normSign()
              var r,
                n,
                i = this.cmp(t)
              if (0 === i) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
              i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this))
              for (var o = 0, s = 0; s < n.length; s++)
                (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26), (this.words[s] = 67108863 & e)
              for (; 0 !== o && s < r.length; s++)
                (o = (e = (0 | r.words[s]) + o) >> 26), (this.words[s] = 67108863 & e)
              if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s]
              return (this.length = Math.max(this.length, s)), r !== this && (this.negative = 1), this._strip()
            }),
            (o.prototype.sub = function(t) {
              return this.clone().isub(t)
            })
          var g = function(t, e, r) {
            var n,
              i,
              o,
              s = t.words,
              a = e.words,
              u = r.words,
              c = 0,
              h = 0 | s[0],
              l = 8191 & h,
              f = h >>> 13,
              d = 0 | s[1],
              p = 8191 & d,
              m = d >>> 13,
              g = 0 | s[2],
              b = 8191 & g,
              y = g >>> 13,
              v = 0 | s[3],
              w = 8191 & v,
              A = v >>> 13,
              E = 0 | s[4],
              O = 8191 & E,
              M = E >>> 13,
              k = 0 | s[5],
              _ = 8191 & k,
              S = k >>> 13,
              j = 0 | s[6],
              N = 8191 & j,
              P = j >>> 13,
              x = 0 | s[7],
              C = 8191 & x,
              T = x >>> 13,
              R = 0 | s[8],
              I = 8191 & R,
              B = R >>> 13,
              F = 0 | s[9],
              D = 8191 & F,
              L = F >>> 13,
              U = 0 | a[0],
              G = 8191 & U,
              z = U >>> 13,
              q = 0 | a[1],
              K = 8191 & q,
              H = q >>> 13,
              J = 0 | a[2],
              V = 8191 & J,
              W = J >>> 13,
              Q = 0 | a[3],
              Y = 8191 & Q,
              Z = Q >>> 13,
              X = 0 | a[4],
              $ = 8191 & X,
              tt = X >>> 13,
              et = 0 | a[5],
              rt = 8191 & et,
              nt = et >>> 13,
              it = 0 | a[6],
              ot = 8191 & it,
              st = it >>> 13,
              at = 0 | a[7],
              ut = 8191 & at,
              ct = at >>> 13,
              ht = 0 | a[8],
              lt = 8191 & ht,
              ft = ht >>> 13,
              dt = 0 | a[9],
              pt = 8191 & dt,
              mt = dt >>> 13
            ;(r.negative = t.negative ^ e.negative), (r.length = 19)
            var gt =
              (((c + (n = Math.imul(l, G))) | 0) +
                ((8191 & (i = ((i = Math.imul(l, z)) + Math.imul(f, G)) | 0)) << 13)) |
              0
            ;(c = ((((o = Math.imul(f, z)) + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (n = Math.imul(p, G)),
              (i = ((i = Math.imul(p, z)) + Math.imul(m, G)) | 0),
              (o = Math.imul(m, z))
            var bt =
              (((c + (n = (n + Math.imul(l, K)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, H)) | 0) + Math.imul(f, K)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, H)) | 0) + (i >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (n = Math.imul(b, G)),
              (i = ((i = Math.imul(b, z)) + Math.imul(y, G)) | 0),
              (o = Math.imul(y, z)),
              (n = (n + Math.imul(p, K)) | 0),
              (i = ((i = (i + Math.imul(p, H)) | 0) + Math.imul(m, K)) | 0),
              (o = (o + Math.imul(m, H)) | 0)
            var yt =
              (((c + (n = (n + Math.imul(l, V)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, W)) | 0) + Math.imul(f, V)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, W)) | 0) + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (n = Math.imul(w, G)),
              (i = ((i = Math.imul(w, z)) + Math.imul(A, G)) | 0),
              (o = Math.imul(A, z)),
              (n = (n + Math.imul(b, K)) | 0),
              (i = ((i = (i + Math.imul(b, H)) | 0) + Math.imul(y, K)) | 0),
              (o = (o + Math.imul(y, H)) | 0),
              (n = (n + Math.imul(p, V)) | 0),
              (i = ((i = (i + Math.imul(p, W)) | 0) + Math.imul(m, V)) | 0),
              (o = (o + Math.imul(m, W)) | 0)
            var vt =
              (((c + (n = (n + Math.imul(l, Y)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, Z)) | 0) + Math.imul(f, Y)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, Z)) | 0) + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (n = Math.imul(O, G)),
              (i = ((i = Math.imul(O, z)) + Math.imul(M, G)) | 0),
              (o = Math.imul(M, z)),
              (n = (n + Math.imul(w, K)) | 0),
              (i = ((i = (i + Math.imul(w, H)) | 0) + Math.imul(A, K)) | 0),
              (o = (o + Math.imul(A, H)) | 0),
              (n = (n + Math.imul(b, V)) | 0),
              (i = ((i = (i + Math.imul(b, W)) | 0) + Math.imul(y, V)) | 0),
              (o = (o + Math.imul(y, W)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, Z)) | 0)
            var wt =
              (((c + (n = (n + Math.imul(l, $)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, tt)) | 0) + Math.imul(f, $)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (n = Math.imul(_, G)),
              (i = ((i = Math.imul(_, z)) + Math.imul(S, G)) | 0),
              (o = Math.imul(S, z)),
              (n = (n + Math.imul(O, K)) | 0),
              (i = ((i = (i + Math.imul(O, H)) | 0) + Math.imul(M, K)) | 0),
              (o = (o + Math.imul(M, H)) | 0),
              (n = (n + Math.imul(w, V)) | 0),
              (i = ((i = (i + Math.imul(w, W)) | 0) + Math.imul(A, V)) | 0),
              (o = (o + Math.imul(A, W)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (i = ((i = (i + Math.imul(b, Z)) | 0) + Math.imul(y, Y)) | 0),
              (o = (o + Math.imul(y, Z)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, $)) | 0),
              (o = (o + Math.imul(m, tt)) | 0)
            var At =
              (((c + (n = (n + Math.imul(l, rt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, nt)) | 0) + Math.imul(f, rt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, nt)) | 0) + (i >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (n = Math.imul(N, G)),
              (i = ((i = Math.imul(N, z)) + Math.imul(P, G)) | 0),
              (o = Math.imul(P, z)),
              (n = (n + Math.imul(_, K)) | 0),
              (i = ((i = (i + Math.imul(_, H)) | 0) + Math.imul(S, K)) | 0),
              (o = (o + Math.imul(S, H)) | 0),
              (n = (n + Math.imul(O, V)) | 0),
              (i = ((i = (i + Math.imul(O, W)) | 0) + Math.imul(M, V)) | 0),
              (o = (o + Math.imul(M, W)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (i = ((i = (i + Math.imul(w, Z)) | 0) + Math.imul(A, Y)) | 0),
              (o = (o + Math.imul(A, Z)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(y, $)) | 0),
              (o = (o + Math.imul(y, tt)) | 0),
              (n = (n + Math.imul(p, rt)) | 0),
              (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(m, rt)) | 0),
              (o = (o + Math.imul(m, nt)) | 0)
            var Et =
              (((c + (n = (n + Math.imul(l, ot)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, st)) | 0) + Math.imul(f, ot)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, st)) | 0) + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (n = Math.imul(C, G)),
              (i = ((i = Math.imul(C, z)) + Math.imul(T, G)) | 0),
              (o = Math.imul(T, z)),
              (n = (n + Math.imul(N, K)) | 0),
              (i = ((i = (i + Math.imul(N, H)) | 0) + Math.imul(P, K)) | 0),
              (o = (o + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(_, V)) | 0),
              (i = ((i = (i + Math.imul(_, W)) | 0) + Math.imul(S, V)) | 0),
              (o = (o + Math.imul(S, W)) | 0),
              (n = (n + Math.imul(O, Y)) | 0),
              (i = ((i = (i + Math.imul(O, Z)) | 0) + Math.imul(M, Y)) | 0),
              (o = (o + Math.imul(M, Z)) | 0),
              (n = (n + Math.imul(w, $)) | 0),
              (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(A, $)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (i = ((i = (i + Math.imul(b, nt)) | 0) + Math.imul(y, rt)) | 0),
              (o = (o + Math.imul(y, nt)) | 0),
              (n = (n + Math.imul(p, ot)) | 0),
              (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, st)) | 0)
            var Ot =
              (((c + (n = (n + Math.imul(l, ut)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, ct)) | 0) + Math.imul(f, ut)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, ct)) | 0) + (i >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (n = Math.imul(I, G)),
              (i = ((i = Math.imul(I, z)) + Math.imul(B, G)) | 0),
              (o = Math.imul(B, z)),
              (n = (n + Math.imul(C, K)) | 0),
              (i = ((i = (i + Math.imul(C, H)) | 0) + Math.imul(T, K)) | 0),
              (o = (o + Math.imul(T, H)) | 0),
              (n = (n + Math.imul(N, V)) | 0),
              (i = ((i = (i + Math.imul(N, W)) | 0) + Math.imul(P, V)) | 0),
              (o = (o + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(_, Y)) | 0),
              (i = ((i = (i + Math.imul(_, Z)) | 0) + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, Z)) | 0),
              (n = (n + Math.imul(O, $)) | 0),
              (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(M, $)) | 0),
              (o = (o + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(w, rt)) | 0),
              (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(A, rt)) | 0),
              (o = (o + Math.imul(A, nt)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (i = ((i = (i + Math.imul(b, st)) | 0) + Math.imul(y, ot)) | 0),
              (o = (o + Math.imul(y, st)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (i = ((i = (i + Math.imul(p, ct)) | 0) + Math.imul(m, ut)) | 0),
              (o = (o + Math.imul(m, ct)) | 0)
            var Mt =
              (((c + (n = (n + Math.imul(l, lt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, ft)) | 0) + Math.imul(f, lt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, ft)) | 0) + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (n = Math.imul(D, G)),
              (i = ((i = Math.imul(D, z)) + Math.imul(L, G)) | 0),
              (o = Math.imul(L, z)),
              (n = (n + Math.imul(I, K)) | 0),
              (i = ((i = (i + Math.imul(I, H)) | 0) + Math.imul(B, K)) | 0),
              (o = (o + Math.imul(B, H)) | 0),
              (n = (n + Math.imul(C, V)) | 0),
              (i = ((i = (i + Math.imul(C, W)) | 0) + Math.imul(T, V)) | 0),
              (o = (o + Math.imul(T, W)) | 0),
              (n = (n + Math.imul(N, Y)) | 0),
              (i = ((i = (i + Math.imul(N, Z)) | 0) + Math.imul(P, Y)) | 0),
              (o = (o + Math.imul(P, Z)) | 0),
              (n = (n + Math.imul(_, $)) | 0),
              (i = ((i = (i + Math.imul(_, tt)) | 0) + Math.imul(S, $)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(O, rt)) | 0),
              (i = ((i = (i + Math.imul(O, nt)) | 0) + Math.imul(M, rt)) | 0),
              (o = (o + Math.imul(M, nt)) | 0),
              (n = (n + Math.imul(w, ot)) | 0),
              (i = ((i = (i + Math.imul(w, st)) | 0) + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, st)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (i = ((i = (i + Math.imul(b, ct)) | 0) + Math.imul(y, ut)) | 0),
              (o = (o + Math.imul(y, ct)) | 0),
              (n = (n + Math.imul(p, lt)) | 0),
              (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(m, lt)) | 0),
              (o = (o + Math.imul(m, ft)) | 0)
            var kt =
              (((c + (n = (n + Math.imul(l, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, mt)) | 0) + Math.imul(f, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, mt)) | 0) + (i >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (n = Math.imul(D, K)),
              (i = ((i = Math.imul(D, H)) + Math.imul(L, K)) | 0),
              (o = Math.imul(L, H)),
              (n = (n + Math.imul(I, V)) | 0),
              (i = ((i = (i + Math.imul(I, W)) | 0) + Math.imul(B, V)) | 0),
              (o = (o + Math.imul(B, W)) | 0),
              (n = (n + Math.imul(C, Y)) | 0),
              (i = ((i = (i + Math.imul(C, Z)) | 0) + Math.imul(T, Y)) | 0),
              (o = (o + Math.imul(T, Z)) | 0),
              (n = (n + Math.imul(N, $)) | 0),
              (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(P, $)) | 0),
              (o = (o + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(_, rt)) | 0),
              (i = ((i = (i + Math.imul(_, nt)) | 0) + Math.imul(S, rt)) | 0),
              (o = (o + Math.imul(S, nt)) | 0),
              (n = (n + Math.imul(O, ot)) | 0),
              (i = ((i = (i + Math.imul(O, st)) | 0) + Math.imul(M, ot)) | 0),
              (o = (o + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(w, ut)) | 0),
              (i = ((i = (i + Math.imul(w, ct)) | 0) + Math.imul(A, ut)) | 0),
              (o = (o + Math.imul(A, ct)) | 0),
              (n = (n + Math.imul(b, lt)) | 0),
              (i = ((i = (i + Math.imul(b, ft)) | 0) + Math.imul(y, lt)) | 0),
              (o = (o + Math.imul(y, ft)) | 0)
            var _t =
              (((c + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(p, mt)) | 0) + Math.imul(m, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(m, mt)) | 0) + (i >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (n = Math.imul(D, V)),
              (i = ((i = Math.imul(D, W)) + Math.imul(L, V)) | 0),
              (o = Math.imul(L, W)),
              (n = (n + Math.imul(I, Y)) | 0),
              (i = ((i = (i + Math.imul(I, Z)) | 0) + Math.imul(B, Y)) | 0),
              (o = (o + Math.imul(B, Z)) | 0),
              (n = (n + Math.imul(C, $)) | 0),
              (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(T, $)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (n = (n + Math.imul(N, rt)) | 0),
              (i = ((i = (i + Math.imul(N, nt)) | 0) + Math.imul(P, rt)) | 0),
              (o = (o + Math.imul(P, nt)) | 0),
              (n = (n + Math.imul(_, ot)) | 0),
              (i = ((i = (i + Math.imul(_, st)) | 0) + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (n = (n + Math.imul(O, ut)) | 0),
              (i = ((i = (i + Math.imul(O, ct)) | 0) + Math.imul(M, ut)) | 0),
              (o = (o + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(w, lt)) | 0),
              (i = ((i = (i + Math.imul(w, ft)) | 0) + Math.imul(A, lt)) | 0),
              (o = (o + Math.imul(A, ft)) | 0)
            var St =
              (((c + (n = (n + Math.imul(b, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(b, mt)) | 0) + Math.imul(y, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(y, mt)) | 0) + (i >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (n = Math.imul(D, Y)),
              (i = ((i = Math.imul(D, Z)) + Math.imul(L, Y)) | 0),
              (o = Math.imul(L, Z)),
              (n = (n + Math.imul(I, $)) | 0),
              (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(B, $)) | 0),
              (o = (o + Math.imul(B, tt)) | 0),
              (n = (n + Math.imul(C, rt)) | 0),
              (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(T, rt)) | 0),
              (o = (o + Math.imul(T, nt)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (i = ((i = (i + Math.imul(N, st)) | 0) + Math.imul(P, ot)) | 0),
              (o = (o + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(_, ut)) | 0),
              (i = ((i = (i + Math.imul(_, ct)) | 0) + Math.imul(S, ut)) | 0),
              (o = (o + Math.imul(S, ct)) | 0),
              (n = (n + Math.imul(O, lt)) | 0),
              (i = ((i = (i + Math.imul(O, ft)) | 0) + Math.imul(M, lt)) | 0),
              (o = (o + Math.imul(M, ft)) | 0)
            var jt =
              (((c + (n = (n + Math.imul(w, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(w, mt)) | 0) + Math.imul(A, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(A, mt)) | 0) + (i >>> 13)) | 0) + (jt >>> 26)) | 0),
              (jt &= 67108863),
              (n = Math.imul(D, $)),
              (i = ((i = Math.imul(D, tt)) + Math.imul(L, $)) | 0),
              (o = Math.imul(L, tt)),
              (n = (n + Math.imul(I, rt)) | 0),
              (i = ((i = (i + Math.imul(I, nt)) | 0) + Math.imul(B, rt)) | 0),
              (o = (o + Math.imul(B, nt)) | 0),
              (n = (n + Math.imul(C, ot)) | 0),
              (i = ((i = (i + Math.imul(C, st)) | 0) + Math.imul(T, ot)) | 0),
              (o = (o + Math.imul(T, st)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (i = ((i = (i + Math.imul(N, ct)) | 0) + Math.imul(P, ut)) | 0),
              (o = (o + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(_, lt)) | 0),
              (i = ((i = (i + Math.imul(_, ft)) | 0) + Math.imul(S, lt)) | 0),
              (o = (o + Math.imul(S, ft)) | 0)
            var Nt =
              (((c + (n = (n + Math.imul(O, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(O, mt)) | 0) + Math.imul(M, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(M, mt)) | 0) + (i >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (n = Math.imul(D, rt)),
              (i = ((i = Math.imul(D, nt)) + Math.imul(L, rt)) | 0),
              (o = Math.imul(L, nt)),
              (n = (n + Math.imul(I, ot)) | 0),
              (i = ((i = (i + Math.imul(I, st)) | 0) + Math.imul(B, ot)) | 0),
              (o = (o + Math.imul(B, st)) | 0),
              (n = (n + Math.imul(C, ut)) | 0),
              (i = ((i = (i + Math.imul(C, ct)) | 0) + Math.imul(T, ut)) | 0),
              (o = (o + Math.imul(T, ct)) | 0),
              (n = (n + Math.imul(N, lt)) | 0),
              (i = ((i = (i + Math.imul(N, ft)) | 0) + Math.imul(P, lt)) | 0),
              (o = (o + Math.imul(P, ft)) | 0)
            var Pt =
              (((c + (n = (n + Math.imul(_, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(_, mt)) | 0) + Math.imul(S, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(S, mt)) | 0) + (i >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (n = Math.imul(D, ot)),
              (i = ((i = Math.imul(D, st)) + Math.imul(L, ot)) | 0),
              (o = Math.imul(L, st)),
              (n = (n + Math.imul(I, ut)) | 0),
              (i = ((i = (i + Math.imul(I, ct)) | 0) + Math.imul(B, ut)) | 0),
              (o = (o + Math.imul(B, ct)) | 0),
              (n = (n + Math.imul(C, lt)) | 0),
              (i = ((i = (i + Math.imul(C, ft)) | 0) + Math.imul(T, lt)) | 0),
              (o = (o + Math.imul(T, ft)) | 0)
            var xt =
              (((c + (n = (n + Math.imul(N, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(N, mt)) | 0) + Math.imul(P, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(P, mt)) | 0) + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (n = Math.imul(D, ut)),
              (i = ((i = Math.imul(D, ct)) + Math.imul(L, ut)) | 0),
              (o = Math.imul(L, ct)),
              (n = (n + Math.imul(I, lt)) | 0),
              (i = ((i = (i + Math.imul(I, ft)) | 0) + Math.imul(B, lt)) | 0),
              (o = (o + Math.imul(B, ft)) | 0)
            var Ct =
              (((c + (n = (n + Math.imul(C, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(C, mt)) | 0) + Math.imul(T, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(T, mt)) | 0) + (i >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (n = Math.imul(D, lt)),
              (i = ((i = Math.imul(D, ft)) + Math.imul(L, lt)) | 0),
              (o = Math.imul(L, ft))
            var Tt =
              (((c + (n = (n + Math.imul(I, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(I, mt)) | 0) + Math.imul(B, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(B, mt)) | 0) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0), (Tt &= 67108863)
            var Rt =
              (((c + (n = Math.imul(D, pt))) | 0) +
                ((8191 & (i = ((i = Math.imul(D, mt)) + Math.imul(L, pt)) | 0)) << 13)) |
              0
            return (
              (c = ((((o = Math.imul(L, mt)) + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (u[0] = gt),
              (u[1] = bt),
              (u[2] = yt),
              (u[3] = vt),
              (u[4] = wt),
              (u[5] = At),
              (u[6] = Et),
              (u[7] = Ot),
              (u[8] = Mt),
              (u[9] = kt),
              (u[10] = _t),
              (u[11] = St),
              (u[12] = jt),
              (u[13] = Nt),
              (u[14] = Pt),
              (u[15] = xt),
              (u[16] = Ct),
              (u[17] = Tt),
              (u[18] = Rt),
              0 !== c && ((u[19] = c), r.length++),
              r
            )
          }
          function b(t, e, r) {
            ;(r.negative = e.negative ^ t.negative), (r.length = t.length + e.length)
            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var s = i
              i = 0
              for (
                var a = 67108863 & n, u = Math.min(o, e.length - 1), c = Math.max(0, o - t.length + 1);
                c <= u;
                c++
              ) {
                var h = o - c,
                  l = (0 | t.words[h]) * (0 | e.words[c]),
                  f = 67108863 & l
                ;(a = 67108863 & (f = (f + a) | 0)),
                  (i += (s = ((s = (s + ((l / 67108864) | 0)) | 0) + (f >>> 26)) | 0) >>> 26),
                  (s &= 67108863)
              }
              ;(r.words[o] = a), (n = s), (s = i)
            }
            return 0 !== n ? (r.words[o] = n) : r.length--, r._strip()
          }
          function y(t, e, r) {
            return b(t, e, r)
          }
          function v(t, e) {
            ;(this.x = t), (this.y = e)
          }
          Math.imul || (g = m),
            (o.prototype.mulTo = function(t, e) {
              var r = this.length + t.length
              return 10 === this.length && 10 === t.length
                ? g(this, t, e)
                : r < 63
                ? m(this, t, e)
                : r < 1024
                ? b(this, t, e)
                : y(this, t, e)
            }),
            (v.prototype.makeRBT = function(t) {
              for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++)
                e[n] = this.revBin(n, r, t)
              return e
            }),
            (v.prototype.revBin = function(t, e, r) {
              if (0 === t || t === r - 1) return t
              for (var n = 0, i = 0; i < e; i++) (n |= (1 & t) << (e - i - 1)), (t >>= 1)
              return n
            }),
            (v.prototype.permute = function(t, e, r, n, i, o) {
              for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]])
            }),
            (v.prototype.transform = function(t, e, r, n, i, o) {
              this.permute(o, t, e, r, n, i)
              for (var s = 1; s < i; s <<= 1)
                for (
                  var a = s << 1, u = Math.cos((2 * Math.PI) / a), c = Math.sin((2 * Math.PI) / a), h = 0;
                  h < i;
                  h += a
                )
                  for (var l = u, f = c, d = 0; d < s; d++) {
                    var p = r[h + d],
                      m = n[h + d],
                      g = r[h + d + s],
                      b = n[h + d + s],
                      y = l * g - f * b
                    ;(b = l * b + f * g),
                      (g = y),
                      (r[h + d] = p + g),
                      (n[h + d] = m + b),
                      (r[h + d + s] = p - g),
                      (n[h + d + s] = m - b),
                      d !== a && ((y = u * l - c * f), (f = u * f + c * l), (l = y))
                  }
            }),
            (v.prototype.guessLen13b = function(t, e) {
              var r = 1 | Math.max(e, t),
                n = 1 & r,
                i = 0
              for (r = (r / 2) | 0; r; r >>>= 1) i++
              return 1 << (i + 1 + n)
            }),
            (v.prototype.conjugate = function(t, e, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = t[n]
                  ;(t[n] = t[r - n - 1]), (t[r - n - 1] = i), (i = e[n]), (e[n] = -e[r - n - 1]), (e[r - n - 1] = -i)
                }
            }),
            (v.prototype.normalize13b = function(t, e) {
              for (var r = 0, n = 0; n < e / 2; n++) {
                var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r
                ;(t[n] = 67108863 & i), (r = i < 67108864 ? 0 : (i / 67108864) | 0)
              }
              return t
            }),
            (v.prototype.convert13b = function(t, e, r, i) {
              for (var o = 0, s = 0; s < e; s++)
                (o += 0 | t[s]), (r[2 * s] = 8191 & o), (o >>>= 13), (r[2 * s + 1] = 8191 & o), (o >>>= 13)
              for (s = 2 * e; s < i; ++s) r[s] = 0
              n(0 === o), n(0 == (-8192 & o))
            }),
            (v.prototype.stub = function(t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0
              return e
            }),
            (v.prototype.mulp = function(t, e, r) {
              var n = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                s = new Array(n),
                a = new Array(n),
                u = new Array(n),
                c = new Array(n),
                h = new Array(n),
                l = new Array(n),
                f = r.words
              ;(f.length = n),
                this.convert13b(t.words, t.length, s, n),
                this.convert13b(e.words, e.length, c, n),
                this.transform(s, o, a, u, n, i),
                this.transform(c, o, h, l, n, i)
              for (var d = 0; d < n; d++) {
                var p = a[d] * h[d] - u[d] * l[d]
                ;(u[d] = a[d] * l[d] + u[d] * h[d]), (a[d] = p)
              }
              return (
                this.conjugate(a, u, n),
                this.transform(a, u, f, o, n, i),
                this.conjugate(f, o, n),
                this.normalize13b(f, n),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r._strip()
              )
            }),
            (o.prototype.mul = function(t) {
              var e = new o(null)
              return (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            }),
            (o.prototype.mulf = function(t) {
              var e = new o(null)
              return (e.words = new Array(this.length + t.length)), y(this, t, e)
            }),
            (o.prototype.imul = function(t) {
              return this.clone().mulTo(t, this)
            }),
            (o.prototype.imuln = function(t) {
              var e = t < 0
              e && (t = -t), n('number' == typeof t), n(t < 67108864)
              for (var r = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * t,
                  s = (67108863 & o) + (67108863 & r)
                ;(r >>= 26), (r += (o / 67108864) | 0), (r += s >>> 26), (this.words[i] = 67108863 & s)
              }
              return 0 !== r && ((this.words[i] = r), this.length++), e ? this.ineg() : this
            }),
            (o.prototype.muln = function(t) {
              return this.clone().imuln(t)
            }),
            (o.prototype.sqr = function() {
              return this.mul(this)
            }),
            (o.prototype.isqr = function() {
              return this.imul(this.clone())
            }),
            (o.prototype.pow = function(t) {
              var e = (function(t) {
                for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                  var n = (r / 26) | 0,
                    i = r % 26
                  e[r] = (t.words[n] >>> i) & 1
                }
                return e
              })(t)
              if (0 === e.length) return new o(1)
              for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
              if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i))
              return r
            }),
            (o.prototype.iushln = function(t) {
              n('number' == typeof t && t >= 0)
              var e,
                r = t % 26,
                i = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r)
              if (0 !== r) {
                var s = 0
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & o,
                    u = ((0 | this.words[e]) - a) << r
                  ;(this.words[e] = u | s), (s = a >>> (26 - r))
                }
                s && ((this.words[e] = s), this.length++)
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e]
                for (e = 0; e < i; e++) this.words[e] = 0
                this.length += i
              }
              return this._strip()
            }),
            (o.prototype.ishln = function(t) {
              return n(0 === this.negative), this.iushln(t)
            }),
            (o.prototype.iushrn = function(t, e, r) {
              var i
              n('number' == typeof t && t >= 0), (i = e ? (e - (e % 26)) / 26 : 0)
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> o) << o),
                u = r
              if (((i -= s), (i = Math.max(0, i)), u)) {
                for (var c = 0; c < s; c++) u.words[c] = this.words[c]
                u.length = s
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, c = 0; c < this.length; c++) this.words[c] = this.words[c + s]
              else (this.words[0] = 0), (this.length = 1)
              var h = 0
              for (c = this.length - 1; c >= 0 && (0 !== h || c >= i); c--) {
                var l = 0 | this.words[c]
                ;(this.words[c] = (h << (26 - o)) | (l >>> o)), (h = l & a)
              }
              return (
                u && 0 !== h && (u.words[u.length++] = h),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              )
            }),
            (o.prototype.ishrn = function(t, e, r) {
              return n(0 === this.negative), this.iushrn(t, e, r)
            }),
            (o.prototype.shln = function(t) {
              return this.clone().ishln(t)
            }),
            (o.prototype.ushln = function(t) {
              return this.clone().iushln(t)
            }),
            (o.prototype.shrn = function(t) {
              return this.clone().ishrn(t)
            }),
            (o.prototype.ushrn = function(t) {
              return this.clone().iushrn(t)
            }),
            (o.prototype.testn = function(t) {
              n('number' == typeof t && t >= 0)
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e
              return !(this.length <= r) && !!(this.words[r] & i)
            }),
            (o.prototype.imaskn = function(t) {
              n('number' == typeof t && t >= 0)
              var e = t % 26,
                r = (t - e) / 26
              if ((n(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= r)) return this
              if ((0 !== e && r++, (this.length = Math.min(r, this.length)), 0 !== e)) {
                var i = 67108863 ^ ((67108863 >>> e) << e)
                this.words[this.length - 1] &= i
              }
              return this._strip()
            }),
            (o.prototype.maskn = function(t) {
              return this.clone().imaskn(t)
            }),
            (o.prototype.iaddn = function(t) {
              return (
                n('number' == typeof t),
                n(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])), (this.negative = 0), this)
                    : ((this.negative = 0), this.isubn(t), (this.negative = 1), this)
                  : this._iaddn(t)
              )
            }),
            (o.prototype._iaddn = function(t) {
              this.words[0] += t
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864), e === this.length - 1 ? (this.words[e + 1] = 1) : this.words[e + 1]++
              return (this.length = Math.max(this.length, e + 1)), this
            }),
            (o.prototype.isubn = function(t) {
              if ((n('number' == typeof t), n(t < 67108864), t < 0)) return this.iaddn(-t)
              if (0 !== this.negative) return (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
                (this.words[0] = -this.words[0]), (this.negative = 1)
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1)
              return this._strip()
            }),
            (o.prototype.addn = function(t) {
              return this.clone().iaddn(t)
            }),
            (o.prototype.subn = function(t) {
              return this.clone().isubn(t)
            }),
            (o.prototype.iabs = function() {
              return (this.negative = 0), this
            }),
            (o.prototype.abs = function() {
              return this.clone().iabs()
            }),
            (o.prototype._ishlnsubmul = function(t, e, r) {
              var i,
                o,
                s = t.length + r
              this._expand(s)
              var a = 0
              for (i = 0; i < t.length; i++) {
                o = (0 | this.words[i + r]) + a
                var u = (0 | t.words[i]) * e
                ;(a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)), (this.words[i + r] = 67108863 & o)
              }
              for (; i < this.length - r; i++)
                (a = (o = (0 | this.words[i + r]) + a) >> 26), (this.words[i + r] = 67108863 & o)
              if (0 === a) return this._strip()
              for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
                (a = (o = -(0 | this.words[i]) + a) >> 26), (this.words[i] = 67108863 & o)
              return (this.negative = 1), this._strip()
            }),
            (o.prototype._wordDiv = function(t, e) {
              var r = (this.length, t.length),
                n = this.clone(),
                i = t,
                s = 0 | i.words[i.length - 1]
              0 !== (r = 26 - this._countBits(s)) && ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]))
              var a,
                u = n.length - i.length
              if ('mod' !== e) {
                ;((a = new o(null)).length = u + 1), (a.words = new Array(a.length))
                for (var c = 0; c < a.length; c++) a.words[c] = 0
              }
              var h = n.clone()._ishlnsubmul(i, 1, u)
              0 === h.negative && ((n = h), a && (a.words[u] = 1))
              for (var l = u - 1; l >= 0; l--) {
                var f = 67108864 * (0 | n.words[i.length + l]) + (0 | n.words[i.length + l - 1])
                for (f = Math.min((f / s) | 0, 67108863), n._ishlnsubmul(i, f, l); 0 !== n.negative; )
                  f--, (n.negative = 0), n._ishlnsubmul(i, 1, l), n.isZero() || (n.negative ^= 1)
                a && (a.words[l] = f)
              }
              return a && a._strip(), n._strip(), 'div' !== e && 0 !== r && n.iushrn(r), { div: a || null, mod: n }
            }),
            (o.prototype.divmod = function(t, e, r) {
              return (
                n(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((a = this.neg().divmod(t, e)),
                    'mod' !== e && (i = a.div.neg()),
                    'div' !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                    { div: i, mod: s })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((a = this.divmod(t.neg(), e)), 'mod' !== e && (i = a.div.neg()), { div: i, mod: a.mod })
                  : 0 != (this.negative & t.negative)
                  ? ((a = this.neg().divmod(t.neg(), e)),
                    'div' !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                    { div: a.div, mod: s })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === t.length
                  ? 'div' === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : 'mod' === e
                    ? { div: null, mod: new o(this.modrn(t.words[0])) }
                    : { div: this.divn(t.words[0]), mod: new o(this.modrn(t.words[0])) }
                  : this._wordDiv(t, e)
              )
              var i, s, a
            }),
            (o.prototype.div = function(t) {
              return this.divmod(t, 'div', !1).div
            }),
            (o.prototype.mod = function(t) {
              return this.divmod(t, 'mod', !1).mod
            }),
            (o.prototype.umod = function(t) {
              return this.divmod(t, 'mod', !0).mod
            }),
            (o.prototype.divRound = function(t) {
              var e = this.divmod(t)
              if (e.mod.isZero()) return e.div
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                n = t.ushrn(1),
                i = t.andln(1),
                o = r.cmp(n)
              return o < 0 || (1 === i && 0 === o) ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
            }),
            (o.prototype.modrn = function(t) {
              var e = t < 0
              e && (t = -t), n(t <= 67108863)
              for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--) i = (r * i + (0 | this.words[o])) % t
              return e ? -i : i
            }),
            (o.prototype.modn = function(t) {
              return this.modrn(t)
            }),
            (o.prototype.idivn = function(t) {
              var e = t < 0
              e && (t = -t), n(t <= 67108863)
              for (var r = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * r
                ;(this.words[i] = (o / t) | 0), (r = o % t)
              }
              return this._strip(), e ? this.ineg() : this
            }),
            (o.prototype.divn = function(t) {
              return this.clone().idivn(t)
            }),
            (o.prototype.egcd = function(t) {
              n(0 === t.negative), n(!t.isZero())
              var e = this,
                r = t.clone()
              e = 0 !== e.negative ? e.umod(t) : e.clone()
              for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), c = 0; e.isEven() && r.isEven(); )
                e.iushrn(1), r.iushrn(1), ++c
              for (var h = r.clone(), l = e.clone(); !e.isZero(); ) {
                for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f, d <<= 1);
                if (f > 0)
                  for (e.iushrn(f); f-- > 0; )
                    (i.isOdd() || s.isOdd()) && (i.iadd(h), s.isub(l)), i.iushrn(1), s.iushrn(1)
                for (var p = 0, m = 1; 0 == (r.words[0] & m) && p < 26; ++p, m <<= 1);
                if (p > 0)
                  for (r.iushrn(p); p-- > 0; )
                    (a.isOdd() || u.isOdd()) && (a.iadd(h), u.isub(l)), a.iushrn(1), u.iushrn(1)
                e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), s.isub(u)) : (r.isub(e), a.isub(i), u.isub(s))
              }
              return { a: a, b: u, gcd: r.iushln(c) }
            }),
            (o.prototype._invmp = function(t) {
              n(0 === t.negative), n(!t.isZero())
              var e = this,
                r = t.clone()
              e = 0 !== e.negative ? e.umod(t) : e.clone()
              for (var i, s = new o(1), a = new o(0), u = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                for (var c = 0, h = 1; 0 == (e.words[0] & h) && c < 26; ++c, h <<= 1);
                if (c > 0) for (e.iushrn(c); c-- > 0; ) s.isOdd() && s.iadd(u), s.iushrn(1)
                for (var l = 0, f = 1; 0 == (r.words[0] & f) && l < 26; ++l, f <<= 1);
                if (l > 0) for (r.iushrn(l); l-- > 0; ) a.isOdd() && a.iadd(u), a.iushrn(1)
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
              }
              return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
            }),
            (o.prototype.gcd = function(t) {
              if (this.isZero()) return t.abs()
              if (t.isZero()) return this.abs()
              var e = this.clone(),
                r = t.clone()
              ;(e.negative = 0), (r.negative = 0)
              for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1)
              for (;;) {
                for (; e.isEven(); ) e.iushrn(1)
                for (; r.isEven(); ) r.iushrn(1)
                var i = e.cmp(r)
                if (i < 0) {
                  var o = e
                  ;(e = r), (r = o)
                } else if (0 === i || 0 === r.cmpn(1)) break
                e.isub(r)
              }
              return r.iushln(n)
            }),
            (o.prototype.invm = function(t) {
              return this.egcd(t).a.umod(t)
            }),
            (o.prototype.isEven = function() {
              return 0 == (1 & this.words[0])
            }),
            (o.prototype.isOdd = function() {
              return 1 == (1 & this.words[0])
            }),
            (o.prototype.andln = function(t) {
              return this.words[0] & t
            }),
            (o.prototype.bincn = function(t) {
              n('number' == typeof t)
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e
              if (this.length <= r) return this._expand(r + 1), (this.words[r] |= i), this
              for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                var a = 0 | this.words[s]
                ;(o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a)
              }
              return 0 !== o && ((this.words[s] = o), this.length++), this
            }),
            (o.prototype.isZero = function() {
              return 1 === this.length && 0 === this.words[0]
            }),
            (o.prototype.cmpn = function(t) {
              var e,
                r = t < 0
              if (0 !== this.negative && !r) return -1
              if (0 === this.negative && r) return 1
              if ((this._strip(), this.length > 1)) e = 1
              else {
                r && (t = -t), n(t <= 67108863, 'Number is too big')
                var i = 0 | this.words[0]
                e = i === t ? 0 : i < t ? -1 : 1
              }
              return 0 !== this.negative ? 0 | -e : e
            }),
            (o.prototype.cmp = function(t) {
              if (0 !== this.negative && 0 === t.negative) return -1
              if (0 === this.negative && 0 !== t.negative) return 1
              var e = this.ucmp(t)
              return 0 !== this.negative ? 0 | -e : e
            }),
            (o.prototype.ucmp = function(t) {
              if (this.length > t.length) return 1
              if (this.length < t.length) return -1
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | t.words[r]
                if (n !== i) {
                  n < i ? (e = -1) : n > i && (e = 1)
                  break
                }
              }
              return e
            }),
            (o.prototype.gtn = function(t) {
              return 1 === this.cmpn(t)
            }),
            (o.prototype.gt = function(t) {
              return 1 === this.cmp(t)
            }),
            (o.prototype.gten = function(t) {
              return this.cmpn(t) >= 0
            }),
            (o.prototype.gte = function(t) {
              return this.cmp(t) >= 0
            }),
            (o.prototype.ltn = function(t) {
              return -1 === this.cmpn(t)
            }),
            (o.prototype.lt = function(t) {
              return -1 === this.cmp(t)
            }),
            (o.prototype.lten = function(t) {
              return this.cmpn(t) <= 0
            }),
            (o.prototype.lte = function(t) {
              return this.cmp(t) <= 0
            }),
            (o.prototype.eqn = function(t) {
              return 0 === this.cmpn(t)
            }),
            (o.prototype.eq = function(t) {
              return 0 === this.cmp(t)
            }),
            (o.red = function(t) {
              return new _(t)
            }),
            (o.prototype.toRed = function(t) {
              return (
                n(!this.red, 'Already a number in reduction context'),
                n(0 === this.negative, 'red works only with positives'),
                t.convertTo(this)._forceRed(t)
              )
            }),
            (o.prototype.fromRed = function() {
              return n(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this)
            }),
            (o.prototype._forceRed = function(t) {
              return (this.red = t), this
            }),
            (o.prototype.forceRed = function(t) {
              return n(!this.red, 'Already a number in reduction context'), this._forceRed(t)
            }),
            (o.prototype.redAdd = function(t) {
              return n(this.red, 'redAdd works only with red numbers'), this.red.add(this, t)
            }),
            (o.prototype.redIAdd = function(t) {
              return n(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, t)
            }),
            (o.prototype.redSub = function(t) {
              return n(this.red, 'redSub works only with red numbers'), this.red.sub(this, t)
            }),
            (o.prototype.redISub = function(t) {
              return n(this.red, 'redISub works only with red numbers'), this.red.isub(this, t)
            }),
            (o.prototype.redShl = function(t) {
              return n(this.red, 'redShl works only with red numbers'), this.red.shl(this, t)
            }),
            (o.prototype.redMul = function(t) {
              return (
                n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.mul(this, t)
              )
            }),
            (o.prototype.redIMul = function(t) {
              return (
                n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.imul(this, t)
              )
            }),
            (o.prototype.redSqr = function() {
              return n(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this)
            }),
            (o.prototype.redISqr = function() {
              return n(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this)
            }),
            (o.prototype.redSqrt = function() {
              return n(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this)
            }),
            (o.prototype.redInvm = function() {
              return n(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this)
            }),
            (o.prototype.redNeg = function() {
              return n(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this)
            }),
            (o.prototype.redPow = function(t) {
              return n(this.red && !t.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, t)
            })
          var w = { k256: null, p224: null, p192: null, p25519: null }
          function A(t, e) {
            ;(this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp())
          }
          function E() {
            A.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f')
          }
          function O() {
            A.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001')
          }
          function M() {
            A.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff')
          }
          function k() {
            A.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed')
          }
          function _(t) {
            if ('string' == typeof t) {
              var e = o._prime(t)
              ;(this.m = e.p), (this.prime = e)
            } else n(t.gtn(1), 'modulus must be greater than 1'), (this.m = t), (this.prime = null)
          }
          function S(t) {
            _.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv
                .mul(this.r)
                .isubn(1)
                .div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv))
          }
          ;(A.prototype._tmp = function() {
            var t = new o(null)
            return (t.words = new Array(Math.ceil(this.n / 13))), t
          }),
            (A.prototype.ireduce = function(t) {
              var e,
                r = t
              do {
                this.split(r, this.tmp), (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
              } while (e > this.n)
              var n = e < this.n ? -1 : r.ucmp(this.p)
              return (
                0 === n
                  ? ((r.words[0] = 0), (r.length = 1))
                  : n > 0
                  ? r.isub(this.p)
                  : void 0 !== r.strip
                  ? r.strip()
                  : r._strip(),
                r
              )
            }),
            (A.prototype.split = function(t, e) {
              t.iushrn(this.n, 0, e)
            }),
            (A.prototype.imulK = function(t) {
              return t.imul(this.k)
            }),
            i(E, A),
            (E.prototype.split = function(t, e) {
              for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n]
              if (((e.length = r), t.length <= 9)) return (t.words[0] = 0), void (t.length = 1)
              var i = t.words[9]
              for (e.words[e.length++] = 4194303 & i, n = 10; n < t.length; n++) {
                var o = 0 | t.words[n]
                ;(t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o)
              }
              ;(i >>>= 22), (t.words[n - 10] = i), 0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9)
            }),
            (E.prototype.imulK = function(t) {
              ;(t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2)
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 0 | t.words[r]
                ;(e += 977 * n), (t.words[r] = 67108863 & e), (e = 64 * n + ((e / 67108864) | 0))
              }
              return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
            }),
            i(O, A),
            i(M, A),
            i(k, A),
            (k.prototype.imulK = function(t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 19 * (0 | t.words[r]) + e,
                  i = 67108863 & n
                ;(n >>>= 26), (t.words[r] = i), (e = n)
              }
              return 0 !== e && (t.words[t.length++] = e), t
            }),
            (o._prime = function(t) {
              if (w[t]) return w[t]
              var e
              if ('k256' === t) e = new E()
              else if ('p224' === t) e = new O()
              else if ('p192' === t) e = new M()
              else {
                if ('p25519' !== t) throw new Error('Unknown prime ' + t)
                e = new k()
              }
              return (w[t] = e), e
            }),
            (_.prototype._verify1 = function(t) {
              n(0 === t.negative, 'red works only with positives'), n(t.red, 'red works only with red numbers')
            }),
            (_.prototype._verify2 = function(t, e) {
              n(0 == (t.negative | e.negative), 'red works only with positives'),
                n(t.red && t.red === e.red, 'red works only with red numbers')
            }),
            (_.prototype.imod = function(t) {
              return this.prime ? this.prime.ireduce(t)._forceRed(this) : (h(t, t.umod(this.m)._forceRed(this)), t)
            }),
            (_.prototype.neg = function(t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }),
            (_.prototype.add = function(t, e) {
              this._verify2(t, e)
              var r = t.add(e)
              return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
            }),
            (_.prototype.iadd = function(t, e) {
              this._verify2(t, e)
              var r = t.iadd(e)
              return r.cmp(this.m) >= 0 && r.isub(this.m), r
            }),
            (_.prototype.sub = function(t, e) {
              this._verify2(t, e)
              var r = t.sub(e)
              return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
            }),
            (_.prototype.isub = function(t, e) {
              this._verify2(t, e)
              var r = t.isub(e)
              return r.cmpn(0) < 0 && r.iadd(this.m), r
            }),
            (_.prototype.shl = function(t, e) {
              return this._verify1(t), this.imod(t.ushln(e))
            }),
            (_.prototype.imul = function(t, e) {
              return this._verify2(t, e), this.imod(t.imul(e))
            }),
            (_.prototype.mul = function(t, e) {
              return this._verify2(t, e), this.imod(t.mul(e))
            }),
            (_.prototype.isqr = function(t) {
              return this.imul(t, t.clone())
            }),
            (_.prototype.sqr = function(t) {
              return this.mul(t, t)
            }),
            (_.prototype.sqrt = function(t) {
              if (t.isZero()) return t.clone()
              var e = this.m.andln(3)
              if ((n(e % 2 == 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2)
                return this.pow(t, r)
              }
              for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1); ) s++, i.iushrn(1)
              n(!i.isZero())
              var a = new o(1).toRed(this),
                u = a.redNeg(),
                c = this.m.subn(1).iushrn(1),
                h = this.m.bitLength()
              for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, c).cmp(u); ) h.redIAdd(u)
              for (
                var l = this.pow(h, i), f = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s;
                0 !== d.cmp(a);

              ) {
                for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr()
                n(g < p)
                var b = this.pow(l, new o(1).iushln(p - g - 1))
                ;(f = f.redMul(b)), (l = b.redSqr()), (d = d.redMul(l)), (p = g)
              }
              return f
            }),
            (_.prototype.invm = function(t) {
              var e = t._invmp(this.m)
              return 0 !== e.negative ? ((e.negative = 0), this.imod(e).redNeg()) : this.imod(e)
            }),
            (_.prototype.pow = function(t, e) {
              if (e.isZero()) return new o(1).toRed(this)
              if (0 === e.cmpn(1)) return t.clone()
              var r = new Array(16)
              ;(r[0] = new o(1).toRed(this)), (r[1] = t)
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t)
              var i = r[0],
                s = 0,
                a = 0,
                u = e.bitLength() % 26
              for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                for (var c = e.words[n], h = u - 1; h >= 0; h--) {
                  var l = (c >> h) & 1
                  i !== r[0] && (i = this.sqr(i)),
                    0 !== l || 0 !== s
                      ? ((s <<= 1),
                        (s |= l),
                        (4 === ++a || (0 === n && 0 === h)) && ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                      : (a = 0)
                }
                u = 26
              }
              return i
            }),
            (_.prototype.convertTo = function(t) {
              var e = t.umod(this.m)
              return e === t ? e.clone() : e
            }),
            (_.prototype.convertFrom = function(t) {
              var e = t.clone()
              return (e.red = null), e
            }),
            (o.mont = function(t) {
              return new S(t)
            }),
            i(S, _),
            (S.prototype.convertTo = function(t) {
              return this.imod(t.ushln(this.shift))
            }),
            (S.prototype.convertFrom = function(t) {
              var e = this.imod(t.mul(this.rinv))
              return (e.red = null), e
            }),
            (S.prototype.imul = function(t, e) {
              if (t.isZero() || e.isZero()) return (t.words[0] = 0), (t.length = 1), t
              var r = t.imul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                o = i
              return (
                i.cmp(this.m) >= 0 ? (o = i.isub(this.m)) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
              )
            }),
            (S.prototype.mul = function(t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this)
              var r = t.mul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                s = i
              return (
                i.cmp(this.m) >= 0 ? (s = i.isub(this.m)) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
              )
            }),
            (S.prototype.invm = function(t) {
              return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            })
        })(t, this)
      }.call(this, r(60)(t)))
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return d
      }),
        r.d(e, 'e', function() {
          return p
        }),
        r.d(e, 'd', function() {
          return m
        }),
        r.d(e, 'b', function() {
          return g
        }),
        r.d(e, 'c', function() {
          return b
        })
      var n = r(0),
        i = r(7),
        o = r(5),
        s = r(20)
      const a = new (r(2).b)('address/5.7.0')
      function u(t) {
        Object(n.l)(t, 20) || a.throwArgumentError('invalid address', 'address', t)
        const e = (t = t.toLowerCase()).substring(2).split(''),
          r = new Uint8Array(40)
        for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0)
        const i = Object(n.a)(Object(o.a)(r))
        for (let t = 0; t < 40; t += 2)
          i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
            (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase())
        return '0x' + e.join('')
      }
      const c = {}
      for (let t = 0; t < 10; t++) c[String(t)] = String(t)
      for (let t = 0; t < 26; t++) c[String.fromCharCode(65 + t)] = String(10 + t)
      const h = Math.floor(((l = 9007199254740991), Math.log10 ? Math.log10(l) : Math.log(l) / Math.LN10))
      var l
      function f(t) {
        let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + '00')
          .split('')
          .map(t => c[t])
          .join('')
        for (; e.length >= h; ) {
          let t = e.substring(0, h)
          e = (parseInt(t, 10) % 97) + e.substring(t.length)
        }
        let r = String(98 - (parseInt(e, 10) % 97))
        for (; r.length < 2; ) r = '0' + r
        return r
      }
      function d(t) {
        let e = null
        if (
          ('string' != typeof t && a.throwArgumentError('invalid address', 'address', t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          '0x' !== t.substring(0, 2) && (t = '0x' + t),
            (e = u(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              e !== t &&
              a.throwArgumentError('bad address checksum', 'address', t)
        else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            t.substring(2, 4) !== f(t) && a.throwArgumentError('bad icap checksum', 'address', t),
              e = Object(i.c)(t.substring(4));
            e.length < 40;

          )
            e = '0' + e
          e = u('0x' + e)
        } else a.throwArgumentError('invalid address', 'address', t)
        return e
      }
      function p(t) {
        try {
          return d(t), !0
        } catch (t) {}
        return !1
      }
      function m(t) {
        let e = Object(i.b)(d(t).substring(2)).toUpperCase()
        for (; e.length < 30; ) e = '0' + e
        return 'XE' + f('XE00' + e) + e
      }
      function g(t) {
        let e = null
        try {
          e = d(t.from)
        } catch (e) {
          a.throwArgumentError('missing from address', 'transaction', t)
        }
        const r = Object(n.o)(Object(n.a)(i.a.from(t.nonce).toHexString()))
        return d(Object(n.e)(Object(o.a)(Object(s.encode)([e, r])), 12))
      }
      function b(t, e, r) {
        return (
          32 !== Object(n.d)(e) && a.throwArgumentError('salt must be 32 bytes', 'salt', e),
          32 !== Object(n.d)(r) && a.throwArgumentError('initCodeHash must be 32 bytes', 'initCodeHash', r),
          d(Object(n.e)(Object(o.a)(Object(n.b)(['0xff', d(t), e, r])), 12))
        )
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return s
      })
      var n = r(79),
        i = r.n(n),
        o = r(0)
      function s(t) {
        return '0x' + i.a.keccak_256(Object(o.a)(t))
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'b', function() {
        return o
      }),
        r.d(e, 'e', function() {
          return s
        }),
        r.d(e, 'a', function() {
          return a
        }),
        r.d(e, 'c', function() {
          return u
        }),
        r.d(e, 'd', function() {
          return c
        })
      var n = r(0),
        i = r(16)
      function o(t) {
        return 'string' == typeof t && '0x' !== t.substring(0, 2) && (t = '0x' + t), Object(n.a)(t)
      }
      function s(t, e) {
        for (t = String(t); t.length < e; ) t = '0' + t
        return t
      }
      function a(t) {
        return 'string' == typeof t ? Object(i.f)(t, i.a.NFKC) : Object(n.a)(t)
      }
      function u(t, e) {
        let r = t
        const n = e.toLowerCase().split('/')
        for (let t = 0; t < n.length; t++) {
          let e = null
          for (const i in r)
            if (i.toLowerCase() === n[t]) {
              e = r[i]
              break
            }
          if (null === e) return null
          r = e
        }
        return r
      }
      function c(t) {
        const e = Object(n.a)(t)
        ;(e[6] = (15 & e[6]) | 64), (e[8] = (63 & e[8]) | 128)
        const r = Object(n.i)(e)
        return [
          r.substring(2, 10),
          r.substring(10, 14),
          r.substring(14, 18),
          r.substring(18, 22),
          r.substring(22, 34),
        ].join('-')
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'd', function() {
        return l
      }),
        r.d(e, 'a', function() {
          return d
        }),
        r.d(e, 'c', function() {
          return y
        }),
        r.d(e, 'b', function() {
          return v
        })
      var n = r(80),
        i = r.n(n),
        o = r(0),
        s = r(2),
        a = r(52),
        u = i.a.BN
      const c = new s.b(a.a),
        h = {}
      function l(t) {
        return (
          null != t &&
          (d.isBigNumber(t) ||
            ('number' == typeof t && t % 1 == 0) ||
            ('string' == typeof t && !!t.match(/^-?[0-9]+$/)) ||
            Object(o.l)(t) ||
            'bigint' == typeof t ||
            Object(o.j)(t))
        )
      }
      let f = !1
      class d {
        constructor(t, e) {
          t !== h &&
            c.throwError('cannot call constructor directly; use BigNumber.from', s.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'new (BigNumber)',
            }),
            (this._hex = e),
            (this._isBigNumber = !0),
            Object.freeze(this)
        }
        fromTwos(t) {
          return m(g(this).fromTwos(t))
        }
        toTwos(t) {
          return m(g(this).toTwos(t))
        }
        abs() {
          return '-' === this._hex[0] ? d.from(this._hex.substring(1)) : this
        }
        add(t) {
          return m(g(this).add(g(t)))
        }
        sub(t) {
          return m(g(this).sub(g(t)))
        }
        div(t) {
          return d.from(t).isZero() && b('division-by-zero', 'div'), m(g(this).div(g(t)))
        }
        mul(t) {
          return m(g(this).mul(g(t)))
        }
        mod(t) {
          const e = g(t)
          return e.isNeg() && b('division-by-zero', 'mod'), m(g(this).umod(e))
        }
        pow(t) {
          const e = g(t)
          return e.isNeg() && b('negative-power', 'pow'), m(g(this).pow(e))
        }
        and(t) {
          const e = g(t)
          return (this.isNegative() || e.isNeg()) && b('unbound-bitwise-result', 'and'), m(g(this).and(e))
        }
        or(t) {
          const e = g(t)
          return (this.isNegative() || e.isNeg()) && b('unbound-bitwise-result', 'or'), m(g(this).or(e))
        }
        xor(t) {
          const e = g(t)
          return (this.isNegative() || e.isNeg()) && b('unbound-bitwise-result', 'xor'), m(g(this).xor(e))
        }
        mask(t) {
          return (this.isNegative() || t < 0) && b('negative-width', 'mask'), m(g(this).maskn(t))
        }
        shl(t) {
          return (this.isNegative() || t < 0) && b('negative-width', 'shl'), m(g(this).shln(t))
        }
        shr(t) {
          return (this.isNegative() || t < 0) && b('negative-width', 'shr'), m(g(this).shrn(t))
        }
        eq(t) {
          return g(this).eq(g(t))
        }
        lt(t) {
          return g(this).lt(g(t))
        }
        lte(t) {
          return g(this).lte(g(t))
        }
        gt(t) {
          return g(this).gt(g(t))
        }
        gte(t) {
          return g(this).gte(g(t))
        }
        isNegative() {
          return '-' === this._hex[0]
        }
        isZero() {
          return g(this).isZero()
        }
        toNumber() {
          try {
            return g(this).toNumber()
          } catch (t) {
            b('overflow', 'toNumber', this.toString())
          }
          return null
        }
        toBigInt() {
          try {
            return BigInt(this.toString())
          } catch (t) {}
          return c.throwError('this platform does not support BigInt', s.b.errors.UNSUPPORTED_OPERATION, {
            value: this.toString(),
          })
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? f || ((f = !0), c.warn('BigNumber.toString does not accept any parameters; base-10 is assumed'))
                : 16 === arguments[0]
                ? c.throwError(
                    'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
                    s.b.errors.UNEXPECTED_ARGUMENT,
                    {},
                  )
                : c.throwError('BigNumber.toString does not accept parameters', s.b.errors.UNEXPECTED_ARGUMENT, {})),
            g(this).toString(10)
          )
        }
        toHexString() {
          return this._hex
        }
        toJSON(t) {
          return { type: 'BigNumber', hex: this.toHexString() }
        }
        static from(t) {
          if (t instanceof d) return t
          if ('string' == typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new d(h, p(t))
              : t.match(/^-?[0-9]+$/)
              ? new d(h, p(new u(t)))
              : c.throwArgumentError('invalid BigNumber string', 'value', t)
          if ('number' == typeof t)
            return (
              t % 1 && b('underflow', 'BigNumber.from', t),
              (t >= 9007199254740991 || t <= -9007199254740991) && b('overflow', 'BigNumber.from', t),
              d.from(String(t))
            )
          const e = t
          if ('bigint' == typeof e) return d.from(e.toString())
          if (Object(o.j)(e)) return d.from(Object(o.i)(e))
          if (e)
            if (e.toHexString) {
              const t = e.toHexString()
              if ('string' == typeof t) return d.from(t)
            } else {
              let t = e._hex
              if (
                (null == t && 'BigNumber' === e.type && (t = e.hex),
                'string' == typeof t && (Object(o.l)(t) || ('-' === t[0] && Object(o.l)(t.substring(1)))))
              )
                return d.from(t)
            }
          return c.throwArgumentError('invalid BigNumber value', 'value', t)
        }
        static isBigNumber(t) {
          return !(!t || !t._isBigNumber)
        }
      }
      function p(t) {
        if ('string' != typeof t) return p(t.toString(16))
        if ('-' === t[0])
          return (
            '-' === (t = t.substring(1))[0] && c.throwArgumentError('invalid hex', 'value', t),
            '0x00' === (t = p(t)) ? t : '-' + t
          )
        if (('0x' !== t.substring(0, 2) && (t = '0x' + t), '0x' === t)) return '0x00'
        for (t.length % 2 && (t = '0x0' + t.substring(2)); t.length > 4 && '0x00' === t.substring(0, 4); )
          t = '0x' + t.substring(4)
        return t
      }
      function m(t) {
        return d.from(p(t))
      }
      function g(t) {
        const e = d.from(t).toHexString()
        return '-' === e[0] ? new u('-' + e.substring(3), 16) : new u(e.substring(2), 16)
      }
      function b(t, e, r) {
        const n = { fault: t, operation: e }
        return null != r && (n.value = r), c.throwError(t, s.b.errors.NUMERIC_FAULT, n)
      }
      function y(t) {
        return new u(t, 36).toString(16)
      }
      function v(t) {
        return new u(t, 16).toString(36)
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return d
      }),
        r.d(e, 'c', function() {
          return y
        }),
        r.d(e, 'e', function() {
          return v
        }),
        r.d(e, 'b', function() {
          return E
        }),
        r.d(e, 'f', function() {
          return _
        }),
        r.d(e, 'd', function() {
          return j
        })
      var n = r(4),
        i = r(7),
        o = r(0),
        s = r(26),
        a = r(5),
        u = r(1),
        c = r(20),
        h = r(17),
        l = r(2)
      const f = new l.b('transactions/5.7.0')
      var d
      function p(t) {
        return '0x' === t ? null : Object(n.a)(t)
      }
      function m(t) {
        return '0x' === t ? s.h : i.a.from(t)
      }
      !(function(t) {
        ;(t[(t.legacy = 0)] = 'legacy'), (t[(t.eip2930 = 1)] = 'eip2930'), (t[(t.eip1559 = 2)] = 'eip1559')
      })(d || (d = {}))
      const g = [
          { name: 'nonce', maxLength: 32, numeric: !0 },
          { name: 'gasPrice', maxLength: 32, numeric: !0 },
          { name: 'gasLimit', maxLength: 32, numeric: !0 },
          { name: 'to', length: 20 },
          { name: 'value', maxLength: 32, numeric: !0 },
          { name: 'data' },
        ],
        b = { chainId: !0, data: !0, gasLimit: !0, gasPrice: !0, nonce: !0, to: !0, type: !0, value: !0 }
      function y(t) {
        const e = Object(h.b)(t)
        return Object(n.a)(Object(o.e)(Object(a.a)(Object(o.e)(e, 1)), 12))
      }
      function v(t, e) {
        return y(Object(h.c)(Object(o.a)(t), e))
      }
      function w(t, e) {
        const r = Object(o.o)(i.a.from(t).toHexString())
        return r.length > 32 && f.throwArgumentError('invalid length for ' + e, 'transaction:' + e, t), r
      }
      function A(t, e) {
        return {
          address: Object(n.a)(t),
          storageKeys: (e || []).map(
            (e, r) => (
              32 !== Object(o.d)(e) &&
                f.throwArgumentError('invalid access list storageKey', `accessList[${t}:${r}]`, e),
              e.toLowerCase()
            ),
          ),
        }
      }
      function E(t) {
        if (Array.isArray(t))
          return t.map((t, e) =>
            Array.isArray(t)
              ? (t.length > 2 &&
                  f.throwArgumentError('access list expected to be [ address, storageKeys[] ]', `value[${e}]`, t),
                A(t[0], t[1]))
              : A(t.address, t.storageKeys),
          )
        const e = Object.keys(t).map(e => {
          const r = t[e].reduce((t, e) => ((t[e] = !0), t), {})
          return A(e, Object.keys(r).sort())
        })
        return e.sort((t, e) => t.address.localeCompare(e.address)), e
      }
      function O(t) {
        return E(t).map(t => [t.address, t.storageKeys])
      }
      function M(t, e) {
        if (null != t.gasPrice) {
          const e = i.a.from(t.gasPrice),
            r = i.a.from(t.maxFeePerGas || 0)
          e.eq(r) ||
            f.throwArgumentError('mismatch EIP-1559 gasPrice != maxFeePerGas', 'tx', { gasPrice: e, maxFeePerGas: r })
        }
        const r = [
          w(t.chainId || 0, 'chainId'),
          w(t.nonce || 0, 'nonce'),
          w(t.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
          w(t.maxFeePerGas || 0, 'maxFeePerGas'),
          w(t.gasLimit || 0, 'gasLimit'),
          null != t.to ? Object(n.a)(t.to) : '0x',
          w(t.value || 0, 'value'),
          t.data || '0x',
          O(t.accessList || []),
        ]
        if (e) {
          const t = Object(o.n)(e)
          r.push(w(t.recoveryParam, 'recoveryParam')), r.push(Object(o.o)(t.r)), r.push(Object(o.o)(t.s))
        }
        return Object(o.c)(['0x02', c.encode(r)])
      }
      function k(t, e) {
        const r = [
          w(t.chainId || 0, 'chainId'),
          w(t.nonce || 0, 'nonce'),
          w(t.gasPrice || 0, 'gasPrice'),
          w(t.gasLimit || 0, 'gasLimit'),
          null != t.to ? Object(n.a)(t.to) : '0x',
          w(t.value || 0, 'value'),
          t.data || '0x',
          O(t.accessList || []),
        ]
        if (e) {
          const t = Object(o.n)(e)
          r.push(w(t.recoveryParam, 'recoveryParam')), r.push(Object(o.o)(t.r)), r.push(Object(o.o)(t.s))
        }
        return Object(o.c)(['0x01', c.encode(r)])
      }
      function _(t, e) {
        if (null == t.type || 0 === t.type)
          return (
            null != t.accessList &&
              f.throwArgumentError('untyped transactions do not support accessList; include type: 1', 'transaction', t),
            (function(t, e) {
              Object(u.b)(t, b)
              const r = []
              g.forEach(function(e) {
                let n = t[e.name] || []
                const i = {}
                e.numeric && (i.hexPad = 'left'),
                  (n = Object(o.a)(Object(o.i)(n, i))),
                  e.length &&
                    n.length !== e.length &&
                    n.length > 0 &&
                    f.throwArgumentError('invalid length for ' + e.name, 'transaction:' + e.name, n),
                  e.maxLength &&
                    ((n = Object(o.o)(n)),
                    n.length > e.maxLength &&
                      f.throwArgumentError('invalid length for ' + e.name, 'transaction:' + e.name, n)),
                  r.push(Object(o.i)(n))
              })
              let n = 0
              if (
                (null != t.chainId
                  ? ((n = t.chainId),
                    'number' != typeof n && f.throwArgumentError('invalid transaction.chainId', 'transaction', t))
                  : e && !Object(o.k)(e) && e.v > 28 && (n = Math.floor((e.v - 35) / 2)),
                0 !== n && (r.push(Object(o.i)(n)), r.push('0x'), r.push('0x')),
                !e)
              )
                return c.encode(r)
              const i = Object(o.n)(e)
              let s = 27 + i.recoveryParam
              return (
                0 !== n
                  ? (r.pop(),
                    r.pop(),
                    r.pop(),
                    (s += 2 * n + 8),
                    i.v > 28 &&
                      i.v !== s &&
                      f.throwArgumentError('transaction.chainId/signature.v mismatch', 'signature', e))
                  : i.v !== s && f.throwArgumentError('transaction.chainId/signature.v mismatch', 'signature', e),
                r.push(Object(o.i)(s)),
                r.push(Object(o.o)(Object(o.a)(i.r))),
                r.push(Object(o.o)(Object(o.a)(i.s))),
                c.encode(r)
              )
            })(t, e)
          )
        switch (t.type) {
          case 1:
            return k(t, e)
          case 2:
            return M(t, e)
        }
        return f.throwError('unsupported transaction type: ' + t.type, l.b.errors.UNSUPPORTED_OPERATION, {
          operation: 'serializeTransaction',
          transactionType: t.type,
        })
      }
      function S(t, e, r) {
        try {
          const r = m(e[0]).toNumber()
          if (0 !== r && 1 !== r) throw new Error('bad recid')
          t.v = r
        } catch (t) {
          f.throwArgumentError('invalid v for transaction type: 1', 'v', e[0])
        }
        ;(t.r = Object(o.h)(e[1], 32)), (t.s = Object(o.h)(e[2], 32))
        try {
          const e = Object(a.a)(r(t))
          t.from = v(e, { r: t.r, s: t.s, recoveryParam: t.v })
        } catch (t) {}
      }
      function j(t) {
        const e = Object(o.a)(t)
        if (e[0] > 127)
          return (function(t) {
            const e = c.decode(t)
            9 !== e.length && 6 !== e.length && f.throwArgumentError('invalid raw transaction', 'rawTransaction', t)
            const r = {
              nonce: m(e[0]).toNumber(),
              gasPrice: m(e[1]),
              gasLimit: m(e[2]),
              to: p(e[3]),
              value: m(e[4]),
              data: e[5],
              chainId: 0,
            }
            if (6 === e.length) return r
            try {
              r.v = i.a.from(e[6]).toNumber()
            } catch (t) {
              return r
            }
            if (
              ((r.r = Object(o.h)(e[7], 32)),
              (r.s = Object(o.h)(e[8], 32)),
              i.a.from(r.r).isZero() && i.a.from(r.s).isZero())
            )
              (r.chainId = r.v), (r.v = 0)
            else {
              ;(r.chainId = Math.floor((r.v - 35) / 2)), r.chainId < 0 && (r.chainId = 0)
              let n = r.v - 27
              const i = e.slice(0, 6)
              0 !== r.chainId && (i.push(Object(o.i)(r.chainId)), i.push('0x'), i.push('0x'), (n -= 2 * r.chainId + 8))
              const s = Object(a.a)(c.encode(i))
              try {
                r.from = v(s, { r: Object(o.i)(r.r), s: Object(o.i)(r.s), recoveryParam: n })
              } catch (t) {}
              r.hash = Object(a.a)(t)
            }
            return (r.type = null), r
          })(e)
        switch (e[0]) {
          case 1:
            return (function(t) {
              const e = c.decode(t.slice(1))
              8 !== e.length &&
                11 !== e.length &&
                f.throwArgumentError('invalid component count for transaction type: 1', 'payload', Object(o.i)(t))
              const r = {
                type: 1,
                chainId: m(e[0]).toNumber(),
                nonce: m(e[1]).toNumber(),
                gasPrice: m(e[2]),
                gasLimit: m(e[3]),
                to: p(e[4]),
                value: m(e[5]),
                data: e[6],
                accessList: E(e[7]),
              }
              return 8 === e.length || ((r.hash = Object(a.a)(t)), S(r, e.slice(8), k)), r
            })(e)
          case 2:
            return (function(t) {
              const e = c.decode(t.slice(1))
              9 !== e.length &&
                12 !== e.length &&
                f.throwArgumentError('invalid component count for transaction type: 2', 'payload', Object(o.i)(t))
              const r = m(e[2]),
                n = m(e[3]),
                i = {
                  type: 2,
                  chainId: m(e[0]).toNumber(),
                  nonce: m(e[1]).toNumber(),
                  maxPriorityFeePerGas: r,
                  maxFeePerGas: n,
                  gasPrice: null,
                  gasLimit: m(e[4]),
                  to: p(e[5]),
                  value: m(e[6]),
                  data: e[7],
                  accessList: E(e[8]),
                }
              return 9 === e.length || ((i.hash = Object(a.a)(t)), S(i, e.slice(9), M)), i
            })(e)
        }
        return f.throwError('unsupported transaction type: ' + e[0], l.b.errors.UNSUPPORTED_OPERATION, {
          operation: 'parseTransaction',
          transactionType: e[0],
        })
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'd', function() {
        return c
      }),
        r.d(e, 'a', function() {
          return h
        }),
        r.d(e, 'c', function() {
          return l
        }),
        r.d(e, 'b', function() {
          return f
        })
      var n = r(0),
        i = r(7),
        o = r(1),
        s = r(2),
        a = r(25)
      const u = new s.b(a.a)
      function c(t) {
        const e = [],
          r = function(t, n) {
            if (Array.isArray(n))
              for (let i in n) {
                const o = t.slice()
                o.push(i)
                try {
                  r(o, n[i])
                } catch (t) {
                  e.push({ path: o, error: t })
                }
              }
          }
        return r([], t), e
      }
      class h {
        constructor(t, e, r, n) {
          ;(this.name = t), (this.type = e), (this.localName = r), (this.dynamic = n)
        }
        _throwError(t, e) {
          u.throwArgumentError(t, this.localName, e)
        }
      }
      class l {
        constructor(t) {
          Object(o.d)(this, 'wordSize', t || 32),
            (this._data = []),
            (this._dataLength = 0),
            (this._padding = new Uint8Array(t))
        }
        get data() {
          return Object(n.c)(this._data)
        }
        get length() {
          return this._dataLength
        }
        _writeData(t) {
          return this._data.push(t), (this._dataLength += t.length), t.length
        }
        appendWriter(t) {
          return this._writeData(Object(n.b)(t._data))
        }
        writeBytes(t) {
          let e = Object(n.a)(t)
          const r = e.length % this.wordSize
          return r && (e = Object(n.b)([e, this._padding.slice(r)])), this._writeData(e)
        }
        _getValue(t) {
          let e = Object(n.a)(i.a.from(t))
          return (
            e.length > this.wordSize &&
              u.throwError('value out-of-bounds', s.b.errors.BUFFER_OVERRUN, {
                length: this.wordSize,
                offset: e.length,
              }),
            e.length % this.wordSize && (e = Object(n.b)([this._padding.slice(e.length % this.wordSize), e])),
            e
          )
        }
        writeValue(t) {
          return this._writeData(this._getValue(t))
        }
        writeUpdatableValue() {
          const t = this._data.length
          return (
            this._data.push(this._padding),
            (this._dataLength += this.wordSize),
            e => {
              this._data[t] = this._getValue(e)
            }
          )
        }
      }
      class f {
        constructor(t, e, r, i) {
          Object(o.d)(this, '_data', Object(n.a)(t)),
            Object(o.d)(this, 'wordSize', e || 32),
            Object(o.d)(this, '_coerceFunc', r),
            Object(o.d)(this, 'allowLoose', i),
            (this._offset = 0)
        }
        get data() {
          return Object(n.i)(this._data)
        }
        get consumed() {
          return this._offset
        }
        static coerce(t, e) {
          let r = t.match('^u?int([0-9]+)$')
          return r && parseInt(r[1]) <= 48 && (e = e.toNumber()), e
        }
        coerce(t, e) {
          return this._coerceFunc ? this._coerceFunc(t, e) : f.coerce(t, e)
        }
        _peekBytes(t, e, r) {
          let n = Math.ceil(e / this.wordSize) * this.wordSize
          return (
            this._offset + n > this._data.length &&
              (this.allowLoose && r && this._offset + e <= this._data.length
                ? (n = e)
                : u.throwError('data out-of-bounds', s.b.errors.BUFFER_OVERRUN, {
                    length: this._data.length,
                    offset: this._offset + n,
                  })),
            this._data.slice(this._offset, this._offset + n)
          )
        }
        subReader(t) {
          return new f(this._data.slice(this._offset + t), this.wordSize, this._coerceFunc, this.allowLoose)
        }
        readBytes(t, e) {
          let r = this._peekBytes(0, t, !!e)
          return (this._offset += r.length), r.slice(0, t)
        }
        readValue() {
          return i.a.from(this.readBytes(this.wordSize))
        }
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'b', function() {
        return E
      }),
        r.d(e, 'a', function() {
          return O
        }),
        r.d(e, 'g', function() {
          return M
        }),
        r.d(e, 'f', function() {
          return k
        }),
        r.d(e, 'c', function() {
          return _
        }),
        r.d(e, 'e', function() {
          return S
        }),
        r.d(e, 'd', function() {
          return j
        })
      var n = r(27),
        i = r(0),
        o = r(7),
        s = r(16),
        a = r(117),
        u = r(1),
        c = r(17),
        h = r(83),
        l = r(81),
        f = r(8),
        d = r(179)
      const p = new (r(2).b)('hdnode/5.7.0'),
        m = o.a.from('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
        g = Object(s.f)('Bitcoin seed')
      function b(t) {
        return ((1 << t) - 1) << (8 - t)
      }
      function y(t) {
        return Object(i.h)(Object(i.i)(t), 32)
      }
      function v(t) {
        return n.a.encode(Object(i.b)([t, Object(i.e)(Object(h.c)(Object(h.c)(t)), 0, 4)]))
      }
      function w(t) {
        if (null == t) return d.a.en
        if ('string' == typeof t) {
          const e = d.a[t]
          return null == e && p.throwArgumentError('unknown locale', 'wordlist', t), e
        }
        return t
      }
      const A = {},
        E = "m/44'/60'/0'/0/0"
      class O {
        constructor(t, e, r, n, o, s, a, l) {
          if (t !== A) throw new Error('HDNode constructor cannot be called directly')
          if (e) {
            const t = new c.a(e)
            Object(u.d)(this, 'privateKey', t.privateKey), Object(u.d)(this, 'publicKey', t.compressedPublicKey)
          } else Object(u.d)(this, 'privateKey', null), Object(u.d)(this, 'publicKey', Object(i.i)(r))
          Object(u.d)(this, 'parentFingerprint', n),
            Object(u.d)(this, 'fingerprint', Object(i.e)(Object(h.b)(Object(h.c)(this.publicKey)), 0, 4)),
            Object(u.d)(this, 'address', Object(f.c)(this.publicKey)),
            Object(u.d)(this, 'chainCode', o),
            Object(u.d)(this, 'index', s),
            Object(u.d)(this, 'depth', a),
            null == l
              ? (Object(u.d)(this, 'mnemonic', null), Object(u.d)(this, 'path', null))
              : 'string' == typeof l
              ? (Object(u.d)(this, 'mnemonic', null), Object(u.d)(this, 'path', l))
              : (Object(u.d)(this, 'mnemonic', l), Object(u.d)(this, 'path', l.path))
        }
        get extendedKey() {
          if (this.depth >= 256) throw new Error('Depth too large!')
          return v(
            Object(i.b)([
              null != this.privateKey ? '0x0488ADE4' : '0x0488B21E',
              Object(i.i)(this.depth),
              this.parentFingerprint,
              Object(i.h)(Object(i.i)(this.index), 4),
              this.chainCode,
              null != this.privateKey ? Object(i.b)(['0x00', this.privateKey]) : this.publicKey,
            ]),
          )
        }
        neuter() {
          return new O(
            A,
            null,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.index,
            this.depth,
            this.path,
          )
        }
        _derive(t) {
          if (t > 4294967295) throw new Error('invalid index - ' + String(t))
          let e = this.path
          e && (e += '/' + (2147483647 & t))
          const r = new Uint8Array(37)
          if (2147483648 & t) {
            if (!this.privateKey) throw new Error('cannot derive child of neutered node')
            r.set(Object(i.a)(this.privateKey), 1), e && (e += "'")
          } else r.set(Object(i.a)(this.publicKey))
          for (let e = 24; e >= 0; e -= 8) r[33 + (e >> 3)] = (t >> (24 - e)) & 255
          const n = Object(i.a)(Object(h.a)(l.a.sha512, this.chainCode, r)),
            s = n.slice(0, 32),
            a = n.slice(32)
          let u = null,
            f = null
          if (this.privateKey)
            u = y(
              o.a
                .from(s)
                .add(this.privateKey)
                .mod(m),
            )
          else {
            f = new c.a(Object(i.i)(s))._addPoint(this.publicKey)
          }
          let d = e
          const p = this.mnemonic
          return (
            p && (d = Object.freeze({ phrase: p.phrase, path: e, locale: p.locale || 'en' })),
            new O(A, u, f, this.fingerprint, y(a), t, this.depth + 1, d)
          )
        }
        derivePath(t) {
          const e = t.split('/')
          if (0 === e.length || ('m' === e[0] && 0 !== this.depth)) throw new Error('invalid path - ' + t)
          'm' === e[0] && e.shift()
          let r = this
          for (let t = 0; t < e.length; t++) {
            const n = e[t]
            if (n.match(/^[0-9]+'$/)) {
              const t = parseInt(n.substring(0, n.length - 1))
              if (t >= 2147483648) throw new Error('invalid path index - ' + n)
              r = r._derive(2147483648 + t)
            } else {
              if (!n.match(/^[0-9]+$/)) throw new Error('invalid path component - ' + n)
              {
                const t = parseInt(n)
                if (t >= 2147483648) throw new Error('invalid path index - ' + n)
                r = r._derive(t)
              }
            }
          }
          return r
        }
        static _fromSeed(t, e) {
          const r = Object(i.a)(t)
          if (r.length < 16 || r.length > 64) throw new Error('invalid seed')
          const n = Object(i.a)(Object(h.a)(l.a.sha512, g, r))
          return new O(A, y(n.slice(0, 32)), null, '0x00000000', y(n.slice(32)), 0, 0, e)
        }
        static fromMnemonic(t, e, r) {
          return (t = _(k(t, (r = w(r))), r)), O._fromSeed(M(t, e), { phrase: t, path: 'm', locale: r.locale })
        }
        static fromSeed(t) {
          return O._fromSeed(t, null)
        }
        static fromExtendedKey(t) {
          const e = n.a.decode(t)
          ;(82 === e.length && v(e.slice(0, 78)) === t) ||
            p.throwArgumentError('invalid extended key', 'extendedKey', '[REDACTED]')
          const r = e[4],
            o = Object(i.i)(e.slice(5, 9)),
            s = parseInt(Object(i.i)(e.slice(9, 13)).substring(2), 16),
            a = Object(i.i)(e.slice(13, 45)),
            u = e.slice(45, 78)
          switch (Object(i.i)(e.slice(0, 4))) {
            case '0x0488b21e':
            case '0x043587cf':
              return new O(A, null, Object(i.i)(u), o, a, s, r, null)
            case '0x0488ade4':
            case '0x04358394 ':
              if (0 !== u[0]) break
              return new O(A, Object(i.i)(u.slice(1)), null, o, a, s, r, null)
          }
          return p.throwArgumentError('invalid extended key', 'extendedKey', '[REDACTED]')
        }
      }
      function M(t, e) {
        e || (e = '')
        const r = Object(s.f)('mnemonic' + e, s.a.NFKD)
        return Object(a.a)(Object(s.f)(t, s.a.NFKD), r, 2048, 64, 'sha512')
      }
      function k(t, e) {
        ;(e = w(e)), p.checkNormalize()
        const r = e.split(t)
        if (r.length % 3 != 0) throw new Error('invalid mnemonic')
        const n = Object(i.a)(new Uint8Array(Math.ceil((11 * r.length) / 8)))
        let o = 0
        for (let t = 0; t < r.length; t++) {
          let i = e.getWordIndex(r[t].normalize('NFKD'))
          if (-1 === i) throw new Error('invalid mnemonic')
          for (let t = 0; t < 11; t++) i & (1 << (10 - t)) && (n[o >> 3] |= 1 << (7 - (o % 8))), o++
        }
        const s = (32 * r.length) / 3,
          a = b(r.length / 3)
        if ((Object(i.a)(Object(h.c)(n.slice(0, s / 8)))[0] & a) !== (n[n.length - 1] & a))
          throw new Error('invalid checksum')
        return Object(i.i)(n.slice(0, s / 8))
      }
      function _(t, e) {
        if (((e = w(e)), (t = Object(i.a)(t)).length % 4 != 0 || t.length < 16 || t.length > 32))
          throw new Error('invalid entropy')
        const r = [0]
        let n = 11
        for (let e = 0; e < t.length; e++)
          n > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= t[e]), (n -= 8))
            : ((r[r.length - 1] <<= n),
              (r[r.length - 1] |= t[e] >> (8 - n)),
              r.push(t[e] & ((1 << (8 - n)) - 1)),
              (n += 3))
        const o = t.length / 4,
          s = Object(i.a)(Object(h.c)(t))[0] & b(o)
        return (r[r.length - 1] <<= o), (r[r.length - 1] |= s >> (8 - o)), e.join(r.map(t => e.getWord(t)))
      }
      function S(t, e) {
        try {
          return k(t, e), !0
        } catch (t) {}
        return !1
      }
      function j(t) {
        return (
          ('number' != typeof t || t < 0 || t >= 2147483648 || t % 1) &&
            p.throwArgumentError('invalid account index', 'index', t),
          `m/44'/60'/${t}'/0/0`
        )
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return p
      }),
        r.d(e, 'b', function() {
          return m
        }),
        r.d(e, 'c', function() {
          return g
        })
      var n = r(61),
        i = r(0),
        o = r(1),
        s = r(16),
        a = r(2)
      var u = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      function c(t, e) {
        return u(this, void 0, void 0, function*() {
          null == e && (e = {})
          const r = { method: e.method || 'GET', headers: e.headers || {}, body: e.body || void 0 }
          if (
            (!0 !== e.skipFetchSetup &&
              ((r.mode = 'cors'),
              (r.cache = 'no-cache'),
              (r.credentials = 'same-origin'),
              (r.redirect = 'follow'),
              (r.referrer = 'client')),
            null != e.fetchOptions)
          ) {
            const t = e.fetchOptions
            t.mode && (r.mode = t.mode),
              t.cache && (r.cache = t.cache),
              t.credentials && (r.credentials = t.credentials),
              t.redirect && (r.redirect = t.redirect),
              t.referrer && (r.referrer = t.referrer)
          }
          const n = yield fetch(t, r),
            o = yield n.arrayBuffer(),
            s = {}
          return (
            n.headers.forEach
              ? n.headers.forEach((t, e) => {
                  s[e.toLowerCase()] = t
                })
              : n.headers.keys().forEach(t => {
                  s[t.toLowerCase()] = n.headers.get(t)
                }),
            { headers: s, statusCode: n.status, statusMessage: n.statusText, body: Object(i.a)(new Uint8Array(o)) }
          )
        })
      }
      var h = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const l = new a.b('web/5.7.1')
      function f(t) {
        return new Promise(e => {
          setTimeout(e, t)
        })
      }
      function d(t, e) {
        if (null == t) return null
        if ('string' == typeof t) return t
        if (Object(i.k)(t)) {
          if (e && ('text' === e.split('/')[0] || 'application/json' === e.split(';')[0].trim()))
            try {
              return Object(s.h)(t)
            } catch (t) {}
          return Object(i.i)(t)
        }
        return t
      }
      function p(t, e, r) {
        const i = 'object' == typeof t && null != t.throttleLimit ? t.throttleLimit : 12
        l.assertArgument(i > 0 && i % 1 == 0, 'invalid connection throttle limit', 'connection.throttleLimit', i)
        const u = 'object' == typeof t ? t.throttleCallback : null,
          p = 'object' == typeof t && 'number' == typeof t.throttleSlotInterval ? t.throttleSlotInterval : 100
        l.assertArgument(
          p > 0 && p % 1 == 0,
          'invalid connection throttle slot interval',
          'connection.throttleSlotInterval',
          p,
        )
        const m = 'object' == typeof t && !!t.errorPassThrough,
          g = {}
        let b = null
        const y = { method: 'GET' }
        let v = !1,
          w = 12e4
        if ('string' == typeof t) b = t
        else if ('object' == typeof t) {
          if (
            ((null != t && null != t.url) || l.throwArgumentError('missing URL', 'connection.url', t),
            (b = t.url),
            'number' == typeof t.timeout && t.timeout > 0 && (w = t.timeout),
            t.headers)
          )
            for (const e in t.headers)
              (g[e.toLowerCase()] = { key: e, value: String(t.headers[e]) }),
                ['if-none-match', 'if-modified-since'].indexOf(e.toLowerCase()) >= 0 && (v = !0)
          if (((y.allowGzip = !!t.allowGzip), null != t.user && null != t.password)) {
            'https:' !== b.substring(0, 6) &&
              !0 !== t.allowInsecureAuthentication &&
              l.throwError('basic authentication requires a secure https url', a.b.errors.INVALID_ARGUMENT, {
                argument: 'url',
                url: b,
                user: t.user,
                password: '[REDACTED]',
              })
            const e = t.user + ':' + t.password
            g.authorization = { key: 'Authorization', value: 'Basic ' + Object(n.b)(Object(s.f)(e)) }
          }
          null != t.skipFetchSetup && (y.skipFetchSetup = !!t.skipFetchSetup),
            null != t.fetchOptions && (y.fetchOptions = Object(o.g)(t.fetchOptions))
        }
        const A = new RegExp('^data:([^;:]*)?(;base64)?,(.*)$', 'i'),
          E = b ? b.match(A) : null
        if (E)
          try {
            const t = {
              statusCode: 200,
              statusMessage: 'OK',
              headers: { 'content-type': E[1] || 'text/plain' },
              body: E[2]
                ? Object(n.a)(E[3])
                : ((O = E[3]),
                  Object(s.f)(O.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))))),
            }
            let e = t.body
            return r && (e = r(t.body, t)), Promise.resolve(e)
          } catch (t) {
            l.throwError('processing response error', a.b.errors.SERVER_ERROR, {
              body: d(E[1], E[2]),
              error: t,
              requestBody: null,
              requestMethod: 'GET',
              url: b,
            })
          }
        var O
        e &&
          ((y.method = 'POST'),
          (y.body = e),
          null == g['content-type'] && (g['content-type'] = { key: 'Content-Type', value: 'application/octet-stream' }),
          null == g['content-length'] && (g['content-length'] = { key: 'Content-Length', value: String(e.length) }))
        const M = {}
        Object.keys(g).forEach(t => {
          const e = g[t]
          M[e.key] = e.value
        }),
          (y.headers = M)
        const k = (function() {
            let t = null
            return {
              promise: new Promise(function(e, r) {
                w &&
                  (t = setTimeout(() => {
                    null != t &&
                      ((t = null),
                      r(
                        l.makeError('timeout', a.b.errors.TIMEOUT, {
                          requestBody: d(y.body, M['content-type']),
                          requestMethod: y.method,
                          timeout: w,
                          url: b,
                        }),
                      ))
                  }, w))
              }),
              cancel: function() {
                null != t && (clearTimeout(t), (t = null))
              },
            }
          })(),
          _ = (function() {
            return h(this, void 0, void 0, function*() {
              for (let t = 0; t < i; t++) {
                let e = null
                try {
                  if (((e = yield c(b, y)), t < i))
                    if (301 === e.statusCode || 302 === e.statusCode) {
                      const t = e.headers.location || ''
                      if ('GET' === y.method && t.match(/^https:/)) {
                        b = e.headers.location
                        continue
                      }
                    } else if (429 === e.statusCode) {
                      let r = !0
                      if ((u && (r = yield u(t, b)), r)) {
                        let r = 0
                        const n = e.headers['retry-after']
                        ;(r =
                          'string' == typeof n && n.match(/^[1-9][0-9]*$/)
                            ? 1e3 * parseInt(n)
                            : p * parseInt(String(Math.random() * Math.pow(2, t)))),
                          yield f(r)
                        continue
                      }
                    }
                } catch (t) {
                  ;(e = t.response),
                    null == e &&
                      (k.cancel(),
                      l.throwError('missing response', a.b.errors.SERVER_ERROR, {
                        requestBody: d(y.body, M['content-type']),
                        requestMethod: y.method,
                        serverError: t,
                        url: b,
                      }))
                }
                let n = e.body
                if (
                  (v && 304 === e.statusCode
                    ? (n = null)
                    : !m &&
                      (e.statusCode < 200 || e.statusCode >= 300) &&
                      (k.cancel(),
                      l.throwError('bad response', a.b.errors.SERVER_ERROR, {
                        status: e.statusCode,
                        headers: e.headers,
                        body: d(n, e.headers ? e.headers['content-type'] : null),
                        requestBody: d(y.body, M['content-type']),
                        requestMethod: y.method,
                        url: b,
                      })),
                  r)
                )
                  try {
                    const t = yield r(n, e)
                    return k.cancel(), t
                  } catch (r) {
                    if (r.throttleRetry && t < i) {
                      let e = !0
                      if ((u && (e = yield u(t, b)), e)) {
                        const e = p * parseInt(String(Math.random() * Math.pow(2, t)))
                        yield f(e)
                        continue
                      }
                    }
                    k.cancel(),
                      l.throwError('processing response error', a.b.errors.SERVER_ERROR, {
                        body: d(n, e.headers ? e.headers['content-type'] : null),
                        error: r,
                        requestBody: d(y.body, M['content-type']),
                        requestMethod: y.method,
                        url: b,
                      })
                  }
                return k.cancel(), n
              }
              return l.throwError('failed response', a.b.errors.SERVER_ERROR, {
                requestBody: d(y.body, M['content-type']),
                requestMethod: y.method,
                url: b,
              })
            })
          })()
        return Promise.race([k.promise, _])
      }
      function m(t, e, r) {
        let n = null
        if (null != e) {
          n = Object(s.f)(e)
          const r = 'string' == typeof t ? { url: t } : Object(o.g)(t)
          if (r.headers) {
            0 !== Object.keys(r.headers).filter(t => 'content-type' === t.toLowerCase()).length ||
              ((r.headers = Object(o.g)(r.headers)), (r.headers['content-type'] = 'application/json'))
          } else r.headers = { 'content-type': 'application/json' }
          t = r
        }
        return p(t, n, (t, e) => {
          let n = null
          if (null != t)
            try {
              n = JSON.parse(Object(s.h)(t))
            } catch (e) {
              l.throwError('invalid JSON', a.b.errors.SERVER_ERROR, { body: t, error: e })
            }
          return r && (n = r(n, e)), n
        })
      }
      function g(t, e) {
        return (
          e || (e = {}),
          null == (e = Object(o.g)(e)).floor && (e.floor = 0),
          null == e.ceiling && (e.ceiling = 1e4),
          null == e.interval && (e.interval = 250),
          new Promise(function(r, n) {
            let i = null,
              o = !1
            const s = () => !o && ((o = !0), i && clearTimeout(i), !0)
            e.timeout &&
              (i = setTimeout(() => {
                s() && n(new Error('timeout'))
              }, e.timeout))
            const a = e.retryLimit
            let u = 0
            !(function i() {
              return t().then(
                function(t) {
                  if (void 0 !== t) s() && r(t)
                  else if (e.oncePoll) e.oncePoll.once('poll', i)
                  else if (e.onceBlock) e.onceBlock.once('block', i)
                  else if (!o) {
                    if ((u++, u > a)) return void (s() && n(new Error('retry limit reached')))
                    let t = e.interval * parseInt(String(Math.random() * Math.pow(2, u)))
                    t < e.floor && (t = e.floor), t > e.ceiling && (t = e.ceiling), setTimeout(i, t)
                  }
                  return null
                },
                function(t) {
                  s() && n(t)
                },
              )
            })()
          })
        )
      }
    },
    ,
    ,
    function(t, e, r) {
      var n = e
      ;(n.utils = r(24)),
        (n.common = r(41)),
        (n.sha = r(95)),
        (n.ripemd = r(99)),
        (n.hmac = r(100)),
        (n.sha1 = n.sha.sha1),
        (n.sha256 = n.sha.sha256),
        (n.sha224 = n.sha.sha224),
        (n.sha384 = n.sha.sha384),
        (n.sha512 = n.sha.sha512),
        (n.ripemd160 = n.ripemd.ripemd160)
    },
    ,
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return o
      }),
        r.d(e, 'c', function() {
          return s
        }),
        r.d(e, 'b', function() {
          return u
        }),
        r.d(e, 'f', function() {
          return h
        }),
        r.d(e, 'd', function() {
          return f
        }),
        r.d(e, 'e', function() {
          return d
        }),
        r.d(e, 'h', function() {
          return p
        }),
        r.d(e, 'g', function() {
          return m
        })
      var n = r(0)
      const i = new (r(2).b)('strings/5.7.0')
      var o, s
      function a(t, e, r, n, i) {
        if (t === s.BAD_PREFIX || t === s.UNEXPECTED_CONTINUE) {
          let t = 0
          for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++
          return t
        }
        return t === s.OVERRUN ? r.length - e - 1 : 0
      }
      !(function(t) {
        ;(t.current = ''), (t.NFC = 'NFC'), (t.NFD = 'NFD'), (t.NFKC = 'NFKC'), (t.NFKD = 'NFKD')
      })(o || (o = {})),
        (function(t) {
          ;(t.UNEXPECTED_CONTINUE = 'unexpected continuation byte'),
            (t.BAD_PREFIX = 'bad codepoint prefix'),
            (t.OVERRUN = 'string overrun'),
            (t.MISSING_CONTINUE = 'missing continuation byte'),
            (t.OUT_OF_RANGE = 'out of UTF-8 range'),
            (t.UTF16_SURROGATE = 'UTF-16 surrogate'),
            (t.OVERLONG = 'overlong representation')
        })(s || (s = {}))
      const u = Object.freeze({
        error: function(t, e, r, n, o) {
          return i.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, 'bytes', r)
        },
        ignore: a,
        replace: function(t, e, r, n, i) {
          return t === s.OVERLONG ? (n.push(i), 0) : (n.push(65533), a(t, e, r))
        },
      })
      function c(t, e) {
        null == e && (e = u.error), (t = Object(n.a)(t))
        const r = []
        let i = 0
        for (; i < t.length; ) {
          const n = t[i++]
          if (n >> 7 == 0) {
            r.push(n)
            continue
          }
          let o = null,
            a = null
          if (192 == (224 & n)) (o = 1), (a = 127)
          else if (224 == (240 & n)) (o = 2), (a = 2047)
          else {
            if (240 != (248 & n)) {
              i += e(128 == (192 & n) ? s.UNEXPECTED_CONTINUE : s.BAD_PREFIX, i - 1, t, r)
              continue
            }
            ;(o = 3), (a = 65535)
          }
          if (i - 1 + o >= t.length) {
            i += e(s.OVERRUN, i - 1, t, r)
            continue
          }
          let u = n & ((1 << (8 - o - 1)) - 1)
          for (let n = 0; n < o; n++) {
            let n = t[i]
            if (128 != (192 & n)) {
              ;(i += e(s.MISSING_CONTINUE, i, t, r)), (u = null)
              break
            }
            ;(u = (u << 6) | (63 & n)), i++
          }
          null !== u &&
            (u > 1114111
              ? (i += e(s.OUT_OF_RANGE, i - 1 - o, t, r, u))
              : u >= 55296 && u <= 57343
              ? (i += e(s.UTF16_SURROGATE, i - 1 - o, t, r, u))
              : u <= a
              ? (i += e(s.OVERLONG, i - 1 - o, t, r, u))
              : r.push(u))
        }
        return r
      }
      function h(t, e = o.current) {
        e != o.current && (i.checkNormalize(), (t = t.normalize(e)))
        let r = []
        for (let e = 0; e < t.length; e++) {
          const n = t.charCodeAt(e)
          if (n < 128) r.push(n)
          else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128)
          else if (55296 == (64512 & n)) {
            e++
            const i = t.charCodeAt(e)
            if (e >= t.length || 56320 != (64512 & i)) throw new Error('invalid utf-8 string')
            const o = 65536 + ((1023 & n) << 10) + (1023 & i)
            r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128)
          } else r.push((n >> 12) | 224), r.push(((n >> 6) & 63) | 128), r.push((63 & n) | 128)
        }
        return Object(n.a)(r)
      }
      function l(t) {
        const e = '0000' + t.toString(16)
        return '\\u' + e.substring(e.length - 4)
      }
      function f(t, e) {
        return (
          '"' +
          c(t, e)
            .map(t => {
              if (t < 256) {
                switch (t) {
                  case 8:
                    return '\\b'
                  case 9:
                    return '\\t'
                  case 10:
                    return '\\n'
                  case 13:
                    return '\\r'
                  case 34:
                    return '\\"'
                  case 92:
                    return '\\\\'
                }
                if (t >= 32 && t < 127) return String.fromCharCode(t)
              }
              return t <= 65535 ? l(t) : l(55296 + (((t -= 65536) >> 10) & 1023)) + l(56320 + (1023 & t))
            })
            .join('') +
          '"'
        )
      }
      function d(t) {
        return t
          .map(t =>
            t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536), String.fromCharCode(55296 + ((t >> 10) & 1023), 56320 + (1023 & t))),
          )
          .join('')
      }
      function p(t, e) {
        return d(c(t, e))
      }
      function m(t, e = o.current) {
        return c(h(t, e))
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return W
      }),
        r.d(e, 'c', function() {
          return Q
        }),
        r.d(e, 'b', function() {
          return Y
        })
      var n = r(3),
        i = r.n(n),
        o = r(14),
        s = r.n(o)
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self && self
      function a(t, e, r) {
        return (
          t(
            (r = {
              path: e,
              exports: {},
              require: function(t, e) {
                return (function() {
                  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs')
                })(null == e && r.path)
              },
            }),
            r.exports,
          ),
          r.exports
        )
      }
      var u = c
      function c(t, e) {
        if (!t) throw new Error(e || 'Assertion failed')
      }
      c.equal = function(t, e, r) {
        if (t != e) throw new Error(r || 'Assertion failed: ' + t + ' != ' + e)
      }
      var h = a(function(t, e) {
          var r = e
          function n(t) {
            return 1 === t.length ? '0' + t : t
          }
          function i(t) {
            for (var e = '', r = 0; r < t.length; r++) e += n(t[r].toString(16))
            return e
          }
          ;(r.toArray = function(t, e) {
            if (Array.isArray(t)) return t.slice()
            if (!t) return []
            var r = []
            if ('string' != typeof t) {
              for (var n = 0; n < t.length; n++) r[n] = 0 | t[n]
              return r
            }
            if ('hex' === e) {
              ;(t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (t = '0' + t)
              for (n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
            } else
              for (n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i
                o ? r.push(o, s) : r.push(s)
              }
            return r
          }),
            (r.zero2 = n),
            (r.toHex = i),
            (r.encode = function(t, e) {
              return 'hex' === e ? i(t) : t
            })
        }),
        l = a(function(t, e) {
          var r = e
          ;(r.assert = u),
            (r.toArray = h.toArray),
            (r.zero2 = h.zero2),
            (r.toHex = h.toHex),
            (r.encode = h.encode),
            (r.getNAF = function(t, e, r) {
              var n = new Array(Math.max(t.bitLength(), r) + 1)
              n.fill(0)
              for (var i = 1 << (e + 1), o = t.clone(), s = 0; s < n.length; s++) {
                var a,
                  u = o.andln(i - 1)
                o.isOdd() ? ((a = u > (i >> 1) - 1 ? (i >> 1) - u : u), o.isubn(a)) : (a = 0), (n[s] = a), o.iushrn(1)
              }
              return n
            }),
            (r.getJSF = function(t, e) {
              var r = [[], []]
              ;(t = t.clone()), (e = e.clone())
              for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0; ) {
                var s,
                  a,
                  u = (t.andln(3) + i) & 3,
                  c = (e.andln(3) + o) & 3
                3 === u && (u = -1),
                  3 === c && (c = -1),
                  (s = 0 == (1 & u) ? 0 : (3 !== (n = (t.andln(7) + i) & 7) && 5 !== n) || 2 !== c ? u : -u),
                  r[0].push(s),
                  (a = 0 == (1 & c) ? 0 : (3 !== (n = (e.andln(7) + o) & 7) && 5 !== n) || 2 !== u ? c : -c),
                  r[1].push(a),
                  2 * i === s + 1 && (i = 1 - i),
                  2 * o === a + 1 && (o = 1 - o),
                  t.iushrn(1),
                  e.iushrn(1)
              }
              return r
            }),
            (r.cachedProperty = function(t, e, r) {
              var n = '_' + e
              t.prototype[e] = function() {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this))
              }
            }),
            (r.parseBytes = function(t) {
              return 'string' == typeof t ? r.toArray(t, 'hex') : t
            }),
            (r.intFromLE = function(t) {
              return new i.a(t, 'hex', 'le')
            })
        }),
        f = l.getNAF,
        d = l.getJSF,
        p = l.assert
      function m(t, e) {
        ;(this.type = t),
          (this.p = new i.a(e.p, 16)),
          (this.red = e.prime ? i.a.red(e.prime) : i.a.mont(this.p)),
          (this.zero = new i.a(0).toRed(this.red)),
          (this.one = new i.a(1).toRed(this.red)),
          (this.two = new i.a(2).toRed(this.red)),
          (this.n = e.n && new i.a(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0)
        var r = this.n && this.p.div(this.n)
        !r || r.cmpn(100) > 0 ? (this.redN = null) : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)))
      }
      var g = m
      function b(t, e) {
        ;(this.curve = t), (this.type = e), (this.precomputed = null)
      }
      ;(m.prototype.point = function() {
        throw new Error('Not implemented')
      }),
        (m.prototype.validate = function() {
          throw new Error('Not implemented')
        }),
        (m.prototype._fixedNafMul = function(t, e) {
          p(t.precomputed)
          var r = t._getDoubles(),
            n = f(e, 1, this._bitLength),
            i = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1)
          i /= 3
          var o,
            s,
            a = []
          for (o = 0; o < n.length; o += r.step) {
            s = 0
            for (var u = o + r.step - 1; u >= o; u--) s = (s << 1) + n[u]
            a.push(s)
          }
          for (var c = this.jpoint(null, null, null), h = this.jpoint(null, null, null), l = i; l > 0; l--) {
            for (o = 0; o < a.length; o++)
              (s = a[o]) === l ? (h = h.mixedAdd(r.points[o])) : s === -l && (h = h.mixedAdd(r.points[o].neg()))
            c = c.add(h)
          }
          return c.toP()
        }),
        (m.prototype._wnafMul = function(t, e) {
          var r = 4,
            n = t._getNAFPoints(r)
          r = n.wnd
          for (
            var i = n.points, o = f(e, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1;
            a >= 0;
            a--
          ) {
            for (var u = 0; a >= 0 && 0 === o[a]; a--) u++
            if ((a >= 0 && u++, (s = s.dblp(u)), a < 0)) break
            var c = o[a]
            p(0 !== c),
              (s =
                'affine' === t.type
                  ? c > 0
                    ? s.mixedAdd(i[(c - 1) >> 1])
                    : s.mixedAdd(i[(-c - 1) >> 1].neg())
                  : c > 0
                  ? s.add(i[(c - 1) >> 1])
                  : s.add(i[(-c - 1) >> 1].neg()))
          }
          return 'affine' === t.type ? s.toP() : s
        }),
        (m.prototype._wnafMulAdd = function(t, e, r, n, i) {
          var o,
            s,
            a,
            u = this._wnafT1,
            c = this._wnafT2,
            h = this._wnafT3,
            l = 0
          for (o = 0; o < n; o++) {
            var p = (a = e[o])._getNAFPoints(t)
            ;(u[o] = p.wnd), (c[o] = p.points)
          }
          for (o = n - 1; o >= 1; o -= 2) {
            var m = o - 1,
              g = o
            if (1 === u[m] && 1 === u[g]) {
              var b = [e[m], null, null, e[g]]
              0 === e[m].y.cmp(e[g].y)
                ? ((b[1] = e[m].add(e[g])), (b[2] = e[m].toJ().mixedAdd(e[g].neg())))
                : 0 === e[m].y.cmp(e[g].y.redNeg())
                ? ((b[1] = e[m].toJ().mixedAdd(e[g])), (b[2] = e[m].add(e[g].neg())))
                : ((b[1] = e[m].toJ().mixedAdd(e[g])), (b[2] = e[m].toJ().mixedAdd(e[g].neg())))
              var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = d(r[m], r[g])
              for (l = Math.max(v[0].length, l), h[m] = new Array(l), h[g] = new Array(l), s = 0; s < l; s++) {
                var w = 0 | v[0][s],
                  A = 0 | v[1][s]
                ;(h[m][s] = y[3 * (w + 1) + (A + 1)]), (h[g][s] = 0), (c[m] = b)
              }
            } else
              (h[m] = f(r[m], u[m], this._bitLength)),
                (h[g] = f(r[g], u[g], this._bitLength)),
                (l = Math.max(h[m].length, l)),
                (l = Math.max(h[g].length, l))
          }
          var E = this.jpoint(null, null, null),
            O = this._wnafT4
          for (o = l; o >= 0; o--) {
            for (var M = 0; o >= 0; ) {
              var k = !0
              for (s = 0; s < n; s++) (O[s] = 0 | h[s][o]), 0 !== O[s] && (k = !1)
              if (!k) break
              M++, o--
            }
            if ((o >= 0 && M++, (E = E.dblp(M)), o < 0)) break
            for (s = 0; s < n; s++) {
              var _ = O[s]
              0 !== _ &&
                (_ > 0 ? (a = c[s][(_ - 1) >> 1]) : _ < 0 && (a = c[s][(-_ - 1) >> 1].neg()),
                (E = 'affine' === a.type ? E.mixedAdd(a) : E.add(a)))
            }
          }
          for (o = 0; o < n; o++) c[o] = null
          return i ? E : E.toP()
        }),
        (m.BasePoint = b),
        (b.prototype.eq = function() {
          throw new Error('Not implemented')
        }),
        (b.prototype.validate = function() {
          return this.curve.validate(this)
        }),
        (m.prototype.decodePoint = function(t, e) {
          t = l.toArray(t, e)
          var r = this.p.byteLength()
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
            return (
              6 === t[0] ? p(t[t.length - 1] % 2 == 0) : 7 === t[0] && p(t[t.length - 1] % 2 == 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            )
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0])
          throw new Error('Unknown point format')
        }),
        (b.prototype.encodeCompressed = function(t) {
          return this.encode(t, !0)
        }),
        (b.prototype._encode = function(t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray('be', e)
          return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray('be', e))
        }),
        (b.prototype.encode = function(t, e) {
          return l.encode(this._encode(e), t)
        }),
        (b.prototype.precompute = function(t) {
          if (this.precomputed) return this
          var e = { doubles: null, naf: null, beta: null }
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          )
        }),
        (b.prototype._hasDoubles = function(t) {
          if (!this.precomputed) return !1
          var e = this.precomputed.doubles
          return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
        }),
        (b.prototype._getDoubles = function(t, e) {
          if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles
          for (var r = [this], n = this, i = 0; i < e; i += t) {
            for (var o = 0; o < t; o++) n = n.dbl()
            r.push(n)
          }
          return { step: t, points: r }
        }),
        (b.prototype._getNAFPoints = function(t) {
          if (this.precomputed && this.precomputed.naf) return this.precomputed.naf
          for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
            e[i] = e[i - 1].add(n)
          return { wnd: t, points: e }
        }),
        (b.prototype._getBeta = function() {
          return null
        }),
        (b.prototype.dblp = function(t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl()
          return e
        })
      var y = a(function(t) {
          'function' == typeof Object.create
            ? (t.exports = function(t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                  })))
              })
            : (t.exports = function(t, e) {
                if (e) {
                  t.super_ = e
                  var r = function() {}
                  ;(r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t)
                }
              })
        }),
        v = l.assert
      function w(t) {
        g.call(this, 'short', t),
          (this.a = new i.a(t.a, 16).toRed(this.red)),
          (this.b = new i.a(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA =
            0 ===
            this.a
              .fromRed()
              .sub(this.p)
              .cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4))
      }
      y(w, g)
      var A = w
      function E(t, e, r, n) {
        g.BasePoint.call(this, t, 'affine'),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new i.a(e, 16)),
              (this.y = new i.a(r, 16)),
              n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1))
      }
      function O(t, e, r, n) {
        g.BasePoint.call(this, t, 'jacobian'),
          null === e && null === r && null === n
            ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new i.a(0)))
            : ((this.x = new i.a(e, 16)), (this.y = new i.a(r, 16)), (this.z = new i.a(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one)
      }
      ;(w.prototype._getEndomorphism = function(t) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var e, r
          if (t.beta) e = new i.a(t.beta, 16).toRed(this.red)
          else {
            var n = this._getEndoRoots(this.p)
            e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
          }
          if (t.lambda) r = new i.a(t.lambda, 16)
          else {
            var o = this._getEndoRoots(this.n)
            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))
              ? (r = o[0])
              : ((r = o[1]), v(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
          }
          return {
            beta: e,
            lambda: r,
            basis: t.basis
              ? t.basis.map(function(t) {
                  return { a: new i.a(t.a, 16), b: new i.a(t.b, 16) }
                })
              : this._getEndoBasis(r),
          }
        }
      }),
        (w.prototype._getEndoRoots = function(t) {
          var e = t === this.p ? this.red : i.a.mont(t),
            r = new i.a(2).toRed(e).redInvm(),
            n = r.redNeg(),
            o = new i.a(3)
              .toRed(e)
              .redNeg()
              .redSqrt()
              .redMul(r)
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
        }),
        (w.prototype._getEndoBasis = function(t) {
          for (
            var e,
              r,
              n,
              o,
              s,
              a,
              u,
              c,
              h,
              l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              f = t,
              d = this.n.clone(),
              p = new i.a(1),
              m = new i.a(0),
              g = new i.a(0),
              b = new i.a(1),
              y = 0;
            0 !== f.cmpn(0);

          ) {
            var v = d.div(f)
            ;(c = d.sub(v.mul(f))), (h = g.sub(v.mul(p)))
            var w = b.sub(v.mul(m))
            if (!n && c.cmp(l) < 0) (e = u.neg()), (r = p), (n = c.neg()), (o = h)
            else if (n && 2 == ++y) break
            ;(u = c), (d = f), (f = c), (g = p), (p = h), (b = m), (m = w)
          }
          ;(s = c.neg()), (a = h)
          var A = n.sqr().add(o.sqr())
          return (
            s
              .sqr()
              .add(a.sqr())
              .cmp(A) >= 0 && ((s = e), (a = r)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            s.negative && ((s = s.neg()), (a = a.neg())),
            [
              { a: n, b: o },
              { a: s, b: a },
            ]
          )
        }),
        (w.prototype._endoSplit = function(t) {
          var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            o = r.b
              .neg()
              .mul(t)
              .divRound(this.n),
            s = i.mul(r.a),
            a = o.mul(n.a),
            u = i.mul(r.b),
            c = o.mul(n.b)
          return { k1: t.sub(s).sub(a), k2: u.add(c).neg() }
        }),
        (w.prototype.pointFromX = function(t, e) {
          ;(t = new i.a(t, 16)).red || (t = t.toRed(this.red))
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt()
          if (
            0 !==
            n
              .redSqr()
              .redSub(r)
              .cmp(this.zero)
          )
            throw new Error('invalid point')
          var o = n.fromRed().isOdd()
          return ((e && !o) || (!e && o)) && (n = n.redNeg()), this.point(t, n)
        }),
        (w.prototype.validate = function(t) {
          if (t.inf) return !0
          var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e
              .redSqr()
              .redMul(e)
              .redIAdd(n)
              .redIAdd(this.b)
          return (
            0 ===
            r
              .redSqr()
              .redISub(i)
              .cmpn(0)
          )
        }),
        (w.prototype._endoWnafMulAdd = function(t, e, r) {
          for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
            var s = this._endoSplit(e[o]),
              a = t[o],
              u = a._getBeta()
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (u = u.neg(!0))),
              (n[2 * o] = a),
              (n[2 * o + 1] = u),
              (i[2 * o] = s.k1),
              (i[2 * o + 1] = s.k2)
          }
          for (var c = this._wnafMulAdd(1, n, i, 2 * o, r), h = 0; h < 2 * o; h++) (n[h] = null), (i[h] = null)
          return c
        }),
        y(E, g.BasePoint),
        (w.prototype.point = function(t, e, r) {
          return new E(this, t, e, r)
        }),
        (w.prototype.pointFromJSON = function(t, e) {
          return E.fromJSON(this, t, e)
        }),
        (E.prototype._getBeta = function() {
          if (this.curve.endo) {
            var t = this.precomputed
            if (t && t.beta) return t.beta
            var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y)
            if (t) {
              var r = this.curve,
                n = function(t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y)
                }
              ;(t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n) },
                })
            }
            return e
          }
        }),
        (E.prototype.toJSON = function() {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y]
        }),
        (E.fromJSON = function(t, e, r) {
          'string' == typeof e && (e = JSON.parse(e))
          var n = t.point(e[0], e[1], r)
          if (!e[2]) return n
          function i(e) {
            return t.point(e[0], e[1], r)
          }
          var o = e[2]
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && { step: o.doubles.step, points: [n].concat(o.doubles.points.map(i)) },
              naf: o.naf && { wnd: o.naf.wnd, points: [n].concat(o.naf.points.map(i)) },
            }),
            n
          )
        }),
        (E.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>'
        }),
        (E.prototype.isInfinity = function() {
          return this.inf
        }),
        (E.prototype.add = function(t) {
          if (this.inf) return t
          if (t.inf) return this
          if (this.eq(t)) return this.dbl()
          if (this.neg().eq(t)) return this.curve.point(null, null)
          if (0 === this.x.cmp(t.x)) return this.curve.point(null, null)
          var e = this.y.redSub(t.y)
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()))
          var r = e
              .redSqr()
              .redISub(this.x)
              .redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y)
          return this.curve.point(r, n)
        }),
        (E.prototype.dbl = function() {
          if (this.inf) return this
          var t = this.y.redAdd(this.y)
          if (0 === t.cmpn(0)) return this.curve.point(null, null)
          var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r
              .redAdd(r)
              .redIAdd(r)
              .redIAdd(e)
              .redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y)
          return this.curve.point(o, s)
        }),
        (E.prototype.getX = function() {
          return this.x.fromRed()
        }),
        (E.prototype.getY = function() {
          return this.y.fromRed()
        }),
        (E.prototype.mul = function(t) {
          return (
            (t = new i.a(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          )
        }),
        (E.prototype.mulAdd = function(t, e, r) {
          var n = [this, e],
            i = [t, r]
          return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
        }),
        (E.prototype.jmulAdd = function(t, e, r) {
          var n = [this, e],
            i = [t, r]
          return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
        }),
        (E.prototype.eq = function(t) {
          return this === t || (this.inf === t.inf && (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
        }),
        (E.prototype.neg = function(t) {
          if (this.inf) return this
          var e = this.curve.point(this.x, this.y.redNeg())
          if (t && this.precomputed) {
            var r = this.precomputed,
              n = function(t) {
                return t.neg()
              }
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(n) },
            }
          }
          return e
        }),
        (E.prototype.toJ = function() {
          return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }),
        y(O, g.BasePoint),
        (w.prototype.jpoint = function(t, e, r) {
          return new O(this, t, e, r)
        }),
        (O.prototype.toP = function() {
          if (this.isInfinity()) return this.curve.point(null, null)
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t)
          return this.curve.point(r, n)
        }),
        (O.prototype.neg = function() {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }),
        (O.prototype.add = function(t) {
          if (this.isInfinity()) return t
          if (t.isInfinity()) return this
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            s = t.y.redMul(r.redMul(this.z)),
            a = n.redSub(i),
            u = o.redSub(s)
          if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl()
          var c = a.redSqr(),
            h = c.redMul(a),
            l = n.redMul(c),
            f = u
              .redSqr()
              .redIAdd(h)
              .redISub(l)
              .redISub(l),
            d = u.redMul(l.redISub(f)).redISub(o.redMul(h)),
            p = this.z.redMul(t.z).redMul(a)
          return this.curve.jpoint(f, d, p)
        }),
        (O.prototype.mixedAdd = function(t) {
          if (this.isInfinity()) return t.toJ()
          if (t.isInfinity()) return this
          var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            o = t.y.redMul(e).redMul(this.z),
            s = r.redSub(n),
            a = i.redSub(o)
          if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl()
          var u = s.redSqr(),
            c = u.redMul(s),
            h = r.redMul(u),
            l = a
              .redSqr()
              .redIAdd(c)
              .redISub(h)
              .redISub(h),
            f = a.redMul(h.redISub(l)).redISub(i.redMul(c)),
            d = this.z.redMul(s)
          return this.curve.jpoint(l, f, d)
        }),
        (O.prototype.dblp = function(t) {
          if (0 === t) return this
          if (this.isInfinity()) return this
          if (!t) return this.dbl()
          var e
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this
            for (e = 0; e < t; e++) r = r.dbl()
            return r
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            u = a.redSqr().redSqr(),
            c = s.redAdd(s)
          for (e = 0; e < t; e++) {
            var h = o.redSqr(),
              l = c.redSqr(),
              f = l.redSqr(),
              d = h
                .redAdd(h)
                .redIAdd(h)
                .redIAdd(n.redMul(u)),
              p = o.redMul(l),
              m = d.redSqr().redISub(p.redAdd(p)),
              g = p.redISub(m),
              b = d.redMul(g)
            b = b.redIAdd(b).redISub(f)
            var y = c.redMul(a)
            e + 1 < t && (u = u.redMul(f)), (o = m), (a = y), (c = b)
          }
          return this.curve.jpoint(o, c.redMul(i), a)
        }),
        (O.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl()
        }),
        (O.prototype._zeroDbl = function() {
          var t, e, r
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x
                .redAdd(i)
                .redSqr()
                .redISub(n)
                .redISub(o)
            s = s.redIAdd(s)
            var a = n.redAdd(n).redIAdd(n),
              u = a
                .redSqr()
                .redISub(s)
                .redISub(s),
              c = o.redIAdd(o)
            ;(c = (c = c.redIAdd(c)).redIAdd(c)),
              (t = u),
              (e = a.redMul(s.redISub(u)).redISub(c)),
              (r = this.y.redAdd(this.y))
          } else {
            var h = this.x.redSqr(),
              l = this.y.redSqr(),
              f = l.redSqr(),
              d = this.x
                .redAdd(l)
                .redSqr()
                .redISub(h)
                .redISub(f)
            d = d.redIAdd(d)
            var p = h.redAdd(h).redIAdd(h),
              m = p.redSqr(),
              g = f.redIAdd(f)
            ;(g = (g = g.redIAdd(g)).redIAdd(g)),
              (t = m.redISub(d).redISub(d)),
              (e = p.redMul(d.redISub(t)).redISub(g)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r))
          }
          return this.curve.jpoint(t, e, r)
        }),
        (O.prototype._threeDbl = function() {
          var t, e, r
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x
                .redAdd(i)
                .redSqr()
                .redISub(n)
                .redISub(o)
            s = s.redIAdd(s)
            var a = n
                .redAdd(n)
                .redIAdd(n)
                .redIAdd(this.curve.a),
              u = a
                .redSqr()
                .redISub(s)
                .redISub(s)
            t = u
            var c = o.redIAdd(o)
            ;(c = (c = c.redIAdd(c)).redIAdd(c)), (e = a.redMul(s.redISub(u)).redISub(c)), (r = this.y.redAdd(this.y))
          } else {
            var h = this.z.redSqr(),
              l = this.y.redSqr(),
              f = this.x.redMul(l),
              d = this.x.redSub(h).redMul(this.x.redAdd(h))
            d = d.redAdd(d).redIAdd(d)
            var p = f.redIAdd(f),
              m = (p = p.redIAdd(p)).redAdd(p)
            ;(t = d.redSqr().redISub(m)),
              (r = this.y
                .redAdd(this.z)
                .redSqr()
                .redISub(l)
                .redISub(h))
            var g = l.redSqr()
            ;(g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)), (e = d.redMul(p.redISub(t)).redISub(g))
          }
          return this.curve.jpoint(t, e, r)
        }),
        (O.prototype._dbl = function() {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = e.redSqr(),
            s = r.redSqr(),
            a = o
              .redAdd(o)
              .redIAdd(o)
              .redIAdd(t.redMul(i)),
            u = e.redAdd(e),
            c = (u = u.redIAdd(u)).redMul(s),
            h = a.redSqr().redISub(c.redAdd(c)),
            l = c.redISub(h),
            f = s.redSqr()
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f)
          var d = a.redMul(l).redISub(f),
            p = r.redAdd(r).redMul(n)
          return this.curve.jpoint(h, d, p)
        }),
        (O.prototype.trpl = function() {
          if (!this.curve.zeroA) return this.dbl().add(this)
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(),
            s = this.x
              .redAdd(e)
              .redSqr()
              .redISub(t)
              .redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
            u = n.redIAdd(n)
          u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u)
          var c = i
              .redIAdd(s)
              .redSqr()
              .redISub(o)
              .redISub(a)
              .redISub(u),
            h = e.redMul(c)
          h = (h = h.redIAdd(h)).redIAdd(h)
          var l = this.x.redMul(a).redISub(h)
          l = (l = l.redIAdd(l)).redIAdd(l)
          var f = this.y.redMul(c.redMul(u.redISub(c)).redISub(s.redMul(a)))
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f)
          var d = this.z
            .redAdd(s)
            .redSqr()
            .redISub(r)
            .redISub(a)
          return this.curve.jpoint(l, f, d)
        }),
        (O.prototype.mul = function(t, e) {
          return (t = new i.a(t, e)), this.curve._wnafMul(this, t)
        }),
        (O.prototype.eq = function(t) {
          if ('affine' === t.type) return this.eq(t.toJ())
          if (this === t) return !0
          var e = this.z.redSqr(),
            r = t.z.redSqr()
          if (
            0 !==
            this.x
              .redMul(r)
              .redISub(t.x.redMul(e))
              .cmpn(0)
          )
            return !1
          var n = e.redMul(this.z),
            i = r.redMul(t.z)
          return (
            0 ===
            this.y
              .redMul(i)
              .redISub(t.y.redMul(n))
              .cmpn(0)
          )
        }),
        (O.prototype.eqXToP = function(t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e)
          if (0 === this.x.cmp(r)) return !0
          for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0
          }
        }),
        (O.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC JPoint Infinity>'
            : '<EC JPoint x: ' +
                this.x.toString(16, 2) +
                ' y: ' +
                this.y.toString(16, 2) +
                ' z: ' +
                this.z.toString(16, 2) +
                '>'
        }),
        (O.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0)
        })
      var M = a(function(t, e) {
          var r = e
          ;(r.base = g), (r.short = A), (r.mont = null), (r.edwards = null)
        }),
        k = a(function(t, e) {
          var r,
            n = e,
            i = l.assert
          function o(t) {
            'short' === t.type
              ? (this.curve = new M.short(t))
              : 'edwards' === t.type
              ? (this.curve = new M.edwards(t))
              : (this.curve = new M.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              i(this.g.validate(), 'Invalid curve'),
              i(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O')
          }
          function a(t, e) {
            Object.defineProperty(n, t, {
              configurable: !0,
              enumerable: !0,
              get: function() {
                var r = new o(e)
                return Object.defineProperty(n, t, { configurable: !0, enumerable: !0, value: r }), r
              },
            })
          }
          ;(n.PresetCurve = o),
            a('p192', {
              type: 'short',
              prime: 'p192',
              p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
              a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
              b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
              n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
              hash: s.a.sha256,
              gRed: !1,
              g: [
                '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
                '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
              ],
            }),
            a('p224', {
              type: 'short',
              prime: 'p224',
              p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
              a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
              b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
              n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
              hash: s.a.sha256,
              gRed: !1,
              g: [
                'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
                'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
              ],
            }),
            a('p256', {
              type: 'short',
              prime: null,
              p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
              a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
              b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
              n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
              hash: s.a.sha256,
              gRed: !1,
              g: [
                '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
                '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
              ],
            }),
            a('p384', {
              type: 'short',
              prime: null,
              p:
                'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
              a:
                'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
              b:
                'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
              n:
                'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
              hash: s.a.sha384,
              gRed: !1,
              g: [
                'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
                '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
              ],
            }),
            a('p521', {
              type: 'short',
              prime: null,
              p:
                '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
              a:
                '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
              b:
                '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
              n:
                '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
              hash: s.a.sha512,
              gRed: !1,
              g: [
                '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
                '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650',
              ],
            }),
            a('curve25519', {
              type: 'mont',
              prime: 'p25519',
              p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
              a: '76d06',
              b: '1',
              n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
              hash: s.a.sha256,
              gRed: !1,
              g: ['9'],
            }),
            a('ed25519', {
              type: 'edwards',
              prime: 'p25519',
              p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
              a: '-1',
              c: '1',
              d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
              n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
              hash: s.a.sha256,
              gRed: !1,
              g: [
                '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
                '6666666666666666666666666666666666666666666666666666666666666658',
              ],
            })
          try {
            r = null.crash()
          } catch (t) {
            r = void 0
          }
          a('secp256k1', {
            type: 'short',
            prime: 'k256',
            p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
            a: '0',
            b: '7',
            n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
            h: '1',
            hash: s.a.sha256,
            beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
            lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
            basis: [
              { a: '3086d221a7d46bcde86c90e49284eb15', b: '-e4437ed6010e88286f547fa90abfe4c3' },
              { a: '114ca50f7a8e2f3f657c1108d9d44cfd8', b: '3086d221a7d46bcde86c90e49284eb15' },
            ],
            gRed: !1,
            g: [
              '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
              '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
              r,
            ],
          })
        })
      function _(t) {
        if (!(this instanceof _)) return new _(t)
        ;(this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null)
        var e = h.toArray(t.entropy, t.entropyEnc || 'hex'),
          r = h.toArray(t.nonce, t.nonceEnc || 'hex'),
          n = h.toArray(t.pers, t.persEnc || 'hex')
        u(e.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'),
          this._init(e, r, n)
      }
      var S = _
      ;(_.prototype._init = function(t, e, r) {
        var n = t.concat(e).concat(r)
        ;(this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8))
        for (var i = 0; i < this.V.length; i++) (this.K[i] = 0), (this.V[i] = 1)
        this._update(n), (this._reseed = 1), (this.reseedInterval = 281474976710656)
      }),
        (_.prototype._hmac = function() {
          return new s.a.hmac(this.hash, this.K)
        }),
        (_.prototype._update = function(t) {
          var e = this._hmac()
            .update(this.V)
            .update([0])
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac()
                .update(this.V)
                .digest()))
        }),
        (_.prototype.reseed = function(t, e, r, n) {
          'string' != typeof e && ((n = r), (r = e), (e = null)),
            (t = h.toArray(t, e)),
            (r = h.toArray(r, n)),
            u(t.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'),
            this._update(t.concat(r || [])),
            (this._reseed = 1)
        }),
        (_.prototype.generate = function(t, e, r, n) {
          if (this._reseed > this.reseedInterval) throw new Error('Reseed is required')
          'string' != typeof e && ((n = r), (r = e), (e = null)), r && ((r = h.toArray(r, n || 'hex')), this._update(r))
          for (var i = []; i.length < t; )
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
              (i = i.concat(this.V))
          var o = i.slice(0, t)
          return this._update(r), this._reseed++, h.encode(o, e)
        })
      var j = l.assert
      function N(t, e) {
        ;(this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc)
      }
      var P = N
      ;(N.fromPublic = function(t, e, r) {
        return e instanceof N ? e : new N(t, { pub: e, pubEnc: r })
      }),
        (N.fromPrivate = function(t, e, r) {
          return e instanceof N ? e : new N(t, { priv: e, privEnc: r })
        }),
        (N.prototype.validate = function() {
          var t = this.getPublic()
          return t.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: 'Public key * N != O' }
            : { result: !1, reason: 'Public key is not a point' }
        }),
        (N.prototype.getPublic = function(t, e) {
          return (
            'string' == typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          )
        }),
        (N.prototype.getPrivate = function(t) {
          return 'hex' === t ? this.priv.toString(16, 2) : this.priv
        }),
        (N.prototype._importPrivate = function(t, e) {
          ;(this.priv = new i.a(t, e || 16)), (this.priv = this.priv.umod(this.ec.curve.n))
        }),
        (N.prototype._importPublic = function(t, e) {
          if (t.x || t.y)
            return (
              'mont' === this.ec.curve.type
                ? j(t.x, 'Need x coordinate')
                : ('short' !== this.ec.curve.type && 'edwards' !== this.ec.curve.type) ||
                  j(t.x && t.y, 'Need both x and y coordinate'),
              void (this.pub = this.ec.curve.point(t.x, t.y))
            )
          this.pub = this.ec.curve.decodePoint(t, e)
        }),
        (N.prototype.derive = function(t) {
          return t.validate() || j(t.validate(), 'public point not validated'), t.mul(this.priv).getX()
        }),
        (N.prototype.sign = function(t, e, r) {
          return this.ec.sign(t, this, e, r)
        }),
        (N.prototype.verify = function(t, e) {
          return this.ec.verify(t, e, this)
        }),
        (N.prototype.inspect = function() {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          )
        })
      var x = l.assert
      function C(t, e) {
        if (t instanceof C) return t
        this._importDER(t, e) ||
          (x(t.r && t.s, 'Signature without r or s'),
          (this.r = new i.a(t.r, 16)),
          (this.s = new i.a(t.s, 16)),
          void 0 === t.recoveryParam ? (this.recoveryParam = null) : (this.recoveryParam = t.recoveryParam))
      }
      var T = C
      function R() {
        this.place = 0
      }
      function I(t, e) {
        var r = t[e.place++]
        if (!(128 & r)) return r
        var n = 15 & r
        if (0 === n || n > 4) return !1
        for (var i = 0, o = 0, s = e.place; o < n; o++, s++) (i <<= 8), (i |= t[s]), (i >>>= 0)
        return !(i <= 127) && ((e.place = s), i)
      }
      function B(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; ) e++
        return 0 === e ? t : t.slice(e)
      }
      function F(t, e) {
        if (e < 128) t.push(e)
        else {
          var r = 1 + ((Math.log(e) / Math.LN2) >>> 3)
          for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255)
          t.push(e)
        }
      }
      ;(C.prototype._importDER = function(t, e) {
        t = l.toArray(t, e)
        var r = new R()
        if (48 !== t[r.place++]) return !1
        var n = I(t, r)
        if (!1 === n) return !1
        if (n + r.place !== t.length) return !1
        if (2 !== t[r.place++]) return !1
        var o = I(t, r)
        if (!1 === o) return !1
        var s = t.slice(r.place, o + r.place)
        if (((r.place += o), 2 !== t[r.place++])) return !1
        var a = I(t, r)
        if (!1 === a) return !1
        if (t.length !== a + r.place) return !1
        var u = t.slice(r.place, a + r.place)
        if (0 === s[0]) {
          if (!(128 & s[1])) return !1
          s = s.slice(1)
        }
        if (0 === u[0]) {
          if (!(128 & u[1])) return !1
          u = u.slice(1)
        }
        return (this.r = new i.a(s)), (this.s = new i.a(u)), (this.recoveryParam = null), !0
      }),
        (C.prototype.toDER = function(t) {
          var e = this.r.toArray(),
            r = this.s.toArray()
          for (
            128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = B(e), r = B(r);
            !(r[0] || 128 & r[1]);

          )
            r = r.slice(1)
          var n = [2]
          F(n, e.length), (n = n.concat(e)).push(2), F(n, r.length)
          var i = n.concat(r),
            o = [48]
          return F(o, i.length), (o = o.concat(i)), l.encode(o, t)
        })
      var D = function() {
          throw new Error('unsupported')
        },
        L = l.assert
      function U(t) {
        if (!(this instanceof U)) return new U(t)
        'string' == typeof t && (L(Object.prototype.hasOwnProperty.call(k, t), 'Unknown curve ' + t), (t = k[t])),
          t instanceof k.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash)
      }
      var G = U
      ;(U.prototype.keyPair = function(t) {
        return new P(this, t)
      }),
        (U.prototype.keyFromPrivate = function(t, e) {
          return P.fromPrivate(this, t, e)
        }),
        (U.prototype.keyFromPublic = function(t, e) {
          return P.fromPublic(this, t, e)
        }),
        (U.prototype.genKeyPair = function(t) {
          t || (t = {})
          for (
            var e = new S({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || 'utf8',
                entropy: t.entropy || D(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || 'utf8',
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              n = this.n.sub(new i.a(2));
            ;

          ) {
            var o = new i.a(e.generate(r))
            if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
          }
        }),
        (U.prototype._truncateToN = function(t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength()
          return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
        }),
        (U.prototype.sign = function(t, e, r, n) {
          'object' == typeof r && ((n = r), (r = null)),
            n || (n = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new i.a(t, 16)))
          for (
            var o = this.n.byteLength(),
              s = e.getPrivate().toArray('be', o),
              a = t.toArray('be', o),
              u = new S({ hash: this.hash, entropy: s, nonce: a, pers: n.pers, persEnc: n.persEnc || 'utf8' }),
              c = this.n.sub(new i.a(1)),
              h = 0;
            ;
            h++
          ) {
            var l = n.k ? n.k(h) : new i.a(u.generate(this.n.byteLength()))
            if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(c) >= 0)) {
              var f = this.g.mul(l)
              if (!f.isInfinity()) {
                var d = f.getX(),
                  p = d.umod(this.n)
                if (0 !== p.cmpn(0)) {
                  var m = l.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t))
                  if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                    var g = (f.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0)
                    return (
                      n.canonical && m.cmp(this.nh) > 0 && ((m = this.n.sub(m)), (g ^= 1)),
                      new T({ r: p, s: m, recoveryParam: g })
                    )
                  }
                }
              }
            }
          }
        }),
        (U.prototype.verify = function(t, e, r, n) {
          ;(t = this._truncateToN(new i.a(t, 16))), (r = this.keyFromPublic(r, n))
          var o = (e = new T(e, 'hex')).r,
            s = e.s
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1
          var a,
            u = s.invm(this.n),
            c = u.mul(t).umod(this.n),
            h = u.mul(o).umod(this.n)
          return this.curve._maxwellTrick
            ? !(a = this.g.jmulAdd(c, r.getPublic(), h)).isInfinity() && a.eqXToP(o)
            : !(a = this.g.mulAdd(c, r.getPublic(), h)).isInfinity() &&
                0 ===
                  a
                    .getX()
                    .umod(this.n)
                    .cmp(o)
        }),
        (U.prototype.recoverPubKey = function(t, e, r, n) {
          L((3 & r) === r, 'The recovery param is more than two bits'), (e = new T(e, n))
          var o = this.n,
            s = new i.a(t),
            a = e.r,
            u = e.s,
            c = 1 & r,
            h = r >> 1
          if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h) throw new Error('Unable to find sencond key candinate')
          a = h ? this.curve.pointFromX(a.add(this.curve.n), c) : this.curve.pointFromX(a, c)
          var l = e.r.invm(o),
            f = o
              .sub(s)
              .mul(l)
              .umod(o),
            d = u.mul(l).umod(o)
          return this.g.mulAdd(f, a, d)
        }),
        (U.prototype.getKeyRecoveryParam = function(t, e, r, n) {
          if (null !== (e = new T(e, n)).recoveryParam) return e.recoveryParam
          for (var i = 0; i < 4; i++) {
            var o
            try {
              o = this.recoverPubKey(t, e, i)
            } catch (t) {
              continue
            }
            if (o.eq(r)) return i
          }
          throw new Error('Unable to find valid recovery factor')
        })
      var z = a(function(t, e) {
          var r = e
          ;(r.version = '6.5.4'),
            (r.utils = l),
            (r.rand = function() {
              throw new Error('unsupported')
            }),
            (r.curve = M),
            (r.curves = k),
            (r.ec = G),
            (r.eddsa = null)
        }).ec,
        q = r(0),
        K = r(1)
      const H = new (r(2).b)('signing-key/5.7.0')
      let J = null
      function V() {
        return J || (J = new z('secp256k1')), J
      }
      class W {
        constructor(t) {
          Object(K.d)(this, 'curve', 'secp256k1'),
            Object(K.d)(this, 'privateKey', Object(q.i)(t)),
            32 !== Object(q.d)(this.privateKey) &&
              H.throwArgumentError('invalid private key', 'privateKey', '[[ REDACTED ]]')
          const e = V().keyFromPrivate(Object(q.a)(this.privateKey))
          Object(K.d)(this, 'publicKey', '0x' + e.getPublic(!1, 'hex')),
            Object(K.d)(this, 'compressedPublicKey', '0x' + e.getPublic(!0, 'hex')),
            Object(K.d)(this, '_isSigningKey', !0)
        }
        _addPoint(t) {
          const e = V().keyFromPublic(Object(q.a)(this.publicKey)),
            r = V().keyFromPublic(Object(q.a)(t))
          return '0x' + e.pub.add(r.pub).encodeCompressed('hex')
        }
        signDigest(t) {
          const e = V().keyFromPrivate(Object(q.a)(this.privateKey)),
            r = Object(q.a)(t)
          32 !== r.length && H.throwArgumentError('bad digest length', 'digest', t)
          const n = e.sign(r, { canonical: !0 })
          return Object(q.n)({
            recoveryParam: n.recoveryParam,
            r: Object(q.h)('0x' + n.r.toString(16), 32),
            s: Object(q.h)('0x' + n.s.toString(16), 32),
          })
        }
        computeSharedSecret(t) {
          const e = V().keyFromPrivate(Object(q.a)(this.privateKey)),
            r = V().keyFromPublic(Object(q.a)(Y(t)))
          return Object(q.h)('0x' + e.derive(r.getPublic()).toString(16), 32)
        }
        static isSigningKey(t) {
          return !(!t || !t._isSigningKey)
        }
      }
      function Q(t, e) {
        const r = Object(q.n)(e),
          n = { r: Object(q.a)(r.r), s: Object(q.a)(r.s) }
        return (
          '0x' +
          V()
            .recoverPubKey(Object(q.a)(t), n, r.recoveryParam)
            .encode('hex', !1)
        )
      }
      function Y(t, e) {
        const r = Object(q.a)(t)
        if (32 === r.length) {
          const t = new W(r)
          return e
            ? '0x' +
                V()
                  .keyFromPrivate(r)
                  .getPublic(!0, 'hex')
            : t.publicKey
        }
        return 33 === r.length
          ? e
            ? Object(q.i)(r)
            : '0x' +
              V()
                .keyFromPublic(r)
                .getPublic(!1, 'hex')
          : 65 === r.length
          ? e
            ? '0x' +
              V()
                .keyFromPublic(r)
                .getPublic(!0, 'hex')
            : Object(q.i)(r)
          : H.throwArgumentError('invalid public or private key', 'key', '[REDACTED]')
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'd', function() {
        return d
      }),
        r.d(e, 'g', function() {
          return m
        }),
        r.d(e, 'e', function() {
          return b
        }),
        r.d(e, 'c', function() {
          return y
        }),
        r.d(e, 'a', function() {
          return E
        }),
        r.d(e, 'f', function() {
          return O
        }),
        r.d(e, 'b', function() {
          return k
        })
      var n = r(7),
        i = r(1),
        o = r(2),
        s = r(25)
      const a = new o.b(s.a),
        u = {}
      let c = { calldata: !0, memory: !0, storage: !0 },
        h = { calldata: !0, memory: !0 }
      function l(t, e) {
        if ('bytes' === t || 'string' === t) {
          if (c[e]) return !0
        } else if ('address' === t) {
          if ('payable' === e) return !0
        } else if ((t.indexOf('[') >= 0 || 'tuple' === t) && h[e]) return !0
        return (c[e] || 'payable' === e) && a.throwArgumentError('invalid modifier', 'name', e), !1
      }
      function f(t, e) {
        for (let r in e) Object(i.d)(t, r, e[r])
      }
      const d = Object.freeze({ sighash: 'sighash', minimal: 'minimal', full: 'full', json: 'json' }),
        p = new RegExp(/^(.*)\[([0-9]*)\]$/)
      class m {
        constructor(t, e) {
          t !== u && a.throwError('use fromString', o.b.errors.UNSUPPORTED_OPERATION, { operation: 'new ParamType()' }),
            f(this, e)
          let r = this.type.match(p)
          f(
            this,
            r
              ? {
                  arrayLength: parseInt(r[2] || '-1'),
                  arrayChildren: m.fromObject({ type: r[1], components: this.components }),
                  baseType: 'array',
                }
              : { arrayLength: null, arrayChildren: null, baseType: null != this.components ? 'tuple' : this.type },
          ),
            (this._isParamType = !0),
            Object.freeze(this)
        }
        format(t) {
          if ((t || (t = d.sighash), d[t] || a.throwArgumentError('invalid format type', 'format', t), t === d.json)) {
            let e = { type: 'tuple' === this.baseType ? 'tuple' : this.type, name: this.name || void 0 }
            return (
              'boolean' == typeof this.indexed && (e.indexed = this.indexed),
              this.components && (e.components = this.components.map(e => JSON.parse(e.format(t)))),
              JSON.stringify(e)
            )
          }
          let e = ''
          return (
            'array' === this.baseType
              ? ((e += this.arrayChildren.format(t)),
                (e += '[' + (this.arrayLength < 0 ? '' : String(this.arrayLength)) + ']'))
              : 'tuple' === this.baseType
              ? (t !== d.sighash && (e += this.type),
                (e += '(' + this.components.map(e => e.format(t)).join(t === d.full ? ', ' : ',') + ')'))
              : (e += this.type),
            t !== d.sighash &&
              (!0 === this.indexed && (e += ' indexed'), t === d.full && this.name && (e += ' ' + this.name)),
            e
          )
        }
        static from(t, e) {
          return 'string' == typeof t ? m.fromString(t, e) : m.fromObject(t)
        }
        static fromObject(t) {
          return m.isParamType(t)
            ? t
            : new m(u, {
                name: t.name || null,
                type: _(t.type),
                indexed: null == t.indexed ? null : !!t.indexed,
                components: t.components ? t.components.map(m.fromObject) : null,
              })
        }
        static fromString(t, e) {
          return (function(t) {
            return m.fromObject({ name: t.name, type: t.type, indexed: t.indexed, components: t.components })
          })(
            (function(t, e) {
              let r = t
              function n(e) {
                a.throwArgumentError('unexpected character at position ' + e, 'param', t)
              }
              function i(t) {
                let r = { type: '', name: '', parent: t, state: { allowType: !0 } }
                return e && (r.indexed = !1), r
              }
              t = t.replace(/\s/g, ' ')
              let o = { type: '', name: '', state: { allowType: !0 } },
                s = o
              for (let r = 0; r < t.length; r++) {
                let o = t[r]
                switch (o) {
                  case '(':
                    s.state.allowType && '' === s.type ? (s.type = 'tuple') : s.state.allowParams || n(r),
                      (s.state.allowType = !1),
                      (s.type = _(s.type)),
                      (s.components = [i(s)]),
                      (s = s.components[0])
                    break
                  case ')':
                    delete s.state,
                      'indexed' === s.name && (e || n(r), (s.indexed = !0), (s.name = '')),
                      l(s.type, s.name) && (s.name = ''),
                      (s.type = _(s.type))
                    let t = s
                    ;(s = s.parent),
                      s || n(r),
                      delete t.parent,
                      (s.state.allowParams = !1),
                      (s.state.allowName = !0),
                      (s.state.allowArray = !0)
                    break
                  case ',':
                    delete s.state,
                      'indexed' === s.name && (e || n(r), (s.indexed = !0), (s.name = '')),
                      l(s.type, s.name) && (s.name = ''),
                      (s.type = _(s.type))
                    let a = i(s.parent)
                    s.parent.components.push(a), delete s.parent, (s = a)
                    break
                  case ' ':
                    s.state.allowType &&
                      '' !== s.type &&
                      ((s.type = _(s.type)),
                      delete s.state.allowType,
                      (s.state.allowName = !0),
                      (s.state.allowParams = !0)),
                      s.state.allowName &&
                        '' !== s.name &&
                        ('indexed' === s.name
                          ? (e || n(r), s.indexed && n(r), (s.indexed = !0), (s.name = ''))
                          : l(s.type, s.name)
                          ? (s.name = '')
                          : (s.state.allowName = !1))
                    break
                  case '[':
                    s.state.allowArray || n(r),
                      (s.type += o),
                      (s.state.allowArray = !1),
                      (s.state.allowName = !1),
                      (s.state.readArray = !0)
                    break
                  case ']':
                    s.state.readArray || n(r),
                      (s.type += o),
                      (s.state.readArray = !1),
                      (s.state.allowArray = !0),
                      (s.state.allowName = !0)
                    break
                  default:
                    s.state.allowType
                      ? ((s.type += o), (s.state.allowParams = !0), (s.state.allowArray = !0))
                      : s.state.allowName
                      ? ((s.name += o), delete s.state.allowArray)
                      : s.state.readArray
                      ? (s.type += o)
                      : n(r)
                }
              }
              return (
                s.parent && a.throwArgumentError('unexpected eof', 'param', t),
                delete o.state,
                'indexed' === s.name
                  ? (e || n(r.length - 7), s.indexed && n(r.length - 7), (s.indexed = !0), (s.name = ''))
                  : l(s.type, s.name) && (s.name = ''),
                (o.type = _(o.type)),
                o
              )
            })(t, !!e),
          )
        }
        static isParamType(t) {
          return !(null == t || !t._isParamType)
        }
      }
      function g(t, e) {
        return (function(t) {
          t = t.trim()
          let e = [],
            r = '',
            n = 0
          for (let i = 0; i < t.length; i++) {
            let o = t[i]
            ',' === o && 0 === n
              ? (e.push(r), (r = ''))
              : ((r += o),
                '(' === o
                  ? n++
                  : ')' === o && (n--, -1 === n && a.throwArgumentError('unbalanced parenthesis', 'value', t)))
          }
          r && e.push(r)
          return e
        })(t).map(t => m.fromString(t, e))
      }
      class b {
        constructor(t, e) {
          t !== u &&
            a.throwError('use a static from method', o.b.errors.UNSUPPORTED_OPERATION, { operation: 'new Fragment()' }),
            f(this, e),
            (this._isFragment = !0),
            Object.freeze(this)
        }
        static from(t) {
          return b.isFragment(t) ? t : 'string' == typeof t ? b.fromString(t) : b.fromObject(t)
        }
        static fromObject(t) {
          if (b.isFragment(t)) return t
          switch (t.type) {
            case 'function':
              return O.fromObject(t)
            case 'event':
              return y.fromObject(t)
            case 'constructor':
              return E.fromObject(t)
            case 'error':
              return k.fromObject(t)
            case 'fallback':
            case 'receive':
              return null
          }
          return a.throwArgumentError('invalid fragment object', 'value', t)
        }
        static fromString(t) {
          return 'event' ===
            (t = (t = (t = t.replace(/\s/g, ' '))
              .replace(/\(/g, ' (')
              .replace(/\)/g, ') ')
              .replace(/\s+/g, ' ')).trim()).split(' ')[0]
            ? y.fromString(t.substring(5).trim())
            : 'function' === t.split(' ')[0]
            ? O.fromString(t.substring(8).trim())
            : 'constructor' === t.split('(')[0].trim()
            ? E.fromString(t.trim())
            : 'error' === t.split(' ')[0]
            ? k.fromString(t.substring(5).trim())
            : a.throwArgumentError('unsupported fragment', 'value', t)
        }
        static isFragment(t) {
          return !(!t || !t._isFragment)
        }
      }
      class y extends b {
        format(t) {
          if ((t || (t = d.sighash), d[t] || a.throwArgumentError('invalid format type', 'format', t), t === d.json))
            return JSON.stringify({
              type: 'event',
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map(e => JSON.parse(e.format(t))),
            })
          let e = ''
          return (
            t !== d.sighash && (e += 'event '),
            (e += this.name + '(' + this.inputs.map(e => e.format(t)).join(t === d.full ? ', ' : ',') + ') '),
            t !== d.sighash && this.anonymous && (e += 'anonymous '),
            e.trim()
          )
        }
        static from(t) {
          return 'string' == typeof t ? y.fromString(t) : y.fromObject(t)
        }
        static fromObject(t) {
          if (y.isEventFragment(t)) return t
          'event' !== t.type && a.throwArgumentError('invalid event object', 'value', t)
          const e = {
            name: j(t.name),
            anonymous: t.anonymous,
            inputs: t.inputs ? t.inputs.map(m.fromObject) : [],
            type: 'event',
          }
          return new y(u, e)
        }
        static fromString(t) {
          let e = t.match(N)
          e || a.throwArgumentError('invalid event string', 'value', t)
          let r = !1
          return (
            e[3].split(' ').forEach(t => {
              switch (t.trim()) {
                case 'anonymous':
                  r = !0
                  break
                case '':
                  break
                default:
                  a.warn('unknown modifier: ' + t)
              }
            }),
            y.fromObject({ name: e[1].trim(), anonymous: r, inputs: g(e[2], !0), type: 'event' })
          )
        }
        static isEventFragment(t) {
          return t && t._isFragment && 'event' === t.type
        }
      }
      function v(t, e) {
        e.gas = null
        let r = t.split('@')
        return 1 !== r.length
          ? (r.length > 2 && a.throwArgumentError('invalid human-readable ABI signature', 'value', t),
            r[1].match(/^[0-9]+$/) || a.throwArgumentError('invalid human-readable ABI signature gas', 'value', t),
            (e.gas = n.a.from(r[1])),
            r[0])
          : t
      }
      function w(t, e) {
        ;(e.constant = !1),
          (e.payable = !1),
          (e.stateMutability = 'nonpayable'),
          t.split(' ').forEach(t => {
            switch (t.trim()) {
              case 'constant':
                e.constant = !0
                break
              case 'payable':
                ;(e.payable = !0), (e.stateMutability = 'payable')
                break
              case 'nonpayable':
                ;(e.payable = !1), (e.stateMutability = 'nonpayable')
                break
              case 'pure':
                ;(e.constant = !0), (e.stateMutability = 'pure')
                break
              case 'view':
                ;(e.constant = !0), (e.stateMutability = 'view')
                break
              case 'external':
              case 'public':
              case '':
                break
              default:
                console.log('unknown modifier: ' + t)
            }
          })
      }
      function A(t) {
        let e = { constant: !1, payable: !0, stateMutability: 'payable' }
        return (
          null != t.stateMutability
            ? ((e.stateMutability = t.stateMutability),
              (e.constant = 'view' === e.stateMutability || 'pure' === e.stateMutability),
              null != t.constant &&
                !!t.constant !== e.constant &&
                a.throwArgumentError('cannot have constant function with mutability ' + e.stateMutability, 'value', t),
              (e.payable = 'payable' === e.stateMutability),
              null != t.payable &&
                !!t.payable !== e.payable &&
                a.throwArgumentError('cannot have payable function with mutability ' + e.stateMutability, 'value', t))
            : null != t.payable
            ? ((e.payable = !!t.payable),
              null != t.constant ||
                e.payable ||
                'constructor' === t.type ||
                a.throwArgumentError('unable to determine stateMutability', 'value', t),
              (e.constant = !!t.constant),
              e.constant ? (e.stateMutability = 'view') : (e.stateMutability = e.payable ? 'payable' : 'nonpayable'),
              e.payable && e.constant && a.throwArgumentError('cannot have constant payable function', 'value', t))
            : null != t.constant
            ? ((e.constant = !!t.constant),
              (e.payable = !e.constant),
              (e.stateMutability = e.constant ? 'view' : 'payable'))
            : 'constructor' !== t.type && a.throwArgumentError('unable to determine stateMutability', 'value', t),
          e
        )
      }
      class E extends b {
        format(t) {
          if ((t || (t = d.sighash), d[t] || a.throwArgumentError('invalid format type', 'format', t), t === d.json))
            return JSON.stringify({
              type: 'constructor',
              stateMutability: 'nonpayable' !== this.stateMutability ? this.stateMutability : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map(e => JSON.parse(e.format(t))),
            })
          t === d.sighash &&
            a.throwError('cannot format a constructor for sighash', o.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'format(sighash)',
            })
          let e = 'constructor(' + this.inputs.map(e => e.format(t)).join(t === d.full ? ', ' : ',') + ') '
          return (
            this.stateMutability && 'nonpayable' !== this.stateMutability && (e += this.stateMutability + ' '), e.trim()
          )
        }
        static from(t) {
          return 'string' == typeof t ? E.fromString(t) : E.fromObject(t)
        }
        static fromObject(t) {
          if (E.isConstructorFragment(t)) return t
          'constructor' !== t.type && a.throwArgumentError('invalid constructor object', 'value', t)
          let e = A(t)
          e.constant && a.throwArgumentError('constructor cannot be constant', 'value', t)
          const r = {
            name: null,
            type: t.type,
            inputs: t.inputs ? t.inputs.map(m.fromObject) : [],
            payable: e.payable,
            stateMutability: e.stateMutability,
            gas: t.gas ? n.a.from(t.gas) : null,
          }
          return new E(u, r)
        }
        static fromString(t) {
          let e = { type: 'constructor' },
            r = (t = v(t, e)).match(N)
          return (
            (r && 'constructor' === r[1].trim()) || a.throwArgumentError('invalid constructor string', 'value', t),
            (e.inputs = g(r[2].trim(), !1)),
            w(r[3].trim(), e),
            E.fromObject(e)
          )
        }
        static isConstructorFragment(t) {
          return t && t._isFragment && 'constructor' === t.type
        }
      }
      class O extends E {
        format(t) {
          if ((t || (t = d.sighash), d[t] || a.throwArgumentError('invalid format type', 'format', t), t === d.json))
            return JSON.stringify({
              type: 'function',
              name: this.name,
              constant: this.constant,
              stateMutability: 'nonpayable' !== this.stateMutability ? this.stateMutability : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map(e => JSON.parse(e.format(t))),
              outputs: this.outputs.map(e => JSON.parse(e.format(t))),
            })
          let e = ''
          return (
            t !== d.sighash && (e += 'function '),
            (e += this.name + '(' + this.inputs.map(e => e.format(t)).join(t === d.full ? ', ' : ',') + ') '),
            t !== d.sighash &&
              (this.stateMutability
                ? 'nonpayable' !== this.stateMutability && (e += this.stateMutability + ' ')
                : this.constant && (e += 'view '),
              this.outputs &&
                this.outputs.length &&
                (e += 'returns (' + this.outputs.map(e => e.format(t)).join(', ') + ') '),
              null != this.gas && (e += '@' + this.gas.toString() + ' ')),
            e.trim()
          )
        }
        static from(t) {
          return 'string' == typeof t ? O.fromString(t) : O.fromObject(t)
        }
        static fromObject(t) {
          if (O.isFunctionFragment(t)) return t
          'function' !== t.type && a.throwArgumentError('invalid function object', 'value', t)
          let e = A(t)
          const r = {
            type: t.type,
            name: j(t.name),
            constant: e.constant,
            inputs: t.inputs ? t.inputs.map(m.fromObject) : [],
            outputs: t.outputs ? t.outputs.map(m.fromObject) : [],
            payable: e.payable,
            stateMutability: e.stateMutability,
            gas: t.gas ? n.a.from(t.gas) : null,
          }
          return new O(u, r)
        }
        static fromString(t) {
          let e = { type: 'function' },
            r = (t = v(t, e)).split(' returns ')
          r.length > 2 && a.throwArgumentError('invalid function string', 'value', t)
          let n = r[0].match(N)
          if (
            (n || a.throwArgumentError('invalid function signature', 'value', t),
            (e.name = n[1].trim()),
            e.name && j(e.name),
            (e.inputs = g(n[2], !1)),
            w(n[3].trim(), e),
            r.length > 1)
          ) {
            let n = r[1].match(N)
            ;('' == n[1].trim() && '' == n[3].trim()) || a.throwArgumentError('unexpected tokens', 'value', t),
              (e.outputs = g(n[2], !1))
          } else e.outputs = []
          return O.fromObject(e)
        }
        static isFunctionFragment(t) {
          return t && t._isFragment && 'function' === t.type
        }
      }
      function M(t) {
        const e = t.format()
        return (
          ('Error(string)' !== e && 'Panic(uint256)' !== e) ||
            a.throwArgumentError(`cannot specify user defined ${e} error`, 'fragment', t),
          t
        )
      }
      class k extends b {
        format(t) {
          if ((t || (t = d.sighash), d[t] || a.throwArgumentError('invalid format type', 'format', t), t === d.json))
            return JSON.stringify({
              type: 'error',
              name: this.name,
              inputs: this.inputs.map(e => JSON.parse(e.format(t))),
            })
          let e = ''
          return (
            t !== d.sighash && (e += 'error '),
            (e += this.name + '(' + this.inputs.map(e => e.format(t)).join(t === d.full ? ', ' : ',') + ') '),
            e.trim()
          )
        }
        static from(t) {
          return 'string' == typeof t ? k.fromString(t) : k.fromObject(t)
        }
        static fromObject(t) {
          if (k.isErrorFragment(t)) return t
          'error' !== t.type && a.throwArgumentError('invalid error object', 'value', t)
          const e = { type: t.type, name: j(t.name), inputs: t.inputs ? t.inputs.map(m.fromObject) : [] }
          return M(new k(u, e))
        }
        static fromString(t) {
          let e = { type: 'error' },
            r = t.match(N)
          return (
            r || a.throwArgumentError('invalid error signature', 'value', t),
            (e.name = r[1].trim()),
            e.name && j(e.name),
            (e.inputs = g(r[2], !1)),
            M(k.fromObject(e))
          )
        }
        static isErrorFragment(t) {
          return t && t._isFragment && 'error' === t.type
        }
      }
      function _(t) {
        return (
          t.match(/^uint($|[^1-9])/)
            ? (t = 'uint256' + t.substring(4))
            : t.match(/^int($|[^1-9])/) && (t = 'int256' + t.substring(3)),
          t
        )
      }
      const S = new RegExp('^[a-zA-Z$_][a-zA-Z0-9$_]*$')
      function j(t) {
        return (t && t.match(S)) || a.throwArgumentError(`invalid identifier "${t}"`, 'value', t), t
      }
      const N = new RegExp('^([^)(]*)\\((.*)\\)([^)(]*)$')
    },
    ,
    function(t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, 'encode', function() {
          return u
        }),
        r.d(e, 'decode', function() {
          return l
        })
      var n = r(0),
        i = r(2)
      const o = new i.b('rlp/5.7.0')
      function s(t) {
        const e = []
        for (; t; ) e.unshift(255 & t), (t >>= 8)
        return e
      }
      function a(t, e, r) {
        let n = 0
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i]
        return n
      }
      function u(t) {
        return Object(n.i)(
          (function t(e) {
            if (Array.isArray(e)) {
              let r = []
              if (
                (e.forEach(function(e) {
                  r = r.concat(t(e))
                }),
                r.length <= 55)
              )
                return r.unshift(192 + r.length), r
              const n = s(r.length)
              return n.unshift(247 + n.length), n.concat(r)
            }
            Object(n.k)(e) || o.throwArgumentError('RLP object must be BytesLike', 'object', e)
            const r = Array.prototype.slice.call(Object(n.a)(e))
            if (1 === r.length && r[0] <= 127) return r
            if (r.length <= 55) return r.unshift(128 + r.length), r
            const i = s(r.length)
            return i.unshift(183 + i.length), i.concat(r)
          })(t),
        )
      }
      function c(t, e, r, n) {
        const s = []
        for (; r < e + 1 + n; ) {
          const a = h(t, r)
          s.push(a.result),
            (r += a.consumed) > e + 1 + n && o.throwError('child data too short', i.b.errors.BUFFER_OVERRUN, {})
        }
        return { consumed: 1 + n, result: s }
      }
      function h(t, e) {
        if ((0 === t.length && o.throwError('data too short', i.b.errors.BUFFER_OVERRUN, {}), t[e] >= 248)) {
          const r = t[e] - 247
          e + 1 + r > t.length && o.throwError('data short segment too short', i.b.errors.BUFFER_OVERRUN, {})
          const n = a(t, e + 1, r)
          return (
            e + 1 + r + n > t.length && o.throwError('data long segment too short', i.b.errors.BUFFER_OVERRUN, {}),
            c(t, e, e + 1 + r, r + n)
          )
        }
        if (t[e] >= 192) {
          const r = t[e] - 192
          return (
            e + 1 + r > t.length && o.throwError('data array too short', i.b.errors.BUFFER_OVERRUN, {}),
            c(t, e, e + 1, r)
          )
        }
        if (t[e] >= 184) {
          const r = t[e] - 183
          e + 1 + r > t.length && o.throwError('data array too short', i.b.errors.BUFFER_OVERRUN, {})
          const s = a(t, e + 1, r)
          e + 1 + r + s > t.length && o.throwError('data array too short', i.b.errors.BUFFER_OVERRUN, {})
          return { consumed: 1 + r + s, result: Object(n.i)(t.slice(e + 1 + r, e + 1 + r + s)) }
        }
        if (t[e] >= 128) {
          const r = t[e] - 128
          e + 1 + r > t.length && o.throwError('data too short', i.b.errors.BUFFER_OVERRUN, {})
          return { consumed: 1 + r, result: Object(n.i)(t.slice(e + 1, e + 1 + r)) }
        }
        return { consumed: 1, result: Object(n.i)(t[e]) }
      }
      function l(t) {
        const e = Object(n.a)(t),
          r = h(e, 0)
        return r.consumed !== e.length && o.throwArgumentError('invalid rlp data', 'data', t), r.result
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return c
      }),
        r.d(e, 'b', function() {
          return h
        })
      var n = r(1),
        i = r(2)
      var o = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const s = new i.b('abstract-signer/5.7.0'),
        a = [
          'accessList',
          'ccipReadEnabled',
          'chainId',
          'customData',
          'data',
          'from',
          'gasLimit',
          'gasPrice',
          'maxFeePerGas',
          'maxPriorityFeePerGas',
          'nonce',
          'to',
          'type',
          'value',
        ],
        u = [i.b.errors.INSUFFICIENT_FUNDS, i.b.errors.NONCE_EXPIRED, i.b.errors.REPLACEMENT_UNDERPRICED]
      class c {
        constructor() {
          s.checkAbstract(new.target, c), Object(n.d)(this, '_isSigner', !0)
        }
        getBalance(t) {
          return o(this, void 0, void 0, function*() {
            return this._checkProvider('getBalance'), yield this.provider.getBalance(this.getAddress(), t)
          })
        }
        getTransactionCount(t) {
          return o(this, void 0, void 0, function*() {
            return (
              this._checkProvider('getTransactionCount'), yield this.provider.getTransactionCount(this.getAddress(), t)
            )
          })
        }
        estimateGas(t) {
          return o(this, void 0, void 0, function*() {
            this._checkProvider('estimateGas')
            const e = yield Object(n.f)(this.checkTransaction(t))
            return yield this.provider.estimateGas(e)
          })
        }
        call(t, e) {
          return o(this, void 0, void 0, function*() {
            this._checkProvider('call')
            const r = yield Object(n.f)(this.checkTransaction(t))
            return yield this.provider.call(r, e)
          })
        }
        sendTransaction(t) {
          return o(this, void 0, void 0, function*() {
            this._checkProvider('sendTransaction')
            const e = yield this.populateTransaction(t),
              r = yield this.signTransaction(e)
            return yield this.provider.sendTransaction(r)
          })
        }
        getChainId() {
          return o(this, void 0, void 0, function*() {
            this._checkProvider('getChainId')
            return (yield this.provider.getNetwork()).chainId
          })
        }
        getGasPrice() {
          return o(this, void 0, void 0, function*() {
            return this._checkProvider('getGasPrice'), yield this.provider.getGasPrice()
          })
        }
        getFeeData() {
          return o(this, void 0, void 0, function*() {
            return this._checkProvider('getFeeData'), yield this.provider.getFeeData()
          })
        }
        resolveName(t) {
          return o(this, void 0, void 0, function*() {
            return this._checkProvider('resolveName'), yield this.provider.resolveName(t)
          })
        }
        checkTransaction(t) {
          for (const e in t)
            -1 === a.indexOf(e) && s.throwArgumentError('invalid transaction key: ' + e, 'transaction', t)
          const e = Object(n.g)(t)
          return (
            null == e.from
              ? (e.from = this.getAddress())
              : (e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(
                  e => (
                    e[0].toLowerCase() !== e[1].toLowerCase() &&
                      s.throwArgumentError('from address mismatch', 'transaction', t),
                    e[0]
                  ),
                )),
            e
          )
        }
        populateTransaction(t) {
          return o(this, void 0, void 0, function*() {
            const e = yield Object(n.f)(this.checkTransaction(t))
            null != e.to &&
              ((e.to = Promise.resolve(e.to).then(t =>
                o(this, void 0, void 0, function*() {
                  if (null == t) return null
                  const e = yield this.resolveName(t)
                  return null == e && s.throwArgumentError('provided ENS name resolves to null', 'tx.to', t), e
                }),
              )),
              e.to.catch(t => {}))
            const r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas
            if (
              (null == e.gasPrice || (2 !== e.type && !r)
                ? (0 !== e.type && 1 !== e.type) ||
                  !r ||
                  s.throwArgumentError(
                    'pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas',
                    'transaction',
                    t,
                  )
                : s.throwArgumentError('eip-1559 transaction do not support gasPrice', 'transaction', t),
              (2 !== e.type && null != e.type) || null == e.maxFeePerGas || null == e.maxPriorityFeePerGas)
            )
              if (0 === e.type || 1 === e.type) null == e.gasPrice && (e.gasPrice = this.getGasPrice())
              else {
                const t = yield this.getFeeData()
                if (null == e.type)
                  if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                    if (((e.type = 2), null != e.gasPrice)) {
                      const t = e.gasPrice
                      delete e.gasPrice, (e.maxFeePerGas = t), (e.maxPriorityFeePerGas = t)
                    } else
                      null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                        null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas)
                  else
                    null != t.gasPrice
                      ? (r &&
                          s.throwError('network does not support EIP-1559', i.b.errors.UNSUPPORTED_OPERATION, {
                            operation: 'populateTransaction',
                          }),
                        null == e.gasPrice && (e.gasPrice = t.gasPrice),
                        (e.type = 0))
                      : s.throwError('failed to get consistent fee data', i.b.errors.UNSUPPORTED_OPERATION, {
                          operation: 'signer.getFeeData',
                        })
                else
                  2 === e.type &&
                    (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                    null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
              }
            else e.type = 2
            return (
              null == e.nonce && (e.nonce = this.getTransactionCount('pending')),
              null == e.gasLimit &&
                (e.gasLimit = this.estimateGas(e).catch(t => {
                  if (u.indexOf(t.code) >= 0) throw t
                  return s.throwError(
                    'cannot estimate gas; transaction may fail or may require manual gas limit',
                    i.b.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: t, tx: e },
                  )
                })),
              null == e.chainId
                ? (e.chainId = this.getChainId())
                : (e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(
                    e => (
                      0 !== e[1] && e[0] !== e[1] && s.throwArgumentError('chainId address mismatch', 'transaction', t),
                      e[0]
                    ),
                  )),
              yield Object(n.f)(e)
            )
          })
        }
        _checkProvider(t) {
          this.provider ||
            s.throwError('missing provider', i.b.errors.UNSUPPORTED_OPERATION, { operation: t || '_checkProvider' })
        }
        static isSigner(t) {
          return !(!t || !t._isSigner)
        }
      }
      class h extends c {
        constructor(t, e) {
          super(), Object(n.d)(this, 'address', t), Object(n.d)(this, 'provider', e || null)
        }
        getAddress() {
          return Promise.resolve(this.address)
        }
        _fail(t, e) {
          return Promise.resolve().then(() => {
            s.throwError(t, i.b.errors.UNSUPPORTED_OPERATION, { operation: e })
          })
        }
        signMessage(t) {
          return this._fail('VoidSigner cannot sign messages', 'signMessage')
        }
        signTransaction(t) {
          return this._fail('VoidSigner cannot sign transactions', 'signTransaction')
        }
        _signTypedData(t, e, r) {
          return this._fail('VoidSigner cannot sign typed data', 'signTypedData')
        }
        connect(t) {
          return new h(this.address, t)
        }
      }
    },
    function(t, e, r) {
      'use strict'
      !(function(e) {
        function r(t) {
          return parseInt(t) === t
        }
        function n(t) {
          if (!r(t.length)) return !1
          for (var e = 0; e < t.length; e++) if (!r(t[e]) || t[e] < 0 || t[e] > 255) return !1
          return !0
        }
        function i(t, e) {
          if (t.buffer && ArrayBuffer.isView(t) && 'Uint8Array' === t.name)
            return e && (t = t.slice ? t.slice() : Array.prototype.slice.call(t)), t
          if (Array.isArray(t)) {
            if (!n(t)) throw new Error('Array contains invalid value: ' + t)
            return new Uint8Array(t)
          }
          if (r(t.length) && n(t)) return new Uint8Array(t)
          throw new Error('unsupported array-like object')
        }
        function o(t) {
          return new Uint8Array(t)
        }
        function s(t, e, r, n, i) {
          ;(null == n && null == i) || (t = t.slice ? t.slice(n, i) : Array.prototype.slice.call(t, n, i)), e.set(t, r)
        }
        var a,
          u = {
            toBytes: function(t) {
              var e = [],
                r = 0
              for (t = encodeURI(t); r < t.length; ) {
                var n = t.charCodeAt(r++)
                37 === n ? (e.push(parseInt(t.substr(r, 2), 16)), (r += 2)) : e.push(n)
              }
              return i(e)
            },
            fromBytes: function(t) {
              for (var e = [], r = 0; r < t.length; ) {
                var n = t[r]
                n < 128
                  ? (e.push(String.fromCharCode(n)), r++)
                  : n > 191 && n < 224
                  ? (e.push(String.fromCharCode(((31 & n) << 6) | (63 & t[r + 1]))), (r += 2))
                  : (e.push(String.fromCharCode(((15 & n) << 12) | ((63 & t[r + 1]) << 6) | (63 & t[r + 2]))), (r += 3))
              }
              return e.join('')
            },
          },
          c =
            ((a = '0123456789abcdef'),
            {
              toBytes: function(t) {
                for (var e = [], r = 0; r < t.length; r += 2) e.push(parseInt(t.substr(r, 2), 16))
                return e
              },
              fromBytes: function(t) {
                for (var e = [], r = 0; r < t.length; r++) {
                  var n = t[r]
                  e.push(a[(240 & n) >> 4] + a[15 & n])
                }
                return e.join('')
              },
            }),
          h = { 16: 10, 24: 12, 32: 14 },
          l = [
            1,
            2,
            4,
            8,
            16,
            32,
            64,
            128,
            27,
            54,
            108,
            216,
            171,
            77,
            154,
            47,
            94,
            188,
            99,
            198,
            151,
            53,
            106,
            212,
            179,
            125,
            250,
            239,
            197,
            145,
          ],
          f = [
            99,
            124,
            119,
            123,
            242,
            107,
            111,
            197,
            48,
            1,
            103,
            43,
            254,
            215,
            171,
            118,
            202,
            130,
            201,
            125,
            250,
            89,
            71,
            240,
            173,
            212,
            162,
            175,
            156,
            164,
            114,
            192,
            183,
            253,
            147,
            38,
            54,
            63,
            247,
            204,
            52,
            165,
            229,
            241,
            113,
            216,
            49,
            21,
            4,
            199,
            35,
            195,
            24,
            150,
            5,
            154,
            7,
            18,
            128,
            226,
            235,
            39,
            178,
            117,
            9,
            131,
            44,
            26,
            27,
            110,
            90,
            160,
            82,
            59,
            214,
            179,
            41,
            227,
            47,
            132,
            83,
            209,
            0,
            237,
            32,
            252,
            177,
            91,
            106,
            203,
            190,
            57,
            74,
            76,
            88,
            207,
            208,
            239,
            170,
            251,
            67,
            77,
            51,
            133,
            69,
            249,
            2,
            127,
            80,
            60,
            159,
            168,
            81,
            163,
            64,
            143,
            146,
            157,
            56,
            245,
            188,
            182,
            218,
            33,
            16,
            255,
            243,
            210,
            205,
            12,
            19,
            236,
            95,
            151,
            68,
            23,
            196,
            167,
            126,
            61,
            100,
            93,
            25,
            115,
            96,
            129,
            79,
            220,
            34,
            42,
            144,
            136,
            70,
            238,
            184,
            20,
            222,
            94,
            11,
            219,
            224,
            50,
            58,
            10,
            73,
            6,
            36,
            92,
            194,
            211,
            172,
            98,
            145,
            149,
            228,
            121,
            231,
            200,
            55,
            109,
            141,
            213,
            78,
            169,
            108,
            86,
            244,
            234,
            101,
            122,
            174,
            8,
            186,
            120,
            37,
            46,
            28,
            166,
            180,
            198,
            232,
            221,
            116,
            31,
            75,
            189,
            139,
            138,
            112,
            62,
            181,
            102,
            72,
            3,
            246,
            14,
            97,
            53,
            87,
            185,
            134,
            193,
            29,
            158,
            225,
            248,
            152,
            17,
            105,
            217,
            142,
            148,
            155,
            30,
            135,
            233,
            206,
            85,
            40,
            223,
            140,
            161,
            137,
            13,
            191,
            230,
            66,
            104,
            65,
            153,
            45,
            15,
            176,
            84,
            187,
            22,
          ],
          d = [
            82,
            9,
            106,
            213,
            48,
            54,
            165,
            56,
            191,
            64,
            163,
            158,
            129,
            243,
            215,
            251,
            124,
            227,
            57,
            130,
            155,
            47,
            255,
            135,
            52,
            142,
            67,
            68,
            196,
            222,
            233,
            203,
            84,
            123,
            148,
            50,
            166,
            194,
            35,
            61,
            238,
            76,
            149,
            11,
            66,
            250,
            195,
            78,
            8,
            46,
            161,
            102,
            40,
            217,
            36,
            178,
            118,
            91,
            162,
            73,
            109,
            139,
            209,
            37,
            114,
            248,
            246,
            100,
            134,
            104,
            152,
            22,
            212,
            164,
            92,
            204,
            93,
            101,
            182,
            146,
            108,
            112,
            72,
            80,
            253,
            237,
            185,
            218,
            94,
            21,
            70,
            87,
            167,
            141,
            157,
            132,
            144,
            216,
            171,
            0,
            140,
            188,
            211,
            10,
            247,
            228,
            88,
            5,
            184,
            179,
            69,
            6,
            208,
            44,
            30,
            143,
            202,
            63,
            15,
            2,
            193,
            175,
            189,
            3,
            1,
            19,
            138,
            107,
            58,
            145,
            17,
            65,
            79,
            103,
            220,
            234,
            151,
            242,
            207,
            206,
            240,
            180,
            230,
            115,
            150,
            172,
            116,
            34,
            231,
            173,
            53,
            133,
            226,
            249,
            55,
            232,
            28,
            117,
            223,
            110,
            71,
            241,
            26,
            113,
            29,
            41,
            197,
            137,
            111,
            183,
            98,
            14,
            170,
            24,
            190,
            27,
            252,
            86,
            62,
            75,
            198,
            210,
            121,
            32,
            154,
            219,
            192,
            254,
            120,
            205,
            90,
            244,
            31,
            221,
            168,
            51,
            136,
            7,
            199,
            49,
            177,
            18,
            16,
            89,
            39,
            128,
            236,
            95,
            96,
            81,
            127,
            169,
            25,
            181,
            74,
            13,
            45,
            229,
            122,
            159,
            147,
            201,
            156,
            239,
            160,
            224,
            59,
            77,
            174,
            42,
            245,
            176,
            200,
            235,
            187,
            60,
            131,
            83,
            153,
            97,
            23,
            43,
            4,
            126,
            186,
            119,
            214,
            38,
            225,
            105,
            20,
            99,
            85,
            33,
            12,
            125,
          ],
          p = [
            3328402341,
            4168907908,
            4000806809,
            4135287693,
            4294111757,
            3597364157,
            3731845041,
            2445657428,
            1613770832,
            33620227,
            3462883241,
            1445669757,
            3892248089,
            3050821474,
            1303096294,
            3967186586,
            2412431941,
            528646813,
            2311702848,
            4202528135,
            4026202645,
            2992200171,
            2387036105,
            4226871307,
            1101901292,
            3017069671,
            1604494077,
            1169141738,
            597466303,
            1403299063,
            3832705686,
            2613100635,
            1974974402,
            3791519004,
            1033081774,
            1277568618,
            1815492186,
            2118074177,
            4126668546,
            2211236943,
            1748251740,
            1369810420,
            3521504564,
            4193382664,
            3799085459,
            2883115123,
            1647391059,
            706024767,
            134480908,
            2512897874,
            1176707941,
            2646852446,
            806885416,
            932615841,
            168101135,
            798661301,
            235341577,
            605164086,
            461406363,
            3756188221,
            3454790438,
            1311188841,
            2142417613,
            3933566367,
            302582043,
            495158174,
            1479289972,
            874125870,
            907746093,
            3698224818,
            3025820398,
            1537253627,
            2756858614,
            1983593293,
            3084310113,
            2108928974,
            1378429307,
            3722699582,
            1580150641,
            327451799,
            2790478837,
            3117535592,
            0,
            3253595436,
            1075847264,
            3825007647,
            2041688520,
            3059440621,
            3563743934,
            2378943302,
            1740553945,
            1916352843,
            2487896798,
            2555137236,
            2958579944,
            2244988746,
            3151024235,
            3320835882,
            1336584933,
            3992714006,
            2252555205,
            2588757463,
            1714631509,
            293963156,
            2319795663,
            3925473552,
            67240454,
            4269768577,
            2689618160,
            2017213508,
            631218106,
            1269344483,
            2723238387,
            1571005438,
            2151694528,
            93294474,
            1066570413,
            563977660,
            1882732616,
            4059428100,
            1673313503,
            2008463041,
            2950355573,
            1109467491,
            537923632,
            3858759450,
            4260623118,
            3218264685,
            2177748300,
            403442708,
            638784309,
            3287084079,
            3193921505,
            899127202,
            2286175436,
            773265209,
            2479146071,
            1437050866,
            4236148354,
            2050833735,
            3362022572,
            3126681063,
            840505643,
            3866325909,
            3227541664,
            427917720,
            2655997905,
            2749160575,
            1143087718,
            1412049534,
            999329963,
            193497219,
            2353415882,
            3354324521,
            1807268051,
            672404540,
            2816401017,
            3160301282,
            369822493,
            2916866934,
            3688947771,
            1681011286,
            1949973070,
            336202270,
            2454276571,
            201721354,
            1210328172,
            3093060836,
            2680341085,
            3184776046,
            1135389935,
            3294782118,
            965841320,
            831886756,
            3554993207,
            4068047243,
            3588745010,
            2345191491,
            1849112409,
            3664604599,
            26054028,
            2983581028,
            2622377682,
            1235855840,
            3630984372,
            2891339514,
            4092916743,
            3488279077,
            3395642799,
            4101667470,
            1202630377,
            268961816,
            1874508501,
            4034427016,
            1243948399,
            1546530418,
            941366308,
            1470539505,
            1941222599,
            2546386513,
            3421038627,
            2715671932,
            3899946140,
            1042226977,
            2521517021,
            1639824860,
            227249030,
            260737669,
            3765465232,
            2084453954,
            1907733956,
            3429263018,
            2420656344,
            100860677,
            4160157185,
            470683154,
            3261161891,
            1781871967,
            2924959737,
            1773779408,
            394692241,
            2579611992,
            974986535,
            664706745,
            3655459128,
            3958962195,
            731420851,
            571543859,
            3530123707,
            2849626480,
            126783113,
            865375399,
            765172662,
            1008606754,
            361203602,
            3387549984,
            2278477385,
            2857719295,
            1344809080,
            2782912378,
            59542671,
            1503764984,
            160008576,
            437062935,
            1707065306,
            3622233649,
            2218934982,
            3496503480,
            2185314755,
            697932208,
            1512910199,
            504303377,
            2075177163,
            2824099068,
            1841019862,
            739644986,
          ],
          m = [
            2781242211,
            2230877308,
            2582542199,
            2381740923,
            234877682,
            3184946027,
            2984144751,
            1418839493,
            1348481072,
            50462977,
            2848876391,
            2102799147,
            434634494,
            1656084439,
            3863849899,
            2599188086,
            1167051466,
            2636087938,
            1082771913,
            2281340285,
            368048890,
            3954334041,
            3381544775,
            201060592,
            3963727277,
            1739838676,
            4250903202,
            3930435503,
            3206782108,
            4149453988,
            2531553906,
            1536934080,
            3262494647,
            484572669,
            2923271059,
            1783375398,
            1517041206,
            1098792767,
            49674231,
            1334037708,
            1550332980,
            4098991525,
            886171109,
            150598129,
            2481090929,
            1940642008,
            1398944049,
            1059722517,
            201851908,
            1385547719,
            1699095331,
            1587397571,
            674240536,
            2704774806,
            252314885,
            3039795866,
            151914247,
            908333586,
            2602270848,
            1038082786,
            651029483,
            1766729511,
            3447698098,
            2682942837,
            454166793,
            2652734339,
            1951935532,
            775166490,
            758520603,
            3000790638,
            4004797018,
            4217086112,
            4137964114,
            1299594043,
            1639438038,
            3464344499,
            2068982057,
            1054729187,
            1901997871,
            2534638724,
            4121318227,
            1757008337,
            0,
            750906861,
            1614815264,
            535035132,
            3363418545,
            3988151131,
            3201591914,
            1183697867,
            3647454910,
            1265776953,
            3734260298,
            3566750796,
            3903871064,
            1250283471,
            1807470800,
            717615087,
            3847203498,
            384695291,
            3313910595,
            3617213773,
            1432761139,
            2484176261,
            3481945413,
            283769337,
            100925954,
            2180939647,
            4037038160,
            1148730428,
            3123027871,
            3813386408,
            4087501137,
            4267549603,
            3229630528,
            2315620239,
            2906624658,
            3156319645,
            1215313976,
            82966005,
            3747855548,
            3245848246,
            1974459098,
            1665278241,
            807407632,
            451280895,
            251524083,
            1841287890,
            1283575245,
            337120268,
            891687699,
            801369324,
            3787349855,
            2721421207,
            3431482436,
            959321879,
            1469301956,
            4065699751,
            2197585534,
            1199193405,
            2898814052,
            3887750493,
            724703513,
            2514908019,
            2696962144,
            2551808385,
            3516813135,
            2141445340,
            1715741218,
            2119445034,
            2872807568,
            2198571144,
            3398190662,
            700968686,
            3547052216,
            1009259540,
            2041044702,
            3803995742,
            487983883,
            1991105499,
            1004265696,
            1449407026,
            1316239930,
            504629770,
            3683797321,
            168560134,
            1816667172,
            3837287516,
            1570751170,
            1857934291,
            4014189740,
            2797888098,
            2822345105,
            2754712981,
            936633572,
            2347923833,
            852879335,
            1133234376,
            1500395319,
            3084545389,
            2348912013,
            1689376213,
            3533459022,
            3762923945,
            3034082412,
            4205598294,
            133428468,
            634383082,
            2949277029,
            2398386810,
            3913789102,
            403703816,
            3580869306,
            2297460856,
            1867130149,
            1918643758,
            607656988,
            4049053350,
            3346248884,
            1368901318,
            600565992,
            2090982877,
            2632479860,
            557719327,
            3717614411,
            3697393085,
            2249034635,
            2232388234,
            2430627952,
            1115438654,
            3295786421,
            2865522278,
            3633334344,
            84280067,
            33027830,
            303828494,
            2747425121,
            1600795957,
            4188952407,
            3496589753,
            2434238086,
            1486471617,
            658119965,
            3106381470,
            953803233,
            334231800,
            3005978776,
            857870609,
            3151128937,
            1890179545,
            2298973838,
            2805175444,
            3056442267,
            574365214,
            2450884487,
            550103529,
            1233637070,
            4289353045,
            2018519080,
            2057691103,
            2399374476,
            4166623649,
            2148108681,
            387583245,
            3664101311,
            836232934,
            3330556482,
            3100665960,
            3280093505,
            2955516313,
            2002398509,
            287182607,
            3413881008,
            4238890068,
            3597515707,
            975967766,
          ],
          g = [
            1671808611,
            2089089148,
            2006576759,
            2072901243,
            4061003762,
            1807603307,
            1873927791,
            3310653893,
            810573872,
            16974337,
            1739181671,
            729634347,
            4263110654,
            3613570519,
            2883997099,
            1989864566,
            3393556426,
            2191335298,
            3376449993,
            2106063485,
            4195741690,
            1508618841,
            1204391495,
            4027317232,
            2917941677,
            3563566036,
            2734514082,
            2951366063,
            2629772188,
            2767672228,
            1922491506,
            3227229120,
            3082974647,
            4246528509,
            2477669779,
            644500518,
            911895606,
            1061256767,
            4144166391,
            3427763148,
            878471220,
            2784252325,
            3845444069,
            4043897329,
            1905517169,
            3631459288,
            827548209,
            356461077,
            67897348,
            3344078279,
            593839651,
            3277757891,
            405286936,
            2527147926,
            84871685,
            2595565466,
            118033927,
            305538066,
            2157648768,
            3795705826,
            3945188843,
            661212711,
            2999812018,
            1973414517,
            152769033,
            2208177539,
            745822252,
            439235610,
            455947803,
            1857215598,
            1525593178,
            2700827552,
            1391895634,
            994932283,
            3596728278,
            3016654259,
            695947817,
            3812548067,
            795958831,
            2224493444,
            1408607827,
            3513301457,
            0,
            3979133421,
            543178784,
            4229948412,
            2982705585,
            1542305371,
            1790891114,
            3410398667,
            3201918910,
            961245753,
            1256100938,
            1289001036,
            1491644504,
            3477767631,
            3496721360,
            4012557807,
            2867154858,
            4212583931,
            1137018435,
            1305975373,
            861234739,
            2241073541,
            1171229253,
            4178635257,
            33948674,
            2139225727,
            1357946960,
            1011120188,
            2679776671,
            2833468328,
            1374921297,
            2751356323,
            1086357568,
            2408187279,
            2460827538,
            2646352285,
            944271416,
            4110742005,
            3168756668,
            3066132406,
            3665145818,
            560153121,
            271589392,
            4279952895,
            4077846003,
            3530407890,
            3444343245,
            202643468,
            322250259,
            3962553324,
            1608629855,
            2543990167,
            1154254916,
            389623319,
            3294073796,
            2817676711,
            2122513534,
            1028094525,
            1689045092,
            1575467613,
            422261273,
            1939203699,
            1621147744,
            2174228865,
            1339137615,
            3699352540,
            577127458,
            712922154,
            2427141008,
            2290289544,
            1187679302,
            3995715566,
            3100863416,
            339486740,
            3732514782,
            1591917662,
            186455563,
            3681988059,
            3762019296,
            844522546,
            978220090,
            169743370,
            1239126601,
            101321734,
            611076132,
            1558493276,
            3260915650,
            3547250131,
            2901361580,
            1655096418,
            2443721105,
            2510565781,
            3828863972,
            2039214713,
            3878868455,
            3359869896,
            928607799,
            1840765549,
            2374762893,
            3580146133,
            1322425422,
            2850048425,
            1823791212,
            1459268694,
            4094161908,
            3928346602,
            1706019429,
            2056189050,
            2934523822,
            135794696,
            3134549946,
            2022240376,
            628050469,
            779246638,
            472135708,
            2800834470,
            3032970164,
            3327236038,
            3894660072,
            3715932637,
            1956440180,
            522272287,
            1272813131,
            3185336765,
            2340818315,
            2323976074,
            1888542832,
            1044544574,
            3049550261,
            1722469478,
            1222152264,
            50660867,
            4127324150,
            236067854,
            1638122081,
            895445557,
            1475980887,
            3117443513,
            2257655686,
            3243809217,
            489110045,
            2662934430,
            3778599393,
            4162055160,
            2561878936,
            288563729,
            1773916777,
            3648039385,
            2391345038,
            2493985684,
            2612407707,
            505560094,
            2274497927,
            3911240169,
            3460925390,
            1442818645,
            678973480,
            3749357023,
            2358182796,
            2717407649,
            2306869641,
            219617805,
            3218761151,
            3862026214,
            1120306242,
            1756942440,
            1103331905,
            2578459033,
            762796589,
            252780047,
            2966125488,
            1425844308,
            3151392187,
            372911126,
          ],
          b = [
            1667474886,
            2088535288,
            2004326894,
            2071694838,
            4075949567,
            1802223062,
            1869591006,
            3318043793,
            808472672,
            16843522,
            1734846926,
            724270422,
            4278065639,
            3621216949,
            2880169549,
            1987484396,
            3402253711,
            2189597983,
            3385409673,
            2105378810,
            4210693615,
            1499065266,
            1195886990,
            4042263547,
            2913856577,
            3570689971,
            2728590687,
            2947541573,
            2627518243,
            2762274643,
            1920112356,
            3233831835,
            3082273397,
            4261223649,
            2475929149,
            640051788,
            909531756,
            1061110142,
            4160160501,
            3435941763,
            875846760,
            2779116625,
            3857003729,
            4059105529,
            1903268834,
            3638064043,
            825316194,
            353713962,
            67374088,
            3351728789,
            589522246,
            3284360861,
            404236336,
            2526454071,
            84217610,
            2593830191,
            117901582,
            303183396,
            2155911963,
            3806477791,
            3958056653,
            656894286,
            2998062463,
            1970642922,
            151591698,
            2206440989,
            741110872,
            437923380,
            454765878,
            1852748508,
            1515908788,
            2694904667,
            1381168804,
            993742198,
            3604373943,
            3014905469,
            690584402,
            3823320797,
            791638366,
            2223281939,
            1398011302,
            3520161977,
            0,
            3991743681,
            538992704,
            4244381667,
            2981218425,
            1532751286,
            1785380564,
            3419096717,
            3200178535,
            960056178,
            1246420628,
            1280103576,
            1482221744,
            3486468741,
            3503319995,
            4025428677,
            2863326543,
            4227536621,
            1128514950,
            1296947098,
            859002214,
            2240123921,
            1162203018,
            4193849577,
            33687044,
            2139062782,
            1347481760,
            1010582648,
            2678045221,
            2829640523,
            1364325282,
            2745433693,
            1077985408,
            2408548869,
            2459086143,
            2644360225,
            943212656,
            4126475505,
            3166494563,
            3065430391,
            3671750063,
            555836226,
            269496352,
            4294908645,
            4092792573,
            3537006015,
            3452783745,
            202118168,
            320025894,
            3974901699,
            1600119230,
            2543297077,
            1145359496,
            387397934,
            3301201811,
            2812801621,
            2122220284,
            1027426170,
            1684319432,
            1566435258,
            421079858,
            1936954854,
            1616945344,
            2172753945,
            1330631070,
            3705438115,
            572679748,
            707427924,
            2425400123,
            2290647819,
            1179044492,
            4008585671,
            3099120491,
            336870440,
            3739122087,
            1583276732,
            185277718,
            3688593069,
            3772791771,
            842159716,
            976899700,
            168435220,
            1229577106,
            101059084,
            606366792,
            1549591736,
            3267517855,
            3553849021,
            2897014595,
            1650632388,
            2442242105,
            2509612081,
            3840161747,
            2038008818,
            3890688725,
            3368567691,
            926374254,
            1835907034,
            2374863873,
            3587531953,
            1313788572,
            2846482505,
            1819063512,
            1448540844,
            4109633523,
            3941213647,
            1701162954,
            2054852340,
            2930698567,
            134748176,
            3132806511,
            2021165296,
            623210314,
            774795868,
            471606328,
            2795958615,
            3031746419,
            3334885783,
            3907527627,
            3722280097,
            1953799400,
            522133822,
            1263263126,
            3183336545,
            2341176845,
            2324333839,
            1886425312,
            1044267644,
            3048588401,
            1718004428,
            1212733584,
            50529542,
            4143317495,
            235803164,
            1633788866,
            892690282,
            1465383342,
            3115962473,
            2256965911,
            3250673817,
            488449850,
            2661202215,
            3789633753,
            4177007595,
            2560144171,
            286339874,
            1768537042,
            3654906025,
            2391705863,
            2492770099,
            2610673197,
            505291324,
            2273808917,
            3924369609,
            3469625735,
            1431699370,
            673740880,
            3755965093,
            2358021891,
            2711746649,
            2307489801,
            218961690,
            3217021541,
            3873845719,
            1111672452,
            1751693520,
            1094828930,
            2576986153,
            757954394,
            252645662,
            2964376443,
            1414855848,
            3149649517,
            370555436,
          ],
          y = [
            1374988112,
            2118214995,
            437757123,
            975658646,
            1001089995,
            530400753,
            2902087851,
            1273168787,
            540080725,
            2910219766,
            2295101073,
            4110568485,
            1340463100,
            3307916247,
            641025152,
            3043140495,
            3736164937,
            632953703,
            1172967064,
            1576976609,
            3274667266,
            2169303058,
            2370213795,
            1809054150,
            59727847,
            361929877,
            3211623147,
            2505202138,
            3569255213,
            1484005843,
            1239443753,
            2395588676,
            1975683434,
            4102977912,
            2572697195,
            666464733,
            3202437046,
            4035489047,
            3374361702,
            2110667444,
            1675577880,
            3843699074,
            2538681184,
            1649639237,
            2976151520,
            3144396420,
            4269907996,
            4178062228,
            1883793496,
            2403728665,
            2497604743,
            1383856311,
            2876494627,
            1917518562,
            3810496343,
            1716890410,
            3001755655,
            800440835,
            2261089178,
            3543599269,
            807962610,
            599762354,
            33778362,
            3977675356,
            2328828971,
            2809771154,
            4077384432,
            1315562145,
            1708848333,
            101039829,
            3509871135,
            3299278474,
            875451293,
            2733856160,
            92987698,
            2767645557,
            193195065,
            1080094634,
            1584504582,
            3178106961,
            1042385657,
            2531067453,
            3711829422,
            1306967366,
            2438237621,
            1908694277,
            67556463,
            1615861247,
            429456164,
            3602770327,
            2302690252,
            1742315127,
            2968011453,
            126454664,
            3877198648,
            2043211483,
            2709260871,
            2084704233,
            4169408201,
            0,
            159417987,
            841739592,
            504459436,
            1817866830,
            4245618683,
            260388950,
            1034867998,
            908933415,
            168810852,
            1750902305,
            2606453969,
            607530554,
            202008497,
            2472011535,
            3035535058,
            463180190,
            2160117071,
            1641816226,
            1517767529,
            470948374,
            3801332234,
            3231722213,
            1008918595,
            303765277,
            235474187,
            4069246893,
            766945465,
            337553864,
            1475418501,
            2943682380,
            4003061179,
            2743034109,
            4144047775,
            1551037884,
            1147550661,
            1543208500,
            2336434550,
            3408119516,
            3069049960,
            3102011747,
            3610369226,
            1113818384,
            328671808,
            2227573024,
            2236228733,
            3535486456,
            2935566865,
            3341394285,
            496906059,
            3702665459,
            226906860,
            2009195472,
            733156972,
            2842737049,
            294930682,
            1206477858,
            2835123396,
            2700099354,
            1451044056,
            573804783,
            2269728455,
            3644379585,
            2362090238,
            2564033334,
            2801107407,
            2776292904,
            3669462566,
            1068351396,
            742039012,
            1350078989,
            1784663195,
            1417561698,
            4136440770,
            2430122216,
            775550814,
            2193862645,
            2673705150,
            1775276924,
            1876241833,
            3475313331,
            3366754619,
            270040487,
            3902563182,
            3678124923,
            3441850377,
            1851332852,
            3969562369,
            2203032232,
            3868552805,
            2868897406,
            566021896,
            4011190502,
            3135740889,
            1248802510,
            3936291284,
            699432150,
            832877231,
            708780849,
            3332740144,
            899835584,
            1951317047,
            4236429990,
            3767586992,
            866637845,
            4043610186,
            1106041591,
            2144161806,
            395441711,
            1984812685,
            1139781709,
            3433712980,
            3835036895,
            2664543715,
            1282050075,
            3240894392,
            1181045119,
            2640243204,
            25965917,
            4203181171,
            4211818798,
            3009879386,
            2463879762,
            3910161971,
            1842759443,
            2597806476,
            933301370,
            1509430414,
            3943906441,
            3467192302,
            3076639029,
            3776767469,
            2051518780,
            2631065433,
            1441952575,
            404016761,
            1942435775,
            1408749034,
            1610459739,
            3745345300,
            2017778566,
            3400528769,
            3110650942,
            941896748,
            3265478751,
            371049330,
            3168937228,
            675039627,
            4279080257,
            967311729,
            135050206,
            3635733660,
            1683407248,
            2076935265,
            3576870512,
            1215061108,
            3501741890,
          ],
          v = [
            1347548327,
            1400783205,
            3273267108,
            2520393566,
            3409685355,
            4045380933,
            2880240216,
            2471224067,
            1428173050,
            4138563181,
            2441661558,
            636813900,
            4233094615,
            3620022987,
            2149987652,
            2411029155,
            1239331162,
            1730525723,
            2554718734,
            3781033664,
            46346101,
            310463728,
            2743944855,
            3328955385,
            3875770207,
            2501218972,
            3955191162,
            3667219033,
            768917123,
            3545789473,
            692707433,
            1150208456,
            1786102409,
            2029293177,
            1805211710,
            3710368113,
            3065962831,
            401639597,
            1724457132,
            3028143674,
            409198410,
            2196052529,
            1620529459,
            1164071807,
            3769721975,
            2226875310,
            486441376,
            2499348523,
            1483753576,
            428819965,
            2274680428,
            3075636216,
            598438867,
            3799141122,
            1474502543,
            711349675,
            129166120,
            53458370,
            2592523643,
            2782082824,
            4063242375,
            2988687269,
            3120694122,
            1559041666,
            730517276,
            2460449204,
            4042459122,
            2706270690,
            3446004468,
            3573941694,
            533804130,
            2328143614,
            2637442643,
            2695033685,
            839224033,
            1973745387,
            957055980,
            2856345839,
            106852767,
            1371368976,
            4181598602,
            1033297158,
            2933734917,
            1179510461,
            3046200461,
            91341917,
            1862534868,
            4284502037,
            605657339,
            2547432937,
            3431546947,
            2003294622,
            3182487618,
            2282195339,
            954669403,
            3682191598,
            1201765386,
            3917234703,
            3388507166,
            0,
            2198438022,
            1211247597,
            2887651696,
            1315723890,
            4227665663,
            1443857720,
            507358933,
            657861945,
            1678381017,
            560487590,
            3516619604,
            975451694,
            2970356327,
            261314535,
            3535072918,
            2652609425,
            1333838021,
            2724322336,
            1767536459,
            370938394,
            182621114,
            3854606378,
            1128014560,
            487725847,
            185469197,
            2918353863,
            3106780840,
            3356761769,
            2237133081,
            1286567175,
            3152976349,
            4255350624,
            2683765030,
            3160175349,
            3309594171,
            878443390,
            1988838185,
            3704300486,
            1756818940,
            1673061617,
            3403100636,
            272786309,
            1075025698,
            545572369,
            2105887268,
            4174560061,
            296679730,
            1841768865,
            1260232239,
            4091327024,
            3960309330,
            3497509347,
            1814803222,
            2578018489,
            4195456072,
            575138148,
            3299409036,
            446754879,
            3629546796,
            4011996048,
            3347532110,
            3252238545,
            4270639778,
            915985419,
            3483825537,
            681933534,
            651868046,
            2755636671,
            3828103837,
            223377554,
            2607439820,
            1649704518,
            3270937875,
            3901806776,
            1580087799,
            4118987695,
            3198115200,
            2087309459,
            2842678573,
            3016697106,
            1003007129,
            2802849917,
            1860738147,
            2077965243,
            164439672,
            4100872472,
            32283319,
            2827177882,
            1709610350,
            2125135846,
            136428751,
            3874428392,
            3652904859,
            3460984630,
            3572145929,
            3593056380,
            2939266226,
            824852259,
            818324884,
            3224740454,
            930369212,
            2801566410,
            2967507152,
            355706840,
            1257309336,
            4148292826,
            243256656,
            790073846,
            2373340630,
            1296297904,
            1422699085,
            3756299780,
            3818836405,
            457992840,
            3099667487,
            2135319889,
            77422314,
            1560382517,
            1945798516,
            788204353,
            1521706781,
            1385356242,
            870912086,
            325965383,
            2358957921,
            2050466060,
            2388260884,
            2313884476,
            4006521127,
            901210569,
            3990953189,
            1014646705,
            1503449823,
            1062597235,
            2031621326,
            3212035895,
            3931371469,
            1533017514,
            350174575,
            2256028891,
            2177544179,
            1052338372,
            741876788,
            1606591296,
            1914052035,
            213705253,
            2334669897,
            1107234197,
            1899603969,
            3725069491,
            2631447780,
            2422494913,
            1635502980,
            1893020342,
            1950903388,
            1120974935,
          ],
          w = [
            2807058932,
            1699970625,
            2764249623,
            1586903591,
            1808481195,
            1173430173,
            1487645946,
            59984867,
            4199882800,
            1844882806,
            1989249228,
            1277555970,
            3623636965,
            3419915562,
            1149249077,
            2744104290,
            1514790577,
            459744698,
            244860394,
            3235995134,
            1963115311,
            4027744588,
            2544078150,
            4190530515,
            1608975247,
            2627016082,
            2062270317,
            1507497298,
            2200818878,
            567498868,
            1764313568,
            3359936201,
            2305455554,
            2037970062,
            1047239e3,
            1910319033,
            1337376481,
            2904027272,
            2892417312,
            984907214,
            1243112415,
            830661914,
            861968209,
            2135253587,
            2011214180,
            2927934315,
            2686254721,
            731183368,
            1750626376,
            4246310725,
            1820824798,
            4172763771,
            3542330227,
            48394827,
            2404901663,
            2871682645,
            671593195,
            3254988725,
            2073724613,
            145085239,
            2280796200,
            2779915199,
            1790575107,
            2187128086,
            472615631,
            3029510009,
            4075877127,
            3802222185,
            4107101658,
            3201631749,
            1646252340,
            4270507174,
            1402811438,
            1436590835,
            3778151818,
            3950355702,
            3963161475,
            4020912224,
            2667994737,
            273792366,
            2331590177,
            104699613,
            95345982,
            3175501286,
            2377486676,
            1560637892,
            3564045318,
            369057872,
            4213447064,
            3919042237,
            1137477952,
            2658625497,
            1119727848,
            2340947849,
            1530455833,
            4007360968,
            172466556,
            266959938,
            516552836,
            0,
            2256734592,
            3980931627,
            1890328081,
            1917742170,
            4294704398,
            945164165,
            3575528878,
            958871085,
            3647212047,
            2787207260,
            1423022939,
            775562294,
            1739656202,
            3876557655,
            2530391278,
            2443058075,
            3310321856,
            547512796,
            1265195639,
            437656594,
            3121275539,
            719700128,
            3762502690,
            387781147,
            218828297,
            3350065803,
            2830708150,
            2848461854,
            428169201,
            122466165,
            3720081049,
            1627235199,
            648017665,
            4122762354,
            1002783846,
            2117360635,
            695634755,
            3336358691,
            4234721005,
            4049844452,
            3704280881,
            2232435299,
            574624663,
            287343814,
            612205898,
            1039717051,
            840019705,
            2708326185,
            793451934,
            821288114,
            1391201670,
            3822090177,
            376187827,
            3113855344,
            1224348052,
            1679968233,
            2361698556,
            1058709744,
            752375421,
            2431590963,
            1321699145,
            3519142200,
            2734591178,
            188127444,
            2177869557,
            3727205754,
            2384911031,
            3215212461,
            2648976442,
            2450346104,
            3432737375,
            1180849278,
            331544205,
            3102249176,
            4150144569,
            2952102595,
            2159976285,
            2474404304,
            766078933,
            313773861,
            2570832044,
            2108100632,
            1668212892,
            3145456443,
            2013908262,
            418672217,
            3070356634,
            2594734927,
            1852171925,
            3867060991,
            3473416636,
            3907448597,
            2614737639,
            919489135,
            164948639,
            2094410160,
            2997825956,
            590424639,
            2486224549,
            1723872674,
            3157750862,
            3399941250,
            3501252752,
            3625268135,
            2555048196,
            3673637356,
            1343127501,
            4130281361,
            3599595085,
            2957853679,
            1297403050,
            81781910,
            3051593425,
            2283490410,
            532201772,
            1367295589,
            3926170974,
            895287692,
            1953757831,
            1093597963,
            492483431,
            3528626907,
            1446242576,
            1192455638,
            1636604631,
            209336225,
            344873464,
            1015671571,
            669961897,
            3375740769,
            3857572124,
            2973530695,
            3747192018,
            1933530610,
            3464042516,
            935293895,
            3454686199,
            2858115069,
            1863638845,
            3683022916,
            4085369519,
            3292445032,
            875313188,
            1080017571,
            3279033885,
            621591778,
            1233856572,
            2504130317,
            24197544,
            3017672716,
            3835484340,
            3247465558,
            2220981195,
            3060847922,
            1551124588,
            1463996600,
          ],
          A = [
            4104605777,
            1097159550,
            396673818,
            660510266,
            2875968315,
            2638606623,
            4200115116,
            3808662347,
            821712160,
            1986918061,
            3430322568,
            38544885,
            3856137295,
            718002117,
            893681702,
            1654886325,
            2975484382,
            3122358053,
            3926825029,
            4274053469,
            796197571,
            1290801793,
            1184342925,
            3556361835,
            2405426947,
            2459735317,
            1836772287,
            1381620373,
            3196267988,
            1948373848,
            3764988233,
            3385345166,
            3263785589,
            2390325492,
            1480485785,
            3111247143,
            3780097726,
            2293045232,
            548169417,
            3459953789,
            3746175075,
            439452389,
            1362321559,
            1400849762,
            1685577905,
            1806599355,
            2174754046,
            137073913,
            1214797936,
            1174215055,
            3731654548,
            2079897426,
            1943217067,
            1258480242,
            529487843,
            1437280870,
            3945269170,
            3049390895,
            3313212038,
            923313619,
            679998e3,
            3215307299,
            57326082,
            377642221,
            3474729866,
            2041877159,
            133361907,
            1776460110,
            3673476453,
            96392454,
            878845905,
            2801699524,
            777231668,
            4082475170,
            2330014213,
            4142626212,
            2213296395,
            1626319424,
            1906247262,
            1846563261,
            562755902,
            3708173718,
            1040559837,
            3871163981,
            1418573201,
            3294430577,
            114585348,
            1343618912,
            2566595609,
            3186202582,
            1078185097,
            3651041127,
            3896688048,
            2307622919,
            425408743,
            3371096953,
            2081048481,
            1108339068,
            2216610296,
            0,
            2156299017,
            736970802,
            292596766,
            1517440620,
            251657213,
            2235061775,
            2933202493,
            758720310,
            265905162,
            1554391400,
            1532285339,
            908999204,
            174567692,
            1474760595,
            4002861748,
            2610011675,
            3234156416,
            3693126241,
            2001430874,
            303699484,
            2478443234,
            2687165888,
            585122620,
            454499602,
            151849742,
            2345119218,
            3064510765,
            514443284,
            4044981591,
            1963412655,
            2581445614,
            2137062819,
            19308535,
            1928707164,
            1715193156,
            4219352155,
            1126790795,
            600235211,
            3992742070,
            3841024952,
            836553431,
            1669664834,
            2535604243,
            3323011204,
            1243905413,
            3141400786,
            4180808110,
            698445255,
            2653899549,
            2989552604,
            2253581325,
            3252932727,
            3004591147,
            1891211689,
            2487810577,
            3915653703,
            4237083816,
            4030667424,
            2100090966,
            865136418,
            1229899655,
            953270745,
            3399679628,
            3557504664,
            4118925222,
            2061379749,
            3079546586,
            2915017791,
            983426092,
            2022837584,
            1607244650,
            2118541908,
            2366882550,
            3635996816,
            972512814,
            3283088770,
            1568718495,
            3499326569,
            3576539503,
            621982671,
            2895723464,
            410887952,
            2623762152,
            1002142683,
            645401037,
            1494807662,
            2595684844,
            1335535747,
            2507040230,
            4293295786,
            3167684641,
            367585007,
            3885750714,
            1865862730,
            2668221674,
            2960971305,
            2763173681,
            1059270954,
            2777952454,
            2724642869,
            1320957812,
            2194319100,
            2429595872,
            2815956275,
            77089521,
            3973773121,
            3444575871,
            2448830231,
            1305906550,
            4021308739,
            2857194700,
            2516901860,
            3518358430,
            1787304780,
            740276417,
            1699839814,
            1592394909,
            2352307457,
            2272556026,
            188821243,
            1729977011,
            3687994002,
            274084841,
            3594982253,
            3613494426,
            2701949495,
            4162096729,
            322734571,
            2837966542,
            1640576439,
            484830689,
            1202797690,
            3537852828,
            4067639125,
            349075736,
            3342319475,
            4157467219,
            4255800159,
            1030690015,
            1155237496,
            2951971274,
            1757691577,
            607398968,
            2738905026,
            499347990,
            3794078908,
            1011452712,
            227885567,
            2818666809,
            213114376,
            3034881240,
            1455525988,
            3414450555,
            850817237,
            1817998408,
            3092726480,
          ],
          E = [
            0,
            235474187,
            470948374,
            303765277,
            941896748,
            908933415,
            607530554,
            708780849,
            1883793496,
            2118214995,
            1817866830,
            1649639237,
            1215061108,
            1181045119,
            1417561698,
            1517767529,
            3767586992,
            4003061179,
            4236429990,
            4069246893,
            3635733660,
            3602770327,
            3299278474,
            3400528769,
            2430122216,
            2664543715,
            2362090238,
            2193862645,
            2835123396,
            2801107407,
            3035535058,
            3135740889,
            3678124923,
            3576870512,
            3341394285,
            3374361702,
            3810496343,
            3977675356,
            4279080257,
            4043610186,
            2876494627,
            2776292904,
            3076639029,
            3110650942,
            2472011535,
            2640243204,
            2403728665,
            2169303058,
            1001089995,
            899835584,
            666464733,
            699432150,
            59727847,
            226906860,
            530400753,
            294930682,
            1273168787,
            1172967064,
            1475418501,
            1509430414,
            1942435775,
            2110667444,
            1876241833,
            1641816226,
            2910219766,
            2743034109,
            2976151520,
            3211623147,
            2505202138,
            2606453969,
            2302690252,
            2269728455,
            3711829422,
            3543599269,
            3240894392,
            3475313331,
            3843699074,
            3943906441,
            4178062228,
            4144047775,
            1306967366,
            1139781709,
            1374988112,
            1610459739,
            1975683434,
            2076935265,
            1775276924,
            1742315127,
            1034867998,
            866637845,
            566021896,
            800440835,
            92987698,
            193195065,
            429456164,
            395441711,
            1984812685,
            2017778566,
            1784663195,
            1683407248,
            1315562145,
            1080094634,
            1383856311,
            1551037884,
            101039829,
            135050206,
            437757123,
            337553864,
            1042385657,
            807962610,
            573804783,
            742039012,
            2531067453,
            2564033334,
            2328828971,
            2227573024,
            2935566865,
            2700099354,
            3001755655,
            3168937228,
            3868552805,
            3902563182,
            4203181171,
            4102977912,
            3736164937,
            3501741890,
            3265478751,
            3433712980,
            1106041591,
            1340463100,
            1576976609,
            1408749034,
            2043211483,
            2009195472,
            1708848333,
            1809054150,
            832877231,
            1068351396,
            766945465,
            599762354,
            159417987,
            126454664,
            361929877,
            463180190,
            2709260871,
            2943682380,
            3178106961,
            3009879386,
            2572697195,
            2538681184,
            2236228733,
            2336434550,
            3509871135,
            3745345300,
            3441850377,
            3274667266,
            3910161971,
            3877198648,
            4110568485,
            4211818798,
            2597806476,
            2497604743,
            2261089178,
            2295101073,
            2733856160,
            2902087851,
            3202437046,
            2968011453,
            3936291284,
            3835036895,
            4136440770,
            4169408201,
            3535486456,
            3702665459,
            3467192302,
            3231722213,
            2051518780,
            1951317047,
            1716890410,
            1750902305,
            1113818384,
            1282050075,
            1584504582,
            1350078989,
            168810852,
            67556463,
            371049330,
            404016761,
            841739592,
            1008918595,
            775550814,
            540080725,
            3969562369,
            3801332234,
            4035489047,
            4269907996,
            3569255213,
            3669462566,
            3366754619,
            3332740144,
            2631065433,
            2463879762,
            2160117071,
            2395588676,
            2767645557,
            2868897406,
            3102011747,
            3069049960,
            202008497,
            33778362,
            270040487,
            504459436,
            875451293,
            975658646,
            675039627,
            641025152,
            2084704233,
            1917518562,
            1615861247,
            1851332852,
            1147550661,
            1248802510,
            1484005843,
            1451044056,
            933301370,
            967311729,
            733156972,
            632953703,
            260388950,
            25965917,
            328671808,
            496906059,
            1206477858,
            1239443753,
            1543208500,
            1441952575,
            2144161806,
            1908694277,
            1675577880,
            1842759443,
            3610369226,
            3644379585,
            3408119516,
            3307916247,
            4011190502,
            3776767469,
            4077384432,
            4245618683,
            2809771154,
            2842737049,
            3144396420,
            3043140495,
            2673705150,
            2438237621,
            2203032232,
            2370213795,
          ],
          O = [
            0,
            185469197,
            370938394,
            487725847,
            741876788,
            657861945,
            975451694,
            824852259,
            1483753576,
            1400783205,
            1315723890,
            1164071807,
            1950903388,
            2135319889,
            1649704518,
            1767536459,
            2967507152,
            3152976349,
            2801566410,
            2918353863,
            2631447780,
            2547432937,
            2328143614,
            2177544179,
            3901806776,
            3818836405,
            4270639778,
            4118987695,
            3299409036,
            3483825537,
            3535072918,
            3652904859,
            2077965243,
            1893020342,
            1841768865,
            1724457132,
            1474502543,
            1559041666,
            1107234197,
            1257309336,
            598438867,
            681933534,
            901210569,
            1052338372,
            261314535,
            77422314,
            428819965,
            310463728,
            3409685355,
            3224740454,
            3710368113,
            3593056380,
            3875770207,
            3960309330,
            4045380933,
            4195456072,
            2471224067,
            2554718734,
            2237133081,
            2388260884,
            3212035895,
            3028143674,
            2842678573,
            2724322336,
            4138563181,
            4255350624,
            3769721975,
            3955191162,
            3667219033,
            3516619604,
            3431546947,
            3347532110,
            2933734917,
            2782082824,
            3099667487,
            3016697106,
            2196052529,
            2313884476,
            2499348523,
            2683765030,
            1179510461,
            1296297904,
            1347548327,
            1533017514,
            1786102409,
            1635502980,
            2087309459,
            2003294622,
            507358933,
            355706840,
            136428751,
            53458370,
            839224033,
            957055980,
            605657339,
            790073846,
            2373340630,
            2256028891,
            2607439820,
            2422494913,
            2706270690,
            2856345839,
            3075636216,
            3160175349,
            3573941694,
            3725069491,
            3273267108,
            3356761769,
            4181598602,
            4063242375,
            4011996048,
            3828103837,
            1033297158,
            915985419,
            730517276,
            545572369,
            296679730,
            446754879,
            129166120,
            213705253,
            1709610350,
            1860738147,
            1945798516,
            2029293177,
            1239331162,
            1120974935,
            1606591296,
            1422699085,
            4148292826,
            4233094615,
            3781033664,
            3931371469,
            3682191598,
            3497509347,
            3446004468,
            3328955385,
            2939266226,
            2755636671,
            3106780840,
            2988687269,
            2198438022,
            2282195339,
            2501218972,
            2652609425,
            1201765386,
            1286567175,
            1371368976,
            1521706781,
            1805211710,
            1620529459,
            2105887268,
            1988838185,
            533804130,
            350174575,
            164439672,
            46346101,
            870912086,
            954669403,
            636813900,
            788204353,
            2358957921,
            2274680428,
            2592523643,
            2441661558,
            2695033685,
            2880240216,
            3065962831,
            3182487618,
            3572145929,
            3756299780,
            3270937875,
            3388507166,
            4174560061,
            4091327024,
            4006521127,
            3854606378,
            1014646705,
            930369212,
            711349675,
            560487590,
            272786309,
            457992840,
            106852767,
            223377554,
            1678381017,
            1862534868,
            1914052035,
            2031621326,
            1211247597,
            1128014560,
            1580087799,
            1428173050,
            32283319,
            182621114,
            401639597,
            486441376,
            768917123,
            651868046,
            1003007129,
            818324884,
            1503449823,
            1385356242,
            1333838021,
            1150208456,
            1973745387,
            2125135846,
            1673061617,
            1756818940,
            2970356327,
            3120694122,
            2802849917,
            2887651696,
            2637442643,
            2520393566,
            2334669897,
            2149987652,
            3917234703,
            3799141122,
            4284502037,
            4100872472,
            3309594171,
            3460984630,
            3545789473,
            3629546796,
            2050466060,
            1899603969,
            1814803222,
            1730525723,
            1443857720,
            1560382517,
            1075025698,
            1260232239,
            575138148,
            692707433,
            878443390,
            1062597235,
            243256656,
            91341917,
            409198410,
            325965383,
            3403100636,
            3252238545,
            3704300486,
            3620022987,
            3874428392,
            3990953189,
            4042459122,
            4227665663,
            2460449204,
            2578018489,
            2226875310,
            2411029155,
            3198115200,
            3046200461,
            2827177882,
            2743944855,
          ],
          M = [
            0,
            218828297,
            437656594,
            387781147,
            875313188,
            958871085,
            775562294,
            590424639,
            1750626376,
            1699970625,
            1917742170,
            2135253587,
            1551124588,
            1367295589,
            1180849278,
            1265195639,
            3501252752,
            3720081049,
            3399941250,
            3350065803,
            3835484340,
            3919042237,
            4270507174,
            4085369519,
            3102249176,
            3051593425,
            2734591178,
            2952102595,
            2361698556,
            2177869557,
            2530391278,
            2614737639,
            3145456443,
            3060847922,
            2708326185,
            2892417312,
            2404901663,
            2187128086,
            2504130317,
            2555048196,
            3542330227,
            3727205754,
            3375740769,
            3292445032,
            3876557655,
            3926170974,
            4246310725,
            4027744588,
            1808481195,
            1723872674,
            1910319033,
            2094410160,
            1608975247,
            1391201670,
            1173430173,
            1224348052,
            59984867,
            244860394,
            428169201,
            344873464,
            935293895,
            984907214,
            766078933,
            547512796,
            1844882806,
            1627235199,
            2011214180,
            2062270317,
            1507497298,
            1423022939,
            1137477952,
            1321699145,
            95345982,
            145085239,
            532201772,
            313773861,
            830661914,
            1015671571,
            731183368,
            648017665,
            3175501286,
            2957853679,
            2807058932,
            2858115069,
            2305455554,
            2220981195,
            2474404304,
            2658625497,
            3575528878,
            3625268135,
            3473416636,
            3254988725,
            3778151818,
            3963161475,
            4213447064,
            4130281361,
            3599595085,
            3683022916,
            3432737375,
            3247465558,
            3802222185,
            4020912224,
            4172763771,
            4122762354,
            3201631749,
            3017672716,
            2764249623,
            2848461854,
            2331590177,
            2280796200,
            2431590963,
            2648976442,
            104699613,
            188127444,
            472615631,
            287343814,
            840019705,
            1058709744,
            671593195,
            621591778,
            1852171925,
            1668212892,
            1953757831,
            2037970062,
            1514790577,
            1463996600,
            1080017571,
            1297403050,
            3673637356,
            3623636965,
            3235995134,
            3454686199,
            4007360968,
            3822090177,
            4107101658,
            4190530515,
            2997825956,
            3215212461,
            2830708150,
            2779915199,
            2256734592,
            2340947849,
            2627016082,
            2443058075,
            172466556,
            122466165,
            273792366,
            492483431,
            1047239e3,
            861968209,
            612205898,
            695634755,
            1646252340,
            1863638845,
            2013908262,
            1963115311,
            1446242576,
            1530455833,
            1277555970,
            1093597963,
            1636604631,
            1820824798,
            2073724613,
            1989249228,
            1436590835,
            1487645946,
            1337376481,
            1119727848,
            164948639,
            81781910,
            331544205,
            516552836,
            1039717051,
            821288114,
            669961897,
            719700128,
            2973530695,
            3157750862,
            2871682645,
            2787207260,
            2232435299,
            2283490410,
            2667994737,
            2450346104,
            3647212047,
            3564045318,
            3279033885,
            3464042516,
            3980931627,
            3762502690,
            4150144569,
            4199882800,
            3070356634,
            3121275539,
            2904027272,
            2686254721,
            2200818878,
            2384911031,
            2570832044,
            2486224549,
            3747192018,
            3528626907,
            3310321856,
            3359936201,
            3950355702,
            3867060991,
            4049844452,
            4234721005,
            1739656202,
            1790575107,
            2108100632,
            1890328081,
            1402811438,
            1586903591,
            1233856572,
            1149249077,
            266959938,
            48394827,
            369057872,
            418672217,
            1002783846,
            919489135,
            567498868,
            752375421,
            209336225,
            24197544,
            376187827,
            459744698,
            945164165,
            895287692,
            574624663,
            793451934,
            1679968233,
            1764313568,
            2117360635,
            1933530610,
            1343127501,
            1560637892,
            1243112415,
            1192455638,
            3704280881,
            3519142200,
            3336358691,
            3419915562,
            3907448597,
            3857572124,
            4075877127,
            4294704398,
            3029510009,
            3113855344,
            2927934315,
            2744104290,
            2159976285,
            2377486676,
            2594734927,
            2544078150,
          ],
          k = [
            0,
            151849742,
            303699484,
            454499602,
            607398968,
            758720310,
            908999204,
            1059270954,
            1214797936,
            1097159550,
            1517440620,
            1400849762,
            1817998408,
            1699839814,
            2118541908,
            2001430874,
            2429595872,
            2581445614,
            2194319100,
            2345119218,
            3034881240,
            3186202582,
            2801699524,
            2951971274,
            3635996816,
            3518358430,
            3399679628,
            3283088770,
            4237083816,
            4118925222,
            4002861748,
            3885750714,
            1002142683,
            850817237,
            698445255,
            548169417,
            529487843,
            377642221,
            227885567,
            77089521,
            1943217067,
            2061379749,
            1640576439,
            1757691577,
            1474760595,
            1592394909,
            1174215055,
            1290801793,
            2875968315,
            2724642869,
            3111247143,
            2960971305,
            2405426947,
            2253581325,
            2638606623,
            2487810577,
            3808662347,
            3926825029,
            4044981591,
            4162096729,
            3342319475,
            3459953789,
            3576539503,
            3693126241,
            1986918061,
            2137062819,
            1685577905,
            1836772287,
            1381620373,
            1532285339,
            1078185097,
            1229899655,
            1040559837,
            923313619,
            740276417,
            621982671,
            439452389,
            322734571,
            137073913,
            19308535,
            3871163981,
            4021308739,
            4104605777,
            4255800159,
            3263785589,
            3414450555,
            3499326569,
            3651041127,
            2933202493,
            2815956275,
            3167684641,
            3049390895,
            2330014213,
            2213296395,
            2566595609,
            2448830231,
            1305906550,
            1155237496,
            1607244650,
            1455525988,
            1776460110,
            1626319424,
            2079897426,
            1928707164,
            96392454,
            213114376,
            396673818,
            514443284,
            562755902,
            679998e3,
            865136418,
            983426092,
            3708173718,
            3557504664,
            3474729866,
            3323011204,
            4180808110,
            4030667424,
            3945269170,
            3794078908,
            2507040230,
            2623762152,
            2272556026,
            2390325492,
            2975484382,
            3092726480,
            2738905026,
            2857194700,
            3973773121,
            3856137295,
            4274053469,
            4157467219,
            3371096953,
            3252932727,
            3673476453,
            3556361835,
            2763173681,
            2915017791,
            3064510765,
            3215307299,
            2156299017,
            2307622919,
            2459735317,
            2610011675,
            2081048481,
            1963412655,
            1846563261,
            1729977011,
            1480485785,
            1362321559,
            1243905413,
            1126790795,
            878845905,
            1030690015,
            645401037,
            796197571,
            274084841,
            425408743,
            38544885,
            188821243,
            3613494426,
            3731654548,
            3313212038,
            3430322568,
            4082475170,
            4200115116,
            3780097726,
            3896688048,
            2668221674,
            2516901860,
            2366882550,
            2216610296,
            3141400786,
            2989552604,
            2837966542,
            2687165888,
            1202797690,
            1320957812,
            1437280870,
            1554391400,
            1669664834,
            1787304780,
            1906247262,
            2022837584,
            265905162,
            114585348,
            499347990,
            349075736,
            736970802,
            585122620,
            972512814,
            821712160,
            2595684844,
            2478443234,
            2293045232,
            2174754046,
            3196267988,
            3079546586,
            2895723464,
            2777952454,
            3537852828,
            3687994002,
            3234156416,
            3385345166,
            4142626212,
            4293295786,
            3841024952,
            3992742070,
            174567692,
            57326082,
            410887952,
            292596766,
            777231668,
            660510266,
            1011452712,
            893681702,
            1108339068,
            1258480242,
            1343618912,
            1494807662,
            1715193156,
            1865862730,
            1948373848,
            2100090966,
            2701949495,
            2818666809,
            3004591147,
            3122358053,
            2235061775,
            2352307457,
            2535604243,
            2653899549,
            3915653703,
            3764988233,
            4219352155,
            4067639125,
            3444575871,
            3294430577,
            3746175075,
            3594982253,
            836553431,
            953270745,
            600235211,
            718002117,
            367585007,
            484830689,
            133361907,
            251657213,
            2041877159,
            1891211689,
            1806599355,
            1654886325,
            1568718495,
            1418573201,
            1335535747,
            1184342925,
          ]
        function _(t) {
          for (var e = [], r = 0; r < t.length; r += 4)
            e.push((t[r] << 24) | (t[r + 1] << 16) | (t[r + 2] << 8) | t[r + 3])
          return e
        }
        var S = function(t) {
          if (!(this instanceof S)) throw Error('AES must be instanitated with `new`')
          Object.defineProperty(this, 'key', { value: i(t, !0) }), this._prepare()
        }
        ;(S.prototype._prepare = function() {
          var t = h[this.key.length]
          if (null == t) throw new Error('invalid key size (must be 16, 24 or 32 bytes)')
          ;(this._Ke = []), (this._Kd = [])
          for (var e = 0; e <= t; e++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0])
          var r,
            n = 4 * (t + 1),
            i = this.key.length / 4,
            o = _(this.key)
          for (e = 0; e < i; e++) (r = e >> 2), (this._Ke[r][e % 4] = o[e]), (this._Kd[t - r][e % 4] = o[e])
          for (var s, a = 0, u = i; u < n; ) {
            if (
              ((s = o[i - 1]),
              (o[0] ^=
                (f[(s >> 16) & 255] << 24) ^
                (f[(s >> 8) & 255] << 16) ^
                (f[255 & s] << 8) ^
                f[(s >> 24) & 255] ^
                (l[a] << 24)),
              (a += 1),
              8 != i)
            )
              for (e = 1; e < i; e++) o[e] ^= o[e - 1]
            else {
              for (e = 1; e < i / 2; e++) o[e] ^= o[e - 1]
              ;(s = o[i / 2 - 1]),
                (o[i / 2] ^=
                  f[255 & s] ^ (f[(s >> 8) & 255] << 8) ^ (f[(s >> 16) & 255] << 16) ^ (f[(s >> 24) & 255] << 24))
              for (e = i / 2 + 1; e < i; e++) o[e] ^= o[e - 1]
            }
            for (e = 0; e < i && u < n; )
              (c = u >> 2), (d = u % 4), (this._Ke[c][d] = o[e]), (this._Kd[t - c][d] = o[e++]), u++
          }
          for (var c = 1; c < t; c++)
            for (var d = 0; d < 4; d++)
              (s = this._Kd[c][d]),
                (this._Kd[c][d] = E[(s >> 24) & 255] ^ O[(s >> 16) & 255] ^ M[(s >> 8) & 255] ^ k[255 & s])
        }),
          (S.prototype.encrypt = function(t) {
            if (16 != t.length) throw new Error('invalid plaintext size (must be 16 bytes)')
            for (var e = this._Ke.length - 1, r = [0, 0, 0, 0], n = _(t), i = 0; i < 4; i++) n[i] ^= this._Ke[0][i]
            for (var s = 1; s < e; s++) {
              for (i = 0; i < 4; i++)
                r[i] =
                  p[(n[i] >> 24) & 255] ^
                  m[(n[(i + 1) % 4] >> 16) & 255] ^
                  g[(n[(i + 2) % 4] >> 8) & 255] ^
                  b[255 & n[(i + 3) % 4]] ^
                  this._Ke[s][i]
              n = r.slice()
            }
            var a,
              u = o(16)
            for (i = 0; i < 4; i++)
              (a = this._Ke[e][i]),
                (u[4 * i] = 255 & (f[(n[i] >> 24) & 255] ^ (a >> 24))),
                (u[4 * i + 1] = 255 & (f[(n[(i + 1) % 4] >> 16) & 255] ^ (a >> 16))),
                (u[4 * i + 2] = 255 & (f[(n[(i + 2) % 4] >> 8) & 255] ^ (a >> 8))),
                (u[4 * i + 3] = 255 & (f[255 & n[(i + 3) % 4]] ^ a))
            return u
          }),
          (S.prototype.decrypt = function(t) {
            if (16 != t.length) throw new Error('invalid ciphertext size (must be 16 bytes)')
            for (var e = this._Kd.length - 1, r = [0, 0, 0, 0], n = _(t), i = 0; i < 4; i++) n[i] ^= this._Kd[0][i]
            for (var s = 1; s < e; s++) {
              for (i = 0; i < 4; i++)
                r[i] =
                  y[(n[i] >> 24) & 255] ^
                  v[(n[(i + 3) % 4] >> 16) & 255] ^
                  w[(n[(i + 2) % 4] >> 8) & 255] ^
                  A[255 & n[(i + 1) % 4]] ^
                  this._Kd[s][i]
              n = r.slice()
            }
            var a,
              u = o(16)
            for (i = 0; i < 4; i++)
              (a = this._Kd[e][i]),
                (u[4 * i] = 255 & (d[(n[i] >> 24) & 255] ^ (a >> 24))),
                (u[4 * i + 1] = 255 & (d[(n[(i + 3) % 4] >> 16) & 255] ^ (a >> 16))),
                (u[4 * i + 2] = 255 & (d[(n[(i + 2) % 4] >> 8) & 255] ^ (a >> 8))),
                (u[4 * i + 3] = 255 & (d[255 & n[(i + 1) % 4]] ^ a))
            return u
          })
        var j = function(t) {
          if (!(this instanceof j)) throw Error('AES must be instanitated with `new`')
          ;(this.description = 'Electronic Code Block'), (this.name = 'ecb'), (this._aes = new S(t))
        }
        ;(j.prototype.encrypt = function(t) {
          if ((t = i(t)).length % 16 != 0) throw new Error('invalid plaintext size (must be multiple of 16 bytes)')
          for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16)
            s(t, r, 0, n, n + 16), s((r = this._aes.encrypt(r)), e, n)
          return e
        }),
          (j.prototype.decrypt = function(t) {
            if ((t = i(t)).length % 16 != 0) throw new Error('invalid ciphertext size (must be multiple of 16 bytes)')
            for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16)
              s(t, r, 0, n, n + 16), s((r = this._aes.decrypt(r)), e, n)
            return e
          })
        var N = function(t, e) {
          if (!(this instanceof N)) throw Error('AES must be instanitated with `new`')
          if (((this.description = 'Cipher Block Chaining'), (this.name = 'cbc'), e)) {
            if (16 != e.length) throw new Error('invalid initialation vector size (must be 16 bytes)')
          } else e = o(16)
          ;(this._lastCipherblock = i(e, !0)), (this._aes = new S(t))
        }
        ;(N.prototype.encrypt = function(t) {
          if ((t = i(t)).length % 16 != 0) throw new Error('invalid plaintext size (must be multiple of 16 bytes)')
          for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) {
            s(t, r, 0, n, n + 16)
            for (var a = 0; a < 16; a++) r[a] ^= this._lastCipherblock[a]
            ;(this._lastCipherblock = this._aes.encrypt(r)), s(this._lastCipherblock, e, n)
          }
          return e
        }),
          (N.prototype.decrypt = function(t) {
            if ((t = i(t)).length % 16 != 0) throw new Error('invalid ciphertext size (must be multiple of 16 bytes)')
            for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) {
              s(t, r, 0, n, n + 16), (r = this._aes.decrypt(r))
              for (var a = 0; a < 16; a++) e[n + a] = r[a] ^ this._lastCipherblock[a]
              s(t, this._lastCipherblock, 0, n, n + 16)
            }
            return e
          })
        var P = function(t, e, r) {
          if (!(this instanceof P)) throw Error('AES must be instanitated with `new`')
          if (((this.description = 'Cipher Feedback'), (this.name = 'cfb'), e)) {
            if (16 != e.length) throw new Error('invalid initialation vector size (must be 16 size)')
          } else e = o(16)
          r || (r = 1), (this.segmentSize = r), (this._shiftRegister = i(e, !0)), (this._aes = new S(t))
        }
        ;(P.prototype.encrypt = function(t) {
          if (t.length % this.segmentSize != 0) throw new Error('invalid plaintext size (must be segmentSize bytes)')
          for (var e, r = i(t, !0), n = 0; n < r.length; n += this.segmentSize) {
            e = this._aes.encrypt(this._shiftRegister)
            for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= e[o]
            s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
              s(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
          }
          return r
        }),
          (P.prototype.decrypt = function(t) {
            if (t.length % this.segmentSize != 0) throw new Error('invalid ciphertext size (must be segmentSize bytes)')
            for (var e, r = i(t, !0), n = 0; n < r.length; n += this.segmentSize) {
              e = this._aes.encrypt(this._shiftRegister)
              for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= e[o]
              s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
                s(t, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
            }
            return r
          })
        var x = function(t, e) {
          if (!(this instanceof x)) throw Error('AES must be instanitated with `new`')
          if (((this.description = 'Output Feedback'), (this.name = 'ofb'), e)) {
            if (16 != e.length) throw new Error('invalid initialation vector size (must be 16 bytes)')
          } else e = o(16)
          ;(this._lastPrecipher = i(e, !0)), (this._lastPrecipherIndex = 16), (this._aes = new S(t))
        }
        ;(x.prototype.encrypt = function(t) {
          for (var e = i(t, !0), r = 0; r < e.length; r++)
            16 === this._lastPrecipherIndex &&
              ((this._lastPrecipher = this._aes.encrypt(this._lastPrecipher)), (this._lastPrecipherIndex = 0)),
              (e[r] ^= this._lastPrecipher[this._lastPrecipherIndex++])
          return e
        }),
          (x.prototype.decrypt = x.prototype.encrypt)
        var C = function(t) {
          if (!(this instanceof C)) throw Error('Counter must be instanitated with `new`')
          0 === t || t || (t = 1), 'number' == typeof t ? ((this._counter = o(16)), this.setValue(t)) : this.setBytes(t)
        }
        ;(C.prototype.setValue = function(t) {
          if ('number' != typeof t || parseInt(t) != t) throw new Error('invalid counter value (must be an integer)')
          for (var e = 15; e >= 0; --e) (this._counter[e] = t % 256), (t >>= 8)
        }),
          (C.prototype.setBytes = function(t) {
            if (16 != (t = i(t, !0)).length) throw new Error('invalid counter bytes size (must be 16 bytes)')
            this._counter = t
          }),
          (C.prototype.increment = function() {
            for (var t = 15; t >= 0; t--) {
              if (255 !== this._counter[t]) {
                this._counter[t]++
                break
              }
              this._counter[t] = 0
            }
          })
        var T = function(t, e) {
          if (!(this instanceof T)) throw Error('AES must be instanitated with `new`')
          ;(this.description = 'Counter'),
            (this.name = 'ctr'),
            e instanceof C || (e = new C(e)),
            (this._counter = e),
            (this._remainingCounter = null),
            (this._remainingCounterIndex = 16),
            (this._aes = new S(t))
        }
        ;(T.prototype.encrypt = function(t) {
          for (var e = i(t, !0), r = 0; r < e.length; r++)
            16 === this._remainingCounterIndex &&
              ((this._remainingCounter = this._aes.encrypt(this._counter._counter)),
              (this._remainingCounterIndex = 0),
              this._counter.increment()),
              (e[r] ^= this._remainingCounter[this._remainingCounterIndex++])
          return e
        }),
          (T.prototype.decrypt = T.prototype.encrypt)
        var R = {
          AES: S,
          Counter: C,
          ModeOfOperation: { ecb: j, cbc: N, cfb: P, ofb: x, ctr: T },
          utils: { hex: c, utf8: u },
          padding: {
            pkcs7: {
              pad: function(t) {
                var e = 16 - ((t = i(t, !0)).length % 16),
                  r = o(t.length + e)
                s(t, r)
                for (var n = t.length; n < r.length; n++) r[n] = e
                return r
              },
              strip: function(t) {
                if ((t = i(t, !0)).length < 16) throw new Error('PKCS#7 invalid length')
                var e = t[t.length - 1]
                if (e > 16) throw new Error('PKCS#7 padding byte out of range')
                for (var r = t.length - e, n = 0; n < e; n++)
                  if (t[r + n] !== e) throw new Error('PKCS#7 invalid padding byte')
                var a = o(r)
                return s(t, a, 0, 0, r), a
              },
            },
          },
          _arrayTest: { coerceArray: i, createArray: o, copyArray: s },
        }
        t.exports = R
      })()
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return u
      }),
        r.d(e, 'b', function() {
          return c
        })
      var n = r(7),
        i = (r(0), r(1)),
        o = r(2)
      var s = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const a = new o.b('abstract-provider/5.7.0')
      class u extends i.a {
        static isForkEvent(t) {
          return !(!t || !t._isForkEvent)
        }
      }
      class c {
        constructor() {
          a.checkAbstract(new.target, c), Object(i.d)(this, '_isProvider', !0)
        }
        getFeeData() {
          return s(this, void 0, void 0, function*() {
            const { block: t, gasPrice: e } = yield Object(i.f)({
              block: this.getBlock('latest'),
              gasPrice: this.getGasPrice().catch(t => null),
            })
            let r = null,
              o = null,
              s = null
            return (
              t &&
                t.baseFeePerGas &&
                ((r = t.baseFeePerGas), (s = n.a.from('1500000000')), (o = t.baseFeePerGas.mul(2).add(s))),
              { lastBaseFeePerGas: r, maxFeePerGas: o, maxPriorityFeePerGas: s, gasPrice: e }
            )
          })
        }
        addListener(t, e) {
          return this.on(t, e)
        }
        removeListener(t, e) {
          return this.off(t, e)
        }
        static isProvider(t) {
          return !(!t || !t._isProvider)
        }
      }
    },
    function(t, e, r) {
      'use strict'
      var n = r(39),
        i = r(93)
      function o(t, e) {
        return (
          55296 == (64512 & t.charCodeAt(e)) && !(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1))
        )
      }
      function s(t) {
        return ((t >>> 24) | ((t >>> 8) & 65280) | ((t << 8) & 16711680) | ((255 & t) << 24)) >>> 0
      }
      function a(t) {
        return 1 === t.length ? '0' + t : t
      }
      function u(t) {
        return 7 === t.length
          ? '0' + t
          : 6 === t.length
          ? '00' + t
          : 5 === t.length
          ? '000' + t
          : 4 === t.length
          ? '0000' + t
          : 3 === t.length
          ? '00000' + t
          : 2 === t.length
          ? '000000' + t
          : 1 === t.length
          ? '0000000' + t
          : t
      }
      ;(e.inherits = i),
        (e.toArray = function(t, e) {
          if (Array.isArray(t)) return t.slice()
          if (!t) return []
          var r = []
          if ('string' == typeof t)
            if (e) {
              if ('hex' === e)
                for ((t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (t = '0' + t), i = 0; i < t.length; i += 2)
                  r.push(parseInt(t[i] + t[i + 1], 16))
            } else
              for (var n = 0, i = 0; i < t.length; i++) {
                var s = t.charCodeAt(i)
                s < 128
                  ? (r[n++] = s)
                  : s < 2048
                  ? ((r[n++] = (s >> 6) | 192), (r[n++] = (63 & s) | 128))
                  : o(t, i)
                  ? ((s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i))),
                    (r[n++] = (s >> 18) | 240),
                    (r[n++] = ((s >> 12) & 63) | 128),
                    (r[n++] = ((s >> 6) & 63) | 128),
                    (r[n++] = (63 & s) | 128))
                  : ((r[n++] = (s >> 12) | 224), (r[n++] = ((s >> 6) & 63) | 128), (r[n++] = (63 & s) | 128))
              }
          else for (i = 0; i < t.length; i++) r[i] = 0 | t[i]
          return r
        }),
        (e.toHex = function(t) {
          for (var e = '', r = 0; r < t.length; r++) e += a(t[r].toString(16))
          return e
        }),
        (e.htonl = s),
        (e.toHex32 = function(t, e) {
          for (var r = '', n = 0; n < t.length; n++) {
            var i = t[n]
            'little' === e && (i = s(i)), (r += u(i.toString(16)))
          }
          return r
        }),
        (e.zero2 = a),
        (e.zero8 = u),
        (e.join32 = function(t, e, r, i) {
          var o = r - e
          n(o % 4 == 0)
          for (var s = new Array(o / 4), a = 0, u = e; a < s.length; a++, u += 4) {
            var c
            ;(c =
              'big' === i
                ? (t[u] << 24) | (t[u + 1] << 16) | (t[u + 2] << 8) | t[u + 3]
                : (t[u + 3] << 24) | (t[u + 2] << 16) | (t[u + 1] << 8) | t[u]),
              (s[a] = c >>> 0)
          }
          return s
        }),
        (e.split32 = function(t, e) {
          for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
            var o = t[n]
            'big' === e
              ? ((r[i] = o >>> 24), (r[i + 1] = (o >>> 16) & 255), (r[i + 2] = (o >>> 8) & 255), (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24), (r[i + 2] = (o >>> 16) & 255), (r[i + 1] = (o >>> 8) & 255), (r[i] = 255 & o))
          }
          return r
        }),
        (e.rotr32 = function(t, e) {
          return (t >>> e) | (t << (32 - e))
        }),
        (e.rotl32 = function(t, e) {
          return (t << e) | (t >>> (32 - e))
        }),
        (e.sum32 = function(t, e) {
          return (t + e) >>> 0
        }),
        (e.sum32_3 = function(t, e, r) {
          return (t + e + r) >>> 0
        }),
        (e.sum32_4 = function(t, e, r, n) {
          return (t + e + r + n) >>> 0
        }),
        (e.sum32_5 = function(t, e, r, n, i) {
          return (t + e + r + n + i) >>> 0
        }),
        (e.sum64 = function(t, e, r, n) {
          var i = t[e],
            o = (n + t[e + 1]) >>> 0,
            s = (o < n ? 1 : 0) + r + i
          ;(t[e] = s >>> 0), (t[e + 1] = o)
        }),
        (e.sum64_hi = function(t, e, r, n) {
          return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0
        }),
        (e.sum64_lo = function(t, e, r, n) {
          return (e + n) >>> 0
        }),
        (e.sum64_4_hi = function(t, e, r, n, i, o, s, a) {
          var u = 0,
            c = e
          return (
            (u += (c = (c + n) >>> 0) < e ? 1 : 0),
            (u += (c = (c + o) >>> 0) < o ? 1 : 0),
            (t + r + i + s + (u += (c = (c + a) >>> 0) < a ? 1 : 0)) >>> 0
          )
        }),
        (e.sum64_4_lo = function(t, e, r, n, i, o, s, a) {
          return (e + n + o + a) >>> 0
        }),
        (e.sum64_5_hi = function(t, e, r, n, i, o, s, a, u, c) {
          var h = 0,
            l = e
          return (
            (h += (l = (l + n) >>> 0) < e ? 1 : 0),
            (h += (l = (l + o) >>> 0) < o ? 1 : 0),
            (h += (l = (l + a) >>> 0) < a ? 1 : 0),
            (t + r + i + s + u + (h += (l = (l + c) >>> 0) < c ? 1 : 0)) >>> 0
          )
        }),
        (e.sum64_5_lo = function(t, e, r, n, i, o, s, a, u, c) {
          return (e + n + o + a + c) >>> 0
        }),
        (e.rotr64_hi = function(t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0
        }),
        (e.rotr64_lo = function(t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0
        }),
        (e.shr64_hi = function(t, e, r) {
          return t >>> r
        }),
        (e.shr64_lo = function(t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0
        })
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return n
      })
      const n = 'abi/5.7.0'
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'd', function() {
        return i
      }),
        r.d(e, 'h', function() {
          return o
        }),
        r.d(e, 'e', function() {
          return s
        }),
        r.d(e, 'f', function() {
          return a
        }),
        r.d(e, 'g', function() {
          return u
        }),
        r.d(e, 'b', function() {
          return c
        }),
        r.d(e, 'c', function() {
          return h
        }),
        r.d(e, 'a', function() {
          return l
        })
      var n = r(7)
      const i = n.a.from(-1),
        o = n.a.from(0),
        s = n.a.from(1),
        a = n.a.from(2),
        u = n.a.from('1000000000000000000'),
        c = n.a.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        h = n.a.from('-0x8000000000000000000000000000000000000000000000000000000000000000'),
        l = n.a.from('0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return s
      })
      var n = r(0),
        i = r(1)
      class o {
        constructor(t) {
          Object(i.d)(this, 'alphabet', t),
            Object(i.d)(this, 'base', t.length),
            Object(i.d)(this, '_alphabetMap', {}),
            Object(i.d)(this, '_leader', t.charAt(0))
          for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e
        }
        encode(t) {
          let e = Object(n.a)(t)
          if (0 === e.length) return ''
          let r = [0]
          for (let t = 0; t < e.length; ++t) {
            let n = e[t]
            for (let t = 0; t < r.length; ++t) (n += r[t] << 8), (r[t] = n % this.base), (n = (n / this.base) | 0)
            for (; n > 0; ) r.push(n % this.base), (n = (n / this.base) | 0)
          }
          let i = ''
          for (let t = 0; 0 === e[t] && t < e.length - 1; ++t) i += this._leader
          for (let t = r.length - 1; t >= 0; --t) i += this.alphabet[r[t]]
          return i
        }
        decode(t) {
          if ('string' != typeof t) throw new TypeError('Expected String')
          let e = []
          if (0 === t.length) return new Uint8Array(e)
          e.push(0)
          for (let r = 0; r < t.length; r++) {
            let n = this._alphabetMap[t[r]]
            if (void 0 === n) throw new Error('Non-base' + this.base + ' character')
            let i = n
            for (let t = 0; t < e.length; ++t) (i += e[t] * this.base), (e[t] = 255 & i), (i >>= 8)
            for (; i > 0; ) e.push(255 & i), (i >>= 8)
          }
          for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r) e.push(0)
          return Object(n.a)(new Uint8Array(e.reverse()))
        }
      }
      new o('abcdefghijklmnopqrstuvwxyz234567')
      const s = new o('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz')
    },
    function(t, e) {
      t.exports = require('stream')
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'b', function() {
        return i
      }),
        r.d(e, 'c', function() {
          return o
        }),
        r.d(e, 'a', function() {
          return s
        })
      var n = r(4)
      function i(t) {
        let e = null
        try {
          e = JSON.parse(t)
        } catch (t) {
          return !1
        }
        return e.encseed && e.ethaddr
      }
      function o(t) {
        let e = null
        try {
          e = JSON.parse(t)
        } catch (t) {
          return !1
        }
        return !(!e.version || parseInt(e.version) !== e.version || 3 !== parseInt(e.version))
      }
      function s(t) {
        if (i(t))
          try {
            return Object(n.a)(JSON.parse(t).ethaddr)
          } catch (t) {
            return null
          }
        if (o(t))
          try {
            return Object(n.a)(JSON.parse(t).address)
          } catch (t) {
            return null
          }
        return null
      }
    },
    function(t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, 'AddressZero', function() {
          return n.a
        }),
        r.d(e, 'NegativeOne', function() {
          return i.d
        }),
        r.d(e, 'Zero', function() {
          return i.h
        }),
        r.d(e, 'One', function() {
          return i.e
        }),
        r.d(e, 'Two', function() {
          return i.f
        }),
        r.d(e, 'WeiPerEther', function() {
          return i.g
        }),
        r.d(e, 'MaxUint256', function() {
          return i.b
        }),
        r.d(e, 'MinInt256', function() {
          return i.c
        }),
        r.d(e, 'MaxInt256', function() {
          return i.a
        }),
        r.d(e, 'HashZero', function() {
          return o.a
        }),
        r.d(e, 'EtherSymbol', function() {
          return s
        })
      var n = r(74),
        i = r(26),
        o = r(73)
      const s = 'Ξ'
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return o
      })
      var n = r(5),
        i = r(16)
      function o(t) {
        return Object(n.a)(Object(i.f)(t))
      }
    },
    ,
    function(t, e, r) {
      'use strict'
      r.d(e, 'b', function() {
        return _
      }),
        r.d(e, 'a', function() {
          return S
        }),
        r.d(e, 'c', function() {
          return j
        })
      var n = r(22),
        i = r.n(n),
        o = r(56),
        s = r.n(o),
        a = r(4),
        u = r(0),
        c = r(10),
        h = r(5),
        l = r(117),
        f = r(57),
        d = r(1),
        p = r(8),
        m = r(6),
        g = r(2),
        b = r(54),
        y = function(t, e, r, n) {
          return new (r || (r = Promise))(function(i, o) {
            function s(t) {
              try {
                u(n.next(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              try {
                u(n.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function u(t) {
              var e
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function(t) {
                        t(e)
                      })).then(s, a)
            }
            u((n = n.apply(t, e || [])).next())
          })
        }
      const v = new g.b(b.a)
      function w(t) {
        return null != t && t.mnemonic && t.mnemonic.phrase
      }
      class A extends d.a {
        isKeystoreAccount(t) {
          return !(!t || !t._isKeystoreAccount)
        }
      }
      function E(t, e) {
        const r = Object(m.b)(Object(m.c)(t, 'crypto/ciphertext'))
        if (
          Object(u.i)(Object(h.a)(Object(u.b)([e.slice(16, 32), r]))).substring(2) !==
          Object(m.c)(t, 'crypto/mac').toLowerCase()
        )
          throw new Error('invalid password')
        const n = (function(t, e, r) {
          if ('aes-128-ctr' === Object(m.c)(t, 'crypto/cipher')) {
            const n = Object(m.b)(Object(m.c)(t, 'crypto/cipherparams/iv')),
              o = new i.a.Counter(n),
              s = new i.a.ModeOfOperation.ctr(e, o)
            return Object(u.a)(s.decrypt(r))
          }
          return null
        })(t, e.slice(0, 16), r)
        n || v.throwError('unsupported cipher', g.b.errors.UNSUPPORTED_OPERATION, { operation: 'decrypt' })
        const o = e.slice(32, 64),
          s = Object(p.c)(n)
        if (t.address) {
          let e = t.address.toLowerCase()
          if (('0x' !== e.substring(0, 2) && (e = '0x' + e), Object(a.a)(e) !== s)) throw new Error('address mismatch')
        }
        const l = { _isKeystoreAccount: !0, address: s, privateKey: Object(u.i)(n) }
        if ('0.1' === Object(m.c)(t, 'x-ethers/version')) {
          const e = Object(m.b)(Object(m.c)(t, 'x-ethers/mnemonicCiphertext')),
            r = Object(m.b)(Object(m.c)(t, 'x-ethers/mnemonicCounter')),
            n = new i.a.Counter(r),
            s = new i.a.ModeOfOperation.ctr(o, n),
            a = Object(m.c)(t, 'x-ethers/path') || c.b,
            h = Object(m.c)(t, 'x-ethers/locale') || 'en',
            f = Object(u.a)(s.decrypt(e))
          try {
            const t = Object(c.c)(f, h),
              e = c.a.fromMnemonic(t, null, h).derivePath(a)
            if (e.privateKey != l.privateKey) throw new Error('mnemonic mismatch')
            l.mnemonic = e.mnemonic
          } catch (t) {
            if (t.code !== g.b.errors.INVALID_ARGUMENT || 'wordlist' !== t.argument) throw t
          }
        }
        return new A(l)
      }
      function O(t, e, r, n, i) {
        return Object(u.a)(Object(l.a)(t, e, r, n, i))
      }
      function M(t, e, r, n, i) {
        return Promise.resolve(O(t, e, r, n, i))
      }
      function k(t, e, r, n, i) {
        const o = Object(m.a)(e),
          s = Object(m.c)(t, 'crypto/kdf')
        if (s && 'string' == typeof s) {
          const e = function(t, e) {
            return v.throwArgumentError('invalid key-derivation function parameters', t, e)
          }
          if ('scrypt' === s.toLowerCase()) {
            const r = Object(m.b)(Object(m.c)(t, 'crypto/kdfparams/salt')),
              a = parseInt(Object(m.c)(t, 'crypto/kdfparams/n')),
              u = parseInt(Object(m.c)(t, 'crypto/kdfparams/r')),
              c = parseInt(Object(m.c)(t, 'crypto/kdfparams/p'))
            ;(a && u && c) || e('kdf', s), 0 != (a & (a - 1)) && e('N', a)
            const h = parseInt(Object(m.c)(t, 'crypto/kdfparams/dklen'))
            return 32 !== h && e('dklen', h), n(o, r, a, u, c, 64, i)
          }
          if ('pbkdf2' === s.toLowerCase()) {
            const n = Object(m.b)(Object(m.c)(t, 'crypto/kdfparams/salt'))
            let i = null
            const s = Object(m.c)(t, 'crypto/kdfparams/prf')
            'hmac-sha256' === s ? (i = 'sha256') : 'hmac-sha512' === s ? (i = 'sha512') : e('prf', s)
            const a = parseInt(Object(m.c)(t, 'crypto/kdfparams/c')),
              u = parseInt(Object(m.c)(t, 'crypto/kdfparams/dklen'))
            return 32 !== u && e('dklen', u), r(o, n, a, u, i)
          }
        }
        return v.throwArgumentError('unsupported key-derivation function', 'kdf', s)
      }
      function _(t, e) {
        const r = JSON.parse(t)
        return E(r, k(r, e, O, s.a.syncScrypt))
      }
      function S(t, e, r) {
        return y(this, void 0, void 0, function*() {
          const n = JSON.parse(t)
          return E(n, yield k(n, e, M, s.a.scrypt, r))
        })
      }
      function j(t, e, r, n) {
        try {
          if (Object(a.a)(t.address) !== Object(p.c)(t.privateKey)) throw new Error('address/privateKey mismatch')
          if (w(t)) {
            const e = t.mnemonic
            if (c.a.fromMnemonic(e.phrase, null, e.locale).derivePath(e.path || c.b).privateKey != t.privateKey)
              throw new Error('mnemonic mismatch')
          }
        } catch (t) {
          return Promise.reject(t)
        }
        'function' != typeof r || n || ((n = r), (r = {})), r || (r = {})
        const o = Object(u.a)(t.privateKey),
          l = Object(m.a)(e)
        let d = null,
          g = null,
          b = null
        if (w(t)) {
          const e = t.mnemonic
          ;(d = Object(u.a)(Object(c.f)(e.phrase, e.locale || 'en'))), (g = e.path || c.b), (b = e.locale || 'en')
        }
        let y = r.client
        y || (y = 'ethers.js')
        let v = null
        v = r.salt ? Object(u.a)(r.salt) : Object(f.a)(32)
        let A = null
        if (r.iv) {
          if (((A = Object(u.a)(r.iv)), 16 !== A.length)) throw new Error('invalid iv')
        } else A = Object(f.a)(16)
        let E = null
        if (r.uuid) {
          if (((E = Object(u.a)(r.uuid)), 16 !== E.length)) throw new Error('invalid uuid')
        } else E = Object(f.a)(16)
        let O = 1 << 17,
          M = 8,
          k = 1
        return (
          r.scrypt && (r.scrypt.N && (O = r.scrypt.N), r.scrypt.r && (M = r.scrypt.r), r.scrypt.p && (k = r.scrypt.p)),
          s.a.scrypt(l, v, O, M, k, 64, n).then(e => {
            const r = (e = Object(u.a)(e)).slice(0, 16),
              n = e.slice(16, 32),
              s = e.slice(32, 64),
              a = new i.a.Counter(A),
              c = new i.a.ModeOfOperation.ctr(r, a),
              l = Object(u.a)(c.encrypt(o)),
              p = Object(h.a)(Object(u.b)([n, l])),
              w = {
                address: t.address.substring(2).toLowerCase(),
                id: Object(m.d)(E),
                version: 3,
                crypto: {
                  cipher: 'aes-128-ctr',
                  cipherparams: { iv: Object(u.i)(A).substring(2) },
                  ciphertext: Object(u.i)(l).substring(2),
                  kdf: 'scrypt',
                  kdfparams: { salt: Object(u.i)(v).substring(2), n: O, dklen: 32, p: k, r: M },
                  mac: p.substring(2),
                },
              }
            if (d) {
              const t = Object(f.a)(16),
                e = new i.a.Counter(t),
                r = new i.a.ModeOfOperation.ctr(s, e),
                n = Object(u.a)(r.encrypt(d)),
                o = new Date(),
                a =
                  o.getUTCFullYear() +
                  '-' +
                  Object(m.e)(o.getUTCMonth() + 1, 2) +
                  '-' +
                  Object(m.e)(o.getUTCDate(), 2) +
                  'T' +
                  Object(m.e)(o.getUTCHours(), 2) +
                  '-' +
                  Object(m.e)(o.getUTCMinutes(), 2) +
                  '-' +
                  Object(m.e)(o.getUTCSeconds(), 2) +
                  '.0Z'
              w['x-ethers'] = {
                client: y,
                gethFilename: 'UTC--' + a + '--' + w.address,
                mnemonicCounter: Object(u.i)(t).substring(2),
                mnemonicCiphertext: Object(u.i)(n).substring(2),
                path: g,
                locale: b,
                version: '0.1',
              }
            }
            return JSON.stringify(w)
          })
        )
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return w
      }),
        r.d(e, 'b', function() {
          return A
        }),
        r.d(e, 'c', function() {
          return E
        })
      var n = r(4),
        i = r(23),
        o = r(21),
        s = r(0),
        a = r(188),
        u = r(189),
        c = r(10),
        h = r(5),
        l = r(1),
        f = r(57),
        d = r(17),
        p = r(33),
        m = r(55),
        g = r(8),
        b = r(2)
      var y = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const v = new b.b('wallet/5.7.0')
      class w extends o.a {
        constructor(t, e) {
          if ((super(), null != (r = t) && Object(s.l)(r.privateKey, 32) && null != r.address)) {
            const e = new d.a(t.privateKey)
            if (
              (Object(l.d)(this, '_signingKey', () => e),
              Object(l.d)(this, 'address', Object(g.c)(this.publicKey)),
              this.address !== Object(n.a)(t.address) &&
                v.throwArgumentError('privateKey/address mismatch', 'privateKey', '[REDACTED]'),
              (function(t) {
                const e = t.mnemonic
                return e && e.phrase
              })(t))
            ) {
              const e = t.mnemonic
              Object(l.d)(this, '_mnemonic', () => ({
                phrase: e.phrase,
                path: e.path || c.b,
                locale: e.locale || 'en',
              }))
              const r = this.mnemonic,
                n = c.a.fromMnemonic(r.phrase, null, r.locale).derivePath(r.path)
              Object(g.c)(n.privateKey) !== this.address &&
                v.throwArgumentError('mnemonic/address mismatch', 'privateKey', '[REDACTED]')
            } else Object(l.d)(this, '_mnemonic', () => null)
          } else {
            if (d.a.isSigningKey(t))
              'secp256k1' !== t.curve &&
                v.throwArgumentError('unsupported curve; must be secp256k1', 'privateKey', '[REDACTED]'),
                Object(l.d)(this, '_signingKey', () => t)
            else {
              'string' == typeof t && t.match(/^[0-9a-f]*$/i) && 64 === t.length && (t = '0x' + t)
              const e = new d.a(t)
              Object(l.d)(this, '_signingKey', () => e)
            }
            Object(l.d)(this, '_mnemonic', () => null), Object(l.d)(this, 'address', Object(g.c)(this.publicKey))
          }
          var r
          e && !i.b.isProvider(e) && v.throwArgumentError('invalid provider', 'provider', e),
            Object(l.d)(this, 'provider', e || null)
        }
        get mnemonic() {
          return this._mnemonic()
        }
        get privateKey() {
          return this._signingKey().privateKey
        }
        get publicKey() {
          return this._signingKey().publicKey
        }
        getAddress() {
          return Promise.resolve(this.address)
        }
        connect(t) {
          return new w(this, t)
        }
        signTransaction(t) {
          return Object(l.f)(t).then(e => {
            null != e.from &&
              (Object(n.a)(e.from) !== this.address &&
                v.throwArgumentError('transaction from address mismatch', 'transaction.from', t.from),
              delete e.from)
            const r = this._signingKey().signDigest(Object(h.a)(Object(g.f)(e)))
            return Object(g.f)(e, r)
          })
        }
        signMessage(t) {
          return y(this, void 0, void 0, function*() {
            return Object(s.m)(this._signingKey().signDigest(Object(a.a)(t)))
          })
        }
        _signTypedData(t, e, r) {
          return y(this, void 0, void 0, function*() {
            const n = yield u.a.resolveNames(
              t,
              e,
              r,
              t => (
                null == this.provider &&
                  v.throwError('cannot resolve ENS names without a provider', b.b.errors.UNSUPPORTED_OPERATION, {
                    operation: 'resolveName',
                    value: t,
                  }),
                this.provider.resolveName(t)
              ),
            )
            return Object(s.m)(this._signingKey().signDigest(u.a.hash(n.domain, e, n.value)))
          })
        }
        encrypt(t, e, r) {
          if (('function' != typeof e || r || ((r = e), (e = {})), r && 'function' != typeof r))
            throw new Error('invalid callback')
          return e || (e = {}), Object(p.c)(this, t, e, r)
        }
        static createRandom(t) {
          let e = Object(f.a)(16)
          t || (t = {}),
            t.extraEntropy && (e = Object(s.a)(Object(s.e)(Object(h.a)(Object(s.b)([e, t.extraEntropy])), 0, 16)))
          const r = Object(c.c)(e, t.locale)
          return w.fromMnemonic(r, t.path, t.locale)
        }
        static fromEncryptedJson(t, e, r) {
          return Object(m.a)(t, e, r).then(t => new w(t))
        }
        static fromEncryptedJsonSync(t, e) {
          return new w(Object(m.b)(t, e))
        }
        static fromMnemonic(t, e, r) {
          return e || (e = c.b), new w(c.a.fromMnemonic(t, null, r).derivePath(e))
        }
      }
      function A(t, e) {
        return Object(g.e)(Object(a.a)(t), e)
      }
      function E(t, e, r, n) {
        return Object(g.e)(u.a.hash(t, e, r), n)
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return S
      }),
        r.d(e, 'b', function() {
          return j
        }),
        r.d(e, 'c', function() {
          return N
        })
      var n = r(9),
        i = r(191),
        o = r(23),
        s = r(21),
        a = r(4),
        u = r(7),
        c = r(0),
        h = r(1),
        l = r(8),
        f = r(2)
      var d = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const p = new f.b('contracts/5.7.0'),
        m = {
          chainId: !0,
          data: !0,
          from: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          value: !0,
          type: !0,
          accessList: !0,
          maxFeePerGas: !0,
          maxPriorityFeePerGas: !0,
          customData: !0,
          ccipReadEnabled: !0,
        }
      function g(t, e) {
        return d(this, void 0, void 0, function*() {
          const r = yield e
          'string' != typeof r && p.throwArgumentError('invalid address or ENS name', 'name', r)
          try {
            return Object(a.a)(r)
          } catch (t) {}
          t ||
            p.throwError('a provider or signer is needed to resolve ENS names', f.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'resolveName',
            })
          const n = yield t.resolveName(r)
          return null == n && p.throwArgumentError('resolver or addr is not configured for ENS name', 'name', r), n
        })
      }
      function b(t, e, r) {
        return d(this, void 0, void 0, function*() {
          return Array.isArray(r)
            ? yield Promise.all(r.map((r, n) => b(t, Array.isArray(e) ? e[n] : e[r.name], r)))
            : 'address' === r.type
            ? yield g(t, e)
            : 'tuple' === r.type
            ? yield b(t, e, r.components)
            : 'array' === r.baseType
            ? Array.isArray(e)
              ? yield Promise.all(e.map(e => b(t, e, r.arrayChildren)))
              : Promise.reject(
                  p.makeError('invalid value for array', f.b.errors.INVALID_ARGUMENT, { argument: 'value', value: e }),
                )
            : e
        })
      }
      function y(t, e, r) {
        return d(this, void 0, void 0, function*() {
          let n = {}
          r.length === e.inputs.length + 1 && 'object' == typeof r[r.length - 1] && (n = Object(h.g)(r.pop())),
            p.checkArgumentCount(r.length, e.inputs.length, 'passed to contract'),
            t.signer
              ? n.from
                ? (n.from = Object(h.f)({ override: g(t.signer, n.from), signer: t.signer.getAddress() }).then(t =>
                    d(this, void 0, void 0, function*() {
                      return (
                        Object(a.a)(t.signer) !== t.override &&
                          p.throwError(
                            'Contract with a Signer cannot override from',
                            f.b.errors.UNSUPPORTED_OPERATION,
                            { operation: 'overrides.from' },
                          ),
                        t.override
                      )
                    }),
                  ))
                : (n.from = t.signer.getAddress())
              : n.from && (n.from = g(t.provider, n.from))
          const i = yield Object(h.f)({
              args: b(t.signer || t.provider, r, e.inputs),
              address: t.resolvedAddress,
              overrides: Object(h.f)(n) || {},
            }),
            o = t.interface.encodeFunctionData(e, i.args),
            s = { data: o, to: i.address },
            m = i.overrides
          if (
            (null != m.nonce && (s.nonce = u.a.from(m.nonce).toNumber()),
            null != m.gasLimit && (s.gasLimit = u.a.from(m.gasLimit)),
            null != m.gasPrice && (s.gasPrice = u.a.from(m.gasPrice)),
            null != m.maxFeePerGas && (s.maxFeePerGas = u.a.from(m.maxFeePerGas)),
            null != m.maxPriorityFeePerGas && (s.maxPriorityFeePerGas = u.a.from(m.maxPriorityFeePerGas)),
            null != m.from && (s.from = m.from),
            null != m.type && (s.type = m.type),
            null != m.accessList && (s.accessList = Object(l.b)(m.accessList)),
            null == s.gasLimit && null != e.gas)
          ) {
            let t = 21e3
            const r = Object(c.a)(o)
            for (let e = 0; e < r.length; e++) (t += 4), r[e] && (t += 64)
            s.gasLimit = u.a.from(e.gas).add(t)
          }
          if (m.value) {
            const t = u.a.from(m.value)
            t.isZero() ||
              e.payable ||
              p.throwError('non-payable method cannot override value', f.b.errors.UNSUPPORTED_OPERATION, {
                operation: 'overrides.value',
                value: n.value,
              }),
              (s.value = t)
          }
          m.customData && (s.customData = Object(h.g)(m.customData)),
            m.ccipReadEnabled && (s.ccipReadEnabled = !!m.ccipReadEnabled),
            delete n.nonce,
            delete n.gasLimit,
            delete n.gasPrice,
            delete n.from,
            delete n.value,
            delete n.type,
            delete n.accessList,
            delete n.maxFeePerGas,
            delete n.maxPriorityFeePerGas,
            delete n.customData,
            delete n.ccipReadEnabled
          const y = Object.keys(n).filter(t => null != n[t])
          return (
            y.length &&
              p.throwError(
                'cannot override ' + y.map(t => JSON.stringify(t)).join(','),
                f.b.errors.UNSUPPORTED_OPERATION,
                { operation: 'overrides', overrides: y },
              ),
            s
          )
        })
      }
      function v(t, e) {
        const r = e.wait.bind(e)
        e.wait = e =>
          r(e).then(
            e => (
              (e.events = e.logs.map(r => {
                let n = Object(h.c)(r),
                  i = null
                try {
                  i = t.interface.parseLog(r)
                } catch (t) {}
                return (
                  i &&
                    ((n.args = i.args),
                    (n.decode = (e, r) => t.interface.decodeEventLog(i.eventFragment, e, r)),
                    (n.event = i.name),
                    (n.eventSignature = i.signature)),
                  (n.removeListener = () => t.provider),
                  (n.getBlock = () => t.provider.getBlock(e.blockHash)),
                  (n.getTransaction = () => t.provider.getTransaction(e.transactionHash)),
                  (n.getTransactionReceipt = () => Promise.resolve(e)),
                  n
                )
              })),
              e
            ),
          )
      }
      function w(t, e, r) {
        const n = t.signer || t.provider
        return function(...i) {
          return d(this, void 0, void 0, function*() {
            let o = void 0
            if (i.length === e.inputs.length + 1 && 'object' == typeof i[i.length - 1]) {
              const t = Object(h.g)(i.pop())
              null != t.blockTag && (o = yield t.blockTag), delete t.blockTag, i.push(t)
            }
            null != t.deployTransaction && (yield t._deployed(o))
            const s = yield y(t, e, i),
              a = yield n.call(s, o)
            try {
              let n = t.interface.decodeFunctionResult(e, a)
              return r && 1 === e.outputs.length && (n = n[0]), n
            } catch (e) {
              throw (e.code === f.b.errors.CALL_EXCEPTION &&
                ((e.address = t.address), (e.args = i), (e.transaction = s)),
              e)
            }
          })
        }
      }
      function A(t, e, r) {
        return e.constant
          ? w(t, e, r)
          : (function(t, e) {
              return function(...r) {
                return d(this, void 0, void 0, function*() {
                  t.signer ||
                    p.throwError('sending a transaction requires a signer', f.b.errors.UNSUPPORTED_OPERATION, {
                      operation: 'sendTransaction',
                    }),
                    null != t.deployTransaction && (yield t._deployed())
                  const n = yield y(t, e, r),
                    i = yield t.signer.sendTransaction(n)
                  return v(t, i), i
                })
              }
            })(t, e)
      }
      function E(t) {
        return !t.address || (null != t.topics && 0 !== t.topics.length)
          ? (t.address || '*') +
              '@' +
              (t.topics ? t.topics.map(t => (Array.isArray(t) ? t.join('|') : t)).join(':') : '')
          : '*'
      }
      class O {
        constructor(t, e) {
          Object(h.d)(this, 'tag', t), Object(h.d)(this, 'filter', e), (this._listeners = [])
        }
        addListener(t, e) {
          this._listeners.push({ listener: t, once: e })
        }
        removeListener(t) {
          let e = !1
          this._listeners = this._listeners.filter(r => !(!e && r.listener === t) || ((e = !0), !1))
        }
        removeAllListeners() {
          this._listeners = []
        }
        listeners() {
          return this._listeners.map(t => t.listener)
        }
        listenerCount() {
          return this._listeners.length
        }
        run(t) {
          const e = this.listenerCount()
          return (
            (this._listeners = this._listeners.filter(e => {
              const r = t.slice()
              return (
                setTimeout(() => {
                  e.listener.apply(this, r)
                }, 0),
                !e.once
              )
            })),
            e
          )
        }
        prepareEvent(t) {}
        getEmit(t) {
          return [t]
        }
      }
      class M extends O {
        constructor() {
          super('error', null)
        }
      }
      class k extends O {
        constructor(t, e, r, n) {
          const i = { address: t }
          let o = e.getEventTopic(r)
          n
            ? (o !== n[0] && p.throwArgumentError('topic mismatch', 'topics', n), (i.topics = n.slice()))
            : (i.topics = [o]),
            super(E(i), i),
            Object(h.d)(this, 'address', t),
            Object(h.d)(this, 'interface', e),
            Object(h.d)(this, 'fragment', r)
        }
        prepareEvent(t) {
          super.prepareEvent(t),
            (t.event = this.fragment.name),
            (t.eventSignature = this.fragment.format()),
            (t.decode = (t, e) => this.interface.decodeEventLog(this.fragment, t, e))
          try {
            t.args = this.interface.decodeEventLog(this.fragment, t.data, t.topics)
          } catch (e) {
            ;(t.args = null), (t.decodeError = e)
          }
        }
        getEmit(t) {
          const e = Object(n.d)(t.args)
          if (e.length) throw e[0].error
          const r = (t.args || []).slice()
          return r.push(t), r
        }
      }
      class _ extends O {
        constructor(t, e) {
          super('*', { address: t }), Object(h.d)(this, 'address', t), Object(h.d)(this, 'interface', e)
        }
        prepareEvent(t) {
          super.prepareEvent(t)
          try {
            const e = this.interface.parseLog(t)
            ;(t.event = e.name),
              (t.eventSignature = e.signature),
              (t.decode = (t, r) => this.interface.decodeEventLog(e.eventFragment, t, r)),
              (t.args = e.args)
          } catch (t) {}
        }
      }
      class S {
        constructor(t, e, r) {
          Object(h.d)(this, 'interface', Object(h.e)(new.target, 'getInterface')(e)),
            null == r
              ? (Object(h.d)(this, 'provider', null), Object(h.d)(this, 'signer', null))
              : s.a.isSigner(r)
              ? (Object(h.d)(this, 'provider', r.provider || null), Object(h.d)(this, 'signer', r))
              : o.b.isProvider(r)
              ? (Object(h.d)(this, 'provider', r), Object(h.d)(this, 'signer', null))
              : p.throwArgumentError('invalid signer or provider', 'signerOrProvider', r),
            Object(h.d)(this, 'callStatic', {}),
            Object(h.d)(this, 'estimateGas', {}),
            Object(h.d)(this, 'functions', {}),
            Object(h.d)(this, 'populateTransaction', {}),
            Object(h.d)(this, 'filters', {})
          {
            const t = {}
            Object.keys(this.interface.events).forEach(e => {
              const r = this.interface.events[e]
              Object(h.d)(this.filters, e, (...t) => ({
                address: this.address,
                topics: this.interface.encodeFilterTopics(r, t),
              })),
                t[r.name] || (t[r.name] = []),
                t[r.name].push(e)
            }),
              Object.keys(t).forEach(e => {
                const r = t[e]
                1 === r.length
                  ? Object(h.d)(this.filters, e, this.filters[r[0]])
                  : p.warn(`Duplicate definition of ${e} (${r.join(', ')})`)
              })
          }
          if (
            (Object(h.d)(this, '_runningEvents', {}),
            Object(h.d)(this, '_wrappedEmits', {}),
            null == t && p.throwArgumentError('invalid contract address or ENS name', 'addressOrName', t),
            Object(h.d)(this, 'address', t),
            this.provider)
          )
            Object(h.d)(this, 'resolvedAddress', g(this.provider, t))
          else
            try {
              Object(h.d)(this, 'resolvedAddress', Promise.resolve(Object(a.a)(t)))
            } catch (t) {
              p.throwError(
                'provider is required to use ENS name as contract address',
                f.b.errors.UNSUPPORTED_OPERATION,
                { operation: 'new Contract' },
              )
            }
          this.resolvedAddress.catch(t => {})
          const n = {},
            i = {}
          Object.keys(this.interface.functions).forEach(t => {
            const e = this.interface.functions[t]
            if (i[t]) p.warn('Duplicate ABI entry for ' + JSON.stringify(t))
            else {
              i[t] = !0
              {
                const r = e.name
                n['%' + r] || (n['%' + r] = []), n['%' + r].push(t)
              }
              null == this[t] && Object(h.d)(this, t, A(this, e, !0)),
                null == this.functions[t] && Object(h.d)(this.functions, t, A(this, e, !1)),
                null == this.callStatic[t] && Object(h.d)(this.callStatic, t, w(this, e, !0)),
                null == this.populateTransaction[t] &&
                  Object(h.d)(
                    this.populateTransaction,
                    t,
                    (function(t, e) {
                      return function(...r) {
                        return y(t, e, r)
                      }
                    })(this, e),
                  ),
                null == this.estimateGas[t] &&
                  Object(h.d)(
                    this.estimateGas,
                    t,
                    (function(t, e) {
                      const r = t.signer || t.provider
                      return function(...n) {
                        return d(this, void 0, void 0, function*() {
                          r ||
                            p.throwError('estimate require a provider or signer', f.b.errors.UNSUPPORTED_OPERATION, {
                              operation: 'estimateGas',
                            })
                          const i = yield y(t, e, n)
                          return yield r.estimateGas(i)
                        })
                      }
                    })(this, e),
                  )
            }
          }),
            Object.keys(n).forEach(t => {
              const e = n[t]
              if (e.length > 1) return
              t = t.substring(1)
              const r = e[0]
              try {
                null == this[t] && Object(h.d)(this, t, this[r])
              } catch (t) {}
              null == this.functions[t] && Object(h.d)(this.functions, t, this.functions[r]),
                null == this.callStatic[t] && Object(h.d)(this.callStatic, t, this.callStatic[r]),
                null == this.populateTransaction[t] &&
                  Object(h.d)(this.populateTransaction, t, this.populateTransaction[r]),
                null == this.estimateGas[t] && Object(h.d)(this.estimateGas, t, this.estimateGas[r])
            })
        }
        static getContractAddress(t) {
          return Object(a.b)(t)
        }
        static getInterface(t) {
          return i.b.isInterface(t) ? t : new i.b(t)
        }
        deployed() {
          return this._deployed()
        }
        _deployed(t) {
          return (
            this._deployedPromise ||
              (this.deployTransaction
                ? (this._deployedPromise = this.deployTransaction.wait().then(() => this))
                : (this._deployedPromise = this.provider
                    .getCode(this.address, t)
                    .then(
                      t => (
                        '0x' === t &&
                          p.throwError('contract not deployed', f.b.errors.UNSUPPORTED_OPERATION, {
                            contractAddress: this.address,
                            operation: 'getDeployed',
                          }),
                        this
                      ),
                    ))),
            this._deployedPromise
          )
        }
        fallback(t) {
          this.signer ||
            p.throwError('sending a transactions require a signer', f.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'sendTransaction(fallback)',
            })
          const e = Object(h.g)(t || {})
          return (
            ['from', 'to'].forEach(function(t) {
              null != e[t] && p.throwError('cannot override ' + t, f.b.errors.UNSUPPORTED_OPERATION, { operation: t })
            }),
            (e.to = this.resolvedAddress),
            this.deployed().then(() => this.signer.sendTransaction(e))
          )
        }
        connect(t) {
          'string' == typeof t && (t = new s.b(t, this.provider))
          const e = new this.constructor(this.address, this.interface, t)
          return this.deployTransaction && Object(h.d)(e, 'deployTransaction', this.deployTransaction), e
        }
        attach(t) {
          return new this.constructor(t, this.interface, this.signer || this.provider)
        }
        static isIndexed(t) {
          return i.a.isIndexed(t)
        }
        _normalizeRunningEvent(t) {
          return this._runningEvents[t.tag] ? this._runningEvents[t.tag] : t
        }
        _getRunningEvent(t) {
          if ('string' == typeof t) {
            if ('error' === t) return this._normalizeRunningEvent(new M())
            if ('event' === t) return this._normalizeRunningEvent(new O('event', null))
            if ('*' === t) return this._normalizeRunningEvent(new _(this.address, this.interface))
            const e = this.interface.getEvent(t)
            return this._normalizeRunningEvent(new k(this.address, this.interface, e))
          }
          if (t.topics && t.topics.length > 0) {
            try {
              const e = t.topics[0]
              if ('string' != typeof e) throw new Error('invalid topic')
              const r = this.interface.getEvent(e)
              return this._normalizeRunningEvent(new k(this.address, this.interface, r, t.topics))
            } catch (t) {}
            const e = { address: this.address, topics: t.topics }
            return this._normalizeRunningEvent(new O(E(e), e))
          }
          return this._normalizeRunningEvent(new _(this.address, this.interface))
        }
        _checkRunningEvents(t) {
          if (0 === t.listenerCount()) {
            delete this._runningEvents[t.tag]
            const e = this._wrappedEmits[t.tag]
            e && t.filter && (this.provider.off(t.filter, e), delete this._wrappedEmits[t.tag])
          }
        }
        _wrapEvent(t, e, r) {
          const n = Object(h.c)(e)
          return (
            (n.removeListener = () => {
              r && (t.removeListener(r), this._checkRunningEvents(t))
            }),
            (n.getBlock = () => this.provider.getBlock(e.blockHash)),
            (n.getTransaction = () => this.provider.getTransaction(e.transactionHash)),
            (n.getTransactionReceipt = () => this.provider.getTransactionReceipt(e.transactionHash)),
            t.prepareEvent(n),
            n
          )
        }
        _addEventListener(t, e, r) {
          if (
            (this.provider ||
              p.throwError('events require a provider or a signer with a provider', f.b.errors.UNSUPPORTED_OPERATION, {
                operation: 'once',
              }),
            t.addListener(e, r),
            (this._runningEvents[t.tag] = t),
            !this._wrappedEmits[t.tag])
          ) {
            const r = r => {
              let n = this._wrapEvent(t, r, e)
              if (null == n.decodeError)
                try {
                  const e = t.getEmit(n)
                  this.emit(t.filter, ...e)
                } catch (t) {
                  n.decodeError = t.error
                }
              null != t.filter && this.emit('event', n), null != n.decodeError && this.emit('error', n.decodeError, n)
            }
            ;(this._wrappedEmits[t.tag] = r), null != t.filter && this.provider.on(t.filter, r)
          }
        }
        queryFilter(t, e, r) {
          const n = this._getRunningEvent(t),
            i = Object(h.g)(n.filter)
          return (
            'string' == typeof e && Object(c.l)(e, 32)
              ? (null != r && p.throwArgumentError('cannot specify toBlock with blockhash', 'toBlock', r),
                (i.blockHash = e))
              : ((i.fromBlock = null != e ? e : 0), (i.toBlock = null != r ? r : 'latest')),
            this.provider.getLogs(i).then(t => t.map(t => this._wrapEvent(n, t, null)))
          )
        }
        on(t, e) {
          return this._addEventListener(this._getRunningEvent(t), e, !1), this
        }
        once(t, e) {
          return this._addEventListener(this._getRunningEvent(t), e, !0), this
        }
        emit(t, ...e) {
          if (!this.provider) return !1
          const r = this._getRunningEvent(t),
            n = r.run(e) > 0
          return this._checkRunningEvents(r), n
        }
        listenerCount(t) {
          return this.provider
            ? null == t
              ? Object.keys(this._runningEvents).reduce((t, e) => t + this._runningEvents[e].listenerCount(), 0)
              : this._getRunningEvent(t).listenerCount()
            : 0
        }
        listeners(t) {
          if (!this.provider) return []
          if (null == t) {
            const t = []
            for (let e in this._runningEvents)
              this._runningEvents[e].listeners().forEach(e => {
                t.push(e)
              })
            return t
          }
          return this._getRunningEvent(t).listeners()
        }
        removeAllListeners(t) {
          if (!this.provider) return this
          if (null == t) {
            for (const t in this._runningEvents) {
              const e = this._runningEvents[t]
              e.removeAllListeners(), this._checkRunningEvents(e)
            }
            return this
          }
          const e = this._getRunningEvent(t)
          return e.removeAllListeners(), this._checkRunningEvents(e), this
        }
        off(t, e) {
          if (!this.provider) return this
          const r = this._getRunningEvent(t)
          return r.removeListener(e), this._checkRunningEvents(r), this
        }
        removeListener(t, e) {
          return this.off(t, e)
        }
      }
      class j extends S {}
      class N {
        constructor(t, e, r) {
          let n = null
          ;(n =
            'string' == typeof e
              ? e
              : Object(c.j)(e)
              ? Object(c.i)(e)
              : e && 'string' == typeof e.object
              ? e.object
              : '!'),
            '0x' !== n.substring(0, 2) && (n = '0x' + n),
            (!Object(c.l)(n) || n.length % 2) && p.throwArgumentError('invalid bytecode', 'bytecode', e),
            r && !s.a.isSigner(r) && p.throwArgumentError('invalid signer', 'signer', r),
            Object(h.d)(this, 'bytecode', n),
            Object(h.d)(this, 'interface', Object(h.e)(new.target, 'getInterface')(t)),
            Object(h.d)(this, 'signer', r || null)
        }
        getDeployTransaction(...t) {
          let e = {}
          if (t.length === this.interface.deploy.inputs.length + 1 && 'object' == typeof t[t.length - 1]) {
            e = Object(h.g)(t.pop())
            for (const t in e) if (!m[t]) throw new Error('unknown transaction override ' + t)
          }
          if (
            (['data', 'from', 'to'].forEach(t => {
              null != e[t] && p.throwError('cannot override ' + t, f.b.errors.UNSUPPORTED_OPERATION, { operation: t })
            }),
            e.value)
          ) {
            u.a.from(e.value).isZero() ||
              this.interface.deploy.payable ||
              p.throwError('non-payable constructor cannot override value', f.b.errors.UNSUPPORTED_OPERATION, {
                operation: 'overrides.value',
                value: e.value,
              })
          }
          return (
            p.checkArgumentCount(t.length, this.interface.deploy.inputs.length, ' in Contract constructor'),
            (e.data = Object(c.i)(Object(c.b)([this.bytecode, this.interface.encodeDeploy(t)]))),
            e
          )
        }
        deploy(...t) {
          return d(this, void 0, void 0, function*() {
            let e = {}
            t.length === this.interface.deploy.inputs.length + 1 && (e = t.pop()),
              p.checkArgumentCount(t.length, this.interface.deploy.inputs.length, ' in Contract constructor')
            const r = yield b(this.signer, t, this.interface.deploy.inputs)
            r.push(e)
            const n = this.getDeployTransaction(...r),
              i = yield this.signer.sendTransaction(n),
              o = Object(h.e)(this.constructor, 'getContractAddress')(i),
              s = Object(h.e)(this.constructor, 'getContract')(o, this.interface, this.signer)
            return v(s, i), Object(h.d)(s, 'deployTransaction', i), s
          })
        }
        attach(t) {
          return this.constructor.getContract(t, this.interface, this.signer)
        }
        connect(t) {
          return new this.constructor(this.interface, this.bytecode, t)
        }
        static fromSolidity(t, e) {
          null == t &&
            p.throwError('missing compiler output', f.b.errors.MISSING_ARGUMENT, { argument: 'compilerOutput' }),
            'string' == typeof t && (t = JSON.parse(t))
          const r = t.abi
          let n = null
          return t.bytecode ? (n = t.bytecode) : t.evm && t.evm.bytecode && (n = t.evm.bytecode), new this(r, n, e)
        }
        static getInterface(t) {
          return j.getInterface(t)
        }
        static getContractAddress(t) {
          return Object(a.b)(t)
        }
        static getContract(t, e, r) {
          return new j(t, e, r)
        }
      }
    },
    function(t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, 'Signer', function() {
          return a.a
        }),
        r.d(e, 'Wallet', function() {
          return u.a
        }),
        r.d(e, 'VoidSigner', function() {
          return a.b
        }),
        r.d(e, 'getDefaultProvider', function() {
          return h.getDefaultProvider
        }),
        r.d(e, 'providers', function() {
          return h
        }),
        r.d(e, 'BaseContract', function() {
          return i.a
        }),
        r.d(e, 'Contract', function() {
          return i.b
        }),
        r.d(e, 'ContractFactory', function() {
          return i.c
        }),
        r.d(e, 'BigNumber', function() {
          return o.a
        }),
        r.d(e, 'FixedNumber', function() {
          return s.a
        }),
        r.d(e, 'constants', function() {
          return c
        }),
        r.d(e, 'errors', function() {
          return j.a
        }),
        r.d(e, 'logger', function() {
          return pt
        }),
        r.d(e, 'utils', function() {
          return n
        }),
        r.d(e, 'wordlists', function() {
          return l.a
        }),
        r.d(e, 'version', function() {
          return dt.a
        }),
        r.d(e, 'Wordlist', function() {
          return f.a
        })
      var n = {}
      r.r(n),
        r.d(n, 'AbiCoder', function() {
          return d.a
        }),
        r.d(n, 'defaultAbiCoder', function() {
          return d.b
        }),
        r.d(n, 'Fragment', function() {
          return p.e
        }),
        r.d(n, 'ConstructorFragment', function() {
          return p.a
        }),
        r.d(n, 'ErrorFragment', function() {
          return p.b
        }),
        r.d(n, 'EventFragment', function() {
          return p.c
        }),
        r.d(n, 'FunctionFragment', function() {
          return p.f
        }),
        r.d(n, 'ParamType', function() {
          return p.g
        }),
        r.d(n, 'FormatTypes', function() {
          return p.d
        }),
        r.d(n, 'checkResultErrors', function() {
          return m.d
        }),
        r.d(n, 'Logger', function() {
          return j.b
        }),
        r.d(n, 'RLP', function() {
          return G
        }),
        r.d(n, '_fetchData', function() {
          return lt.a
        }),
        r.d(n, 'fetchJson', function() {
          return lt.b
        }),
        r.d(n, 'poll', function() {
          return lt.c
        }),
        r.d(n, 'checkProperties', function() {
          return U.b
        }),
        r.d(n, 'deepCopy', function() {
          return U.c
        }),
        r.d(n, 'defineReadOnly', function() {
          return U.d
        }),
        r.d(n, 'getStatic', function() {
          return U.e
        }),
        r.d(n, 'resolveProperties', function() {
          return U.f
        }),
        r.d(n, 'shallowCopy', function() {
          return U.g
        }),
        r.d(n, 'arrayify', function() {
          return w.a
        }),
        r.d(n, 'concat', function() {
          return w.b
        }),
        r.d(n, 'stripZeros', function() {
          return w.o
        }),
        r.d(n, 'zeroPad', function() {
          return w.p
        }),
        r.d(n, 'isBytes', function() {
          return w.j
        }),
        r.d(n, 'isBytesLike', function() {
          return w.k
        }),
        r.d(n, 'defaultPath', function() {
          return k.b
        }),
        r.d(n, 'HDNode', function() {
          return k.a
        }),
        r.d(n, 'SigningKey', function() {
          return z.a
        }),
        r.d(n, 'Interface', function() {
          return g.b
        }),
        r.d(n, 'LogDescription', function() {
          return g.c
        }),
        r.d(n, 'TransactionDescription', function() {
          return g.d
        }),
        r.d(n, 'base58', function() {
          return v.a
        }),
        r.d(n, 'base64', function() {
          return y
        }),
        r.d(n, 'hexlify', function() {
          return w.i
        }),
        r.d(n, 'isHexString', function() {
          return w.l
        }),
        r.d(n, 'hexConcat', function() {
          return w.c
        }),
        r.d(n, 'hexStripZeros', function() {
          return w.f
        }),
        r.d(n, 'hexValue', function() {
          return w.g
        }),
        r.d(n, 'hexZeroPad', function() {
          return w.h
        }),
        r.d(n, 'hexDataLength', function() {
          return w.d
        }),
        r.d(n, 'hexDataSlice', function() {
          return w.e
        }),
        r.d(n, 'nameprep', function() {
          return $
        }),
        r.d(n, '_toEscapedUtf8String', function() {
          return P.d
        }),
        r.d(n, 'toUtf8Bytes', function() {
          return P.f
        }),
        r.d(n, 'toUtf8CodePoints', function() {
          return P.g
        }),
        r.d(n, 'toUtf8String', function() {
          return P.h
        }),
        r.d(n, 'Utf8ErrorFuncs', function() {
          return P.b
        }),
        r.d(n, 'formatBytes32String', function() {
          return et
        }),
        r.d(n, 'parseBytes32String', function() {
          return rt
        }),
        r.d(n, 'dnsEncode', function() {
          return A.a
        }),
        r.d(n, 'hashMessage', function() {
          return E.a
        }),
        r.d(n, 'namehash', function() {
          return A.c
        }),
        r.d(n, 'isValidName', function() {
          return A.b
        }),
        r.d(n, 'id', function() {
          return O.a
        }),
        r.d(n, '_TypedDataEncoder', function() {
          return M.a
        }),
        r.d(n, 'getAddress', function() {
          return b.a
        }),
        r.d(n, 'getIcapAddress', function() {
          return b.d
        }),
        r.d(n, 'getContractAddress', function() {
          return b.b
        }),
        r.d(n, 'getCreate2Address', function() {
          return b.c
        }),
        r.d(n, 'isAddress', function() {
          return b.e
        }),
        r.d(n, 'formatEther', function() {
          return ct
        }),
        r.d(n, 'parseEther', function() {
          return ht
        }),
        r.d(n, 'formatUnits', function() {
          return at
        }),
        r.d(n, 'parseUnits', function() {
          return ut
        }),
        r.d(n, 'commify', function() {
          return st
        }),
        r.d(n, 'computeHmac', function() {
          return N.a
        }),
        r.d(n, 'keccak256', function() {
          return S.a
        }),
        r.d(n, 'ripemd160', function() {
          return N.b
        }),
        r.d(n, 'sha256', function() {
          return N.c
        }),
        r.d(n, 'sha512', function() {
          return N.d
        }),
        r.d(n, 'randomBytes', function() {
          return D.a
        }),
        r.d(n, 'shuffled', function() {
          return L.a
        }),
        r.d(n, 'solidityPack', function() {
          return I
        }),
        r.d(n, 'solidityKeccak256', function() {
          return B
        }),
        r.d(n, 'soliditySha256', function() {
          return F
        }),
        r.d(n, 'splitSignature', function() {
          return w.n
        }),
        r.d(n, 'joinSignature', function() {
          return w.m
        }),
        r.d(n, 'accessListify', function() {
          return nt.b
        }),
        r.d(n, 'parseTransaction', function() {
          return nt.d
        }),
        r.d(n, 'serializeTransaction', function() {
          return nt.f
        }),
        r.d(n, 'TransactionTypes', function() {
          return nt.a
        }),
        r.d(n, 'getJsonWalletAddress', function() {
          return _.a
        }),
        r.d(n, 'computeAddress', function() {
          return nt.c
        }),
        r.d(n, 'recoverAddress', function() {
          return nt.e
        }),
        r.d(n, 'computePublicKey', function() {
          return z.b
        }),
        r.d(n, 'recoverPublicKey', function() {
          return z.c
        }),
        r.d(n, 'verifyMessage', function() {
          return u.b
        }),
        r.d(n, 'verifyTypedData', function() {
          return u.c
        }),
        r.d(n, 'getAccountPath', function() {
          return k.d
        }),
        r.d(n, 'mnemonicToEntropy', function() {
          return k.f
        }),
        r.d(n, 'entropyToMnemonic', function() {
          return k.c
        }),
        r.d(n, 'isValidMnemonic', function() {
          return k.e
        }),
        r.d(n, 'mnemonicToSeed', function() {
          return k.g
        }),
        r.d(n, 'SupportedAlgorithm', function() {
          return ft.a
        }),
        r.d(n, 'UnicodeNormalizationForm', function() {
          return P.a
        }),
        r.d(n, 'Utf8ErrorReason', function() {
          return P.c
        }),
        r.d(n, 'Indexed', function() {
          return g.a
        })
      var i = r(35),
        o = r(7),
        s = r(132),
        a = r(21),
        u = r(34),
        c = r(30),
        h = r(46),
        l = r(179),
        f = r(49),
        d = r(82),
        p = r(18),
        m = r(9),
        g = r(191),
        b = r(4),
        y = r(42),
        v = r(27),
        w = r(0),
        A = r(267),
        E = r(188),
        O = r(31),
        M = r(189),
        k = r(10),
        _ = r(29),
        S = r(5),
        j = r(2),
        N = r(83),
        P = r(16)
      const x = new RegExp('^bytes([0-9]+)$'),
        C = new RegExp('^(u?int)([0-9]*)$'),
        T = new RegExp('^(.*)\\[([0-9]*)\\]$'),
        R = new j.b('solidity/5.7.0')
      function I(t, e) {
        t.length != e.length && R.throwArgumentError('wrong number of values; expected ${ types.length }', 'values', e)
        const r = []
        return (
          t.forEach(function(t, n) {
            r.push(
              (function t(e, r, n) {
                switch (e) {
                  case 'address':
                    return n ? Object(w.p)(r, 32) : Object(w.a)(r)
                  case 'string':
                    return Object(P.f)(r)
                  case 'bytes':
                    return Object(w.a)(r)
                  case 'bool':
                    return (r = r ? '0x01' : '0x00'), n ? Object(w.p)(r, 32) : Object(w.a)(r)
                }
                let i = e.match(C)
                if (i) {
                  let t = parseInt(i[2] || '256')
                  return (
                    ((i[2] && String(t) !== i[2]) || t % 8 != 0 || 0 === t || t > 256) &&
                      R.throwArgumentError('invalid number type', 'type', e),
                    n && (t = 256),
                    (r = o.a.from(r).toTwos(t)),
                    Object(w.p)(r, t / 8)
                  )
                }
                if (((i = e.match(x)), i)) {
                  const t = parseInt(i[1])
                  return (
                    (String(t) !== i[1] || 0 === t || t > 32) && R.throwArgumentError('invalid bytes type', 'type', e),
                    Object(w.a)(r).byteLength !== t && R.throwArgumentError('invalid value for ' + e, 'value', r),
                    n
                      ? Object(w.a)(
                          (r + '0000000000000000000000000000000000000000000000000000000000000000').substring(0, 66),
                        )
                      : r
                  )
                }
                if (((i = e.match(T)), i && Array.isArray(r))) {
                  const n = i[1]
                  parseInt(i[2] || String(r.length)) != r.length &&
                    R.throwArgumentError('invalid array length for ' + e, 'value', r)
                  const o = []
                  return (
                    r.forEach(function(e) {
                      o.push(t(n, e, !0))
                    }),
                    Object(w.b)(o)
                  )
                }
                return R.throwArgumentError('invalid type', 'type', e)
              })(t, e[n]),
            )
          }),
          Object(w.i)(Object(w.b)(r))
        )
      }
      function B(t, e) {
        return Object(S.a)(I(t, e))
      }
      function F(t, e) {
        return Object(N.c)(I(t, e))
      }
      var D = r(57),
        L = r(190),
        U = r(1),
        G = r(20),
        z = r(17)
      function q(t, e) {
        e ||
          (e = function(t) {
            return [parseInt(t, 16)]
          })
        let r = 0,
          n = {}
        return (
          t.split(',').forEach(t => {
            let i = t.split(':')
            ;(r += parseInt(i[0], 16)), (n[r] = e(i[1]))
          }),
          n
        )
      }
      function K(t) {
        let e = 0
        return t.split(',').map(t => {
          let r = t.split('-')
          1 === r.length ? (r[1] = '0') : '' === r[1] && (r[1] = '1')
          let n = e + parseInt(r[0], 16)
          return (e = parseInt(r[1], 16)), { l: n, h: e }
        })
      }
      function H(t, e) {
        let r = 0
        for (let n = 0; n < e.length; n++) {
          let i = e[n]
          if (((r += i.l), t >= r && t <= r + i.h && (t - r) % (i.d || 1) == 0)) {
            if (i.e && -1 !== i.e.indexOf(t - r)) continue
            return i
          }
        }
        return null
      }
      const J = K(
          '221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d',
        ),
        V = 'ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff'.split(',').map(t => parseInt(t, 16)),
        W = [
          { h: 25, s: 32, l: 65 },
          { h: 30, s: 32, e: [23], l: 127 },
          { h: 54, s: 1, e: [48], l: 64, d: 2 },
          { h: 14, s: 1, l: 57, d: 2 },
          { h: 44, s: 1, l: 17, d: 2 },
          { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
          { h: 16, s: 1, l: 68, d: 2 },
          { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
          { h: 26, s: 32, e: [17], l: 435 },
          { h: 22, s: 1, l: 71, d: 2 },
          { h: 15, s: 80, l: 40 },
          { h: 31, s: 32, l: 16 },
          { h: 32, s: 1, l: 80, d: 2 },
          { h: 52, s: 1, l: 42, d: 2 },
          { h: 12, s: 1, l: 55, d: 2 },
          { h: 40, s: 1, e: [38], l: 15, d: 2 },
          { h: 14, s: 1, l: 48, d: 2 },
          { h: 37, s: 48, l: 49 },
          { h: 148, s: 1, l: 6351, d: 2 },
          { h: 88, s: 1, l: 160, d: 2 },
          { h: 15, s: 16, l: 704 },
          { h: 25, s: 26, l: 854 },
          { h: 25, s: 32, l: 55915 },
          { h: 37, s: 40, l: 1247 },
          { h: 25, s: -119711, l: 53248 },
          { h: 25, s: -119763, l: 52 },
          { h: 25, s: -119815, l: 52 },
          { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
          { h: 25, s: -119919, l: 52 },
          { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
          { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
          { h: 25, s: -120075, l: 52 },
          { h: 25, s: -120127, l: 52 },
          { h: 25, s: -120179, l: 52 },
          { h: 25, s: -120231, l: 52 },
          { h: 25, s: -120283, l: 52 },
          { h: 25, s: -120335, l: 52 },
          { h: 24, s: -119543, e: [17], l: 56 },
          { h: 24, s: -119601, e: [17], l: 58 },
          { h: 24, s: -119659, e: [17], l: 58 },
          { h: 24, s: -119717, e: [17], l: 58 },
          { h: 24, s: -119775, e: [17], l: 58 },
        ],
        Q = q(
          'b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3',
        ),
        Y = q(
          '179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7',
        ),
        Z = q(
          'df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D',
          function(t) {
            if (t.length % 4 != 0) throw new Error('bad data')
            let e = []
            for (let r = 0; r < t.length; r += 4) e.push(parseInt(t.substring(r, r + 4), 16))
            return e
          },
        ),
        X = K(
          '80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001',
        )
      function $(t) {
        if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59) return t.toLowerCase()
        let e = Object(P.g)(t)
        var r
        ;(r = e.map(t => {
          if (V.indexOf(t) >= 0) return []
          if (t >= 65024 && t <= 65039) return []
          let e = (function(t) {
            let e = H(t, W)
            if (e) return [t + e.s]
            let r = Q[t]
            if (r) return r
            let n = Y[t]
            if (n) return [t + n[0]]
            let i = Z[t]
            return i || null
          })(t)
          return e || [t]
        })),
          (e = r.reduce(
            (t, e) => (
              e.forEach(e => {
                t.push(e)
              }),
              t
            ),
            [],
          )),
          (e = Object(P.g)(Object(P.e)(e), P.a.NFKC)),
          e.forEach(t => {
            if (H(t, X)) throw new Error('STRINGPREP_CONTAINS_PROHIBITED')
          }),
          e.forEach(t => {
            if (H(t, J)) throw new Error('STRINGPREP_CONTAINS_UNASSIGNED')
          })
        let n = Object(P.e)(e)
        if ('-' === n.substring(0, 1) || '--' === n.substring(2, 4) || '-' === n.substring(n.length - 1))
          throw new Error('invalid hyphen')
        return n
      }
      var tt = r(73)
      function et(t) {
        const e = Object(P.f)(t)
        if (e.length > 31) throw new Error('bytes32 string must be less than 32 bytes')
        return Object(w.i)(Object(w.b)([e, tt.a]).slice(0, 32))
      }
      function rt(t) {
        const e = Object(w.a)(t)
        if (32 !== e.length) throw new Error('invalid bytes32 - not 32 bytes long')
        if (0 !== e[31]) throw new Error('invalid bytes32 string - no null terminator')
        let r = 31
        for (; 0 === e[r - 1]; ) r--
        return Object(P.h)(e.slice(0, r))
      }
      var nt = r(8)
      const it = new j.b('units/5.7.0'),
        ot = ['wei', 'kwei', 'mwei', 'gwei', 'szabo', 'finney', 'ether']
      function st(t) {
        const e = String(t).split('.')
        ;(e.length > 2 || !e[0].match(/^-?[0-9]*$/) || (e[1] && !e[1].match(/^[0-9]*$/)) || '.' === t || '-.' === t) &&
          it.throwArgumentError('invalid value', 'value', t)
        let r = e[0],
          n = ''
        for ('-' === r.substring(0, 1) && ((n = '-'), (r = r.substring(1))); '0' === r.substring(0, 1); )
          r = r.substring(1)
        '' === r && (r = '0')
        let i = ''
        for (2 === e.length && (i = '.' + (e[1] || '0')); i.length > 2 && '0' === i[i.length - 1]; )
          i = i.substring(0, i.length - 1)
        const o = []
        for (; r.length; ) {
          if (r.length <= 3) {
            o.unshift(r)
            break
          }
          {
            const t = r.length - 3
            o.unshift(r.substring(t)), (r = r.substring(0, t))
          }
        }
        return n + o.join(',') + i
      }
      function at(t, e) {
        if ('string' == typeof e) {
          const t = ot.indexOf(e)
          ;-1 !== t && (e = 3 * t)
        }
        return Object(s.b)(t, null != e ? e : 18)
      }
      function ut(t, e) {
        if (
          ('string' != typeof t && it.throwArgumentError('value must be a string', 'value', t), 'string' == typeof e)
        ) {
          const t = ot.indexOf(e)
          ;-1 !== t && (e = 3 * t)
        }
        return Object(s.c)(t, null != e ? e : 18)
      }
      function ct(t) {
        return at(t, 18)
      }
      function ht(t) {
        return ut(t, 18)
      }
      var lt = r(11),
        ft = r(81),
        dt = r(58)
      const pt = new j.b(dt.a)
    },
    ,
    ,
    function(t, e) {
      function r(t, e) {
        if (!t) throw new Error(e || 'Assertion failed')
      }
      ;(t.exports = r),
        (r.equal = function(t, e, r) {
          if (t != e) throw new Error(r || 'Assertion failed: ' + t + ' != ' + e)
        })
    },
    function(t, e) {
      t.exports = require('util')
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(39)
      function o() {
        ;(this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = 'big'),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32)
      }
      ;(e.BlockHash = o),
        (o.prototype.update = function(t, e) {
          if (
            ((t = n.toArray(t, e)),
            this.pending ? (this.pending = this.pending.concat(t)) : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8
            ;(this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = n.join32(t, 0, t.length - r, this.endian))
            for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
          }
          return this
        }),
        (o.prototype.digest = function(t) {
          return this.update(this._pad()), i(null === this.pending), this._digest(t)
        }),
        (o.prototype._pad = function() {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            n = new Array(r + this.padLength)
          n[0] = 128
          for (var i = 1; i < r; i++) n[i] = 0
          if (((t <<= 3), 'big' === this.endian)) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0
            ;(n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (t >>> 24) & 255),
              (n[i++] = (t >>> 16) & 255),
              (n[i++] = (t >>> 8) & 255),
              (n[i++] = 255 & t)
          } else
            for (
              n[i++] = 255 & t,
                n[i++] = (t >>> 8) & 255,
                n[i++] = (t >>> 16) & 255,
                n[i++] = (t >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              n[i++] = 0
          return n
        })
    },
    function(t, e, r) {
      'use strict'
      r.r(e)
      var n = r(61)
      r.d(e, 'decode', function() {
        return n.a
      }),
        r.d(e, 'encode', function() {
          return n.b
        })
    },
    ,
    function(t, e) {
      t.exports = require('buffer')
    },
    ,
    function(t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, 'Provider', function() {
          return n.b
        }),
        r.d(e, 'BaseProvider', function() {
          return nt
        }),
        r.d(e, 'Resolver', function() {
          return tt
        }),
        r.d(e, 'UrlJsonRpcProvider', function() {
          return St
        }),
        r.d(e, 'FallbackProvider', function() {
          return ue
        }),
        r.d(e, 'AlchemyProvider', function() {
          return xt
        }),
        r.d(e, 'AlchemyWebSocketProvider', function() {
          return Pt
        }),
        r.d(e, 'AnkrProvider', function() {
          return It
        }),
        r.d(e, 'CloudflareProvider', function() {
          return Dt
        }),
        r.d(e, 'EtherscanProvider', function() {
          return Jt
        }),
        r.d(e, 'InfuraProvider', function() {
          return de
        }),
        r.d(e, 'InfuraWebSocketProvider', function() {
          return fe
        }),
        r.d(e, 'JsonRpcProvider', function() {
          return yt
        }),
        r.d(e, 'JsonRpcBatchProvider', function() {
          return pe
        }),
        r.d(e, 'NodesmithProvider', function() {
          return ge
        }),
        r.d(e, 'PocketProvider', function() {
          return ye
        }),
        r.d(e, 'StaticJsonRpcProvider', function() {
          return _t
        }),
        r.d(e, 'Web3Provider', function() {
          return Ee
        }),
        r.d(e, 'WebSocketProvider', function() {
          return Ot
        }),
        r.d(e, 'IpcProvider', function() {
          return ce
        }),
        r.d(e, 'JsonRpcSigner', function() {
          return mt
        }),
        r.d(e, 'getDefaultProvider', function() {
          return Me
        }),
        r.d(e, 'getNetwork', function() {
          return f
        }),
        r.d(e, 'isCommunityResource', function() {
          return x
        }),
        r.d(e, 'isCommunityResourcable', function() {
          return P
        }),
        r.d(e, 'showThrottleMessage', function() {
          return T
        }),
        r.d(e, 'Formatter', function() {
          return N
        })
      var n = r(23),
        i = r(2)
      const o = new i.b('networks/5.7.1')
      function s(t) {
        const e = function(e, r) {
          null == r && (r = {})
          const n = []
          if (e.InfuraProvider && '-' !== r.infura)
            try {
              n.push(new e.InfuraProvider(t, r.infura))
            } catch (t) {}
          if (e.EtherscanProvider && '-' !== r.etherscan)
            try {
              n.push(new e.EtherscanProvider(t, r.etherscan))
            } catch (t) {}
          if (e.AlchemyProvider && '-' !== r.alchemy)
            try {
              n.push(new e.AlchemyProvider(t, r.alchemy))
            } catch (t) {}
          if (e.PocketProvider && '-' !== r.pocket) {
            const i = ['goerli', 'ropsten', 'rinkeby', 'sepolia']
            try {
              const o = new e.PocketProvider(t, r.pocket)
              o.network && -1 === i.indexOf(o.network.name) && n.push(o)
            } catch (t) {}
          }
          if (e.CloudflareProvider && '-' !== r.cloudflare)
            try {
              n.push(new e.CloudflareProvider(t))
            } catch (t) {}
          if (e.AnkrProvider && '-' !== r.ankr)
            try {
              const i = ['ropsten'],
                o = new e.AnkrProvider(t, r.ankr)
              o.network && -1 === i.indexOf(o.network.name) && n.push(o)
            } catch (t) {}
          if (0 === n.length) return null
          if (e.FallbackProvider) {
            let i = 1
            return null != r.quorum ? (i = r.quorum) : 'homestead' === t && (i = 2), new e.FallbackProvider(n, i)
          }
          return n[0]
        }
        return (
          (e.renetwork = function(t) {
            return s(t)
          }),
          e
        )
      }
      function a(t, e) {
        const r = function(r, n) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null
        }
        return (
          (r.renetwork = function(e) {
            return a(t, e)
          }),
          r
        )
      }
      const u = {
          chainId: 1,
          ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
          name: 'homestead',
          _defaultProvider: s('homestead'),
        },
        c = {
          chainId: 3,
          ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
          name: 'ropsten',
          _defaultProvider: s('ropsten'),
        },
        h = {
          chainId: 63,
          name: 'classicMordor',
          _defaultProvider: a('https://www.ethercluster.com/mordor', 'classicMordor'),
        },
        l = {
          unspecified: { chainId: 0, name: 'unspecified' },
          homestead: u,
          mainnet: u,
          morden: { chainId: 2, name: 'morden' },
          ropsten: c,
          testnet: c,
          rinkeby: {
            chainId: 4,
            ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            name: 'rinkeby',
            _defaultProvider: s('rinkeby'),
          },
          kovan: { chainId: 42, name: 'kovan', _defaultProvider: s('kovan') },
          goerli: {
            chainId: 5,
            ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            name: 'goerli',
            _defaultProvider: s('goerli'),
          },
          kintsugi: { chainId: 1337702, name: 'kintsugi' },
          sepolia: { chainId: 11155111, name: 'sepolia', _defaultProvider: s('sepolia') },
          classic: { chainId: 61, name: 'classic', _defaultProvider: a('https://www.ethercluster.com/etc', 'classic') },
          classicMorden: { chainId: 62, name: 'classicMorden' },
          classicMordor: h,
          classicTestnet: h,
          classicKotti: {
            chainId: 6,
            name: 'classicKotti',
            _defaultProvider: a('https://www.ethercluster.com/kotti', 'classicKotti'),
          },
          xdai: { chainId: 100, name: 'xdai' },
          matic: { chainId: 137, name: 'matic', _defaultProvider: s('matic') },
          maticmum: { chainId: 80001, name: 'maticmum' },
          optimism: { chainId: 10, name: 'optimism', _defaultProvider: s('optimism') },
          'optimism-kovan': { chainId: 69, name: 'optimism-kovan' },
          'optimism-goerli': { chainId: 420, name: 'optimism-goerli' },
          arbitrum: { chainId: 42161, name: 'arbitrum' },
          'arbitrum-rinkeby': { chainId: 421611, name: 'arbitrum-rinkeby' },
          'arbitrum-goerli': { chainId: 421613, name: 'arbitrum-goerli' },
          bnb: { chainId: 56, name: 'bnb' },
          bnbt: { chainId: 97, name: 'bnbt' },
        }
      function f(t) {
        if (null == t) return null
        if ('number' == typeof t) {
          for (const e in l) {
            const r = l[e]
            if (r.chainId === t)
              return {
                name: r.name,
                chainId: r.chainId,
                ensAddress: r.ensAddress || null,
                _defaultProvider: r._defaultProvider || null,
              }
          }
          return { chainId: t, name: 'unknown' }
        }
        if ('string' == typeof t) {
          const e = l[t]
          return null == e
            ? null
            : {
                name: e.name,
                chainId: e.chainId,
                ensAddress: e.ensAddress,
                _defaultProvider: e._defaultProvider || null,
              }
        }
        const e = l[t.name]
        if (!e) return 'number' != typeof t.chainId && o.throwArgumentError('invalid network chainId', 'network', t), t
        0 !== t.chainId && t.chainId !== e.chainId && o.throwArgumentError('network chainId mismatch', 'network', t)
        let r = t._defaultProvider || null
        var n
        return (
          null == r &&
            e._defaultProvider &&
            (r =
              (n = e._defaultProvider) && 'function' == typeof n.renetwork
                ? e._defaultProvider.renetwork(t)
                : e._defaultProvider),
          { name: t.name, chainId: e.chainId, ensAddress: t.ensAddress || e.ensAddress || null, _defaultProvider: r }
        )
      }
      var d = r(61),
        p = r(27),
        m = r(7),
        g = r(0),
        b = r(73),
        y = r(267),
        v = r(1),
        w = r(83),
        A = r(16),
        E = r(11),
        O = r(65),
        M = r.n(O)
      var k = r(4),
        _ = r(74),
        S = r(8)
      const j = new i.b('providers/5.7.2')
      class N {
        constructor() {
          this.formats = this.getDefaultFormats()
        }
        getDefaultFormats() {
          const t = {},
            e = this.address.bind(this),
            r = this.bigNumber.bind(this),
            n = this.blockTag.bind(this),
            i = this.data.bind(this),
            o = this.hash.bind(this),
            s = this.hex.bind(this),
            a = this.number.bind(this),
            u = this.type.bind(this)
          return (
            (t.transaction = {
              hash: o,
              type: u,
              accessList: N.allowNull(this.accessList.bind(this), null),
              blockHash: N.allowNull(o, null),
              blockNumber: N.allowNull(a, null),
              transactionIndex: N.allowNull(a, null),
              confirmations: N.allowNull(a, null),
              from: e,
              gasPrice: N.allowNull(r),
              maxPriorityFeePerGas: N.allowNull(r),
              maxFeePerGas: N.allowNull(r),
              gasLimit: r,
              to: N.allowNull(e, null),
              value: r,
              nonce: a,
              data: i,
              r: N.allowNull(this.uint256),
              s: N.allowNull(this.uint256),
              v: N.allowNull(a),
              creates: N.allowNull(e, null),
              raw: N.allowNull(i),
            }),
            (t.transactionRequest = {
              from: N.allowNull(e),
              nonce: N.allowNull(a),
              gasLimit: N.allowNull(r),
              gasPrice: N.allowNull(r),
              maxPriorityFeePerGas: N.allowNull(r),
              maxFeePerGas: N.allowNull(r),
              to: N.allowNull(e),
              value: N.allowNull(r),
              data: N.allowNull(t => this.data(t, !0)),
              type: N.allowNull(a),
              accessList: N.allowNull(this.accessList.bind(this), null),
            }),
            (t.receiptLog = {
              transactionIndex: a,
              blockNumber: a,
              transactionHash: o,
              address: e,
              topics: N.arrayOf(o),
              data: i,
              logIndex: a,
              blockHash: o,
            }),
            (t.receipt = {
              to: N.allowNull(this.address, null),
              from: N.allowNull(this.address, null),
              contractAddress: N.allowNull(e, null),
              transactionIndex: a,
              root: N.allowNull(s),
              gasUsed: r,
              logsBloom: N.allowNull(i),
              blockHash: o,
              transactionHash: o,
              logs: N.arrayOf(this.receiptLog.bind(this)),
              blockNumber: a,
              confirmations: N.allowNull(a, null),
              cumulativeGasUsed: r,
              effectiveGasPrice: N.allowNull(r),
              status: N.allowNull(a),
              type: u,
            }),
            (t.block = {
              hash: N.allowNull(o),
              parentHash: o,
              number: a,
              timestamp: a,
              nonce: N.allowNull(s),
              difficulty: this.difficulty.bind(this),
              gasLimit: r,
              gasUsed: r,
              miner: N.allowNull(e),
              extraData: i,
              transactions: N.allowNull(N.arrayOf(o)),
              baseFeePerGas: N.allowNull(r),
            }),
            (t.blockWithTransactions = Object(v.g)(t.block)),
            (t.blockWithTransactions.transactions = N.allowNull(N.arrayOf(this.transactionResponse.bind(this)))),
            (t.filter = {
              fromBlock: N.allowNull(n, void 0),
              toBlock: N.allowNull(n, void 0),
              blockHash: N.allowNull(o, void 0),
              address: N.allowNull(e, void 0),
              topics: N.allowNull(this.topics.bind(this), void 0),
            }),
            (t.filterLog = {
              blockNumber: N.allowNull(a),
              blockHash: N.allowNull(o),
              transactionIndex: a,
              removed: N.allowNull(this.boolean.bind(this)),
              address: e,
              data: N.allowFalsish(i, '0x'),
              topics: N.arrayOf(o),
              transactionHash: o,
              logIndex: a,
            }),
            t
          )
        }
        accessList(t) {
          return Object(S.b)(t || [])
        }
        number(t) {
          return '0x' === t ? 0 : m.a.from(t).toNumber()
        }
        type(t) {
          return '0x' === t || null == t ? 0 : m.a.from(t).toNumber()
        }
        bigNumber(t) {
          return m.a.from(t)
        }
        boolean(t) {
          if ('boolean' == typeof t) return t
          if ('string' == typeof t) {
            if ('true' === (t = t.toLowerCase())) return !0
            if ('false' === t) return !1
          }
          throw new Error('invalid boolean - ' + t)
        }
        hex(t, e) {
          return 'string' == typeof t && (e || '0x' === t.substring(0, 2) || (t = '0x' + t), Object(g.l)(t))
            ? t.toLowerCase()
            : j.throwArgumentError('invalid hash', 'value', t)
        }
        data(t, e) {
          const r = this.hex(t, e)
          if (r.length % 2 != 0) throw new Error('invalid data; odd-length - ' + t)
          return r
        }
        address(t) {
          return Object(k.a)(t)
        }
        callAddress(t) {
          if (!Object(g.l)(t, 32)) return null
          const e = Object(k.a)(Object(g.e)(t, 12))
          return e === _.a ? null : e
        }
        contractAddress(t) {
          return Object(k.b)(t)
        }
        blockTag(t) {
          if (null == t) return 'latest'
          if ('earliest' === t) return '0x0'
          switch (t) {
            case 'earliest':
              return '0x0'
            case 'latest':
            case 'pending':
            case 'safe':
            case 'finalized':
              return t
          }
          if ('number' == typeof t || Object(g.l)(t)) return Object(g.g)(t)
          throw new Error('invalid blockTag')
        }
        hash(t, e) {
          const r = this.hex(t, e)
          return 32 !== Object(g.d)(r) ? j.throwArgumentError('invalid hash', 'value', t) : r
        }
        difficulty(t) {
          if (null == t) return null
          const e = m.a.from(t)
          try {
            return e.toNumber()
          } catch (t) {}
          return null
        }
        uint256(t) {
          if (!Object(g.l)(t)) throw new Error('invalid uint256')
          return Object(g.h)(t, 32)
        }
        _block(t, e) {
          null != t.author && null == t.miner && (t.miner = t.author)
          const r = null != t._difficulty ? t._difficulty : t.difficulty,
            n = N.check(e, t)
          return (n._difficulty = null == r ? null : m.a.from(r)), n
        }
        block(t) {
          return this._block(t, this.formats.block)
        }
        blockWithTransactions(t) {
          return this._block(t, this.formats.blockWithTransactions)
        }
        transactionRequest(t) {
          return N.check(this.formats.transactionRequest, t)
        }
        transactionResponse(t) {
          null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas),
            t.to && m.a.from(t.to).isZero() && (t.to = '0x0000000000000000000000000000000000000000'),
            null != t.input && null == t.data && (t.data = t.input),
            null == t.to && null == t.creates && (t.creates = this.contractAddress(t)),
            (1 !== t.type && 2 !== t.type) || null != t.accessList || (t.accessList = [])
          const e = N.check(this.formats.transaction, t)
          if (null != t.chainId) {
            let r = t.chainId
            Object(g.l)(r) && (r = m.a.from(r).toNumber()), (e.chainId = r)
          } else {
            let r = t.networkId
            null == r && null == e.v && (r = t.chainId),
              Object(g.l)(r) && (r = m.a.from(r).toNumber()),
              'number' != typeof r && null != e.v && ((r = (e.v - 35) / 2), r < 0 && (r = 0), (r = parseInt(r))),
              'number' != typeof r && (r = 0),
              (e.chainId = r)
          }
          return e.blockHash && 'x' === e.blockHash.replace(/0/g, '') && (e.blockHash = null), e
        }
        transaction(t) {
          return Object(S.d)(t)
        }
        receiptLog(t) {
          return N.check(this.formats.receiptLog, t)
        }
        receipt(t) {
          const e = N.check(this.formats.receipt, t)
          if (null != e.root)
            if (e.root.length <= 4) {
              const t = m.a.from(e.root).toNumber()
              0 === t || 1 === t
                ? (null != e.status &&
                    e.status !== t &&
                    j.throwArgumentError('alt-root-status/status mismatch', 'value', {
                      root: e.root,
                      status: e.status,
                    }),
                  (e.status = t),
                  delete e.root)
                : j.throwArgumentError('invalid alt-root-status', 'value.root', e.root)
            } else 66 !== e.root.length && j.throwArgumentError('invalid root hash', 'value.root', e.root)
          return null != e.status && (e.byzantium = !0), e
        }
        topics(t) {
          return Array.isArray(t) ? t.map(t => this.topics(t)) : null != t ? this.hash(t, !0) : null
        }
        filter(t) {
          return N.check(this.formats.filter, t)
        }
        filterLog(t) {
          return N.check(this.formats.filterLog, t)
        }
        static check(t, e) {
          const r = {}
          for (const n in t)
            try {
              const i = t[n](e[n])
              void 0 !== i && (r[n] = i)
            } catch (t) {
              throw ((t.checkKey = n), (t.checkValue = e[n]), t)
            }
          return r
        }
        static allowNull(t, e) {
          return function(r) {
            return null == r ? e : t(r)
          }
        }
        static allowFalsish(t, e) {
          return function(r) {
            return r ? t(r) : e
          }
        }
        static arrayOf(t) {
          return function(e) {
            if (!Array.isArray(e)) throw new Error('not an array')
            const r = []
            return (
              e.forEach(function(e) {
                r.push(t(e))
              }),
              r
            )
          }
        }
      }
      function P(t) {
        return t && 'function' == typeof t.isCommunityResource
      }
      function x(t) {
        return P(t) && t.isCommunityResource()
      }
      let C = !1
      function T() {
        C ||
          ((C = !0),
          console.log('========= NOTICE ========='),
          console.log('Request-Rate Exceeded  (this message will not be repeated)'),
          console.log(''),
          console.log('The default API keys for each service are provided as a highly-throttled,'),
          console.log('community resource for low-traffic projects and early prototyping.'),
          console.log(''),
          console.log('While your application will continue to function, we highly recommended'),
          console.log('signing up for your own API keys to improve performance, increase your'),
          console.log('request rate/limit and enable other perks, such as metrics and advanced APIs.'),
          console.log(''),
          console.log('For more details: https://docs.ethers.io/api-keys/'),
          console.log('=========================='))
      }
      var R = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const I = new i.b('providers/5.7.2')
      function B(t) {
        return null == t
          ? 'null'
          : (32 !== Object(g.d)(t) && I.throwArgumentError('invalid topic', 'topic', t), t.toLowerCase())
      }
      function F(t) {
        for (t = t.slice(); t.length > 0 && null == t[t.length - 1]; ) t.pop()
        return t
          .map(t => {
            if (Array.isArray(t)) {
              const e = {}
              t.forEach(t => {
                e[B(t)] = !0
              })
              const r = Object.keys(e)
              return r.sort(), r.join('|')
            }
            return B(t)
          })
          .join('&')
      }
      function D(t) {
        if ('string' == typeof t) {
          if (((t = t.toLowerCase()), 32 === Object(g.d)(t))) return 'tx:' + t
          if (-1 === t.indexOf(':')) return t
        } else {
          if (Array.isArray(t)) return 'filter:*:' + F(t)
          if (n.a.isForkEvent(t)) throw (I.warn('not implemented'), new Error('not implemented'))
          if (t && 'object' == typeof t) return 'filter:' + (t.address || '*') + ':' + F(t.topics || [])
        }
        throw new Error('invalid event - ' + t)
      }
      function L() {
        return new Date().getTime()
      }
      function U(t) {
        return new Promise(e => {
          setTimeout(e, t)
        })
      }
      const G = ['block', 'network', 'pending', 'poll']
      class z {
        constructor(t, e, r) {
          Object(v.d)(this, 'tag', t),
            Object(v.d)(this, 'listener', e),
            Object(v.d)(this, 'once', r),
            (this._lastBlockNumber = -2),
            (this._inflight = !1)
        }
        get event() {
          switch (this.type) {
            case 'tx':
              return this.hash
            case 'filter':
              return this.filter
          }
          return this.tag
        }
        get type() {
          return this.tag.split(':')[0]
        }
        get hash() {
          const t = this.tag.split(':')
          return 'tx' !== t[0] ? null : t[1]
        }
        get filter() {
          const t = this.tag.split(':')
          if ('filter' !== t[0]) return null
          const e = t[1],
            r =
              '' === (n = t[2])
                ? []
                : n.split(/&/g).map(t => {
                    if ('' === t) return []
                    const e = t.split('|').map(t => ('null' === t ? null : t))
                    return 1 === e.length ? e[0] : e
                  })
          var n
          const i = {}
          return r.length > 0 && (i.topics = r), e && '*' !== e && (i.address = e), i
        }
        pollable() {
          return this.tag.indexOf(':') >= 0 || G.indexOf(this.tag) >= 0
        }
      }
      const q = {
        0: { symbol: 'btc', p2pkh: 0, p2sh: 5, prefix: 'bc' },
        2: { symbol: 'ltc', p2pkh: 48, p2sh: 50, prefix: 'ltc' },
        3: { symbol: 'doge', p2pkh: 30, p2sh: 22 },
        60: { symbol: 'eth', ilk: 'eth' },
        61: { symbol: 'etc', ilk: 'eth' },
        700: { symbol: 'xdai', ilk: 'eth' },
      }
      function K(t) {
        return Object(g.h)(m.a.from(t).toHexString(), 32)
      }
      function H(t) {
        return p.a.encode(Object(g.b)([t, Object(g.e)(Object(w.c)(Object(w.c)(t)), 0, 4)]))
      }
      const J = new RegExp('^(ipfs)://(.*)$', 'i'),
        V = [
          new RegExp('^(https)://(.*)$', 'i'),
          new RegExp('^(data):(.*)$', 'i'),
          J,
          new RegExp('^eip155:[0-9]+/(erc[0-9]+):(.*)$', 'i'),
        ]
      function W(t, e) {
        try {
          return Object(A.h)(Q(t, e))
        } catch (t) {}
        return null
      }
      function Q(t, e) {
        if ('0x' === t) return null
        const r = m.a.from(Object(g.e)(t, e, e + 32)).toNumber(),
          n = m.a.from(Object(g.e)(t, r, r + 32)).toNumber()
        return Object(g.e)(t, r + 32, r + 32 + n)
      }
      function Y(t) {
        return (
          t.match(/^ipfs:\/\/ipfs\//i)
            ? (t = t.substring(12))
            : t.match(/^ipfs:\/\//i)
            ? (t = t.substring(7))
            : I.throwArgumentError('unsupported IPFS format', 'link', t),
          'https://gateway.ipfs.io/ipfs/' + t
        )
      }
      function Z(t) {
        const e = Object(g.a)(t)
        if (e.length > 32) throw new Error('internal; should not happen')
        const r = new Uint8Array(32)
        return r.set(e, 32 - e.length), r
      }
      function X(t) {
        if (t.length % 32 == 0) return t
        const e = new Uint8Array(32 * Math.ceil(t.length / 32))
        return e.set(t), e
      }
      function $(t) {
        const e = []
        let r = 0
        for (let n = 0; n < t.length; n++) e.push(null), (r += 32)
        for (let n = 0; n < t.length; n++) {
          const i = Object(g.a)(t[n])
          ;(e[n] = Z(r)), e.push(Z(i.length)), e.push(X(i)), (r += 32 + 32 * Math.ceil(i.length / 32))
        }
        return Object(g.c)(e)
      }
      class tt {
        constructor(t, e, r, n) {
          Object(v.d)(this, 'provider', t),
            Object(v.d)(this, 'name', r),
            Object(v.d)(this, 'address', t.formatter.address(e)),
            Object(v.d)(this, '_resolvedAddress', n)
        }
        supportsWildcard() {
          return (
            this._supportsEip2544 ||
              (this._supportsEip2544 = this.provider
                .call({
                  to: this.address,
                  data: '0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000',
                })
                .then(t => m.a.from(t).eq(1))
                .catch(t => {
                  if (t.code === i.b.errors.CALL_EXCEPTION) return !1
                  throw ((this._supportsEip2544 = null), t)
                })),
            this._supportsEip2544
          )
        }
        _fetch(t, e) {
          return R(this, void 0, void 0, function*() {
            const r = {
              to: this.address,
              ccipReadEnabled: !0,
              data: Object(g.c)([t, Object(y.c)(this.name), e || '0x']),
            }
            let n = !1
            ;(yield this.supportsWildcard()) &&
              ((n = !0), (r.data = Object(g.c)(['0x9061b923', $([Object(y.a)(this.name), r.data])])))
            try {
              let t = yield this.provider.call(r)
              return (
                Object(g.a)(t).length % 32 == 4 &&
                  I.throwError('resolver threw error', i.b.errors.CALL_EXCEPTION, { transaction: r, data: t }),
                n && (t = Q(t, 0)),
                t
              )
            } catch (t) {
              if (t.code === i.b.errors.CALL_EXCEPTION) return null
              throw t
            }
          })
        }
        _fetchBytes(t, e) {
          return R(this, void 0, void 0, function*() {
            const r = yield this._fetch(t, e)
            return null != r ? Q(r, 0) : null
          })
        }
        _getAddress(t, e) {
          const r = q[String(t)]
          if (
            (null == r &&
              I.throwError('unsupported coin type: ' + t, i.b.errors.UNSUPPORTED_OPERATION, {
                operation: `getAddress(${t})`,
              }),
            'eth' === r.ilk)
          )
            return this.provider.formatter.address(e)
          const n = Object(g.a)(e)
          if (null != r.p2pkh) {
            const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/)
            if (t) {
              const e = parseInt(t[1], 16)
              if (t[2].length === 2 * e && e >= 1 && e <= 75) return H(Object(g.b)([[r.p2pkh], '0x' + t[2]]))
            }
          }
          if (null != r.p2sh) {
            const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/)
            if (t) {
              const e = parseInt(t[1], 16)
              if (t[2].length === 2 * e && e >= 1 && e <= 75) return H(Object(g.b)([[r.p2sh], '0x' + t[2]]))
            }
          }
          if (null != r.prefix) {
            const t = n[1]
            let e = n[0]
            if (
              (0 === e ? 20 !== t && 32 !== t && (e = -1) : (e = -1), e >= 0 && n.length === 2 + t && t >= 1 && t <= 75)
            ) {
              const t = M.a.toWords(n.slice(2))
              return t.unshift(e), M.a.encode(r.prefix, t)
            }
          }
          return null
        }
        getAddress(t) {
          return R(this, void 0, void 0, function*() {
            if ((null == t && (t = 60), 60 === t))
              try {
                const t = yield this._fetch('0x3b3b57de')
                return '0x' === t || t === b.a ? null : this.provider.formatter.callAddress(t)
              } catch (t) {
                if (t.code === i.b.errors.CALL_EXCEPTION) return null
                throw t
              }
            const e = yield this._fetchBytes('0xf1cb7e06', K(t))
            if (null == e || '0x' === e) return null
            const r = this._getAddress(t, e)
            return (
              null == r &&
                I.throwError('invalid or unsupported coin data', i.b.errors.UNSUPPORTED_OPERATION, {
                  operation: `getAddress(${t})`,
                  coinType: t,
                  data: e,
                }),
              r
            )
          })
        }
        getAvatar() {
          return R(this, void 0, void 0, function*() {
            const t = [{ type: 'name', content: this.name }]
            try {
              const e = yield this.getText('avatar')
              if (null == e) return null
              for (let r = 0; r < V.length; r++) {
                const n = e.match(V[r])
                if (null == n) continue
                const i = n[1].toLowerCase()
                switch (i) {
                  case 'https':
                    return t.push({ type: 'url', content: e }), { linkage: t, url: e }
                  case 'data':
                    return t.push({ type: 'data', content: e }), { linkage: t, url: e }
                  case 'ipfs':
                    return t.push({ type: 'ipfs', content: e }), { linkage: t, url: Y(e) }
                  case 'erc721':
                  case 'erc1155': {
                    const r = 'erc721' === i ? '0xc87b56dd' : '0x0e89341c'
                    t.push({ type: i, content: e })
                    const o = this._resolvedAddress || (yield this.getAddress()),
                      s = (n[2] || '').split('/')
                    if (2 !== s.length) return null
                    const a = yield this.provider.formatter.address(s[0]),
                      u = Object(g.h)(m.a.from(s[1]).toHexString(), 32)
                    if ('erc721' === i) {
                      const e = this.provider.formatter.callAddress(
                        yield this.provider.call({ to: a, data: Object(g.c)(['0x6352211e', u]) }),
                      )
                      if (o !== e) return null
                      t.push({ type: 'owner', content: e })
                    } else if ('erc1155' === i) {
                      const e = m.a.from(
                        yield this.provider.call({ to: a, data: Object(g.c)(['0x00fdd58e', Object(g.h)(o, 32), u]) }),
                      )
                      if (e.isZero()) return null
                      t.push({ type: 'balance', content: e.toString() })
                    }
                    const c = { to: this.provider.formatter.address(s[0]), data: Object(g.c)([r, u]) }
                    let h = W(yield this.provider.call(c), 0)
                    if (null == h) return null
                    t.push({ type: 'metadata-url-base', content: h }),
                      'erc1155' === i &&
                        ((h = h.replace('{id}', u.substring(2))),
                        t.push({ type: 'metadata-url-expanded', content: h })),
                      h.match(/^ipfs:/i) && (h = Y(h)),
                      t.push({ type: 'metadata-url', content: h })
                    const l = yield Object(E.b)(h)
                    if (!l) return null
                    t.push({ type: 'metadata', content: JSON.stringify(l) })
                    let f = l.image
                    if ('string' != typeof f) return null
                    if (f.match(/^(https:\/\/|data:)/i));
                    else {
                      if (null == f.match(J)) return null
                      t.push({ type: 'url-ipfs', content: f }), (f = Y(f))
                    }
                    return t.push({ type: 'url', content: f }), { linkage: t, url: f }
                  }
                }
              }
            } catch (t) {}
            return null
          })
        }
        getContentHash() {
          return R(this, void 0, void 0, function*() {
            const t = yield this._fetchBytes('0xbc1c58d1')
            if (null == t || '0x' === t) return null
            const e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/)
            if (e) {
              const t = parseInt(e[3], 16)
              if (e[4].length === 2 * t) return 'ipfs://' + p.a.encode('0x' + e[1])
            }
            const r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/)
            if (r) {
              const t = parseInt(r[3], 16)
              if (r[4].length === 2 * t) return 'ipns://' + p.a.encode('0x' + r[1])
            }
            const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/)
            if (n && 64 === n[1].length) return 'bzz://' + n[1]
            const o = t.match(/^0x90b2c605([0-9a-f]*)$/)
            if (o && 68 === o[1].length) {
              const t = { '=': '', '+': '-', '/': '_' }
              return 'sia://' + Object(d.b)('0x' + o[1]).replace(/[=+\/]/g, e => t[e])
            }
            return I.throwError('invalid or unsupported content hash data', i.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'getContentHash()',
              data: t,
            })
          })
        }
        getText(t) {
          return R(this, void 0, void 0, function*() {
            let e = Object(A.f)(t)
            ;(e = Object(g.b)([K(64), K(e.length), e])),
              e.length % 32 != 0 && (e = Object(g.b)([e, Object(g.h)('0x', 32 - (t.length % 32))]))
            const r = yield this._fetchBytes('0x59d1d43c', Object(g.i)(e))
            return null == r || '0x' === r ? null : Object(A.h)(r)
          })
        }
      }
      let et = null,
        rt = 1
      class nt extends n.b {
        constructor(t) {
          if (
            (super(),
            (this._events = []),
            (this._emitted = { block: -2 }),
            (this.disableCcipRead = !1),
            (this.formatter = new.target.getFormatter()),
            Object(v.d)(this, 'anyNetwork', 'any' === t),
            this.anyNetwork && (t = this.detectNetwork()),
            t instanceof Promise)
          )
            (this._networkPromise = t), t.catch(t => {}), this._ready().catch(t => {})
          else {
            const e = Object(v.e)(new.target, 'getNetwork')(t)
            e
              ? (Object(v.d)(this, '_network', e), this.emit('network', e, null))
              : I.throwArgumentError('invalid network', 'network', t)
          }
          ;(this._maxInternalBlockNumber = -1024),
            (this._lastBlockNumber = -2),
            (this._maxFilterBlockRange = 10),
            (this._pollingInterval = 4e3),
            (this._fastQueryDate = 0)
        }
        _ready() {
          return R(this, void 0, void 0, function*() {
            if (null == this._network) {
              let t = null
              if (this._networkPromise)
                try {
                  t = yield this._networkPromise
                } catch (t) {}
              null == t && (t = yield this.detectNetwork()),
                t || I.throwError('no network detected', i.b.errors.UNKNOWN_ERROR, {}),
                null == this._network &&
                  (this.anyNetwork ? (this._network = t) : Object(v.d)(this, '_network', t),
                  this.emit('network', t, null))
            }
            return this._network
          })
        }
        get ready() {
          return Object(E.c)(() =>
            this._ready().then(
              t => t,
              t => {
                if (t.code !== i.b.errors.NETWORK_ERROR || 'noNetwork' !== t.event) throw t
              },
            ),
          )
        }
        static getFormatter() {
          return null == et && (et = new N()), et
        }
        static getNetwork(t) {
          return f(null == t ? 'homestead' : t)
        }
        ccipReadFetch(t, e, r) {
          return R(this, void 0, void 0, function*() {
            if (this.disableCcipRead || 0 === r.length) return null
            const n = t.to.toLowerCase(),
              o = e.toLowerCase(),
              s = []
            for (let t = 0; t < r.length; t++) {
              const e = r[t],
                a = e.replace('{sender}', n).replace('{data}', o),
                u = e.indexOf('{data}') >= 0 ? null : JSON.stringify({ data: o, sender: n }),
                c = yield Object(E.b)({ url: a, errorPassThrough: !0 }, u, (t, e) => ((t.status = e.statusCode), t))
              if (c.data) return c.data
              const h = c.message || 'unknown error'
              if (c.status >= 400 && c.status < 500)
                return I.throwError('response not found during CCIP fetch: ' + h, i.b.errors.SERVER_ERROR, {
                  url: e,
                  errorMessage: h,
                })
              s.push(h)
            }
            return I.throwError(
              'error encountered during CCIP fetch: ' + s.map(t => JSON.stringify(t)).join(', '),
              i.b.errors.SERVER_ERROR,
              { urls: r, errorMessages: s },
            )
          })
        }
        _getInternalBlockNumber(t) {
          return R(this, void 0, void 0, function*() {
            if ((yield this._ready(), t > 0))
              for (; this._internalBlockNumber; ) {
                const e = this._internalBlockNumber
                try {
                  const r = yield e
                  if (L() - r.respTime <= t) return r.blockNumber
                  break
                } catch (t) {
                  if (this._internalBlockNumber === e) break
                }
              }
            const e = L(),
              r = Object(v.f)({
                blockNumber: this.perform('getBlockNumber', {}),
                networkError: this.getNetwork().then(
                  t => null,
                  t => t,
                ),
              }).then(({ blockNumber: t, networkError: n }) => {
                if (n) throw (this._internalBlockNumber === r && (this._internalBlockNumber = null), n)
                const i = L()
                return (
                  (t = m.a.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber),
                  (this._maxInternalBlockNumber = t),
                  this._setFastBlockNumber(t),
                  { blockNumber: t, reqTime: e, respTime: i }
                )
              })
            return (
              (this._internalBlockNumber = r),
              r.catch(t => {
                this._internalBlockNumber === r && (this._internalBlockNumber = null)
              }),
              (yield r).blockNumber
            )
          })
        }
        poll() {
          return R(this, void 0, void 0, function*() {
            const t = rt++,
              e = []
            let r = null
            try {
              r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
            } catch (t) {
              return void this.emit('error', t)
            }
            if ((this._setFastBlockNumber(r), this.emit('poll', t, r), r !== this._lastBlockNumber)) {
              if (
                (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3)
              )
                I.warn(
                  `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`,
                ),
                  this.emit(
                    'error',
                    I.makeError('network block skew detected', i.b.errors.NETWORK_ERROR, {
                      blockNumber: r,
                      event: 'blockSkew',
                      previousBlockNumber: this._emitted.block,
                    }),
                  ),
                  this.emit('block', r)
              else for (let t = this._emitted.block + 1; t <= r; t++) this.emit('block', t)
              this._emitted.block !== r &&
                ((this._emitted.block = r),
                Object.keys(this._emitted).forEach(t => {
                  if ('block' === t) return
                  const e = this._emitted[t]
                  'pending' !== e && r - e > 12 && delete this._emitted[t]
                })),
                -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
                this._events.forEach(t => {
                  switch (t.type) {
                    case 'tx': {
                      const r = t.hash
                      let n = this.getTransactionReceipt(r)
                        .then(t =>
                          t && null != t.blockNumber
                            ? ((this._emitted['t:' + r] = t.blockNumber), this.emit(r, t), null)
                            : null,
                        )
                        .catch(t => {
                          this.emit('error', t)
                        })
                      e.push(n)
                      break
                    }
                    case 'filter':
                      if (!t._inflight) {
                        ;(t._inflight = !0), -2 === t._lastBlockNumber && (t._lastBlockNumber = r - 1)
                        const n = t.filter
                        ;(n.fromBlock = t._lastBlockNumber + 1), (n.toBlock = r)
                        const i = n.toBlock - this._maxFilterBlockRange
                        i > n.fromBlock && (n.fromBlock = i), n.fromBlock < 0 && (n.fromBlock = 0)
                        const o = this.getLogs(n)
                          .then(e => {
                            ;(t._inflight = !1),
                              0 !== e.length &&
                                e.forEach(e => {
                                  e.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = e.blockNumber),
                                    (this._emitted['b:' + e.blockHash] = e.blockNumber),
                                    (this._emitted['t:' + e.transactionHash] = e.blockNumber),
                                    this.emit(n, e)
                                })
                          })
                          .catch(e => {
                            this.emit('error', e), (t._inflight = !1)
                          })
                        e.push(o)
                      }
                  }
                }),
                (this._lastBlockNumber = r),
                Promise.all(e)
                  .then(() => {
                    this.emit('didPoll', t)
                  })
                  .catch(t => {
                    this.emit('error', t)
                  })
            } else this.emit('didPoll', t)
          })
        }
        resetEventsBlock(t) {
          ;(this._lastBlockNumber = t - 1), this.polling && this.poll()
        }
        get network() {
          return this._network
        }
        detectNetwork() {
          return R(this, void 0, void 0, function*() {
            return I.throwError('provider does not support network detection', i.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'provider.detectNetwork',
            })
          })
        }
        getNetwork() {
          return R(this, void 0, void 0, function*() {
            const t = yield this._ready(),
              e = yield this.detectNetwork()
            if (t.chainId !== e.chainId) {
              if (this.anyNetwork)
                return (
                  (this._network = e),
                  (this._lastBlockNumber = -2),
                  (this._fastBlockNumber = null),
                  (this._fastBlockNumberPromise = null),
                  (this._fastQueryDate = 0),
                  (this._emitted.block = -2),
                  (this._maxInternalBlockNumber = -1024),
                  (this._internalBlockNumber = null),
                  this.emit('network', e, t),
                  yield U(0),
                  this._network
                )
              const r = I.makeError('underlying network changed', i.b.errors.NETWORK_ERROR, {
                event: 'changed',
                network: t,
                detectedNetwork: e,
              })
              throw (this.emit('error', r), r)
            }
            return t
          })
        }
        get blockNumber() {
          return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
              t => {
                this._setFastBlockNumber(t)
              },
              t => {},
            ),
            null != this._fastBlockNumber ? this._fastBlockNumber : -1
          )
        }
        get polling() {
          return null != this._poller
        }
        set polling(t) {
          t && !this._poller
            ? ((this._poller = setInterval(() => {
                this.poll()
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                (this._bootstrapPoll = setTimeout(() => {
                  this.poll(),
                    (this._bootstrapPoll = setTimeout(() => {
                      this._poller || this.poll(), (this._bootstrapPoll = null)
                    }, this.pollingInterval))
                }, 0)))
            : !t && this._poller && (clearInterval(this._poller), (this._poller = null))
        }
        get pollingInterval() {
          return this._pollingInterval
        }
        set pollingInterval(t) {
          if ('number' != typeof t || t <= 0 || parseInt(String(t)) != t) throw new Error('invalid polling interval')
          ;(this._pollingInterval = t),
            this._poller &&
              (clearInterval(this._poller),
              (this._poller = setInterval(() => {
                this.poll()
              }, this._pollingInterval)))
        }
        _getFastBlockNumber() {
          const t = L()
          return (
            t - this._fastQueryDate > 2 * this._pollingInterval &&
              ((this._fastQueryDate = t),
              (this._fastBlockNumberPromise = this.getBlockNumber().then(
                t => (
                  (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t),
                  this._fastBlockNumber
                ),
              ))),
            this._fastBlockNumberPromise
          )
        }
        _setFastBlockNumber(t) {
          ;(null != this._fastBlockNumber && t < this._fastBlockNumber) ||
            ((this._fastQueryDate = L()),
            (null == this._fastBlockNumber || t > this._fastBlockNumber) &&
              ((this._fastBlockNumber = t), (this._fastBlockNumberPromise = Promise.resolve(t))))
        }
        waitForTransaction(t, e, r) {
          return R(this, void 0, void 0, function*() {
            return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
          })
        }
        _waitForTransaction(t, e, r, n) {
          return R(this, void 0, void 0, function*() {
            const o = yield this.getTransactionReceipt(t)
            return (o ? o.confirmations : 0) >= e
              ? o
              : new Promise((o, s) => {
                  const a = []
                  let u = !1
                  const c = function() {
                      return (
                        !!u ||
                        ((u = !0),
                        a.forEach(t => {
                          t()
                        }),
                        !1)
                      )
                    },
                    h = t => {
                      t.confirmations < e || c() || o(t)
                    }
                  if (
                    (this.on(t, h),
                    a.push(() => {
                      this.removeListener(t, h)
                    }),
                    n)
                  ) {
                    let r = n.startBlock,
                      o = null
                    const h = a =>
                      R(this, void 0, void 0, function*() {
                        u ||
                          (yield U(1e3),
                          this.getTransactionCount(n.from).then(
                            l =>
                              R(this, void 0, void 0, function*() {
                                if (!u) {
                                  if (l <= n.nonce) r = a
                                  else {
                                    {
                                      const e = yield this.getTransaction(t)
                                      if (e && null != e.blockNumber) return
                                    }
                                    for (null == o && ((o = r - 3), o < n.startBlock && (o = n.startBlock)); o <= a; ) {
                                      if (u) return
                                      const r = yield this.getBlockWithTransactions(o)
                                      for (let o = 0; o < r.transactions.length; o++) {
                                        const a = r.transactions[o]
                                        if (a.hash === t) return
                                        if (a.from === n.from && a.nonce === n.nonce) {
                                          if (u) return
                                          const r = yield this.waitForTransaction(a.hash, e)
                                          if (c()) return
                                          let o = 'replaced'
                                          return (
                                            a.data === n.data && a.to === n.to && a.value.eq(n.value)
                                              ? (o = 'repriced')
                                              : '0x' === a.data &&
                                                a.from === a.to &&
                                                a.value.isZero() &&
                                                (o = 'cancelled'),
                                            void s(
                                              I.makeError('transaction was replaced', i.b.errors.TRANSACTION_REPLACED, {
                                                cancelled: 'replaced' === o || 'cancelled' === o,
                                                reason: o,
                                                replacement: this._wrapTransaction(a),
                                                hash: t,
                                                receipt: r,
                                              }),
                                            )
                                          )
                                        }
                                      }
                                      o++
                                    }
                                  }
                                  u || this.once('block', h)
                                }
                              }),
                            t => {
                              u || this.once('block', h)
                            },
                          ))
                      })
                    if (u) return
                    this.once('block', h),
                      a.push(() => {
                        this.removeListener('block', h)
                      })
                  }
                  if ('number' == typeof r && r > 0) {
                    const t = setTimeout(() => {
                      c() || s(I.makeError('timeout exceeded', i.b.errors.TIMEOUT, { timeout: r }))
                    }, r)
                    t.unref && t.unref(),
                      a.push(() => {
                        clearTimeout(t)
                      })
                  }
                })
          })
        }
        getBlockNumber() {
          return R(this, void 0, void 0, function*() {
            return this._getInternalBlockNumber(0)
          })
        }
        getGasPrice() {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork()
            const t = yield this.perform('getGasPrice', {})
            try {
              return m.a.from(t)
            } catch (e) {
              return I.throwError('bad result from backend', i.b.errors.SERVER_ERROR, {
                method: 'getGasPrice',
                result: t,
                error: e,
              })
            }
          })
        }
        getBalance(t, e) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork()
            const r = yield Object(v.f)({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
              n = yield this.perform('getBalance', r)
            try {
              return m.a.from(n)
            } catch (t) {
              return I.throwError('bad result from backend', i.b.errors.SERVER_ERROR, {
                method: 'getBalance',
                params: r,
                result: n,
                error: t,
              })
            }
          })
        }
        getTransactionCount(t, e) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork()
            const r = yield Object(v.f)({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
              n = yield this.perform('getTransactionCount', r)
            try {
              return m.a.from(n).toNumber()
            } catch (t) {
              return I.throwError('bad result from backend', i.b.errors.SERVER_ERROR, {
                method: 'getTransactionCount',
                params: r,
                result: n,
                error: t,
              })
            }
          })
        }
        getCode(t, e) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork()
            const r = yield Object(v.f)({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
              n = yield this.perform('getCode', r)
            try {
              return Object(g.i)(n)
            } catch (t) {
              return I.throwError('bad result from backend', i.b.errors.SERVER_ERROR, {
                method: 'getCode',
                params: r,
                result: n,
                error: t,
              })
            }
          })
        }
        getStorageAt(t, e, r) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork()
            const n = yield Object(v.f)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(r),
                position: Promise.resolve(e).then(t => Object(g.g)(t)),
              }),
              o = yield this.perform('getStorageAt', n)
            try {
              return Object(g.i)(o)
            } catch (t) {
              return I.throwError('bad result from backend', i.b.errors.SERVER_ERROR, {
                method: 'getStorageAt',
                params: n,
                result: o,
                error: t,
              })
            }
          })
        }
        _wrapTransaction(t, e, r) {
          if (null != e && 32 !== Object(g.d)(e)) throw new Error('invalid response - sendTransaction')
          const n = t
          return (
            null != e &&
              t.hash !== e &&
              I.throwError('Transaction hash mismatch from Provider.sendTransaction.', i.b.errors.UNKNOWN_ERROR, {
                expectedHash: t.hash,
                returnedHash: e,
              }),
            (n.wait = (e, n) =>
              R(this, void 0, void 0, function*() {
                null == e && (e = 1), null == n && (n = 0)
                let o = void 0
                0 !== e &&
                  null != r &&
                  (o = { data: t.data, from: t.from, nonce: t.nonce, to: t.to, value: t.value, startBlock: r })
                const s = yield this._waitForTransaction(t.hash, e, n, o)
                return null == s && 0 === e
                  ? null
                  : ((this._emitted['t:' + t.hash] = s.blockNumber),
                    0 === s.status &&
                      I.throwError('transaction failed', i.b.errors.CALL_EXCEPTION, {
                        transactionHash: t.hash,
                        transaction: t,
                        receipt: s,
                      }),
                    s)
              })),
            n
          )
        }
        sendTransaction(t) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork()
            const e = yield Promise.resolve(t).then(t => Object(g.i)(t)),
              r = this.formatter.transaction(t)
            null == r.confirmations && (r.confirmations = 0)
            const n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)
            try {
              const t = yield this.perform('sendTransaction', { signedTransaction: e })
              return this._wrapTransaction(r, t, n)
            } catch (t) {
              throw ((t.transaction = r), (t.transactionHash = r.hash), t)
            }
          })
        }
        _getTransactionRequest(t) {
          return R(this, void 0, void 0, function*() {
            const e = yield t,
              r = {}
            return (
              ['from', 'to'].forEach(t => {
                null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => (t ? this._getAddress(t) : null)))
              }),
              ['gasLimit', 'gasPrice', 'maxFeePerGas', 'maxPriorityFeePerGas', 'value'].forEach(t => {
                null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => (t ? m.a.from(t) : null)))
              }),
              ['type'].forEach(t => {
                null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => (null != t ? t : null)))
              }),
              e.accessList && (r.accessList = this.formatter.accessList(e.accessList)),
              ['data'].forEach(t => {
                null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => (t ? Object(g.i)(t) : null)))
              }),
              this.formatter.transactionRequest(yield Object(v.f)(r))
            )
          })
        }
        _getFilter(t) {
          return R(this, void 0, void 0, function*() {
            t = yield t
            const e = {}
            return (
              null != t.address && (e.address = this._getAddress(t.address)),
              ['blockHash', 'topics'].forEach(r => {
                null != t[r] && (e[r] = t[r])
              }),
              ['fromBlock', 'toBlock'].forEach(r => {
                null != t[r] && (e[r] = this._getBlockTag(t[r]))
              }),
              this.formatter.filter(yield Object(v.f)(e))
            )
          })
        }
        _call(t, e, r) {
          return R(this, void 0, void 0, function*() {
            r >= 10 &&
              I.throwError('CCIP read exceeded maximum redirections', i.b.errors.SERVER_ERROR, {
                redirects: r,
                transaction: t,
              })
            const n = t.to,
              o = yield this.perform('call', { transaction: t, blockTag: e })
            if (
              r >= 0 &&
              'latest' === e &&
              null != n &&
              '0x556f1830' === o.substring(0, 10) &&
              Object(g.d)(o) % 32 == 4
            )
              try {
                const s = Object(g.e)(o, 4),
                  a = Object(g.e)(s, 0, 32)
                m.a.from(a).eq(n) ||
                  I.throwError('CCIP Read sender did not match', i.b.errors.CALL_EXCEPTION, {
                    name: 'OffchainLookup',
                    signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                    transaction: t,
                    data: o,
                  })
                const u = [],
                  c = m.a.from(Object(g.e)(s, 32, 64)).toNumber(),
                  h = m.a.from(Object(g.e)(s, c, c + 32)).toNumber(),
                  l = Object(g.e)(s, c + 32)
                for (let e = 0; e < h; e++) {
                  const r = W(l, 32 * e)
                  null == r &&
                    I.throwError('CCIP Read contained corrupt URL string', i.b.errors.CALL_EXCEPTION, {
                      name: 'OffchainLookup',
                      signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                      transaction: t,
                      data: o,
                    }),
                    u.push(r)
                }
                const f = Q(s, 64)
                m.a.from(Object(g.e)(s, 100, 128)).isZero() ||
                  I.throwError('CCIP Read callback selector included junk', i.b.errors.CALL_EXCEPTION, {
                    name: 'OffchainLookup',
                    signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                    transaction: t,
                    data: o,
                  })
                const d = Object(g.e)(s, 96, 100),
                  p = Q(s, 128),
                  b = yield this.ccipReadFetch(t, f, u)
                null == b &&
                  I.throwError('CCIP Read disabled or provided no URLs', i.b.errors.CALL_EXCEPTION, {
                    name: 'OffchainLookup',
                    signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                    transaction: t,
                    data: o,
                  })
                const y = { to: n, data: Object(g.c)([d, $([b, p])]) }
                return this._call(y, e, r + 1)
              } catch (t) {
                if (t.code === i.b.errors.SERVER_ERROR) throw t
              }
            try {
              return Object(g.i)(o)
            } catch (r) {
              return I.throwError('bad result from backend', i.b.errors.SERVER_ERROR, {
                method: 'call',
                params: { transaction: t, blockTag: e },
                result: o,
                error: r,
              })
            }
          })
        }
        call(t, e) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork()
            const r = yield Object(v.f)({
              transaction: this._getTransactionRequest(t),
              blockTag: this._getBlockTag(e),
              ccipReadEnabled: Promise.resolve(t.ccipReadEnabled),
            })
            return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
          })
        }
        estimateGas(t) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork()
            const e = yield Object(v.f)({ transaction: this._getTransactionRequest(t) }),
              r = yield this.perform('estimateGas', e)
            try {
              return m.a.from(r)
            } catch (t) {
              return I.throwError('bad result from backend', i.b.errors.SERVER_ERROR, {
                method: 'estimateGas',
                params: e,
                result: r,
                error: t,
              })
            }
          })
        }
        _getAddress(t) {
          return R(this, void 0, void 0, function*() {
            'string' != typeof (t = yield t) && I.throwArgumentError('invalid address or ENS name', 'name', t)
            const e = yield this.resolveName(t)
            return (
              null == e &&
                I.throwError('ENS name not configured', i.b.errors.UNSUPPORTED_OPERATION, {
                  operation: `resolveName(${JSON.stringify(t)})`,
                }),
              e
            )
          })
        }
        _getBlock(t, e) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork(), (t = yield t)
            let r = -128
            const n = { includeTransactions: !!e }
            if (Object(g.l)(t, 32)) n.blockHash = t
            else
              try {
                ;(n.blockTag = yield this._getBlockTag(t)),
                  Object(g.l)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
              } catch (e) {
                I.throwArgumentError('invalid block hash or block tag', 'blockHashOrBlockTag', t)
              }
            return Object(E.c)(
              () =>
                R(this, void 0, void 0, function*() {
                  const t = yield this.perform('getBlock', n)
                  if (null == t)
                    return (null != n.blockHash && null == this._emitted['b:' + n.blockHash]) ||
                      (null != n.blockTag && r > this._emitted.block)
                      ? null
                      : void 0
                  if (e) {
                    let e = null
                    for (let r = 0; r < t.transactions.length; r++) {
                      const n = t.transactions[r]
                      if (null == n.blockNumber) n.confirmations = 0
                      else if (null == n.confirmations) {
                        null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval))
                        let t = e - n.blockNumber + 1
                        t <= 0 && (t = 1), (n.confirmations = t)
                      }
                    }
                    const r = this.formatter.blockWithTransactions(t)
                    return (r.transactions = r.transactions.map(t => this._wrapTransaction(t))), r
                  }
                  return this.formatter.block(t)
                }),
              { oncePoll: this },
            )
          })
        }
        getBlock(t) {
          return this._getBlock(t, !1)
        }
        getBlockWithTransactions(t) {
          return this._getBlock(t, !0)
        }
        getTransaction(t) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork(), (t = yield t)
            const e = { transactionHash: this.formatter.hash(t, !0) }
            return Object(E.c)(
              () =>
                R(this, void 0, void 0, function*() {
                  const r = yield this.perform('getTransaction', e)
                  if (null == r) return null == this._emitted['t:' + t] ? null : void 0
                  const n = this.formatter.transactionResponse(r)
                  if (null == n.blockNumber) n.confirmations = 0
                  else if (null == n.confirmations) {
                    let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1
                    t <= 0 && (t = 1), (n.confirmations = t)
                  }
                  return this._wrapTransaction(n)
                }),
              { oncePoll: this },
            )
          })
        }
        getTransactionReceipt(t) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork(), (t = yield t)
            const e = { transactionHash: this.formatter.hash(t, !0) }
            return Object(E.c)(
              () =>
                R(this, void 0, void 0, function*() {
                  const r = yield this.perform('getTransactionReceipt', e)
                  if (null == r) return null == this._emitted['t:' + t] ? null : void 0
                  if (null == r.blockHash) return
                  const n = this.formatter.receipt(r)
                  if (null == n.blockNumber) n.confirmations = 0
                  else if (null == n.confirmations) {
                    let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1
                    t <= 0 && (t = 1), (n.confirmations = t)
                  }
                  return n
                }),
              { oncePoll: this },
            )
          })
        }
        getLogs(t) {
          return R(this, void 0, void 0, function*() {
            yield this.getNetwork()
            const e = yield Object(v.f)({ filter: this._getFilter(t) }),
              r = yield this.perform('getLogs', e)
            return (
              r.forEach(t => {
                null == t.removed && (t.removed = !1)
              }),
              N.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
            )
          })
        }
        getEtherPrice() {
          return R(this, void 0, void 0, function*() {
            return yield this.getNetwork(), this.perform('getEtherPrice', {})
          })
        }
        _getBlockTag(t) {
          return R(this, void 0, void 0, function*() {
            if ('number' == typeof (t = yield t) && t < 0) {
              t % 1 && I.throwArgumentError('invalid BlockTag', 'blockTag', t)
              let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)
              return (e += t), e < 0 && (e = 0), this.formatter.blockTag(e)
            }
            return this.formatter.blockTag(t)
          })
        }
        getResolver(t) {
          return R(this, void 0, void 0, function*() {
            let e = t
            for (;;) {
              if ('' === e || '.' === e) return null
              if ('eth' !== t && 'eth' === e) return null
              const r = yield this._getResolver(e, 'getResolver')
              if (null != r) {
                const n = new tt(this, r, t)
                return e === t || (yield n.supportsWildcard()) ? n : null
              }
              e = e
                .split('.')
                .slice(1)
                .join('.')
            }
          })
        }
        _getResolver(t, e) {
          return R(this, void 0, void 0, function*() {
            null == e && (e = 'ENS')
            const r = yield this.getNetwork()
            r.ensAddress ||
              I.throwError('network does not support ENS', i.b.errors.UNSUPPORTED_OPERATION, {
                operation: e,
                network: r.name,
              })
            try {
              const e = yield this.call({ to: r.ensAddress, data: '0x0178b8bf' + Object(y.c)(t).substring(2) })
              return this.formatter.callAddress(e)
            } catch (t) {}
            return null
          })
        }
        resolveName(t) {
          return R(this, void 0, void 0, function*() {
            t = yield t
            try {
              return Promise.resolve(this.formatter.address(t))
            } catch (e) {
              if (Object(g.l)(t)) throw e
            }
            'string' != typeof t && I.throwArgumentError('invalid ENS name', 'name', t)
            const e = yield this.getResolver(t)
            return e ? yield e.getAddress() : null
          })
        }
        lookupAddress(t) {
          return R(this, void 0, void 0, function*() {
            t = yield t
            const e = (t = this.formatter.address(t)).substring(2).toLowerCase() + '.addr.reverse',
              r = yield this._getResolver(e, 'lookupAddress')
            if (null == r) return null
            const n = W(yield this.call({ to: r, data: '0x691f3431' + Object(y.c)(e).substring(2) }), 0)
            return (yield this.resolveName(n)) != t ? null : n
          })
        }
        getAvatar(t) {
          return R(this, void 0, void 0, function*() {
            let e = null
            if (Object(g.l)(t)) {
              const r =
                  this.formatter
                    .address(t)
                    .substring(2)
                    .toLowerCase() + '.addr.reverse',
                n = yield this._getResolver(r, 'getAvatar')
              if (!n) return null
              e = new tt(this, n, r)
              try {
                const t = yield e.getAvatar()
                if (t) return t.url
              } catch (t) {
                if (t.code !== i.b.errors.CALL_EXCEPTION) throw t
              }
              try {
                const t = W(yield this.call({ to: n, data: '0x691f3431' + Object(y.c)(r).substring(2) }), 0)
                e = yield this.getResolver(t)
              } catch (t) {
                if (t.code !== i.b.errors.CALL_EXCEPTION) throw t
                return null
              }
            } else if (((e = yield this.getResolver(t)), !e)) return null
            const r = yield e.getAvatar()
            return null == r ? null : r.url
          })
        }
        perform(t, e) {
          return I.throwError(t + ' not implemented', i.b.errors.NOT_IMPLEMENTED, { operation: t })
        }
        _startEvent(t) {
          this.polling = this._events.filter(t => t.pollable()).length > 0
        }
        _stopEvent(t) {
          this.polling = this._events.filter(t => t.pollable()).length > 0
        }
        _addEventListener(t, e, r) {
          const n = new z(D(t), e, r)
          return this._events.push(n), this._startEvent(n), this
        }
        on(t, e) {
          return this._addEventListener(t, e, !1)
        }
        once(t, e) {
          return this._addEventListener(t, e, !0)
        }
        emit(t, ...e) {
          let r = !1,
            n = [],
            i = D(t)
          return (
            (this._events = this._events.filter(
              t =>
                t.tag !== i ||
                (setTimeout(() => {
                  t.listener.apply(this, e)
                }, 0),
                (r = !0),
                !t.once || (n.push(t), !1)),
            )),
            n.forEach(t => {
              this._stopEvent(t)
            }),
            r
          )
        }
        listenerCount(t) {
          if (!t) return this._events.length
          let e = D(t)
          return this._events.filter(t => t.tag === e).length
        }
        listeners(t) {
          if (null == t) return this._events.map(t => t.listener)
          let e = D(t)
          return this._events.filter(t => t.tag === e).map(t => t.listener)
        }
        off(t, e) {
          if (null == e) return this.removeAllListeners(t)
          const r = []
          let n = !1,
            i = D(t)
          return (
            (this._events = this._events.filter(
              t => t.tag !== i || t.listener != e || !!n || ((n = !0), r.push(t), !1),
            )),
            r.forEach(t => {
              this._stopEvent(t)
            }),
            this
          )
        }
        removeAllListeners(t) {
          let e = []
          if (null == t) (e = this._events), (this._events = [])
          else {
            const r = D(t)
            this._events = this._events.filter(t => t.tag !== r || (e.push(t), !1))
          }
          return (
            e.forEach(t => {
              this._stopEvent(t)
            }),
            this
          )
        }
      }
      var it = r(21),
        ot = r(189),
        st = function(t, e, r, n) {
          return new (r || (r = Promise))(function(i, o) {
            function s(t) {
              try {
                u(n.next(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              try {
                u(n.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function u(t) {
              var e
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function(t) {
                        t(e)
                      })).then(s, a)
            }
            u((n = n.apply(t, e || [])).next())
          })
        }
      const at = new i.b('providers/5.7.2'),
        ut = ['call', 'estimateGas']
      function ct(t, e) {
        if (null == t) return null
        if ('string' == typeof t.message && t.message.match('reverted')) {
          const r = Object(g.l)(t.data) ? t.data : null
          if (!e || r) return { message: t.message, data: r }
        }
        if ('object' == typeof t) {
          for (const r in t) {
            const n = ct(t[r], e)
            if (n) return n
          }
          return null
        }
        if ('string' == typeof t)
          try {
            return ct(JSON.parse(t), e)
          } catch (t) {}
        return null
      }
      function ht(t, e, r) {
        const n = r.transaction || r.signedTransaction
        if ('call' === t) {
          const t = ct(e, !0)
          if (t) return t.data
          at.throwError(
            'missing revert data in call exception; Transaction reverted without a reason string',
            i.b.errors.CALL_EXCEPTION,
            { data: '0x', transaction: n, error: e },
          )
        }
        if ('estimateGas' === t) {
          let r = ct(e.body, !1)
          null == r && (r = ct(e, !1)),
            r &&
              at.throwError(
                'cannot estimate gas; transaction may fail or may require manual gas limit',
                i.b.errors.UNPREDICTABLE_GAS_LIMIT,
                { reason: r.message, method: t, transaction: n, error: e },
              )
        }
        let o = e.message
        throw (e.code === i.b.errors.SERVER_ERROR && e.error && 'string' == typeof e.error.message
          ? (o = e.error.message)
          : 'string' == typeof e.body
          ? (o = e.body)
          : 'string' == typeof e.responseText && (o = e.responseText),
        (o = (o || '').toLowerCase()),
        o.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) &&
          at.throwError('insufficient funds for intrinsic transaction cost', i.b.errors.INSUFFICIENT_FUNDS, {
            error: e,
            method: t,
            transaction: n,
          }),
        o.match(/nonce (is )?too low/i) &&
          at.throwError('nonce has already been used', i.b.errors.NONCE_EXPIRED, {
            error: e,
            method: t,
            transaction: n,
          }),
        o.match(/replacement transaction underpriced|transaction gas price.*too low/i) &&
          at.throwError('replacement fee too low', i.b.errors.REPLACEMENT_UNDERPRICED, {
            error: e,
            method: t,
            transaction: n,
          }),
        o.match(/only replay-protected/i) &&
          at.throwError('legacy pre-eip-155 transactions not supported', i.b.errors.UNSUPPORTED_OPERATION, {
            error: e,
            method: t,
            transaction: n,
          }),
        ut.indexOf(t) >= 0 &&
          o.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) &&
          at.throwError(
            'cannot estimate gas; transaction may fail or may require manual gas limit',
            i.b.errors.UNPREDICTABLE_GAS_LIMIT,
            { error: e, method: t, transaction: n },
          ),
        e)
      }
      function lt(t) {
        return new Promise(function(e) {
          setTimeout(e, t)
        })
      }
      function ft(t) {
        if (t.error) {
          const e = new Error(t.error.message)
          throw ((e.code = t.error.code), (e.data = t.error.data), e)
        }
        return t.result
      }
      function dt(t) {
        return t ? t.toLowerCase() : t
      }
      const pt = {}
      class mt extends it.a {
        constructor(t, e, r) {
          if ((super(), t !== pt))
            throw new Error('do not call the JsonRpcSigner constructor directly; use provider.getSigner')
          Object(v.d)(this, 'provider', e),
            null == r && (r = 0),
            'string' == typeof r
              ? (Object(v.d)(this, '_address', this.provider.formatter.address(r)), Object(v.d)(this, '_index', null))
              : 'number' == typeof r
              ? (Object(v.d)(this, '_index', r), Object(v.d)(this, '_address', null))
              : at.throwArgumentError('invalid address or index', 'addressOrIndex', r)
        }
        connect(t) {
          return at.throwError('cannot alter JSON-RPC Signer connection', i.b.errors.UNSUPPORTED_OPERATION, {
            operation: 'connect',
          })
        }
        connectUnchecked() {
          return new gt(pt, this.provider, this._address || this._index)
        }
        getAddress() {
          return this._address
            ? Promise.resolve(this._address)
            : this.provider
                .send('eth_accounts', [])
                .then(
                  t => (
                    t.length <= this._index &&
                      at.throwError('unknown account #' + this._index, i.b.errors.UNSUPPORTED_OPERATION, {
                        operation: 'getAddress',
                      }),
                    this.provider.formatter.address(t[this._index])
                  ),
                )
        }
        sendUncheckedTransaction(t) {
          t = Object(v.g)(t)
          const e = this.getAddress().then(t => (t && (t = t.toLowerCase()), t))
          if (null == t.gasLimit) {
            const r = Object(v.g)(t)
            ;(r.from = e), (t.gasLimit = this.provider.estimateGas(r))
          }
          return (
            null != t.to &&
              (t.to = Promise.resolve(t.to).then(t =>
                st(this, void 0, void 0, function*() {
                  if (null == t) return null
                  const e = yield this.provider.resolveName(t)
                  return null == e && at.throwArgumentError('provided ENS name resolves to null', 'tx.to', t), e
                }),
              )),
            Object(v.f)({ tx: Object(v.f)(t), sender: e }).then(({ tx: e, sender: r }) => {
              null != e.from
                ? e.from.toLowerCase() !== r && at.throwArgumentError('from address mismatch', 'transaction', t)
                : (e.from = r)
              const n = this.provider.constructor.hexlifyTransaction(e, { from: !0 })
              return this.provider.send('eth_sendTransaction', [n]).then(
                t => t,
                t => (
                  'string' == typeof t.message &&
                    t.message.match(/user denied/i) &&
                    at.throwError('user rejected transaction', i.b.errors.ACTION_REJECTED, {
                      action: 'sendTransaction',
                      transaction: e,
                    }),
                  ht('sendTransaction', t, n)
                ),
              )
            })
          )
        }
        signTransaction(t) {
          return at.throwError('signing transactions is unsupported', i.b.errors.UNSUPPORTED_OPERATION, {
            operation: 'signTransaction',
          })
        }
        sendTransaction(t) {
          return st(this, void 0, void 0, function*() {
            const e = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval),
              r = yield this.sendUncheckedTransaction(t)
            try {
              return yield Object(E.c)(
                () =>
                  st(this, void 0, void 0, function*() {
                    const t = yield this.provider.getTransaction(r)
                    if (null !== t) return this.provider._wrapTransaction(t, r, e)
                  }),
                { oncePoll: this.provider },
              )
            } catch (t) {
              throw ((t.transactionHash = r), t)
            }
          })
        }
        signMessage(t) {
          return st(this, void 0, void 0, function*() {
            const e = 'string' == typeof t ? Object(A.f)(t) : t,
              r = yield this.getAddress()
            try {
              return yield this.provider.send('personal_sign', [Object(g.i)(e), r.toLowerCase()])
            } catch (e) {
              throw ('string' == typeof e.message &&
                e.message.match(/user denied/i) &&
                at.throwError('user rejected signing', i.b.errors.ACTION_REJECTED, {
                  action: 'signMessage',
                  from: r,
                  messageData: t,
                }),
              e)
            }
          })
        }
        _legacySignMessage(t) {
          return st(this, void 0, void 0, function*() {
            const e = 'string' == typeof t ? Object(A.f)(t) : t,
              r = yield this.getAddress()
            try {
              return yield this.provider.send('eth_sign', [r.toLowerCase(), Object(g.i)(e)])
            } catch (e) {
              throw ('string' == typeof e.message &&
                e.message.match(/user denied/i) &&
                at.throwError('user rejected signing', i.b.errors.ACTION_REJECTED, {
                  action: '_legacySignMessage',
                  from: r,
                  messageData: t,
                }),
              e)
            }
          })
        }
        _signTypedData(t, e, r) {
          return st(this, void 0, void 0, function*() {
            const n = yield ot.a.resolveNames(t, e, r, t => this.provider.resolveName(t)),
              o = yield this.getAddress()
            try {
              return yield this.provider.send('eth_signTypedData_v4', [
                o.toLowerCase(),
                JSON.stringify(ot.a.getPayload(n.domain, e, n.value)),
              ])
            } catch (t) {
              throw ('string' == typeof t.message &&
                t.message.match(/user denied/i) &&
                at.throwError('user rejected signing', i.b.errors.ACTION_REJECTED, {
                  action: '_signTypedData',
                  from: o,
                  messageData: { domain: n.domain, types: e, value: n.value },
                }),
              t)
            }
          })
        }
        unlock(t) {
          return st(this, void 0, void 0, function*() {
            const e = this.provider,
              r = yield this.getAddress()
            return e.send('personal_unlockAccount', [r.toLowerCase(), t, null])
          })
        }
      }
      class gt extends mt {
        sendTransaction(t) {
          return this.sendUncheckedTransaction(t).then(t => ({
            hash: t,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: e => this.provider.waitForTransaction(t, e),
          }))
        }
      }
      const bt = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
      }
      class yt extends nt {
        constructor(t, e) {
          let r = e
          null == r &&
            (r = new Promise((t, e) => {
              setTimeout(() => {
                this.detectNetwork().then(
                  e => {
                    t(e)
                  },
                  t => {
                    e(t)
                  },
                )
              }, 0)
            })),
            super(r),
            t || (t = Object(v.e)(this.constructor, 'defaultUrl')()),
            'string' == typeof t
              ? Object(v.d)(this, 'connection', Object.freeze({ url: t }))
              : Object(v.d)(this, 'connection', Object.freeze(Object(v.g)(t))),
            (this._nextId = 42)
        }
        get _cache() {
          return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
        }
        static defaultUrl() {
          return 'http://localhost:8545'
        }
        detectNetwork() {
          return (
            this._cache.detectNetwork ||
              ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
              setTimeout(() => {
                this._cache.detectNetwork = null
              }, 0)),
            this._cache.detectNetwork
          )
        }
        _uncachedDetectNetwork() {
          return st(this, void 0, void 0, function*() {
            yield lt(0)
            let t = null
            try {
              t = yield this.send('eth_chainId', [])
            } catch (e) {
              try {
                t = yield this.send('net_version', [])
              } catch (t) {}
            }
            if (null != t) {
              const e = Object(v.e)(this.constructor, 'getNetwork')
              try {
                return e(m.a.from(t).toNumber())
              } catch (e) {
                return at.throwError('could not detect network', i.b.errors.NETWORK_ERROR, {
                  chainId: t,
                  event: 'invalidNetwork',
                  serverError: e,
                })
              }
            }
            return at.throwError('could not detect network', i.b.errors.NETWORK_ERROR, { event: 'noNetwork' })
          })
        }
        getSigner(t) {
          return new mt(pt, this, t)
        }
        getUncheckedSigner(t) {
          return this.getSigner(t).connectUnchecked()
        }
        listAccounts() {
          return this.send('eth_accounts', []).then(t => t.map(t => this.formatter.address(t)))
        }
        send(t, e) {
          const r = { method: t, params: e, id: this._nextId++, jsonrpc: '2.0' }
          this.emit('debug', { action: 'request', request: Object(v.c)(r), provider: this })
          const n = ['eth_chainId', 'eth_blockNumber'].indexOf(t) >= 0
          if (n && this._cache[t]) return this._cache[t]
          const i = Object(E.b)(this.connection, JSON.stringify(r), ft).then(
            t => (this.emit('debug', { action: 'response', request: r, response: t, provider: this }), t),
            t => {
              throw (this.emit('debug', { action: 'response', error: t, request: r, provider: this }), t)
            },
          )
          return (
            n &&
              ((this._cache[t] = i),
              setTimeout(() => {
                this._cache[t] = null
              }, 0)),
            i
          )
        }
        prepareRequest(t, e) {
          switch (t) {
            case 'getBlockNumber':
              return ['eth_blockNumber', []]
            case 'getGasPrice':
              return ['eth_gasPrice', []]
            case 'getBalance':
              return ['eth_getBalance', [dt(e.address), e.blockTag]]
            case 'getTransactionCount':
              return ['eth_getTransactionCount', [dt(e.address), e.blockTag]]
            case 'getCode':
              return ['eth_getCode', [dt(e.address), e.blockTag]]
            case 'getStorageAt':
              return ['eth_getStorageAt', [dt(e.address), Object(g.h)(e.position, 32), e.blockTag]]
            case 'sendTransaction':
              return ['eth_sendRawTransaction', [e.signedTransaction]]
            case 'getBlock':
              return e.blockTag
                ? ['eth_getBlockByNumber', [e.blockTag, !!e.includeTransactions]]
                : e.blockHash
                ? ['eth_getBlockByHash', [e.blockHash, !!e.includeTransactions]]
                : null
            case 'getTransaction':
              return ['eth_getTransactionByHash', [e.transactionHash]]
            case 'getTransactionReceipt':
              return ['eth_getTransactionReceipt', [e.transactionHash]]
            case 'call':
              return [
                'eth_call',
                [Object(v.e)(this.constructor, 'hexlifyTransaction')(e.transaction, { from: !0 }), e.blockTag],
              ]
            case 'estimateGas':
              return [
                'eth_estimateGas',
                [Object(v.e)(this.constructor, 'hexlifyTransaction')(e.transaction, { from: !0 })],
              ]
            case 'getLogs':
              return (
                e.filter && null != e.filter.address && (e.filter.address = dt(e.filter.address)),
                ['eth_getLogs', [e.filter]]
              )
          }
          return null
        }
        perform(t, e) {
          return st(this, void 0, void 0, function*() {
            if ('call' === t || 'estimateGas' === t) {
              const t = e.transaction
              if (
                t &&
                null != t.type &&
                m.a.from(t.type).isZero() &&
                null == t.maxFeePerGas &&
                null == t.maxPriorityFeePerGas
              ) {
                const r = yield this.getFeeData()
                null == r.maxFeePerGas &&
                  null == r.maxPriorityFeePerGas &&
                  (((e = Object(v.g)(e)).transaction = Object(v.g)(t)), delete e.transaction.type)
              }
            }
            const r = this.prepareRequest(t, e)
            null == r && at.throwError(t + ' not implemented', i.b.errors.NOT_IMPLEMENTED, { operation: t })
            try {
              return yield this.send(r[0], r[1])
            } catch (r) {
              return ht(t, r, e)
            }
          })
        }
        _startEvent(t) {
          'pending' === t.tag && this._startPending(), super._startEvent(t)
        }
        _startPending() {
          if (null != this._pendingFilter) return
          const t = this,
            e = this.send('eth_newPendingTransactionFilter', [])
          ;(this._pendingFilter = e),
            e
              .then(function(r) {
                return (
                  (function n() {
                    t.send('eth_getFilterChanges', [r])
                      .then(function(r) {
                        if (t._pendingFilter != e) return null
                        let n = Promise.resolve()
                        return (
                          r.forEach(function(e) {
                            ;(t._emitted['t:' + e.toLowerCase()] = 'pending'),
                              (n = n.then(function() {
                                return t.getTransaction(e).then(function(e) {
                                  return t.emit('pending', e), null
                                })
                              }))
                          }),
                          n.then(function() {
                            return lt(1e3)
                          })
                        )
                      })
                      .then(function() {
                        if (t._pendingFilter == e)
                          return (
                            setTimeout(function() {
                              n()
                            }, 0),
                            null
                          )
                        t.send('eth_uninstallFilter', [r])
                      })
                      .catch(t => {})
                  })(),
                  r
                )
              })
              .catch(t => {})
        }
        _stopEvent(t) {
          'pending' === t.tag && 0 === this.listenerCount('pending') && (this._pendingFilter = null),
            super._stopEvent(t)
        }
        static hexlifyTransaction(t, e) {
          const r = Object(v.g)(bt)
          if (e) for (const t in e) e[t] && (r[t] = !0)
          Object(v.b)(t, r)
          const n = {}
          return (
            [
              'chainId',
              'gasLimit',
              'gasPrice',
              'type',
              'maxFeePerGas',
              'maxPriorityFeePerGas',
              'nonce',
              'value',
            ].forEach(function(e) {
              if (null == t[e]) return
              const r = Object(g.g)(m.a.from(t[e]))
              'gasLimit' === e && (e = 'gas'), (n[e] = r)
            }),
            ['from', 'to', 'data'].forEach(function(e) {
              null != t[e] && (n[e] = Object(g.i)(t[e]))
            }),
            t.accessList && (n.accessList = Object(S.b)(t.accessList)),
            n
          )
        }
      }
      let vt = null
      try {
        if (((vt = WebSocket), null == vt)) throw new Error('inject please')
      } catch (t) {
        const e = new i.b('providers/5.7.2')
        vt = function() {
          e.throwError('WebSockets not supported in this environment', i.b.errors.UNSUPPORTED_OPERATION, {
            operation: 'new WebSocket()',
          })
        }
      }
      var wt = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const At = new i.b('providers/5.7.2')
      let Et = 1
      class Ot extends yt {
        constructor(t, e) {
          'any' === e &&
            At.throwError("WebSocketProvider does not support 'any' network yet", i.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'network:any',
            }),
            super('string' == typeof t ? t : '_websocket', e),
            (this._pollingInterval = -1),
            (this._wsReady = !1),
            'string' == typeof t
              ? Object(v.d)(this, '_websocket', new vt(this.connection.url))
              : Object(v.d)(this, '_websocket', t),
            Object(v.d)(this, '_requests', {}),
            Object(v.d)(this, '_subs', {}),
            Object(v.d)(this, '_subIds', {}),
            Object(v.d)(this, '_detectNetwork', super.detectNetwork()),
            (this.websocket.onopen = () => {
              ;(this._wsReady = !0),
                Object.keys(this._requests).forEach(t => {
                  this.websocket.send(this._requests[t].payload)
                })
            }),
            (this.websocket.onmessage = t => {
              const e = t.data,
                r = JSON.parse(e)
              if (null != r.id) {
                const t = String(r.id),
                  n = this._requests[t]
                if ((delete this._requests[t], void 0 !== r.result))
                  n.callback(null, r.result),
                    this.emit('debug', {
                      action: 'response',
                      request: JSON.parse(n.payload),
                      response: r.result,
                      provider: this,
                    })
                else {
                  let t = null
                  r.error
                    ? ((t = new Error(r.error.message || 'unknown error')),
                      Object(v.d)(t, 'code', r.error.code || null),
                      Object(v.d)(t, 'response', e))
                    : (t = new Error('unknown error')),
                    n.callback(t, void 0),
                    this.emit('debug', { action: 'response', error: t, request: JSON.parse(n.payload), provider: this })
                }
              } else if ('eth_subscription' === r.method) {
                const t = this._subs[r.params.subscription]
                t && t.processFunc(r.params.result)
              } else console.warn('this should not happen')
            })
          const r = setInterval(() => {
            this.emit('poll')
          }, 1e3)
          r.unref && r.unref()
        }
        get websocket() {
          return this._websocket
        }
        detectNetwork() {
          return this._detectNetwork
        }
        get pollingInterval() {
          return 0
        }
        resetEventsBlock(t) {
          At.throwError('cannot reset events block on WebSocketProvider', i.b.errors.UNSUPPORTED_OPERATION, {
            operation: 'resetEventBlock',
          })
        }
        set pollingInterval(t) {
          At.throwError('cannot set polling interval on WebSocketProvider', i.b.errors.UNSUPPORTED_OPERATION, {
            operation: 'setPollingInterval',
          })
        }
        poll() {
          return wt(this, void 0, void 0, function*() {
            return null
          })
        }
        set polling(t) {
          t &&
            At.throwError('cannot set polling on WebSocketProvider', i.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'setPolling',
            })
        }
        send(t, e) {
          const r = Et++
          return new Promise((n, i) => {
            const o = JSON.stringify({ method: t, params: e, id: r, jsonrpc: '2.0' })
            this.emit('debug', { action: 'request', request: JSON.parse(o), provider: this }),
              (this._requests[String(r)] = {
                callback: function(t, e) {
                  return t ? i(t) : n(e)
                },
                payload: o,
              }),
              this._wsReady && this.websocket.send(o)
          })
        }
        static defaultUrl() {
          return 'ws://localhost:8546'
        }
        _subscribe(t, e, r) {
          return wt(this, void 0, void 0, function*() {
            let n = this._subIds[t]
            null == n && ((n = Promise.all(e).then(t => this.send('eth_subscribe', t))), (this._subIds[t] = n))
            const i = yield n
            this._subs[i] = { tag: t, processFunc: r }
          })
        }
        _startEvent(t) {
          switch (t.type) {
            case 'block':
              this._subscribe('block', ['newHeads'], t => {
                const e = m.a.from(t.number).toNumber()
                ;(this._emitted.block = e), this.emit('block', e)
              })
              break
            case 'pending':
              this._subscribe('pending', ['newPendingTransactions'], t => {
                this.emit('pending', t)
              })
              break
            case 'filter':
              this._subscribe(t.tag, ['logs', this._getFilter(t.filter)], e => {
                null == e.removed && (e.removed = !1), this.emit(t.filter, this.formatter.filterLog(e))
              })
              break
            case 'tx': {
              const e = t => {
                const e = t.hash
                this.getTransactionReceipt(e).then(t => {
                  t && this.emit(e, t)
                })
              }
              e(t),
                this._subscribe('tx', ['newHeads'], t => {
                  this._events.filter(t => 'tx' === t.type).forEach(e)
                })
              break
            }
            case 'debug':
            case 'poll':
            case 'willPoll':
            case 'didPoll':
            case 'error':
              break
            default:
              console.log('unhandled:', t)
          }
        }
        _stopEvent(t) {
          let e = t.tag
          if ('tx' === t.type) {
            if (this._events.filter(t => 'tx' === t.type).length) return
            e = 'tx'
          } else if (this.listenerCount(t.event)) return
          const r = this._subIds[e]
          r &&
            (delete this._subIds[e],
            r.then(t => {
              this._subs[t] && (delete this._subs[t], this.send('eth_unsubscribe', [t]))
            }))
        }
        destroy() {
          return wt(this, void 0, void 0, function*() {
            this.websocket.readyState === vt.CONNECTING &&
              (yield new Promise(t => {
                ;(this.websocket.onopen = function() {
                  t(!0)
                }),
                  (this.websocket.onerror = function() {
                    t(!1)
                  })
              })),
              this.websocket.close(1e3)
          })
        }
      }
      var Mt = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const kt = new i.b('providers/5.7.2')
      class _t extends yt {
        detectNetwork() {
          const t = Object.create(null, { detectNetwork: { get: () => super.detectNetwork } })
          return Mt(this, void 0, void 0, function*() {
            let e = this.network
            return (
              null == e &&
                ((e = yield t.detectNetwork.call(this)),
                e || kt.throwError('no network detected', i.b.errors.UNKNOWN_ERROR, {}),
                null == this._network && (Object(v.d)(this, '_network', e), this.emit('network', e, null))),
              e
            )
          })
        }
      }
      class St extends _t {
        constructor(t, e) {
          kt.checkAbstract(new.target, St),
            (t = Object(v.e)(new.target, 'getNetwork')(t)),
            (e = Object(v.e)(new.target, 'getApiKey')(e))
          super(Object(v.e)(new.target, 'getUrl')(t, e), t),
            'string' == typeof e
              ? Object(v.d)(this, 'apiKey', e)
              : null != e &&
                Object.keys(e).forEach(t => {
                  Object(v.d)(this, t, e[t])
                })
        }
        _startPending() {
          kt.warn('WARNING: API provider does not support pending filters')
        }
        isCommunityResource() {
          return !1
        }
        getSigner(t) {
          return kt.throwError('API provider does not support signing', i.b.errors.UNSUPPORTED_OPERATION, {
            operation: 'getSigner',
          })
        }
        listAccounts() {
          return Promise.resolve([])
        }
        static getApiKey(t) {
          return t
        }
        static getUrl(t, e) {
          return kt.throwError('not implemented; sub-classes must override getUrl', i.b.errors.NOT_IMPLEMENTED, {
            operation: 'getUrl',
          })
        }
      }
      const jt = new i.b('providers/5.7.2'),
        Nt = '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC'
      class Pt extends Ot {
        constructor(t, e) {
          const r = new xt(t, e)
          super(r.connection.url.replace(/^http/i, 'ws').replace('.alchemyapi.', '.ws.alchemyapi.'), r.network),
            Object(v.d)(this, 'apiKey', r.apiKey)
        }
        isCommunityResource() {
          return this.apiKey === Nt
        }
      }
      class xt extends St {
        static getWebSocketProvider(t, e) {
          return new Pt(t, e)
        }
        static getApiKey(t) {
          return null == t ? Nt : (t && 'string' != typeof t && jt.throwArgumentError('invalid apiKey', 'apiKey', t), t)
        }
        static getUrl(t, e) {
          let r = null
          switch (t.name) {
            case 'homestead':
              r = 'eth-mainnet.alchemyapi.io/v2/'
              break
            case 'goerli':
              r = 'eth-goerli.g.alchemy.com/v2/'
              break
            case 'matic':
              r = 'polygon-mainnet.g.alchemy.com/v2/'
              break
            case 'maticmum':
              r = 'polygon-mumbai.g.alchemy.com/v2/'
              break
            case 'arbitrum':
              r = 'arb-mainnet.g.alchemy.com/v2/'
              break
            case 'arbitrum-goerli':
              r = 'arb-goerli.g.alchemy.com/v2/'
              break
            case 'optimism':
              r = 'opt-mainnet.g.alchemy.com/v2/'
              break
            case 'optimism-goerli':
              r = 'opt-goerli.g.alchemy.com/v2/'
              break
            default:
              jt.throwArgumentError('unsupported network', 'network', arguments[0])
          }
          return {
            allowGzip: !0,
            url: 'https://' + r + e,
            throttleCallback: (t, r) => (e === Nt && T(), Promise.resolve(!0)),
          }
        }
        isCommunityResource() {
          return this.apiKey === Nt
        }
      }
      const Ct = new i.b('providers/5.7.2'),
        Tt = '9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972'
      function Rt(t) {
        switch (t) {
          case 'homestead':
            return 'rpc.ankr.com/eth/'
          case 'ropsten':
            return 'rpc.ankr.com/eth_ropsten/'
          case 'rinkeby':
            return 'rpc.ankr.com/eth_rinkeby/'
          case 'goerli':
            return 'rpc.ankr.com/eth_goerli/'
          case 'matic':
            return 'rpc.ankr.com/polygon/'
          case 'arbitrum':
            return 'rpc.ankr.com/arbitrum/'
        }
        return Ct.throwArgumentError('unsupported network', 'name', t)
      }
      class It extends St {
        isCommunityResource() {
          return this.apiKey === Tt
        }
        static getApiKey(t) {
          return null == t ? Tt : t
        }
        static getUrl(t, e) {
          null == e && (e = Tt)
          const r = {
            allowGzip: !0,
            url: 'https://' + Rt(t.name) + e,
            throttleCallback: (t, r) => (e.apiKey === Tt && T(), Promise.resolve(!0)),
          }
          return null != e.projectSecret && ((r.user = ''), (r.password = e.projectSecret)), r
        }
      }
      var Bt = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const Ft = new i.b('providers/5.7.2')
      class Dt extends St {
        static getApiKey(t) {
          return null != t && Ft.throwArgumentError('apiKey not supported for cloudflare', 'apiKey', t), null
        }
        static getUrl(t, e) {
          let r = null
          switch (t.name) {
            case 'homestead':
              r = 'https://cloudflare-eth.com/'
              break
            default:
              Ft.throwArgumentError('unsupported network', 'network', arguments[0])
          }
          return r
        }
        perform(t, e) {
          const r = Object.create(null, { perform: { get: () => super.perform } })
          return Bt(this, void 0, void 0, function*() {
            if ('getBlockNumber' === t) {
              return (yield r.perform.call(this, 'getBlock', { blockTag: 'latest' })).number
            }
            return r.perform.call(this, t, e)
          })
        }
      }
      var Lt = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t))
            } catch (t) {
              o(t)
            }
          }
          function a(t) {
            try {
              u(n.throw(t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function(t) {
                      t(e)
                    })).then(s, a)
          }
          u((n = n.apply(t, e || [])).next())
        })
      }
      const Ut = new i.b('providers/5.7.2')
      function Gt(t) {
        const e = {}
        for (let r in t) {
          if (null == t[r]) continue
          let n = t[r]
          ;('type' === r && 0 === n) ||
            ((n = {
              type: !0,
              gasLimit: !0,
              gasPrice: !0,
              maxFeePerGs: !0,
              maxPriorityFeePerGas: !0,
              nonce: !0,
              value: !0,
            }[r]
              ? Object(g.g)(Object(g.i)(n))
              : 'accessList' === r
              ? '[' +
                Object(S.b)(n)
                  .map(t => `{address:"${t.address}",storageKeys:["${t.storageKeys.join('","')}"]}`)
                  .join(',') +
                ']'
              : Object(g.i)(n)),
            (e[r] = n))
        }
        return e
      }
      function zt(t) {
        if (0 == t.status && ('No records found' === t.message || 'No transactions found' === t.message))
          return t.result
        if (1 != t.status || 'string' != typeof t.message || !t.message.match(/^OK/)) {
          const e = new Error('invalid response')
          throw ((e.result = JSON.stringify(t)),
          (t.result || '').toLowerCase().indexOf('rate limit') >= 0 && (e.throttleRetry = !0),
          e)
        }
        return t.result
      }
      function qt(t) {
        if (t && 0 == t.status && 'NOTOK' == t.message && (t.result || '').toLowerCase().indexOf('rate limit') >= 0) {
          const e = new Error('throttled response')
          throw ((e.result = JSON.stringify(t)), (e.throttleRetry = !0), e)
        }
        if ('2.0' != t.jsonrpc) {
          const e = new Error('invalid response')
          throw ((e.result = JSON.stringify(t)), e)
        }
        if (t.error) {
          const e = new Error(t.error.message || 'unknown error')
          throw (t.error.code && (e.code = t.error.code), t.error.data && (e.data = t.error.data), e)
        }
        return t.result
      }
      function Kt(t) {
        if ('pending' === t) throw new Error('pending not supported')
        return 'latest' === t ? t : parseInt(t.substring(2), 16)
      }
      function Ht(t, e, r) {
        if ('call' === t && e.code === i.b.errors.SERVER_ERROR) {
          const t = e.error
          if (t && (t.message.match(/reverted/i) || t.message.match(/VM execution error/i))) {
            let r = t.data
            if ((r && (r = '0x' + r.replace(/^.*0x/i, '')), Object(g.l)(r))) return r
            Ut.throwError('missing revert data in call exception', i.b.errors.CALL_EXCEPTION, { error: e, data: '0x' })
          }
        }
        let n = e.message
        throw (e.code === i.b.errors.SERVER_ERROR &&
          (e.error && 'string' == typeof e.error.message
            ? (n = e.error.message)
            : 'string' == typeof e.body
            ? (n = e.body)
            : 'string' == typeof e.responseText && (n = e.responseText)),
        (n = (n || '').toLowerCase()),
        n.match(/insufficient funds/) &&
          Ut.throwError('insufficient funds for intrinsic transaction cost', i.b.errors.INSUFFICIENT_FUNDS, {
            error: e,
            method: t,
            transaction: r,
          }),
        n.match(/same hash was already imported|transaction nonce is too low|nonce too low/) &&
          Ut.throwError('nonce has already been used', i.b.errors.NONCE_EXPIRED, {
            error: e,
            method: t,
            transaction: r,
          }),
        n.match(/another transaction with same nonce/) &&
          Ut.throwError('replacement fee too low', i.b.errors.REPLACEMENT_UNDERPRICED, {
            error: e,
            method: t,
            transaction: r,
          }),
        n.match(/execution failed due to an exception|execution reverted/) &&
          Ut.throwError(
            'cannot estimate gas; transaction may fail or may require manual gas limit',
            i.b.errors.UNPREDICTABLE_GAS_LIMIT,
            { error: e, method: t, transaction: r },
          ),
        e)
      }
      class Jt extends nt {
        constructor(t, e) {
          super(t), Object(v.d)(this, 'baseUrl', this.getBaseUrl()), Object(v.d)(this, 'apiKey', e || null)
        }
        getBaseUrl() {
          switch (this.network ? this.network.name : 'invalid') {
            case 'homestead':
              return 'https://api.etherscan.io'
            case 'goerli':
              return 'https://api-goerli.etherscan.io'
            case 'sepolia':
              return 'https://api-sepolia.etherscan.io'
            case 'matic':
              return 'https://api.polygonscan.com'
            case 'maticmum':
              return 'https://api-testnet.polygonscan.com'
            case 'arbitrum':
              return 'https://api.arbiscan.io'
            case 'arbitrum-goerli':
              return 'https://api-goerli.arbiscan.io'
            case 'optimism':
              return 'https://api-optimistic.etherscan.io'
            case 'optimism-goerli':
              return 'https://api-goerli-optimistic.etherscan.io'
          }
          return Ut.throwArgumentError('unsupported network', 'network', this.network.name)
        }
        getUrl(t, e) {
          const r = Object.keys(e).reduce((t, r) => {
              const n = e[r]
              return null != n && (t += `&${r}=${n}`), t
            }, ''),
            n = this.apiKey ? '&apikey=' + this.apiKey : ''
          return `${this.baseUrl}/api?module=${t}${r}${n}`
        }
        getPostUrl() {
          return this.baseUrl + '/api'
        }
        getPostData(t, e) {
          return (e.module = t), (e.apikey = this.apiKey), e
        }
        fetch(t, e, r) {
          return Lt(this, void 0, void 0, function*() {
            const n = r ? this.getPostUrl() : this.getUrl(t, e),
              i = r ? this.getPostData(t, e) : null,
              o = 'proxy' === t ? qt : zt
            this.emit('debug', { action: 'request', request: n, provider: this })
            const s = {
              url: n,
              throttleSlotInterval: 1e3,
              throttleCallback: (t, e) => (this.isCommunityResource() && T(), Promise.resolve(!0)),
            }
            let a = null
            i &&
              ((s.headers = { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' }),
              (a = Object.keys(i)
                .map(t => `${t}=${i[t]}`)
                .join('&')))
            const u = yield Object(E.b)(s, a, o || qt)
            return this.emit('debug', { action: 'response', request: n, response: Object(v.c)(u), provider: this }), u
          })
        }
        detectNetwork() {
          return Lt(this, void 0, void 0, function*() {
            return this.network
          })
        }
        perform(t, e) {
          const r = Object.create(null, { perform: { get: () => super.perform } })
          return Lt(this, void 0, void 0, function*() {
            switch (t) {
              case 'getBlockNumber':
                return this.fetch('proxy', { action: 'eth_blockNumber' })
              case 'getGasPrice':
                return this.fetch('proxy', { action: 'eth_gasPrice' })
              case 'getBalance':
                return this.fetch('account', { action: 'balance', address: e.address, tag: e.blockTag })
              case 'getTransactionCount':
                return this.fetch('proxy', { action: 'eth_getTransactionCount', address: e.address, tag: e.blockTag })
              case 'getCode':
                return this.fetch('proxy', { action: 'eth_getCode', address: e.address, tag: e.blockTag })
              case 'getStorageAt':
                return this.fetch('proxy', {
                  action: 'eth_getStorageAt',
                  address: e.address,
                  position: e.position,
                  tag: e.blockTag,
                })
              case 'sendTransaction':
                return this.fetch(
                  'proxy',
                  { action: 'eth_sendRawTransaction', hex: e.signedTransaction },
                  !0,
                ).catch(t => Ht('sendTransaction', t, e.signedTransaction))
              case 'getBlock':
                if (e.blockTag)
                  return this.fetch('proxy', {
                    action: 'eth_getBlockByNumber',
                    tag: e.blockTag,
                    boolean: e.includeTransactions ? 'true' : 'false',
                  })
                throw new Error('getBlock by blockHash not implemented')
              case 'getTransaction':
                return this.fetch('proxy', { action: 'eth_getTransactionByHash', txhash: e.transactionHash })
              case 'getTransactionReceipt':
                return this.fetch('proxy', { action: 'eth_getTransactionReceipt', txhash: e.transactionHash })
              case 'call': {
                if ('latest' !== e.blockTag) throw new Error('EtherscanProvider does not support blockTag for call')
                const t = Gt(e.transaction)
                ;(t.module = 'proxy'), (t.action = 'eth_call')
                try {
                  return yield this.fetch('proxy', t, !0)
                } catch (t) {
                  return Ht('call', t, e.transaction)
                }
              }
              case 'estimateGas': {
                const t = Gt(e.transaction)
                ;(t.module = 'proxy'), (t.action = 'eth_estimateGas')
                try {
                  return yield this.fetch('proxy', t, !0)
                } catch (t) {
                  return Ht('estimateGas', t, e.transaction)
                }
              }
              case 'getLogs': {
                const t = { action: 'getLogs' }
                if (
                  (e.filter.fromBlock && (t.fromBlock = Kt(e.filter.fromBlock)),
                  e.filter.toBlock && (t.toBlock = Kt(e.filter.toBlock)),
                  e.filter.address && (t.address = e.filter.address),
                  e.filter.topics &&
                    e.filter.topics.length > 0 &&
                    (e.filter.topics.length > 1 &&
                      Ut.throwError('unsupported topic count', i.b.errors.UNSUPPORTED_OPERATION, {
                        topics: e.filter.topics,
                      }),
                    1 === e.filter.topics.length))
                ) {
                  const r = e.filter.topics[0]
                  ;('string' == typeof r && 66 === r.length) ||
                    Ut.throwError('unsupported topic format', i.b.errors.UNSUPPORTED_OPERATION, { topic0: r }),
                    (t.topic0 = r)
                }
                const r = yield this.fetch('logs', t)
                let n = {}
                for (let t = 0; t < r.length; t++) {
                  const e = r[t]
                  if (null == e.blockHash) {
                    if (null == n[e.blockNumber]) {
                      const t = yield this.getBlock(e.blockNumber)
                      t && (n[e.blockNumber] = t.hash)
                    }
                    e.blockHash = n[e.blockNumber]
                  }
                }
                return r
              }
              case 'getEtherPrice':
                return 'homestead' !== this.network.name
                  ? 0
                  : parseFloat((yield this.fetch('stats', { action: 'ethprice' })).ethusd)
            }
            return r.perform.call(this, t, e)
          })
        }
        getHistory(t, e, r) {
          return Lt(this, void 0, void 0, function*() {
            const n = {
              action: 'txlist',
              address: yield this.resolveName(t),
              startblock: null == e ? 0 : e,
              endblock: null == r ? 99999999 : r,
              sort: 'asc',
            }
            return (yield this.fetch('account', n)).map(t => {
              ;['contractAddress', 'to'].forEach(function(e) {
                '' == t[e] && delete t[e]
              }),
                null == t.creates && null != t.contractAddress && (t.creates = t.contractAddress)
              const e = this.formatter.transactionResponse(t)
              return t.timeStamp && (e.timestamp = parseInt(t.timeStamp)), e
            })
          })
        }
        isCommunityResource() {
          return null == this.apiKey
        }
      }
      var Vt = r(190),
        Wt = function(t, e, r, n) {
          return new (r || (r = Promise))(function(i, o) {
            function s(t) {
              try {
                u(n.next(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              try {
                u(n.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function u(t) {
              var e
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function(t) {
                        t(e)
                      })).then(s, a)
            }
            u((n = n.apply(t, e || [])).next())
          })
        }
      const Qt = new i.b('providers/5.7.2')
      function Yt() {
        return new Date().getTime()
      }
      function Zt(t) {
        let e = null
        for (let r = 0; r < t.length; r++) {
          const n = t[r]
          if (null == n) return null
          e
            ? (e.name === n.name &&
                e.chainId === n.chainId &&
                (e.ensAddress === n.ensAddress || (null == e.ensAddress && null == n.ensAddress))) ||
              Qt.throwArgumentError('provider mismatch', 'networks', t)
            : (e = n)
        }
        return e
      }
      function Xt(t, e) {
        t = t.slice().sort()
        const r = Math.floor(t.length / 2)
        if (t.length % 2) return t[r]
        const n = t[r - 1],
          i = t[r]
        return null != e && Math.abs(n - i) > e ? null : (n + i) / 2
      }
      function $t(t) {
        if (null === t) return 'null'
        if ('number' == typeof t || 'boolean' == typeof t) return JSON.stringify(t)
        if ('string' == typeof t) return t
        if (m.a.isBigNumber(t)) return t.toString()
        if (Array.isArray(t)) return JSON.stringify(t.map(t => $t(t)))
        if ('object' == typeof t) {
          const e = Object.keys(t)
          return (
            e.sort(),
            '{' +
              e
                .map(e => {
                  let r = t[e]
                  return (r = 'function' == typeof r ? '[function]' : $t(r)), JSON.stringify(e) + ':' + r
                })
                .join(',') +
              '}'
          )
        }
        throw new Error('unknown value type: ' + typeof t)
      }
      let te = 1
      function ee(t) {
        let e = null,
          r = null,
          n = new Promise(n => {
            ;(e = function() {
              r && (clearTimeout(r), (r = null)), n()
            }),
              (r = setTimeout(e, t))
          })
        return {
          cancel: e,
          getPromise: function() {
            return n
          },
          wait: t => ((n = n.then(t)), n),
        }
      }
      const re = [
          i.b.errors.CALL_EXCEPTION,
          i.b.errors.INSUFFICIENT_FUNDS,
          i.b.errors.NONCE_EXPIRED,
          i.b.errors.REPLACEMENT_UNDERPRICED,
          i.b.errors.UNPREDICTABLE_GAS_LIMIT,
        ],
        ne = ['address', 'args', 'errorArgs', 'errorSignature', 'method', 'transaction']
      function ie(t, e) {
        const r = { weight: t.weight }
        return (
          Object.defineProperty(r, 'provider', { get: () => t.provider }),
          t.start && (r.start = t.start),
          e && (r.duration = e - t.start),
          t.done && (t.error ? (r.error = t.error) : (r.result = t.result || null)),
          r
        )
      }
      function oe(t, e, r) {
        let n = $t
        switch (e) {
          case 'getBlockNumber':
            return function(e) {
              const r = e.map(t => t.result)
              let n = Xt(
                e.map(t => t.result),
                2,
              )
              if (null != n)
                return (
                  (n = Math.ceil(n)),
                  r.indexOf(n + 1) >= 0 && n++,
                  n >= t._highestBlockNumber && (t._highestBlockNumber = n),
                  t._highestBlockNumber
                )
            }
          case 'getGasPrice':
            return function(t) {
              const e = t.map(t => t.result)
              return e.sort(), e[Math.floor(e.length / 2)]
            }
          case 'getEtherPrice':
            return function(t) {
              return Xt(t.map(t => t.result))
            }
          case 'getBalance':
          case 'getTransactionCount':
          case 'getCode':
          case 'getStorageAt':
          case 'call':
          case 'estimateGas':
          case 'getLogs':
            break
          case 'getTransaction':
          case 'getTransactionReceipt':
            n = function(t) {
              return null == t ? null : (((t = Object(v.g)(t)).confirmations = -1), $t(t))
            }
            break
          case 'getBlock':
            n = r.includeTransactions
              ? function(t) {
                  return null == t
                    ? null
                    : (((t = Object(v.g)(t)).transactions = t.transactions.map(
                        t => (((t = Object(v.g)(t)).confirmations = -1), t),
                      )),
                      $t(t))
                }
              : function(t) {
                  return null == t ? null : $t(t)
                }
            break
          default:
            throw new Error('unknown method: ' + e)
        }
        return (function(t, e) {
          return function(r) {
            const n = {}
            r.forEach(e => {
              const r = t(e.result)
              n[r] || (n[r] = { count: 0, result: e.result }), n[r].count++
            })
            const i = Object.keys(n)
            for (let t = 0; t < i.length; t++) {
              const r = n[i[t]]
              if (r.count >= e) return r.result
            }
          }
        })(n, t.quorum)
      }
      function se(t, e) {
        return Wt(this, void 0, void 0, function*() {
          const r = t.provider
          return (null != r.blockNumber && r.blockNumber >= e) || -1 === e
            ? r
            : Object(E.c)(
                () =>
                  new Promise((n, i) => {
                    setTimeout(function() {
                      return r.blockNumber >= e ? n(r) : t.cancelled ? n(null) : n(void 0)
                    }, 0)
                  }),
                { oncePoll: r },
              )
        })
      }
      function ae(t, e, r, n) {
        return Wt(this, void 0, void 0, function*() {
          let o = t.provider
          switch (r) {
            case 'getBlockNumber':
            case 'getGasPrice':
              return o[r]()
            case 'getEtherPrice':
              if (o.getEtherPrice) return o.getEtherPrice()
              break
            case 'getBalance':
            case 'getTransactionCount':
            case 'getCode':
              return (
                n.blockTag && Object(g.l)(n.blockTag) && (o = yield se(t, e)), o[r](n.address, n.blockTag || 'latest')
              )
            case 'getStorageAt':
              return (
                n.blockTag && Object(g.l)(n.blockTag) && (o = yield se(t, e)),
                o.getStorageAt(n.address, n.position, n.blockTag || 'latest')
              )
            case 'getBlock':
              return (
                n.blockTag && Object(g.l)(n.blockTag) && (o = yield se(t, e)),
                o[n.includeTransactions ? 'getBlockWithTransactions' : 'getBlock'](n.blockTag || n.blockHash)
              )
            case 'call':
            case 'estimateGas':
              return (
                n.blockTag && Object(g.l)(n.blockTag) && (o = yield se(t, e)),
                'call' === r && n.blockTag ? o[r](n.transaction, n.blockTag) : o[r](n.transaction)
              )
            case 'getTransaction':
            case 'getTransactionReceipt':
              return o[r](n.transactionHash)
            case 'getLogs': {
              let r = n.filter
              return (
                ((r.fromBlock && Object(g.l)(r.fromBlock)) || (r.toBlock && Object(g.l)(r.toBlock))) &&
                  (o = yield se(t, e)),
                o.getLogs(r)
              )
            }
          }
          return Qt.throwError('unknown method error', i.b.errors.UNKNOWN_ERROR, { method: r, params: n })
        })
      }
      class ue extends nt {
        constructor(t, e) {
          0 === t.length && Qt.throwArgumentError('missing providers', 'providers', t)
          const r = t.map((t, e) => {
              if (n.b.isProvider(t)) {
                const e = x(t) ? 2e3 : 750,
                  r = 1
                return Object.freeze({ provider: t, weight: 1, stallTimeout: e, priority: r })
              }
              const r = Object(v.g)(t)
              null == r.priority && (r.priority = 1),
                null == r.stallTimeout && (r.stallTimeout = x(t) ? 2e3 : 750),
                null == r.weight && (r.weight = 1)
              const i = r.weight
              return (
                (i % 1 || i > 512 || i < 1) &&
                  Qt.throwArgumentError('invalid weight; must be integer in [1, 512]', `providers[${e}].weight`, i),
                Object.freeze(r)
              )
            }),
            i = r.reduce((t, e) => t + e.weight, 0)
          null == e
            ? (e = i / 2)
            : e > i && Qt.throwArgumentError('quorum will always fail; larger than total weight', 'quorum', e)
          let o = Zt(r.map(t => t.provider.network))
          null == o &&
            (o = new Promise((t, e) => {
              setTimeout(() => {
                this.detectNetwork().then(t, e)
              }, 0)
            })),
            super(o),
            Object(v.d)(this, 'providerConfigs', Object.freeze(r)),
            Object(v.d)(this, 'quorum', e),
            (this._highestBlockNumber = -1)
        }
        detectNetwork() {
          return Wt(this, void 0, void 0, function*() {
            return Zt(yield Promise.all(this.providerConfigs.map(t => t.provider.getNetwork())))
          })
        }
        perform(t, e) {
          return Wt(this, void 0, void 0, function*() {
            if ('sendTransaction' === t) {
              const t = yield Promise.all(
                this.providerConfigs.map(t =>
                  t.provider.sendTransaction(e.signedTransaction).then(
                    t => t.hash,
                    t => t,
                  ),
                ),
              )
              for (let e = 0; e < t.length; e++) {
                const r = t[e]
                if ('string' == typeof r) return r
              }
              throw t[0]
            }
            ;-1 === this._highestBlockNumber && 'getBlockNumber' !== t && (yield this.getBlockNumber())
            const r = oe(this, t, e),
              n = Object(Vt.a)(this.providerConfigs.map(v.g))
            n.sort((t, e) => t.priority - e.priority)
            const o = this._highestBlockNumber
            let s = 0,
              a = !0
            for (;;) {
              const i = Yt()
              let u = n.filter(t => t.runner && i - t.start < t.stallTimeout).reduce((t, e) => t + e.weight, 0)
              for (; u < this.quorum && s < n.length; ) {
                const r = n[s++],
                  i = te++
                ;(r.start = Yt()),
                  (r.staller = ee(r.stallTimeout)),
                  r.staller.wait(() => {
                    r.staller = null
                  }),
                  (r.runner = ae(r, o, t, e).then(
                    n => {
                      ;(r.done = !0),
                        (r.result = n),
                        this.listenerCount('debug') &&
                          this.emit('debug', {
                            action: 'request',
                            rid: i,
                            backend: ie(r, Yt()),
                            request: { method: t, params: Object(v.c)(e) },
                            provider: this,
                          })
                    },
                    n => {
                      ;(r.done = !0),
                        (r.error = n),
                        this.listenerCount('debug') &&
                          this.emit('debug', {
                            action: 'request',
                            rid: i,
                            backend: ie(r, Yt()),
                            request: { method: t, params: Object(v.c)(e) },
                            provider: this,
                          })
                    },
                  )),
                  this.listenerCount('debug') &&
                    this.emit('debug', {
                      action: 'request',
                      rid: i,
                      backend: ie(r, null),
                      request: { method: t, params: Object(v.c)(e) },
                      provider: this,
                    }),
                  (u += r.weight)
              }
              const c = []
              n.forEach(t => {
                !t.done && t.runner && (c.push(t.runner), t.staller && c.push(t.staller.getPromise()))
              }),
                c.length && (yield Promise.race(c))
              const h = n.filter(t => t.done && null == t.error)
              if (h.length >= this.quorum) {
                const t = r(h)
                if (void 0 !== t)
                  return (
                    n.forEach(t => {
                      t.staller && t.staller.cancel(), (t.cancelled = !0)
                    }),
                    t
                  )
                a || (yield ee(100).getPromise()), (a = !1)
              }
              const l = n.reduce((t, e) => {
                if (!e.done || null == e.error) return t
                const r = e.error.code
                return (
                  re.indexOf(r) >= 0 && (t[r] || (t[r] = { error: e.error, weight: 0 }), (t[r].weight += e.weight)), t
                )
              }, {})
              if (
                (Object.keys(l).forEach(t => {
                  const e = l[t]
                  if (e.weight < this.quorum) return
                  n.forEach(t => {
                    t.staller && t.staller.cancel(), (t.cancelled = !0)
                  })
                  const r = e.error,
                    i = {}
                  ne.forEach(t => {
                    null != r[t] && (i[t] = r[t])
                  }),
                    Qt.throwError(r.reason || r.message, t, i)
                }),
                0 === n.filter(t => !t.done).length)
              )
                break
            }
            return (
              n.forEach(t => {
                t.staller && t.staller.cancel(), (t.cancelled = !0)
              }),
              Qt.throwError('failed to meet quorum', i.b.errors.SERVER_ERROR, {
                method: t,
                params: e,
                results: n.map(t => ie(t)),
                provider: this,
              })
            )
          })
        }
      }
      const ce = null,
        he = new i.b('providers/5.7.2'),
        le = '84842078b09946638c03157f83405213'
      class fe extends Ot {
        constructor(t, e) {
          const r = new de(t, e),
            n = r.connection
          n.password &&
            he.throwError('INFURA WebSocket project secrets unsupported', i.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'InfuraProvider.getWebSocketProvider()',
            })
          super(n.url.replace(/^http/i, 'ws').replace('/v3/', '/ws/v3/'), t),
            Object(v.d)(this, 'apiKey', r.projectId),
            Object(v.d)(this, 'projectId', r.projectId),
            Object(v.d)(this, 'projectSecret', r.projectSecret)
        }
        isCommunityResource() {
          return this.projectId === le
        }
      }
      class de extends St {
        static getWebSocketProvider(t, e) {
          return new fe(t, e)
        }
        static getApiKey(t) {
          const e = { apiKey: le, projectId: le, projectSecret: null }
          return (
            null == t ||
              ('string' == typeof t
                ? (e.projectId = t)
                : null != t.projectSecret
                ? (he.assertArgument(
                    'string' == typeof t.projectId,
                    'projectSecret requires a projectId',
                    'projectId',
                    t.projectId,
                  ),
                  he.assertArgument(
                    'string' == typeof t.projectSecret,
                    'invalid projectSecret',
                    'projectSecret',
                    '[REDACTED]',
                  ),
                  (e.projectId = t.projectId),
                  (e.projectSecret = t.projectSecret))
                : t.projectId && (e.projectId = t.projectId),
              (e.apiKey = e.projectId)),
            e
          )
        }
        static getUrl(t, e) {
          let r = null
          switch (t ? t.name : 'unknown') {
            case 'homestead':
              r = 'mainnet.infura.io'
              break
            case 'goerli':
              r = 'goerli.infura.io'
              break
            case 'sepolia':
              r = 'sepolia.infura.io'
              break
            case 'matic':
              r = 'polygon-mainnet.infura.io'
              break
            case 'maticmum':
              r = 'polygon-mumbai.infura.io'
              break
            case 'optimism':
              r = 'optimism-mainnet.infura.io'
              break
            case 'optimism-goerli':
              r = 'optimism-goerli.infura.io'
              break
            case 'arbitrum':
              r = 'arbitrum-mainnet.infura.io'
              break
            case 'arbitrum-goerli':
              r = 'arbitrum-goerli.infura.io'
              break
            default:
              he.throwError('unsupported network', i.b.errors.INVALID_ARGUMENT, { argument: 'network', value: t })
          }
          const n = {
            allowGzip: !0,
            url: 'https://' + r + '/v3/' + e.projectId,
            throttleCallback: (t, r) => (e.projectId === le && T(), Promise.resolve(!0)),
          }
          return null != e.projectSecret && ((n.user = ''), (n.password = e.projectSecret)), n
        }
        isCommunityResource() {
          return this.projectId === le
        }
      }
      class pe extends yt {
        send(t, e) {
          const r = { method: t, params: e, id: this._nextId++, jsonrpc: '2.0' }
          null == this._pendingBatch && (this._pendingBatch = [])
          const n = { request: r, resolve: null, reject: null },
            i = new Promise((t, e) => {
              ;(n.resolve = t), (n.reject = e)
            })
          return (
            this._pendingBatch.push(n),
            this._pendingBatchAggregator ||
              (this._pendingBatchAggregator = setTimeout(() => {
                const t = this._pendingBatch
                ;(this._pendingBatch = null), (this._pendingBatchAggregator = null)
                const e = t.map(t => t.request)
                return (
                  this.emit('debug', { action: 'requestBatch', request: Object(v.c)(e), provider: this }),
                  Object(E.b)(this.connection, JSON.stringify(e)).then(
                    r => {
                      this.emit('debug', { action: 'response', request: e, response: r, provider: this }),
                        t.forEach((t, e) => {
                          const n = r[e]
                          if (n.error) {
                            const e = new Error(n.error.message)
                            ;(e.code = n.error.code), (e.data = n.error.data), t.reject(e)
                          } else t.resolve(n.result)
                        })
                    },
                    r => {
                      this.emit('debug', { action: 'response', error: r, request: e, provider: this }),
                        t.forEach(t => {
                          t.reject(r)
                        })
                    },
                  )
                )
              }, 10)),
            i
          )
        }
      }
      const me = new i.b('providers/5.7.2')
      class ge extends St {
        static getApiKey(t) {
          return (
            t && 'string' != typeof t && me.throwArgumentError('invalid apiKey', 'apiKey', t), t || 'ETHERS_JS_SHARED'
          )
        }
        static getUrl(t, e) {
          me.warn('NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.')
          let r = null
          switch (t.name) {
            case 'homestead':
              r = 'https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc'
              break
            case 'ropsten':
              r = 'https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc'
              break
            case 'rinkeby':
              r = 'https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc'
              break
            case 'goerli':
              r = 'https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc'
              break
            case 'kovan':
              r = 'https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc'
              break
            default:
              me.throwArgumentError('unsupported network', 'network', arguments[0])
          }
          return r + '?apiKey=' + e
        }
      }
      const be = new i.b('providers/5.7.2')
      class ye extends St {
        static getApiKey(t) {
          const e = { applicationId: null, loadBalancer: !0, applicationSecretKey: null }
          return (
            null == t
              ? (e.applicationId = '62e1ad51b37b8e00394bda3b')
              : 'string' == typeof t
              ? (e.applicationId = t)
              : null != t.applicationSecretKey
              ? ((e.applicationId = t.applicationId), (e.applicationSecretKey = t.applicationSecretKey))
              : t.applicationId
              ? (e.applicationId = t.applicationId)
              : be.throwArgumentError('unsupported PocketProvider apiKey', 'apiKey', t),
            e
          )
        }
        static getUrl(t, e) {
          let r = null
          switch (t ? t.name : 'unknown') {
            case 'goerli':
              r = 'eth-goerli.gateway.pokt.network'
              break
            case 'homestead':
              r = 'eth-mainnet.gateway.pokt.network'
              break
            case 'kovan':
              r = 'poa-kovan.gateway.pokt.network'
              break
            case 'matic':
              r = 'poly-mainnet.gateway.pokt.network'
              break
            case 'maticmum':
              r = 'polygon-mumbai-rpc.gateway.pokt.network'
              break
            case 'rinkeby':
              r = 'eth-rinkeby.gateway.pokt.network'
              break
            case 'ropsten':
              r = 'eth-ropsten.gateway.pokt.network'
              break
            default:
              be.throwError('unsupported network', i.b.errors.INVALID_ARGUMENT, { argument: 'network', value: t })
          }
          const n = { headers: {}, url: `https://${r}/v1/lb/${e.applicationId}` }
          return null != e.applicationSecretKey && ((n.user = ''), (n.password = e.applicationSecretKey)), n
        }
        isCommunityResource() {
          return '62e1ad51b37b8e00394bda3b' === this.applicationId
        }
      }
      const ve = new i.b('providers/5.7.2')
      let we = 1
      function Ae(t, e) {
        const r = 'Web3LegacyFetcher'
        return function(t, n) {
          const i = { method: t, params: n, id: we++, jsonrpc: '2.0' }
          return new Promise((t, n) => {
            this.emit('debug', { action: 'request', fetcher: r, request: Object(v.c)(i), provider: this }),
              e(i, (e, o) => {
                if (e)
                  return (
                    this.emit('debug', { action: 'response', fetcher: r, error: e, request: i, provider: this }), n(e)
                  )
                if (
                  (this.emit('debug', { action: 'response', fetcher: r, request: i, response: o, provider: this }),
                  o.error)
                ) {
                  const t = new Error(o.error.message)
                  return (t.code = o.error.code), (t.data = o.error.data), n(t)
                }
                t(o.result)
              })
          })
        }
      }
      class Ee extends yt {
        constructor(t, e) {
          null == t && ve.throwArgumentError('missing provider', 'provider', t)
          let r = null,
            n = null,
            i = null
          'function' == typeof t
            ? ((r = 'unknown:'), (n = t))
            : ((r = t.host || t.path || ''),
              !r && t.isMetaMask && (r = 'metamask'),
              (i = t),
              t.request
                ? ('' === r && (r = 'eip-1193:'),
                  (n = (function(t) {
                    return function(e, r) {
                      null == r && (r = [])
                      const n = { method: e, params: r }
                      return (
                        this.emit('debug', {
                          action: 'request',
                          fetcher: 'Eip1193Fetcher',
                          request: Object(v.c)(n),
                          provider: this,
                        }),
                        t.request(n).then(
                          t => (
                            this.emit('debug', {
                              action: 'response',
                              fetcher: 'Eip1193Fetcher',
                              request: n,
                              response: t,
                              provider: this,
                            }),
                            t
                          ),
                          t => {
                            throw (this.emit('debug', {
                              action: 'response',
                              fetcher: 'Eip1193Fetcher',
                              request: n,
                              error: t,
                              provider: this,
                            }),
                            t)
                          },
                        )
                      )
                    }
                  })(t)))
                : t.sendAsync
                ? (n = Ae(0, t.sendAsync.bind(t)))
                : t.send
                ? (n = Ae(0, t.send.bind(t)))
                : ve.throwArgumentError('unsupported provider', 'provider', t),
              r || (r = 'unknown:')),
            super(r, e),
            Object(v.d)(this, 'jsonRpcFetchFunc', n),
            Object(v.d)(this, 'provider', i)
        }
        send(t, e) {
          return this.jsonRpcFetchFunc(t, e)
        }
      }
      const Oe = new i.b('providers/5.7.2')
      function Me(t, e) {
        if ((null == t && (t = 'homestead'), 'string' == typeof t)) {
          const e = t.match(/^(ws|http)s?:/i)
          if (e)
            switch (e[1].toLowerCase()) {
              case 'http':
              case 'https':
                return new yt(t)
              case 'ws':
              case 'wss':
                return new Ot(t)
              default:
                Oe.throwArgumentError('unsupported URL scheme', 'network', t)
            }
        }
        const r = f(t)
        return (
          (r && r._defaultProvider) ||
            Oe.throwError('unsupported getDefaultProvider network', i.b.errors.NETWORK_ERROR, {
              operation: 'getDefaultProvider',
              network: t,
            }),
          r._defaultProvider(
            {
              FallbackProvider: ue,
              AlchemyProvider: xt,
              AnkrProvider: It,
              CloudflareProvider: Dt,
              EtherscanProvider: Jt,
              InfuraProvider: de,
              JsonRpcProvider: yt,
              NodesmithProvider: ge,
              PocketProvider: ye,
              Web3Provider: Ee,
              IpcProvider: ce,
            },
            e,
          )
        )
      }
    },
    function(t, e) {
      t.exports = require('url')
    },
    function(t, e) {
      t.exports = require('zlib')
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return a
      })
      var n = r(31),
        i = r(1),
        o = r(2)
      const s = new o.b('wordlists/5.7.0')
      class a {
        constructor(t) {
          s.checkAbstract(new.target, a), Object(i.d)(this, 'locale', t)
        }
        split(t) {
          return t.toLowerCase().split(/ +/g)
        }
        join(t) {
          return t.join(' ')
        }
        static check(t) {
          const e = []
          for (let r = 0; r < 2048; r++) {
            const n = t.getWord(r)
            if (r !== t.getWordIndex(n)) return '0x'
            e.push(n)
          }
          return Object(n.a)(e.join('\n') + '\n')
        }
        static register(t, e) {
          e || (e = t.locale)
        }
      }
    },
    ,
    ,
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return n
      })
      const n = 'bignumber/5.7.0'
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return n
      })
      const n = 'hash/5.7.0'
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return n
      })
      const n = 'json-wallets/5.7.0'
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return v
      }),
        r.d(e, 'b', function() {
          return w
        })
      var n = r(22),
        i = r.n(n),
        o = r(4),
        s = r(0),
        a = r(5),
        u = r(117),
        c = r(16),
        h = r(1),
        l = r(2),
        f = r(54),
        d = r(6)
      const p = new l.b(f.a)
      class m extends h.a {
        isCrowdsaleAccount(t) {
          return !(!t || !t._isCrowdsaleAccount)
        }
      }
      function g(t, e) {
        const r = JSON.parse(t)
        e = Object(d.a)(e)
        const n = Object(o.a)(Object(d.c)(r, 'ethaddr')),
          h = Object(d.b)(Object(d.c)(r, 'encseed'))
        ;(h && h.length % 16 == 0) || p.throwArgumentError('invalid encseed', 'json', t)
        const l = Object(s.a)(Object(u.a)(e, e, 2e3, 32, 'sha256')).slice(0, 16),
          f = h.slice(0, 16),
          g = h.slice(16),
          b = new i.a.ModeOfOperation.cbc(l, f),
          y = i.a.padding.pkcs7.strip(Object(s.a)(b.decrypt(g)))
        let v = ''
        for (let t = 0; t < y.length; t++) v += String.fromCharCode(y[t])
        const w = Object(c.f)(v),
          A = Object(a.a)(w)
        return new m({ _isCrowdsaleAccount: !0, address: n, privateKey: A })
      }
      var b = r(29),
        y = r(33)
      function v(t, e, r) {
        if (Object(b.b)(t)) {
          r && r(0)
          const n = g(t, e)
          return r && r(1), Promise.resolve(n)
        }
        return Object(b.c)(t) ? Object(y.a)(t, e, r) : Promise.reject(new Error('invalid JSON wallet'))
      }
      function w(t, e) {
        if (Object(b.b)(t)) return g(t, e)
        if (Object(b.c)(t)) return Object(y.b)(t, e)
        throw new Error('invalid JSON wallet')
      }
    },
    function(t, e, r) {
      'use strict'
      !(function(e) {
        function r(t) {
          const e = new Uint32Array([
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298,
          ])
          let r = 1779033703,
            n = 3144134277,
            i = 1013904242,
            o = 2773480762,
            s = 1359893119,
            a = 2600822924,
            u = 528734635,
            c = 1541459225
          const h = new Uint32Array(64)
          function l(t) {
            let l = 0,
              f = t.length
            for (; f >= 64; ) {
              let d,
                p,
                m,
                g,
                b,
                y = r,
                v = n,
                w = i,
                A = o,
                E = s,
                O = a,
                M = u,
                k = c
              for (p = 0; p < 16; p++)
                (m = l + 4 * p),
                  (h[p] = ((255 & t[m]) << 24) | ((255 & t[m + 1]) << 16) | ((255 & t[m + 2]) << 8) | (255 & t[m + 3]))
              for (p = 16; p < 64; p++)
                (d = h[p - 2]),
                  (g = ((d >>> 17) | (d << 15)) ^ ((d >>> 19) | (d << 13)) ^ (d >>> 10)),
                  (d = h[p - 15]),
                  (b = ((d >>> 7) | (d << 25)) ^ ((d >>> 18) | (d << 14)) ^ (d >>> 3)),
                  (h[p] = (((g + h[p - 7]) | 0) + ((b + h[p - 16]) | 0)) | 0)
              for (p = 0; p < 64; p++)
                (g =
                  ((((((E >>> 6) | (E << 26)) ^ ((E >>> 11) | (E << 21)) ^ ((E >>> 25) | (E << 7))) +
                    ((E & O) ^ (~E & M))) |
                    0) +
                    ((k + ((e[p] + h[p]) | 0)) | 0)) |
                  0),
                  (b =
                    ((((y >>> 2) | (y << 30)) ^ ((y >>> 13) | (y << 19)) ^ ((y >>> 22) | (y << 10))) +
                      ((y & v) ^ (y & w) ^ (v & w))) |
                    0),
                  (k = M),
                  (M = O),
                  (O = E),
                  (E = (A + g) | 0),
                  (A = w),
                  (w = v),
                  (v = y),
                  (y = (g + b) | 0)
              ;(r = (r + y) | 0),
                (n = (n + v) | 0),
                (i = (i + w) | 0),
                (o = (o + A) | 0),
                (s = (s + E) | 0),
                (a = (a + O) | 0),
                (u = (u + M) | 0),
                (c = (c + k) | 0),
                (l += 64),
                (f -= 64)
            }
          }
          l(t)
          let f,
            d = t.length % 64,
            p = (t.length / 536870912) | 0,
            m = t.length << 3,
            g = d < 56 ? 56 : 120,
            b = t.slice(t.length - d, t.length)
          for (b.push(128), f = d + 1; f < g; f++) b.push(0)
          return (
            b.push((p >>> 24) & 255),
            b.push((p >>> 16) & 255),
            b.push((p >>> 8) & 255),
            b.push((p >>> 0) & 255),
            b.push((m >>> 24) & 255),
            b.push((m >>> 16) & 255),
            b.push((m >>> 8) & 255),
            b.push((m >>> 0) & 255),
            l(b),
            [
              (r >>> 24) & 255,
              (r >>> 16) & 255,
              (r >>> 8) & 255,
              (r >>> 0) & 255,
              (n >>> 24) & 255,
              (n >>> 16) & 255,
              (n >>> 8) & 255,
              (n >>> 0) & 255,
              (i >>> 24) & 255,
              (i >>> 16) & 255,
              (i >>> 8) & 255,
              (i >>> 0) & 255,
              (o >>> 24) & 255,
              (o >>> 16) & 255,
              (o >>> 8) & 255,
              (o >>> 0) & 255,
              (s >>> 24) & 255,
              (s >>> 16) & 255,
              (s >>> 8) & 255,
              (s >>> 0) & 255,
              (a >>> 24) & 255,
              (a >>> 16) & 255,
              (a >>> 8) & 255,
              (a >>> 0) & 255,
              (u >>> 24) & 255,
              (u >>> 16) & 255,
              (u >>> 8) & 255,
              (u >>> 0) & 255,
              (c >>> 24) & 255,
              (c >>> 16) & 255,
              (c >>> 8) & 255,
              (c >>> 0) & 255,
            ]
          )
        }
        function n(t, e, n) {
          t = t.length <= 64 ? t : r(t)
          const i = 64 + e.length + 4,
            o = new Array(i),
            s = new Array(64)
          let a,
            u = []
          for (a = 0; a < 64; a++) o[a] = 54
          for (a = 0; a < t.length; a++) o[a] ^= t[a]
          for (a = 0; a < e.length; a++) o[64 + a] = e[a]
          for (a = i - 4; a < i; a++) o[a] = 0
          for (a = 0; a < 64; a++) s[a] = 92
          for (a = 0; a < t.length; a++) s[a] ^= t[a]
          function c() {
            for (let t = i - 1; t >= i - 4; t--) {
              if ((o[t]++, o[t] <= 255)) return
              o[t] = 0
            }
          }
          for (; n >= 32; ) c(), (u = u.concat(r(s.concat(r(o))))), (n -= 32)
          return n > 0 && (c(), (u = u.concat(r(s.concat(r(o))).slice(0, n)))), u
        }
        function i(t, e, r, n, i) {
          let o
          for (u(t, 16 * (2 * r - 1), i, 0, 16), o = 0; o < 2 * r; o++)
            a(t, 16 * o, i, 16), s(i, n), u(i, 0, t, e + 16 * o, 16)
          for (o = 0; o < r; o++) u(t, e + 2 * o * 16, t, 16 * o, 16)
          for (o = 0; o < r; o++) u(t, e + 16 * (2 * o + 1), t, 16 * (o + r), 16)
        }
        function o(t, e) {
          return (t << e) | (t >>> (32 - e))
        }
        function s(t, e) {
          u(t, 0, e, 0, 16)
          for (let t = 8; t > 0; t -= 2)
            (e[4] ^= o(e[0] + e[12], 7)),
              (e[8] ^= o(e[4] + e[0], 9)),
              (e[12] ^= o(e[8] + e[4], 13)),
              (e[0] ^= o(e[12] + e[8], 18)),
              (e[9] ^= o(e[5] + e[1], 7)),
              (e[13] ^= o(e[9] + e[5], 9)),
              (e[1] ^= o(e[13] + e[9], 13)),
              (e[5] ^= o(e[1] + e[13], 18)),
              (e[14] ^= o(e[10] + e[6], 7)),
              (e[2] ^= o(e[14] + e[10], 9)),
              (e[6] ^= o(e[2] + e[14], 13)),
              (e[10] ^= o(e[6] + e[2], 18)),
              (e[3] ^= o(e[15] + e[11], 7)),
              (e[7] ^= o(e[3] + e[15], 9)),
              (e[11] ^= o(e[7] + e[3], 13)),
              (e[15] ^= o(e[11] + e[7], 18)),
              (e[1] ^= o(e[0] + e[3], 7)),
              (e[2] ^= o(e[1] + e[0], 9)),
              (e[3] ^= o(e[2] + e[1], 13)),
              (e[0] ^= o(e[3] + e[2], 18)),
              (e[6] ^= o(e[5] + e[4], 7)),
              (e[7] ^= o(e[6] + e[5], 9)),
              (e[4] ^= o(e[7] + e[6], 13)),
              (e[5] ^= o(e[4] + e[7], 18)),
              (e[11] ^= o(e[10] + e[9], 7)),
              (e[8] ^= o(e[11] + e[10], 9)),
              (e[9] ^= o(e[8] + e[11], 13)),
              (e[10] ^= o(e[9] + e[8], 18)),
              (e[12] ^= o(e[15] + e[14], 7)),
              (e[13] ^= o(e[12] + e[15], 9)),
              (e[14] ^= o(e[13] + e[12], 13)),
              (e[15] ^= o(e[14] + e[13], 18))
          for (let r = 0; r < 16; ++r) t[r] += e[r]
        }
        function a(t, e, r, n) {
          for (let i = 0; i < n; i++) r[i] ^= t[e + i]
        }
        function u(t, e, r, n, i) {
          for (; i--; ) r[n++] = t[e++]
        }
        function c(t) {
          if (!t || 'number' != typeof t.length) return !1
          for (let e = 0; e < t.length; e++) {
            const r = t[e]
            if ('number' != typeof r || r % 1 || r < 0 || r >= 256) return !1
          }
          return !0
        }
        function h(t, e) {
          if ('number' != typeof t || t % 1) throw new Error('invalid ' + e)
          return t
        }
        function l(t, e, r, o, s, l, f) {
          if (((r = h(r, 'N')), (o = h(o, 'r')), (s = h(s, 'p')), (l = h(l, 'dkLen')), 0 === r || 0 != (r & (r - 1))))
            throw new Error('N must be power of 2')
          if (r > 2147483647 / 128 / o) throw new Error('N too large')
          if (o > 2147483647 / 128 / s) throw new Error('r too large')
          if (!c(t)) throw new Error('password must be an array or buffer')
          if (((t = Array.prototype.slice.call(t)), !c(e))) throw new Error('salt must be an array or buffer')
          e = Array.prototype.slice.call(e)
          let d = n(t, e, 128 * s * o)
          const p = new Uint32Array(32 * s * o)
          for (let t = 0; t < p.length; t++) {
            const e = 4 * t
            p[t] =
              ((255 & d[e + 3]) << 24) | ((255 & d[e + 2]) << 16) | ((255 & d[e + 1]) << 8) | ((255 & d[e + 0]) << 0)
          }
          const m = new Uint32Array(64 * o),
            g = new Uint32Array(32 * o * r),
            b = 32 * o,
            y = new Uint32Array(16),
            v = new Uint32Array(16),
            w = s * r * 2
          let A,
            E,
            O = 0,
            M = null,
            k = !1,
            _ = 0,
            S = 0
          const j = f ? parseInt(1e3 / o) : 4294967295,
            N = 'undefined' != typeof setImmediate ? setImmediate : setTimeout,
            P = function() {
              if (k) return f(new Error('cancelled'), O / w)
              let e
              switch (_) {
                case 0:
                  ;(E = 32 * S * o), u(p, E, m, 0, b), (_ = 1), (A = 0)
                case 1:
                  ;(e = r - A), e > j && (e = j)
                  for (let t = 0; t < e; t++) u(m, 0, g, (A + t) * b, b), i(m, b, o, y, v)
                  if (((A += e), (O += e), f)) {
                    const t = parseInt((1e3 * O) / w)
                    if (t !== M) {
                      if (((k = f(null, O / w)), k)) break
                      M = t
                    }
                  }
                  if (A < r) break
                  ;(A = 0), (_ = 2)
                case 2:
                  ;(e = r - A), e > j && (e = j)
                  for (let t = 0; t < e; t++) {
                    const t = m[16 * (2 * o - 1)] & (r - 1)
                    a(g, t * b, m, b), i(m, b, o, y, v)
                  }
                  if (((A += e), (O += e), f)) {
                    const t = parseInt((1e3 * O) / w)
                    if (t !== M) {
                      if (((k = f(null, O / w)), k)) break
                      M = t
                    }
                  }
                  if (A < r) break
                  if ((u(m, 0, p, E, b), S++, S < s)) {
                    _ = 0
                    break
                  }
                  d = []
                  for (let t = 0; t < p.length; t++)
                    d.push((p[t] >> 0) & 255),
                      d.push((p[t] >> 8) & 255),
                      d.push((p[t] >> 16) & 255),
                      d.push((p[t] >> 24) & 255)
                  const c = n(t, d, l)
                  return f && f(null, 1, c), c
              }
              f && N(P)
            }
          if (!f)
            for (;;) {
              const t = P()
              if (null != t) return t
            }
          P()
        }
        const f = {
          scrypt: function(t, e, r, n, i, o, s) {
            return new Promise(function(a, u) {
              let c = 0
              s && s(0),
                l(t, e, r, n, i, o, function(t, e, r) {
                  if (t) u(t)
                  else if (r) s && 1 !== c && s(1), a(new Uint8Array(r))
                  else if (s && e !== c) return (c = e), s(e)
                })
            })
          },
          syncScrypt: function(t, e, r, n, i, o) {
            return new Uint8Array(l(t, e, r, n, i, o))
          },
        }
        t.exports = f
      })()
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return u
      })
      var n = r(0),
        i = r(2)
      const o = new i.b('random/5.7.0')
      const s = (function() {
        if ('undefined' != typeof self) return self
        if ('undefined' != typeof window) return window
        if ('undefined' != typeof global) return global
        throw new Error('unable to locate global object')
      })()
      let a = s.crypto || s.msCrypto
      function u(t) {
        ;(t <= 0 || t > 1024 || t % 1 || t != t) && o.throwArgumentError('invalid length', 'length', t)
        const e = new Uint8Array(t)
        return a.getRandomValues(e), Object(n.a)(e)
      }
      ;(a && a.getRandomValues) ||
        (o.warn('WARNING: Missing strong random number source'),
        (a = {
          getRandomValues: function(t) {
            return o.throwError('no secure random source avaialble', i.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'crypto.getRandomValues',
            })
          },
        }))
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return n
      })
      const n = 'ethers/5.7.2'
    },
    ,
    function(t, e) {
      t.exports = function(t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function() {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function() {
                return t.l
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function() {
                return t.i
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        )
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return i
      }),
        r.d(e, 'b', function() {
          return o
        })
      var n = r(0)
      function i(t) {
        t = atob(t)
        const e = []
        for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r))
        return Object(n.a)(e)
      }
      function o(t) {
        t = Object(n.a)(t)
        let e = ''
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r])
        return btoa(e)
      }
    },
    ,
    ,
    ,
    function(t, e, r) {
      'use strict'
      for (var n = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l', i = {}, o = 0; o < n.length; o++) {
        var s = n.charAt(o)
        if (void 0 !== i[s]) throw new TypeError(s + ' is ambiguous')
        i[s] = o
      }
      function a(t) {
        var e = t >> 25
        return (
          ((33554431 & t) << 5) ^
          (996825010 & -((e >> 0) & 1)) ^
          (642813549 & -((e >> 1) & 1)) ^
          (513874426 & -((e >> 2) & 1)) ^
          (1027748829 & -((e >> 3) & 1)) ^
          (705979059 & -((e >> 4) & 1))
        )
      }
      function u(t) {
        for (var e = 1, r = 0; r < t.length; ++r) {
          var n = t.charCodeAt(r)
          if (n < 33 || n > 126) return 'Invalid prefix (' + t + ')'
          e = a(e) ^ (n >> 5)
        }
        for (e = a(e), r = 0; r < t.length; ++r) {
          var i = t.charCodeAt(r)
          e = a(e) ^ (31 & i)
        }
        return e
      }
      function c(t, e) {
        if (((e = e || 90), t.length < 8)) return t + ' too short'
        if (t.length > e) return 'Exceeds length limit'
        var r = t.toLowerCase(),
          n = t.toUpperCase()
        if (t !== r && t !== n) return 'Mixed-case string ' + t
        var o = (t = r).lastIndexOf('1')
        if (-1 === o) return 'No separator character for ' + t
        if (0 === o) return 'Missing prefix for ' + t
        var s = t.slice(0, o),
          c = t.slice(o + 1)
        if (c.length < 6) return 'Data too short'
        var h = u(s)
        if ('string' == typeof h) return h
        for (var l = [], f = 0; f < c.length; ++f) {
          var d = c.charAt(f),
            p = i[d]
          if (void 0 === p) return 'Unknown character ' + d
          ;(h = a(h) ^ p), f + 6 >= c.length || l.push(p)
        }
        return 1 !== h ? 'Invalid checksum for ' + t : { prefix: s, words: l }
      }
      function h(t, e, r, n) {
        for (var i = 0, o = 0, s = (1 << r) - 1, a = [], u = 0; u < t.length; ++u)
          for (i = (i << e) | t[u], o += e; o >= r; ) (o -= r), a.push((i >> o) & s)
        if (n) o > 0 && a.push((i << (r - o)) & s)
        else {
          if (o >= e) return 'Excess padding'
          if ((i << (r - o)) & s) return 'Non-zero padding'
        }
        return a
      }
      t.exports = {
        decodeUnsafe: function() {
          var t = c.apply(null, arguments)
          if ('object' == typeof t) return t
        },
        decode: function(t) {
          var e = c.apply(null, arguments)
          if ('object' == typeof e) return e
          throw new Error(e)
        },
        encode: function(t, e, r) {
          if (((r = r || 90), t.length + 7 + e.length > r)) throw new TypeError('Exceeds length limit')
          var i = u((t = t.toLowerCase()))
          if ('string' == typeof i) throw new Error(i)
          for (var o = t + '1', s = 0; s < e.length; ++s) {
            var c = e[s]
            if (c >> 5 != 0) throw new Error('Non 5-bit word')
            ;(i = a(i) ^ c), (o += n.charAt(c))
          }
          for (s = 0; s < 6; ++s) i = a(i)
          for (i ^= 1, s = 0; s < 6; ++s) {
            o += n.charAt((i >> (5 * (5 - s))) & 31)
          }
          return o
        },
        toWordsUnsafe: function(t) {
          var e = h(t, 8, 5, !0)
          if (Array.isArray(e)) return e
        },
        toWords: function(t) {
          var e = h(t, 8, 5, !0)
          if (Array.isArray(e)) return e
          throw new Error(e)
        },
        fromWordsUnsafe: function(t) {
          var e = h(t, 5, 8, !1)
          if (Array.isArray(e)) return e
        },
        fromWords: function(t) {
          var e = h(t, 5, 8, !1)
          if (Array.isArray(e)) return e
          throw new Error(e)
        },
      }
    },
    function(t, e) {
      t.exports = require('https')
    },
    ,
    function(t, e) {
      t.exports = require('http')
    },
    ,
    function(t, e, r) {
      'use strict'
      var n = r(24).rotr32
      function i(t, e, r) {
        return (t & e) ^ (~t & r)
      }
      function o(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r)
      }
      function s(t, e, r) {
        return t ^ e ^ r
      }
      ;(e.ft_1 = function(t, e, r, n) {
        return 0 === t ? i(e, r, n) : 1 === t || 3 === t ? s(e, r, n) : 2 === t ? o(e, r, n) : void 0
      }),
        (e.ch32 = i),
        (e.maj32 = o),
        (e.p32 = s),
        (e.s0_256 = function(t) {
          return n(t, 2) ^ n(t, 13) ^ n(t, 22)
        }),
        (e.s1_256 = function(t) {
          return n(t, 6) ^ n(t, 11) ^ n(t, 25)
        }),
        (e.g0_256 = function(t) {
          return n(t, 7) ^ n(t, 18) ^ (t >>> 3)
        }),
        (e.g1_256 = function(t) {
          return n(t, 17) ^ n(t, 19) ^ (t >>> 10)
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(41),
        o = r(70),
        s = r(39),
        a = n.sum32,
        u = n.sum32_4,
        c = n.sum32_5,
        h = o.ch32,
        l = o.maj32,
        f = o.s0_256,
        d = o.s1_256,
        p = o.g0_256,
        m = o.g1_256,
        g = i.BlockHash,
        b = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298,
        ]
      function y() {
        if (!(this instanceof y)) return new y()
        g.call(this),
          (this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
          (this.k = b),
          (this.W = new Array(64))
      }
      n.inherits(y, g),
        (t.exports = y),
        (y.blockSize = 512),
        (y.outSize = 256),
        (y.hmacStrength = 192),
        (y.padLength = 64),
        (y.prototype._update = function(t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n]
          for (; n < r.length; n++) r[n] = u(m(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16])
          var i = this.h[0],
            o = this.h[1],
            g = this.h[2],
            b = this.h[3],
            y = this.h[4],
            v = this.h[5],
            w = this.h[6],
            A = this.h[7]
          for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
            var E = c(A, d(y), h(y, v, w), this.k[n], r[n]),
              O = a(f(i), l(i, o, g))
            ;(A = w), (w = v), (v = y), (y = a(b, E)), (b = g), (g = o), (o = i), (i = a(E, O))
          }
          ;(this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], g)),
            (this.h[3] = a(this.h[3], b)),
            (this.h[4] = a(this.h[4], y)),
            (this.h[5] = a(this.h[5], v)),
            (this.h[6] = a(this.h[6], w)),
            (this.h[7] = a(this.h[7], A))
        }),
        (y.prototype._digest = function(t) {
          return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(41),
        o = r(39),
        s = n.rotr64_hi,
        a = n.rotr64_lo,
        u = n.shr64_hi,
        c = n.shr64_lo,
        h = n.sum64,
        l = n.sum64_hi,
        f = n.sum64_lo,
        d = n.sum64_4_hi,
        p = n.sum64_4_lo,
        m = n.sum64_5_hi,
        g = n.sum64_5_lo,
        b = i.BlockHash,
        y = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591,
        ]
      function v() {
        if (!(this instanceof v)) return new v()
        b.call(this),
          (this.h = [
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209,
          ]),
          (this.k = y),
          (this.W = new Array(160))
      }
      function w(t, e, r, n, i) {
        var o = (t & r) ^ (~t & i)
        return o < 0 && (o += 4294967296), o
      }
      function A(t, e, r, n, i, o) {
        var s = (e & n) ^ (~e & o)
        return s < 0 && (s += 4294967296), s
      }
      function E(t, e, r, n, i) {
        var o = (t & r) ^ (t & i) ^ (r & i)
        return o < 0 && (o += 4294967296), o
      }
      function O(t, e, r, n, i, o) {
        var s = (e & n) ^ (e & o) ^ (n & o)
        return s < 0 && (s += 4294967296), s
      }
      function M(t, e) {
        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7)
        return r < 0 && (r += 4294967296), r
      }
      function k(t, e) {
        var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7)
        return r < 0 && (r += 4294967296), r
      }
      function _(t, e) {
        var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9)
        return r < 0 && (r += 4294967296), r
      }
      function S(t, e) {
        var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9)
        return r < 0 && (r += 4294967296), r
      }
      function j(t, e) {
        var r = s(t, e, 1) ^ s(t, e, 8) ^ u(t, e, 7)
        return r < 0 && (r += 4294967296), r
      }
      function N(t, e) {
        var r = a(t, e, 1) ^ a(t, e, 8) ^ c(t, e, 7)
        return r < 0 && (r += 4294967296), r
      }
      function P(t, e) {
        var r = s(t, e, 19) ^ s(e, t, 29) ^ u(t, e, 6)
        return r < 0 && (r += 4294967296), r
      }
      function x(t, e) {
        var r = a(t, e, 19) ^ a(e, t, 29) ^ c(t, e, 6)
        return r < 0 && (r += 4294967296), r
      }
      n.inherits(v, b),
        (t.exports = v),
        (v.blockSize = 1024),
        (v.outSize = 512),
        (v.hmacStrength = 192),
        (v.padLength = 128),
        (v.prototype._prepareBlock = function(t, e) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n]
          for (; n < r.length; n += 2) {
            var i = P(r[n - 4], r[n - 3]),
              o = x(r[n - 4], r[n - 3]),
              s = r[n - 14],
              a = r[n - 13],
              u = j(r[n - 30], r[n - 29]),
              c = N(r[n - 30], r[n - 29]),
              h = r[n - 32],
              l = r[n - 31]
            ;(r[n] = d(i, o, s, a, u, c, h, l)), (r[n + 1] = p(i, o, s, a, u, c, h, l))
          }
        }),
        (v.prototype._update = function(t, e) {
          this._prepareBlock(t, e)
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            s = this.h[2],
            a = this.h[3],
            u = this.h[4],
            c = this.h[5],
            d = this.h[6],
            p = this.h[7],
            b = this.h[8],
            y = this.h[9],
            v = this.h[10],
            j = this.h[11],
            N = this.h[12],
            P = this.h[13],
            x = this.h[14],
            C = this.h[15]
          o(this.k.length === r.length)
          for (var T = 0; T < r.length; T += 2) {
            var R = x,
              I = C,
              B = _(b, y),
              F = S(b, y),
              D = w(b, y, v, j, N),
              L = A(b, y, v, j, N, P),
              U = this.k[T],
              G = this.k[T + 1],
              z = r[T],
              q = r[T + 1],
              K = m(R, I, B, F, D, L, U, G, z, q),
              H = g(R, I, B, F, D, L, U, G, z, q)
            ;(R = M(n, i)), (I = k(n, i)), (B = E(n, i, s, a, u)), (F = O(n, i, s, a, u, c))
            var J = l(R, I, B, F),
              V = f(R, I, B, F)
            ;(x = N),
              (C = P),
              (N = v),
              (P = j),
              (v = b),
              (j = y),
              (b = l(d, p, K, H)),
              (y = f(p, p, K, H)),
              (d = u),
              (p = c),
              (u = s),
              (c = a),
              (s = n),
              (a = i),
              (n = l(K, H, J, V)),
              (i = f(K, H, J, V))
          }
          h(this.h, 0, n, i),
            h(this.h, 2, s, a),
            h(this.h, 4, u, c),
            h(this.h, 6, d, p),
            h(this.h, 8, b, y),
            h(this.h, 10, v, j),
            h(this.h, 12, N, P),
            h(this.h, 14, x, C)
        }),
        (v.prototype._digest = function(t) {
          return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big')
        })
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return n
      })
      const n = '0x0000000000000000000000000000000000000000000000000000000000000000'
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return n
      })
      const n = '0x0000000000000000000000000000000000000000'
    },
    ,
    ,
    ,
    ,
    function(t, e, r) {
      var n
      /**
       * [js-sha3]{@link https://github.com/emn178/js-sha3}
       *
       * @version 0.8.0
       * @author Chen, Yi-Cyuan [emn178@gmail.com]
       * @copyright Chen, Yi-Cyuan 2015-2018
       * @license MIT
       */ !(function() {
        'use strict'
        var i = 'input is invalid type',
          o = 'object' == typeof window,
          s = o ? window : {}
        s.JS_SHA3_NO_WINDOW && (o = !1)
        var a = !o && 'object' == typeof self
        !s.JS_SHA3_NO_NODE_JS && 'object' == typeof process && process.versions && process.versions.node
          ? (s = global)
          : a && (s = self)
        var u = !s.JS_SHA3_NO_COMMON_JS && 'object' == typeof t && t.exports,
          c = r(101),
          h = !s.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
          l = '0123456789abcdef'.split(''),
          f = [4, 1024, 262144, 67108864],
          d = [0, 8, 16, 24],
          p = [
            1,
            0,
            32898,
            0,
            32906,
            2147483648,
            2147516416,
            2147483648,
            32907,
            0,
            2147483649,
            0,
            2147516545,
            2147483648,
            32777,
            2147483648,
            138,
            0,
            136,
            0,
            2147516425,
            0,
            2147483658,
            0,
            2147516555,
            0,
            139,
            2147483648,
            32905,
            2147483648,
            32771,
            2147483648,
            32770,
            2147483648,
            128,
            2147483648,
            32778,
            0,
            2147483658,
            2147483648,
            2147516545,
            2147483648,
            32896,
            2147483648,
            2147483649,
            0,
            2147516424,
            2147483648,
          ],
          m = [224, 256, 384, 512],
          g = [128, 256],
          b = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
          y = { 128: 168, 256: 136 }
        ;(!s.JS_SHA3_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = function(t) {
            return '[object Array]' === Object.prototype.toString.call(t)
          }),
          !h ||
            (!s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
            (ArrayBuffer.isView = function(t) {
              return 'object' == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
            })
        for (
          var v = function(t, e, r) {
              return function(n) {
                return new R(t, e, t).update(n)[r]()
              }
            },
            w = function(t, e, r) {
              return function(n, i) {
                return new R(t, e, i).update(n)[r]()
              }
            },
            A = function(t, e, r) {
              return function(e, n, i, o) {
                return _['cshake' + t].update(e, n, i, o)[r]()
              }
            },
            E = function(t, e, r) {
              return function(e, n, i, o) {
                return _['kmac' + t].update(e, n, i, o)[r]()
              }
            },
            O = function(t, e, r, n) {
              for (var i = 0; i < b.length; ++i) {
                var o = b[i]
                t[o] = e(r, n, o)
              }
              return t
            },
            M = function(t, e) {
              var r = v(t, e, 'hex')
              return (
                (r.create = function() {
                  return new R(t, e, t)
                }),
                (r.update = function(t) {
                  return r.create().update(t)
                }),
                O(r, v, t, e)
              )
            },
            k = [
              { name: 'keccak', padding: [1, 256, 65536, 16777216], bits: m, createMethod: M },
              { name: 'sha3', padding: [6, 1536, 393216, 100663296], bits: m, createMethod: M },
              {
                name: 'shake',
                padding: [31, 7936, 2031616, 520093696],
                bits: g,
                createMethod: function(t, e) {
                  var r = w(t, e, 'hex')
                  return (
                    (r.create = function(r) {
                      return new R(t, e, r)
                    }),
                    (r.update = function(t, e) {
                      return r.create(e).update(t)
                    }),
                    O(r, w, t, e)
                  )
                },
              },
              {
                name: 'cshake',
                padding: f,
                bits: g,
                createMethod: function(t, e) {
                  var r = y[t],
                    n = A(t, 0, 'hex')
                  return (
                    (n.create = function(n, i, o) {
                      return i || o ? new R(t, e, n).bytepad([i, o], r) : _['shake' + t].create(n)
                    }),
                    (n.update = function(t, e, r, i) {
                      return n.create(e, r, i).update(t)
                    }),
                    O(n, A, t, e)
                  )
                },
              },
              {
                name: 'kmac',
                padding: f,
                bits: g,
                createMethod: function(t, e) {
                  var r = y[t],
                    n = E(t, 0, 'hex')
                  return (
                    (n.create = function(n, i, o) {
                      return new I(t, e, i).bytepad(['KMAC', o], r).bytepad([n], r)
                    }),
                    (n.update = function(t, e, r, i) {
                      return n.create(t, r, i).update(e)
                    }),
                    O(n, E, t, e)
                  )
                },
              },
            ],
            _ = {},
            S = [],
            j = 0;
          j < k.length;
          ++j
        )
          for (var N = k[j], P = N.bits, x = 0; x < P.length; ++x) {
            var C = N.name + '_' + P[x]
            if ((S.push(C), (_[C] = N.createMethod(P[x], N.padding)), 'sha3' !== N.name)) {
              var T = N.name + P[x]
              S.push(T), (_[T] = _[C])
            }
          }
        function R(t, e, r) {
          ;(this.blocks = []),
            (this.s = []),
            (this.padding = e),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3)
          for (var n = 0; n < 50; ++n) this.s[n] = 0
        }
        function I(t, e, r) {
          R.call(this, t, e, r)
        }
        ;(R.prototype.update = function(t) {
          if (this.finalized) throw new Error('finalize already called')
          var e,
            r = typeof t
          if ('string' !== r) {
            if ('object' !== r) throw new Error(i)
            if (null === t) throw new Error(i)
            if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t)
            else if (!(Array.isArray(t) || (h && ArrayBuffer.isView(t)))) throw new Error(i)
            e = !0
          }
          for (
            var n, o, s = this.blocks, a = this.byteCount, u = t.length, c = this.blockCount, l = 0, f = this.s;
            l < u;

          ) {
            if (this.reset) for (this.reset = !1, s[0] = this.block, n = 1; n < c + 1; ++n) s[n] = 0
            if (e) for (n = this.start; l < u && n < a; ++l) s[n >> 2] |= t[l] << d[3 & n++]
            else
              for (n = this.start; l < u && n < a; ++l)
                (o = t.charCodeAt(l)) < 128
                  ? (s[n >> 2] |= o << d[3 & n++])
                  : o < 2048
                  ? ((s[n >> 2] |= (192 | (o >> 6)) << d[3 & n++]), (s[n >> 2] |= (128 | (63 & o)) << d[3 & n++]))
                  : o < 55296 || o >= 57344
                  ? ((s[n >> 2] |= (224 | (o >> 12)) << d[3 & n++]),
                    (s[n >> 2] |= (128 | ((o >> 6) & 63)) << d[3 & n++]),
                    (s[n >> 2] |= (128 | (63 & o)) << d[3 & n++]))
                  : ((o = 65536 + (((1023 & o) << 10) | (1023 & t.charCodeAt(++l)))),
                    (s[n >> 2] |= (240 | (o >> 18)) << d[3 & n++]),
                    (s[n >> 2] |= (128 | ((o >> 12) & 63)) << d[3 & n++]),
                    (s[n >> 2] |= (128 | ((o >> 6) & 63)) << d[3 & n++]),
                    (s[n >> 2] |= (128 | (63 & o)) << d[3 & n++]))
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = s[c], n = 0; n < c; ++n) f[n] ^= s[n]
              B(f), (this.reset = !0)
            } else this.start = n
          }
          return this
        }),
          (R.prototype.encode = function(t, e) {
            var r = 255 & t,
              n = 1,
              i = [r]
            for (r = 255 & (t >>= 8); r > 0; ) i.unshift(r), (r = 255 & (t >>= 8)), ++n
            return e ? i.push(n) : i.unshift(n), this.update(i), i.length
          }),
          (R.prototype.encodeString = function(t) {
            var e,
              r = typeof t
            if ('string' !== r) {
              if ('object' !== r) throw new Error(i)
              if (null === t) throw new Error(i)
              if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t)
              else if (!(Array.isArray(t) || (h && ArrayBuffer.isView(t)))) throw new Error(i)
              e = !0
            }
            var n = 0,
              o = t.length
            if (e) n = o
            else
              for (var s = 0; s < t.length; ++s) {
                var a = t.charCodeAt(s)
                a < 128
                  ? (n += 1)
                  : a < 2048
                  ? (n += 2)
                  : a < 55296 || a >= 57344
                  ? (n += 3)
                  : ((a = 65536 + (((1023 & a) << 10) | (1023 & t.charCodeAt(++s)))), (n += 4))
              }
            return (n += this.encode(8 * n)), this.update(t), n
          }),
          (R.prototype.bytepad = function(t, e) {
            for (var r = this.encode(e), n = 0; n < t.length; ++n) r += this.encodeString(t[n])
            var i = e - (r % e),
              o = []
            return (o.length = i), this.update(o), this
          }),
          (R.prototype.finalize = function() {
            if (!this.finalized) {
              this.finalized = !0
              var t = this.blocks,
                e = this.lastByteIndex,
                r = this.blockCount,
                n = this.s
              if (((t[e >> 2] |= this.padding[3 & e]), this.lastByteIndex === this.byteCount))
                for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0
              for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e]
              B(n)
            }
          }),
          (R.prototype.toString = R.prototype.hex = function() {
            this.finalize()
            for (
              var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = '';
              s < n;

            ) {
              for (o = 0; o < e && s < n; ++o, ++s)
                (t = r[o]),
                  (a +=
                    l[(t >> 4) & 15] +
                    l[15 & t] +
                    l[(t >> 12) & 15] +
                    l[(t >> 8) & 15] +
                    l[(t >> 20) & 15] +
                    l[(t >> 16) & 15] +
                    l[(t >> 28) & 15] +
                    l[(t >> 24) & 15])
              s % e == 0 && (B(r), (o = 0))
            }
            return (
              i &&
                ((t = r[o]),
                (a += l[(t >> 4) & 15] + l[15 & t]),
                i > 1 && (a += l[(t >> 12) & 15] + l[(t >> 8) & 15]),
                i > 2 && (a += l[(t >> 20) & 15] + l[(t >> 16) & 15])),
              a
            )
          }),
          (R.prototype.arrayBuffer = function() {
            this.finalize()
            var t,
              e = this.blockCount,
              r = this.s,
              n = this.outputBlocks,
              i = this.extraBytes,
              o = 0,
              s = 0,
              a = this.outputBits >> 3
            t = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a)
            for (var u = new Uint32Array(t); s < n; ) {
              for (o = 0; o < e && s < n; ++o, ++s) u[s] = r[o]
              s % e == 0 && B(r)
            }
            return i && ((u[o] = r[o]), (t = t.slice(0, a))), t
          }),
          (R.prototype.buffer = R.prototype.arrayBuffer),
          (R.prototype.digest = R.prototype.array = function() {
            this.finalize()
            for (
              var t,
                e,
                r = this.blockCount,
                n = this.s,
                i = this.outputBlocks,
                o = this.extraBytes,
                s = 0,
                a = 0,
                u = [];
              a < i;

            ) {
              for (s = 0; s < r && a < i; ++s, ++a)
                (t = a << 2),
                  (e = n[s]),
                  (u[t] = 255 & e),
                  (u[t + 1] = (e >> 8) & 255),
                  (u[t + 2] = (e >> 16) & 255),
                  (u[t + 3] = (e >> 24) & 255)
              a % r == 0 && B(n)
            }
            return (
              o &&
                ((t = a << 2),
                (e = n[s]),
                (u[t] = 255 & e),
                o > 1 && (u[t + 1] = (e >> 8) & 255),
                o > 2 && (u[t + 2] = (e >> 16) & 255)),
              u
            )
          }),
          (I.prototype = new R()),
          (I.prototype.finalize = function() {
            return this.encode(this.outputBits, !0), R.prototype.finalize.call(this)
          })
        var B = function(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            c,
            h,
            l,
            f,
            d,
            m,
            g,
            b,
            y,
            v,
            w,
            A,
            E,
            O,
            M,
            k,
            _,
            S,
            j,
            N,
            P,
            x,
            C,
            T,
            R,
            I,
            B,
            F,
            D,
            L,
            U,
            G,
            z,
            q,
            K,
            H,
            J,
            V,
            W,
            Q,
            Y,
            Z,
            X,
            $,
            tt,
            et,
            rt,
            nt,
            it,
            ot,
            st,
            at,
            ut,
            ct,
            ht
          for (n = 0; n < 48; n += 2)
            (i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (c = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (h = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (l = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (e = (f = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ ((s << 1) | (a >>> 31))),
              (r = (d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ ((a << 1) | (s >>> 31))),
              (t[0] ^= e),
              (t[1] ^= r),
              (t[10] ^= e),
              (t[11] ^= r),
              (t[20] ^= e),
              (t[21] ^= r),
              (t[30] ^= e),
              (t[31] ^= r),
              (t[40] ^= e),
              (t[41] ^= r),
              (e = i ^ ((u << 1) | (c >>> 31))),
              (r = o ^ ((c << 1) | (u >>> 31))),
              (t[2] ^= e),
              (t[3] ^= r),
              (t[12] ^= e),
              (t[13] ^= r),
              (t[22] ^= e),
              (t[23] ^= r),
              (t[32] ^= e),
              (t[33] ^= r),
              (t[42] ^= e),
              (t[43] ^= r),
              (e = s ^ ((h << 1) | (l >>> 31))),
              (r = a ^ ((l << 1) | (h >>> 31))),
              (t[4] ^= e),
              (t[5] ^= r),
              (t[14] ^= e),
              (t[15] ^= r),
              (t[24] ^= e),
              (t[25] ^= r),
              (t[34] ^= e),
              (t[35] ^= r),
              (t[44] ^= e),
              (t[45] ^= r),
              (e = u ^ ((f << 1) | (d >>> 31))),
              (r = c ^ ((d << 1) | (f >>> 31))),
              (t[6] ^= e),
              (t[7] ^= r),
              (t[16] ^= e),
              (t[17] ^= r),
              (t[26] ^= e),
              (t[27] ^= r),
              (t[36] ^= e),
              (t[37] ^= r),
              (t[46] ^= e),
              (t[47] ^= r),
              (e = h ^ ((i << 1) | (o >>> 31))),
              (r = l ^ ((o << 1) | (i >>> 31))),
              (t[8] ^= e),
              (t[9] ^= r),
              (t[18] ^= e),
              (t[19] ^= r),
              (t[28] ^= e),
              (t[29] ^= r),
              (t[38] ^= e),
              (t[39] ^= r),
              (t[48] ^= e),
              (t[49] ^= r),
              (m = t[0]),
              (g = t[1]),
              (V = (t[11] << 4) | (t[10] >>> 28)),
              (W = (t[10] << 4) | (t[11] >>> 28)),
              (N = (t[20] << 3) | (t[21] >>> 29)),
              (P = (t[21] << 3) | (t[20] >>> 29)),
              (at = (t[31] << 9) | (t[30] >>> 23)),
              (ut = (t[30] << 9) | (t[31] >>> 23)),
              (q = (t[40] << 18) | (t[41] >>> 14)),
              (K = (t[41] << 18) | (t[40] >>> 14)),
              (I = (t[2] << 1) | (t[3] >>> 31)),
              (B = (t[3] << 1) | (t[2] >>> 31)),
              (b = (t[13] << 12) | (t[12] >>> 20)),
              (y = (t[12] << 12) | (t[13] >>> 20)),
              (Q = (t[22] << 10) | (t[23] >>> 22)),
              (Y = (t[23] << 10) | (t[22] >>> 22)),
              (x = (t[33] << 13) | (t[32] >>> 19)),
              (C = (t[32] << 13) | (t[33] >>> 19)),
              (ct = (t[42] << 2) | (t[43] >>> 30)),
              (ht = (t[43] << 2) | (t[42] >>> 30)),
              (et = (t[5] << 30) | (t[4] >>> 2)),
              (rt = (t[4] << 30) | (t[5] >>> 2)),
              (F = (t[14] << 6) | (t[15] >>> 26)),
              (D = (t[15] << 6) | (t[14] >>> 26)),
              (v = (t[25] << 11) | (t[24] >>> 21)),
              (w = (t[24] << 11) | (t[25] >>> 21)),
              (Z = (t[34] << 15) | (t[35] >>> 17)),
              (X = (t[35] << 15) | (t[34] >>> 17)),
              (T = (t[45] << 29) | (t[44] >>> 3)),
              (R = (t[44] << 29) | (t[45] >>> 3)),
              (k = (t[6] << 28) | (t[7] >>> 4)),
              (_ = (t[7] << 28) | (t[6] >>> 4)),
              (nt = (t[17] << 23) | (t[16] >>> 9)),
              (it = (t[16] << 23) | (t[17] >>> 9)),
              (L = (t[26] << 25) | (t[27] >>> 7)),
              (U = (t[27] << 25) | (t[26] >>> 7)),
              (A = (t[36] << 21) | (t[37] >>> 11)),
              (E = (t[37] << 21) | (t[36] >>> 11)),
              ($ = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (H = (t[8] << 27) | (t[9] >>> 5)),
              (J = (t[9] << 27) | (t[8] >>> 5)),
              (S = (t[18] << 20) | (t[19] >>> 12)),
              (j = (t[19] << 20) | (t[18] >>> 12)),
              (ot = (t[29] << 7) | (t[28] >>> 25)),
              (st = (t[28] << 7) | (t[29] >>> 25)),
              (G = (t[38] << 8) | (t[39] >>> 24)),
              (z = (t[39] << 8) | (t[38] >>> 24)),
              (O = (t[48] << 14) | (t[49] >>> 18)),
              (M = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = m ^ (~b & v)),
              (t[1] = g ^ (~y & w)),
              (t[10] = k ^ (~S & N)),
              (t[11] = _ ^ (~j & P)),
              (t[20] = I ^ (~F & L)),
              (t[21] = B ^ (~D & U)),
              (t[30] = H ^ (~V & Q)),
              (t[31] = J ^ (~W & Y)),
              (t[40] = et ^ (~nt & ot)),
              (t[41] = rt ^ (~it & st)),
              (t[2] = b ^ (~v & A)),
              (t[3] = y ^ (~w & E)),
              (t[12] = S ^ (~N & x)),
              (t[13] = j ^ (~P & C)),
              (t[22] = F ^ (~L & G)),
              (t[23] = D ^ (~U & z)),
              (t[32] = V ^ (~Q & Z)),
              (t[33] = W ^ (~Y & X)),
              (t[42] = nt ^ (~ot & at)),
              (t[43] = it ^ (~st & ut)),
              (t[4] = v ^ (~A & O)),
              (t[5] = w ^ (~E & M)),
              (t[14] = N ^ (~x & T)),
              (t[15] = P ^ (~C & R)),
              (t[24] = L ^ (~G & q)),
              (t[25] = U ^ (~z & K)),
              (t[34] = Q ^ (~Z & $)),
              (t[35] = Y ^ (~X & tt)),
              (t[44] = ot ^ (~at & ct)),
              (t[45] = st ^ (~ut & ht)),
              (t[6] = A ^ (~O & m)),
              (t[7] = E ^ (~M & g)),
              (t[16] = x ^ (~T & k)),
              (t[17] = C ^ (~R & _)),
              (t[26] = G ^ (~q & I)),
              (t[27] = z ^ (~K & B)),
              (t[36] = Z ^ (~$ & H)),
              (t[37] = X ^ (~tt & J)),
              (t[46] = at ^ (~ct & et)),
              (t[47] = ut ^ (~ht & rt)),
              (t[8] = O ^ (~m & b)),
              (t[9] = M ^ (~g & y)),
              (t[18] = T ^ (~k & S)),
              (t[19] = R ^ (~_ & j)),
              (t[28] = q ^ (~I & F)),
              (t[29] = K ^ (~B & D)),
              (t[38] = $ ^ (~H & V)),
              (t[39] = tt ^ (~J & W)),
              (t[48] = ct ^ (~et & nt)),
              (t[49] = ht ^ (~rt & it)),
              (t[0] ^= p[n]),
              (t[1] ^= p[n + 1])
        }
        if (u) t.exports = _
        else {
          for (j = 0; j < S.length; ++j) s[S[j]] = _[S[j]]
          c &&
            (void 0 ===
              (n = function() {
                return _
              }.call(e, r, e, t)) ||
              (t.exports = n))
        }
      })()
    },
    function(t, e, r) {
      ;(function(t) {
        !(function(t, e) {
          'use strict'
          function n(t, e) {
            if (!t) throw new Error(e || 'Assertion failed')
          }
          function i(t, e) {
            t.super_ = e
            var r = function() {}
            ;(r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t)
          }
          function o(t, e, r) {
            if (o.isBN(t)) return t
            ;(this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t && (('le' !== e && 'be' !== e) || ((r = e), (e = 10)), this._init(t || 0, e || 10, r || 'be'))
          }
          var s
          'object' == typeof t ? (t.exports = o) : (e.BN = o), (o.BN = o), (o.wordSize = 26)
          try {
            s = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : r(44).Buffer
          } catch (t) {}
          function a(t, e) {
            var r = t.charCodeAt(e)
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
              ? r - 55
              : r >= 97 && r <= 102
              ? r - 87
              : void n(!1, 'Invalid character in ' + t)
          }
          function u(t, e, r) {
            var n = a(t, r)
            return r - 1 >= e && (n |= a(t, r - 1) << 4), n
          }
          function c(t, e, r, i) {
            for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
              var c = t.charCodeAt(u) - 48
              ;(o *= i),
                (s = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
                n(c >= 0 && s < i, 'Invalid character'),
                (o += s)
            }
            return o
          }
          function h(t, e) {
            ;(t.words = e.words), (t.length = e.length), (t.negative = e.negative), (t.red = e.red)
          }
          if (
            ((o.isBN = function(t) {
              return (
                t instanceof o ||
                (null !== t && 'object' == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words))
              )
            }),
            (o.max = function(t, e) {
              return t.cmp(e) > 0 ? t : e
            }),
            (o.min = function(t, e) {
              return t.cmp(e) < 0 ? t : e
            }),
            (o.prototype._init = function(t, e, r) {
              if ('number' == typeof t) return this._initNumber(t, e, r)
              if ('object' == typeof t) return this._initArray(t, e, r)
              'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36)
              var i = 0
              '-' === (t = t.toString().replace(/\s+/g, ''))[0] && (i++, (this.negative = 1)),
                i < t.length &&
                  (16 === e
                    ? this._parseHex(t, i, r)
                    : (this._parseBase(t, e, i), 'le' === r && this._initArray(this.toArray(), e, r)))
            }),
            (o.prototype._initNumber = function(t, e, r) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]), (this.length = 2))
                  : (n(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                'le' === r && this._initArray(this.toArray(), e, r)
            }),
            (o.prototype._initArray = function(t, e, r) {
              if ((n('number' == typeof t.length), t.length <= 0)) return (this.words = [0]), (this.length = 1), this
              ;(this.length = Math.ceil(t.length / 3)), (this.words = new Array(this.length))
              for (var i = 0; i < this.length; i++) this.words[i] = 0
              var o,
                s,
                a = 0
              if ('be' === r)
                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                  (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), o++)
              else if ('le' === r)
                for (i = 0, o = 0; i < t.length; i += 3)
                  (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), o++)
              return this._strip()
            }),
            (o.prototype._parseHex = function(t, e, r) {
              ;(this.length = Math.ceil((t.length - e) / 6)), (this.words = new Array(this.length))
              for (var n = 0; n < this.length; n++) this.words[n] = 0
              var i,
                o = 0,
                s = 0
              if ('be' === r)
                for (n = t.length - 1; n >= e; n -= 2)
                  (i = u(t, e, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8)
              else
                for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2)
                  (i = u(t, e, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8)
              this._strip()
            }),
            (o.prototype._parseBase = function(t, e, r) {
              ;(this.words = [0]), (this.length = 1)
              for (var n = 0, i = 1; i <= 67108863; i *= e) n++
              n--, (i = (i / e) | 0)
              for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, u = 0, h = r; h < a; h += n)
                (u = c(t, h, h + n, e)),
                  this.imuln(i),
                  this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u)
              if (0 !== s) {
                var l = 1
                for (u = c(t, h, t.length, e), h = 0; h < s; h++) l *= e
                this.imuln(l), this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u)
              }
              this._strip()
            }),
            (o.prototype.copy = function(t) {
              t.words = new Array(this.length)
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e]
              ;(t.length = this.length), (t.negative = this.negative), (t.red = this.red)
            }),
            (o.prototype._move = function(t) {
              h(t, this)
            }),
            (o.prototype.clone = function() {
              var t = new o(null)
              return this.copy(t), t
            }),
            (o.prototype._expand = function(t) {
              for (; this.length < t; ) this.words[this.length++] = 0
              return this
            }),
            (o.prototype._strip = function() {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--
              return this._normSign()
            }),
            (o.prototype._normSign = function() {
              return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
            }),
            'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for('nodejs.util.inspect.custom')] = l
            } catch (t) {
              o.prototype.inspect = l
            }
          else o.prototype.inspect = l
          function l() {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
          }
          var f = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000',
            ],
            d = [
              0,
              0,
              25,
              16,
              12,
              11,
              10,
              9,
              8,
              8,
              7,
              7,
              7,
              7,
              6,
              6,
              6,
              6,
              6,
              6,
              6,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
            ],
            p = [
              0,
              0,
              33554432,
              43046721,
              16777216,
              48828125,
              60466176,
              40353607,
              16777216,
              43046721,
              1e7,
              19487171,
              35831808,
              62748517,
              7529536,
              11390625,
              16777216,
              24137569,
              34012224,
              47045881,
              64e6,
              4084101,
              5153632,
              6436343,
              7962624,
              9765625,
              11881376,
              14348907,
              17210368,
              20511149,
              243e5,
              28629151,
              33554432,
              39135393,
              45435424,
              52521875,
              60466176,
            ]
          ;(o.prototype.toString = function(t, e) {
            var r
            if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
              r = ''
              for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  u = (16777215 & ((a << i) | o)).toString(16)
                ;(o = (a >>> (24 - i)) & 16777215),
                  (i += 2) >= 26 && ((i -= 26), s--),
                  (r = 0 !== o || s !== this.length - 1 ? f[6 - u.length] + u + r : u + r)
              }
              for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = '0' + r
              return 0 !== this.negative && (r = '-' + r), r
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var c = d[t],
                h = p[t]
              r = ''
              var l = this.clone()
              for (l.negative = 0; !l.isZero(); ) {
                var m = l.modrn(h).toString(t)
                r = (l = l.idivn(h)).isZero() ? m + r : f[c - m.length] + m + r
              }
              for (this.isZero() && (r = '0' + r); r.length % e != 0; ) r = '0' + r
              return 0 !== this.negative && (r = '-' + r), r
            }
            n(!1, 'Base should be between 2 and 36')
          }),
            (o.prototype.toNumber = function() {
              var t = this.words[0]
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 && n(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -t : t
              )
            }),
            (o.prototype.toJSON = function() {
              return this.toString(16, 2)
            }),
            s &&
              (o.prototype.toBuffer = function(t, e) {
                return this.toArrayLike(s, t, e)
              }),
            (o.prototype.toArray = function(t, e) {
              return this.toArrayLike(Array, t, e)
            })
          function m(t, e, r) {
            r.negative = e.negative ^ t.negative
            var n = (t.length + e.length) | 0
            ;(r.length = n), (n = (n - 1) | 0)
            var i = 0 | t.words[0],
              o = 0 | e.words[0],
              s = i * o,
              a = 67108863 & s,
              u = (s / 67108864) | 0
            r.words[0] = a
            for (var c = 1; c < n; c++) {
              for (
                var h = u >>> 26, l = 67108863 & u, f = Math.min(c, e.length - 1), d = Math.max(0, c - t.length + 1);
                d <= f;
                d++
              ) {
                var p = (c - d) | 0
                ;(h += ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + l) / 67108864) | 0), (l = 67108863 & s)
              }
              ;(r.words[c] = 0 | l), (u = 0 | h)
            }
            return 0 !== u ? (r.words[c] = 0 | u) : r.length--, r._strip()
          }
          ;(o.prototype.toArrayLike = function(t, e, r) {
            this._strip()
            var i = this.byteLength(),
              o = r || Math.max(1, i)
            n(i <= o, 'byte array longer than desired length'), n(o > 0, 'Requested array length <= 0')
            var s = (function(t, e) {
              return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
            })(t, o)
            return this['_toArrayLike' + ('le' === e ? 'LE' : 'BE')](s, i), s
          }),
            (o.prototype._toArrayLikeLE = function(t, e) {
              for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | n
                ;(t[r++] = 255 & s),
                  r < t.length && (t[r++] = (s >> 8) & 255),
                  r < t.length && (t[r++] = (s >> 16) & 255),
                  6 === o ? (r < t.length && (t[r++] = (s >> 24) & 255), (n = 0), (o = 0)) : ((n = s >>> 24), (o += 2))
              }
              if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0
            }),
            (o.prototype._toArrayLikeBE = function(t, e) {
              for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | n
                ;(t[r--] = 255 & s),
                  r >= 0 && (t[r--] = (s >> 8) & 255),
                  r >= 0 && (t[r--] = (s >> 16) & 255),
                  6 === o ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0)) : ((n = s >>> 24), (o += 2))
              }
              if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0
            }),
            Math.clz32
              ? (o.prototype._countBits = function(t) {
                  return 32 - Math.clz32(t)
                })
              : (o.prototype._countBits = function(t) {
                  var e = t,
                    r = 0
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  )
                }),
            (o.prototype._zeroBits = function(t) {
              if (0 === t) return 26
              var e = t,
                r = 0
              return (
                0 == (8191 & e) && ((r += 13), (e >>>= 13)),
                0 == (127 & e) && ((r += 7), (e >>>= 7)),
                0 == (15 & e) && ((r += 4), (e >>>= 4)),
                0 == (3 & e) && ((r += 2), (e >>>= 2)),
                0 == (1 & e) && r++,
                r
              )
            }),
            (o.prototype.bitLength = function() {
              var t = this.words[this.length - 1],
                e = this._countBits(t)
              return 26 * (this.length - 1) + e
            }),
            (o.prototype.zeroBits = function() {
              if (this.isZero()) return 0
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e])
                if (((t += r), 26 !== r)) break
              }
              return t
            }),
            (o.prototype.byteLength = function() {
              return Math.ceil(this.bitLength() / 8)
            }),
            (o.prototype.toTwos = function(t) {
              return 0 !== this.negative
                ? this.abs()
                    .inotn(t)
                    .iaddn(1)
                : this.clone()
            }),
            (o.prototype.fromTwos = function(t) {
              return this.testn(t - 1)
                ? this.notn(t)
                    .iaddn(1)
                    .ineg()
                : this.clone()
            }),
            (o.prototype.isNeg = function() {
              return 0 !== this.negative
            }),
            (o.prototype.neg = function() {
              return this.clone().ineg()
            }),
            (o.prototype.ineg = function() {
              return this.isZero() || (this.negative ^= 1), this
            }),
            (o.prototype.iuor = function(t) {
              for (; this.length < t.length; ) this.words[this.length++] = 0
              for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e]
              return this._strip()
            }),
            (o.prototype.ior = function(t) {
              return n(0 == (this.negative | t.negative)), this.iuor(t)
            }),
            (o.prototype.or = function(t) {
              return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }),
            (o.prototype.uor = function(t) {
              return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }),
            (o.prototype.iuand = function(t) {
              var e
              e = this.length > t.length ? t : this
              for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r]
              return (this.length = e.length), this._strip()
            }),
            (o.prototype.iand = function(t) {
              return n(0 == (this.negative | t.negative)), this.iuand(t)
            }),
            (o.prototype.and = function(t) {
              return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }),
            (o.prototype.uand = function(t) {
              return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }),
            (o.prototype.iuxor = function(t) {
              var e, r
              this.length > t.length ? ((e = this), (r = t)) : ((e = t), (r = this))
              for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n]
              if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n]
              return (this.length = e.length), this._strip()
            }),
            (o.prototype.ixor = function(t) {
              return n(0 == (this.negative | t.negative)), this.iuxor(t)
            }),
            (o.prototype.xor = function(t) {
              return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }),
            (o.prototype.uxor = function(t) {
              return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }),
            (o.prototype.inotn = function(t) {
              n('number' == typeof t && t >= 0)
              var e = 0 | Math.ceil(t / 26),
                r = t % 26
              this._expand(e), r > 0 && e--
              for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i]
              return r > 0 && (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))), this._strip()
            }),
            (o.prototype.notn = function(t) {
              return this.clone().inotn(t)
            }),
            (o.prototype.setn = function(t, e) {
              n('number' == typeof t && t >= 0)
              var r = (t / 26) | 0,
                i = t % 26
              return (
                this._expand(r + 1),
                (this.words[r] = e ? this.words[r] | (1 << i) : this.words[r] & ~(1 << i)),
                this._strip()
              )
            }),
            (o.prototype.iadd = function(t) {
              var e, r, n
              if (0 !== this.negative && 0 === t.negative)
                return (this.negative = 0), (e = this.isub(t)), (this.negative ^= 1), this._normSign()
              if (0 === this.negative && 0 !== t.negative)
                return (t.negative = 0), (e = this.isub(t)), (t.negative = 1), e._normSign()
              this.length > t.length ? ((r = this), (n = t)) : ((r = t), (n = this))
              for (var i = 0, o = 0; o < n.length; o++)
                (e = (0 | r.words[o]) + (0 | n.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26)
              for (; 0 !== i && o < r.length; o++)
                (e = (0 | r.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26)
              if (((this.length = r.length), 0 !== i)) (this.words[this.length] = i), this.length++
              else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o]
              return this
            }),
            (o.prototype.add = function(t) {
              var e
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this)
            }),
            (o.prototype.isub = function(t) {
              if (0 !== t.negative) {
                t.negative = 0
                var e = this.iadd(t)
                return (t.negative = 1), e._normSign()
              }
              if (0 !== this.negative) return (this.negative = 0), this.iadd(t), (this.negative = 1), this._normSign()
              var r,
                n,
                i = this.cmp(t)
              if (0 === i) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
              i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this))
              for (var o = 0, s = 0; s < n.length; s++)
                (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26), (this.words[s] = 67108863 & e)
              for (; 0 !== o && s < r.length; s++)
                (o = (e = (0 | r.words[s]) + o) >> 26), (this.words[s] = 67108863 & e)
              if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s]
              return (this.length = Math.max(this.length, s)), r !== this && (this.negative = 1), this._strip()
            }),
            (o.prototype.sub = function(t) {
              return this.clone().isub(t)
            })
          var g = function(t, e, r) {
            var n,
              i,
              o,
              s = t.words,
              a = e.words,
              u = r.words,
              c = 0,
              h = 0 | s[0],
              l = 8191 & h,
              f = h >>> 13,
              d = 0 | s[1],
              p = 8191 & d,
              m = d >>> 13,
              g = 0 | s[2],
              b = 8191 & g,
              y = g >>> 13,
              v = 0 | s[3],
              w = 8191 & v,
              A = v >>> 13,
              E = 0 | s[4],
              O = 8191 & E,
              M = E >>> 13,
              k = 0 | s[5],
              _ = 8191 & k,
              S = k >>> 13,
              j = 0 | s[6],
              N = 8191 & j,
              P = j >>> 13,
              x = 0 | s[7],
              C = 8191 & x,
              T = x >>> 13,
              R = 0 | s[8],
              I = 8191 & R,
              B = R >>> 13,
              F = 0 | s[9],
              D = 8191 & F,
              L = F >>> 13,
              U = 0 | a[0],
              G = 8191 & U,
              z = U >>> 13,
              q = 0 | a[1],
              K = 8191 & q,
              H = q >>> 13,
              J = 0 | a[2],
              V = 8191 & J,
              W = J >>> 13,
              Q = 0 | a[3],
              Y = 8191 & Q,
              Z = Q >>> 13,
              X = 0 | a[4],
              $ = 8191 & X,
              tt = X >>> 13,
              et = 0 | a[5],
              rt = 8191 & et,
              nt = et >>> 13,
              it = 0 | a[6],
              ot = 8191 & it,
              st = it >>> 13,
              at = 0 | a[7],
              ut = 8191 & at,
              ct = at >>> 13,
              ht = 0 | a[8],
              lt = 8191 & ht,
              ft = ht >>> 13,
              dt = 0 | a[9],
              pt = 8191 & dt,
              mt = dt >>> 13
            ;(r.negative = t.negative ^ e.negative), (r.length = 19)
            var gt =
              (((c + (n = Math.imul(l, G))) | 0) +
                ((8191 & (i = ((i = Math.imul(l, z)) + Math.imul(f, G)) | 0)) << 13)) |
              0
            ;(c = ((((o = Math.imul(f, z)) + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (n = Math.imul(p, G)),
              (i = ((i = Math.imul(p, z)) + Math.imul(m, G)) | 0),
              (o = Math.imul(m, z))
            var bt =
              (((c + (n = (n + Math.imul(l, K)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, H)) | 0) + Math.imul(f, K)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, H)) | 0) + (i >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (n = Math.imul(b, G)),
              (i = ((i = Math.imul(b, z)) + Math.imul(y, G)) | 0),
              (o = Math.imul(y, z)),
              (n = (n + Math.imul(p, K)) | 0),
              (i = ((i = (i + Math.imul(p, H)) | 0) + Math.imul(m, K)) | 0),
              (o = (o + Math.imul(m, H)) | 0)
            var yt =
              (((c + (n = (n + Math.imul(l, V)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, W)) | 0) + Math.imul(f, V)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, W)) | 0) + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (n = Math.imul(w, G)),
              (i = ((i = Math.imul(w, z)) + Math.imul(A, G)) | 0),
              (o = Math.imul(A, z)),
              (n = (n + Math.imul(b, K)) | 0),
              (i = ((i = (i + Math.imul(b, H)) | 0) + Math.imul(y, K)) | 0),
              (o = (o + Math.imul(y, H)) | 0),
              (n = (n + Math.imul(p, V)) | 0),
              (i = ((i = (i + Math.imul(p, W)) | 0) + Math.imul(m, V)) | 0),
              (o = (o + Math.imul(m, W)) | 0)
            var vt =
              (((c + (n = (n + Math.imul(l, Y)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, Z)) | 0) + Math.imul(f, Y)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, Z)) | 0) + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (n = Math.imul(O, G)),
              (i = ((i = Math.imul(O, z)) + Math.imul(M, G)) | 0),
              (o = Math.imul(M, z)),
              (n = (n + Math.imul(w, K)) | 0),
              (i = ((i = (i + Math.imul(w, H)) | 0) + Math.imul(A, K)) | 0),
              (o = (o + Math.imul(A, H)) | 0),
              (n = (n + Math.imul(b, V)) | 0),
              (i = ((i = (i + Math.imul(b, W)) | 0) + Math.imul(y, V)) | 0),
              (o = (o + Math.imul(y, W)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, Z)) | 0)
            var wt =
              (((c + (n = (n + Math.imul(l, $)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, tt)) | 0) + Math.imul(f, $)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (n = Math.imul(_, G)),
              (i = ((i = Math.imul(_, z)) + Math.imul(S, G)) | 0),
              (o = Math.imul(S, z)),
              (n = (n + Math.imul(O, K)) | 0),
              (i = ((i = (i + Math.imul(O, H)) | 0) + Math.imul(M, K)) | 0),
              (o = (o + Math.imul(M, H)) | 0),
              (n = (n + Math.imul(w, V)) | 0),
              (i = ((i = (i + Math.imul(w, W)) | 0) + Math.imul(A, V)) | 0),
              (o = (o + Math.imul(A, W)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (i = ((i = (i + Math.imul(b, Z)) | 0) + Math.imul(y, Y)) | 0),
              (o = (o + Math.imul(y, Z)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, $)) | 0),
              (o = (o + Math.imul(m, tt)) | 0)
            var At =
              (((c + (n = (n + Math.imul(l, rt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, nt)) | 0) + Math.imul(f, rt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, nt)) | 0) + (i >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (n = Math.imul(N, G)),
              (i = ((i = Math.imul(N, z)) + Math.imul(P, G)) | 0),
              (o = Math.imul(P, z)),
              (n = (n + Math.imul(_, K)) | 0),
              (i = ((i = (i + Math.imul(_, H)) | 0) + Math.imul(S, K)) | 0),
              (o = (o + Math.imul(S, H)) | 0),
              (n = (n + Math.imul(O, V)) | 0),
              (i = ((i = (i + Math.imul(O, W)) | 0) + Math.imul(M, V)) | 0),
              (o = (o + Math.imul(M, W)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (i = ((i = (i + Math.imul(w, Z)) | 0) + Math.imul(A, Y)) | 0),
              (o = (o + Math.imul(A, Z)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(y, $)) | 0),
              (o = (o + Math.imul(y, tt)) | 0),
              (n = (n + Math.imul(p, rt)) | 0),
              (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(m, rt)) | 0),
              (o = (o + Math.imul(m, nt)) | 0)
            var Et =
              (((c + (n = (n + Math.imul(l, ot)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, st)) | 0) + Math.imul(f, ot)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, st)) | 0) + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (n = Math.imul(C, G)),
              (i = ((i = Math.imul(C, z)) + Math.imul(T, G)) | 0),
              (o = Math.imul(T, z)),
              (n = (n + Math.imul(N, K)) | 0),
              (i = ((i = (i + Math.imul(N, H)) | 0) + Math.imul(P, K)) | 0),
              (o = (o + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(_, V)) | 0),
              (i = ((i = (i + Math.imul(_, W)) | 0) + Math.imul(S, V)) | 0),
              (o = (o + Math.imul(S, W)) | 0),
              (n = (n + Math.imul(O, Y)) | 0),
              (i = ((i = (i + Math.imul(O, Z)) | 0) + Math.imul(M, Y)) | 0),
              (o = (o + Math.imul(M, Z)) | 0),
              (n = (n + Math.imul(w, $)) | 0),
              (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(A, $)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (i = ((i = (i + Math.imul(b, nt)) | 0) + Math.imul(y, rt)) | 0),
              (o = (o + Math.imul(y, nt)) | 0),
              (n = (n + Math.imul(p, ot)) | 0),
              (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, st)) | 0)
            var Ot =
              (((c + (n = (n + Math.imul(l, ut)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, ct)) | 0) + Math.imul(f, ut)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, ct)) | 0) + (i >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (n = Math.imul(I, G)),
              (i = ((i = Math.imul(I, z)) + Math.imul(B, G)) | 0),
              (o = Math.imul(B, z)),
              (n = (n + Math.imul(C, K)) | 0),
              (i = ((i = (i + Math.imul(C, H)) | 0) + Math.imul(T, K)) | 0),
              (o = (o + Math.imul(T, H)) | 0),
              (n = (n + Math.imul(N, V)) | 0),
              (i = ((i = (i + Math.imul(N, W)) | 0) + Math.imul(P, V)) | 0),
              (o = (o + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(_, Y)) | 0),
              (i = ((i = (i + Math.imul(_, Z)) | 0) + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, Z)) | 0),
              (n = (n + Math.imul(O, $)) | 0),
              (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(M, $)) | 0),
              (o = (o + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(w, rt)) | 0),
              (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(A, rt)) | 0),
              (o = (o + Math.imul(A, nt)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (i = ((i = (i + Math.imul(b, st)) | 0) + Math.imul(y, ot)) | 0),
              (o = (o + Math.imul(y, st)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (i = ((i = (i + Math.imul(p, ct)) | 0) + Math.imul(m, ut)) | 0),
              (o = (o + Math.imul(m, ct)) | 0)
            var Mt =
              (((c + (n = (n + Math.imul(l, lt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, ft)) | 0) + Math.imul(f, lt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, ft)) | 0) + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (n = Math.imul(D, G)),
              (i = ((i = Math.imul(D, z)) + Math.imul(L, G)) | 0),
              (o = Math.imul(L, z)),
              (n = (n + Math.imul(I, K)) | 0),
              (i = ((i = (i + Math.imul(I, H)) | 0) + Math.imul(B, K)) | 0),
              (o = (o + Math.imul(B, H)) | 0),
              (n = (n + Math.imul(C, V)) | 0),
              (i = ((i = (i + Math.imul(C, W)) | 0) + Math.imul(T, V)) | 0),
              (o = (o + Math.imul(T, W)) | 0),
              (n = (n + Math.imul(N, Y)) | 0),
              (i = ((i = (i + Math.imul(N, Z)) | 0) + Math.imul(P, Y)) | 0),
              (o = (o + Math.imul(P, Z)) | 0),
              (n = (n + Math.imul(_, $)) | 0),
              (i = ((i = (i + Math.imul(_, tt)) | 0) + Math.imul(S, $)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(O, rt)) | 0),
              (i = ((i = (i + Math.imul(O, nt)) | 0) + Math.imul(M, rt)) | 0),
              (o = (o + Math.imul(M, nt)) | 0),
              (n = (n + Math.imul(w, ot)) | 0),
              (i = ((i = (i + Math.imul(w, st)) | 0) + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, st)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (i = ((i = (i + Math.imul(b, ct)) | 0) + Math.imul(y, ut)) | 0),
              (o = (o + Math.imul(y, ct)) | 0),
              (n = (n + Math.imul(p, lt)) | 0),
              (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(m, lt)) | 0),
              (o = (o + Math.imul(m, ft)) | 0)
            var kt =
              (((c + (n = (n + Math.imul(l, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(l, mt)) | 0) + Math.imul(f, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(f, mt)) | 0) + (i >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (n = Math.imul(D, K)),
              (i = ((i = Math.imul(D, H)) + Math.imul(L, K)) | 0),
              (o = Math.imul(L, H)),
              (n = (n + Math.imul(I, V)) | 0),
              (i = ((i = (i + Math.imul(I, W)) | 0) + Math.imul(B, V)) | 0),
              (o = (o + Math.imul(B, W)) | 0),
              (n = (n + Math.imul(C, Y)) | 0),
              (i = ((i = (i + Math.imul(C, Z)) | 0) + Math.imul(T, Y)) | 0),
              (o = (o + Math.imul(T, Z)) | 0),
              (n = (n + Math.imul(N, $)) | 0),
              (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(P, $)) | 0),
              (o = (o + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(_, rt)) | 0),
              (i = ((i = (i + Math.imul(_, nt)) | 0) + Math.imul(S, rt)) | 0),
              (o = (o + Math.imul(S, nt)) | 0),
              (n = (n + Math.imul(O, ot)) | 0),
              (i = ((i = (i + Math.imul(O, st)) | 0) + Math.imul(M, ot)) | 0),
              (o = (o + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(w, ut)) | 0),
              (i = ((i = (i + Math.imul(w, ct)) | 0) + Math.imul(A, ut)) | 0),
              (o = (o + Math.imul(A, ct)) | 0),
              (n = (n + Math.imul(b, lt)) | 0),
              (i = ((i = (i + Math.imul(b, ft)) | 0) + Math.imul(y, lt)) | 0),
              (o = (o + Math.imul(y, ft)) | 0)
            var _t =
              (((c + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(p, mt)) | 0) + Math.imul(m, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(m, mt)) | 0) + (i >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (n = Math.imul(D, V)),
              (i = ((i = Math.imul(D, W)) + Math.imul(L, V)) | 0),
              (o = Math.imul(L, W)),
              (n = (n + Math.imul(I, Y)) | 0),
              (i = ((i = (i + Math.imul(I, Z)) | 0) + Math.imul(B, Y)) | 0),
              (o = (o + Math.imul(B, Z)) | 0),
              (n = (n + Math.imul(C, $)) | 0),
              (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(T, $)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (n = (n + Math.imul(N, rt)) | 0),
              (i = ((i = (i + Math.imul(N, nt)) | 0) + Math.imul(P, rt)) | 0),
              (o = (o + Math.imul(P, nt)) | 0),
              (n = (n + Math.imul(_, ot)) | 0),
              (i = ((i = (i + Math.imul(_, st)) | 0) + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (n = (n + Math.imul(O, ut)) | 0),
              (i = ((i = (i + Math.imul(O, ct)) | 0) + Math.imul(M, ut)) | 0),
              (o = (o + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(w, lt)) | 0),
              (i = ((i = (i + Math.imul(w, ft)) | 0) + Math.imul(A, lt)) | 0),
              (o = (o + Math.imul(A, ft)) | 0)
            var St =
              (((c + (n = (n + Math.imul(b, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(b, mt)) | 0) + Math.imul(y, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(y, mt)) | 0) + (i >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (n = Math.imul(D, Y)),
              (i = ((i = Math.imul(D, Z)) + Math.imul(L, Y)) | 0),
              (o = Math.imul(L, Z)),
              (n = (n + Math.imul(I, $)) | 0),
              (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(B, $)) | 0),
              (o = (o + Math.imul(B, tt)) | 0),
              (n = (n + Math.imul(C, rt)) | 0),
              (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(T, rt)) | 0),
              (o = (o + Math.imul(T, nt)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (i = ((i = (i + Math.imul(N, st)) | 0) + Math.imul(P, ot)) | 0),
              (o = (o + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(_, ut)) | 0),
              (i = ((i = (i + Math.imul(_, ct)) | 0) + Math.imul(S, ut)) | 0),
              (o = (o + Math.imul(S, ct)) | 0),
              (n = (n + Math.imul(O, lt)) | 0),
              (i = ((i = (i + Math.imul(O, ft)) | 0) + Math.imul(M, lt)) | 0),
              (o = (o + Math.imul(M, ft)) | 0)
            var jt =
              (((c + (n = (n + Math.imul(w, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(w, mt)) | 0) + Math.imul(A, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(A, mt)) | 0) + (i >>> 13)) | 0) + (jt >>> 26)) | 0),
              (jt &= 67108863),
              (n = Math.imul(D, $)),
              (i = ((i = Math.imul(D, tt)) + Math.imul(L, $)) | 0),
              (o = Math.imul(L, tt)),
              (n = (n + Math.imul(I, rt)) | 0),
              (i = ((i = (i + Math.imul(I, nt)) | 0) + Math.imul(B, rt)) | 0),
              (o = (o + Math.imul(B, nt)) | 0),
              (n = (n + Math.imul(C, ot)) | 0),
              (i = ((i = (i + Math.imul(C, st)) | 0) + Math.imul(T, ot)) | 0),
              (o = (o + Math.imul(T, st)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (i = ((i = (i + Math.imul(N, ct)) | 0) + Math.imul(P, ut)) | 0),
              (o = (o + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(_, lt)) | 0),
              (i = ((i = (i + Math.imul(_, ft)) | 0) + Math.imul(S, lt)) | 0),
              (o = (o + Math.imul(S, ft)) | 0)
            var Nt =
              (((c + (n = (n + Math.imul(O, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(O, mt)) | 0) + Math.imul(M, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(M, mt)) | 0) + (i >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (n = Math.imul(D, rt)),
              (i = ((i = Math.imul(D, nt)) + Math.imul(L, rt)) | 0),
              (o = Math.imul(L, nt)),
              (n = (n + Math.imul(I, ot)) | 0),
              (i = ((i = (i + Math.imul(I, st)) | 0) + Math.imul(B, ot)) | 0),
              (o = (o + Math.imul(B, st)) | 0),
              (n = (n + Math.imul(C, ut)) | 0),
              (i = ((i = (i + Math.imul(C, ct)) | 0) + Math.imul(T, ut)) | 0),
              (o = (o + Math.imul(T, ct)) | 0),
              (n = (n + Math.imul(N, lt)) | 0),
              (i = ((i = (i + Math.imul(N, ft)) | 0) + Math.imul(P, lt)) | 0),
              (o = (o + Math.imul(P, ft)) | 0)
            var Pt =
              (((c + (n = (n + Math.imul(_, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(_, mt)) | 0) + Math.imul(S, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(S, mt)) | 0) + (i >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (n = Math.imul(D, ot)),
              (i = ((i = Math.imul(D, st)) + Math.imul(L, ot)) | 0),
              (o = Math.imul(L, st)),
              (n = (n + Math.imul(I, ut)) | 0),
              (i = ((i = (i + Math.imul(I, ct)) | 0) + Math.imul(B, ut)) | 0),
              (o = (o + Math.imul(B, ct)) | 0),
              (n = (n + Math.imul(C, lt)) | 0),
              (i = ((i = (i + Math.imul(C, ft)) | 0) + Math.imul(T, lt)) | 0),
              (o = (o + Math.imul(T, ft)) | 0)
            var xt =
              (((c + (n = (n + Math.imul(N, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(N, mt)) | 0) + Math.imul(P, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(P, mt)) | 0) + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (n = Math.imul(D, ut)),
              (i = ((i = Math.imul(D, ct)) + Math.imul(L, ut)) | 0),
              (o = Math.imul(L, ct)),
              (n = (n + Math.imul(I, lt)) | 0),
              (i = ((i = (i + Math.imul(I, ft)) | 0) + Math.imul(B, lt)) | 0),
              (o = (o + Math.imul(B, ft)) | 0)
            var Ct =
              (((c + (n = (n + Math.imul(C, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(C, mt)) | 0) + Math.imul(T, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(T, mt)) | 0) + (i >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (n = Math.imul(D, lt)),
              (i = ((i = Math.imul(D, ft)) + Math.imul(L, lt)) | 0),
              (o = Math.imul(L, ft))
            var Tt =
              (((c + (n = (n + Math.imul(I, pt)) | 0)) | 0) +
                ((8191 & (i = ((i = (i + Math.imul(I, mt)) | 0) + Math.imul(B, pt)) | 0)) << 13)) |
              0
            ;(c = ((((o = (o + Math.imul(B, mt)) | 0) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0), (Tt &= 67108863)
            var Rt =
              (((c + (n = Math.imul(D, pt))) | 0) +
                ((8191 & (i = ((i = Math.imul(D, mt)) + Math.imul(L, pt)) | 0)) << 13)) |
              0
            return (
              (c = ((((o = Math.imul(L, mt)) + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (u[0] = gt),
              (u[1] = bt),
              (u[2] = yt),
              (u[3] = vt),
              (u[4] = wt),
              (u[5] = At),
              (u[6] = Et),
              (u[7] = Ot),
              (u[8] = Mt),
              (u[9] = kt),
              (u[10] = _t),
              (u[11] = St),
              (u[12] = jt),
              (u[13] = Nt),
              (u[14] = Pt),
              (u[15] = xt),
              (u[16] = Ct),
              (u[17] = Tt),
              (u[18] = Rt),
              0 !== c && ((u[19] = c), r.length++),
              r
            )
          }
          function b(t, e, r) {
            ;(r.negative = e.negative ^ t.negative), (r.length = t.length + e.length)
            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var s = i
              i = 0
              for (
                var a = 67108863 & n, u = Math.min(o, e.length - 1), c = Math.max(0, o - t.length + 1);
                c <= u;
                c++
              ) {
                var h = o - c,
                  l = (0 | t.words[h]) * (0 | e.words[c]),
                  f = 67108863 & l
                ;(a = 67108863 & (f = (f + a) | 0)),
                  (i += (s = ((s = (s + ((l / 67108864) | 0)) | 0) + (f >>> 26)) | 0) >>> 26),
                  (s &= 67108863)
              }
              ;(r.words[o] = a), (n = s), (s = i)
            }
            return 0 !== n ? (r.words[o] = n) : r.length--, r._strip()
          }
          function y(t, e, r) {
            return b(t, e, r)
          }
          function v(t, e) {
            ;(this.x = t), (this.y = e)
          }
          Math.imul || (g = m),
            (o.prototype.mulTo = function(t, e) {
              var r = this.length + t.length
              return 10 === this.length && 10 === t.length
                ? g(this, t, e)
                : r < 63
                ? m(this, t, e)
                : r < 1024
                ? b(this, t, e)
                : y(this, t, e)
            }),
            (v.prototype.makeRBT = function(t) {
              for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++)
                e[n] = this.revBin(n, r, t)
              return e
            }),
            (v.prototype.revBin = function(t, e, r) {
              if (0 === t || t === r - 1) return t
              for (var n = 0, i = 0; i < e; i++) (n |= (1 & t) << (e - i - 1)), (t >>= 1)
              return n
            }),
            (v.prototype.permute = function(t, e, r, n, i, o) {
              for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]])
            }),
            (v.prototype.transform = function(t, e, r, n, i, o) {
              this.permute(o, t, e, r, n, i)
              for (var s = 1; s < i; s <<= 1)
                for (
                  var a = s << 1, u = Math.cos((2 * Math.PI) / a), c = Math.sin((2 * Math.PI) / a), h = 0;
                  h < i;
                  h += a
                )
                  for (var l = u, f = c, d = 0; d < s; d++) {
                    var p = r[h + d],
                      m = n[h + d],
                      g = r[h + d + s],
                      b = n[h + d + s],
                      y = l * g - f * b
                    ;(b = l * b + f * g),
                      (g = y),
                      (r[h + d] = p + g),
                      (n[h + d] = m + b),
                      (r[h + d + s] = p - g),
                      (n[h + d + s] = m - b),
                      d !== a && ((y = u * l - c * f), (f = u * f + c * l), (l = y))
                  }
            }),
            (v.prototype.guessLen13b = function(t, e) {
              var r = 1 | Math.max(e, t),
                n = 1 & r,
                i = 0
              for (r = (r / 2) | 0; r; r >>>= 1) i++
              return 1 << (i + 1 + n)
            }),
            (v.prototype.conjugate = function(t, e, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = t[n]
                  ;(t[n] = t[r - n - 1]), (t[r - n - 1] = i), (i = e[n]), (e[n] = -e[r - n - 1]), (e[r - n - 1] = -i)
                }
            }),
            (v.prototype.normalize13b = function(t, e) {
              for (var r = 0, n = 0; n < e / 2; n++) {
                var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r
                ;(t[n] = 67108863 & i), (r = i < 67108864 ? 0 : (i / 67108864) | 0)
              }
              return t
            }),
            (v.prototype.convert13b = function(t, e, r, i) {
              for (var o = 0, s = 0; s < e; s++)
                (o += 0 | t[s]), (r[2 * s] = 8191 & o), (o >>>= 13), (r[2 * s + 1] = 8191 & o), (o >>>= 13)
              for (s = 2 * e; s < i; ++s) r[s] = 0
              n(0 === o), n(0 == (-8192 & o))
            }),
            (v.prototype.stub = function(t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0
              return e
            }),
            (v.prototype.mulp = function(t, e, r) {
              var n = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                s = new Array(n),
                a = new Array(n),
                u = new Array(n),
                c = new Array(n),
                h = new Array(n),
                l = new Array(n),
                f = r.words
              ;(f.length = n),
                this.convert13b(t.words, t.length, s, n),
                this.convert13b(e.words, e.length, c, n),
                this.transform(s, o, a, u, n, i),
                this.transform(c, o, h, l, n, i)
              for (var d = 0; d < n; d++) {
                var p = a[d] * h[d] - u[d] * l[d]
                ;(u[d] = a[d] * l[d] + u[d] * h[d]), (a[d] = p)
              }
              return (
                this.conjugate(a, u, n),
                this.transform(a, u, f, o, n, i),
                this.conjugate(f, o, n),
                this.normalize13b(f, n),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r._strip()
              )
            }),
            (o.prototype.mul = function(t) {
              var e = new o(null)
              return (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            }),
            (o.prototype.mulf = function(t) {
              var e = new o(null)
              return (e.words = new Array(this.length + t.length)), y(this, t, e)
            }),
            (o.prototype.imul = function(t) {
              return this.clone().mulTo(t, this)
            }),
            (o.prototype.imuln = function(t) {
              var e = t < 0
              e && (t = -t), n('number' == typeof t), n(t < 67108864)
              for (var r = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * t,
                  s = (67108863 & o) + (67108863 & r)
                ;(r >>= 26), (r += (o / 67108864) | 0), (r += s >>> 26), (this.words[i] = 67108863 & s)
              }
              return 0 !== r && ((this.words[i] = r), this.length++), e ? this.ineg() : this
            }),
            (o.prototype.muln = function(t) {
              return this.clone().imuln(t)
            }),
            (o.prototype.sqr = function() {
              return this.mul(this)
            }),
            (o.prototype.isqr = function() {
              return this.imul(this.clone())
            }),
            (o.prototype.pow = function(t) {
              var e = (function(t) {
                for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                  var n = (r / 26) | 0,
                    i = r % 26
                  e[r] = (t.words[n] >>> i) & 1
                }
                return e
              })(t)
              if (0 === e.length) return new o(1)
              for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
              if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i))
              return r
            }),
            (o.prototype.iushln = function(t) {
              n('number' == typeof t && t >= 0)
              var e,
                r = t % 26,
                i = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r)
              if (0 !== r) {
                var s = 0
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & o,
                    u = ((0 | this.words[e]) - a) << r
                  ;(this.words[e] = u | s), (s = a >>> (26 - r))
                }
                s && ((this.words[e] = s), this.length++)
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e]
                for (e = 0; e < i; e++) this.words[e] = 0
                this.length += i
              }
              return this._strip()
            }),
            (o.prototype.ishln = function(t) {
              return n(0 === this.negative), this.iushln(t)
            }),
            (o.prototype.iushrn = function(t, e, r) {
              var i
              n('number' == typeof t && t >= 0), (i = e ? (e - (e % 26)) / 26 : 0)
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> o) << o),
                u = r
              if (((i -= s), (i = Math.max(0, i)), u)) {
                for (var c = 0; c < s; c++) u.words[c] = this.words[c]
                u.length = s
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, c = 0; c < this.length; c++) this.words[c] = this.words[c + s]
              else (this.words[0] = 0), (this.length = 1)
              var h = 0
              for (c = this.length - 1; c >= 0 && (0 !== h || c >= i); c--) {
                var l = 0 | this.words[c]
                ;(this.words[c] = (h << (26 - o)) | (l >>> o)), (h = l & a)
              }
              return (
                u && 0 !== h && (u.words[u.length++] = h),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              )
            }),
            (o.prototype.ishrn = function(t, e, r) {
              return n(0 === this.negative), this.iushrn(t, e, r)
            }),
            (o.prototype.shln = function(t) {
              return this.clone().ishln(t)
            }),
            (o.prototype.ushln = function(t) {
              return this.clone().iushln(t)
            }),
            (o.prototype.shrn = function(t) {
              return this.clone().ishrn(t)
            }),
            (o.prototype.ushrn = function(t) {
              return this.clone().iushrn(t)
            }),
            (o.prototype.testn = function(t) {
              n('number' == typeof t && t >= 0)
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e
              return !(this.length <= r) && !!(this.words[r] & i)
            }),
            (o.prototype.imaskn = function(t) {
              n('number' == typeof t && t >= 0)
              var e = t % 26,
                r = (t - e) / 26
              if ((n(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= r)) return this
              if ((0 !== e && r++, (this.length = Math.min(r, this.length)), 0 !== e)) {
                var i = 67108863 ^ ((67108863 >>> e) << e)
                this.words[this.length - 1] &= i
              }
              return this._strip()
            }),
            (o.prototype.maskn = function(t) {
              return this.clone().imaskn(t)
            }),
            (o.prototype.iaddn = function(t) {
              return (
                n('number' == typeof t),
                n(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])), (this.negative = 0), this)
                    : ((this.negative = 0), this.isubn(t), (this.negative = 1), this)
                  : this._iaddn(t)
              )
            }),
            (o.prototype._iaddn = function(t) {
              this.words[0] += t
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864), e === this.length - 1 ? (this.words[e + 1] = 1) : this.words[e + 1]++
              return (this.length = Math.max(this.length, e + 1)), this
            }),
            (o.prototype.isubn = function(t) {
              if ((n('number' == typeof t), n(t < 67108864), t < 0)) return this.iaddn(-t)
              if (0 !== this.negative) return (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
                (this.words[0] = -this.words[0]), (this.negative = 1)
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1)
              return this._strip()
            }),
            (o.prototype.addn = function(t) {
              return this.clone().iaddn(t)
            }),
            (o.prototype.subn = function(t) {
              return this.clone().isubn(t)
            }),
            (o.prototype.iabs = function() {
              return (this.negative = 0), this
            }),
            (o.prototype.abs = function() {
              return this.clone().iabs()
            }),
            (o.prototype._ishlnsubmul = function(t, e, r) {
              var i,
                o,
                s = t.length + r
              this._expand(s)
              var a = 0
              for (i = 0; i < t.length; i++) {
                o = (0 | this.words[i + r]) + a
                var u = (0 | t.words[i]) * e
                ;(a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)), (this.words[i + r] = 67108863 & o)
              }
              for (; i < this.length - r; i++)
                (a = (o = (0 | this.words[i + r]) + a) >> 26), (this.words[i + r] = 67108863 & o)
              if (0 === a) return this._strip()
              for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
                (a = (o = -(0 | this.words[i]) + a) >> 26), (this.words[i] = 67108863 & o)
              return (this.negative = 1), this._strip()
            }),
            (o.prototype._wordDiv = function(t, e) {
              var r = (this.length, t.length),
                n = this.clone(),
                i = t,
                s = 0 | i.words[i.length - 1]
              0 !== (r = 26 - this._countBits(s)) && ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]))
              var a,
                u = n.length - i.length
              if ('mod' !== e) {
                ;((a = new o(null)).length = u + 1), (a.words = new Array(a.length))
                for (var c = 0; c < a.length; c++) a.words[c] = 0
              }
              var h = n.clone()._ishlnsubmul(i, 1, u)
              0 === h.negative && ((n = h), a && (a.words[u] = 1))
              for (var l = u - 1; l >= 0; l--) {
                var f = 67108864 * (0 | n.words[i.length + l]) + (0 | n.words[i.length + l - 1])
                for (f = Math.min((f / s) | 0, 67108863), n._ishlnsubmul(i, f, l); 0 !== n.negative; )
                  f--, (n.negative = 0), n._ishlnsubmul(i, 1, l), n.isZero() || (n.negative ^= 1)
                a && (a.words[l] = f)
              }
              return a && a._strip(), n._strip(), 'div' !== e && 0 !== r && n.iushrn(r), { div: a || null, mod: n }
            }),
            (o.prototype.divmod = function(t, e, r) {
              return (
                n(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((a = this.neg().divmod(t, e)),
                    'mod' !== e && (i = a.div.neg()),
                    'div' !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                    { div: i, mod: s })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((a = this.divmod(t.neg(), e)), 'mod' !== e && (i = a.div.neg()), { div: i, mod: a.mod })
                  : 0 != (this.negative & t.negative)
                  ? ((a = this.neg().divmod(t.neg(), e)),
                    'div' !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                    { div: a.div, mod: s })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === t.length
                  ? 'div' === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : 'mod' === e
                    ? { div: null, mod: new o(this.modrn(t.words[0])) }
                    : { div: this.divn(t.words[0]), mod: new o(this.modrn(t.words[0])) }
                  : this._wordDiv(t, e)
              )
              var i, s, a
            }),
            (o.prototype.div = function(t) {
              return this.divmod(t, 'div', !1).div
            }),
            (o.prototype.mod = function(t) {
              return this.divmod(t, 'mod', !1).mod
            }),
            (o.prototype.umod = function(t) {
              return this.divmod(t, 'mod', !0).mod
            }),
            (o.prototype.divRound = function(t) {
              var e = this.divmod(t)
              if (e.mod.isZero()) return e.div
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                n = t.ushrn(1),
                i = t.andln(1),
                o = r.cmp(n)
              return o < 0 || (1 === i && 0 === o) ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
            }),
            (o.prototype.modrn = function(t) {
              var e = t < 0
              e && (t = -t), n(t <= 67108863)
              for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--) i = (r * i + (0 | this.words[o])) % t
              return e ? -i : i
            }),
            (o.prototype.modn = function(t) {
              return this.modrn(t)
            }),
            (o.prototype.idivn = function(t) {
              var e = t < 0
              e && (t = -t), n(t <= 67108863)
              for (var r = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * r
                ;(this.words[i] = (o / t) | 0), (r = o % t)
              }
              return this._strip(), e ? this.ineg() : this
            }),
            (o.prototype.divn = function(t) {
              return this.clone().idivn(t)
            }),
            (o.prototype.egcd = function(t) {
              n(0 === t.negative), n(!t.isZero())
              var e = this,
                r = t.clone()
              e = 0 !== e.negative ? e.umod(t) : e.clone()
              for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), c = 0; e.isEven() && r.isEven(); )
                e.iushrn(1), r.iushrn(1), ++c
              for (var h = r.clone(), l = e.clone(); !e.isZero(); ) {
                for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f, d <<= 1);
                if (f > 0)
                  for (e.iushrn(f); f-- > 0; )
                    (i.isOdd() || s.isOdd()) && (i.iadd(h), s.isub(l)), i.iushrn(1), s.iushrn(1)
                for (var p = 0, m = 1; 0 == (r.words[0] & m) && p < 26; ++p, m <<= 1);
                if (p > 0)
                  for (r.iushrn(p); p-- > 0; )
                    (a.isOdd() || u.isOdd()) && (a.iadd(h), u.isub(l)), a.iushrn(1), u.iushrn(1)
                e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), s.isub(u)) : (r.isub(e), a.isub(i), u.isub(s))
              }
              return { a: a, b: u, gcd: r.iushln(c) }
            }),
            (o.prototype._invmp = function(t) {
              n(0 === t.negative), n(!t.isZero())
              var e = this,
                r = t.clone()
              e = 0 !== e.negative ? e.umod(t) : e.clone()
              for (var i, s = new o(1), a = new o(0), u = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                for (var c = 0, h = 1; 0 == (e.words[0] & h) && c < 26; ++c, h <<= 1);
                if (c > 0) for (e.iushrn(c); c-- > 0; ) s.isOdd() && s.iadd(u), s.iushrn(1)
                for (var l = 0, f = 1; 0 == (r.words[0] & f) && l < 26; ++l, f <<= 1);
                if (l > 0) for (r.iushrn(l); l-- > 0; ) a.isOdd() && a.iadd(u), a.iushrn(1)
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
              }
              return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
            }),
            (o.prototype.gcd = function(t) {
              if (this.isZero()) return t.abs()
              if (t.isZero()) return this.abs()
              var e = this.clone(),
                r = t.clone()
              ;(e.negative = 0), (r.negative = 0)
              for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1)
              for (;;) {
                for (; e.isEven(); ) e.iushrn(1)
                for (; r.isEven(); ) r.iushrn(1)
                var i = e.cmp(r)
                if (i < 0) {
                  var o = e
                  ;(e = r), (r = o)
                } else if (0 === i || 0 === r.cmpn(1)) break
                e.isub(r)
              }
              return r.iushln(n)
            }),
            (o.prototype.invm = function(t) {
              return this.egcd(t).a.umod(t)
            }),
            (o.prototype.isEven = function() {
              return 0 == (1 & this.words[0])
            }),
            (o.prototype.isOdd = function() {
              return 1 == (1 & this.words[0])
            }),
            (o.prototype.andln = function(t) {
              return this.words[0] & t
            }),
            (o.prototype.bincn = function(t) {
              n('number' == typeof t)
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e
              if (this.length <= r) return this._expand(r + 1), (this.words[r] |= i), this
              for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                var a = 0 | this.words[s]
                ;(o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a)
              }
              return 0 !== o && ((this.words[s] = o), this.length++), this
            }),
            (o.prototype.isZero = function() {
              return 1 === this.length && 0 === this.words[0]
            }),
            (o.prototype.cmpn = function(t) {
              var e,
                r = t < 0
              if (0 !== this.negative && !r) return -1
              if (0 === this.negative && r) return 1
              if ((this._strip(), this.length > 1)) e = 1
              else {
                r && (t = -t), n(t <= 67108863, 'Number is too big')
                var i = 0 | this.words[0]
                e = i === t ? 0 : i < t ? -1 : 1
              }
              return 0 !== this.negative ? 0 | -e : e
            }),
            (o.prototype.cmp = function(t) {
              if (0 !== this.negative && 0 === t.negative) return -1
              if (0 === this.negative && 0 !== t.negative) return 1
              var e = this.ucmp(t)
              return 0 !== this.negative ? 0 | -e : e
            }),
            (o.prototype.ucmp = function(t) {
              if (this.length > t.length) return 1
              if (this.length < t.length) return -1
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | t.words[r]
                if (n !== i) {
                  n < i ? (e = -1) : n > i && (e = 1)
                  break
                }
              }
              return e
            }),
            (o.prototype.gtn = function(t) {
              return 1 === this.cmpn(t)
            }),
            (o.prototype.gt = function(t) {
              return 1 === this.cmp(t)
            }),
            (o.prototype.gten = function(t) {
              return this.cmpn(t) >= 0
            }),
            (o.prototype.gte = function(t) {
              return this.cmp(t) >= 0
            }),
            (o.prototype.ltn = function(t) {
              return -1 === this.cmpn(t)
            }),
            (o.prototype.lt = function(t) {
              return -1 === this.cmp(t)
            }),
            (o.prototype.lten = function(t) {
              return this.cmpn(t) <= 0
            }),
            (o.prototype.lte = function(t) {
              return this.cmp(t) <= 0
            }),
            (o.prototype.eqn = function(t) {
              return 0 === this.cmpn(t)
            }),
            (o.prototype.eq = function(t) {
              return 0 === this.cmp(t)
            }),
            (o.red = function(t) {
              return new _(t)
            }),
            (o.prototype.toRed = function(t) {
              return (
                n(!this.red, 'Already a number in reduction context'),
                n(0 === this.negative, 'red works only with positives'),
                t.convertTo(this)._forceRed(t)
              )
            }),
            (o.prototype.fromRed = function() {
              return n(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this)
            }),
            (o.prototype._forceRed = function(t) {
              return (this.red = t), this
            }),
            (o.prototype.forceRed = function(t) {
              return n(!this.red, 'Already a number in reduction context'), this._forceRed(t)
            }),
            (o.prototype.redAdd = function(t) {
              return n(this.red, 'redAdd works only with red numbers'), this.red.add(this, t)
            }),
            (o.prototype.redIAdd = function(t) {
              return n(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, t)
            }),
            (o.prototype.redSub = function(t) {
              return n(this.red, 'redSub works only with red numbers'), this.red.sub(this, t)
            }),
            (o.prototype.redISub = function(t) {
              return n(this.red, 'redISub works only with red numbers'), this.red.isub(this, t)
            }),
            (o.prototype.redShl = function(t) {
              return n(this.red, 'redShl works only with red numbers'), this.red.shl(this, t)
            }),
            (o.prototype.redMul = function(t) {
              return (
                n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.mul(this, t)
              )
            }),
            (o.prototype.redIMul = function(t) {
              return (
                n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.imul(this, t)
              )
            }),
            (o.prototype.redSqr = function() {
              return n(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this)
            }),
            (o.prototype.redISqr = function() {
              return n(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this)
            }),
            (o.prototype.redSqrt = function() {
              return n(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this)
            }),
            (o.prototype.redInvm = function() {
              return n(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this)
            }),
            (o.prototype.redNeg = function() {
              return n(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this)
            }),
            (o.prototype.redPow = function(t) {
              return n(this.red && !t.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, t)
            })
          var w = { k256: null, p224: null, p192: null, p25519: null }
          function A(t, e) {
            ;(this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp())
          }
          function E() {
            A.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f')
          }
          function O() {
            A.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001')
          }
          function M() {
            A.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff')
          }
          function k() {
            A.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed')
          }
          function _(t) {
            if ('string' == typeof t) {
              var e = o._prime(t)
              ;(this.m = e.p), (this.prime = e)
            } else n(t.gtn(1), 'modulus must be greater than 1'), (this.m = t), (this.prime = null)
          }
          function S(t) {
            _.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv
                .mul(this.r)
                .isubn(1)
                .div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv))
          }
          ;(A.prototype._tmp = function() {
            var t = new o(null)
            return (t.words = new Array(Math.ceil(this.n / 13))), t
          }),
            (A.prototype.ireduce = function(t) {
              var e,
                r = t
              do {
                this.split(r, this.tmp), (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
              } while (e > this.n)
              var n = e < this.n ? -1 : r.ucmp(this.p)
              return (
                0 === n
                  ? ((r.words[0] = 0), (r.length = 1))
                  : n > 0
                  ? r.isub(this.p)
                  : void 0 !== r.strip
                  ? r.strip()
                  : r._strip(),
                r
              )
            }),
            (A.prototype.split = function(t, e) {
              t.iushrn(this.n, 0, e)
            }),
            (A.prototype.imulK = function(t) {
              return t.imul(this.k)
            }),
            i(E, A),
            (E.prototype.split = function(t, e) {
              for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n]
              if (((e.length = r), t.length <= 9)) return (t.words[0] = 0), void (t.length = 1)
              var i = t.words[9]
              for (e.words[e.length++] = 4194303 & i, n = 10; n < t.length; n++) {
                var o = 0 | t.words[n]
                ;(t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o)
              }
              ;(i >>>= 22), (t.words[n - 10] = i), 0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9)
            }),
            (E.prototype.imulK = function(t) {
              ;(t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2)
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 0 | t.words[r]
                ;(e += 977 * n), (t.words[r] = 67108863 & e), (e = 64 * n + ((e / 67108864) | 0))
              }
              return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
            }),
            i(O, A),
            i(M, A),
            i(k, A),
            (k.prototype.imulK = function(t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 19 * (0 | t.words[r]) + e,
                  i = 67108863 & n
                ;(n >>>= 26), (t.words[r] = i), (e = n)
              }
              return 0 !== e && (t.words[t.length++] = e), t
            }),
            (o._prime = function(t) {
              if (w[t]) return w[t]
              var e
              if ('k256' === t) e = new E()
              else if ('p224' === t) e = new O()
              else if ('p192' === t) e = new M()
              else {
                if ('p25519' !== t) throw new Error('Unknown prime ' + t)
                e = new k()
              }
              return (w[t] = e), e
            }),
            (_.prototype._verify1 = function(t) {
              n(0 === t.negative, 'red works only with positives'), n(t.red, 'red works only with red numbers')
            }),
            (_.prototype._verify2 = function(t, e) {
              n(0 == (t.negative | e.negative), 'red works only with positives'),
                n(t.red && t.red === e.red, 'red works only with red numbers')
            }),
            (_.prototype.imod = function(t) {
              return this.prime ? this.prime.ireduce(t)._forceRed(this) : (h(t, t.umod(this.m)._forceRed(this)), t)
            }),
            (_.prototype.neg = function(t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }),
            (_.prototype.add = function(t, e) {
              this._verify2(t, e)
              var r = t.add(e)
              return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
            }),
            (_.prototype.iadd = function(t, e) {
              this._verify2(t, e)
              var r = t.iadd(e)
              return r.cmp(this.m) >= 0 && r.isub(this.m), r
            }),
            (_.prototype.sub = function(t, e) {
              this._verify2(t, e)
              var r = t.sub(e)
              return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
            }),
            (_.prototype.isub = function(t, e) {
              this._verify2(t, e)
              var r = t.isub(e)
              return r.cmpn(0) < 0 && r.iadd(this.m), r
            }),
            (_.prototype.shl = function(t, e) {
              return this._verify1(t), this.imod(t.ushln(e))
            }),
            (_.prototype.imul = function(t, e) {
              return this._verify2(t, e), this.imod(t.imul(e))
            }),
            (_.prototype.mul = function(t, e) {
              return this._verify2(t, e), this.imod(t.mul(e))
            }),
            (_.prototype.isqr = function(t) {
              return this.imul(t, t.clone())
            }),
            (_.prototype.sqr = function(t) {
              return this.mul(t, t)
            }),
            (_.prototype.sqrt = function(t) {
              if (t.isZero()) return t.clone()
              var e = this.m.andln(3)
              if ((n(e % 2 == 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2)
                return this.pow(t, r)
              }
              for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1); ) s++, i.iushrn(1)
              n(!i.isZero())
              var a = new o(1).toRed(this),
                u = a.redNeg(),
                c = this.m.subn(1).iushrn(1),
                h = this.m.bitLength()
              for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, c).cmp(u); ) h.redIAdd(u)
              for (
                var l = this.pow(h, i), f = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s;
                0 !== d.cmp(a);

              ) {
                for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr()
                n(g < p)
                var b = this.pow(l, new o(1).iushln(p - g - 1))
                ;(f = f.redMul(b)), (l = b.redSqr()), (d = d.redMul(l)), (p = g)
              }
              return f
            }),
            (_.prototype.invm = function(t) {
              var e = t._invmp(this.m)
              return 0 !== e.negative ? ((e.negative = 0), this.imod(e).redNeg()) : this.imod(e)
            }),
            (_.prototype.pow = function(t, e) {
              if (e.isZero()) return new o(1).toRed(this)
              if (0 === e.cmpn(1)) return t.clone()
              var r = new Array(16)
              ;(r[0] = new o(1).toRed(this)), (r[1] = t)
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t)
              var i = r[0],
                s = 0,
                a = 0,
                u = e.bitLength() % 26
              for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                for (var c = e.words[n], h = u - 1; h >= 0; h--) {
                  var l = (c >> h) & 1
                  i !== r[0] && (i = this.sqr(i)),
                    0 !== l || 0 !== s
                      ? ((s <<= 1),
                        (s |= l),
                        (4 === ++a || (0 === n && 0 === h)) && ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                      : (a = 0)
                }
                u = 26
              }
              return i
            }),
            (_.prototype.convertTo = function(t) {
              var e = t.umod(this.m)
              return e === t ? e.clone() : e
            }),
            (_.prototype.convertFrom = function(t) {
              var e = t.clone()
              return (e.red = null), e
            }),
            (o.mont = function(t) {
              return new S(t)
            }),
            i(S, _),
            (S.prototype.convertTo = function(t) {
              return this.imod(t.ushln(this.shift))
            }),
            (S.prototype.convertFrom = function(t) {
              var e = this.imod(t.mul(this.rinv))
              return (e.red = null), e
            }),
            (S.prototype.imul = function(t, e) {
              if (t.isZero() || e.isZero()) return (t.words[0] = 0), (t.length = 1), t
              var r = t.imul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                o = i
              return (
                i.cmp(this.m) >= 0 ? (o = i.isub(this.m)) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
              )
            }),
            (S.prototype.mul = function(t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this)
              var r = t.mul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                s = i
              return (
                i.cmp(this.m) >= 0 ? (s = i.isub(this.m)) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
              )
            }),
            (S.prototype.invm = function(t) {
              return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            })
        })(t, this)
      }.call(this, r(60)(t)))
    },
    function(t, e, r) {
      'use strict'
      var n
      r.d(e, 'a', function() {
        return n
      }),
        (function(t) {
          ;(t.sha256 = 'sha256'), (t.sha512 = 'sha512')
        })(n || (n = {}))
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return P
      }),
        r.d(e, 'b', function() {
          return x
        })
      var n = r(0),
        i = r(1),
        o = r(2),
        s = r(25),
        a = r(9),
        u = r(4)
      class c extends a.a {
        constructor(t) {
          super('address', 'address', t, !1)
        }
        defaultValue() {
          return '0x0000000000000000000000000000000000000000'
        }
        encode(t, e) {
          try {
            e = Object(u.a)(e)
          } catch (t) {
            this._throwError(t.message, e)
          }
          return t.writeValue(e)
        }
        decode(t) {
          return Object(u.a)(Object(n.h)(t.readValue().toHexString(), 20))
        }
      }
      class h extends a.a {
        constructor(t) {
          super(t.name, t.type, void 0, t.dynamic), (this.coder = t)
        }
        defaultValue() {
          return this.coder.defaultValue()
        }
        encode(t, e) {
          return this.coder.encode(t, e)
        }
        decode(t) {
          return this.coder.decode(t)
        }
      }
      const l = new o.b(s.a)
      function f(t, e, r) {
        let n = null
        if (Array.isArray(r)) n = r
        else if (r && 'object' == typeof r) {
          let t = {}
          n = e.map(e => {
            const n = e.localName
            return (
              n ||
                l.throwError('cannot encode object for signature with missing names', o.b.errors.INVALID_ARGUMENT, {
                  argument: 'values',
                  coder: e,
                  value: r,
                }),
              t[n] &&
                l.throwError('cannot encode object for signature with duplicate names', o.b.errors.INVALID_ARGUMENT, {
                  argument: 'values',
                  coder: e,
                  value: r,
                }),
              (t[n] = !0),
              r[n]
            )
          })
        } else l.throwArgumentError('invalid tuple value', 'tuple', r)
        e.length !== n.length && l.throwArgumentError('types/value length mismatch', 'tuple', r)
        let i = new a.c(t.wordSize),
          s = new a.c(t.wordSize),
          u = []
        e.forEach((t, e) => {
          let r = n[e]
          if (t.dynamic) {
            let e = s.length
            t.encode(s, r)
            let n = i.writeUpdatableValue()
            u.push(t => {
              n(t + e)
            })
          } else t.encode(i, r)
        }),
          u.forEach(t => {
            t(i.length)
          })
        let c = t.appendWriter(i)
        return (c += t.appendWriter(s)), c
      }
      function d(t, e) {
        let r = [],
          n = t.subReader(0)
        e.forEach(e => {
          let i = null
          if (e.dynamic) {
            let r = t.readValue(),
              s = n.subReader(r.toNumber())
            try {
              i = e.decode(s)
            } catch (t) {
              if (t.code === o.b.errors.BUFFER_OVERRUN) throw t
              ;(i = t), (i.baseType = e.name), (i.name = e.localName), (i.type = e.type)
            }
          } else
            try {
              i = e.decode(t)
            } catch (t) {
              if (t.code === o.b.errors.BUFFER_OVERRUN) throw t
              ;(i = t), (i.baseType = e.name), (i.name = e.localName), (i.type = e.type)
            }
          null != i && r.push(i)
        })
        const i = e.reduce((t, e) => {
          const r = e.localName
          return r && (t[r] || (t[r] = 0), t[r]++), t
        }, {})
        e.forEach((t, e) => {
          let n = t.localName
          if (!n || 1 !== i[n]) return
          if (('length' === n && (n = '_length'), null != r[n])) return
          const o = r[e]
          o instanceof Error
            ? Object.defineProperty(r, n, {
                enumerable: !0,
                get: () => {
                  throw o
                },
              })
            : (r[n] = o)
        })
        for (let t = 0; t < r.length; t++) {
          const e = r[t]
          e instanceof Error &&
            Object.defineProperty(r, t, {
              enumerable: !0,
              get: () => {
                throw e
              },
            })
        }
        return Object.freeze(r)
      }
      class p extends a.a {
        constructor(t, e, r) {
          super('array', t.type + '[' + (e >= 0 ? e : '') + ']', r, -1 === e || t.dynamic),
            (this.coder = t),
            (this.length = e)
        }
        defaultValue() {
          const t = this.coder.defaultValue(),
            e = []
          for (let r = 0; r < this.length; r++) e.push(t)
          return e
        }
        encode(t, e) {
          Array.isArray(e) || this._throwError('expected array value', e)
          let r = this.length
          ;-1 === r && ((r = e.length), t.writeValue(e.length)),
            l.checkArgumentCount(e.length, r, 'coder array' + (this.localName ? ' ' + this.localName : ''))
          let n = []
          for (let t = 0; t < e.length; t++) n.push(this.coder)
          return f(t, n, e)
        }
        decode(t) {
          let e = this.length
          ;-1 === e &&
            ((e = t.readValue().toNumber()),
            32 * e > t._data.length &&
              l.throwError('insufficient data length', o.b.errors.BUFFER_OVERRUN, { length: t._data.length, count: e }))
          let r = []
          for (let t = 0; t < e; t++) r.push(new h(this.coder))
          return t.coerce(this.name, d(t, r))
        }
      }
      class m extends a.a {
        constructor(t) {
          super('bool', 'bool', t, !1)
        }
        defaultValue() {
          return !1
        }
        encode(t, e) {
          return t.writeValue(e ? 1 : 0)
        }
        decode(t) {
          return t.coerce(this.type, !t.readValue().isZero())
        }
      }
      class g extends a.a {
        constructor(t, e) {
          super(t, t, e, !0)
        }
        defaultValue() {
          return '0x'
        }
        encode(t, e) {
          e = Object(n.a)(e)
          let r = t.writeValue(e.length)
          return (r += t.writeBytes(e)), r
        }
        decode(t) {
          return t.readBytes(t.readValue().toNumber(), !0)
        }
      }
      class b extends g {
        constructor(t) {
          super('bytes', t)
        }
        decode(t) {
          return t.coerce(this.name, Object(n.i)(super.decode(t)))
        }
      }
      class y extends a.a {
        constructor(t, e) {
          let r = 'bytes' + String(t)
          super(r, r, e, !1), (this.size = t)
        }
        defaultValue() {
          return '0x0000000000000000000000000000000000000000000000000000000000000000'.substring(0, 2 + 2 * this.size)
        }
        encode(t, e) {
          let r = Object(n.a)(e)
          return r.length !== this.size && this._throwError('incorrect data length', e), t.writeBytes(r)
        }
        decode(t) {
          return t.coerce(this.name, Object(n.i)(t.readBytes(this.size)))
        }
      }
      class v extends a.a {
        constructor(t) {
          super('null', '', t, !1)
        }
        defaultValue() {
          return null
        }
        encode(t, e) {
          return null != e && this._throwError('not null', e), t.writeBytes([])
        }
        decode(t) {
          return t.readBytes(0), t.coerce(this.name, null)
        }
      }
      var w = r(7),
        A = r(26)
      class E extends a.a {
        constructor(t, e, r) {
          const n = (e ? 'int' : 'uint') + 8 * t
          super(n, n, r, !1), (this.size = t), (this.signed = e)
        }
        defaultValue() {
          return 0
        }
        encode(t, e) {
          let r = w.a.from(e),
            n = A.b.mask(8 * t.wordSize)
          if (this.signed) {
            let t = n.mask(8 * this.size - 1)
            ;(r.gt(t) || r.lt(t.add(A.e).mul(A.d))) && this._throwError('value out-of-bounds', e)
          } else (r.lt(A.h) || r.gt(n.mask(8 * this.size))) && this._throwError('value out-of-bounds', e)
          return (
            (r = r.toTwos(8 * this.size).mask(8 * this.size)),
            this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * t.wordSize)),
            t.writeValue(r)
          )
        }
        decode(t) {
          let e = t.readValue().mask(8 * this.size)
          return this.signed && (e = e.fromTwos(8 * this.size)), t.coerce(this.name, e)
        }
      }
      var O = r(16)
      class M extends g {
        constructor(t) {
          super('string', t)
        }
        defaultValue() {
          return ''
        }
        encode(t, e) {
          return super.encode(t, Object(O.f)(e))
        }
        decode(t) {
          return Object(O.h)(super.decode(t))
        }
      }
      class k extends a.a {
        constructor(t, e) {
          let r = !1
          const n = []
          t.forEach(t => {
            t.dynamic && (r = !0), n.push(t.type)
          })
          super('tuple', 'tuple(' + n.join(',') + ')', e, r), (this.coders = t)
        }
        defaultValue() {
          const t = []
          this.coders.forEach(e => {
            t.push(e.defaultValue())
          })
          const e = this.coders.reduce((t, e) => {
            const r = e.localName
            return r && (t[r] || (t[r] = 0), t[r]++), t
          }, {})
          return (
            this.coders.forEach((r, n) => {
              let i = r.localName
              i && 1 === e[i] && ('length' === i && (i = '_length'), null == t[i] && (t[i] = t[n]))
            }),
            Object.freeze(t)
          )
        }
        encode(t, e) {
          return f(t, this.coders, e)
        }
        decode(t) {
          return t.coerce(this.name, d(t, this.coders))
        }
      }
      var _ = r(18)
      const S = new o.b(s.a),
        j = new RegExp(/^bytes([0-9]*)$/),
        N = new RegExp(/^(u?int)([0-9]*)$/)
      class P {
        constructor(t) {
          Object(i.d)(this, 'coerceFunc', t || null)
        }
        _getCoder(t) {
          switch (t.baseType) {
            case 'address':
              return new c(t.name)
            case 'bool':
              return new m(t.name)
            case 'string':
              return new M(t.name)
            case 'bytes':
              return new b(t.name)
            case 'array':
              return new p(this._getCoder(t.arrayChildren), t.arrayLength, t.name)
            case 'tuple':
              return new k(
                (t.components || []).map(t => this._getCoder(t)),
                t.name,
              )
            case '':
              return new v(t.name)
          }
          let e = t.type.match(N)
          if (e) {
            let r = parseInt(e[2] || '256')
            return (
              (0 === r || r > 256 || r % 8 != 0) && S.throwArgumentError('invalid ' + e[1] + ' bit length', 'param', t),
              new E(r / 8, 'int' === e[1], t.name)
            )
          }
          if (((e = t.type.match(j)), e)) {
            let r = parseInt(e[1])
            return (0 === r || r > 32) && S.throwArgumentError('invalid bytes length', 'param', t), new y(r, t.name)
          }
          return S.throwArgumentError('invalid type', 'type', t.type)
        }
        _getWordSize() {
          return 32
        }
        _getReader(t, e) {
          return new a.b(t, this._getWordSize(), this.coerceFunc, e)
        }
        _getWriter() {
          return new a.c(this._getWordSize())
        }
        getDefaultValue(t) {
          const e = t.map(t => this._getCoder(_.g.from(t)))
          return new k(e, '_').defaultValue()
        }
        encode(t, e) {
          t.length !== e.length &&
            S.throwError('types/values length mismatch', o.b.errors.INVALID_ARGUMENT, {
              count: { types: t.length, values: e.length },
              value: { types: t, values: e },
            })
          const r = t.map(t => this._getCoder(_.g.from(t))),
            n = new k(r, '_'),
            i = this._getWriter()
          return n.encode(i, e), i.data
        }
        decode(t, e, r) {
          const i = t.map(t => this._getCoder(_.g.from(t)))
          return new k(i, '_').decode(this._getReader(Object(n.a)(e), r))
        }
      }
      const x = new P()
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'b', function() {
        return c
      }),
        r.d(e, 'c', function() {
          return h
        }),
        r.d(e, 'd', function() {
          return l
        }),
        r.d(e, 'a', function() {
          return f
        })
      var n = r(14),
        i = r.n(n),
        o = r(0),
        s = r(81),
        a = r(2)
      const u = new a.b('sha2/5.7.0')
      function c(t) {
        return (
          '0x' +
          i.a
            .ripemd160()
            .update(Object(o.a)(t))
            .digest('hex')
        )
      }
      function h(t) {
        return (
          '0x' +
          i.a
            .sha256()
            .update(Object(o.a)(t))
            .digest('hex')
        )
      }
      function l(t) {
        return (
          '0x' +
          i.a
            .sha512()
            .update(Object(o.a)(t))
            .digest('hex')
        )
      }
      function f(t, e, r) {
        return (
          s.a[t] ||
            u.throwError('unsupported algorithm ' + t, a.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'hmac',
              algorithm: t,
            }),
          '0x' +
            i.a
              .hmac(i.a[t], Object(o.a)(e))
              .update(Object(o.a)(r))
              .digest('hex')
        )
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e) {
      t.exports = require('punycode')
    },
    ,
    ,
    function(t, e, r) {
      try {
        var n = r(40)
        if ('function' != typeof n.inherits) throw ''
        t.exports = n.inherits
      } catch (e) {
        t.exports = r(94)
      }
    },
    function(t, e) {
      'function' == typeof Object.create
        ? (t.exports = function(t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
              })))
          })
        : (t.exports = function(t, e) {
            if (e) {
              t.super_ = e
              var r = function() {}
              ;(r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t)
            }
          })
    },
    function(t, e, r) {
      'use strict'
      ;(e.sha1 = r(96)), (e.sha224 = r(97)), (e.sha256 = r(71)), (e.sha384 = r(98)), (e.sha512 = r(72))
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(41),
        o = r(70),
        s = n.rotl32,
        a = n.sum32,
        u = n.sum32_5,
        c = o.ft_1,
        h = i.BlockHash,
        l = [1518500249, 1859775393, 2400959708, 3395469782]
      function f() {
        if (!(this instanceof f)) return new f()
        h.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.W = new Array(80))
      }
      n.inherits(f, h),
        (t.exports = f),
        (f.blockSize = 512),
        (f.outSize = 160),
        (f.hmacStrength = 80),
        (f.padLength = 64),
        (f.prototype._update = function(t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n]
          for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1)
          var i = this.h[0],
            o = this.h[1],
            h = this.h[2],
            f = this.h[3],
            d = this.h[4]
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              m = u(s(i, 5), c(p, o, h, f), d, r[n], l[p])
            ;(d = f), (f = h), (h = s(o, 30)), (o = i), (i = m)
          }
          ;(this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], h)),
            (this.h[3] = a(this.h[3], f)),
            (this.h[4] = a(this.h[4], d))
        }),
        (f.prototype._digest = function(t) {
          return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(71)
      function o() {
        if (!(this instanceof o)) return new o()
        i.call(this),
          (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function(t) {
          return 'hex' === t ? n.toHex32(this.h.slice(0, 7), 'big') : n.split32(this.h.slice(0, 7), 'big')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(72)
      function o() {
        if (!(this instanceof o)) return new o()
        i.call(this),
          (this.h = [
            3418070365,
            3238371032,
            1654270250,
            914150663,
            2438529370,
            812702999,
            355462360,
            4144912697,
            1731405415,
            4290775857,
            2394180231,
            1750603025,
            3675008525,
            1694076839,
            1203062813,
            3204075428,
          ])
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function(t) {
          return 'hex' === t ? n.toHex32(this.h.slice(0, 12), 'big') : n.split32(this.h.slice(0, 12), 'big')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(41),
        o = n.rotl32,
        s = n.sum32,
        a = n.sum32_3,
        u = n.sum32_4,
        c = i.BlockHash
      function h() {
        if (!(this instanceof h)) return new h()
        c.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.endian = 'little')
      }
      function l(t, e, r, n) {
        return t <= 15
          ? e ^ r ^ n
          : t <= 31
          ? (e & r) | (~e & n)
          : t <= 47
          ? (e | ~r) ^ n
          : t <= 63
          ? (e & n) | (r & ~n)
          : e ^ (r | ~n)
      }
      function f(t) {
        return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
      }
      function d(t) {
        return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
      }
      n.inherits(h, c),
        (e.ripemd160 = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 192),
        (h.padLength = 64),
        (h.prototype._update = function(t, e) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              c = this.h[3],
              h = this.h[4],
              y = r,
              v = n,
              w = i,
              A = c,
              E = h,
              O = 0;
            O < 80;
            O++
          ) {
            var M = s(o(u(r, l(O, n, i, c), t[p[O] + e], f(O)), g[O]), h)
            ;(r = h),
              (h = c),
              (c = o(i, 10)),
              (i = n),
              (n = M),
              (M = s(o(u(y, l(79 - O, v, w, A), t[m[O] + e], d(O)), b[O]), E)),
              (y = E),
              (E = A),
              (A = o(w, 10)),
              (w = v),
              (v = M)
          }
          ;(M = a(this.h[1], i, A)),
            (this.h[1] = a(this.h[2], c, E)),
            (this.h[2] = a(this.h[3], h, y)),
            (this.h[3] = a(this.h[4], r, v)),
            (this.h[4] = a(this.h[0], n, w)),
            (this.h[0] = M)
        }),
        (h.prototype._digest = function(t) {
          return 'hex' === t ? n.toHex32(this.h, 'little') : n.split32(this.h, 'little')
        })
      var p = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13,
        ],
        m = [
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11,
        ],
        g = [
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6,
        ],
        b = [
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11,
        ]
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(39)
      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r)
        ;(this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(e, r))
      }
      ;(t.exports = o),
        (o.prototype._init = function(t) {
          t.length > this.blockSize && (t = new this.Hash().update(t).digest()), i(t.length <= this.blockSize)
          for (var e = t.length; e < this.blockSize; e++) t.push(0)
          for (e = 0; e < t.length; e++) t[e] ^= 54
          for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++) t[e] ^= 106
          this.outer = new this.Hash().update(t)
        }),
        (o.prototype.update = function(t, e) {
          return this.inner.update(t, e), this
        }),
        (o.prototype.digest = function(t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t)
        })
    },
    function(t, e) {
      ;(function(e) {
        t.exports = e
      }.call(this, {}))
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, r) {
      'use strict'
      var n = r(36)
      r.d(e, 'a', function() {
        return n
      })
      try {
        const t = window
        null == t._ethers && (t._ethers = n)
      } catch (t) {}
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return o
      })
      var n = r(0),
        i = r(83)
      function o(t, e, r, o, s) {
        let a
        ;(t = Object(n.a)(t)), (e = Object(n.a)(e))
        let u = 1
        const c = new Uint8Array(o),
          h = new Uint8Array(e.length + 4)
        let l, f
        h.set(e)
        for (let d = 1; d <= u; d++) {
          ;(h[e.length] = (d >> 24) & 255),
            (h[e.length + 1] = (d >> 16) & 255),
            (h[e.length + 2] = (d >> 8) & 255),
            (h[e.length + 3] = 255 & d)
          let p = Object(n.a)(Object(i.a)(s, t, h))
          a || ((a = p.length), (f = new Uint8Array(a)), (u = Math.ceil(o / a)), (l = o - (u - 1) * a)), f.set(p)
          for (let e = 1; e < r; e++) {
            p = Object(n.a)(Object(i.a)(s, t, p))
            for (let t = 0; t < a; t++) f[t] ^= p[t]
          }
          const m = (d - 1) * a,
            g = d === u ? l : a
          c.set(Object(n.a)(f).slice(0, g), m)
        }
        return Object(n.i)(c)
      }
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse(
        '{"a":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"UserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"UserRemoved","type":"event"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"addUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isVerifiedUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}',
      )
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t) {
      t.exports = JSON.parse('{}')
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'b', function() {
        return p
      }),
        r.d(e, 'c', function() {
          return m
        }),
        r.d(e, 'a', function() {
          return b
        })
      var n = r(0),
        i = r(2),
        o = r(52),
        s = r(7)
      const a = new i.b(o.a),
        u = {},
        c = s.a.from(0),
        h = s.a.from(-1)
      function l(t, e, r, n) {
        const o = { fault: e, operation: r }
        return void 0 !== n && (o.value = n), a.throwError(t, i.b.errors.NUMERIC_FAULT, o)
      }
      let f = '0'
      for (; f.length < 256; ) f += f
      function d(t) {
        if ('number' != typeof t)
          try {
            t = s.a.from(t).toNumber()
          } catch (t) {}
        return 'number' == typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? '1' + f.substring(0, t)
          : a.throwArgumentError('invalid decimal size', 'decimals', t)
      }
      function p(t, e) {
        null == e && (e = 0)
        const r = d(e),
          n = (t = s.a.from(t)).lt(c)
        n && (t = t.mul(h))
        let i = t.mod(r).toString()
        for (; i.length < r.length - 1; ) i = '0' + i
        i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1]
        const o = t.div(r).toString()
        return (t = 1 === r.length ? o : o + '.' + i), n && (t = '-' + t), t
      }
      function m(t, e) {
        null == e && (e = 0)
        const r = d(e)
        ;('string' == typeof t && t.match(/^-?[0-9.]+$/)) || a.throwArgumentError('invalid decimal value', 'value', t)
        const n = '-' === t.substring(0, 1)
        n && (t = t.substring(1)), '.' === t && a.throwArgumentError('missing value', 'value', t)
        const i = t.split('.')
        i.length > 2 && a.throwArgumentError('too many decimal points', 'value', t)
        let o = i[0],
          u = i[1]
        for (o || (o = '0'), u || (u = '0'); '0' === u[u.length - 1]; ) u = u.substring(0, u.length - 1)
        for (
          u.length > r.length - 1 && l('fractional component exceeds decimals', 'underflow', 'parseFixed'),
            '' === u && (u = '0');
          u.length < r.length - 1;

        )
          u += '0'
        const c = s.a.from(o),
          f = s.a.from(u)
        let p = c.mul(r).add(f)
        return n && (p = p.mul(h)), p
      }
      class g {
        constructor(t, e, r, n) {
          t !== u &&
            a.throwError('cannot use FixedFormat constructor; use FixedFormat.from', i.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'new FixedFormat',
            }),
            (this.signed = e),
            (this.width = r),
            (this.decimals = n),
            (this.name = (e ? '' : 'u') + 'fixed' + String(r) + 'x' + String(n)),
            (this._multiplier = d(n)),
            Object.freeze(this)
        }
        static from(t) {
          if (t instanceof g) return t
          'number' == typeof t && (t = 'fixed128x' + t)
          let e = !0,
            r = 128,
            n = 18
          if ('string' == typeof t)
            if ('fixed' === t);
            else if ('ufixed' === t) e = !1
            else {
              const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/)
              i || a.throwArgumentError('invalid fixed format', 'format', t),
                (e = 'u' !== i[1]),
                (r = parseInt(i[2])),
                (n = parseInt(i[3]))
            }
          else if (t) {
            const i = (e, r, n) =>
              null == t[e]
                ? n
                : (typeof t[e] !== r &&
                    a.throwArgumentError('invalid fixed format (' + e + ' not ' + r + ')', 'format.' + e, t[e]),
                  t[e])
            ;(e = i('signed', 'boolean', e)), (r = i('width', 'number', r)), (n = i('decimals', 'number', n))
          }
          return (
            r % 8 && a.throwArgumentError('invalid fixed format width (not byte aligned)', 'format.width', r),
            n > 80 && a.throwArgumentError('invalid fixed format (decimals too large)', 'format.decimals', n),
            new g(u, e, r, n)
          )
        }
      }
      class b {
        constructor(t, e, r, n) {
          t !== u &&
            a.throwError('cannot use FixedNumber constructor; use FixedNumber.from', i.b.errors.UNSUPPORTED_OPERATION, {
              operation: 'new FixedFormat',
            }),
            (this.format = n),
            (this._hex = e),
            (this._value = r),
            (this._isFixedNumber = !0),
            Object.freeze(this)
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            a.throwArgumentError('incompatible format; use fixedNumber.toFormat', 'other', t)
        }
        addUnsafe(t) {
          this._checkFormat(t)
          const e = m(this._value, this.format.decimals),
            r = m(t._value, t.format.decimals)
          return b.fromValue(e.add(r), this.format.decimals, this.format)
        }
        subUnsafe(t) {
          this._checkFormat(t)
          const e = m(this._value, this.format.decimals),
            r = m(t._value, t.format.decimals)
          return b.fromValue(e.sub(r), this.format.decimals, this.format)
        }
        mulUnsafe(t) {
          this._checkFormat(t)
          const e = m(this._value, this.format.decimals),
            r = m(t._value, t.format.decimals)
          return b.fromValue(e.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
        }
        divUnsafe(t) {
          this._checkFormat(t)
          const e = m(this._value, this.format.decimals),
            r = m(t._value, t.format.decimals)
          return b.fromValue(e.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
        }
        floor() {
          const t = this.toString().split('.')
          1 === t.length && t.push('0')
          let e = b.from(t[0], this.format)
          const r = !t[1].match(/^(0*)$/)
          return this.isNegative() && r && (e = e.subUnsafe(y.toFormat(e.format))), e
        }
        ceiling() {
          const t = this.toString().split('.')
          1 === t.length && t.push('0')
          let e = b.from(t[0], this.format)
          const r = !t[1].match(/^(0*)$/)
          return !this.isNegative() && r && (e = e.addUnsafe(y.toFormat(e.format))), e
        }
        round(t) {
          null == t && (t = 0)
          const e = this.toString().split('.')
          if (
            (1 === e.length && e.push('0'),
            (t < 0 || t > 80 || t % 1) && a.throwArgumentError('invalid decimal count', 'decimals', t),
            e[1].length <= t)
          )
            return this
          const r = b.from('1' + f.substring(0, t), this.format),
            n = v.toFormat(this.format)
          return this.mulUnsafe(r)
            .addUnsafe(n)
            .floor()
            .divUnsafe(r)
        }
        isZero() {
          return '0.0' === this._value || '0' === this._value
        }
        isNegative() {
          return '-' === this._value[0]
        }
        toString() {
          return this._value
        }
        toHexString(t) {
          if (null == t) return this._hex
          t % 8 && a.throwArgumentError('invalid byte width', 'width', t)
          const e = s.a
            .from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(t)
            .toHexString()
          return Object(n.h)(e, t / 8)
        }
        toUnsafeFloat() {
          return parseFloat(this.toString())
        }
        toFormat(t) {
          return b.fromString(this._value, t)
        }
        static fromValue(t, e, r) {
          return (
            null != r || null == e || Object(s.d)(e) || ((r = e), (e = null)),
            null == e && (e = 0),
            null == r && (r = 'fixed'),
            b.fromString(p(t, e), g.from(r))
          )
        }
        static fromString(t, e) {
          null == e && (e = 'fixed')
          const r = g.from(e),
            i = m(t, r.decimals)
          !r.signed && i.lt(c) && l('unsigned value cannot be negative', 'overflow', 'value', t)
          let o = null
          r.signed ? (o = i.toTwos(r.width).toHexString()) : ((o = i.toHexString()), (o = Object(n.h)(o, r.width / 8)))
          const s = p(i, r.decimals)
          return new b(u, o, s, r)
        }
        static fromBytes(t, e) {
          null == e && (e = 'fixed')
          const r = g.from(e)
          if (Object(n.a)(t).length > r.width / 8) throw new Error('overflow')
          let i = s.a.from(t)
          r.signed && (i = i.fromTwos(r.width))
          const o = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
            a = p(i, r.decimals)
          return new b(u, o, a, r)
        }
        static from(t, e) {
          if ('string' == typeof t) return b.fromString(t, e)
          if (Object(n.j)(t)) return b.fromBytes(t, e)
          try {
            return b.fromValue(t, 0, e)
          } catch (t) {
            if (t.code !== i.b.errors.INVALID_ARGUMENT) throw t
          }
          return a.throwArgumentError('invalid FixedNumber value', 'value', t)
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber)
        }
      }
      const y = b.from(1),
        v = b.from('0.5')
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return u
      })
      var n = r(49)
      let i = null
      function o(t) {
        if (
          null == i &&
          ((i = 'AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo'
            .replace(/([A-Z])/g, ' $1')
            .toLowerCase()
            .substring(1)
            .split(' ')),
          '0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60' !== n.a.check(t))
        )
          throw ((i = null), new Error('BIP39 Wordlist for en (English) FAILED'))
      }
      class s extends n.a {
        constructor() {
          super('en')
        }
        getWord(t) {
          return o(this), i[t]
        }
        getWordIndex(t) {
          return o(this), i.indexOf(t)
        }
      }
      const a = new s()
      n.a.register(a)
      const u = { en: a }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return s
      })
      var n = r(0),
        i = r(5),
        o = r(16)
      function s(t) {
        return (
          'string' == typeof t && (t = Object(o.f)(t)),
          Object(i.a)(Object(n.b)([Object(o.f)('Ethereum Signed Message:\n'), Object(o.f)(String(t.length)), t]))
        )
      }
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'a', function() {
        return _
      })
      var n = r(4),
        i = r(7),
        o = r(0),
        s = r(5),
        a = r(1),
        u = r(2),
        c = r(53),
        h = r(31),
        l = function(t, e, r, n) {
          return new (r || (r = Promise))(function(i, o) {
            function s(t) {
              try {
                u(n.next(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              try {
                u(n.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function u(t) {
              var e
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function(t) {
                        t(e)
                      })).then(s, a)
            }
            u((n = n.apply(t, e || [])).next())
          })
        }
      const f = new u.b(c.a),
        d = new Uint8Array(32)
      d.fill(0)
      const p = i.a.from(-1),
        m = i.a.from(0),
        g = i.a.from(1),
        b = i.a.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
      const y = Object(o.h)(g.toHexString(), 32),
        v = Object(o.h)(m.toHexString(), 32),
        w = { name: 'string', version: 'string', chainId: 'uint256', verifyingContract: 'address', salt: 'bytes32' },
        A = ['name', 'version', 'chainId', 'verifyingContract', 'salt']
      function E(t) {
        return function(e) {
          return (
            'string' != typeof e &&
              f.throwArgumentError('invalid domain value for ' + JSON.stringify(t), 'domain.' + t, e),
            e
          )
        }
      }
      const O = {
        name: E('name'),
        version: E('version'),
        chainId: function(t) {
          try {
            return i.a.from(t).toString()
          } catch (t) {}
          return f.throwArgumentError('invalid domain value for "chainId"', 'domain.chainId', t)
        },
        verifyingContract: function(t) {
          try {
            return Object(n.a)(t).toLowerCase()
          } catch (t) {}
          return f.throwArgumentError('invalid domain value "verifyingContract"', 'domain.verifyingContract', t)
        },
        salt: function(t) {
          try {
            const e = Object(o.a)(t)
            if (32 !== e.length) throw new Error('bad length')
            return Object(o.i)(e)
          } catch (t) {}
          return f.throwArgumentError('invalid domain value "salt"', 'domain.salt', t)
        },
      }
      function M(t) {
        {
          const e = t.match(/^(u?)int(\d*)$/)
          if (e) {
            const r = '' === e[1],
              n = parseInt(e[2] || '256')
            ;(n % 8 != 0 || n > 256 || (e[2] && e[2] !== String(n))) &&
              f.throwArgumentError('invalid numeric width', 'type', t)
            const s = b.mask(r ? n - 1 : n),
              a = r ? s.add(g).mul(p) : m
            return function(e) {
              const r = i.a.from(e)
              return (
                (r.lt(a) || r.gt(s)) && f.throwArgumentError('value out-of-bounds for ' + t, 'value', e),
                Object(o.h)(r.toTwos(256).toHexString(), 32)
              )
            }
          }
        }
        {
          const e = t.match(/^bytes(\d+)$/)
          if (e) {
            const r = parseInt(e[1])
            return (
              (0 === r || r > 32 || e[1] !== String(r)) && f.throwArgumentError('invalid bytes width', 'type', t),
              function(e) {
                return (
                  Object(o.a)(e).length !== r && f.throwArgumentError('invalid length for ' + t, 'value', e),
                  (function(t) {
                    const e = Object(o.a)(t),
                      r = e.length % 32
                    return r ? Object(o.c)([e, d.slice(r)]) : Object(o.i)(e)
                  })(e)
                )
              }
            )
          }
        }
        switch (t) {
          case 'address':
            return function(t) {
              return Object(o.h)(Object(n.a)(t), 32)
            }
          case 'bool':
            return function(t) {
              return t ? y : v
            }
          case 'bytes':
            return function(t) {
              return Object(s.a)(t)
            }
          case 'string':
            return function(t) {
              return Object(h.a)(t)
            }
        }
        return null
      }
      function k(t, e) {
        return `${t}(${e.map(({ name: t, type: e }) => e + ' ' + t).join(',')})`
      }
      class _ {
        constructor(t) {
          Object(a.d)(this, 'types', Object.freeze(Object(a.c)(t))),
            Object(a.d)(this, '_encoderCache', {}),
            Object(a.d)(this, '_types', {})
          const e = {},
            r = {},
            n = {}
          Object.keys(t).forEach(t => {
            ;(e[t] = {}), (r[t] = []), (n[t] = {})
          })
          for (const n in t) {
            const i = {}
            t[n].forEach(o => {
              i[o.name] &&
                f.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(n)}`,
                  'types',
                  t,
                ),
                (i[o.name] = !0)
              const s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1]
              s === n && f.throwArgumentError('circular type reference to ' + JSON.stringify(s), 'types', t)
              M(s) ||
                (r[s] || f.throwArgumentError('unknown type ' + JSON.stringify(s), 'types', t),
                r[s].push(n),
                (e[n][s] = !0))
            })
          }
          const i = Object.keys(r).filter(t => 0 === r[t].length)
          0 === i.length
            ? f.throwArgumentError('missing primary type', 'types', t)
            : i.length > 1 &&
              f.throwArgumentError(
                'ambiguous primary types or unused types: ' + i.map(t => JSON.stringify(t)).join(', '),
                'types',
                t,
              ),
            Object(a.d)(this, 'primaryType', i[0]),
            (function i(o, s) {
              s[o] && f.throwArgumentError('circular type reference to ' + JSON.stringify(o), 'types', t),
                (s[o] = !0),
                Object.keys(e[o]).forEach(t => {
                  r[t] &&
                    (i(t, s),
                    Object.keys(s).forEach(e => {
                      n[e][t] = !0
                    }))
                }),
                delete s[o]
            })(this.primaryType, {})
          for (const e in n) {
            const r = Object.keys(n[e])
            r.sort(), (this._types[e] = k(e, t[e]) + r.map(e => k(e, t[e])).join(''))
          }
        }
        getEncoder(t) {
          let e = this._encoderCache[t]
          return e || (e = this._encoderCache[t] = this._getEncoder(t)), e
        }
        _getEncoder(t) {
          {
            const e = M(t)
            if (e) return e
          }
          const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/)
          if (e) {
            const t = e[1],
              r = this.getEncoder(t),
              n = parseInt(e[3])
            return e => {
              n >= 0 &&
                e.length !== n &&
                f.throwArgumentError('array length mismatch; expected length ${ arrayLength }', 'value', e)
              let i = e.map(r)
              return this._types[t] && (i = i.map(s.a)), Object(s.a)(Object(o.c)(i))
            }
          }
          const r = this.types[t]
          if (r) {
            const e = Object(h.a)(this._types[t])
            return t => {
              const n = r.map(({ name: e, type: r }) => {
                const n = this.getEncoder(r)(t[e])
                return this._types[r] ? Object(s.a)(n) : n
              })
              return n.unshift(e), Object(o.c)(n)
            }
          }
          return f.throwArgumentError('unknown type: ' + t, 'type', t)
        }
        encodeType(t) {
          const e = this._types[t]
          return e || f.throwArgumentError('unknown type: ' + JSON.stringify(t), 'name', t), e
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e)
        }
        hashStruct(t, e) {
          return Object(s.a)(this.encodeData(t, e))
        }
        encode(t) {
          return this.encodeData(this.primaryType, t)
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t)
        }
        _visit(t, e, r) {
          if (M(t)) return r(t, e)
          const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/)
          if (n) {
            const t = n[1],
              i = parseInt(n[3])
            return (
              i >= 0 &&
                e.length !== i &&
                f.throwArgumentError('array length mismatch; expected length ${ arrayLength }', 'value', e),
              e.map(e => this._visit(t, e, r))
            )
          }
          const i = this.types[t]
          return i
            ? i.reduce((t, { name: n, type: i }) => ((t[n] = this._visit(i, e[n], r)), t), {})
            : f.throwArgumentError('unknown type: ' + t, 'type', t)
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e)
        }
        static from(t) {
          return new _(t)
        }
        static getPrimaryType(t) {
          return _.from(t).primaryType
        }
        static hashStruct(t, e, r) {
          return _.from(e).hashStruct(t, r)
        }
        static hashDomain(t) {
          const e = []
          for (const r in t) {
            const n = w[r]
            n || f.throwArgumentError('invalid typed-data domain key: ' + JSON.stringify(r), 'domain', t),
              e.push({ name: r, type: n })
          }
          return (
            e.sort((t, e) => A.indexOf(t.name) - A.indexOf(e.name)),
            _.hashStruct('EIP712Domain', { EIP712Domain: e }, t)
          )
        }
        static encode(t, e, r) {
          return Object(o.c)(['0x1901', _.hashDomain(t), _.from(e).hash(r)])
        }
        static hash(t, e, r) {
          return Object(s.a)(_.encode(t, e, r))
        }
        static resolveNames(t, e, r, n) {
          return l(this, void 0, void 0, function*() {
            t = Object(a.g)(t)
            const i = {}
            t.verifyingContract && !Object(o.l)(t.verifyingContract, 20) && (i[t.verifyingContract] = '0x')
            const s = _.from(e)
            s.visit(r, (t, e) => ('address' !== t || Object(o.l)(e, 20) || (i[e] = '0x'), e))
            for (const t in i) i[t] = yield n(t)
            return (
              t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]),
              (r = s.visit(r, (t, e) => ('address' === t && i[e] ? i[e] : e))),
              { domain: t, value: r }
            )
          })
        }
        static getPayload(t, e, r) {
          _.hashDomain(t)
          const n = {},
            s = []
          A.forEach(e => {
            const r = t[e]
            null != r && ((n[e] = O[e](r)), s.push({ name: e, type: w[e] }))
          })
          const u = _.from(e),
            c = Object(a.g)(e)
          return (
            c.EIP712Domain
              ? f.throwArgumentError('types must not contain EIP712Domain type', 'types.EIP712Domain', e)
              : (c.EIP712Domain = s),
            u.encode(r),
            {
              types: c,
              domain: n,
              primaryType: u.primaryType,
              message: u.visit(r, (t, e) => {
                if (t.match(/^bytes(\d*)/)) return Object(o.i)(Object(o.a)(e))
                if (t.match(/^u?int/)) return i.a.from(e).toString()
                switch (t) {
                  case 'address':
                    return e.toLowerCase()
                  case 'bool':
                    return !!e
                  case 'string':
                    return 'string' != typeof e && f.throwArgumentError('invalid string', 'value', e), e
                }
                return f.throwArgumentError('unsupported type', 'type', t)
              }),
            }
          )
        }
      }
    },
    function(t, e, r) {
      'use strict'
      function n(t) {
        for (let e = (t = t.slice()).length - 1; e > 0; e--) {
          const r = Math.floor(Math.random() * (e + 1)),
            n = t[e]
          ;(t[e] = t[r]), (t[r] = n)
        }
        return t
      }
      r.d(e, 'a', function() {
        return n
      })
    },
    function(t, e, r) {
      'use strict'
      r.d(e, 'c', function() {
        return p
      }),
        r.d(e, 'd', function() {
          return m
        }),
        r.d(e, 'a', function() {
          return b
        }),
        r.d(e, 'b', function() {
          return w
        })
      var n = r(4),
        i = r(7),
        o = r(0),
        s = r(31),
        a = r(5),
        u = r(1),
        c = r(82),
        h = r(18),
        l = r(2),
        f = r(25)
      const d = new l.b(f.a)
      class p extends u.a {}
      class m extends u.a {}
      class g extends u.a {}
      class b extends u.a {
        static isIndexed(t) {
          return !(!t || !t._isIndexed)
        }
      }
      const y = {
        '0x08c379a0': { signature: 'Error(string)', name: 'Error', inputs: ['string'], reason: !0 },
        '0x4e487b71': { signature: 'Panic(uint256)', name: 'Panic', inputs: ['uint256'] },
      }
      function v(t, e) {
        const r = new Error('deferred error during ABI decoding triggered accessing ' + t)
        return (r.error = e), r
      }
      class w {
        constructor(t) {
          let e = []
          ;(e = 'string' == typeof t ? JSON.parse(t) : t),
            Object(u.d)(
              this,
              'fragments',
              e.map(t => h.e.from(t)).filter(t => null != t),
            ),
            Object(u.d)(this, '_abiCoder', Object(u.e)(new.target, 'getAbiCoder')()),
            Object(u.d)(this, 'functions', {}),
            Object(u.d)(this, 'errors', {}),
            Object(u.d)(this, 'events', {}),
            Object(u.d)(this, 'structs', {}),
            this.fragments.forEach(t => {
              let e = null
              switch (t.type) {
                case 'constructor':
                  return this.deploy
                    ? void d.warn('duplicate definition - constructor')
                    : void Object(u.d)(this, 'deploy', t)
                case 'function':
                  e = this.functions
                  break
                case 'event':
                  e = this.events
                  break
                case 'error':
                  e = this.errors
                  break
                default:
                  return
              }
              let r = t.format()
              e[r] ? d.warn('duplicate definition - ' + r) : (e[r] = t)
            }),
            this.deploy || Object(u.d)(this, 'deploy', h.a.from({ payable: !1, type: 'constructor' })),
            Object(u.d)(this, '_isInterface', !0)
        }
        format(t) {
          t || (t = h.d.full),
            t === h.d.sighash && d.throwArgumentError('interface does not support formatting sighash', 'format', t)
          const e = this.fragments.map(e => e.format(t))
          return t === h.d.json ? JSON.stringify(e.map(t => JSON.parse(t))) : e
        }
        static getAbiCoder() {
          return c.b
        }
        static getAddress(t) {
          return Object(n.a)(t)
        }
        static getSighash(t) {
          return Object(o.e)(Object(s.a)(t.format()), 0, 4)
        }
        static getEventTopic(t) {
          return Object(s.a)(t.format())
        }
        getFunction(t) {
          if (Object(o.l)(t)) {
            for (const e in this.functions) if (t === this.getSighash(e)) return this.functions[e]
            d.throwArgumentError('no matching function', 'sighash', t)
          }
          if (-1 === t.indexOf('(')) {
            const e = t.trim(),
              r = Object.keys(this.functions).filter(t => t.split('(')[0] === e)
            return (
              0 === r.length
                ? d.throwArgumentError('no matching function', 'name', e)
                : r.length > 1 && d.throwArgumentError('multiple matching functions', 'name', e),
              this.functions[r[0]]
            )
          }
          const e = this.functions[h.f.fromString(t).format()]
          return e || d.throwArgumentError('no matching function', 'signature', t), e
        }
        getEvent(t) {
          if (Object(o.l)(t)) {
            const e = t.toLowerCase()
            for (const t in this.events) if (e === this.getEventTopic(t)) return this.events[t]
            d.throwArgumentError('no matching event', 'topichash', e)
          }
          if (-1 === t.indexOf('(')) {
            const e = t.trim(),
              r = Object.keys(this.events).filter(t => t.split('(')[0] === e)
            return (
              0 === r.length
                ? d.throwArgumentError('no matching event', 'name', e)
                : r.length > 1 && d.throwArgumentError('multiple matching events', 'name', e),
              this.events[r[0]]
            )
          }
          const e = this.events[h.c.fromString(t).format()]
          return e || d.throwArgumentError('no matching event', 'signature', t), e
        }
        getError(t) {
          if (Object(o.l)(t)) {
            const e = Object(u.e)(this.constructor, 'getSighash')
            for (const r in this.errors) {
              if (t === e(this.errors[r])) return this.errors[r]
            }
            d.throwArgumentError('no matching error', 'sighash', t)
          }
          if (-1 === t.indexOf('(')) {
            const e = t.trim(),
              r = Object.keys(this.errors).filter(t => t.split('(')[0] === e)
            return (
              0 === r.length
                ? d.throwArgumentError('no matching error', 'name', e)
                : r.length > 1 && d.throwArgumentError('multiple matching errors', 'name', e),
              this.errors[r[0]]
            )
          }
          const e = this.errors[h.f.fromString(t).format()]
          return e || d.throwArgumentError('no matching error', 'signature', t), e
        }
        getSighash(t) {
          if ('string' == typeof t)
            try {
              t = this.getFunction(t)
            } catch (e) {
              try {
                t = this.getError(t)
              } catch (t) {
                throw e
              }
            }
          return Object(u.e)(this.constructor, 'getSighash')(t)
        }
        getEventTopic(t) {
          return 'string' == typeof t && (t = this.getEvent(t)), Object(u.e)(this.constructor, 'getEventTopic')(t)
        }
        _decodeParams(t, e) {
          return this._abiCoder.decode(t, e)
        }
        _encodeParams(t, e) {
          return this._abiCoder.encode(t, e)
        }
        encodeDeploy(t) {
          return this._encodeParams(this.deploy.inputs, t || [])
        }
        decodeErrorResult(t, e) {
          'string' == typeof t && (t = this.getError(t))
          const r = Object(o.a)(e)
          return (
            Object(o.i)(r.slice(0, 4)) !== this.getSighash(t) &&
              d.throwArgumentError(`data signature does not match error ${t.name}.`, 'data', Object(o.i)(r)),
            this._decodeParams(t.inputs, r.slice(4))
          )
        }
        encodeErrorResult(t, e) {
          return (
            'string' == typeof t && (t = this.getError(t)),
            Object(o.i)(Object(o.b)([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
          )
        }
        decodeFunctionData(t, e) {
          'string' == typeof t && (t = this.getFunction(t))
          const r = Object(o.a)(e)
          return (
            Object(o.i)(r.slice(0, 4)) !== this.getSighash(t) &&
              d.throwArgumentError(`data signature does not match function ${t.name}.`, 'data', Object(o.i)(r)),
            this._decodeParams(t.inputs, r.slice(4))
          )
        }
        encodeFunctionData(t, e) {
          return (
            'string' == typeof t && (t = this.getFunction(t)),
            Object(o.i)(Object(o.b)([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
          )
        }
        decodeFunctionResult(t, e) {
          'string' == typeof t && (t = this.getFunction(t))
          let r = Object(o.a)(e),
            n = null,
            i = '',
            s = null,
            a = null,
            u = null
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(t.outputs, r)
              } catch (t) {}
              break
            case 4: {
              const t = Object(o.i)(r.slice(0, 4)),
                e = y[t]
              if (e)
                (s = this._abiCoder.decode(e.inputs, r.slice(4))),
                  (a = e.name),
                  (u = e.signature),
                  e.reason && (n = s[0]),
                  'Error' === a
                    ? (i =
                        '; VM Exception while processing transaction: reverted with reason string ' +
                        JSON.stringify(s[0]))
                    : 'Panic' === a &&
                      (i = '; VM Exception while processing transaction: reverted with panic code ' + s[0])
              else
                try {
                  const e = this.getError(t)
                  ;(s = this._abiCoder.decode(e.inputs, r.slice(4))), (a = e.name), (u = e.format())
                } catch (t) {}
              break
            }
          }
          return d.throwError('call revert exception' + i, l.b.errors.CALL_EXCEPTION, {
            method: t.format(),
            data: Object(o.i)(e),
            errorArgs: s,
            errorName: a,
            errorSignature: u,
            reason: n,
          })
        }
        encodeFunctionResult(t, e) {
          return (
            'string' == typeof t && (t = this.getFunction(t)), Object(o.i)(this._abiCoder.encode(t.outputs, e || []))
          )
        }
        encodeFilterTopics(t, e) {
          'string' == typeof t && (t = this.getEvent(t)),
            e.length > t.inputs.length &&
              d.throwError('too many arguments for ' + t.format(), l.b.errors.UNEXPECTED_ARGUMENT, {
                argument: 'values',
                value: e,
              })
          let r = []
          t.anonymous || r.push(this.getEventTopic(t))
          const n = (t, e) =>
            'string' === t.type
              ? Object(s.a)(e)
              : 'bytes' === t.type
              ? Object(a.a)(Object(o.i)(e))
              : ('bool' === t.type && 'boolean' == typeof e && (e = e ? '0x01' : '0x00'),
                t.type.match(/^u?int/) && (e = i.a.from(e).toHexString()),
                'address' === t.type && this._abiCoder.encode(['address'], [e]),
                Object(o.h)(Object(o.i)(e), 32))
          for (
            e.forEach((e, i) => {
              let o = t.inputs[i]
              o.indexed
                ? null == e
                  ? r.push(null)
                  : 'array' === o.baseType || 'tuple' === o.baseType
                  ? d.throwArgumentError('filtering with tuples or arrays not supported', 'contract.' + o.name, e)
                  : Array.isArray(e)
                  ? r.push(e.map(t => n(o, t)))
                  : r.push(n(o, e))
                : null != e &&
                  d.throwArgumentError('cannot filter non-indexed parameters; must be null', 'contract.' + o.name, e)
            });
            r.length && null === r[r.length - 1];

          )
            r.pop()
          return r
        }
        encodeEventLog(t, e) {
          'string' == typeof t && (t = this.getEvent(t))
          const r = [],
            n = [],
            i = []
          return (
            t.anonymous || r.push(this.getEventTopic(t)),
            e.length !== t.inputs.length && d.throwArgumentError('event arguments/values mismatch', 'values', e),
            t.inputs.forEach((t, o) => {
              const u = e[o]
              if (t.indexed)
                if ('string' === t.type) r.push(Object(s.a)(u))
                else if ('bytes' === t.type) r.push(Object(a.a)(u))
                else {
                  if ('tuple' === t.baseType || 'array' === t.baseType) throw new Error('not implemented')
                  r.push(this._abiCoder.encode([t.type], [u]))
                }
              else n.push(t), i.push(u)
            }),
            { data: this._abiCoder.encode(n, i), topics: r }
          )
        }
        decodeEventLog(t, e, r) {
          if (('string' == typeof t && (t = this.getEvent(t)), null != r && !t.anonymous)) {
            let e = this.getEventTopic(t)
            ;(Object(o.l)(r[0], 32) && r[0].toLowerCase() === e) ||
              d.throwError('fragment/topic mismatch', l.b.errors.INVALID_ARGUMENT, {
                argument: 'topics[0]',
                expected: e,
                value: r[0],
              }),
              (r = r.slice(1))
          }
          let n = [],
            i = [],
            s = []
          t.inputs.forEach((t, e) => {
            t.indexed
              ? 'string' === t.type || 'bytes' === t.type || 'tuple' === t.baseType || 'array' === t.baseType
                ? (n.push(h.g.fromObject({ type: 'bytes32', name: t.name })), s.push(!0))
                : (n.push(t), s.push(!1))
              : (i.push(t), s.push(!1))
          })
          let a = null != r ? this._abiCoder.decode(n, Object(o.b)(r)) : null,
            u = this._abiCoder.decode(i, e, !0),
            c = [],
            f = 0,
            p = 0
          t.inputs.forEach((t, e) => {
            if (t.indexed)
              if (null == a) c[e] = new b({ _isIndexed: !0, hash: null })
              else if (s[e]) c[e] = new b({ _isIndexed: !0, hash: a[p++] })
              else
                try {
                  c[e] = a[p++]
                } catch (t) {
                  c[e] = t
                }
            else
              try {
                c[e] = u[f++]
              } catch (t) {
                c[e] = t
              }
            if (t.name && null == c[t.name]) {
              const r = c[e]
              r instanceof Error
                ? Object.defineProperty(c, t.name, {
                    enumerable: !0,
                    get: () => {
                      throw v('property ' + JSON.stringify(t.name), r)
                    },
                  })
                : (c[t.name] = r)
            }
          })
          for (let t = 0; t < c.length; t++) {
            const e = c[t]
            e instanceof Error &&
              Object.defineProperty(c, t, {
                enumerable: !0,
                get: () => {
                  throw v('index ' + t, e)
                },
              })
          }
          return Object.freeze(c)
        }
        parseTransaction(t) {
          let e = this.getFunction(t.data.substring(0, 10).toLowerCase())
          return e
            ? new m({
                args: this._abiCoder.decode(e.inputs, '0x' + t.data.substring(10)),
                functionFragment: e,
                name: e.name,
                signature: e.format(),
                sighash: this.getSighash(e),
                value: i.a.from(t.value || '0'),
              })
            : null
        }
        parseLog(t) {
          let e = this.getEvent(t.topics[0])
          return !e || e.anonymous
            ? null
            : new p({
                eventFragment: e,
                name: e.name,
                signature: e.format(),
                topic: this.getEventTopic(e),
                args: this.decodeEventLog(e, t.data, t.topics),
              })
        }
        parseError(t) {
          const e = Object(o.i)(t)
          let r = this.getError(e.substring(0, 10).toLowerCase())
          return r
            ? new g({
                args: this._abiCoder.decode(r.inputs, '0x' + e.substring(10)),
                errorFragment: r,
                name: r.name,
                signature: r.format(),
                sighash: this.getSighash(r),
              })
            : null
        }
        static isInterface(t) {
          return !(!t || !t._isInterface)
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, r) {
      'use strict'
      r.d(e, 'b', function() {
        return C
      }),
        r.d(e, 'c', function() {
          return T
        }),
        r.d(e, 'a', function() {
          return R
        })
      var n = r(0),
        i = r(16),
        o = r(5),
        s = r(2),
        a = r(53),
        u = r(61)
      function c(t, e) {
        null == e && (e = 1)
        const r = [],
          n = r.forEach,
          i = function(t, e) {
            n.call(t, function(t) {
              e > 0 && Array.isArray(t) ? i(t, e - 1) : r.push(t)
            })
          }
        return i(t, e), r
      }
      function h(t) {
        return (function(t) {
          let e = 0
          return () => t[e++]
        })(
          (function(t) {
            let e = 0
            function r() {
              return (t[e++] << 8) | t[e++]
            }
            let n = r(),
              i = 1,
              o = [0, 1]
            for (let t = 1; t < n; t++) o.push((i += r()))
            let s = r(),
              a = e
            e += s
            let u = 0,
              c = 0
            function h() {
              return 0 == u && ((c = (c << 8) | t[e++]), (u = 8)), (c >> --u) & 1
            }
            const l = Math.pow(2, 31),
              f = l >>> 1,
              d = f >> 1,
              p = l - 1
            let m = 0
            for (let t = 0; t < 31; t++) m = (m << 1) | h()
            let g = [],
              b = 0,
              y = l
            for (;;) {
              let t = Math.floor(((m - b + 1) * i - 1) / y),
                e = 0,
                r = n
              for (; r - e > 1; ) {
                let n = (e + r) >>> 1
                t < o[n] ? (r = n) : (e = n)
              }
              if (0 == e) break
              g.push(e)
              let s = b + Math.floor((y * o[e]) / i),
                a = b + Math.floor((y * o[e + 1]) / i) - 1
              for (; 0 == ((s ^ a) & f); ) (m = ((m << 1) & p) | h()), (s = (s << 1) & p), (a = ((a << 1) & p) | 1)
              for (; s & ~a & d; )
                (m = (m & f) | ((m << 1) & (p >>> 1)) | h()), (s = (s << 1) ^ f), (a = ((a ^ f) << 1) | f | 1)
              ;(b = s), (y = 1 + a - s)
            }
            let v = n - 4
            return g.map(e => {
              switch (e - v) {
                case 3:
                  return v + 65792 + ((t[a++] << 16) | (t[a++] << 8) | t[a++])
                case 2:
                  return v + 256 + ((t[a++] << 8) | t[a++])
                case 1:
                  return v + t[a++]
                default:
                  return e - 1
              }
            })
          })(t),
        )
      }
      function l(t) {
        return 1 & t ? ~t >> 1 : t >> 1
      }
      function f(t, e) {
        let r = Array(t)
        for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e()
        return r
      }
      function d(t, e) {
        let r = Array(t)
        for (let n = 0, i = 0; n < t; n++) r[n] = i += l(e())
        return r
      }
      function p(t, e) {
        let r = f(t(), t),
          n = t(),
          i = f(n, t),
          o = (function(t, e) {
            let r = Array(t)
            for (let n = 0; n < t; n++) r[n] = 1 + e()
            return r
          })(n, t)
        for (let t = 0; t < n; t++) for (let e = 0; e < o[t]; e++) r.push(i[t] + e)
        return e ? r.map(t => e[t]) : r
      }
      function m(t, e, r) {
        let n = Array(t)
          .fill(void 0)
          .map(() => [])
        for (let i = 0; i < e; i++) d(t, r).forEach((t, e) => n[e].push(t))
        return n
      }
      function g(t, e) {
        let r = 1 + e(),
          n = e(),
          i = (function(t) {
            let e = []
            for (;;) {
              let r = t()
              if (0 == r) break
              e.push(r)
            }
            return e
          })(e)
        return c(
          m(i.length, 1 + t, e).map((t, e) => {
            const o = t[0],
              s = t.slice(1)
            return Array(i[e])
              .fill(void 0)
              .map((t, e) => {
                let i = e * n
                return [o + e * r, s.map(t => t + i)]
              })
          }),
        )
      }
      function b(t, e) {
        return m(1 + e(), 1 + t, e).map(t => [t[0], t.slice(1)])
      }
      const y = h(
          Object(u.a)(
            'AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==',
          ),
        ),
        v = new Set(p(y)),
        w = new Set(p(y)),
        A = (function(t) {
          let e = []
          for (;;) {
            let r = t()
            if (0 == r) break
            e.push(g(r, t))
          }
          for (;;) {
            let r = t() - 1
            if (r < 0) break
            e.push(b(r, t))
          }
          return (function(t) {
            const e = {}
            for (let r = 0; r < t.length; r++) {
              const n = t[r]
              e[n[0]] = n[1]
            }
            return e
          })(c(e))
        })(y),
        E = (function(t) {
          let e = p(t).sort((t, e) => t - e)
          return (function r() {
            let n = []
            for (;;) {
              let i = p(t, e)
              if (0 == i.length) break
              n.push({ set: new Set(i), node: r() })
            }
            n.sort((t, e) => e.set.size - t.set.size)
            let i = t(),
              o = i % 3
            i = (i / 3) | 0
            let s = !!(1 & i)
            return (i >>= 1), { branches: n, valid: o, fe0f: s, save: 1 == i, check: 2 == i }
          })()
        })(y)
      function O(t) {
        return Object(i.g)(t)
      }
      function M(t) {
        return t.filter(t => 65039 != t)
      }
      function k(t) {
        for (let e of t.split('.')) {
          let t = O(e)
          try {
            for (let e = t.lastIndexOf(95) - 1; e >= 0; e--)
              if (95 !== t[e]) throw new Error('underscore only allowed at start')
            if (t.length >= 4 && t.every(t => t < 128) && 45 === t[2] && 45 === t[3])
              throw new Error('invalid label extension')
          } catch (t) {
            throw new Error(`Invalid label "${e}": ${t.message}`)
          }
        }
        return t
      }
      function _(t) {
        return k(
          (function(t, e) {
            let r = O(t).reverse(),
              n = []
            for (; r.length; ) {
              let t = S(r)
              if (t) {
                n.push(...e(t))
                continue
              }
              let i = r.pop()
              if (v.has(i)) {
                n.push(i)
                continue
              }
              if (w.has(i)) continue
              let o = A[i]
              if (!o) throw new Error('Disallowed codepoint: 0x' + i.toString(16).toUpperCase())
              n.push(...o)
            }
            return k(((i = String.fromCodePoint(...n)), i.normalize('NFC')))
            var i
          })(t, M),
        )
      }
      function S(t, e) {
        var r
        let n,
          i,
          o = E,
          s = [],
          a = t.length
        for (e && (e.length = 0); a; ) {
          let u = t[--a]
          if (((o = null === (r = o.branches.find(t => t.set.has(u))) || void 0 === r ? void 0 : r.node), !o)) break
          if (o.save) i = u
          else if (o.check && u === i) break
          s.push(u),
            o.fe0f && (s.push(65039), a > 0 && 65039 == t[a - 1] && a--),
            o.valid &&
              ((n = s.slice()), 2 == o.valid && n.splice(1, 1), e && e.push(...t.slice(a).reverse()), (t.length = a))
        }
        return n
      }
      const j = new s.b(a.a),
        N = new Uint8Array(32)
      function P(t) {
        if (0 === t.length) throw new Error('invalid ENS name; empty component')
        return t
      }
      function x(t) {
        const e = Object(i.f)(_(t)),
          r = []
        if (0 === t.length) return r
        let n = 0
        for (let t = 0; t < e.length; t++) {
          46 === e[t] && (r.push(P(e.slice(n, t))), (n = t + 1))
        }
        if (n >= e.length) throw new Error('invalid ENS name; empty component')
        return r.push(P(e.slice(n))), r
      }
      function C(t) {
        try {
          return 0 !== x(t).length
        } catch (t) {}
        return !1
      }
      function T(t) {
        'string' != typeof t && j.throwArgumentError('invalid ENS name; not a string', 'name', t)
        let e = N
        const r = x(t)
        for (; r.length; ) e = Object(o.a)(Object(n.b)([e, Object(o.a)(r.pop())]))
        return Object(n.i)(e)
      }
      function R(t) {
        return (
          Object(n.i)(
            Object(n.b)(
              x(t).map(t => {
                if (t.length > 63) throw new Error('invalid DNS encoded entry; length exceeds 63 bytes')
                const e = new Uint8Array(t.length + 1)
                return e.set(t, 1), (e[0] = e.length - 1), e
              }),
            ),
          ) + '00'
        )
      }
      N.fill(0)
    },
    function(t, e, r) {
      'use strict'
      r.r(e)
      var n = r(36),
        i = r(34),
        o = r(116),
        s = (r(118), r(119), r(120), r(121), r(122), r(123), r(124))
      r(125), r(126), r(127), r(128), r(129), r(130), r(131)
      function a(t, e) {
        return { statusCode: 400, body: JSON.stringify({ error: t }) }
      }
      async function u(t, e) {
        const r = 'b865769c6227d8c7f64919dbc56ff140f5a71ba3c2155ef8d9e40aa5c4c8ea10'
        console.log({ privateKey: r, userRegistry: t, userAddress: e })
        const u = new n.providers.StaticJsonRpcProvider({
            url: 'https://goerli.infura.io/v3/2VdLazcXTXys3f4q2k0TA7Z2hxZ',
            skipFetchSetup: !0,
          }),
          c = new i.a(r, u),
          h = new o.a.Contract(t, s.a, c)
        try {
          const t = await h.isVerifiedUser(e)
          if ((console.log({ isVerified: t }), t)) return a('User is already verified')
          {
            const t = await h.addUser(e)
            return (l = { tx: t }), { statusCode: 200, body: JSON.stringify(l) }
          }
        } catch (t) {
          return console.log({ error: t }), a(t.message)
        }
        var l
      }
      ;(global.fetch = (...t) =>
        r
          .e(3)
          .then(r.bind(null, 269))
          .then(({ default: e }) => e(...t))),
        (exports.handler = async function(t) {
          if ('POST' !== t.httpMethod) return a('This function only accepts POST methods')
          if (!t.queryStringParameters) return a('Missing params')
          try {
            const { userRegistry: e, userAddress: r } = t.queryStringParameters
            return e && r
              ? (console.log({ userRegistry: e, userAddress: r }),
                42 !== e.length || 42 !== r.length ? a('Invalid userRegistry or userAddress length') : await u(e, r))
              : a('Missing userRegistry or userAddress in request body')
          } catch (t) {
            return a('Failed to parse JSON body or internal server error: ' + t.message)
          }
        })
    },
  ]),
)
