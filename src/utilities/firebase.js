import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, update, connectDatabaseEmulator } from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithCredential, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDoCXZBRbQbj3VKmOjDjHJDnoJ_IseXY7c",
    authDomain: "react-tutorial-497.firebaseapp.com",
    databaseURL: "https://react-tutorial-497-default-rtdb.firebaseio.com",
    projectId: "react-tutorial-497",
    storageBucket: "react-tutorial-497.appspot.com",
    messagingSenderId: "624834066257",
    appId: "1:624834066257:web:eaaf0fa51e4dcc222c0570",
    measurementId: "G-QB0KPS7STP"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const database = getDatabase(firebase)

if (process.env.REACT_APP_EMULATE) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  signInWithCredential(auth, GoogleAuthProvider.credential(
    '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
  ));
}


export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };
  
  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
  };

  
  export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };
  
  const firebaseSignOut = () => signOut(getAuth(firebase));
  
  export { firebaseSignOut as signOut };
  
  export const useAuthState = () => {
    const [user, setUser] = useState();
    
    useEffect(() => (
      onAuthStateChanged(getAuth(firebase), setUser)
    ));
  
    return [user];
  };