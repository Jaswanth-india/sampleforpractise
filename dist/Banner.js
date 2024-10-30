"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Banner(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: props.style
  }, "Hello ", props.bannerData.countryFlag, " Hey! It looks like you are from ", /*#__PURE__*/_react["default"].createElement("b", null, props.bannerData.country), ". We support Parity Purchasing Power, so if you need it, use code ", /*#__PURE__*/_react["default"].createElement("b", null, "\u201C", props.bannerData.couponCode, "\u201D"), " to get ", /*#__PURE__*/_react["default"].createElement("b", null, props.bannerData.discountPercentage, "%"), " off your subscription at checkout.");
}
var _default = exports["default"] = Banner;