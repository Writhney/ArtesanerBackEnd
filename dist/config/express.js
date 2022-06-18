"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import app from './config/express';
//import usersRoutes from '../routes/users.routes'
var app = (0, _express["default"])();
app.use((0, _morgan["default"])(process.env.NODE_LOG || 'dev'));
app.use(_express["default"].json()); //app.use('/users', usersRoutes);

var _default = app;
exports["default"] = _default;