"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLayoutBase = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Firebase = require("./Firebase");

var _Session = require("./Session");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line react/prop-types
var LayoutBase = function LayoutBase(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, children);
};

LayoutBase.displayName = "LayoutBase";
var AppWithAuthentication = (0, _Session.withAuthentication)(function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement(LayoutBase, null, children);
});
AppWithAuthentication.displayName = "AppWithAuthentication";

var Layout = /*#__PURE__*/function (_Component) {
  _inherits(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      firebase: null,
      error: null,
      errorInfo: null
    });

    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var app = Promise.resolve().then(function () {
        return _interopRequireWildcard(require("firebase/app"));
      });
      var auth = Promise.resolve().then(function () {
        return _interopRequireWildcard(require("firebase/auth"));
      });
      var firestore = Promise.resolve().then(function () {
        return _interopRequireWildcard(require("firebase/firestore"));
      });
      var storage = Promise.resolve().then(function () {
        return _interopRequireWildcard(require("firebase/storage"));
      });
      var functions = Promise.resolve().then(function () {
        return _interopRequireWildcard(require("firebase/functions"));
      });
      Promise.all([app, auth, firestore, storage, functions]).then(function (values) {
        var firebase = (0, _Firebase.getFirebase)(values[0]);

        _this2.setState({
          firebase: firebase
        });
      });
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) return /*#__PURE__*/_react.default.createElement(LayoutBase, null, /*#__PURE__*/(0, _react.createElement)(this.props.errorComponent, {
        error: this.state.error,
        errorInfo: this.state.errorInfo
      }));
      return /*#__PURE__*/_react.default.createElement(_Firebase.FirebaseContext.Provider, {
        value: this.state.firebase
      }, /*#__PURE__*/_react.default.createElement(AppWithAuthentication, null, this.props.children));
    }
  }]);

  return Layout;
}(_react.Component);

Layout.propTypes = {
  children: _propTypes.default.node.isRequired,
  errorComponent: _propTypes.default.func
};
Layout.displayName = "Layout";
Layout.defaultProps = {
  // eslint-disable-next-line react/display-name, react/prop-types
  errorComponent: function errorComponent(_ref3) {
    var error = _ref3.error,
        errorInfo = _ref3.errorInfo;
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Uh oh!"), /*#__PURE__*/_react.default.createElement("p", null, "Something went wrong!"), /*#__PURE__*/_react.default.createElement("details", {
      style: {
        whiteSpace: "pre-wrap"
      }
    }, error && error.toString(), /*#__PURE__*/_react.default.createElement("br", null), errorInfo.componentStack));
  }
};

var setLayoutBase = function setLayoutBase(Component) {
  LayoutBase = Component;
};

exports.setLayoutBase = setLayoutBase;
var _default = Layout;
exports.default = _default;