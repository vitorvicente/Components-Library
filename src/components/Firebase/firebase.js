import { initializeApp } from "firebase/app"
import { getFirestore, doc, collection } from "firebase/firestore";

class Firebase {
  constructor(app, config) {
    if (!config) throw new Error("No Firebase config given!");

    app = initializeApp(config);
    this.firestore = getFirestore(app);
  }

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