"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(name, age) {
    _classCallCheck(this, User);

    this.name = name;
    this.age = age;
    this.introduce = this.introduce.bind(this);
  }

  _createClass(User, [{
    key: "introduce",
    value: function introduce() {
      console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    }
  }]);

  return User;
}();

exports.default = User;