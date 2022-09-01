"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFirebaseClass = exports.getFirebase = exports.default = void 0;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

var _auth = require("firebase/auth");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Firebase = /*#__PURE__*/_createClass(function Firebase(app, _config) {
  var _this = this;

  _classCallCheck(this, Firebase);

  _defineProperty(this, "createUser", function (email, password) {
    return (0, _auth.createUserWithEmailAndPassword)(_this.auth, email, password);
  });

  _defineProperty(this, "doSignInWithEmail", function (email, password) {
    return (0, _auth.signInWithEmailAndPassword)(_this.auth, email, password);
  });

  _defineProperty(this, "doSignOut", function () {
    return (0, _auth.signOut)(_this.auth).then(function () {
      return localStorage.removeItem("authUser");
    });
  });

  _defineProperty(this, "onAuthUserListener", function (next, fallback) {
    return (0, _auth.onAuthStateChanged)(_this.auth, function (authUser) {
      if (authUser) {
        (0, _firestore.getDoc)(_this.user(authUser.uid)).then( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(snapshot) {
            var dbUser, _dbUser;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!snapshot.exists) {
                      _context.next = 10;
                      break;
                    }

                    dbUser = snapshot.data(); // eslint-disable-next-line no-prototype-builtins

                    if (dbUser.hasOwnProperty("roles")) {
                      _context.next = 6;
                      break;
                    }

                    dbUser.roles = {
                      guest: true
                    };
                    _context.next = 6;
                    return (0, _firestore.updateDoc)(_this.user(authUser.uid), dbUser);

                  case 6:
                    authUser = _objectSpread({
                      uid: authUser.uid,
                      email: authUser.email,
                      emailVerified: authUser.emailVerified,
                      providerData: authUser.providerData
                    }, dbUser);
                    next(authUser);
                    _context.next = 12;
                    break;

                  case 10:
                    _dbUser = {
                      roles: {
                        guest: true
                      }
                    };
                    (0, _firestore.setDoc)(_this.user(authUser.uid), _dbUser).then(function () {
                      authUser = _objectSpread({
                        uid: authUser.uid,
                        email: authUser.email,
                        emailVerified: authUser.emailVerified,
                        providerData: authUser.providerData
                      }, _dbUser);
                      next(authUser);
                    });

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).catch(console.error);
      } else {
        fallback();
      }
    });
  });

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
  this.auth = (0, _auth.getAuth)(app);
  this.firestore = (0, _firestore.getFirestore)(app);
});

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