import { initializeApp } from "firebase/app"
import { getFirestore, doc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

class Firebase {
  constructor(app, config) {
    if (!config) throw new Error("No Firebase config given!");

    app = initializeApp(config);
    this.auth = getAuth(app);
    this.firestore = getFirestore(app);
  }

  // *** Merge Auth and DB User API ***
  onAuthUserListener = (next, fallback) =>
    onAuthStateChanged(this.auth, (authUser) => {
      if (authUser) {
        this.user(authUser.uid)
            .get()
            .then(async (snapshot) => {
              if (snapshot.exists) {
                const dbUser = snapshot.data();
                // eslint-disable-next-line no-prototype-builtins
                if (!dbUser.hasOwnProperty("roles")) {
                  dbUser.roles = {
                    guest: true,
                  };
                  await this.user(authUser.uid).update(dbUser);
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

                this.user(authUser.uid)
                    .set(dbUser)
                    .then(() => {
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
            })
            .catch(console.error);
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