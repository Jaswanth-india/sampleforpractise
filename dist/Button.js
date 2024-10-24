"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Button(props) {
  var changeColor = function changeColor() {
    props.setColor(props.color === 'blue' ? 'red' : 'blue');
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: changeColor,
    style: {
      backgroundColor: props.color
    }
  }, "Click Me");
}
var _default = exports["default"] = Button;