import firebase from 'firebase'

require('dotenv').config(); // allows having env variables in .env file

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "vue-chat-proj.firebaseapp.com",
  databaseURL: "https://vue-chat-proj.firebaseio.com",
  projectId: "vue-chat-proj",
  storageBucket: "",
  messagingSenderId: process.env.MS_ID,
  appId: process.env.API_ID
};
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true}); in firestore 6.30 is default to true

export default firebase.firestore();

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }