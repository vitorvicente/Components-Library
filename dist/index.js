"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AuthUserContext", {
  enumerable: true,
  get: function () {
    return _Session.AuthUserContext;
  }
});
Object.defineProperty(exports, "Firebase", {
  enumerable: true,
  get: function () {
    return _Firebase.default;
  }
});
Object.defineProperty(exports, "FirebaseContext", {
  enumerable: true,
  get: function () {
    return _Firebase.FirebaseContext;
  }
});
Object.defineProperty(exports, "Layout", {
  enumerable: true,
  get: function () {
    return _Layout.default;
  }
});
Object.defineProperty(exports, "VtrFooter", {
  enumerable: true,
  get: function () {
    return _VtrFooter.VtrFooter;
  }
});
Object.defineProperty(exports, "VtrHeader", {
  enumerable: true,
  get: function () {
    return _VtrHeader.VtrHeader;
  }
});
Object.defineProperty(exports, "WithAuthorizationClass", {
  enumerable: true,
  get: function () {
    return _Session.WithAuthorizationClass;
  }
});
Object.defineProperty(exports, "getFirebase", {
  enumerable: true,
  get: function () {
    return _Firebase.getFirebase;
  }
});
Object.defineProperty(exports, "setFirebaseClass", {
  enumerable: true,
  get: function () {
    return _Firebase.setFirebaseClass;
  }
});
Object.defineProperty(exports, "setLayoutBase", {
  enumerable: true,
  get: function () {
    return _Layout.setLayoutBase;
  }
});
Object.defineProperty(exports, "setWithAuthorizationWrapper", {
  enumerable: true,
  get: function () {
    return _Session.setWithAuthorizationWrapper;
  }
});
Object.defineProperty(exports, "withAuthentication", {
  enumerable: true,
  get: function () {
    return _Session.withAuthentication;
  }
});
Object.defineProperty(exports, "withAuthorization", {
  enumerable: true,
  get: function () {
    return _Session.withAuthorization;
  }
});
Object.defineProperty(exports, "withFirebase", {
  enumerable: true,
  get: function () {
    return _Firebase.withFirebase;
  }
});
var _VtrHeader = require("./components/VtrHeader");
var _VtrFooter = require("./components/VtrFooter");
var _Layout = _interopRequireWildcard(require("./components/Layout"));
var _Firebase = _interopRequireWildcard(require("./components/Firebase"));
var _Session = require("./components/Session");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }