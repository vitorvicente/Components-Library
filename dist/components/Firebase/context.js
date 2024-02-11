"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFirebase = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FirebaseContext = /*#__PURE__*/_react.default.createContext(null);
FirebaseContext.displayName = "FirebaseContext";
const withFirebase = Component => props => /*#__PURE__*/_react.default.createElement(FirebaseContext.Consumer, null, firebase => /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
  firebase: firebase
})));
exports.withFirebase = withFirebase;
var _default = exports.default = FirebaseContext;