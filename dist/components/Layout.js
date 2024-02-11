"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLayoutBase = exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Firebase = require("./Firebase");
var _Session = require("./Session");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// eslint-disable-next-line react/prop-types
let LayoutBase = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, children);
};
LayoutBase.displayName = "LayoutBase";
const AppWithAuthentication = (0, _Session.withAuthentication)(_ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(LayoutBase, null, children);
});
AppWithAuthentication.displayName = "AppWithAuthentication";
class Layout extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      firebase: null,
      error: null,
      errorInfo: null
    });
  }
  componentDidMount() {
    const app = Promise.resolve().then(() => _interopRequireWildcard(require("firebase/app")));
    const auth = Promise.resolve().then(() => _interopRequireWildcard(require("firebase/auth")));
    const firestore = Promise.resolve().then(() => _interopRequireWildcard(require("firebase/firestore")));
    const storage = Promise.resolve().then(() => _interopRequireWildcard(require("firebase/storage")));
    const functions = Promise.resolve().then(() => _interopRequireWildcard(require("firebase/functions")));
    Promise.all([app, auth, firestore, storage, functions]).then(values => {
      const firebase = (0, _Firebase.getFirebase)(values[0]);
      this.setState({
        firebase
      });
    });
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }
  render() {
    if (this.state.error) return /*#__PURE__*/_react.default.createElement(LayoutBase, null, /*#__PURE__*/(0, _react.createElement)(this.props.errorComponent, {
      error: this.state.error,
      errorInfo: this.state.errorInfo
    }));
    return /*#__PURE__*/_react.default.createElement(_Firebase.FirebaseContext.Provider, {
      value: this.state.firebase
    }, /*#__PURE__*/_react.default.createElement(AppWithAuthentication, null, this.props.children));
  }
}
Layout.propTypes = {
  children: _propTypes.default.node.isRequired,
  errorComponent: _propTypes.default.func
};
Layout.displayName = "Layout";
Layout.defaultProps = {
  // eslint-disable-next-line react/display-name, react/prop-types
  errorComponent: _ref3 => {
    let {
      error,
      errorInfo
    } = _ref3;
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Uh oh!"), /*#__PURE__*/_react.default.createElement("p", null, "Something went wrong!"), /*#__PURE__*/_react.default.createElement("details", {
      style: {
        whiteSpace: "pre-wrap"
      }
    }, error && error.toString(), /*#__PURE__*/_react.default.createElement("br", null), errorInfo.componentStack));
  }
};
const setLayoutBase = Component => {
  LayoutBase = Component;
};
exports.setLayoutBase = setLayoutBase;
var _default = exports.default = Layout;