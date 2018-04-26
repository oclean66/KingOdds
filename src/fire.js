import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAx6A4hFSwSeUI0SUvCUDF8Fpe27mtGi2s",
    authDomain: "oclean66-casper.firebaseapp.com",
    databaseURL: "https://oclean66-casper.firebaseio.com",
    projectId: "oclean66-casper",
    storageBucket: "oclean66-casper.appspot.com",
    messagingSenderId: "665182115697"
  };
firebase.initializeApp(config);
export default firebase;