"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFirebaseClass = exports.getFirebase = exports.default = void 0;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Firebase = /*#__PURE__*/_createClass(function Firebase(app, _config) {
  var _this = this;

  _classCallCheck(this, Firebase);

  _defineProperty(this, "user", function (uid) {
    return (0, _firestore.doc)(_this.firestore, "users", uid);
  });

  _defineProperty(this, "users", function () {
    return (0, _firestore.collection)(_this.firestore, "users");
  });

  _defineProperty(this, "config", function (config) {
    return (0, _firestore.doc)(_this.firestore, "config", config);
  });

  if (!_config) throw new Error("No Firebase config given!");
  app = (0, _app.initializeApp)(_config);
  this.firestore = (0, _firestore.getFirestore)(app);
} // *** User API ***
);

var firebase;
var firebaseClass = Firebase;

var getFirebase = function getFirebase(app) {
  if (!firebase) {
    firebase = new firebaseClass(app);
  }

  return firebase;
};

exports.getFirebase = getFirebase;

var setFirebaseClass = function setFirebaseClass(newClass) {
  firebaseClass = newClass;
};

exports.setFirebaseClass = setFirebaseClass;
var _default = Firebase;
exports.default = _default;