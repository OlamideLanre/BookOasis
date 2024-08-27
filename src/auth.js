import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const doSignInWihEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    result.user
    return result;
};

export const dosignout = () => {
    return auth.signOut();
}

export const doSendEmailVerification =() => {
    return sendEmailVerification(auth.currentUser)
}