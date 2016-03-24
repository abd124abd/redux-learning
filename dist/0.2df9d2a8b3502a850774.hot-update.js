webpackHotUpdate(0,{

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = undefined;\n\nvar _createClass = function () {\n\tfunction defineProperties(target, props) {\n\t\tfor (var i = 0; i < props.length; i++) {\n\t\t\tvar descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n\t\t}\n\t}return function (Constructor, protoProps, staticProps) {\n\t\tif (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n\t};\n}();\n\nvar _class;\n\nvar _react = __webpack_require__(77);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _radium = __webpack_require__(258);\n\nvar _radium2 = _interopRequireDefault(_radium);\n\nfunction _interopRequireDefault(obj) {\n\treturn obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n\tif (!(instance instanceof Constructor)) {\n\t\tthrow new TypeError(\"Cannot call a class as a function\");\n\t}\n}\n\nfunction _possibleConstructorReturn(self, call) {\n\tif (!self) {\n\t\tthrow new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n\t}return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n\tif (typeof superClass !== \"function\" && superClass !== null) {\n\t\tthrow new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n\t}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nfunction _defineProperty(obj, key, value) {\n\tif (key in obj) {\n\t\tObject.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });\n\t} else {\n\t\tobj[key] = value;\n\t}return obj;\n}\n\nvar styles = {\n\tdiggit: {\n\t\tbackground: '#FF4081',\n\t\tborderRadius: '50%',\n\t\tfontSize: '20px',\n\t\tpadding: '10px',\n\t\tverticalAlign: 'middle',\n\t\tcolor: '#FBFBFB',\n\t\tborder: '3px solid #028DD1'\n\t},\n\tdiggitList: _defineProperty({\n\t\ttextAlign: 'right',\n\t\tmargin: 0\n\t}, 'margin', '25px'),\n\tli: {\n\t\tdisplay: 'inline'\n\t}\n};\n\nvar DIGGIT_WORDS = ['love', 'music', 'code', 'program', 'learn', 'cool', 'build'];\n\nvar DiggIt = (0, _radium2.default)(_class = function (_Component) {\n\t_inherits(DiggIt, _Component);\n\n\tfunction DiggIt() {\n\t\t_classCallCheck(this, DiggIt);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(DiggIt).apply(this, arguments));\n\t}\n\n\t_createClass(DiggIt, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar text = this.props.text.toLowerCase();\n\t\t\tvar diggit;\n\t\t\tif (DIGGIT_WORDS.some(function (string) {\n\t\t\t\treturn text.indexOf(string) >= 0;\n\t\t\t})) {\n\t\t\t\tdiggit = _react2.default.createElement('ul', { style: styles.diggitList }, _react2.default.createElement('li', null, _react2.default.createElement('i', { className: 'fa fa-check', style: styles.diggit }), '  DIGG-IT!'));\n\t\t\t} else {\n\t\t\t\tdiggit = null;\n\t\t\t}\n\n\t\t\treturn _react2.default.createElement('div', null, diggit);\n\t\t}\n\t}]);\n\n\treturn DiggIt;\n}(_react.Component)) || _class;\n\nexports.default = DiggIt;\n\nDiggIt.propTypes = {\n\ttext: _react.PropTypes.string.isRequired\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./diggs_it_todos/components/DiggIt.js\n ** module id = 257\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./diggs_it_todos/components/DiggIt.js?");

/***/ }

})