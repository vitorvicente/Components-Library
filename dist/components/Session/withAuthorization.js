"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setWithAuthorizationWrapper = exports.default = exports.WithAuthorizationClass = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodash = _interopRequireDefault(require("lodash.omit"));
var _context = _interopRequireDefault(require("./context"));
var _Firebase = _interopRequireWildcard(require("../Firebase"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class WithAuthorizationClass extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "_initFirebase", false);
    _defineProperty(this, "firebaseInit", () => {
      if (this.props.firebase && !this._initFirebase) {
        this._initFirebase = true;
        this.listener = this.props.firebase.onAuthUserListener(this.props.firebaseAuthNext, this.props.firebaseAuthFallback);
      }
    });
  }
  componentDidMount() {
    this.firebaseInit();
  }
  componentDidUpdate() {
    this.firebaseInit();
  }
  componentWillUnmount() {
    this.listener && this.listener();
  }
  render() {
    const authUser = this.context;
    const filteredProps = (0, _lodash.default)(this.props, ["firebase", "firebaseAuthNext", "firebaseAuthFallback", "condition", "authorizationPassed", "authorizationFailed"]);
    return this.props.condition(authUser) ? /*#__PURE__*/(0, _react.createElement)(this.props.authorizationPassed, filteredProps) : this.props.authorizationFailed;
  }
}
exports.WithAuthorizationClass = WithAuthorizationClass;
_defineProperty(WithAuthorizationClass, "contextType", _context.default);
WithAuthorizationClass.displayName = "WithAuthorizationClass";
WithAuthorizationClass.propTypes = {
  firebase: _propTypes.default.instanceOf(_Firebase.default),
  firebaseAuthNext: _propTypes.default.func.isRequired,
  firebaseAuthFallback: _propTypes.default.func.isRequired,
  condition: _propTypes.default.func.isRequired,
  authorizationPassed: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.element, _propTypes.default.elementType]).isRequired,
  authorizationFailed: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.element, _propTypes.default.elementType]).isRequired
};
let WithAuthorizationWrapper = props => /*#__PURE__*/_react.default.createElement(WithAuthorizationClass, props);
const setWithAuthorizationWrapper = Component => {
  WithAuthorizationWrapper = Component;
};
exports.setWithAuthorizationWrapper = setWithAuthorizationWrapper;
const withAuthorization = condition => Component => {
  // eslint-disable-next-line react/prop-types
  const WithCondition = props => /*#__PURE__*/_react.default.createElement(WithAuthorizationWrapper, _extends({
    condition: condition,
    authorizationPassed: Component
  }, props));
  WithCondition.displayName = "WithCondition";
  return (0, _Firebase.withFirebase)(WithCondition);
};
var _default = exports.default = withAuthorization;