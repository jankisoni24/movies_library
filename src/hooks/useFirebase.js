import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import axios from 'axios';

const useFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;
            const reqBody = {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            }
            axios.post('http://localhost:3000/api/create_user', reqBody)
            .then(response => {
                console.log(response);
                localStorage.setItem('user', JSON.stringify(response.data));
            });
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };
    const logout = () => {
        localStorage.removeItem('user');
        signOut(auth);
    };
    
    return {
        auth,
        signInWithGoogle,
        logout
    };
}


export default useFirebase;