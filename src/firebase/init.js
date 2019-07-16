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
firebaseApp.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export default firebaseApp.firestore();