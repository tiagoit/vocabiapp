import { firebaseApp, db } from '../firebase/firebase';

export const CONFIG_REQUEST = 'CONFIG_REQUEST';
export const CONFIG_SUCCESS = 'CONFIG_SUCCESS';
export const CONFIG_FAILURE = 'CONFIG_FAILURE';

const requestConfig = () => ({ type: CONFIG_REQUEST });
const receiveConfig = (config) => ({ type: CONFIG_SUCCESS, config });
const configError   = () => ({ type: CONFIG_FAILURE });

export const getConfig = () => (dispatch) => {
  dispatch(requestConfig());
  const { uid } = firebaseApp.auth().currentUser;
  db.collection('configs').doc(uid).get()
    .then((doc) => {
      console.log(doc.data());
      dispatch(receiveConfig(doc.data()));
    })
    .catch(() => {
      dispatch(configError());
    });
};
