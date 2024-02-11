"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VtrHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _avatar = _interopRequireDefault(require("./Assets/avatar.png"));
var _mainBackground = _interopRequireDefault(require("./Assets/main-background.jpg"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const MastHead = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tmargin-bottom:50px;\n\tbackground:no-repeat center center;\n\tbackground-color:#868e96;\n\tbackground-attachment:scroll;\n\tposition:relative;\n\tbackground-size:cover;\n\tbackground-image: url(", ");\n"])), _mainBackground.default);
const Overlay = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\tright:0;\n\theight:100%;\n\twidth:100%;\n\tbackground-color:#212529;\n\topacity:.2\n"])));
const SiteHeading = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tpadding:200px 0 150px;\n\tcolor:#fff;\n\ttext-align: center;\n\tjustify-content: center;\n\t& h1 {\n\t\tfont-size:50px;\n\t\tmargin-top:0\n\t}\n"])));
const StyledImage = _styledComponents.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tdisplay: inline-block;\n\talign: center;\n"])));
const VtrHeader = _ref => {
  let {} = _ref;
  return /*#__PURE__*/_react.default.createElement(MastHead, null, /*#__PURE__*/_react.default.createElement(Overlay, null), /*#__PURE__*/_react.default.createElement(SiteHeading, null, /*#__PURE__*/_react.default.createElement(StyledImage, {
    src: _avatar.default,
    alt: "logo",
    width: "250",
    height: "250"
  })));
};
exports.VtrHeader = VtrHeader;
VtrHeader.propTypes = {};
VtrHeader.defaultProps = {};