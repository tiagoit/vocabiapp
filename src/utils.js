import firebase from "./components/firebase";

const authRequired = (history) => {
  if (!firebase.getCurrentUsername()) {
    history.replace("/login");
  }
};

export { authRequired };
