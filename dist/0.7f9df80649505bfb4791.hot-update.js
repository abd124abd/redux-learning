webpackHotUpdate(0,{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(77);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(233);\n\nvar _redux = __webpack_require__(234);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar reducer = function reducer() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];\n\tvar action = arguments[1];\n\n\tif (action.type === 'UP') {\n\t\treturn state + 1;\n\t}\n\treturn state;\n};\n\n// 1) create the store\n\nvar store = (0, _redux.createStore)(reducer);\n\n// 2) get the state\n\nvar TopLevel = function (_React$Component) {\n\t_inherits(TopLevel, _React$Component);\n\n\tfunction TopLevel() {\n\t\t_classCallCheck(this, TopLevel);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(TopLevel).apply(this, arguments));\n\t}\n\n\t_createClass(TopLevel, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar state = store.getState();\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t'top! ',\n\t\t\t\tstate,\n\t\t\t\t_react2.default.createElement('button', { onClick: function onClick() {\n\t\t\t\t\t\tstore.dispatch({ type: 'UP' });\n\t\t\t\t\t} })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn TopLevel;\n}(_react2.default.Component);\n\n;\n\nvar go = function go() {\n\t(0, _reactDom.render)(_react2.default.createElement(TopLevel, null), document.getElementById('container'));\n};\n\n// 4) subscribe to state changes\n\nstore.subscribe(go);\n\ngo();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 76\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ }

})