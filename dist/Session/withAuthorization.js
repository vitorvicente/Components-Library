"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var WithAuthorizationClass = /*#__PURE__*/function (_Component) {
  _inherits(WithAuthorizationClass, _Component);

  var _super = _createSuper(WithAuthorizationClass);

  function WithAuthorizationClass() {
    var _this;

    _classCallCheck(this, WithAuthorizationClass);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_initFirebase", false);

    _defineProperty(_assertThisInitialized(_this), "firebaseInit", function () {
      if (_this.props.firebase && !_this._initFirebase) {
        _this._initFirebase = true;
        _this.listener = _this.props.firebase.onAuthStateChanged(_this.props.firebaseAuthNext, _this.props.firebaseAuthFallback);
      }
    });

    return _this;
  }

  _createClass(WithAuthorizationClass, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.firebaseInit();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.firebaseInit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.listener && this.listener();
    }
  }, {
    key: "render",
    value: function render() {
      var authUser = this.context;
      var filteredProps = (0, _lodash.default)(this.props, ["firebase", "firebaseAuthNext", "firebaseAuthFallback", "condition", "authorizationPassed", "authorizationFailed"]);
      return this.props.condition(authUser) ? /*#__PURE__*/(0, _react.createElement)(this.props.authorizationPassed, filteredProps) : this.props.authorizationFailed;
    }
  }]);

  return WithAuthorizationClass;
}(_react.Component);

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

var WithAuthorizationWrapper = function WithAuthorizationWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(WithAuthorizationClass, props);
};

var setWithAuthorizationWrapper = function setWithAuthorizationWrapper(Component) {
  WithAuthorizationWrapper = Component;
};

exports.setWithAuthorizationWrapper = setWithAuthorizationWrapper;

var withAuthorization = function withAuthorization(condition) {
  return function (Component) {
    // eslint-disable-next-line react/prop-types
    var WithCondition = function WithCondition(props) {
      return /*#__PURE__*/_react.default.createElement(WithAuthorizationWrapper, _extends({
        condition: condition,
        authorizationPassed: Component
      }, props));
    };

    WithCondition.displayName = "WithCondition";
    return (0, _Firebase.withFirebase)(WithCondition);
  };
};

var _default = withAuthorization;
exports.default = _default;