"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AuthUserContext", {
  enumerable: true,
  get: function get() {
    return _Session.AuthUserContext;
  }
});
Object.defineProperty(exports, "Firebase", {
  enumerable: true,
  get: function get() {
    return _Firebase.default;
  }
});
Object.defineProperty(exports, "FirebaseContext", {
  enumerable: true,
  get: function get() {
    return _Firebase.FirebaseContext;
  }
});
Object.defineProperty(exports, "Layout", {
  enumerable: true,
  get: function get() {
    return _Layout.default;
  }
});
Object.defineProperty(exports, "VtrFooter", {
  enumerable: true,
  get: function get() {
    return _VtrFooter.VtrFooter;
  }
});
Object.defineProperty(exports, "VtrHeader", {
  enumerable: true,
  get: function get() {
    return _VtrHeader.VtrHeader;
  }
});
Object.defineProperty(exports, "WithAuthorizationClass", {
  enumerable: true,
  get: function get() {
    return _Session.WithAuthorizationClass;
  }
});
Object.defineProperty(exports, "getFirebase", {
  enumerable: true,
  get: function get() {
    return _Firebase.getFirebase;
  }
});
Object.defineProperty(exports, "setFirebaseClass", {
  enumerable: true,
  get: function get() {
    return _Firebase.setFirebaseClass;
  }
});
Object.defineProperty(exports, "setLayoutBase", {
  enumerable: true,
  get: function get() {
    return _Layout.setLayoutBase;
  }
});
Object.defineProperty(exports, "setWithAuthorizationWrapper", {
  enumerable: true,
  get: function get() {
    return _Session.setWithAuthorizationWrapper;
  }
});
Object.defineProperty(exports, "withAuthentication", {
  enumerable: true,
  get: function get() {
    return _Session.withAuthentication;
  }
});
Object.defineProperty(exports, "withAuthorization", {
  enumerable: true,
  get: function get() {
    return _Session.withAuthorization;
  }
});
Object.defineProperty(exports, "withFirebase", {
  enumerable: true,
  get: function get() {
    return _Firebase.withFirebase;
  }
});

var _VtrHeader = require("./components/VtrHeader");

var _VtrFooter = require("./components/VtrFooter");

var _Layout = _interopRequireWildcard(require("./components/Layout"));

var _Firebase = _interopRequireWildcard(require("./components/Firebase"));

var _Session = require("./components/Session");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }