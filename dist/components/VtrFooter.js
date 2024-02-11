"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VtrFooter = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const StyledDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tbackground-color: #1a252f;\n\tfont-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;\n\tfont-size: 25px;\n\tcolor: #fff;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: row;\n\tpadding: 30px;\n\tposition:relative;\n\tleft:0;\n\tbottom:0;\n\tright:0;\n"])));
const VtrFooter = () => /*#__PURE__*/_react.default.createElement(StyledDiv, null, /*#__PURE__*/_react.default.createElement("small", null, "Copyright \xA9 Grandmen123 ", new Date().getFullYear()));
exports.VtrFooter = VtrFooter;
VtrFooter.propTypes = {};
VtrFooter.defaultProps = {};