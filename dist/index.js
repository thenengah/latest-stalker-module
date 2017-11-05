'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBody = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(file) {
    var body;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = new _formData2.default();
            _context.t0 = body;
            _context.next = 4;
            return getBuffer(file);

          case 4:
            _context.t1 = _context.sent;

            _context.t0.append.call(_context.t0, 'file', _context.t1, 'package.json');

            return _context.abrupt('return', body);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getBody(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getBuffer = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(file) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', new _promise2.default(function (resolve, reject) {
              return _fs2.default.readFile(file, function (er, buffer) {
                return er ? reject(er) : resolve(buffer);
              });
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getBuffer(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var formatResponse = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(res) {
    var status, statusText;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            status = res.status, statusText = res.statusText;

            if (!(res.status === 200)) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt('return', res.json().then(function (body) {
              return {
                status: status,
                statusText: statusText,
                body: body
              };
            }));

          case 5:
            return _context3.abrupt('return', {
              status: status,
              statusText: statusText
            });

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function formatResponse(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var latestStalker = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(file) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var uri, method, body;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            uri = options.uri || _config2.default.uri;
            method = options.method || _config2.default.method;
            _context5.next = 4;
            return getBody(file);

          case 4:
            body = _context5.sent;
            return _context5.abrupt('return', (0, _isomorphicFetch2.default)(uri, { method: method, body: body }).then(function () {
              var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(res) {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return formatResponse(res);

                      case 2:
                        return _context4.abrupt('return', _context4.sent);

                      case 3:
                      case 'end':
                        return _context4.stop();
                    }
                  }
                }, _callee4, undefined);
              }));

              return function (_x6) {
                return _ref5.apply(this, arguments);
              };
            }()));

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function latestStalker(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = latestStalker;
// export default latestStalker