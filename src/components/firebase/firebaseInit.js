// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const firebaseConfig = {
//   apiKey: "AIzaSyA0Gx4i9-XQcGyzXzagUMXMBnYo_q5AjZw",
//   authDomain: "oursblog-d6c66.firebaseapp.com",
//   projectId: "oursblog-d6c66",
//   storageBucket: "oursblog-d6c66.appspot.com",
//   messagingSenderId: "852134169054",
//   appId: "1:852134169054:web:fed4fe8e5b8eb9ec86b54f",
//   measurementId: "G-KWM16S3D86"
// };

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA0Gx4i9-XQcGyzXzagUMXMBnYo_q5AjZw",
  authDomain: "oursblog-d6c66.firebaseapp.com",
  projectId: "oursblog-d6c66",
  storageBucket: "oursblog-d6c66.appspot.com",
  messagingSenderId: "852134169054",
  appId: "1:852134169054:web:fed4fe8e5b8eb9ec86b54f",
  measurementId: "G-KWM16S3D86"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();