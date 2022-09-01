import { initializeApp } from "firebase/app"
import { collection, doc, getFirestore, getDoc, updateDoc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

class Firebase {
  constructor(app, config) {
    if (!config) throw new Error("No Firebase config given!");

    app = initializeApp(config);
    this.auth = getAuth(app);
    this.firestore = getFirestore(app);
  }

  createUser = (email, password) => createUserWithEmailAndPassword(this.auth, email, password);

  doSignInWithEmail = (email, password) => signInWithEmailAndPassword(this.auth, email, password);

  doSignOut = () =>
    signOut(this.auth).then(() => localStorage.removeItem("authUser"));

  // *** Merge Auth and DB User API ***
  onAuthUserListener = (next, fallback) =>
    onAuthStateChanged(this.auth, (authUser) => {
      if (authUser) {
        getDoc(this.user(authUser.uid)).then(async (snapshot) => {
          if (snapshot.exists) {
            const dbUser = snapshot.data();
            // eslint-disable-next-line no-prototype-builtins
            if (!dbUser.hasOwnProperty("roles")) {
              dbUser.roles = {
                guest: true,
              };

              await updateDoc(this.user(authUser.uid), dbUser);
            }

            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          } else {
            const dbUser = {
              roles: {
                guest: true,
              },
            };

            setDoc(this.user(authUser.uid), dbUser).then(() => {
              authUser = {
                uid: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
                providerData: authUser.providerData,
                ...dbUser,
              };

              next(authUser);
            });
          }
        }).catch(console.error);
      } else {
        fallback();
      }
    });

  // *** User API ***
  user = (uid) => doc(this.firestore, "users", uid);
  users = () => collection(this.firestore, "users");

  // *** Config API ***
  config = (config) => doc(this.firestore, "config", config)
}

let firebase;
let firebaseClass = Firebase;
export const getFirebase = (app) => {
  if (!firebase) {
    firebase = new firebaseClass(app);
  }

  return firebase;
};

export const setFirebaseClass = (newClass) => {
  firebaseClass = newClass;
};

export default Firebase;