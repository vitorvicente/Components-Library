"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFirebaseClass = exports.getFirebase = exports.default = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
var _auth = require("firebase/auth");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class Firebase {
  constructor(app, _config) {
    _defineProperty(this, "createUser", (email, password) => (0, _auth.createUserWithEmailAndPassword)(this.auth, email, password));
    _defineProperty(this, "doSignInWithEmail", (email, password) => (0, _auth.signInWithEmailAndPassword)(this.auth, email, password));
    _defineProperty(this, "doSignOut", () => (0, _auth.signOut)(this.auth).then(() => localStorage.removeItem("authUser")));
    // *** Merge Auth and DB User API ***
    _defineProperty(this, "onAuthUserListener", (next, fallback) => (0, _auth.onAuthStateChanged)(this.auth, authUser => {
      if (authUser) {
        (0, _firestore.getDoc)(this.user(authUser.uid)).then(async snapshot => {
          if (snapshot.exists) {
            const dbUser = snapshot.data();
            // eslint-disable-next-line no-prototype-builtins
            if (!dbUser.hasOwnProperty("roles")) {
              dbUser.roles = {
                guest: true
              };
              await (0, _firestore.updateDoc)(this.user(authUser.uid), dbUser);
            }
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser
            };
            next(authUser);
          } else {
            const dbUser = {
              roles: {
                guest: true
              }
            };
            (0, _firestore.setDoc)(this.user(authUser.uid), dbUser).then(() => {
              authUser = {
                uid: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
                providerData: authUser.providerData,
                ...dbUser
              };
              next(authUser);
            });
          }
        }).catch(console.error);
      } else {
        fallback();
      }
    }));
    // *** User API ***
    _defineProperty(this, "user", uid => (0, _firestore.doc)(this.firestore, "users", uid));
    _defineProperty(this, "users", () => (0, _firestore.collection)(this.firestore, "users"));
    // *** Config API ***
    _defineProperty(this, "config", config => (0, _firestore.doc)(this.firestore, "config", config));
    if (!_config) throw new Error("No Firebase config given!");
    app = (0, _app.initializeApp)(_config);
    this.auth = (0, _auth.getAuth)(app);
    this.firestore = (0, _firestore.getFirestore)(app);
  }
}
let firebase;
let firebaseClass = Firebase;
const getFirebase = app => {
  if (!firebase) {
    firebase = new firebaseClass(app);
  }
  return firebase;
};
exports.getFirebase = getFirebase;
const setFirebaseClass = newClass => {
  firebaseClass = newClass;
};
exports.setFirebaseClass = setFirebaseClass;
var _default = exports.default = Firebase;