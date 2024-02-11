"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _context = _interopRequireDefault(require("./context"));
var _Firebase = _interopRequireWildcard(require("../Firebase"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const withAuthentication = Component => {
  class WithAuthentication extends _react.default.Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "_initFirebase", false);
      _defineProperty(this, "_isMounted", false);
      _defineProperty(this, "state", {
        authUser: null
      });
      _defineProperty(this, "safeSetState", state => this._isMounted && this.setState(state));
      _defineProperty(this, "firebaseInit", () => {
        if (this.props.firebase && !this._initFirebase) {
          this._initFirebase = true;
          this.listener = this.props.firebase.onAuthUserListener(authUser => {
            localStorage.setItem("authUser", JSON.stringify(authUser));
            this.safeSetState({
              authUser
            });
          }, () => {
            localStorage.removeItem("authUser");
            this.safeSetState({
              authUser: null
            });
          });
        }
      });
    }
    componentDidMount() {
      this._isMounted = true;
      this.safeSetState({
        authUser: JSON.parse(localStorage.getItem("authUser"))
      });
      this.firebaseInit();
    }
    componentDidUpdate() {
      this.firebaseInit();
    }
    componentWillUnmount() {
      this._isMounted = false;
      this.listener && this.listener();
    }
    render() {
      return /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
        value: this.state.authUser
      }, /*#__PURE__*/_react.default.createElement(Component, null, this.props.children));
    }
  }
  WithAuthentication.displayName = "WithAuthentication";
  WithAuthentication.propTypes = {
    children: _propTypes.default.node.isRequired,
    firebase: _propTypes.default.instanceOf(_Firebase.default)
  };
  return (0, _Firebase.withFirebase)(WithAuthentication);
};
var _default = exports.default = withAuthentication;