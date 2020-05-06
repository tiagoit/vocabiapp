import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyDSAl1pNQm2XOOrRrXSHcV0omANfnDTyFU",
  authDomain: "vocabiapp.firebaseapp.com",
  databaseURL: "https://vocabiapp.firebaseio.com",
  projectId: "vocabiapp",
  storageBucket: "vocabiapp.appspot.com",
  messagingSenderId: "999016236067",
  appId: "1:999016236067:web:b2213a4c20fb61dd209d96",
  measurementId: "G-Z08764DJPL",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    if (!email) throw Error("Email not provided.");
    if (!password) throw Error("Password not provided.");
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password, conf) {
    if (password !== conf) throw Error("Password doesn't match with confirmation.");
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  passwordReset(email) {
    if (!email) throw Error("Email not provided.");
    return this.auth.sendPasswordResetEmail(email);
  }

  verifyPasswordResetCode(code) {
    if (!code) throw Error("Code not provided.");
    return this.auth.verifyPasswordResetCode(code);
  }

  confirmPasswordReset(code, newPassword, conf) {
    if (newPassword !== conf) throw Error("Password doesn't match with confirmation.");
    if (!code) throw Error("Code not provided.");
    if (!newPassword) throw Error("New password not provided.");
    return this.auth.confirmPasswordReset(code, newPassword);
  }

  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }

    return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
      quote,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async getCurrentUserQuote() {
    const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get();
    return quote.get("quote");
  }
}

export default new Firebase();
