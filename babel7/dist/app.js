"use strict";

var _user = _interopRequireDefault(require("./lib/user"));

var _student = _interopRequireDefault(require("./lib/student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(test);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var u = new _user.default('Cool Lee', 22);
var s = new _student.default('Jimmy Lin', 13, 100);
u.introduce();
s.introduce();
s.myScore();

function timer(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (time === 2000) {
        reject('This is an error.');
      } else {
        resolve(`timer ${time} was done!`);
      }
    }, time);
  });
}

function runTimer() {
  return _runTimer.apply(this, arguments);
}

function _runTimer() {
  _runTimer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var res1, res2;
    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return timer(1000);

          case 3:
            res1 = _context2.sent;
            console.log(res1);
            _context2.next = 7;
            return timer(2000);

          case 7:
            res2 = _context2.sent;
            console.log(res2);
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, this, [[0, 11]]);
  }));
  return _runTimer.apply(this, arguments);
}

runTimer();

function test() {
  return regeneratorRuntime.wrap(function test$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var nxt = test();
nxt.next();

var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.log('dispatching', action);
      var result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  };
};