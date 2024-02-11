"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AuthUserContext", {
  enumerable: true,
  get: function () {
    return _context.default;
  }
});
Object.defineProperty(exports, "WithAuthorizationClass", {
  enumerable: true,
  get: function () {
    return _withAuthorization.WithAuthorizationClass;
  }
});
Object.defineProperty(exports, "setWithAuthorizationWrapper", {
  enumerable: true,
  get: function () {
    return _withAuthorization.setWithAuthorizationWrapper;
  }
});
Object.defineProperty(exports, "withAuthentication", {
  enumerable: true,
  get: function () {
    return _withAuthentication.default;
  }
});
Object.defineProperty(exports, "withAuthorization", {
  enumerable: true,
  get: function () {
    return _withAuthorization.default;
  }
});
var _context = _interopRequireDefault(require("./context"));
var _withAuthentication = _interopRequireDefault(require("./withAuthentication"));
var _withAuthorization = _interopRequireWildcard(require("./withAuthorization"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }